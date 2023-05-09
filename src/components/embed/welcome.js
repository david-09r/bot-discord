const { EmbedBuilder } = require("discord.js");

function embedWelcome(userName) {
  const embedBuilderJson = {
    color: 0x0099ff,
    title: `Hola ${userName}`,
    author: {
      name: 'Fepo R',
      icon_url: 'https://cdn.discordapp.com/emojis/1013557155951022130.webp?size=96&quality=lossless'
    },
    thumbnail: {
      url: 'https://cdn.discordapp.com/icons/843210859060789299/a_5cb8404303b8d09ae83435f0f53b6d6c.gif',
    },
    fields: [
      {
        name: "",
        value: " Bienvenido al server de Discord. Soy FepoT un bot exclusivo del server y estoy encargado de mostrarte todas las redes del Fepo, aquí tienes todas las redes del Fepo:",
        inline: false
      },
      {
        name: "📌 Youtube ➡️",
        value: "https://www.youtube.com/@FepoR",
        inline: false
      },
      {
        name: "📌 Twitch ➡️",
        value: "https://www.twitch.tv/fepo__",
        inline: false
      },
      {
        name: "📌 Instagram ➡️",
        value: "https://www.instagram.com/f.epo_r/",
        inline: false
      },
      {
        name: "📌 Tiktok ➡️",
        value: "https://www.tiktok.com/@fepo.r",
        inline: false
      }
    ],
    footer: {
      text: "Los modales hacen a los socios",
      icon_url: "https://cdn.discordapp.com/icons/843210859060789299/a_5cb8404303b8d09ae83435f0f53b6d6c.gif"
    }
  }
  return embedBuilderJson;
}

module.exports = embedWelcome;