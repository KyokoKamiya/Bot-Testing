var { client } = require("./index.js");

function getGuildObject(guildId) {
    let guildObject = client.guilds.cache.get(guildId);
    return guildObject;
}

exports.getGuildObject;
