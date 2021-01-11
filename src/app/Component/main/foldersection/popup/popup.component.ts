import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface PopupModel {
  title:string;
  createfolder:string;
}

@Component({
  selector: 'popup',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{title || 'Popup'}}</h4>
      </div>
      <div class="modal-body">
        <label>{{createfolder}}</label>
        <input type="text" class="form-control" [(ngModel)]="message" name="name" autocomplete="off" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" (click)="close()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="apply()">Confirm</button>
      </div>
    </div>
  `
})
export class PopupComponent extends SimpleModalComponent<PopupModel, string> implements PopupModel {
  title: string;
  createfolder: string;
  message: string = '';

  @Output() messageEvent = new EventEmitter<string>();
  constructor() {
    super();
  }
  apply() {
    this.result = this.message;
    this.close();
    console.log(this.message);
    this.messageEvent.emit(this.message)
  }

  

  
}
