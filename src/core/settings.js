const prefix = process.env.prefix || ';'
const status = `To more informations, type ${prefix}help!`;


module.exports = {
  bot: {
    info: {
      prefix: process.env.prefix || ';',
      token: process.env.token,
      invLink: 'https://discord.com/oauth2/authorize?client_id=1006996302623690794&permissions=8&scope=bot%20applications.commands',
    },
    options: {
      founders: ['984760684329971712'],
      privateMode: false,
    },
    presence: {
      name: process.env.statusText || status,
      type: 'STREAMING',
      url: 'https://twitch.tv/discord'
    },
    credits: {
      developerId: '984760684329971712',
      developer: 'elvin blood#9955',
      sourceCode: 'https://bloodnuker.cf',
      supportServer: 'https://discord.gg/pKaJ488BQd'
    }
  }
}
