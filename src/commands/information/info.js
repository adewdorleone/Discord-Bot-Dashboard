const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'about',
  aliases: ['info', 'botinfo'],
  run: async (client, message, args) => {
    const everyGuild = client.guilds.cache.map((guild) => guild.memberCount);
    const userCount = everyGuild.reduce((x, y) => x + y);
    
    message.reply({
      embeds: [new MessageEmbed()
      .setColor('PURPLE')
      .setDescription(`This discord bot is an open-source project. You an star my GitHub repo if you love my work. 

**CREDITS**
﹒This bot is coded by elvin blood#9955
﹒[Click Here](https://discord.gg/pKaJ488BQd) for official server of this bot.
﹒To invite this bot, [click me](https://discord.com/oauth2/authorize?client_id=1006996302623690794&permissions=8&scope=bot%20applications.commands)!

**BOT INFO**
﹒Owner :: Sxlitude
﹒Library :: discord.js
﹒Latency :: ${client.ws.ping}ms
﹒Guilds :: ${client.guilds.cache.size.toLocaleString()}
﹒Users :: ${userCount.toLocaleString()}`)]
    })
  }
}
