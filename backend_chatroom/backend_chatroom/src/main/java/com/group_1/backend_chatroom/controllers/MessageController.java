package com.group_1.backend_chatroom.controllers;

import com.group_1.backend_chatroom.dtos.MessageReactionDTO;
import com.group_1.backend_chatroom.models.Message;
import com.group_1.backend_chatroom.models.MessageReaction;
import com.group_1.backend_chatroom.services.MessageService;
import com.group_1.backend_chatroom.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("messages")
public class MessageController {

    @Autowired
    MessageService messageService;

    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<Message>> getAllMessages(){
        return new ResponseEntity<>(messageService.getMessages(), HttpStatus.OK);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Message> getMessageById(@PathVariable Long id){
        return new ResponseEntity<>(messageService.getMessage(id), HttpStatus.OK);
    }

    @PatchMapping("/{messageId}")
    public ResponseEntity<Message> addReactionToMessage(@PathVariable Long messageId, @RequestBody MessageReactionDTO messageReactionDTO){
        return new ResponseEntity<>(userService.addReaction(messageId, messageReactionDTO), HttpStatus.OK);
    }

}
