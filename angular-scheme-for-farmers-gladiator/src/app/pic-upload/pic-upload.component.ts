import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.css']
})


export class PicUploadComponent implements OnInit {


  certificate: any;//File;
  id: any;//number
  message:string;

  constructor(private farmerService:FarmerService ) { }

  ngOnInit(): void {
    this.id =sessionStorage.getItem('lid');
    //this.id=10066;
  }

  onFileChange(event:any) {//event
    this.certificate = event.target.files[0];
  }

  upload() {
    let formData: FormData = new FormData();
    formData.append('id', this.id);
    formData.append('certificate',this.certificate);
    console.log(formData.get('certificate'));//just to check if we have reference to be uploaded
    //code to hit the server
    this.farmerService.picUpload(formData).subscribe(response=>{
      //alert(JSON.stringify(response));
      this.message="UPLOADED SUCCESSFULLY"
    });
  }


}
