const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
let timeout = 1000000 // cooldown time in ms.
let amount = Math.floor(Math.random() * 100) + 1

const dl = new db.table('daily')
const mn = new db.table('money')

    let daily = await dl.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Please wait **${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
    } else {
    
    message.channel.send(`You collected **${amount}**`)
    mn.add(`money_${message.author.id}`, amount)
    dl.set(`daily_${message.author.id}`, Date.now())
}
