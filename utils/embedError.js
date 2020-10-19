var { client } = require("../index.js");

function embedError(errorMessage) {
    let cunt = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("ERROR")
        .setDescription(errorMessage)
        .setThumbnail("https://i.imgur.com/rxJUxuu.png");

    return cunt;
}

exports.embedError = embedError;
