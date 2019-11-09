const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = (fs.readFileSync("././ayarlar/küfürEngelle.json", "utf8"));

exports.run = async (client, message) => {
  
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply("aç veya kapat yaz!");

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply("/küfür aç veya kapat yazınız!")

	if (secenekler === "aç" || secenekler === "on") {
		
      
    
		message.channel.send("İşlem Başarılı: Açık!")
    
  if(!küfürEngel[message.guild.id]){
		küfürEngel[message.guild.id] = {
			küfürEngel: "acik"
		  };
  };

		  fs.writeFile("././ayarlar/küfürEngelle.json", JSON.stringify(küfürEngel), (x) => {
        if (x) console.error(x)
      })
	};

	if (secenekler === "kapat" || secenekler === "off") {
    
               if(!küfürEngel[message.guild.id]){
		küfürEngel[message.guild.id] = {
			küfürEngel: "kapali"
		  };
  };

		fs.writeFile("././ayarlar/küfürEngelle.json", JSON.stringify(küfürEngel), (x) => {
        if (x) console.error(x)
      })

       delete küfürEngel[message.guild.id]
       delete küfürEngel[message.guild.id]

	return	message.channel.send("İşlem Başarılı: Kapalı!")
    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['küfür-engelle'],
		permLevel: 3
	  };
	  
	exports.help = {
		name: 'küfürs',
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'küfür <aç/kapat>'
	};