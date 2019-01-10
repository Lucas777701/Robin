//ping.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message, args) => {

let embed = new Discord.RichEmbed()
.setDescription(`\`${message.author.username}\`, Estou com **${Math.round(Robin.ping)}**ms.`)
.setColor('36393e')
message.channel.send(embed)

}

module.exports.help = {name: "ping"}
