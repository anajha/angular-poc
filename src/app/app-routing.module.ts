import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityCreateComponent } from './entity-create/entity-create.component';

const routes: Routes = [
  { path: '', component: EntityCreateComponent, data: { title: 'EntityCreateComponent' } },
  { path: 'entity-create', component: EntityCreateComponent, data: { title: 'EntityCreateComponent' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
