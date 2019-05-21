import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GenerateTable } from '../generate-table-entity/generate-table-entity';
import { DialogService } from '../DialogeService/dialoge.service';
import { UploadPapersComponent } from '../upload-papers/upload-papers.component';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

selected:any;
isLinear = false;

  constructor(private dialog:DialogService) { }

  ngOnInit() {
    this.getAllChapters();
    this.getHeaders();
  }
  public docxSrc:string='';
  public allTableDetails:Array<GenerateTable> = new Array<GenerateTable>();
  public allHeaders:Array<GenerateTable> = new Array<GenerateTable>();
  
  public getHeaders():void {
    let header = <GenerateTable>{};
    header.chapterNames = "Chapter Names";
    header.availableQuestion = "Available Question";
    header.requiredQuestion = "Required Question";
    header.total = "Total";
    this.allHeaders.push(header);
  }
  
  public getAllChapters():void {
    let table = <GenerateTable>{};
    table.chapterNames = "Chapter1";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Chapter2";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Chapter3";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Chapter4";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Chapter5";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Total";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Marks (0)";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Total Question to take";
    this.allTableDetails.push(table);
    table = <GenerateTable>{};
    table.chapterNames = "Total Marks (0)";
    this.allTableDetails.push(table);
   }
  
   public preview(table:GenerateTable):void {
    alert(table);
  }
  public upload(table:GenerateTable):void {
    alert(table);
  }
  public clickOnRecord(table:GenerateTable):void {
    this.dialog.updateAndDeletepopup(
      UploadPapersComponent , 
      table,
      this.preview.bind(this),
      this.upload.bind(this)
    );
  }
}
