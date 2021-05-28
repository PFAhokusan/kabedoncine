const Config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('起動したで');
});

client.on('message', message => {
	if (message.content.includes('うんち')) {
		message.channel.send('ぶり。');
	}
});

client.login(Config.token);
