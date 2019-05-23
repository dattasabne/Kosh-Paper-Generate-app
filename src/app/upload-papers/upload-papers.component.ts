import { Component, OnInit } from '@angular/core';
import { UploadTable } from '../upload-table-entity/upload-table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogService } from '../DialogeService/dialoge.service';
import { UpdateUploadTableComponent } from '../update-upload-table/update-upload-table.component';

@Component({
  selector: 'app-upload-papers',
  templateUrl: './upload-papers.component.html',
  styleUrls: ['./upload-papers.component.css']
})
export class UploadPapersComponent implements OnInit {

selected:any;
isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;

constructor(private _formBuilder: FormBuilder,private dialog:DialogService) { }
ngOnInit() {
 this.getAllStudents();
 this.getHeaders();
}
ngAfterViewInit() {
  this.fileChange();
}
public docxSrc:string='';
public allTableDetails:Array<UploadTable> = new Array<UploadTable>();
public allHeaders:Array<UploadTable> = new Array<UploadTable>();

public getHeaders():void {
  let header = <UploadTable>{};
  header.questionNo = "Question No";
  header.dateTime = "Date/Time";
  header.user= "User";
  header.examType = "Exam Type";
  this.allHeaders.push(header);
}
public fileChange():void {
  let file = document.querySelector("#file") as HTMLInputElement;
  file.addEventListener('change',(ev:Event)=>{
    let data = <UploadTable>{};
    let reader = new FileReader();
    reader.onload = (e)=>{
      this.docxSrc = reader.result as any;
    };
    reader.readAsDataURL(file.files[0]);
    this.clickOnRecord(data);
  });
}

public header = <UploadTable>{};
public getAllStudents():void {
  let table = <UploadTable>{};
  table = <UploadTable>{};
  table.questionNo = "40";
  table.dateTime = "03-09-1996";
  table.user= "Lakhan";
  table.examType = "JEE";
  this.allTableDetails.push(table);
  table = <UploadTable>{};
  table.questionNo = "10";
  table.dateTime = "03-09-1996";
  table.user= "Lakhan";
  table.examType = "JEE";
  this.allTableDetails.push(table);
  table = <UploadTable>{};
  table.questionNo = "10";
  table.dateTime = "03-09-1996";
  table.user= "Lakhan";
  table.examType = "JEE";
  this.allTableDetails.push(table);
  table = <UploadTable>{};
  table.questionNo = "10";
  table.dateTime = "03-09-1996";
  table.user= "Lakhan";
  table.examType = "JEE"; 
  this.allTableDetails.push(table);
}
public deleteStudent(table:UploadTable):void{
  alert(table.questionNo + " deleted");
}
public updateStudent(table:UploadTable):void{
  alert(table.questionNo + "updated");
}
public clickOnRecord(table:UploadTable):void{
  this.dialog.updateAndDeletepopup(
    UpdateUploadTableComponent, 
    table,
    this.deleteStudent.bind(this),
    this.updateStudent.bind(this)
  );
 }
}
