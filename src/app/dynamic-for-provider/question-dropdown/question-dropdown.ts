import { QuestionBase } from '../question-base/question-base';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
