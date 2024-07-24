package com.sistemi.informativi.library.service;
import com.sistemi.informativi.library.entity.Book;

import java.util.List;
import java.util.Map;

public interface BookService {

    public Book saveOrUpdateBook(Book book);

    public List<Book> getBooks();

    public Book getBookByCode(String code);

    public Map<String,Boolean> removeBook(String code);
}
