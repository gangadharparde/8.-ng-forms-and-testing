import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LightswitchComponent } from './lightswitch/lightswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ContactusComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    SignupComponent,
    LightswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule  //for Module automatically added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
