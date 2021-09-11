const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'mc2',
    description: "this is a ping command",
    // pass in client, message, args, Discord from our command handler thing
    execute(client, message, args, Discord){
        const embed = new MessageEmbed()
            .setTitle('hi')
            .addFields(
                { name: 'cool', value: 'cool'},
            )
        message.channel.send({ embeds: [embed]});
    }
}