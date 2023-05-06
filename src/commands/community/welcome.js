const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hola")
    .setDescription("Saludo"),
  async execute(interaction) {
    await interaction.reply("Hola, bienvenido!");
  },
};
