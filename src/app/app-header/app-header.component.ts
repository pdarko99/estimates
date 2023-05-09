import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"],
})
export class AppHeaderComponent implements OnInit {
  constructor(private _router:Router) {}

  ngOnInit(): void {}

  routeToHome() {
        this._router.navigate(["home"]);
    
  }
}
