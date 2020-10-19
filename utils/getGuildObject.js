function getGuildObject(guildId, client) {
    let guildObject = client.guilds.cache.get(guildId);
    return guildObject;
}

exports.getGuildObject = getGuildObject;
