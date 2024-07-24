package com.sistemi.informativi.library.repository;

import com.sistemi.informativi.library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {
}
