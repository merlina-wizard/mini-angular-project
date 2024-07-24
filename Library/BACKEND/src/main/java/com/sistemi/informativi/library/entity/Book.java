package com.sistemi.informativi.library.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;

import java.io.Serializable;

@Entity
public class Book implements Serializable {

    @Id
    @Size(min=10, max=13)
    private String isbn;

    private String title;

    private String genre;

    boolean published;

    public @Size(min = 10, max = 13) String getIsbn() {
        return isbn;
    }

    public void setIsbn(@Size(min = 10, max = 13) String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }

    protected Book(){
    }

    public Book(String isbn, String title, String genre, boolean published) {
        this.isbn = isbn;
        this.title = title;
        this.genre = genre;
        this.published = published;
    }
}
