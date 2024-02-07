package com.example.javaReport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Getter
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String summary;
    @Column
    private String keyword;

    public void patch(Article article) {
        if (article.summary != null)
            this.summary = article.summary;
        if (article.keyword != null)
            this.keyword = article.keyword;
    }
}