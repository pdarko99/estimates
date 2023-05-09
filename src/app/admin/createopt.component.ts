import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service/app.service';

@Component({
  selector: "app-createopt",
  templateUrl: "./createopt.component.html",
  styleUrls: ["./createopt.component.scss"],
})
export class CreateoptComponent implements OnInit {
  qtns = this._as.qtns
  selectedOptn = {
    price: "",
    option: "",
    question: this._as.selectedqtn.id,
    currency: "",
    next_qtn: "",
    symbol: "",
  };
  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {}

  createoptn() {
    console.log(this.selectedOptn);
    this._as.addOptn(this.selectedOptn).subscribe(
      (res) => {
        alert(res.data);
        this.initializeOption();
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  initializeOption() {
    (this.selectedOptn.price = ""), (this.selectedOptn.option = "");
  }

  goToqnts() {
    this._router.navigate(["admin/qtns"]);
  }
}
