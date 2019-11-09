const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;

var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(`:eight_pointed_black_star:| **Duyurunun yapalaca�� kanal�n ad�n� yaz**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **B�le bir kanal bulamad�m**');
        room = collected.first().content;
        collected.first().delete();

            msg.edit(':eight_pointed_black_star:| **��imdi de duyuruyu yaz bakal�m**').then(msg => {
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
                  .setDescription(`**:trophy: Duyuruyu Yapan Admin:** **${message.author.username} **\n-----------------------------\n**:loudspeaker: Yapılan Duyuru:** \n ** ${title} **`)
                  .setFooter("TrexBot | Duyuru Sistemi");
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **YENݰ DUYURU!** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {

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
  description: 'Duyurumu mi? Sunucunda g�zel �eyler olacak :3',
  usage: 'duyuru'
};
