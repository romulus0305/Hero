import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageDetailesComponent } from './language-detailes/language-detailes.component';


@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageDetailesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
