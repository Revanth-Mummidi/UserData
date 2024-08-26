import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  filename:string = '';
  onUpload() {
    console.log('Upload');
  }
  onFileChange(event:any) {
    this.filename = event.target.files[0].name;
  }
}
