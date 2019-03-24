import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Company} from './company.model';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";


@Injectable()
export class CompanyService {

  private resourceUrl: string = `http://${window.location.hostname}:8080/api/companys`;

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.resourceUrl)
      .pipe(catchError(this.handleError));
  }

  create(company: Company): Observable<Company> {
    const copy: Company = Object.assign({}, company);
    return this.http.post<Company>(this.resourceUrl, copy)
      .pipe(catchError(this.handleError));
  }

  update(company: Company): Observable<Company> {
    const copy: Company = Object.assign({}, company);
    return this.http.put<Company>(this.resourceUrl, copy)
      .pipe(catchError(this.handleError));
  }

  get(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.resourceUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private extractData(res: Response)  {
    let body = res.json();
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
