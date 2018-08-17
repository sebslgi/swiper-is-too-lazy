import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicsResolver } from './pics/pics-resolver.service';

import { PicsComponent } from './pics/pics.component';
import { HomeComponent } from './home/home.component';
import { Notfound404Component } from './notfound404/notfound404.component';

const routes: Routes = [
  {
    path: 'pics/:animal',
    component: PicsComponent,
    resolve: { animal: PicsResolver },
  },
  {
    path: 'pics',
    component: PicsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: Notfound404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PicsResolver],
})
export class AppRoutingModule { }
