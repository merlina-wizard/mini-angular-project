package com.sistemi.informativi.library.controller;

import com.sistemi.informativi.library.entity.Book;
import com.sistemi.informativi.library.service.BookService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/books")
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public Book saveBook(@Valid @RequestBody Book book){
        return bookService.saveOrUpdateBook(book);
    }

    @PutMapping
    public Book UpdateBook(@RequestBody Book book){

        return bookService.saveOrUpdateBook(book);
    }

    @GetMapping
    public List<Book> getBooks(){

        return bookService.getBooks();

    }

    @GetMapping("/code/{code}")
    public Book getBookByCode(@PathVariable String code){

        return bookService.getBookByCode(code);
    }


    @DeleteMapping("/code/{code}")
    public Map<String,Boolean> removeBook(@PathVariable String code){
        return bookService.removeBook(code);
    }

}
