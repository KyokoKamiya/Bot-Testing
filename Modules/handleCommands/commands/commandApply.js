const { handleGuildMemberAdd } = require("../../handleGuildMemberAdd/memberAddIndex");
const { getMemberdObject } = require("../../../utils/gets/getMemberObject");
const { getGuildObject } = require("../../../utils/gets/getGuildObject");

function commandApply(msg, client) {
    console.log(`${msg.content} from ${msg.author.nick}`);
    handleGuildMemberAdd(getMemberdObject(getGuildObject("763358407666696202", client), msg.author), client);
}

exports.commandApply = commandApply;
