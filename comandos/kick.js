//kick.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   

if(!message.guild.me.hasPermissions("KICK_MEMBERS")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${nomeeapelido}\`, Você esqueçeu de **mencionar** o membro que deseja kickar!`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`\`${nomeeapelido}\`, Você se esqueceu de colocar a **razão**!`);

message.guild.member(usuario).kick(razao)

return message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi kickado com sucesso!`);

}

module.exports.config = {name: "kick"}
