const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = 'g!'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardým Menüsü')
  .setDescription(`:white_small_square: \`${p}yardým eðlence\` = Eðlence Komutlarýný Listeler. \n\n:white_small_square: \`${p}yardým yetkili\` = Yetkili Komutlarýný Listeler. \n\n:white_small_square: \`${p}yardým genel\` = Genel Komutlarý Listeler.`)
  message.channel.send({embed})
}
   if (arg === 'eðlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eðlence Komutlarý')
  .setDescription(`:white_small_square: \`${p}gif\` = Gif gösterir. \n:white_small_square: \`${p}1vs1\` = Ýstediðin kiþiyle 1vs1 atarsýn. \n:white_small_square: \`${p}ara155\` = Polisi arar. \n:white_small_square: \`${p}arkadaþýn\` = Arkadaþýný bilir. \n:white_small_square: \`${p}ateþet\` = Ýstediðin kiþiye ateþ eder. \n:white_small_square: \`${p}avatar\` = Avatarýnýzý gösterir. \n:white_small_square: \`${p}aþkölcer\` = Aþkýnýzý ölçer. \n:white_small_square: \`${p}balýk-tut\` = Balýk tutar. \n:white_small_square: \`${p}bayrak\` = Bayrak gösterir. \n:white_small_square: \`${p}fake-mesaj\` = Kiþi hakkýnda sahte mesaj yazabilirsiniz. \n:white_small_square: \`${p}havadurumu\` = Hava durumunu gösterir. \n:white_small_square: \`${p}rastgele-renk\` = Rastgele renk seçer. \n:white_small_square: \`${p}herkesebendençay\` = Herkese benden çay söyler. \n:white_small_square: \`${p}mcbaþarým\` = Minecraft baþarýmý verir. \n:white_small_square: \`${p}slots\` = Slots oyunu oynatýr. \n:white_small_square: \`${p}strestçarký\` = Strest çarký çevirir. \n:white_small_square: \`${p}tkm\` = Tas kaðýt makas oyunu oynatýr. \n:white_small_square: \`${p}trampet\` = Trampet çalar. \n:white_small_square: \`${p}ucan-tekme\` = Uçan tekme atar. \n:white_small_square: \`${p}urfa-gonder\` = Urfa gönderir. \n:white_small_square: \`${p}reklamlar\` = Reklam gösterir.`)
  message.channel.send(embed)
}
  if (arg === 'genel' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Genel Komutlarý:')
      .setDescription(`:white_small_square: \`${p}davet\` = Botu sunucunuza davet edebilirsiniz. \n:white_small_square: \`${p}duyuru\` = Duyuru yapabilirsiniz. \n:white_small_square: \`${p}yapýmcým\` = Botun yapýmcýsýný gösterir. \n:white_small_square: \`${p}afk-ol\` = Afk moduna geçersiniz. \n:white_small_square: \`${p}afk-çýk\` = Afk modundan çýkarsýnýz. \n:white_small_square: \`${p}ailemiz\` = Botun hangi sunucularda oldugunu gösterir. \n:white_small_square: \`${p}ping\` = Botun pingini gösterir. \n:white_small_square: \`${p}google\` = Arama yapar. \n:white_small_square: \`${p}istatistik\` = Botun istatistiðini gösterir. \n:white_small_square: \`${p}javascript\` = Discord <#> JS rölü verir. \n:white_small_square: \`${p}atatürk\` = Atatürkü Gösterir. \n:white_small_square: \`${p}atatürk-çerçeve\` = Atatürk'ün çerçevelenmiþ fotorafýný gösterir. \n:white_small_square: \`${p}kullanýcýbilgim\` = Komut kullanan kiþinin kullanýcý bilgisini gösterir. \n:white_small_square: \`${p}mesaj-kucult\` = Belirtdiðiniz mesajý küçültür. \n:white_small_square: \`${p}romen-rakamý\` = Roman rakamlarýný gösterir. \n:white_small_square: \`${p}emojiler\` = Sunucudaki emojileri gösterir. \n:white_small_square: \`${p}slowmode\` = Sunucuda yazma hýzýný ayarlarsýn. \n:white_small_square: \`${p}sunucu-bilgi\` = Sunucu hakkýnda bilgi verir. \n:white_small_square: \`${p}sunucu-tanýt\` = Sunucuyu tanýtýr. \n:white_small_square: \`${p}sunucu-kur\` = Geliþmiþ sunucu kurar. \n:white_small_square: \`${p}sunucu-resmi\` = Sunucu resmini gösterir.`)
      return message.channel.send(embed);
}
   if (arg === 'yetkili' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('Yetkili Komutlarý:')
      .setDescription(`:white_small_square: \`${p}ban\` = Sunucudaki kiþileri banlaya bilirsiniz. \n:white_small_square: \`${p}unban\` = Sunucudaki kiþinin banýný kaldýrmaya yarar. \n:white_small_square: \`${p}kick\` = Sunucudan kiþileri atabilirsiniz. \n:white_small_square: \`${p}mute\` = Sunucudaki kiþileri susturabilirsiniz. \n:white_small_square: \`${p}uyar\` = Sunucudaki kiþileri uyarabilirsiniz.  \n:white_small_square: \`${p}ototag\` = Otomatik tag verir. \n:white_small_square: \`${p}stat-ayarla\` = Statý ayarlar.  \n:white_small_square: \`${p}sayaç-ayarla\` = Sayaçý ayarlar. \n:white_small_square: \`${p}sayaç-sýfýrla\` = Sayaçý sýfýrlar. \n:white_small_square: \`${p}otorol\` = Sunucudaki kiþilere otomatik rol verir. \n:white_small_square: \`${p}otorol-kapat\` = Otorolü kapatýr. \n:white_small_square: \`${p}otorol-mesaj-kapat\` = Otorol mesajý kapatýr. \n:white_small_square: \`${p}küfür-engelle\` = Küfür engelini açar. \n:white_small_square: \`${p}link-engelle\` = Link engelini açar. \n:white_small_square: \`${p}giriþ-çýkýþ-ayarla\` = Giriþ ve çýkýþý ayarlar. \n:white_small_square: \`${p}mod-log-ayarla\` = Log kanalýný ayarlar. \n:white_small_square: \`${p}prefix-ayarla\` = Botun prefixsini ayarlayabilirsiniz. \n:white_small_square: \`${p}ses-kanalý-aç\` = Ses kanalý açar. \n:white_small_square: \`${p}temizle\` = Belirtiðiniz miktarda mesajý siler. \n:white_small_square: \`${p}çekiliþ\` = Sunucuda çekiliþ yapar. \n:white_small_square: \`${p}oylama\` = Sunucuda oylama yapar.`)
      return message.channel.send(embed);
}  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardým','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardým',
  description: 'Geliþmiþ Yardým Menüsü',
  usage: 'yardým'
};