import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./components/admin/admin.component";
import { PageArtisteComponent } from './components/page-artiste/page-artiste.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { PageUserComponent } from './components/page-user/page-user.component';
import {MatIconModule} from '@angular/material/icon';
import { PageAlbumComponent } from './components/page-artiste/page-album/page-album.component';
import { PageEditUserComponent } from './components/page-user/page-edit-user/page-edit-user.component';
import { PageEditArtisteComponent } from './components/page-artiste/page-edit-artiste/page-edit-artiste.component';
import { PageEditAlbumComponent } from './components/page-artiste/page-album/page-edit-album/page-edit-album.component';
import { CardMusicComponent } from './components/page-artiste/page-album/page-edit-album/card-music/card-music.component';


@NgModule({
  declarations: [AdminComponent, PageArtisteComponent, SidebarComponent, PageUserComponent, PageAlbumComponent, PageEditUserComponent, PageEditArtisteComponent, PageEditAlbumComponent, CardMusicComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
  ]
})
export class AdminModule {
}
