import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { book_service_token, BookServiceI } from '../bookI.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [{ provide: book_service_token, useClass: BookService }],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private router: Router) {}

  form!: FormGroup;

  private bookService = inject<BookServiceI>(book_service_token);

  submit() {

    this.bookService.saveBook(this.form.value).subscribe((res: any) => {
      console.log('Book created successfully!');
      this.router.navigateByUrl('books/index');
    })
  }

  ngOnInit(): void {
      this.form = new FormGroup({
       isbn: new FormControl(''),
       title: new FormControl(''),
       genre: new FormControl(''),
       published: new FormControl(false)
  });
}
}
