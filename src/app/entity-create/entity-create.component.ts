import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BackendOperationsService } from '../backend-operations.service';
import { Router } from '@angular/router';
import { Create } from '../models/create.model';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  myForm: FormGroup;
  columnpresent: boolean;
  create:Create=new Create();
  columnMap:Map<string,string>;
  columns:object;

  
  constructor(private fb: FormBuilder,private router: Router, private backEndOperations: BackendOperationsService) {
    this.myForm = this.fb.group({
      entityname: '',
      attributes: this.fb.array([])
    })
   }

  ngOnInit() {
    this.columnpresent=false;
  }

  get attributeForms() {
    return this.myForm.get('attributes') as FormArray
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
    console.log("Entity Name:-"+this.myForm.value.entityname);
    this.create.setTbName(this.myForm.value.entityname);

    for(let attribute of this.myForm.value.attributes)
    {
        console.log("Column name:-"+attribute.columnname);
        console.log("Column value:-"+attribute.datatype);
        this.columnMap.set(attribute.columnname,attribute.datatype);
    }
    this.columns=new Object();
    this.columns=this.backEndOperations.mapToObj(this.columnMap);
    console.log(this.columns);
    this.create.setColumns(this.columns);
    this.backEndOperations.createEntity(this.create)
    .subscribe((message:string)=>{
      console.log(message)
    })
    }
  }


