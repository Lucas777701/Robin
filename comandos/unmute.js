//unmute.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("MANAGE_ROLES")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   
    
if(!message.guild.me.hasPermissions("MANAGE_ROLES")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);
    
let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${nomeeapelido}\`, Você esqueçeu de **mencionar** o membro que deseja desmutar!`);

let muterole = message.guild.roles.find(c => c.name === "MUTED")

message.guild.member(usuario).removeRole(muterole);
return message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi desmutado com sucesso!`);

}

module.exports.help = {name: "unmute"}
