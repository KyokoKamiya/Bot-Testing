const { config } = require("../../config");

function parseMessageType(msg, client) {
    if (msg.author.bot || msg.system) {
        return;
    }
    if ((msg.channel.type = "dm")) {
        return;
    }
    if ((msg.channel.type = "text")) {
        if (msg.content.startsWith(config.prefix)) {
            const args = msg.content.toLowerCase().slice(config.prefix.length).trim().split(" ");
            const command = args.shift();

            return;
        }
    }
}
