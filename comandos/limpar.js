//limpar.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   

if(!message.guild.me.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);

let deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 2 || deleteCount > 100)
return message.channel.send(`\`${nomeeapelido}\`, Você esqueceu de forneçer de **2** a **100** para limpar as mensagens!`)

let fetched = await message.channel.fetchMessages({limit: deleteCount});

message.channel.bulkDelete(fetched)
return message.channel.send(`\`${nomeeapelido}\`, Foram apagadas **${deleteCount}** mensagens com sucesso!`).then(msg => msg.delete(5000))

}

module.exports.help = {name: "limpar"}
