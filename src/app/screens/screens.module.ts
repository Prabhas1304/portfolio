import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabGroup, MatTabsModule} from "@angular/material/tabs";
import { ScreenAboutComponent } from './screen-about/screen-about.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [HomeScreenComponent, ScreenAboutComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class ScreensModule { }
