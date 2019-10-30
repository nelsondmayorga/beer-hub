import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeersComponent} from './pages/beers/beers.component';
import {MyBeersComponent} from './pages/my-beers/my-beers.component';
import {FavoritesComponent} from './pages/favorites/favorites.component';


const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: BeersComponent },
  { path: 'my-beers', component: MyBeersComponent },
  { path: 'my-favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
