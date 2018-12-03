import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityCreateComponent } from './entity-create/entity-create.component';
import { EntityInsertComponent } from './entity-insert/entity-insert.component';
import { EntityViewComponent } from './entity-view/entity-view.component';
import { EntityDropComponent } from './entity-drop/entity-drop.component';

const routes: Routes = [
  { path: '', component: EntityCreateComponent, data: { title: 'EntityCreateComponent' } },
  { path: 'entity-create', component: EntityCreateComponent, data: { title: 'EntityCreateComponent' } },
  { path: 'entity-insert', component: EntityInsertComponent, data: { title: 'EntityInsertComponent' } },
  { path: 'entity-view', component: EntityViewComponent, data: { title: 'EntityViewComponent' } },
  { path: 'entity-drop', component: EntityDropComponent, data: { title: 'EntityViewComponent' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
