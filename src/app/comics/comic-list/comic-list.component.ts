import { Component, Input, OnChanges } from '@angular/core';
import { Comic } from '../comic.model';
import { Character } from '../../core/character.model';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnChanges{
  comics: Comic[] = [];
  showProgress = false;

  @Input() character: Character;

  constructor(private comicService: ComicsService) { }

  ngOnChanges() {
    this.comics = [];
    this.showProgress = true;
    if (this.character && this.character.id) {
    this.comicService.getComics(this.character.id).then(this.comicsGetComplete, () => this.showProgress = false);
    }
  }

  trackByComics(index: number, comic: Comic) {
    return comic.id;
  }

  private comicsGetComplete = (comics: Comic[]) => {
    this.showProgress = false;
    this.comics = comics.filter(c => c.digitalId > 0);
    return this.comics;
  }

}
