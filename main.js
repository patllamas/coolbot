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

// // default stuff
// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command === 'ping') {
//         client.commands.get('ping').execute(message, args)
//     }
// });

// // switch cases for less if statements
// client.on('message', message => {
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     switch(command) {
//         case 'ping2':
//             message.channel.send('this is 2nd ping');
//             break;
//     }

// })

// this has to be the last line
client.login('ODg1NTMzODA5NTAyNzM2NDQ1.YToboA.jHCH3o5BGdzufotW6CCDfSyzzoE');