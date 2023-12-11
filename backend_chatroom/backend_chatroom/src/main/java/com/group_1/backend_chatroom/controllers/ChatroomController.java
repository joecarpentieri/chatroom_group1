package com.group_1.backend_chatroom.controllers;

import com.group_1.backend_chatroom.dtos.ChatroomDTO;
import com.group_1.backend_chatroom.dtos.MessageContentDTO;
import com.group_1.backend_chatroom.models.Chatroom;
import com.group_1.backend_chatroom.models.Message;
import com.group_1.backend_chatroom.services.ChatroomService;
import com.group_1.backend_chatroom.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("chatrooms")
public class ChatroomController {


    @Autowired
    ChatroomService chatroomService;


    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<Chatroom>> getAllChatrooms(){
        return new ResponseEntity<>(chatroomService.getChatrooms(), HttpStatus.OK);
    }

    @PostMapping(value = "/{id}")
    public ResponseEntity<Message> userSendMessage(@PathVariable Long id, @RequestBody MessageContentDTO messageContentDTO){
        return new ResponseEntity<>(userService.userSendMessage(id, messageContentDTO), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}/messages")
    public ResponseEntity<List<Message>> getAllMessagesInChatroom(@PathVariable Long id){
        return new ResponseEntity<>(chatroomService.getChatroomMessages(id), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Chatroom> getAllChatroomById(@PathVariable Long id){
        return new ResponseEntity<>(chatroomService.getChatroomById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Chatroom> addNewChatroom(@RequestBody ChatroomDTO chatroomDTO){
        return new ResponseEntity<>(chatroomService.createNewChatroom(chatroomDTO), HttpStatus.CREATED);

    }

    @PatchMapping(value = "/{chatroomId}/add-user/{userId}")
    public ResponseEntity<Chatroom> addUserToChatroom(@PathVariable Long userId, @PathVariable Long chatroomId) {
        return new ResponseEntity<>(userService.addUserToChatroom(userId, chatroomId), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> removeChatroom(@PathVariable Long id){
        return new ResponseEntity<>(chatroomService.deleteChatroom(id), HttpStatus.OK);
    }
}
