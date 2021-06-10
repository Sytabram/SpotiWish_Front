import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {PlaylistComponent} from './components/playlist/playlist.component';
import {SuggestComponent} from "./components/suggest/suggest.component";
import {ArtistCardComponent} from "./components/suggest/artist-card/artist-card.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";
import {CreatePlaylistComponent} from './components/create-playlist/create-playlist.component';
import {LikedSongComponent} from './components/liked-song/liked-song.component';
import {MyPlaylistComponent} from './components/my-playlist/my-playlist.component';
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      { path: '', redirectTo: "suggest", pathMatch: 'full'},
      { path: 'suggest', component: SuggestComponent },
      { path: 'search', component: SearchComponent },
      { path: 'playlist', component: PlaylistComponent },
      { path: 'artist', component: ArtistComponent },
      { path: 'album', component: AlbumComponent },
      { path: 'createPlaylist', component: CreatePlaylistComponent},
      { path: 'likedSong', component: LikedSongComponent},
      { path: 'myPlaylist', component: MyPlaylistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
