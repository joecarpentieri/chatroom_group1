package com.group_1.backend_chatroom.repositories;

import com.group_1.backend_chatroom.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
}
