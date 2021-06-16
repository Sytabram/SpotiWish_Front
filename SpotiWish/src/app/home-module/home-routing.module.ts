import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PlaylistComponent} from './components/playlist/playlist.component';
import {SuggestComponent} from "./components/suggest/suggest.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";
import {CreatePlaylistComponent} from './components/create-playlist/create-playlist.component';
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      { path: '', redirectTo: "suggest", pathMatch: 'full'},
      { path: 'suggest', component: SuggestComponent },
      { path: 'playlist/:id', component: PlaylistComponent },
      { path: 'artist/:id', component: ArtistComponent },
      { path: 'album/:id', component: AlbumComponent },
      { path: 'createPlaylist', component: CreatePlaylistComponent},
    ]
  },
  {
    path: 'notSubscribed',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: "best10musics", pathMatch: 'full'},
      { path: 'best10musics', component: SuggestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
