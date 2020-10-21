import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';


@NgModule({
  declarations: [TemplatesComponent, CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    TemplatesRoutingModule,
  ]
})
export class TemplatesModule { }
