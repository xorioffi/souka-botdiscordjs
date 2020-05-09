const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Client();

client.on('ready', () => {
  console.log("Je suis pret !");
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send('Pong');
});

client.login(TOKEN);