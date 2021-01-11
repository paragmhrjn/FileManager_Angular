import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import {PopupComponent} from '../../main/foldersection/popup/popup.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'File Manager';
  newdir = 'New Directory';
  upload = 'Upload file';
  confirmResult = null;
  popupMessage = '';
  isShow = true;
  
  constructor(private SimpleModalService: SimpleModalService) {}
  ngOnInit(): void {
  }

  onShowPopup() {
    this.SimpleModalService.addModal(PopupComponent, {
      title: 'Create Folder',
      createfolder: 'Name: '})
      .subscribe((message) => {
        // We get modal result
        this.popupMessage = message;
        console.log(this.popupMessage);
      });
      
  }

  ontoggleDisplay(){
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }
}
