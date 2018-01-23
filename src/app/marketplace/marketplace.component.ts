import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Albums } from './albums.list';
import { Router } from '@angular/router';
import { AlbumServiceService } from '../album.service.service';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumServiceService]
})
export class MarketplaceComponent implements OnInit{

  albums: Album[] = Albums;

  constructor(private router: Router, private albumService: AlbumServiceService){}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }
  goToDetailPage(clickedAlbum: Album) {
  this.router.navigate(['albums', clickedAlbum.id]);
  };
}
