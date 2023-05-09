import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { AppService } from '../app-service/app.service';

@Component({
  selector: "app-createqtn",
  templateUrl: "./createqtn.component.html",
  styleUrls: ["./createqtn.component.scss"],
})
export class CreateqtnComponent implements OnInit {
  qtn = {
    type: ""
  }
  selectedQtn = {
    question: "",
    service: this._as.serviceId,
    percentage: "",
    minimum_value: "",
    multiple: false,
  };
  constructor(private _as: AppService, private _router:Router) {}

  ngOnInit(): void { }
  
  selected(event: any) {
    let res = event.target.value;
    if (res === 'multiple') {
      this.selectedQtn.percentage = "";
      this.selectedQtn.minimum_value = "";
      this.selectedQtn.multiple = true;
    }else if(res === "single"){
        this.selectedQtn.percentage = "";
        this.selectedQtn.minimum_value = "";
        this.selectedQtn.multiple = false;
    } else {
        this.selectedQtn.multiple = false;
      
    }
    console.log(event.target.value, 'from evnet')
  }

  createQtn() {
    console.log(this.selectedQtn, "from slected qtn");
    this._as.addqtn(this.selectedQtn).subscribe(
      (res) => {
        console.log(res);
        alert(res.data);
    this._router.navigate(["admin/qtns"]);

      },
      (err) => {
        console.log(err);
        alert(err.message);
      }
    );
  }
}
