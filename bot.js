const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();

// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
bot.music = require("discord.js-musicbot-addon");

// Now we start the music module.
bot.music.start(bot, {
    // Set the api key used for YouTube.
    // This is required to run the bot.
    youtubeKey: process.env.BOT_YOUTUBE_TOKEN,
    botPrefix: PREFIX
});

// Events.
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `k!help | ${bot.guilds.size}`, type: 0 } });
    bot.user.setStatus('idle');
});

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Меня добавили на ${guild.name} (id: ${guild.id})`);
  bot.user.setPresence({ game: { name: `k!help | ${bot.guilds.size}`, type: 0 } });
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Меня удалили с ${guild.name} (id: ${guild.id})`);
  bot.user.setPresence({ game: { name: `k!help | ${bot.guilds.size}`, type: 0 } });
});

// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);
