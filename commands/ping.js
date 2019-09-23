const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
   const m = await message.channel.send("Pinging...")
   m.edit(m.createdTimestamp - message.createdTimestamp + "ms");
}
