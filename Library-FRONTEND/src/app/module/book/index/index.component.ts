import { Component, inject, Inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { book_service_token, BookServiceI } from '../bookI.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Book } from '../../../model/Book.model';

@Component({
  selector: 'app-index',
  standalone: true,
  providers: [{provide: book_service_token, useClass: BookService}],
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{

  books: Book[] = [];

  private bookService = inject<BookServiceI>(book_service_token);

  getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (res) => {
        this.books = res;
        console.log('Data fetched successfully', res);
      },
      error: (err) => {
        console.error('Error fetching data', err);
      }
    });
  }

  removeBook(code: string) {

    this.bookService.deleteBook(code).subscribe(res => {
      console.log(res.data);
      this.getBooks();
    });
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
