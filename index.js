const Discord = require('discord.js');
const client = new Discord.Client();
const version = "0.0.1"


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} on version ${version}`);
});

client.on('message', msg => {
  
});

client.login(process.env.TESTTOKEN);