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
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumCardComponent} from './components/artist/album-card/album-card.component';
import {AlbumComponent} from './components/album/album.component';
import {MusicCardComponent} from './components/album/music-card/music-card.component';
import {CreatePlaylistComponent} from './components/create-playlist/create-playlist.component';
import {PlayingBarSongComponent} from './components/home/playing-bar-song/playing-bar-song.component';
import {IoPlayerModule} from "io-player";
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {NgModule} from "@angular/core";
import {SidebarHomeComponent} from './components/sidebar-home/sidebar-home.component';
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MusicCardAddPlaylistComponent} from './components/create-playlist/music-card-add-playlist/music-card-add-playlist.component';
import {MusicCardSelectedPlaylistComponent} from './components/create-playlist/music-card-selected-playlist/music-card-selected-playlist.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { DialogInfoUserComponent } from './components/sidebar-home/dialog-info-user/dialog-info-user.component';
import {MatButtonModule} from "@angular/material/button";
import { MusicCardPlaylistComponent } from './components/playlist/music-card-playlist/music-card-playlist.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [HomeComponent, PlaylistComponent, SuggestComponent, ArtistCardComponent, CreatePlaylistComponent, ArtistComponent, AlbumCardComponent, AlbumComponent, MusicCardComponent, PlayingBarSongComponent, SidebarHomeComponent, MusicCardAddPlaylistComponent, MusicCardAddPlaylistComponent, MusicCardSelectedPlaylistComponent, DialogInfoUserComponent, MusicCardPlaylistComponent],
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
        MatFormFieldModule,
        Ng2SearchPipeModule,
        MatButtonModule,
        MatTooltipModule,
    ]
})
export class HomeModule {
}
