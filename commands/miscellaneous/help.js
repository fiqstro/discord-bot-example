const fs = require('fs')

module.exports.run = (client, message, args) => {
const commands = fs.readFileSync('./txtfiles/commands.txt')
message.channel.send(commands)
}
