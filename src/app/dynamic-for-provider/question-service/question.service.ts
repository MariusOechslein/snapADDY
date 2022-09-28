import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../question-dropdown/question-dropdown';
import { QuestionBase } from '../question-base/question-base';
import { TextboxQuestion } from '../question-textbox/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions(provider: string) {
    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'apiKey',
        label: 'API-Subscription-Key',
        type: 'text',
        order: 1
      }),

      new TextboxQuestion({
        key: 'deviceId',
        label: 'DeviceID',
        type: 'text',
        order: 2
      }),
    ];

    const mappingsXPressLeads: any = [
      "Salutation", "Title", "First Name", "Last Name", "Company", "Job Title", "Phone",
      "Mobile", "Fax", "Email", "Website", "Street", "Address Line 2", "ZIP", "City", "Country",
      "State", "VAT", "Industry", "Size", "Revenue", "Xing", "LinkedIn", "Note"
    ];
    const questionsXPressLeads: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'apiKey',
        label: 'API-Subscription-Key',
        type: 'text',
        order: 1
      }),

      new TextboxQuestion({
        key: 'deviceId',
        label: 'DeviceID',
        type: 'text',
        order: 2
      }),

      new DropdownQuestion({
        key: 'secret',
        label: 'Secret',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
    ];
    mappingsXPressLeads.forEach((value: string, i: number) => {
        questionsXPressLeads.push(new TextboxQuestion({
          key: "mappings"+i,
          label: value,
          type: "text",
          order: 2+i
        }))
      });

    const questionsMesseLeads: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'apiKey',
        label: 'API-Subscription-Key',
        type: 'text',
        order: 1
      }),

      new TextboxQuestion({
        key: 'deviceId',
        label: 'DeviceID',
        type: 'text',
        order: 2
      }),

      new DropdownQuestion({
        key: 'secret',
        label: 'Secret',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'deviceId',
        label: 'DeviceID',
        type: 'text',
        order: 4
      }),

      new DropdownQuestion({
        key: 'secret',
        label: 'Secret',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 5
      }),

      new TextboxQuestion({
        key: 'deviceId',
        label: 'DeviceID',
        type: 'text',
        order: 6
      }),

      new TextboxQuestion({
        key: 'deviceId',
        label: 'DeviceID',
        type: 'text',
        order: 7
      }),

      new TextboxQuestion({
        key: 'deviceId',
        label: 'DeviceID',
        type: 'text',
        order: 8
      }),
    ];

    if (provider == "XPress Leads") {
      return of(questionsXPressLeads.sort((a, b) => a.order - b.order));
    } else if (provider == "Messe Leads") {
      return of(questionsMesseLeads.sort((a, b) => a.order - b.order));
    } else {
      return of(questions.sort((a, b) => a.order - b.order));
    }
  }
}
