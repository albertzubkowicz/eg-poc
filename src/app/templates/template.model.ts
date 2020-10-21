export enum TemplateComponentType {
  TEXT_ONE_LINE = 'Text - one line',
  TEXT_MULTILINE = 'Text - multiline',
  TEXT_RICH = 'Text - rich',
  SELECT_FROM_LIST_SINGLE = 'Select from list - single',
  SELECT_FROM_LIST_MULTI = 'Select from list - multi',
  CHECKLIST = 'Checklist',
  RADIOBUTTONS = 'Radiobuttons',
  DATE_TIME_PICKER = 'Date/time picker',
}

export interface TemplateFieldCredentials {
  id: number;
  name: string;
  label: string;
  type: TemplateComponentType;
}

export class TemplateField {
  readonly id: number;
  readonly name: string;
  readonly label: string;
  readonly type: TemplateComponentType;
  constructor(cred: TemplateFieldCredentials) {
    this.id = cred.id;
    this.name = cred.name;
    this.label = cred.label;
    this.type = cred.type;
  }
}

export interface TemplateCredentials {
  id: number;
  name: string;
  type: string;
  availableFrom: Date;
  availableTo: Date;
  fields: TemplateField[];
}

export class Template {
  readonly id: number;
  readonly name: string;
  readonly type: string;
  readonly availableFrom: Date;
  readonly availableTo: Date;
  readonly fields: TemplateField[];
  constructor(cred: TemplateCredentials) {
    this.id = cred.id;
    this.name = cred.name;
    this.type = cred.type;
    this.availableFrom = cred.availableFrom;
    this.availableTo = cred.availableTo;
    this.fields = cred.fields;
  }
}
