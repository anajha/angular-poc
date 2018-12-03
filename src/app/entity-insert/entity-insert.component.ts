import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, FormArray } from '@angular/forms';
import { BackendOperationsService } from '../backend-operations.service';
import { Router } from '@angular/router';
import { Entity } from '../models/entity.model';
import { EntityStructure } from '../models/entity-structure.model';
import { Insert } from '../models/insert.model';
import { AlertsService } from 'angular-alert-module';

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
  entityData=new Map();
  insert:Insert=new Insert();
  
  
  constructor(private alerts: AlertsService,private fb: FormBuilder,private router: Router, private backEndOperations: BackendOperationsService) {
    this.entityInsertForm = this.fb.group({
      entityname: '',
      columnValue:''
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

  saveEntity(entityName)
  {
    const convMap={};
    this.entityData.forEach((val:string,key:string)=>{
      convMap[key]=val;
    })
    this.insert.setTbName(entityName);
    this.insert.setData(convMap);
    console.log(this.insert);
    this.backEndOperations.saveEntityData(this.insert)
    .subscribe((message:string)=>{
      this.alerts.setDefaults('timeout',5);
      this.alerts.setMessage(message,'success');
    })
    this.entityData=new Map();
  }

  generateMap(columnName,columnValue){
    console.log(columnName,columnValue);
    this.entityData.set(columnName,columnValue);
  }

}
