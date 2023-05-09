import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "../app-service/app.service";
import { map } from "rxjs";

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styleUrls: ["./inputs.component.scss"],
})
export class InputsComponent implements OnInit {
  userInput: any = [];
  constructor(private _as: AppService, private router: Router) {}

  ngOnInit(): void {
    console.log("we moved");
    this.getUserInput();
    console.log(this.userInput);
  }

  routeToDetail(x: any) {
    this._as.detailview = x;
    this.router.navigate(["admin/getQuestions"]);
  }

  getUserInput() {
    this._as
      .getUserInput()
      .pipe(
        map((x) => {
          let val = x.response;
          // console.log(val, "from val");
          // console.log(val.date);
          let data = val.map((re: any) => {
            let dateObj = re.date;

            if(typeof re.date === "string" && !isNaN(Date.parse(re.date))){
              dateObj = new Date(re.date);
            } else if (!(re.date instanceof Date)) {
              dateObj = null
            }
            return {
              ...re,
              date: dateObj ? new Date(re.date).toLocaleDateString() : null,
            };
         });
        
         return data;
        })
      )

      .subscribe(
        (res) => {
          console.log(".....");
          console.log(res, "from response");
            const sortedDate = res.sort((a: any, b: any) => {
              return a.date - b.date;
            });
          this.userInput = sortedDate;
          console.log(this.userInput);

          console.log(".....");
        },
        (err) => {
          console.log(err, "from error");
        }
      );
  }
}
