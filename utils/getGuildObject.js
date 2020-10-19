var { client } = require("./index.js");

function getGuildObject(guildId) {
    client.guilds.cache.get(guildId);
}
