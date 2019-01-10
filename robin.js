//robin.js:
const Discord = require('discord.js');
const {TOKEN} = require('./config.js');
const Robin = new Discord.Client({
autoReconnect: true, 
fetchAllMembers: true,
disableEveryone: true,
disabledEvents: ['guildMemberSpeaking'],
messageCacheMaxSize: 2024,
})
var mongoose = require('mongoose');
var Database = require('./database.js');
const fs = require('fs');
const moment = require('moment');
require('moment-duration-format');
moment.locale('pt-BR');

var prefixo = 'rb.'

function changing_status() {
  
  let status = [`Criado no Brasil pelo Lucas 👑#0049.`, `${Robin.users.size} usuários.`, `${Robin.guilds.size} servidores.`, `rb.help para ver meus comandos.`]
  let randomStatus = status[Math.floor(Math.random() * status.length)]
  
  Robin.user.setActivity(randomStatus, {url: 'https://twitch.tv/folhagem', type: "PLAYING"});
  
} 

Robin.on('message', message => {

let args = message.content.split(" ").slice(1); 
let cmd  =  message.content.split(" ")[0]; 

 if (message.author.bot) return;
  if (message.channel.type == "dm") return;
   if (!message.content.startsWith(prefixo)) return; 
    
  cmd = cmd.slice(prefixo.length);
 
  try {

const file = require(`./comandos/${cmd}.js`);
file.run(Robin, message, args);
console.log(`Comando ${cmd}.js foi usado no servidor ${message.guild.name}.`);

} catch(erro) {
console.log(`Ocorreu um erro no comando ${cmd}.js no servidor ${message.guild.name}!\n${erro}`);
 }
})

Robin.on('ready', () => { console.log(`${Robin.user.username}, está online!`) 
setInterval(changing_status, 10000); });
Robin.login(TOKEN).catch(err => {
 console.log(`Falha ao fazer login ao bot!\n\n${err}`);
})
