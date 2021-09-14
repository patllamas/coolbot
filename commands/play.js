const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const { getVoiceConnection } = require('@discordjs/voice');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'play',
    description: 'Joins and plays a youtube video',
    async execute(message, args) {
        // const voiceChannel = message.member.voice.channel;

        const currentConnection = getVoiceConnection(myVoiceChannel.guild.id);

        const connection = await joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        if(!currentConnection) return message.channel.send('Please join a voice channel first.');
        const permissions = currentConnection.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('You do not have the correct permissions for this command.');
        if(!permissions.has('SPEAK')) return message.channel.send('You do not have the correct permissions for this command.');
        if (!args.length) return message.channel.send('You need to send the 2nd argument!');

        // const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                currentConnection.leave();
            });

            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('No video results found')
        }
    }
}