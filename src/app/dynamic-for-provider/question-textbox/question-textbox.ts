import { QuestionBase } from '../question-base/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
