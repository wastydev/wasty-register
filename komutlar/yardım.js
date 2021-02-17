const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {

    if(!["810081700918198292"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
    return message.channel.send(new MessageEmbed().setDescription(`yetkin yok moruq.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 4000}));
      

    message.channel.send(new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .addField(`Komutlarımız`, `Made by Wasty`)
    .addField(`Erkek Kayıt`, `.e @etiket İsim Yaş`, true)
    .addField(`Kadın Kayıt`, `.k @etiket İsim Yaş`, true)
    .addField(`Kayıtsıza Atma`, `.unregister @etiket`, true)
    .addField(`Nick Değiştirme`, `.nick @etiket İsim Yaş`, true)
    .addField(`İsim Kontrol`, `.isimler @etiket`, true)
    .addField(`Toplam Kayıt`, `.sorgu & .sorgu @etiket`, true)
    .addField(`Top Teyit`, `.topteyit`, true)
    .addField(`Kayıt Sıfırlama`, `.ksıfırla @etiket`, true)
    .addField(`Mesaj Silme`, `.sil 1-100`, true)
    .addField(`Avatar Bakma`, `.avatar @etiket`)
    .setFooter('©️ Wasty'))


}
    
    
    exports.conf = { 
        enabled: true, 
        guildOnly: true, 
        aliases: ["yardım", "help", "h", "y"]
        }
        
        exports.help = {
        name: "yardım",
        usage: ".y",
        info: "komutları gösterir"
        }