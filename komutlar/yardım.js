const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = 'g!'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yard�m Men�s�')
  .setDescription(`:white_small_square: \`${p}yard�m e�lence\` = E�lence Komutlar�n� Listeler. \n\n:white_small_square: \`${p}yard�m yetkili\` = Yetkili Komutlar�n� Listeler. \n\n:white_small_square: \`${p}yard�m genel\` = Genel Komutlar� Listeler.`)
  message.channel.send({embed})
}
   if (arg === 'e�lence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('E�lence Komutlar�')
  .setDescription(`:white_small_square: \`${p}gif\` = Gif g�sterir. \n:white_small_square: \`${p}1vs1\` = �stedi�in ki�iyle 1vs1 atars�n. \n:white_small_square: \`${p}ara155\` = Polisi arar. \n:white_small_square: \`${p}arkada��n\` = Arkada��n� bilir. \n:white_small_square: \`${p}ate�et\` = �stedi�in ki�iye ate� eder. \n:white_small_square: \`${p}avatar\` = Avatar�n�z� g�sterir. \n:white_small_square: \`${p}a�k�lcer\` = A�k�n�z� �l�er. \n:white_small_square: \`${p}bal�k-tut\` = Bal�k tutar. \n:white_small_square: \`${p}bayrak\` = Bayrak g�sterir. \n:white_small_square: \`${p}fake-mesaj\` = Ki�i hakk�nda sahte mesaj yazabilirsiniz. \n:white_small_square: \`${p}havadurumu\` = Hava durumunu g�sterir. \n:white_small_square: \`${p}rastgele-renk\` = Rastgele renk se�er. \n:white_small_square: \`${p}herkesebenden�ay\` = Herkese benden �ay s�yler. \n:white_small_square: \`${p}mcba�ar�m\` = Minecraft ba�ar�m� verir. \n:white_small_square: \`${p}slots\` = Slots oyunu oynat�r. \n:white_small_square: \`${p}strest�ark�\` = Strest �ark� �evirir. \n:white_small_square: \`${p}tkm\` = Tas ka��t makas oyunu oynat�r. \n:white_small_square: \`${p}trampet\` = Trampet �alar. \n:white_small_square: \`${p}ucan-tekme\` = U�an tekme atar. \n:white_small_square: \`${p}urfa-gonder\` = Urfa g�nderir. \n:white_small_square: \`${p}reklamlar\` = Reklam g�sterir.`)
  message.channel.send(embed)
}
  if (arg === 'genel' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Genel Komutlar�:')
      .setDescription(`:white_small_square: \`${p}davet\` = Botu sunucunuza davet edebilirsiniz. \n:white_small_square: \`${p}duyuru\` = Duyuru yapabilirsiniz. \n:white_small_square: \`${p}yap�mc�m\` = Botun yap�mc�s�n� g�sterir. \n:white_small_square: \`${p}afk-ol\` = Afk moduna ge�ersiniz. \n:white_small_square: \`${p}afk-��k\` = Afk modundan ��kars�n�z. \n:white_small_square: \`${p}ailemiz\` = Botun hangi sunucularda oldugunu g�sterir. \n:white_small_square: \`${p}ping\` = Botun pingini g�sterir. \n:white_small_square: \`${p}google\` = Arama yapar. \n:white_small_square: \`${p}istatistik\` = Botun istatisti�ini g�sterir. \n:white_small_square: \`${p}javascript\` = Discord <#> JS r�l� verir. \n:white_small_square: \`${p}atat�rk\` = Atat�rk� G�sterir. \n:white_small_square: \`${p}atat�rk-�er�eve\` = Atat�rk'�n �er�evelenmi� fotoraf�n� g�sterir. \n:white_small_square: \`${p}kullan�c�bilgim\` = Komut kullanan ki�inin kullan�c� bilgisini g�sterir. \n:white_small_square: \`${p}mesaj-kucult\` = Belirtdi�iniz mesaj� k���lt�r. \n:white_small_square: \`${p}romen-rakam�\` = Roman rakamlar�n� g�sterir. \n:white_small_square: \`${p}emojiler\` = Sunucudaki emojileri g�sterir. \n:white_small_square: \`${p}slowmode\` = Sunucuda yazma h�z�n� ayarlars�n. \n:white_small_square: \`${p}sunucu-bilgi\` = Sunucu hakk�nda bilgi verir. \n:white_small_square: \`${p}sunucu-tan�t\` = Sunucuyu tan�t�r. \n:white_small_square: \`${p}sunucu-kur\` = Geli�mi� sunucu kurar. \n:white_small_square: \`${p}sunucu-resmi\` = Sunucu resmini g�sterir.`)
      return message.channel.send(embed);
}
   if (arg === 'yetkili' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('Yetkili Komutlar�:')
      .setDescription(`:white_small_square: \`${p}ban\` = Sunucudaki ki�ileri banlaya bilirsiniz. \n:white_small_square: \`${p}unban\` = Sunucudaki ki�inin ban�n� kald�rmaya yarar. \n:white_small_square: \`${p}kick\` = Sunucudan ki�ileri atabilirsiniz. \n:white_small_square: \`${p}mute\` = Sunucudaki ki�ileri susturabilirsiniz. \n:white_small_square: \`${p}uyar\` = Sunucudaki ki�ileri uyarabilirsiniz.  \n:white_small_square: \`${p}ototag\` = Otomatik tag verir. \n:white_small_square: \`${p}stat-ayarla\` = Stat� ayarlar.  \n:white_small_square: \`${p}saya�-ayarla\` = Saya�� ayarlar. \n:white_small_square: \`${p}saya�-s�f�rla\` = Saya�� s�f�rlar. \n:white_small_square: \`${p}otorol\` = Sunucudaki ki�ilere otomatik rol verir. \n:white_small_square: \`${p}otorol-kapat\` = Otorol� kapat�r. \n:white_small_square: \`${p}otorol-mesaj-kapat\` = Otorol mesaj� kapat�r. \n:white_small_square: \`${p}k�f�r-engelle\` = K�f�r engelini a�ar. \n:white_small_square: \`${p}link-engelle\` = Link engelini a�ar. \n:white_small_square: \`${p}giri�-��k��-ayarla\` = Giri� ve ��k��� ayarlar. \n:white_small_square: \`${p}mod-log-ayarla\` = Log kanal�n� ayarlar. \n:white_small_square: \`${p}prefix-ayarla\` = Botun prefixsini ayarlayabilirsiniz. \n:white_small_square: \`${p}ses-kanal�-a�\` = Ses kanal� a�ar. \n:white_small_square: \`${p}temizle\` = Belirti�iniz miktarda mesaj� siler. \n:white_small_square: \`${p}�ekili�\` = Sunucuda �ekili� yapar. \n:white_small_square: \`${p}oylama\` = Sunucuda oylama yapar.`)
      return message.channel.send(embed);
}  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yard�m','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yard�m',
  description: 'Geli�mi� Yard�m Men�s�',
  usage: 'yard�m'
};