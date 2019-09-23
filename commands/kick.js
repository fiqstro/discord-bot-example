const Discord = require('discord.js')

module.exports.run = (client, message, args) => {

const member = message.mentions.users.first();
member.kick('REASON')

}
