const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const insults = require("./insults.js");

const roomName = "nicebot";
const badLetter = "a";

const config = JSON.parse(fs.readFileSync('config.json'));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomItem(arr) {
  return arr[getRandomInt(arr.length)];
}

client.on('message', msg => {
  if (msg.channel.name !== roomName || msg.author.bot || msg.content.toLowerCase().indexOf(badLetter) === -1) return;

  const insultWord = randomItem(insults.words);
  const insultPhrase = randomItem(insults.phrases);

  msg.reply(`look, you ${insultWord}, you know not to use that letter, so I have to delete your message! ${insultPhrase}`);
  msg.delete();
});

client.login(config.discordKey);