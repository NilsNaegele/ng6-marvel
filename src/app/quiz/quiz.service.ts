import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { ContextService } from '../core/core.service';
import { QUESTIONS } from '../quiz/question.data';
import { environment } from '../../environments/environment';
import { Character } from '../core/character.model';
import { QuestionModel } from '../quiz/question.model';

@Injectable()
export class QuizService {

  private questions = QUESTIONS;

  constructor(private http: HttpClient, private contextService: ContextService) { }

  getHero(): Promise<Character> {
    const ranking: {[key: string]: number} = {};

    this.questions.forEach(question => {
      this.match((question.answer === 'yes') ? question.positive : question.negative, ranking);
    });

    const heroId = Object.keys(ranking).reduce((a: string, b: string) => ranking[a] > ranking[b] ? a : b);

    return this.http
               .get<Character>(`${environment.apiUrl}characters/${heroId}`)
               .pipe(
                 map((response: any) => response.data.results[0]),
                 catchError(this.contextService.handleError)
               )
               .toPromise();

  }

  getQuestions(): QuestionModel[] {
    return this.questions;
  }

  setAnswer(question: QuestionModel, answer: 'yes' | 'no') {
    this.questions.find(qs => qs.no === question.no).answer = answer;
  }

  private match(arr: string[], data: {[key: string]: number}) {
    arr.forEach(name => {
      if (!data[name]) {
        data[name] = 100 / arr.length;
      } else {
        data[name] += 100 / arr.length;
      }
    });
  }

}
