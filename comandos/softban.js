//softban.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   
    
if(!message.guild.me.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${nomeeapelido}\`, Você esqueçeu de **mencionar** o membro que deseja banir!`);
if(!usuario.bannable) return message.channel.send(`\`${nomeeapelido}\`, Não poderei banir este usuario, pois ele pode ter um cargo mais alto, ou eu não tenho permissões de banir.`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`\`${nomeeapelido}\`, Você se esqueceu de colocar a **razão**!`);

message.guild.member(usuario).ban()
message.guild.unban(usuario)


return message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi softbanido com sucesso!`);

}

module.exports.help = {name: "softban"}
