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
  inputChangeValue = 0;
  dynamich2 = "We are dynamic";
  dynamicImg = "assets/images/azLogo.png";
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
  dynamicInfo = "";
  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {
    this.dynamicInfo = this._as.dynamicInfo;
    console.log(this.dynamicInfo, "from info");
    this._as.getQtns().subscribe(
      (res) => {
        console.log(res, "from res");
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

  inputChange(
    event: any,
    next_qtn: string | undefined,
    mainqtn: string,
    i: number
  ) {
    // console.log("changed")
    const checkboxes =
      this.form.nativeElement.querySelectorAll("input[type=radio]");
    this.currency.price = 0;

    for (const checkbox of checkboxes) {
      const price = checkbox.dataset.price;

      if (checkbox.checked) {
        this.currency.price += +price;
      }
    }

    const inputfield =
      this.form.nativeElement.querySelectorAll("input[type=number]");

    for (const inputs of inputfield) {
      const minimum_value = inputs.dataset.price;
      const percentage = inputs.name;

      if (inputs.value) {
        if ((percentage / 100) * inputs.value > minimum_value) {
          this.currency.price += (percentage / 100) * inputs.value;
        } else {
          this.currency.price += +minimum_value;
        }
      }
    }

    const radioboxes = this.form.nativeElement.querySelectorAll(
      "input[type=checkbox]"
    );
    for (const checkbox of radioboxes) {
      const price = checkbox.dataset.price;

      if (checkbox.checked) {
        this.currency.price += +price;
      }
    }

    this.forSub(next_qtn, mainqtn, i);
  }

  submitForm() {
    console.log( "from data afdfdadsf again oo");

    const checkboxes =
      this.form.nativeElement.querySelectorAll("input[type=radio]");
    const checks = this.form.nativeElement.querySelectorAll(
      "input[type=checkbox]"
    );
     const inputfield =
      this.form.nativeElement.querySelectorAll("input[type=number]");
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

    for (const checkbox of checks) {
       const name = checkbox.name;
       const id = checkbox.id;

       if (checkbox.checked) {
         if (!data[name]) {
           data[name] = null;
         }
         if (data[name]) {
           data[name] = data[name] + "," + id;
           
         } else {
           
           data[name] = id;
         }
       }
    }

    for (const inputs of inputfield) { 
      const qtn = inputs.id;
      if (inputs.value) {
        data[qtn] = inputs.value
      }
    }
    console.log(data, 'from data afdfdadsf again oo')
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

  forSub(next_qtn: string | undefined, mainqtn: string, i: number) {
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

    const radioboxes = this.form.nativeElement.querySelectorAll(
      "input[type=checkbox]"
    );
    for (const checkbox of radioboxes) {
      const price = checkbox.dataset.price;

      if (checkbox.checked) {
        this.currency.price += +price;
      }
    }
    // this.inputChange(undefined)
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
