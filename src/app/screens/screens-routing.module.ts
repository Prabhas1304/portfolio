import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeScreenComponent} from "./home-screen/home-screen.component";
import {ScreenAboutComponent} from "./screen-about/screen-about.component";


const routes: Routes = [
  {path: '', component: HomeScreenComponent},
  {path:'about', component: ScreenAboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
