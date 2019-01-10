//staff.js:
const Discord = require('discord.js');
var Database = require('../database.js');

module.exports.run = async (Robin, message, args) => {

  Database.Users.find({
    owner: true,
  }, (err, owner) => {
  Database.Users.find({
    subowner: true,
  }, (err2, subowner) => {
  Database.Users.find({
    dev: true,
  }, (err3, dev) => {
  Database.Users.find({ 
    sup: true,
  }, (err4, sup) => {
    Database.Users.find({
    dzn: true,
  }, (err5, dzn) => {
      
  const donos = owner.map(a => '**' + Robin.users.get(a._id).tag + '**').join('\n');
  const subdonos = subowner.map(a => '**' + Robin.users.get(a._id).tag + '**').join('\n');
  const desenvolvedores = dev.map(a => '**' + Robin.users.get(a._id).tag + '**').join('\n');
  const supervisores = sup.map(a => '**' + Robin.users.get(a._id).tag + '**').join('\n');
  const designers = dzn.map(a => '**' + Robin.users.get(a._id).tag + '**').join('\n');
      
message.channel.startTyping();  
var embed = new Discord.RichEmbed() 
.setTitle('**Minha Staff**')
.setThumbnail(Robin.user.displayAvatarURL)
.setColor('36393e')
.addField("👑 Donos :", `${donos || '**Nenhum**'}`)
.addField("👑 Sub-Donos :", `${subdonos || '**Nenhum**'}`)
.addField("🔧 Desenvolvedores :", `${desenvolvedores || '**Nenhum**'}`)
.addField("🎓 Supervisores :", `${supervisores || '**Nenhum**'}`)
.addField("🎨 Designers :", `${designers || '**Nenhum**'}`)
message.channel.send(embed)
message.channel.stopTyping(); 
        })
      })
    })
  })
})
}

module.exports.help = {name: "staff"}
