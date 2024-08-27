import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    this.apiservice.getAllUsers().subscribe({
      next: (res) => {
        console.log("Reponse in fetching complete data = ", res);
        this.downloadExcelFileService.ExportToExcel(res.data, "usersList");
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
}
