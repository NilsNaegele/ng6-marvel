import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger } from './logger.service';
import { ContextService } from './core.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ Logger, ContextService ]
})
export class CoreModule { }
