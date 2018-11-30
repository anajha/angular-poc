import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, FormArray } from '@angular/forms';
import { BackendOperationsService } from '../backend-operations.service';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';
import { Entity } from '../models/entity.model';
import { EntityStructure } from '../models/entity-structure.model';

@Component({
  selector: 'app-entity-insert',
  templateUrl: './entity-insert.component.html',
  styleUrls: ['./entity-insert.component.scss']
})
export class EntityInsertComponent implements OnInit {

  entityInsertForm: FormGroup;
  entity:Entity;
  entities:Entity[]=[];
  selected:boolean;
  entityStructure:EntityStructure[]=[];
  
  constructor(private fb: FormBuilder,private router: Router, private backEndOperations: BackendOperationsService) {
    this.entityInsertForm = this.fb.group({
      entityname: ''
    })
   }

  ngOnInit() {
    this.selected=false;
    this.backEndOperations.getEntityList()
    .subscribe((entityList:string[])=>{
  
      entityList.forEach((tableName)=>{
        console.log(tableName);
        this.entity=new Entity();
        this.entity.setValue(tableName);
        this.entity.setViewValue(tableName);
        console.log(this.entity);
        this.entities.push(this.entity);
      }) 
    })

  }

  getTableStructure(event,tableName)
  {
    this.selected=true;
    console.log(tableName);
    this.backEndOperations.getEntityStructure(tableName)
    .subscribe((entityStructure:EntityStructure[])=>{
      this.entityStructure=entityStructure;
    })
  }

  saveEntity()
  {
    
  }

}
