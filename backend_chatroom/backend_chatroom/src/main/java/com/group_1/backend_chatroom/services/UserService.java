package com.group_1.backend_chatroom.services;

import com.group_1.backend_chatroom.dtos.MessageContentDTO;
import com.group_1.backend_chatroom.dtos.MessageReactionDTO;
import com.group_1.backend_chatroom.dtos.UserDTO;
import com.group_1.backend_chatroom.models.*;
import com.group_1.backend_chatroom.repositories.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ChatroomRepository chatroomRepository;

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    UserChatroomAssociationRepository userChatroomAssociationRepository;

    @Autowired
    MessageReactionRepository messageReactionRepository;

    public List<User> users(){
        return userRepository.findAll();
    }

    public User getUser(Long id) {
        return userRepository.findById(id).get();
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public Long deleteUser(Long id){
        userRepository.deleteById(id);
        return id;
    }

    @Transactional
    public Message userSendMessage( Long chatroomId, MessageContentDTO messageContentDTO){
        User user = userRepository.findById(messageContentDTO.getUserId()).get();
        Chatroom chatroom = chatroomRepository.findById(chatroomId).get();
        Message message = new Message(messageContentDTO.getContent(), chatroom, user);
        List<UserChatroomAssociation> userChatroomAssocations = userChatroomAssociationRepository.findByUserIdAndChatroomId(user.getId(), chatroom.getId()); // findbyuserIdandChatroomId shouldnt be a list.


        if (userChatroomAssocations.isEmpty()) {
            return message;
        }

        chatroom.addMessage(message);
        messageRepository.save(message);
        userRepository.save(user);
        chatroomRepository.save(chatroom);
        return message;
    }

    public Chatroom addUserToChatroom(Long userId, Long chatroomId){
        User user = userRepository.findById(userId).get();
        Chatroom chatroom = chatroomRepository.findById(chatroomId).get();
        List<UserChatroomAssociation> UserChatroomAssociations = userChatroomAssociationRepository.findByUserIdAndChatroomId(user.getId(), chatroom.getId()); // findbyuserIdandChatroomId shouldnt be a list.



        if (UserChatroomAssociations.isEmpty()){
            // add to the userchatroomassociation table
            UserChatroomAssociation userChatroomAssociation = new UserChatroomAssociation(user, chatroom);
            userChatroomAssociationRepository.save(userChatroomAssociation);
            chatroom.addUserChatroomAssociation(userChatroomAssociation);
            chatroomRepository.save(chatroom);

            return chatroom;

        }
        return chatroom;
    }

    public User createNewUser(UserDTO userDTO){

        User user = new User(
                userDTO.getUserName(),
                userDTO.getEmail(),
                Role.fromInteger(userDTO.getRole())
        );
        System.out.println(userDTO.getRole());
        userRepository.save(user);

        return user;
    }


    public User updateUser( Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).get();
        if (userDTO.getUserName() != null){
            user.setUserName(userDTO.getUserName());
        }
        if (userDTO.getEmail() != null){
            user.setEmail(userDTO.getEmail());
        }
        if (userDTO.getRole() != 0 ){
            Role role = Role.fromInteger(userDTO.getRole());
            user.setRole(role);
        }
        if (userDTO.getSoftDeleted() != null){
            user.setSoftDeleted(userDTO.getSoftDeleted());
        }

        userRepository.save(user);
        return user;

    }

    public Message addReaction(Long messageId, MessageReactionDTO messageReactionDTO){
        Message message = messageRepository.findById(messageId).get();
        Reaction reaction = Reaction.fromString(messageReactionDTO.getReaction());
        MessageReaction messageReaction = new MessageReaction(message, message.getUser(), reaction);
        messageReactionRepository.save(messageReaction);
        messageRepository.save(message);
        return message;
    }


}