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


        User joe = new User("Joe", "Joe@BNTA.com", Role.ADMIN);
        userService.addUser(joe);

        User aanis = new User("Aanis", "Aanis@BNTA.com", Role.ADMIN);
        userService.addUser(aanis);

        User rosie = new User("Rosie", "Rosie@BNTA.com", Role.ADMIN);
        userService.addUser(rosie);

        User gisele = new User("Gisele", "Gisele@BNTA.com", Role.ADMIN);
        userService.addUser(gisele);


        Chatroom chatroom = new Chatroom("BNTA Chatroom");
        chatroomService.addChatroom(chatroom);

        Chatroom trainerChatroom = new Chatroom("BNTA Trainer Chatroom");
        chatroomService.addChatroom(trainerChatroom);

        UserChatroomAssociation userChatroomAssociation = new UserChatroomAssociation(joe, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation);

        UserChatroomAssociation userChatroomAssociation1 = new UserChatroomAssociation(aanis, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation1);

        UserChatroomAssociation userChatroomAssociation2 = new UserChatroomAssociation(rosie, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation2);

        UserChatroomAssociation userChatroomAssociation3 = new UserChatroomAssociation(gisele, trainerChatroom);
        userChatroomAssociationRepository.save(userChatroomAssociation3);


        Message message = new Message("Hello world!", trainerChatroom, joe);
        messageService.addMessage(message);

        Message message1 = new Message("Hello TrainerChatroom!", trainerChatroom, aanis);
        messageService.addMessage(message1);
        Message message2 = new Message("Hey!", trainerChatroom, rosie);
        messageService.addMessage(message2);
        Message message3 = new Message("Hi!", trainerChatroom, gisele);
        messageService.addMessage(message3);




    }

}
