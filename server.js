const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '--';

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

/*Commands to add
  nsfw request
*/
client.on( 'ready' , () => {
    client.user.setActivity('type ' + prefix + 'help for commands');
});

client.on('message', message => {
  
  var command = ['say', 'help', 'avatar', 'setprefix',];
  
  if(message.content.startsWith(prefix, 0)){
    if(message.content.includes(command[0])){
        message.delete();
        var n = prefix + command[0];
        var l = n.length;
        var message2 = message.content.substring(l);
        message.channel.send(message2);
    }else if(message.content.includes(command[1])){
        message.delete();
        message.channel.send('Tools:\n```css\n' + prefix + 'help will bring up the help menu\n' + prefix + 'avatar will attach your avatar```\n Config: ```css\n' + prefix + 'setprefix will set the prefix to anything typed after.```');
    }else if(message.content.includes(command[2])){
        message.delete();
        message.reply(message.author.avatarURL);
    }else if(message.content.includes(command[3])){
        var c = prefix + command[3];
        var l = c.length;
        prefix = message.content.substring(l+1);
        message.channel.send('The prefix is now: ' + prefix);
    }else{
        message.channel.send('This is not a valid command, please check the help for a list of commands');
    }
  }
});
client.login("NDQ1NzE0NDk1MTcyNTA5Njk2.DdufwQ.f5OnGutf4ND5PcVpW3mmeLlPuLg");