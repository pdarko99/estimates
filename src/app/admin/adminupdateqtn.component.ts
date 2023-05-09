import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service/app.service';

@Component({
  selector: "app-adminupdateqtn",
  templateUrl: "./adminupdateqtn.component.html",
  styleUrls: ["./adminupdateqtn.component.scss"],
})
export class AdminupdateqtnComponent implements OnInit {
  selectedQtn = this._as.selectedqtn;
  constructor(private _as: AppService, private _router:Router) {}

  ngOnInit(): void {
    console.log(this._as.selectedqtn, "from selctred qtn");
  }

  updateqtn() {
    this._as.updateqtn(this.selectedQtn).subscribe(
      res => {
    this._router.navigate(["admin/qtns"]);

        alert(res.data)
      },
      err => {
        alert(err.message)
      }
    )
  }

  deleteqtn() {
    this._as.deleteqtn().subscribe(
      res =>{
        alert(res.data)
    this._router.navigate(["admin/qtns"]);

      }, err =>{
        alert(err.message)
      }
    )
  }

  routeToqtn() {
    this._router.navigate(["admin/qtn/create"]);

  }

  routeToOptn() {
    this._router.navigate(["admin/optn/create"]);

  }
}

