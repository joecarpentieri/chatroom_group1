package com.group_1.backend_chatroom.models;

public enum Role {

    USER(1),
    MODERATOR(2),
    ADMIN(3);

    private final int value;

    Role(int value) {
        this.value = value;
    }

    public static Role fromInteger(int value) {
        switch (value) {
            case 1:
                return USER;
            case 2:
                return MODERATOR;
            case 3:
                return ADMIN;
            // handle other cases if needed
            default:
                throw new IllegalArgumentException("Invalid Role value: " + value);
        }
    }
}