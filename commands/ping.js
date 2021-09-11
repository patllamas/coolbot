module.exports = {
    name: 'ping',
    description: "this is a ping command",
    // pass in client, message, args, Discord from our command handler thing
    execute(client, message, args, Discord){
        message.channel.send('cool ping');
    }
}