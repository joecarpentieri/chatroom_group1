package com.group_1.backend_chatroom.models;

public enum Reaction {

    SMILE("😄"),
    JOY("😂"),
    FROWN("☹️"),
    HEARTEYES("😍"),
    TICK("✅"),
    ROCKSTAR("🎸");

    private final String emoji;

    Reaction(String emoji) {
        this.emoji = emoji;
    }

    public static Reaction fromString(String emoji) {
        switch (emoji) {
            case "😄":
                return SMILE;
            case "😂":
                return JOY;
            case "☹️":
                return FROWN;
            case "😍":
                return  HEARTEYES;
            case "✅":
                return  TICK;
            // handle other cases if needed
            case "🎸":
                return ROCKSTAR;
            default:
                throw new IllegalArgumentException("Invalid Reaction value: " + emoji);
        }
    }

    public String getEmoji() {
        return emoji;
    }
}
