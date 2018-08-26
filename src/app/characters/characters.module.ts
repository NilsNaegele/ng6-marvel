import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListComponent } from './character-list/character-list.component';

import { ComicsModule } from '../comics/comics.module';
import { AppMaterialModule } from '../app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CharactersService } from './characters.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    ComicsModule,
    SharedModule
  ],
  declarations: [ CharacterCardComponent, CharacterListComponent ],
  providers: [ CharactersService ]
})
export class CharactersModule { }
