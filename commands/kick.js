module.exports = {
    name: 'kick',
    description: "this command kicks a user",
    // pass in client, message, args, Discord from our command handler thing
    execute(client, message, args, Discord){
        const user = message.mentions.users.first();
        if(user){
            const userTarget = message.guild.members.cache.get(user.id);
            userTarget.kick();
            message.channel.send('user was kicked')
        } else {
            message.channel.send('user was not kicked')
        }

    }
}