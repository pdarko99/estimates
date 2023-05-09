import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app-service/app.service";
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from "ngx-intl-tel-input";

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
  sitekey = "6Le_Kf8jAAAAAE5VePE42G8LkMzKitOe4l18ZKma";
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
    { name: "Auto-Parts" },
    { name: "Brass and Hardware" },
    { name: "Construction" },
    { name: "Consumer Electronics" },
    { name: "Consulting Firm" },
    { name: "Education" },
    { name: "FMCG" },
    { name: "Fashion and Apparel" },
    { name: "Food and beverages" },
    { name: "Furniture" },
    { name: "Glass and Aluminium" },
    { name: "Health care and Pharma" },
    { name: "Hotels and Hospitality" },
    { name: "IT and Consultancy" },
    { name: "Infrastructure" },
    { name: "Iron and Steel" },
    { name: "Jewelry" },
    { name: "Manufacturing" },
    { name: "Marketing and Business Consulting" },
    { name: "Press and Printing" },
    { name: "Professional services" },
    { name: "Real-estate" },
    { name: "Retail and trade" },
    { name: "Skin care and Beauty" },
    { name: "Textile Industry" },
    { name: "Tourism and Travels" },
    { name: "Transorportation" },
    { name: "others..." },
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
    captcha: "",
  };
  showServices = true;
  sub_heading = "Let’s Take your";
  main_heading = "business Online";
  description = "Don’t need to wait for quotation";
  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit(): void {
    this._as.getService().subscribe(
      (res) => {
        this.services = res.data;
        this.isLoading = false;
        console.log(res);
        const params = new URLSearchParams(window.location.search);
        const service = params.get("service");
        if (service) {
          console.log(service, "from service");
          console.log(this.services, "from services");
          // this.services.filter(i => i)
          let index = this.services.filter(
            (i: { service: string }) => i.service === service
          )[0];
          if (index.service) {
            this.info.service = index.id;

            const display_query = params.get("display");
            const sub_query = params.get("sub");
            const main_query = params.get("main");
            const description = params.get("description");
            if (display_query && display_query === "false") {
              this.showServices = false;
            }
            if (sub_query) {
              this.sub_heading = sub_query;
            }
            if (main_query) {
              this.main_heading = main_query;
            }
            if (description) {
              this.description = description;
            }
          }
        }
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
       let dynamic =  this.services.filter((i: { id: string; }) => i.id === this.info.service)[0]
        this._as.dynamicInfo = dynamic.dynamicinfo   ? dynamic.dynamicinfo.data : ''
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
