import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendOperationsService } from '../backend-operations.service';
import { Entity } from '../models/entity.model';
import { EntityView } from '../models/entity-view.model';
import { EntityStructure } from '../models/entity-structure.model';


@Component({
  selector: 'app-entity-view',
  templateUrl: './entity-view.component.html',
  styleUrls: ['./entity-view.component.scss']
})
export class EntityViewComponent implements OnInit {

  
  entityViewForm: FormGroup;
  entity:Entity;
  entities:Entity[]=[];
  selected:boolean;
  entityStructure:EntityStructure[]=[];
  entityDataHeader:string[]=[];
  entityDataValues:string[]=[];
  entityDataView=new EntityView();
  entityView:EntityView[]=[];
  entityData:Array<any>;

  constructor(private fb: FormBuilder, private backEndOperations: BackendOperationsService) {
    this.entityViewForm = this.fb.group({
      entityname: ''
    })
   }

  ngOnInit() {
    this.selected=false;
    this.backEndOperations.getEntityList()
    .subscribe((entityList:string[])=>{
      entityList.forEach((tableName)=>{
        this.entity=new Entity();
        this.entity.setValue(tableName);
        this.entity.setViewValue(tableName);
        this.entities.push(this.entity);
      }) 
    })
  }

  getTableData(event,tableName)
  {
    this.entityView=[];
    this.selected=true;
    this.backEndOperations.viewEntityData(tableName)
    .subscribe((entityData:Array<any>)=>{
      this.entityData=entityData;
      this.entityData.forEach((entityData)=>{
        this.entityDataHeader=Object.keys(entityData);
      }
      )
      this.entityDataView.setRows(this.entityData);
      this.entityDataView.setColumns(this.entityDataHeader);
      this.entityView.push(this.entityDataView);
    })
}
}
