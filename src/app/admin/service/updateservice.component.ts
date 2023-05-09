import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service/app.service';

@Component({
  selector: "app-updateservice",
  templateUrl: "./updateservice.component.html",
  styleUrls: ["./updateservice.component.scss"],
})
export class UpdateserviceComponent implements OnInit {
  selectedservice = this._as.selectedService;

  constructor(private _as: AppService, private _router:Router) {}

  ngOnInit(): void {}

  deleteservice() {
    this._as.deleteService(this.selectedservice.id).subscribe(
      (res) => {
        this._router.navigate(["admin/serviceList"]);
      },
      (err) => {
        alert(err.response);
      }
    );
  }

  updateService() {
    this._as.updateService(this.selectedservice).subscribe(
      (res) => {
               this._router.navigate(["admin/serviceList"]);

      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
