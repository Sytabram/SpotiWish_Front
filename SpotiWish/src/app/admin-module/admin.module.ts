import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./components/admin/admin.component";
import { PageArtisteComponent } from './components/page-artiste/page-artiste.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, PageArtisteComponent, SidebarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    FormsModule,
  ]
})
export class AdminModule {
}
