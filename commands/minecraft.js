const util = require('minecraft-server-util');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'minecraft',
    description: 'find minecraft status',
    execute(client, message, args, Discord){
        if(!args[0]) return message.channel.send('Please enter a server ip');
        if(!args[1]) return message.channel.send('Please enter a server port');

        util.status(args[0], {port: parseInt(args[1])}).then((response) => {
            console.log(response)
            const embed = new Discord.MessageEmbed()
                .setColor('#6a41e9')
                .setTitle('Minecraft Server Status')
                .setThumbnail('https://i.imgur.com/Pzb8ihi.png')
                .addFields(
                    {name: 'Server IP', value: response.host},
                    {name: 'Server Status', value: 'Online!'},
                    // {name: 'Online Players', value: response.rawResponse.players.online},
                    // {name: 'Max Players', value: parseInt(response.maxPlayers)},
                    {name: 'Current Version', value: response.version},
                )
                .setFooter('Check out our Minecraft server: nuggets.minecraftnoob.com');

            message.channel.send({ embeds: [embed] });
        })
        .catch((error) => {
            message.channel.send('There was an error finding the server');
            throw error;
        }) 
    }
}