//unban.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   
    
if(!message.guild.me.hasPermissions("BAN_MEMBERS")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);
   
let usuario = message.guild.members.get(args[0])
if(!usuario) return message.channel.send(`\`${nomeeapelido}\`, Você esqueçeu de colocar o **ID** do membro que deseja desbanir!`);


message.guild.unban(usuario)
return message.channel.send(`\`${nomeeapelido}}\`, o usuario **${usuario.username}** foi desbanido com sucesso!`);

}

module.exports.config = {name: "unban"}
