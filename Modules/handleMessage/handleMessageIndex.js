const { getMessageType } = require("../../utils/gets/getMessageType");
const { handleCommand } = require("../handleCommands/handleCommandsIndex");
const { handleDM } = require("./handleDM");

function handleMessage(msg, client) {
    switch (getMessageType(msg)) {
        case "bot": {
            break;
        }
        case "system": {
            break;
        }
        case "dm": {
            handleDM(msg, client);
            break;
        }
        case "command": {
            handleCommand(msg, client);
            break;
        }
        case "userMessage": {
            break;
        }
        case "unknown": {
            break;
        }
        default: {
            console.log("unexpeted error HandleMessageIndex.js line 27");
        }
    }
}

exports.handleMessage = handleMessage;
