import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'blogs/:title', component:BlogComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
