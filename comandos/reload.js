//reload.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message, args) => {

if (message.author.id !== '408063163003568133') return message.channel.send(`\`${message.author.username}\`, Você não tem permissão.`)
  let cu = args.slice(0).join(' ');
  if (cu.length < 1) return message.channel.send(`\`${message.author.username}\`, Coloque o nome do comando.`);
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch (e) {
      return message.channel.send(`\`${message.author.username}\`, Comando "**${args[0]}**" não encontrado`);
  }
  message.channel.send(`\`${message.author.username}\`, Comando "**${args[0]}**" reiniciado.`)

}

module.exports.help = {name: "reload"}
