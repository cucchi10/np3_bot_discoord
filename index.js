require('dotenv').config({ path: 'deploy/.env' });

const { getActionOfmessage, handleAction } = require('./src/service/actions');

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


client.on('messageCreate', async message => {
  try {
    if (message.author.bot) return;
    const action = getActionOfmessage(message.content);
    if (!action) return;
    await handleAction(message, action);
  } catch (error) {
    console.error(error);
    return;
  }
});


// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);