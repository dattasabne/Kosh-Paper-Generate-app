import { Injectable, Type, Component } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Injectable({
    providedIn:'root'
})
export class DialogService{
    public dialogRef:any = null;
    public constructor(private dialog:MatDialog){}
    
    public updateAndDeletepopup(
        type:any,classData:any,updateCallBack:(res:any)=>void,
        deletecallBack:(res:any)=>void
    ):void{
        if(this.dialogRef == null){
            this.dialogRef = this.dialog.open(type,{
                height:"90%",
                width:"80%",
                data:{
                    delete:(data:any)=>{
                        deletecallBack(data);
                        this.dialogRef.close();
                        this.dialogRef = null;
                    } ,
                    update:(data:any)=>{
                        updateCallBack(data);
                        this.dialogRef.close();
                        this.dialogRef = null;
                    },
                    close:()=>{
                        this.dialogRef.close();
                        this.dialogRef = null;
                    },
                    $class:classData
                }
            });
        }
    }
    public confirmRef:any = null;
    public confirmDialog( type:any, message:string , yesCallBack:()=>void ):void{
        if(this.confirmRef == null){
            this.confirmRef = this.dialog.open(type,{
                height:"300px",
                width:"400px",
                data:{  
                    message:message,
                    yes:()=>{
                        yesCallBack();
                        this.confirmRef.close();
                        this.confirmRef = null;
                    } ,
                    no:()=>{
                        this.confirmRef.close();
                        this.confirmRef = null;
                    }
    
                }
            });
        }
    }
}