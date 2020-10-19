var { client } = require("./index.js");
const Discord = require("discord.js");

const embedWelcome = new Discord.MessageEmbed()
    .setColor("#ff8080")
    .setTitle("♥ Welcome! ♥")
    .setDescription("to the Evolved Discord server! ")
    .setThumbnail("https://i.imgur.com/l73ruau.png")
    .addFields(
        {
            name: "In order to keep the discord organized and help people identify eachother, we have everyones name set to their in-game name",
            value: "\u200b",
        },
        {
            name: "To continue:",
            value: "Please type your in game name: ('Firstname Lastname')",
            inline: true,
        }
    );

exports.embedWelcome;
