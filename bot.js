const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const db = require("quick.db")

// Please delete this code if you are not using Glitch.
const http = require("http");
const express = require("express"); 
const app = express(); 

const pf = new db.table('prefix') // Defining table for guild prefix.

const prefix = "YOUR-PREFIX"
const token = "YOUR-TOKEN" // It is reccomended that you keep your token in a seperate file from bot.js

client.on("ready", () => {
  console.log("Bot is connected!");
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome-channel');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
// This is the command handler, it will keep all of your commands into seperate files.
// This will organize your commands.
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
  
  const fetched = await pf.fetch(`prefix_${message.guild.id}`)
  if (fetched === null) prefix = "YOUR-PREFIX"
  else prefix = fetched; 
  // Allowing the db to change the prefix.
})

// Please delete this code if you are not using Glitch.
// This keeps the bot online 24/7
// It is reccomended that you use Uptime Robot also, because the bot will not go offline randomly.
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(token);
