const { SlashCommandBuilder } = require("discord.js");
const embedRules = require("../../components/embed/rules.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reglas")
    .setDescription("Reglas del servidor"),
    async execute(interaction) {
      const rules = embedRules();
      await interaction.reply({ embeds: [rules] })
    }
}