package com.group_1.backend_chatroom.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "message_reactions")
public class MessageReaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "message_id")
    @JsonIgnoreProperties({"message"})
    private Message message;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({"message"})
    private User user;

    @Enumerated(EnumType.STRING)
    private Reaction reaction;

    public MessageReaction(Message message, User user, Reaction reaction) {
        this.message = message;
        this.user = message.getUser();
        this.reaction = reaction;
    }

    public MessageReaction() {
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Reaction getReaction() {
        return reaction;
    }

    public void setReaction(Reaction reaction) {
        this.reaction = reaction;
    }

}
