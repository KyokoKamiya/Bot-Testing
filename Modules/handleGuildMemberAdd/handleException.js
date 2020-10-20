const { getRoleObject } = require("../../utils/gets/getRoleObject");
const { getGuildObject } = require("../../utils/gets/getGuildObject");
const { getChannelObject } = require("../../utils/gets/getChannelObject");
const { embedException } = require("../../utils/embeds/embedException");

function handleException(member, client) {
    member.roles.add(getRoleObject(getGuildObject("763358407666696202", client), "handleException"));
    console.log(`Sucessfully handled exception for ${member.displayName}`);
    getChannelObject("767797150725308466", getGuildObject("763358407666696202", client)).send(`<@${member.id}>`, { embed: embedException });
}

exports.handleException = handleException;
