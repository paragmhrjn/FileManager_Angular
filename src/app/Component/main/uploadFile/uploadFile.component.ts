import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/Services/uploadFile.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Component({
    selector: 'app-upload',
    templateUrl: './uploadFile.component.html',
    styleUrls: ['./uploadFile.component.css']
  })

  export class uploadFileComponent{
    selectedFiles?: FileList;
    files: any[] = [];
  

  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  // upload(event: any){
    
  // }
  selectFiles(event: { target: { files: FileList; }; }): void {
    const file = event.target.files[0];
    

    const formdata = new FormData();
    formdata.append('file', file);

    this.httpClient.post('http://localhost:3000/Files/Upload', formdata).subscribe((data)=> {
      console.log(data);
  }, error => {console.error(error)})
    };
  

 


  uploadFiles(): void {
  
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.files.push(this.selectedFiles[i]);
      }
    }
  }
  }
