const Discord = require("discord.js");

const embedException = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Please enable DMs")
    .setDescription('You can enable it in the "Privacy & Safety" tab from your settings')
    .addFields({
        name: "\u200b",
        value: "then type ?apply",
    })
    .setImage("https://cdn.discordapp.com/attachments/763358407666696205/767815510775169085/unknown.png");

exports.embedException = embedException;
