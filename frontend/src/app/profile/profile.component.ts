import { Component, OnInit } from '@angular/core';
import { AREAS } from './areas';
import { BackendApiService } from '../services/backend-api.service'
import { Area } from './area.module';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { DeleteDialogComponent } from  '../delete-dialog/delete-dialog.component'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  areas = AREAS;
	profile: any;
	repos: number;
  lastUpdated: string;
  editedField = true;
  editedText = false;
  about: string;
  data = {
    title : '',
    content : '',
  }


	constructor(
    private dialog: MatDialog,
    private backendService: BackendApiService
  ) { }



	ngOnInit(): void {
    this.about = document.getElementById("about").textContent

  }
  //button method
  onEditAboutClicked(about) {
    this.editedField = !this.editedField
    this.editedText = !this.editedText

  }
  onAddClicked(){

    this.openDialog(AddDialogComponent,this.data,'70%','75%')
  }
  onEditClicked(area : Area){
    this.openDialog(EditDialogComponent,area,'70%','75%')


  }

  onDeleteClicked(area: Area){

    this.openDialog(DeleteDialogComponent,area,'25%',"15%")
  }

  editAbout(about){
    this.editedField = !this.editedField
    this.editedText = !this.editedText
    //2DO Add put API


  }

//supporting method

  openDialog(dialog, data : any, width,height){ // hadi dialog ta3 click hadik
    const editDialog  = this.dialog.open(dialog, {
      // width:  width,//70
      // height: height,//75
       data: data,


    });

    editDialog.afterClosed().subscribe(result => {

    });
  }

}//class
