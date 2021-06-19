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
import { PageEditArtisteComponent } from './components/page-artiste/page-edit-artiste/page-edit-artiste.component';
import { PageEditAlbumComponent } from './components/page-artiste/page-album/page-edit-album/page-edit-album.component';
import { CardMusicComponent } from './components/page-artiste/page-album/page-edit-album/card-music/card-music.component';
import { PageAddArtisteComponent } from './components/page-artiste/page-add-artiste/page-add-artiste.component';
import { PageAddAlbumComponent } from './components/page-artiste/page-album/page-add-album/page-add-album.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardAddMusicComponent } from './components/page-artiste/page-album/page-add-album/card-add-music/card-add-music.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { PageAddUserComponent } from './components/page-user/page-add-user/page-add-user.component';


@NgModule({
  declarations: [AdminComponent, PageArtisteComponent, SidebarComponent, PageUserComponent, PageAlbumComponent, PageEditArtisteComponent, PageEditAlbumComponent, CardMusicComponent, PageAddArtisteComponent, PageAddAlbumComponent, DialogDeleteComponent, CardAddMusicComponent, PageAddUserComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AdminRoutingModule,
        MatSidenavModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        Ng2SearchPipeModule,
    ]
})
export class AdminModule {
}
