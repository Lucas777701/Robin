//ban.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   

if(!message.guild.me.hasPermissions("BAN_MEMBERS")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${nomeeapelido}\`, Você esqueçeu de **mencionar** o membro que deseja banir!`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`\`${nomeeapelido}\`, Você se esqueceu de colocar a **razão**!`);

message.guild.member(usuario).ban(razao)

return message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi banido com sucesso!`);

}

module.exports.config = {name: "kick"}
