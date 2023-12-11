package com.group_1.backend_chatroom.dtos;

public class MessageContentDTO {

    private Long userId;
    private String content;

    public MessageContentDTO() {
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
