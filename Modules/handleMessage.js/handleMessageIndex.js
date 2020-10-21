const { getMessageType } = require("../../utils/gets/getMessageType");

function handleMessage(msg, client) {
    switch (getMessageType(msg)) {
        case "bot": {
        }
        case "system": {
        }
        case "dm": {
        }
        case "command": {
        }
        case "userMessage": {
        }
        case "unknown": {
        }
    }
}
