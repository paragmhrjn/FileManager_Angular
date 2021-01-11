import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimpleModalModule } from 'ngx-simple-modal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/main/header/header.component';
import { BodyComponent } from './Component/main/body/body.component';
import { SearchBarComponent } from './Component/main/searchbar/searchBar.component';
import { breadcrumbComponent } from './Component/main/breadcrumb/breadcrumb.component';
import { foldersectionComponent } from './Component/main/foldersection/foldersection.component';
import { PopupComponent } from './Component/main/foldersection/popup/popup.component';
import { LoginComponent } from './Component/login';
import { RegisterComponent } from './Component/register';
import { appRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { uploadFileComponent } from './Component/main/uploadFile/uploadFile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SearchBarComponent,
    breadcrumbComponent,
    foldersectionComponent,
    PopupComponent,
    LoginComponent,
    RegisterComponent,
    uploadFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    SimpleModalModule.forRoot({container: "modal-container"}),
    HttpClientModule

  ],
  entryComponents: [
    PopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
