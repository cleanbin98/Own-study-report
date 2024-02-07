package com.example.javaReport.dto;

import com.example.javaReport.entity.Article;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class ArticleForm {
    private Long id;
    private String summary; // 제목을 받을 필드
    private String keyword; // 내용을 받을 필드

    public Article toEntity() {
        return new Article(id, summary, keyword);
    }
}