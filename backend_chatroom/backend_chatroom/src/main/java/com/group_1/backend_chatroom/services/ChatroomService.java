package com.group_1.backend_chatroom.services;

import com.group_1.backend_chatroom.dtos.ChatroomDTO;
import com.group_1.backend_chatroom.models.Chatroom;
import com.group_1.backend_chatroom.models.Message;
import com.group_1.backend_chatroom.models.Role;
import com.group_1.backend_chatroom.models.User;
import com.group_1.backend_chatroom.repositories.ChatroomRepository;
import com.group_1.backend_chatroom.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatroomService {

    @Autowired
    ChatroomRepository chatroomRepository;

    @Autowired
    MessageRepository messageRepository;

    public List<Chatroom> getChatrooms() {
        return chatroomRepository.findAll();
    }

    public Chatroom getChatroom(ChatroomDTO chatroomDTO){
        return chatroomRepository.getReferenceById(chatroomDTO.getId());
    }

    public Chatroom getChatroomById(Long id){
        return chatroomRepository.findById(id).get();
    }

    public void addChatroom(Chatroom chatroom){
        chatroomRepository.save(chatroom);
    }

    public Chatroom createNewChatroom(ChatroomDTO chatroomDTO){
        Chatroom chatroom = new Chatroom(chatroomDTO.getName());
        chatroomRepository.save(chatroom);
        return chatroom;
    }

    public List<Message> getChatroomMessages(Long id){
        List<Message> chatroomMessages = chatroomRepository.findById(id).get().getMessages();
        List<Message> messagesWithSoftDelete = new ArrayList<>();

        for (Message message : chatroomMessages) {
            User user = message.getUser();
            if (user.getSoftDeleted()) {
                message.setUserName("anon");
                user.setUserName("anon");
                user.setEmail("anon");
                user.setRole(Role.USER);
                messagesWithSoftDelete.add(message);
            }
            messagesWithSoftDelete.add(message);
        }

        return messagesWithSoftDelete;
    }


    public Long deleteChatroom(Long id){
        Chatroom chatroom = chatroomRepository.findById(id).get();
        chatroomRepository.delete(chatroom);
        return id;
    }


}
