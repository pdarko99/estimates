import { style, transition, trigger, animate } from "@angular/animations";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app-service/app.service";

@Component({
  selector: "app-getqtn",
  templateUrl: "./getqtn.component.html",
  styleUrls: ["./getqtn.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("700ms", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class GetqtnComponent implements OnInit {
  @ViewChild("form") form!: ElementRef;
  @ViewChild("submitButton") submitButton!: ElementRef;
  showSubmitbtn = false;
  arrayLength!: number;
  isLoading = true;
  errorMessage = "";
  progressvalue = 0;
  ivalue = 0;
  currency = {
    symbol: "₹",
    price: 0,
  };

  qtns: any = [];
  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {
    this._as.getQtns().subscribe(
      (res) => {
        res.response[0].sub = false;
        this.qtns = res.response;
        this.arrayLength = this.qtns.length;
        this.isLoading = false;

        // this.progressvalue = (1/this.arrayLength) * 100
      },
      (err) => {
        console.log(err, "from err");
        this.errorMessage = err;
        this.isLoading = false;
      }
    );
  }

  submitForm() {
    const checkboxes =
      this.form.nativeElement.querySelectorAll("input[type=radio]");
    const data: any = {};

    for (const checkbox of checkboxes) {
      const name = checkbox.name;
      const id = checkbox.id;

      if (checkbox.checked) {
        if (!data[name]) {
          data[name] = null;
        }
        data[name] = id;
      }
    }
    let userInput = {
      userId: localStorage.getItem("userId"),
      inputs: data,
      service_name: localStorage.getItem("service_name"),
    };
    localStorage.setItem("price", JSON.stringify(this.currency.price));

    this._router.navigate(["thankyou"]);
    this._as.postUserInput(userInput).subscribe(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  forSub(next_qtn: string, mainqtn: string, i: number) {
    if (next_qtn) {
      let index = this.qtns.findIndex((i: any) => i.id === next_qtn);
      if (index !== -1) {
        this.qtns[index].sub = false;
        let main_question = this.qtns.findIndex((i: any) => i.id === mainqtn);
        let question = this.qtns[main_question];
        question.options.forEach((element: any) => {
          if (element.next_qtn !== next_qtn) {
            let sub_qtn = this.qtns.findIndex(
              (i: any) => i.id === element.next_qtn
            );
            if (this.qtns[sub_qtn] !== undefined) {
              this.qtns[sub_qtn].sub = true;
            }
          }
        });
      }
    } else {
      let main_question = this.qtns.findIndex((i: any) => i.id === mainqtn);
      let question = this.qtns[main_question];
      question.options.forEach((element: any) => {
        if (element.next_qtn !== next_qtn) {
          let sub_qtn = this.qtns.findIndex(
            (i: any) => i.id === element.next_qtn
          );
          if (this.qtns[sub_qtn] !== undefined) {
            this.qtns[sub_qtn].sub = true;
          }
        }
      });
      console.log("yes");
      let num = this.checkmain(i);
      i = num;
      num > this.arrayLength - 1 ? (num -= 1) : (num = num);
      if (this.qtns[num].main) {
        this.qtns[num].sub = false;
        console.log(this.qtns[num], "from mine");
      }
    }
    i === this.arrayLength ? (this.showSubmitbtn = true) : null;
    let sub_value = this.qtns.filter((i: any) => {
      return i.sub === false;
    });
    let main_value = sub_value.filter((i: any) => {
      return i.main === true;
    }).length;
    let basevalue = this.qtns.filter((i: any) => {
      return i.main === true;
    }).length;

    this.progressvalue = (main_value / basevalue) * 100;
  }

  calcPrice() {
    const checkboxes =
      this.form.nativeElement.querySelectorAll("input[type=radio]");
    this.currency.price = 0;

    for (const checkbox of checkboxes) {
      const price = checkbox.dataset.price;

      if (checkbox.checked) {
        this.currency.price += +price;
      }
    }
  }

  checkmain(i: number) {
    i += 1;
    if (this.qtns[i] !== undefined) {
      if (!this.qtns[i].main) {
        i += 1;
        if (this.qtns[i] !== undefined) {
          if (!this.qtns[i].main) {
            this.checkmain(i);
          }
        }
      }
    }

    return i;
  }

  proceed() {
    this.submitButton.nativeElement.click();
  }
}
