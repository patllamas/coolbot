const Discord = require('discord.js');

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

const prefix = '%';

client.once('ready', () => {
    console.log('bot is online!');
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('boop');
    }
});

client.on('message', message => {

})

// this has to be the last line
client.login('ODg1NTMzODA5NTAyNzM2NDQ1.YToboA.jHCH3o5BGdzufotW6CCDfSyzzoE');