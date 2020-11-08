const { getGuildObject } = require("../../utils/gets/getGuildObject");
const { getRoleObject } = require("../../utils/gets/getRoleObject");
const { embedSucess } = require("../../utils/embeds/embedSuccess");

function handleDM(msg, client) {
    let guildObject = getGuildObject("763358407666696202", client);
    let memberObject = guildObject.members.cache.get(msg.author.id);
    if (msg.author.bot) {
        return;
    }
    if (memberObject.nickname === null || memberObject.roles.cache.some((role) => role.name === "IGN")) {
        if (/^[A-Z]\w*'*\w*\s[A-Z]\w*'*\w*/.test(msg.content)) {
            memberObject.setNickname(msg.content);
            memberObject.roles.add(getRoleObject(guildObject, "IGN"));
            msg.channel.send(embedSucess(":white_check_mark: Nickname set succesfully!")).then(msg.channel.send());
            return;
        }
    }
    if (memberObject.roles.cache.some((role) => role.name === "PureBloods") || memberObject.roles.cache.some((role) => role.name === "Static")) {
        console.log(`${msg.author.username}: ${msg.content}`);
    }
}

exports.handleDM = handleDM;

// IGN regex /^[A-Z]\w*'*\w*\s[A-Z]\w*'*\w*/
