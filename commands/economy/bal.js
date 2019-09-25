const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
const mn = new db.table('money')
    let bal = mn.fetch(`money_${message.author.id}`)

    if (bal === null) bal = 0;

    message.channel.send(`You currently have **$${bal}**`)
}
