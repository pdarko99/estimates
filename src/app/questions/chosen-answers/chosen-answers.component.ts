import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-chosen-answers",
  templateUrl: "./chosen-answers.component.html",
  styleUrls: ["./chosen-answers.component.scss"],
})
export class ChosenAnswersComponent implements OnInit {
  constructor() {}
  name =localStorage.getItem("name")!
  price = JSON.parse(localStorage.getItem("price")!)

  ngOnInit(): void {
  }
}
