const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reglas")
    .setDescription("Reglas del servidor"),
  async execute(interaction) {
    await interaction.reply("Hola, bienvenido!");
  },
};
