import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './components/search/search.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

@NgModule({
  declarations: [HomeComponent,  SearchComponent, PlaylistComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule
    ]
})
export class HomeModule {
}
