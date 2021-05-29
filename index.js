const Config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('起動したで');
	client.user.setActivity('うんち', { type: 'LISTENING' });
});

client.on('message', message => {
	console.log(message.content);
	if (message.content.includes('うんち')) {
		message.react('839894283062607912');
	}
	if (message.content.includes('839894283062607912')) {
		message.react('839894331711815730');
	}
});

client.login(Config.token);
