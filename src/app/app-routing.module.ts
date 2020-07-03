import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
  {path:'signIn', component:SignInComponent},
  {path:'homePage',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
