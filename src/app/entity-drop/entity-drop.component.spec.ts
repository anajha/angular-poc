import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDropComponent } from './entity-drop.component';

describe('EntityDropComponent', () => {
  let component: EntityDropComponent;
  let fixture: ComponentFixture<EntityDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
