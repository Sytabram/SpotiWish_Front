import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./components/admin/admin.component";
import {PageArtisteComponent} from './components/page-artiste/page-artiste.component';
import {PageUserComponent} from './components/page-user/page-user.component';
import {PageAlbumComponent} from './components/page-artiste/page-album/page-album.component';
import {PageEditUserComponent} from './components/page-user/page-edit-user/page-edit-user.component';
import {PageEditArtisteComponent} from './components/page-artiste/page-edit-artiste/page-edit-artiste.component';
import {PageEditAlbumComponent} from './components/page-artiste/page-album/page-edit-album/page-edit-album.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component:PageArtisteComponent},
      { path: 'artistes', component: PageArtisteComponent},
      { path: 'users', component: PageUserComponent},
      { path: 'artistes/albums', component: PageAlbumComponent},
      { path: 'users/edit-user', component: PageEditUserComponent},
      { path: 'users/add-user', component: PageEditUserComponent},
      { path: 'artistes/edit-artiste', component: PageEditArtisteComponent},
      { path: 'artistes/add-artiste', component: PageEditArtisteComponent},
      { path: 'artistes/albums/edit-album', component: PageEditAlbumComponent},
      { path: 'artistes/albums/add-album', component: PageEditAlbumComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
