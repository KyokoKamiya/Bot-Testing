var { client } = require("./index.js");

function getChannelObject(channelId, guildObject) {
    let channelObject = guildObject.channels.cache.get(channelId);
    return channelObject;
}

exports.getChannelObject;
