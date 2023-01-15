import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetqtnComponent } from './questions/getqtn/getqtn.component';
import { ChosenAnswersComponent } from './questions/chosen-answers/chosen-answers.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppHeaderComponent } from './app-header/app-header.component'
import {NgxIntlTelInputModule} from "ngx-intl-tel-input"
import {NgSelectModule} from "@ng-select/ng-select"

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "questions",
    component: GetqtnComponent,
  },
  {
    path: "thankyou",
    component: ChosenAnswersComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetqtnComponent,
    ChosenAnswersComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    NgSelectModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
