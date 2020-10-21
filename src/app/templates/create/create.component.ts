import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  TemplateComponentType,
  TemplateField,
  TemplateFieldCredentials,
} from './../template.model';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  showFieldConfiguration = false;
  templateComponentType = TemplateComponentType;
  model;
  fieldMock: TemplateFieldCredentials = {
    id: 0,
    name: 'Example name',
    type: TemplateComponentType.TEXT_RICH,
    label: 'Example field label',
  };
  currentFields: TemplateField[] = [this.fieldMock];
  editedField: TemplateField;

  fieldForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    label: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });
  templateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    type: new FormControl(''),
    availableFrom: new FormControl(''),
    availableTo: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  createTemplate(): void {
    // call template service and route to template management
  }

  addField(fieldType: TemplateComponentType): void {
    this.showFieldConfiguration = true;
    this.fieldForm.controls.type.setValue(fieldType);
    this.fieldForm.controls.id.setValue(this.currentFields.length);
  }

  editField(field: TemplateField): void {
    this.showFieldConfiguration = true;
    this.editedField = field;
    this.fieldForm.patchValue(field);
  }

  setField(): void {
    if (this.fieldForm.valid) {
      if (this.editedField) {
        const matchedField = this.currentFields.findIndex(
          (el) => el.id === this.editedField.id
        );
        this.currentFields[matchedField] = {
          ...this.fieldForm.value,
        };
        this.editField = undefined;
      } else if (!this.editedField) {
        const newField = new TemplateField({
          ...this.fieldForm.value,
        });
        this.currentFields.push(newField);
      }
      this.showFieldConfiguration = false;
      // call templates service here
    }
  }

  cancelFieldConfiguration(): void {
    this.showFieldConfiguration = false;
  }

  removeField(fieldId: number): void {
    this.currentFields.splice(fieldId, 1);
  }
}
