package com.group_1.backend_chatroom.components;

import com.group_1.backend_chatroom.models.*;
import com.group_1.backend_chatroom.repositories.UserChatroomAssociationRepository;
import com.group_1.backend_chatroom.services.ChatroomService;
import com.group_1.backend_chatroom.services.MessageService;
import com.group_1.backend_chatroom.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    UserService userService;

    @Autowired
    ChatroomService chatroomService;

    @Autowired
    MessageService messageService;

    @Autowired
    UserChatroomAssociationRepository userChatroomAssociationRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {


        User ryan = new User("ryanAir", "Ryan@BNTA.com", Role.ADMIN);
        userService.addUser(ryan);

        User albert = new User("al-b", "Alb@BNTA.com", Role.ADMIN);
        userService.addUser(albert);

        User arianna = new User("beans", "ari@BNTA.com", Role.ADMIN);
        userService.addUser(arianna);

        User emily = new User("m&m", "emily@BNTA.com", Role.ADMIN);
        userService.addUser(emily);


        Chatroom chatroom = new Chatroom("BNTA Chatroom");
        chatroomService.addChatroom(chatroom);

        Chatroom trainerChatroom = new Chatroom("BNTA Trainer Chatroom");
        chatroomService.addChatroom(trainerChatroom);

        UserChatroomAssociation userChatroomAssociation = new UserChatroomAssociation(ryan, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation);

        UserChatroomAssociation userChatroomAssociation1 = new UserChatroomAssociation(albert, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation1);

        UserChatroomAssociation userChatroomAssociation2 = new UserChatroomAssociation(arianna, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation2);

        UserChatroomAssociation userChatroomAssociation3 = new UserChatroomAssociation(emily, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation3);


        Message message = new Message("Hello world!", trainerChatroom, ryan);
        messageService.addMessage(message);

        Message message1 = new Message("Hello TrainerChatroom!", trainerChatroom, albert);
        messageService.addMessage(message1);
        Message message2 = new Message("Hey!", trainerChatroom, arianna);
        messageService.addMessage(message2);
        Message message3 = new Message("Hi!", trainerChatroom, emily);
        messageService.addMessage(message3);




    }

}
