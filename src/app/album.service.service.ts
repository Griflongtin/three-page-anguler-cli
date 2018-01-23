import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { Albums } from './marketplace/albums.list';
@Injectable()
export class AlbumServiceService {

  constructor() { }
  getAlbums() {
  return Albums;
}

}
