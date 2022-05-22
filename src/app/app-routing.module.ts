import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  //Try calling these urls into browser without using routerlinks you will able to call them.
  { path: '', component: WelcomeComponent },  //empty dentoe home page or defualt route, if this is commented the last one will becalled i.e. ** 
  { path: 'home', component: WelcomeComponent },
  { path: 'login/signup', component: SignupComponent },
  { path: 'login/:username', component: LoginComponent },  //more speciifc routes
  { path: 'login', component: LoginComponent },  //this must come next to login/:username' since order matters
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: PagenotfoundComponent },  //any url in adrdress bar this must be kept last url 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
