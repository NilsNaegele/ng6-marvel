import { QuizService } from './quiz.service';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from '../app-material.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [
    AppMaterialModule,
    FlexLayoutModule,
    QuizRoutingModule,
    SharedModule
  ],
  declarations: [QuestionComponent, QuizComponent],
  providers: [ QuizService ]
})
export class QuizModule { }
