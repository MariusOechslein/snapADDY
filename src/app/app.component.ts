import { Component } from '@angular/core';
import { QuestionService } from './dynamic-for-provider/question-service/question.service';
import { QuestionBase } from './dynamic-for-provider/question-base/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'probearbeit_badge_scanning';

  questions$: Observable<QuestionBase<any>[]>;
  providerOptions: any = ["XPress Leads", "Messe Leads", "ProvLeads"];
  providerSelected: string = this.providerOptions[0];

  constructor(private service: QuestionService) {
    this.questions$ = service.getQuestions(this.providerSelected);
  }

  changedProvider() {
    this.questions$ = this.service.getQuestions(this.providerSelected);
  }
}
