import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { PlaylistComponent } from './components/playlist/playlist.component';


@NgModule({
  declarations: [HomeComponent, SidebarComponent, SearchComponent, PlaylistComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule
    ]
})
export class HomeModule {
}
