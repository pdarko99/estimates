import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service/app.service';

@Component({
  selector: "app-add-service",
  templateUrl: "./add-service.component.html",
  styleUrls: ["./add-service.component.scss"],
})
export class AddServiceComponent implements OnInit {
  selectedservice = {
    service: "",
    description: "",
    dynamicinfo: "",
  };
  constructor(private _as: AppService, private _router:Router) {}

  ngOnInit(): void {}

  addService() {
    this._as
      .addService(this.selectedservice)
      .subscribe((res) => 
    this._router.navigate(["admin/serviceList"]))
      
  }
}
