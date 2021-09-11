module.exports = {
    name: 'minecraft',
    description: "this command shows the server status of a minecraft server",
    // pass in client, message, args, Discord from our command handler thing
    execute(client, message, args, Discord){
        message.channel.send('offline??');
    }
}