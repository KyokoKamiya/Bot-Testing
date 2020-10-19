const { embedWelcome } = require("../utils/embedWelcome");

function handleGuildMemberAdd(member) {
    if (member.bot) {
        console.log(`Bot named "${member.displayName}" has joined the server! `);
        return;
    }
    member.send(embedWelcome);
}

exports.handleGuildMemberAdd = handleGuildMemberAdd;
