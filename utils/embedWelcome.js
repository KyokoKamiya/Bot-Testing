var { client } = require("./index.js");
const Discord = require("discord.js");

const embedWelcome = new Discord.MessageEmbed()
    .setColor("#ff8080")
    .setTitle("♥ Welcome! ♥")
    .setDescription("to the Evolved Discord server! ")
    .setThumbnail("https://i.imgur.com/l73ruau.png")
    .addFields(
        {
            name: "To gain access to the discord server we need a bit of information about you.",
            value: "\u200b",
        },
        {
            name: "To continue:",
            value: "Please type your in game name: ('Firstname Lastname')",
            inline: true,
        }
    );

exports.embedWelcome;
