import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app-service/app.service';

@Component({
  selector: "app-getquestions",
  templateUrl: "./getquestions.component.html",
  styleUrls: ["./getquestions.component.scss"],
})
export class GetquestionsComponent implements OnInit {
  userInput: any = [];
  ttprice = 0
  constructor(private _as: AppService) {}

  ngOnInit(): void {
    this._as.decodeUserInput().subscribe(
      res => {
        this.userInput = res.response
        this.userInput.forEach((element: { price: number; }) => {
          this.ttprice += +element.price
        });
      },
      err => console.log(err)
    )
  }
}
