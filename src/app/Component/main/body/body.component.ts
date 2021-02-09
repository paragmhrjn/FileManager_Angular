import { Component } from '@angular/core';
import {PopupComponent} from '../../main/foldersection/popup/popup.component';
import { SimpleModalService } from 'ngx-simple-modal';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']

})

 export class BodyComponent{
  newdir = 'New Directory';
  confirmResult = null;
  popupMessage = '';
  list: any[] = [];
  
  
  constructor(private SimpleModalService: SimpleModalService){}
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

 
 }