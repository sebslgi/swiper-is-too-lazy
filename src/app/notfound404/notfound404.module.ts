import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from '../menu/menu.module';

import { Notfound404Component } from './notfound404.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
  ],
  declarations: [Notfound404Component]
})
export class Notfound404Module { }
