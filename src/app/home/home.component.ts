import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app-service/app.service";
import {SearchCountryField,CountryISO,PhoneNumberFormat} from 'ngx-intl-tel-input'

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm | undefined;
  @ViewChild("services") serve: any;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  services: any = [];
  isLoading = true;
  errorMessage = "";
  showErrors = false;
  showIndustryError = false;
  showServiceError = false;
  industry = [
    {
      name: "Accounting and Finance",
    },
    {
      name: "Agriculture",
    },
    {
      name: "Arts and Crafts",
    },
     {name: "Auto-Parts"},
     {name: "Brass and Hardware"},
     {name: "Construction"},
     {name: "Consumer Electronics"},
     {name: "Consulting Firm"},
     {name: "Education"},
     {name: "FMCG"},
     {name: "Fashion and Apparel"},
     {name: "Food and beverages"},
     {name: "Furniture"},
     {name: "Glass and Aluminium"},
     {name: "Health care and Pharma"},
     {name: "Hotels and Hospitality"},
     {name: "IT and Consultancy"},
     {name: "Infrastructure"},
     {name: "Iron and Steel"},
     {name: "Jewelry"},
     {name: "Manufacturing"},
     {name: "Marketing and Business Consulting"},
     {name: "Press and Printing"},
     {name: "Professional services"},
     {name: "Real-estate"},
     {name: "Retail and trade"},
     {name: "Skin care and Beauty"},
     {name: "Textile Industry"},
     {name: "Tourism and Travels"},
     {name: "Transorportation"},
     {name: "others..."},
  ];

  get isValid(): boolean {
    return this.form?.valid ? true : false;
  }
  contact: any;

  info = {
    name: "",
    business_name: "",
    email: "",
    number: "",
    industry: "Select Industry",
    service: "",
    lname: "",
  };
  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {
    this._as.getService().subscribe(
      (res) => {
        this.services = res.data;
        this.isLoading = false;
        console.log(res);
      },
      (err) => {
        console.log(err, "from err");
        this.errorMessage = err;
        this.isLoading = false;
      }
    );
  }

  submitForm() {
    console.log(this.info);
    if (!this.isValid) {
      this.showErrors = true;
      return;
    }
    console.log(!this.info.industry, "from idys");
    if (this.info.industry === "Select Industry") {
      this.showIndustryError = true;
      return;
    }

    if (!this.info.service) {
      console.log(true);
      this.showServiceError = true;
      return;
    }
    localStorage.setItem("name", this.info.name);

    this.info.name = `${this.info.name}  ${this.info.lname}`;

    console.log(this.info);
    this.info.number = this.contact.internationalNumber;
    this._as.postInquiry(this.info).subscribe(
      (res) => {
        console.log(res.data);
        this._as.serviceId = this.info.service;
        localStorage.setItem("userId", res.data.id);
        let service = this.services.filter(
          (i: any) => i.id === this.info.service
        )[0];
        localStorage.setItem("service_name", service.service);

        console.log(this.info.service, "from service");
        this._router.navigate(["questions"]);
      },
      (err) => console.log(err, " fom err")
    );
  }

  setService(value: string) {
    this.info.service = value;
    this.showServiceError = false;
  }

  setIndustry() {
  
    this.showIndustryError = false;
  }
}
