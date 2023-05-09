import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Iinquiry, Iservice } from "./interface";

@Injectable({
  providedIn: "root",
})
export class AppService {
  // url = "https://estimatesback.azguards.com";
  url = "http://localhost:3000";
  serviceId = "bc022627-5133-4834-942e-8496cd614ddf";
  // serviceId = "bc022627-5133-4834-942e-8496cd614ddf";
  dynamicInfo = "";
  qtns: any = [];
  selectedService: any;
  detailview: any;
  selectedqtn: any;
  selectedoptn: any;
  servicename: any;
  constructor(private http: HttpClient) {}

  getService(): Observable<any> {
    return this.http
      .get<Iservice>(this.url + "/services")
      .pipe(catchError(this.handleError));
  }

  //6Le_Kf8jAAAAAE5VePE42G8LkMzKitOe4l18ZKma //site key

  //secret key 6Le_Kf8jAAAAANzNhEn4Am1D8ldf7kYPswqnQg6u

  getQtns(): Observable<any> {
    return this.http
      .get<any>(this.url + `/question/service/${this.serviceId}`)
      .pipe(catchError(this.handleError));
  }

  getUserInput(): Observable<any> {
    return this.http
      .get<any>(this.url + `/admin/userInput`)
      .pipe(catchError(this.handleError));
  }

  decodeUserInput(): Observable<any> {
    return this.http
      .post<any>(this.url + `/admin/userInput`, this.detailview)
      .pipe(catchError(this.handleError));
  }

  updateService(data: any): Observable<any> {
    return this.http
      .put<Iinquiry>(this.url + `/admin/services/${data.id}`, data)
      .pipe(catchError(this.handleError));
  }
  updateqtn(data: any): Observable<any> {
    return this.http
      .put<Iinquiry>(this.url + `/admin/questions/${this.selectedqtn.id}`, data)
      .pipe(catchError(this.handleError));
  }

  updateOptn(data: any): Observable<any> {
    return this.http
      .put<Iinquiry>(this.url + `/admin/options/${this.selectedoptn.id}`, data)
      .pipe(catchError(this.handleError));
  }
  addqtn(data: any): Observable<any> {
    return this.http
      .post<Iinquiry>(this.url + `/admin/questions/`, data)
      .pipe(catchError(this.handleError));
  }

  addOptn(data: any): Observable<any> {
    return this.http
      .post<Iinquiry>(this.url + `/admin/options/`, data)
      .pipe(catchError(this.handleError));
  }
  deleteqtn(): Observable<any> {
    return this.http
      .delete<Iinquiry>(this.url + `/admin/questions/${this.selectedqtn.id}`)
      .pipe(catchError(this.handleError));
  }
  deleteoptn(): Observable<any> {
    return this.http
      .delete<Iinquiry>(this.url + `/admin/options/${this.selectedoptn.id}`)
      .pipe(catchError(this.handleError));
  }

  addService(data: any): Observable<any> {
    return this.http
      .post<Iinquiry>(this.url + `/admin/services/`, data)
      .pipe(catchError(this.handleError));
  }

  deleteService(data: any): Observable<any> {
    return this.http
      .delete<Iinquiry>(this.url + `/admin/services/${data}`)
      .pipe(catchError(this.handleError));
  }

  postInquiry(data: Iinquiry): Observable<any> {
    return this.http
      .post<Iinquiry>(this.url + "/inquiry", data)
      .pipe(catchError(this.handleError));
  }

  postUserInput(data: any): Observable<any> {
    return this.http
      .post<Iinquiry>(this.url + "/inquiry/inputs", data)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let message = "";

    if (err.error instanceof ErrorEvent) {
      message = `an error occured: ${err.error.message}`;
    } else {
      message = err.error;
    }

    return throwError(message);
    // throwError(() => new Error(message))
  }
}
