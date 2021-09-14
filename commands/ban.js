module.exports = {
    name: 'ban',
    description: "this command bans a user",
    // pass in client, message, args, Discord from our command handler thing
    execute(client, message, args, Discord){
        const user = message.mentions.users.first();
        if(user){
            const userTarget = message.guild.members.cache.get(user.id);
            userTarget.ban();
            message.channel.send('user was banned')
        } else {
            message.channel.send('user was not banned')
        }

    }
}