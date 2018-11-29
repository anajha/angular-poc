import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityCreateComponent } from './entity-create/entity-create.component';
import { EntityInsertComponent } from './entity-insert/entity-insert.component';

const routes: Routes = [
  { path: '', component: EntityCreateComponent, data: { title: 'EntityCreateComponent' } },
  { path: 'entity-create', component: EntityCreateComponent, data: { title: 'EntityCreateComponent' } },
  { path: 'entity-insert', component: EntityInsertComponent, data: { title: 'EntityInsertComponent' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
