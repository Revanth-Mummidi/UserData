import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogContentComponent } from 'src/app/dialog-content/dialog-content.component';
import { ApiService } from 'src/app/services/api-service.service';
import { DownloadExcelFileService } from 'src/app/services/download-excel-file.service';



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  constructor(private apiservice: ApiService , private downloadExcelFileService: DownloadExcelFileService,public dialog: MatDialog) { 
    
  };

  @Input() type: string = '';
  errorMails: string='';

  openDialog(): void {
    this.dialog.open(DialogContentComponent, {
      width: '750px',
      data: { message: this.errorMails }
    });
  }

  filename:string = '';
  isLoading = false;
  onFileChange(event:any) {
    this.isLoading = true;
    this.filename = event.target.files[0].name;
    this.apiservice.uploadFile(event.target.files[0]).subscribe({
      next: (res) => {
        console.log("Response in uploading", res);
        this.isLoading = false;
        location.reload();
        alert("File uploaded successfully");
      },
      error: (error) => {
        if(error.status==400)
          {
            console.log("Error in uploading", error);
             let em=error.error.data;
             this.isLoading =  false;
            this.showDuplicateEmailsAlert(em);
          }
          this.isLoading = false;
      }

    });
  }
  showDuplicateEmailsAlert(errorMails: string[]) {
    this.isLoading=false;
    let duplicateEmails=errorMails;
    if (duplicateEmails.length > 0) {
      const emailList = duplicateEmails.join(',');
      this.errorMails=emailList;
      this.openDialog();
    } else {
      alert("No duplicate emails found.");
    }
  }
  onDownload(){
    this.isLoading = true;
    let body={
      pageNumber:0,
      pageSize:0,
      type:this.type.substring(0,this.type.length-1)
    }
    console.log("Body = ",body);  
    this.apiservice.getCategorizedUsers(body).subscribe({
      next: (res) => {
        const arr = res.data.map((item: any) => {
          return {
            "First Name": item.firstname,
            "Last Name": item.lastname,
            "Email": item.email,
            "DOB": item.dob,
            "Description": item.description,
            "Gender":item.gender,
            "Type":item.type
          };
        }
      );
      console.log("Reponse in fetching complete data = ", arr);
  
        this.downloadExcelFileService.ExportToExcel(arr, "usersList");
        this.isLoading  = false;
        alert("File downloaded successfully");
      },
      error: (error) => {
        console.log("Error in downloading", error);
        this.isLoading = false;
        alert("Error in downloading file");
      }
    });
    // this.downloadExcelFileService.ExportToExcel(this., "usersList");
    console.log("Download");
  }
  onLogout(){
    sessionStorage.removeItem('token');
    location.reload();
  }
}
