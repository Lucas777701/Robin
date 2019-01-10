const Discord = require('discord.js');
var radios = require('../radio.json');
var opusscript = require('opusscript');

module.exports.run = async(Robin, message, args) => {
    var nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
    if (args[0] == null ){
        return message.channel.send(`\`${nomeeapelido}\`, Você não definiu os argumentos corretos. Use **rb.radio lista**, Para listar as radios!`);
    }
    
    var brfliter = radios.filter(a=>a.pais =="Brasil")
    var br = brfliter.map(b=>`\`${b.id}\` ❯ ${b.name}`)
    var usfilter = radios.filter(a=>a.pais=="EUA")
    var us = usfilter.map(b=>`\`${b.id}\` ❯ ${b.name}`)

    if (message.content.startsWith(`rb.radio lista`)){
        var embed = new Discord.RichEmbed()
        embed.setColor('36393e');
        let embed2 = new Discord.RichEmbed()
        var desc = "";
        radios.forEach(r => desc += `${r.id}. ${r.name}\n`);
        embed.setDescription(`
:flag_br: => \`Estações Brasileiras\`
:flag_us: => \`Estações Americanas\``);
message.channel.send(embed).then(msg=>{
    msg.react('🇧🇷').then(()=>{
        msg.react('🇺🇸').then(()=>{
            msg.react('⬅')
        })
    })

    const filter = (reaction, user) => (reaction.emoji.name === "🇺🇸" || reaction.emoji.name === "🇧🇷" || reaction.emoji.name === "⬅") && user.id === message.author.id
    let collector = msg.createReactionCollector(filter, {time: 60000});
    collector.on('collect', async react => {
        if (react.emoji.name == "🇧🇷"){
            embed2.setColor('36393e')
            embed2.setDescription(`:flag_br: Estações Brasileiras
            ${br.join('\n')}`)
            msg.edit(embed2)
            react.remove(message.author.id)
        } else if (react.emoji.name == "🇺🇸"){
            embed2.setColor('36393e')
            embed2.setDescription(`:flag_us: Estações Americanas
            ${us.join('\n')}`)
            msg.edit(embed2)
            react.remove(message.author.id)
        } else if (react.emoji.name == "⬅") {
            msg.edit(embed)
            react.remove(message.author.id)
        }
    })
})
    
} else {
    var radio = {};
    var zn = false;
    radios.forEach(r => {
        if(args[0] == r.id) {
            radio = r;
            zn = true;
        }
    });

    var sChannel = message.member.voiceChannel;
    const permissoes = sChannel.permissionsFor(Robin.user.id);

    if (!permissoes.has("CONNECT")) {
        return message.channel.send(`\`${nomeeapelido}\`, Não e possível eu ligar a radio no canal. Pois não tenho permissão para entra.`);
    }

    if (!permissoes.has("SPEAK")) {
        return message.channel.send(`\`${nomeeapelido}\`, Não e possível eu ligar a radio no canal. Pois não tenho permissão para falar.`);
    }

    if (!zn && args[0] == Number) return message.channel.send(`\`${nomeeapelido}\`, Este número de rádio não foi encontrada ou está incorreta.`);
    if (args[0] && !message.member.voiceChannel) return message.channel.send(`\`${nomeeapelido}\`, Não é possível conectar sem você estar em um canal!`);
    if (message.guild.member(Robin.user.id).voiceChannel != sChannel) {
        sChannel.join().then(con => {
        con.playStream(radio.url)
        return message.channel.send(`\`${nomeeapelido}\`, Ligando a radio \`${radio.name}\` do pais \`${radio.pais}\`.`);
        })
    }
    if (message.content.startsWith('rb.radio sair')){
        if (message.guild.member(Robin.user).voiceChannel) {
            message.guild.member(Robin.user.id).voiceChannel.leave()
          message.channel.send(`\`${nomeeapelido}\`, Estou me desconectando do canal \`${message.member.voiceChannel.name}\`.`)
                      }
                    }
                }
            }
