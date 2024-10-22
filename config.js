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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0p2Y3l4cUlLMklaMm9BTzgxUVorak5hdDNSSC9pSU40WHBQZ2VGdEptbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHY4RG52VTE5ZEVpNlcrY3VKY2xwa08vWEFyRU84VmVJNXNiS2R4OWVEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RUx0Nlk5bHZtMCt2TWFpUXhsSlpJZENjL2ZZZmVnb2N3RUtpU0x3REVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJdHNoVWhhYmpLbzF5anQvTVB1Y1lBSVZ5c0RkTmUwKzRZREtoOUFpVEhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdERUZaQTJVTnlpN3JWQ2dIMHd2aTVwMVh5Tm52QXZHSFlUZitKbEczbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNTcEpUNjkzeWI1ZjJvdjhCYnM2dmhkUEdpcmQvQjA4ZTArcDhCQmN3eG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhTbmpOMllDVWcwcW9vK29lblhUT2RiODIxaisydE4zalhGalBJZmMxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGFDM05VV25ta1p2Q2FkdlE1Nldnd2wvUnZMd3pEZnFhUFNuSHlJNUVHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BakEzdHE5c0pwby8yVlQ4TUFoejNkeEorSDhrU0VtUWJkMVdKcTUrbTRFdzkvTVNtUWlGYmVQZmtNcERLdEMwVlZYcWJqZEI5NUVZMTRmeW1JTEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJOVFRqaFdib3FleWp3QkJDU3pSNUx2RmdIL1R0UXJmK3hRS2FGYmxjbGg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDM2MTQ5ODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0Y1NzJDMzlFRkU1ODM1RDg0NjI1MzgxQzc3RDk5OTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTYyOTIyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaExkYTlNUGVRVEtvZ19BYXljWkhMZyIsInBob25lSWQiOiJlOWEyZWI3My00NGJkLTQ1NTgtOWI1ZC02NjcxZmU3MjBkYjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFVlZzZOK013OGJTTHZhbzlrT0E1bklkNEhvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtETXJvcEEwUG13L1pwUDdTZjN3Q3BpNzMvST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUTkhZSzFQNiIsIm1lIjp7ImlkIjoiMjM0NzA0MzYxNDk4MDozNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVdYcmFBR0VKT1k0TGdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTzBXVHZ4czl1TVlGdi9vV1N6NTg4UjlIQlJmM09LcUxLRUFZdHlESWxYUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQnZJSjNOME5VcXBHMHYzN0JIOVJvQitoQTVJTG1tTTdONS9aUUJ6TEl3M2JCNWI4dXpGUDZDYkhuV3A0QjdQcVcyNWdzWjhoY0duMHZSRkpRak1uRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImJSOExxM0xraUpCTVFLQkw2ZUhZZGYxOGFuc0pwcHZ0YkJBcDc4TjZuV1RFNU1IRWxRTDk2SVIyeXA5TmJWSFpqRFZHaG5IaWs3UmxTNFhKSFh0T0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MzYxNDk4MDozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUdEZrNzhiUGJqR0JiLzZGa3MrZlBFZlJ3VVg5emlxaXloQUdMY2d5SlYwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NjI5MjE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1OeiJ9"
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
