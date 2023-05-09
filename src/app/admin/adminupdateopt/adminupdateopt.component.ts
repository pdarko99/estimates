import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service/app.service';

@Component({
  selector: "app-adminupdateopt",
  templateUrl: "./adminupdateopt.component.html",
  styleUrls: ["./adminupdateopt.component.scss"],
})
export class AdminupdateoptComponent implements OnInit {
  selectedOptn = this._as.selectedoptn;
  constructor(private _as: AppService, private _router:Router) {}

  ngOnInit(): void {
    console.log(this._as.selectedoptn, "fro sle otptin");
  }

  updateoptn() {
     this._as.updateOptn(this.selectedOptn).subscribe(
      res => {
        console.log('from data')
         alert(res.data)
    this._router.navigate(["admin/qtns"]);
         
      },
      err => {
        alert(err.message)
      }
    )
  }

  deleteopt(){
     this._as.deleteoptn().subscribe(
      res => {
         alert(res.data)
    this._router.navigate(["admin/qtns"]);
         
      },
      err => {
        alert(err.message)
      }
    )
  }
}
