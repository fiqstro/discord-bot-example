module.exports.run = (client, message, args) => {
   if(message.author.id !== '400845681574674442') return;
  client.destroy()
  client.login("YOUR TOKEN") // It is reccomended that you define your token somewhere else.
}
