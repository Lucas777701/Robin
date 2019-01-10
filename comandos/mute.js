//mute.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {
var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
if(!message.member.hasPermissions("MANAGE_ROLES")) return message.channel.send(`\`${nomeeapelido}\`, Sem permissão!`);   
  
if(!message.guild.me.hasPermissions("MANAGE_ROLES")) return message.channel.send(`\`${nomeeapelido}\`, Eu não tenho as permissões necessarias para isto.`);
  
let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${nomeeapelido}\`, Você esqueçeu de **mencionar** o membro que deseja mutar!`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`\`${nomeeapelido}\`, Você se esqueceu de colocar a **razão**!`);

let muterole = message.guild.roles.find(c => c.name === "MUTED")
if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "MUTED",
        color: "#8a8888",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          VIEW_CHANNEL: false

        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }


message.guild.member(usuario).addRole(muterole);
return message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi mutado com sucesso!`);

}

module.exports.config = {name: "mute"}
