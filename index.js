require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { config } = require("./config");
const { handleGuildMemberAdd } = require("./Modules/handleGuildMemberAdd/memberAddIndex");
const { handleMessage } = require("./Modules/handleMessage/handleMessageIndex");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} on version ${config.version}!`);
    client.user.setPresence({ activity: { name: "Kyoko's commands.", type: "LISTENING" }, status: "online" });
});

client.on("message", (msg) => {
    handleMessage(msg, client);
});

client.on("guildMemberAdd", (member) => {
    handleGuildMemberAdd(member, client);
});

client.login(process.env.TESTTOKEN);

// if (msg.author.nickname === undefined) {
//
//}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
