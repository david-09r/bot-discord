const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const embedWelcome = require("../../components/embed/welcome.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hola")
    .setDescription("Saludo")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const welcome = embedWelcome();
    await interaction.reply({ embeds: [welcome] });
  }
};
