//tempmute.js:
const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async(Robin, message, args) => {
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
    } catch(e) {
      console.log(e.stack);
    }
  }


let mutetime = args[1]
if(!mutetime) return message.channel.send(`\`${nomeeapelido}\`, Você não especificou um tempo para o mute.`);

  message.guild.member(usuario).addRole(muterole);
  message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi mutado por: \`${ms(ms(mutetime))}\`.`);

  setTimeout(function(){
    message.guild.member(usuario).removeRole(muterole);
    message.channel.send(`\`${nomeeapelido}\`, o usuario **${usuario.username}** foi desmutado com sucesso!`)
  }, ms(mutetime));

}

module.exports.help = {name: "tempmute"}
