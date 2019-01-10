//invite.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {

    var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor('36393e')
    .setDescription(`Olá, Olá, **${nomeeapelido}**, Vejamos que deseja me adicionar no seu servidor, Então para me adicionar so basta clicar [aqui](https://discordapp.com/oauth2/authorize?client_id=522881366019407892&scope=bot&permissions=66321471)`)
    message.channel.send(embed)
}

module.exports.help = {name: "convite"}
