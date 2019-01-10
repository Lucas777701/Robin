//unlock.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message, args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   
    
if(!message.guild.me.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);
    
let cargo = message.guild.roles.find(c => c.name === "@everyone")
message.channel.overwritePermissions(cargo, {
SEND_MESSAGES: true,

});

return message.channel.send(`\`${nomeeapelido}\`, o canal ${message.channel} foi destrancado com sucesso!`);


}

module.exports.help = {name: "lock"}
