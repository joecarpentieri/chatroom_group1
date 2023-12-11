package com.group_1.backend_chatroom.dtos;

public class ChatroomDTO {

    private Long id;
    private String name;

    public ChatroomDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
