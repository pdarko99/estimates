import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service/app.service';

@Component({
  selector: "app-adminqtninterface",
  templateUrl: "./adminqtninterface.component.html",
  styleUrls: ["./adminqtninterface.component.scss"],
})
export class AdminqtninterfaceComponent implements OnInit {
  qtns: any = [];
  servicename = this._as.servicename;
  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {
    this._as.getQtns().subscribe(
      (res) => {
        console.log(res.response, 'from qtns')
        this.qtns = res.response;
        this._as.qtns = this.qtns
        console.log(this.qtns, "from tis .quet");
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  routeToQtns(qnt: any) {
    this._as.selectedqtn = qnt;
    this._router.navigate(["admin/qtns/update"]);
  }

   routeToqtn() {
    this._router.navigate(["admin/qtn/create"]);

  }

  routeToOptns(opt: any) {
    this._as.selectedoptn = opt;
    this._router.navigate(["admin/optn/update"]);
  }
}
