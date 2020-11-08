const Discord = require("discord.js");

function embedSucess(success) {
    let cunt = new Discord.MessageEmbed().setColor("#66ff33").setTitle("SUCESS").setDescription(success);

    return cunt;
}

exports.embedSucess = embedSucess;
