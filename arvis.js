const { Client, Collection } = require("discord.js");
const settings = require("./src/configs/settings.json");
const config = require("./src/configs/config.json");
const client = (global.client = new Client({
  fetchAllMembers: true,
  disableMentions: "everyone",
  presence: {
    activity: {
      name: config.activity,
      type: config.type
    },
    status: config.status
  },
  partials: ["USER", "GUILD_MEMBER", "CHANNEL"],
  ws: {
    intents: [
      "GUILDS",
      "GUILD_MEMBERS",
      "GUILD_MESSAGES",
      "GUILD_VOICE_STATES"
    ]
  }
}));
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
client.ranks = [
  { rankRole: "YETKİLİ ROL ID", hammers: ["HAMMER 1 ROL ID", "HAMMER 2 ROL ID"], points: 1 }
];

require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(settings.loginKey)
  .then(() => console.log("✅・Botla Başarıyla Bağlantı Kuruldu"))
  .catch(() => console.error("❌・Botla Bağlantı Kurulurken Bir Hata Oluştu"));
