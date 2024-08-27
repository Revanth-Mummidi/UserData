import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-viewcards',
  templateUrl: './viewcards.component.html',
  styleUrls: ['./viewcards.component.scss']
})
export class ViewcardsComponent implements OnInit{
  constructor(private apiservice:ApiService) { }
    @Input() category:any;
    data:any = [];
  page = 1;
  limit = 4;
  isLoading=false;
  ngOnInit(){
      this.getPaginatedData();
  }
  getPaginatedData(){ 
    this.isLoading=true;
    let body={
      pageNumber:this.page,
      pageSize:this.limit,
      type:this.category.substring(0,this.category.length-1)
    }
   this.apiservice.getCategorizedUsers(body).subscribe(
     (res:any)=>{
      console.log("REsponse=",res.data);
      res.data.forEach((element: any) => {
        this.data.push(element);
      });
       this.page=this.page+1;
       console.log("Data = ",this.data);
       this.isLoading=false;
     },
     (error)=>{
       console.log(error);
       this.isLoading=false;
     }
   )
  }
   


}
