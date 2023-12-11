package com.group_1.backend_chatroom.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String userName;
    @Column(columnDefinition = "TEXT")
    private String content;
    @Column
    private ZonedDateTime timeCreated;
    @ManyToOne
    @JsonIgnoreProperties({"messages", "userChatroomAssociations"})
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JsonIgnoreProperties({"messages", "userChatroomAssociations"})
    @JoinColumn(name = "chatroom_id")
    private Chatroom chatroom;

    @OneToMany(mappedBy = "message", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"message", "user"})
    private List<MessageReaction> reactions;


    public Message(String content, Chatroom chatroom, User user){
        this.content = content;
        this.chatroom = chatroom;
        this.user = user;
        LocalDateTime localDateTime = LocalDateTime.now();
        ZonedDateTime currentTime = localDateTime.atZone(ZoneId.of("UTC"));
        this.timeCreated = currentTime;
        this.userName = user.getUserName();
        this.reactions = new ArrayList<>();
    }

    public Message(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public ZonedDateTime getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(ZonedDateTime timeCreated) {
        this.timeCreated = timeCreated;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void addReaction(MessageReaction messageReaction){
        this.reactions.add(messageReaction);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Chatroom getChatroom() {
        return chatroom;
    }

    public void setChatroom(Chatroom chatroom) {
        this.chatroom = chatroom;
    }

    public List<String> getReactions() {
        ArrayList<String> emojiReactions = new ArrayList<>();
        for (MessageReaction emoji : this.reactions){
            emojiReactions.add(emoji.getReaction().getEmoji());
        }
        return emojiReactions;
    }

    public void setReactions(List<MessageReaction> reactions) {
        this.reactions = reactions;
    }
}
