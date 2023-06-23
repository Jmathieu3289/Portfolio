import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { InfoSectionComponent } from './info-section/info-section.component';
import { ThanksSectionComponent } from './thanks-section/thanks-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    InfoSectionComponent,
    ThanksSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
