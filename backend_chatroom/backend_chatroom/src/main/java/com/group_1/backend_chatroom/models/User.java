package com.group_1.backend_chatroom.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jdk.jfr.Name;

import java.util.ArrayList;
import java.util.List;

@Table(name = "users")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Name(value = "user_name")
    private String userName;
    @Column
    private String email;
    @Column
    private Role role;
    @Column
    private Boolean softDeleted;

    @OneToMany (mappedBy = "user", cascade = CascadeType.ALL)
    private List<Message> messages;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"message", "user"})
    private List<MessageReaction> reactions;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserChatroomAssociation> userChatroomAssociations;

    public User(String userName, String email, Role role) {
        this.userName = userName;
        this.email = email;
        this.role = role;
        this.messages = new ArrayList<>();
        this.userChatroomAssociations = new ArrayList<>();
        this.reactions = new ArrayList<>();
        this.softDeleted = false;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }


    public void addMessage(Message message){
        this.messages.add(message);
    }

    public void removeMessage(Message message){
        this.messages.remove(message);
    }


    public List<UserChatroomAssociation> getUserChatroomAssociations() {
        return userChatroomAssociations;
    }

    public void setUserChatroomAssociations(List<UserChatroomAssociation> userChatroomAssociations) {
        this.userChatroomAssociations = userChatroomAssociations;
    }

    public void addUserChatroomAssociation(UserChatroomAssociation userChatroomAssociation){
        this.userChatroomAssociations.add(userChatroomAssociation);
    }

    public void removeUserChatroomAssociation(UserChatroomAssociation userChatroomAssociation){
        this.userChatroomAssociations.remove(userChatroomAssociation);
    }

    public Boolean getSoftDeleted() {
        return softDeleted;
    }

    public void setSoftDeleted(Boolean softDeleted) {
        this.softDeleted = softDeleted;
    }

    public List<MessageReaction> getReactions() {
        return reactions;
    }

    public void setReactions(List<MessageReaction> reactions) {
        this.reactions = reactions;
    }
}
