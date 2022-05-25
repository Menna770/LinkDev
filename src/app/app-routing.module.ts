import { HomePageComponent } from './Core/Components/home-page/home-page.component';
import { NewsItemComponent } from './Core/Components/news-item/news-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'news-item/:id', component: NewsItemComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
