import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Employee} from './employee.model';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";


@Injectable()
export class EmployeeService {

  private resourceUrl: string = `http://${window.location.hostname}:8080/api/employees`;

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.resourceUrl)
      .pipe(catchError(this.handleError));
  }

  create(employee: Employee): Observable<Employee> {
    const copy: Employee = Object.assign({}, employee);
    return this.http.post<Employee>(this.resourceUrl, copy)
      .pipe(catchError(this.handleError));
  }

  update(employee: Employee): Observable<Employee> {
    const copy: Employee = Object.assign({}, employee);
    return this.http.put<Employee>(this.resourceUrl, copy)
      .pipe(catchError(this.handleError));
  }

  get(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.resourceUrl}/${id}`)
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
