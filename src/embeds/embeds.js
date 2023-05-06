const { EmbedBuilder } = require("discord.js");

function embedBuilder() {
  const embedBuilderJson = {
    color: 0x0099ff,
    title: "Reglas de servidor",
    author: {
      name: 'Fepo R',
      icon_url: 'https://cdn.discordapp.com/emojis/1013557155951022130.webp?size=96&quality=lossless'
    },
    thumbnail: {
      url: 'https://cdn.discordapp.com/icons/843210859060789299/a_5cb8404303b8d09ae83435f0f53b6d6c.gif',
    },
    fields: [
      {
        name: "📌1 ➡ Discusiones fuera de control",
        value: "Cualquier discusión que se salga de control será revisada por los administradores. Si se determina que alguien inició la discusión, esa persona será suspendida o advertida. Si sigues la discusión, también podrías ser sancionado.",
        inline: false
      },
      {
        name: "📌2 ➡ Canal de memes **📸┃memes-reacción**",
        value: "El canal **📸┃memes-reacción** está destinado únicamente para compartir memes. No está permitido escribir comentarios en ese canal, pero sí puedes reaccionar a los memes con emojis. Los memes compartidos allí serán utilizados en futuros videos.",
        inline: false
      },
      {
        name: "📌3  ➡  Eventos en comunidad",
        value: "De vez en cuando organizamos eventos en los que jugamos y nos divertimos en comunidad. Si estás interesado en participar, te recomendamos unirte a nosotros.",
        inline: false
      },
      {
        name: "📌4 ➡ Prohibición de spam",
        value: "El spam no está permitido en el servidor y cualquier persona que lo envíe será suspendida permanentemente.",
        inline: false
      },
      {
        name: "📌5 ➡  Nada de ✨NSFW✨",
        value: "No está permitido compartir contenido NSFW en ningún canal del servidor, incluso en el canal #NSFW. Si alguien comparte ese tipo de contenido, será sancionado inmediatamente.",
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

module.exports = embedBuilder;