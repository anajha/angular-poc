import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BackendOperationsService } from '../backend-operations.service';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';
import { Create } from '../models/create.model';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  entityCreateForm: FormGroup;
  columnpresent: boolean;
  create:Create=new Create();
  columnMap:Map<string,string>;

  constructor(private alerts: AlertsService,private fb: FormBuilder,private router: Router, private backEndOperations: BackendOperationsService) {
    this.entityCreateForm = this.fb.group({
      entityname: '',
      attributes: this.fb.array([])
    })
   }

  ngOnInit() {
    this.columnpresent=false;
  }

  get attributeForms() {
    return this.entityCreateForm.get('attributes') as FormArray
  }

  addAttributes() {

    const columns = this.fb.group({ 
      columnname: [],
      datatype: []
    })

    this.attributeForms.push(columns);
    this.columnpresent=true;
  }

  deleteAttribute(i) {
    this.attributeForms.removeAt(i)
  }

  createEntity():void{
    this.columnMap=new Map();
    this.create.setTbName(this.entityCreateForm.value.entityname);

    for(let attribute of this.entityCreateForm.value.attributes)
    {
        this.columnMap.set(attribute.columnname,attribute.datatype);
    }
    const convMap={};
    this.columnMap.forEach((val:string,key:string)=>{
      convMap[key]=val;
    })
    this.create.setColumns(convMap);
    this.backEndOperations.createEntity(this.create)
    .subscribe((message:string)=>{
      this.alerts.setDefaults('timeout',5);
      this.alerts.setMessage(message,'success');
    })
    }
  }


