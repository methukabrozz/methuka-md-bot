const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://methuka:methuka869@/methukan?tsl=true"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d3338eeada7a364a27139.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ methuka nisalita" 


global.devs = "94742734789" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94742734789";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/b39652872c4f73ed097de.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_45_08_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDcxLFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTMVYyQktTSk5vdWZNQ1o3TDRUbm9TNTNyZ0lxWEFhUnROQlNnRnpiak9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQyNzM0Nzg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOTc5NzBEQzI1REQxQTcwRUU3QUJFNzdEM0MwNTM1M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQxNzIzMDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOU1aLXBZOWxRT0toMGVHQTFWQU81Z1wiLFxuICBcInBob25lSWRcIjogXCI2Y2I2Yjg4NS1jMGM0LTQ0Y2YtYTk4Zi1hNGU4NGI3NzhjYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMyxcbiAgICAgIDE2MyxcbiAgICAgIDMzLFxuICAgICAgOTYsXG4gICAgICAyMzksXG4gICAgICAxNzksXG4gICAgICAyNTEsXG4gICAgICAxODAsXG4gICAgICAxMTQsXG4gICAgICA0MyxcbiAgICAgIDIwOCxcbiAgICAgIDIzMSxcbiAgICAgIDI0NyxcbiAgICAgIDIyNyxcbiAgICAgIDE4MSxcbiAgICAgIDIxNyxcbiAgICAgIDIsXG4gICAgICAyNDgsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgOTcsXG4gICAgICAxMDEsXG4gICAgICAxMzYsXG4gICAgICA0OCxcbiAgICAgIDY3LFxuICAgICAgMCxcbiAgICAgIDIwMCxcbiAgICAgIDIyOSxcbiAgICAgIDE1NyxcbiAgICAgIDIyMyxcbiAgICAgIDI0NSxcbiAgICAgIDQsXG4gICAgICAyNDksXG4gICAgICA0NSxcbiAgICAgIDExLFxuICAgICAgNCxcbiAgICAgIDczLFxuICAgICAgMTkxLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRSR0xSOVcxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MjczNDc4OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW5cIixcbiAgICBcImxpZFwiOiBcIjE4OTA1MTg3NzUxOTM5NjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t1WTBtRVFpcENUdGdZWURDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicmFBUkQraHFqKytOVmlZVVo2U2dZdWk5VjFnR3lERlZzb3lueXNyR2RGQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4S3hLUVVFQ3RMb2NDTDB6dnlxcHRGeHhFT3JJNjRoQmVoYUFEd1lvQzYwVW5NNkE4ekRHcUM0bzdhM0svdWQ2Mjh5aEVleGZWeHE1cUdJYTg3MFJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaOEYxQUJVQ1Z6SlVWejNacjVsbTErMXVGcGV2Zm9lOFhrNkJIbzI3SVlBT3FjOEx3Z21iS1ZwcU1PamU0WGw2ZjUzMkdWVXhDMHIyRWZ6bEMzUlpBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MjczNDc4OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQxNzIzMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJKYS5qc29uIjogIntcImtleURhdGFcIjpcIjU5YU1sdGM2dlN4M3hjNG5VNExhd0RVNWlHdFRpK0wvbkd3b3IzZ1NFR3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0NzcwMzQ3LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw2LDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "create by methukan" , 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Methuka-MD",
  ownername:process.env.OWNER_NAME|| "methuka",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
