import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent,
    title: 'Home',},
  { path: 'about', component: AboutComponent,
    title: 'About', },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: PageNotFoundComponent }
];
