package com.group_1.backend_chatroom.services;

import com.group_1.backend_chatroom.models.Message;
import com.group_1.backend_chatroom.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    MessageRepository messageRepository;

    public List<Message> getMessages(){
        return messageRepository.findAll();
    }

    public Message getMessage(Long id) {
        return messageRepository.findById(id).get();
    }

    public void addMessage(Message message){
        messageRepository.save(message);
    }



}
