package com.group_1.backend_chatroom.repositories;

import com.group_1.backend_chatroom.models.UserChatroomAssociation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserChatroomAssociationRepository extends JpaRepository<UserChatroomAssociation, Long> {


    List<UserChatroomAssociation> findByUserIdAndChatroomId(@Param("userId") Long userId, @Param("chatroomId") Long chatroomId);
}
