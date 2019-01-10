//setstaff.js:
const Discord = require('discord.js');
var Database = require('../database.js');
var ownerID = '408063163003568133';

module.exports.run = async (Robin, message, args) => {

if(message.author.id !== ownerID) return message.channel.send(`\`${message.author.username}\`, Sem permissão!`);

if(args[0] === 'designer'){
  
  let usuario = message.mentions.users.first();

  Database.Users.findOne({
    '_id': usuario.id,
  }, async function (err, doc) {
    if(doc) {
    if(doc.dzn) {
    doc.dzn = false
    doc.save()
      await message.channel.send(`\`${message.author.username}\`, Usuario não e mais um designer.`);
      
    }else{
    doc.dzn = true
    doc.save()
     await message.channel.send(`\`${message.author.username}\`, Usuario agora e um designer.`); 
    }
    } else {
      var user = Database.Users({
        '_id': usuario.id,
      })
      user.save()
   }
 })
}

if(args === 'sup'){
  
let usuario = message.mentions.users.first();

Database.Users.findOne({
 '_id': usuario.id,
}, async function (err, doc) {
   if(doc) {
   if(doc.sup) {
   doc.sup = false
   doc.save()
    await message.channel.send(`\`${message.author.username}\`, Usuario não e mais um supervisor.`);
     
   }else{
   doc.sup = true
   doc.save()
    await message.channel.send(`\`${message.author.username}\`, Usuario agora e um supervisor.`);
    }
    } else {
      var user = Database.Users({
        '_id': usuario.id,
      })
      user.save()
   }
 })
}

if(args[0] === 'dev'){

let usuario = message.mentions.users.first();
  
Database.Users.findOne({
 '_id': usuario.id,
}, async function (err, doc) {
   if(doc) {
   if(doc.dev) {
   doc.dev = false
   doc.save()
    await message.channel.send(`\`${message.author.username}\`, Usuario não e mais um desenvolvedor.`);
     
   }else{
   doc.dev = true
   doc.save()
     await message.channel.send(`\`${message.author.username}\`, Usuario agora e um desenvolvedor.`);
     }
     } else {
      var user = Database.Users({
        '_id': usuario.id,
      })
      user.save()
   }
 })
}

if(args[0] === 'sub-owner'){

let usuario = message.mentions.users.first();
  
Database.Users.findOne({
  '_id': usuario.id,
}, async function (err, doc) {
   if(doc) {
   if(doc.subowner) {
   doc.subowner = false
   doc.save()
    await message.channel.send(`\`${message.author.username}\`, Usuario não e mais um sub-dono.`);
     
   }else{
   doc.subowner = true
   doc.save()
    await message.channel.send(`\`${message.author.username}\`, Usuario agora e um sub-dono.`);
        }
     } else {
      var user = Database.Users({
        '_id': usuario.id,
      })
      user.save()
   }
 })
}


if(args[0] === 'owner'){
  
let usuario = message.mentions.users.first();
  
Database.Users.findOne({
  '_id': usuario.id,
}, async function (err, doc) {
   if(doc) {
   if(doc.owner) {
   doc.owner = false
   doc.save()
    await message.channel.send(`\`${message.author.username}\`, Usuario não e mais um dono.`);
    
   }else{
   doc.owner = true
   doc.save()
    await message.channel.send(`\`${message.author.username}\`, Usuario agora e um dono.`);
        }
     } else {
      var user = Database.Users({
        '_id': usuario.id,
      })
      user.save()
   }
 })
}
}

module.exports.help = {name: "setstaff"}
