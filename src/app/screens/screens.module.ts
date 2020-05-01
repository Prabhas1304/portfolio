import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';


@NgModule({
  declarations: [HomeScreenComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
