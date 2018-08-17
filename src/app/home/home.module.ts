import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from '../menu/menu.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
