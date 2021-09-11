const Discord = require('discord.js');

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});


const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// this has to be the last line
client.login('ODg1NTMzODA5NTAyNzM2NDQ1.YToboA.jHCH3o5BGdzufotW6CCDfSyzzoE');