import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [TopbarComponent],
  exports: [NgbModule, TopbarComponent, FormsModule, ReactiveFormsModule],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
