import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service/app.service';

@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.component.html",
  styleUrls: ["./service-list.component.scss"],
})
export class ServiceListComponent implements OnInit {
  serviceList: any[] = [];
  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this._as.getService().subscribe((res) => {
      this.serviceList = res.data;
      console.log(this.serviceList);
    });
  }

  routeToqtns(s:string, service:string) {
    this._as.serviceId = s;
    this._as.servicename = service;
    this._router.navigate(["admin/qtns"]);
  }

  routeToEdit(i: any) {
    this._as.selectedService = i;
    this._router.navigate(["admin/serviceList/update"]);
  }
}
