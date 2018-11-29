import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInsertComponent } from './entity-insert.component';

describe('EntityInsertComponent', () => {
  let component: EntityInsertComponent;
  let fixture: ComponentFixture<EntityInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
