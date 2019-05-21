import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogService } from '../DialogeService/dialoge.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-update-upload-table',
  templateUrl: './update-upload-table.component.html',
  styleUrls: ['./update-upload-table.component.css']
})
export class UpdateUploadTableComponent implements OnInit {

  public className: FormControl = new FormControl("",[Validators.required]);
  public classType: FormControl = new FormControl("",[Validators.required]);
  public totolStudents: FormControl = new FormControl("",[Validators.required]);
  public establishmentYear: FormControl = new FormControl("",[Validators.required]);
  public mobileNo: FormControl = new FormControl("",[Validators.required]);
  public alternateNo: FormControl = new FormControl("",[Validators.required]);
  public emailId: FormControl = new FormControl("",[Validators.required]);
  public address: FormControl = new FormControl("",[Validators.required]);
  public branch: FormControl = new FormControl("",[Validators.required]);
  public subBranch: FormControl = new FormControl("",[Validators.required]);
  public certified: FormControl = new FormControl("",[Validators.required]);
  public validity: FormControl = new FormControl("",[Validators.required]);
  public sourceOfReference: FormControl = new FormControl("",[Validators.required]);
  public salesPerson: FormControl = new FormControl("",[Validators.required]);
  public photo: FormControl = new FormControl("",[Validators.required]);
  public remark: FormControl = new FormControl("",[Validators.required]);

  selected: any;
  constructor( @Inject(MAT_DIALOG_DATA) private data:any,
  private dialog:DialogService) { }

  ngOnInit() {
  }
  public updateClass():void{
    this.dialog.confirmDialog(
      ConfirmDialogComponent, 
      "Do You Really Want To Update Class",
      this.reallyUpdate.bind(this)
    );
    
  }
  public deleteClass():void{
    this.dialog.confirmDialog(
      ConfirmDialogComponent, 
      "Do You Really Want To Delete Class",
      this.reallyDelete.bind(this)
    );
  
  }
  public reallyDelete():void{
    this.data.delete(this.data.$class);
  }
  public reallyUpdate():void{
    this.data.update(this.data.$class);
  }
  public close():void{
    this.data.close();
  }

}
