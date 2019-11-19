//Creating an service which uses HttpClient to fetch products from Flask backend application.

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; //HttpClient used to fetch external data.
import {Observable} from 'rxjs'; //Observables provide support for passing messages between publishers and subscribers in your application.
import {API_URL} from '../env';
import {Products} from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { } // A constructor is created and the private variable http of type HttpClient is used.

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.'); //A response that represents an error or failure, either from a non-successful HTTP status, an error while executing the request, or some other failure which occurred during the parsing of the response.
  }

  // GET list of public, future events, fetching the data.
  getProducts(): Observable<Products[]> {
    return this.http
      .get<Products[]>(`${API_URL}/api/v1/resources/products/popular_items`);
      
  }
}
