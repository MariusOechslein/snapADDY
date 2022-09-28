import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base/question-base';
import { QuestionControlService } from './question-control-service/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-for-provider.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicForProviderComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  @Input() provider: string = "";
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
