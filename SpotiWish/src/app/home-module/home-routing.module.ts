import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";



const routes: Routes = [
  {
    path: 'home',
    //canActivate: [AuthGuard],
    component: HomeComponent,
    /*children: [
      { path: '', component: PhotosComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'album', component: AlbumComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'books', component: BooksComponent },
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
