import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {SearchComponent} from './components/search/search.component';
import {PlaylistComponent} from './components/playlist/playlist.component';
import {SuggestComponent} from './components/suggest/suggest.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [HomeComponent, SearchComponent, PlaylistComponent, SuggestComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class HomeModule {
}
