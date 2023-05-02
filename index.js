require('dotenv').config({ path: 'deploy/.env' });

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers,],
});



// When the client is ready, run this code (only once)
client.once('ready', async () => {
  console.log('Ready!');
});



client.on('messageCreate', message => {
  if (message.content.includes('pene')) {
    message.reply("QUERES PENE?")
  }
});

client.on("messageReactionAdd", function (messageReaction, user) {
  console.log(`a reaction is added to a message`);
});

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);