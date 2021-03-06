import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import {GhProfileService} from './gh-profile.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NotFoundComponent,
    GitProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [GhProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
