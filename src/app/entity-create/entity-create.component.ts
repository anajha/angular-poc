import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  myForm: FormGroup;
  columnpresent: boolean;
  
  constructor(private fb: FormBuilder) {
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

    const phone = this.fb.group({ 
      columnname: [],
      datatype: []
    })

    this.attributeForms.push(phone);
    this.columnpresent=true;
  }

  deleteAttribute(i) {
    this.attributeForms.removeAt(i)
  }

}
