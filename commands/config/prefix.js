const db = require('quick.db')

module.exports.run = (client, message, args) => {
const pf = new db.table('prefix')

pf.set(`prefix_${message.guild.id}`, args.join(' ')).then(i => {
message.channel.send(`Prefix changed to **${i}**`)
})

}
