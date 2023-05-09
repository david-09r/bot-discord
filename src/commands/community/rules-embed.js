const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const embedRules = require("../../components/embed/rules.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reglas")
    .setDescription("Reglas del servidor")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
      const rules = embedRules();
      await interaction.reply({ embeds: [rules] })
    }
}