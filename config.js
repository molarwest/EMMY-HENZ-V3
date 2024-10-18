//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/MolarWest9";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349155840891,2349123794986";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBjcGRIRkJNYUZ6ZEdsRE1kZUVYSnBtL2R0Tm83VlAxU05yMGExcy9WWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWQrajJSMG9la291QWJ4Y0hVNCs0dENpczdDWXVkdVpUY3pxZ1VtSXFTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRDVtUUVtQlN4aGNRa0hnU1R0aG44c2trWUxNNlZlSDFSalBsNm9nTFY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4Qm5SK0IyM1BweXV0Q2sza2w2V3dHck9jUmd2SG1sK2hsTzJPNGh1WVdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGYmFwcmpvVFBQN3lTendSd3VzMkFCMVVpcUxqZzlreXJNNmpNa0g4R1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJsVDNSRW1mdER2R3BVTndyVVV4aUFNVE9nRys5dCtsVVZtbG9kWElyMWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFENGEwcXBHK1N6N2hldmhHbm12Uk0yTDlOUk0xN0pUdFFyTVpINjFXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTI0WTJmOUhVQVBqbTNxY2h2UjEyV3RNNUo3YXJweTdiY0NBRS9NZFZnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0RWJMMG1sL3V6eG5TWDJKaS9zZE1sbEZrTjBYeEJLRDV2K2x6NWE1STdhc0RMLzA2WGdHazdaS3NMeTc4QXdEMHZTZjMzSmxSV2JTM2krZkx1Q2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6Im5kUUE3MjMwV3pGZEJxdzlQMlU4dGhXMlhxc3IrcnRZQURpMkpXUkpZMkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBJaWJIQkVXUU1LN09hRW9HdlFZamciLCJwaG9uZUlkIjoiYTY0MDhlOWUtNDM2Ny00YWRlLTgwMDItNTVjYWQzZjBlMmYyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtvaUF3WHNMT0loTGVyUmcza3JtY1pnTTFzST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuc00vRVg1azhGSGxXclJpU2pPVVkydFhrS3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVo5ODM0TEQiLCJtZSI6eyJpZCI6IjIzNDkxNTU4NDA4OTE6MzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0plcGdJZ0JFS25leUxnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRSQXBnM0dYQkMzMGROZGkwRzlMV290SHRrV20rOFBVQmhuVWRzdnExUk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkUzWUxHWnJqdDNZeEtXQWhKQ2VVbDZXVjRDWERNQ0FIQktTMFIyV1BuaW83bCs4OXVJR0d6d0hIQ0ZXOXNNNjRKVFRMa3RaRHJnM2dGaTE5djB0Q0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3RnlyaGVmRzVKWDZlZ3MrOHJaWkx5M05TRWpUWm1QNy81bldRcnlzMGZ5MVlsNUkyclFxVXdOQjUycmUxQ2QzY2MvN29MbkRrc0NXbVlreEswQXRnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTU4NDA4OTE6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTBRS1lOeGx3UXQ5SFRYWXRCdlMxcUxSN1pGcHZ2RDFBWVoxSGJMNnRVVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI0NDk4MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMM1kifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "MOLAR_WEST™`",
  author: process.env.PACK_AUTHER || "MOLAR_WEST",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "MOLAR_WEST",
  ownername: process.env.OWNER_NAME || "MOLAR_WEST",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
