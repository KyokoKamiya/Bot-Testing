const { getMessageType } = require("../../utils/gets/getMessageType");
const { handleDM } = require("./handleDM");

function handleMessage(msg, client) {
    switch (getMessageType(msg)) {
        case "bot": {
        }
        case "system": {
        }
        case "dm": {
            handleDM(msg, client);
        }
        case "command": {
        }
        case "userMessage": {
        }
        case "unknown": {
        }
    }
}

exports.handleMessage = handleMessage;
