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
  constructor(private http: HttpClient) {}

  getService(): Observable<any> {
    return this.http
      .get<Iservice>(this.url + "/services")
      .pipe(catchError(this.handleError));
  }

  getQtns(): Observable<any> {
    return this.http
      .get<any>(this.url + `/question/service/${this.serviceId}`)
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
