import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';

import { MenuModule } from '../menu/menu.module';

import { PicsComponent } from './pics.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    SwiperModule,
  ],
  declarations: [PicsComponent]
})
export class PicsModule { }
