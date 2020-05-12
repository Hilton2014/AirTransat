const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzA5NDQ5NDAwNjc3NTY0NDk4.XrrEow.8YChoCyzWhF2uLv-xc6DTs2xDK4';

bot.on('ready', () =>{
    console.log('This bot is online!');
});


bot.on('message', message => {
    if (message.channel.id === "703301929500934274") {
        message.react('✅')
            .then(() => { 
                message.react('❌')
            });
            .then(() => {
                message
            });
    }
});
  
bot.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) return;
    if (reaction.emoji.name === "❌") {
    reaction.message.delete();
    }
})

bot.login(token);
