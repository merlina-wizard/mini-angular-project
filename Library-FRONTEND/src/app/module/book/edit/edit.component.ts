import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { book_service_token, BookServiceI } from '../bookI.service';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../model/Book.model';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [{provide: book_service_token, useClass: BookService}],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{


  isbn! : string;

  form!: FormGroup;

  book!: Book;

  private bookService = inject<BookServiceI>(book_service_token);

  constructor(private route: ActivatedRoute, private router: Router) {}

  submit() {

    this.bookService.updateBook(this.form.value).subscribe((res: any) => {
      console.log('Book updated successfully!');
      this.router.navigateByUrl('books/index');
    })
  }


  ngOnInit(): void {

        //recupro il codice dell'academy da modificare
        this.isbn = this.route.snapshot.params['isbn'];
        console.log(this.isbn);
        //invochiamo il metodo  getAcademyByCode per farci restituire l'academy selezionata
        this.bookService.getBookByCode(this.isbn).subscribe((data) => {
          //trasformazione in oggetto academy
          this.book = data;
          console.log(this.book);
        });

          this.form = new FormGroup({
           isbn: new FormControl(''),
           title: new FormControl(''),
           genre: new FormControl(''),
           published: new FormControl()
      });
  }

}
