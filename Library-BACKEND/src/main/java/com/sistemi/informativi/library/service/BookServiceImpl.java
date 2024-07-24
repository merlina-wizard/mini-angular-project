package com.sistemi.informativi.library.service;

import com.sistemi.informativi.library.entity.Book;
import com.sistemi.informativi.library.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Book saveOrUpdateBook(Book book) {
        try {

            bookRepository.save(book);
        }

        catch (Exception ex) {

            ex.printStackTrace();
        }

        return book;
    }

    @Override
    public List<Book> getBooks() {
        List<Book> books = new ArrayList<>();

        try {

            books = bookRepository.findAll();

        } catch (Exception ex) {

            ex.printStackTrace();

        }

        return books;
    }

    @Override
    public Book getBookByCode(String code) {
        return bookRepository.findById(code).orElse(null);
    }

    @Override
    public Map<String, Boolean> removeBook(String code) {
        try {

            bookRepository.deleteById(code);

        }

        catch (Exception ex) {

            ex.printStackTrace();

        }

        Map<String, Boolean> map = new HashMap<>();
        map.put(code + " elimination", true);

        return map;
    }
}
