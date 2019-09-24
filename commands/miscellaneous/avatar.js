const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.username}'s avatar`, ${message.author.avatarURL})
.setImage(message.author.avatarURL)

message.channel.send(embed)
}
