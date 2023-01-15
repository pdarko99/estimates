import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServiceComponent } from './add-service/add-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ReadServiceComponent } from './read-service/read-service.component';



@NgModule({
  declarations: [
    AddServiceComponent,
    UpdateServiceComponent,
    ReadServiceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
