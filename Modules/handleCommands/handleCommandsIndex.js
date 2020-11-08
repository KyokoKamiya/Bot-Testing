const { config } = require("../../config");
const { commandApply } = require("./commands/commandApply");
function handleCommand(msg, client) {
    const args = msg.content.slice(config.prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    switch (command) {
        case "apply": {
            commandApply(msg, client);
        }
    }
}

exports.handleCommand = handleCommand;
