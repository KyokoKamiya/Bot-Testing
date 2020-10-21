const { config } = require("../../config");

function getMessageType(msg) {
    if (msg.author.bot) {
        return "bot";
    } else if (msg.system) {
        return "system";
    } else if ((msg.channel.type = "dm")) {
        return "dm";
    } else if ((msg.channel.type = "text")) {
        if (msg.content.startsWith(config.prefix)) {
            return "command";
        } else {
            return "userMessage";
        }
    } else {
        return "unknown";
    }
}

exports.getMessageType = getMessageType;
