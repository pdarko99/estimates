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
import { NgSelectModule } from "@ng-select/ng-select"
import {NgxCaptchaModule } from "ngx-captcha";
import { ServiceListComponent } from './admin/service/service-list.component';
import { AddServiceComponent } from './admin/service/add-service.component';
import { UpdateserviceComponent } from './admin/service/updateservice.component';
import { InputsComponent } from './admin/inputs.component';
import { GetquestionsComponent } from './admin/getquestions/getquestions.component';
import { AdminupdateqtnComponent } from './admin/adminupdateqtn.component';
import { CreateqtnComponent } from './admin/createqtn.component';
import { CreateoptComponent } from './admin/createopt.component';
import { AdminupdateoptComponent } from './admin/adminupdateopt/adminupdateopt.component';
import { AdminqtninterfaceComponent } from './admin/adminqtninterface.component';

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
  {
    path: "admin/serviceList",
    component: ServiceListComponent,
  },

  {
    path: "admin/serviceList/update",
    component: UpdateserviceComponent,
  },

  {
    path: "admin/serviceList/add",
    component: AddServiceComponent,
  },
  {
    path: "admin/userInput",
    component: InputsComponent,
  },
  {
    path: "admin/getQuestions",
    component: GetquestionsComponent,
  },

  {
    path: "admin/qtns",
    component: AdminqtninterfaceComponent,
  },
  {
    path: "admin/qtns/update",
    component: AdminupdateqtnComponent,
  },

  {
    path: "admin/optn/update",
    component: AdminupdateoptComponent,
  },

  {
    path: "admin/optn/create",
    component: CreateoptComponent,
  },

  {
    path: "admin/qtn/create",
    component: CreateqtnComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetqtnComponent,
    ChosenAnswersComponent,
    AppHeaderComponent,
    ServiceListComponent,
    AddServiceComponent,
    UpdateserviceComponent,
    InputsComponent,
    GetquestionsComponent,
    AdminqtninterfaceComponent,
    AdminupdateqtnComponent,
    CreateqtnComponent,
    CreateoptComponent,
    AdminupdateoptComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    NgxCaptchaModule,
    NgSelectModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
