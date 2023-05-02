require('dotenv').config({ path: 'deploy/.env' });
const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

async function registerCommands() {

  const createDescuento = new SlashCommandBuilder()
    .setName('cargar')
    .setDescription('Cargar un descuento Bancario!')
    .addStringOption(option =>
      option
        .setName('dia')
        .setDescription('Días de la semana para el nuevo descuento')
        .setRequired(true)
        .setAutocomplete(true))
    .addStringOption(option =>
      option.setName('entidad')
        .setDescription('Nombre de la entidad para el nuevo descuento!')
        .setRequired(true)
        .setAutocomplete(true))
    .addStringOption(option =>
      option.setName('rubro')
        .setDescription('Nombre de la categoria para el nuevo descuento!')
        .setRequired(true)
        .setAutocomplete(true))
    .addStringOption(option =>
      option.setName('tienda')
        .setDescription('Nombre de la categoria para el nuevo descuento!')
        .setRequired(true)
        .setAutocomplete(true))
    .addStringOption(option =>
      option
        .setName('descuento')
        .setDescription('Descuento que generara!')
        .setRequired(true))
    .addStringOption(option =>
      option
        .setName('tope_descuento')
        .setDescription('Tope descuento que generara!')
        .setRequired(false))
    .addStringOption(option =>
      option
        .setName('consumo_optimo')
        .setDescription('Tope descuento que generara!')
        .setRequired(false))
    .addStringOption(option =>
      option
        .setName('detalle')
        .setDescription('Detalle a tener en cuenta, algun dato que pueda aportar interes!')
        .setRequired(false))
    .addStringOption(option =>
      option
        .setName('dia_reintegro')
        .setDescription('Cuando se hara el reintegro por usar este descuento?!')
        .setRequired(false))
    .addStringOption(option =>
      option
        .setName('link')
        .setDescription('Link de TYC!')
        .setRequired(false))
    .addStringOption(option =>
      option
        .setName('desde')
        .setDescription('Desde que Fecha se podra usar el Descuento! Formatos: DD/MM/YY, DD/MM/YYYY, DD-MM-YY o DD-MM-YYYY')
        .setRequired(false))
    .addStringOption(option =>
      option
        .setName('hasta')
        .setDescription('Hasta que Fecha se podra usar el Descuento! Formatos: DD/MM/YY, DD/MM/YYYY, DD-MM-YY o DD-MM-YYYY')
        .setRequired(false));


  const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

  const commands = [
    createDescuento,
  ]
    .map(command => command.toJSON());

  await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
}

module.exports = {
  registerCommands,
};

