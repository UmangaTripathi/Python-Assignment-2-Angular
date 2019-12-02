//Creating an service which uses HttpClient to fetch products from Flask backend application.

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; //HttpClient used to fetch external data.
import {Observable} from 'rxjs'; //Observables provide support for passing messages between publishers and subscribers in your application.
import {environment} from 'src/environments/environment';
import {Products} from './products.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs'


@Injectable({ //if we have dependencies then we use injectable
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { } // A constructor is created and the private variable http of type HttpClient is used.


  // GET list of public, future events, fetching the data.
  getProducts(): Observable<Products[]> {
    return this.http
      .get<Products[]>(`${environment}/api/v1/resources/products/popular_items`)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err.message || 'Error: Unable to complete request.'); //A response that represents an error or failure, either from a non-successful HTTP status, an error while executing the request, or some other failure which occurred during the parsing of the response.
  }// catch error in angular. reference: https://stackoverflow.com/questions/58297464/how-to-solve-catch-error-in-observable-in-angular-8
}
