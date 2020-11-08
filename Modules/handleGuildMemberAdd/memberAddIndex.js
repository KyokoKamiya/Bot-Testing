const { embedWelcome } = require("../../utils/embeds/embedWelcome");
const { handleException } = require("./handleException");

function handleGuildMemberAdd(member, client) {
    if (member.bot) {
        console.log(`Bot named "${member.displayName}" has joined the server! `);
        return;
    }
    console.log(`Attempting to send Welcome message to ${member.displayName}`);

    member
        .send(embedWelcome)
        .catch((err) => {
            console.log(`Could not send Welcome message to ${member.displayName}, calling handleException`);
            handleException(member, client);
            return "test1";
        })
        .then(() => console.log("handleGuildMemberAdd Complete"));
}

exports.handleGuildMemberAdd = handleGuildMemberAdd;
