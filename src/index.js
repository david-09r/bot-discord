const fs = require("node:fs");
const path = require("node:path");
const { Client, GatewayIntentBits, Collection, Events, EmbedBuilder } = require("discord.js");
const embedRules = require("./components/embed/rules.js");
const config = require("./config/client.json");
const embedWelcome = require("./components/embed/welcome.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.commands = new Collection();

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (e) {
    console.error(e);
    if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
  }
});

client.on(Events.GuildMemberAdd, member => {
	const welcome = embedWelcome(member.user.username);
	const rules = embedRules();
	member.user.send({ embeds: [welcome, rules] });
});

client.login(config.API_KEY).then((response) => {
  console.log("Bot is online!");
});
