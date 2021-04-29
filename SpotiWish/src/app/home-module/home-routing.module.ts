import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {PlaylistComponent} from './components/playlist/playlist.component';
import {SuggestComponent} from "./components/suggest/suggest.component";

const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      { path: '', component: SuggestComponent },
      { path: 'search', component: SearchComponent },
      { path: 'playlist', component: PlaylistComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
