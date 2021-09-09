const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    console.log('bot is online!');
})

// this has to be the last line
client.login('ODg1NTMzODA5NTAyNzM2NDQ1.YToboA.jHCH3o5BGdzufotW6CCDfSyzzoE');