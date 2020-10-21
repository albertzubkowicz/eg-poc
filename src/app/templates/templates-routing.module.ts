import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { TemplatesComponent } from './templates.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent,
    children: [{ path: 'create', component: CreateComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
