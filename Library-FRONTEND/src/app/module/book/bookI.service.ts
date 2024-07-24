import { inject, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const book_service_token = new InjectionToken<BookServiceI>('book_service_token');

export interface BookServiceI{

	saveBook(academy: any): Observable<any>;

	updateBook(academy: any): Observable<any>;

	getBooks(): Observable<any>;

	getBookByCode(code: string): Observable<any>;

	deleteBook(code: string): Observable<any>;

}
