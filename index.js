const Discord = require("discord.js");
const client = new Discord.Client();
const { config } = require("./config");
const handleGuildMemberAdd = require("./handleGuildMemberAdd/memberAddIndex");
exports.client = client;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} on version ${config.version}!`);
    console.error(config);
});

client.on("message", (msg) => {});

client.on("guildMemberAdd", (member) => {
    handleGuildMemberAdd(member);
});

client.login(process.env.TESTTOKEN);

// send a message when a person joins
