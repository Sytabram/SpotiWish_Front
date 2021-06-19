import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./components/admin/admin.component";
import {PageArtisteComponent} from './components/page-artiste/page-artiste.component';
import {PageUserComponent} from './components/page-user/page-user.component';
import {PageAlbumComponent} from './components/page-artiste/page-album/page-album.component';
import {PageEditArtisteComponent} from './components/page-artiste/page-edit-artiste/page-edit-artiste.component';
import {PageEditAlbumComponent} from './components/page-artiste/page-album/page-edit-album/page-edit-album.component';
import {PageAddArtisteComponent} from './components/page-artiste/page-add-artiste/page-add-artiste.component';
import {PageAddAlbumComponent} from './components/page-artiste/page-album/page-add-album/page-add-album.component';
import {PageAddUserComponent} from './components/page-user/page-add-user/page-add-user.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component:PageArtisteComponent},
      { path: 'artistes', component: PageArtisteComponent},
      { path: 'users', component: PageUserComponent},
      { path: 'albums/artiste/:id', component: PageAlbumComponent},
      { path: 'users/add-user', component: PageAddUserComponent},
      { path: 'edit-artiste/:id', component: PageEditArtisteComponent},
      { path: 'add-artiste', component: PageAddArtisteComponent},
      { path: 'edit-album/:idArtiste/albums/:id', component: PageEditAlbumComponent},
      { path: 'add-album/artiste/:id', component: PageAddAlbumComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
