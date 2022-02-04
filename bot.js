
                (async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(err);
                  });
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
const os = require("os-utils");
const lyricsFinder = require('lyrics-finder');
let URL = require('url')
let https = require("https")
                    require('events').EventEmitter.defaultMaxListeners = 50;
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);         
                    await s4d.client.login((process.env.TOKEN)).catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('This site was created to keep bot on 25/8');
});
server.listen(3000);

s4d.client.on('ready', async () => {
  s4d.client.user.setActivity(`using slash commands and in ${s4d.client.guilds.cache.size} servers`, {
   type: "STREAMING",
   url: null});




});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'info') {
    await interaction.reply({ content: 'Soon!', ephemeral: false, components: [] });
  }
  if ((interaction.commandName) == 'keepalive') {
    let embed = new Discord.MessageEmbed()
       embed.setTitle('Keep your bot alive (UptimeRobot)!')
       .setURL();
      embed.setDescription(`${interaction.member.user.tag} Created a bot and started it! Yeah a good job! 👍 So ${interaction.user.tag}, want to make your bot online?`);
      embed.addField('1st Method','Use the s4d [469](\'https://deploy-preview-469--scratch-for-discord.netlify.app/\') built in block `Create Webserver With Text Block`',false);
      embed.addField('2nd Method','Use the file [server.js. Click here for tutorial](https://github.com/ahqsoftwares/server.js)',false);
      embed.addField('note','You will get a link which is your monitor url on [UptimeRobot](https://uptimerobot.com/)',false);
      embed.setColor('#ff9900');
      await interaction.reply({ embeds: [(embed
      )], ephemeral: false, components: [] });

  }
  if ((interaction.commandName) == 'links') {
    if ((interaction.options.getInteger('preview')) == null) {
      let embed = new Discord.MessageEmbed()
         embed.addField('preview','[Here is the original link](<https://scratch-for-discord.netlify.app/>)',);
        embed.setColor('#ff9900');
        await interaction.reply({ embeds: [(embed
        )], ephemeral: false, components: [] });

    } else {
      let embed = new Discord.MessageEmbed()
         embed.addField('preview',(['[Here is the ',interaction.options.getInteger('preview'),' link](<https://deploy-preview-',interaction.options.getInteger('preview'),'--scratch-for-discord.netlify.app/>)'].join('')),);
        embed.setColor('#ff9900');
        await interaction.reply({ embeds: [(embed
        )], ephemeral: false, components: [] });

    }
  }
  if ((interaction.commandName) == 'admin') {
    if ((interaction.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      let embed = new Discord.MessageEmbed()
         embed.addField('preview','hello! this is a bot made for s4d helpers. if you want more features dm hecker (frostzone)#4486 or thebestusername#6592',);
        embed.setColor('#ff9900');
        await interaction.reply({ embeds: [(embed
        )], ephemeral: false, components: [] });

    } else {
      await interaction.reply({ content: 'admin only', ephemeral: true, components: [] });
    }
  }
  if ((interaction.commandName) == 'errors') {
    if ((interaction.options.getString('error')) == 'updatenode') {
      let embed = new Discord.MessageEmbed()
         embed.setTitle('Update to node 16')
         .setURL();
        embed.addField('The scripts part of your package.json should look like',(['"scripts": {','\n','"start": "node .",','\n','"node-update": "npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH",','\n','"node-clean": "rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i"','\n','},'].join('')),);
        embed.setFooter('It is recommended to use 469 or 454',);
        embed.setColor('#ff9900');
        await interaction.reply({ embeds: [(embed
        )], ephemeral: false, components: [] });

    }
  }
  if ((interaction.commandName) == 'credits') {
    let embed = new Discord.MessageEmbed()
       embed.setColor('#ff9900');
      embed.addField('credit to',(interaction.options.getString('contributers')),);
      await interaction.reply({ embeds: [(embed
      )], ephemeral: true, components: [] });

  }

});

                    return s4d
                    })();
                    
                    
    const http = require('http');
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end('This site was created to keep bot on 25/8');
    });
    server.listen(6969);
