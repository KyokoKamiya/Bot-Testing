const Discord = require("discord.js");
const client = new Discord.Client();
const { config } = require("./config");
const { handleGuildMemberAdd } = require("./handleGuildMemberAdd/memberAddIndex");
const { getChannelObject } = require("./utils/getChannelObject");
const { getGuildObject } = require("./utils/getGuildObject");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} on version ${config.version}!`);
    console.error(config);
});

client.on("message", (msg) => {
    if (msg.author.bot || msg.system) return;
    msg.channel.send(JSON.stringify(getChannelObject(msg.channel.id, getGuildObject("763358407666696202", client))));
});

client.on("guildMemberAdd", (member) => {
    handleGuildMemberAdd(member);
});

client.login(process.env.TESTTOKEN);

// send a message when a person joins
