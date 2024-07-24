import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { BookServiceI } from './bookI.service';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BookServiceI{

  constructor(private httpClient : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private apiUrl = 'http://localhost:8080/books';

  saveBook(book: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, JSON.stringify(book), this.httpOptions)
    .pipe(
      catchError(this.exeptionHandler)
    );
  }

  updateBook(book: any): Observable<any> {
    return this.httpClient.put(this.apiUrl, JSON.stringify(book), this.httpOptions)
    .pipe(
      catchError(this.exeptionHandler)
    );
  }

  getBooks(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
    .pipe(
      catchError(this.exeptionHandler)
    );
  }

  getBookByCode(code: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/isbn/' + code)
    .pipe(
      catchError(this.exeptionHandler)
    );
  }

  deleteBook(code: string): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/isbn/' + code)
    .pipe(
      catchError(this.exeptionHandler)
    );
  }


  exeptionHandler(exeption: any) {
    let errorMessage = '';
    if (exeption.error instanceof ErrorEvent) {
      errorMessage = `Error: ${exeption.error.message}`;
    } else {
      errorMessage = `Error Code: ${exeption.status}\nMessage: ${exeption.message}`;
    }
    window.alert(errorMessage);
    return errorMessage;
  }

}
