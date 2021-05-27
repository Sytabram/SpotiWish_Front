import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./components/admin/admin.component";
import {PageArtisteComponent} from './components/page-artiste/page-artiste.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin', component:PageArtisteComponent},
      { path: 'artistes', component: PageArtisteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
