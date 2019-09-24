module.exports.run = (client, message, args) => {
const member = message.mentions.users.first();
member.ban("REASON")
}
