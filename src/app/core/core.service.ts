import { Injectable } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import { Character } from './character.model';
import { Thumbnail } from './thumbnail.model';
import { Logger } from './logger.service';

@Injectable()
export class ContextService {

  constructor(private logger: Logger) { }

  getCharacterDetailsUrl(character: Character): string {
    const detail = character.urls.find(url => url.type === 'detail');
    return detail ? detail.url : 'http://marvel';
  }

  getImage(variant: string, thumbnail: Thumbnail): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    } else {
      this.logger.error('Something bad happened; please try again later.', error, environment.settings.appErrorPrefix);
    }
    return throwError(error);
  }


}
