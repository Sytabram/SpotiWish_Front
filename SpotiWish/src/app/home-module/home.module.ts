
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {PlaylistComponent} from './components/playlist/playlist.component';
import {SuggestComponent} from './components/suggest/suggest.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {ArtistCardComponent} from './components/suggest/artist-card/artist-card.component';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from "@angular/material/slider";
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumCardComponent } from './components/artist/album-card/album-card.component';
import { AlbumComponent } from './components/album/album.component';
import { MusicCardComponent } from './components/album/music-card/music-card.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { PlayingBarSongComponent } from './components/home/playing-bar-song/playing-bar-song.component';
import {IoPlayerModule} from "io-player";
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {NgModule} from "@angular/core";
import { SidebarHomeComponent } from './components/sidebar-home/sidebar-home.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HomeComponent, PlaylistComponent, SuggestComponent, ArtistCardComponent, CreatePlaylistComponent, ArtistComponent, AlbumCardComponent, AlbumComponent, MusicCardComponent, PlayingBarSongComponent, SidebarHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatSliderModule,
    NgxAudioPlayerModule,
    IoPlayerModule,
  ]
})
export class HomeModule {
}
