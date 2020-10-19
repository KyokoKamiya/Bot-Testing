const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = { client };

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} on version ${version}!`);
});

client.on("message", (msg) => {});

client.login(process.env.TESTTOKEN);

// send a message when a person joins
