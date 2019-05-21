import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material-module';
import { NavigationComponent } from './navigation/navigation.component';
import { GenerateComponent } from './generate/generate.component';
import { UploadPapersComponent } from './upload-papers/upload-papers.component';
import { UpdateUploadTableComponent } from './update-upload-table/update-upload-table.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    GenerateComponent,
    UploadPapersComponent,
    UpdateUploadTableComponent,
    ConfirmDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
     
      {
      path: 'generate',
      component: GenerateComponent
      },

      {
      path: 'upload-papers',
      component: UploadPapersComponent
      },
    ])
  ],
  exports:[
    MaterialModule
  ]
  ,
  providers: [],
  entryComponents: [UpdateUploadTableComponent,ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
