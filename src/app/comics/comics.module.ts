import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicsService } from './comics.service';


@NgModule({
  imports: [
    AppMaterialModule,
    SharedModule
  ],
  declarations: [ComicDetailComponent, ComicListComponent],
  providers: [ ComicsService ],
  exports: [ ComicListComponent ]
})
export class ComicsModule { }
