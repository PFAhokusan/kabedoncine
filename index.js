const Config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const musics = require('./musics.json');

client.once('ready', () => {
	console.log('起動したで');
	client.user.setActivity('うんち', { type: 'LISTENING' });
});

client.on('message', async message => {
	console.log(message.content);
	if (message.content.includes('うんち')) {
		message.react('839894283062607912');
	}
	if (message.content.includes('839894283062607912')) {
		message.react('839894331711815730');
	}

	musics.forEach(async v => {
		if (message.content.startsWith(v.command)) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
				const dispatcher = connection.play(v.resource);

				dispatcher.on('start', () => {
					message.channel.send(`playing ${v.name}`)
				});

				dispatcher.on('finish', () => {
					connection.disconnect();
				});
			}
		}
	});
});

client.login(Config.token);
