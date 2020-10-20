const Discord = require("discord.js");
const client = new Discord.Client();
const { config } = require("./config");
const { handleGuildMemberAdd } = require("./Modules/handleGuildMemberAdd/memberAddIndex");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} on version ${config.version}!`);
    console.error(config);
});

client.on("message", (msg) => {
    if (msg.author.bot || msg.system) return;
});

client.on("guildMemberAdd", (member) => {
    handleGuildMemberAdd(member, client);
});

client.login(process.env.TESTTOKEN);

// IGN regex ^[A-Z]\w*'*\w*\s[A-Z]\w*'*\w*
