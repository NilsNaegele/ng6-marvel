import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    CharacterDetailComponent,
    CommonModule,
    FormsModule
  ],
  declarations: [CharacterDetailComponent]
})
export class SharedModule { }
