const { getGuildObject } = require("../../utils/gets/getGuildObject");
const { getRoleObject } = require("../../utils/gets/getRoleObject");

function handleDM(msg, client) {
    if (msg.author.username === undefined) {
        if (/^[A-Z]\w*'*\w*\s[A-Z]\w*'*\w*/.test(msg.content)) {
            let guildObject = getGuildObject("763358407666696202", client);
            guildObject.members.cache.get(msg.author.id).setNickname(msg.content);
            guildObject.members.cache.get(msg.author.id).roles.add(getRoleObject(guildObject, "IGN"));

            return;
        } else {
            msg.channel.send("Either the ingame name you entered is invalid, or you shouldn't be messaging me :P");
        }
    }
}

exports.handleDM = handleDM;

// IGN regex /^[A-Z]\w*'*\w*\s[A-Z]\w*'*\w*/
