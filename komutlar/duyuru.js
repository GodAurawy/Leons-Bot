const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;

var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(`:eight_pointed_black_star:| **Duyurunun yapalacaðý kanalýn adýný yaz**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **Böle bir kanal bulamadým**');
        room = collected.first().content;
        collected.first().delete();

            msg.edit(':eight_pointed_black_star:| **žÞimdi de duyuruyu yaz bakalým**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("#f558c9")
                  .setDescription(`**:trophy: Duyuruyu Yapan Admin:** **${message.author.username} **\n-----------------------------\n**:loudspeaker: YapÄ±lan Duyuru:** \n ** ${title} **`)
                  .setFooter("TrexBot | Duyuru Sistemi");
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **YENÝ° DUYURU!** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {

            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **Maalesef gerekli yetkilerim bulunmamakta**`);
                  console.log(e);
                }
              });
            });
          });
        });
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: 'duyuru',
  description: 'Duyurumu mi? Sunucunda güzel þeyler olacak :3',
  usage: 'duyuru'
};
