import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app-service/app.service';

@Component({
  selector: "app-chosen-answers",
  templateUrl: "./chosen-answers.component.html",
  styleUrls: ["./chosen-answers.component.scss"],
})
export class ChosenAnswersComponent implements OnInit {
  constructor(private _as: AppService) {}
  name = localStorage.getItem("name")!;
  price = JSON.parse(localStorage.getItem("price")!);
  dynamicInfo = ''
  ngOnInit(): void {
    this.dynamicInfo = this._as.dynamicInfo;
  }
}
