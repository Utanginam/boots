/*

	あ GK KASI CREDIT YT ZEEONE OFC, GK USAH RE UPLOAD
	あ SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
	あ YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
	あ FITUR JUALAN TELAH DI HAPUS [ Bisa order sama saya klo mau ]
	
	あ JASA RUN HEROKU BISA PC wa.me/62887435047326 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ChatModification,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const os = require('os')
const axios = require('axios').default
const cheerio = require("cheerio")
const Util = require('util')
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const { error } = require("qrcode-terminal")
const zee = require('api-alphabot')

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const {animek, fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { uploadImages } = require('./lib/uploadimage')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./src/siapakahaku.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./src/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./src/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./src/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./src/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./src/susunkata.json'))

const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = setting.ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
pp_bot2 = fs.readFileSync(`image/${setting.thumbnail}`)
fthumb = setting.fakethumb
hit_today = []
blocked = []
ban = []
limitawal = "50"
gcounttprem = "50" 
gcounttuser = "25" 

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix
let menusimple = false
let Mloc = false
let autobio = setting.autobio
let antihidetag = setting.antihidetag

banChats = setting.self_mode
autorespon = true
offline = false
readGc = true 
readPc = false 
antitrol = false 
bugc = false
autovn = true
autoketik = false
autoregister = setting.user_register
typemenu = 'document'
img = setting.img
baper = 'SUB YT ZEEONE OFC'
apiku = 'https://zeeoneofc.github.io/'
gc_wa_lu = 'https://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
ownername = setting.ownername
peknem = setting.ownername
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(alpha, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
               const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const runtime = process.uptime() 
		const timestampi = speed();
		const latensii = speed() - timestampi
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const alphaNumber = [`62887435047326@s.whatsapp.net`, `918156874290@s.whatsapp.net` , `62857101331033@s.whatsapp.net`]
		const isCreator = alphaNumber.includes(sender)
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
            const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + wib;     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
function _0x2548(){const _0x18b86a=['10YZhqqt','30khmsQe','21FleWHN','137268sGXVrE','\x20⏲️\x20|\x20','ime\x20','115436GtqBQf','t\x20👾\x20|\x20Runt','11MpJOwZ','1450127LWrary','2896270pDJvXS','259032qZMSOd','50867zKwQRg','16SQrvtQ','I\x27m\x20Userbo','uptime','29844TLiocB','setStatus'];_0x2548=function(){return _0x18b86a;};return _0x2548();}(function(_0x44e904,_0x5ad04e){function _0x4942f8(_0x22e29a,_0x1e4bf8,_0x2d6821,_0x1ea6aa){return _0x2db8(_0x22e29a- -0x21e,_0x1ea6aa);}function _0x408e71(_0x459913,_0x46f508,_0x2edb25,_0x350f13){return _0x2db8(_0x459913-0x1b,_0x350f13);}const _0xe5426a=_0x44e904();while(!![]){try{const _0x55e8e1=parseInt(_0x4942f8(-0x163,-0x15f,-0x162,-0x163))/(-0x24f7+-0x9+0x2501)*(parseInt(_0x4942f8(-0x15d,-0x15b,-0x15e,-0x154))/(-0xd*0x232+-0x2551+0x41dd))+-parseInt(_0x4942f8(-0x15b,-0x15c,-0x15d,-0x163))/(-0xb89+-0x11f9*-0x1+-0x66d*0x1)*(parseInt(_0x408e71(0xd0,0xcf,0xc9,0xcd))/(0x22*-0x26+-0x1135*-0x2+-0x1a*0x121))+-parseInt(_0x408e71(0xdd,0xd8,0xe3,0xde))/(-0x129c+0xb1*-0x27+0x2d98)*(-parseInt(_0x4942f8(-0x164,-0x15b,-0x167,-0x163))/(-0x13a1+-0x1*-0x1bfd+-0x856))+parseInt(_0x408e71(0xd3,0xd5,0xca,0xda))/(-0x5ce+-0x183b+0x1e10)+parseInt(_0x4942f8(-0x162,-0x15a,-0x15d,-0x165))/(-0xb18+0x2*-0xc89+0x1219*0x2)*(-parseInt(_0x408e71(0xda,0xd3,0xd2,0xe0))/(-0x1a85*0x1+-0x1d72+0x20*0x1c0))+-parseInt(_0x4942f8(-0x165,-0x163,-0x15d,-0x164))/(0x619*0x2+0xd56+-0x197e)*(parseInt(_0x4942f8(-0x167,-0x164,-0x15e,-0x16b))/(-0x1*-0x20d6+0xd69*-0x1+-0x1362))+-parseInt(_0x408e71(0xdf,0xdd,0xdd,0xe7))/(-0xfe3+-0x3d*0x12+-0x1f*-0xa7);if(_0x55e8e1===_0x5ad04e)break;else _0xe5426a['push'](_0xe5426a['shift']());}catch(_0x658511){_0xe5426a['push'](_0xe5426a['shift']());}}}(_0x2548,0x102b4+0x79*0x29f+0xf7a6));function _0x1c771e(_0x2fc3c6,_0x4c55ec,_0x46b050,_0x54a226){return _0x2db8(_0x2fc3c6- -0xcf,_0x54a226);}function _0x2db8(_0x5cf8cc,_0xa730af){const _0x1b3faf=_0x2548();return _0x2db8=function(_0x5dfaa7,_0x1d71f7){_0x5dfaa7=_0x5dfaa7-(0x3f3+-0xaa4+-0x765*-0x1);let _0x5eeb87=_0x1b3faf[_0x5dfaa7];return _0x5eeb87;},_0x2db8(_0x5cf8cc,_0xa730af);}function _0x441525(_0x2bef54,_0x5dce3b,_0x123eba,_0x240dcc){return _0x2db8(_0x123eba-0x1f,_0x240dcc);}if(autobio){if(autobio===![])return;let settingstatus=-0x2*-0x10b+0x1*0x56d+-0x783;if(new Date()*(0xeaa+0x2596+0x19*-0x217)-settingstatus>0x8b*-0x29+0x19e5+0x46){let _uptime=process[_0x1c771e(-0x11,-0x18,-0x18,-0x10)]()*(-0x1fa*0x4+-0x2b*-0x35+0x2e9),uptimer=clockString(_uptime);await alpha[_0x1c771e(-0xf,-0x14,-0x14,-0x8)](_0x441525(0xdf,0xe1,0xdc,0xd4)+_0x1c771e(-0x19,-0x1e,-0x14,-0x17)+_0x441525(0xcf,0xdc,0xd3,0xcb)+uptimer+_0x441525(0xe4,0xdb,0xe4,0xeb)+status)['catch'](_0x46242a=>_0x46242a),settingstatus=new Date()*(0x17*0x7f+-0x11*0x18a+0x1*0xec2);}}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Whatsapp Bot 〽️\nBy ${ownername}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./src/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./src/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply2(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} ??🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply2(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply2("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && !isCmd && !mek.key.fromMe) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(from, `* -----「 LEVEL UP 」-----*\n\n📛 *User :* ${pushname}\n🆔 *Nomer :* @${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n✴️ *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup && !mek.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted:mek})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

            function addMetadata(packname, author) {
    if (!packname) packname = `${botname}`; if (!author) author = ` ${peknem}`;
    author = author.replace(/[^a-zA-Z0-9]/g, '');
    //let name = `data`

    if (fs.existsSync(`./sticker/data.exif`)) {
        return `./sticker/data.exif`
    }
    const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }

    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

    let len = JSON.stringify(json).length
    let last

    if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
    } else {
        bytes.unshift(0x00)
    }

    if (len < 16) {
        last = len.toString(16)
        last = "0" + len
    } else {
        last = len.toString(16)
    }

    const buf2 = Buffer.from(last, "hex")
    const buf3 = Buffer.from(bytes)
    const buf4 = Buffer.from(JSON.stringify(json))

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

    fs.writeFile(`./sticker/data.exif`, buffer, (err) => {
        return `./sticker/data.exif`
    }
    )
}
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('s.whatsapp.net')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };

// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakgambar`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
 // SIAPA AKU
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkalimat`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK LIRIK
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebaklirik`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEKA TEKI
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tekateki`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete caklontong[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete family[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `family100`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakanime[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakanime`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
			}	
			await alpha.updatePresence(from, Presence.available)
          if (!mek.key.fromMe && !isOwner && !isCreator && banChats === true) return
(function(_0x2e8961,_0x165289){function _0x500542(_0x3530fd,_0x1b13b9,_0x1ecb47,_0x1f6dee){return _0xf809(_0x3530fd-0x1ba,_0x1b13b9);}function _0x3b9923(_0x470140,_0x4b86d4,_0x43b08e,_0x380e55){return _0xf809(_0x4b86d4-0x3e1,_0x380e55);}const _0x351fd5=_0x2e8961();while(!![]){try{const _0x520d69=-parseInt(_0x3b9923(0x108a,0xc88,0x81f,0x9bd))/(0x22cc+-0x4*0x488+-0x10ab)+-parseInt(_0x500542(0x4af,0x5a6,-0x2e,0x7db))/(0x2195*-0x1+0x1b88+-0x1*-0x60f)+parseInt(_0x500542(0x806,0x370,0x6b6,0x7cc))/(-0x5*0x2a5+-0x152*0x7+0x167a)+-parseInt(_0x3b9923(0x299,0x6cc,0x813,0xba9))/(-0x1*-0x1e6d+0x1a72*-0x1+-0x3f7)+-parseInt(_0x500542(0x955,0xa0b,0x9c7,0x83d))/(0x1255+0x26dc+-0x392c)*(parseInt(_0x500542(0xb53,0x6ea,0xfd0,0xc93))/(-0x1ed5+-0xb92+-0x2a6d*-0x1))+-parseInt(_0x3b9923(0xbd8,0xe28,0xea3,0xa18))/(0x3*-0x71+-0x69*-0x54+-0x211a)*(-parseInt(_0x3b9923(0xfde,0xdd1,0x11b5,0xbd2))/(0x675+0x27a+-0x8e7))+parseInt(_0x500542(0xb71,0x8b7,0xcdd,0x1095))/(0x14d5*-0x1+-0x1*-0x10e8+0x1*0x3f6);if(_0x520d69===_0x165289)break;else _0x351fd5['push'](_0x351fd5['shift']());}catch(_0x1338a3){_0x351fd5['push'](_0x351fd5['shift']());}}}(_0x4fef,-0x6d81+-0xc7*0x175+0x34560));const alphaapi=_0x128a37(0xd43,0xa7b,0xe5c,0xcf5)+_0x4963f8(0x1267,0xe4e,0xebd,0x1046)+_0x128a37(0x118b,0xea3,0x1081,0xc51)+_0x4963f8(0x967,0xe1a,0xdc8,0xcdc),alphakey=_0x128a37(0x47d,0x3cc,0xc10,0x783),reply=_0x58801d=>{function _0x597580(_0x4cb092,_0x56149c,_0x57d0e1,_0x50652){return _0x128a37(_0x4cb092-0x1ee,_0x50652,_0x57d0e1-0x1ee,_0x4cb092- -0x378);}function _0x2dfbe1(_0x2f5f81,_0x3faba3,_0x3a74ae,_0x292264){return _0x4963f8(_0x3a74ae,_0x3faba3-0x1cc,_0x292264- -0x2f,_0x292264-0xfc);}alpha['sendMessag'+'e'](from,_0x58801d,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x597580(0xb85,0xda0,0x69f,0x894),'thumbnailUrl':'','thumbnail':fs[_0x2dfbe1(0xdd1,0x91f,0xcdb,0xaef)+'nc'](_0x2dfbe1(0x109d,0xcce,0xbd8,0xcd7)+thumbnail),'sourceUrl':''+apiku}}});};if(!isGroup&&!isCmd&&!command&&!mek[_0x4963f8(0xc3a,0xddb,0xd11,0xb8b)][_0x128a37(0xd6f,0x816,0xe02,0xafd)]&&!autorespon){simi=await fetchJson(_0x128a37(0xd99,0x1086,0x10a5,0xcf5)+_0x4963f8(0x6ac,0x911,0x81d,0x356)+_0x4963f8(0x89f,0x84a,0xa06,0xd56)+_0x4963f8(0x10b9,0xbd6,0xd80,0xb17)+'lse&text='+cmd),sami=simi[_0x128a37(0x78a,0x197,0x460,0x666)];const _0x40e9fb={};_0x40e9fb['forwarding'+_0x4963f8(0x1133,0xbc7,0xe1e,0x8dc)]=0x1fc,_0x40e9fb['isForwarde'+'d']=!![],alpha[_0x4963f8(0xeb0,0xc57,0xc4f,0xf49)+'e'](from,'_'+sami+'_',text,{'thumbnail':fs[_0x4963f8(0x77f,0x6d1,0xb1e,0x8ef)+'nc'](_0x4963f8(0x60a,0x482,0x6d0,0x275)+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0x40e9fb});}const sendButDoc=(_0x5376eb,_0x1d0e1b,_0x5a5b2e,_0x22fe81,_0x3c8548,_0x528237)=>{const _0x1a6a91={};_0x1a6a91[_0x53a537(0x742,0x3f6,0x630,0x2e6)]=_0x53a537(0x563,-0x64,0x4ac,0x48e)+_0x53a537(0x57a,-0x2b7,0x16b,-0x92)+'nWpDlmrk',_0x1a6a91[_0x53a537(0x5c9,0x125,0x5ad,0x23a)]=_0x53a537(0x871,0x30f,0x4ac,0x6e9)+_0x92628c(0x418,0x7f7,0x35e,-0xda)+_0x53a537(0x93d,0x4cf,0x8b5,0x81c),_0x1a6a91[_0x53a537(0xacd,0x640,0x63b,0x490)]=_0x53a537(0x3c4,0xe2,0x4ac,0x75c)+_0x92628c(0x6f4,0x2ba,0x4a9,0x6b6)+_0x53a537(0xa89,0x2b4,0x54f,0x6f2),_0x1a6a91[_0x92628c(0x6b7,0xb9b,0x997,0x9f2)]=function(_0x1eeed0,_0x4ea35c){return _0x1eeed0*_0x4ea35c;},_0x1a6a91['MAfGQ']=_0x92628c(0x4eb,0x2a8,0x793,0x5f9)+_0x92628c(-0xa0,-0x355,0x35d,-0x4c6)+_0x92628c(0x83e,0x861,0xd75,0x7c0)+_0x92628c(-0x105,0x346,-0x1d0,-0x4ea)+_0x53a537(0x932,0xba8,0x79a,0xc58)+_0x92628c(0x695,0x6a2,0x4d5,0x673)+_0x53a537(0x2e,0x4cc,0x1f1,0x137),_0x1a6a91[_0x53a537(0x475,0x146,0x3a2,0x2b1)]=_0x53a537(0x606,0x2fb,0x5e0,0x1fe)+_0x53a537(-0x12f,0x2ef,0x55,-0x261)+_0x92628c(0x83e,0x90f,0x31b,0xb19)+'-officedoc'+_0x92628c(0xca,0x3b4,0x1ee,-0x3f8)+_0x53a537(0x4d1,0xd21,0x867,0xabe)+_0x53a537(0x4c6,0x994,0x75f,0x948)+_0x92628c(0x734,0x562,0x634,0x95c),_0x1a6a91[_0x92628c(-0x170,0x339,-0x1e8,0x24d)]=_0x53a537(0x1c0,0xa4,0x2e3,0x5cb),_0x1a6a91[_0x92628c(0x60b,0x2b5,0x8f4,0x1a7)]=_0x92628c(0x5c0,0x717,0x85f,0xcb)+'u',_0x1a6a91[_0x92628c(0x815,0xd3a,0x811,0xa9f)]=_0x53a537(0xa50,0x25e,0x66f,0x3f8),_0x1a6a91['QkGMX']=_0x92628c(0x172,0x285,0x269,0xd5),_0x1a6a91['ZLfLm']=_0x53a537(0x6c1,0xe89,0x9cd,0xaf4),_0x1a6a91['jvmHM']=_0x53a537(0x91d,0x96d,0x7c0,0x40c)+_0x53a537(0x3f3,0x346,-0xa5,0x1e1)+_0x53a537(0x303,-0x5b,0x2d9,0x29d)+_0x53a537(0x420,0x10a,0x4c9,0x8f6)+_0x92628c(0x6a3,0x2ad,0xbc0,0x3d4)+_0x92628c(0x83,0x1b0,-0x352,0x3b7)+_0x92628c(0x2cd,0x5b7,-0x144,0x22)+'eXI.enc',_0x1a6a91[_0x92628c(0x1d7,0x595,0x474,-0x1d0)]=_0x92628c(0x483,0x664,0x70c,0x8c5)+'D3MAaYx15D'+'+0Mjbi7yii'+'v9gIBMu9tX'+_0x92628c(0x1e0,-0x286,0x367,-0x1a),_0x1a6a91[_0x53a537(0x61e,0x3f9,0x140,0x421)]=_0x53a537(0x981,0x6e1,0x93e,0xd89)+_0x92628c(0x885,0xc1c,0x339,0x55d),_0x1a6a91[_0x53a537(0x271,0x6b1,0x4a8,0x447)]=_0x53a537(-0xa9,0x122,0x288,-0x250)+'NkBAVg8GMe'+_0x53a537(0x88e,0xd2d,0x8c1,0x444)+_0x92628c(0x62,-0x32d,-0x3bd,-0x1ff)+'bG0=',_0x1a6a91[_0x92628c(0x2b5,0x2a0,0x593,0x2ad)]=_0x92628c(0x9,0x102,0x93,-0x404)+'YMsYMtnlnb'+_0x92628c(0x3a8,0x63f,0x8c,0x421)+_0x92628c(0x217,0x2c2,0x4e0,0x3ff)+_0x92628c(0x75d,0x604,0x6fc,0xb6a);const _0x1748fd=_0x1a6a91,_0xe8f132=['https://yo'+_0x92628c(-0x3b,-0x394,0x10f,0x3b0)+_0x92628c(0x1df,0x170,-0x27b,0x6c3),_0x1748fd[_0x92628c(0x53b,0x107,0xa2b,0x354)],_0x1748fd['oxpcd'],_0x1748fd[_0x92628c(0x546,0x7f4,0x619,0x8f2)]];function _0x92628c(_0xacd2cb,_0x383bf0,_0x569910,_0x70a379){return _0x4963f8(_0x383bf0,_0x383bf0-0x19b,_0xacd2cb- -0x5e2,_0x70a379-0xc8);}const _0xcf3371=_0xe8f132[Math['floor'](_0x1748fd[_0x53a537(0x381,0x44a,0x7ac,0x906)](Math[_0x92628c(0x880,0x4df,0xaf9,0x4bb)](),_0xe8f132[_0x53a537(0x703,0x398,0x1f5,0x684)]))],_0x4dd98e=[_0x92628c(0x4eb,0x195,0x266,0x548)+'n/pdf',_0x1748fd[_0x92628c(0x6b8,0x89b,0x944,0xacc)],_0x53a537(0x75a,0x344,0x5e0,0xa08)+_0x53a537(-0x120,0x379,0x55,-0x21c)+_0x53a537(0x9ac,0x5e8,0x933,0x8e0)+_0x92628c(-0x105,-0x1e4,0x2ca,-0x14a)+_0x92628c(0x61d,0x831,0x546,0x81d)+_0x92628c(-0x76,-0x426,-0x5a0,0x5)+_0x53a537(0x109,-0x234,0x187,0x54c)+'t',_0x1748fd[_0x53a537(0x1ec,0x1ad,0x3a2,0x264)]],_0x634e16=_0x4dd98e[Math[_0x53a537(0x4a9,0x3fe,-0x61,-0x161)](_0x1748fd[_0x53a537(0x999,0x357,0x7ac,0x50c)](Math[_0x53a537(0xad7,0xe84,0x975,0x9df)](),_0x4dd98e[_0x53a537(-0x1b6,0x598,0x1f5,0x4aa)]))],_0x6ece1e={};_0x6ece1e[_0x53a537(0x1a8,0x967,0x587,0x4b8)]=_0x1748fd[_0x92628c(-0x170,-0xdf,0x398,-0x3ba)],_0x6ece1e[_0x92628c(0xe2,-0x1e3,0x1cc,0x209)]={},_0x6ece1e['type']=0x1,_0x6ece1e[_0x92628c(0xe2,-0x1e3,0x1cc,0x209)][_0x92628c(0x5ae,0x7ec,0xae2,0x7a1)+'t']=_0x1748fd['GwZRq'];const _0x470fce={};_0x470fce[_0x53a537(0x8b5,0x21a,0x6a3,0x754)+'t']=_0x1748fd[_0x92628c(0x815,0xb7c,0x56d,0xbe0)];const _0x210c67={};_0x210c67['buttonId']='owner',_0x210c67[_0x92628c(0xe2,-0xd2,0x471,-0x1ee)]=_0x470fce,_0x210c67[_0x53a537(0x30b,0xb34,0x7fc,0x696)]=0x1;const _0x49ece5={};_0x49ece5[_0x53a537(0x3d3,0x204,0x6a3,0x5e3)+'t']=_0x92628c(0x876,0x7f1,0x8e3,0x94e)+'ion';function _0x53a537(_0x45a7c1,_0x447b3d,_0x1f633d,_0x1e6f14){return _0x128a37(_0x45a7c1-0xba,_0x1e6f14,_0x1f633d-0x12c,_0x1f633d- -0x597);}const _0x2c0935={};_0x2c0935[_0x92628c(0x492,0x36,0x7d5,0x144)]=_0x1748fd[_0x92628c(0x242,0x3ec,0x405,0x68f)],_0x2c0935[_0x92628c(0xe2,-0x17c,-0x42a,-0x3ed)]=_0x49ece5,_0x2c0935[_0x53a537(0x3e7,0x69c,0x7fc,0x644)]=0x1;const _0x4b3dd7=[_0x6ece1e,_0x210c67,_0x2c0935],_0x1b93ae={};_0x1b93ae['contentTex'+'t']=_0x1d0e1b,_0x1b93ae[_0x92628c(0x5e9,0x795,0xb27,0x8d2)]=_0x5a5b2e,_0x1b93ae[_0x92628c(0x220,-0x13c,-0x28b,0x2d3)]=_0x4b3dd7,_0x1b93ae['headerType']=_0x1748fd[_0x92628c(0x6a8,0x61b,0x787,0x69c)],_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)]={},_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x92628c(0x6cc,0x716,0x4d8,0x610)]=_0x1748fd['jvmHM'],_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x53a537(-0x56,0x549,0x33d,-0x58)]=_0x634e16,_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x92628c(0x94,0x5d7,0x409,-0x394)]=_0x1748fd['MuOJx'],_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x53a537(0x4a3,0xc40,0x7b8,0x924)]=_0x1748fd[_0x92628c(0x4b,-0x29a,-0x137,0xb)],_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x92628c(0x7cd,0xc16,0x7a2,0xbb1)]=0x3e7,_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x92628c(0x1f3,-0x1d4,0x26d,-0x247)]=_0x1748fd['gLaUX'],_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x53a537(-0x483,0x4,-0xa9,-0x59b)]=botname+_0x53a537(0x864,0xc51,0x830,0x38d)+ownername,_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)]['fileEncSha'+_0x92628c(0x58c,0xf1,0x6c6,0x807)]=_0x1748fd['FKcQi'],_0x1b93ae[_0x53a537(0x4aa,0x8c9,0x599,0x633)+_0x53a537(0x423,0xb54,0x6b7,0x742)][_0x53a537(-0x2df,-0x32e,-0x33,-0x30c)+'ail']=pp_bot2;const _0x198ecd=_0x1b93ae,_0x487e13={};_0x487e13[_0x92628c(0x634,0xb3a,0xaea,0xb6a)]=_0xcf3371,_0x487e13[_0x92628c(0x6fc,0x910,0x201,0xa80)]=0x2,_0x487e13[_0x92628c(0x1d8,0x670,-0x10,-0x231)]=''+ucapannya2,_0x487e13[_0x53a537(0x5bb,0xa5,0x71,0x411)]=''+tampilTanggal,_0x487e13['thumbnailU'+'rl']='',_0x487e13[_0x53a537(0x2c8,-0x5a,0x47d,0x492)]=pp_userz;const _0x16b903={};_0x16b903['forwarding'+_0x92628c(0x83c,0xd07,0x42d,0x2ef)]=0x3b9aca00,_0x16b903[_0x53a537(0x34a,0x690,0x47b,0x2)+'d']=!![],_0x16b903[_0x92628c(0x8a4,0x6ba,0x934,0x363)+_0x53a537(0x196,0x232,-0x4b,-0xf3)]=!![],_0x16b903[_0x92628c(0x782,0x23a,0x9e8,0x44c)+'id']=[_0x22fe81,_0x3c8548,_0x528237],_0x16b903['externalAd'+_0x53a537(0x821,0x2af,0x4b0,0x629)]=_0x487e13;const _0x2f6592={};_0x2f6592[_0x92628c(0x2ed,0x3a7,0x16f,0xe4)+'o']=_0x16b903,_0x2f6592[_0x53a537(0x53c,0x3c9,0x4d6,0x3c6)]=fgif,_0x2f6592['sendEpheme'+_0x92628c(-0x140,0x302,0xec,0x277)]=!![],alpha[_0x53a537(0xbc6,0x591,0x762,0xb99)+'e'](_0x5376eb,_0x198ecd,MessageType[_0x92628c(0x19b,-0x2c3,0x211,-0x334)+_0x92628c(0x651,0x3f1,0x721,0xa6a)],_0x2f6592);},sendButLocation=async(_0x5ce67a,_0x5075e8,_0x365e84,_0x536f2b,_0x11407e=[],_0x4da5b4={})=>{const _0x419258={};_0x419258[_0x4621e5(0xace,0x7bd,0x5ec,0x946)]='ephemeralM'+_0x4621e5(0x476,0x796,0x30d,0x2e6);const _0x56d80f=_0x419258;function _0x1a96f1(_0x2219d7,_0x476d6f,_0x114b9e,_0x3d7e4e){return _0x128a37(_0x2219d7-0x117,_0x476d6f,_0x114b9e-0x3b,_0x3d7e4e- -0x642);}kma=_0x536f2b;const _0x4823ef=await alpha[_0x4621e5(0x264,-0x2b8,0x524,0x3fb)+'sage'](_0x5ce67a,kma,MessageType[_0x1a96f1(0xc2e,0xd63,0x6ee,0x919)],{'thumbnail':kma});function _0x4621e5(_0x3f58f6,_0x50493e,_0x4fdfa4,_0x2dd9d9){return _0x4963f8(_0x2dd9d9,_0x50493e-0x44,_0x3f58f6- -0x2cc,_0x2dd9d9-0x7e);}mhan=_0x4823ef[_0x1a96f1(0x3bd,0x51a,0x1a8,0x41)][_0x56d80f[_0x1a96f1(0xd24,0x5be,0x2d5,0x802)]]?_0x4823ef[_0x1a96f1(-0x35e,0x363,-0x4ed,0x41)]['ephemeralM'+_0x4621e5(0x476,0x875,0xbc,-0x63)]:_0x4823ef;const _0x324ee6={};_0x324ee6['locationMe'+'ssage']=mhan['message'][_0x4621e5(0x376,-0x8f,0x144,0x481)+_0x1a96f1(0xde,0x2e3,0x970,0x60c)],_0x324ee6[_0x1a96f1(0x2e9,0x16b,0x28f,0x25e)+'t']=_0x5075e8,_0x324ee6[_0x1a96f1(0x5dc,0xb60,0x248,0x633)]=_0x365e84,_0x324ee6['buttons']=_0x11407e,_0x324ee6[_0x1a96f1(-0x37a,0x212,0xde,0x19b)]=0x6;const _0x5e45aa=_0x324ee6;alpha['sendMessag'+'e'](_0x5ce67a,_0x5e45aa,MessageType[_0x4621e5(0x4b1,0x96e,-0x6c,0x995)+_0x1a96f1(0xa96,0x4b5,0x3e0,0x69b)],_0x4da5b4);},sendButVideo=async(_0x51c330,_0x115ebe,_0x3cfe4c,_0x4c5df2,_0xdeeff9=[],_0x345e7c={})=>{const _0x7a0900={};_0x7a0900[_0x2bdb67(0x126,0x360,0x1ea,0x14e)]='ephemeralM'+_0x2bdb67(0x389,0x166,0x2cc,0x241);const _0x574445=_0x7a0900;kma=_0x4c5df2;const _0x51b2c5=await alpha[_0x5f0a00(-0x251,0x123,0x2a4,-0xb0)+_0x2bdb67(0x602,0x59f,0x884,0x732)](_0x51c330,kma,MessageType[_0x2bdb67(0x16a,0x449,0x466,0xde)]);function _0x2bdb67(_0x4ee5d2,_0x1dc8a8,_0x3dc237,_0x1e4602){return _0x4963f8(_0x1dc8a8,_0x1dc8a8-0x17d,_0x1e4602- -0x501,_0x1e4602-0x3);}mhan=_0x51b2c5['message'][_0x574445[_0x2bdb67(0x3a4,-0x15a,-0x1,0x14e)]]?_0x51b2c5['message'][_0x2bdb67(0x91c,0x8ed,0x709,0x3f3)+_0x2bdb67(0x713,-0x2e1,0x534,0x241)]:_0x51b2c5;const _0x191659={};_0x191659[_0x5f0a00(0x5b6,0x3ff,0x4ec,0x5e)+'ge']=mhan[_0x2bdb67(0x2cd,-0x133,-0x319,0xd8)][_0x5f0a00(0x927,-0x24,0x4ec,0x354)+'ge'],_0x191659['contentTex'+'t']=_0x115ebe,_0x191659[_0x2bdb67(0x276,0x7a0,0x5b7,0x6ca)]=_0x3cfe4c,_0x191659['buttons']=_0xdeeff9,_0x191659[_0x5f0a00(0x4c,0x813,0x4a7,0x7cb)]=0x5;const _0x4d5bbf=_0x191659;function _0x5f0a00(_0x4f8b1e,_0x5e60e0,_0x5b1df7,_0x615e49){return _0x4963f8(_0x5e60e0,_0x5e60e0-0x18b,_0x5b1df7- -0x28c,_0x615e49-0x73);}alpha['sendMessag'+'e'](_0x51c330,_0x4d5bbf,MessageType[_0x2bdb67(-0x149,0x5f7,0x774,0x27c)+_0x5f0a00(0xb27,0xc71,0x9a7,0xa93)],_0x345e7c);},sendButImage=async(_0x3c17df,_0xc8f835,_0xf33ac5,_0x14445d,_0x35c831=[],_0x3a0940={})=>{kma=_0x14445d;function _0x2f5e4d(_0x1a6ab2,_0xb162bf,_0x39de25,_0x20cf55){return _0x128a37(_0x1a6ab2-0x97,_0x1a6ab2,_0x39de25-0x103,_0x20cf55- -0x1f0);}const _0x199e6c=await alpha['prepareMes'+_0x2f5e4d(0xd03,0xa3c,0xe2c,0xaed)](_0x3c17df,kma,MessageType[_0x2f5e4d(0xad3,0x555,0x6c6,0x7a9)],{'thumbnail':Buffer['alloc'](-0x27*-0x86+-0xb56+0x1c*-0x53)});mhan=_0x199e6c[_0x21e347(0x625,0x4bb,0x29a,0x150)][_0x21e347(0x150,0x906,0x5b5,0xac2)+_0x21e347(0x6cd,0x3b9,0x403,0x853)]?_0x199e6c[_0x21e347(0x162,0x5,0x29a,0x233)][_0x2f5e4d(0x98b,0x7a8,0x7bb,0x7ae)+_0x2f5e4d(0x6e3,0x164,0x50a,0x5fc)]:_0x199e6c;const _0x91e802={};function _0x21e347(_0x402343,_0x502613,_0x6ea4dc,_0x961492){return _0x4963f8(_0x502613,_0x502613-0xea,_0x6ea4dc- -0x33f,_0x961492-0x3);}_0x91e802['imageMessa'+'ge']=mhan[_0x21e347(-0x28b,-0x258,0x29a,0x603)][_0x2f5e4d(0xb04,0x875,0xa56,0x7fa)+'ge'],_0x91e802['contentTex'+'t']=_0xc8f835,_0x91e802[_0x21e347(0x622,0xd57,0x88c,0x9d9)]=_0xf33ac5,_0x91e802[_0x21e347(0x281,0x5a2,0x4c3,0x4c0)]=_0x35c831,_0x91e802[_0x21e347(0x3f9,0x38e,0x3f4,0x491)]=0x4;const _0x58e877=_0x91e802;alpha[_0x2f5e4d(0x74d,0xb6e,0x859,0xb09)+'e'](_0x3c17df,_0x58e877,MessageType['buttonsMes'+_0x2f5e4d(0xb88,0x953,0x86c,0xaed)],_0x3a0940);};if(autoregister){if(autoregister===![])return;const _0x20f0e7={};_0x20f0e7['displayTex'+'t']='VERIFY';const _0x2a6f4f={};_0x2a6f4f[_0x4963f8(0xa6d,0xc62,0xa74,0xe1c)]=_0x128a37(0x989,0x713,0x9f5,0x4e8),_0x2a6f4f[_0x128a37(0x94b,0xbbe,0xa06,0x76e)]=_0x20f0e7,_0x2a6f4f[_0x4963f8(0xa00,0xccb,0xce9,0xf1a)]=_0x4963f8(0x40d,0x451,0x905,0x493);const _0x2543e3={};_0x2543e3['displayTex'+'t']=_0x128a37(0x134,0x54a,0x803,0x67c)+'RIFY';const _0x388a5c={};_0x388a5c[_0x4963f8(0xb51,0xad4,0xa74,0x5f0)]=_0x4963f8(0xd1d,0xa57,0x8ea,0x985)+'ff',_0x388a5c[_0x4963f8(0x700,0x3f6,0x6c4,0x89d)]=_0x2543e3,_0x388a5c[_0x4963f8(0xc2d,0x865,0xce9,0x107d)]='RESPONSE';let gaklopo=[_0x2a6f4f,_0x388a5c];if(isCmd&&!mek[_0x128a37(0x9a3,0x107e,0x8c1,0xdbb)][_0x128a37(0x100d,0xd08,0xa07,0xafd)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,_0x4963f8(0x10b2,0xbb5,0xb85,0x8f9)+sender['split']('@')[-0x1041+-0x2089*0x1+-0x5*-0x9c2]+('\x20kamu\x20belu'+_0x128a37(0x3a9,0x416,0x3b9,0x8c2)+_0x128a37(0x498,0x1eb,0xad4,0x66b)+_0x4963f8(0x82f,0x2f,0x4c3,0x7ef)+_0x4963f8(0x5a,0x58a,0x456,0x500)+_0x4963f8(0x6ac,0x617,0x858,0x42d)+'\x20akun\x20kamu'+_0x4963f8(0x3cd,0x1cb,0x5f6,0xae4)+_0x4963f8(0x885,0xa72,0x7d7,0x3da)+_0x128a37(0xd83,0x616,0x888,0xa6a)+'etik\x20@veri'+'f\x20atau\x20tek'+_0x4963f8(0x301,0x2ce,0x4f6,0xa1f)+_0x4963f8(0x37e,0x426,0x8be,0xaac)),'©\x20'+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}const sendTroli=async _0x4baacf=>{const _0x43783c={};_0x43783c['TVheS']=_0xe1d66c(0x64a,0x69e,0x641,0x8e3)+_0xe1d66c(0x290,0x67a,0x77d,0x95c),_0x43783c[_0x194238(0x967,0x559,0x922,0x939)]=_0xe1d66c(0x6a5,0x3cf,0x2ce,0x3a8),_0x43783c[_0x194238(0x251,0x357,0x525,0x5cf)]=_0xe1d66c(0x85b,0xcb2,0xc95,0xf9f),_0x43783c['TPPHB']='6288743504'+_0x194238(0x173,0x529,0x591,0x5cb)+_0x194238(0xe52,0xeeb,0xe3f,0x9a2),_0x43783c[_0xe1d66c(0x2df,0x506,0x9c7,0x71b)]='AR5b5YFz2g'+_0x194238(0x9f8,0x902,0x6a3,0x17e)+_0x194238(0xa64,0xfc4,0xdaa,0xb88)+'ATSeP+KLh+'+'0FGwkw==';const _0x222137=_0x43783c;let _0x2f33b8=fs[_0xe1d66c(0xe6c,0xa57,0x52a,0x84f)+'nc']('./image/'+thumbnail);imeu=await alpha['prepareMes'+'sage']('0@s.whatsa'+_0xe1d66c(0xce8,0xc21,0x85b,0x9b7),_0x2f33b8,image),imeg=imeu[_0xe1d66c(0x961,0x512,0x66d,0x716)][_0x194238(0x4f6,0xb7b,0x9a9,0xc12)+'ge'];const _0x248f30={};function _0xe1d66c(_0x22cdd7,_0xf5abb8,_0x14c90b,_0x54c162){return _0x128a37(_0x22cdd7-0xdd,_0x14c90b,_0x14c90b-0x103,_0xf5abb8- -0x171);}_0x248f30[_0xe1d66c(0x59f,0x7ce,0x58d,0x3d3)+_0xe1d66c(0xd62,0xd57,0xe43,0xb6b)]=0x3,_0x248f30[_0xe1d66c(0x436,0x8a1,0x806,0x53d)+'d']=!![];function _0x194238(_0x521ffc,_0x38c276,_0x106901,_0x418700){return _0x4963f8(_0x418700,_0x38c276-0x133,_0x106901-0x69,_0x418700-0x4e);}const _0x3e75c5={};_0x3e75c5[_0x194238(0x610,0x9b7,0xa2c,0xac1)]=fgif,_0x3e75c5['contextInf'+'o']={},res=await alpha[_0xe1d66c(0x366,0x469,0x83f,0x223)+'sageFromCo'+_0x194238(0xf1f,0xd4c,0xd74,0xee7)](from,{'orderMessage':{'orderId':_0x222137[_0xe1d66c(0x853,0x52c,0x8fb,0x301)],'thumbnail':fs[_0xe1d66c(0xb4d,0xa57,0xc78,0x9d7)+'nc'](_0x194238(0xc44,0x8f5,0xd6f,0x954)+thumbnail),'itemCount':0x7e5,'status':_0x222137[_0xe1d66c(0x6fd,0x7f2,0x3f3,0x85e)],'surface':'CATALOG','orderTitle':_0x222137[_0x194238(0x16a,0x1f9,0x525,0x989)],'message':_0x4baacf,'sellerJid':_0x222137['TPPHB'],'token':_0x222137[_0x194238(0x93e,0x99d,0x636,0x716)],'contextInfo':_0x248f30}},_0x3e75c5),alpha[_0xe1d66c(0xb19,0xa8e,0xf6e,0xab9)+'sage'](res);},sendTroli2=async _0x450826=>{function _0x42e894(_0x4b5c30,_0x1c6ffa,_0x40016f,_0x4ae3cb){return _0x4963f8(_0x4b5c30,_0x1c6ffa-0x15b,_0x40016f- -0x3ff,_0x4ae3cb-0x65);}const _0x3e8ee6={};_0x3e8ee6[_0x42e894(0x62e,0x55f,0x3a8,0xe9)]=_0x43c7c8(0x13e,0x207,0x1bf,0x3a6),_0x3e8ee6[_0x42e894(0xa82,0x7b3,0x930,0xb63)]=_0x42e894(0xaec,0x9e3,0x957,0x698),_0x3e8ee6['SjXbP']=_0x43c7c8(0x799,0x9b3,0xaa2,0xf8a),_0x3e8ee6[_0x43c7c8(0x660,0x41a,0x30c,-0x16c)]=_0x43c7c8(0x944,0x564,0x670,0x175)+_0x42e894(-0x41,0x5aa,0x129,-0x18d)+'tsapp.net',_0x3e8ee6[_0x43c7c8(0x1f9,0x25f,0x43e,0x71)]='AR5b5YFz2g'+'4W5fYrjbea'+'kPiI3/Xxar'+_0x43c7c8(0xc07,0x971,0xb35,0x8d5)+'0FGwkw==',_0x3e8ee6[_0x43c7c8(-0x24e,0x694,0x29f,-0x123)]=_0x43c7c8(0xd7a,0xb5f,0x964,0x9b8),_0x3e8ee6[_0x43c7c8(0x154,0x66c,0x452,0x5b5)]='IDR';const _0x752902=_0x3e8ee6;let _0x3ec587=fs[_0x42e894(0x940,0xb9a,0x71f,0x992)+'nc'](_0x42e894(0x8a7,0xabe,0x907,0xa2c)+thumbnail);imeu=await alpha[_0x43c7c8(0x413,-0x286,0x259,-0x2c4)+'sage'](_0x43c7c8(0x693,0x8e8,0x784,0x75e)+_0x42e894(0x632,0xd63,0x8e9,0xda2),_0x3ec587,image),imeg=imeu[_0x42e894(-0x260,-0xc3,0x1da,0x149)]['imageMessa'+'ge'];const _0x5e1eca={};function _0x43c7c8(_0x307c26,_0x29e15f,_0x2a37b0,_0x42e404){return _0x128a37(_0x307c26-0x1ca,_0x29e15f,_0x2a37b0-0x1a0,_0x2a37b0- -0x381);}_0x5e1eca[_0x42e894(0x891,0x517,0x496,0x32f)+_0x43c7c8(0xf6b,0xfc5,0xb47,0xac7)]=0x3,_0x5e1eca[_0x42e894(0xce,0x9ba,0x569,0xd9)+'d']=!![];const _0x4ea118={};_0x4ea118[_0x43c7c8(0x5b5,0x272,0x6ec,0xa6d)]=fgif,_0x4ea118['contextInf'+'o']={},res=await alpha[_0x43c7c8(0x182,0x6e,0x259,0x20a)+'sageFromCo'+_0x43c7c8(0x84e,0xcff,0xa34,0xe6f)](from,{'orderMessage':{'orderId':_0x43c7c8(0x184,0x6b4,0x48e,0x482)+_0x42e894(0x143,0x549,0x342,0x1df),'thumbnail':fs[_0x43c7c8(0x931,0x475,0x847,0x35a)+'nc']('./image/'+thumbnail),'itemCount':0x7e5,'status':_0x752902['tInIp'],'surface':_0x752902[_0x43c7c8(0xec3,0xdf9,0xa58,0x758)],'orderTitle':_0x752902[_0x43c7c8(0x40b,0x742,0x3df,0x3f3)],'message':_0x450826,'sellerJid':_0x752902[_0x42e894(0x59,0x2d4,0x1e4,0x670)],'token':_0x752902[_0x43c7c8(0x295,0x92c,0x43e,0x290)],'totalAmount1000':_0x752902['oqvsM'],'totalCurrencyCode':_0x752902[_0x42e894(-0xde,0x5c0,0x32a,0x53b)],'contextInfo':_0x5e1eca}},_0x4ea118),alpha['relayWAMes'+_0x42e894(0x67a,0x79a,0x834,0x9fd)](res);},sendKatalog2=async _0x983742=>{const _0x38e4b2={};function _0x19b4e8(_0x5445c4,_0x73154e,_0x1fb0c6,_0x4f0831){return _0x128a37(_0x5445c4-0x154,_0x5445c4,_0x1fb0c6-0x1e3,_0x73154e-0x3f);}_0x38e4b2[_0x19b4e8(0x87e,0xc7f,0xa0d,0xaff)]=_0x19b4e8(0x496,0x84e,0xd52,0xa51)+_0x19b4e8(0x74b,0x82a,0x946,0xbaf),_0x38e4b2[_0x4e467a(0x676,0x92d,0x862,0x632)]='USD',_0x38e4b2[_0x19b4e8(0x484,0x6c3,0x96c,0x8f0)]=_0x4e467a(0x919,0x9e8,0x829,0xaa1)+'1919191919'+'1919',_0x38e4b2[_0x19b4e8(0x8ef,0xcca,0xadb,0x789)]=_0x19b4e8(0x79f,0xa30,0xd84,0x977)+'7326@s.wha'+_0x4e467a(0xef0,0xa7e,0x8eb,0xca0);const _0x4c48ec=_0x38e4b2;let _0x44401f=fs['readFileSy'+'nc']('./image/'+thumbnail);imeu=await alpha[_0x4e467a(0x825,0x23b,0x5b8,0x3fa)+_0x4e467a(0x1049,0xe33,0xb50,0xafd)]('0@s.whatsa'+_0x4e467a(0xb97,0xbe4,0xf5e,0xbb2),_0x44401f,image,{'thumbnail':_0x44401f});function _0x4e467a(_0x33588c,_0x285e49,_0x323bde,_0x2b9274){return _0x128a37(_0x33588c-0xea,_0x285e49,_0x323bde-0x10f,_0x2b9274- -0x1e0);}imeg=imeu[_0x4e467a(0x53d,0x2bb,0x573,0x4a3)]['imageMessa'+'ge'];const _0x3cbea4={};_0x3cbea4['productIma'+'ge']=imeg,_0x3cbea4['productId']=_0x4c48ec[_0x4e467a(0xf66,0xd78,0x693,0xa60)],_0x3cbea4['title']=_0x4e467a(0x2a0,0xb8,-0x59,0x3bf)+'OT',_0x3cbea4['descriptio'+'n']=_0x983742,_0x3cbea4['currencyCo'+'de']=_0x4c48ec[_0x4e467a(0x18c,0x561,0x302,0x632)],_0x3cbea4[_0x19b4e8(0xd8e,0xb1d,0x63b,0x1015)+_0x19b4e8(0xdf3,0xeba,0xd1d,0x1058)]=_0x4c48ec['UFTjm'],_0x3cbea4[_0x19b4e8(0x8f4,0x977,0xb1e,0x78a)+'geCount']=0x1;const _0x580652={};_0x580652['forwarding'+_0x4e467a(0xd54,0x8ed,0x1156,0xce8)]=0x3e7,_0x580652[_0x4e467a(0x7e4,0xac2,0xccf,0x832)+'d']=!![];const _0x5e0588={};_0x5e0588[_0x19b4e8(0xc50,0xc92,0xb0c,0xd29)]=_0x3cbea4,_0x5e0588[_0x4e467a(0xcc6,0x58d,0xca6,0x9cf)+_0x19b4e8(0xcae,0x8d2,0x3cc,0xb5f)]=_0x4c48ec['kcbQf'],_0x5e0588['contextInf'+'o']=_0x580652;const _0x4c4394={};_0x4c4394[_0x4e467a(0x926,0xe42,0x11e5,0xca4)+_0x19b4e8(0xbcb,0xd1c,0x8fc,0xcb1)]=_0x5e0588;const _0x123dd0={};_0x123dd0[_0x4e467a(0x619,0xb11,0x722,0x88d)]=mek,res=await alpha[_0x4e467a(0x602,0x908,0x86e,0x3fa)+_0x4e467a(0x9c8,0x15e,0xaac,0x5be)+_0x19b4e8(0x8e4,0xdf4,0x10da,0xab5)](from,_0x4c4394,_0x123dd0),alpha[_0x4e467a(0x50b,0x9cc,0xf46,0xa1f)+_0x4e467a(0x710,0x7ba,0xf3b,0xafd)](res);},sendKatalog3=async _0x30132b=>{const _0xf6e03d={};_0xf6e03d[_0x5067e4(0xdf2,0xc5f,0x703,0x97c)]='0@s.whatsa'+_0x5067e4(0x98f,0xa30,0xb59,0xd59),_0xf6e03d[_0x5067e4(0x1033,0xcb4,0xab8,0xe74)]=_0x16cc28(0x186,0x84,0x55c,0x37d)+_0x5067e4(0x344,0xcb5,0x5fe,0x7b2),_0xf6e03d[_0x5067e4(0x3b2,0x1b5,0xab2,0x574)]='9999999',_0xf6e03d['wEmck']=_0x16cc28(0x912,0x3a8,0x665,0x11e),_0xf6e03d['towPh']='6288743504'+'7326@s.wha'+_0x16cc28(0x6b3,0xabc,0xbcd,0xeab);function _0x16cc28(_0xbf121b,_0x3bfefe,_0x170374,_0x311695){return _0x128a37(_0xbf121b-0x114,_0xbf121b,_0x170374-0x1ea,_0x170374- -0x2b3);}const _0x2d57d0=_0xf6e03d;let _0x5c23af=fs[_0x5067e4(0x7f7,0xbf2,0xe99,0xb8f)+'nc'](_0x16cc28(0xf35,0xdbc,0xafd,0xbf6)+thumbnail);imeu=await alpha[_0x5067e4(0xe7,0x1dc,0x8c6,0x5a1)+_0x16cc28(0x689,0x806,0xa2a,0x7c6)](_0x2d57d0[_0x5067e4(0x8df,0xd7e,0x49a,0x97c)],_0x5c23af,image,{'thumbnail':_0x5c23af}),imeg=imeu[_0x16cc28(0x458,0x6cb,0x3d0,0x11f)]['imageMessa'+'ge'];const _0x3988e9={};_0x3988e9[_0x16cc28(0x654,0x20c,0x685,0x634)+'ge']=imeg,_0x3988e9[_0x5067e4(0x550,0xbc7,0xbf4,0x954)]=_0x2d57d0['HThjV'],_0x3988e9['title']=_0x16cc28(0xe2,0x31b,0x2ec,0x7c6)+'OT',_0x3988e9[_0x16cc28(0xdad,0x8ec,0xc27,0x79b)+'n']=_0x30132b,_0x3988e9[_0x5067e4(0x79c,0x65d,0xae,0x4ff)+'de']='USD',_0x3988e9['priceAmoun'+_0x5067e4(0x11c2,0x108f,0xd0b,0xe42)]=_0x2d57d0['QRiAo'],_0x3988e9['salePriceA'+_0x16cc28(0x657,0x396,0x564,0x262)]=_0x2d57d0[_0x16cc28(0x332,0xb75,0x70b,0xbf0)],_0x3988e9[_0x16cc28(0xab2,0x6a0,0x685,0x457)+_0x5067e4(0xac0,0x9f4,0x3d6,0x8fb)]=0x1;const _0x1dfab2={};_0x1dfab2[_0x5067e4(0x92a,0xcf8,0xd49,0x906)+'Score']=0x3e7;function _0x5067e4(_0x35d7fe,_0x476de1,_0x52935a,_0x496a7b){return _0x4963f8(_0x476de1,_0x476de1-0x64,_0x496a7b-0x71,_0x496a7b-0xff);}_0x1dfab2['isForwarde'+'d']=!![];const _0x56a938={};_0x56a938[_0x5067e4(0xefa,0x715,0x861,0xc1a)]=_0x3988e9,_0x56a938[_0x5067e4(0xcbf,0xf5a,0x67c,0xb76)+'nerJid']=_0x2d57d0[_0x5067e4(0x807,0xc27,0x7fd,0xa64)],_0x56a938['contextInf'+'o']=_0x1dfab2;const _0x5d7d7e={};_0x5d7d7e['productMes'+'sage']=_0x56a938;const _0x23d456={};_0x23d456[_0x16cc28(0x35f,0x97d,0x7ba,0x8dd)]=mek,res=await alpha['prepareMes'+_0x16cc28(0x511,0x95b,0x4eb,0x823)+_0x5067e4(0xcae,0xd11,0xeb7,0xd7c)](from,_0x5d7d7e,_0x23d456),alpha[_0x16cc28(0xa02,0xd14,0x94c,0xa3b)+_0x16cc28(0xb55,0xbd6,0xa2a,0x8b8)](res);},sendKatalog=async(_0x188d63,_0xf5f9ba,_0x47b504)=>{function _0x2a27fb(_0x5f05ca,_0x73a42f,_0x21eb80,_0x3ff696){return _0x128a37(_0x5f05ca-0x13f,_0x3ff696,_0x21eb80-0x12a,_0x73a42f- -0x6ac);}function _0x6d3ea1(_0x21c399,_0x575da4,_0x5a15e6,_0x454df3){return _0x128a37(_0x21c399-0x121,_0x575da4,_0x5a15e6-0x1aa,_0x454df3- -0x5a2);}const _0x4ad870={};_0x4ad870[_0x6d3ea1(-0x1e9,0x5f1,0x24,0x1ff)]='0@s.whatsa'+_0x6d3ea1(0x5b9,0x81a,0x8c2,0x7f0),_0x4ad870[_0x6d3ea1(0x1fe,0x612,0x264,0x1f3)]=_0x2a27fb(-0xb3,0x416,0x2cd,0x862),_0x4ad870['ZmtMd']=_0x6d3ea1(0x58c,-0x2,0x7ee,0x376),_0x4ad870[_0x6d3ea1(0x3a2,0x2d6,0x337,0x1a2)]=_0x6d3ea1(0x61e,0x850,0x934,0x44f)+_0x6d3ea1(-0x210,-0x24a,0x3b,0x30)+_0x2a27fb(0xb96,0x7d4,0x911,0x47d);const _0x4faa93=_0x4ad870;let _0x416fca=fs[_0x2a27fb(0x356,0x51c,0x53b,0x707)+'nc'](_0x2a27fb(0x855,0x704,0x3a8,0xba9)+thumbnail);imeu=await alpha[_0x2a27fb(-0x211,-0xd2,0x3fb,-0xd5)+_0x6d3ea1(0x372,0x31e,0xa85,0x73b)](_0x4faa93[_0x6d3ea1(0x25c,0x59e,0x659,0x1ff)],_0x416fca,image,{'thumbnail':_0x416fca}),imeg=imeu[_0x2a27fb(0x518,-0x29,0x4c7,-0x1d)][_0x6d3ea1(0x14f,-0x78,-0xf,0x448)+'ge'];const _0x2be1fa={};_0x2be1fa[_0x6d3ea1(0x495,0x1b0,0x49f,0x396)+'ge']=imeg,_0x2be1fa[_0x2a27fb(0x6fa,0x2e1,0x6fe,-0xdf)]=_0x6d3ea1(0x66e,0x83,-0x1dd,0x26d)+_0x2a27fb(-0x166,0x13f,0x410,-0x40a),_0x2be1fa[_0x6d3ea1(0x4da,0x744,0x54b,0x2c2)]=_0x188d63,_0x2be1fa['descriptio'+'n']=_0x47b504,_0x2be1fa[_0x6d3ea1(0x2e1,-0x337,-0x3f8,-0x6a)+'de']=_0x4faa93[_0x2a27fb(-0x1f7,0xe9,0x366,0x54b)],_0x2be1fa[_0x6d3ea1(0x497,0x92b,0x4d6,0x53c)+_0x6d3ea1(0x82a,0xd1c,0x535,0x8d9)]=_0xf5f9ba,_0x2be1fa['salePriceA'+_0x6d3ea1(0x265,0x425,0x1a2,0x275)]=_0x4faa93[_0x2a27fb(0x55f,0x3ae,0x588,0x451)],_0x2be1fa[_0x6d3ea1(0x4bd,-0xd,0x72d,0x396)+'geCount']=0x1;const _0x539fca={};_0x539fca[_0x2a27fb(-0x242,0x293,-0x125,-0x1f)+_0x2a27fb(0x979,0x81c,0x8a7,0xc96)]=0x3,_0x539fca[_0x6d3ea1(0x5f1,0x2fb,0x316,0x470)+'d']=!![];const _0x188901={};_0x188901['product']=_0x2be1fa,_0x188901[_0x2a27fb(0x67d,0x503,0x5f7,0x238)+_0x2a27fb(-0x337,0x1e7,0x179,0xe8)]=_0x4faa93['qpKgj'],_0x188901[_0x6d3ea1(0x3e3,0x112,0x5ee,0x3d7)+'o']=_0x539fca;const _0x385bf2={};_0x385bf2[_0x6d3ea1(0xc73,0x56f,0xa51,0x8e2)+_0x2a27fb(0xa94,0x631,0x846,0xaf4)]=_0x188901;const _0x590bef={};_0x590bef[_0x2a27fb(0x8d2,0x3c1,0x7e8,0x164)]=fgif,_0x590bef['contextInf'+'o']={},res=await alpha[_0x2a27fb(0x20c,-0xd2,-0x33d,-0x130)+_0x2a27fb(0x5de,0xf2,0x559,0x365)+_0x6d3ea1(0x4f0,0x845,0x64c,0x813)](from,_0x385bf2,_0x590bef),alpha['relayWAMes'+_0x6d3ea1(0x949,0x29e,0x3d9,0x73b)](res);},sendList=async _0x513c20=>{const _0x40710f={};_0x40710f[_0x36aa7c(0x2f6,0x645,0x510,0x40d)]='SELECT\x20HER'+'E',_0x40710f[_0x1cab7c(0x984,0xeaa,0xec8,0xf0b)]=_0x1cab7c(0x72b,0x9ab,0x69d,0xd86)+_0x1cab7c(0xae0,0xe69,0xd51,0x9c7),_0x40710f[_0x1cab7c(0x621,0x65e,0x8a4,0x5c0)]=_0x1cab7c(0xcd8,0xbf1,0xd57,0x7ef)+'ot',_0x40710f[_0x1cab7c(0xf5f,0xd60,0xb5d,0xfee)]=_0x1cab7c(0xd27,0xc38,0xbca,0xbec)+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x36aa7c(0xabc,0xb52,0x865,0x63d)+_0x36aa7c(0x3ea,0x3c3,0x6a8,0x169)+'d_',_0x40710f['eXNQW']=_0x36aa7c(0xa45,0x62e,0x4ea,0x8c4)+'e-1',_0x40710f[_0x36aa7c(0x16,0x499,-0x25,0x73)]='downloadme'+'nu',_0x40710f['ryQtN']=_0x1cab7c(0xe7f,0xdcf,0x96d,0x8b7)+'e-2',_0x40710f[_0x1cab7c(0x1029,0xc59,0xc62,0xf24)]=_0x1cab7c(0xc04,0xc83,0x9ab,0xca4)+'u',_0x40710f[_0x1cab7c(0x7e4,0xbbe,0xfcf,0x834)]=_0x1cab7c(0x9b0,0xc38,0x8ca,0x9eb)+_0x1cab7c(0xdd9,0x956,0x5d1,0x6cf)+_0x1cab7c(0xa81,0xed4,0xbad,0x1061)+_0x1cab7c(0xb0e,0xbd1,0xb94,0x73b)+'ertmenu\x20co'+_0x1cab7c(0x1060,0xba8,0xf2e,0xadf),_0x40710f[_0x36aa7c(0x947,0x12a,0x608,0x5bc)]=_0x36aa7c(0x6e2,0xc08,0x2fa,0x72d)+_0x1cab7c(0xbae,0x956,0xe88,0xa68)+_0x1cab7c(0x113d,0xed4,0x1375,0xb46)+_0x36aa7c(0xb3b,0xba9,0xd0e,0x92a)+_0x1cab7c(0x671,0x674,0x571,0x6cd)+'d_',_0x40710f[_0x1cab7c(0x3ca,0x684,0xb56,0x1be)]=_0x1cab7c(0xe6b,0xdcf,0xf74,0xf3a)+_0x1cab7c(0xe02,0x95c,0xe17,0xb89),_0x40710f[_0x36aa7c(-0x12b,0x3e6,0x233,0xc)]=_0x36aa7c(0xaad,0x3ab,0x651,0x72d)+_0x1cab7c(0xbd0,0x956,0xc7b,0xaa1)+_0x1cab7c(0x98a,0xed4,0xc8e,0xfb5)+_0x36aa7c(0xd73,0x4b3,0xb08,0x941)+_0x1cab7c(0x105f,0xde5,0x1063,0xcec)+_0x1cab7c(0x7cc,0xbc9,0xaec,0x93f),_0x40710f['LSKTe']=_0x1cab7c(0xc4e,0xdcf,0x12d0,0x10f1)+_0x36aa7c(0x633,0x6c2,0x686,0x59b),_0x40710f[_0x36aa7c(0x8d4,0xce7,0x995,0x80a)]=_0x1cab7c(0x1026,0xeb2,0xfc5,0xf2f),_0x40710f['Dsune']=_0x1cab7c(0xbd5,0xc38,0xcab,0x1112)+_0x1cab7c(0x580,0x956,0x8c5,0x5de)+_0x1cab7c(0x129a,0xed4,0xa83,0xa43)+'e\x20the\x20othe'+'rmenu\x20comm'+_0x36aa7c(0x4c8,0x81b,0xaa3,0x6be),_0x40710f[_0x36aa7c(0x3e3,0x4fe,0x2fd,0x42a)]=_0x36aa7c(0xbd4,0xd22,0x97a,0x8c4)+'e-7',_0x40710f[_0x36aa7c(0x1c9,0x5e,0x642,0x15c)]='ownermenu',_0x40710f[_0x36aa7c(0x380,0x2e6,0x3f8,0x79)]='_choose\x20th'+_0x1cab7c(0x57b,0x956,0x8b5,0x534)+_0x1cab7c(0xfaa,0xed4,0xf2f,0xc9e)+'e\x20the\x20owne'+_0x1cab7c(0xc02,0xde5,0x10ef,0xcb7)+_0x1cab7c(0x10c0,0xbc9,0xcce,0x952),_0x40710f[_0x36aa7c(-0xd7,-0x47,-0x388,0x59)]='storagemen'+'u',_0x40710f[_0x1cab7c(0xe94,0xf15,0x10ed,0xba0)]=_0x36aa7c(0xabb,0x24d,0x3cb,0x72d)+_0x36aa7c(0x817,0x7f4,0x4dc,0x44b)+_0x1cab7c(0xb9e,0xed4,0xa07,0x131c)+_0x1cab7c(0x3c5,0x511,0x83e,0x886)+_0x1cab7c(0xaf4,0xc05,0xebe,0xae9)+_0x1cab7c(0x82c,0xba8,0xdb2,0x68d),_0x40710f[_0x1cab7c(0xbcb,0x8fa,0x683,0x84c)]=_0x36aa7c(0xc36,0x9ec,0x4f9,0x8c4)+_0x36aa7c(0xa21,0xb2d,0x82a,0x644),_0x40710f[_0x1cab7c(0x6c6,0x8f6,0xe46,0x6c9)]=_0x36aa7c(0x830,0x41c,0x816,0x78a),_0x40710f[_0x36aa7c(0x8af,0xb54,0x62e,0x8c3)]=_0x1cab7c(0x10b6,0xc38,0xff5,0xedc)+'is\x20if\x20you\x20'+_0x36aa7c(0xea0,0x80a,0x501,0x9c9)+_0x1cab7c(0x12d5,0xeaf,0x9d5,0x101c)+_0x1cab7c(0x99a,0x674,0x9cc,0xaa2)+'d_',_0x40710f['nGxOp']=_0x36aa7c(0xc01,0x953,0x6fd,0x8c4)+_0x1cab7c(0xbed,0xa36,0xf0b,0xae6),_0x40710f[_0x1cab7c(0xd86,0xa54,0xd54,0xc76)]=_0x1cab7c(0x7cb,0xb22,0xad2,0x8cf),_0x40710f[_0x1cab7c(0x5e3,0x5ae,0x5cb,0x1df)]=_0x1cab7c(0x10af,0xc38,0xb07,0x8e1)+_0x36aa7c(0x2d6,0xdb,0x5b5,0x44b)+_0x1cab7c(0xf27,0xed4,0x11ec,0xe04)+_0x1cab7c(0x95a,0x659,0x4b3,0x127)+_0x36aa7c(0x598,0x283,0x2bb,0x21f)+'_',_0x40710f[_0x36aa7c(-0x115,0x4d5,-0x178,0x283)]=_0x36aa7c(0xb5e,0x4bc,0xaba,0x8c4)+_0x1cab7c(0xb31,0xe9b,0x12ab,0xc9a),_0x40710f[_0x1cab7c(0x253,0x66b,0x52e,0x3a2)]=_0x36aa7c(-0x35e,-0x1d,0x4a7,0xfd)+'n',_0x40710f['LxSxH']=_0x1cab7c(0x1047,0xc38,0xd16,0xe9b)+_0x36aa7c(0x3bc,0x8ec,0x36a,0x44b)+_0x36aa7c(0xc6d,0x756,0x497,0x9c9)+_0x36aa7c(0x941,0x291,0xa82,0x545)+_0x1cab7c(0xe9a,0xe57,0xa55,0xaea)+_0x36aa7c(0x6d,-0x41,-0x33,0x43f),_0x40710f[_0x1cab7c(0xa31,0xe5b,0xfcc,0x1281)]='Sub\x20Menu\x20k'+_0x36aa7c(0x957,0x46c,0x1b5,0x5bd),_0x40710f['tsFjN']=_0x1cab7c(0x673,0xb43,0xbd5,0xda7)+_0x1cab7c(0x5b4,0x7a7,0x3c4,0x8c8),_0x40710f[_0x1cab7c(0x251,0x703,0x26c,0x99f)]=_0x1cab7c(0xfa1,0xdcf,0x10cc,0xe51)+_0x36aa7c(-0x126,0x512,-0x1f5,0x17d),_0x40710f[_0x36aa7c(0x51e,0x18a,0x3f8,0x428)]='nsfw\x20menu',_0x40710f[_0x1cab7c(0x1196,0xd59,0x94b,0xe39)]=_0x36aa7c(0x2e3,0x818,0x4fe,0x72d)+_0x1cab7c(0xe9f,0x956,0x953,0xb77)+_0x36aa7c(0x884,0xb29,0xe47,0x9c9)+_0x36aa7c(0xac,-0x334,0x110,0x45)+_0x36aa7c(0x4ed,0x62d,0x600,0x791)+'nd_',_0x40710f['aCZNp']=_0x1cab7c(0x890,0xdcf,0xd00,0xd49)+_0x1cab7c(0x5e3,0x8ed,0x3a1,0x6bd);function _0x36aa7c(_0x11d95d,_0x5e24b3,_0x6b8177,_0x54f945){return _0x128a37(_0x11d95d-0x5a,_0x6b8177,_0x6b8177-0xda,_0x54f945- -0x55c);}_0x40710f['pnaLM']='asupan\x20men'+'u',_0x40710f[_0x1cab7c(0x89b,0xaeb,0x94f,0xfa1)]='_choose\x20th'+_0x36aa7c(0x90a,-0x5a,0x953,0x44b)+_0x1cab7c(0x9a8,0xed4,0xdbc,0xacc)+'e\x20the\x20asup'+'an\x20menu\x20co'+_0x1cab7c(0x6e5,0xba8,0xda2,0xc49),_0x40710f[_0x1cab7c(0x52b,0x48c,0x789,0x6ee)]=_0x1cab7c(0x92e,0xdcf,0xbde,0xc2f)+_0x1cab7c(0xc20,0xd43,0x10a0,0x1006),_0x40710f['gkFed']=_0x36aa7c(0x46d,-0x105,-0x45b,-0x3)+'ct',_0x40710f[_0x1cab7c(0xca1,0xd36,0x82d,0xc1f)]=_0x1cab7c(0xbe5,0xdcf,0xd1a,0x12bf)+_0x1cab7c(0x105,0x61f,0x3dc,0x334),_0x40710f['HYxJY']=_0x1cab7c(0x9ec,0xc38,0x7a4,0x75b)+'is\x20if\x20you\x20'+_0x1cab7c(0x13d9,0xed4,0xbf4,0xfb2)+_0x36aa7c(0x81b,0x936,0x20e,0x545)+_0x1cab7c(0xf81,0xdec,0x1081,0x94c)+_0x36aa7c(0x3d1,0x3fa,0x26a,0x69d),_0x40710f[_0x36aa7c(0x28a,0x19,0x79f,0x2f4)]='quotesmenu',_0x40710f['BLSdE']='_choose\x20th'+_0x36aa7c(0x5e2,0x85a,0x6e4,0x44b)+_0x1cab7c(0x9c5,0xed4,0x11c4,0xe25)+_0x36aa7c(0x455,-0x25b,0x65,0x1d1)+_0x36aa7c(0x5a6,0x609,0x537,0x64b)+_0x36aa7c(0x218,0x508,0x532,0x43f),_0x40710f[_0x36aa7c(0xdd7,0x61a,0xb3b,0x8a7)]=_0x1cab7c(0xf65,0xdcf,0x9fd,0xcda)+_0x36aa7c(0x26b,0x61b,0x114,0x56f),_0x40710f[_0x1cab7c(0x39d,0x84c,0x80f,0xcb6)]=_0x1cab7c(0x761,0x69e,0x59a,0x874),_0x40710f[_0x36aa7c(0x71,0x13f,0xde,0x42d)]=_0x36aa7c(0x469,0x591,0x772,0x72d)+_0x36aa7c(0x81,0x56c,0x3f4,0x44b)+'want\x20to\x20us'+'e\x20the\x20anim'+_0x36aa7c(0x643,0xb72,0xdc3,0x9b4)+_0x36aa7c(0x4ba,0x301,0xbc7,0x6be),_0x40710f[_0x36aa7c(0x73a,0x674,0x698,0x727)]=_0x36aa7c(0x6bf,0x8c6,0xdc3,0x8c4)+_0x1cab7c(0x386,0x5e3,0x18a,0x250),_0x40710f[_0x1cab7c(0xde5,0xaf2,0xab5,0x7f3)]=_0x36aa7c(0xa97,0xb6a,0x9d0,0x8c4)+_0x1cab7c(0x5ba,0x5a4,0xe5,0x472),_0x40710f[_0x36aa7c(0x4ab,0x78a,0x693,0x5e3)]=_0x36aa7c(0x3e3,0x76f,0x359,0x72d)+'is\x20if\x20you\x20'+_0x36aa7c(0x5b4,0xa99,0x69c,0x9c9)+_0x1cab7c(0x572,0x61e,0xaf0,0x258)+_0x1cab7c(0x507,0x676,0xb58,0x69d)+_0x1cab7c(0x10fb,0xbc9,0x67f,0x10ab),_0x40710f['wytWH']=_0x36aa7c(0xac5,0x94b,0x6f5,0x72d)+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x36aa7c(-0x28d,-0x4c1,0x4eb,-0x5a)+_0x36aa7c(0x1d7,0x1ee,0x19,0x175)+_0x36aa7c(0x86f,0x39,0xa9,0x43f),_0x40710f[_0x1cab7c(0x301,0x777,0x581,0xc14)]=_0x36aa7c(0x318,0x2cb,-0x165,0x3c9)+_0x36aa7c(0x491,0x1c3,0x1ab,-0x3e)+_0x1cab7c(0x12d2,0xe70,0x969,0xba3)+_0x1cab7c(0xc32,0xc5c,0x940,0x92f)+_0x36aa7c(0xb2c,0x811,0x3a8,0x63e)+_0x36aa7c(0x66d,0x47a,0x452,0x6e3),_0x40710f[_0x36aa7c(0x531,0x906,0x12d,0x677)]=_0x1cab7c(0xe4f,0xcab,0xe03,0xb30)+'e',_0x40710f[_0x36aa7c(0xc6d,0x435,0x8c2,0x7cb)]=_0x1cab7c(0xfd7,0xb8f,0xc16,0xb13)+_0x1cab7c(0xcfc,0x92f,0x757,0xae3),_0x40710f[_0x1cab7c(0x38d,0x71a,0xb11,0xb52)]=_0x1cab7c(0x645,0x8d4,0x97d,0x5a5)+_0x1cab7c(0x5c3,0x4cd,0x586,0x62a)+_0x1cab7c(0x11b7,0xe70,0xffb,0x12d9)+'know\x20anyon'+'e\x20who\x20cont'+'ributed\x20to'+_0x36aa7c(0xe64,0xdcc,0x895,0x9ef)+'pt_';const _0x505e51=_0x40710f,_0x1edaec={};_0x1edaec[_0x1cab7c(0x904,0x813,0x8c8,0xd3c)]=_0x36aa7c(0xbb7,0x2e4,0x8c4,0x80e),_0x1edaec[_0x36aa7c(0xca5,0x6ea,0x4a4,0x97e)+'n']='_choose\x20th'+_0x36aa7c(0x302,0x91e,-0x34,0x44b)+_0x36aa7c(0x4ba,0x547,0x886,0x9c9)+_0x36aa7c(0x22a,-0x2d1,-0x217,-0x42)+_0x1cab7c(0x5fd,0x9aa,0xec9,0x596)+_0x1cab7c(0xc74,0xbc9,0x9de,0x70b),_0x1edaec[_0x1cab7c(0x9fa,0xc2b,0xff6,0x7b3)]='0';function _0x1cab7c(_0x4a1934,_0x121df0,_0x7d9f29,_0x12b4a9){return _0x4963f8(_0x4a1934,_0x121df0-0x1e2,_0x121df0-0x59,_0x12b4a9-0x1dd);}const _0x3a0ff4={};_0x3a0ff4[_0x36aa7c(0x53f,-0x1c4,0x833,0x308)]='textpromen'+'u',_0x3a0ff4[_0x1cab7c(0xbaf,0xe89,0xaf9,0xa29)+'n']=_0x36aa7c(0x6b5,0x2b0,0x62f,0x72d)+'is\x20if\x20you\x20'+_0x36aa7c(0x680,0xe28,0x668,0x9c9)+'e\x20the\x20text'+_0x36aa7c(0x33b,0xb8b,0x258,0x687)+'mmand_',_0x3a0ff4['rowId']='0';const _0x125d0b={};_0x125d0b[_0x36aa7c(0x615,0x80c,0x24,0x308)]='Sub\x20Menu\x20k'+'e-19',_0x125d0b[_0x36aa7c(-0x157,-0x11d,-0x194,0x16d)]=[_0x3a0ff4];const _0x1154ba={};_0x1154ba[_0x1cab7c(0xd1b,0x813,0x316,0xb3d)]=_0x1cab7c(0xbec,0xe72,0x10c1,0x138f)+'nu',_0x1154ba['descriptio'+'n']='_choose\x20th'+'is\x20if\x20you\x20'+_0x1cab7c(0xe0d,0xed4,0xc7e,0xf0a)+'e\x20the\x20phot'+'ooxymenu\x20c'+'ommand_',_0x1154ba['rowId']='0';let _0x206b4b=alpha[_0x1cab7c(0x579,0x589,0x749,0xa0f)+_0x36aa7c(0x40d,0x1c6,0x4c2,0x242)+_0x1cab7c(0x8b2,0xd64,0x9be,0x11ab)](from,{'listMessage':{'title':_0x1cab7c(0x54f,0x810,0x9cb,0x7b9)+_0x1cab7c(0xb47,0xebd,0x12a6,0x1196),'description':'Hai\x20@'+sender[_0x36aa7c(-0x334,-0xd7,-0x339,0x25)]('@')[0x1808+0x9f2+0x1*-0x21fa]+(_0x1cab7c(0x5b3,0xaf0,0xaf7,0xeca)+_0x1cab7c(0x8be,0x4e3,0x982,0x42c)+_0x1cab7c(0x718,0x7f9,0x828,0xa39)+_0x1cab7c(0x2ca,0x806,0x762,0x486)+_0x1cab7c(0x8c5,0x771,0xc4f,0x91c)+_0x1cab7c(0x71a,0x80d,0x5b5,0x5c2)+'hkan\x20dipil'+_0x36aa7c(0x9dd,0x723,0x888,0x6d0)+_0x1cab7c(0x112,0x506,0x813,0x483)),'buttonText':_0x505e51[_0x1cab7c(0x5ac,0x918,0x67f,0xa8d)],'footerText':'©\x20'+creator,'listType':_0x36aa7c(0x4a6,0x292,0x988,0x49d)+_0x1cab7c(0xdc9,0xed5,0x1331,0x11be),'sections':[{'title':_0x505e51[_0x36aa7c(0xde8,0xdaa,0xe29,0x99f)],'rows':[{'title':_0x505e51[_0x36aa7c(0x2d8,0x638,-0x43,0x153)],'description':_0x505e51['QvtMx'],'rowId':'0'}]},{'title':_0x505e51['eXNQW'],'rows':[{'title':_0x505e51[_0x1cab7c(0x64f,0x57e,0x77d,0x861)],'description':_0x36aa7c(0x33c,0xa60,0x633,0x72d)+'is\x20if\x20you\x20'+_0x1cab7c(0xb85,0xed4,0x1089,0x12c1)+_0x36aa7c(-0x23e,0x290,-0xf3,-0x33)+_0x1cab7c(0x3e1,0x8b3,0x888,0x768)+_0x36aa7c(0x597,0x88f,0x7be,0x7c1),'rowId':'0'}]},{'title':_0x505e51[_0x36aa7c(0x37f,0x26e,-0x1a,0x1af)],'rows':[_0x1edaec]},{'title':_0x1cab7c(0xde1,0xdcf,0x949,0x8e4)+'e-3','rows':[{'title':_0x505e51[_0x1cab7c(0xfa0,0xc59,0xade,0x1038)],'description':_0x505e51[_0x36aa7c(0x1d3,0x635,0x187,0x6b3)],'rowId':'0'}]},{'title':'Sub\x20Menu\x20k'+_0x36aa7c(0xa6d,0x2ee,0x8f4,0x65d),'rows':[{'title':'funmenu','description':_0x505e51['uzIUe'],'rowId':'0'}]},{'title':_0x505e51[_0x1cab7c(0x626,0x684,0x36d,0x19a)],'rows':[{'title':_0x36aa7c(0xd40,0x840,0x7a5,0x989),'description':_0x505e51['krDez'],'rowId':'0'}]},{'title':_0x505e51[_0x36aa7c(-0x2b7,-0x132,0x28a,0x1d4)],'rows':[{'title':_0x505e51[_0x36aa7c(0x800,0x77b,0x399,0x80a)],'description':_0x505e51[_0x36aa7c(0x6a6,0x6f5,0xa1f,0x57a)],'rowId':'0'}]},{'title':_0x505e51['LZwMj'],'rows':[{'title':_0x505e51[_0x1cab7c(0x6ed,0x667,0x418,0xb00)],'description':_0x505e51[_0x36aa7c(0x407,0x542,0x3e6,0x79)],'rowId':'0'}]},{'title':_0x36aa7c(0x3e1,0xc50,0x564,0x8c4)+_0x1cab7c(0xde3,0xb69,0xae4,0xc49),'rows':[{'title':_0x505e51[_0x36aa7c(-0x3be,-0x224,-0x86,0x59)],'description':_0x505e51[_0x36aa7c(0x7b0,0x783,0xdd3,0xa0a)],'rowId':'0'}]},{'title':_0x505e51['uYVmz'],'rows':[{'title':_0x505e51[_0x1cab7c(0x5da,0x8f6,0xc2b,0x88b)],'description':_0x505e51[_0x36aa7c(0x44b,0x4dc,0xd2f,0x8c3)],'rowId':'0'}]},{'title':_0x505e51[_0x1cab7c(0x8b3,0x56a,0x9d7,0x5b8)],'rows':[{'title':_0x505e51[_0x36aa7c(0x35e,0x765,0x496,0x549)],'description':_0x505e51[_0x1cab7c(0x198,0x5ae,0x35d,0x3b1)],'rowId':'0'}]},{'title':_0x505e51[_0x36aa7c(0x7ba,0x51e,0x1d3,0x283)],'rows':[{'title':_0x505e51[_0x1cab7c(0x4c2,0x66b,0xb9e,0x94d)],'description':_0x505e51[_0x1cab7c(0x10c1,0xe13,0xb03,0x1047)],'rowId':'0'}]},{'title':_0x505e51['nZddJ'],'rows':[{'title':_0x505e51['tsFjN'],'description':'_choose\x20th'+_0x36aa7c(0x48e,0x1ac,0x563,0x44b)+_0x36aa7c(0xeec,0xc04,0x75a,0x9c9)+_0x1cab7c(0x176,0x5fa,0x822,0x617)+_0x36aa7c(0x679,0x5d3,0x932,0x68b)+'d_','rowId':'0'}]},{'title':_0x505e51[_0x36aa7c(0xbf,0xa3,-0x1bb,0x1f8)],'rows':[{'title':_0x505e51[_0x1cab7c(0x52a,0x933,0x4b8,0xe81)],'description':_0x505e51[_0x1cab7c(0xb66,0xd59,0xe66,0x108d)],'rowId':'0'}]},{'title':_0x505e51[_0x36aa7c(-0x43,0x6ad,-0x7b,0x317)],'rows':[{'title':_0x505e51[_0x36aa7c(0x8ad,0x7ea,0x821,0x3f2)],'description':_0x505e51['IJyEQ'],'rowId':'0'}]},{'title':_0x505e51[_0x36aa7c(-0x82,-0x343,-0x29d,-0x7f)],'rows':[{'title':_0x505e51[_0x1cab7c(0xceb,0xe26,0x9de,0x126f)],'description':'_choose\x20th'+_0x1cab7c(0xb56,0x956,0x9de,0xc1b)+'want\x20to\x20us'+_0x1cab7c(0xa65,0xa37,0x50b,0x734)+'e\x20effect\x20m'+'enu\x20comman'+'d_','rowId':'0'}]},{'title':_0x505e51[_0x1cab7c(0x10ff,0xd36,0xec5,0xd7f)],'rows':[{'title':_0x1cab7c(0x888,0xb31,0x1058,0x97d)+'n','description':_0x505e51[_0x1cab7c(0x868,0x7b6,0xa66,0x635)],'rowId':'0'}]},{'title':_0x1cab7c(0x9cf,0xdcf,0x8cc,0xbe0)+_0x36aa7c(0x659,0x33e,-0x1db,0x130),'rows':[{'title':_0x505e51[_0x1cab7c(0x7c3,0x7ff,0x49f,0xbce)],'description':_0x505e51[_0x36aa7c(0x730,0x2fa,0x4c0,0x4cf)],'rowId':'0'}]},{'title':_0x505e51['zTOSD'],'rows':[{'title':_0x505e51['LelEi'],'description':_0x505e51[_0x36aa7c(0x975,-0x33,0x213,0x42d)],'rowId':'0'}]},_0x125d0b,{'title':_0x505e51[_0x36aa7c(0xbaf,0x51f,0x32d,0x727)],'rows':[_0x1154ba]},{'title':_0x505e51['mVPhV'],'rows':[{'title':_0x36aa7c(0x2d6,0x128,-0x32e,0x5a),'description':_0x505e51[_0x1cab7c(0x6fc,0xaee,0xc78,0xd4f)],'rowId':'0'}]},{'title':_0x36aa7c(0xbf2,0xc93,0x944,0x8c4)+_0x36aa7c(0x754,0x6e7,-0x24c,0x262),'rows':[{'title':_0x36aa7c(0xc16,0xc00,0x96b,0x81d),'description':_0x505e51['wytWH'],'rowId':'0'}]},{'title':'🏅\x20Source\x20s'+_0x36aa7c(0xdab,0x4fe,0x6ce,0x8d7),'rows':[{'title':_0x1cab7c(0xd81,0xcab,0xef8,0xba7)+'e','description':_0x505e51[_0x36aa7c(0x322,0x10a,-0x1d2,0x26c)],'rowId':_0x505e51[_0x36aa7c(0x338,0x772,0x798,0x677)]}]},{'title':_0x1cab7c(0x50a,0x896,0x5fd,0x7ad)+'tion','rows':[{'title':_0x505e51[_0x1cab7c(0x860,0xcd6,0xbc1,0xa22)],'description':_0x505e51[_0x36aa7c(-0x108,0x324,-0x7b,0x20f)],'rowId':'0'}]}]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x5ef3c7={};_0x5ef3c7['waitForAck']=!![],alpha[_0x36aa7c(0x586,0x6e1,0x93b,0x6a3)+_0x1cab7c(0x894,0xc8c,0xe02,0x86d)](_0x206b4b,_0x5ef3c7);},sendImageMaker=async(_0x4d6001,_0x343d77,_0x142d0e)=>{function _0xaef0b7(_0x523ff5,_0x36d19a,_0x5ebfd9,_0x42f467){return _0x128a37(_0x523ff5-0x8d,_0x523ff5,_0x5ebfd9-0x132,_0x5ebfd9- -0x598);}const _0x3aa342={'YUYjr':function(_0x2477ee,_0x4a94d0){return _0x2477ee(_0x4a94d0);},'NaJxr':_0x395a2f(0x9af,0xd85,0xac3,0xdee)+'salahan,\x20c'+'oba\x20bebera'+_0xaef0b7(0xbd4,0xaea,0x8f0,0xd6c)+'gi','BbPzq':_0x395a2f(0x272,0x361,0x6b8,0xa34),'mCfdr':_0x395a2f(0xc0e,0x7bc,0xa8e,0x712)},_0x339ad4=await alpha['prepareMes'+_0x395a2f(0x741,0x688,0xb4c,0xb9c)](from,_0x4d6001,MessageType[_0x395a2f(0x8a8,0xa4d,0x808,0x46e)],{'thumbnail':Buffer[_0xaef0b7(-0x41b,-0x482,0x33,0x14b)](-0x1738+0x1d*0x81+0x1*0x89b)});let _0xe6f70f=_0x339ad4[_0xaef0b7(-0x312,0x111,0xeb,-0x428)][_0x395a2f(0xa6b,0x9e6,0x80d,0x61e)+_0xaef0b7(-0x17d,0x52f,0x254,0x70c)]?_0x339ad4['message']['ephemeralM'+_0xaef0b7(0x531,0x242,0x254,0x3e9)]:_0x339ad4;const _0x50f945={};function _0x395a2f(_0x525650,_0x46f8d3,_0x51c5e3,_0x346339){return _0x128a37(_0x525650-0xcf,_0x46f8d3,_0x51c5e3-0x15e,_0x51c5e3- -0x191);}_0x50f945[_0x395a2f(0xc3c,0xbfc,0xaa9,0x7c8)+'t']=_0xaef0b7(0x914,0x87f,0x6e2,0xa7e);const _0x4366ee={};_0x4366ee[_0xaef0b7(0x639,0x16b,0x586,0x9e)]=_0x395a2f(0x122d,0x123e,0xd4b,0x8d7),_0x4366ee[_0xaef0b7(0x147,0x1a,0x1d6,-0x299)]=_0x50f945,_0x4366ee[_0xaef0b7(0xbd7,0x328,0x7fb,0x5a4)]=0x1;const _0x93bdc={};_0x93bdc[_0x395a2f(0xddb,0xb26,0x98d,0x5ec)]=_0x3aa342[_0x395a2f(0xbb,0xcf,0x4a0,0x42e)],_0x93bdc[_0x395a2f(0x154,0xaa3,0x5dd,0x11f)]={},_0x93bdc[_0xaef0b7(0x5ae,0xc78,0x7fb,0x60b)]=0x1,_0x93bdc[_0x395a2f(0x154,0xaa3,0x5dd,0x11f)][_0x395a2f(0x845,0xc6c,0xaa9,0xa6a)+'t']=_0x3aa342[_0xaef0b7(0x562,0x9bf,0x8ad,0x9f2)];const _0xcd955f=[_0x4366ee,_0x93bdc],_0x475a22={'contentText':_0x343d77,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0xaef0b7(0x5f6,0x517,0x4a3,0x7ec))+_0x142d0e['split']('@')[0x1100*0x1+0x2497+-0x3597],'buttons':_0xcd955f,'headerType':0x4,'imageMessage':_0xe6f70f[_0xaef0b7(0x2d1,0x124,0xeb,0x24c)]['imageMessa'+'ge']},_0x2fe799={};_0x2fe799[_0xaef0b7(0x607,0xd50,0x876,0xb49)+'id']=[_0x142d0e];const _0x3f0eb7={};_0x3f0eb7[_0x395a2f(0xd9f,0x41a,0x8dc,0xe22)]=mek,_0x3f0eb7[_0xaef0b7(0xd3,0x581,0x3e1,0x901)+'o']=_0x2fe799,alpha[_0x395a2f(0xd53,0xd64,0xb68,0xc16)+'e'](from,_0x475a22,MessageType[_0xaef0b7(0x1d7,0x79e,0x28f,0xd0)+_0xaef0b7(0xbb3,0x20c,0x745,0x62e)],_0x3f0eb7)[_0xaef0b7(0x2ea,0x260,0x42e,0x4ed)](_0x199029=>{function _0x3b551a(_0x27efd2,_0x49931b,_0x177ae3,_0x3bbe76){return _0xaef0b7(_0x27efd2,_0x49931b-0x4f,_0x3bbe76-0x4cc,_0x3bbe76-0x19c);}function _0x3318ff(_0xd2a5eb,_0x77a792,_0x343d0c,_0x3979ec){return _0x395a2f(_0xd2a5eb-0x130,_0x77a792,_0x3979ec-0x220,_0x3979ec-0x78);}_0x3aa342[_0x3318ff(0x9da,0x46b,0x9cf,0x7a9)](reply,_0x3aa342[_0x3318ff(0x5e3,0x1bf,0x2ab,0x578)]);});},send_qr_gopay=async(_0x409e3b,_0x5d02f7)=>{ini_bayar=ucapannya2+(_0x4b859b(0x75f,0x397,0x7d6,0x56c)+_0x4b859b(0x244,0x3de,0x37e,0x328))+pushname+(_0x56a8a6(0xf1,0x49d,0x2af,0x472)+'\x20:\x20_@')+sender[_0x4b859b(0x4d9,-0x44,-0xca,-0x29d)]('@')[0x14e8+-0x2049+0xb61]+(_0x4b859b(-0x25b,0x25,-0x366,0x108)+_0x56a8a6(0x2a,0x381,0x881,0x418)+_0x56a8a6(0x1e9,0x3d6,-0x3fb,0xac)+_0x4b859b(0x50c,0x6e9,0xc24,0x7c7)+_0x4b859b(0x16c,0x3eb,0x740,0x37e)+'Pilih\x20Pay\x20'+'/\x20Bayar\x0a3.'+_0x4b859b(-0x20f,0x187,-0x392,0xd1)+_0x56a8a6(0x835,0x773,0x5da,0x8cc)+_0x4b859b(0x521,0x73d,0x50a,0xc0d)+_0x56a8a6(0x440,0x8a,0x44d,0x10c)+_0x56a8a6(0x423,0x6e5,0x40f,0x27b)+'l\x20pembayar'+'an\x0a5.\x20Sele'+_0x56a8a6(0xa08,0x870,0xbda,0x86d)+'rd\x20@')+ini_mark[_0x4b859b(0x105,-0x44,-0x42,-0xa3)]('@')[-0x1*0xbaf+-0x42d*0x3+0x1836]+'_\x0a';const _0x2bfa62={};function _0x56a8a6(_0x3f4511,_0x19e5b7,_0x14b691,_0x3887f8){return _0x4963f8(_0x19e5b7,_0x19e5b7-0x5f,_0x3887f8- -0x414,_0x3887f8-0x48);}function _0x4b859b(_0x2b3111,_0x3677df,_0x7d8250,_0x3f5c43){return _0x4963f8(_0x3f5c43,_0x3677df-0x179,_0x3677df- -0x51b,_0x3f5c43-0xd7);}_0x2bfa62[_0x56a8a6(0x8b5,0xb4c,0xd23,0x950)+'id']=[sender,ini_mark],await alpha[_0x56a8a6(0x8d2,0x75f,0x855,0x83b)+'e'](from,_0x409e3b,image,{'thumbnail':Buffer['alloc'](0x3*0x527+0x199d*-0x1+0xa28),'quoted':_0x5d02f7,'caption':ini_bayar,'contextInfo':_0x2bfa62});},send_qr_ovo=async(_0x4b201b,_0x500bdd)=>{ini_bayar=ucapannya2+(_0x323f4c(0x7b3,0x70b,0x571,0x21)+'\x20:\x20_')+pushname+(_0x323f4c(0x6bf,0x516,0x545,0x2ee)+_0x323f4c(0x90a,0x4ed,0x57b,0xa01))+sender[_0x323f4c(0x115,0x3d1,0x196,0x116)]('@')[-0x1*-0xb35+-0x1*0x100f+0x45*0x12]+(_0xc37c2c(0x7be,0xba4,0x44e,0x9a9)+_0x323f4c(0x668,0x2e1,0x54c,0x6c8)+_0xc37c2c(0x579,0x8c6,0x65,0x32e)+_0x323f4c(-0x87,0x1d6,0x4a7,0x681)+_0xc37c2c(0x619,0x159,0x981,0x297)+_0xc37c2c(0x893,0xc5e,0x881,0x793)+_0xc37c2c(0x9d5,0x956,0xe54,0xee0)+_0xc37c2c(0x8b2,0xc48,0x577,0x395)+'de\x20diatas\x20'+_0xc37c2c(0xa2d,0x739,0x6d9,0xbe6)+_0x323f4c(0x3d1,0x927,0x8d0,0x50c)+_0x323f4c(0xa8f,0x9c3,0x905,0xcea)+'embayaran\x0a'+_0xc37c2c(0x973,0xa02,0xdac,0xa1e)+_0x323f4c(0x698,0x39c,0x191,0x66d)+'@')+ini_mark[_0x323f4c(0x6d5,-0x17a,0x196,-0x170)]('@')[-0x1f84+-0x1*0x1179+-0x30fd*-0x1]+'_\x0a';const _0x226f46={};_0x226f46[_0x323f4c(0xc5f,0xa35,0xa23,0xd62)+'id']=[sender,ini_mark];function _0x323f4c(_0x5d777b,_0x491ba5,_0x3db716,_0x4a9eeb){return _0x4963f8(_0x4a9eeb,_0x491ba5-0x108,_0x3db716- -0x341,_0x4a9eeb-0x1d3);}function _0xc37c2c(_0x14f783,_0x484350,_0x1f2a36,_0x585c5f){return _0x4963f8(_0x585c5f,_0x484350-0xe4,_0x14f783- -0x85,_0x585c5f-0x5d);}await alpha[_0x323f4c(0xb91,0x901,0x90e,0xcd2)+'e'](from,_0x4b201b,image,{'thumbnail':Buffer[_0x323f4c(0x110,0x654,0x1e0,-0x1ac)](0x25d*-0x9+0x1*-0xd1b+-0xa0*-0x37),'quoted':_0x500bdd,'caption':ini_bayar,'contextInfo':_0x226f46});},send_qr_dana=async(_0x54d729,_0x1ab5af)=>{function _0x403e30(_0x3238d0,_0x11fde0,_0x4fb1c0,_0x15fcba){return _0x4963f8(_0x3238d0,_0x11fde0-0x182,_0x15fcba- -0x4b7,_0x15fcba-0x168);}function _0x57551f(_0x1cc096,_0x35206c,_0x58120c,_0x5c5ccf){return _0x4963f8(_0x58120c,_0x35206c-0x33,_0x1cc096-0x31,_0x5c5ccf-0x1b6);}ini_bayar=ucapannya2+(_0x57551f(0x8e3,0xcbf,0xa1f,0x99b)+_0x57551f(0x92a,0xb63,0x41a,0xa9e))+pushname+('_\x0a•>\x20Nomor'+_0x403e30(0x3d8,0x504,-0x3c,0x405))+sender[_0x57551f(0x508,-0x34,0x771,0x716)]('@')[-0xb88+0x3c0+0x7c8]+(_0x57551f(0x571,0x54d,0x1eb,0x160)+_0x403e30(0x5b4,0x142,0x22e,0x375)+_0x57551f(0x4f1,0xa1a,0x2b4,0x778)+_0x403e30(0xaae,0x6d6,0x9a3,0x79a)+_0x403e30(0x687,0x5e1,0x356,0x1e7)+'ilih\x20Pay\x20/'+_0x403e30(0x454,0x447,0x69d,0x5a3)+_0x57551f(0x968,0xa14,0x756,0xa27)+_0x57551f(0x748,0x218,0x777,0x5a8)+_0x403e30(0x719,0xb72,0x8c9,0x750)+_0x57551f(0xa6c,0x969,0x9cd,0x54e)+_0x57551f(0x529,0x563,0x196,0x616)+_0x57551f(0xd5b,0x1267,0x121d,0xd22)+_0x403e30(0x50f,-0x5b,0x45f,0x2b4)+_0x57551f(0x46d,0x58a,0x4c3,0x89b)+'\x20@')+ini_mark['split']('@')[0x348+-0xf0a+0xbc2]+'_\x0a';const _0x20730a={};_0x20730a[_0x403e30(0x921,0x4b5,0xd6d,0x8ad)+'id']=[sender,ini_mark],await alpha[_0x403e30(0x43c,0x922,0xc90,0x798)+'e'](from,_0x54d729,image,{'thumbnail':Buffer[_0x57551f(0x552,0x6b1,0x963,0x228)](0x25d9+-0x62b*0x1+-0x1fae),'quoted':_0x1ab5af,'caption':ini_bayar,'contextInfo':_0x20730a});},{soundmenu,kerangmenu,groupmenu,quotesmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,textpromenu,photooxymenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,allmenu}=require(_0x128a37(0x2d4,0x782,0x12a,0x523)+_0x4963f8(0x15a,0x5e0,0x5ad,0x4e8)),isBtMsg=type==_0x4963f8(0xcee,0x12f9,0xeaa,0xfa3)+_0x128a37(0xb31,0xf31,0x1149,0xbfd)+'ge'?mek[_0x4963f8(0x9e4,0x506,0x5d9,0x41a)][_0x4963f8(0xd18,0xa5d,0xeaa,0xf50)+_0x128a37(0xaba,0xc55,0xe3e,0xbfd)+'ge']['selectedDi'+'splayText']:'',isStMsg=type==_0x4963f8(0x1009,0xa1e,0xad2,0x7bd)+_0x4963f8(0x90c,0x8cf,0x66d,0x798)?mek['message'][_0x4963f8(0x90e,0x6df,0xad2,0xef4)+_0x128a37(0x8cd,0x45a,0x349,0x717)]['title']:'',stc=mek[_0x4963f8(0x73b,0x817,0x5d9,0x491)][_0x128a37(0x959,0x1270,0x119c,0xe31)+_0x128a37(0x953,0xa68,0x8ae,0xcdd)],msc=mek[_0x128a37(0x43e,0x76e,0x662,0x683)]['audioMessa'+'ge'];wew=fs['readFileSy'+'nc'](_0x4963f8(0x56e,0x93d,0x6d0,0x81a)+thumbnail),alfa2=_0x4963f8(0x33d,0x84c,0x822,0xac9)+_0x128a37(0x8f3,0x1fa,0x143,0x558)+'sapp.net',alfa3=_0x4963f8(0xaf7,0xf9b,0xd23,0xd38)+_0x128a37(0xdfc,0x71c,0x706,0x98b)+_0x128a37(0x8a2,0xf1e,0xa01,0xbb3);function _0x128a37(_0x36c523,_0x2c8a47,_0x919db3,_0x19d991){return _0xf809(_0x19d991-0x30f,_0x2c8a47);}sub_yt_zeeone_ofc=type==_0x128a37(0xf78,0x66c,0x760,0xb7c)+_0x128a37(0x698,0xbf2,0x509,0x717)?mek['message'][_0x4963f8(0x73f,0xfb3,0xad2,0xc08)+_0x4963f8(0xa23,0x332,0x66d,0x2ab)][_0x128a37(0xacf,0x643,0x50a,0x864)]:'',subscribezeeoneofc=type==_0x4963f8(0x10f2,0xe7e,0xeaa,0xa2b)+_0x4963f8(0x790,0xe10,0xb53,0xc82)+'ge'?mek['message'][_0x128a37(0xce0,0xe28,0xfab,0xf54)+'ponseMessa'+'ge'][_0x4963f8(0x889,0x6ec,0x7c4,0x3f8)+_0x4963f8(0x59d,0x4cf,0x8db,0xd6d)]:'';if(sub_yt_zeeone_ofc==_0x4963f8(0xf43,0x745,0xa9f,0x56d)){console[_0x128a37(0xb95,0xb68,0xef4,0xa59)](color(time,'magenta'),color(_0x4963f8(0x41d,0x5b8,0x7f1,0x3b6)+'ge\x20group\x20o'+_0x4963f8(0x35e,0xadd,0x63c,0x9d3)));if(!isBotGroupAdmins)return reply(_0x128a37(0x13b0,0xca4,0xf85,0xf1f)+'\x20Bot\x20sebag'+_0x4963f8(0x5c4,0xf09,0xae7,0x641)+_0x128a37(0x124b,0xbfd,0xe25,0xef6)+_0x128a37(0xaa1,0x11d5,0xb29,0xd5a));await alpha[_0x4963f8(0x712,0x814,0x5b9,0xa95)+_0x4963f8(0x619,0x2dd,0x434,0x617)](from,GroupSettingChange['messageSen'+'d'],![]),fakegroup(_0x128a37(0xb79,0x860,0x2ea,0x6b1)+_0x4963f8(0x4e4,0x6f7,0x646,0xa3b)+_0x128a37(0x1027,0xc83,0xd47,0xbe1)+'``');}if(sub_yt_zeeone_ofc==_0x128a37(0xb20,0x3ab,0x4c5,0x7f5)+'e'){console[_0x4963f8(0xb48,0x5d5,0x9af,0x830)](color(time,'magenta'),color('List\x20messa'+_0x128a37(0x865,0x4db,0x674,0x99a)+_0x128a37(0xe50,0x99d,0xcb4,0xdac)));if(!isBotGroupAdmins)return reply(_0x128a37(0xe88,0x1334,0x10ea,0xf1f)+_0x4963f8(0x1dd,0x948,0x536,0x4bb)+'ai\x20admin\x20t'+_0x128a37(0xc42,0x12c5,0x9b6,0xef6)+'hulu```');await alpha['groupSetti'+_0x128a37(0x365,0x910,0x2d1,0x4de)](from,GroupSettingChange['messageSen'+'d'],!![]),fakegroup(_0x128a37(0xbb4,0x577,0x2cd,0x6b1)+_0x128a37(0xcae,0x1044,0x1011,0xc9d)+_0x4963f8(0x70d,0xa95,0x617,0x958));}if(sub_yt_zeeone_ofc==_0x128a37(0x86a,0x11c9,0xbf5,0xd79)){console[_0x4963f8(0x6b2,0xc4e,0x9af,0xac1)](color(time,_0x4963f8(0x140c,0xd72,0xeca,0x10fa)),color(_0x4963f8(0x72d,0x52a,0x7f1,0x382)+_0x4963f8(0xc18,0xa0d,0xea6,0xed1)+'enu'));var quotejamzk=await getBuffer(_0x4963f8(0x62f,0xbde,0x748,0xb8e)+_0x4963f8(0x99d,-0x26,0x51f,0x5c8)+'text.com/n'+_0x128a37(0x88a,0x57f,0xea9,0x96e)+_0x128a37(0xb6e,0x85c,0xf1f,0xc49)+_0x128a37(0x403,0x8a8,0xb30,0x7a9)+_0x4963f8(0xcc1,0x112d,0xd60,0xef6)+_0x128a37(0x1af,0x55f,0x210,0x5c3)+_0x4963f8(0x26e,0x459,0x48d,0x6e7)+_0x4963f8(0x2a0,0x5be,0x5ce,0x9be)+_0x4963f8(0xadc,0xb18,0xa02,0xf0d)+_0x128a37(0x74e,0x60f,0xa40,0x7e6)+_0x4963f8(0xda9,0x5d0,0xa51,0x827)+'0&fontsize'+_0x128a37(0x886,0x3eb,0x8bd,0x927)+_0x4963f8(0xe9c,0xcd8,0xe71,0xf98)+'fillTextPa'+_0x4963f8(0x80a,0xacf,0x5ca,0x256)+_0x4963f8(0x803,0x7a2,0x88b,0xcfc)+_0x128a37(0xb58,0xea8,0xeb6,0xa93)+'ib');const _0xde071c={};_0xde071c[_0x4963f8(0x87b,0xc8d,0xb90,0x744)+'t']=_0x128a37(0xdb2,0x100c,0xdd4,0xbc4);const _0x46afb4={};_0x46afb4['buttonId']=_0x4963f8(0x61e,0x2ab,0x7d0,0x76a),_0x46afb4[_0x4963f8(0x343,0x3a1,0x6c4,0x6d1)]=_0xde071c,_0x46afb4[_0x4963f8(0xb83,0xb88,0xce9,0xc47)]=0x1;const _0x425277={};_0x425277[_0x128a37(0xbff,0xeb9,0xc71,0xc3a)+'t']=_0x128a37(0xfe4,0x134c,0x9ef,0xe2e);const _0x50b6fb={};_0x50b6fb['buttonId']='owner',_0x50b6fb['buttonText']=_0x425277,_0x50b6fb['type']=0x1,sendButLocation(from,kerangmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0xb92,0x9d5,0xbf5,0xaff)+ini_mark[_0x128a37(0x383,0x4be,0x1e0,0x581)]('@')[0xdf7+-0xf77+0x180],quotejamzk,[_0x46afb4,_0x50b6fb],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x128a37(0x724,0x17a,0x7c7,0x5b6)){console['log'](color(time,_0x128a37(0x1433,0xcd6,0xfc9,0xf74)),color(_0x4963f8(0x3c4,0x613,0x7f1,0x862)+_0x4963f8(0xe8e,0xc8f,0xea6,0xef3)+'enu'));var quotejamzk=await getBuffer('https://te'+_0x4963f8(0x57d,0x703,0x588,0x9d4)+_0x128a37(0xb45,0x1033,0xaba,0xcde)+_0x4963f8(0x39b,0x9aa,0x869,0x7bd)+'5a5f9.jpg');const _0x58d853={};_0x58d853[_0x4963f8(0x9e0,0x77d,0xb90,0x791)+'t']=_0x128a37(0xb9f,0xf36,0x101b,0xbc4);const _0x25cfcc={};_0x25cfcc[_0x4963f8(0xac4,0x7f9,0xa74,0xb50)]='Command',_0x25cfcc[_0x128a37(0x312,0xbbb,0x59a,0x76e)]=_0x58d853,_0x25cfcc[_0x128a37(0xded,0x10db,0x11c1,0xd93)]=0x1;const _0x169c1f={};_0x169c1f['displayTex'+'t']=_0x4963f8(0xbed,0xa2d,0xd84,0x91c);const _0x4e8fac={};_0x4e8fac['buttonId']='owner',_0x4e8fac['buttonText']=_0x169c1f,_0x4e8fac[_0x128a37(0x1191,0xb91,0xd09,0xd93)]=0x1,sendButLocation(from,soundmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[0x1*-0x43f+0x1552+-0x5b1*0x3],quotejamzk,[_0x25cfcc,_0x4e8fac],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0xca9,0x8a1,0xaaa,0xca7)){console['log'](color(time,_0x4963f8(0xe6e,0x12e8,0xeca,0xfa1)),color(_0x128a37(0x3c1,0xc5f,0xa9a,0x89b)+_0x128a37(0x122d,0xe4d,0x1156,0xf50)+'enu'));var quoteamzk=await getBuffer(_0x128a37(0xdda,0xe55,0x742,0xabb)+_0x128a37(0x3ab,0x745,0xa94,0x632)+_0x128a37(0x1103,0xe0b,0x1317,0xe19)+_0x4963f8(0x7a7,0xb43,0xa45,0xcbc)+'984f9.jpg');const _0x92e7f3={};_0x92e7f3[_0x4963f8(0x9e6,0x96c,0xb90,0x951)+'t']=_0x128a37(0xbd9,0x98a,0xe89,0xbc4);const _0x3c54bb={};_0x3c54bb[_0x128a37(0x6f3,0x9cd,0xe37,0xb1e)]=_0x4963f8(0x507,0x338,0x7d0,0x403),_0x3c54bb[_0x128a37(0x9c6,0xc91,0x2f0,0x76e)]=_0x92e7f3,_0x3c54bb[_0x128a37(0x865,0xefe,0xb77,0xd93)]=0x1;const _0x287e01={};_0x287e01[_0x4963f8(0xb97,0xe35,0xb90,0xc18)+'t']=_0x4963f8(0x84b,0x1102,0xd84,0xc08);const _0x5af873={};_0x5af873['buttonId']=_0x4963f8(0xb2a,0xacf,0xe32,0xb69),_0x5af873[_0x4963f8(0x507,0xa8e,0x6c4,0x970)]=_0x287e01,_0x5af873[_0x128a37(0xd97,0xe22,0x12d8,0xd93)]=0x1,sendButLocation(from,quotesmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0xc26,0xe9d,0xbf5,0xb6a)+ini_mark['split']('@')[0x48*0x28+-0xc37*-0x1+-0x1777],quoteamzk,[_0x3c54bb,_0x5af873],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0x949,0x7a0,0xcc0,0x1061)){console[_0x128a37(0x588,0xf85,0xd9f,0xa59)](color(time,'magenta'),color(_0x128a37(0x9ff,0x4e9,0x62b,0x89b)+_0x128a37(0x10d7,0xf64,0x10ed,0xf50)+_0x128a37(0xac4,0x86e,0xc64,0x80d)));var jakkja=await getBuffer(_0x4963f8(0x556,0xe1d,0xa11,0x5f0)+'legra.ph/f'+_0x128a37(0x1303,0xff8,0x1358,0xe3c)+_0x4963f8(0x107c,0xc59,0xd8b,0x1077)+'48acc.jpg');const _0x363307={};_0x363307[_0x4963f8(0xcab,0x681,0xb90,0x909)+'t']=_0x4963f8(0xb5e,0xc69,0xb1a,0x8c4);const _0x2e7d47={};_0x2e7d47[_0x4963f8(0xdd0,0x650,0xa74,0xce2)]=_0x4963f8(0xc9f,0x465,0x7d0,0x495),_0x2e7d47['buttonText']=_0x363307,_0x2e7d47['type']=0x1;const _0x597c7a={};_0x597c7a[_0x4963f8(0x6db,0x72f,0xb90,0x7f2)+'t']=_0x4963f8(0xf88,0x106f,0xd84,0xd83);const _0x4096c2={};_0x4096c2['buttonId']='owner',_0x4096c2['buttonText']=_0x597c7a,_0x4096c2[_0x128a37(0x8bb,0xe09,0x8d3,0xd93)]=0x1,sendButLocation(from,groupmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x4963f8(0x310,0x2d7,0x4d7,0x88b)]('@')[0x1b5*0x13+-0x1*-0x22ed+0x77c*-0x9],jakkja,[_0x2e7d47,_0x4096c2],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x128a37(0x5b1,0x209,0x79c,0x6ef)){console['log'](color(time,_0x4963f8(0x10c2,0xfdf,0xeca,0xed1)),color(_0x4963f8(0x95c,0xadc,0x7f1,0x971)+_0x4963f8(0x54e,0x8fc,0x8a9,0x757)+'nu'));var animkzka=await getBuffer(_0x128a37(0xd74,0xd93,0x5a8,0xabb)+_0x128a37(0x318,0x78f,0xe4,0x632)+_0x4963f8(0xdd3,0xf02,0xcd8,0x88a)+_0x128a37(0xb5b,0x105b,0x8aa,0xd8e)+'09438.jpg');const _0x37ee8={};_0x37ee8[_0x128a37(0xb47,0xfbb,0xfc7,0xc3a)+'t']=_0x128a37(0x10d8,0x9ab,0x91e,0xbc4);const _0x2831c7={};_0x2831c7[_0x128a37(0x83f,0xbce,0xe13,0xb1e)]=_0x4963f8(0xbb9,0x900,0x7d0,0x952),_0x2831c7['buttonText']=_0x37ee8,_0x2831c7[_0x128a37(0x12e3,0xaa1,0x11bb,0xd93)]=0x1;const _0xe63515={};_0xe63515[_0x4963f8(0xa94,0x7d5,0xb90,0x657)+'t']=_0x128a37(0xf6f,0xe90,0xa0a,0xe2e);const _0x44dbfc={};_0x44dbfc[_0x128a37(0xe77,0xa7d,0x6b9,0xb1e)]=_0x4963f8(0x945,0x11eb,0xe32,0x8f1),_0x44dbfc[_0x128a37(0x71a,0xc89,0xaa0,0x76e)]=_0xe63515,_0x44dbfc[_0x128a37(0xd78,0xf31,0xb6c,0xd93)]=0x1,sendButLocation(from,animemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[-0x1*-0x125e+-0x16*-0x5c+-0x1a46],animkzka,[_0x2831c7,_0x44dbfc],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='convertmen'+'u'){console[_0x128a37(0xc56,0xd6f,0x63b,0xa59)](color(time,_0x128a37(0x1342,0xad7,0x10e7,0xf74)),color(_0x128a37(0x72d,0x6e4,0xb57,0x89b)+_0x4963f8(0x953,0xfc4,0xadf,0xe18)+_0x128a37(0xfaa,0xdcb,0x1195,0xe14)));var converkdk=await getBuffer(_0x4963f8(0xaed,0x548,0xa11,0x7e8)+'legra.ph/f'+_0x4963f8(0xb98,0x7e2,0x7df,0x51f)+'65e7d9ab70'+'1b207.jpg');const _0x354e1d={};_0x354e1d['displayTex'+'t']=_0x128a37(0xa0d,0xe9f,0xf0e,0xbc4);const _0x50b486={};_0x50b486[_0x128a37(0xc55,0xc87,0xddc,0xb1e)]=_0x4963f8(0x615,0x86b,0x7d0,0x58d),_0x50b486['buttonText']=_0x354e1d,_0x50b486[_0x4963f8(0xf0d,0xef4,0xce9,0xa88)]=0x1;const _0x29d476={};_0x29d476[_0x128a37(0x907,0x8d5,0x9ec,0xc3a)+'t']='✓\x20OWNER';const _0x514426={};_0x514426[_0x128a37(0xb88,0xd77,0x70e,0xb1e)]=_0x128a37(0x9a5,0xd0d,0x11a3,0xedc),_0x514426['buttonText']=_0x29d476,_0x514426['type']=0x1,sendButLocation(from,convertmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x128a37(0x15e,0x1c7,0x553,0x581)]('@')[-0x2da+-0x101d+-0x1*-0x12f7],converkdk,[_0x50b486,_0x514426],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x128a37(0xccb,0x7b9,0xd05,0x8e4)){console[_0x128a37(0xc8c,0x63f,0x7b6,0xa59)](color(time,_0x128a37(0xac5,0x1444,0xfc6,0xf74)),color(_0x4963f8(0x528,0x475,0x7f1,0x480)+_0x128a37(0x1f6,0x55a,0x788,0x738)+_0x4963f8(0xa5f,0x987,0xd6a,0x1181)));var nsfwkak=await getBuffer(_0x4963f8(0xd21,0x9f1,0xa11,0xd28)+_0x4963f8(0x2d2,0x46,0x588,0xa9a)+'ile/487eeb'+_0x4963f8(0x1035,0xa24,0xde5,0x11d3)+'ca37c.jpg');const _0x57ce6c={};_0x57ce6c['displayTex'+'t']=_0x128a37(0xbe6,0x10d9,0x864,0xbc4);const _0x1d00fd={};_0x1d00fd[_0x128a37(0x760,0x9a8,0xeae,0xb1e)]=_0x4963f8(0xba4,0xade,0x7d0,0x376),_0x1d00fd['buttonText']=_0x57ce6c,_0x1d00fd['type']=0x1;const _0x259639={};_0x259639[_0x4963f8(0x8de,0xa53,0xb90,0xaaa)+'t']=_0x4963f8(0x1047,0x1101,0xd84,0xacd);const _0x433bac={};_0x433bac[_0x128a37(0xeeb,0xffc,0xfd0,0xb1e)]=_0x4963f8(0xd6b,0xe5d,0xe32,0x1355),_0x433bac[_0x128a37(0x3e5,0xade,0x674,0x76e)]=_0x259639,_0x433bac['type']=0x1,sendButLocation(from,nsfwmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x4963f8(0x9c5,0xf6,0x4d7,0x9b6)]('@')[-0x2476+-0x8+0x247e],nsfwkak,[_0x1d00fd,_0x433bac],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0xbaa,0xea0,0xe25,0x9a2)+'u'){console['log'](color(time,'magenta'),color('List\x20messa'+'ge\x20asupan\x20'+_0x128a37(0xea7,0xafd,0xa7f,0xe14)));var asupanak=await getBuffer('https://te'+_0x128a37(0xb60,0x3d2,0xa86,0x632)+_0x128a37(0xa84,0x98c,0x7c9,0xa4e)+'18241b0142'+_0x4963f8(0x102e,0x954,0xb06,0xb0f));const _0x170285={};_0x170285[_0x4963f8(0x1034,0x705,0xb90,0xfb0)+'t']='⋮☰\x20BACK';const _0x52c6f9={};_0x52c6f9[_0x4963f8(0x8b7,0xf36,0xa74,0xb9d)]='Command',_0x52c6f9['buttonText']=_0x170285,_0x52c6f9[_0x128a37(0x894,0xda4,0x10e0,0xd93)]=0x1;const _0x1c7172={};_0x1c7172['displayTex'+'t']=_0x128a37(0x115b,0xd95,0x115e,0xe2e);const _0x2654c4={};_0x2654c4[_0x4963f8(0x7ec,0x84f,0xa74,0x8be)]=_0x128a37(0x101c,0x1073,0xcc6,0xedc),_0x2654c4[_0x4963f8(0x329,0x79a,0x6c4,0x675)]=_0x1c7172,_0x2654c4[_0x128a37(0x9d0,0xe10,0xe13,0xd93)]=0x1,sendButLocation(from,asupanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0xe80,0xaeb,0xbf5,0xc59)+ini_mark['split']('@')[-0x16aa+-0x266f*0x1+0x3d19],asupanak,[_0x52c6f9,_0x2654c4],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0xc62,0xa8e,0xb98,0xe84)+'ot'){console['log'](color(time,_0x128a37(0xc24,0xf67,0x12dd,0xf74)),color(_0x128a37(0xb13,0x1213,0xf73,0xf4a)+'tidak\x20munc'+_0x128a37(0xce7,0x665,0x801,0xadc)+_0x4963f8(0xae7,0xaa3,0xc15,0xff7)+_0x128a37(0x7d4,0x394,0x3e3,0x875)));var allmenuk=await getBuffer(_0x128a37(0x97a,0x714,0xabc,0xabb)+_0x128a37(0x732,0x218,0x925,0x632)+_0x4963f8(0xe73,0xef0,0xaf8,0xcc1)+_0x4963f8(0x937,0x4e3,0x6f6,0xaf0)+_0x128a37(0xac4,0x10c,0xa76,0x611));const _0x4fd06b={};_0x4fd06b[_0x4963f8(0xb5f,0xcc3,0xb90,0xa45)+'t']='⋮☰\x20BACK';const _0x5a5474={};_0x5a5474[_0x4963f8(0x5e7,0xde2,0xa74,0xdf8)]='Command',_0x5a5474[_0x4963f8(0x309,0x63f,0x6c4,0x2ad)]=_0x4fd06b,_0x5a5474[_0x4963f8(0xa08,0x1109,0xce9,0x10e8)]=0x1;const _0x9607a3={};_0x9607a3[_0x128a37(0xe05,0x9f7,0xfd0,0xc3a)+'t']='✓\x20OWNER';const _0x510245={};_0x510245['buttonId']=_0x128a37(0x1180,0x9dd,0x1270,0xedc),_0x510245[_0x4963f8(0x870,0x5a6,0x6c4,0x27a)]=_0x9607a3,_0x510245[_0x4963f8(0x8ce,0xe2a,0xce9,0x1187)]=0x1,sendButLocation(from,allmenu(kyun,os,prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat,latensii),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0xdea,0xcf8,0xbf5,0x102c)+ini_mark['split']('@')[0x1c98+-0xd9c+0x1*-0xefc],allmenuk,[_0x5a5474,_0x510245],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0x8fa,0x6a5,0x62e,0x335)+'nu'){console[_0x128a37(0xd7d,0xf79,0x9f5,0xa59)](color(time,_0x128a37(0xa56,0xbaa,0x143f,0xf74)),color(_0x128a37(0x602,0x587,0x5ed,0x89b)+_0x128a37(0xc5b,0x750,0xc0e,0x9f7)+_0x128a37(0xdb6,0xcdf,0x820,0x908)));var downloadlsl=await getBuffer(_0x128a37(0xb9e,0xb20,0xd9b,0xabb)+'legra.ph/f'+_0x4963f8(0x132,0x692,0x4d9,0x8db)+'f04fc9dd2d'+_0x128a37(0xacb,0x732,0x8ff,0xa1e));const _0x3cfbec={};_0x3cfbec[_0x4963f8(0xfc3,0xd00,0xb90,0x10d1)+'t']=_0x128a37(0xbfd,0x982,0xfab,0xbc4);const _0x4334d1={};_0x4334d1[_0x4963f8(0x552,0xdaf,0xa74,0x9ac)]=_0x128a37(0x66e,0x88a,0x353,0x87a),_0x4334d1[_0x128a37(0x6de,0x964,0xb83,0x76e)]=_0x3cfbec,_0x4334d1['type']=0x1;const _0x4fa323={};_0x4fa323[_0x4963f8(0xb3c,0x10a5,0xb90,0x10a8)+'t']='✓\x20OWNER';const _0x15dbe0={};_0x15dbe0['buttonId']='owner',_0x15dbe0[_0x4963f8(0x7ad,0xa54,0x6c4,0x237)]=_0x4fa323,_0x15dbe0[_0x4963f8(0x7b7,0xfce,0xce9,0xd24)]=0x1,sendButLocation(from,downloadmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0x793,0x110d,0xbf5,0x87a)+ini_mark['split']('@')[-0x2548+-0x2287*0x1+-0x1f*-0x251],downloadlsl,[_0x4334d1,_0x15dbe0],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x128a37(0xfb1,0xf0b,0xffa,0xb5a)){console['log'](color(time,_0x4963f8(0xe66,0x1132,0xeca,0xae1)),color(_0x128a37(0x49d,0x763,0xb7d,0x89b)+_0x4963f8(0x9e0,0x9b8,0x877,0x352)));var funmenujs=await getBuffer(_0x4963f8(0x96e,0xb6e,0xa11,0x733)+_0x4963f8(0x12d,0x752,0x588,0x17f)+_0x128a37(0xd16,0xe06,0xc77,0xf06)+_0x128a37(0x6db,0xb8a,0xe03,0x8f8)+_0x4963f8(0x172,0x4f2,0x4d5,0xc7));const _0x229417={};_0x229417[_0x4963f8(0x66a,0xa3a,0xb90,0xb8c)+'t']=_0x4963f8(0xd22,0x102d,0xb1a,0xbd8);const _0x3ad643={};_0x3ad643['buttonId']=_0x4963f8(0x4ef,0x6f6,0x7d0,0x41f),_0x3ad643[_0x4963f8(0xb44,0x83d,0x6c4,0x928)]=_0x229417,_0x3ad643[_0x128a37(0x9be,0xd7a,0xe78,0xd93)]=0x1;const _0x555544={};_0x555544[_0x4963f8(0xbc4,0x7c2,0xb90,0xf70)+'t']=_0x4963f8(0x96b,0x95e,0xd84,0x128a);const _0x375f1c={};_0x375f1c[_0x128a37(0x663,0xd5f,0xbcf,0xb1e)]=_0x128a37(0xd59,0xc99,0xc02,0xedc),_0x375f1c['buttonText']=_0x555544,_0x375f1c['type']=0x1,sendButLocation(from,funmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[0x250+0x1139*0x2+-0xa*0x3ad],funmenujs,[_0x3ad643,_0x375f1c],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0xd7f,0x1257,0xe3b,0x12aa)){console[_0x4963f8(0xce2,0xdb8,0x9af,0xd4e)](color(time,_0x4963f8(0xd2e,0xd92,0xeca,0x1139)),color('List\x20messa'+_0x4963f8(0x11d6,0x10fd,0xea8,0xfbb)+'nu'));var makermenksk=await getBuffer('https://te'+_0x128a37(0x97a,0x3bd,0x158,0x632)+'ile/610245'+_0x128a37(0xc57,0xd01,0xc6e,0xcf4)+_0x128a37(0x6b0,0x744,0x2f7,0x5a6));const _0x92848d={};_0x92848d[_0x128a37(0xcba,0x837,0xfa7,0xc3a)+'t']=_0x128a37(0xebb,0x99f,0x91d,0xbc4);const _0x5396d8={};_0x5396d8['buttonId']=_0x128a37(0xa27,0xb12,0xac9,0x87a),_0x5396d8[_0x4963f8(0x176,0x8be,0x6c4,0x436)]=_0x92848d,_0x5396d8[_0x128a37(0x1217,0x112e,0x8ed,0xd93)]=0x1;const _0x331efb={};_0x331efb['displayTex'+'t']=_0x128a37(0x1345,0xa7b,0x1180,0xe2e);const _0x381ad4={};_0x381ad4[_0x128a37(0xd65,0x93a,0xf89,0xb1e)]=_0x4963f8(0x949,0xf79,0xe32,0xde4),_0x381ad4[_0x128a37(0x9c4,0x2c5,0x62c,0x76e)]=_0x331efb,_0x381ad4[_0x4963f8(0xc3d,0xc30,0xce9,0x88e)]=0x1,sendButLocation(from,makermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x128a37(0x113b,0x759,0xabc,0xc9f)+ini_mark[_0x128a37(0x2af,0x77,0x997,0x581)]('@')[-0x1500+0x16f*-0x1+0x166f],makermenksk,[_0x5396d8,_0x381ad4],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x128a37(0x9c8,0x99e,0x989,0xdde)+'u'){console[_0x4963f8(0x4d4,0x789,0x9af,0x90d)](color(time,_0x4963f8(0xbec,0xb34,0xeca,0xeb0)),color(_0x128a37(0xac4,0x43a,0xba1,0x89b)+_0x128a37(0xb34,0x4f0,0x6ab,0x6b7)+'menu'));var textjskzb=await getBuffer(_0x4963f8(0xcae,0xd1a,0xa11,0x879)+_0x4963f8(0x5ba,0x8c0,0x588,0x597)+_0x128a37(0xf59,0xfd8,0xcc0,0xc70)+'f719b8edb2'+_0x128a37(0x68f,0xff8,0x1084,0xb8f));const _0x2d0654={};_0x2d0654[_0x4963f8(0xac3,0xe05,0xb90,0x754)+'t']=_0x4963f8(0xb61,0xf12,0xb1a,0xabf);const _0xcdec1d={};_0xcdec1d[_0x4963f8(0xb2d,0x8d4,0xa74,0x5af)]=_0x4963f8(0x6e1,0x3b1,0x7d0,0xc6e),_0xcdec1d[_0x128a37(0x7f1,0x55f,0x788,0x76e)]=_0x2d0654,_0xcdec1d[_0x4963f8(0xb29,0xf50,0xce9,0xde8)]=0x1;const _0x1bbd6e={};_0x1bbd6e[_0x128a37(0xea9,0xa20,0x6f0,0xc3a)+'t']=_0x128a37(0xeeb,0xf4d,0x128f,0xe2e);const _0x709610={};_0x709610['buttonId']='owner',_0x709610[_0x4963f8(0x4d9,0xa88,0x6c4,0xab3)]=_0x1bbd6e,_0x709610[_0x4963f8(0xc59,0x108f,0xce9,0xee5)]=0x1,sendButLocation(from,textpromenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x128a37(0x7ae,0x1014,0x1011,0xc9f)+ini_mark[_0x128a37(0x838,0x83d,0xa65,0x581)]('@')[-0x1410+-0x1d2a+0x189d*0x2],textjskzb,[_0xcdec1d,_0x709610],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='photooxyme'+'nu'){console[_0x4963f8(0x656,0xb3a,0x9af,0xd28)](color(time,'magenta'),color('List\x20messa'+'ge\x20photoox'+'ymenu'));var pdkdk=await getBuffer(_0x4963f8(0x990,0xbe5,0xa11,0x617)+_0x128a37(0xa43,0x610,0x51d,0x632)+'ile/ad77c1'+_0x128a37(0x4da,0xcbf,0x4cc,0x7d0)+_0x4963f8(0xf1f,0xa1c,0xc20,0x1088));const _0x132f3f={};_0x132f3f['displayTex'+'t']='⋮☰\x20BACK';const _0x28f28c={};_0x28f28c[_0x128a37(0x5d6,0xb8b,0xaf7,0xb1e)]=_0x128a37(0x9bd,0xd3a,0x6bf,0x87a),_0x28f28c[_0x128a37(0x6d5,0x35a,0xb56,0x76e)]=_0x132f3f,_0x28f28c[_0x4963f8(0xe84,0x9ff,0xce9,0x889)]=0x1;const _0x45fb8d={};_0x45fb8d[_0x4963f8(0x74d,0xac9,0xb90,0x9f0)+'t']=_0x128a37(0xb27,0xbc2,0xa17,0xe2e);const _0xff7aea={};_0xff7aea[_0x128a37(0x8a6,0x8e8,0xe96,0xb1e)]=_0x128a37(0xcda,0xe8a,0x126e,0xedc),_0xff7aea[_0x128a37(0x875,0x9bf,0x270,0x76e)]=_0x45fb8d,_0xff7aea[_0x128a37(0xdea,0xf90,0x12ab,0xd93)]=0x1,sendButLocation(from,photooxymenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0xbf8,0xe59,0xbf5,0xe96)+ini_mark[_0x128a37(0x44f,0x16d,0x760,0x581)]('@')[-0x2d*-0xa3+0x1*-0x2417+0x770],pdkdk,[_0x28f28c,_0xff7aea],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='othermenu'){console[_0x128a37(0xced,0x862,0xa4d,0xa59)](color(time,'magenta'),color(_0x4963f8(0x720,0x8bc,0x7f1,0x319)+'ge\x20otherme'+'nu'));var othendjke=await getBuffer(_0x4963f8(0x4c7,0xb64,0xa11,0xc8c)+_0x128a37(0x4e3,0x233,0x634,0x632)+_0x128a37(0x260,0x3d8,0x4c4,0x711)+_0x128a37(0xd8e,0xbf7,0xc19,0xb2f)+'2987d.jpg');const _0x392a3e={};_0x392a3e['displayTex'+'t']=_0x128a37(0xae8,0xf5d,0xe1f,0xbc4);const _0x5aa7c3={};_0x5aa7c3['buttonId']=_0x128a37(0x479,0xb43,0x7aa,0x87a),_0x5aa7c3['buttonText']=_0x392a3e,_0x5aa7c3[_0x128a37(0x11d1,0x1273,0x8f3,0xd93)]=0x1;const _0x9c72cc={};_0x9c72cc[_0x128a37(0xf78,0xe30,0x9fc,0xc3a)+'t']=_0x4963f8(0xf83,0xf32,0xd84,0xa3d);const _0x3360b4={};_0x3360b4['buttonId']=_0x128a37(0x140f,0xe4f,0x1135,0xedc),_0x3360b4[_0x128a37(0x997,0xaa3,0xbd2,0x76e)]=_0x9c72cc,_0x3360b4[_0x128a37(0x12b4,0x1202,0x94e,0xd93)]=0x1,sendButLocation(from,othermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0x10f8,0xc31,0xbf5,0xb53)+ini_mark[_0x4963f8(0x6af,0x8e8,0x4d7,0x7e2)]('@')[0x173d+-0x4f2*0x5+-0x3*-0x7f],othendjke,[_0x5aa7c3,_0x3360b4],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0xe6c,0xe1d,0xd0d,0x1169)){console[_0x4963f8(0xb02,0xe93,0x9af,0xb1f)](color(time,'magenta'),color('List\x20messa'+_0x4963f8(0x105e,0x8e3,0xba0,0xf4a)+'nu'));var ownermenjdu=await getBuffer('https://te'+'legra.ph/f'+_0x4963f8(0x3b0,0x849,0x838,0x8df)+'d6da00d7ae'+_0x128a37(0x1093,0xe0a,0x81e,0xc5c));const _0x501bde={};_0x501bde[_0x128a37(0xfc0,0x960,0x97a,0xc3a)+'t']=_0x128a37(0x8ba,0xcc9,0xedd,0xbc4);const _0x2bcab5={};_0x2bcab5[_0x128a37(0xc16,0xecf,0xde8,0xb1e)]='Command',_0x2bcab5[_0x128a37(0x21f,0xb27,0x74f,0x76e)]=_0x501bde,_0x2bcab5[_0x4963f8(0x1237,0x11f5,0xce9,0xd75)]=0x1;const _0x161f83={};_0x161f83[_0x4963f8(0x6e8,0xc94,0xb90,0x68a)+'t']=_0x128a37(0x1149,0x1284,0x1290,0xe2e);const _0x480f31={};_0x480f31[_0x128a37(0xc4d,0xbbd,0xd04,0xb1e)]=_0x128a37(0xaab,0xa13,0x12a7,0xedc),_0x480f31['buttonText']=_0x161f83,_0x480f31[_0x4963f8(0xde6,0x111d,0xce9,0xfd0)]=0x1,sendButLocation(from,ownermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x4963f8(0x111,0x792,0x4d7,0x7c0)]('@')[-0x2b6*0xd+-0x1901+-0x61*-0x9f],ownermenjdu,[_0x2bcab5,_0x480f31],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='storagemen'+'u'){console[_0x128a37(0x8d1,0xe21,0x5b5,0xa59)](color(time,_0x128a37(0x1493,0xe83,0xf73,0xf74)),color('List\x20messa'+_0x128a37(0xa23,0xd22,0x5b8,0x90c)+_0x4963f8(0xeba,0x1148,0xd6a,0x1091)));var storagemsn=await getBuffer(_0x128a37(0xbfa,0xd70,0x9a2,0xabb)+_0x128a37(0x529,0x5a3,0x3e5,0x632)+_0x4963f8(0x686,0xb9f,0xa90,0xacf)+_0x128a37(0x7b6,0x23c,0x613,0x4ea)+'fd896.jpg');const _0xa06411={};_0xa06411[_0x128a37(0xff5,0xf68,0xa43,0xc3a)+'t']='⋮☰\x20BACK';const _0x51d422={};_0x51d422[_0x4963f8(0xd95,0xc30,0xa74,0xe0c)]=_0x4963f8(0x674,0x63e,0x7d0,0x924),_0x51d422['buttonText']=_0xa06411,_0x51d422[_0x128a37(0x1111,0xa1c,0x120d,0xd93)]=0x1;const _0xa30935={};_0xa30935[_0x4963f8(0x7f7,0xcf2,0xb90,0x8a6)+'t']='✓\x20OWNER';const _0x1dec3e={};_0x1dec3e[_0x4963f8(0xc8e,0x880,0xa74,0x75e)]=_0x128a37(0xf0d,0xf35,0x109a,0xedc),_0x1dec3e[_0x4963f8(0x69a,0x7e2,0x6c4,0x60e)]=_0xa30935,_0x1dec3e[_0x4963f8(0xaf8,0x94a,0xce9,0x114d)]=0x1,sendButLocation(from,storagemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x128a37(0x1096,0x114f,0x1016,0xc9f)+ini_mark[_0x128a37(0x33f,0x60c,0x612,0x581)]('@')[0x1519*-0x1+-0x74a+0x1c63],storagemsn,[_0x51d422,_0x1dec3e],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x128a37(0xb8a,0xbef,0x11b6,0xce6)){console['log'](color(time,'magenta'),color('List\x20messa'+_0x128a37(0x10c2,0x9ee,0x86f,0xb8d)));var tagmwnjn=await getBuffer(_0x4963f8(0xb58,0xce2,0xa11,0xd2c)+'legra.ph/f'+_0x128a37(0x53f,0x8b1,0x81f,0xa0f)+'75616e6ac9'+_0x128a37(0xd82,0xe01,0xd4e,0xca7));const _0x2bbc4d={};_0x2bbc4d[_0x4963f8(0x708,0xe78,0xb90,0xc0e)+'t']='⋮☰\x20BACK';const _0x3849a3={};_0x3849a3[_0x4963f8(0x624,0x7c1,0xa74,0xb4b)]=_0x4963f8(0x32d,0x776,0x7d0,0xb82),_0x3849a3['buttonText']=_0x2bbc4d,_0x3849a3[_0x128a37(0x1176,0xa68,0x1221,0xd93)]=0x1;const _0x3a04cd={};_0x3a04cd[_0x128a37(0xf43,0x93b,0xf3d,0xc3a)+'t']='✓\x20OWNER';const _0x5829ed={};_0x5829ed['buttonId']=_0x4963f8(0xa53,0xa08,0xe32,0x134e),_0x5829ed[_0x4963f8(0x23f,0x31d,0x6c4,0x3ed)]=_0x3a04cd,_0x5829ed[_0x4963f8(0xf7c,0x11d6,0xce9,0x11d5)]=0x1,sendButLocation(from,tagmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x128a37(0xeed,0xe34,0x102a,0xc9f)+ini_mark['split']('@')[0x3b*0x67+-0x1e9a+0x6dd],tagmwnjn,[_0x3849a3,_0x5829ed],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0xe13,0x821,0xac9,0xd50)){console['log'](color(time,_0x4963f8(0xa78,0x13c5,0xeca,0xa68)),color(_0x128a37(0xd00,0x5cf,0x9a8,0x89b)+'ge\x20upmenu'));var upmenuj=await getBuffer(_0x128a37(0xd85,0xf86,0x7c1,0xabb)+'legra.ph/f'+_0x4963f8(0x91b,0x51f,0xa1d,0x9c1)+_0x128a37(0x140e,0xd6c,0x1150,0xf72)+_0x128a37(0x622,0x87f,0x834,0x6e5));const _0x2a102e={};_0x2a102e[_0x4963f8(0xea1,0xca6,0xb90,0x8ad)+'t']=_0x128a37(0xcb1,0x790,0xae8,0xbc4);const _0x2dd027={};_0x2dd027[_0x4963f8(0x80a,0xeb9,0xa74,0x6ce)]=_0x4963f8(0x99a,0x371,0x7d0,0xbc4),_0x2dd027[_0x128a37(0x251,0x358,0x4ac,0x76e)]=_0x2a102e,_0x2dd027[_0x128a37(0xeca,0xe2a,0xe8f,0xd93)]=0x1;const _0x418442={};_0x418442[_0x128a37(0xb5e,0xe13,0xc0c,0xc3a)+'t']=_0x4963f8(0xc24,0xee0,0xd84,0xccf);const _0x3df2e8={};_0x3df2e8[_0x128a37(0x903,0xe98,0xb82,0xb1e)]=_0x128a37(0x108b,0xc48,0xb97,0xedc),_0x3df2e8['buttonText']=_0x418442,_0x3df2e8[_0x128a37(0x1215,0x1106,0xb44,0xd93)]=0x1,sendButLocation(from,upmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0xa65,0x7a3,0xbf5,0xa29)+ini_mark['split']('@')[0x1*0x3d0+0x12a4+-0x4*0x59d],upmenuj,[_0x2dd027,_0x3df2e8],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='gacha\x20ceca'+'n'){console[_0x128a37(0xf3f,0xa0d,0xd37,0xa59)](color(time,_0x4963f8(0x12a4,0xe2d,0xeca,0x100e)),color(_0x128a37(0xb6a,0xdb4,0xbe3,0x89b)+_0x4963f8(0x10b8,0xeb6,0xb92,0x855)+_0x128a37(0xd41,0xbbb,0x9f9,0x858)));var cecanksk=await getBuffer('https://te'+_0x128a37(0x94f,0xa08,0x892,0x632)+_0x4963f8(0xe8c,0xbc3,0x9f6,0xcc4)+'496a8748f2'+_0x128a37(0x499,0x8ec,0xcd4,0x7d2));const _0x1a1b4c={};_0x1a1b4c[_0x128a37(0x10c3,0x7c4,0x1085,0xc3a)+'t']=_0x128a37(0x103f,0xf00,0xe98,0xbc4);const _0x3e0077={};_0x3e0077[_0x128a37(0xac8,0xf61,0x1017,0xb1e)]=_0x4963f8(0x7ba,0x60e,0x7d0,0xa69),_0x3e0077[_0x128a37(0x572,0x38f,0x82f,0x76e)]=_0x1a1b4c,_0x3e0077[_0x128a37(0xeda,0x108d,0x8ba,0xd93)]=0x1;const _0x19e271={};_0x19e271['displayTex'+'t']='✓\x20OWNER';const _0x4c5bf1={};_0x4c5bf1[_0x4963f8(0xd8c,0x623,0xa74,0x5f1)]=_0x4963f8(0x962,0x90a,0xe32,0x134f),_0x4c5bf1[_0x4963f8(0x991,0xbe2,0x6c4,0x789)]=_0x19e271,_0x4c5bf1[_0x128a37(0xdb8,0xf78,0xda7,0xd93)]=0x1,sendButLocation(from,cecanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x128a37(0x1184,0xabe,0xf5a,0xc9f)+ini_mark[_0x128a37(0x86,0x1d0,0x721,0x581)]('@')[-0x1*0xaed+0x24e1+-0x12e*0x16],cecanksk,[_0x3e0077,_0x4c5bf1],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x4963f8(0x67e,0x66f,0xad8,0xc25)+'n'){console[_0x128a37(0x645,0xe42,0xacd,0xa59)](_0x128a37(0x121d,0xac6,0x118e,0xe10)+_0x128a37(0x60a,0xa20,0x897,0x916),_0x4963f8(0xa98,0x9f0,0x6b5,0x4b9)+_0x128a37(0xc6,0x205,0xe1,0x5a3)+']',wib,color(_0x4963f8(0xf85,0xfb5,0xa7e,0xc87)+_0x4963f8(0x893,0xe4e,0xb92,0x1061)+'ogan\x20menu'));var coganksk=await getBuffer(_0x4963f8(0xe00,0xce8,0xa11,0x721)+_0x4963f8(0x404,0x68c,0x588,0x339)+'ile/8e308c'+'f31132917d'+_0x4963f8(0x686,0x748,0x98c,0x4e5));const _0x56b2b6={};_0x56b2b6[_0x128a37(0xafd,0xd65,0xa1d,0xc3a)+'t']=_0x128a37(0xadd,0xcb2,0x982,0xbc4);const _0x5a88b5={};_0x5a88b5['buttonId']=_0x4963f8(0xaa4,0x2c5,0x7d0,0x6a7),_0x5a88b5['buttonText']=_0x56b2b6,_0x5a88b5['type']=0x1;const _0x400a95={};_0x400a95['displayTex'+'t']=_0x4963f8(0x89d,0x1114,0xd84,0x126f);const _0x5c0633={};_0x5c0633['buttonId']=_0x4963f8(0x108a,0x11b9,0xe32,0xf46),_0x5c0633[_0x128a37(0x6b5,0x591,0xc66,0x76e)]=_0x400a95,_0x5c0633[_0x128a37(0xbc5,0x129c,0xd58,0xd93)]=0x1,sendButLocation(from,coganmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4963f8(0xebc,0xfe8,0xbf5,0xc2b)+ini_mark[_0x128a37(0x86b,0x370,0x82a,0x581)]('@')[-0x2564+0x24a2+0xc2],coganksk,[_0x5a88b5,_0x5c0633],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}function _0x4fef(){const _0x1bdb3c=['prank\x20chat','TTgdn','\x20nila\x20seti','“Cintailah','u\x20want\x20to\x20','fZSbu','photooxyme','aTxGx','ATTVu','yat','truth','Score','ytmp4ajahd','xmlformats','*BROADCAST','n\x20dan\x20lemp','DVEyY','Bearer\x20AAA','asupan\x20men','MtwJi','rsakit-sak','tweettrump','omong\x20tapi','8ball','1000000000','ipt,\x20*/*,\x20','e\x20the\x20anim','messageInf','ken','descriptio','ndung,\x20Pag','owner','caption','unda\x20maka\x20','1\x20Safari/5','Cinta\x20buka','main','NOWM','gan\x20sebaik','MpEyT','makermenu','\x20ke\x20depan.','a\x20menjadik','rJWOq','.\x20Valery','eo\x20or\x20Audi','dupnya.','e-11','ika\x20Anda\x20i','ng\x20:*\x20','a,\x20maka\x20An','gvxCC','k\x20susu\x20seb','keinginan\x20','Sabtu','meow','📛\x20*Usernam','erlebih\x20da','sukai\x20diam','ah)\x20&\x20jadi','kuni','81IUq16cHj','CVyQE','bayi.”','PHOTO','ibu\x20pengem','emojinya?','e\x20the\x20tagm','n\x20kekayaan','💌\x20Informat','othermenu','uk\x20maju,\x20b','uhkan\x20agar','ile/b14ea2','cuddle','mLhme','📍\x20Nama\x20:\x20@','aik\x20untuk\x20','patrick','random','ya\x20juga\x20ti','BOT','copyNForwa','emenu\x20comm','000','est/activa','h\x20list\x20emo','osoft-','Orang-oran','as\x20itu\x20ada','pernah\x20cin','SELECT\x20HER','ang-pasang','more\x20quote','extType=1&','ersion/7.0','wanita\x20sam','5000000000','```Jadikan','ike\x20Gecko)','h\x20menjadi\x20','\x0a🚀\x20Ext\x20:\x20M','alan\x20adala','instastory','want\x20to\x20us','ECT','akan\x20hancu','leWebKit/5','\x20merasa\x20ce','ak\x20ingin\x20t','/webp,imag','hinata','asa\x20orang\x20','ayu','dak\x20makan\x20','sendEpheme','GFpPK','ownload_','TXUnW','balik\x20kepa','tu\x20dicipta','\x20NT\x2010.0;\x20','kan\x20menert','Cemburu\x20it','an\x20bahagia','sambut\x20den','a\x20dari\x20Bio','rbelalak\x20a','ziva','wnvideo.ne','\x20harganya\x20','yiygI','g\x20nyokap\x20a','kali\x20Kena\x20','solo','\x20yaitu\x20pas','nusia.\x20Tap','getik\x20di\x20g','Membaca\x20se','nsfw_avata','a\x20ikut\x20ter','Jika\x20menu\x20','\x20this\x20scri','vAcFp','stri\x20yang\x20','ilkan\x20lebi','i\x20kekayaan','ge\x20quotesm','neko','ge\x20makerme','ya\x20setiap\x20','buttonsRes','Emoji-Goog','a\x20tersebut','tWECf','\x20boleh\x20keh','pa\x20aja?\x20be','tiktoknowm','location','\x20kakinya\x20h','aya\x20takuti','Emoji-Sams','\x20sukses\x20it','benarnya\x20k','earchResou','\x20adalah\x20ke','an\x20yang\x20ba','DOCUMENT','%22%2C%22s','NsYnD','i-alphabot','tt\x20anjimmm','katacaklon','hal\x20yang\x20a','kNLdf','nnya.”','Kb\x0a🍃\x20Views','rwSrb','\x20Gecko)\x20Ve','a\x20apa-apa.','elek.”','f5bcc57f70','=0.9','magenta','KMwqV','getMinutes','mediafire','t/download','rim\x20kesini','bunga','reply\x20pesa','CzQBB','gaCJH','ngChange','mua\x20orang\x20','CdHKI','Emoji-HTC-','dioei','\x20disajikan','rv:57.0)\x20G','attr','i\x0a\x0a_Regard','tvbXq','verify','NaJxr','61d42f7cac','on\x20below','false%7D%2','extendedTe','fileName','test','c41.jpg','menjadi\x20se','g.whatsapp','Senin','0\x20(X11;\x20Da','0\x20(Macinto','Emoji-Mess','.com/api/a','e-2','CeEFL','harus\x20kamu','cors','\x20akan\x20tera','x-guest-to','kirim\x20foto','YDhZT','\x20Silahkan\x20','adi\x20buat\x20a','e\x20the\x20kera','wXkjA','\x20*READ*','ecko/20100','lewd','Juni','suka\x20mabar','dengan\x20com','/p_2032vcy','i\x20Anda\x20han','nyurl.com/','IqUDb','n\x20saling\x20m','tat\x20yang\x20s','lbQfi','mPDwB','ange;v=b3;','arah\x20yang\x20','ataannya.','foot','t\x20seharian','oader','RUQPY','berapa\x20saa','e\x20the\x20grou','nmu\x20yang\x20a','twKDJ','aYOIa','this\x20if\x20yo','AAAAAAAAAA','\x20inginkan,','besar\x20dari','e\x20the\x20owne','./zeeone/z','id,en-US;q','dEnlL','yMjiI','々\x20Judul\x20:\x20','\x20gunung,\x20t','e\x20the\x20down','lami\x20sekar','“Cara\x20terb','ng\x20dikirim','\x20perlu\x20har','xVMzN','Example:\x20','fat\x20menjal','https://f.','ontoh|true','sh;\x20Intel\x20','rimu\x20menye','undefined','floor','ch-name&do','currencyCo','oXbKA','\x20akun\x20mu\x20s','\x20dapatkan\x20','g\x20pas\x20lu\x20l','em\x20Pakai\x20G','fcPKZ','q=0.01','INQUIRY','https','BY\x20ZEEONE\x20','Emoji-Twit','gangbang','dang\x20tidak','erah\x2024\x20ja','utu.be/1r_','ayuzawa','origin','•\x20\x20','FCcPM','ral','IyGKQ','ak\x20menikah','.0.4430.93','gasm','ARpMj','Kalau\x20menc','call\x20u\x20bab','“Jika\x20kepi','following','\x20\x0a▶️\x20Durati','spam','513@s.what','image\x20effe','at.\x20Biar\x20a','emium','Watermark','Tidak\x20ada\x20','\x20bahasa\x20da','fdJcB','\x20banyak\x20ng','result','e\x20the\x20stor','e*\x20:\x20','jpegThumbn','\x20pgn\x20balik','WmaKa','e\x20the\x20othe','krDez','k\x20dikerjak','\x20Aplikasi\x20','perasaan\x20c','\x20(KHTML,\x20l','\x20database.','0_9_3)\x20App','Subscribe\x20','anmu','fileEncSha','LPyvK','wallpaper','g\x20dapat\x20me','egagalan.','media','“Pintar\x20it','ele_sticke','tweet','user\x20priva','Tiktok\x20WM.','\x0a\x0a_Regard\x20','tiktok','akkan\x20diri','fd073.jpg','ipe\x20pacar\x20','split','an\x20the\x20lim','ile/97b236','m\x20sticker','gamu?','\x20kamu\x20putu','-officedoc','pe\x20pasanga','bG0=','pZoRe','nd_','Click\x20butt','no-cache','lo\x20pernah\x20','*_Cowo_*','1\x20Safari/6','amu','BZTaY','irzLv','\x20-\x20','lApIR','“Ingin\x20hat','\x20hidup\x20leb','guage','RcJdh','api\x20perasa','nget','\x0a🍃\x20Views:\x20','IrSYO','tiktokwm','ALL\x20MENU\x20B','an\x20button\x20','e\x20the\x20nsfw','n\x20Nominal\x20','MD\x20\x1b[1;37m','AAAAAAAANR','ng\x20jujur\x20l','a4639.jpg','rsion/9.0.','l\x20pada\x20kal','h-jauh\x20kan','an-temanmu','tau\x20putri\x20','[PlayMp3]','QRiAo','DTVVx','--*\x0a\x0a','\x20jaminan\x20k','videoId','g.us','nginan\x20unt','amu\x20ningga','Bwvfg','soundmenu','*📧\x20Size\x20Sd','e\x20media\x20se','igtv','cript\x20Bot\x20','nGxOp','Dengan\x20dem','hanya\x20seka','e\x20sini','video_info','ah\x20merindu','k\x20sebelah\x20','i\x20tertangk','cript=sket','cmm','ang\x20daripa','\x20semakin\x20c','VFkOB','audio/mp4','w6.flaming','\x20dan\x20Masuk','alloc','OpGWJ','rm-urlenco','Title\x20:\x20','fWxft','e|yellow\x20','Youtube\x20Mp','7326@s.wha','text','get','JbdNb','t\x20yang\x20kua','jKNNM','ap\x20kerasla','lmbqD','prepareMes','kYt]*','iEUmP','Lebih\x20baik','cvflw','impostor\x20=','\x20Bot\x20sebag','asa','trap','entries','bat\x20buruk\x20','Jika\x20whats','nsfwmo','it\x20dahulu,','membenci\x20d','lewdkemo','_\x0a\x0aCaranya','LuIqm','n/vnd.open','tryAgain','oeEMP','sewa_kak','rnah\x20jatuh','\x20tahu,\x20sem','fbhd','n/pdf','oXTwU','e-21','n\x20you,\x20mau','Sebutkan\x20k','sHjtn','dang\x20dikir','79352HfKmwX','Qsisb','ak\x20makan\x20d','\x20adalah\x20se','a\x20Masterca','BgOSS','t,\x20bagaima','gEKYx','igstory','Emoji-JoyP','440846hWEJHc','timestamp','\x22input-gro','1.2\x20Safari','body','same-origi','ucinta\x20lun','telah\x20kopi','LHXCZ','pa\x20kita\x20si','Poacs','O\x20\x0a•\x20FATIH','seseorang,','69280.jpg','tickle','ource_url=','P3\x0a🆔\x20ID\x20:\x20','AM\x20DOWNLOA','processing','LtFSm','drop\x20emot\x20','dicari_','HTML,\x20like','ng\x20kaya','b5e33a30ee','TRjNS','chat\x20ke\x20ko','frfMz','oqvsM','kimjong','Hizar','VqymV','pekerjaan\x20','know\x20anyon','\x20lambat.\x20J','FiVBw','XgPvx','\x20suka\x20sama','mu\x20telah\x20m','ttp4','Kamis','n\x20dipilih!','“Uang\x20buka','anan,\x20tapi','\x20gak\x20ngert','BbPzq','legra.ph/f','jfjnS','e-20','\x20\x22\x20di\x20depa','hv\x20crush\x20o','\x20ketika\x20ka','lu\x20sih\x20nam','\x20Chrome/52','rgabung\x20da','\x20sahabat?(','IunGl','qPVQh','instatv','ang\x20berpua','untuk\x20nafs','i\x20%batre\x20k','du,\x20ini\x20be','ytmp3\x20[lin','igdl','emilia','ago','ah\x20pengorb','xnaxV','apa','he\x20form\x20of','e\x20the\x20tele','facebookhd','instagrams','Lujli','\x20khusus\x20un','rgaqi','utu.be/1O2','OWNER','ZdWVY','parse','\x20aku,\x20itu\x20','Bgdpb','eeoneofc','data','gacha\x20ceca','FpsSX','GET','user','7.0)\x20Gecko','0_9_4)\x20App','ang\x20adalah','ilangan\x20se','pfCoY','ntities','groupSetti','aksana','only','success','\x20Anda\x20iala','Sebuah\x20neg','indonesia','itu\x20sama\x20d','r\x20di\x20dalam','Cara\x20palin','e\x20you\x20repl','admin','e\x20the\x20soun','e-16','cGGzU','uran\x20diman','KcMpF','ttern=Warn','all','t\x20media\x20ak','ghiXU','Scale=true','video*\x20_Ju','rsion/9.1.','i.twitter.','DISABLE\x20VE','Penundaan\x20','+0Mjbi7yii','tangan?\x20ka','kiss','siYLu','i\x20celana\x20A','message','UFTjm','dino_kunin','Aku\x20gak\x20pa','\x20impianmu\x20','rikagusria','video','tengah\x20jam','Emoji-Open','e-17','MOrHF','Sederhana\x20','idak\x20minum','\x0a🎃\x20Size\x20:\x20','g,\x20karena\x20','Nmhlr','XlXFq','hal\x20yang\x20b','bx/mFEB8SW','uka\x20sama\x20k','buk\x20belaja','rga','ripada\x20ber','kalau\x20tida','error','sento_isuz','TVheS','logi.','njadi\x20tuan','\x20terlebih\x20','OcaBm','\x20kehancura','mand\x20ya\x20sa','onlyOwner','9\x22]','couple','KBfRB','a\x20Aplikasi','\x20menjadi\x20j','e\x20the\x20upme','an\x20tidak\x20m','u\x20sange','pada\x20banya','dIHAy','cbGtW','api/ejecte','```SUCCESS','n\x20ke\x20manta','Hanya\x20bisa','oexKg','dLCzJ','EwXOn','ge\x20textpro','UhkLl','endiri','instareel','ntah\x20*','gbzPJ','hkan\x20dipil','ma-sama.','asi\x20lebih\x20','“Tidak\x20ada','G\x20GROUP```','2Fpins%2F%','_Untuk\x20dur','rUiNY','enu\x20comman','emoji','dmenu\x20comm','ng\x20akan\x20ka','rows','atkan!*','EqMud','\x20akan\x20hanc','KxeGQ','dar\x20tidak\x20','getDate','PLcrM','ngmenu\x20com','ap\x20basah.”','up\x20saya','xveuk','Ftycv','riri','hkqFb','downloadme','e-13','aya\x20tidak\x20','top4top.io','ta\x20bertepu','mu,\x20dan\x20ma','“Carilah\x20i','rdianto-ch','\x0a•\x20HADS\x0a•\x20','\x20yang\x20cerd','kawan_spon','api','4W5fYrjbea','b9509.jpg','pen','Link\x20Nya\x20M','/15.15063','select\x20the','“Saya\x20tida','ng\x20bikin\x20k','locationMe','\x20dia\x20\x22i\x20lu','97m/gdkX/D','animemenu','FULLY\x20OPEN','QWrZJ','aya\x20Apa\x20Sa','\x20yang\x20kita','dengan\x20bij','BnHIR','ungi\x20tanpa','nenek\x20moya','teriak\x20\x22\x20a','WnVeE','an\x20dari\x20ke','\x20:*\x20sd,\x20hd','ic.mp3','hRHuL','URL','OVwgu','div[class=','parkchanye','utu.be/BjT','a\x2024\x20jam','ngif','ak\x20tawa\x20ak','jaminan\x20ke','yang\x20akan\x20','rjaan\x20sebe','videos','anna','ryQtN','text/html,','g\x20dikirim_','on\x20:\x20','rYAYVeWq-7','utube.com/','ile/ec84cb','Win64;\x20x64','🐣\x20*Title\x20:','ebih\x20keras','h\x20atau\x20kal','untuk\x20sese','seMessage','\x0a\x0a_Please\x20','reEKU','YUYjr','jujuran\x20ya','ogan/','“Saat\x20kamu','ml.documen','da\x20diri\x20se','fileSha256','GezzQ','an,\x20dan\x20im','ooxymenu\x20c','\x09\x09\x09\x09\x0a💦\x20Tit','-PLAY\x20MP4*','mu\x20beleum\x20','Kalau\x20kamu','sudah\x20tert','SrXCs','sername\x0aim','37.36\x20(KHT','alah\x20kesal','e\x20the\x20quot','\x0a🚀\x20Upload\x20','📍\x20Waktu\x20:\x20','LSKTe','headers','ivzXf','💋\x20*Fullnam','tweets','User-Agent','jak\x20sini.”','.json?twee','ge\x20asupan\x20','kan\x20Nomina','\x20Chrome/90','enis\x20yang\x20','Usage:\x20','ile/e2c139','%22pins%22','ain\x20tertaw','enjadi\x20ora','rGJIZ','tt1','input','qpKgj','&raw=7','kimjunmyeo','car\x20teman\x20','P-mu.\x0a2.\x20P','VMjbG','|cyan','eFlFO','\x20Scan\x20Barc','i\x20lima\x20itu','Choose\x20vid','\x20ada\x20darah','tugas\x20kepa','kbps)','pwankg','ku\x20tidak\x20b','LBICX','\x20lalu.\x20Tap','ument.pres','exec','ton\x20silahk','lucu','ge\x20source\x20','IPdqO','elanga…\x20Ga','aLsOr','oDnkg','[\x1b[1;32m\x20C','SjXbP','remium\x20saj','*🎧\x20P\x20L\x20A\x20Y','avatar','kita\x20tahu.','RDUwD','\x20ninggalin','an.herokua','\x20dan\x20masa\x20','Firefox/47','nQfCJ','ceTGH','mencintai.','ke\x20lawan\x20j','buttonText','\x20bukan\x20aku','n,\x20kalau\x20k','pp.com/api','kaori_miya','tai','includes','Bila\x20tekad','username','cts','api\x20orang\x20','WO\x20\x22\x20selam','image/','nu\x20command','panties','*Link*\x20:\x20','doge','ena\x20aku\x20sa','urce/BaseS','tiktokmusi','\x20yang\x20bera','offline','n/json,\x20te','ize','sebentar\x20m','eroyuri','sheet','kepada\x20mer','aan.','kirim\x20voic','length','\x20berusaha.','galanya\x20ba','oIrUP','nstagram.c','E7FBAF','ita\x20adalah','EBOOK\x20DOWN','unya\x20dan\x20m','rhjdv','*📛\x20Title\x20:','rat.\x20Kau\x20t','MtSQD','n\x20membasah','ta…tapi\x20sa','wait','MP4','n\x20Bot!','sageFromCo','.mp4','68abaa14f7','ItLuk','alquran_au','instareels','ofc','deliveries','tua\x20saya,\x20','rsebut','pi/v2/img/','?&imageout','shana','\x20diri\x20send','lah\x20stimul','jhope','https://ha','update','.mp3','salahan','manusia_li','\x20butuh\x20beb','tentacles','iar\x20Tuhan\x20','ak\x20akan\x20ku','0_9_5)\x20App','cYtEY','g..??”','viona','\x20nih\x20video','WM.mp4','\x20takut\x20kam','e-22','BpbGW','dibuat','de\x20diatas\x20','h\x20list\x20men','sec-fetch-','anya\x20pende','en68','noteks','🦁\x20Ext\x20:\x20MP','bydcZ','ITJFM','depan\x20tak\x20','ytshorts','\x20hanya\x20dua','a\x20dengan\x20m','XMLHttpReq','\x20melempar\x20','5c293c4fd5','a\x20inginkan','a4e88.jpg','HvEbs','video/mp4','ezxoD','Manusia\x20ak','tMZML','elihat\x20ke\x20','ten\x20untuk\x20','jahy','Next\x20\x20for\x20','⛄\x20*Link*\x20:','headerType','jungkook','OkMsb','apat\x20kentu','/ttpcustom','0f7eb.jpg','.0.3865.12','&apikey=ha','\x20kejujuran','h=800&scal','ngan\x20cara\x20','match','stanzaId','\x20vn\x20kesini','00587','essage','sourceUrl','thumbnailU','qJlmQ','kebohongan','mangat\x20ada','https://ww','hWkZl','iapa\x20yang\x20','group\x20clos','ihat\x20siapa','&data=%7B%','ticker','akan\x20potny','dfMwO','a.”','kzRvR','Cinta\x20adal','infobot','las,\x20yang\x20','play\x20query','manga','status','adNEa','instavid','▶️\x20*Ext*\x20:\x20','pencapaian','HYxJY','qIXji','sehat.\x20Gel','Jika\x20hujan','mu\x20dengan\x20','eyakinkan\x20','enu','6199803015','3595319159','PaECl','ya\x20kak🥰','vgBbw','akame','xk1.jpg','\x0a5.\x20Selesa','ukhty','mount1000','m\x20ke\x20salah','n\x20segalany','tap\x20seimba','ya,\x20maka\x20g','empurna,\x20j','t.com/','fox_girl','3n1n1Kbt6a','qgpRi','h\x20Watermar','videoMessa','*🌍\x20Type\x20:*','ertmenu\x20co','rapa\x20lama?','\x20berharap\x20','buttonsMes','Anda\x20menja','makin\x20bany','sedikit\x20da','kobot.xyz/','njimm\x20gabu','C%22contex','aja\x20dibawa','3z1.jpg','GKoSG','a\x20sama\x20den','kanna','tik,.\x20Rusa','kimnanjoon','api\x20memban','n\x20aku\x20yang','AKINAH\x20(Se','yuzuki','」----*\x0a\x0a💦\x20','ari/537.36','☠️\x20Owner\x20','a\x20sama\x20sia','nya\x20melind','uest','Jadi\x20jika\x20','saya\x20menja','gzuCQ','_Tunggu\x20be','🔖\x20List\x20Sew','\x20https://i','dfsvu','t,\x20seberat','futanari','ar,\x20hingga','sewabot','nangkan\x20😇,','dari\x20batas','🤥\x20setiap\x20n','aja\x20membia','Emoji-emoj','XlbiQ','XNXnZ','tInIp','ejadian\x20ya','ikirkan\x20ka','ekarang\x20da','P4\x0a🆔\x20ID\x20:\x20','h%22%3Afal','\x20ini\x20adala','ecan','xt/javascr','iam\x20cepiri','igvideo','ZGpXw','document','u\x20bot\x20sila','santuy','nicholas','LIST\x20MENU\x20','dari\x20yang\x20','MuOJx','title','rkreasi\x20da','Reply\x20pesa','hal\x20memban','asukan\x20bel','Ibpvg','kan\x20berpas','9YP2ZQn4','tpE=','\x20apa\x20lagi\x20','selectedBu','tu\x20dia\x20unt','.net/d/f/A','asil\x20Didap','jiso','aCZNp','KyTIP','mbnail','itu\x20tai,\x20j','kin\x20banyak','ur\x20hanya\x20d','Botwea\x20©2k','Command','sakan\x20saki','ntaranmu\x20t','ka\x20kamu\x20ma','605.1.15\x20(','mediaKey','dia\x20bales,','dahulu\x20den','jNEPI','g,\x20maka\x20bi','urce%22%3A','xTH6oLd8','dia\x20kekuas','agi\x20yang\x20j','elas\x20lalu\x20','ile/851e79','orgy','it\x20is\x20pres','anya\x20dua','ented\x20in\x20t','ion/xml;q=','record\x20voi','Instagram\x20','trump','\x20OVO\x20via\x20H','nerJid','oFGmd','maung,\x20ker','Hal\x20terbai','101\x20Firefo','Februari','DVUKC','ce\x20baca\x20su','List\x20messa','\x20dalam\x20sua','LelEi','.be/w4iQ4r','NWzMV','contentTex','ggakan\x20apa','🐺\x20Link\x20:\x20','KZqeL7byF+','\x20dalam\x20ben','WUElR','ahan,\x20yasu','LqKFr','Zopno','rus\x20tetap\x20','ali\x20dan\x20ca','📊\x20*Quality','buttons','?apikey=of','“Kegagalan','amu\x20sakit\x20','thighs','ar\x20seharus','a\x20yang\x20And','beberapa\x20k','kutin','dagang\x20kak','epat\x20ia\x20pe','ang\x20kali.\x20','getMonth','daripada\x20h','mtTeB','kotori_min','Ingin\x20Namb','token','Masalah\x20ak','Rabu','ikin\x20senen','Jika\x20kamu\x20','m\x20terdafta','female','you','*🔗\x20Url\x20:*\x20','i\x20oleh\x20kei','i.simsimi.','\x20」----*\x0a\x0a🎀','k\x20yang\x20bis','ytmp3aja','youtubesho','6288279575','lnya\x20cinta','QkGMX','Saya\x20tidak','popoci','tahun-tahu','mu\x20belum\x20s','ODby7_MoRY','mimetype','eBDWk','\x20:\x0a1.\x20Buka','ung-renung','amongus\x20\x20c','pink|purpl','0\x20Safari/5','ar\x20sambil\x20','facebook','kenapa?','OFC','kursi,\x20sem','bocil','Emoji-Micr','ile/9fc9b3','e-3','nsfw\x20menu','\x20masa\x20depa','\x0a▶️\x20Ext\x20:\x20M','🏆\x20Contribu','fbdl','Emoji-What','\x20satu\x20tema','xVzJv','sSRdP','_\x0a\x0a\x0aCarany','mio_akiyam','a\x22\x20selama\x20','Hai\x20@','https://do','kalo\x20tidur','g\x20terbaik\x20','yukino','\x0a\x0a_For\x20the','ciPZs','0\x20(X11;\x20Li','6a8f7fc99d','pergi,\x20tet','ba\x20ulangi\x20','No\x20media','huangzitao','cLuQq','rpJse','g\x20Anda\x20cin','smug','t\x20siapa\x20se','verifikasi','🐭\x20Filesize','loadmenu\x20c','t.com/reso','▶️\x20*Filesiz','fline','dmenu','\x20sekarang,','ytmp4','BJzYX','ge\x20storage','ih\x20kuat\x20da','4i1.jpg','snap/post\x20','85.125\x20Saf','?\x20rasanya\x20','di\x20tahun\x20i','442438afe8','tahu,\x20Sema','YkglJ','1;37m>','\x20nona\x20cant','100000','KHTML,\x20lik','tVLlK','ng.','om/','takut\x20mera','source','a\x20istri\x20sa','PYHAN','ge\x20funmenu','na\x20kalau\x20s','nda.”\x20–\x20P.','gEdoE','\x0a\x0a_choose\x20','☃️\x20*Filesiz','=100&fillT','\x20ingin\x20suk','「\x20*INSTAGR','SGTVb','Mei','alasannya\x20','tuk\x20link_','\x20orang\x20lai','\x20Chrome/85','_\x0a•>\x20Nomor','terburuk\x20l','.0.2743.11','XBlLJ','geCount','ing!&text=','\x20(Siap\x20Ant','a\x20:\x0a1.\x20Buk','productIma','AQniL','Ada\x20tips\x20a','enger-','ngan\x20erat\x20','xQVlq','e-14','forwarding','h\x20banyak\x20u','FKcQi','Downloader','\x20Dan\x20sekar','zhDqR','alang,\x20ker','di\x20sini','HtOaQ','oLmBK','garuh\x20kepa','x\x20x86_64;\x20','uYVmz','wWauE','Wwwxq','pnaLM','“Berakit-r','Kesabaran\x20','\x20:*\x20480kbp','asal\x20janga','ge\x20animeme','xsLIR','Kalau\x20bole','Selasa','tidurlah\x20s','vZHRv','FZNjAqSMng','kucing','177264qNKVXA','\x0a\x0a\x0a•>\x20Nama','.0.3497.92','teriak\x20gaj','akukan\x20apa','MU\x20CANTIK\x20','Usernameny','YMsYMtnlnb','tTClT','pala.','erikan\x20yan','\x20:\x20_@','adalah\x20yan','di\x20bawah.','TheaK','⋮☰\x20MENU','hHilp','gar\x20hidup\x20','Juli','et-fu/prox','PR-ku\x20adal','adalah\x20kub','ana?\x20','\x20bohong,\x20i','SxfSk','salahan,\x20c','wlnKd','e&apikey=h','ngut','Pilih\x20sala','contextInf','images','lempar.”','tipan\x20itu','fox/45.0','Button\x20mes','u\x20mungkin\x20','\x20to','pussy_jpg','n,\x20aku\x20tid','🏅\x20Source\x20S','ORebQ','ttonId','LZwMj','\x20miskin,\x20t','Wpydw','mIgAj','Tuhan\x20memb','512@s.what','Mozilla/5.','productId','GMdMh','\x20tidak\x20tul','cfDLh','an\x20datang\x20','ytmp3doc\x20','🌀\x20*Link\x20:*','register\x20o','cepat\x20atau','Semakin\x20ra','igjql','gwyrK','image','ge\x20group\x20c','mand_','ernyata\x20pe','\x20media\x20you','ephemeralM','jimin','fbsd\x20','k\x20solusiny','yZSqw','\x20:\x20_','hyGgR','sebentar\x20a','/p_2032cf1','is\x20if\x20you\x20','💦\x20Title\x20:\x20','\x20:*\x20','Url','Saat\x20yang\x20','dul\x20video\x20','e-5','usic.mp3','RESPONSE','HP-mu.\x0a2.\x20','boleh\x20beda',',\x20waktu\x20me','ytmp4aja','videohd\x20','zZvMy','miskin\x20tid','aWCVc','ekarang\x20ju','EXcjX','an\x20dikirim','o\x20?','orbanan\x20mu','dang\x20berpu','wEmck','e\x20bawah\x20da','adi\x20pagi\x20a','🔖\x20Sewa\x20','ilih\x20Pay\x20/','sasuke','isa\x20melaku','extension','catch','https://ne','lewdk','*🔗\x20Link\x20:*','96.87\x20Safa','ih\x20lama.','aOsuF','engan\x20hart','FBkaL','“Diam\x20itu\x20','ytmp3doc','ada\x20akhirn','mbEUS','Kebencian\x20','ku\x20anak\x20pu','nita\x20yang\x20','map','mofEM','di\x20ringan','*Cewe*','sApp-','tiktok.com','classic','externalAd','..._','size','HDnko','Scan\x20Barco','i\x20audio\x20at','it,\x20lalu\x20s','e\x20Gecko)\x20V','\x20disaat\x20ki','cintai,\x20be','.php?url=','an\x20turun\x20k','fbhd\x20','imageMessa','endidik\x20se','ang\x20tertun','n\x20idealmu\x20','NkBAVg8GMe','pian\x20hadir','\x20kesulitan','6288743504','FwUpI','alcakenya','e\x20the\x20phot','SJguh','tvFNd','ge\x20downloa','XiNyQ','SINGLE_SEL','push','pmenu\x20comm','🐣\x20All\x20menu','BANGET\x20NGG','i\x20pertama.','szpEX','igreels','listMessag','han\x20orang?','caption,\x20a','donasi','sah\x20payah\x20','AK\x20BOHONG\x22','🌀\x20*Size*\x20:','603.3.8\x20(K','kos.life/a','Hidup\x20itu\x20','mu\x20adalah\x20','\x20yang\x20udah','pernah\x20gak','JQRJn','ile/d44d0c','\x20Chrome/65','\x20Gecko/201','isForwarde','ero','thumbnail','.0.4183.12','Meskipun,\x20','ntukan\x20tem','baka','orang\x20yang','ah\x20mengert','korea','Salah\x20satu','kerasukan\x20','85459.jpg','getHours','smZKQ','ing\x20berpen','Penderitaa','TUBE\x20PLAY\x20','erorLink','KevUU','“Wanita\x20ca','mpurna\x20aka','bilang\x20\x22i\x20','chika','\x20diam\x20dan\x20','BLSdE','🌀\x20*Link*\x20:','Sebenarnya','jelek.”','Emoji-Face','ngungkanla','ting?\x20Taku','🐣\x20*Title*\x20','yang\x20memba','bA1B2pJ18r','getSeconds','88e11.jpg','amu\x20akan\x20l','AM\x20STORY*\x20','angemymind','\x20ke\x20kamu.','\x20by\x20@','0\x20(Windows','pa\x20agama\x20a','e-19','gLaUX','lication/s','EGGJf','OALsF','https://yo','tqto','sFGLA','akukan\x20bis','Reply','nya\x20klo\x20ma','cJUYS','gyfFc','q=0.9','membuat\x20se','Sahabat\x20ya','ile/cb6aaa','sponsbob','lzLpC','uery','cefron.nl/','Next\x20➡️','tJlCN','ttmp3','code','asupan','eLkDK','log','ZmtMd','the\x20messag','🦁\x20*Ext*\x20:\x20','n\x20bilang\x20\x22','\x20a\x20link_','Emoji-Appl','o-k40Q-gO_','ndai\x20cembu','sebutkan\x20t','k|blue|bro','tuk\x20user\x20p','baekhyung','OKJcR','Aku\x20bisa\x20s','(bgi\x20yg\x20mu','NLKpc','gan\x20cara\x20k','~\x20@','\x20|\x20Request','quoted','.0.3497.10','at\x20anda\x20te','zzvBd','0\x20(X11;\x20Ub','\x20mereka\x20se','2d0c2195ab','“Setiap\x20ma','profilePic','an\x20dalam\x20h','xtMessage','aha\x20adalah','kirim\x20pake','fox/68.0','post','MvLxJ','nuju\x20kegag','r\x20oleh\x20ser','22%3A%7B%2','*✉️\x20Size\x20Mp','jid','kimjondae','eninggal\x20s','ZCVve','inori','udio\x20senda','e-10','e\x20the\x20imag','\x20bilang\x20ke','\x20Safari/53','slap','\x20duration\x20','pleWebKit/','indukan\x20ka',',\x20tapi\x20seb','e\x20:*\x20','ikian,\x20kec','a\x20sekampun','Kerang\x20Aja','\x20ss\x20drop\x20k','eh\x20itu\x20kar','\x20Tetapi\x20ja','\x20meriang-m','DomRs','audio','\x20kalo\x20udah','vWhdD','del','towPh','Video\x20(360','37.36','ile/6de20d','e\x20the\x20gach','5.\x20Selesai','rSJnS','utu.be/zq2','Pkjtg','https://h.','app','🆔\x20*ID\x20:*\x20','dalah\x20pinc','235XXYHGu','x/57.0','&scaleWidt','ekstI','remoteJid','ownerku','net/v2/?lc','\x20untuk\x20dir','\x0a\x09\x09\x09\x09\x0a_Upl','XbEdp','feet','01.7.7','gbPlo','gojosatoru','\x0a\x0a•\x20ZEEONE','nnagen&tex','an\x20lagu/qu','https://te','NHvJi','xVgON','tpfPl','ak\x20yang\x20ki','suga','r\x20?”','USD','esponse','tsar','3AGWWjCpTn','goprem','ile/6941a5','authorizat','0_10;\x20rv:3','Sekarang\x20a','e-18','tevXn','u\x20hanya\x20un','0.8,es;q=0','lah\x20seseor','ended','wnload\x20','VINZ\x0a•\x20MIS','di\x20wa/tele','eyxyz','n\x20kamu\x20dan','Dsune','Yufya','ytmp3','g\x20yang\x20bis','Agustus','ta\x20lupa,\x20s','ul,\x20kurang','UpIei','priceAmoun','ILgAAAAAAn',',\x20dan..\x20pa','sudah\x20repo','masih\x20di\x20i','ana\x20dan\x20bi','dikuburkan','an\x20Masukka','BjZx9tvY','igfoto','a\x20yang\x20ing','tuk\x20Anda,\x20','e-7','LIST\x20EMOJI','\x0a🆔\x20ID\x20:\x20','of\x20more\x20th','femdom','653158378f','Minggu','jadi\x20orang','UiTYF','gkan,\x20apal','h\x20satu','01.2.7','nisa','e-6','method','views','erapa\x20meni','eHeight=50','0.11;\x20rv:4','fromMe','bhpZr','getDay','ya\x20cukup\x20s','jisoo','le-','%2Fsearch%','\x20Bayar\x0a3.\x20','0@s.whatsa','at\x20(serah\x20','\x20Bisaku\x20cu','\x20janganlah','Donasi\x20💰','rveXj','“Pakaian\x20i','oading\x20fil','com','XgNDV','kXrt+8eqBg','Eror','BVNnG','h\x20datang,\x20','ndiri.','ses\x20maka\x20l','holoyero','\x20:\x20','at\x20orang\x20l','uzIUe','e-12','shiina','delete','rimu\x20jaket','CxYdg','buttonId','tidak\x20ada\x20','ulit,\x20tapi','*💢\x20Total\x20:','sa\x20ringan\x20','nya\x20takut\x20','fullName','ama\x20kamu\x20j','hal\x20yang\x20p','c\x20siapa\x20ya','List\x20Messa','dakan,\x20tet','e\x20who\x20cont','yana','Kirim\x20peri','tan\x20terbes','gar\x20jadi\x20S','d89eeaefc6','documentMe','🐣*Title\x20:*','LowhI','.0.4324.10','💌\x20*Followe','Kirim\x20pesa','red','k\x20ngiler\x20d','Tak\x20semua\x20','mu\x20jadikan','ile/4c2e47','sCcLt','IJyEQ','erok','ardianto','hPHCs','ang\x20aku\x20se','\x20Semoga\x20ha','?text=','mVPhV','oxpcd','Kita\x20tak\x20b','en?type=ch','\x20kb\x0a🍃\x20View','2isPrefetc','group\x20open','itu\x20tidak\x20','emakin\x20sed','ng\x20dan\x20mer','eUtmi','uH5E6I8xnZ','eron','siapa\x20oran','\x0a🌀\x20Url\x20:\x20','gwoXm','rdkrj','quotesmenu','auvJQ','idak\x20sangg','bdsm','\x20dan\x20meren','\x20mencapai\x20','funmenu','.3\x20Safari/','OVO.\x0a4.\x20da','up\x20col-lg-','syania','ri\x20Matemat','ut\x20itu\x20pen','zIGHG','maka\x20akan\x20','pake\x20foto\x20','a\x20Anda\x20lak','senang.','🐣\x20Title\x20:\x20','photo','ya.\x20Yang\x20s','blowjob','wA0mo','ukan\x20untuk','Zv7ttfk8LF','at\x20dan\x20nik','\x20pekerjaan','au.\x20Salam\x20','NTvRW','e/apng,*/*','batu\x20oleh\x20','upmenu','Tiktok\x20Mus','l,applicat','eri\x20kita\x20j','applicatio','2\x20Safari/6','\x20ini.\x20Peke','mu\x20yang\x20pe','each','listRespon','fbaudio','akan\x20dan\x20t','MvsOr','ext=','ppcouple','gacha\x20coga','Emoji-LG-','mama_gina','ohsehun','gt\x20kamu\x20ch','engan\x20memb','nah\x20mencob','ge\x20convert','isa\x20mencon','luhan',',\x20aku\x20tak\x20','ge\x20tagmenu','tahu\x20kunci','50109.jpg','up\x20untuk\x20m','ai\x20admin\x20t','lor\x20=\x20blac','oba\x20bebera','telegram\x20s','chats','https://j.','ma,\x20bersik','bijaksanaa','e\x20the\x20allm','e\x20code\x20thi','\x20Anda.\x20Dir','g\x20kreatif\x20','sdQFR','.php','ku\x20masih\x20s','e-9','\x20fitur\x20ini','ile/277163','youtube.co','emas,\x20emas','\x20hidupku.\x20','igphoto','esmenu\x20com','\x20tidak\x20per','ya.\x20Andai\x20','sh/pacar\x20s',',\x20Setelah\x20','ta\x20tidur.\x20','kimseok','\x20Media','businessOw','88f9e.jpg','untuk\x20meng',';\x20rv:68.0)','sapp.net','SEkWR','mp4','33963noKgNH','ikTVZ','kelihatan\x20','e-4','e-8','Nopember','sic.mp3','ndapatkan\x20','cVmJL','ripada\x20sal','cum','Kit/537.36','\x20gc/luar\x20g','Please\x20Sub','⋮☰\x20BACK','ang\x20kita\x20l','idak\x20berus','cXQaf','readFileSy','rena\x20kelap','6\x20Safari/5','avif,image','jsQxf','a,\x20namun\x20m','lonte','Desember','CHlNW','\x20karena\x20ha','zJAbt','OruPm','\x20akan\x20menj','jar,\x20semak','adalah\x20tem','an.”','in\x20banyak\x20','Januari','ebih\x20besar','Jangan\x20rin','etch_conte','\x20miring.”','l-hal\x20keci','idex-','Big\x20Thanks','ING\x20GROUP`','ung-','promenu\x20co','e\x20note\x20bil','en-US,en;q','https://al','stc\x20comman','k\x20yang\x20kit','ar\x20kamu?','\x20Anda,\x20tet','hak\x20kamu,\x20','i\x20akan\x20ada','tunggu\x20fil','tuk\x20orang-','https://ti','resource_r','ke\x20Beha)\x20a','mu\x20jatuh\x20k','\x20tetangga,','filename','a\x201\x20hari','gkin\x20jodoh','medias','RngPa','mmand_','katadilan','CzRDH','April','ponseMessa','8a682c0e76','relayWAMes','ndekati\x20ti','AuLjm','drop\x20kutip','zgTkD','t\x20itu\x20mene','us\x20berhasi','🙍‍♂️\x20Owner','Oktober','tau\x20bokap?','\x20ku\x20ulang\x20','kan\x20apapun','sage\x20menu','Alquran\x20Au','instavideo','\x20bisa\x20mera','AvGVz','buah\x20seped','TUBE\x20VIDEO','naruto','orang.\x20Say','baik\x20dan\x20b','mbawa\x20aku\x20','satu\x20saja\x20','ERviP','256','\x20nomor_sur','and_','603.3.8','HxUal','\x20\x0a•\x20FERDYZ','ebuah\x20impi','Sewa\x20☕','“Sayang…\x20t','\x20akan\x20liha','e\x20the\x20conv','tu\x20hak\x20kam','rv:88.0)\x20G','tungkan\x20da','a…Masih\x20ad','jomblo','PGujS','ytmp4doc','*📽️\x20YOUTUBE','active','ih!\x20Don\x27t\x20','salah\x20past','Mac\x20OS\x20X\x201','Hi\x20@','lah\x20menjad','u\x20adalah\x20s','a,\x20agar\x20te','ecko)\x20Chro','rku\x20gak?\x22\x20','ge\x20telegra','minum\x20kopi','load','value','zettai','displayTex','ributed\x20to','ge\x20gacha\x20c','find','HJNcZ','s\x20bot_','tCLiB','a\x20peluang\x20','All\x20menu\x20b','\x20untuk\x20men','ika\x20masala','Jangan\x20per','sama\x20siapa','yang\x20SIAGA','e-1','y_form.cgi','ge\x20ownerme','berhasilan','📖\x20List\x20Men','“Manusia\x20i','ssage','pIwIJ','Pilih\x20medi','.herokuapp','seperti\x20se','product','Terjadi\x20ke','untu;\x20Linu','agemenu\x20co','Url?','QIFfk','.0.3325.18','pai\x20tua.”','“Semakin\x20b','99c5f.jpg','aura','fdwAT','Dimanapun\x20','\x20Tapi\x20usah','ng\x20dihabis','menemukann',';q=0.8,app','gin\x20menjad','々\x20Size\x20:\x20','w.pinteres','\x0a⛄\x20Ext\x20:\x20M','se%2C%22qu','jxAvQ','rah.\x20Saya\x20','danya.\x20Bal','an\x20tonton\x20','0_11_6)\x20Ap','n.\x20Tapi,\x20b','reka\x20menja','ile/148e7a','Facebook','aminan\x20keh','reads','ar\x20bunga\x20k','footerText','n/xhtml+xm','dohkyungso','\x20pernah\x20ce','c/zeeoneof','🐨\x20Owner','/605.1.15','rowId','videohd','globalObje','yang\x20dibut','0_10_5)\x20Ap','9199191919','it\x20per\x20har','pdFqB','g\x20yang\x20pal','scribe\x20htt','da\x20uang\x20ya','katabijak_','DwSSA','_choose\x20th','g,\x20maka\x20se','kcbQf','h\x20apa\x20yang','m/c/zeeone','\x20percaya\x20d','jmbkE','g\x20baik\x20unt','h\x20mencoba\x20','then','pa\x20aja\x20dit','formattedS','ter\x20URL','977f4.jpg','GwZRq','Emror','&color=cya','gi\x20pemanda','JbOwZ','video\x20ini\x20','FUL\x20CLOSIN','yang\x20membu','Regard\x20@','r\x20sejati\x20p','rgi.','\x20memilih\x20u','\x20takut\x20men','feetg','\x20&\x20mp3\x0a','OvtGZ','04eea.jpg','10914qgZEbL','ument.word','xhbyb','\x20orang\x20yan','Upgrade\x20Pr','know\x20sourc','GOPAY\x20via\x20','waitForAck','a!\x20Upgrade','DANA.\x0a4.\x20d','CEzLc','poke','NOTE\x20！','waifu','awakan.”','\x0a🐣\x20Upload\x20','bukanlah\x20j','a\x20di\x20negar','\x20mantan\x20pa','n\x20Masukkan','Video\x20(720','qbiUI','gfFKI','i\x20size\x20thu','mediaUrl','t\x20hati\x20saa','\x20」----*\x0a\x09\x09','glasses','gdCwr','postor\x20=\x20t','2855736efpOYY','hagia\x20dan\x20','ruop','\x20\x0a🎃\x20Size\x20:','e58a0.jpg','fbZYX','adi\x20kusir\x20','z4puTs%3D1','enguasai\x20p','NwIzUejRCO','fbaudio\x20','ji\x20karakte','\x20normal\x20di','\x20Title\x20:\x20','convertmen','ya\x20milik\x20t','\x0a\x0a_Tunggu\x20','SawxA','R*\x0a\x09\x09\x09\x09\x0a','ASEND','semoji','GCcws','me|orange|','sage','ile/4a725e','Dik\x20jangan','u\x20kecewa.','api/imageg','ra\x20gara\x20si','ggota\x20grup','00101\x20Fire','999999999','tagmenu','ifVVS','Perbedaan\x20','etangga.”','n\x20ss\x20ke\x20pe','dalah\x20peng','7\x20Safari/5','menu\x20comma','ketik\x20','ku\x20gak\x20bis','\x20Nominal\x20p','Kita\x20adala','ic\x20Downloa','37.75.14\x20(','af9c61265d','https://ap','.presentat','ZpktX','uk\x20kehidup','sendMessag','ji\x20silahka','DANA\x20via\x20H','source\x20cod','an\x20kebodoh','ok\x20buat\x20ku','24OuiZVq','/p_2032mwb','iaAmS','\x20GOPAY.\x0a4.','\x20Jangan\x20pe','ngan\x20aku\x20y','ttp2','erjebak\x20ol','ttp3','sxeCB','ng\x20seharus','ri\x20akar\x20te','BdFue','*----「\x20YOU','ah\x20satu\x20an','slim)\x20pern','uah\x20negara','ma\x20mencint','CEOVE','ixels-','instafoto','u\x20apa,\x20tap','zCBYQ','oeSde','tEKkm','Linknya?','terakhir\x20b','NnjdZ','yang\x20kita\x20','\x20saja\x20tema','ommand_','\x20Valery.','apa?','YHvOs','adsheetml.','gi\x20setiap\x20','sourcecode','TPTzE','ntak\x20wa\x20ur','fZXqq','FcjGz','ganti\x20nama','/p_20325yp','ntuk\x20bahag','sai\x0a\x0a_Rega','tEsDP','n\x20adalah\x20p','no\x20wm\x20ting','hn2Sqy4nHf','3\x20:*\x20','ument.spre','fSoJW','oeYQV','ZLfLm','a,\x20jika\x20ka','97d8a.jpg','ngat\x20benci','api-create','ebih\x20baik\x20','https://va','\x20menghalan','instagram.','teguh,\x20Tuh','\x20\x20M\x20P\x203*\x0a\x0a','tiktokaudi','a\x20lebih\x20ke','alquran-ap','\x203\x20hari','KunSF','MAfGQ','wn|cyan|da','iri\x20saya\x20s','mengerjaka','s\x20💞','full_text','im\x20mungkin','g\x20keras\x20ke','da…kebohon','erokemo','an\x20akan\x20be','fileLength','is\x20yang\x20ad','Mohon\x20maaf','link','WvUvx','previewTyp','25.181\x20Saf','222677CetzPy','https://mm','url','pasrahkan\x20','hulu```','cblcu','t_mode=ext','menghadapi','orig','berlatih?”','Jika\x20Anda\x20','kan\x20istrin','atu\x20saja.','a\x20atau\x20tah','ari\x20Tuhan','\x20:*\x201080kb','vJkzY','japan','age','igned-exch','groupmenu','itu\x20suka\x20s','terasa\x20rin','erofeet','c.vercel.a','lin\x20aku,\x20a','anmu.”','bagian\x20ter','a\x20sama\x20ora','nux\x20x86_64','ang\x20lain.','xt_on_reso','an\x20putra\x20a','kaki\x20lima\x20','Terbuka\x20un','kerangmenu','“Dalam\x20pan','.com/api/c','rsion/10.1','rce/get/?s','frNuL','kemonomimi','utu.be/POj','.\x20Namun,\x20j','ile/435878','TUBE\x20AUDIO','intar.”','https://g.','tek\x20yang\x20p','sUVes','mediaType','inya,\x20menj','ode\x20diatas','limit','geayubi','me/65.0.33','684ea07ea1','🏅\x20Source\x20s','male','(main\x20bare','pp.net','type','e-15','JWrgC','CVDkw','tong','elajaran.','ZlRlb','primary','jelek,\x20jan','t\x20dipastik','nkUcq','keta','hololewd','lMmjF','extended_e','\x20jadi\x20\x22\x20BO','href','salahan\x20co','getYear','dzWwbApjky','upport\x20but','hYPJe','dak\x20untuk\x20','xNSfi','e|red|whit','lose','🍁\x20*Ext*\x20:\x20','Siapa\x20yang','apa\x20ketaku','./image/','QvtMx','aslah\x20deng','ada\x20selalu','ot\x20contain','ntent','601.2.7\x20(K','ownermenu','ka\x20aku\x20sak','g\x20sok\x20tau,','aminan\x20unt','key','ngan\x20yang\x20','gun\x20dari\x20t','kebiasaan\x20','a\x20hanya\x20in','ion','\x20tahu\x20adal','Check\x20Limi','gan\x20adalah','Anda\x20tidak','rnah\x20kamu\x20','bagimu.','\x20|\x20','ytmp4\x20[lin','sih\x20jomblo','ah\x20nomor_a','g\x20melelahk',':\x20https://','6285716360','\x20*DELIVERE','apalagi\x20wa','gan\x20mendid','filter','\x20jadi\x20paca','u\x20bukan\x20ti','pembayaran','engan\x20ada\x20','anyak\x20bela','menikah\x20me','ng\x20cantik\x20','EINDI','membuat\x20ki','\x20yang\x20kamu','asuna_yuki','begitulah\x20','textpromen','3Fq%3D','✨\x20*Followi','22options%','ang\x20yang\x20b','join','japhv','ria,\x20beri\x20','Jum\x20at','ak\x20takut\x20m','mat\x20untuk\x20','X/A=','mu,\x20siangn','kPiI3/Xxar','\x20Chrome/92','ku\x20saja.','9a236a4','hanlah\x20ter','.7,ms;q=0.','i.\x20Makanya','IGoWy','Moji-','l\x20seseoran','chat','facebooksd','PcBVd','engkau\x20ber','dio','cky\x20to\x20hv\x20','ttp1','ori','RwFFo','entationml','OCOZg','CATALOG','4\x20Safari/5','ge\x20Big\x20Tha','zTOSD','\x20terus\x20saj','rd\x20dan\x20Vis','lizard','ya\x20ngiler\x20','ZeQdh','vUeUX','put=true&s','%7D%7D&_=1','bkLyX','pinterest2','mentionedJ','di\x20ringan,','\x1b[1;31m~\x1b[','nakiri_ali','ote,\x20terus','n&apikey=h','menu','i\x20yang\x20ter','pernah\x20suk','ekarang\x20de','\x20akar\x20untu','ile/924310','adi\x20diam-d','pagar\x20peli','rkanmu\x20mel','r\x20yang\x20coc','benedict','ejHTF','Sub\x20Menu\x20k','line/conve','katailham','ZEEONE\x20OFC','accept','x/88.0','kembali,\x20a','🐭\x20*Filesiz','Bplor','dalah...\x20T','=ind&cf=fa','gimana\x20bro','ara\x20tidak\x20','intaimu\x20ad','✓\x20OWNER','sbob','\x20luas\x20dari','stickerMes','at\x20ini\x20mun','cript\x20bot','dZVvS','fb7e261a68','rmenu\x20comm','\x20valid\x20ata','kr_robot','ML,\x20like\x20G','results','g,\x20kuning\x20','ile/db6f0f','a\x20cogan\x20co','u\x20seseoran','\x20Karena\x20ya','vn\x20trus\x20ki','bTnLi','HrGsH','mikosiba','ccMSE','mCfdr','YzLMg','.0.3945.88','an\x20terkuat','&color=red','\x20」----*','n\x20rumah\x20mu','Gw_16l7c','followers','EL\x0a•\x20SATRI','Aku\x20tidak\x20','iri.','wal\x20dari\x20s','_Silahkan\x20','\x20ke\x20cowo','ttdownload','app\x20mod\x20ka','\x20negara\x20te','t.”','tpwXOQusBR','pageCount','k\x20bicara\x20d','adalah\x20ban','ntik\x20bukan','\x20selama\x20ia','Bahagialah','ami','vietnam','hubunganny','/p_2032z7a','\x20\x0a🐣\x20Durati','LxSxH','winry','/20100101\x20','uah\x20biola;','video\x20','EZpuy','UivTs','nah\x20buatmu','\x20cinta\x20sam','cuma\x20menci','enyapanya,','jLvNl','🐺\x20*Link*\x20:','a\x20bagi\x20wan','.com/api','ku\x20mungkin','MP3','YHjPF','-beratnya\x20','gkFed','anal','ahegao','Firefox/33','t1000','hLTvJu4FA3','nsfw_neko_','pp/surah/','📍\x20Tanggal\x20','tsapp.net','ersion/11.','u.\x20Asal\x20ja','\x20seseorang','productMes','ery%22%3A%','e\x20the\x20funm','utu.be/ERG','pa\x20saat\x20la','xYpFC','0.9,image/','instaphoto','ru.\x20Malaha','com/2/time','tion','e91d325a70','“Orang\x20bij','ID4Fmo9w','Apakah\x20tak','September','age!','gubah\x20masa','“Berlatih\x20','book-','),\x20tunggu\x20','=0.9,en;q=','ttmp4','ter-','ah\x20ga\x20sola','e\x20the\x20make','angkuk\x20bua','AUDIO','D3MAaYx15D','vJwuz','eriang\x20kem','qaAmb','cope%22%3A','ge\x20image\x20e','ang.','HVqus','acecan\x20com','i,\x20mendidi','hati\x20yang\x20',')\x20AppleWeb','nZddJ','HThjV','hadap\x20sesa','gif','dfqEK','t%22%3A%7B','kanmu.\x20Leb','\x20di\x20dunia\x20','Hasil\x20Penc','“Menahan\x20g','ATSeP+KLh+','Hampir\x20sem','\x20bukan\x20tin','JNTCS','\x20bot','MZNtl','mu!'];_0x4fef=function(){return _0x1bdb3c;};return _0x4fef();}function _0xf809(_0x409ba1,_0x3a5b02){const _0x44bba4=_0x4fef();return _0xf809=function(_0x23cd92,_0x219a52){_0x23cd92=_0x23cd92-(-0x20c5*-0x1+0x2a5*0x4+-0x298b);let _0x101888=_0x44bba4[_0x23cd92];return _0x101888;},_0xf809(_0x409ba1,_0x3a5b02);}if(sub_yt_zeeone_ofc==_0x4963f8(0xa02,0xcb3,0xaea,0x9fd)+_0x4963f8(0x9cf,0x7ae,0x74e,0xae2)){console['log'](color(time,_0x128a37(0xb0c,0xe7e,0x1147,0xf74)),color(_0x128a37(0x509,0x5ca,0x7df,0x89b)+_0x4963f8(0xb4e,0xda5,0xb8b,0x1004)+_0x128a37(0x1b4,0x7cb,0x58f,0x584)));var telesjtje=await getBuffer(_0x128a37(0x6ef,0xa3c,0xcc0,0xabb)+_0x128a37(0x7f3,0x3f9,0xb1b,0x632)+'ile/1599f5'+_0x4963f8(0xb59,0xd81,0xb54,0xdc7)+_0x4963f8(0x8a5,0x97b,0xbec,0xed0));const _0x3aab11={};_0x3aab11[_0x4963f8(0xcb6,0x65a,0xb90,0xb81)+'t']='⋮☰\x20BACK';const _0x3471fc={};_0x3471fc['buttonId']=_0x4963f8(0x32b,0x58c,0x7d0,0xc49),_0x3471fc[_0x4963f8(0x401,0xb57,0x6c4,0xb93)]=_0x3aab11,_0x3471fc['type']=0x1;const _0x32f0f5={};_0x32f0f5[_0x4963f8(0x6c0,0xf9f,0xb90,0xe79)+'t']=_0x4963f8(0x11a1,0x8b5,0xd84,0xbf8);const _0x3e45ea={};_0x3e45ea[_0x128a37(0x737,0xd62,0x69f,0xb1e)]=_0x4963f8(0xd1e,0x1202,0xe32,0xefc),_0x3e45ea[_0x128a37(0x5a3,0x700,0x86c,0x76e)]=_0x32f0f5,_0x3e45ea[_0x4963f8(0x7d7,0xdcd,0xce9,0x81f)]=0x1,sendButLocation(from,telestiker(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x128a37(0x98c,0x1140,0xe12,0xc9f)+ini_mark[_0x128a37(0x8cb,0x561,0x705,0x581)]('@')[-0x3bb+0x10ec+-0xd31],telesjtje,[_0x3471fc,_0x3e45ea],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='image\x20effe'+'ct'){console[_0x128a37(0xcc9,0xe03,0x524,0xa59)](color(time,_0x4963f8(0xd0e,0x12ac,0xeca,0x9a0)),color(_0x4963f8(0xca8,0x5a3,0x7f1,0x4ec)+_0x128a37(0x958,0xefb,0x1300,0xea5)+'ffect'));var imagekskwo=await getBuffer(_0x128a37(0x674,0x6d1,0xf1d,0xabb)+_0x128a37(0x771,0x832,0x2e2,0x632)+'ile/4dfc9b'+_0x128a37(0x83e,0xa2b,0x870,0xa73)+_0x4963f8(0xd31,0x7a1,0xc8c,0x816));const _0xd505be={};_0xd505be[_0x128a37(0xa1e,0x919,0xf37,0xc3a)+'t']=_0x4963f8(0xcd0,0x883,0xb1a,0xc5b);const _0x2da2f6={};_0x2da2f6['buttonId']=_0x128a37(0xbec,0x51d,0xaa1,0x87a),_0x2da2f6[_0x4963f8(0x49b,0x662,0x6c4,0x4d7)]=_0xd505be,_0x2da2f6[_0x128a37(0xb97,0xbfd,0xe5b,0xd93)]=0x1;const _0x38f174={};_0x38f174['displayTex'+'t']=_0x4963f8(0xe65,0x951,0xd84,0x9a6);const _0x4705bc={};_0x4705bc['buttonId']=_0x128a37(0x1218,0xcfb,0x1346,0xedc),_0x4705bc[_0x128a37(0x88c,0x98b,0x5b3,0x76e)]=_0x38f174,_0x4705bc[_0x4963f8(0xe6f,0xad6,0xce9,0xc3f)]=0x1,sendButLocation(from,image_effect(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[0x3*0x78d+-0x1*-0x5bf+0x5ae*-0x5],imagekskwo,[_0x2da2f6,_0x4705bc],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x128a37(0x1121,0x806,0x8d2,0xcfc)+'e'){console[_0x4963f8(0xe26,0xe7e,0x9af,0x8f9)](color(time,_0x128a37(0x108e,0x1028,0x1413,0xf74)),color('List\x20messa'+_0x4963f8(0xa11,0x2dd,0x6b0,0xa7d)+_0x4963f8(0xe6b,0x5e4,0x9ac,0xa8d)));var sourbwbbz=await getBuffer(_0x128a37(0xab0,0x69c,0xe80,0xabb)+_0x128a37(0x6b2,0x549,0x528,0x632)+_0x4963f8(0x5ab,0x34c,0x693,0x343)+'b5e33a30ee'+_0x128a37(0x4fc,0x806,0xd02,0x7e2));const _0x425c9f={};_0x425c9f[_0x4963f8(0xd94,0x712,0xb90,0xca5)+'t']=_0x128a37(0xde4,0xdc5,0x9ef,0x96a);const _0x1a7fea={};_0x1a7fea['buttonId']=_0x4963f8(0x315,0x782,0x7d0,0xb8f),_0x1a7fea[_0x128a37(0x773,0xc8c,0x8e5,0x76e)]=_0x425c9f,_0x1a7fea[_0x128a37(0x11d6,0xb46,0x1123,0xd93)]=0x1;const _0x59bc0e={};_0x59bc0e[_0x4963f8(0xfb9,0x79f,0xb90,0x84f)+'t']='✓\x20OWNER';const _0x4f3a7a={};_0x4f3a7a[_0x4963f8(0x592,0xf70,0xa74,0x616)]=_0x4963f8(0x1111,0xa23,0xe32,0x9ea),_0x4f3a7a['buttonText']=_0x59bc0e,_0x4f3a7a['type']=0x1,sendButLocation(from,_0x4963f8(0x807,0xe25,0x8d9,0xd87)+'cript\x20Bot\x20'+_0x128a37(0xe6a,0x1014,0xc45,0xdcc)+'youtube.co'+'m/c/zeeone'+'ofc',''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x128a37(0x182,0x3b9,0x312,0x581)]('@')[0x9ea+-0x2052+-0x1*-0x1668],sourbwbbz,[_0x1a7fea,_0x4f3a7a],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}function _0x4963f8(_0x3ed190,_0x3f7956,_0x5f4bbf,_0x53aacd){return _0xf809(_0x5f4bbf-0x265,_0x3ed190);}if(sub_yt_zeeone_ofc=='Big\x20Thanks'+_0x4963f8(0xca2,0xaa6,0x8d6,0x538)){console[_0x128a37(0x57b,0x82b,0xaff,0xa59)](color(time,_0x128a37(0x10c1,0x13c3,0xcd1,0xf74)),color(_0x128a37(0x4e7,0x62f,0x86e,0x89b)+_0x4963f8(0xf73,0xd52,0xd58,0xf1b)+'nks\x20to'));var imgList=[_0x4963f8(0x4e6,0x4c1,0x487,0x95)+_0x128a37(0x76b,0xba4,0x4ab,0x6db)+'/p_2032o0l'+'cv1.jpg',_0x4963f8(0x6e1,0x73d,0x9fc,0x886)+_0x4963f8(0x38d,0x135,0x631,0xa5b)+_0x128a37(0x10a4,0xf6b,0x123b,0xd00)+'2e1.jpg',_0x128a37(0xc74,0x842,0x1191,0xd85)+_0x128a37(0xb9d,0x265,0x2cf,0x6db)+_0x128a37(0x579,0xcd0,0x6e1,0x9a6)+_0x4963f8(0x3d7,0xad0,0x785,0x684),_0x128a37(0x9b7,0x8c6,0x483,0x531)+_0x128a37(0x475,0xc26,0x243,0x6db)+'/p_2032xlj'+_0x4963f8(0x7e9,0x5b5,0x864,0x6a6),'https://e.'+_0x4963f8(0x815,0xa4d,0x631,0x3d7)+_0x128a37(0xf8b,0xca4,0xf3b,0xd29)+_0x128a37(0x2fb,0x6a0,0x6c2,0x814),'https://d.'+_0x4963f8(0x919,0x682,0x631,0x90c)+_0x4963f8(0x21a,0x341,0x460,-0x4a)+_0x128a37(0x8e6,0x233,0x588,0x4f0),_0x4963f8(0x806,0x8e7,0xaec,0x6ff)+'top4top.io'+_0x128a37(0xa9f,0xedc,0x11ec,0xe62)+'pb1.jpg'],imgUrl=imgList[Math['floor'](Math['random']()*imgList[_0x128a37(0x698,0xc73,0xa6c,0x78c)])];tqto=_0x128a37(0x6a6,0xd32,0xf2d,0xab8)+_0x4963f8(0x20c,0xb49,0x636,0x1ad)+_0x4963f8(0xbf7,0xa55,0xa28,0xe31)+_0x4963f8(0xc18,0xe60,0xda4,0x91d)+_0x4963f8(0x23b,0x23f,0x565,0x3dc)+_0x4963f8(0xd83,0x7bd,0xb73,0xd6b)+'\x20\x0a\x0aPowered'+_0x128a37(0xce2,0x710,0xccd,0xa3b)+ini_mark[_0x4963f8(0x21f,0x3e3,0x4d7,0x52b)]('@')[-0x21b5*-0x1+-0x4ae*-0x6+-0x1*0x3dc9];const _0xd8d2b4={};_0xd8d2b4[_0x128a37(0x9d5,0x41e,0xcee,0x864)]=''+ucapannya2,_0xd8d2b4[_0x4963f8(0x998,0x588,0x55e,0x757)]=_0x4963f8(0x33e,0x1e5,0x4c5,0x53b)+_0x128a37(0xafd,0x71e,0x473,0x811),_0xd8d2b4[_0x4963f8(0xc3a,0x77d,0xcaa,0xd3b)+'e']=_0x4963f8(0xfcb,0xcfa,0xe53,0xb7f),_0xd8d2b4[_0x4963f8(0x8b1,0x3a9,0x744,0x7c0)+'rl']=''+imgUrl,_0xd8d2b4[_0x128a37(0x8af,0xa6c,0x5d5,0xa14)]='',_0xd8d2b4[_0x4963f8(0x207,0x205,0x743,0x269)]=_0x4963f8(0x992,0x962,0x999,0x667)+_0x128a37(0x45b,0x9ea,0x986,0x710)+'channel/UC'+_0x4963f8(0xae1,0x925,0xcfc,0x1170)+_0x128a37(0x731,0x4e3,0xb0d,0x8d3)+'lA';const _0x1fd6c7={};_0x1fd6c7[_0x128a37(0x9e,0xb17,0x1ee,0x5d3)]=_0x128a37(0x769,0x95e,0x642,0xa44),_0x1fd6c7['forwarding'+'Score']=0x3b9aca00,_0x1fd6c7['isForwarde'+'d']=!![],_0x1fd6c7[_0x4963f8(0x1360,0xeed,0xe86,0xfba)+_0x128a37(0x47a,0x2ab,0x2b9,0x54c)]=!![],_0x1fd6c7[_0x4963f8(0x6df,0x4c8,0x933,0x3f1)+_0x4963f8(0xbf8,0xd0f,0x99d,0xbc1)]=_0xd8d2b4;const _0x5d5cb6={};_0x5d5cb6[_0x4963f8(0x1177,0xd17,0xd64,0xc12)+'id']=[ini_mark],alpha[_0x128a37(0xb8d,0x119e,0xa12,0xcf9)+'e'](from,tqto,text,{'thumbnail':fs[_0x4963f8(0xfaa,0x77c,0xb1e,0xefa)+'nc'](_0x4963f8(0x904,0x447,0x6d0,0x791)+thumbnail),'caption':_0x128a37(0x95f,0xb0b,0xb0d,0xa44),'contextInfo':_0x1fd6c7,'quoted':ftoko,'contextInfo':_0x5d5cb6});}if(subscribezeeoneofc==_0x128a37(0xa1f,0xd60,0x447,0x87a)){console[_0x128a37(0xc5f,0x64a,0x5b8,0xa59)](color(time,_0x4963f8(0x103f,0xf79,0xeca,0xcc7)),color(_0x4963f8(0x437,0x774,0x8d4,0x867)+_0x128a37(0x83a,0xf67,0xd8a,0xc0b)));const _0x2d8398={};_0x2d8398[_0x128a37(0x595,0xbfc,0xb52,0x864)]=_0x128a37(0xc2d,0x95d,0x787,0xc42)+'ot',_0x2d8398[_0x128a37(0xe9b,0x1113,0x12b1,0xeda)+'n']='_choose\x20th'+_0x128a37(0xb81,0x971,0xb6d,0x9a7)+'want\x20to\x20us'+_0x4963f8(0x9fc,0xa2f,0xaef,0x66c)+'enu\x20comman'+'d_',_0x2d8398['rowId']='0';const _0x5a5701={};_0x5a5701['title']=_0x4963f8(0xa01,0x8ca,0x952,0xc92)+_0x128a37(0x132b,0x107d,0xc1b,0xeba),_0x5a5701[_0x4963f8(0x479,0x348,0x61f,0x2bc)]=[_0x2d8398];const _0x4a1dc3={};_0x4a1dc3[_0x4963f8(0x949,0x532,0x7ba,0x7b2)]=_0x4963f8(0x938,0x1b5,0x62e,0x9d2)+'nu',_0x4a1dc3[_0x4963f8(0x10db,0xf15,0xe30,0xecd)+'n']=_0x4963f8(0x953,0xa6e,0xbdf,0xff6)+_0x128a37(0x9fe,0x63d,0x91a,0x9a7)+_0x128a37(0x1110,0xd46,0xc27,0xf25)+_0x4963f8(0x22f,0x907,0x47f,0xd8)+_0x128a37(0xaa0,0x8a6,0x5f0,0x904)+_0x4963f8(0x739,0x11a0,0xc73,0x1191),_0x4a1dc3[_0x128a37(0xfd9,0x1056,0xcdf,0xc7c)]='0';const _0x12554a={};_0x12554a[_0x4963f8(0x9fe,0x350,0x7ba,0x4a6)]=_0x128a37(0xd22,0xe44,0xa1c,0xe20)+_0x4963f8(0xe6f,0x1089,0xb9e,0xb42),_0x12554a[_0x4963f8(0x9e0,0xde,0x61f,0x1b3)]=[_0x4a1dc3];const _0x3ab921={};_0x3ab921['title']=_0x128a37(0x91f,0x11f6,0x10ae,0xd6a),_0x3ab921[_0x4963f8(0x119e,0x1044,0xe30,0xc48)+'n']=_0x128a37(0xb6f,0x81d,0xa26,0xc89)+'is\x20if\x20you\x20'+_0x4963f8(0x10b0,0xa9a,0xe7b,0x1012)+'e\x20the\x20grou'+_0x4963f8(0xd3e,0xd5a,0x951,0x811)+_0x128a37(0xcad,0x9ef,0x904,0xc1a),_0x3ab921[_0x4963f8(0xb7d,0xdf4,0xbd2,0xd58)]='0';const _0x1aaefc={};_0x1aaefc[_0x4963f8(0x439,0x5e9,0x7ba,0xcb6)]=_0x128a37(0x10ce,0x130a,0xa29,0xe20)+_0x128a37(0xe2,0x3bc,0x1ae,0x4f8),_0x1aaefc['rows']=[_0x3ab921];const _0x3e2f37={};_0x3e2f37['title']=_0x4963f8(0xfd5,0xe90,0xc2a,0xf00)+'u',_0x3e2f37[_0x128a37(0x11ed,0x1119,0x1351,0xeda)+'n']=_0x4963f8(0xa61,0xd15,0xbdf,0xe60)+_0x4963f8(0x8d9,0x768,0x8fd,0x47a)+_0x128a37(0x1240,0xcae,0xe7e,0xf25)+'e\x20the\x20conv'+_0x4963f8(0x26b,0x488,0x77a,0xc92)+_0x128a37(0xfc9,0xe48,0x1109,0xbf9),_0x3e2f37[_0x128a37(0xf2b,0xa53,0x915,0xc7c)]='0';const _0x14465e={};_0x14465e[_0x128a37(0x490,0x589,0x876,0x864)]=_0x128a37(0xdd1,0xcf5,0x1260,0xe20)+_0x128a37(0xc43,0x525,0x649,0x8e3),_0x14465e[_0x128a37(0x9f2,0xa06,0xa3d,0x6c9)]=[_0x3e2f37];const _0x37b587={};_0x37b587['title']=_0x4963f8(0xaaa,0xa1e,0xab0,0xf31),_0x37b587[_0x128a37(0x13cd,0xc10,0xf80,0xeda)+'n']=_0x128a37(0x10e9,0x844,0x109b,0xc89)+_0x128a37(0x9f2,0xa09,0x754,0x9a7)+_0x128a37(0xce3,0xa3f,0xae0,0xf25)+_0x4963f8(0x102f,0x122a,0xddc,0xa39)+_0x4963f8(0x408,0x73e,0x61b,0x422)+'d_',_0x37b587['rowId']='0';const _0x777d63={};_0x777d63[_0x128a37(0x407,0xbdf,0xc82,0x864)]=_0x128a37(0x1273,0xcba,0xbe5,0xe20)+_0x4963f8(0x890,0xb85,0xb0f,0x70c),_0x777d63[_0x4963f8(0x5a2,0x239,0x61f,0x284)]=[_0x37b587];const _0x38ff0d={};_0x38ff0d[_0x128a37(0x423,0xcac,0x671,0x864)]=_0x4963f8(0xc66,0xd2e,0xe3b,0xc4c),_0x38ff0d['descriptio'+'n']=_0x128a37(0xe5f,0xa43,0xb2c,0xc89)+_0x4963f8(0x9b7,0x925,0x8fd,0x678)+_0x128a37(0xbc6,0xa3b,0x12fd,0xf25)+_0x128a37(0x13e1,0xdce,0x1144,0xe9d)+_0x128a37(0xe52,0x1281,0xb94,0xe36)+'and_',_0x38ff0d['rowId']='0';const _0x29d18a={};_0x29d18a[_0x4963f8(0x6c6,0x6b2,0x7ba,0x70c)]=_0x4963f8(0x127d,0x946,0xd76,0x854)+'e-5',_0x29d18a[_0x128a37(0x83a,0x6c7,0x5ea,0x6c9)]=[_0x38ff0d];const _0x2c64ab={};_0x2c64ab[_0x4963f8(0x983,0x6f3,0x7ba,0x62b)]='othermenu',_0x2c64ab[_0x128a37(0x1139,0xca4,0x10b5,0xeda)+'n']=_0x128a37(0x95d,0xc93,0xc0c,0xc89)+'is\x20if\x20you\x20'+_0x128a37(0xc07,0x1169,0xb45,0xf25)+_0x128a37(0x3e1,0xa13,0x6d6,0x567)+_0x128a37(0xe60,0xc7b,0xe96,0xe36)+_0x4963f8(0x850,0x928,0xb70,0xf64),_0x2c64ab[_0x128a37(0xa9b,0x9a2,0xe81,0xc7c)]='0';const _0x3cbe47={};_0x3cbe47[_0x128a37(0x34a,0x80e,0x8aa,0x864)]=_0x4963f8(0xe25,0x8c3,0xd76,0x119d)+_0x4963f8(0x96e,0xa7c,0xa4d,0x9f1),_0x3cbe47[_0x4963f8(0xa38,0x9e4,0x61f,0x841)]=[_0x2c64ab];const _0xe7beb2={};_0xe7beb2[_0x128a37(0xad0,0xc7a,0xd71,0x864)]='ownermenu',_0xe7beb2[_0x128a37(0xfa6,0xb0f,0xa3c,0xeda)+'n']='_choose\x20th'+_0x4963f8(0x5d4,0x800,0x8fd,0x99f)+_0x4963f8(0x1130,0x12bf,0xe7b,0x9e4)+_0x4963f8(0x5ba,0x49d,0x478,0x254)+_0x128a37(0xb77,0x9ba,0xdf4,0xe36)+_0x128a37(0xdda,0xa66,0x872,0xc1a),_0xe7beb2[_0x4963f8(0xe8d,0xad1,0xbd2,0xb40)]='0';const _0x1d9494={};_0x1d9494[_0x128a37(0xbc5,0x3ec,0xd1d,0x864)]='Sub\x20Menu\x20k'+_0x128a37(0xd79,0xb24,0x8d4,0xaea),_0x1d9494[_0x128a37(0x234,0xbe8,0x6a8,0x6c9)]=[_0xe7beb2];const _0x509891={};_0x509891[_0x128a37(0xd34,0xcde,0x77f,0x864)]='storagemen'+'u',_0x509891[_0x4963f8(0x108f,0xabe,0xe30,0x112e)+'n']=_0x4963f8(0x7b8,0xc24,0xbdf,0xb12)+'is\x20if\x20you\x20'+_0x4963f8(0xaf7,0xb88,0xe7b,0xcb6)+_0x128a37(0x21e,0x21d,0x9bd,0x562)+'agemenu\x20co'+_0x4963f8(0xf5b,0xf3d,0xb4f,0x628),_0x509891[_0x4963f8(0x8b5,0xac5,0xbd2,0x110a)]='0';const _0xfde188={};_0xfde188['title']=_0x4963f8(0xbc3,0xa40,0xd76,0x101f)+_0x128a37(0x763,0xf96,0xc64,0xbba),_0xfde188[_0x4963f8(0x861,0x63c,0x61f,0x2d4)]=[_0x509891];const _0x7e003e={};_0x7e003e[_0x128a37(0x368,0x9da,0xd02,0x864)]=_0x4963f8(0xcb0,0xca9,0xc3c,0xe2d),_0x7e003e[_0x4963f8(0x9a6,0xfa9,0xe30,0x91e)+'n']='_choose\x20th'+_0x4963f8(0xb79,0x940,0x8fd,0xc97)+_0x4963f8(0x1122,0xbc3,0xe7b,0x1110)+_0x128a37(0xc1c,0x111a,0x9d1,0xf00)+'enu\x20comman'+'d_',_0x7e003e[_0x128a37(0x8cc,0x754,0x954,0xc7c)]='0';const _0x278373={};_0x278373[_0x128a37(0xd33,0x518,0x7a7,0x864)]='Sub\x20Menu\x20k'+_0x128a37(0x80f,0xf06,0xbc7,0xba0),_0x278373['rows']=[_0x7e003e];const _0x507d6e={};_0x507d6e[_0x128a37(0x895,0x99c,0x3a0,0x864)]=_0x4963f8(0x9d8,0x930,0xac9,0xb0e),_0x507d6e[_0x4963f8(0xb5a,0xfae,0xe30,0xdda)+'n']=_0x4963f8(0x75e,0xd8c,0xbdf,0x10c7)+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x128a37(0x590,0x7d9,0x6b7,0x6aa)+_0x4963f8(0x9c6,0x5f5,0x6d1,0xaa1)+'_',_0x507d6e[_0x4963f8(0xb41,0xdf9,0xbd2,0xa3b)]='0';const _0x21d913={};_0x21d913[_0x128a37(0xb41,0x37d,0x3a3,0x864)]='Sub\x20Menu\x20k'+'e-10',_0x21d913[_0x128a37(0x42a,0x655,0x65a,0x6c9)]=[_0x507d6e];const _0x1f5cf9={};_0x1f5cf9[_0x4963f8(0x4d2,0x9cf,0x7ba,0xc56)]=_0x128a37(0x374,0x781,0x37e,0x659)+'n',_0x1f5cf9[_0x128a37(0x1312,0x12ab,0xb87,0xeda)+'n']='_choose\x20th'+_0x128a37(0x565,0xba8,0x6cd,0x9a7)+_0x4963f8(0x11b5,0x135d,0xe7b,0xc2c)+_0x4963f8(0x8e2,0x940,0x9f7,0x62a)+_0x4963f8(0xce3,0xac1,0xdfe,0x92e)+_0x4963f8(0xc4d,0x54d,0x8f1,0x67d),_0x1f5cf9[_0x4963f8(0xa4e,0x79c,0xbd2,0x979)]='0';const _0xa3df74={};_0xa3df74[_0x4963f8(0x445,0x731,0x7ba,0x825)]=_0x128a37(0x12cc,0xace,0xa9c,0xe20)+_0x128a37(0xc39,0x1351,0xac7,0xeec),_0xa3df74[_0x128a37(0x8d0,0xb85,0x97b,0x6c9)]=[_0x1f5cf9];const _0x37c05a={};_0x37c05a[_0x4963f8(0xb74,0x9b1,0x7ba,0x2f0)]=_0x128a37(0x950,0x8b7,0xa6f,0xb94)+'ticker',_0x37c05a[_0x128a37(0x115e,0x1022,0x139b,0xeda)+'n']=_0x4963f8(0xa36,0x102f,0xbdf,0x952)+_0x128a37(0x918,0xb9b,0x4d5,0x9a7)+'want\x20to\x20us'+_0x4963f8(0x2a2,0xa90,0x5a1,0x45e)+'stc\x20comman'+'d_',_0x37c05a[_0x4963f8(0x8ab,0x1005,0xbd2,0x8ff)]='0';const _0x3a00b6={};_0x3a00b6['title']=_0x4963f8(0xd64,0x1235,0xd76,0xe20)+_0x128a37(0x6a6,0xb1b,0xe87,0xb19),_0x3a00b6[_0x4963f8(0x930,0x3f7,0x61f,0x700)]=[_0x37c05a];const _0x3dea71={};_0x3dea71['title']=_0x128a37(0x969,0xbad,0xa0d,0x8e4),_0x3dea71['descriptio'+'n']=_0x4963f8(0xcbb,0xa0c,0xbdf,0xaf1)+_0x4963f8(0xb71,0x7bb,0x8fd,0x4a7)+_0x128a37(0xcb6,0xa9a,0xae7,0xf25)+_0x4963f8(0x6c3,0x545,0x4f7,0x391)+_0x4963f8(0x1193,0xb53,0xc43,0xf50)+_0x128a37(0x7c4,0x4e8,0x39f,0x58b),_0x3dea71[_0x128a37(0xdfd,0x9cb,0xd0e,0xc7c)]='0';const _0x5351fc={};_0x5351fc[_0x128a37(0x56c,0x519,0xa5d,0x864)]='Sub\x20Menu\x20k'+_0x128a37(0x234,0xa5a,0x32b,0x6d9),_0x5351fc[_0x4963f8(0x170,0x947,0x61f,0xac0)]=[_0x3dea71];const _0x1e7e29={};_0x1e7e29[_0x128a37(0xc2d,0xa34,0x778,0x864)]=_0x4963f8(0xe28,0x1000,0xe25,0x8db)+'u',_0x1e7e29[_0x4963f8(0x109a,0xed3,0xe30,0xe67)+'n']=_0x128a37(0xb4e,0xc4e,0xf32,0xc89)+_0x4963f8(0x99c,0x6cc,0x8fd,0x473)+_0x128a37(0xa35,0xd27,0xa63,0xf25)+'e\x20the\x20asup'+'an\x20menu\x20co'+_0x4963f8(0xde3,0x935,0xb4f,0xd3a),_0x1e7e29[_0x4963f8(0x1010,0x9bb,0xbd2,0xdce)]='0';const _0x3ffb74={};_0x3ffb74[_0x4963f8(0xcae,0x8be,0x7ba,0x9bb)]='Sub\x20Menu\x20k'+_0x4963f8(0xa3e,0xdd5,0x894,0xb64),_0x3ffb74[_0x128a37(0xa7a,0x72b,0xa6a,0x6c9)]=[_0x1e7e29];const _0x550e4d={};_0x550e4d[_0x128a37(0xa1c,0x6dc,0x4e2,0x864)]=_0x4963f8(0x439,0x9d2,0x4af,0x28c)+'ct',_0x550e4d['descriptio'+'n']=_0x128a37(0x7dd,0x7aa,0x913,0xc89)+'is\x20if\x20you\x20'+_0x128a37(0xea9,0xb97,0x1144,0xf25)+'e\x20the\x20imag'+'e\x20effect\x20m'+_0x4963f8(0x31d,0x4aa,0x61b,0x53a)+'d_',_0x550e4d['rowId']='0';const _0x2181de={};_0x2181de[_0x4963f8(0xc1c,0x903,0x7ba,0x93b)]='Sub\x20Menu\x20k'+_0x128a37(0x1085,0xa95,0x1183,0xd94),_0x2181de[_0x4963f8(0x62b,0xa5a,0x61f,0x2c7)]=[_0x550e4d];const _0x47c741={};_0x47c741[_0x128a37(0x3b8,0xb61,0x6f5,0x864)]=_0x128a37(0xfaa,0xf75,0xdf4,0xb82)+'n',_0x47c741[_0x128a37(0x12d0,0xb2d,0xd7a,0xeda)+'n']=_0x4963f8(0x6df,0xee7,0xbdf,0xc8e)+'is\x20if\x20you\x20'+_0x4963f8(0x98e,0x110b,0xe7b,0x10a5)+_0x128a37(0xe96,0x990,0x931,0xaa1)+_0x4963f8(0xdf0,0x912,0xd93,0xe90)+_0x4963f8(0xbf2,0xc03,0xb4f,0xcae),_0x47c741['rowId']='0';const _0x357b92={};_0x357b92['title']=_0x4963f8(0xff8,0xbab,0xd76,0x87d)+'e-16',_0x357b92[_0x128a37(0x9e1,0xa74,0xc0e,0x6c9)]=[_0x47c741];const _0x57bf65={};_0x57bf65[_0x128a37(0x439,0x5d0,0x9f4,0x864)]=_0x4963f8(0xddb,0xd90,0xaaa,0xab0),_0x57bf65[_0x4963f8(0xdac,0x136a,0xe30,0x10b2)+'n']='_choose\x20th'+_0x4963f8(0x579,0xa44,0x8fd,0xc85)+'want\x20to\x20us'+'e\x20the\x20quot'+_0x4963f8(0x762,0x962,0xafd,0xfe7)+_0x4963f8(0x725,0xdb3,0x8f1,0xd38),_0x57bf65[_0x128a37(0xc2b,0x1147,0x1128,0xc7c)]='0';const _0x14e911={};_0x14e911[_0x128a37(0x6d7,0xcb4,0x85e,0x864)]=_0x4963f8(0x973,0xf06,0xd76,0x1222)+_0x128a37(0x877,0x536,0x9f5,0x68c),_0x14e911['rows']=[_0x57bf65];const _0x4011b8={};_0x4011b8['title']=_0x4963f8(0x5f1,0x57d,0x645,0x133),_0x4011b8[_0x128a37(0x13af,0xeae,0xc8c,0xeda)+'n']=_0x4963f8(0x1013,0xbe9,0xbdf,0x9b1)+'is\x20if\x20you\x20'+_0x4963f8(0x1054,0xb79,0xe7b,0x11c2)+_0x4963f8(0xe3a,0xce3,0xe2d,0x10ca)+_0x4963f8(0x1253,0xd81,0xe66,0x1379)+'and_',_0x4011b8[_0x4963f8(0xbb4,0x9ec,0xbd2,0xa86)]='0';const _0x33a0ff={};_0x33a0ff['title']='Sub\x20Menu\x20k'+'e-18',_0x33a0ff['rows']=[_0x4011b8];const _0x12ab9e={};_0x12ab9e[_0x128a37(0x4d3,0x472,0xa7a,0x864)]=_0x4963f8(0xb02,0xfea,0xd34,0x1196)+'u',_0x12ab9e['descriptio'+'n']=_0x128a37(0x7eb,0xc8a,0xbe8,0xc89)+_0x128a37(0x612,0x733,0x924,0x9a7)+_0x4963f8(0xbf8,0xcbe,0xe7b,0x11e5)+'e\x20the\x20text'+_0x128a37(0x902,0x760,0xf18,0xbe3)+_0x128a37(0xb88,0xaf9,0xdfc,0xbf9),_0x12ab9e[_0x128a37(0x1090,0x927,0x89d,0xc7c)]='0';const _0x1026a7={};_0x1026a7[_0x128a37(0x511,0xb15,0xbd8,0x864)]='Sub\x20Menu\x20k'+_0x128a37(0x5a6,0x54e,0x9e8,0xa3e),_0x1026a7[_0x4963f8(0x844,0xb5a,0x61f,0x8c8)]=[_0x12ab9e];const _0x4d8af4={};_0x4d8af4[_0x128a37(0x962,0x95f,0x739,0x864)]=_0x128a37(0xaa6,0x1169,0x10ed,0xec3)+'nu',_0x4d8af4[_0x4963f8(0xa16,0x1087,0xe30,0xce9)+'n']=_0x128a37(0xed5,0xc62,0xa75,0xc89)+_0x4963f8(0xe16,0x51e,0x8fd,0x448)+_0x128a37(0xe3b,0x1425,0xa4c,0xf25)+_0x128a37(0x90a,0xe2f,0xa1e,0x9f4)+_0x4963f8(0x94a,0x802,0x679,0x709)+'ommand_',_0x4d8af4[_0x128a37(0xe29,0x9d5,0x8b1,0xc7c)]='0';const _0x3b02f6={};_0x3b02f6[_0x4963f8(0x859,0x8cc,0x7ba,0x7af)]=_0x4963f8(0x9e8,0x110b,0xd76,0xe08)+_0x128a37(0x864,0x416,0xa61,0x634),_0x3b02f6['rows']=[_0x4d8af4];const _0x4b65ba={};_0x4b65ba[_0x128a37(0x6e4,0xcb9,0xd99,0x864)]=_0x128a37(0x7c0,0x1ae,0x420,0x5b6),_0x4b65ba[_0x4963f8(0xdd8,0xea7,0xe30,0xa53)+'n']='_choose\x20th'+_0x128a37(0x85b,0x4e3,0x9f6,0x9a7)+_0x4963f8(0x13bb,0xc42,0xe7b,0xc91)+_0x4963f8(0x919,0x5a8,0x5c5,0x3e5)+'dmenu\x20comm'+_0x4963f8(0xbd5,0xf50,0xb70,0xa4b),_0x4b65ba[_0x4963f8(0x8af,0x928,0xbd2,0x987)]='0';const _0x57cf43={};_0x57cf43[_0x128a37(0x660,0x43b,0xa42,0x864)]='Sub\x20Menu\x20k'+_0x4963f8(0x44d,0x1b9,0x54b,0x278),_0x57cf43[_0x128a37(0x87c,0x68f,0x989,0x6c9)]=[_0x4b65ba];const _0x3366e6={};_0x3366e6[_0x128a37(0x3d1,0xa69,0x854,0x864)]='kerangmenu',_0x3366e6[_0x4963f8(0xb77,0xa82,0xe30,0x11a3)+'n']='_choose\x20th'+_0x128a37(0x5f1,0x604,0x9dd,0x9a7)+_0x128a37(0xa62,0x11b4,0xc81,0xf25)+_0x128a37(0x262,0x28e,-0x41,0x502)+_0x128a37(0x600,0x4b0,0x247,0x6d1)+_0x4963f8(0x401,0xa04,0x8f1,0x765),_0x3366e6[_0x4963f8(0xb71,0xae4,0xbd2,0xe0b)]='0';const _0x11b5e9={};_0x11b5e9[_0x128a37(0x34c,0x810,0x818,0x864)]=_0x128a37(0xe98,0x10ad,0x11ff,0xe20)+'e-22',_0x11b5e9[_0x128a37(0x6b9,0x8fa,0x2ee,0x6c9)]=[_0x3366e6];const _0x322cae={};_0x322cae[_0x128a37(0x92a,0x71f,0xd3c,0x864)]='source\x20cod'+'e',_0x322cae[_0x4963f8(0x903,0x12a0,0xe30,0xa10)+'n']=_0x4963f8(0xc11,0xc54,0x87b,0x636)+_0x128a37(0x223,0x2e7,0x1e3,0x51e)+_0x4963f8(0x1120,0x12a8,0xe17,0x9e1)+_0x128a37(0xc57,0x9c9,0x77d,0xcad)+_0x4963f8(0x6ad,0xcd9,0xaf0,0xa02)+_0x4963f8(0xaa9,0xafc,0xb95,0xd72),_0x322cae[_0x4963f8(0x776,0x10dd,0xbd2,0x738)]=_0x128a37(0xae4,0x84f,0xced,0xcfc)+'e';const _0x41f9be={};_0x41f9be[_0x4963f8(0xad1,0xab6,0x7ba,0x2c0)]=_0x4963f8(0x826,0x7dd,0xce5,0xa11)+_0x4963f8(0xe63,0x110a,0xd89,0xbd1),_0x41f9be[_0x128a37(0x344,0x50c,0xa5d,0x6c9)]=[_0x322cae];const _0x1d3029={};_0x1d3029[_0x128a37(0x33f,0x8ae,0xd3a,0x864)]='Big\x20Thanks'+'\x20to',_0x1d3029[_0x4963f8(0x10b4,0x10f4,0xe30,0xe49)+'n']='\x0a\x0a_choose\x20'+_0x128a37(0x94b,0x550,0xa6e,0x51e)+_0x128a37(0x11bb,0x13fe,0x126b,0xec1)+_0x128a37(0x584,0x9b3,0xaf3,0x625)+_0x4963f8(0xb9d,0xbc0,0xa80,0x91f)+_0x128a37(0x9f4,0xd63,0x1167,0xc3b)+_0x4963f8(0x12aa,0xea9,0xea1,0x10e3)+'pt_',_0x1d3029['rowId']='0';const _0xbd9662={};_0xbd9662[_0x128a37(0xd62,0x3a0,0xbf1,0x864)]='🏆\x20Contribu'+_0x4963f8(0x10d5,0x122c,0xde4,0x938),_0xbd9662[_0x128a37(0xa1d,0x526,0x7b8,0x6c9)]=[_0x1d3029];let pip=alpha[_0x128a37(0x90e,0x186,0x888,0x5da)+_0x4963f8(0xacd,0x3e4,0x6f4,0xb2b)+_0x128a37(0x8d3,0xf3c,0x929,0xdb5)](from,{'listMessage':{'title':'LIST\x20MENU\x20'+_0x128a37(0xcc4,0xeb6,0xe3b,0xf0e),'description':'Hai\x20@'+sender[_0x4963f8(0x33b,0x87a,0x4d7,0x1a3)]('@')[-0x22b+-0x29c+-0x4c7*-0x1]+(_0x4963f8(0xfa8,0x868,0xa97,0xd03)+_0x128a37(0x41d,0x49f,0xa67,0x534)+'nangkan\x20😇,'+_0x128a37(0x5c4,0x834,0xb2e,0x857)+_0x128a37(0x713,0xb00,0xb2e,0x7c2)+'u\x20bot\x20sila'+_0x128a37(0x456,0xa05,0x462,0x6bd)+'ih!\x20Don\x27t\x20'+_0x128a37(0x6ce,0x756,0x6a1,0x557)),'buttonText':_0x128a37(0xacc,0x120a,0xb53,0xf18)+'E','footerText':''+creator,'listType':'SINGLE_SEL'+_0x128a37(0xa1e,0xea9,0xbd8,0xf26),'sections':[_0x5a5701,_0x12554a,_0x1aaefc,_0x14465e,_0x777d63,_0x29d18a,_0x3cbe47,_0x1d9494,_0xfde188,_0x278373,_0x21d913,_0xa3df74,_0x3a00b6,_0x5351fc,_0x3ffb74,_0x2181de,_0x357b92,_0x14e911,_0x33a0ff,_0x1026a7,_0x3b02f6,_0x57cf43,_0x11b5e9,_0x41f9be,_0xbd9662]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x286a4e={};_0x286a4e[_0x4963f8(0x834,0x916,0xc05,0xf0c)]=!![],alpha['relayWAMes'+_0x128a37(0x11eb,0x7fa,0xd33,0xcdd)](pip,_0x286a4e);}const ini_bc_gc_bang=_0x1c33fd=>{const _0x351e4f={};_0x351e4f[_0x5e549a(0x45b,0x49f,0x85e,0x340)]=_0x5e549a(0xa92,0x8bf,0x99a,0x5d9),_0x351e4f[_0x5e549a(0x86a,0xb5e,0xae6,0x825)]=_0x20c99c(-0xe2,0xe1,-0x54c,-0x2de),_0x351e4f[_0x5e549a(0x106a,0xa6e,0xbc6,0xc5c)]=_0x5e549a(0x94b,0xaff,0x72e,0x9a8)+'a';function _0x20c99c(_0x2c6066,_0xb20b78,_0x394366,_0x25bf82){return _0x4963f8(_0xb20b78,_0xb20b78-0x1c7,_0x2c6066- -0x627,_0x25bf82-0x68);}_0x351e4f[_0x20c99c(-0x10a,0x48,-0x1e2,-0x12d)]='Botwea\x20©2k'+'21';const _0x991e7a=_0x351e4f;function _0x5e549a(_0x24c3a3,_0x3dc1fe,_0x559988,_0x1f9011){return _0x4963f8(_0x3dc1fe,_0x3dc1fe-0x61,_0x559988- -0x6b,_0x1f9011-0x25);}var _0x3ef3b5=alpha[_0x20c99c(0x4c4,0x8f0,0x7fb,0xcd)][_0x20c99c(-0x5c,-0x43,-0x232,-0x40)]()['filter'](_0x44439b=>_0x44439b[_0x5e549a(0x8d8,0xc8a,0x96c,0x96e)]['endsWith'](_0x20c99c(-0x11f,-0x579,-0x171,0x28d)));let _0x246ef6=_0x1c33fd;for(let _0x255646 of _0x3ef3b5){const _0x1e64c7={};_0x1e64c7['displayTex'+'t']=_0x20c99c(0x5a9,0x4cd,0x2d0,0x94c);const _0x4dba2e={};_0x4dba2e[_0x20c99c(0x44d,0x237,0x7c1,0x60f)]=_0x991e7a[_0x20c99c(0x2a2,0x57a,-0x274,0x246)],_0x4dba2e[_0x20c99c(0x9d,-0x15b,0x5c6,-0x191)]=_0x1e64c7,_0x4dba2e[_0x20c99c(0x6c2,0x665,0x9f5,0x8ac)]=0x1;const _0x10a0ae={};_0x10a0ae['buttonId']=_0x991e7a[_0x5e549a(0xdbb,0xa2b,0xae6,0xbf2)],_0x10a0ae[_0x5e549a(0x59f,0x76b,0x659,0x862)]={},_0x10a0ae['type']=0x1,_0x10a0ae[_0x5e549a(0x59f,0x76b,0x659,0x862)][_0x5e549a(0xdbe,0xff1,0xb25,0x6f1)+'t']=_0x991e7a[_0x20c99c(0x60a,0x942,0x942,0x158)];var _0x10d153=[_0x4dba2e,_0x10a0ae];const _0x1d2240={};_0x1d2240[_0x5e549a(0xc8d,0x479,0x78b,0x6d7)+'t']='*BROADCAST'+'*'+enter+enter+_0x246ef6,_0x1d2240['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x1d2240[_0x20c99c(0x1db,0x4d4,0x293,-0x231)]=_0x10d153,_0x1d2240['headerType']=0x1;var _0x3c56c6=_0x1d2240;const _0x392de8={};_0x392de8['text']='hi',_0x392de8[_0x5e549a(0xb04,0x40c,0x82a,0xa9f)+'Score']=0x3b9aca00,_0x392de8[_0x5e549a(0xd46,0x863,0x8fd,0x7ba)+'d']=!![],_0x392de8[_0x20c99c(0x85f,0x5ae,0xb1e,0x9b0)+_0x5e549a(-0x107,0x1b2,0x437,0x2d1)]=!![];const _0x4f6f36={};_0x4f6f36['caption']=_0x991e7a[_0x20c99c(-0x10a,-0x285,-0x5ab,0x2dc)],_0x4f6f36[_0x20c99c(0x2a8,0x65f,0x449,0x5bf)+'o']=_0x392de8,_0x4f6f36[_0x20c99c(0x39c,0x450,0x8eb,-0x71)]=ftroli,_0x4f6f36[_0x5e549a(0xa1d,0xb1c,0xe1b,0x109a)+'ral']=!![],alpha[_0x5e549a(0x697,0x1004,0xbe4,0x942)+'e'](_0x255646[_0x20c99c(0x3b0,0x5c5,-0x20,0x22b)],_0x3c56c6,MessageType[_0x20c99c(0x156,-0x1ce,-0x269,-0x1af)+'sage'],_0x4f6f36);}},ini_bc_pc_bang=_0x427f23=>{const _0x54e72a={};_0x54e72a[_0x3d82c7(0xb23,0x6f9,0x629,0x171)]='ownerku';function _0x23c7b7(_0x5ee7b7,_0x2cb57f,_0x4150a1,_0x3bae8c){return _0x128a37(_0x5ee7b7-0x12a,_0x4150a1,_0x4150a1-0x1b5,_0x3bae8c- -0x626);}_0x54e72a[_0x23c7b7(0x958,0x378,0xa04,0x6f1)]='🐨\x20Owner',_0x54e72a['cfDLh']=_0x3d82c7(-0x72,0x2bc,0x226,-0x8e),_0x54e72a[_0x3d82c7(0x33c,-0x224,0x25f,0x1ea)]=_0x23c7b7(-0xc6,-0xf0,0x1ec,0x39b);function _0x3d82c7(_0x38eb25,_0x4e00cf,_0x14cef5,_0x353888){return _0x4963f8(_0x353888,_0x4e00cf-0xb6,_0x14cef5- -0x31f,_0x353888-0x1a4);}const _0x84d7d0=_0x54e72a;var _0x22c937=alpha[_0x3d82c7(0x9da,0x488,0x7cc,0x4f5)][_0x23c7b7(-0x448,-0x352,-0x23b,0x4f)]();let _0x53bab0=_0x427f23;for(let _0x5e3d50 of _0x22c937){const _0x3630d3={};_0x3630d3[_0x23c7b7(0x47c,0x40d,0x4b7,0x4f8)]=_0x84d7d0[_0x23c7b7(0x1f9,0x8c5,0x260,0x3cc)],_0x3630d3[_0x23c7b7(0x576,-0x3f4,0x118,0x148)]={},_0x3630d3[_0x23c7b7(0x345,0x9d4,0x5c6,0x76d)]=0x1,_0x3630d3[_0x23c7b7(0x576,-0x3f4,0x118,0x148)][_0x3d82c7(0x349,0xb23,0x871,0x49d)+'t']=_0x84d7d0['tEKkm'];const _0x52e644={};_0x52e644[_0x3d82c7(0xa21,0x60f,0x755,0xca2)]=_0x84d7d0[_0x3d82c7(0x1c1,0x914,0x5c7,0x8a)],_0x52e644['buttonText']={},_0x52e644[_0x23c7b7(0x7ac,0x8d1,0x374,0x76d)]=0x1,_0x52e644['buttonText'][_0x23c7b7(0x532,0xb50,0x9fe,0x614)+'t']=_0x84d7d0[_0x23c7b7(-0x3e8,-0x536,-0x12a,0x2)];var _0x6d4307=[_0x3630d3,_0x52e644];const _0x48c7c3={};_0x48c7c3['contentTex'+'t']=_0x23c7b7(0x6ce,0xc5d,0x997,0x8a5)+'*'+enter+enter+_0x53bab0,_0x48c7c3['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x48c7c3[_0x23c7b7(-0x24c,-0x1bf,-0x14b,0x286)]=_0x6d4307,_0x48c7c3['headerType']=0x1;var _0x557e34=_0x48c7c3;const _0x2146da={};_0x2146da[_0x23c7b7(0x367,0x13b,-0x54c,-0x53)]='hi',_0x2146da['forwarding'+_0x23c7b7(0x3d8,0xa9a,0xde7,0x8a2)]=0x3b9aca00,_0x2146da[_0x23c7b7(0x85b,0x285,0x43e,0x3ec)+'d']=!![],_0x2146da[_0x23c7b7(0x611,0x8ad,0xa7a,0x90a)+_0x3d82c7(0x554,0x38,0x183,0x564)]=!![];const _0x5068c3={};_0x5068c3['caption']=_0x23c7b7(0x10b,0x3e5,0x243,0x253)+'21',_0x5068c3[_0x23c7b7(0x33f,-0x140,0x68a,0x353)+'o']=_0x2146da,_0x5068c3[_0x3d82c7(0x34d,0x69a,0x6a4,0x448)]=ftroli,_0x5068c3[_0x3d82c7(0xbe0,0x641,0xb67,0xdee)+'ral']=!![],alpha[_0x3d82c7(0x58d,0x5ef,0x930,0x42c)+'e'](_0x5e3d50[_0x23c7b7(0x4e0,0x801,0x619,0x45b)],_0x557e34,MessageType[_0x3d82c7(0x833,0x2d9,0x45e,0x6b4)+_0x3d82c7(0xc77,0x9f9,0x914,0x3de)],_0x5068c3);}};switch(command){case'q':if(!mek['key'][_0x4963f8(0x8a0,0x6f0,0xa53,0x9d0)]&&!isOwner&&!isCreator)return reply(lang[_0x4963f8(0x1d0,0x907,0x5fa,0x475)]());if(!m[_0x4963f8(0xa3d,0xee7,0x9c3,0xcec)])return reply('reply\x20mess'+_0x4963f8(0xca5,0xac4,0xdea,0xcff));let qse=alpha['serializeM'](await m['getQuotedO'+'bj']());if(!qse[_0x128a37(0xba6,0xdd0,0xdcf,0xa6d)])return reply(_0x4963f8(0xcef,0x654,0x9b1,0x9d4)+_0x128a37(0x1d8,0x8f1,0x1d1,0x66d)+'ied\x20does\x20n'+_0x4963f8(0x8b3,0xf70,0xd0a,0x10ec)+'\x20a\x20reply!');await qse[_0x128a37(0xc56,0xc37,0x785,0xa6d)][_0x128a37(0xa1e,0x1009,0xf74,0xf0f)+'rd'](m['chat'],!![]);break;case _0x4963f8(0xe50,0x573,0x9f2,0x791):case _0x128a37(0x101d,0xffc,0x1050,0xb1b):case'd':try{if(!isQuotedMsg)return reply(_0x4963f8(0x33c,0xa7b,0x7bc,0x29b)+_0x128a37(0xcd0,0xce9,0xad9,0x79d));const _0x573753={};_0x573753['id']=mek[_0x4963f8(0x6fc,0x644,0x5d9,0x9ec)][_0x128a37(0x591,-0x19,0x259,0x4ed)+_0x4963f8(0xd45,0xd51,0x9cd,0x83c)][_0x128a37(0x759,0xec9,0x576,0x979)+'o']['stanzaId'],_0x573753[_0x4963f8(0xcc0,0xd97,0xa04,0xaee)]=from,_0x573753['fromMe']=!![],pp=_0x573753;if(!isGroupAdmins&&!mek[_0x128a37(0x9cf,0xb88,0x91f,0xdbb)][_0x128a37(0x7ad,0x8a4,0x8d9,0xafd)]&&!isOwner&&!isCreator)return reply(mess[_0x4963f8(0x5f2,0x268,0x5bb,0x9f7)][_0x128a37(0xa72,0x206,0x1fd,0x66e)]);alpha['deleteMess'+_0x4963f8(0x982,0xfe8,0xcbe,0xacf)](from,pp);}catch(_0x2f459c){reply('reply\x20pesa'+'n\x20botnya\x20'),reply(_0x2f459c),console['log'](_0x2f459c);}break;case'getsider':const _0x57d76c={};_0x57d76c['displayTex'+'t']=_0x128a37(0x896,0x1041,0x92a,0xdc2)+'t';const _0x2c90cd={};_0x2c90cd[_0x4963f8(0x800,0xa22,0xa74,0x707)]=_0x128a37(0x12cf,0xf7c,0x8c3,0xd8b),_0x2c90cd['buttonText']=_0x57d76c,_0x2c90cd[_0x128a37(0xb04,0xc64,0x1023,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x9d4,0x9cd,0xce1,0xe34)](prefix),'©\x20'+ownername,[_0x2c90cd]);try{if(!isGroup)return reply(_0x128a37(0x79f,0x97b,0x8ab,0x6b3)+'\x20didalam\x20g'+_0x4963f8(0x10a9,0x8e9,0xc1e,0xe65));if(!isQuotedMsg)return reply(_0x128a37(0xbc3,0x716,0x3ee,0x866)+'n\x20botnya');infom=await alpha[_0x4963f8(0xcc0,0xd7f,0xe2e,0xef0)+'o'](from,mek[_0x4963f8(0x9d0,0x1c7,0x5d9,0x3ab)][_0x128a37(0x1ea,0x1ed,0x421,0x4ed)+_0x4963f8(0x885,0x647,0x9cd,0xe1c)][_0x4963f8(0x8e6,0x3b6,0x8cf,0x9d1)+'o'][_0x4963f8(0x874,0x729,0x73f,0x5f5)]),hemm=infom[_0x4963f8(0xeb0,0xf52,0xbc9,0x10b5)],hemms=infom[_0x128a37(0xaba,0x271,0x4a4,0x7a5)],readon=hemms[_0x128a37(0xa7a,0x74d,0x91a,0x9d6)](_0x32c6a4=>_0x32c6a4[_0x4963f8(0x88c,0xdaf,0x9d7,0xc5d)]),readdin=hemm['map'](_0x2671bb=>_0x2671bb['jid']),stamp=hemm['map'](_0x2aa077=>_0x2aa077['t']);function toTime(_0xb28ceb,_0xaba004){const _0x6a11e6={'sCcLt':function(_0x1b91a1,_0x2cafcb){return _0x1b91a1(_0x2cafcb);},'jxAvQ':_0x285214(0x523,-0x174,-0x2e,0x24),'eBDWk':'NLKpc','vxLuw':function(_0x3f44f5,_0x1795d5){return _0x3f44f5*_0x1795d5;}};_0xaba004=typeof _0xaba004==_0x6a11e6[_0x285214(0x56a,0x782,0x51f,0x758)]?![]:!![];let _0xcc2d38=new Date(_0xb28ceb);_0xaba004&&(_0x1faf13(0xe7a,0xa8d,0x858,0x8f5)===_0x6a11e6[_0x285214(0x884,0x913,0x240,0x3c4)]?_0xcc2d38=new Date(_0x6a11e6['vxLuw'](_0xb28ceb,-0x8*-0x257+0x17b*0x3+-0x1341)):_0x6a11e6[_0x1faf13(0x104f,0xb5f,0x1049,0x913)](_0x339832,_0x198fe9)[_0x1faf13(0xa0d,0xcb6,0x1109,0xf40)](_0x3366b2=>{const _0x3929ce={};_0x3929ce[_0x4ab79d(0xd51,0x8c0,0x6fb,0x813)]=0xc8,_0x3929ce[_0x4d5c82(0x2f5,0x561,0x298,0x111)]=_0x3366b2[0x1*-0x14e7+0x1*0x1fab+-0x35*0x34][_0x4d5c82(0x6ae,0x82e,0x195,0x4a6)];function _0x4ab79d(_0x3b8317,_0x45d32e,_0x5c8adc,_0x2b64a2){return _0x285214(_0x3b8317-0xb5,_0x45d32e-0x199,_0x45d32e,_0x2b64a2-0x522);}function _0x4d5c82(_0x469a58,_0x56efbb,_0x3e6ed5,_0x4351fd){return _0x1faf13(_0x469a58-0x1d3,_0x469a58- -0x6c8,_0x4351fd,_0x4351fd-0x75);}_0x2096fb(_0x3929ce);})['catch'](_0x4f4105));var _0x294948=_0xcc2d38[_0x1faf13(0xce6,0xa43,0x5e5,0x959)](),_0x381b25=_0xcc2d38[_0x285214(0xccd,0xb1b,0x5fc,0xa65)]();function _0x1faf13(_0xaee9d9,_0x1ce084,_0xe732c9,_0x54120f){return _0x128a37(_0xaee9d9-0x46,_0xe732c9,_0xe732c9-0x114,_0x1ce084-0x24);}var _0x2026f4=_0xcc2d38[_0x285214(0x923,0x47a,0xa6d,0x524)](),_0x2597e2=_0x294948+':'+_0x381b25+':'+_0x2026f4;function _0x285214(_0x1c361f,_0x293be2,_0x378528,_0x1b7d51){return _0x4963f8(_0x378528,_0x293be2-0xef,_0x1b7d51- -0x467,_0x1b7d51-0x1be);}return _0x2597e2;}function toBulan(_0x306287,_0x5524fb){const _0x214b31={};_0x214b31[_0x196354(0x34a,0x7ff,0xacb,0x863)]=function(_0x2a83f9,_0x416205){return _0x2a83f9==_0x416205;},_0x214b31[_0x196354(0x2e,0x20b,0x6b8,0x1b6)]=_0x196354(-0x41a,-0x1c1,0xd7,-0x135),_0x214b31[_0x196354(0x72d,0x599,0x6f5,0x67d)]=_0x3832f5(0xc08,0x37c,0x7a8,0x8f6),_0x214b31[_0x196354(0xb23,0x138,0xb47,0x63c)]=_0x3832f5(0x12c,0x441,0x467,-0xc5),_0x214b31['dEnlL']='Maret',_0x214b31['xveuk']=_0x3832f5(0x9b4,0x308,0x4fa,0x53d),_0x214b31[_0x196354(-0x571,-0x452,-0x239,-0xe0)]=_0x196354(-0x206,-0xb2,-0x5ae,-0x163),_0x214b31[_0x3832f5(0x8ca,0xb5d,0x88d,0x4a8)]=_0x3832f5(0x29f,0x87e,0x53c,0x54a);function _0x196354(_0x330397,_0x2418cf,_0x176d37,_0x538453){return _0x4963f8(_0x176d37,_0x2418cf-0x13b,_0x538453- -0x5c0,_0x538453-0x17f);}_0x214b31['IunGl']=_0x196354(0x81f,0x59b,0x436,0x470),_0x214b31[_0x3832f5(0x648,0xe4b,0xb1b,0xf38)]=_0x196354(0x514,0xcd3,0x613,0x829),_0x214b31[_0x3832f5(-0x26,0x546,0x502,0x7)]=_0x3832f5(0x523,0xa34,0x79e,0xb3e),_0x214b31['KBfRB']=_0x3832f5(0x102,0x559,0xc2,-0x2c2),_0x214b31[_0x196354(-0xe4,0x224,0x5b3,0x3bb)]=_0x3832f5(0xa52,0x4d2,0x525,0x99f),_0x214b31[_0x196354(0x524,0xa01,0x8f4,0x4e9)]=_0x3832f5(0x6f3,0x1ef,0x1fb,-0x55),_0x214b31[_0x3832f5(0x8f2,0xb6c,0x9c6,0x96f)]=_0x3832f5(0x5d9,0xded,0x9b5,0xb74),_0x214b31['EZpuy']=_0x196354(0x50c,0x961,0xa65,0x889),_0x214b31[_0x196354(0x69b,0x95e,0xa7b,0x625)]=function(_0x3038ca,_0x3aa1e2){return _0x3038ca<_0x3aa1e2;},_0x214b31[_0x196354(0x821,0xf7,0x911,0x454)]=function(_0x4eafcc,_0xb518d9){return _0x4eafcc+_0xb518d9;};const _0xd9cbd0=_0x214b31;_0x5524fb=_0xd9cbd0[_0x3832f5(0x55b,0x7f2,0xa9c,0xa34)](typeof _0x5524fb,_0xd9cbd0[_0x3832f5(-0x49,-0x14,0x3ef,0x6e8)])?![]:!![];let _0x55aa4a=new Date(_0x306287);_0x5524fb&&(_0x55aa4a=new Date(_0x306287*(-0x15*-0x101+-0x2185+0x20b*0x8)));var _0x341173=[_0xd9cbd0[_0x3832f5(0xa32,0x5d8,0x8b6,0xa3f)],_0xd9cbd0[_0x3832f5(0x93d,0xd94,0x875,0x75f)],_0xd9cbd0[_0x3832f5(0x5c8,-0xe3,0xf4,0x61c)],_0x3832f5(0x369,0x782,0x7cb,0x777),_0xd9cbd0[_0x196354(-0x328,-0x25c,0x5ba,0x6a)],_0xd9cbd0[_0x196354(-0x13d,0xde,0x20,-0xe0)],_0xd9cbd0[_0x196354(0xb90,0x9d9,0x2c1,0x654)],_0xd9cbd0[_0x196354(-0x499,-0x3c,-0x4f3,-0x2e)],_0xd9cbd0[_0x196354(0xb2f,0x9e5,0xa01,0x8e2)],_0x3832f5(0xbb2,0x413,0x7d6,0x626),_0x196354(0x6d6,0x6e2,0xdb,0x551),_0xd9cbd0['XBlLJ']],_0x3f8597=[_0x196354(0x49a,0x301,0x1e5,0x486),_0xd9cbd0[_0x3832f5(-0x165,-0x95,0x276,0x72d)],_0xd9cbd0['KevUU'],_0x3832f5(0x584,-0x92,0x48e,0x8a7),_0xd9cbd0['rdkrj'],_0xd9cbd0['PcBVd'],_0xd9cbd0[_0x3832f5(0xc54,0xd13,0xa38,0xa8f)]],_0x31aa10=_0x55aa4a[_0x3832f5(0x6fb,0x230,0x29e,0x641)]();function _0x3832f5(_0xd25d3c,_0x5707d6,_0x108f02,_0x13e62c){return _0x128a37(_0xd25d3c-0x17c,_0xd25d3c,_0x108f02-0xb2,_0x108f02- -0x431);}bulanee=_0x55aa4a[_0x3832f5(0x930,0x929,0x487,-0x64)]();var _0x44c3cf=_0x55aa4a[_0x3832f5(0x338,0x71f,0x6ce,0x687)](),_0x44c3cf=_0x3f8597[_0x44c3cf],_0x5e5637=_0x55aa4a[_0x196354(0xa96,0x75e,0x339,0x73b)](),_0x5ee552=_0xd9cbd0[_0x196354(0x3bd,0x660,0x5d6,0x625)](_0x5e5637,-0x188b+-0x205e*-0x1+-0x3eb)?_0xd9cbd0[_0x3832f5(0x19d,0x80b,0x68d,0x4ab)](_0x5e5637,0x23a5+-0x1f26+0x7*0x6b):_0x5e5637,_0x33a298=_0x44c3cf+',\x20'+_0x31aa10+_0x196354(-0xa1,-0x331,0x3a6,-0xd6)+_0x341173[bulanee]+'\x20-\x20'+_0x5ee552;return _0x33a298;}teksx=_0x128a37(0x6db,0x174,0x776,0x504)+enter;for(let i of hemm){teksx+=_0x128a37(0x12e4,0xe19,0xdf1,0xf09)+i[_0x128a37(0x9db,0xb70,0xa59,0xa81)][_0x4963f8(0x82b,0x71e,0x4d7,0x890)]('@')[-0x1*0x2007+-0x6*-0x337+-0x43f*-0x3]+enter+_0x4963f8(0x340,0x776,0x685,0xb36)+toTime(i['t'],!![])+enter+('📍\x20Tanggal\x20'+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}teksx1=_0x4963f8(0xe27,0xba9,0xd24,0x1114)+'D*'+enter+enter;for(let i of hemms){teksx1+=_0x4963f8(0xb7d,0xf07,0xe5f,0x1364)+i['jid']['split']('@')[0xdce+0x1e15+-0x2be3*0x1]+enter,teksx1+=_0x128a37(0xb83,0x82a,0x2b9,0x72f)+toTime(i['t'],!![])+enter+(_0x4963f8(0x902,0x953,0xdd5,0x10d4)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}const _0x4c2029={};_0x4c2029[_0x128a37(0x690,0xe4d,0x4d6,0x93f)+'Score']=0x3e7,_0x4c2029[_0x128a37(0xe76,0x8ed,0x658,0xa12)+'d']=!![],_0x4c2029[_0x4963f8(0xabd,0xe9e,0xd64,0x11d7)+'id']=readdin,alpha['sendMessag'+'e'](from,teksx,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs['readFileSy'+'nc'](_0x128a37(0xbdd,0x1105,0x913,0xdb0)+thumbnail),'contextInfo':_0x4c2029});const _0xd26d7f={};_0xd26d7f[_0x4963f8(0xa34,0x5c5,0x895,0x736)+'Score']=0x3e7,_0xd26d7f[_0x128a37(0xbdf,0x96c,0xd7f,0xa12)+'d']=!![],_0xd26d7f[_0x4963f8(0xa34,0xd29,0xd64,0xc71)+'id']=readon,alpha['sendMessag'+'e'](from,teksx1,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x4963f8(0x79a,0xa54,0xb1e,0x72b)+'nc'](_0x4963f8(0x11e9,0x881,0xd06,0xf71)+thumbnail),'contextInfo':_0xd26d7f});}catch(_0x13478d){reply(_0x4963f8(0xd06,0x13f5,0xed1,0xaab)+'n\x20botnya\x20'),reply(_0x13478d),console[_0x128a37(0xa44,0xdfd,0x966,0xa59)](_0x13478d);}await limitAdd(sender,limit);break;case _0x4963f8(0xb12,0xc4e,0xd78,0x952):const _0x3988c8={};_0x3988c8[_0x4963f8(0x743,0xbc6,0xb90,0xbd6)+'t']=_0x128a37(0xcec,0xbac,0xa1d,0xdc2)+'t';const _0x4b9006={};_0x4b9006[_0x4963f8(0xf9f,0x772,0xa74,0x6a4)]=_0x4963f8(0xc9e,0xa58,0xce1,0xd14),_0x4b9006['buttonText']=_0x3988c8,_0x4b9006[_0x4963f8(0xd12,0xc27,0xce9,0x7b0)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x4b9006]);const kta=[_0x128a37(0x308,0xae0,0x38b,0x5dd)+'\x20mengerti\x20'+_0x4963f8(0xc75,0x84a,0x780,0x7d4)+_0x128a37(0x95e,0xaf0,0x865,0xbbf)+_0x128a37(0x685,0xbee,0xb76,0xa1a)+'i.',_0x128a37(0xda3,0xb7a,0x13f1,0xeb7)+'ua\x20pria\x20me'+'mang\x20mampu'+'\x20bertahan\x20'+_0x128a37(0xe5b,0x9cf,0x120c,0xd5d)+_0x128a37(0xc55,0xa71,0x659,0x9f0)+_0x4963f8(0x1044,0xc93,0xcd7,0xce1)+_0x128a37(0xeb4,0x13bf,0xfc1,0xeed)+'ngin\x20mengu'+_0x128a37(0xef2,0x1219,0xb6a,0xcd1)+_0x4963f8(0xde1,0xd0a,0xbf6,0x10be)+_0x128a37(0xdf5,0x10ee,0xd5f,0xde5)+_0x4963f8(0x4d2,0x382,0x7dc,0x8e0)+_0x4963f8(0x8f6,0x232,0x6e0,0x372),_0x4963f8(0x3fa,0x9ef,0x6cb,0xadb)+_0x4963f8(0xcef,0x944,0xdd9,0x9d6)+'\x20kuat\x20dan\x20'+_0x4963f8(0xf23,0xf47,0xc93,0xdf1)+_0x128a37(0x9cc,0x121c,0x10b7,0xd4e)+_0x4963f8(0xa6f,0x5e7,0x590,0x327)+'lam\x20usahan'+'ya.',_0x128a37(0xc74,0x75c,0xcf7,0xa22)+_0x128a37(0x10c7,0x957,0xadc,0xd2d)+_0x4963f8(0xf18,0x869,0xcee,0x9da),'Ilmu\x20penge'+'tahuan\x20tan'+_0x128a37(0xdc8,0x5a9,0xa8f,0xa3d)+_0x4963f8(0xe23,0x837,0x9ff,0x92c)+_0x4963f8(0xd86,0x1126,0xdfc,0x12c3),_0x128a37(0x97c,0xc87,0xde6,0xa0a)+_0x128a37(0x736,0xb96,0x906,0xc52)+_0x128a37(0xd43,0x1149,0x988,0xc10)+_0x128a37(0x8e1,0xcd8,0xfee,0xc32)+_0x128a37(0x571,0x518,0x959,0x81a)+'ng\x20kita\x20ha'+_0x128a37(0xd4c,0xcac,0xb66,0x8a9)+'bergerak.',_0x4963f8(0xfbc,0x1145,0xc3e,0x10e5)+'masa\x20lalu,'+_0x4963f8(0xcbf,0x768,0x85f,0x966)+_0x4963f8(0x2d8,0xa14,0x6be,0xa8f)+_0x128a37(0x311,0x815,0x2bf,0x7ca)+'lebih\x20dari'+'\x20ilusi\x20yan'+_0x4963f8(0xdda,0xba9,0xca1,0xd10)+_0x4963f8(0xb32,0xdc2,0x8ba,0xa16),'Sebuah\x20mej'+'a,\x20sebuah\x20'+_0x4963f8(0xa71,0x5fe,0x835,0xcfb)+_0x128a37(0xe8f,0xbd9,0x1388,0xe9e)+'h,\x20dan\x20seb'+_0x128a37(0xb3f,0x1386,0x13af,0xe67)+_0x4963f8(0x405,0xaca,0x7c3,0x62e)+_0x128a37(0xbd6,0xa86,0xaba,0xc7f)+_0x4963f8(0xf31,0x122c,0xe5b,0xce7)+_0x4963f8(0x1286,0x8b0,0xdd9,0x8a4)+_0x128a37(0xa30,0x886,0xc40,0xc0e)+'sa\x20bahagia'+'?','Belas\x20kasi'+_0x4963f8(0xc66,0xb8d,0xd45,0x1270)+_0x4963f8(0x925,0x131d,0xe04,0xe11)+_0x128a37(0xb1f,0xdf0,0x7d0,0xb97)+_0x4963f8(0x51b,0xeb,0x52e,0x11a)+'h\x20terhadap'+_0x4963f8(0x896,0xb31,0x701,0xa72)+_0x128a37(0xbc5,0x1241,0x1237,0xe50),_0x4963f8(0xb0d,0x4c8,0x5c2,0x437)+_0x4963f8(0x942,0xb15,0xbe6,0xfb9)+'uk\x20mengger'+_0x128a37(0x61b,0x32a,0x9e7,0x57e)+_0x4963f8(0xec,0x455,0x5bd,0x787)+'h\x20memberi\x20'+_0x4963f8(0x219,0x659,0x6a6,0x927)+_0x128a37(0x923,0x896,0x3f1,0x71f)+_0x128a37(0x654,0x912,0xe74,0xb13),'Kita\x20tidak'+_0x128a37(0x12db,0xafd,0xf48,0xf58)+_0x128a37(0x46a,0xb10,0x4ae,0x660)+'mangat.\x20Se'+_0x128a37(0xade,0xb80,0xb2f,0x7f1)+_0x128a37(0x277,0x5dd,0x355,0x7ac)+_0x128a37(0xf65,0xe6a,0x10ff,0xe48)+_0x4963f8(0xf95,0x1075,0xb99,0x891)+_0x4963f8(0x544,0x8ac,0x93c,0x582)+_0x128a37(0x3c2,0x363,0x38c,0x865)+'n\x20berkeing'+'inan\x20untuk'+_0x4963f8(0x17a,0x8ec,0x4ed,0xa03)+_0x128a37(0x98d,0xc4f,0xbb5,0x9cb),_0x4963f8(0x470,0xb66,0x72c,0x826)+_0x4963f8(0x96b,0xb88,0xe8f,0x1325)+_0x4963f8(0xcbe,0xef1,0xdb3,0x1053)+_0x128a37(0xf5f,0xc74,0x97e,0xca2)+_0x128a37(0xdbd,0x101f,0x103e,0xd2a)+'ia.','Saya\x20tidak'+_0x128a37(0x42a,0xc50,0xc6d,0x826)+_0x128a37(0x3,0x24f,0x76d,0x4f1)+_0x4963f8(0x247,0xa50,0x6e4,0x258)+_0x128a37(0x1042,0x110e,0xef3,0xd22)+_0x128a37(0xee7,0x7e6,0x8ef,0xc13)+_0x128a37(0x121c,0x10c0,0xffc,0xdbf)+_0x4963f8(0x70b,0xd80,0xbba,0xfa0)+'i\x20sesuatu\x20'+_0x4963f8(0x53d,0x55d,0x66c,0x136)+'orang.','Apabila\x20se'+_0x128a37(0xc3c,0x906,0x56c,0xa27)+_0x128a37(0xc1b,0x10f2,0x116a,0xdf4)+_0x128a37(0x11c4,0x9c5,0xd25,0xc8a)+'dikit\x20perk'+_0x4963f8(0x6e3,0x263,0x46a,0x372),_0x128a37(0xf5a,0x1077,0xe9b,0xe5e)+'\x20orang\x20yan'+_0x4963f8(0x8e2,0x141,0x4ca,0x296)+_0x4963f8(0x13c,0x526,0x5f5,0x1e6)+_0x128a37(0xf30,0x6d6,0xed9,0xab1)+_0x128a37(0x11b5,0x122e,0xa22,0xd89)+_0x128a37(0xc08,0xef7,0xb45,0xccc)+_0x4963f8(0x67b,0x6c5,0x596,0x9eb)+_0x4963f8(0x999,0x40f,0x6ea,0x87d)+'enjadi\x20kap'+_0x4963f8(0x59d,0xb1c,0x72f,0xbb1)+'bahtera\x20hi'+_0x4963f8(0x10ad,0x1093,0xe41,0x1278),_0x128a37(0xc9a,0x78b,0x733,0xa4d)+_0x128a37(0x1e6,0x694,0x57,0x5a5)+_0x4963f8(0xf12,0xb3e,0xb30,0xb71)+_0x128a37(0xdf7,0x106d,0xd5d,0xf3f)+_0x4963f8(0x3ad,0x937,0x80f,0x2f0)+'arta\x20benda'+'\x20yang\x20diwa'+'risi\x20dari\x20'+_0x128a37(0xa7c,0x84e,0x465,0x6f7)+_0x4963f8(0xb57,0xad9,0x871,0x553),'Yang\x20palin'+_0x4963f8(0x11f7,0x119b,0xd21,0x10b3)+_0x4963f8(0x502,0xf13,0x9cc,0x645)+'idup\x20adala'+_0x4963f8(0xa2f,0xbba,0xe77,0xe5c)+_0x128a37(0x900,0xf2a,0x6b6,0xa19)+_0x4963f8(0xe2c,0x505,0x8e5,0xaa5)+'us.',_0x128a37(0xfdb,0xa2d,0xaf9,0xd78)+_0x4963f8(0x90b,0x78c,0xa3f,0x5f3)+_0x4963f8(0xce0,0x97b,0xd33,0xac5)+_0x128a37(0xe11,0xbd7,0x4ec,0x98a)+_0x4963f8(0x6f9,0xb7b,0xacc,0x597)+'alan\x20untuk'+_0x128a37(0xab5,0x85d,0x66a,0x78d)+_0x4963f8(0x874,0xdbe,0xc59,0xd2f)+'rnah\x20berfi'+'kir\x20jalan\x20'+_0x128a37(0x794,0x2ba,0xb77,0x728)+'utup.',_0x128a37(0x7fc,0x519,0xa7a,0x67d)+_0x4963f8(0x8dd,0x8ea,0x8c6,0x748)+_0x128a37(0x5d3,0x199,0x8f5,0x672)+_0x128a37(0x6f1,0x112a,0xb6b,0xc41)+_0x4963f8(0xf2f,0x8ea,0xa3a,0x7f1)+'.',_0x128a37(0xc45,0x1356,0xd0c,0xee0)+_0x128a37(0x339,0x69d,0x5fe,0x50e)+'enatap\x20mat'+_0x128a37(0xb93,0xb50,0xef6,0xbcd)+_0x128a37(0x8dc,0x40e,0x363,0x7d8)+_0x128a37(0xa60,0x5f3,0x286,0x513)+'sama\x20bersa'+_0x4963f8(0x3ed,0x39f,0x614,0x2e7),_0x128a37(0xa67,0x8ef,0xd0d,0xcf1)+_0x128a37(0x1028,0xa15,0x7f4,0xc8c)+'\x20kita\x20kerj'+'akan\x20berul'+_0x128a37(0xcc5,0x5e4,0x744,0x8b7)+_0x128a37(0x920,0x749,0x9c2,0x5bc)+_0x4963f8(0xb17,0x9d7,0x9e7,0x4d3)+'emerlangan'+_0x4963f8(0x8cc,0xfc0,0xe0e,0xdce)+_0x4963f8(0xb97,0xc5b,0xa7f,0xd73)+'api\x20kebias'+'aan.',_0x4963f8(0x703,0x1022,0xb9b,0xa5e)+_0x128a37(0x97e,0x103b,0xb1e,0xb88)+_0x4963f8(0xfb7,0xe8c,0xe3d,0x1218)+_0x128a37(0xb48,0x9e2,0x103b,0xd76)+_0x128a37(0x563,0xac6,0x8f2,0x5ab)+_0x128a37(0xba0,0x461,0x578,0x828)+'di\x20seperti'+_0x4963f8(0xb8e,0xbec,0xaf1,0x646)+_0x128a37(0x18b,0x32b,0x51f,0x50b)+_0x128a37(0x80f,0xb43,0xc09,0xb00)+_0x4963f8(0x1099,0xa04,0xcb8,0x10be),_0x128a37(0x1027,0xdf4,0xe9e,0xd60)+'bisa\x20membu'+_0x128a37(0x7d3,0xa2e,0xbef,0xb17)+_0x128a37(0x803,0xb34,0x81c,0x73f)+_0x128a37(0xbd4,0x1308,0xb7b,0xeef)+'da\x20akan\x20me'+_0x4963f8(0x105e,0xd4c,0xb13,0xd6a)+'semua\x20cint'+_0x4963f8(0x6fa,0x55f,0x808,0x4b4)+_0x128a37(0x6d0,0x952,0x827,0x7d1)+'.',_0x128a37(0x99b,0x385,0xcc2,0x8be)+_0x128a37(0xbc8,0xb5d,0xb12,0x991)+_0x128a37(0xb24,0x75d,0x473,0x995)+_0x4963f8(0x32d,0x626,0x57c,0x353)+_0x128a37(0x84e,0xb31,0xcc3,0xc44)+_0x128a37(0xd02,0xb7d,0x99a,0xb12)+_0x128a37(0x11a7,0x1099,0x12ac,0xf3a)+_0x4963f8(0xb0f,0x9c1,0xe39,0x111a)+'\x20mungkin.\x20'+_0x4963f8(0xaa0,0xaa8,0x8ec,0x9cc)+'mah\x20Anda\x20m'+_0x4963f8(0x1231,0xb1a,0xdc4,0xbde)+_0x128a37(0x444,0x7e8,0x89d,0x5c6)+_0x128a37(0x6ff,0x5b3,0x946,0x8b6)+_0x128a37(0xa3b,0xf29,0x82b,0xca1),_0x128a37(0xc4e,0xc4b,0xa90,0xb45)+_0x128a37(0x682,0xa6b,0xc70,0x9c4)+_0x128a37(0x1070,0xa33,0x1143,0xc0a)+_0x128a37(0x9b2,0xe6b,0xfa3,0xc43)+_0x4963f8(0x119d,0x91f,0xdeb,0xe1d)+_0x128a37(0x333,0xc21,0xa88,0x755)+'i\x20apapun\x20y'+_0x128a37(0xe2c,0x10e2,0xc2d,0xbc5)+_0x128a37(0xe2f,0xe9c,0x636,0xa46)+'a\x20mengubah'+_0x128a37(0x66d,0x39f,0xc0f,0x8e5)+'n.',_0x128a37(0x8dd,0x4dd,0xcbd,0x950)+_0x4963f8(0x777,0xc05,0xb2c,0xb10)+_0x4963f8(0x29b,0xaa9,0x650,0x653)+_0x4963f8(0x858,0xbb3,0xaee,0x90e)+'n.',_0x128a37(0x11e7,0x10c3,0xc50,0xf15)+_0x128a37(0x6bc,0x84a,0x74b,0xb9c)+'termotivas'+_0x4963f8(0xc51,0x5e5,0x81c,0xbfd)+_0x4963f8(0x5dc,0x24d,0x509,0x5bc)+_0x4963f8(0x10ba,0xb00,0xe5a,0xaa6)+'ukan\x20oleh\x20'+_0x128a37(0xf90,0x1213,0xf89,0xef2)+_0x4963f8(0xb31,0xecf,0xb07,0xce6)+'alahkan\x20or'+_0x128a37(0x8a6,0x994,0x97c,0xd74),_0x4963f8(0xe1d,0xcb6,0xbb5,0xa39)+_0x4963f8(0xcae,0xe6e,0xd4e,0xf69)+_0x128a37(0x1290,0xc24,0x8e9,0xdb3)+_0x128a37(0xed7,0x80e,0x905,0xc30)+_0x128a37(0xc96,0xf8e,0xfed,0xe15)+_0x128a37(0xfe5,0xd24,0x922,0xc14)+_0x128a37(0x57f,0x648,0x444,0x965)+_0x4963f8(0xa85,0xaa7,0x849,0x781)+_0x4963f8(0x567,0xc23,0x7b8,0x388)+'bisa\x20kita\x20'+'berikan.',_0x4963f8(0x8c1,0x486,0x929,0xb39)+'seperti\x20ha'+_0x128a37(0x6f6,0x81c,0xc80,0x8cd)+',\x20berkobar'+_0x4963f8(0x8d1,0x7ce,0xb27,0xda0)+_0x128a37(0xb44,0xfce,0xce9,0xbde)+'l.',_0x4963f8(0xfac,0xe70,0xd1a,0xba1)+_0x128a37(0x409,0x2a5,0xfd,0x52d)+_0x128a37(0x818,0xf3f,0xc57,0xc05)+_0x128a37(0x3f7,0xa8a,0x765,0x5a8)+_0x128a37(0xa28,0xcd3,0x60f,0x9fe),'Satu\x20jam\x20y'+'ang\x20intens'+'if,\x20jauh\x20l'+_0x4963f8(0xeb1,0x751,0xc8f,0xf2d)+'dan\x20mengun'+_0x128a37(0xa92,0xda3,0x10bb,0xc25)+_0x128a37(0x724,0x5d7,0x3ac,0x699)+_0x4963f8(0x5e1,0x653,0x827,0x9df)+'n\x20bermimpi'+_0x4963f8(0xd19,0xc96,0xaae,0xf02)+_0x128a37(0x70b,0xb3d,0x5e2,0x8d7)+'.',_0x128a37(0xb40,0xb43,0x97c,0x896)+_0x4963f8(0xc16,0xb37,0x81f,0xcec)+_0x128a37(0xd23,0xc00,0xdf8,0xb64)+_0x128a37(0x89f,0xfb4,0xd8e,0xb6b)+_0x128a37(0x917,0x3f5,0x8f2,0x92e)+'n\x20bukanlah'+'\x20membagika'+_0x128a37(0x142e,0xfa5,0x108b,0xf01)+_0x128a37(0xd9e,0xa49,0xc75,0xbea)+_0x4963f8(0xb42,0x9cb,0x78b,0x6d8)+_0x128a37(0xc27,0x620,0xb16,0x86f)+'uk\x20memilik'+_0x128a37(0xf14,0xa58,0xc23,0xf4f)+'nya\x20sendir'+'i.',_0x4963f8(0x8e0,0x82b,0x4b3,0x1be)+_0x4963f8(0x789,0x40f,0x65c,0x293)+_0x128a37(0xa87,0xf1d,0xa72,0xc4b)+',\x20tetapi\x20t'+_0x128a37(0xbb0,0x949,0xb02,0xbc6)+_0x4963f8(0x632,0x625,0x9ce,0xc83)+_0x128a37(0x1df,0x382,0x630,0x5b0)+_0x4963f8(0x7e8,0x2c8,0x4cb,-0x70),_0x4963f8(0xa8e,0x9b8,0xda5,0xd4c)+_0x128a37(0xeec,0x9cc,0xf28,0xb8e)+_0x128a37(0xd7f,0x10de,0x1181,0xf5f)+_0x128a37(0x11b9,0x8fc,0x1163,0xd14)+'i\x20kunci\x20me'+_0x4963f8(0x72c,0xd47,0x9d3,0xa99)+_0x4963f8(0xca9,0x10c9,0xe79,0xaee)+_0x4963f8(0xd9a,0x6b3,0xbe7,0xb47)+_0x4963f8(0xe18,0xa58,0x9a2,0xe05)+_0x128a37(0x46e,-0x32,0xb4,0x4df)+_0x4963f8(0xc44,0xed6,0xabb,0xc0b)],su=kta[Math['floor'](Math['random']()*kta['length'])],_0x36ae19={};_0x36ae19[_0x4963f8(0x697,0x69a,0xb90,0x1085)+'t']=_0x4963f8(0x2b2,0xa92,0x791,0xa66);const _0x4ba125={};_0x4ba125[_0x4963f8(0x72d,0xd94,0xa74,0x589)]=_0x128a37(0xe99,0xfdf,0x12de,0xedc),_0x4ba125[_0x128a37(0x629,0x449,0x801,0x76e)]=_0x36ae19,_0x4ba125[_0x4963f8(0xd42,0xd46,0xce9,0x1010)]=0x1;const _0x1d0666={};_0x1d0666[_0x128a37(0xf02,0x967,0xa41,0xc3a)+'t']='Next\x20➡️';const _0x709002={};_0x709002[_0x4963f8(0xb17,0xb20,0xa74,0xde9)]=''+command,_0x709002[_0x128a37(0x50f,0x5b2,0xb40,0x76e)]=_0x1d0666,_0x709002['type']=0x1;var buttonns=[_0x4ba125,_0x709002];buttonMessage={'contentText':su,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+_0x4963f8(0xfed,0x958,0xe70,0xf1d)+_0x4963f8(0xaa8,0xb9b,0xc9e,0x9b5))+enter+_0x4963f8(0x4e8,0xa79,0x9c1,0xaf7)+sender[_0x4963f8(0x41,0x7ac,0x4d7,0x7a2)]('@')[0x105e+0x45*0x39+-0x1fbb],'buttons':buttonns,'headerType':0x1};const _0x5ea884={};_0x5ea884[_0x4963f8(0x8d6,0xa1b,0x529,0x691)]='hi',_0x5ea884['forwarding'+_0x4963f8(0x10f5,0xc47,0xe1e,0x100d)]=0x3b9aca00,_0x5ea884[_0x4963f8(0xd7b,0x569,0x968,0x95f)+'d']=!![],_0x5ea884[_0x128a37(0x1121,0x116c,0xc36,0xf30)+_0x128a37(0x80f,0xa72,0x1d1,0x54c)]=!![],_0x5ea884[_0x4963f8(0xbe2,0xa67,0xd64,0xdb4)+'id']=[sender];const _0x30236e={};_0x30236e[_0x4963f8(0xdde,0xca5,0xe33,0xcec)]=_0x128a37(0x818,0x4ee,0x75d,0x879)+'21',_0x30236e['contextInf'+'o']=_0x5ea884,_0x30236e[_0x128a37(0xebb,0xf37,0x576,0xa6d)]=ftoko,_0x30236e[_0x128a37(0x1142,0xf33,0x1428,0xf30)+'ral']=!![],alpha[_0x4963f8(0xb78,0x1075,0xc4f,0x10cd)+'e'](from,buttonMessage,MessageType[_0x4963f8(0xa7c,0xb8e,0x77d,0x323)+_0x128a37(0x10de,0x1108,0x93a,0xcdd)],_0x30236e),await limitAdd(sender,limit);break;case'dare':const _0x53d745={};_0x53d745[_0x4963f8(0xd2a,0xd18,0xb90,0xfe6)+'t']=_0x128a37(0x8e8,0x10e1,0x1090,0xdc2)+'t';const _0x453aa5={};_0x453aa5[_0x4963f8(0x569,0x9a5,0xa74,0xdbe)]=_0x4963f8(0x817,0xf9d,0xce1,0x1001),_0x453aa5[_0x128a37(0xa7a,0xa77,0x8f1,0x76e)]=_0x53d745,_0x453aa5[_0x4963f8(0xd59,0x9f9,0xce9,0x1094)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x1237,0xab6,0xfba,0xd8b)](prefix),'©\x20'+ownername,[_0x453aa5]);const dare=[_0x128a37(0xa36,0xdc6,0xb30,0xb35)+_0x4963f8(0x2cc,0x8e6,0x608,0x7ce)+_0x4963f8(0x819,0xcee,0xa2b,0xf7b)+'\x20bilang\x20\x22a'+_0x128a37(0x100b,0x671,0xf0c,0xb9f)+_0x128a37(0x35d,0x2fe,0x1e2,0x696)+_0x128a37(0x263,0x470,0x219,0x591),'telfon\x20cru'+_0x128a37(0xd62,0x9d4,0xacd,0xbaa)+_0x128a37(0x76b,0xd9c,0x498,0x854)+_0x4963f8(0xea9,0xfa6,0xc40,0xcaa)+_0x4963f8(0x109c,0x11db,0xe37,0x9fb),'pap\x20ke\x20sal'+_0x128a37(0xd93,0xd56,0x114d,0xd0d)+_0x128a37(0xd6d,0x114e,0x1087,0xce3),'Bilang\x20\x22KA'+_0x128a37(0x52a,0xde8,0xb4b,0x960)+_0x4963f8(0x4a9,0xb9e,0x953,0x96e)+_0x4963f8(0x763,0x779,0x95c,0x927)+_0x4963f8(0x112f,0xc09,0xda9,0xac7),'ss\x20recent\x20'+'call\x20whats'+_0x128a37(0x932,0x810,0xa38,0xaa7),_0x128a37(0x865,0x145,0xaac,0x618)+_0x4963f8(0x3f7,0x2f8,0x7a2,0x2c2)+_0x128a37(0xe4a,0x11ca,0x12a8,0xf46)+'c/pc\x20selam'+_0x4963f8(0xff3,0x101f,0xb4b,0xba4),_0x128a37(0xbc6,0x902,0x9f8,0x78b)+_0x128a37(0xab3,0xe52,0xdfc,0xbe4)+'ang\x20can\x20i\x20'+_0x128a37(0xa86,0x339,0x4f4,0x553)+'y?',_0x128a37(0x80a,0xc41,0xf61,0xc02)+_0x4963f8(0xa76,0xcce,0xa10,0x9bb)+_0x128a37(0x1239,0xe7d,0xb00,0xe12)+'\x20tag\x20membe'+_0x128a37(0xd02,0x911,0xdf0,0xe1d)+_0x128a37(0x8e7,0xb56,0x1243,0xcfe)+_0x4963f8(0xb06,0x867,0x8d2,0x842),_0x4963f8(0xde2,0x95a,0xab9,0x8f1)+'sule\x20sampe'+_0x128a37(0x7f9,0xcb5,0x96f,0xd42),'ketik\x20pake'+_0x128a37(0x7bb,0x588,0x33b,0x55e)+_0x4963f8(0x6e1,0x85d,0x49c,0x4cc)+'m',_0x4963f8(0x110f,0x93c,0xc7e,0xd68)+'\x20menjadi\x20\x22'+'gue\x20anak\x20l'+_0x4963f8(0xa52,0x94,0x560,0x510)+_0x128a37(0x975,0xbdd,0x586,0x8ef)+'5\x20jam',_0x128a37(0x591,0x57b,0x2bb,0x61e)+_0x4963f8(0xadf,0x821,0xc7b,0xcba)+'utan\x20sesua'+_0x128a37(0x176,0x20c,0x9f9,0x641)+'amu,\x20terus'+_0x128a37(0xbec,0xd20,0x5bb,0xa89)+_0x4963f8(0x1b1,0x1b4,0x643,0x44f)+_0x4963f8(0xdc5,0xd62,0xd50,0x10e9)+_0x128a37(0xc33,0x9cb,0x6ed,0x8c4),_0x128a37(0xcc2,0xe33,0xcb1,0xebd)+'\x20mantan\x20da'+_0x4963f8(0x81d,0x913,0x9b3,0x5a7)+'\x20i\x20love\x20u,'+_0x128a37(0x50,0x435,0x673,0x565)+'an',_0x4963f8(0xa4a,0x393,0x7e5,0x5ee)+_0x128a37(0x660,0xa31,0x80b,0x89a)+'rah\x20al-kau'+_0x4963f8(0x685,0xaf6,0xa1a,0xc7b),_0x128a37(0x7bb,0xd9f,0x757,0xa28)+_0x128a37(0x983,0xb2d,0x991,0x636)+_0x4963f8(0x996,0x685,0x54c,0x900)+_0x4963f8(0x120f,0x11e0,0xd28,0xbe8)+_0x4963f8(0xad3,0xfab,0xb8a,0x10c3)+_0x4963f8(0x829,0x20d,0x6c3,0xa72)+_0x128a37(0xaf1,0x341,0x672,0x73b)+_0x128a37(0xe2b,0xdf7,0x998,0xd19)+_0x128a37(0x97f,0xddb,0xe5e,0xb86)+_0x4963f8(0xe63,0x6df,0xa5c,0xf14)+_0x128a37(0xef9,0xb16,0xa4f,0xad3)+_0x128a37(0x11a4,0x98a,0xd58,0xe98)+_0x128a37(0x450,0xb55,0x411,0x880)+_0x4963f8(0x650,0x995,0x9f0,0x51b)+_0x4963f8(0x6b2,0x8ee,0x9ea,0xbe1)+_0x128a37(0x612,0x9c3,0x35b,0x5be),_0x4963f8(0xd34,0xba6,0x9b8,0xc68)+_0x128a37(0x173,0x652,0x373,0x580)+_0x128a37(0xadf,0x1103,0xfc6,0xebc),_0x128a37(0xb84,0x897,0x951,0x90f)+'foto\x20pacar'+'/crush',_0x128a37(0xbec,0x569,0xabf,0x95e)+_0x4963f8(0xc6a,0x54c,0x7de,0xacb)+_0x4963f8(0x49a,0x632,0x9cf,0xd41)+_0x4963f8(0x9ac,0x379,0x740,0x221),'pap\x20mukamu'+'\x20lalu\x20kiri'+_0x128a37(0x485,0xce9,0x3b4,0x818)+_0x128a37(0xd06,0x5d3,0xa99,0x8ea)+'nmu',_0x4963f8(0x474,0x965,0x454,-0x72)+_0x4963f8(0x5d6,0x40c,0x761,0xbea)+_0x4963f8(0x994,0x6df,0x959,0x69d)+_0x4963f8(0xa99,0xda3,0x92a,0x96c)+_0x4963f8(0xd81,0x68a,0x8cd,0xba8),'teriak\x20pak'+'e\x20kata\x20kas'+_0x128a37(0x9a5,0x42f,0x7b3,0x8db)+_0x4963f8(0xbe3,0x124b,0xd96,0xc2f)+_0x4963f8(0xf54,0x1323,0xecf,0xf23),_0x128a37(0x86d,0x910,0x23c,0x6f8)+_0x128a37(0x482,0x9f4,0x407,0x82c)+_0x4963f8(0xf38,0xe6e,0xebe,0xea6)+_0x128a37(0xa28,0x9ab,0x299,0x635)+_0x128a37(0x1159,0x9cc,0xafb,0xe4b),'ganti\x20nama'+_0x128a37(0x1204,0xe5a,0x115c,0xda2)+_0x128a37(0x805,0x495,0xb5f,0x779)+_0x4963f8(0x91b,0x6df,0x659,0x1ca),'Pura\x20pura\x20'+'kerasukan,'+'\x20contoh\x20:\x20'+_0x4963f8(0xb70,0xdee,0x973,0x88e)+_0x128a37(0xb09,0x7ce,0xc34,0x895)+_0x128a37(0xad0,0xd47,0xb9e,0x868)+_0x4963f8(0x5cb,0x9b1,0x89b,0x3da)+'asukan\x20kul'+'kas,\x20dll'],der=dare[Math['floor'](Math['random']()*dare[_0x128a37(0x41a,0x6a0,0x975,0x78c)])],_0xeae45={};_0xeae45[_0x128a37(0x10cd,0x1031,0x1034,0xc3a)+'t']=_0x128a37(0x89d,0xcf4,0x649,0x83b);const _0x37899b={};_0x37899b[_0x4963f8(0x544,0xb03,0xa74,0x687)]=_0x4963f8(0xb96,0xbb2,0xe32,0x113d),_0x37899b[_0x128a37(0xbda,0xa3d,0x9f5,0x76e)]=_0xeae45,_0x37899b[_0x4963f8(0x965,0xee2,0xce9,0xb23)]=0x1;const _0x3dbda2={};_0x3dbda2[_0x128a37(0xb06,0x8d4,0x8fd,0xc3a)+'t']=_0x128a37(0xa69,0x774,0x662,0xa53);const _0x93ee64={};_0x93ee64[_0x4963f8(0xf6d,0x560,0xa74,0x706)]=''+command,_0x93ee64[_0x4963f8(0x32c,0x69c,0x6c4,0x59b)]=_0x3dbda2,_0x93ee64[_0x128a37(0x907,0xa9b,0xb56,0xd93)]=0x1;var buttonns=[_0x37899b,_0x93ee64];buttonMessage={'contentText':der,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x128a37(0x4b6,0xbe2,0xbe5,0x7db)+_0x128a37(0xc47,0x102c,0xe60,0xf1a)+'s\x20💞')+enter+_0x4963f8(0x4bb,0xbbc,0x9c1,0x641)+sender[_0x128a37(0x71c,0x9c0,0xa28,0x581)]('@')[-0x6*-0xc7+-0x1347+0xe9d*0x1],'buttons':buttonns,'headerType':0x1};const _0x3e5473={};_0x3e5473[_0x4963f8(0x7db,0x4a8,0x529,0x4ca)]='hi',_0x3e5473['forwarding'+_0x128a37(0x1291,0xa76,0x132e,0xec8)]=0x3b9aca00,_0x3e5473[_0x128a37(0xa02,0x759,0xd82,0xa12)+'d']=!![],_0x3e5473[_0x4963f8(0x10cf,0xc1b,0xe86,0xda4)+'ral']=!![],_0x3e5473[_0x4963f8(0xd98,0xfff,0xd64,0xa06)+'id']=[sender];const _0x2fd684={};_0x2fd684[_0x4963f8(0xf58,0x11d9,0xe33,0xfa5)]=_0x4963f8(0xba9,0xbb4,0x7cf,0x945)+'21',_0x2fd684[_0x4963f8(0x98d,0x8ee,0x8cf,0xc78)+'o']=_0x3e5473,_0x2fd684[_0x128a37(0xab8,0xede,0xa4b,0xa6d)]=ftoko,_0x2fd684[_0x128a37(0x1448,0xb73,0xdb3,0xf30)+'ral']=!![],alpha[_0x4963f8(0xde0,0x8a1,0xc4f,0x897)+'e'](from,buttonMessage,MessageType['buttonsMes'+_0x4963f8(0xca0,0x808,0xc33,0xac7)],_0x2fd684),await limitAdd(sender,limit);break;case _0x4963f8(0xef7,0xcde,0xe1d,0xead):const _0x22ef43={};_0x22ef43[_0x4963f8(0xbae,0xa4c,0xb90,0xbb6)+'t']=_0x128a37(0xb60,0xd1f,0xf67,0xdc2)+'t';const _0x25a35e={};_0x25a35e[_0x4963f8(0x815,0x753,0xa74,0x718)]=_0x128a37(0xa9a,0x91f,0x867,0xd8b),_0x25a35e[_0x128a37(0x31b,0x701,0x776,0x76e)]=_0x22ef43,_0x25a35e[_0x128a37(0xd4f,0xcdc,0x9bf,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x826,0xaef,0xce1,0xe04)](prefix),'©\x20'+ownername,[_0x25a35e]);const trut=['Pernah\x20suk'+_0x128a37(0x85d,0xc53,0xa44,0x83c)+_0x128a37(0xf26,0xe05,0xaf4,0xf59)+_0x4963f8(0x478,0x896,0x77b,0x273),_0x4963f8(0xb19,0xa90,0x8ab,0x4f6)+_0x128a37(0x943,0x5fb,0x1d5,0x715)+'au\x20mau,\x20di'+_0x4963f8(0xb4f,0x971,0xb18,0xde4)+_0x128a37(0xd40,0xfe4,0x7ec,0xb27)+_0x128a37(0x1aa,0x967,0x437,0x6c8)+_0x128a37(0xf01,0x6ab,0x8a3,0xb39)+_0x4963f8(0x610,0x3b5,0x591,0x3fa)+_0x4963f8(0x5a0,0xca1,0x907,0x8ab)+'/sma\x20jenis'+')',_0x128a37(0xb22,0xa1f,0x96e,0xdaf)+_0x128a37(0xe0b,0x6c0,0x7f7,0xb2d)+_0x4963f8(0xeca,0x8ce,0xb3f,0x97a),_0x128a37(0x1106,0x1209,0x1197,0xe16)+_0x4963f8(0xcd1,0xbd9,0xcc8,0x11b3)+_0x128a37(0x950,0xa27,0xbbc,0xb4c)+_0x128a37(0xb65,0x142a,0xd04,0xf2d)+_0x4963f8(0xb75,0xc9b,0xcc1,0xbfc)+_0x4963f8(0xf22,0xd31,0xa7b,0xc49)+'uga?','Siapa\x20nama'+_0x128a37(0x92f,0x1185,0x11f2,0xcba)+_0x128a37(0xb63,0x51a,0x35e,0x747)+_0x4963f8(0x78a,0xf4b,0xad0,0x6f0)+_0x128a37(0xbf9,0x952,0xd0f,0xdc5)+_0x128a37(0x114c,0x1363,0x11db,0xef7)+'\x20diam?',_0x4963f8(0x824,0x852,0x963,0x472)+'\x20nyuri\x20uan'+_0x4963f8(0x11ab,0xe99,0xe97,0xd81)+_0x128a37(0x74e,0x8b2,0xf18,0xc08)+'\x20Alesanya?',_0x4963f8(0x6bf,0x65b,0x5ea,0x152)+_0x128a37(0x91f,0x7f5,0xbae,0x8c0)+_0x4963f8(0x3ce,0x617,0x492,0x98a)+'agi\x20sedih\x20'+_0x128a37(0x550,0x12a,0x762,0x649),_0x4963f8(0xcd4,0xeca,0xe6d,0x1367)+_0x128a37(0x753,0xbe4,0x8d0,0x6dc)+_0x4963f8(0x866,0x54a,0x517,0x398)+_0x128a37(0x7f4,0x9e5,0x800,0x67f)+_0x4963f8(0x233,0x54c,0x4e4,0x3bb)+_0x4963f8(0xa36,0xf9b,0xb9c,0xfa0)+_0x128a37(0xbda,0x429,0xb5d,0x911)+_0x128a37(0xb05,0xba4,0x10c5,0xe2b)+'u?','pernah\x20jad'+'i\x20selingku'+_0x4963f8(0x7b8,0x506,0x958,0x8f2),_0x128a37(0x6e8,0xe4d,0x9e9,0xb26)+'aling\x20dita'+_0x4963f8(0xb50,0x9dc,0x80a,0x6c1),_0x4963f8(0xd9d,0xe70,0xaa6,0x6fc)+_0x128a37(0xbf1,0xc17,0xeac,0xc84)+_0x128a37(0x9f4,0x4ed,0xa6a,0xa21)+_0x4963f8(0x8fa,0xddb,0x89f,0xbad)+'da\x20kehidup'+_0x128a37(0x22f,0x7b9,0x42f,0x570),_0x4963f8(0x7bd,0xa2f,0x7bd,0x41a)+_0x4963f8(0x702,0x2c8,0x7f7,0x66f)+_0x128a37(0xb0c,0xbc5,0x1155,0xddb)+_0x4963f8(-0xb2,0x640,0x491,0x2f2)+_0x4963f8(0x960,0x663,0x868,0x48b)+'ni',_0x128a37(0xf85,0xb26,0x109e,0xb50)+_0x4963f8(0xcac,0x76e,0xa2f,0x78c)+'a\x20membuatm'+_0x128a37(0x5b1,0x7ea,0xbd7,0x6ac),_0x4963f8(0x8ad,0xd3c,0xaa6,0xbce)+'g\x20yang\x20per'+_0x4963f8(0x8a5,0x128c,0xdc1,0x127c)+'\x20sange',_0x128a37(0x722,0x82f,0xb0e,0xa68)+_0x128a37(0x810,0xfb0,0x7f0,0xd0e)+_0x4963f8(0x959,0x10e9,0xdf2,0xb44)+_0x128a37(0x48f,0x62d,0x569,0x516)+'?',_0x4963f8(0xb2e,0xd96,0xd04,0xba5)+'\x20paling\x20me'+_0x4963f8(0xca4,0x9ef,0xb56,0x698)+_0x4963f8(0x9fe,0x4d,0x4de,0x69)+_0x128a37(0x625,0x4f7,0xd42,0x9ed)+_0x128a37(0xb7a,0x5d9,0xc8d,0x946),_0x4963f8(0x4e9,0x176,0x45e,0x8a0)+_0x4963f8(0x11f1,0xe13,0xce7,0xcff)+'ng)sama\x20si'+_0x4963f8(0xc68,0x1032,0xc75,0xd7a),'pernah\x20nol'+'ak\x20orang?\x20'+_0x128a37(0x419,0x799,0x9bd,0x92c)+_0x4963f8(0x667,0x751,0x833,0x465),_0x4963f8(0x880,0x823,0x54d,0x28b)+_0x128a37(0x93b,0x31c,0x7a7,0x852)+_0x4963f8(0x13e,0x4e3,0x641,0x706)+_0x4963f8(0xbae,0x8fa,0x805,0x94c)+_0x4963f8(0x12cb,0xa50,0xe00,0x11a6)+_0x128a37(0x5fc,0xafb,0xf2a,0xae2)+_0x4963f8(0x841,0x48d,0x4f1,0x87),_0x4963f8(0x4ad,0x642,0x75c,0x75c)+_0x128a37(0xe56,0x79c,0xc59,0xa0c)+'\x20didapet\x20a'+_0x4963f8(0x701,0xb1e,0xbe9,0x1125)+'ahun\x20ini?',_0x128a37(0x1107,0x86f,0x10ec,0xdbe)+_0x4963f8(0xb2a,0x66e,0x887,0xb62)+'o\x20pas\x20di\x20s'+'ekolah\x20apa'+'?'],ttrth=trut[Math['floor'](Math[_0x128a37(0x127b,0xefd,0x1152,0xf0c)]()*trut[_0x128a37(0xa86,0xbac,0x81e,0x78c)])],_0x131cc4={};_0x131cc4[_0x4963f8(0xcc6,0xa3d,0xb90,0x8da)+'t']=_0x128a37(0x8df,0x437,0x6af,0x83b);const _0x45aa47={};_0x45aa47[_0x128a37(0x749,0x72a,0xf75,0xb1e)]='owner',_0x45aa47[_0x4963f8(0xb01,0x385,0x6c4,0x765)]=_0x131cc4,_0x45aa47[_0x128a37(0xdf7,0x1154,0xcc3,0xd93)]=0x1;const _0x342bd8={};_0x342bd8['displayTex'+'t']=_0x4963f8(0x9a3,0xb76,0x9a9,0x5db);const _0x5c0aab={};_0x5c0aab['buttonId']=''+command,_0x5c0aab['buttonText']=_0x342bd8,_0x5c0aab[_0x128a37(0xa99,0xdf9,0xc16,0xd93)]=0x1;var buttonns=[_0x45aa47,_0x5c0aab];buttonMessage={'contentText':ttrth,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x4963f8(0x68d,0xb08,0x731,0x751)+'more\x20quote'+_0x4963f8(0x7f5,0xd58,0xc9e,0xff0))+enter+_0x4963f8(0xe5f,0x611,0x9c1,0x58c)+sender['split']('@')[-0x1710+-0x1135*-0x2+-0xb5a],'buttons':buttonns,'headerType':0x1};const _0x37b36d={};_0x37b36d[_0x4963f8(0x819,0x622,0x529,0x503)]='hi',_0x37b36d[_0x128a37(0x559,0xdee,0xe2c,0x93f)+'Score']=0x3b9aca00,_0x37b36d[_0x4963f8(0xc9b,0xa2e,0x968,0xb53)+'d']=!![],_0x37b36d[_0x4963f8(0xe5e,0xee7,0xe86,0xdbd)+_0x128a37(0xa22,0x272,0x110,0x54c)]=!![],_0x37b36d[_0x4963f8(0x885,0x992,0xd64,0xbe1)+'id']=[sender];const _0x8c46cb={};_0x8c46cb['caption']=_0x128a37(0x97e,0xafc,0x550,0x879)+'21',_0x8c46cb['contextInf'+'o']=_0x37b36d,_0x8c46cb[_0x128a37(0xcca,0x51e,0x557,0xa6d)]=ftoko,_0x8c46cb[_0x128a37(0xfd8,0x1289,0xe4c,0xf30)+_0x128a37(0xa12,0x97f,0x3bb,0x54c)]=!![],alpha['sendMessag'+'e'](from,buttonMessage,MessageType['buttonsMes'+_0x4963f8(0xbbc,0xaea,0xc33,0x1092)],_0x8c46cb),await limitAdd(sender,limit);break;case _0x128a37(0xb64,0xa08,0xa16,0xbfa):const _0x5e3941={};_0x5e3941[_0x128a37(0x999,0xb32,0xfe3,0xc3a)+'t']='Check\x20Limi'+'t';const _0x4cd740={};_0x4cd740['buttonId']='limit',_0x4cd740[_0x128a37(0x971,0xb45,0x3e2,0x76e)]=_0x5e3941,_0x4cd740[_0x128a37(0xe17,0xef1,0x9c5,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x4cd740]);const cc=[_0x128a37(0xbad,0xadd,0xfaa,0xf38)+_0x4963f8(0xac9,0xb44,0xa23,0x89b)+_0x128a37(0xcfb,0xca1,0x1128,0xbee)+'orang\x20yang'+_0x128a37(0xdba,0xca1,0xdb5,0xba8)+'caya\x20diri.'+_0x128a37(0x6ec,0x4a2,0x829,0x943)+_0x4963f8(0xe70,0x9d8,0xa96,0xde2)+_0x4963f8(0x1ae,0x641,0x49b,0x7f1)+_0x4963f8(0x707,0x78f,0xbe4,0x939)+_0x128a37(0xab7,0xce1,0xb52,0xe50),'Aku\x20gak\x20pa'+_0x128a37(0xe4c,0xdfe,0x543,0xa61)+_0x128a37(0x11a7,0x102b,0x124a,0xe8c)+_0x4963f8(0x84f,0xb2b,0x6c6,0x916)+'amu\x20ningga'+_0x128a37(0xa44,0x1270,0x1254,0xd6f)+_0x4963f8(0xa74,0xc13,0xc45,0xf5f)+_0x128a37(0x1231,0xd8e,0xaeb,0xf70)+_0x128a37(0x70b,0xc16,0xdf3,0xb07)+_0x4963f8(0x924,0xcf3,0xc66,0xf46)+'aiumu.','Aku\x20enggak'+_0x128a37(0xedc,0x92e,0xaad,0xc78)+'mburu\x20Mile'+'a.\x20Bisaku\x20'+_0x128a37(0x1053,0xbf9,0x952,0xe6d)+'ntaimu.',_0x4963f8(0x66b,0x70a,0x96c,0x98e)+_0x4963f8(0xca,0x798,0x4c1,0x506)+'emburu\x20itu'+_0x128a37(0x11e2,0x802,0xde0,0xcd2)+_0x4963f8(0xae5,0xb6c,0x7f2,0xa6b)+'tu\x20hubunga'+_0x4963f8(0x9ca,0xcdf,0x8d8,0x725)+_0x128a37(0x1134,0x1189,0xcab,0xf2a)+_0x4963f8(0x1176,0xc47,0xc5c,0xcef)+_0x4963f8(0x6dd,0x5cd,0x9eb,0xf25)+_0x4963f8(0xb37,0x402,0x6d5,0x44b)+_0x4963f8(0xe7c,0xdc1,0xc8d,0xb47)+_0x4963f8(0x116f,0xb2a,0xe7f,0xb2f)+'mburu.',_0x128a37(0xd30,0xd05,0xdb7,0xb38)+_0x4963f8(0x793,0x7d6,0xc71,0xf16)+'kira\x20udah,'+_0x4963f8(0x65d,0x908,0xb2a,0x940)+'adi\x20udah\x20p'+_0x4963f8(0xc4b,0x53d,0x927,0x774)+_0x4963f8(0xe52,0x65d,0xaff,0xe6b)+'saja\x20dapat'+_0x128a37(0xd0d,0x801,0xad2,0xc09)+_0x4963f8(0x1054,0x11e4,0xd7c,0x8a8)+'ndai.',_0x4963f8(0xef8,0x779,0xb31,0x6a4)+_0x128a37(0x19e,0x824,0x70d,0x642)+_0x4963f8(0x364,0x70f,0x6ed,0x451)+_0x4963f8(0x6fb,0x20f,0x70c,0x701)+_0x128a37(0x829,0x647,0x692,0x55a)+_0x128a37(0xf99,0xaf7,0x105d,0xded),_0x4963f8(0x21b,0x7da,0x67d,0x811)+_0x4963f8(0xdef,0xda7,0x8c8,0xcc0)+_0x4963f8(0x838,0xfcc,0xb79,0xb33)+_0x4963f8(0xb8b,0x97c,0xdd8,0x12af)+_0x128a37(0xaf1,0xea4,0x9ca,0xd04)+'ang\x20bohong'+_0x4963f8(0xaf5,0xc1a,0x990,0xc31),_0x4963f8(0x439,0xba7,0x760,0xa85)+_0x4963f8(0xb48,0x8f6,0xae2,0xbdf)+'akan\x20membe'+_0x128a37(0xc9c,0xdc0,0xbc1,0xb1c)+'.\x20Sebab\x20ji'+_0x128a37(0xd1f,0x100a,0xcd7,0xdb8)+_0x128a37(0xa0e,0xed3,0x584,0x9e3)+_0x4963f8(0x3c4,0x955,0x74a,0x59a)+'akan\x20menja'+_0x128a37(0x2fa,0x6f4,0x65b,0x585),_0x4963f8(0x49e,0x2fb,0x4a8,0x19)+_0x4963f8(0xd98,0xcbb,0xd83,0x842)+_0x128a37(0x562,0xa4f,0xafd,0x72c)+_0x4963f8(0x699,0xa75,0x7fc,0x6af)+'dah.\x20Biar.'+'\x20Aku\x20salah'+_0x128a37(0xe41,0xa68,0xb81,0xe04)+'a.',_0x128a37(0xb45,0xa94,0xb23,0x96f)+_0x128a37(0x4a2,0x27d,0x551,0x5c0)+_0x4963f8(0x9c3,0xc9e,0xe08,0xb04)+_0x4963f8(0x534,0xa20,0x863,0xcbc)+_0x128a37(0xf40,0xd03,0xe95,0xb5f)+'ika.\x20Lebih'+_0x4963f8(0x10f1,0x11cf,0xd86,0xb48)+'\x20Fisika.\x20L'+_0x4963f8(0x852,0x8c8,0x66a,0xaff)+_0x4963f8(0xf5a,0xa1a,0xe91,0xcfc)+_0x128a37(0x705,0x94c,0x2e9,0x69e),_0x128a37(0x1f0,0xb17,0x1d8,0x727)+'\x20ninggalin'+_0x128a37(0x4c6,0xa47,0x942,0x655)+_0x128a37(0x950,0xcf9,0x7c3,0xbeb)+_0x4963f8(0x6b2,0x8a2,0x8a8,0x589)+_0x4963f8(0x746,0x606,0x78c,0x8a3)+_0x4963f8(0x410,0x98e,0x6bc,0x75f)+'\x20kamu.\x20Aku'+_0x128a37(0x5f2,0xad4,0xb46,0x7bd)+_0x128a37(0x8bd,0x1017,0x1059,0xce0),_0x128a37(0x56b,0x9f9,0x17a,0x686)+_0x4963f8(0x624,0x49a,0x9b7,0x692)+_0x128a37(0x11a0,0x1360,0x13ac,0xe8c)+_0x4963f8(0x781,0x220,0x6c6,0x7ff)+_0x128a37(0x47d,0x9e6,0x1c4,0x5b4)+_0x128a37(0x11be,0xd9c,0x114c,0xd6f)+_0x4963f8(0xe9f,0x9dd,0xc45,0x73a)+'a\x20apa-apa.'+'\x20Bisaku\x20cu'+'ma\x20mencint'+'aimu.',_0x4963f8(0xf18,0xaad,0xc35,0x755)+'\x20pergi\x20jau'+_0x128a37(0x26f,0x2cd,0x465,0x5a9)+_0x4963f8(0x8da,0x88d,0x6a5,0x3da)+'ku\x20di\x20tubu'+'hmu.',_0x128a37(0x954,0xf14,0xea3,0xaca)+_0x128a37(0xc3f,0xd68,0x1336,0xe73)+_0x128a37(0x460,0x594,0xc82,0x76f)+'\x20yang\x20dulu'+_0x128a37(0x5c6,0x5a5,0xd81,0x9b2)+_0x4963f8(0x6e4,0xe02,0xb6b,0x669)+_0x128a37(0xda4,0xd58,0x4e4,0x8f9)+_0x4963f8(0x56f,0x343,0x4f0,0x8ec)+'an\x20tetap\x20s'+'ama,\x20bersi'+_0x128a37(0x926,0x2df,0x8b4,0x530)+_0x128a37(0x6d1,0x6df,0xd8c,0x848)+_0x128a37(0xf4d,0x142a,0x110e,0xee6),'Bagiku,\x20Ka'+_0x4963f8(0xa9a,0xcc1,0x961,0xb4c)+_0x128a37(0xd66,0x8d7,0xf5e,0xd71)+_0x128a37(0x3f6,0x761,0x267,0x521)+_0x4963f8(0x708,0x1011,0xafb,0x82f)+_0x4963f8(0xbab,0x7a3,0x9bd,0xd6c)+_0x128a37(0x59d,0x9fc,0x469,0x84d)+_0x4963f8(0xa00,0xfcd,0xd72,0x1161)+_0x128a37(0xd03,0x82c,0x994,0x95f)+_0x128a37(0xd4e,0x124c,0xbdb,0xddb)+_0x128a37(0x326,0x71b,0xf3,0x520)+'\x20tetapi\x20ti'+_0x128a37(0xf1c,0xbf9,0xc60,0xda9)+_0x4963f8(0x119a,0x9c4,0xec0,0x1201)+'kan\x20beraki'+_0x4963f8(0x815,0x1e4,0x53a,0x3b7)+_0x4963f8(0x122e,0x7fb,0xd1c,0xa77)],si=cc[Math[_0x4963f8(0x620,0x247,0x48c,0x425)](Math[_0x4963f8(0xbfc,0x1227,0xe62,0xbd8)]()*cc['length'])],_0x264199={};_0x264199[_0x128a37(0xe91,0xbff,0x9af,0xc3a)+'t']=_0x128a37(0x7c0,0x955,0x633,0x83b);const _0x7e55b={};_0x7e55b[_0x4963f8(0xa12,0x84c,0xa74,0xc63)]='owner',_0x7e55b[_0x128a37(0x9ad,0xb5a,0x413,0x76e)]=_0x264199,_0x7e55b[_0x128a37(0xa2b,0xa08,0x1247,0xd93)]=0x1;const _0x192ea7={};_0x192ea7[_0x4963f8(0x6ad,0xd6a,0xb90,0xc9d)+'t']=_0x128a37(0xe85,0x601,0x512,0xa53);const _0x1baa01={};_0x1baa01[_0x128a37(0xfd4,0x712,0x1069,0xb1e)]=''+command,_0x1baa01[_0x4963f8(0x544,0x6b5,0x6c4,0x512)]=_0x192ea7,_0x1baa01[_0x128a37(0x924,0x1273,0xc95,0xd93)]=0x1;var buttonns=[_0x7e55b,_0x1baa01];buttonMessage={'contentText':si,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x4963f8(0x53e,0x718,0x731,0xad7)+_0x128a37(0x120b,0x1429,0xe95,0xf1a)+'s\x20💞')+enter+_0x4963f8(0x622,0x7c7,0x9c1,0x6bb)+sender[_0x128a37(0x38c,0x4a2,0x58d,0x581)]('@')[0xea+0x26d1+-0x5ad*0x7],'buttons':buttonns,'headerType':0x1};const _0x12ee98={};_0x12ee98[_0x128a37(0xb0c,0x6b9,0x195,0x5d3)]='hi',_0x12ee98[_0x4963f8(0xb09,0x3d1,0x895,0x6e5)+_0x128a37(0xea9,0xa69,0x9df,0xec8)]=0x3b9aca00,_0x12ee98[_0x128a37(0xef2,0xded,0xb95,0xa12)+'d']=!![],_0x12ee98[_0x128a37(0x13ec,0xd7b,0xd87,0xf30)+'ral']=!![],_0x12ee98[_0x128a37(0xdcd,0xbc8,0x943,0xe0e)+'id']=[sender];const _0xdcefb3={};_0xdcefb3[_0x128a37(0x111e,0xe81,0xf5b,0xedd)]='Botwea\x20©2k'+'21',_0xdcefb3[_0x4963f8(0x907,0x661,0x8cf,0xcc6)+'o']=_0x12ee98,_0xdcefb3[_0x128a37(0xafa,0x58a,0xa0a,0xa6d)]=ftoko,_0xdcefb3[_0x4963f8(0x950,0x125a,0xe86,0x125e)+'ral']=!![],alpha[_0x4963f8(0xb29,0x1125,0xc4f,0x116f)+'e'](from,buttonMessage,MessageType[_0x4963f8(0x890,0x4f4,0x77d,0x8a0)+_0x128a37(0xff4,0xe91,0x808,0xcdd)],_0xdcefb3),await limitAdd(sender,limit);break;case _0x4963f8(0xae0,0xaa6,0xbdd,0xfc8)+_0x128a37(0x61c,0x38a,0x3d0,0x759):const _0x4953bd={};_0x4953bd[_0x128a37(0xf56,0xb5c,0xcc2,0xc3a)+'t']=_0x4963f8(0xc33,0x9ca,0xd18,0x11eb)+'t';const _0x24a8de={};_0x24a8de['buttonId']=_0x4963f8(0xe46,0xa01,0xce1,0x1032),_0x24a8de[_0x128a37(0x623,0x528,0xc64,0x76e)]=_0x4953bd,_0x24a8de[_0x4963f8(0x1205,0xac7,0xce9,0xac9)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xcb1,0xa53,0x1186,0xd8b)](prefix),'©\x20'+ownername,[_0x24a8de]);const kata_lucu=[_0x4963f8(0x10bf,0x91a,0xde6,0x1164)+'aksana\x20tid'+_0x4963f8(0x13e,0x61d,0x4a4,0x3eb)+_0x128a37(0xb50,0xccd,0xa09,0xbab)+_0x4963f8(0xcde,0x984,0xd2d,0xe36)+_0x128a37(0xef4,0xd4f,0xc5d,0xc6f)+'di\x20bijak\x20s'+_0x128a37(0x66d,0xd81,0x743,0xae3)+_0x128a37(0x246,0x7a5,0x801,0x736),'“Kegagalan'+'\x20adalah\x20ke'+'suksesan\x20y'+_0x128a37(0x7c6,0x89d,0xc12,0x9ec)+_0x4963f8(0x7d7,0xe8f,0xca2,0xb94)+_0x128a37(0x1057,0x11c0,0xcf0,0xdc3)+_0x128a37(0xbc2,0x46e,0xba0,0x7e5)+'\x20yang\x20tert'+'unda.”',_0x4963f8(0x803,0x89,0x4ec,0x833)+'i\x20memegang'+_0x4963f8(0x7cc,0x576,0x47e,0x39d)+'api\x20apa\x20da'+_0x4963f8(0x7c1,0xa8e,0xc2b,0xa50)+_0x128a37(0x10f7,0xa3f,0x11e9,0xce9),_0x4963f8(0x3cc,0x882,0x616,0xa83)+_0x128a37(0x875,0xa58,0x862,0xb6e)+_0x128a37(0x451,0x251,0xc97,0x782)+'t\x20di\x20dunia'+_0x128a37(0x916,0x6ca,0x981,0xb79)+_0x128a37(0x3e3,0x4f2,0x5be,0x708)+'rat\x20apapun'+_0x4963f8(0x788,0x692,0x452,0x829)+_0x128a37(0x673,0x609,0x9ac,0xb22)+_0x4963f8(0x4df,0xa75,0x5f0,0x53f)+_0x128a37(0x29,0x1cd,0xdd,0x569)+_0x4963f8(0x6b4,0xb79,0xb2d,0xcc1),_0x128a37(0x85c,0xe1c,0xcf0,0xc20)+_0x4963f8(0xc69,0x9e8,0x916,0x9a5)+_0x128a37(0x422,0xaa8,0x662,0x753)+'isa\x20makan\x20'+'karena\x20mer'+_0x128a37(0xdec,0xae7,0xa0e,0xa8e)+_0x4963f8(0x967,0xa44,0xd40,0xfdd)+_0x128a37(0x9d7,0xaf6,0x1041,0xf0d)+_0x128a37(0xdad,0xd12,0x134c,0xf2f)+'karena\x20mem'+_0x128a37(0x4be,0xa1e,0x518,0x853)+_0x4963f8(0x1a3,0x4d8,0x633,0x6c4)+'lamnya\x20aku'+'\x20tidak\x20bis'+'a\x20tidur\x20ka'+_0x128a37(0xd68,0xc04,0x95d,0xbc9)+'aran.”',_0x128a37(0xef5,0xc45,0xb7c,0xc4d)+_0x4963f8(0xee4,0x123d,0xe8b,0x129d)+_0x128a37(0x439,0x522,0x6d3,0x86a)+_0x4963f8(0xcb6,0x11e4,0xe6f,0x1360)+'an,\x20dan\x20ji'+_0x128a37(0xb8e,0x6c8,0xc72,0x87d)+_0x4963f8(0xd73,0xf3a,0xd1f,0x10c9)+'\x20sampai\x20sa'+_0x4963f8(0xb11,0x90f,0xd88,0xa4f)+_0x4963f8(0xde7,0x9c8,0xb4c,0x853)+_0x4963f8(0x797,0x979,0x580,0x699)+_0x128a37(0x54b,0xfcd,0xc49,0xa83)+'aat\x20masih\x20'+_0x128a37(0x1082,0x1059,0x138a,0xefc),'“Kesuksesa'+'n\x20itu\x20bera'+_0x128a37(0x10b7,0xbce,0x9c0,0xe51)+_0x4963f8(0x6f3,0x1033,0xb74,0xa00)+_0x128a37(0x405,0x950,0x77b,0x722)+_0x4963f8(0xb6b,0xc24,0x945,0xa81)+_0x128a37(0xc1e,0xd30,0xa82,0x9e5)+_0x4963f8(0xfec,0x948,0xb02,0x77b)+_0x128a37(0xc74,0xad8,0xb6f,0x83f)+'kamu\x20semua'+_0x4963f8(0x727,0xafa,0x87e,0x715)+_0x128a37(0xe67,0xa26,0x690,0xb14)+_0x4963f8(0x111c,0x9fe,0xc8f,0xd9b)+_0x4963f8(0x3a2,0x5ce,0x8ad,0x4ef)+_0x4963f8(0x96d,0x9f6,0x90e,0x8cc)+'ga”','“Wanita\x20ya'+_0x128a37(0x977,0x109f,0xbac,0xdd8)+_0x128a37(0xc57,0xd8b,0x838,0xcb8)+_0x128a37(0x946,0xb56,0x8d5,0xdba)+_0x4963f8(0x759,0x1076,0xc4e,0xf4d)+_0x4963f8(0x115e,0x1323,0xeb9,0x10dd)+_0x128a37(0xf21,0x9c3,0x10c8,0xcc7)+'menyenangk'+'an,\x20namun\x20'+_0x128a37(0xdea,0x12d0,0xb83,0xdcf)+_0x4963f8(0x99a,0x605,0x92b,0xa5b)+_0x128a37(0xdbe,0x900,0x8d0,0xa2e),_0x4963f8(0x899,0x805,0xcd0,0xacc)+_0x4963f8(0x520,0x3ab,0x465,0x20a)+'ehat,\x20terd'+_0x128a37(0x8ba,0x418,0x543,0x7e0)+_0x128a37(0x810,0xad3,0xa8d,0x5d6)+_0x4963f8(0xa87,0xefb,0xdad,0xe7c),_0x128a37(0x12b5,0xd78,0x97d,0xec0)+_0x4963f8(0xdd1,0x6a9,0xb49,0xde8)+_0x128a37(0xe6d,0x8ee,0xb14,0xa96)+'ngan\x20sampa'+_0x4963f8(0x883,0x1e1,0x518,0x444)+_0x4963f8(0x4f4,0x5a3,0x628,0x20c),_0x4963f8(0x88,0x5ee,0x584,0x3d9)+_0x4963f8(0x87e,0x815,0x76f,0x870)+_0x128a37(0xda4,0xd24,0x718,0xc26)+_0x4963f8(0x777,0x4a0,0x554,0x755)+_0x128a37(0x1353,0xcb8,0x1248,0xe05)+'a.”',_0x4963f8(0x96f,0x789,0x481,0x312)+_0x4963f8(0x1009,0xa38,0xe60,0x10ee)+'mewujudkan'+_0x4963f8(0x419,0xb18,0x5dd,0x471)+_0x4963f8(0xd92,0xe81,0xdb1,0xe8d)+_0x4963f8(0xb67,0x122e,0xd13,0xf38)+'idur.”\x20–\x20P'+_0x128a37(0x105a,0xe92,0xf4a,0xee9),_0x128a37(0xdef,0xb16,0x7aa,0x9cf)+_0x128a37(0xd67,0xcd4,0x995,0xba4)+'\x20itu\x20kunin'+_0x128a37(0x1349,0xae9,0xb4d,0xe3b)+_0x4963f8(0x4cd,0x6f2,0x7cc,0x57a)+_0x128a37(0x91d,0xb2a,0xdcb,0xe1a)+_0x128a37(0xb19,0xc29,0x99f,0x85a)+'t.”',_0x128a37(0x231,0x796,0xc52,0x71d)+_0x128a37(0x77a,0x7c7,0x7b0,0xb59)+'kesuksesan'+',\x20maka\x20tem'+_0x4963f8(0x885,0x9aa,0x500,0x231)+_0x4963f8(0x98e,0x852,0xb77,0x744)+_0x128a37(0x477,0x429,0xdf2,0x901)+_0x4963f8(0xc21,0x12be,0xeb6,0x12dc)+'amu.\x20Tapi,'+_0x128a37(0x6cb,0x3ea,0x51b,0x637)+_0x128a37(0x9d7,0x1021,0xfc8,0xbf2)+_0x4963f8(0x63e,0x8b2,0x98d,0x956)+_0x4963f8(0x8b4,0xa8b,0x74c,0x9e9)+_0x128a37(0x1101,0xd99,0xada,0xd1c)+_0x128a37(0x609,0x676,0x5ce,0x51b)+_0x128a37(0xdcd,0xa47,0xaa2,0xf37)+_0x4963f8(0x8f0,0x108d,0xc0c,0x113c),_0x128a37(0x75f,0x827,0x5a5,0xa74)+_0x128a37(0xae6,0xdee,0xa31,0xc2d)+_0x4963f8(0x791,0xf76,0xb42,0x609)+_0x128a37(0xc44,0xbb8,0x962,0xe18)+_0x4963f8(0x867,0xc1a,0x8f7,0xe03)+_0x4963f8(0x117a,0x770,0xc8b,0xf66)+_0x4963f8(0x54f,0x7b3,0x67c,0x675)+_0x128a37(0xc3e,0xbed,0x889,0xc62)+_0x128a37(0x5b7,0x833,0xb58,0x81b)+_0x4963f8(0xad3,0xc99,0x800,0x39b)+_0x128a37(0x10a7,0xb2e,0xb79,0xd0a)+'rsebut\x20sam'+_0x4963f8(0x973,0xaa9,0xbb0,0x1071),_0x128a37(0xa06,0x19f,0x188,0x554)+_0x4963f8(0xc46,0x8c2,0x7d2,0xb9d)+_0x128a37(0xba0,0xa07,0x862,0xb56)+_0x128a37(0x79f,0xdde,0xfde,0xb90)+_0x4963f8(0x530,0x497,0x762,0xbfa)+'dan\x20memuka'+_0x128a37(0x1120,0xf52,0x8f1,0xe3e)+_0x4963f8(0x68b,0x6cd,0x7d9,0x4b5)+_0x4963f8(0xc50,0xe13,0x986,0xdcd)+'h\x20dia\x20deng'+_0x128a37(0xb32,0x11d5,0x11ef,0xcfd)+_0x128a37(0xce9,0xc4b,0xd3d,0xd70),_0x128a37(0x355,0x94d,0x60f,0x577)+_0x128a37(0x73b,0xc8b,0xa8e,0xc31)+'eseorang\x20y'+'ang\x20bisa\x20m'+_0x128a37(0x90f,0xb19,0xfd6,0xcce)+'elajaran\x20s'+_0x128a37(0x85a,0x6de,0xddd,0xb20)+_0x4963f8(0x6e6,0x393,0x637,0xa88)+_0x128a37(0x1270,0xc8e,0xd76,0xf16)+_0x128a37(0xbdf,0x919,0xc1a,0xacf)+_0x4963f8(0xfe9,0x10e6,0xd38,0xb86)+_0x4963f8(0x8af,0xdcc,0xae0,0x9f2)+_0x128a37(0xa71,0xadc,0xe51,0xd86)+_0x4963f8(0x926,0x103e,0xcda,0x9e8),_0x128a37(0xdfe,0x6a1,0x3cd,0x8ae)+'\x20adalah\x20ke'+_0x128a37(0x9f5,0x1060,0xb42,0xc4b)+'\x20yang\x20tert'+_0x4963f8(0xff2,0xdae,0xe34,0x1308)+_0x4963f8(0x832,0x6c6,0x746,0xc2c)+_0x4963f8(0x11d6,0x10fb,0xeb8,0x125d)+_0x4963f8(0x645,0x4a6,0x671,0x5cd)+'ng\x20tertund'+_0x128a37(0xaa6,0x8ac,0xca8,0x7fb),_0x128a37(0xb6f,0x9f3,0x1029,0xeb5)+'elak\x20tawa\x20'+_0x4963f8(0xfcf,0xae8,0xaa0,0xfe8)+_0x128a37(0xa42,0xb74,0x92d,0x809)+_0x128a37(0x42a,0x4f5,0xa14,0x705)+_0x4963f8(0x8d2,0xab7,0x93e,0xdc2)+_0x4963f8(0x465,0x927,0x915,0x83a)+_0x4963f8(0x5ee,0x286,0x6ef,0xb97)+_0x4963f8(0x135,0x429,0x5d8,0x790)+_0x4963f8(0xb54,0xbdc,0x879,0x506)+_0x128a37(0x86d,0x1186,0x949,0xd1e),_0x128a37(0x576,0x350,0x357,0x6ea)+_0x128a37(0x88b,0xfed,0x871,0xb37)+_0x4963f8(0x924,0x4d1,0x923,0x524)+_0x128a37(0xdca,0x1208,0x117f,0xd63)+_0x4963f8(0x4a9,0xb99,0x6f0,0x526)+_0x4963f8(0x8a6,0xa58,0xd5d,0x1053)+_0x128a37(0x599,0xa31,0x8fb,0x8f2)+_0x128a37(0xa51,0x810,0xa5d,0xbdd),_0x128a37(0xb63,0x680,0x9d4,0xb0b)+'tu\x20adalah\x20'+_0x4963f8(0xe06,0x1016,0xd71,0xd42)+_0x4963f8(0x1044,0xeb9,0xe31,0x1293)+_0x128a37(0xb6a,0x910,0x60d,0x8b1)+_0x4963f8(0x5e5,0xc99,0x793,0x2f1)+_0x128a37(0x752,0x6b5,0x693,0x6f6)+_0x4963f8(0x9b9,0xfaf,0xc91,0xa9d)+_0x4963f8(0x1063,0xd20,0xbf0,0xe96)+_0x4963f8(0xa1d,0xbd2,0xd12,0xe59)+'indah.”',_0x4963f8(0x61f,0x5d6,0x8a5,0xcbd)+'akit\x20dahul'+'u\x20berenang'+'-renang\x20ke'+'\x20tepian…be'+_0x4963f8(0xd70,0xfaa,0xe27,0xb0c)+_0x4963f8(0x541,0x29d,0x53d,0x39e)+_0x4963f8(0xba2,0x4ef,0x9ed,0x503)+_0x4963f8(0xff0,0x952,0xdf8,0x12aa)+'udian.”','“Jangan\x20pe'+_0x4963f8(0x232,0xde,0x546,0x879)+_0x128a37(0xdfc,0xb07,0xa27,0xe6c)+_0x4963f8(0x4f6,0x792,0x9e8,0x548)+_0x4963f8(0xaa2,0x6f5,0x5e7,0x393)+_0x128a37(0xa83,0x6f3,0xbcd,0xc16)+_0x4963f8(0x966,0xa4b,0xa37,0xb2c)+_0x4963f8(0x632,0x899,0x556,0x4cc)+_0x128a37(0x559,0x6bf,0xc13,0x922)+'atu\x20kampun'+_0x128a37(0xbf9,0x3d3,0x926,0x7b9),_0x4963f8(0x1243,0xa34,0xdec,0x12b6)+_0x128a37(0x115b,0xf77,0x97d,0xdda)+'ta\x20menjadi'+'\x20sempurna,'+'\x20tapi\x20tida'+'k\x20ada\x20manu'+'sia\x20yang\x20s'+_0x128a37(0x5c4,0x631,0x6d0,0x81c)+_0x128a37(0x9d9,0x908,0x5c2,0x501)+'pa\x20kita\x20su'+_0x4963f8(0x475,0xb5d,0x95b,0x89e)+_0x4963f8(0x858,0xc99,0xcb5,0x809),'“Gara\x20gara'+_0x128a37(0xc99,0x9ed,0x1189,0xebf)+_0x4963f8(0x595,0x83a,0x789,0x732)+_0x4963f8(0x11b8,0xad3,0xe47,0x12da)+_0x128a37(0xbe1,0x7db,0x3b8,0x75c)+_0x128a37(0x9c5,0xe43,0xde1,0xce2)+_0x4963f8(0xbbc,0x551,0x86d,0xb87)+'ik…\x20Lupa\x20a'+'ku\x20pake\x20ce'+'lana.”',_0x4963f8(0xfef,0x8a0,0xbb1,0xad8)+_0x4963f8(0xea7,0x10fd,0xd2c,0x1143)+_0x4963f8(0xe22,0x9eb,0xb2b,0xe4c)+_0x4963f8(0xb7c,0xb45,0xb2e,0xf40)+'yang\x20kita\x20'+_0x4963f8(0xbc2,0x730,0x86a,0x86b)+_0x4963f8(0x648,0xb88,0x7cd,0xbdd)+_0x128a37(0x87b,0x799,0xaa3,0x6f3)+_0x128a37(0x51e,0x2b6,0x5ff,0x5f1)+'akin\x20banya'+_0x4963f8(0xf13,0xc0e,0xb3e,0x7fb)+'a\x20lupa,\x20Se'+_0x4963f8(0x4b1,0xc6e,0x77f,0x41f)+_0x128a37(0x6cd,0x100d,0xe5e,0xabf)+_0x128a37(0x7cd,0x813,0xcca,0xadb)+_0x128a37(0xa6d,0x9df,0xb1d,0xb4b)+'ikit\x20yang\x20'+_0x128a37(0x251,0xbf1,0x23e,0x764)+'\x20Jadi\x20kena'+_0x128a37(0x607,0x379,0x3d9,0x60d)+_0x4963f8(0x585,0x72a,0x5ed,0x943)+_0x128a37(0x6ea,0x747,0xf6b,0xac1),'“Jika\x20anda'+'\x20dilempar\x20'+_0x4963f8(0xb8b,0x596,0xac8,0xac9)+_0x128a37(0x9a9,0x21c,0x1e2,0x610)+_0x4963f8(0x8c3,0xa24,0xa5e,0xca9)+_0x4963f8(0xba2,0x31e,0x725,0xaa7)+_0x4963f8(0x10d2,0xec7,0xe8a,0xa66)+_0x4963f8(0xb00,0x9fa,0xbc1,0xa9c)+_0x4963f8(0x10de,0x82a,0xd08,0xa8f)+'an\x20senyuma'+_0x128a37(0xa76,0xe37,0x1216,0xecc)+_0x128a37(0xb2f,0xf49,0xbaa,0xc74)+'epadanya..'+_0x128a37(0x7f5,0x773,0xdf5,0xc60)+_0x128a37(0x8db,0x71a,0xa98,0x7f9)+_0x4963f8(0xa7a,0x101b,0xe9f,0xb79)+_0x128a37(0xad6,0x853,0x825,0x97b),_0x4963f8(0x524,0x9b4,0x97c,0xbdd)+_0x128a37(0xaa6,0xafc,0xacd,0xe5c)+_0x4963f8(0x69d,0x21c,0x5ff,0x699)+_0x128a37(0x942,0x9d3,0xcd6,0xc72)+'idupan\x20kit'+'a\x20menyenan'+_0x4963f8(0xa6a,0xbe1,0xa49,0x894)+_0x4963f8(0x4dc,0x937,0x7dd,0x486)+_0x128a37(0xf02,0x136d,0xaf5,0xf71),_0x128a37(0x804,0xaac,0x332,0x6de)+_0x4963f8(0xeda,0x11db,0xea3,0xc34)+'SALEHA\x20(Su'+'ka\x20Lupa\x20Pa'+_0x128a37(0xac2,0xee2,0xb9b,0xbf1)+_0x4963f8(0xbdd,0xcad,0xa84,0x925)+_0x128a37(0x81c,0x696,0x74d,0x837)+_0x128a37(0xdc7,0xf26,0xa96,0xf42)+_0x4963f8(0x43e,0x786,0x812,0x927)+_0x128a37(0xc63,0xaf8,0x118a,0xef8)+'lah\x20suami\x20'+_0x128a37(0x899,0x8ed,0x781,0xc47)+_0x128a37(0xe69,0x6cc,0x9fa,0x936)+_0x4963f8(0x275,-0x74,0x493,0xc1)+_0x128a37(0x7e9,0x515,0xc1a,0x6f2)+'ja).”',_0x128a37(0x40c,0x62f,0x3f1,0x6c0)+_0x4963f8(0xeb9,0x911,0xac4,0xd94)+_0x4963f8(0x5db,0xa9e,0x6d8,0xa9f)+_0x128a37(0x348,0x831,0xc02,0x846)+_0x4963f8(0xa0f,0x112a,0xdcc,0xedc)+_0x4963f8(0x641,0xb2,0x57a,0x94a)+_0x128a37(0x928,0xa7f,0x659,0xb62)+_0x4963f8(0xef4,0x11fc,0xcc2,0xa3d)+'gan\x20jika\x20k'+'ita\x20tidak\x20'+_0x128a37(0x102c,0x8c2,0x992,0xd47)+_0x128a37(0xbdf,0xcbc,0x111e,0xf6c)],kata_lucu_=kata_lucu[Math['floor'](Math['random']()*kata_lucu[_0x128a37(0x4f3,0x77c,0x37a,0x78c)])],_0x41820b={};_0x41820b[_0x128a37(0xbc2,0xb60,0x701,0xc3a)+'t']='☠️\x20Owner\x20';const _0x3da3f2={};_0x3da3f2[_0x4963f8(0x5ab,0x666,0xa74,0xe8e)]=_0x4963f8(0xc2f,0xd70,0xe32,0xbb8),_0x3da3f2[_0x4963f8(0x764,0xbad,0x6c4,0xbd5)]=_0x41820b,_0x3da3f2[_0x128a37(0xd81,0xa46,0xbea,0xd93)]=0x1;const _0x3e200f={};_0x3e200f[_0x4963f8(0x652,0xd28,0xb90,0xbd7)+'t']=_0x128a37(0xb54,0xb83,0xdeb,0xa53);const _0x5a3a24={};_0x5a3a24[_0x4963f8(0xce6,0xd85,0xa74,0x7f8)]=''+command,_0x5a3a24[_0x4963f8(0x8f7,0x635,0x6c4,0x2b8)]=_0x3e200f,_0x5a3a24[_0x128a37(0xe7c,0xf7a,0xa4c,0xd93)]=0x1;var buttonns=[_0x3da3f2,_0x5a3a24];buttonMessage={'contentText':kata_lucu_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x4963f8(0xbc5,0x822,0x731,0x2e6)+_0x128a37(0x13a9,0xdb9,0x125b,0xf1a)+_0x128a37(0xbed,0xc26,0x1094,0xd48))+enter+'~\x20@'+sender[_0x4963f8(0x8d0,0x8fa,0x4d7,0x2b6)]('@')[0x11c*0x2+0x1*0x26ba+-0x28f2],'buttons':buttonns,'headerType':0x1};const _0x1bdd98={};_0x1bdd98[_0x128a37(0x7b4,0xb09,0x77e,0x5d3)]='hi',_0x1bdd98['forwarding'+_0x4963f8(0xd0d,0x115a,0xe1e,0xc70)]=0x3b9aca00,_0x1bdd98[_0x4963f8(0x75e,0xcb6,0x968,0x5ed)+'d']=!![],_0x1bdd98['sendEpheme'+_0x4963f8(0x7c4,0x7c3,0x4a2,0x204)]=!![],_0x1bdd98['mentionedJ'+'id']=[sender];const _0x210b84={};_0x210b84[_0x4963f8(0xd23,0x987,0xe33,0x10a7)]=_0x128a37(0x8e4,0xa49,0x923,0x879)+'21',_0x210b84[_0x4963f8(0x952,0xa38,0x8cf,0x3cf)+'o']=_0x1bdd98,_0x210b84[_0x4963f8(0xb25,0x9be,0x9c3,0xd7a)]=ftoko,_0x210b84[_0x128a37(0x10c4,0xfbd,0xee7,0xf30)+_0x128a37(0x267,0x924,0x2d1,0x54c)]=!![],alpha[_0x128a37(0xfa0,0xaa8,0x8b2,0xcf9)+'e'](from,buttonMessage,MessageType[_0x4963f8(0x260,0xa82,0x77d,0x24a)+_0x128a37(0xee6,0xa0a,0x1025,0xcdd)],_0x210b84),await limitAdd(sender,limit);break;case _0x128a37(0xcb0,0x13b7,0x11fb,0xf69)+_0x4963f8(0x1180,0x9df,0xced,0xc64):const _0x54c838={};_0x54c838[_0x4963f8(0xa51,0x1073,0xb90,0xe38)+'t']=_0x4963f8(0xf40,0xca5,0xd18,0x839)+'t';const _0xe570cd={};_0xe570cd[_0x4963f8(0xe21,0x76a,0xa74,0x785)]=_0x4963f8(0x8ee,0x805,0xce1,0x868),_0xe570cd[_0x4963f8(0x1f6,0x65b,0x6c4,0x83e)]=_0x54c838,_0xe570cd[_0x4963f8(0x11d1,0xa8d,0xce9,0x107e)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x1124,0xf9b,0xded,0xd8b)](prefix),'©\x20'+ownername,[_0xe570cd]);const longtong=[_0x4963f8(0x2a2,0x91f,0x533,0x118)+_0x4963f8(0x56c,0x636,0x980,0xd07)+_0x4963f8(0x860,0xbf0,0xb0e,0x9e8)+'bodoh\x20dari'+_0x128a37(0x9ce,0x43c,0x75e,0x6ad)+_0x4963f8(0xeb3,0xf95,0xdb0,0x103a)+'an\x20bodohny'+_0x128a37(0xaa5,0x9a6,0x999,0xd40)+'lihatan',_0x4963f8(0x7f7,0x794,0x901,0xcaf)+'paling\x20tep'+_0x128a37(0x920,0xfcb,0xdb4,0xb6d)+_0x4963f8(0x10ac,0x9ea,0xd3e,0xe14)+_0x128a37(0xf79,0x1015,0x1035,0xc36)+_0x128a37(0x92d,0x964,0x88b,0x5fd)+_0x128a37(0x60e,0xf0,0xb08,0x60b)+'\x20itu\x20jadi\x20'+_0x128a37(0x805,0x733,0xc4d,0x7c0),'Mendidik\x20s'+'eorang\x20pri'+_0x4963f8(0x358,0x29b,0x787,0xa61)+_0x4963f8(0x883,0x89a,0xd26,0x82f)+'ik\x20anak\x20ma'+_0x4963f8(0x11c4,0xd28,0xe9b,0xd71)+_0x128a37(0x101a,0x11a7,0x1359,0xea9)+'k\x20seorang\x20'+_0x4963f8(0xa98,0x994,0xe73,0x958)+_0x4963f8(0xaed,0x63b,0x723,0x5cb)+_0x128a37(0xf31,0x6ea,0xce7,0x9eb)+'buah\x20kelua'+_0x128a37(0x986,0x2e2,0x5a8,0x698),_0x128a37(0xf7f,0x1356,0x1442,0xf47)+_0x128a37(0xa59,0x8fa,0x47e,0x68a)+'\x20per\x20hari\x20'+_0x128a37(0x45f,0x270,0x75a,0x66a)+_0x128a37(0xf64,0xd91,0x785,0xb87)+'aca\x2030\x20men'+_0x4963f8(0xcb0,0x95b,0xbd8,0xd39)+'i','Bila\x20Anda\x20'+_0x4963f8(0x119f,0x7ae,0xcf1,0x9ce)+'gan\x20takut\x20'+_0x128a37(0x631,0xb99,0x385,0x76c)+_0x128a37(0x137b,0x1248,0x1148,0xe3f)+_0x4963f8(0x10cb,0x966,0xc5f,0x845)+_0x128a37(0x8dd,0xb94,0xff8,0xb23)+_0x128a37(0xc9a,0xd4c,0xc32,0x967)+_0x4963f8(0x407,0x32b,0x855,0xb65)+_0x4963f8(0x206,0x438,0x6c9,0x2fb),_0x4963f8(0x34f,0x4ee,0x825,0x410)+_0x128a37(0x611,0x378,0x4a1,0x629)+_0x128a37(0xdfc,0xfe2,0x7b6,0xcab)+_0x4963f8(0xb15,0xad3,0xd0f,0xef6)+_0x4963f8(0x70b,0xa7,0x4b6,0x456)+_0x128a37(0xa11,0x9db,0xa26,0xed3)+_0x4963f8(0x28a,0xa1,0x586,0x151)+_0x128a37(0x1106,0xd8e,0xed8,0xdf1)+'\x20saya\x20diam'+',\x20supaya\x20s'+_0x4963f8(0x9be,0xa71,0x630,0x9ac)+_0x4963f8(0x74,0x86,0x53e,0x217)+_0x4963f8(0x972,0xcf5,0xc9c,0x11d4)+_0x4963f8(0x858,0x2f2,0x60f,0x774),_0x128a37(0xb1a,0x749,0xece,0xa1c)+'\x20pedagang\x20'+_0x4963f8(0x10eb,0x8c8,0xccd,0x909)+_0x4963f8(0xb03,0xb3f,0xbf4,0x107b)+_0x128a37(0xcb1,0x637,0xc1b,0xa6f)+_0x4963f8(0xb82,0xc80,0xe92,0xb99)+_0x4963f8(0xa1b,0x9ea,0xd7f,0xeec)+_0x4963f8(0x7ed,0xd5a,0x8f2,0xc02)+_0x4963f8(0xc6d,0xcb5,0x80b,0xbc3)+_0x4963f8(0x5b4,0xa83,0x6a3,0xb8f)+_0x4963f8(0xd43,0x1155,0xeb2,0x12c0)+_0x128a37(0x439,0x589,0x744,0x88c),_0x128a37(0x54f,0xa79,0xa0a,0x7fd)+_0x4963f8(0xab5,0x372,0x59d,0x6c1)+_0x128a37(0x798,0x8a1,0x843,0x62f)+'\x20kalo\x20peng'+_0x128a37(0xbd3,0x771,0x77b,0x9bc)+_0x4963f8(0xabb,0x8a3,0x58e,0x5ce)+_0x4963f8(0x45f,0x43d,0x71a,0x5e3)+'ritaan',_0x4963f8(0xb58,0xb01,0x817,0x72b)+_0x128a37(0x454,0x7e7,0xbf5,0x91d)+_0x128a37(0xbdb,0xd39,0x692,0x87b)+_0x4963f8(0xa5b,0xf4d,0xc17,0xbf3)+'t\x20diputusk'+'an\x20pacar,\x20'+'lebih\x20baik'+_0x128a37(0x4c4,0x9e7,0x4ba,0x586)+'s\x20duluan\x20s'+'ebelum\x20jad'+'ian',_0x4963f8(0x327,0x4ec,0x825,0xc65)+'\x20takut\x20sam'+_0x4963f8(0xd95,0xa0b,0x875,0xbe9)+_0x128a37(0x6e5,0xcbc,0x845,0xb68)+_0x128a37(0x1036,0xd00,0x12fb,0xf5d)+_0x128a37(0xc90,0x2c8,0x2c9,0x7cc)+_0x4963f8(0x1114,0xeaa,0xe09,0x11e4)+'ini,\x20Tuhan'+_0x4963f8(0xe48,0x98c,0xa36,0x770)+'sangan\x20hid'+_0x128a37(0x264,0xbce,0x9cb,0x6d3),_0x128a37(0x6f2,0x6a4,0x3f9,0x93a)+_0x128a37(0x92f,0xcbf,0x7cf,0x96c)+'anda\x20menja'+_0x128a37(0xc45,0x10d8,0x8c1,0xe0f)+_0x4963f8(0xc3f,0x103f,0xe9a,0xcdf)+_0x128a37(0x8c2,0xc5f,0x76d,0xc6a)+_0x128a37(0x103d,0xa6e,0xd57,0xd59)+'anak\x20saya\x20'+_0x4963f8(0xba7,0x62b,0x6df,0x5d6)+_0x4963f8(0x83b,0xa38,0x6fc,0x736)+'dan\x20hidup\x20'+_0x4963f8(0x2e4,0x554,0x796,0x8ef)+_0x128a37(0xd29,0x9a8,0xc90,0x9d8),'Ketika\x20kam'+'u\x20bilang\x20b'+_0x128a37(0x779,0xa5c,0xc31,0x7b5)+_0x128a37(0x9f9,0xecc,0x51d,0xa33)+_0x4963f8(0x2f1,0x61c,0x755,0x5b3)+_0x4963f8(0x45e,0x875,0x450,0x7d2)+_0x4963f8(0xbc2,0xd6e,0xd17,0x9b4)+'ah\x20bahwa\x20y'+'ang\x20kamu\x20a'+_0x128a37(0x6a8,0x566,0x712,0x52a)+_0x128a37(0x909,0x82a,0x704,0x65f)+'\x20balasan\x20d'+_0x128a37(0x9ac,0x1180,0xa84,0xd64),_0x128a37(0xc8d,0x13d5,0x1027,0xe92)+_0x128a37(0xc46,0xe6e,0x7c5,0xb60)+_0x128a37(0x88b,0xe9e,0xcac,0xa31)+_0x4963f8(0xb16,0x7af,0xb5a,0xc8b)+_0x128a37(0x6cc,0xda5,0xe94,0xa17)+'an\x20Anda\x20si'+'apa','Lelaki\x20yan'+'g\x20sukses\x20a'+'dalah\x20lela'+'ki\x20yang\x20bi'+'sa\x20menghas'+_0x128a37(0xb25,0xc78,0x104b,0xf4e)+_0x4963f8(0xdd2,0x3e2,0x896,0x91f)+_0x128a37(0x158,0x894,0x489,0x5c5)+_0x128a37(0xa3c,0xe2b,0x86b,0xc86)+_0x128a37(0xc6e,0xa0c,0xe50,0xc61)+_0x4963f8(0x860,0x96c,0xcb7,0x839)+_0x128a37(0x10c6,0xc26,0xcb5,0xf53)+'bulannya',_0x128a37(0xd2e,0xd85,0x542,0xa2d)+'\x20jomblo\x20it'+_0x128a37(0x98b,0xb66,0xb3a,0xdd3)+'dak\x20laku,\x20'+_0x128a37(0x8af,0x396,0x616,0x5bd)+_0x128a37(0xb1e,0x27f,0xa01,0x6ce)+'ada\x20yang\x20m'+_0x128a37(0x9fa,0xb40,0xf29,0xb6f)+_0x128a37(0x8c9,0x9a3,0x8d9,0xc27),_0x128a37(0x69e,0x34f,0x3dd,0x668)+_0x128a37(0x12fe,0xa32,0xb72,0xe2c)+_0x128a37(0xfc5,0x1016,0xc12,0xf27)+_0x4963f8(0x898,0x5ab,0x9d4,0x580)+_0x128a37(0x1307,0xb86,0xe99,0xefe)+_0x128a37(0x9aa,0x1206,0xe39,0xd50)+_0x128a37(0xaa0,0xfc7,0x78c,0xcb9)+_0x128a37(0x11ef,0xd48,0xa14,0xf56)+_0x4963f8(0x495,0xb47,0x9e5,0x6a3)+_0x128a37(0xeb2,0x11ae,0xe5a,0xd0f)+_0x128a37(0xa7b,0x8f6,0x5a4,0x6cc)+_0x4963f8(0x2ad,0x6e4,0x7ce,0xbc2)+_0x4963f8(0x10a7,0x1042,0xd2b,0x11e9)+_0x128a37(0x6ef,0xd42,0x913,0x8b3)+'oruptor\x20di'+_0x4963f8(0xe97,0xc71,0xdac,0x919)+_0x4963f8(0xafa,0x3ff,0x6fd,0xa12),'Sudah\x20dapa'+_0x128a37(0xbd7,0xa1c,0xc6b,0xd9c)+'an\x20kalau\x20y'+_0x128a37(0x3de,0x9bd,0x501,0x63f)+'sa\x20tidak\x20m'+_0x128a37(0xd68,0x6c7,0x868,0xb7e)+_0x4963f8(0x1e0,0x9b3,0x5e5,0xf0)+'.\x20Sedangka'+'n\x20yang\x20tid'+_0x4963f8(0x36b,0x71,0x552,0x5d3)+_0x4963f8(0x2ad,0x82d,0x601,0x8db)+'inum\x20pasti'+_0x128a37(0xc5b,0x7c7,0x647,0xa72)+_0x128a37(0xa1d,0xec9,0x987,0x9bd)+_0x128a37(0x258,0x66b,0xaad,0x5e1),'Putus\x20cint'+_0x128a37(0x119e,0xb62,0xa42,0xe71)+_0x128a37(0x904,0x45f,0x93e,0x792)+_0x128a37(0x42a,0x355,0xbf0,0x6a2)+_0x4963f8(0x72d,0xda4,0xbc4,0x7c2)+'agi\x20pria\x20a'+_0x4963f8(0xcc2,0xfa9,0xc41,0xfcc)+'alaman','Orang\x20kaya'+_0x4963f8(0xbf8,0xcd5,0xbf9,0x109d)+_0x128a37(0x8e8,0xed6,0xab2,0xaf1)+_0x4963f8(0xc9e,0x44b,0x8dd,0xbc9)+_0x4963f8(0x4c8,0x760,0x6ce,0x252)+_0x4963f8(0x89e,0xacc,0x90c,0xc9d)+_0x4963f8(0x1236,0x1019,0xd3d,0x117b)+_0x128a37(0x304,0x2c8,0x9e7,0x740)+_0x128a37(0x986,0x216,0x853,0x61b),_0x4963f8(0xa68,0x20e,0x5e4,0x9a8)+_0x4963f8(0xa61,0xf80,0xa75,0x8e9)+_0x4963f8(0x964,0xac4,0xdb7,0xb3f)+'a\x20dengan\x20k'+'aya\x20atau\x20m'+'iskin.\x20Tap'+'i,\x20sederha'+'na\x20berhubu'+_0x128a37(0xd2c,0x96b,0x755,0x93c)+_0x128a37(0x9a4,0x373,0xb4d,0x6f4)+_0x128a37(0xb1d,0x6df,0x134,0x664)],longtong_=longtong[Math[_0x4963f8(0x555,0x677,0x48c,0x308)](Math[_0x128a37(0x13af,0xc62,0x13aa,0xf0c)]()*longtong[_0x4963f8(0x21d,0xc0a,0x6e2,0xa96)])],_0x2f0ee6={};_0x2f0ee6[_0x128a37(0xf28,0xd38,0xaa4,0xc3a)+'t']=_0x128a37(0x8c9,0x8e4,0x396,0x83b);const _0x46f89e={};_0x46f89e[_0x128a37(0xff1,0xdfb,0xe82,0xb1e)]=_0x4963f8(0xb53,0x108f,0xe32,0xae2),_0x46f89e['buttonText']=_0x2f0ee6,_0x46f89e['type']=0x1;const _0x1bdd43={};_0x1bdd43['displayTex'+'t']=_0x4963f8(0xce0,0x9a2,0x9a9,0x78f);const _0x4ff24e={};_0x4ff24e[_0x128a37(0x94d,0xf24,0xc02,0xb1e)]=''+command,_0x4ff24e[_0x4963f8(0x637,0x6f1,0x6c4,0x819)]=_0x1bdd43,_0x4ff24e[_0x128a37(0x91a,0xaf4,0x962,0xd93)]=0x1;var buttonns=[_0x46f89e,_0x4ff24e];buttonMessage={'contentText':longtong_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x4963f8(0xa43,0x833,0x731,0x50e)+_0x4963f8(0xb43,0x1112,0xe70,0xd1e)+_0x4963f8(0x11de,0x882,0xc9e,0xe0c))+enter+_0x128a37(0x6e6,0x6ca,0x66d,0xa6b)+sender[_0x128a37(0x94b,0x7fe,0x12e,0x581)]('@')[0x144b*0x1+-0x1*0x697+-0xdb4],'buttons':buttonns,'headerType':0x1};const _0x2df64d={};_0x2df64d[_0x128a37(0xac,0x198,0x6be,0x5d3)]='hi',_0x2df64d['forwarding'+_0x128a37(0x13c6,0xa49,0xf93,0xec8)]=0x3b9aca00,_0x2df64d[_0x4963f8(0x467,0x695,0x968,0x8d4)+'d']=!![],_0x2df64d['sendEpheme'+'ral']=!![],_0x2df64d['mentionedJ'+'id']=[sender];const _0x419d13={};_0x419d13[_0x128a37(0xcd5,0x1387,0x13e4,0xedd)]=_0x4963f8(0x7ae,0xac2,0x7cf,0x8f3)+'21',_0x419d13[_0x4963f8(0xc6c,0xc21,0x8cf,0x8bf)+'o']=_0x2df64d,_0x419d13['quoted']=ftoko,_0x419d13[_0x4963f8(0xdf0,0xa5e,0xe86,0x1278)+_0x128a37(0x397,0x9d,0x4c6,0x54c)]=!![],alpha[_0x4963f8(0xe21,0x116f,0xc4f,0xb39)+'e'](from,buttonMessage,MessageType[_0x4963f8(0xb69,0x84a,0x77d,0x959)+_0x4963f8(0xfe2,0x1154,0xc33,0xf3e)],_0x419d13),await limitAdd(sender,limit);break;case _0x128a37(0xb9a,0x36a,0xc0e,0x813):case _0x128a37(0x99c,0x238,0xb80,0x70a):case _0x128a37(0xf98,0xae2,0x11e4,0xddc):case _0x128a37(0x45d,0x268,0x53c,0x548):case'chitoge':case _0x128a37(0x7c0,0x3b2,0x816,0x645):case'erza':case _0x4963f8(0xf57,0xf81,0xe82,0xf72):case _0x128a37(0x9dd,0x61e,0x582,0xa85):case'kaga_kouko':case _0x128a37(0x5c2,0x98e,0xbdc,0x772)+'zono':case _0x4963f8(0x99a,0x55d,0x811,0x373)+_0x4963f8(0x12a0,0x8a7,0xdb5,0xa68):case'mikasa':case _0x4963f8(0x7c0,0xd31,0x844,0x47d)+'a':case'mizore_sir'+'ayuki':case _0x128a37(0xf02,0xcdd,0x117a,0xe11)+'ce':case _0x4963f8(0xb34,0x6b6,0xb68,0x648):case'riyas_grem'+_0x4963f8(0x881,0xa96,0xd52,0xf95):case'sakura':case _0x4963f8(0xab6,0xe34,0x919,0x491):case _0x4963f8(0x862,0x86e,0x5f2,0x40c)+'u':case _0x128a37(0x50b,0x72d,0x796,0x7aa):case _0x128a37(0x102b,0x100e,0xb52,0xb1a):case'shinka':case _0x128a37(0x11c3,0x135c,0xe28,0xe65):case _0x4963f8(0xa38,0x587,0x84a,0x9ea):case _0x4963f8(0x5e4,0x307,0x78e,0x870):case _0x128a37(0x902,0xb72,0x11a0,0xe43):const _0x14cce6={};_0x14cce6[_0x4963f8(0xde3,0xe56,0xb90,0x106e)+'t']='Check\x20Limi'+'t';const _0x54b55e={};_0x54b55e[_0x128a37(0x5f4,0x666,0xe4c,0xb1e)]='limit',_0x54b55e['buttonText']=_0x14cce6,_0x54b55e['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x54b55e]);reply(lang['wait']());var anime='https://ap'+'i-alphabot'+_0x128a37(0xc17,0xc28,0xa4f,0xc51)+_0x128a37(0x273,0x815,0x941,0x4f7)+'nime/'+command+('?apikey=of'+_0x4963f8(0xbb1,0x4bb,0x85d,0x521));let random_anime=await getBuffer(anime);const mediaxxxxxx=await alpha['prepareMes'+_0x4963f8(0x85c,0xa45,0xc33,0x871)](from,random_anime,MessageType['image'],{'thumbnail':Buffer[_0x4963f8(0x86c,0x606,0x521,0x5f9)](0x19*0xb5+-0x18d1+0x724)});let bacotluxxxxxx=mediaxxxxxx[_0x128a37(0x948,0xa73,0x9bc,0x683)][_0x128a37(0x761,0x455,0x75d,0x99e)+_0x128a37(0x899,0x619,0xd1c,0x7ec)]?mediaxxxxxx[_0x128a37(0x8ce,0x824,0x71f,0x683)]['ephemeralM'+'essage']:mediaxxxxxx;const _0x3ce818={};_0x3ce818[_0x4963f8(0xdc5,0xa3e,0xb90,0xa6d)+'t']=_0x4963f8(0x987,0x8b3,0xbd0,0xfe4);const _0x155aa9={};_0x155aa9['buttonId']=_0x128a37(0xae1,0xd63,0xbc6,0xedc),_0x155aa9['buttonText']=_0x3ce818,_0x155aa9[_0x128a37(0xa68,0xee0,0xb3a,0xd93)]=0x1;const _0xf5ad2c={};_0xf5ad2c[_0x128a37(0x950,0xf23,0xe33,0xc3a)+'t']=_0x128a37(0x102d,0xe0d,0x1055,0xb09);const _0x136a5e={};_0x136a5e[_0x128a37(0xd6d,0x1068,0x8ae,0xb1e)]=_0x4963f8(0xbf4,0x529,0x95a,0x642),_0x136a5e[_0x4963f8(0x208,0x786,0x6c4,0x73c)]=_0xf5ad2c,_0x136a5e[_0x128a37(0x970,0x105a,0xd26,0xd93)]=0x1;const buttonsxxxxxx=[_0x155aa9,_0x136a5e],btnxxxxx__={'contentText':lang[_0x4963f8(0x92b,0x4ad,0x5bc,0x465)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x128a37(0xcec,0xcfa,0xe63,0xa3b))+sender[_0x4963f8(0x7d7,0x2a6,0x4d7,0xa1e)]('@')[-0x4bb*0x1+0x1*-0x449+0x904],'buttons':buttonsxxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxxx['message'][_0x128a37(0x4e2,0x553,0xebe,0x9ea)+'ge']},_0x1c59d6={};_0x1c59d6['mentionedJ'+'id']=[sender];const _0x29f1cc={};_0x29f1cc[_0x4963f8(0x55c,0x4db,0x9c3,0x4e1)]=mek,_0x29f1cc[_0x4963f8(0x8fe,0xa81,0x8cf,0x71d)+'o']=_0x1c59d6,alpha[_0x4963f8(0x10a8,0x939,0xc4f,0x10f3)+'e'](from,btnxxxxx__,MessageType['buttonsMes'+_0x4963f8(0xbcf,0xc1a,0xc33,0x9f3)],_0x29f1cc)[_0x4963f8(0xa42,0x804,0x91c,0x8bb)](_0x24a808=>{function _0x336685(_0x251299,_0x105c32,_0x24187f,_0x9de18){return _0x4963f8(_0x251299,_0x105c32-0x10b,_0x105c32- -0x597,_0x9de18-0x1e0);}const _0x23634f={'DVUKC':function(_0x35d40c,_0x46703f){return _0x35d40c(_0x46703f);}};_0x23634f[_0x336685(0x646,0x258,0x2c5,-0x2e8)](reply,lang['tryAgain']());}),await limitAdd(sender,limit);break;case _0x4963f8(0xe19,0xc48,0x9bb,0xdd3):case'dohkyungso'+'o':case _0x128a37(0xbc9,0xacc,0x97d,0x8fc):case _0x128a37(0x660,0xa34,0xc32,0x7ad):case _0x4963f8(0xce0,0x8d8,0x8f5,0x430):case _0x128a37(0xb6a,0x957,0xc56,0x7de):case _0x128a37(0x6c5,0xcd3,0x9b4,0xa82):case _0x4963f8(0x570,0x4e3,0x577,0x4bf):case _0x128a37(0xc9e,0x102a,0xf27,0xc77)+'o':case _0x4963f8(0x9f8,0xa09,0x69c,0x61c)+'n':case'kimminseok':case _0x4963f8(0x66a,0x462,0x78a,0x6c4):case _0x128a37(0xd98,0x100a,0xa69,0xbad):case'kimtaehyun'+'g':case _0x128a37(0xabf,0x107c,0x986,0xb8b):case _0x128a37(0x9d5,0xf8e,0x899,0xb85):case _0x4963f8(0x389,0x506,0x657,0x50e)+'ol':case _0x4963f8(0xd3c,0x8e9,0xa16,0x7cb):case'wuyifan':const _0x1d2dcb={};_0x1d2dcb['displayTex'+'t']=_0x128a37(0x912,0x1086,0xf5f,0xdc2)+'t';const _0x3c28e5={};_0x3c28e5['buttonId']=_0x128a37(0xed6,0xd9b,0xf85,0xd8b),_0x3c28e5[_0x4963f8(0x8dc,0x22d,0x6c4,0x45c)]=_0x1d2dcb,_0x3c28e5[_0x4963f8(0xb1e,0xe50,0xce9,0xf28)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x115e,0xa10,0xbc6,0xd8b)](prefix),'©\x20'+ownername,[_0x3c28e5]);reply(lang[_0x4963f8(0x71e,0x922,0x6f1,0x897)]());var cogan=await fetchJson('https://ap'+'i-alphabot'+_0x128a37(0x10d7,0x10c0,0x877,0xc51)+_0x4963f8(0xa23,0x114e,0xcd1,0x91f)+_0x128a37(0x8af,0x446,0x665,0x71c)+command+(_0x128a37(0x8ff,0x641,0x931,0x8ad)+'fline'));let random_cogan=await getBuffer(cogan[_0x128a37(0x2e6,0x391,0x822,0x561)]);const mediaxxxxx=await alpha['prepareMes'+'sage'](from,random_cogan,MessageType['image'],{'thumbnail':Buffer[_0x4963f8(0x4f7,0x63c,0x521,0xa15)](0x1*-0x1a2+-0x1*-0x175+0x5*0x9)});let bacotluxxxxx=mediaxxxxx[_0x4963f8(0xa2,0x560,0x5d9,0x969)][_0x128a37(0xb50,0x988,0x814,0x99e)+_0x128a37(0x994,0x7a6,0x5fc,0x7ec)]?mediaxxxxx[_0x128a37(0xada,0x4ae,0x486,0x683)][_0x4963f8(0x9e3,0xdbd,0x8f4,0x879)+'essage']:mediaxxxxx;const _0xd5c2ef={};_0xd5c2ef[_0x128a37(0xab6,0x8bd,0xc67,0xc3a)+'t']='🐨\x20Owner';const _0x5f2aa2={};_0x5f2aa2['buttonId']=_0x4963f8(0x1364,0xe70,0xe32,0x1239),_0x5f2aa2['buttonText']=_0xd5c2ef,_0x5f2aa2[_0x4963f8(0xb79,0xf9e,0xce9,0xf87)]=0x1;const _0x44394f={};_0x44394f[_0x128a37(0x10b8,0xe9b,0x1020,0xc3a)+'t']=_0x128a37(0x894,0x907,0xb0d,0xb09);const _0x55e151={};_0x55e151[_0x128a37(0xe1b,0x63a,0x78a,0xb1e)]=_0x128a37(0x58d,0x4fc,0xb31,0xa04),_0x55e151[_0x128a37(0xac9,0x546,0xc8a,0x76e)]=_0x44394f,_0x55e151['type']=0x1;const buttonsxxxxx=[_0x5f2aa2,_0x55e151],btnxxxx__={'contentText':lang[_0x128a37(0xa98,0x8b5,0x4bc,0x666)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x128a37(0xe5b,0xdad,0x932,0xa6c)+_0x128a37(0x73c,0xcdf,0x825,0xa3b))+sender[_0x128a37(0x8b5,0x673,0x991,0x581)]('@')[-0x1*0x9d3+-0x1003+0x1*0x19d6],'buttons':buttonsxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxx[_0x4963f8(0x431,0xa9,0x5d9,0x6f1)][_0x4963f8(0xabb,0x90f,0x940,0x698)+'ge']},_0x346470={};_0x346470[_0x128a37(0xd6f,0xaec,0xa1f,0xe0e)+'id']=[sender];const _0x304cfb={};_0x304cfb['quoted']=mek,_0x304cfb[_0x128a37(0x96f,0xd39,0xb4c,0x979)+'o']=_0x346470,alpha[_0x4963f8(0x701,0xe25,0xc4f,0xc0f)+'e'](from,btnxxxx__,MessageType[_0x128a37(0xcc5,0xa91,0x4e4,0x827)+_0x4963f8(0xdd5,0xf0b,0xc33,0xd66)],_0x304cfb)[_0x4963f8(0x8ba,0x9cd,0x91c,0xda9)](_0x289f8c=>{function _0x5580bc(_0x2a4df2,_0x4ead7c,_0x49c9f2,_0x34407b){return _0x4963f8(_0x49c9f2,_0x4ead7c-0x57,_0x4ead7c- -0x561,_0x34407b-0x50);}reply(lang[_0x5580bc(0x21d,-0x1e,-0x51f,0x29a)]());}),await limitAdd(sender,limit);break;case _0x128a37(0x114e,0xeb3,0x1300,0xe79):case'ass':case _0x128a37(0x927,0x91b,0x693,0xb57):case'cuckold':case _0x4963f8(0x322,0x4ea,0x46b,0x193):case _0x128a37(0x295,0x6e9,0x111,0x544):case _0x4963f8(0xb35,0xc38,0xc19,0xefb):case _0x4963f8(0x4e6,0x427,0x730,0xc76):case _0x4963f8(0x60a,0x2fd,0x757,0x21b):case'masturbati'+'on':case _0x4963f8(0xb73,0x6ac,0x7e0,0x4ee):case _0x128a37(0x9a6,0x565,0x29a,0x77c):case _0x128a37(0x5ea,0x657,0xbc6,0x7b4):case _0x4963f8(0x2d3,0x661,0x806,0xaa0):case _0x128a37(0x95b,0xa89,0x10da,0xc39):const _0xfcb17e={};_0xfcb17e[_0x128a37(0x9e5,0x7dd,0xf6a,0xc3a)+'t']=_0x4963f8(0xc96,0x82f,0xd18,0xe7c)+'t';const _0x4b7e5e={};_0x4b7e5e['buttonId']=_0x4963f8(0xcf9,0x1142,0xce1,0xe52),_0x4b7e5e['buttonText']=_0xfcb17e,_0x4b7e5e[_0x128a37(0xf61,0x966,0x11eb,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xb21,0xce1,0x8bf,0xd8b)](prefix),'©\x20'+ownername,[_0x4b7e5e]);if(!isNsfw)return reply(lang['nsfwmo']());reply(lang[_0x4963f8(0x8e4,0x287,0x6f1,0x591)]());var random_nsfww=await getBuffer(_0x4963f8(0xe76,0x1027,0xc4b,0x117e)+_0x4963f8(0x12a6,0x9ba,0xebd,0x9cf)+'.herokuapp'+'.com/api/n'+'sfw/'+command+(_0x128a37(0x5b7,0xb57,0x7b5,0x8ad)+'fline'));const mediaxxxx=await alpha[_0x4963f8(0xf1,0x847,0x530,0x3bb)+_0x4963f8(0xc42,0x9f8,0xc33,0x815)](from,random_nsfww,MessageType[_0x128a37(0x531,0x930,0xd3f,0x999)],{'thumbnail':Buffer['alloc'](0x1a*-0x16a+-0x2*0xcf5+0x3eae*0x1)});let bacotluxxxx=mediaxxxx[_0x128a37(0x80c,0x6ac,0xbc5,0x683)][_0x128a37(0xc0e,0x98b,0xe92,0x99e)+_0x4963f8(0x4e8,0x260,0x742,0x86e)]?mediaxxxx[_0x128a37(0x924,0x462,0x655,0x683)]['ephemeralM'+_0x128a37(0x937,0xc42,0xa21,0x7ec)]:mediaxxxx;const _0x139901={};_0x139901[_0x4963f8(0x8d4,0x8c5,0xb90,0xaf8)+'t']=_0x4963f8(0x9c3,0xe78,0xbd0,0xdc2);const _0x4df062={};_0x4df062[_0x128a37(0xc3a,0xe87,0x88c,0xb1e)]=_0x128a37(0xae1,0xe2f,0xf58,0xedc),_0x4df062['buttonText']=_0x139901,_0x4df062[_0x128a37(0xabf,0xe90,0xa01,0xd93)]=0x1;const _0x37292a={};_0x37292a['displayTex'+'t']='Donasi\x20💰';const _0x2ceb5c={};_0x2ceb5c['buttonId']=_0x128a37(0xcd3,0x4be,0xc25,0xa04),_0x2ceb5c['buttonText']=_0x37292a,_0x2ceb5c[_0x4963f8(0xab1,0x9b0,0xce9,0x9bb)]=0x1;const buttonsxxxx=[_0x4df062,_0x2ceb5c],btnxxx__={'contentText':lang[_0x128a37(0x3b8,0x3fd,0x718,0x666)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4963f8(0xa8c,0x6f0,0x9c2,0x98b)+_0x128a37(0x934,0xd3d,0xdb9,0xa3b))+sender[_0x4963f8(0x30f,0x942,0x4d7,0x21f)]('@')[-0x8ef+-0x1*-0x3c2+0x52d],'buttons':buttonsxxxx,'headerType':0x4,'imageMessage':bacotluxxxx[_0x128a37(0x735,0x546,0x910,0x683)][_0x128a37(0x599,0x51f,0xb27,0x9ea)+'ge']},_0x1e7ab2={};_0x1e7ab2[_0x128a37(0x12dc,0x121a,0x1009,0xe0e)+'id']=[sender];const _0x22a28b={};_0x22a28b['quoted']=mek,_0x22a28b['contextInf'+'o']=_0x1e7ab2,alpha[_0x4963f8(0xc68,0x8fc,0xc4f,0xd21)+'e'](from,btnxxx__,MessageType['buttonsMes'+_0x4963f8(0xcb2,0xd45,0xc33,0xf7b)],_0x22a28b)[_0x4963f8(0x4f6,0x85b,0x91c,0xce3)](_0x26dc3a=>{function _0x58fab8(_0xe22cf8,_0x43ece8,_0x28fac9,_0x51fba7){return _0x128a37(_0xe22cf8-0x1de,_0x43ece8,_0x28fac9-0x169,_0x51fba7- -0x2c4);}const _0x512892={'TPTzE':function(_0x56723a,_0x29b2fa){return _0x56723a(_0x29b2fa);}};_0x512892[_0x58fab8(0x850,0x78b,0x582,0xa60)](reply,lang['tryAgain']());}),await limitAdd(sender,limit);break;case'solog':case _0x128a37(0xa24,0xba6,0x971,0x900):case _0x128a37(0xf16,0xe42,0xbc4,0xf07):case _0x128a37(0x9a8,0xcb7,0xecd,0xbc0):case _0x128a37(0xb28,0x845,0x6df,0xa8b):case'les':case _0x128a37(0xea1,0xbed,0xc26,0xd4d):case'bj':case _0x128a37(0xac4,0x293,0xc70,0x752):case'pat':case _0x4963f8(0x6c2,0xa63,0xc09,0x7fd):case'feed':case _0x128a37(0x9c9,0x12c8,0xb5e,0xe7d)+_0x4963f8(0xb90,0xb15,0xe05,0x110c):case'pussy':case _0x4963f8(0x1087,0xe7a,0xbfa,0x7e3):case _0x4963f8(0xa0c,0x78f,0x96e,0xb55):case'hug,':case _0x4963f8(0x956,0x7d0,0x5d6,0x6d8):case _0x4963f8(0x260,0x6e6,0x568,0x97b):case'spank':case _0x4963f8(0xa4c,0x1126,0xe4f,0xb70):case _0x128a37(0xe34,0x7eb,0x687,0x9dc):case'boobs':case _0x128a37(0xdea,0x1209,0xd52,0xe78):case _0x128a37(0x90c,0x860,0xb90,0x704):const _0x20316c={};_0x20316c[_0x4963f8(0xa92,0x98e,0xb90,0xa2f)+'t']=_0x4963f8(0xdad,0x9be,0xd18,0xc32)+'t';const _0x44b8be={};_0x44b8be[_0x4963f8(0x6ef,0xd56,0xa74,0xd89)]=_0x128a37(0x1123,0xe81,0x93a,0xd8b),_0x44b8be[_0x4963f8(0x7b6,0x66a,0x6c4,0xbd8)]=_0x20316c,_0x44b8be[_0x128a37(0xbbc,0xba7,0xe1e,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x44b8be]);if(!isNsfw&&!mek[_0x128a37(0xd34,0x1090,0xd8c,0xdbb)]['fromMe']&&!isOwner&&!isCreator)return reply(lang[_0x4963f8(0x30d,0x69c,0x53c,0x9a2)]());var ini_gif=await fetchJson('https://ne'+'kos.life/a'+_0x4963f8(0x6e4,0x9b6,0x6fe,0x550)+command),ini_gif_=await getBuffer(ini_gif[_0x128a37(0xaa3,0x11f5,0x1122,0xd58)]);const mediax_=await alpha['prepareMes'+_0x4963f8(0xf73,0x10ff,0xc33,0xc65)](from,ini_gif_,MessageType[_0x4963f8(0x8a6,0x20b,0x5df,0x26e)],{'thumbnail':Buffer[_0x4963f8(0x507,0x3e4,0x521,0x413)](0x1330*0x1+-0x156+-0x5*0x392)});let bacotlux_=mediax_[_0x4963f8(0x2bd,0xa82,0x5d9,0x5e2)][_0x128a37(0x722,0x90a,0xd55,0x99e)+_0x4963f8(0x6fd,0x688,0x742,0x4fd)]?mediax_[_0x4963f8(0x46e,0x4f9,0x5d9,0xb0c)][_0x4963f8(0x411,0xb55,0x8f4,0xb16)+_0x4963f8(0x583,0x599,0x742,0xa50)]:mediax_;const _0x4ddcfe={};_0x4ddcfe['displayTex'+'t']=_0x4963f8(0xcd7,0xca0,0xbd0,0xd38);const _0x3abc3d={};_0x3abc3d[_0x4963f8(0xd67,0x92b,0xa74,0x786)]=_0x128a37(0x1015,0xf0a,0xf4c,0xedc),_0x3abc3d[_0x128a37(0x3e9,0x920,0x632,0x76e)]=_0x4ddcfe,_0x3abc3d['type']=0x1;const _0x3a6295={};_0x3a6295['displayTex'+'t']='Sewa\x20☕';const _0x4f4493={};_0x4f4493['buttonId']=_0x128a37(0x608,0x6f5,0x6a3,0x849),_0x4f4493[_0x4963f8(0x4fd,0x361,0x6c4,0x5e3)]=_0x3a6295,_0x4f4493[_0x4963f8(0xcf8,0x80f,0xce9,0xdb1)]=0x1;const buttonsx_=[_0x3abc3d,_0x4f4493],btnx_={'contentText':lang[_0x4963f8(0x561,0x719,0x5bc,0x113)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4963f8(0x944,0xe12,0x9c2,0x91f)+_0x4963f8(0x83f,0xd6b,0x991,0xcbd))+sender['split']('@')[0x13ec+0x235e+-0x3f3*0xe],'buttons':buttonsx_,'headerType':0x5,'videoMessage':bacotlux_[_0x128a37(0x929,0xaf5,0x9c1,0x683)][_0x128a37(0x398,0x3ba,0xa0f,0x822)+'ge']},_0x21751f={};_0x21751f['mentionedJ'+'id']=[sender];const _0x5dc566={};_0x5dc566[_0x4963f8(0xda9,0x5c6,0x9c3,0xb88)]=mek,_0x5dc566[_0x128a37(0xaf8,0xcab,0x619,0x979)+'o']=_0x21751f,alpha[_0x128a37(0xe10,0xb07,0xa1c,0xcf9)+'e'](from,btnx_,MessageType[_0x128a37(0x841,0xb1d,0x5ef,0x827)+_0x4963f8(0xcfd,0xe07,0xc33,0x7ea)],_0x5dc566)[_0x4963f8(0xa7f,0x6e2,0x91c,0xe5b)](_0xa168be=>{function _0x1c04d1(_0xe99f84,_0x405db7,_0x19933a,_0x240a16){return _0x128a37(_0xe99f84-0x1ba,_0x19933a,_0x19933a-0x156,_0xe99f84- -0x1c6);}const _0xcc9d6f={'jsQxf':function(_0x3abdf8,_0x45a9ec){return _0x3abdf8(_0x45a9ec);}};function _0x59f5f8(_0x3f92af,_0x322255,_0x14b961,_0xc48a91){return _0x4963f8(_0x14b961,_0x322255-0x1cd,_0x3f92af-0x16e,_0xc48a91-0x18a);}_0xcc9d6f[_0x59f5f8(0xc90,0xa28,0xe06,0xd2f)](reply,lang[_0x1c04d1(0x427,0x235,-0xd8,0x589)]());});break;case _0x128a37(0xfe8,0x8dc,0x755,0xab4):case _0x128a37(0x448,0x455,0x950,0x5e9):case'woof':case _0x128a37(0x3c2,0xdf,0x920,0x550):case _0x128a37(0xebf,0x134d,0x138e,0xf43):case _0x128a37(0x11cc,0x131e,0xf34,0xed4):case'goose':case _0x128a37(0xc57,0x656,0xac5,0x763):case _0x4963f8(0xcaa,0x8d1,0x969,0xc93):case _0x128a37(0x11f2,0xe62,0xaa3,0xd9f):case'gecg':case'holo':case _0x128a37(0xcbb,0x7d0,0x904,0x81e):case'tits':case _0x4963f8(0x3d0,0x2a3,0x6dd,0x8bd):case _0x128a37(0x93d,0x6e7,0xb91,0xb15):case _0x128a37(0xfe8,0x114d,0x1065,0xe06):case'yuri':case _0x4963f8(0xe1b,0x11e8,0xcf4,0xaf7):case _0x4963f8(0x106b,0xea7,0xea7,0xecf):case'hentai':case _0x128a37(0x1027,0x70a,0xf91,0xb4f):case _0x4963f8(0x723,0xb9c,0xa93,0xe46):case _0x128a37(0x958,0x107c,0xf4e,0xd7f):case'cum_jpg':case _0x4963f8(0xe62,0x13b1,0xe9e,0xe24)+'r':case _0x128a37(0x8c9,0xee4,0x82d,0xd6d):case _0x128a37(0x107d,0x1059,0x9e4,0xef4):case _0x128a37(0x7e5,0x26d,0x254,0x573):case _0x128a37(0x1022,0x972,0xe92,0xb69):case _0x128a37(0xf01,0xd46,0xa19,0xcb5):case _0x128a37(0xb31,0xa0d,0xd91,0xaee):case _0x128a37(0x56e,0x855,0x33b,0x5e2):case _0x4963f8(0x3cb,0x7c0,0x45c,0x6ce):case _0x4963f8(0x970,0xe10,0x8d7,0x9f1):case _0x4963f8(0x5fa,0xbcd,0x79d,0x7d9):case _0x128a37(0x99f,0xc7f,0xc22,0x9c8):const _0x1ee0d5={};_0x1ee0d5[_0x128a37(0x106f,0x93a,0x919,0xc3a)+'t']=_0x4963f8(0xf79,0x829,0xd18,0xdfe)+'t';const _0x2330c8={};_0x2330c8[_0x4963f8(0xe1e,0xd32,0xa74,0xb52)]=_0x128a37(0x9e1,0xbde,0xe31,0xd8b),_0x2330c8[_0x128a37(0x312,0xaaa,0x879,0x76e)]=_0x1ee0d5,_0x2330c8[_0x4963f8(0x8d2,0xa54,0xce9,0x7e4)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xff6,0xada,0xce1,0xcda)](prefix),'©\x20'+ownername,[_0x2330c8]);if(!isNsfw&&!mek[_0x128a37(0x1089,0xade,0x12dc,0xdbb)][_0x128a37(0xd4d,0x887,0xd15,0xafd)]&&!isOwner&&!isCreator)return reply(lang[_0x128a37(0x401,0x3a0,0xec,0x5e6)]());var ini_img=await fetchJson(_0x4963f8(0xaf8,0xd13,0x91d,0xd8f)+_0x128a37(0xb77,0xa38,0x7fa,0xa09)+'pi/v2/img/'+command),ini_img_=await getBuffer(ini_img[_0x128a37(0xcf7,0xb4d,0xb43,0xd58)]);const mediax=await alpha[_0x128a37(0x386,0x83d,0x28c,0x5da)+'sage'](from,ini_img_,MessageType[_0x128a37(0xb58,0x8a5,0x934,0x999)],{'thumbnail':Buffer[_0x4963f8(0x384,0x826,0x521,0x4b9)](0xe6d+0x20d*0x2+-0x1287)});let bacotlux=mediax[_0x128a37(0x65d,0xa5a,0x700,0x683)][_0x128a37(0xeed,0x5f5,0xc08,0x99e)+_0x4963f8(0x3fe,0xb27,0x742,0x256)]?mediax[_0x128a37(0x39b,0x78d,0x17a,0x683)]['ephemeralM'+_0x128a37(0xb2d,0x5e9,0x371,0x7ec)]:mediax;const _0x3f154f={};_0x3f154f['displayTex'+'t']=_0x4963f8(0x99f,0xfc3,0xbd0,0x962);const _0xa34eda={};_0xa34eda[_0x4963f8(0xf1a,0x98a,0xa74,0xa9f)]=_0x128a37(0x114b,0xe82,0xd39,0xedc),_0xa34eda[_0x128a37(0x31a,0xb86,0xc61,0x76e)]=_0x3f154f,_0xa34eda[_0x4963f8(0xf97,0xc9a,0xce9,0xb42)]=0x1;const _0xeb93a7={};_0xeb93a7[_0x4963f8(0xd3e,0xcc0,0xb90,0xec2)+'t']=_0x128a37(0x5fd,0x676,0x726,0xb09);const _0x34e473={};_0x34e473[_0x128a37(0x999,0xb4d,0x5de,0xb1e)]=_0x128a37(0x535,0x979,0xa14,0xa04),_0x34e473[_0x4963f8(0xb41,0x4f0,0x6c4,0x2fe)]=_0xeb93a7,_0x34e473[_0x128a37(0x11b7,0xb6c,0x8c9,0xd93)]=0x1;const buttonsx=[_0xa34eda,_0x34e473],btnx__={'contentText':lang[_0x128a37(0x73b,0x130,0x4c6,0x666)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4963f8(0x925,0x75c,0x9c2,0x768)+_0x128a37(0xa79,0x572,0x8cd,0xa3b))+sender[_0x4963f8(0x776,0x96d,0x4d7,0x94d)]('@')[-0x1e65+-0x1476+0x32db],'buttons':buttonsx,'headerType':0x4,'imageMessage':bacotlux[_0x128a37(0x5e7,0x2a4,0x232,0x683)]['imageMessa'+'ge']},_0x4b0b6e={};_0x4b0b6e['mentionedJ'+'id']=[sender];const _0x42886f={};_0x42886f[_0x4963f8(0xa18,0x8ef,0x9c3,0xb53)]=mek,_0x42886f[_0x4963f8(0x5cf,0x900,0x8cf,0xa4f)+'o']=_0x4b0b6e,alpha[_0x128a37(0xea8,0xfd0,0x1207,0xcf9)+'e'](from,btnx__,MessageType['buttonsMes'+_0x128a37(0xcaf,0x825,0x1008,0xcdd)],_0x42886f)['catch'](_0x5a6eeb=>{function _0x32b742(_0x1641c3,_0x428499,_0x375c7b,_0x296879){return _0x128a37(_0x1641c3-0xc3,_0x296879,_0x375c7b-0x147,_0x375c7b- -0x3df);}const _0x5e5433={'ZeQdh':function(_0xd3b240,_0x25aa52){return _0xd3b240(_0x25aa52);}};function _0x40e6db(_0x283cc9,_0x578863,_0x75d005,_0x44994c){return _0x4963f8(_0x75d005,_0x578863-0x1a1,_0x44994c- -0xb0,_0x44994c-0x3d);}_0x5e5433[_0x40e6db(0xe9d,0xa04,0x8db,0xcae)](reply,lang[_0x40e6db(-0xab,0x8c8,0x94b,0x493)]());}),await limitAdd(sender,limit);break;case'amongus':const _0x4bb364={};_0x4bb364[_0x4963f8(0xf2f,0x927,0xb90,0xb96)+'t']=_0x4963f8(0x1258,0xfab,0xd18,0x120f)+'t';const _0x3df547={};_0x3df547[_0x128a37(0x8d6,0xab6,0xdd1,0xb1e)]='limit',_0x3df547['buttonText']=_0x4bb364,_0x3df547[_0x128a37(0x8c7,0x891,0xfb2,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x98d,0x12af,0xdad,0xd8b)](prefix),'©\x20'+ownername,[_0x3df547]);const pref=_0x128a37(0x4fc,0x3ba,0x615,0x73c)+enter+('\x20amongus\x20u'+_0x4963f8(0x81a,0x427,0x680,0x447)+_0x4963f8(0x10fb,0x6d4,0xc1b,0x10d9)+'rue\x20/\x20not\x20'+_0x128a37(0x2ad,0xa82,0x561,0x5df)+'\x20false\x20\x0aco'+_0x4963f8(0x768,0xf8a,0xae8,0x980)+_0x4963f8(0xe06,0xdbb,0x9b9,0x82e)+_0x128a37(0x10b5,0x8ba,0xa0c,0xd45)+'rkgreen|li'+_0x128a37(0x1173,0xcbb,0xbdb,0xcdc)+_0x128a37(0x8ff,0xab8,0x63b,0x8d9)+_0x4963f8(0xb21,0x11d3,0xd01,0xfcd)+_0x128a37(0x28c,0x4a5,0x464,0x5d0))+enter+enter+'Ex\x20:'+enter+'\x20'+prefix+(_0x4963f8(0x57e,0x41c,0x82e,0x751)+_0x4963f8(0x957,0x14f,0x488,0x665)+_0x4963f8(0xaf5,0x958,0x6a0,0x6cf));if(args['length']<0x3b7*-0x6+0x732*0x2+-0x7e7*-0x1)return reply(pref);var kntl_=args['join']('\x20'),nama_=kntl_[_0x4963f8(0x21d,0x65d,0x4d7,0x37)]('|')[-0x1d86+0x4b9+0x38b*0x7],impostor_=kntl_[_0x128a37(0x71f,0x712,0xcc,0x581)]('|')[0xe2a+0x26b5+0x1a6f*-0x2],color_=kntl_[_0x128a37(0x209,0x99e,0x6a,0x581)]('|')[0x363+0x3*-0x12d+0x26];const _0x4e4b25={};_0x4e4b25[_0x4963f8(0xb76,0x9a5,0xa4e,0x73e)]=_0x4963f8(0x932,0x9c,0x52a,0x50d);var amongus=await getBuffer(_0x128a37(0x824,0x87a,0xca2,0xd3a)+_0x4963f8(0x828,0x541,0x9a8,0xebe)+_0x128a37(0xab4,0x91f,0x7e6,0x6b0)+'d?name='+nama_+'&impostor='+impostor_+'&crewmate='+color_,_0x4e4b25);amongusp=''+lang[_0x128a37(0x533,0x57d,0x1b9,0x666)]()+enter+enter+(_0x128a37(0x6a6,0x10e3,0x7e0,0xbc3)+_0x128a37(0xba7,0x1194,0x10c8,0xc85)+'ps://youtu'+_0x4963f8(0xa5d,0x557,0x7f4,0x926)+_0x4963f8(0xba8,0x877,0xac0,0x828)),alpha[_0x128a37(0xf8f,0xd44,0x104e,0xcf9)+'e'](from,amongus,image,{'thumbnail':Buffer[_0x4963f8(0x835,0x307,0x521,0x375)](-0x7f*0x1+0x11c4*-0x1+0x1243),'caption':lang[_0x128a37(0x1f9,0x2c0,0x15a,0x666)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x128a37(0x1148,0xa0d,0xdd9,0xed2):case _0x128a37(0x423,0xc50,0x47a,0x891):case _0x4963f8(0x290,0x279,0x4cf,0x51c):if(args[_0x4963f8(0x544,0x31a,0x6e2,0x534)]<0x17*-0xae+-0x489+-0x2*-0xa16)return reply('..');const _0x1604e8={};_0x1604e8[_0x128a37(0x86d,0xc6a,0x811,0xc3a)+'t']=_0x4963f8(0xe3e,0x9c6,0xd18,0xff0)+'t';const _0x485826={};_0x485826[_0x128a37(0x8b1,0x7c9,0x6dd,0xb1e)]=_0x128a37(0x122e,0xf60,0x10dc,0xd8b),_0x485826[_0x128a37(0xa74,0xa6b,0x7e8,0x76e)]=_0x1604e8,_0x485826[_0x4963f8(0x83f,0xbe1,0xce9,0x11b4)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xd78,0xade,0xa96,0xd8b)](prefix),'©\x20'+ownername,[_0x485826]);let trump=args[_0x128a37(0x1170,0xdd6,0x1136,0xde3)]('\x20');const _0x3a70a3={};_0x3a70a3[_0x128a37(0x9f0,0x92c,0xee5,0xaf8)]=_0x128a37(0x2b5,0x33c,0x4c8,0x5d4);let trump1=await fetchJson(_0x128a37(0x7d1,0x528,0x5bd,0x9c7)+_0x4963f8(0x825,0xc76,0x781,0x631)+_0x128a37(0xdfa,0x10d5,0xc69,0xce1)+'en?type=tr'+'umptweet&t'+_0x128a37(0x67e,0xd56,0x101e,0xb80)+trump+_0x128a37(0x6c0,0xaf8,0x308,0x745),_0x3a70a3),trump2=await getBuffer(trump1['message']);alpha['sendMessag'+'e'](from,trump2,image,{'thumbnail':Buffer[_0x128a37(0x607,0x2c2,0x954,0x5cb)](-0x55f+0x1908+-0x13a9),'caption':lang[_0x4963f8(0x2d4,0x3f5,0x5bc,0x124)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x128a37(0x6bc,0x53e,0x8e9,0x5c4):if(args[_0x128a37(0xb0f,0xb4d,0x347,0x78c)]<-0x19b4+0x1d*-0x56+0x2373)return reply('..');const _0x49b11d={};_0x49b11d[_0x4963f8(0xebf,0x8a4,0xb90,0x802)+'t']='Check\x20Limi'+'t';const _0x5150f4={};_0x5150f4[_0x128a37(0x774,0x6b6,0x78f,0xb1e)]=_0x128a37(0xd4d,0xcb5,0xa2c,0xd8b),_0x5150f4[_0x128a37(0x34f,0x44f,0x550,0x76e)]=_0x49b11d,_0x5150f4[_0x128a37(0xae3,0x117b,0x851,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x8a2,0xfe6,0xce1,0x8f2)](prefix),'©\x20'+ownername,[_0x5150f4]);let cmm=args[_0x128a37(0x1246,0x8a7,0xe08,0xde3)]('\x20');const _0x305ef8={};_0x305ef8[_0x128a37(0x780,0x9bd,0xc19,0xaf8)]='get';let anuuu=await fetchJson(_0x4963f8(0x9be,0xcbf,0x91d,0x747)+_0x4963f8(0x233,0x396,0x781,0x73d)+_0x4963f8(0x874,0xcc2,0xc37,0xd78)+_0x128a37(0xc9c,0xba6,0xb19,0xb46)+_0x128a37(0xe18,0x8e2,0x860,0xa39)+'&text='+cmm+'&raw=7',_0x305ef8),bbuffer=await getBuffer(anuuu['message']);alpha[_0x128a37(0xe56,0x8ae,0xa92,0xcf9)+'e'](from,bbuffer,image,{'thumbnail':Buffer[_0x4963f8(0x849,0x9bd,0x521,0x4a)](-0x1*-0xb2e+-0x24d9+0x1*0x19ab),'caption':lang[_0x4963f8(0x633,0x5a4,0x5bc,0x5b7)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x128a37(0x7e1,0x9af,0x5e3,0x832):if(args[_0x128a37(0x4e3,0x33d,0xac0,0x78c)]<-0x2*-0x1af+-0x2117+0xedd*0x2)return reply('..');let kanna=args[_0x128a37(0x1051,0x95d,0x1249,0xde3)]('\x20');const _0x473825={};_0x473825[_0x128a37(0xfcc,0xbd7,0x7ca,0xaf8)]=_0x4963f8(0x77e,0xec,0x52a,0x19f);var anu_=await fetchJson('https://ne'+'kobot.xyz/'+'api/imageg'+'en?type=ka'+_0x128a37(0x931,0xbfb,0xe87,0xab9)+'t='+kanna+'&raw=7',_0x473825);let buffer_h=await getBuffer(anu_['message']);alpha[_0x4963f8(0xee3,0x115c,0xc4f,0x7cb)+'e'](from,buffer_h,image,{'thumbnail':Buffer['alloc'](-0x4e7+-0x1d59+0x2240),'caption':lang[_0x128a37(0x52c,0x4ff,0x64c,0x666)](),'quoted':mek}),await limitAdd(sender,limit);break;case'awoawo':case _0x128a37(0xcd2,0x1027,0xf29,0xe1e):case _0x4963f8(0x89f,0x952,0xd4b,0x11bf):case'dbfly':case _0x128a37(0x410,0x68e,0xa41,0x685)+'g':case _0x4963f8(0x473,0x568,0x6d4,0xbea):case _0x4963f8(0xca1,0x72f,0xa0d,0xc29):case'hope_boy':case _0x128a37(0x8fb,0x61d,0xe2f,0xb01):case _0x4963f8(0x11a5,0xc48,0xd8e,0xc3e):case _0x4963f8(0x8d5,0x532,0x8b0,0x3c2):case _0x4963f8(0xe6f,0xe43,0xb24,0xe68):case _0x4963f8(0x293,0x51b,0x708,0x73b)+'di':case'menjamet':case _0x128a37(0x1336,0x1074,0x1069,0xef4):case _0x4963f8(0x5e4,0x778,0x7b6,0xc1b):case _0x4963f8(0xeb9,0x1251,0xe61,0x1196):case _0x128a37(0x3cf,0x8ae,0x573,0x8d0):case _0x128a37(0x77d,0x82b,0x86d,0xa4f):case _0x128a37(0x9bc,0x4c9,0xc12,0x6e2)+_0x128a37(0xbc5,0x10e4,0xfc8,0xe2f):case'tyni':const _0x23db1e={};_0x23db1e[_0x128a37(0xc0e,0x8e9,0xfe3,0xc3a)+'t']=_0x128a37(0xdc3,0xf01,0x125e,0xdc2)+'t';const _0x52a75f={};_0x52a75f['buttonId']=_0x128a37(0x9c7,0x109c,0xc6d,0xd8b),_0x52a75f[_0x128a37(0x3a4,0x4d8,0x4dc,0x76e)]=_0x23db1e,_0x52a75f[_0x128a37(0xb5b,0xf47,0x12b4,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x52a75f]);reply(lang[_0x128a37(0x444,0x6f2,0x320,0x79b)]());var random_telestc=await getBuffer('https://ap'+_0x128a37(0x1222,0x10a7,0x11e5,0xf67)+'.herokuapp'+'.com/api/t'+_0x128a37(0x2bb,0x2b4,0x30b,0x578)+'r/'+command+('?apikey=of'+'fline'));const _0x4d8236={};_0x4d8236[_0x4963f8(0xc82,0x4fd,0x9c3,0x6ee)]=fgclink,await alpha[_0x128a37(0x943,0xe9d,0x11a1,0xcf9)+'e'](from,random_telestc,sticker,_0x4d8236),await limitAdd(sender,limit);break;case _0x128a37(0x51f,0xc15,0xb07,0xa29):case'delvira':case _0x128a37(0xbd0,0x1117,0x136f,0xf2e):case _0x4963f8(0xf7f,0xb06,0xed0,0x1124):case _0x128a37(0xdfd,0xbff,0x74e,0xc5d):case _0x128a37(0xeb6,0xf4c,0xb86,0xaf6):case _0x128a37(0xd16,0xcac,0xbb5,0xf3d):case _0x128a37(0xaee,0xb7f,0xe6a,0xb2b):case _0x4963f8(0xc15,0x8f5,0x710,0x64e):case _0x128a37(0xb88,0x901,0xdba,0xb5e):case _0x4963f8(0xac5,0x490,0x62c,0x8ba):case'syifa':case _0x4963f8(0xeac,0xd49,0xada,0xa66):case _0x128a37(0x9c7,0x8f7,0x8e5,0x9f3):case'mangayutri':case _0x4963f8(0x111,0x607,0x5de,0xa0c)+'ni':case _0x128a37(0xc13,0xa71,0x962,0xa57):case _0x128a37(0x94b,0xafd,0x9de,0x8e0):case _0x4963f8(0xc71,0x1134,0xce2,0x8d7):case _0x128a37(0x8a1,0xd48,0x865,0x85f):case _0x4963f8(0xb64,0xb5a,0x76c,0x282):const _0x1196e5={};_0x1196e5[_0x128a37(0x6f5,0xf13,0xec8,0xc3a)+'t']=_0x128a37(0x125e,0xb43,0x114e,0xdc2)+'t';const _0x4082ae={};_0x4082ae[_0x128a37(0x807,0x9cc,0x9e1,0xb1e)]=_0x4963f8(0x948,0xfd0,0xce1,0xd96),_0x4082ae[_0x4963f8(0x8fc,0x5f2,0x6c4,0x88f)]=_0x1196e5,_0x4082ae[_0x128a37(0xc79,0xa81,0xb08,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x4082ae]);reply(lang[_0x128a37(0xad1,0x858,0x2fc,0x79b)]());var random_asupan=await getBuffer(_0x4963f8(0x1151,0xe06,0xc4b,0x1195)+_0x128a37(0x124f,0xe27,0xe06,0xf67)+'.herokuapp'+_0x128a37(0x6a0,0x76e,0xac,0x4f7)+'supan/'+command+(_0x4963f8(0x3dc,0xc53,0x803,0x945)+'fline'));const mediaxx=await alpha['prepareMes'+_0x128a37(0xb70,0x848,0xfae,0xcdd)](from,random_asupan,MessageType['video'],{'thumbnail':Buffer[_0x4963f8(0x93c,0x6e9,0x521,0x70b)](-0xe63+-0x157a*0x1+0x23dd*0x1)});let bacotluxx=mediaxx[_0x4963f8(0x7ac,0x505,0x5d9,0xf7)]['ephemeralM'+_0x4963f8(0x2d7,0xbdb,0x742,0x497)]?mediaxx[_0x128a37(0x8ab,0xa11,0x28f,0x683)][_0x128a37(0xcdc,0xbfc,0x601,0x99e)+_0x128a37(0xae5,0x9fd,0xa82,0x7ec)]:mediaxx;const _0x4f0d3f={};_0x4f0d3f[_0x128a37(0xa76,0xa13,0x983,0xc3a)+'t']=_0x128a37(0xd94,0xaa8,0xba6,0xc7a);const _0x5551a8={};_0x5551a8[_0x4963f8(0xf46,0x52a,0xa74,0xbed)]=_0x128a37(0x1181,0xaad,0x12d4,0xedc),_0x5551a8['buttonText']=_0x4f0d3f,_0x5551a8[_0x4963f8(0xb89,0xe3c,0xce9,0xd64)]=0x1;const _0x9916ae={};_0x9916ae[_0x4963f8(0xc40,0xa78,0xb90,0x9ec)+'t']='Donasi\x20💰';const _0x43a5b7={};_0x43a5b7[_0x128a37(0xcf8,0x81b,0x7be,0xb1e)]=_0x128a37(0x73a,0xe7c,0xbba,0xa04),_0x43a5b7[_0x4963f8(0x3bc,0x97f,0x6c4,0x7f2)]=_0x9916ae,_0x43a5b7[_0x4963f8(0x943,0x97b,0xce9,0xfc7)]=0x1;const buttonsxx=[_0x5551a8,_0x43a5b7],btnx___={'contentText':lang[_0x4963f8(0xe2,0x4db,0x5bc,0x2b0)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4963f8(0x9a9,0x5bd,0x9c2,0xa71)+_0x128a37(0xdfe,0xd96,0x80a,0xa3b))+sender[_0x128a37(0x3ae,0x5ca,0x1d2,0x581)]('@')[-0x1*-0x26dd+0xc58+-0x1*0x3335],'buttons':buttonsxx,'headerType':0x5,'videoMessage':bacotluxx[_0x128a37(0x27c,0x7ce,0x9f2,0x683)]['videoMessa'+'ge']},_0x1cc466={};_0x1cc466[_0x4963f8(0xecc,0xa14,0xd64,0x8f4)+'id']=[sender];const _0x2f878a={};_0x2f878a[_0x4963f8(0xef7,0xd3d,0x9c3,0xd08)]=mek,_0x2f878a[_0x4963f8(0x9e8,0x8d0,0x8cf,0xa48)+'o']=_0x1cc466,alpha[_0x4963f8(0x7b7,0x117d,0xc4f,0xfe3)+'e'](from,btnx___,MessageType['buttonsMes'+_0x128a37(0xfbd,0xa81,0x10ee,0xcdd)],_0x2f878a)[_0x128a37(0xc53,0x4a3,0xb69,0x9c6)](_0x4241e6=>{function _0x3c845d(_0x6da46e,_0x3ab375,_0x49e414,_0x33d484){return _0x128a37(_0x6da46e-0x1b4,_0x49e414,_0x49e414-0x1c5,_0x6da46e- -0x6e4);}const _0x472dc6={'RwFFo':function(_0x4448fe,_0x524174){return _0x4448fe(_0x524174);},'NTvRW':_0x4a547d(0x7ca,0x4f0,0xac5,0x903)+_0x4a547d(0x4ea,0xbd,0x3da,0x754)+_0x4a547d(0x709,0x799,0x404,0xad4)+_0x4a547d(0x9fe,0x5e9,0xbe1,0x531)+'gi'};function _0x4a547d(_0x409ad1,_0x2fb1a8,_0x2cc2b5,_0x19bb83){return _0x128a37(_0x409ad1-0x1ed,_0x2fb1a8,_0x2cc2b5-0x41,_0x409ad1- -0x48a);}_0x472dc6[_0x3c845d(0x719,0xaae,0x6c7,0x72d)](reply,_0x472dc6[_0x3c845d(0x48c,0x7d5,0x385,0x139)]);}),await limitAdd(sender,limit);break;case'china':case _0x4963f8(0x91b,0x933,0x5bf,0x510):case'malaysia':case'thailand':case _0x4963f8(0xebb,0xc05,0x971,0x518):case _0x4963f8(0xa29,0xff7,0xcbd,0xdda):case _0x4963f8(0x1016,0xe6d,0xdb6,0x98b):case'jenni':case _0x4963f8(0xc5e,0x2d6,0x7c8,0x89a):case'lisa':case'rose':const _0x1cab2d={};_0x1cab2d[_0x4963f8(0x85c,0x7b5,0xb90,0xfa3)+'t']=_0x128a37(0xd59,0x108b,0xaf0,0xdc2)+'t';const _0x557e63={};_0x557e63[_0x128a37(0xc41,0xcc9,0x67b,0xb1e)]=_0x128a37(0xdec,0xd9c,0xa9f,0xd8b),_0x557e63['buttonText']=_0x1cab2d,_0x557e63['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x96c,0x11c8,0x1219,0xd8b)](prefix),'©\x20'+ownername,[_0x557e63]);reply(lang['wait']());var random_cecan=await getBuffer(_0x128a37(0x10ca,0xa12,0xd3e,0xcf5)+_0x128a37(0x13fa,0xc18,0x13d0,0xf67)+_0x4963f8(0xa2a,0xc76,0xba7,0xdb1)+'.com/api/c'+'ecan/'+command+(_0x4963f8(0xb0f,0x548,0x803,0xc6b)+'fline'));const mediaxxx=await alpha['prepareMes'+_0x128a37(0x842,0xb58,0xb8c,0xcdd)](from,random_cecan,MessageType[_0x4963f8(0xa18,0x661,0x8ef,0x980)],{'thumbnail':Buffer[_0x4963f8(0x939,0x576,0x521,0x910)](-0x9bf*0x1+0x7f9+0x1c6)});let bacotluxxx=mediaxxx['message'][_0x128a37(0x955,0xd71,0xd25,0x99e)+_0x4963f8(0x334,0x560,0x742,0xa74)]?mediaxxx[_0x4963f8(0x5d3,0x9c2,0x5d9,0x32c)][_0x4963f8(0xbc5,0xaca,0x8f4,0x504)+_0x4963f8(0x411,0x708,0x742,0x3a6)]:mediaxxx;const _0x4c3652={};_0x4c3652[_0x128a37(0xa2c,0xfd5,0x85e,0xc3a)+'t']=_0x128a37(0xc6f,0xa7a,0x74d,0xc7a);const _0x1a7dfd={};_0x1a7dfd[_0x128a37(0xbdc,0x90c,0xba0,0xb1e)]='owner',_0x1a7dfd[_0x128a37(0x509,0x515,0x321,0x76e)]=_0x4c3652,_0x1a7dfd['type']=0x1;const _0x390ef2={};_0x390ef2[_0x128a37(0x1101,0xc63,0x1065,0xc3a)+'t']='Donasi\x20💰';const _0x1e5118={};_0x1e5118[_0x128a37(0x828,0xa8f,0xae9,0xb1e)]=_0x4963f8(0x95d,0xc2f,0x95a,0xce9),_0x1e5118[_0x128a37(0x920,0x878,0x2e3,0x76e)]=_0x390ef2,_0x1e5118[_0x4963f8(0x10d6,0x928,0xce9,0x8a2)]=0x1;const buttonsxxx=[_0x1a7dfd,_0x1e5118],btnxx__={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+'\x20by\x20@')+sender[_0x4963f8(0x840,-0x48,0x4d7,0x59)]('@')[0x2211+-0xfa4+-0x126d],'buttons':buttonsxxx,'headerType':0x4,'imageMessage':bacotluxxx[_0x128a37(0x3d6,0x9f9,0x3bf,0x683)][_0x128a37(0x890,0xa03,0xdc3,0x9ea)+'ge']},_0x3ac3a4={};_0x3ac3a4[_0x128a37(0xeda,0xef3,0x8c1,0xe0e)+'id']=[sender];const _0x32e66f={};_0x32e66f[_0x4963f8(0xbbe,0xa41,0x9c3,0x5fa)]=mek,_0x32e66f[_0x4963f8(0x9e9,0x64f,0x8cf,0x3e6)+'o']=_0x3ac3a4,alpha[_0x4963f8(0xd3a,0xe04,0xc4f,0x9be)+'e'](from,btnxx__,MessageType['buttonsMes'+_0x128a37(0xe8b,0x827,0xff5,0xcdd)],_0x32e66f)[_0x4963f8(0x78f,0x938,0x91c,0xa74)](_0x1126ee=>{function _0x20d55c(_0x207cb6,_0x2f371e,_0x52ccaa,_0x1f7b5f){return _0x4963f8(_0x2f371e,_0x2f371e-0x1a1,_0x52ccaa- -0x8a,_0x1f7b5f-0x3a);}const _0x6a793={'ITJFM':function(_0xf0a1fb,_0x251eb5){return _0xf0a1fb(_0x251eb5);},'PGujS':_0x20d55c(0xcd3,0x1024,0xb20,0xf9e)+_0x5b76e5(0x5ad,0x473,0x675,0x4b8)+'oba\x20bebera'+'pa\x20saat\x20la'+'gi'};function _0x5b76e5(_0x2b1f6e,_0x3c35b7,_0x3b17bd,_0x99a0a9){return _0x4963f8(_0x3c35b7,_0x3c35b7-0x146,_0x2b1f6e- -0x31d,_0x99a0a9-0x1ee);}_0x6a793[_0x5b76e5(0x402,0x92e,0x423,0x67e)](reply,_0x6a793[_0x5b76e5(0x861,0xc04,0x744,0xd19)]);}),await limitAdd(sender,limit);break;case'sc':case _0x4963f8(0x665,0x6e4,0x874,0xb5f):case _0x128a37(0xb9b,0x826,0xf82,0xd23):try{opo=await fetchJson(_0x4963f8(0xdda,0xdf0,0xc4b,0xda3)+_0x128a37(0xdb7,0xcaf,0xc39,0xf67)+_0x4963f8(0xeae,0xda4,0xba7,0x738)+_0x128a37(-0x46,0x7b0,0xd3,0x4f7)+'lpha/v14');}catch{const _0x30a30a={};_0x30a30a['update']=_0x4963f8(0xac4,0x720,0x8d9,0x610)+'cript\x20Bot\x20'+_0x4963f8(0xbb1,0x88c,0xd22,0x827)+_0x128a37(0x85f,0xb65,0xa9a,0xba3)+_0x4963f8(0xb39,0xf59,0xbe3,0x90c)+_0x128a37(0x4d0,0x83d,0x7c0,0x7a4),opo=_0x30a30a;}let kl=opo[_0x4963f8(0xb5e,0x3f4,0x705,0x550)];var sjakolan=await getBuffer('https://te'+_0x128a37(0x898,0x820,0x32d,0x632)+_0x128a37(0x40a,0x51f,0x5fc,0x73d)+_0x4963f8(0x25b,0x540,0x572,0x53a)+_0x128a37(0xa3b,0xb23,0xc60,0x7e2));const _0x7af9e9={};_0x7af9e9[_0x4963f8(0x9df,0x7f5,0xb90,0x107c)+'t']='⋮☰\x20MENU';const _0x39a621={};_0x39a621[_0x128a37(0xd3f,0x9dd,0x7c2,0xb1e)]=_0x4963f8(0x3bf,0x6b1,0x7d0,0xc24),_0x39a621[_0x4963f8(0x43c,0x468,0x6c4,0x8a5)]=_0x7af9e9,_0x39a621[_0x128a37(0x10d9,0xd05,0xce4,0xd93)]=0x1;const _0x54daa8={};_0x54daa8[_0x4963f8(0x986,0xf9b,0xb90,0xb3f)+'t']=_0x4963f8(0x855,0x93e,0xd84,0xe7d);const _0x23b6ce={};_0x23b6ce[_0x128a37(0xe0d,0x5f1,0xd2b,0xb1e)]=_0x4963f8(0xd43,0xee5,0xe32,0x1038),_0x23b6ce[_0x4963f8(0x4ac,0x7dd,0x6c4,0x73c)]=_0x54daa8,_0x23b6ce[_0x4963f8(0xa91,0x869,0xce9,0x863)]=0x1,sendButLocation(from,kl,''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x128a37(0xe4f,0xa0b,0xa2d,0xc9f)+ini_mark[_0x4963f8(0x90f,0x626,0x4d7,0x944)]('@')[0x1a11+0xc*-0x32+-0x17b9],sjakolan,[_0x39a621,_0x23b6ce],{'contextInfo':{'mentionedJid':[ini_mark]}});break;case'katalog':sendKatalog(_0x128a37(0x8b6,0x64a,0x157,0x542)+_0x128a37(0x7cc,0x4aa,0xa94,0x8de),_0x128a37(0xa60,0xcbd,0xcbe,0xf1e)+'00','Tes\x20aja\x20om');break;case'play':const _0x374a39={};_0x374a39[_0x4963f8(0x780,0xdd8,0xb90,0xa0e)+'t']=_0x4963f8(0xe7e,0xca5,0xd18,0x8cc)+'t';const _0x2cedb5={};_0x2cedb5[_0x128a37(0xb63,0x865,0xa91,0xb1e)]=_0x128a37(0xf60,0x955,0xe8b,0xd8b),_0x2cedb5[_0x128a37(0xbe4,0x40d,0xbe3,0x76e)]=_0x374a39,_0x2cedb5[_0x4963f8(0xa38,0xc20,0xce9,0xc63)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x12d6,0x9ea,0xd78,0xd8b)](prefix),'©\x20'+ownername,[_0x2cedb5]);if(args['length']<-0x106*-0xc+0x1b2f+-0x1*0x2776)return reply(_0x128a37(0xafd,0x720,0x702,0xb2c)+_0x128a37(0x400,0xa93,0x322,0x6bb)+prefix+(_0x4963f8(0x9b3,0xbd2,0x756,0xc35)+'*'));reply(lang[_0x4963f8(0x945,0xbf7,0x6f1,0x966)]());let yut=await yts(q);server=_0x4963f8(0x607,0x3d5,0x71b,0x5bf),yta2(yut['videos'][0xf2f+0x1914+-0x2843][_0x4963f8(0xb83,0x102e,0xcae,0xcbb)],server)['then'](async _0x1339e0=>{const _0x20f197={};_0x20f197[_0x5a4c6c(0xfd7,0xc43,0xc85,0xc3f)]=_0x4676ad(0x4c7,0x77a,0x359,0x46e),_0x20f197[_0x5a4c6c(0xa3c,0x539,0xfb,0x2f8)]='Audio\x20(128'+_0x4676ad(0xa6,0x51c,0x921,0x638);const _0x1f9a8a=_0x20f197,{thumb:_0x3ff797,title:_0x2b2914,filesizeF:_0x12a725,filesize:_0x320592}=_0x1339e0,_0x2ab41d=_0x4676ad(0xd34,0xad7,0xdd8,0x5b0)+_0x4676ad(0x366,0x7ee,0x9ee,0xc64)+_0x5a4c6c(0x89a,0x673,0x20d,0x1a2)+_0x4676ad(0x814,0x399,0xe6,0x25)+_0x2b2914+_0x5a4c6c(0x3dc,0x926,0x659,0x6f3)+yut['videos'][0xd99*0x1+-0x1*0x1bf7+0xe5e][_0x5a4c6c(0x516,0x3eb,0x40e,-0x66)]+(_0x4676ad(0x4a9,0x4f9,0x5fb,0xee)+':\x20')+yut[_0x5a4c6c(0x33e,0x543,0x2c3,0x3ce)][-0x3d9+0x11b3+-0xdda][_0x4676ad(-0x2d,0x411,0x663,0x1e1)]+_0x4676ad(0x18a,0x45b,0x583,0x193)+_0x12a725+_0x5a4c6c(0x3fe,0x3d6,0x70c,0x1ac)+yut[_0x4676ad(0x436,0x4d4,0x9c0,0x26)][0x1d91+0x42f*0x6+0x1*-0x36ab][_0x4676ad(0x647,0x8c4,0x478,0x7b9)]+('\x20\x0a▶️\x20Durati'+_0x4676ad(0x7b8,0x4d9,0x488,0x948))+yut[_0x4676ad(0x311,0x4d4,0x445,0x7a3)][0x1099+0x55c+0x49*-0x4d][_0x5a4c6c(-0x8c,0x43f,0x210,0x5fc)]+_0x4676ad(0x6e7,0x91c,0xae2,0x701)+yut[_0x4676ad(0x894,0x4d4,0x4ff,0x1c4)][-0x650*-0x2+-0x715*-0x2+-0x9*0x2fa][_0x5a4c6c(0xddb,0xb92,0x6cf,0x7cb)]+(_0x4676ad(0x63a,0x4e3,0x6f0,0x2e0)+_0x5a4c6c(0x2b,0x523,0x4a3,0x12c)+_0x4676ad(0xc38,0x768,0xaf2,0x9d6)+'\x20want\x20to\x20d'+_0x5a4c6c(0xa85,0xd6c,0xea7,0xa81));let _0x25f162=await getBuffer(_0x3ff797);const _0x2b26d8={};_0x2b26d8['displayTex'+'t']=_0x4676ad(0x70c,0xa87,0xf84,0xa5e)+_0x4676ad(0x1ff,0x51c,0x76b,0x647);const _0x4c3297={};_0x4c3297[_0x5a4c6c(0x9d7,0x958,0xd10,0x726)]=_0x4676ad(0x826,0x77f,0x5e2,0x501)+q,_0x4c3297[_0x4676ad(0x5d6,0x539,0x803,0x9f5)]=_0x2b26d8,_0x4c3297[_0x5a4c6c(0x7d7,0xbcd,0xd17,0xf9c)]=_0x1f9a8a[_0x4676ad(0xee0,0xbd4,0x10ca,0x783)];const _0x3f52b5={};_0x3f52b5[_0x5a4c6c(0xef9,0xa74,0x752,0x978)+'t']=_0x5a4c6c(0x6dc,0x8d8,0xd0a,0x478)+_0x4676ad(0x8bc,0x51c,0x156,0x9b5);const _0x2af23c={};_0x2af23c['buttonId']=_0x5a4c6c(0xb6d,0xca2,0xf36,0xf77)+q,_0x2af23c['buttonText']=_0x3f52b5,_0x2af23c['type']='RESPONSE';const _0x1420d0={};_0x1420d0['displayTex'+'t']=_0x1f9a8a[_0x4676ad(0x2f8,0x4ca,0x517,0x6d)];function _0x4676ad(_0x30c992,_0x2ecaf1,_0x2ac7b3,_0x16007e){return _0x4963f8(_0x16007e,_0x2ecaf1-0xbd,_0x2ecaf1- -0x18b,_0x16007e-0x136);}const _0x24eb8a={};_0x24eb8a[_0x5a4c6c(0xd56,0x958,0xd0b,0x487)]=_0x4676ad(0x77c,0x75d,0x266,0xc55)+yut[_0x5a4c6c(0x632,0x543,0x62b,0xa31)][0x1*0x1b+0x21d+-0x1*0x238][_0x4676ad(0x8cf,0xb23,0xe8e,0x870)],_0x24eb8a[_0x4676ad(0x2da,0x539,0xa16,0x1a3)]=_0x1420d0,_0x24eb8a[_0x5a4c6c(0xd1d,0xbcd,0xd95,0x83e)]=_0x1f9a8a[_0x4676ad(0xdfb,0xbd4,0xa8d,0xe47)];let _0x36535e=[_0x4c3297,_0x2af23c,_0x24eb8a];function _0x5a4c6c(_0x3e0646,_0x232eda,_0x417f52,_0x1b9a96){return _0x128a37(_0x3e0646-0x116,_0x3e0646,_0x417f52-0x1d0,_0x232eda- -0x1c6);}sendButLocation(from,_0x2ab41d,_0x5a4c6c(0x45,0x588,0x902,0x9e0)+_0x4676ad(0x11e9,0xcb5,0x10e7,0xc18)+_0x4676ad(0x894,0x786,0xca4,0x47c)+enter+enter+'©\x20'+ownername,_0x25f162,_0x36535e,{});})['catch'](_0x439492=>reply('Terjadi\x20ke'+_0x128a37(0xb4d,0xce1,0x593,0x974)+_0x4963f8(0x663,0x9d6,0xae9,0xfc3)+_0x4963f8(0xfbd,0x9e1,0xdde,0xd4a)+'gi')),await limitAdd(sender,limit);break;case _0x128a37(0x8bd,0xa1f,0x509,0x57d):const _0x26a95c={};_0x26a95c[_0x4963f8(0xc8c,0x1080,0xb90,0x10d0)+'t']=_0x4963f8(0x1148,0xe11,0xd18,0x1022)+'t';const _0x2f1aed={};_0x2f1aed[_0x4963f8(0x6f9,0x6d1,0xa74,0xd23)]=_0x128a37(0x1129,0xe73,0xf1b,0xd8b),_0x2f1aed[_0x4963f8(0x41f,0xaed,0x6c4,0x7a6)]=_0x26a95c,_0x2f1aed[_0x128a37(0xa03,0xfbf,0xd80,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xec5,0x1177,0xa7c,0xd8b)](prefix),'©\x20'+ownername,[_0x2f1aed]);if(!q)return fakegroup(_0x128a37(0x118e,0x86f,0x9bd,0xd18));if(!isUrl(args[-0x14a*0x2+-0x4c*0x6d+0x22f0])&&!args[0x13dd+0x546+0xa5*-0x27]['includes']('tiktok.com'))return reply(lang[_0x128a37(0x639,0xb98,0xc09,0xa24)]());reply(lang[_0x4963f8(0x88d,0x6b0,0x6f1,0x84f)]()),ttt=args['join']('\x20'),hx[_0x128a37(0x960,0xfc3,0xab3,0xe54)+'er'](ttt)[_0x128a37(0x906,0xac6,0x9da,0xc92)](_0x1ec056=>{function _0x2d8091(_0x336cc6,_0x39216b,_0x115963,_0x36c1e9){return _0x128a37(_0x336cc6-0x18f,_0x115963,_0x115963-0x16c,_0x36c1e9- -0x4db);}function _0x5c9f5e(_0x33dd7a,_0x316e15,_0x39bcd7,_0x20e380){return _0x4963f8(_0x20e380,_0x316e15-0x1b9,_0x33dd7a- -0x354,_0x20e380-0x1);}const _0x21b4ef={'sdQFR':function(_0x5a60ff,_0x35c6c5){return _0x5a60ff!==_0x35c6c5;},'LPyvK':'WjJCO','mtTeB':function(_0x34a55c,_0x3a5efd){return _0x34a55c(_0x3a5efd);},'qfxQG':'AUDIO','EVDtH':_0x5c9f5e(0x5b1,0x6d9,0x600,0x4ff),'egncL':function(_0x361cbb,_0x6c97e9,_0x10e11b,_0x3dbd8c,_0x156b3f,_0x29cf51,_0x4415c7){return _0x361cbb(_0x6c97e9,_0x10e11b,_0x3dbd8c,_0x156b3f,_0x29cf51,_0x4415c7);}},{wm:_0x3b052a,nowm:_0x279d2d,audio:_0xc3b5bc}=_0x1ec056;axios[_0x2d8091(0x5c6,0x379,0xfd,0xf9)](_0x5c9f5e(0x7f1,0x7f8,0xb3f,0xa11)+_0x5c9f5e(0x10e,0x655,-0x19a,0x3a2)+_0x5c9f5e(0x93a,0x41e,0x944,0x6ae)+_0x2d8091(0x562,0x46c,0x12f,0x50c)+_0x3b052a)[_0x5c9f5e(0x894,0x9cf,0xc61,0x6bf)](async _0x22d2d7=>{function _0x527849(_0xefda12,_0x1e128a,_0x3d7433,_0x2e428a){return _0x2d8091(_0xefda12-0x30,_0x1e128a-0x1c4,_0xefda12,_0x1e128a-0x12e);}function _0x539e13(_0x150534,_0x2cc127,_0x499db9,_0xe3255d){return _0x5c9f5e(_0x499db9- -0x45,_0x2cc127-0x17c,_0x499db9-0x149,_0x150534);}if(_0x21b4ef[_0x539e13(0x966,0x35a,0x75a,0x2bb)](_0x21b4ef[_0x527849(0xc1,0x1c5,-0x19c,0x4c3)],_0x21b4ef[_0x539e13(-0x18,0x3c1,0x12f,-0x1a8)]))_0x1c3b2f[_0x527849(0x6d9,0x64d,0x43a,0x403)](_0x154a3d);else{let _0x4e3740=await _0x21b4ef[_0x539e13(0x82e,0x630,0x477,0x14c)](getBuffer,_0x3b052a);const _0x4f2d39={};_0x4f2d39[_0x539e13(0x3a8,0x7d2,0x7f7,0x7a3)+'t']=_0x527849(0xf08,0xb35,0xbe4,0x820);const _0x38e8be={};_0x38e8be['buttonId']='tiktoknowm'+'\x20'+q,_0x38e8be[_0x539e13(0x749,0x7dd,0x32b,-0x39)]=_0x4f2d39,_0x38e8be['type']=_0x539e13(0x40,0x95d,0x56c,0x6ba);const _0x2b6229={};_0x2b6229[_0x539e13(0x9b8,0x50d,0x7f7,0x7a0)+'t']=_0x21b4ef['qfxQG'];const _0xa8063c={};_0xa8063c['buttonId']=_0x539e13(0xd65,0xc89,0x8fc,0x819)+'o\x20'+q,_0xa8063c[_0x527849(0x8ce,0x3c1,0x7c6,0x785)]=_0x2b6229,_0xa8063c['type']=_0x21b4ef['EVDtH'];let _0x14f1a4=[_0x38e8be,_0xa8063c];_0x21b4ef['egncL'](sendButVideo,from,_0x539e13(0xba4,0x667,0x7ec,0x482)+sender[_0x527849(-0x133,0x1d4,0x57b,0x104)]('@')[0x2337+-0xdb6+-0x5*0x44d]+(_0x539e13(0x199,0x8b1,0x378,0x502)+_0x539e13(0x3ce,0x295,0x605,0x66a)+'u\x20ubah\x20jad'+_0x527849(0x1ad,0x635,0x31e,0x61a)+'au\x20tiktok\x20'+_0x527849(0xc02,0x981,0x933,0xbc5)+'gal\x20pilih\x20'+_0x527849(0x6a1,0x481,0x778,0x63f)+'h'),_0x539e13(0xa0f,0x537,0x871,0xc5a)+enter+(_0x527849(-0x19,0x238,0x782,-0x1a0)+_0x539e13(0xd0d,0xaef,0xa12,0x646)+_0x527849(0x113,0x525,0x485,0x518)+'upport\x20but'+_0x527849(0x5fb,0x3ab,-0x8e,0x68e)+_0x539e13(0x963,0x6da,0x829,0x34c)+'video\x20ini\x20'+_0x539e13(0xb23,0x688,0x600,0x701)+_0x527849(0xd75,0xada,0x750,0x966)+_0x539e13(0xb01,0xe4e,0xa4e,0x9ed))+enter+enter+'©\x20'+ownername,_0x4e3740,_0x14f1a4,{'contextInfo':{'mentionedJid':[sender]}});}});})['catch'](_0x41364d=>reply(_0x4963f8(0x8d5,0xb39,0xbaa,0x6a7)+_0x4963f8(0xd2f,0x91c,0x8ca,0x793)+_0x128a37(0x7e5,0xc11,0x699,0xb93)+_0x128a37(0xe83,0x128a,0xd46,0xe88)+'gi')),await limitAdd(sender,limit);break;case _0x4963f8(0x9d4,0xa13,0x6f8,0x69b)+_0x128a37(0xaeb,0x9e7,0x119a,0xdf9):if(args[_0x4963f8(0x7e9,0x88e,0x6e2,0x2e2)]<-0x1fc*-0x1+0x538*-0x5+0x181d)return reply(_0x4963f8(0x160,0x795,0x485,0x1ee)+(prefix+command)+(_0x4963f8(0xa56,0xb31,0xb6f,0xde2)+_0x128a37(0x9af,0xd18,0x121a,0xdca)+_0x4963f8(0xb67,0xb49,0xe1c,0x11e1))+enter+_0x128a37(0x5d9,0x60c,0x8ba,0x73c)+(prefix+command)+'\x20114\x203');var F=q,F1=F['split']('|')[-0x14b*-0x1d+0x12a8+-0x3827],F2=F['split']('|')[-0x1f65+0x4c3+0x1aa3];let pijaqu=await fetchJson(_0x128a37(0xb8c,0x6bc,0xda2,0xbe6)+'quran-api-'+'o7sv4hu4k-'+_0x128a37(0xf31,0xf6c,0xc6a,0xd41)+'i-zeeoneof'+_0x128a37(0xba6,0xb1a,0x850,0xd6e)+_0x4963f8(0x11fa,0x9e7,0xdd4,0x12ef)+F1+'/'+F2),japkk=await getBuffer(pijaqu[_0x4963f8(0x237,0x986,0x5ae,0x89c)][_0x128a37(0x770,0xe54,0xdfa,0xa99)][_0x4963f8(0xb48,0xa97,0xcf0,0x1144)])[_0x4963f8(0x5df,0x434,0x91c,0x99a)](_0x26b586=>{function _0x46fffa(_0x441e8b,_0x47ed3,_0x8eb5db,_0x407ea8){return _0x128a37(_0x441e8b-0x173,_0x8eb5db,_0x8eb5db-0xc0,_0x407ea8- -0x5c8);}function _0x436fb5(_0x316ce4,_0x3a11fe,_0x5dd78d,_0x2a3572){return _0x4963f8(_0x2a3572,_0x3a11fe-0xb9,_0x316ce4-0x156,_0x2a3572-0x2c);}const _0x1cd9d0={'oXTwU':function(_0x40424a,_0x154cb7){return _0x40424a(_0x154cb7);},'tvFNd':_0x46fffa(0x4eb,0x3a3,0x16f,0x548)};_0x1cd9d0[_0x436fb5(0x6a0,0x78c,0x2d6,0x4ed)](reply,_0x1cd9d0[_0x436fb5(0xaa2,0xba0,0x789,0x87c)]);});const _0x20b13c={};_0x20b13c[_0x4963f8(0xdf1,0xcd9,0xc16,0xc58)]=_0x128a37(0xa18,0x887,0xf8e,0xa43)+_0x4963f8(0x525,-0x9e,0x49d,0xae)+'xTH6oLd8',_0x20b13c[_0x4963f8(0x7d6,0xecc,0xcde,0x119a)]=0x2,_0x20b13c[_0x128a37(0xad0,0xc65,0x3db,0x864)]=_0x4963f8(0x644,0xf76,0xb62,0xc00)+'dio',_0x20b13c['body']='',_0x20b13c[_0x4963f8(0x5b3,0x2df,0x744,0x4c9)+'rl']='',_0x20b13c[_0x4963f8(0xc1b,0xc05,0x96a,0x517)]=pp_userz;const _0x5e1c52={};_0x5e1c52[_0x128a37(0x2ea,0x58e,0x404,0x5d3)]=_0x128a37(0x88a,0xf72,0x815,0xc0c)+_0x4963f8(0xe3e,0x11e1,0xd4f,0xb6e),_0x5e1c52[_0x128a37(0xb50,0x773,0xc03,0x93f)+_0x4963f8(0xb53,0x90d,0xe1e,0x12aa)]=0x3b9aca00,_0x5e1c52[_0x4963f8(0x4c3,0x9ec,0x968,0xac8)+'d']=!![],_0x5e1c52[_0x4963f8(0xb45,0x1230,0xe86,0xd9c)+'ral']=!![],_0x5e1c52['externalAd'+_0x4963f8(0x9e4,0xc09,0x99d,0x47e)]=_0x20b13c;const _0x2be37d={};_0x2be37d['contextInf'+'o']=_0x5e1c52,_0x2be37d[_0x4963f8(0x65c,0x66f,0x82a,0xa0f)]=_0x4963f8(0x2c7,0x935,0x51e,0x68d),_0x2be37d[_0x4963f8(0x103e,0xd91,0xb4a,0xb56)]='Alquran\x20Mu'+_0x128a37(0xee9,0xbf8,0x10ba,0xbbc),_0x2be37d[_0x4963f8(0x9d9,0xea7,0x9c3,0x678)]=fgclink2,_0x2be37d['thumbnail']=pp_bot2,alpha[_0x4963f8(0x985,0x982,0xc4f,0x96b)+'e'](from,japkk,MessageType[_0x128a37(0x79e,0x53e,0x50a,0x85d)],_0x2be37d),await limitAdd(sender,limit);break;case _0x4963f8(0xafe,0xd77,0x832,0xc38):case'fb':case _0x128a37(0xa05,0x8d0,0xdc0,0x8e8):const _0x4b32b={};_0x4b32b[_0x4963f8(0xf7f,0x6ae,0xb90,0xa0e)+'t']=_0x128a37(0xcf8,0xf82,0x125f,0xdc2)+'t';const _0x436998={};_0x436998[_0x128a37(0x62e,0x935,0x6e7,0xb1e)]=_0x4963f8(0x122d,0x85f,0xce1,0xa80),_0x436998[_0x128a37(0x8a2,0x37a,0x3cb,0x76e)]=_0x4b32b,_0x436998[_0x4963f8(0x9a9,0x815,0xce9,0xa36)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xe01,0xe27,0xce1,0xffc)](prefix),'©\x20'+ownername,[_0x436998]);if(!q)return reply(_0x128a37(0xc91,0xc27,0xa36,0xc57));if(!isUrl(args[0x15ed+-0x1f7e+0x991])&&!args[-0x16d9*-0x1+0x5ef+-0x1cc8]['includes']('facebook.c'+'om'))return reply(lang[_0x128a37(0x94d,0xd5e,0x694,0xa24)]());reply(lang[_0x4963f8(0xb03,0x5fe,0x6f1,0x7b2)]());var fbte=args[_0x128a37(0xf31,0x114a,0xbbe,0xde3)]('\x20');const API_GUEST=_0x128a37(0xc86,0x11fa,0x10ff,0xcf5)+_0x128a37(0x709,0x173,0x24d,0x67b)+'com/1.1/gu'+_0x128a37(0xc3e,0xaec,0x124a,0xf12)+'te.json',API_TIMELINE='https://ap'+_0x128a37(0x416,0x1b1,0x6a6,0x67b)+_0x4963f8(0xcc6,0x11b5,0xde3,0xd67)+_0x128a37(0x11fb,0x11b9,0x1324,0xe21)+'rsation/%s'+_0x128a37(0xb70,0x27d,0x31b,0x737)+_0x128a37(0xe4b,0xb67,0x907,0xd5c)+_0x4963f8(0xefe,0x79e,0xa26,0x7d0),AUTH=_0x128a37(0xe2b,0x140d,0x1295,0xece)+_0x4963f8(0x1b2,0x38f,0x475,0x76d)+_0x128a37(0x284,0x24e,0x2b1,0x5a4)+_0x128a37(0xadc,0xd0d,0xe02,0xadf)+_0x4963f8(0xf97,0xa17,0xc25,0xc30)+_0x4963f8(0x780,0xec5,0xaa4,0x807)+_0x128a37(0xebf,0xc0d,0x1166,0xccd)+_0x4963f8(0x5ac,0x770,0xac2,0x6b7)+_0x128a37(0x1306,0xd85,0x10ad,0xefa)+_0x128a37(0xc61,0x10e4,0xa62,0xe7c)+_0x4963f8(0x8bb,0xf56,0xa1b,0xc1a)+'A',UserAgent=()=>{const _0x43db6e={};_0x43db6e[_0x4a5f3e(0x979,0x996,0x6c3,0x245)]=_0x4a5f3e(-0xf9,0x854,0x347,0x6f7)+_0x176e1c(0x4a9,0x3e8,0x397,0x284)+_0x4a5f3e(-0x3ef,0x1c3,-0x112,-0x1ad)+_0x176e1c(0xbe2,0xe50,0x75c,0xdb6)+_0x4a5f3e(0x2ad,0x86a,0x628,0x223)+_0x176e1c(0xa41,0x896,0xa00,0xedd)+_0x4a5f3e(0x755,0x1ff,0x239,0x25a)+'KHTML,\x20lik'+_0x176e1c(0x998,0xdfa,0x93a,0xdfe)+_0x176e1c(0xe35,0xb6a,0xa0f,0x112d)+_0x4a5f3e(0x462,-0x548,-0x3e,0x252)+_0x176e1c(0xc2f,0x85c,0xaf1,0x82f),_0x43db6e[_0x176e1c(0x592,0xad2,0x62f,0xad9)]=_0x176e1c(0x940,0x40d,0x452,0x56b)+_0x176e1c(0x4a9,-0x64,0x5ef,0x831)+'sh;\x20Intel\x20'+_0x4a5f3e(0x916,0x212,0x5e9,0x510)+_0x4a5f3e(0x147,0x1db,0x63b,0x483)+_0x4a5f3e(0x965,-0x64,0x448,0x6b4)+_0x176e1c(0x9bc,0x993,0xc03,0x9bb)+_0x176e1c(0x5ce,0x792,0x34e,0x81)+_0x4a5f3e(0x8be,0x5c8,0x92a,0x892)+_0x176e1c(0xd30,0x101d,0x10f3,0x11ac)+'.2\x20Safari/'+_0x176e1c(0xbcf,0x939,0x9e9,0xf08),_0x43db6e[_0x176e1c(0x6dd,0x87a,0xa07,0xb88)]=_0x176e1c(0x940,0x5f7,0x695,0x98d)+_0x176e1c(0x9f0,0xc1a,0xe32,0x5a4)+_0x176e1c(0xeea,0x1039,0x1147,0xff6)+'Win64;\x20x64'+_0x176e1c(0xe5f,0x9fd,0xf44,0x113b)+_0x4a5f3e(0x133,0x71,0x57c,0xa2a)+_0x176e1c(0x520,0x2b1,0x7d4,0x634)+_0x176e1c(0xed4,0xe97,0x12c1,0xa67)+'\x20Chrome/69'+_0x4a5f3e(0x864,-0xe9,0x429,-0x109)+'0\x20Safari/5'+_0x4a5f3e(0x1b6,0x98e,0x45a,0x762),_0x43db6e[_0x4a5f3e(0x641,0x4ab,0x413,0x79b)]=_0x4a5f3e(0x32d,-0x121,0x347,0x20c)+_0x4a5f3e(0x775,0x4e8,0x3f7,0x40)+_0x176e1c(0xeea,0xdea,0xf19,0xa9c)+_0x4a5f3e(0x364,0x488,0xcd,0x207)+_0x4a5f3e(0x7b0,0x54d,0x866,0x527)+_0x176e1c(0xb75,0xaaf,0xfb6,0xf30)+_0x4a5f3e(-0x569,0x3fa,-0xd9,-0xf3)+_0x176e1c(0xed4,0x11d6,0xc9b,0xce9)+'\x20Chrome/79'+_0x176e1c(0xdfb,0xebb,0x1011,0xc28)+_0x176e1c(0xa3e,0x81c,0xb2e,0xe8f)+'7.36',_0x43db6e[_0x176e1c(0x8fc,0x4e1,0xd74,0x632)]=_0x176e1c(0x940,0x800,0xe71,0xd40)+_0x176e1c(0x4a9,0x526,0x99a,0x402)+_0x4a5f3e(-0x51f,-0x5fe,-0x112,-0x480)+_0x176e1c(0xbe2,0xd17,0xb6e,0x876)+_0x176e1c(0x522,0xa9,0x2b7,0x93d)+'leWebKit/5'+_0x4a5f3e(0x694,0x62c,0x6ae,0x7c2)+'KHTML,\x20lik'+_0x176e1c(0x998,0xcb8,0x5ad,0x48e)+_0x176e1c(0xed0,0x1089,0x107f,0x1322)+_0x4a5f3e(0x2b4,0x64f,0x516,0x5b2)+_0x4a5f3e(-0x22d,0x46c,0x14c,0x463),_0x43db6e[_0x4a5f3e(-0x331,-0x2d6,-0x134,0x107)]=_0x4a5f3e(-0xb2,-0x1cb,0x347,0x64)+_0x176e1c(0x4a9,0x8ef,0x42c,0x6ac)+_0x4a5f3e(-0x314,-0x37b,-0x112,-0xad)+_0x4a5f3e(0x47a,0xb37,0x5e9,0x8c9)+_0x176e1c(0xa7d,0x806,0xc57,0xd54)+'3.0)\x20Gecko'+'/20100101\x20'+_0x4a5f3e(0x442,0xb22,0x835,0x3a1)+'.0',_0x43db6e[_0x176e1c(0x5f1,0x156,0x1a1,0x278)]='Mozilla/5.'+_0x176e1c(0x8ab,0x902,0xbc8,0xb0c)+'nux\x20x86_64'+';\x20rv:45.0)'+_0x4a5f3e(0x3d1,-0x156,0x3cc,0x80)+_0x4a5f3e(0xbb3,0x9b8,0x69f,0x9c6)+_0x4a5f3e(0x4d6,0x7e8,0x338,0x4ab),_0x43db6e[_0x4a5f3e(0x1be,0x3d0,0x69,0x169)]=_0x176e1c(0x940,0xaba,0x54c,0x50a)+_0x176e1c(0xa25,0xe79,0x6ff,0xc18)+_0x4a5f3e(0x46f,0x397,0x610,0xa71)+_0x176e1c(0x8fe,0x5ea,0xaaa,0x9f4)+'rv:47.0)\x20G'+'ecko/20100'+_0x4a5f3e(0x373,-0xfe,0x252,-0x12)+'x/47.0';function _0x176e1c(_0x4f9d93,_0x48c148,_0x3642d5,_0x338f64){return _0x4963f8(_0x48c148,_0x48c148-0x1ea,_0x4f9d93-0x5e,_0x338f64-0x117);}_0x43db6e[_0x176e1c(0x625,0x388,0x942,0x1a6)]=_0x176e1c(0x940,0xbca,0xaf6,0x4b7)+_0x176e1c(0x8ab,0xb48,0x8ca,0x96e)+_0x176e1c(0xd27,0xe4e,0x882,0xc2b)+_0x176e1c(0xe5f,0xc87,0x1149,0x9b5)+_0x4a5f3e(0x592,0x85b,0x57c,0x30d)+_0x176e1c(0x520,0xa66,0x629,0xae)+_0x4a5f3e(0xab5,0x5d5,0x8db,0x738)+'\x20Chrome/77'+_0x176e1c(0x797,0xce2,0x872,0x524)+_0x176e1c(0x88e,0x8f7,0xc37,0xa60)+_0x4a5f3e(0x713,0x8a2,0x45a,0x1ad),_0x43db6e['EwXOn']=_0x176e1c(0x940,0xb1b,0x53e,0xdde)+_0x4a5f3e(0x4e8,0x1a3,0x42c,0x490)+_0x4a5f3e(0xc3,0x6d0,0x610,0x22c)+_0x176e1c(0x8fe,0x765,0x846,0xd8d)+_0x176e1c(0x498,0x622,0xf2,0x69b)+_0x4a5f3e(0x27,-0x51a,-0x140,-0x665)+_0x4a5f3e(0x742,0x48,0x252,0x65a)+_0x176e1c(0xa5f,0x919,0xb7c,0xf30),_0x43db6e[_0x176e1c(0xcda,0xf19,0x1144,0x91f)]=_0x176e1c(0x940,0xb67,0x946,0xc11)+_0x4a5f3e(-0x670,-0xe0,-0x150,0x3b8)+_0x4a5f3e(0x114,-0x4e2,-0x112,-0x12)+_0x4a5f3e(0x7e6,0x49c,0x5e9,0x8e9)+_0x176e1c(0x76b,0x928,0x80e,0x8e7)+'leWebKit/5'+_0x4a5f3e(-0x70,-0x83,0xe6,0x33e)+_0x176e1c(0xded,0xb36,0xd87,0x103f)+'ecko)\x20Chro'+'me/67.0.33'+_0x4a5f3e(0x61c,0x1e8,0x385,0x2a4)+'ri/537.36',_0x43db6e[_0x4a5f3e(0x96a,0x59c,0x8ec,0x4a6)]=_0x4a5f3e(0x896,0x22,0x347,0x21d)+_0x4a5f3e(-0x674,-0x571,-0x150,-0xf5)+_0x4a5f3e(-0x194,0x1a3,-0x112,-0x135)+_0x176e1c(0xbe2,0xb93,0x89b,0x8f9)+_0x176e1c(0xc34,0x89d,0x8f0,0x1047)+_0x176e1c(0xa41,0xb01,0xa1a,0x5f2)+_0x4a5f3e(0xbff,0xa19,0x771,0x7eb)+_0x4a5f3e(0x4b3,-0x2f,-0x2b,0x50d)+_0x176e1c(0xf23,0xe70,0x10f7,0x13a3)+_0x176e1c(0x55b,0x758,0x1c7,0x875)+_0x4a5f3e(0x237,0x22b,-0xb5,-0x2cc)+_0x176e1c(0xaa9,0xb98,0x5c4,0xc9b),_0x43db6e[_0x4a5f3e(0x9da,0xb52,0x879,0xadb)]='Mozilla/5.'+_0x4a5f3e(0x2fd,0x626,0x2b2,-0x1fa)+'nux\x20x86_64'+_0x176e1c(0xe5f,0x1141,0xb67,0xdc0)+_0x176e1c(0xb75,0x8f9,0xcbb,0x64d)+_0x4a5f3e(0x202,0x13,-0xd9,-0x47b)+_0x4a5f3e(0x772,0xacc,0x8db,0x7e5)+'\x20Chrome/69'+_0x4a5f3e(-0x18,-0x226,0x318,-0x1ea)+'\x20Safari/53'+'7.36',_0x43db6e[_0x4a5f3e(0x372,0x745,0x353,0x450)]=_0x176e1c(0x940,0x549,0xd24,0xd7d)+_0x4a5f3e(0x41d,0x51,0x3f7,0x1a2)+_0x176e1c(0xeea,0xf19,0x114f,0xb57)+_0x4a5f3e(0x2ba,0x1ff,0xcd,0x4d8)+_0x176e1c(0xe5f,0xd07,0xbf4,0xfcb)+_0x176e1c(0xb75,0x7a7,0x687,0xae9)+_0x176e1c(0x520,0x9a,0x75e,0x5f5)+_0x176e1c(0xed4,0xa91,0xc9f,0x10a0)+'\x20Chrome/88'+_0x176e1c(0xae7,0xd57,0x8d3,0xd51)+_0x4a5f3e(0x5c8,0x42c,0x7bc,0x3f7)+'37.36',_0x43db6e[_0x176e1c(0xcca,0x980,0xf4c,0x78c)]='Mozilla/5.'+_0x4a5f3e(0x1e9,0x23a,0x3f7,0x843)+_0x176e1c(0xeea,0xe76,0xf6b,0x109c)+_0x176e1c(0x6c6,0x487,0x794,0x32f)+_0x4a5f3e(0xbed,0x58a,0x866,0x9ae)+'Kit/537.36'+_0x176e1c(0x520,0x55,0x906,0x6e0)+_0x176e1c(0xed4,0x1362,0xb7b,0xdeb)+_0x4a5f3e(0x546,0x4ee,0x7a7,0xa0c)+'.0.4515.10'+_0x4a5f3e(0x34c,0xa7c,0x6a7,0x174)+_0x176e1c(0xa53,0xa54,0x578,0x64a),_0x43db6e[_0x4a5f3e(0x627,0x3ae,0x477,0x7b6)]=_0x176e1c(0x940,0xc83,0xb29,0x58e)+_0x4a5f3e(0x36b,0x11b,0x42c,0x424)+_0x4a5f3e(0x55e,0x3b9,0x610,0x77d)+_0x176e1c(0x8fe,0x7bb,0x595,0xb93)+_0x4a5f3e(0x55e,0xabb,0x5df,0x1f6)+_0x176e1c(0x4b9,0x9bb,0x3da,0x8e)+_0x4a5f3e(0x684,0xc4,0x252,0x637)+_0x176e1c(0xdd9,0xe01,0xb6d,0xd82),_0x43db6e[_0x176e1c(0xc03,0xdf8,0xee7,0xde1)]=_0x176e1c(0x940,0x81c,0x808,0x5cb)+'0\x20(X11;\x20Li'+_0x176e1c(0xd27,0xa06,0x990,0xd33)+_0x176e1c(0xb66,0x95f,0x8c6,0x627)+_0x176e1c(0x9c5,0xec4,0x7fd,0xcfe)+_0x4a5f3e(0x279,0x311,0x69f,0x25e)+_0x4a5f3e(0x34f,0x4c0,0x435,0x7d3),_0x43db6e[_0x176e1c(0x836,0x4f6,0x6e0,0x7d3)]=_0x4a5f3e(0x42f,0x49b,0x347,0x75a)+_0x4a5f3e(-0x5c5,-0x4b7,-0x150,0x2eb)+_0x4a5f3e(0x39e,-0x436,-0x112,0x400)+_0x176e1c(0xbe2,0xffc,0x7ff,0xf3e)+_0x176e1c(0x76b,0x357,0xb8b,0x9a3)+_0x4a5f3e(0xa08,0xb7a,0x8e3,0xa55)+_0x176e1c(0x6df,0xaa0,0x656,0xbfb)+_0x176e1c(0xded,0xd49,0xfdf,0xb60)+_0x4a5f3e(0x78c,0x423,0x5ee,0x2f6)+_0x4a5f3e(0x80a,0xaf2,0x748,0x8fd)+_0x176e1c(0xd09,0xbef,0x1144,0x9ff)+_0x4a5f3e(-0x162,0x245,0x1f5,0x4eb),_0x43db6e[_0x4a5f3e(0x804,0x7ca,0x7fc,0x6dd)]=_0x176e1c(0x940,0xde9,0xc87,0xe37)+_0x4a5f3e(0x137,-0x452,-0x150,-0x1e7)+'sh;\x20Intel\x20'+_0x176e1c(0xbe2,0xd4b,0x71e,0xcbd)+_0x176e1c(0xab0,0xab4,0xf1f,0x5ea)+_0x176e1c(0x611,0x415,0x6b3,0xc6)+_0x4a5f3e(0x582,0x53c,0x821,0x93a)+_0x176e1c(0x71d,0x878,0xc0f,0x8b8)+'.0',_0x43db6e[_0x4a5f3e(0x646,0x26,0x313,0x13d)]=_0x4a5f3e(0x7a2,0x26f,0x347,0x629)+_0x176e1c(0x4a9,0x678,0x35d,-0x51)+'sh;\x20Intel\x20'+'Mac\x20OS\x20X\x201'+_0x176e1c(0xc21,0x1053,0xefd,0xb75)+_0x4a5f3e(-0x4f,0x49b,0x448,0x5e9)+'601.7.7\x20(K'+'HTML,\x20like'+'\x20Gecko)\x20Ve'+_0x176e1c(0x62e,0x920,0xfe,0x195)+_0x4a5f3e(0x568,0x253,0x533,0x1cd)+_0x176e1c(0xa69,0x5cc,0x76a,0x69e);function _0x4a5f3e(_0x42b9cc,_0xb9f395,_0x49ef41,_0x47d29e){return _0x4963f8(_0x42b9cc,_0xb9f395-0xbe,_0x49ef41- -0x59b,_0x47d29e-0x1b8);}_0x43db6e[_0x4a5f3e(-0x254,0x2ed,-0x15e,0x109)]=_0x176e1c(0x940,0x9ba,0x8aa,0xd53)+_0x176e1c(0x4a9,0x434,0x7fe,-0x24)+_0x176e1c(0x4e7,0x5c9,0x397,0x7c3)+_0x176e1c(0xbe2,0x106d,0x6a7,0xd92)+_0x176e1c(0x612,0x6c5,0x72b,0x3ea)+_0x4a5f3e(0x9c9,0x577,0x8e3,0x731)+_0x176e1c(0x6df,0x485,0xb34,0x964)+'ML,\x20like\x20G'+'ecko)\x20Chro'+'me/36.0.19'+_0x4a5f3e(-0xa9,0x68a,0x2cb,-0x100)+_0x4a5f3e(0x714,-0x12a,0x1f5,-0x351),_0x43db6e[_0x4a5f3e(0x49f,0xaeb,0x8a3,0x3c9)]=function(_0x1e99cd,_0x3ca53d){return _0x1e99cd*_0x3ca53d;};const _0x5dad31=_0x43db6e,_0x4e3f62=[_0x5dad31[_0x176e1c(0xcbc,0xce6,0x9b9,0xbe7)],_0x5dad31[_0x4a5f3e(0x48f,-0x4de,-0x67,-0x34d)],_0x5dad31[_0x4a5f3e(-0x28a,0x1a7,0xe4,-0xbd)],'Mozilla/5.'+_0x4a5f3e(0x2df,0x125,-0x151,-0x247)+'tanyze;\x20Li'+_0x4a5f3e(0x201,0xc26,0x72e,0xa65)+_0x4a5f3e(0x367,0x362,0x866,0x5a7)+_0x176e1c(0xb75,0xe24,0xb26,0x978)+_0x4a5f3e(0x3ac,-0x17b,-0xd9,-0x26f)+_0x4a5f3e(0xb22,0x895,0x8db,0xd92)+_0x4a5f3e(0x4fc,0x3a1,0x3cb,-0x106)+_0x176e1c(0xc0d,0x72b,0xc5e,0xebb)+_0x4a5f3e(0x423,0xa35,0x89a,0xc1b)+_0x4a5f3e(0x4bf,0x912,0x45a,0x12e),_0x5dad31[_0x4a5f3e(0xb6,-0x2b,0x413,0x23a)],_0x5dad31[_0x176e1c(0x8fc,0x935,0x465,0x964)],_0x5dad31[_0x4a5f3e(0x2fd,0x1bb,-0x134,-0xe1)],_0x176e1c(0x940,0x8fb,0xa8f,0x559)+_0x176e1c(0x9f0,0x9f2,0xf20,0x79f)+_0x4a5f3e(0xa6f,0x59e,0x8f1,0x3f6)+_0x176e1c(0x6c6,0x2ff,0xa19,0x359)+_0x4a5f3e(0x341,0x811,0x866,0xaa7)+_0x4a5f3e(0x77c,0x782,0x57c,0x846)+_0x4a5f3e(0x32e,0x257,-0xd9,-0x449)+_0x176e1c(0xed4,0x10f4,0xc21,0x139d)+_0x4a5f3e(-0x59,0x206,0xf5,0x189)+_0x176e1c(0x503,0xa21,0x768,0x56b)+_0x4a5f3e(0x6cd,0x391,0x445,0x3ae)+'7.36',_0x176e1c(0x940,0xd48,0xe0a,0x614)+_0x4a5f3e(0x5f6,0x441,0x3f7,0x65f)+_0x4a5f3e(0x5a9,0x476,0x8f1,0x620)+_0x4a5f3e(-0xe8,0x458,0xcd,0x461)+_0x4a5f3e(0x6a4,0xb20,0x866,0x96e)+_0x4a5f3e(0x3e2,0x516,0x57c,0xa17)+'\x20(KHTML,\x20l'+_0x4a5f3e(0xaaf,0x49d,0x8db,0x50d)+_0x4a5f3e(-0x47d,0x402,-0xc,0x525)+_0x176e1c(0x8e6,0x84a,0x42a,0xc46)+_0x4a5f3e(0x78f,0x9c0,0x585,0x287)+'37.36\x20Edge'+_0x4a5f3e(-0x180,0xda,0xa3,-0x2a6),_0x5dad31[_0x176e1c(0x5f1,0x418,0x63d,0x9b9)],_0x5dad31['dIHAy'],_0x5dad31['cGGzU'],_0x176e1c(0x940,0xc90,0x8e5,0x5ee)+'0\x20(Windows'+_0x4a5f3e(0x786,0x7a1,0x8f1,0x736)+'Win64;\x20x64'+')\x20AppleWeb'+_0x176e1c(0xb75,0xbe2,0xaeb,0xe13)+_0x4a5f3e(-0x107,-0x342,-0xd9,0x1c)+_0x176e1c(0xed4,0xb09,0x9ca,0x135f)+_0x4a5f3e(-0x17b,0x600,0x2ea,-0x28)+_0x176e1c(0x9c9,0xe30,0x775,0xcce)+_0x4a5f3e(0x637,0x817,0x89a,0x69a)+'37.36',_0x5dad31[_0x4a5f3e(-0x4c9,0x3ff,0x71,-0x87)],_0x5dad31[_0x176e1c(0xcda,0x1118,0xaff,0xfef)],_0x5dad31[_0x176e1c(0xee5,0x1099,0xde8,0xe91)],_0x5dad31[_0x176e1c(0xe72,0xb5c,0x983,0x109d)],_0x5dad31[_0x176e1c(0x94c,0x635,0x96c,0x7d5)],_0x5dad31[_0x4a5f3e(0xa53,0x6f6,0x6d1,0x323)],_0x5dad31['NHvJi'],_0x5dad31[_0x4a5f3e(0xa7c,0x1a3,0x60a,0x146)],_0x5dad31['jNEPI'],_0x5dad31['bTnLi'],_0x176e1c(0x940,0x9ce,0xa96,0x7a8)+_0x4a5f3e(0x181,-0x413,-0x150,0x179)+_0x176e1c(0x4e7,0x43d,0x29f,0xdd)+_0x4a5f3e(0x42b,0x634,0x5e9,0xa50)+_0x176e1c(0xc21,0xc75,0xb58,0x1162)+_0x4a5f3e(0x859,0x7b2,0x448,0x85f)+'605.1.15\x20('+_0x176e1c(0x8cd,0xdf5,0xd17,0x6d0)+_0x4a5f3e(0x269,0x863,0x39f,-0xc6)+_0x176e1c(0xe35,0x10dc,0xd58,0x10dd)+_0x176e1c(0x5bb,0x3ea,0xaa0,0x74f)+_0x176e1c(0xc2f,0x8c2,0xd1e,0xc0b),_0x5dad31[_0x4a5f3e(-0xf8,-0x4,-0x67,0x94)],_0x5dad31[_0x4a5f3e(0x85c,0x55a,0x313,0x3bf)],_0x5dad31[_0x4a5f3e(0xf2,0x20d,-0x15e,0xc3)]],_0x88be4f=_0x4e3f62[~~_0x5dad31[_0x176e1c(0xe9c,0x13c2,0xf34,0xadf)](Math['random'](),_0x4e3f62[_0x4a5f3e(0x51a,-0x175,0x147,-0x237)])];return _0x88be4f;},getID=_0x1bd354=>{let _0x490205=/twitter\.com\/[^/]+\/status\/(\d+)/;function _0x1c3731(_0x5c9913,_0x5150f6,_0x13af94,_0x4b6920){return _0x4963f8(_0x5150f6,_0x5150f6-0x114,_0x5c9913-0x127,_0x4b6920-0x1b2);}let _0x36ea0d=_0x490205[_0x1c3731(0x7d4,0xb77,0xba0,0x2cf)](_0x1bd354);return _0x36ea0d&&_0x36ea0d[0x1*-0x211f+-0x18e6+0x3a06];},getInfo=async function(_0x3ef619){const _0x32ba24={'hWkZl':function(_0x4821f5,_0x475f35){return _0x4821f5(_0x475f35);},'hYPJe':_0x4b882f(0x6b9,0xb2d,0x446,0x81b)+_0x1e952a(0x38a,-0x14a,0x9b,0x38)+_0x4b882f(0xac7,0xc3b,0x967,0xc64)+'youtube.co'+_0x4b882f(0x1046,0x68f,0xff9,0xb25)+'ofc','OpGWJ':function(_0x114a43,_0x2831a8){return _0x114a43!==_0x2831a8;},'xVzJv':_0x4b882f(-0x13,0x414,0x60c,0x519),'iaAmS':function(_0x5634ba,_0x595ac9){return _0x5634ba!==_0x595ac9;},'jfjnS':function(_0x192682){return _0x192682();},'BnHIR':_0x1e952a(0x960,0x30b,0x75f,0x63c)+_0x1e952a(-0x28a,0x295,0x258,-0x264),'tWECf':_0x4b882f(0x10f4,0xaf5,0xe1c,0xc39)+_0x1e952a(-0x286,-0x15e,0x143,-0x36b),'YDhZT':_0x1e952a(0x258,0x4e2,0x3dc,0x13b),'ZlRlb':_0x4b882f(0x694,0x13b,0x441,0x5cc),'tyFqI':_0x4b882f(0x6a9,0x330,0x81d,0x40e),'HrGsH':function(_0x10e3ba,_0x433f68){return _0x10e3ba===_0x433f68;},'fZSbu':_0x4b882f(0xa56,0x65,0x907,0x521),'RcJdh':'full_text','gbPlo':_0x4b882f(0x844,0x334,0x423,0x457),'MtwJi':'variants','Bgdpb':function(_0x97bf42,_0x5b5636){return _0x97bf42===_0x5b5636;},'CRbBD':_0x1e952a(0x9ec,0x5ef,0x648,0x59b),'Lujli':'animated_g'+'if'};function _0x4b882f(_0x4c57a4,_0x336b14,_0x7ad3b9,_0x2e4254){return _0x128a37(_0x4c57a4-0x42,_0x7ad3b9,_0x7ad3b9-0x1b0,_0x2e4254- -0x168);}const _0x411a5d=getID(_0x3ef619);function _0x1e952a(_0xfbd66f,_0x16424c,_0x511a16,_0x59486f){return _0x128a37(_0xfbd66f-0x18d,_0xfbd66f,_0x511a16-0x1e4,_0x511a16- -0x51f);}if(_0x411a5d){if(_0x32ba24[_0x1e952a(0x4e4,-0x25d,0xad,-0x40d)](_0x32ba24[_0x1e952a(0x28e,0x66a,0x3cc,0x125)],_0x1e952a(-0xc,0x274,0x380,0xc6))){let _0x58a727;try{if(_0x32ba24[_0x1e952a(0x7dc,0x38a,0x7e2,0x3ba)](_0x4b882f(0x9d8,0x21e,0xb2e,0x5f5),_0x1e952a(0x2ae,-0x248,0x23e,0x24c)))_0x32ba24[_0x1e952a(0x1a9,-0x219,0x2d4,0x6d4)](_0x4e078a,_0x48635c[_0x4b882f(0x978,0x10f,0x38,0x533)][_0x1e952a(0x4fd,0x631,0x1c4,0x403)]);else{const _0x122ffa=await _0x32ba24[_0x1e952a(0x18f,0x3a3,0x114,-0x83)](getToken);_0x58a727=_0x122ffa['guest_toke'+'n'];}}catch(_0x135d74){throw new Error(_0x135d74);}const _0x363f6b={};_0x363f6b[_0x4b882f(0x21,-0x119,0x769,0x395)+_0x1e952a(0x87f,0x5a2,0x9ba,0xd6e)]=_0x58a727,_0x363f6b[_0x4b882f(0x506,0x541,0x568,0x960)+_0x1e952a(0x870,0xc54,0x8a1,0x756)]=AUTH;const _0x78642d={};_0x78642d[_0x1e952a(0x66f,-0x185,0x212,0x713)]=_0x363f6b;const _0x2209c5=await axios[_0x1e952a(0x527,-0x1e5,0xb5,0x282)](Util['format'](API_TIMELINE,_0x411a5d),_0x78642d);if(!_0x2209c5[_0x1e952a(0x294,0x56b,0x139,0x1dc)][_0x32ba24[_0x1e952a(0x4a3,-0x36a,0x1d6,-0x281)]][_0x4b882f(0x864,0x775,0xae5,0x5cc)][_0x411a5d][_0x32ba24[_0x4b882f(0xdf7,0xd11,0x124e,0xdef)]])throw new Error(_0x32ba24[_0x4b882f(0x4da,0x75,0x20c,0x397)]);const _0x58173d=_0x2209c5['data'][_0x1e952a(0xbd2,0x63e,0x75f,0x334)+'cts'][_0x32ba24[_0x1e952a(0x6b9,0xbef,0x87a,0xc45)]][_0x411a5d][_0x32ba24[_0x1e952a(0xac6,0x993,0xa38,0xf22)]][_0x32ba24['tyFqI']];if(_0x32ba24[_0x1e952a(0x79f,0x8e1,0x923,0xdb7)](_0x58173d[-0x885+-0x94+0x919][_0x4b882f(0xfe2,0xfae,0xdb7,0xc2b)],_0x32ba24[_0x1e952a(0xdbb,0x754,0x9a3,0xe18)]))return{'type':_0x58173d[0x1647+0x26b9*-0x1+-0x1072*-0x1][_0x4b882f(0x820,0xb90,0x72a,0xc2b)],'full_text':_0x2209c5[_0x1e952a(0x27d,-0x250,0x139,-0x1b3)][_0x32ba24[_0x4b882f(0x378,0x18a,0x90,0x58d)]][_0x32ba24[_0x1e952a(0x562,0xc56,0x87a,0x85b)]][_0x411a5d][_0x32ba24[_0x1e952a(-0x135,-0x260,0x7a,0x473)]],'variants':_0x58173d[0x69a+-0x12a4*-0x1+0x9*-0x2ce][_0x32ba24[_0x4b882f(0x787,0x9c3,0xcbe,0x94e)]][_0x32ba24[_0x4b882f(0xdd2,0xa57,0xe4a,0xd68)]]};if(_0x32ba24[_0x4b882f(0x496,0x4a0,0x38e,0x4ee)](_0x58173d[-0x1174+0x51+0x6b*0x29][_0x1e952a(0x434,0xc1b,0x874,0xc08)],_0x32ba24['CRbBD']))return{'type':_0x58173d[-0x17ac+0x49*-0x32+-0x3cb*-0xa][_0x1e952a(0x5b4,0x8e9,0x874,0x640)],'full_text':_0x2209c5[_0x4b882f(0x79c,0x7cc,0x686,0x4f0)][_0x32ba24[_0x1e952a(-0x31f,-0x1e5,0x1d6,-0x2d2)]][_0x4b882f(0xd9,0x17a,0x5d4,0x5cc)][_0x411a5d][_0x4b882f(0xf5e,0xf8f,0x702,0xbe1)],'variants':_0x58173d[_0x1e952a(0x85,0x7fd,0x4b7,0x232)](_0x52f205=>_0x52f205['media_url_'+_0x4b882f(0x1f0,0x8e,0x2d8,0x3d9)])};if(_0x58173d[-0x23c4+0x9a1+0x1a23*0x1][_0x4b882f(0x1140,0xa4d,0x848,0xc2b)]===_0x32ba24[_0x1e952a(-0x1a6,0x2c7,0x12f,0x4f1)])return{'type':_0x58173d[0xf64*0x1+0x6f1*0x1+0x1*-0x1655][_0x4b882f(0xc33,0x8f5,0x970,0xc2b)],'full_text':_0x2209c5[_0x1e952a(-0x354,0x3ce,0x139,0x2da)][_0x4b882f(0x780,0x762,0xc67,0xb16)+_0x4b882f(0xb40,0x88b,0x538,0x60f)][_0x32ba24[_0x4b882f(0x1176,0xc4b,0x916,0xc31)]][_0x411a5d][_0x32ba24[_0x1e952a(-0x21e,-0x32e,0x7a,-0x113)]],'variants':_0x58173d[0x18f7+0x532+-0x1e29][_0x32ba24[_0x4b882f(0xbd8,0xde0,0xd28,0x94e)]][_0x32ba24['MtwJi']]};}else{const _0x4aaea4={};_0x4aaea4[_0x1e952a(0x4c,0x299,0x290,0x1cd)]=_0x32ba24[_0x1e952a(0x844,0x85c,0x889,0x364)],_0x523d6d=_0x4aaea4;}}else throw new Error('Not\x20a\x20Twit'+_0x4b882f(0xe40,0xf26,0xce1,0xb2d));};async function getToken(){function _0x45731d(_0xb3505e,_0x328009,_0xa7ebd9,_0x55cfdd){return _0x128a37(_0xb3505e-0xd3,_0xa7ebd9,_0xa7ebd9-0x199,_0xb3505e- -0x3ff);}function _0x136563(_0x285b8,_0x31c240,_0x24156f,_0x4f2830){return _0x128a37(_0x285b8-0x3,_0x24156f,_0x24156f-0x55,_0x4f2830- -0x64a);}try{const _0x86e2a6={};_0x86e2a6[_0x136563(-0x99,0x2ad,0x4d6,0x47e)+'ion']=AUTH;const _0x4cfdb4={};_0x4cfdb4['headers']=_0x86e2a6;const _0xf3c2d=await axios[_0x136563(0x56f,0x1a9,0x508,0x431)](API_GUEST,null,_0x4cfdb4);if(_0xf3c2d['status']===-0x9cf*-0x1+-0x3e8*-0x5+-0x1c8f*0x1&&_0xf3c2d[_0x45731d(0x259,0x199,0x111,0x8a)])return _0xf3c2d['data'];}catch(_0x5d4b6c){throw new Error(_0x5d4b6c);}}const fbdl=async _0x45c38c=>{const _0x5d7704={'VMjbG':function(_0xe453d8,_0x1710d5){return _0xe453d8(_0x1710d5);},'VYCdy':_0x5f0d44(0xce2,0x73e,0x8e0,0x8f2)+_0x5f0d44(0x127c,0xeb0,0xa76,0xf3f)+'t','UivTs':_0x5f0d44(0x4d6,0x6e4,0x7cf,0x701)+_0x5f0d44(0x113,0x985,0x52a,0x607)+_0x5f0d44(0xe52,0x9b7,0xb48,0xb5e)+_0x5f0d44(0x29c,0x632,0x25d,0x6a6),'aOsuF':_0x5f0d44(0x667,0x7bf,0x456,0x744),'ARpMj':function(_0xec478c,_0x16a3b8){return _0xec478c(_0x16a3b8);},'Yufya':_0x5f0d44(0x19b,0x69d,0x20c,0x5af),'LuIqm':'sEGxh','gyfFc':_0x5232de(0x82a,0x6c4,0x3a0,0x89b)+_0x5f0d44(0xddc,0x12b6,0xf09,0xf3f)+_0x5f0d44(0xb97,0xf3c,0xeaa,0xf79)+_0x5f0d44(0xbfa,0xa26,0x10e9,0xb9f),'wGFji':'POST'};async function _0x2794cb(){const _0x5aefed={'mbEUS':function(_0x4563cc,_0x35a33f){function _0x580eee(_0x74140d,_0x1badf2,_0x5e2d9e,_0x5c0965){return _0xf809(_0x5e2d9e-0x3d8,_0x5c0965);}return _0x5d7704[_0x580eee(0xb0a,0x5b0,0x812,0x8f0)](_0x4563cc,_0x35a33f);}};let _0x28524f=UserAgent();const _0x5f324a={};_0x5f324a[_0x201fcc(0xbf3,0xd05,0xd7c,0x7fb)]='text/html,'+'applicatio'+'n/xhtml+xm'+_0x201fcc(0x944,0x526,0x8fc,0x7b7)+_0x201fcc(0x65d,0x3fe,0x2e7,0x7db)+_0x201fcc(0xc59,0xe99,0xf87,0xcfb)+_0x201fcc(0x99a,0x64a,0xd3c,0xc9f)+_0x595743(0xdff,0x14d2,0xf83,0x1129)+_0x201fcc(0x940,0xab1,0x6c4,0xd38)+_0x201fcc(0xa32,0x592,0xd32,0xf67)+_0x595743(0xa51,0xb42,0xa98,0xe9c)+_0x201fcc(0xb38,0x6e4,0x8f6,0xd05)+'ange;v=b3;'+_0x595743(0xc41,0xfbe,0xaa3,0x7cf);function _0x595743(_0xb80d18,_0x499e9b,_0x365081,_0x2bb7a6){return _0x5f0d44(_0xb80d18-0x151,_0x499e9b-0x1e,_0x2bb7a6,_0x365081-0x57);}_0x5f324a['accept-lan'+_0x595743(0x135,0x653,0x5f0,0x3bc)]=_0x201fcc(0x2f3,0x40,0x543,0x48c)+_0x595743(0xeff,0xf73,0xef1,0xc8a)+_0x595743(0xbf4,0x98b,0xb26,0xa46)+'.7,ms;q=0.'+'6',_0x5f324a[_0x595743(0x3da,0x9f7,0x81b,0x883)+_0x201fcc(0x42b,0x351,0x635,0x3d6)]='?1',_0x5f324a[_0x595743(0xbeb,0xa1c,0x78d,0x5a7)]=_0x28524f;const _0x4beb94={};_0x4beb94[_0x595743(0x9bc,0x276,0x789,0x2ba)]=_0x5f324a;const _0x3579ef=await axios[_0x595743(0x6ac,0x935,0x62c,0x803)](_0x5d7704['VYCdy'],_0x4beb94),_0x21de10=cheerio[_0x201fcc(0xa06,0xf35,0xa22,0x8cd)](_0x3579ef[_0x201fcc(0x427,0x15d,0x36,0x32d)]);let _0x1b39f5;_0x21de10(_0x5d7704[_0x595743(0xf12,0x139d,0xec2,0xa4a)])[_0x201fcc(0xa0c,0xd61,0x78c,0x953)](_0x5d7704[_0x595743(0xd11,0xe57,0xa24,0x5bf)])['each']((_0x5e97e2,_0x673575)=>{let _0x1cf867=_0x5aefed[_0x7e3048(0xce7,0x581,0x9bb,0x62f)](_0x21de10,_0x673575)[_0x23dcb9(-0x13c,0xe6,-0x2e7,-0x8d)](_0x23dcb9(0x617,0xb51,0xeb,0x808));function _0x23dcb9(_0x43a084,_0x19a536,_0xd793b6,_0x45512f){return _0x201fcc(_0x43a084- -0x3f0,_0x19a536-0x26,_0xd793b6-0x21,_0xd793b6);}function _0x7e3048(_0x3617b6,_0x39ce8,_0x11770b,_0x24439d){return _0x201fcc(_0x11770b-0x21a,_0x39ce8-0x167,_0x11770b-0x3b,_0x39ce8);}_0x1cf867&&(_0x1b39f5=_0x1cf867);});const _0x4ef187={};function _0x201fcc(_0x2e546c,_0x51b93d,_0x2043d8,_0x58c059){return _0x5232de(_0x58c059,_0x51b93d-0xa7,_0x2e546c-0x320,_0x58c059-0x105);}return _0x4ef187['ua']=_0x28524f,_0x4ef187[_0x595743(0x487,0x42d,0x915,0xccf)]=_0x1b39f5,_0x4ef187;}async function _0x45546f(_0x49b4fc,_0x5f59df){function _0x5bf7fe(_0x45516d,_0x2cf53d,_0x10b314,_0x4efe5b){return _0x5232de(_0x45516d,_0x2cf53d-0x178,_0x10b314-0x178,_0x4efe5b-0x11b);}function _0x16b190(_0x37706d,_0x5ef577,_0x3ca819,_0x55bd07){return _0x5f0d44(_0x37706d-0x6c,_0x5ef577-0xe4,_0x5ef577,_0x3ca819- -0x42a);}const _0x4c1655={'yZSqw':function(_0x1ba234,_0x4ce6be){function _0x121775(_0x56d692,_0x152c75,_0x5ddb11,_0x1dedaf){return _0xf809(_0x152c75- -0xed,_0x1dedaf);}return _0x5d7704[_0x121775(-0xa3,0x155,0x613,0xa5)](_0x1ba234,_0x4ce6be);},'hRHuL':_0x5d7704[_0x5bf7fe(0x78b,0x4e8,0x6fe,0x3b1)],'BqUIq':_0x5bf7fe(0x962,0x539,0x5be,0x166),'SEkWR':_0x16b190(0x996,0x6f4,0x6e7,0x546)};if(_0x5d7704['LuIqm']===_0x5d7704[_0x5bf7fe(-0x308,0x4dc,0x212,-0x1e)]){const _0x2c8e7e={};_0x2c8e7e[_0x5bf7fe(0x83a,0xb5d,0xa4b,0xa7b)]=_0x5bf7fe(0x631,0x5e5,0x333,0x880)+_0x16b190(0x45d,0x388,0x74e,0x2e4)+_0x16b190(0xb68,0x9d2,0x84d,0xa19)+_0x5bf7fe(0x66d,0x73c,0x79c,0x331)+_0x5bf7fe(-0x7b,0x52c,0x4b5,0x65d)+_0x16b190(0x7cb,0xcde,0xa61,0xa70)+_0x5bf7fe(0x573,0x460,0x7f2,0x5e6)+'/webp,imag'+_0x5bf7fe(0x98d,0x391,0x798,0xb11)+_0x5bf7fe(0xd58,0xaae,0x88a,0x4f9)+_0x5bf7fe(0x97b,0xac2,0x667,0x36c)+_0x16b190(0x928,0xd26,0x940,0x749)+_0x16b190(-0x2e7,-0x17c,0xe9,-0x43d)+_0x5bf7fe(0x582,0x2d2,0x672,0x4c4),_0x2c8e7e['accept-lan'+_0x16b190(-0x354,-0x3d1,0x16f,0x4ab)]='id,en-US;q'+_0x16b190(0xcce,0xa57,0xa70,0xde1)+_0x16b190(0x19c,0x8a4,0x6a5,0x413)+_0x16b190(0x5c5,0x777,0x9c7,0x908)+'6',_0x2c8e7e[_0x5bf7fe(0x15,-0x23,0x3ea,0x525)+_0x5bf7fe(-0x13c,0x2fc,0x283,0x37)]='?1',_0x2c8e7e['content-ty'+'pe']=_0x16b190(0xa8c,0x60f,0x74e,0x58f)+'n/x-www-fo'+_0x16b190(0x58a,0xe7,0x1a4,-0x25)+'ded',_0x2c8e7e[_0x16b190(0x417,0x451,0x30c,0x7a8)]=_0x5f59df;const _0x5e122=await _0x5d7704[_0x16b190(-0x401,-0x8,0x128,0x62e)](axios,{'url':_0x5d7704[_0x5bf7fe(0xa61,0x421,0x671,0x9cf)],'method':_0x5d7704['wGFji'],'data':new URLSearchParams(Object[_0x16b190(0x6b3,-0x390,0x1ba,0x1)](_0x49b4fc)),'headers':_0x2c8e7e}),_0x5b3048=cheerio['load'](_0x5e122[_0x5bf7fe(0x3b0,-0x2be,0x27f,0xb4)]);let _0x4c0719=[];return _0x5d7704[_0x16b190(0x4ac,-0x34d,0x128,-0x38d)](_0x5b3048,_0x5bf7fe(0x688,-0x3b,0x327,0x284)+'\x22col-md-10'+'\x22]')[_0x5bf7fe(0x894,0xa3d,0x864,0xcf0)]('a')[_0x16b190(0x4e1,0xa35,0x752,0x44a)]((_0x3694e8,_0x452617)=>{function _0x11141b(_0x4ad675,_0x306313,_0x34ab24,_0x7bd05d){return _0x5bf7fe(_0x7bd05d,_0x306313-0x3d,_0x306313- -0x22f,_0x7bd05d-0x73);}const _0x2ca349={'tMZML':function(_0x232ff9,_0x2487b7){function _0x56cbc9(_0x1b60ab,_0x12a826,_0x5408be,_0x27b986){return _0xf809(_0x1b60ab-0x26f,_0x5408be);}return _0x4c1655[_0x56cbc9(0x902,0x73f,0xc30,0xb97)](_0x232ff9,_0x2487b7);}};let _0x1e19e0=_0x4c1655['yZSqw'](_0x5b3048,_0x452617)[_0x1a15fc(0x1f7,-0xe8,0x590,0x40e)]('href'),_0x257ec0=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;function _0x1a15fc(_0x4730db,_0x1d2c93,_0x15a7b4,_0x4fca91){return _0x5bf7fe(_0x15a7b4,_0x1d2c93-0x5e,_0x4fca91-0x302,_0x4fca91-0x7b);}if(_0x257ec0[_0x11141b(-0x168,-0x119,-0x5fc,0x190)](_0x1e19e0)){if(_0x4c1655[_0x11141b(0x48d,0xf5,0xa7,0x134)]!==_0x4c1655['BqUIq'])_0x4c0719['push'](_0x1e19e0);else{const _0x1ec452={};_0x1ec452[_0x11141b(0x608,0x1fa,0x15c,0x362)]=0xc8,_0x1ec452['image']=_0x1123a9[-0x246*0x4+0x2*-0x76f+0x17f6][_0x11141b(0xc15,0x74a,0x281,0x610)],_0x2ca349[_0x1a15fc(0x9b1,0x9d8,0xb55,0x700)](_0x140148,_0x1ec452);}}}),_0x4c0719;}else _0x4c1655[_0x5bf7fe(0x5be,0x48c,0x5c9,0x19a)](_0x3536e8,_0x4c1655[_0x5bf7fe(0xc16,0x50f,0x7db,0x34d)]);}const _0x2722e1=await _0x2794cb();function _0x5f0d44(_0x59bbbc,_0x22f4ae,_0x2f21db,_0x551e97){return _0x128a37(_0x59bbbc-0x47,_0x2f21db,_0x2f21db-0x1a6,_0x551e97-0x1);}const _0x2dee72={};_0x2dee72[_0x5f0d44(0x815,0x880,0x4cf,0x6ff)]=_0x45c38c,_0x2dee72[_0x5f0d44(0x9b2,0xda5,0x480,0x8be)]=_0x2722e1[_0x5232de(0x684,0x41d,0x36c,0x225)];let _0x51c8f4=_0x2dee72;const _0x3a3eb6=await _0x45546f(_0x51c8f4,_0x2722e1['ua']);function _0x5232de(_0x472f97,_0x4456c4,_0x4376c1,_0x14e1ad){return _0x4963f8(_0x472f97,_0x4456c4-0x1a2,_0x4376c1- -0x4a7,_0x14e1ad-0x11c);}return _0x3a3eb6;};!fbte[_0x4963f8(0x76a,0x9e4,0x6ca,0x92b)]('groups')?zee['Facebook'](fbte)[_0x128a37(0x1099,0xda7,0x1171,0xc92)](async _0xb523ea=>{const _0x51844d={'tEsDP':function(_0x2c9124,_0x32ff71,_0x1fbc06,_0x2f2ece,_0x3a5523,_0xfc1cb8,_0x3d11ed){return _0x2c9124(_0x32ff71,_0x1fbc06,_0x2f2ece,_0x3a5523,_0xfc1cb8,_0x3d11ed);},'QWrZJ':function(_0x3bff83,_0x3116bd){return _0x3bff83+_0x3116bd;},'xVgON':_0x11d9b7(0x53c,0x92b,0x420,0x3db),'wWauE':function(_0x2c9bd5,_0x198a1a){return _0x2c9bd5+_0x198a1a;},'mofEM':_0x137024(0xb54,0xf3e,0xf12,0xd2e)};let _0x49e15d='*----「\x20FAC'+_0x11d9b7(-0x1f2,0xbe,0x204,-0xcf)+'LOADER\x20」--'+_0x137024(0x818,0x20e,0x1d4,0x43e);_0x49e15d+=_0x11d9b7(0x62e,-0x336,0x207,0xc6)+'*\x20'+_0xb523ea[_0x11d9b7(0x3d,0xe5,0x2d5,0x397)]+'\x0a',_0x49e15d+=_0x11d9b7(0x666,0x6af,0x294,0x1f4)+'\x20'+_0xb523ea[_0x11d9b7(0x2ba,0x80b,0x668,0x6ba)][-0x6*0x32e+0xad*0x37+0x1a5*-0xb][_0x11d9b7(0x463,0x295,0x436,-0x69)]+'\x0a';function _0x137024(_0x1cbb20,_0x30ed8a,_0x43669a,_0x597577){return _0x4963f8(_0x1cbb20,_0x30ed8a-0xb2,_0x597577- -0xc7,_0x597577-0xd9);}_0x49e15d+='*📭\x20Quality'+_0x137024(0x2db,0x7af,0x45c,0x58a)+_0x11d9b7(0x208,0x805,0x716,0x85f),_0x49e15d+=_0x11d9b7(0x30d,0xe2,0x28,-0x2b8)+_0x137024(0x74d,0x771,0xbc4,0x838)+_0xb523ea[_0x137024(0x5ea,0x72e,0x695,0xa86)][-0x2408+0xb32+0x18d6][_0x11d9b7(0x70e,0xbb6,0x705,0x711)+_0x11d9b7(0x4df,0x52,0x1f6,-0x2a3)]+'\x0a',_0x49e15d+='*📩\x20Size\x20Hd'+_0x11d9b7(-0xc4,0x199,0x41a,0x525)+_0xb523ea[_0x11d9b7(0x195,0x286,0x668,0x5c0)][0x2ab+0x1202+-0x14ac][_0x11d9b7(0x4bf,0x50d,0x705,0x6a2)+'ize']+'\x0a';function _0x11d9b7(_0x212fcd,_0x3534e9,_0x52ac0b,_0x5614b8){return _0x128a37(_0x212fcd-0x1a1,_0x3534e9,_0x52ac0b-0x19,_0x52ac0b- -0x58f);}_0x49e15d+=_0x11d9b7(0x6d5,0x15a,0x4f1,0x16a)+_0x11d9b7(0xcd1,0x472,0x7a1,0xc56)+_0xb523ea[_0x137024(0x6a5,0xf4e,0xf53,0xa86)][0x1c72+-0x4a1+-0x17d1][_0x137024(0xe87,0x805,0x70f,0xb23)+'ize']+'\x0a',_0x49e15d+=_0x137024(0x918,0x2aa,0x5d3,0x754)+_0xb523ea['url'];let _0x5cf52d=await getBuffer(_0xb523ea[_0x137024(0x83f,0xd79,0x753,0x8a3)]);_0x51844d[_0x11d9b7(0x605,0xbf7,0x79d,0xaa8)](sendButLocation,from,_0x49e15d,_0x137024(0xe50,0xfab,0x746,0xadf)+_0x11d9b7(0x5ec,0xf6,0x559,0x738)+'in\x20kamu\x20do'+_0x11d9b7(0x652,0x59c,0x542,0x760)+enter+enter+'©\x20'+ownername,_0x5cf52d,[{'buttonId':_0x11d9b7(0x2c2,0x590,0x45a,0x2cb)+fbte,'buttonText':{'displayText':_0x51844d['QWrZJ']('HD','\x20')+_0xb523ea[_0x11d9b7(0x83e,0x607,0x668,0x184)][0x17*0x121+0x3*0xcb3+-0x400f]['formattedS'+_0x11d9b7(0x3f2,0x4a2,0x1f6,0x6d9)]},'type':_0x51844d[_0x137024(0x7ff,0x5ae,0xd8b,0x94c)]},{'buttonId':_0x137024(0x672,0x702,0xd4e,0x82f)+fbte,'buttonText':{'displayText':_0x51844d['QWrZJ'](_0x51844d[_0x137024(0x5d6,0x171,0x4ba,0x580)]('SD','\x20'),_0xb523ea[_0x137024(0xd87,0x91e,0xba5,0xa86)][0x21ba+-0x21*-0x119+-0x45f3][_0x137024(0xaf3,0xd2e,0xd5a,0xb23)+_0x137024(0x3b0,0x459,0x69f,0x614)])},'type':_0x51844d[_0x137024(0xc71,0x616,0xb78,0x94c)]},{'buttonId':_0x11d9b7(0x233,0xab9,0x741,0x543)+fbte,'buttonText':{'displayText':_0x51844d[_0x137024(0x6a1,0xc61,0x732,0x7db)](_0x51844d[_0x137024(0xb28,0xbd0,0x7c8,0x866)]+'\x20',_0xb523ea[_0x137024(0xa2b,0x54a,0xcf6,0xa86)][0xe9c+0x3e9+-0x1285]['formattedS'+'ize'])},'type':_0x51844d[_0x11d9b7(0xa,0x81b,0x52e,0x6cb)]}],{});}):fbdl(fbte)['then'](_0x36f85b=>{const _0x275eee={'dfqEK':function(_0x1570de,_0x5275bf,_0x49c249,_0x4ae369,_0x36bcbf){return _0x1570de(_0x5275bf,_0x49c249,_0x4ae369,_0x36bcbf);}};function _0x5e8fc3(_0x387377,_0x229b67,_0x3420f7,_0x22f686){return _0x128a37(_0x387377-0x27,_0x3420f7,_0x3420f7-0x18f,_0x387377-0xb4);}function _0x408778(_0x313feb,_0x25ce30,_0x47035b,_0x36f2b3){return _0x4963f8(_0x313feb,_0x25ce30-0x1d5,_0x47035b- -0x464,_0x36f2b3-0x146);}_0x275eee[_0x408778(0xcff,0xcea,0x9a2,0x668)](sendFileFromUrl,from,_0x36f85b[0x22d5+0x220+-0x24f5],lang[_0x5e8fc3(0x71a,0x5c5,0xab1,0x1cc)](),mek);});break;case _0x128a37(0x76f,0x37e,0x16b,0x5f2):case _0x4963f8(0x9f7,0x7cc,0x5a2,0xa2d):const _0x59288d={};_0x59288d[_0x128a37(0xb8b,0xd73,0xa57,0xc3a)+'t']=_0x128a37(0xe7f,0xf8a,0x1191,0xcac)+_0x4963f8(0x2e2,0x172,0x4b1,0x69d);const _0x408157={};_0x408157[_0x128a37(0x945,0xa32,0x904,0xb1e)]=_0x128a37(0xea3,0xb03,0xe6d,0xac6),_0x408157[_0x4963f8(0xa9f,0xa9a,0x6c4,0x96a)]=_0x59288d,_0x408157['type']=0x1;const _0x55bc00={};_0x55bc00[_0x128a37(0xb09,0xd68,0xc8b,0xa6d)]=mek;if(!isPremium)return sendButMessage(from,_0x128a37(0xd6b,0x9ef,0xc37,0xd51)+_0x4963f8(0xaa4,0xfc8,0xaf7,0xf14)+_0x4963f8(0xa87,0xac8,0x5a5,0xa90)+_0x4963f8(0x867,0x9e0,0x9ba,0xdae)+_0x128a37(0xb74,0x4f6,0x9af,0x761)+_0x4963f8(0xa1e,0xd71,0xc06,0x98a)+'\x20akun\x20mu\x20s'+_0x128a37(0xe48,0x131b,0xf37,0xe17)+_0x4963f8(0xa48,0x7cf,0x73d,0x68f)+'ketik\x20'+prefix+'goprem',_0x128a37(0xa68,0x50d,0x80d,0x58c)+'on\x20below',[_0x408157],_0x55bc00);if(!q)return reply('Linknya?');if(!isUrl(args[0x1b4a+-0x1*0x408+-0x1742])&&!args[0x16d0+0x96b+-0x25*0xdf][_0x4963f8(0x583,0x95d,0x6ca,0x8c9)]('facebook.c'+'om'))return reply(lang['erorLink']());reply(lang[_0x4963f8(0x68c,0x2a2,0x6f1,0x652)]());var fbte=args[_0x128a37(0xe08,0x1201,0x11af,0xde3)]('\x20');zee[_0x4963f8(0x757,0x985,0xbc7,0xe73)](fbte)['then'](async _0xe6cab8=>{function _0x1a2621(_0x21d469,_0xb8952,_0x1a2113,_0x3ce12a){return _0x4963f8(_0x21d469,_0xb8952-0xc1,_0xb8952- -0x1e4,_0x3ce12a-0x49);}function _0x401e15(_0x3f8fca,_0x59720a,_0x5b1c00,_0x14a9be){return _0x128a37(_0x3f8fca-0x79,_0x14a9be,_0x5b1c00-0xd9,_0x59720a-0x31);}const _0x5b3321={'jLvNl':function(_0x511a8c,_0x5dc541,_0x1df4d2,_0x43c647,_0x50b0b6){return _0x511a8c(_0x5dc541,_0x1df4d2,_0x43c647,_0x50b0b6);}};_0x5b3321[_0x401e15(0xff5,0xea0,0xe4e,0xbd6)](sendFileFromUrl,from,_0xe6cab8[_0x401e15(0xa28,0xc28,0xf2b,0x7cc)][-0xd*-0x245+0x4c*0x15+0x23bc*-0x1][_0x1a2621(0xe0f,0xaca,0xa20,0x7e5)],lang[_0x401e15(0x2ab,0x697,0x61d,0x4be)](),mek);})[_0x4963f8(0x9ba,0x4a9,0x91c,0xa66)](_0x5e67e7=>{function _0x477b35(_0x1538e1,_0x1e5ff1,_0x303d6e,_0x29f02c){return _0x128a37(_0x1538e1-0x15f,_0x29f02c,_0x303d6e-0x46,_0x303d6e- -0x132);}const _0x4f3a12={'Oegju':function(_0x3a9afb,_0x3556b5){return _0x3a9afb(_0x3556b5);}};_0x4f3a12['Oegju'](reply,lang[_0x477b35(0x952,0x91e,0x4bb,0x615)]());});break;case'fbsd':case _0x128a37(0x121f,0xc77,0xf7e,0xdf6):if(!q)return reply(_0x4963f8(0xafc,0xbb0,0xc6e,0x9fc));if(!isUrl(args[-0x167a+0x2360+-0xce6])&&!args[-0x1*-0x1150+0x7b5+-0x1905][_0x4963f8(0x678,0xb17,0x6ca,0xa19)]('facebook.c'+'om'))return reply(lang[_0x128a37(0x62f,0xcec,0xc6d,0xa24)]());reply(lang[_0x4963f8(0x402,0xb21,0x6f1,0xaa9)]());var fbte=args[_0x128a37(0x8a7,0xde6,0xa7f,0xde3)]('\x20');zee[_0x128a37(0xc9c,0x92d,0x878,0xc71)](fbte)[_0x4963f8(0x947,0x6e5,0xbe8,0xc50)](async _0x2c0b71=>{function _0x539343(_0x452f05,_0x3b48e9,_0x563471,_0x37c09d){return _0x128a37(_0x452f05-0x15c,_0x37c09d,_0x563471-0x4c,_0x3b48e9- -0x482);}function _0x248155(_0x2ff903,_0x5e13ad,_0x476740,_0x59128a){return _0x4963f8(_0x2ff903,_0x5e13ad-0xf9,_0x5e13ad- -0x4d5,_0x59128a-0x1ca);}sendFileFromUrl(from,_0x2c0b71[_0x248155(0x434,0x678,0x6c3,0xa07)][0x3e*-0x18+-0x21a1*0x1+-0x17*-0x1b7][_0x248155(0x845,0x7d9,0xbf5,0x51d)],lang[_0x248155(0x31c,0xe7,0x4fc,-0x365)](),mek);})[_0x4963f8(0xb13,0x9bf,0x91c,0x443)](_0x4d497f=>{function _0x3d6725(_0x9c471e,_0x1432e5,_0x29d732,_0x9504cd){return _0x4963f8(_0x9504cd,_0x1432e5-0xa7,_0x9c471e- -0x443,_0x9504cd-0x16);}function _0x17191e(_0x29bfcf,_0x28c60c,_0x272d13,_0xe118d4){return _0x128a37(_0x29bfcf-0xef,_0x29bfcf,_0x272d13-0xb8,_0xe118d4- -0x559);}const _0x22908d={'YkglJ':function(_0x1741bf,_0x5c892d){return _0x1741bf(_0x5c892d);}};_0x22908d[_0x3d6725(0x428,0x30,0x710,0x406)](reply,lang[_0x17191e(0x4d3,0x4b7,0xf9,0x94)]());});break;case _0x4963f8(0xc94,0x682,0xad3,0x76d):case'facebookau'+_0x4963f8(0xea0,0x10ed,0xd4f,0x986):const _0x2d58ce={};_0x2d58ce[_0x4963f8(0xe61,0x744,0xb90,0xcda)+'t']=_0x4963f8(0xe61,0xf5d,0xd18,0xc5a)+'t';const _0x32d7fc={};_0x32d7fc[_0x128a37(0x915,0x830,0x706,0xb1e)]=_0x4963f8(0x8ae,0x1195,0xce1,0xe86),_0x32d7fc[_0x128a37(0x963,0x47a,0x994,0x76e)]=_0x2d58ce,_0x32d7fc[_0x4963f8(0xc82,0xd05,0xce9,0xcd0)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xac1,0xa68,0xce1,0x825)](prefix),'©\x20'+ownername,[_0x32d7fc]);if(!q)return reply(_0x4963f8(0x980,0x7ee,0xc6e,0x9a2));if(!isUrl(args[0x16e6+-0x10d5*-0x1+-0x5ad*0x7])&&!args[0x1*0x12a+0x23e2+-0x250c][_0x128a37(0x2d8,0x75a,0xa9a,0x774)]('facebook.c'+'om'))return reply(lang['erorLink']());reply(lang[_0x128a37(0x8fd,0xb03,0x4f9,0x79b)]());var fbte=args['join']('\x20');zee[_0x128a37(0x91c,0x1073,0xc8a,0xc71)](fbte)[_0x128a37(0x7b6,0xd55,0x8a3,0xc92)](async _0x15cf39=>{const _0x3bc542={'WWLUZ':function(_0x35ec6e,_0x322cf7){return _0x35ec6e(_0x322cf7);},'rUiNY':_0x27ed8a(0x873,0xbb7,0x694,0x4ee)+_0x27ed8a(-0x180,0x4e5,0x198,0x96)+'xTH6oLd8','cVmJL':_0x27ed8a(0x1f3,-0x288,0x219,-0xcd)};let _0x108c06=await _0x3bc542['WWLUZ'](getBuffer,_0x15cf39[_0x27ed8a(0x795,0xaf8,0x848,0xc05)][-0x1e7*0x3+-0xb5a+0x18d*0xb]['url']);const _0x369020={};_0x369020[_0x27ed8a(0x4b3,0xa09,0x911,0x728)]=_0x3bc542[_0x10adb1(0x660,0x600,0x804,0x453)],_0x369020[_0x27ed8a(0xa1c,0x496,0x9d9,0x777)]=0x2,_0x369020['title']=_0x10adb1(0x584,0xc41,0x8d6,0x903)+'ic',_0x369020[_0x10adb1(-0xf0,-0x7,0x8cd,0x397)]='',_0x369020[_0x27ed8a(-0xd4,0x489,0x43f,0x80c)+'rl']='',_0x369020[_0x27ed8a(0xa37,0x64a,0x665,0x83a)]=pp_userz;const _0x3f01d6={};_0x3f01d6[_0x27ed8a(0x679,-0x31c,0x224,-0x29d)]='Facebook\x20M'+'usic\x20Downl'+_0x27ed8a(0x3b4,-0x2fe,0x168,-0x12f);function _0x27ed8a(_0x5cdec7,_0x144a73,_0x393a38,_0x28204a){return _0x4963f8(_0x28204a,_0x144a73-0x114,_0x393a38- -0x305,_0x28204a-0x126);}_0x3f01d6[_0x10adb1(0x53b,0x5f7,0x888,0x6ce)+_0x27ed8a(0xcc4,0x60b,0xb19,0xe97)]=0x3b9aca00,_0x3f01d6[_0x27ed8a(0x415,0x852,0x663,0x845)+'d']=!![],_0x3f01d6[_0x27ed8a(0x907,0xf4b,0xb81,0x8ef)+_0x27ed8a(0x24b,-0x128,0x19d,0x186)]=!![],_0x3f01d6['externalAd'+_0x10adb1(0xd23,0x9a1,0xb76,0x7d6)]=_0x369020;const _0xc2f604={};_0xc2f604[_0x27ed8a(0xabe,0x192,0x5ca,0x253)+'o']=_0x3f01d6,_0xc2f604[_0x27ed8a(0x740,0x3fb,0x525,0x277)]=_0x3bc542[_0x27ed8a(0xa42,0x91f,0x80f,0x406)],_0xc2f604[_0x10adb1(0x6fe,0x7fd,0x585,0x983)]='Facebook\x20M'+_0x27ed8a(0xb04,0x343,0x5ff,0x5b3),_0xc2f604['quoted']=fgclink2;function _0x10adb1(_0x59db9a,_0x313563,_0x5db692,_0x4eb9ee){return _0x4963f8(_0x5db692,_0x313563-0x124,_0x4eb9ee- -0x1c7,_0x4eb9ee-0xdb);}_0xc2f604[_0x10adb1(0x881,0xc09,0x2d7,0x7a3)]=pp_bot2,alpha[_0x27ed8a(0xa02,0x87e,0x94a,0x98b)+'e'](from,_0x108c06,MessageType[_0x27ed8a(0x90c,-0x84,0x4ae,0x8cc)],_0xc2f604);})[_0x128a37(0xafa,0xce8,0x8e6,0x9c6)](_0x43f2db=>{const _0x3deef4={'hHilp':function(_0x58219e,_0x54d565){return _0x58219e(_0x54d565);}};function _0x14ea3b(_0x279d2e,_0xfba3fe,_0x2ad8e6,_0x57000a){return _0x4963f8(_0x279d2e,_0xfba3fe-0x1cb,_0x57000a- -0x495,_0x57000a-0x2f);}function _0x15f34b(_0x17fe60,_0x2d6107,_0x21a822,_0x6f8a35){return _0x4963f8(_0x2d6107,_0x2d6107-0x69,_0x6f8a35- -0x1ed,_0x6f8a35-0x53);}_0x3deef4[_0x14ea3b(-0x39,0x65d,0x3a5,0x42c)](reply,lang[_0x14ea3b(-0x22d,-0x30,-0x21b,0xae)]());});break;case _0x4963f8(0xb56,0x1024,0xc95,0x1108)+'o':case _0x128a37(0xa01,0x316,0x839,0x781)+'c':case _0x4963f8(0xcc4,0x9e3,0x9ab,0x5a5):const _0x4dae1b={};_0x4dae1b['displayTex'+'t']=_0x4963f8(0xd47,0x9c4,0xd18,0xf98)+'t';const _0x287fe3={};_0x287fe3[_0x4963f8(0xbed,0xf12,0xa74,0x5dd)]=_0x4963f8(0x111e,0x85b,0xce1,0x11d6),_0x287fe3['buttonText']=_0x4dae1b,_0x287fe3[_0x128a37(0xa2b,0x1018,0xfec,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x287fe3]);if(!q)return reply(_0x4963f8(0xa8f,0xa77,0xc6e,0x7e9));if(!isUrl(args[0x2*0x3a9+-0x126a+0xb18])&&!args[-0x421*0x2+-0x1*-0x149f+-0xc5d][_0x4963f8(0x9cb,0x9fb,0x6ca,0xb60)](_0x4963f8(0x932,0x609,0x931,0x822)))return reply(lang[_0x128a37(0xf74,0x4ea,0x55f,0xa24)]());reply(lang['wait']()),hx['ttdownload'+'er'](''+args[-0x1a42+0xd93*-0x1+0x27d5])[_0x4963f8(0xe89,0x7ae,0xbe8,0xbbf)](_0x38c235=>{const _0x5e8feb={'lfPWF':function(_0x3aeaaa,_0x3e989f){return _0x3aeaaa*_0x3e989f;},'sHjtn':function(_0x5d4ba1,_0x133441){return _0x5d4ba1!==_0x133441;},'reEKU':_0x3c0848(0xfa6,0xae1,0xdcd,0x1293),'PaECl':_0x244f7f(0xb8b,0xadc,0x8ed,0x92b),'FiVBw':function(_0x13d0a6,_0xa3c3b4){return _0x13d0a6(_0xa3c3b4);},'dLCzJ':'https://yo'+_0x3c0848(0x526,0x99e,0x577,0x8f)+_0x3c0848(0xb9a,0xdd0,0x8b5,0x948),'rwSrb':_0x244f7f(0x32d,0xa9b,0x35e,0x5c9)};function _0x244f7f(_0x44f3dd,_0x537c13,_0x51cb5c,_0x442155){return _0x128a37(_0x44f3dd-0x95,_0x44f3dd,_0x51cb5c-0x8c,_0x442155-0x1);}function _0x3c0848(_0x3c3978,_0xada8c4,_0x38a17f,_0x2f2da6){return _0x4963f8(_0xada8c4,_0xada8c4-0x2c,_0x38a17f-0xda,_0x2f2da6-0xbb);}const {wm:_0x1bb035,nowm:_0x1003e1,audio:_0x1dea4f}=_0x38c235;axios[_0x3c0848(0xb0a,0x347,0x604,0x92e)](_0x3c0848(0xb0b,0xb80,0xc1f,0xfae)+_0x244f7f(-0x2a,0x9d8,0x9a8,0x50d)+_0x244f7f(0x123e,0xe8d,0xf2e,0xd39)+'.php?url='+_0x1003e1)[_0x244f7f(0x9ff,0x9f0,0xd03,0xc93)](async _0x39cd55=>{const _0x9bbd54={'qIuvy':function(_0x96578b,_0x72c3){return _0x5e8feb['lfPWF'](_0x96578b,_0x72c3);}};function _0x6b8a83(_0x43487a,_0x116ea2,_0x148eaa,_0x24f582){return _0x3c0848(_0x43487a-0x1b0,_0x116ea2,_0x24f582- -0xb4,_0x24f582-0x71);}function _0x57d952(_0x52e46b,_0x3c3a71,_0xe95b5e,_0x454add){return _0x3c0848(_0x52e46b-0x167,_0x454add,_0xe95b5e- -0x299,_0x454add-0xb3);}if(_0x5e8feb[_0x57d952(0x5d0,0x90,0x38f,0x722)](_0x5e8feb[_0x6b8a83(0x437,0xbd0,0xa7c,0x695)],_0x5e8feb[_0x57d952(0x8f6,0x79d,0x5a7,0x2db)])){me='*Link*\x20:\x20'+_0x39cd55[_0x6b8a83(0x88b,0x4b1,0x389,0x5d4)],nowmm=await _0x5e8feb[_0x6b8a83(0x667,0x4d8,0xa57,0x5a3)](getBuffer,_0x1dea4f);const _0x20b6bd={};_0x20b6bd['mediaUrl']=_0x5e8feb[_0x6b8a83(0x575,0x44b,0x473,0x631)],_0x20b6bd[_0x6b8a83(0xc02,0xd44,0xdd4,0xd04)]=0x2,_0x20b6bd[_0x6b8a83(0xd23,0xaec,0x2dd,0x7e0)]=_0x6b8a83(0x8f9,0xe0b,0x855,0xaf0)+'ic',_0x20b6bd[_0x57d952(-0x188,0x4f,0x39f,0x5e7)]='',_0x20b6bd['thumbnailU'+'rl']='',_0x20b6bd[_0x6b8a83(0xc1d,0xdc2,0x76c,0x990)]=pp_userz;const _0x47d839={};_0x47d839[_0x57d952(0x24f,-0x183,0x36a,0x884)]=_0x57d952(0x6fb,0x6cb,0x90b,0x49c)+_0x57d952(0x6e6,0x554,0xa89,0xbd0)+'der',_0x47d839[_0x6b8a83(0xa75,0x96d,0xb88,0x8bb)+_0x6b8a83(0xe11,0xac4,0xa65,0xe44)]=0x3b9aca00,_0x47d839['isForwarde'+'d']=!![],_0x47d839[_0x6b8a83(0x123b,0xa87,0xfec,0xeac)+_0x6b8a83(0x6fa,0x21,0x2bf,0x4c8)]=!![],_0x47d839['externalAd'+_0x57d952(0x95d,0x694,0x7de,0x7af)]=_0x20b6bd;const _0x34b6e3={};_0x34b6e3['contextInf'+'o']=_0x47d839,_0x34b6e3[_0x57d952(0x1a1,0x9f2,0x66b,0xb54)]=_0x5e8feb[_0x57d952(0xadf,0x98d,0xd05,0x999)],_0x34b6e3[_0x57d952(0x821,0x48c,0x98b,0xe0f)]='Tiktok\x20Mus'+_0x6b8a83(0x7ba,0x529,0x870,0x678),_0x34b6e3['quoted']=fgclink2,_0x34b6e3[_0x57d952(0xb7e,0x72b,0x7ab,0x7fa)]=pp_bot2,alpha[_0x6b8a83(0x1037,0x118a,0xd89,0xc75)+'e'](from,nowmm,MessageType[_0x6b8a83(0xaa5,0x95a,0xaad,0x7d9)],_0x34b6e3);}else _0x4f387a=new _0x21ae51(_0x9bbd54['qIuvy'](_0x4a8d7f,-0x1*0x21d+0x2a2*0x2+0xc1));});}),await limitAdd(sender,limit);break;case _0x4963f8(0xeed,0xa97,0xeb0,0x10f6):case _0x4963f8(0x107b,0xb74,0xdf0,0xdd6):case _0x128a37(0x641,0x49f,0x240,0x742):const _0x3130f5={};_0x3130f5['displayTex'+'t']=_0x128a37(0x11af,0x1236,0xa27,0xdc2)+'t';const _0xac65f4={};_0xac65f4[_0x4963f8(0xb45,0xbe2,0xa74,0xcae)]=_0x128a37(0x10c6,0xa45,0x1018,0xd8b),_0xac65f4[_0x128a37(0x77f,0x270,0x4b3,0x76e)]=_0x3130f5,_0xac65f4[_0x4963f8(0x95d,0xcbc,0xce9,0x11a9)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x7c9,0xd58,0xce1,0x990)](prefix),'©\x20'+ownername,[_0xac65f4]);if(!q)return reply(_0x128a37(0xd4e,0xa97,0x9c7,0xd18));if(!isUrl(args[-0x17fc+0x15b+-0x1*-0x16a1])&&!args[-0x1358+-0x267+0x1*0x15bf]['includes'](_0x128a37(0xc10,0x982,0x56b,0x9db)))return reply(lang[_0x4963f8(0xd85,0xb82,0x97a,0xc0b)]());reply(lang['wait']()),hx[_0x4963f8(0xc97,0xcd0,0xdaa,0xff4)+'er'](''+args[0x1*0xd11+0x2b7+0x4*-0x3f2])[_0x128a37(0xb24,0x8bd,0xcfe,0xc92)](_0x1e6795=>{function _0x1d6fe3(_0xcf67c,_0x495020,_0x4b208b,_0xead4e2){return _0x4963f8(_0xcf67c,_0x495020-0xc3,_0x495020- -0x335,_0xead4e2-0x97);}const _0x298ae0={'YHvOs':_0x289314(0x801,0xbc2,0x6a5,0x9dd),'dfMwO':function(_0x1ed934,_0x2fa87b){return _0x1ed934(_0x2fa87b);},'wlnKd':function(_0x31e7c9,_0x2f1e60,_0x194dbd,_0x507f40){return _0x31e7c9(_0x2f1e60,_0x194dbd,_0x507f40);},'EknkP':function(_0x214403,_0x27dcba,_0x4875bd){return _0x214403(_0x27dcba,_0x4875bd);},'pfCoY':function(_0x4daa83,_0x1be6ea){return _0x4daa83!==_0x1be6ea;},'zgTkD':_0x1d6fe3(0x6a8,0x83d,0xa19,0x5a6),'cblcu':_0x1d6fe3(0x7e0,0x5da,0xa41,0x221),'NnjdZ':'https://yo'+_0x1d6fe3(0x44,0x168,0x285,-0x264)+_0x1d6fe3(0x3c,0x4a6,0x7d6,0x1c),'tevXn':_0x289314(-0x2b1,0x390,0x1e1,0x1f5)};function _0x289314(_0x179971,_0x35ccc7,_0x534693,_0x343573){return _0x4963f8(_0x343573,_0x35ccc7-0xc9,_0x534693- -0x549,_0x343573-0xdc);}const {wm:_0x1ac8ab,nowm:_0x4132d4,audio:_0x27a6de}=_0x1e6795;axios['get']('https://ti'+_0x1d6fe3(0x649,0x12d,0x244,-0x2e2)+'api-create'+_0x289314(0xa5,0x7db,0x3f4,-0x6e)+_0x4132d4)[_0x289314(0x1b2,0x690,0x69f,0xb73)](async _0x28f60d=>{const _0x41991d={'EqMud':_0x298ae0[_0x2eb007(0xb0e,0xce8,0xd82,0xecf)],'VCTTj':function(_0x5667db,_0x21c937){function _0x5a7e71(_0x414a23,_0x5d8ece,_0x4b22d4,_0x4d3bb7){return _0x2eb007(_0x4b22d4-0x2ab,_0x5d8ece-0x14e,_0x4d3bb7,_0x4d3bb7-0x1ad);}return _0x298ae0[_0x5a7e71(0xdb1,0x381,0x893,0x3ba)](_0x5667db,_0x21c937);},'CdHKI':function(_0x211df5,_0x5b3e75,_0x40fb1d,_0x10110c){function _0x66a8e3(_0x1f3bbb,_0x17217d,_0x5c9619,_0x29ec37){return _0x2eb007(_0x1f3bbb- -0x3f3,_0x17217d-0x86,_0x5c9619,_0x29ec37-0xf);}return _0x298ae0[_0x66a8e3(0x370,0xf3,0x1e2,0x165)](_0x211df5,_0x5b3e75,_0x40fb1d,_0x10110c);},'eFlFO':function(_0x24df1c,_0x12a255,_0x20a21f,_0x3e82f0){return _0x24df1c(_0x12a255,_0x20a21f,_0x3e82f0);},'fdJcB':function(_0x1498dd,_0x42f962,_0x1d0b97){return _0x298ae0['EknkP'](_0x1498dd,_0x42f962,_0x1d0b97);}};function _0x2eb007(_0x3b680d,_0x543236,_0x572ff8,_0x10a3e5){return _0x1d6fe3(_0x572ff8,_0x3b680d-0x1cd,_0x572ff8-0x47,_0x10a3e5-0x7e);}function _0xa4f4f6(_0x6f8f00,_0x45c028,_0x5b147d,_0x56af1c){return _0x1d6fe3(_0x6f8f00,_0x45c028-0x3c3,_0x5b147d-0x0,_0x56af1c-0x199);}if(_0x298ae0[_0xa4f4f6(0x5fc,0x645,0x887,0x130)](_0x298ae0[_0x2eb007(0x9f1,0xf19,0x520,0xb22)],_0x298ae0[_0x2eb007(0xb49,0xd52,0x673,0xbac)])){me=_0xa4f4f6(0x715,0x761,0x7be,0x73b)+_0x28f60d[_0xa4f4f6(0x25d,0x63c,0x783,0x2db)],nowmm=await _0x298ae0[_0x2eb007(0x5e8,0x3a7,0x1f5,0xa92)](getBuffer,_0x4132d4);const _0x3dd997={};_0x3dd997[_0x2eb007(0xaae,0x724,0x5a3,0xd70)]=_0x298ae0[_0xa4f4f6(0xaf9,0xcfe,0x9e1,0x115b)],_0x3dd997[_0xa4f4f6(0xd2a,0xd6c,0x1209,0x1052)]=0x2,_0x3dd997[_0x2eb007(0x652,0x2e0,0x416,0xa3c)]='Tiktok\x20No\x20'+_0x2eb007(0x34a,0x19e,0x663,0x180),_0x3dd997[_0xa4f4f6(0x89a,0x5ec,0x3ca,0x40c)]='',_0x3dd997[_0x2eb007(0x5dc,0x865,0x741,0x762)+'rl']='',_0x3dd997[_0xa4f4f6(0xa5d,0x9f8,0x55b,0x72f)]=pp_userz;const _0x48c37f={};_0x48c37f[_0xa4f4f6(0x6ac,0x923,0xe18,0x47c)+_0xa4f4f6(0xb44,0xeac,0x98b,0xa58)]=0x3b9aca00,_0x48c37f[_0x2eb007(0x800,0xc42,0xb54,0x359)+'d']=!![],_0x48c37f[_0x2eb007(0xd1e,0xf31,0x8da,0xfe1)+'ral']=!![],_0x48c37f['externalAd'+_0xa4f4f6(0x9ee,0xa2b,0x93e,0xcb3)]=_0x3dd997;const _0x119ee7={};_0x119ee7[_0x2eb007(0x767,0x94e,0x4c0,0x2d0)+'o']=_0x48c37f,_0x119ee7[_0x2eb007(0x6c2,0x43f,0x830,0x74d)]=_0x298ae0[_0x2eb007(0x8ba,0x925,0xa4c,0xd08)],_0x119ee7[_0x2eb007(0x9e2,0xcc7,0xba3,0x72f)]='Tiktok\x20No\x20'+_0xa4f4f6(0xc9d,0x7a0,0x48c,0x34d),_0x119ee7['quoted']=fgclink2,_0x119ee7['thumbnail']=pp_bot2,alpha['sendMessag'+'e'](from,nowmm,MessageType[_0xa4f4f6(0xd46,0x841,0x3c0,0x65c)],_0x119ee7);}else{const _0x2a22fa={'gEdoE':_0x41991d[_0x2eb007(0x4b9,0x583,0xe3,0x806)],'bkLyX':function(_0x1332f3,_0x1e4f36){return _0x41991d['VCTTj'](_0x1332f3,_0x1e4f36);},'dZVvS':function(_0xaddfbe,_0x4b34ed,_0x42298,_0x57a052){function _0x24fc6e(_0x3dd8b3,_0x440199,_0x542b24,_0x3695b7){return _0x2eb007(_0x542b24-0x1cc,_0x440199-0xb0,_0x440199,_0x3695b7-0x9f);}return _0x41991d[_0x24fc6e(0x99a,0xe7,0x49a,0x1ef)](_0xaddfbe,_0x4b34ed,_0x42298,_0x57a052);},'gEKYx':function(_0x4d79b9,_0x404b10,_0x1b92e8,_0x1af746){function _0x1a0527(_0x58ac6d,_0x5ed002,_0x300400,_0x43c546){return _0xa4f4f6(_0x43c546,_0x58ac6d- -0x382,_0x300400-0x193,_0x43c546-0x8);}return _0x41991d[_0x1a0527(0x3ad,0x7b8,0x3e2,-0xb3)](_0x4d79b9,_0x404b10,_0x1b92e8,_0x1af746);}};_0x41991d[_0x2eb007(0x34d,0x458,0x180,-0x11e)](_0x2829fb,_0x11895a,_0x142721)[_0x2eb007(0xa80,0xa12,0x92e,0x663)](_0x6de711=>{const {dl_link:_0x3e32b4,thumb:_0x38b30f,title:_0x46febd,filesizeF:_0x5f06fa,filesize:_0xde81a0}=_0x6de711;function _0x294671(_0x542b08,_0x2c72cf,_0x1b896f,_0x15117c){return _0x2eb007(_0x15117c- -0x455,_0x2c72cf-0x19a,_0x542b08,_0x15117c-0x7c);}function _0x18dc62(_0x35fca2,_0x597fc9,_0x216b41,_0x15618f){return _0xa4f4f6(_0x15618f,_0x35fca2- -0x53d,_0x216b41-0x13,_0x15618f-0x1e4);}_0x284fef[_0x18dc62(0x7b,-0x111,-0x2a4,-0x125)]('https://ti'+'nyurl.com/'+_0x18dc62(0x7df,0x71b,0x2fa,0xcb8)+_0x294671(0x5e0,0x316,0x577,0x380)+_0x3e32b4)[_0x18dc62(0x739,0x484,0x3ef,0x8fc)](async _0x3c2b3d=>{const _0x18de71={'rGJIZ':function(_0x2f3893,_0x1bf03d){return _0x2f3893(_0x1bf03d);},'rLKMS':_0x2a22fa[_0x12146e(0xb06,0x326,0x601,0x1b4)]};function _0x12146e(_0x20d112,_0x1bfc47,_0x3d4e3e,_0x42a3b1){return _0x294671(_0x1bfc47,_0x1bfc47-0x122,_0x3d4e3e-0x31,_0x3d4e3e-0x344);}if(_0x2a22fa[_0x12146e(0xc15,0x7d2,0xae9,0xc66)](_0x4362b0,_0xde81a0)>=0x10cb+0x7359*0x1+0x1027c)return _0x2a22fa[_0x12146e(0xfc0,0xd3a,0xb11,0x8c0)](_0x53d4e6,_0xcc72dc,_0x38b30f,_0x12146e(0xdf8,0xa33,0x907,0x802)+_0x12146e(0x52e,0x13e,0x402,0xaf)+_0x98ecd7+_0x1bd890+(_0x2551ca(-0x7d,0x68,0x36f,0xab)+'*\x20')+_0x46febd+_0x462cb4+('📊\x20*Quality'+_0x12146e(0x587,0xec7,0xa42,0x717)+'ps')+_0x4c62f4+('🦁\x20*Ext*\x20:\x20'+_0x12146e(0x94f,0xbab,0xb51,0xd92))+_0xd69617+(_0x2551ca(0xd84,0x5a8,0xa83,0x618)+_0x12146e(0x40c,0x2d3,0x240,-0x116))+_0x5f06fa+_0x40b19e+(_0x2551ca(0xce1,0x956,0xacc,0x65a)+'\x20')+_0x3c2b3d['data']+_0x287653+_0x127193+(_0x2551ca(0x4a2,0x4e7,0x31f,0x554)+_0x12146e(0x7a3,-0x105,0x39c,0xf8)+_0x12146e(0x231,0x36e,0x528,0x640)+_0x2551ca(0x188,0x2a8,0x13f,0x4b2)+_0x12146e(0x729,0x8bd,0x581,0x313)+'tuk\x20link_'));function _0x2551ca(_0x41fa3b,_0xc6e7d1,_0x2d0a38,_0xb52dcf){return _0x294671(_0x41fa3b,_0xc6e7d1-0x93,_0x2d0a38-0x26,_0x2d0a38-0x2c3);}_0x2a22fa[_0x2551ca(-0x204,0x28,0x25d,0x1e0)](_0x542837,_0x3abec7,_0x3e32b4,'')['catch'](_0x382bd5=>{function _0x4bbf0d(_0x6a16cb,_0x5ad24b,_0xd55d21,_0x2d25e1){return _0x12146e(_0x6a16cb-0x137,_0x6a16cb,_0x5ad24b-0x2ef,_0x2d25e1-0x120);}_0x18de71[_0x4bbf0d(0x419,0x70d,0xa7c,0xaaf)](_0x29d14b,_0x18de71['rLKMS']);});});});}});}),await limitAdd(sender,limit);break;case _0x4963f8(0x531,0x45a,0x4f4,0xa03):const _0x4de01a={};_0x4de01a[_0x4963f8(0x819,0x69f,0xb90,0xd90)+'t']=_0x128a37(0xd9d,0x1216,0x12a3,0xdc2)+'t';const _0x513a07={};_0x513a07[_0x128a37(0x734,0xcbc,0x9c8,0xb1e)]='limit',_0x513a07['buttonText']=_0x4de01a,_0x513a07[_0x128a37(0xf7f,0x116b,0x934,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xf72,0xa0e,0xa6b,0xd8b)](prefix),'©\x20'+ownername,[_0x513a07]);if(!isUrl(args[0x7*-0x569+0x19a4+0xc3b])&&!args[0xb52+-0x1a31+0xedf]['includes']('tiktok.com'))return reply(lang[_0x4963f8(0x851,0xabe,0x97a,0xb3e)]());if(!q)return fakegroup(_0x128a37(0xa68,0xb2c,0xeb6,0xd18));reply(lang[_0x128a37(0xcc9,0xca6,0xaef,0x79b)]()),hx['ttdownload'+'er'](''+args[0x699*0x3+0xa81+-0x1e4c])[_0x4963f8(0xa46,0x1123,0xbe8,0xdb8)](_0x19ea3b=>{function _0x116f9c(_0x343652,_0x4f9f3a,_0x6d779b,_0x55bad4){return _0x4963f8(_0x55bad4,_0x4f9f3a-0x1d6,_0x4f9f3a- -0x54e,_0x55bad4-0x60);}function _0x3b9c89(_0x27f797,_0x1f2c71,_0x4f530b,_0x31890f){return _0x4963f8(_0x4f530b,_0x1f2c71-0x2a,_0x1f2c71- -0x4b3,_0x31890f-0xf3);}const _0x50556c={'WUElR':function(_0x1345b3,_0x57694b){return _0x1345b3(_0x57694b);},'HDnko':function(_0x24daec,_0x363ceb){return _0x24daec===_0x363ceb;},'QIFfk':_0x3b9c89(0xb48,0x95c,0x5f5,0x949),'Poacs':_0x3b9c89(0x125,0x4e6,0x215,0x5d0)+'utu.be/1r_'+_0x3b9c89(0x399,0x328,0x48a,0x1bb),'NppjN':_0x116f9c(0x40d,0x1dc,0x223,-0xd8)},{wm:_0x393efc,nowm:_0x152e37,audio:_0x2c7c57}=_0x19ea3b;axios[_0x116f9c(-0x187,-0x24,-0x2b5,-0x165)](_0x116f9c(0x2ae,0x5f7,0x93e,0x170)+_0x116f9c(0x386,-0xec,-0x363,-0x385)+_0x3b9c89(0xb30,0x7db,0x6fa,0xcde)+_0x116f9c(0x3d3,0x3ef,0x7eb,0x819)+_0x393efc)['then'](async _0x49109a=>{function _0xb236d9(_0x51a793,_0x145993,_0x5c9351,_0x25924a){return _0x3b9c89(_0x51a793-0x154,_0x5c9351- -0x8c,_0x145993,_0x25924a-0xdb);}function _0x207392(_0x2c1a6c,_0x1c098f,_0x42ea36,_0x579278){return _0x116f9c(_0x2c1a6c-0x4,_0x2c1a6c-0xb8,_0x42ea36-0x8b,_0x579278);}if(_0x50556c[_0x207392(0x4a0,0x575,0x5f7,0x51)](_0xb236d9(0x90e,0xdae,0x8d0,0x46c),_0x50556c[_0xb236d9(0x80c,0x4f5,0x66f,0x2a8)])){me=_0xb236d9(-0x9f,0x2f1,0x194,0x1c8)+_0x49109a[_0xb236d9(0x4a7,-0x93,0x6f,0x1ca)],wmm=await _0x50556c[_0x207392(0x365,0x2a0,0x1df,0x350)](getBuffer,_0x393efc);const _0x1485f5={};_0x1485f5[_0x207392(0x780,0x6bf,0x587,0x4ee)]=_0x50556c[_0xb236d9(-0x20a,0xc8,0x25,0x9f)],_0x1485f5[_0x207392(0x848,0x52d,0x3ac,0xabe)]=0x2,_0x1485f5['title']='Tiktok\x20Wit'+_0xb236d9(-0x13a,0x422,0x238,0x566)+'k',_0x1485f5[_0x207392(0xc8,0x343,-0x22a,0x1fa)]='',_0x1485f5[_0xb236d9(-0x21d,0x391,0x205,0x4b)+'rl']='',_0x1485f5[_0x207392(0x4d4,0x4ee,0x911,0x2fe)]=pp_userz;const _0x398643={};_0x398643[_0xb236d9(0x182,0x5cb,0x356,0x46f)+_0x207392(0x988,0x7dd,0xb7a,0x6e3)]=0x3b9aca00,_0x398643[_0xb236d9(0x826,0x5f0,0x429,0x923)+'d']=!![],_0x398643[_0xb236d9(0x7e6,0xbff,0x947,0x95d)+_0x207392(0xc,-0x3dc,0x31,0x340)]=!![],_0x398643[_0xb236d9(0x421,0x6b6,0x3f4,-0xcb)+_0xb236d9(0x8dd,0xa0,0x45e,0x357)]=_0x1485f5;const _0x218f2a={};_0x218f2a[_0x207392(0x439,0xb0,0x401,-0x3b)+'o']=_0x398643,_0x218f2a[_0xb236d9(-0x183,-0x8,0x2eb,0x1b)]=_0x50556c['NppjN'],_0x218f2a['filename']=_0xb236d9(-0x4e4,-0x44,-0x6e,0x48f)+_0x207392(0x675,0x4fb,0x3b3,0x9a1),_0x218f2a[_0x207392(0x52d,0x3f6,0x955,0xa25)]=fgclink2,_0x218f2a['thumbnail']=pp_bot2,alpha[_0xb236d9(0x660,0x347,0x710,0x914)+'e'](from,wmm,MessageType[_0xb236d9(-0x1ca,0x176,0x274,0x4f2)],_0x218f2a);}else _0x50556c['WUElR'](_0x29b3ce,_0x1311dd[_0xb236d9(-0x497,0x66,0x4,0x4a5)]());});})['catch'](_0x11a7d0=>console[_0x128a37(0x960,0xbfb,0xb24,0xa59)](_0x11a7d0)),await limitAdd(sender,limit);break;case _0x4963f8(0xf7d,0x1262,0xecd,0xb1d):const _0x405616={};_0x405616['displayTex'+'t']=_0x128a37(0x11aa,0xdfd,0xbf4,0xcac)+'emium';const _0x580920={};_0x580920[_0x128a37(0x6fc,0x5f9,0xed2,0xb1e)]=_0x128a37(0xe4b,0xfc4,0xa63,0xac6),_0x580920[_0x4963f8(0x1a0,0x443,0x6c4,0x2dc)]=_0x405616,_0x580920[_0x4963f8(0x8f1,0xc16,0xce9,0xc96)]=0x1;const _0x2eda6f={};_0x2eda6f[_0x4963f8(0xb94,0xd9a,0x9c3,0x8b5)]=mek;if(!isPremium)return sendButMessage(from,_0x128a37(0x1232,0x124a,0x89d,0xd51)+_0x4963f8(0x7d2,0x8ec,0xaf7,0xe14)+'\x20khusus\x20un'+_0x4963f8(0x705,0x72f,0x9ba,0x8d4)+'remium\x20saj'+_0x4963f8(0xa70,0x100e,0xc06,0xf84)+'\x20akun\x20mu\x20s'+_0x4963f8(0xb09,0xb91,0xd6d,0xaf7)+_0x4963f8(0x351,0xc5b,0x73d,0x8d8)+_0x128a37(0x11de,0x9af,0x1061,0xcee)+prefix+_0x4963f8(0x530,0xebf,0xa1c,0xd43),_0x4963f8(0x6b3,0x625,0x4e2,0x653)+_0x128a37(0x211,0xa0a,0x746,0x4eb),[_0x580920],_0x2eda6f);if(args[_0x4963f8(0x99d,0x731,0x6e2,0x230)]<-0x1ee3+0x6*-0x2d5+0x2fe2)return reply(_0x4963f8(0x2f0,0xaf0,0x63d,0x371)+_0x4963f8(0xb6c,0x567,0x8c7,0x42c));if(!isUrl(args[0xe6*0x11+-0x41*0x35+-0x1*0x1d1])&&!args[-0x11*-0xf4+-0x59*0x64+-0xc6*-0x18][_0x4963f8(0x9e9,0xa57,0x6ca,0x6af)](_0x4963f8(0xd4b,0xd06,0xecd,0xc69)))return reply(mess[_0x4963f8(0x308,0x1d1,0x5f1,0x8bd)]['Iv']);reply(lang[_0x4963f8(0xc1d,0x52c,0x6f1,0x79c)]()),teks=args['join']('\x20'),res=await mediafireDl(teks),result='*MEDIAFIRE'+'\x20DOWNLOADE'+_0x128a37(0xc6d,0x9ac,0xaec,0xcd8)+petik+_0x4963f8(0x3b7,0x167,0x47d,0x34b)+petik+'\x20'+res[-0x332+0x45*0x45+-0xf67]['nama']+'\x0a'+petik+'々\x20Link\x20:\x20'+petik+'\x20'+res[0x75*0x2f+0x1c02+0x3*-0x107f][_0x128a37(0xa78,0xd84,0xb05,0xd52)]+'\x0a'+petik+_0x4963f8(0x854,0x824,0xbbb,0x10ef)+petik+'\x20'+res[0x2*0x65f+-0x1960+0xca2][_0x128a37(0xa10,0xc9c,0x9ef,0x9df)]+(_0x4963f8(0xd8c,0xd6f,0xa08,0x749)+_0x4963f8(0x823,0xba8,0xa62,0x581)+'e..._'),await reply(result),mdf=await getBuffer(res[0x2*-0x1039+0xc4e*-0x1+0x2cc0]['link']);const _0x29f7c4={};_0x29f7c4[_0x4963f8(0xb1a,0xc5f,0xc16,0xdf5)]='https://yo'+_0x128a37(0x274,0x9ce,0x8cf,0x547)+_0x4963f8(0xad3,0x6ed,0x7db,0x705),_0x29f7c4[_0x4963f8(0xffc,0xbfb,0xcde,0x110b)]=0x2,_0x29f7c4[_0x128a37(0x9b5,0x932,0xb1d,0x864)]='Mediafire\x20'+_0x4963f8(0x5d7,0x675,0x898,0x697),_0x29f7c4['body']='',_0x29f7c4[_0x4963f8(0x8b9,0x1fd,0x744,0x482)+'rl']='',_0x29f7c4[_0x4963f8(0xba0,0xb36,0x96a,0x57b)]=pp_userz;const _0x2fd150={};_0x2fd150[_0x4963f8(0x4e3,0x9f1,0x895,0x9f4)+_0x128a37(0xafe,0x1247,0x11f3,0xec8)]=0x3b9aca00,_0x2fd150['isForwarde'+'d']=!![],_0x2fd150[_0x128a37(0x131f,0xd04,0xc77,0xf30)+_0x4963f8(0xba,0x2ce,0x4a2,0x56c)]=!![],_0x2fd150[_0x128a37(0xde4,0xa95,0xeb6,0x9dd)+_0x4963f8(0xe02,0xa4b,0x99d,0xa01)]=_0x29f7c4;const _0x1572ab={};_0x1572ab[_0x4963f8(0x3e0,0x484,0x8cf,0xd5e)+'o']=_0x2fd150,_0x1572ab['mimetype']=res[-0x1c*-0x49+0x1fc9+-0x27c5]['mime'],_0x1572ab['filename']=res[0xc5b+-0x1974+0xd19]['nama'],_0x1572ab[_0x128a37(0x860,0xe83,0x582,0xa6d)]=fgclink,_0x1572ab[_0x128a37(0xb0a,0x4d6,0x770,0xa14)]=pp_bot2,alpha[_0x128a37(0xef0,0xf2f,0xb49,0xcf9)+'e'](from,mdf,MessageType[_0x128a37(0xcfb,0xd64,0x836,0x85d)],_0x1572ab);break;case _0x4963f8(0x20a,0x1b5,0x5df,0x890):const _0x58af6f={};_0x58af6f[_0x4963f8(0x9f8,0xd92,0xb90,0x930)+'t']=_0x4963f8(0x957,0x9b3,0xd18,0xc4f)+'t';const _0x91d6ab={};_0x91d6ab['buttonId']=_0x4963f8(0xe60,0xbfb,0xce1,0x1140),_0x91d6ab[_0x4963f8(0xa52,0x6c6,0x6c4,0x8c3)]=_0x58af6f,_0x91d6ab[_0x128a37(0x113b,0x10af,0xb20,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xc3d,0xe13,0x8d3,0xd8b)](prefix),'©\x20'+ownername,[_0x91d6ab]);if(args[_0x4963f8(0x380,0x6d1,0x6e2,0x7b2)]===-0x1d8d+-0x1*-0xdf3+-0xf9a*-0x1)return reply('Kirim\x20peri'+_0x128a37(0xb87,0x62e,0x6c6,0x6bb)+prefix+(_0x4963f8(0x9fc,0x89b,0x5cf,0x64e)+'dul\x20video\x20'+_0x128a37(0xb60,0x5dd,0x1bc,0x707)+_0x128a37(0x7a4,0x37a,0x680,0x619)));var srch=args['join']('');aramas=await yts(srch),server=_0x4963f8(0x7bd,0x8ee,0x71b,0x5f3),aramat=aramas['all'];var mulaikah=aramat[0x2158+0x1*-0xb8c+-0x9*0x26c]['url'];try{ytv2(mulaikah,server)['then'](_0x1b5f33=>{function _0x52fe05(_0x20f7df,_0x443033,_0x5435e5,_0x79e1e2){return _0x4963f8(_0x79e1e2,_0x443033-0xec,_0x20f7df- -0xbe,_0x79e1e2-0x24);}const _0x7fa872={'Zopno':function(_0x25b5c8,_0x1a1cff){return _0x25b5c8(_0x1a1cff);},'LqKFr':function(_0x5a91e6,_0x254b0b,_0x26e1db,_0x2bfa33){return _0x5a91e6(_0x254b0b,_0x26e1db,_0x2bfa33);}};function _0x16d2fd(_0x43c851,_0x3d0b0a,_0x4f393b,_0x37bc08){return _0x4963f8(_0x3d0b0a,_0x3d0b0a-0xd6,_0x37bc08-0x88,_0x37bc08-0x2e);}const {dl_link:_0x232cb4,thumb:_0x52455b,title:_0x4c2ca1,filesizeF:_0x3b8f52,filesize:_0x22e50c}=_0x1b5f33;axios[_0x16d2fd(0x3c2,0x3a2,0x4b3,0x5b2)]('https://ti'+'nyurl.com/'+_0x52fe05(0xbd0,0xde9,0xcf1,0x84b)+_0x52fe05(0x87f,0xd78,0x6cd,0xd80)+_0x232cb4)[_0x52fe05(0xb2a,0x733,0xedd,0x645)](async _0x2db0b8=>{function _0x129efc(_0x1303e0,_0x3038e7,_0x23f10c,_0x3d180d){return _0x52fe05(_0x23f10c-0xe3,_0x3038e7-0x102,_0x23f10c-0x10d,_0x3038e7);}if(_0x7fa872[_0x53f440(0xaaa,0x421,0x9dd,0x5fd)](Number,_0x22e50c)>=-0x23292+-0x7489*-0x2+0x2d020)return _0x7fa872[_0x129efc(0x4b0,0x5de,0x822,0x9a2)](sendMediaURL,from,_0x52455b,_0x129efc(0xc3d,0xa69,0xba5,0xfbf)+'-PLAY\x20MP4*'+enter+enter+(_0x53f440(0xb5e,0x53b,0x4d1,0x787)+':\x20')+_0x4c2ca1+enter+(_0x129efc(0xc54,0xb2e,0x826,0xbbd)+_0x129efc(0x53a,0xb2b,0x8cc,0xe06)+'s')+enter+(_0x129efc(0xd20,0xf5e,0xd28,0x7fe)+'MP3')+enter+(_0x129efc(0x6bc,0x461,0x8a1,0xadd)+_0x53f440(-0x1fd,-0x49,0x365,0x2b8))+_0x3b8f52+enter+(_0x129efc(0xd09,0x969,0x9a7,0x72a)+'\x20')+_0x2db0b8[_0x129efc(0x6b2,0x607,0x5d3,0x43e)]+enter+enter+(_0x129efc(0x36a,0x470,0x63e,0x72b)+_0x53f440(0x852,0x5cf,-0x4f,0x414)+_0x129efc(0x36a,0xc39,0x7c6,0xc39)+_0x129efc(0x1d2,0x599,0x45e,0x1d1)+'\x20dalam\x20ben'+'tuk\x20link_'));const _0x2a2401=_0x53f440(0x9dc,0xa5b,0xf8d,0xa61)+_0x129efc(0xd63,0xff4,0xb8c,0xbe3)+_0x53f440(0x901,0xcbe,0xe80,0xb9f)+enter+enter+(_0x53f440(0x77d,0x987,0xc51,0x787)+':\x20')+_0x4c2ca1+enter+(_0x129efc(0x677,0xa83,0x826,0x83e)+'\x20:*\x20480kbp'+'s')+enter+(_0x129efc(0x9ab,0x6df,0x780,0x798)+'MP3')+enter+(_0x129efc(0x6cb,0xbf6,0x8a1,0x80d)+_0x129efc(0x527,0x84,0x4de,0x218))+_0x3b8f52+enter+('🌀\x20*Link*\x20:'+'\x20')+_0x2db0b8['data']+enter+enter+(_0x129efc(0x12e3,0x101f,0xdcd,0x1172)+_0x129efc(0xabb,0xcbb,0xb68,0x799)+_0x53f440(0x2c5,0x5ba,0x238,0x30d)+_0x53f440(-0xea,0x60a,0x87d,0x34e)+_0x53f440(0xb74,0xa5a,0xe64,0xa9f)+_0x129efc(0x645,0x524,0x72e,0x210)+_0x53f440(0x94d,0x410,0x97e,0x84f)+'t_');function _0x53f440(_0x19b8f5,_0x572df9,_0x1d33ae,_0x2a9471){return _0x52fe05(_0x2a9471- -0x143,_0x572df9-0x66,_0x1d33ae-0x78,_0x1d33ae);}_0x7fa872[_0x53f440(0x8d0,0x496,0x946,0x5fc)](sendMediaURL,from,_0x52455b,_0x2a2401),await sendMediaURL(from,_0x232cb4)['catch'](()=>reply(_0x129efc(0x564,0x535,0x616,0x9e7)));});});}catch(_0x1368ef){reply(mess['error'][_0x4963f8(0x375,0x631,0x639,0x116)]);}await limitAdd(sender,limit);break;case _0x4963f8(0xafa,0x10f9,0xbd3,0x1019):const _0x306df3={};_0x306df3['displayTex'+'t']=_0x4963f8(0x9ef,0xef7,0xc02,0x7f0)+'emium';const _0x4ada45={};_0x4ada45['buttonId']=_0x4963f8(0x7e3,0xf2c,0xa1c,0x694),_0x4ada45[_0x128a37(0xabe,0x46e,0x751,0x76e)]=_0x306df3,_0x4ada45[_0x4963f8(0x975,0xc72,0xce9,0xf34)]=0x1;const _0x36f3a2={};_0x36f3a2[_0x4963f8(0x774,0x579,0x9c3,0x965)]=mek;if(!isPremium)return sendButMessage(from,_0x128a37(0xf1d,0xfe5,0xf9f,0xd51)+'\x20fitur\x20ini'+_0x4963f8(0xc8,0x9d3,0x5a5,0x413)+'tuk\x20user\x20p'+_0x4963f8(0x848,0x8e3,0x6b7,0x768)+_0x128a37(0xbe1,0xbea,0x9bd,0xcb0)+_0x128a37(0x2be,0x8a5,0x5e1,0x53a)+_0x4963f8(0xc94,0x99f,0xd6d,0x8a5)+'ngan\x20cara\x20'+_0x128a37(0xe3c,0x91a,0xaa9,0xcee)+prefix+_0x128a37(0xf25,0xb11,0xce0,0xac6),'Click\x20butt'+_0x128a37(0x5c7,0x6f1,0x751,0x4eb),[_0x4ada45],_0x36f3a2);if(args[_0x128a37(0x8b8,0x4a6,0x53a,0x78c)]===0x29*-0xa6+-0x1*0x232b+-0x1*-0x3dc1)return reply(_0x128a37(0x734,0xf6d,0xdd1,0xb2c)+'ntah\x20*'+prefix+(_0x128a37(0x12f,0x4fd,0x412,0x679)+_0x4963f8(0x645,0x8e9,0x902,0xd4b)+_0x128a37(0xb37,0x7f3,0x7e0,0x707)+_0x128a37(0x2f6,0xaf7,0x44a,0x619)));var srch=args[_0x128a37(0xf64,0xac5,0xf6e,0xde3)]('');reply(lang['wait']()),aramas=await yts(srch),server='en68',aramat=aramas[_0x4963f8(0xa4c,0x3a3,0x5cb,0x867)];var mulaikah=aramat[-0xd*0x1eb+0x1ab6+-0x1*0x1c7]['url'];try{ytv3(mulaikah,server)[_0x4963f8(0x6b0,0xb0d,0xbe8,0xb5b)](_0x37559a=>{const _0x59d431={'tcPBZ':function(_0x4deecd,_0x46518d){return _0x4deecd!==_0x46518d;},'cYtEY':'JqGgR','IsTtz':function(_0x5cae8f,_0x4744ec){return _0x5cae8f>=_0x4744ec;},'MpEyT':function(_0x36d450,_0x2ed998,_0x2c97d7,_0x47cd82){return _0x36d450(_0x2ed998,_0x2c97d7,_0x47cd82);},'ekstI':function(_0x30bd84,_0x299ed7,_0x20dbac){return _0x30bd84(_0x299ed7,_0x20dbac);}};function _0x27be38(_0x34dcaa,_0x4c9b98,_0x2a5e7c,_0xf1b588){return _0x128a37(_0x34dcaa-0x94,_0x34dcaa,_0x2a5e7c-0x1ad,_0x4c9b98- -0x1bb);}const {dl_link:_0x2923ca,thumb:_0x51e293,title:_0x5e0ab0,filesizeF:_0x45c360,filesize:_0x330df2}=_0x37559a;function _0x597c6b(_0x7d3f1a,_0x410f34,_0x5bef3b,_0x5c57bd){return _0x4963f8(_0x5c57bd,_0x410f34-0x1bd,_0x410f34- -0x45c,_0x5c57bd-0x5d);}axios[_0x27be38(0x17b,0x419,-0x60,0x8f)](_0x597c6b(0x9ec,0x6e9,0xbef,0x98f)+'nyurl.com/'+_0x597c6b(0x5bf,0x832,0xcb3,0xa17)+'.php?url='+_0x2923ca)[_0x27be38(0xfba,0xad7,0xc2d,0x61c)](async _0x21b3eb=>{function _0x3c6c6b(_0x5f293d,_0x46d260,_0x4c50cb,_0x324a8c){return _0x27be38(_0x324a8c,_0x4c50cb-0x41,_0x4c50cb-0x127,_0x324a8c-0x1c8);}function _0x3552bf(_0x1b9b73,_0x2f45c7,_0x55f92e,_0x5a23c5){return _0x27be38(_0x1b9b73,_0x2f45c7- -0x26b,_0x55f92e-0x92,_0x5a23c5-0x72);}const _0x36575b={'ycmsN':function(_0x5e1c51,_0x84b067){return _0x5e1c51(_0x84b067);},'AuLjm':_0x3552bf(0x4a9,0x872,0x5f1,0x9f5),'JzYEv':function(_0x1d769a,_0xff71e8){return _0x1d769a>=_0xff71e8;}};if(_0x59d431['tcPBZ']('JqGgR',_0x59d431[_0x3c6c6b(0x9ef,0x36d,0x63e,0x300)])){if(_0x36575b['JzYEv'](_0x36575b['ycmsN'](_0x113f82,_0x24cd0f),0x2*-0x15854+-0x28fc6+-0x1212d*-0x6))return _0x4fc90b(_0x4d6888,_0x2a4c17,_0x3552bf(0x8c8,0x804,0x79d,0x67a)+'-PLAY\x20MP4*'+_0x4a47f0+_0x4c41d3+('🐣\x20*Title\x20:'+'*\x20')+_0x1c1f8e+_0x5c69be+(_0x3552bf(0x2e5,0x485,0x8c6,0x13f)+_0x3c6c6b(0xeec,0xe4a,0xbeb,0xc9d)+'ps')+_0xdb9d88+('🦁\x20*Ext*\x20:\x20'+_0x3552bf(0x614,0xa4e,0x7d5,0xcc4))+_0x223098+(_0x3552bf(0xeb7,0xa01,0x670,0x5e1)+_0x3552bf(0x3ad,0x13d,0x1a0,0x5dc))+_0x2fd317+_0x495f30+(_0x3552bf(0xc33,0xa4a,0x562,0x5c9)+'\x20')+_0x4f18db[_0x3552bf(-0x21f,0x232,0x606,0x775)]+_0x69269a+_0x295fed+('_Untuk\x20dur'+_0x3c6c6b(0x1da,0x2e7,0x545,0x14a)+_0x3552bf(0x5b4,0x425,0x173,0x410)+_0x3552bf(-0x28d,0xbd,0x9,-0x249)+'\x20dalam\x20ben'+_0x3552bf(0x74a,0x507,0x889,0xa3d)));_0x4f65de(_0x27c300,_0x413d0c,'')['catch'](_0x44d090=>{function _0x4706f6(_0x5709fd,_0x22a000,_0x221990,_0x441cdb){return _0x3c6c6b(_0x5709fd-0x31,_0x22a000-0x1,_0x22a000- -0xb,_0x221990);}_0x36575b['ycmsN'](_0x545ae1,_0x36575b[_0x4706f6(0xcdd,0xa7c,0xcb8,0xabe)]);});}else{if(_0x59d431['IsTtz'](Number(_0x330df2),0x1*0x75b5+-0x21bb+0x132a6))return _0x59d431[_0x3c6c6b(0x11d4,0x918,0xd6a,0x8b8)](sendMediaURL,from,_0x51e293,_0x3552bf(0x389,0x804,0xab2,0x4e5)+'-PLAY\x20MP4*'+enter+enter+(_0x3c6c6b(0x922,0xaf4,0x8b8,0x531)+':\x20')+_0x5e0ab0+enter+(_0x3552bf(0x1d1,0x485,0x10,0x6fb)+'\x20:*\x20480kbp'+'s')+enter+(_0x3c6c6b(0x509,0x832,0x8e2,0x824)+'MP3')+enter+(_0x3c6c6b(0xaad,0x104a,0xcad,0xd89)+_0x3c6c6b(0x2db,0x14f,0x3e9,0x88c))+_0x45c360+enter+(_0x3552bf(0x75c,0xa4a,0x5e9,0x4fd)+'\x20')+_0x21b3eb[_0x3c6c6b(0x7b5,0x142,0x4de,0x496)]+enter+enter+(_0x3c6c6b(0x7d7,0x1b4,0x549,0x6cc)+_0x3552bf(0x677,0x299,0x437,0x719)+_0x3552bf(0x91f,0x425,0x96b,0x7f2)+_0x3552bf(-0x1df,0xbd,-0x209,-0x207)+_0x3c6c6b(0xbcc,0x445,0x72a,0xc1b)+'tuk\x20link_'));const _0x197086=_0x3c6c6b(0x784,0xbf0,0xab0,0xa66)+_0x3552bf(0x479,0x2ff,0x72e,0x791)+enter+enter+(_0x3c6c6b(0x778,0xb22,0x8b8,0x7d1)+':\x20')+_0x5e0ab0+enter+(_0x3c6c6b(0xa43,0xc43,0x731,0x80b)+_0x3c6c6b(0xbdc,0x9bc,0x7d7,0xb1f)+'s')+enter+('🦁\x20*Ext*\x20:\x20'+_0x3552bf(0xd37,0xa4e,0x68f,0xa22))+enter+(_0x3c6c6b(0xc45,0xd05,0xcad,0xdcf)+_0x3c6c6b(0x8ce,0x406,0x3e9,-0x61))+_0x45c360+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x21b3eb[_0x3552bf(-0x11,0x232,-0x90,0x738)]+enter+enter+('_Silahkan\x20'+_0x3c6c6b(0x883,0xf65,0xa73,0x9d1)+_0x3c6c6b(0x260,0x32a,0x43e,0x1ba)+'dang\x20dikir'+_0x3c6c6b(0x106d,0x9a3,0xbd0,0xbc0)+_0x3c6c6b(0x6eb,0xb53,0x639,0x1a8)+'erapa\x20meni'+'t_');await _0x59d431[_0x3c6c6b(0x9d3,0x46d,0x933,0xd75)](sendMediaURL,from,_0x2923ca)[_0x3c6c6b(0x6cb,0x5d2,0x84c,0x75c)](()=>reply(_0x3552bf(0x54c,0x275,0x510,0x68f)));}});});}catch(_0x118867){reply(mess[_0x128a37(0x733,0x2e6,0x238,0x69b)][_0x4963f8(0x941,0x3dd,0x639,0x208)]);}await limitAdd(sender,limit);break;case _0x4963f8(0x4e9,0xc63,0x860,0x3fe):case _0x128a37(0x2f7,0xc60,0x773,0x7cb):case'ytshort':case _0x128a37(0x588,0x3ef,0xb44,0x8cb)+'rts':const _0x43c238={};_0x43c238[_0x4963f8(0xb45,0x1042,0xb90,0xe37)+'t']=_0x128a37(0xba5,0xa7f,0x8a8,0xdc2)+'t';const _0x62dc8a={};_0x62dc8a[_0x128a37(0x789,0x960,0x7e2,0xb1e)]=_0x128a37(0x119e,0x12d2,0x11c4,0xd8b),_0x62dc8a[_0x4963f8(0x7a8,0x73b,0x6c4,0x2b9)]=_0x43c238,_0x62dc8a['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x10d4,0x1101,0xce7,0xd8b)](prefix),'©\x20'+ownername,[_0x62dc8a]);if(args[_0x128a37(0x41c,0x612,0xaa6,0x78c)]===-0x36e*-0x9+-0x8c1+0x25*-0x99)return reply('Kirim\x20peri'+_0x4963f8(0x1a4,0x4b5,0x611,0x20a)+prefix+(_0x4963f8(0x1125,0xb5a,0xd1e,0xc42)+_0x4963f8(0x6bb,0x1d3,0x531,0x83e)));let isLinks2=args[0x1a4e+-0x24d*0x2+-0xada*0x2][_0x4963f8(0x6a3,0x426,0x73e,0x6c8)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess[_0x128a37(0xaf3,0x256,0x698,0x69b)]['Iv']);server=_0x128a37(0x2db,0x608,0x5b6,0x7c5);try{let yut=await yts(args[0x7a*-0x9+-0xb44+0xf8e]);reply(lang[_0x4963f8(0x849,0x478,0x6f1,0x8f0)]()),ytv2(args[0x4a4+0x1dae*-0x1+-0x502*-0x5],server)['then'](_0xd60a6=>{const _0x4cb8c6={'gvxCC':_0x242411(0x952,0xc74,0x829,0x91b),'XlXFq':_0x492583(0x90f,0x85d,0x81f,0x721),'aDtoT':_0x242411(0x15,0x1f9,0x6dd,0x45b),'lzLpC':function(_0x1c3d67,_0x505f54){return _0x1c3d67===_0x505f54;},'PYHAN':_0x492583(0xb99,0x5f7,0x906,0x677),'TXUnW':function(_0x442d0b,_0x1eab81){return _0x442d0b(_0x1eab81);},'fdwAT':function(_0x1d4e9d,_0x2310a3,_0x4d6aeb,_0x19043d){return _0x1d4e9d(_0x2310a3,_0x4d6aeb,_0x19043d);},'mLhme':_0x242411(-0x56,0x78a,0x7b9,0x4be),'Wwwxq':'RESPONSE','BKLFV':function(_0x39fda0,_0x5b329b,_0x557d05,_0x37c5f0,_0x4a346d,_0x5f5479,_0x319cb7){return _0x39fda0(_0x5b329b,_0x557d05,_0x37c5f0,_0x4a346d,_0x5f5479,_0x319cb7);},'frNuL':function(_0x3a1d29,_0x247a58){return _0x3a1d29(_0x247a58);},'HVqus':_0x492583(0x65,0x3de,0x257,0x27b)};function _0x242411(_0x4fc8ff,_0x5c3869,_0x411b86,_0x3e997f){return _0x128a37(_0x4fc8ff-0x1dc,_0x411b86,_0x411b86-0x100,_0x3e997f- -0x194);}const {dl_link:_0xfb3b73,thumb:_0x3dc9b2,title:_0x2f476a,filesizeF:_0x3490a2,filesize:_0xe2607e}=_0xd60a6;function _0x492583(_0x2c2312,_0x5f20e6,_0xafcbb8,_0x36ddf8){return _0x128a37(_0x2c2312-0x1c2,_0x5f20e6,_0xafcbb8-0x4,_0x36ddf8- -0x559);}axios[_0x492583(-0x1f1,0x2d1,0x465,0x7b)](_0x492583(0x66b,0x1cb,0x5c4,0x696)+_0x242411(0x84e,0x465,0x12a,0x378)+'api-create'+_0x242411(0xd85,0x945,0x9fd,0x853)+_0xfb3b73)[_0x242411(0x861,0xb46,0x63c,0xafe)](async _0x4aa085=>{const _0x5458b2={};function _0x4dc7d4(_0x218b2a,_0x28f3da,_0x53d3ae,_0x435da4){return _0x492583(_0x218b2a-0x191,_0x435da4,_0x53d3ae-0x183,_0x53d3ae- -0x15f);}_0x5458b2[_0x1b803c(-0x4f,0x7ba,0x405,0x2bb)]=_0x4cb8c6[_0x4dc7d4(0xd7d,0x490,0x838,0x6f9)];function _0x1b803c(_0x19d67a,_0xb2947f,_0x200f2a,_0x300960){return _0x242411(_0x19d67a-0x15d,_0xb2947f-0x1dc,_0xb2947f,_0x200f2a- -0x4ff);}_0x5458b2['YHjPF']=_0x4cb8c6[_0x1b803c(-0x3a6,-0x301,0x0,-0x537)],_0x5458b2[_0x4dc7d4(0x6a6,0x25c,0x60c,0x702)]=_0x4cb8c6['aDtoT'],_0x5458b2[_0x4dc7d4(0x895,0x598,0x653,0x38f)]='Botwea\x20©2k'+'21';const _0x3c40c3=_0x5458b2;if(_0x4cb8c6[_0x4dc7d4(0x168,0x4a0,0x398,-0x147)](_0x4cb8c6[_0x4dc7d4(0x6c1,0x59,0x268,0x22)],_0x4cb8c6['PYHAN'])){if(_0x4cb8c6[_0x1b803c(0x834,0xc26,0x8a0,0x6a1)](Number,_0xe2607e)>=0x8a2c*-0x1+-0xd89b+0x1ff07)return _0x4cb8c6[_0x4dc7d4(0x80b,0x585,0x5a6,0x289)](sendMediaURL,from,_0x3dc9b2,_0x4dc7d4(0x546,0x88d,0x654,0xac8)+_0x4dc7d4(0x1f3,0x494,0x6cb,0x4ac)+_0x4dc7d4(0x549,0x27b,0x792,0xc7e)+enter+enter+(_0x4dc7d4(0x762,0x336,0x479,0x89e)+'\x20')+_0x2f476a+enter+('☃️\x20*Ext\x20:*\x20'+_0x1b803c(0xb01,0xb63,0x7e1,0x3f6))+enter+(_0x1b803c(-0x185,0x1f0,0x273,0x79b)+_0x4dc7d4(0x6e0,-0x144,0x3d8,0x797))+_0x3490a2+enter+(_0x1b803c(0x4cd,0x394,0x300,-0x4b)+'\x20')+_0x4aa085[_0x1b803c(0x1a7,-0x504,-0x3b,-0x52f)]+enter+enter+(_0x4dc7d4(-0x214,-0x43e,0xb,-0x295)+_0x4dc7d4(0x2f9,-0x204,0x7,-0x3c)+_0x1b803c(0x604,0x424,0x1b8,-0x164)+_0x1b803c(-0x31,0x29f,-0x1b0,-0x481)+_0x1b803c(-0x241,0x61a,0x211,0x612)+'tuk\x20link_'));const _0x261a2c=_0x1b803c(0x253,0x37f,0x679,0xbab)+'TUBE\x20VIDEO'+_0x1b803c(0xa2c,0x607,0x62f,0x7d0)+_0x1b803c(0x100,0x35e,0x91,0x80)+'le\x20:\x20'+_0x2f476a+(_0x4dc7d4(0xa9c,0x879,0x5af,0xa45)+_0x1b803c(-0x27e,0xd8,0x1c2,0x4bd))+yut[_0x4dc7d4(-0x14d,-0x43c,0x51,0x4f3)][0x798+0x606+-0xd9e][_0x4dc7d4(-0x23,0x2fa,-0x107,-0x8c)]+(_0x4dc7d4(0x7c0,0x2d6,0x5ff,0x16f)+':\x20')+yut[_0x1b803c(0x1f8,0x1f3,0x76,0x2cb)][-0x8*0x338+-0x1fb1+0x11*0x361][_0x1b803c(-0x1f6,-0x45e,-0x4d,-0x1e4)]+(_0x1b803c(0x6a5,0x71c,0x636,0x195)+'\x20')+_0xe2607e+(_0x1b803c(0x884,0xb1f,0x8da,0xd7e)+':\x20')+yut[_0x1b803c(-0x3dc,0x1c9,0x76,-0x180)][0x9*-0x25+0x50+0x17*0xb][_0x1b803c(0x41f,0x62a,0x466,0x5)]+(_0x1b803c(0x176,-0x47d,-0x13d,0xff)+_0x4dc7d4(-0x44,-0x37b,0x56,-0x3aa))+yut[_0x4dc7d4(0x1ed,-0x362,0x51,0x5e)][0x897+-0x1*-0x23c3+-0x2c5a*0x1][_0x4dc7d4(-0x68,0xdc,-0xb3,0x43b)]+_0x1b803c(0x793,0x1a3,0x4be,0x8b3)+yut[_0x4dc7d4(0x127,-0x2f1,0x51,0x1d)][-0x1126+0xf71+0x1b5][_0x4dc7d4(0xa88,0x8f9,0x6a0,0x66b)]+(_0x1b803c(0x8fd,0xa7f,0x643,0x485)+_0x4dc7d4(-0x28e,-0x27c,0xce,-0x1f7)+'edia\x20sedan'+_0x4dc7d4(0x371,-0x437,0x55,0x50e));let _0x5636d4=await getBuffer(_0x3dc9b2);const _0x2109e7={};_0x2109e7[_0x4dc7d4(0x6d2,0x9b7,0x582,0x591)+'t']=_0x4cb8c6[_0x1b803c(0x5d0,0x63f,0x875,0x6c0)];const _0x5acda5={};_0x5acda5[_0x4dc7d4(0x7a4,0x94c,0x466,0xee)]='owner',_0x5acda5[_0x1b803c(-0x1f4,-0x68,0xdb,-0x412)]=_0x2109e7,_0x5acda5['type']=_0x4cb8c6[_0x4dc7d4(0x533,0x86,0x295,0x579)];let _0x57c53f=[_0x5acda5];await _0x4cb8c6['BKLFV'](sendButLocation,from,_0x261a2c,_0x4dc7d4(0xaa1,0x217,0x5fc,0x1ab)+enter+(_0x4dc7d4(-0x134,0x181,-0xd3,0x3d9)+_0x1b803c(0x899,0x486,0x7c2,0xd0b)+_0x4dc7d4(0x478,-0x234,0x21a,0x498)+_0x4dc7d4(0xa1f,0x9d4,0x6ef,0x4d9)+'ton\x20silahk'+_0x1b803c(0x94f,0x9de,0x5d9,0x5c2)+_0x1b803c(0x4e3,0xb0a,0x609,0x8a3)+_0x1b803c(0x113,0x2b7,0x3b0,0x720)+_0x1b803c(0x521,0x4d6,0x7f4,0x717)+_0x4dc7d4(0xce8,0x33a,0x7d9,0x510))+enter+enter+'©\x20'+ownername,_0x5636d4,_0x57c53f,{});let _0x1b43e5=await _0x4cb8c6[_0x4dc7d4(0x61a,0x55c,0x6c6,0x8b8)](getBuffer,_0xfb3b73);const _0x20e763={};_0x20e763[_0x4dc7d4(0x2d8,0x811,0x608,0x138)]='https://yo'+'utu.be/1r_'+_0x4dc7d4(0xb3,0x31,0x1cd,-0xf2),_0x20e763['mediaType']=0x2,_0x20e763[_0x1b803c(0xeb,-0x2e2,0x1d1,0x273)]='Youtube\x20Mp'+'4',_0x20e763[_0x1b803c(-0x3c5,0x12b,-0x8b,0x24d)]='',_0x20e763[_0x1b803c(-0x2ca,0x10a,0x15b,0x59b)+'rl']='',_0x20e763['thumbnail']=pp_userz;const _0x3cd395={};_0x3cd395[_0x4dc7d4(0x33,0x5fa,0x287,0x601)+_0x1b803c(0xb99,0x7ad,0x835,0x54d)]=0x3b9aca00,_0x3cd395['isForwarde'+'d']=!![],_0x3cd395['sendEpheme'+_0x1b803c(-0x279,-0x4f4,-0x147,-0x415)]=!![],_0x3cd395['externalAd'+_0x1b803c(-0xa0,0x6d0,0x3b4,0x85b)]=_0x20e763;const _0x215673={};_0x215673['contextInf'+'o']=_0x3cd395,_0x215673[_0x1b803c(0x1da,0x413,0x241,0x773)]=_0x4cb8c6[_0x1b803c(0x98f,0x5d4,0x814,0x89f)],_0x215673[_0x1b803c(0x17c,0xab0,0x561,0x33)]=_0x2f476a+_0x4dc7d4(-0x2c5,-0x346,0xe7,0x472),_0x215673[_0x1b803c(0x1c2,0x315,0x3da,-0xe5)]=fgclink2,_0x215673[_0x1b803c(0x3d,-0x162,0x381,0x610)]=pp_bot2,alpha['sendMessag'+'e'](from,_0x1b43e5,MessageType[_0x1b803c(-0x213,0x1ec,0x1ca,0x110)],_0x215673);}else{var _0x54d9d8=_0x76cc71[_0x1b803c(0x6b,0x515,0x502,-0x3c)][_0x4dc7d4(-0x170,0x202,-0x43,0x35f)]()[_0x1b803c(0x4f1,0x98a,0x73e,0x7a9)](_0x3fef2e=>_0x3fef2e[_0x4dc7d4(0x658,0x9,0x3c9,0x664)]['endsWith'](_0x4dc7d4(-0x269,-0x524,-0x106,0x3a1)));let _0x39b75f=_0x32f0ff;for(let _0x3b75ff of _0x54d9d8){const _0x82ce4e={};_0x82ce4e[_0x4dc7d4(0x1ec,0x737,0x466,0x8d9)]=_0x3c40c3[_0x1b803c(0xdf,-0x3d,0x405,0x5a2)],_0x82ce4e[_0x4dc7d4(0xdd,0x2dd,0xb6,0x17f)]={},_0x82ce4e[_0x1b803c(0x8a1,0x4e5,0x700,0x431)]=0x1,_0x82ce4e[_0x4dc7d4(0xdd,0x2dd,0xb6,0x17f)]['displayTex'+'t']=_0x3c40c3[_0x4dc7d4(0x527,0xc34,0x7bd,0x408)];const _0x3c07c0={};_0x3c07c0[_0x4dc7d4(0x82,0x2c7,0x582,0x123)+'t']='🔖\x20List\x20Sew'+'a';const _0x20e885={};_0x20e885[_0x1b803c(-0x4a,0x12d,0x48b,0x157)]=_0x3c40c3[_0x4dc7d4(0x695,0x978,0x60c,0x5e0)],_0x20e885[_0x4dc7d4(0x244,0x30b,0xb6,0x29d)]=_0x3c07c0,_0x20e885[_0x4dc7d4(0x36a,0x593,0x6db,0x4ea)]=0x1;var _0x2a5a0f=[_0x82ce4e,_0x20e885];const _0x963e71={};_0x963e71[_0x1b803c(0x2de,0x740,0x20d,0x5b7)+'t']=_0x1b803c(0x5ea,0x3d8,0x838,0x2f1)+'*'+_0x4b7ccc+_0x3e1f1e+_0x39b75f,_0x963e71[_0x1b803c(0x32d,0xfa,0x5e2,0x659)]=''+_0xdc0af6+_0x42b02a+_0x43c178+_0x406356+_0x449593+'©\x20'+_0x230aa4,_0x963e71[_0x4dc7d4(0x2b2,0x5b1,0x1f4,0xc4)]=_0x2a5a0f,_0x963e71[_0x1b803c(0x9d,-0x88,0x14a,-0x14)]=0x1;var _0x4b8dc8=_0x963e71;const _0x272907={};_0x272907[_0x4dc7d4(0x345,0xd9,-0xe5,0x37a)]='hi',_0x272907[_0x4dc7d4(-0x2af,0x175,0x287,0x4bc)+_0x1b803c(0xcbb,0x64d,0x835,0x373)]=0x3b9aca00,_0x272907[_0x1b803c(0x34f,0x59c,0x37f,0x669)+'d']=!![],_0x272907['sendEpheme'+_0x4dc7d4(-0x54c,-0x369,-0x16c,-0x3c3)]=!![];const _0x2cf82a={};_0x2cf82a['caption']=_0x3c40c3['BdFue'],_0x2cf82a[_0x4dc7d4(0x501,0x679,0x2c1,-0x52)+'o']=_0x272907,_0x2cf82a[_0x1b803c(0x721,-0x89,0x3da,0x1ab)]=_0x5364c3,_0x2cf82a[_0x1b803c(0x90f,0x963,0x89d,0x83e)+'ral']=!![],_0xd41ab9[_0x4dc7d4(0x7e2,0x833,0x641,0x33e)+'e'](_0x3b75ff[_0x4dc7d4(0x6a0,-0x86,0x3c9,0x5fe)],_0x4b8dc8,_0x333fe1['buttonsMes'+'sage'],_0x2cf82a);}}});});}catch(_0x149e9e){reply(mess['error']['api']);}await limitAdd(sender,limit);break;case'playmp4':{const _0x407d61={};_0x407d61[_0x4963f8(0xe47,0xd1a,0xb90,0x960)+'t']='Check\x20Limi'+'t';const _0xa546c3={};_0xa546c3[_0x128a37(0xf97,0xb54,0x64a,0xb1e)]=_0x128a37(0xf57,0x1214,0x102f,0xd8b),_0xa546c3[_0x4963f8(0x4a3,0x481,0x6c4,0x179)]=_0x407d61,_0xa546c3[_0x4963f8(0x1020,0xceb,0xce9,0xb56)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x11b7,0x11b6,0xce1,0x104a)](prefix),'©\x20'+ownername,[_0xa546c3]);if(args[_0x4963f8(0x318,0x56b,0x6e2,0x7f5)]===-0x1bfa+-0x5e3+0x21dd)return reply(_0x4963f8(0xf9d,0xe08,0xa82,0xefc)+_0x128a37(0xa97,0x48c,0x6b1,0x6bb)+prefix+(_0x4963f8(0x7cc,0x727,0x5cf,0x10b)+_0x128a37(0x7c6,0xa72,0xc54,0x9ac)+'yang\x20akan\x20'+_0x4963f8(0x1f5,0x1b4,0x56f,0x413)));var srch=args[_0x128a37(0xcb4,0xee9,0x1198,0xde3)]('');aramas=await yts(srch),server=_0x4963f8(0x3da,0x65b,0x71b,0x7a3),aramat=aramas[_0x4963f8(0x84e,0x413,0x5cb,0x62d)];var mulaikah=aramat[-0x3ce*0xa+-0x8cd+-0x1*-0x2ed9][_0x4963f8(0x9f2,0xc3d,0xcae,0xb6e)];try{ytv2(mulaikah,server)[_0x128a37(0x1083,0x93f,0xc6a,0xc92)](_0x57ed2a=>{const _0x5a9ac9={'XiNyQ':function(_0x235c3a,_0x14e2d9,_0x80ae6){return _0x235c3a(_0x14e2d9,_0x80ae6);},'gzuCQ':function(_0x4173f2,_0x538fd8){return _0x4173f2!==_0x538fd8;},'xnaxV':_0x2b9dcd(0x5d4,0x19a,0x225,0xc1),'IbvzL':function(_0x34436d,_0x142f50){return _0x34436d>=_0x142f50;},'ZzGrl':function(_0x20825a,_0x5bd543){return _0x20825a(_0x5bd543);},'GEJDr':function(_0x1dddcb,_0x822527,_0x5a2ae1,_0x18a344){return _0x1dddcb(_0x822527,_0x5a2ae1,_0x18a344);}};function _0x2b9dcd(_0x4cd5aa,_0x1de080,_0x47c315,_0x42fb20){return _0x128a37(_0x4cd5aa-0x17b,_0x47c315,_0x47c315-0x2c,_0x42fb20- -0x44f);}const {dl_link:_0x276bb8,thumb:_0xe7db6,title:_0xf8d5,filesizeF:_0x5c75c4,filesize:_0x19c18f}=_0x57ed2a;function _0x249430(_0x39ca67,_0x24c6e8,_0x382cc8,_0x99237a){return _0x128a37(_0x39ca67-0x111,_0x39ca67,_0x382cc8-0x3b,_0x24c6e8-0x41);}axios[_0x249430(0xa68,0x615,0x378,0x6fe)](_0x249430(0xdc0,0xc30,0xbcc,0xe4c)+'nyurl.com/'+_0x249430(0x10c2,0xd79,0x86a,0xf8e)+'.php?url='+_0x276bb8)[_0x249430(0xdbf,0xcd3,0x84c,0xcd2)](async _0xa1f1d3=>{function _0x3d8fc2(_0xeca929,_0x1621ef,_0x3bf2b6,_0x3d55b2){return _0x2b9dcd(_0xeca929-0x8a,_0x1621ef-0x20,_0x3d55b2,_0x1621ef-0x369);}function _0x5c6702(_0x4f420c,_0xb5f792,_0x226a9b,_0x409865){return _0x2b9dcd(_0x4f420c-0x56,_0xb5f792-0xbd,_0xb5f792,_0x226a9b-0x18);}if(_0x5a9ac9[_0x5c6702(0x2d6,0x5f8,0x40a,0x7df)](_0x5a9ac9[_0x3d8fc2(0x3a,0x562,0x800,0x77f)],'rYPxg')){if(_0x5a9ac9['IbvzL'](_0x5a9ac9['ZzGrl'](Number,_0x19c18f),-0x7*0x3350+0xac80+0x24150))return _0x5a9ac9['GEJDr'](sendMediaURL,from,_0xe7db6,_0x5c6702(0xbd6,0x8f7,0x7f3,0x2fb)+_0x3d8fc2(0x3fb,0x63f,0x16c,0x1bd)+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0xf8d5+enter+('🔭\x20*Ext*\x20:\x20'+'MP3')+enter+('🍁\x20*Filesiz'+_0x5c6702(-0x3f9,0x2d1,0x12c,0x57a))+_0x5c75c4+enter+(_0x5c6702(0x7d9,0x892,0x3a5,0x2b4)+'\x20')+_0xa1f1d3[_0x5c6702(-0x133,-0x4d,0x221,0x2f9)]+enter+enter+(_0x5c6702(0x4cc,-0x4d,0x28c,0xd4)+_0x3d8fc2(0x668,0x5d9,0x87b,0x721)+_0x3d8fc2(0xb6c,0x765,0x761,0xa99)+_0x3d8fc2(0x127,0x3fd,0x6b0,-0xea)+_0x3d8fc2(0xbe2,0x7be,0x47a,0x47f)+_0x3d8fc2(0xbe9,0x847,0x603,0xd1c)));const _0x47663a='*----「\x20YOU'+_0x5c6702(0x377,0xcb9,0x7da,0x9f1)+_0x5c6702(0xdca,0xdbf,0xa13,0x650)+enter+enter+('🎀\x20*Title*\x20'+':\x20')+_0xf8d5+enter+enter+('🉑\x20*Ext*\x20:\x20'+_0x5c6702(0x4eb,0x543,0x365,0x285))+enter+(_0x3d8fc2(0xe4a,0x921,0x7a0,0x659)+'\x20')+_0x5c75c4+enter+('☃️\x20*Link*\x20:'+'\x20')+_0xa1f1d3[_0x3d8fc2(0x589,0x572,0x28a,0xaa1)]+enter+enter+(_0x3d8fc2(0x11dc,0xd6c,0xccd,0xe79)+_0x3d8fc2(0xf82,0xb07,0x909,0x975)+_0x5c6702(0x405,-0x53,0x181,0x5b2)+_0x3d8fc2(0x488,0x513,0x3b2,0x61f)+_0x3d8fc2(0x1065,0xc64,0x914,0xec4)+_0x5c6702(0x39b,-0x80,0x37c,0x145)+_0x3d8fc2(0xbfa,0xa14,0x67d,0xb91)+'t_');sendMediaURL(from,_0xe7db6,_0x47663a);const _0xdead5b={};_0xdead5b['mimetype']=_0x5c6702(0x225,0x2c9,0x191,-0x1cc),_0xdead5b['filename']=_0xf8d5+_0x5c6702(0x425,-0x15c,0x379,0x5ea),_0xdead5b[_0x3d8fc2(0x8a4,0x987,0xb28,0xe49)]=fgclink2,_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o']={},_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o']['forwarding'+'Score']=0x1fc,_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o'][_0x5c6702(0x8fd,0x8fc,0x5db,0x9bc)+'d']=!![],_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o'][_0x3d8fc2(0xcce,0x8f7,0xe04,0x99e)+_0x5c6702(0x775,0x485,0x610,0x33f)]={},_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o'][_0x3d8fc2(0xcce,0x8f7,0xe04,0x99e)+_0x5c6702(0x775,0x485,0x610,0x33f)]['title']=_0xf8d5,_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o'][_0x3d8fc2(0xcce,0x8f7,0xe04,0x99e)+_0x5c6702(0x775,0x485,0x610,0x33f)]['body']='',_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o'][_0x3d8fc2(0xcce,0x8f7,0xe04,0x99e)+_0x5c6702(0x775,0x485,0x610,0x33f)][_0x3d8fc2(0xb97,0xca2,0xf75,0xa8c)]='2',_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o'][_0x3d8fc2(0xcce,0x8f7,0xe04,0x99e)+_0x5c6702(0x775,0x485,0x610,0x33f)][_0x3d8fc2(0x8ae,0x92e,0x831,0x684)]=pp_userz,_0xdead5b[_0x3d8fc2(0x3de,0x893,0xb1c,0xd5d)+'o'][_0x3d8fc2(0xcce,0x8f7,0xe04,0x99e)+_0x5c6702(0x775,0x485,0x610,0x33f)][_0x5c6702(0x6bc,0x5ad,0x889,0x8a1)]='https://yo'+'utube.com/'+_0x5c6702(0xd8a,0xb59,0x842,0x569)+'c',await sendFileFromUrlF(_0x276bb8,document,_0xdead5b)['catch'](()=>reply(_0x5c6702(0xade,0xaab,0x861,0x59f)));}else _0x314fc9+=_0x3d8fc2(0xd91,0xe23,0xe0f,0xa65)+_0x3e32b8[_0x5c6702(0x9c6,0x5ec,0x64a,0x537)]['split']('@')[-0x12a8+0x6*-0x4a3+0x2e7a]+_0x49be67,_0x32df83+=_0x5c6702(0x71b,0x51c,0x2f8,0x74f)+_0x5a9ac9[_0x5c6702(0x486,0x81e,0x5c1,0x984)](_0x1a161b,_0x760fd4['t'],!![])+_0x1bdcc6+(_0x3d8fc2(0x1006,0xd99,0xdbf,0x122b)+':\x20')+_0x423b9b(_0xb0c58c['t'],!![])+_0x1ed2b6+'•'+_0x455944;});});}catch(_0x288e1e){reply(mess['error'][_0x128a37(0x981,0xa2e,0x39e,0x6e3)]);}}await limitAdd(sender,limit);break;case _0x4963f8(0x911,0x843,0xa2e,0x61f):const _0x5f9c1c={};_0x5f9c1c['displayTex'+'t']=_0x128a37(0xdd6,0x11d9,0xced,0xdc2)+'t';const _0x2a7738={};_0x2a7738[_0x4963f8(0xdaa,0xd0c,0xa74,0x9e7)]=_0x4963f8(0x857,0x8c4,0xce1,0xcab),_0x2a7738[_0x4963f8(0x1cb,0x6cd,0x6c4,0x393)]=_0x5f9c1c,_0x2a7738[_0x128a37(0x988,0xb95,0xd4a,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xff8,0x11c7,0xce1,0x855)](prefix),'©\x20'+ownername,[_0x2a7738]);if(args['length']===-0x1ddf+-0xe5*-0x13+0x4*0x338)return reply(_0x128a37(0xae3,0xdb4,0x1056,0xb2c)+'ntah\x20*'+prefix+(_0x4963f8(0x6f0,0xad1,0x599,0x290)+_0x4963f8(0x5df,0x4e3,0x531,0x20d)));let isLinks=args[-0x631*-0x3+-0x1319+-0x2*-0x43][_0x4963f8(0x52c,0x526,0x73e,0x919)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess['error']['Iv']);ytmp3=args[_0x128a37(0x112f,0x10d3,0xf82,0xde3)]('\x20');try{reply(lang[_0x4963f8(0x42d,0x3be,0x6f1,0xba3)]());let yut=await yts(args[0x2695+0x2053*-0x1+-0x642]);server='en68',yta2(ytmp3,server)[_0x4963f8(0x9f9,0xdf6,0xbe8,0xe6e)](_0x373159=>{const _0x3fb7ef={'lmbqD':function(_0x37f55e,_0x43611b){return _0x37f55e>=_0x43611b;},'jKNNM':function(_0x2941ec,_0x332340){return _0x2941ec(_0x332340);},'GMdMh':function(_0x226a2c,_0xe548ca,_0x7740ac,_0x146cc1){return _0x226a2c(_0xe548ca,_0x7740ac,_0x146cc1);},'oIrUP':function(_0x202c01,_0x322244){return _0x202c01(_0x322244);},'aWCVc':_0x497720(0x47d,0x325,0x41f,0x636),'LHXCZ':function(_0x3d3d3c,_0x5ce23c,_0x26725f,_0x50ee8d,_0xc6681c,_0x45adc7,_0x3b857a){return _0x3d3d3c(_0x5ce23c,_0x26725f,_0x50ee8d,_0xc6681c,_0x45adc7,_0x3b857a);},'zhDqR':_0x497720(0x86e,0x558,0xd81,0xbf9)+'utu.be/1r_'+_0x497720(0x6b0,0x56e,0x24b,0x73a),'xQVlq':_0x19fb6(0x38e,-0x323,0x74,0x21f)};function _0x19fb6(_0x16cfcc,_0x1b8442,_0x4883a1,_0x45a20e){return _0x128a37(_0x16cfcc-0x1c6,_0x1b8442,_0x4883a1-0x1aa,_0x4883a1- -0x554);}const {dl_link:_0x4a2f46,thumb:_0x2221fe,title:_0x56f2e2,filesizeF:_0x3cb8eb,filesize:_0x430a89}=_0x373159;function _0x497720(_0x12c642,_0x13cdb4,_0x48f47a,_0x3baad1){return _0x4963f8(_0x13cdb4,_0x13cdb4-0x14e,_0x12c642- -0x12b,_0x3baad1-0x1d9);}axios[_0x19fb6(-0xac,-0x39f,0x80,0x25d)]('https://ti'+_0x19fb6(-0x1d3,-0x300,-0x48,-0x508)+_0x19fb6(0x633,0xa74,0x7e4,0xc41)+_0x497720(0x812,0x5d5,0x4c3,0x6c5)+_0x4a2f46)[_0x497720(0xabd,0x6ee,0xb5f,0xd68)](async _0x3b2244=>{if(_0x3fb7ef[_0x5c9df3(0x11c,-0x408,0x349,-0x393)](_0x3fb7ef[_0x5c9df3(0x11a,0xea,-0x2e9,-0x292)](Number,_0x430a89),-0x4a4e*0x3+0x32b0+-0x1*-0x1216a))return _0x3fb7ef[_0xb0a3d1(0x45e,0x263,0x7d8,-0xdb)](sendMediaURL,from,_0x2221fe,'*Data\x20Berh'+_0x5c9df3(0x3b4,0xe9,0x6bf,-0x10d)+_0xb0a3d1(0x19a,0x196,0x5bb,-0x24a)+enter+enter+_0xb0a3d1(0x636,0xb39,0x425,0xaa2)+_0x56f2e2+enter+(_0x5c9df3(0x30a,0x4f9,0x232,0x2d8)+'3')+enter+(_0x5c9df3(0x446,0x35e,-0x8f,0x6d5)+_0x5c9df3(0x659,0x211,0x709,0x6a1))+_0x3cb8eb+enter+_0xb0a3d1(0x372,0x569,0x895,0x35b)+_0x3b2244[_0x5c9df3(0x19b,0x2a4,0x38c,0x163)]+enter+enter+(_0x5c9df3(0x206,0x3e1,-0x13b,0x2df)+'asi\x20lebih\x20'+_0x5c9df3(0x38e,0xc3,-0x7a,0x88f)+_0x5c9df3(0x26,0x3e,-0x1bb,0x164)+_0xb0a3d1(0x374,0x847,0x677,-0x34)+_0x5c9df3(0x470,0x12a,-0x38,0x346)));const _0x3b765b=_0x5c9df3(0x84f,0x5f1,0x795,0x5e3)+_0x5c9df3(0x8c6,0xd70,0x7d6,0x60f)+_0xb0a3d1(0x398,0x17b,0x3c2,0x33f)+_0xb0a3d1(0x7a3,0x2a3,0x4bb,0x504)+_0x56f2e2+(_0xb0a3d1(0x737,0x75a,0x30a,0x612)+'P3\x0a🆔\x20ID\x20:\x20')+yut[_0x5c9df3(0x24c,-0x2f9,0x3e9,0x162)][0x134*0x1+0x3c+-0x2e*0x8][_0x5c9df3(0xf4,0x102,-0x3aa,0x11c)]+(_0x5c9df3(0x7fa,0x40f,0xa1c,0x936)+':\x20')+yut[_0x5c9df3(0x24c,0x3ba,0x298,0x74e)][-0xf*0x18d+0x264a+-0xf07*0x1][_0x5c9df3(0x189,0x3a7,0x498,-0x86)]+(_0x5c9df3(0x80c,0x47a,0x69b,0x85c)+'\x20')+_0x430a89+(_0xb0a3d1(0x617,0xb07,0x576,0x766)+'s:\x20')+yut[_0x5c9df3(0x24c,0x61b,-0x10c,0x3d)][-0x151b+0xd31+-0x2*-0x3f5]['views']+(_0xb0a3d1(0x26,-0x14,0x3fb,-0x236)+_0xb0a3d1(0x1de,-0x128,0x19e,-0xd3))+yut[_0x5c9df3(0x24c,0x6dc,0x6a5,0x744)][0xd5f+0x19f8+-0x3*0xd1d][_0x5c9df3(0x148,0x122,0x40,0x287)]+'\x0a🌀\x20Url\x20:\x20'+yut[_0xb0a3d1(0x1d9,0x4a6,-0xa0,0x4fb)][-0xf4a+0x25b5+-0x166b*0x1][_0xb0a3d1(0x828,0x3ca,0x529,0x6b7)]+(_0x5c9df3(0x819,0xd1f,0x932,0x827)+_0x5c9df3(0x4e8,0x294,0x944,0x9de)+_0xb0a3d1(0x556,0x38d,0x9a5,0x132)+_0x5c9df3(0x6f,-0xb5,0x350,-0x26d)+_0x5c9df3(0x521,0x88c,-0x22,0x2ff));let _0x88b867=await _0x3fb7ef[_0x5c9df3(0x2d2,0x530,0x77b,0x5d)](getBuffer,_0x2221fe);const _0x2f8c13={};_0x2f8c13[_0xb0a3d1(0x70a,0x85d,0x920,0x70d)+'t']=_0x3fb7ef[_0xb0a3d1(0x487,0x103,0x631,0x15b)];const _0x37e829={};function _0xb0a3d1(_0x315811,_0x4e4c28,_0x1c3846,_0x5b9af7){return _0x19fb6(_0x315811-0x154,_0x4e4c28,_0x315811-0x24,_0x5b9af7-0x103);}_0x37e829[_0xb0a3d1(0x5ee,0x433,0x935,0x2f4)]='owner',_0x37e829[_0xb0a3d1(0x23e,-0x15f,0x6a,-0x67)]=_0x2f8c13,_0x37e829['type']='RESPONSE';let _0x2b2283=[_0x37e829];await _0x3fb7ef[_0x5c9df3(0x14f,0x46,0x5a1,0x261)](sendButLocation,from,_0x3b765b,'NOTE\x20！'+enter+(_0x5c9df3(0x128,0x9e,-0xeb,-0x20f)+_0xb0a3d1(0x925,0xa5e,0x6c0,0x8b5)+_0xb0a3d1(0x3a2,0x314,0x68c,0x102)+_0xb0a3d1(0x877,0xba5,0x3f8,0x4da)+'ton\x20silahk'+_0xb0a3d1(0x73c,0x247,0xc5f,0x6ef)+_0x5c9df3(0x7df,0x329,0x60a,0x97b)+_0xb0a3d1(0x513,0x6b5,0x429,0x1cc)+_0x5c9df3(0x9ca,0x50b,0xeb9,0xe89)+_0x5c9df3(0x9d4,0xde5,0x91a,0x7ea))+enter+enter+'©\x20'+ownername,_0x88b867,_0x2b2283,{});let _0x4b89da=await _0x3fb7ef[_0x5c9df3(0x2d2,0x5f,0x379,-0x8d)](getBuffer,_0x4a2f46);const _0x4f000c={};_0x4f000c[_0x5c9df3(0x803,0xbf2,0x451,0x7ba)]=_0x3fb7ef[_0x5c9df3(0x487,0x36e,0x43d,0x62a)],_0x4f000c[_0x5c9df3(0x8cb,0x993,0xd5a,0x814)]=0x2,_0x4f000c[_0xb0a3d1(0x334,0x11d,0x1c2,0x371)]=_0x5c9df3(0x114,-0x64,-0x183,0xd9)+'3',_0x4f000c[_0x5c9df3(0x14b,-0x150,0x694,0x594)]='',_0x4f000c[_0xb0a3d1(0x2be,0x1c6,0x76b,0x26)+'rl']='',_0x4f000c[_0x5c9df3(0x557,0x130,0x522,0x192)]=pp_userz;const _0x2d2c4e={};_0x2d2c4e[_0xb0a3d1(0x40f,-0x8f,0x376,-0x69)+'Score']=0x3b9aca00,_0x2d2c4e['isForwarde'+'d']=!![];function _0x5c9df3(_0xd0596f,_0x3015a9,_0x432cc9,_0x3eec22){return _0x19fb6(_0xd0596f-0x1d6,_0x3eec22,_0xd0596f-0x97,_0x3eec22-0x5);}_0x2d2c4e[_0x5c9df3(0xa73,0x957,0xdeb,0xe7d)+_0xb0a3d1(0x1c,-0x27a,-0x75,0x295)]=!![],_0x2d2c4e['externalAd'+_0xb0a3d1(0x517,0x6a1,0x33f,0x6b8)]=_0x4f000c;const _0x3eea28={};_0x3eea28[_0x5c9df3(0x4bc,0x87b,0x1ac,0xd2)+'o']=_0x2d2c4e,_0x3eea28[_0x5c9df3(0x417,0x128,0x3e9,0x2ad)]=_0x3fb7ef[_0xb0a3d1(0x40d,0x4e4,0x54e,-0x29)],_0x3eea28['filename']=_0x56f2e2+'.mp3',_0x3eea28[_0xb0a3d1(0x53d,0x255,0xa62,0x45d)]=fgclink2,_0x3eea28['thumbnail']=pp_bot2,alpha['sendMessag'+'e'](from,_0x4b89da,MessageType[_0x5c9df3(0x3a0,0x884,0x886,-0x61)],_0x3eea28);});});}catch(_0x26a9a4){reply(mess[_0x4963f8(0x15f,0x48c,0x5f1,0x595)][_0x128a37(0xc25,0xa55,0xc0c,0x6e3)]);}await limitAdd(sender,limit);break;case _0x4963f8(0x77f,0x600,0x909,0x7e6):{const _0x5100ed={};_0x5100ed[_0x128a37(0x10ee,0xf52,0xf44,0xc3a)+'t']=_0x128a37(0xa44,0xa36,0xaec,0xdc2)+'t';const _0x2ae66f={};_0x2ae66f[_0x4963f8(0x67b,0xf2f,0xa74,0x66e)]='limit',_0x2ae66f[_0x4963f8(0x6fe,0x519,0x6c4,0xb23)]=_0x5100ed,_0x2ae66f['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x1010,0xd94,0x1253,0xd8b)](prefix),'©\x20'+ownername,[_0x2ae66f]);if(args[_0x4963f8(0xae2,0x85f,0x6e2,0x6f1)]===-0x2049+-0x1505*-0x1+-0xce*-0xe)return reply(_0x4963f8(0xdcf,0x7b9,0xa82,0xc23)+'ntah\x20*'+prefix+(_0x128a37(0xb41,0xb04,0x2e1,0x679)+_0x4963f8(0xe33,0x640,0x902,0x936)+_0x4963f8(0x56a,0x867,0x65d,0x96d)+_0x4963f8(0x8c1,0x3f8,0x56f,0x1e7)));var srch=args['join']('');aramas=await yts(srch),server=_0x4963f8(0x618,0xc6b,0x71b,0xb6b),aramat=aramas[_0x4963f8(0x124,0xaba,0x5cb,0x474)];var mulaikah=aramat[0x6*-0xa6+-0x626+0xa0a][_0x4963f8(0xc5d,0x7de,0xcae,0x8dc)];try{ytv2(srch,server)[_0x128a37(0x1078,0x11a5,0x11e1,0xc92)](_0x1daa8a=>{const _0x318816={'CUlWa':_0x53e715(0x54a,0x419,0x4bc,0x30f),'cJUYS':_0x53e715(0x2a,0x469,0x374,-0xe)+'21','YzLMg':function(_0x55c176,_0x3b82d4){return _0x55c176===_0x3b82d4;},'japhv':_0x2c1753(0x991,0x5b5,0x67e,0x8bf),'ZCVve':function(_0x40c38b,_0x1d4a02){return _0x40c38b(_0x1d4a02);},'DOZOi':function(_0x528de9,_0x4fdb5a){return _0x528de9!==_0x4fdb5a;},'qJlmQ':_0x53e715(0x751,0x7c2,0x2d0,0x5a7),'gqpkz':function(_0x3083f3,_0x5dedd1){return _0x3083f3>=_0x5dedd1;},'cLuQq':function(_0xd7ea2b,_0x499a26,_0x46aec5,_0x2412c2){return _0xd7ea2b(_0x499a26,_0x46aec5,_0x2412c2);}},{dl_link:_0x19f83c,thumb:_0x36a747,title:_0x58ee76,filesizeF:_0x564ab0,filesize:_0x496cdb}=_0x1daa8a;function _0x2c1753(_0x25c142,_0x3af164,_0x209ef2,_0x4ffe27){return _0x128a37(_0x25c142-0x94,_0x3af164,_0x209ef2-0x190,_0x25c142- -0x5af);}function _0x53e715(_0xe823ad,_0x5c17b9,_0x2d0994,_0x10022b){return _0x4963f8(_0x5c17b9,_0x5c17b9-0x7e,_0x2d0994- -0x45b,_0x10022b-0x6d);}axios[_0x53e715(0x197,-0x291,0xcf,-0x233)]('https://ti'+_0x2c1753(-0xa3,0x328,-0x51a,-0x1c9)+_0x53e715(0xa70,0xa54,0x833,0xbef)+'.php?url='+_0x19f83c)[_0x2c1753(0x6e3,0xbfc,0x37b,0x917)](async _0x49e311=>{function _0x4c20ce(_0x4f094b,_0x15122c,_0x13dde8,_0xd98987){return _0x2c1753(_0x13dde8-0x546,_0x15122c,_0x13dde8-0x154,_0xd98987-0x1ba);}function _0x1a2697(_0x44cada,_0x1924a2,_0x120c7f,_0x117dcc){return _0x53e715(_0x44cada-0x1d5,_0x44cada,_0x117dcc-0x51,_0x117dcc-0x1e2);}if(_0x318816['DOZOi'](_0x1a2697(0x214,-0xd4,0x65d,0x321),_0x318816[_0x1a2697(0x23e,0x5f9,0x5dd,0x33b)]))throw new _0xbf1e81(_0x4c8e41);else{if(_0x318816['gqpkz'](Number(_0x496cdb),-0x14c3e+0x3*-0x7b97+0x445a3))return _0x318816[_0x1a2697(0x7d4,0x2b3,0x752,0x449)](sendMediaURL,from,_0x36a747,_0x4c20ce(0x89d,0xac1,0xbc1,0xdfc)+_0x1a2697(0x132,0x3c,-0x160,0x271)+enter+enter+(_0x1a2697(0x251,0x20a,0x312,0x57e)+':\x20')+_0x58ee76+enter+('📊\x20*Quality'+_0x4c20ce(0x8e9,0x3b0,0x8e8,0x95b)+'s')+enter+(_0x1a2697(0x2d5,0x102,0x894,0x5a8)+_0x1a2697(0x75c,0xc73,0x8ca,0x9c0))+enter+(_0x1a2697(0xaf7,0xb88,0xd41,0x973)+'e*\x20:\x20')+_0x564ab0+enter+(_0x1a2697(0x8ff,0xa1f,0xe9d,0x9bc)+'\x20')+_0x49e311[_0x1a2697(-0x38e,0x72,0x1d9,0x1a4)]+enter+enter+(_0x1a2697(0x6f2,0x377,0x13,0x20f)+'asi\x20lebih\x20'+_0x1a2697(0x56b,0x541,0x815,0x397)+_0x1a2697(0x3a6,0x150,-0x20e,0x2f)+'\x20dalam\x20ben'+_0x1a2697(0x634,0x674,-0x98,0x479)));sendMediaURL(from,_0x19f83c,'')[_0x1a2697(0xf4,0x62f,0x570,0x512)](_0x57b3e8=>{function _0x1d6f4c(_0x468703,_0x31246a,_0xd1d264,_0x42d590){return _0x4c20ce(_0x468703-0x65,_0x468703,_0xd1d264- -0x1cd,_0x42d590-0x48);}const _0x55ea82={};function _0x10f7bb(_0x402d71,_0x553156,_0x32d560,_0x21b1ee){return _0x1a2697(_0x32d560,_0x553156-0xf9,_0x32d560-0x1,_0x553156-0x488);}_0x55ea82[_0x10f7bb(0x10ed,0xe77,0xc84,0xaa2)]='ownerku',_0x55ea82[_0x1d6f4c(0x78d,0x73c,0xb60,0x633)]=_0x10f7bb(0x409,0x5c3,0x85a,0x59a),_0x55ea82[_0x1d6f4c(0x8db,0xcdc,0x846,0x606)]=_0x318816['CUlWa'],_0x55ea82[_0x1d6f4c(0x7fc,0x9a6,0x4fc,0x59d)]=_0x318816[_0x10f7bb(0xd0b,0xa1d,0x8fa,0x5f2)];const _0xeb28fd=_0x55ea82;if(_0x318816[_0x1d6f4c(0xcd6,0xd22,0xc10,0x93a)](_0x10f7bb(0x6e7,0xbeb,0xd0c,0x1082),_0x318816[_0x1d6f4c(0x912,0xb8b,0xbae,0xc0c)])){var _0x3c973c=_0x3c2b16[_0x1d6f4c(0x609,0x576,0x95f,0xbd3)][_0x1d6f4c(0x4d9,0x2f2,0x43f,0x388)]();let _0x4e1be9=_0x14762e;for(let _0xb6a49f of _0x3c973c){const _0x1ed005={};_0x1ed005[_0x1d6f4c(0x647,0x9df,0xa04,0x84a)+'t']=_0x1d6f4c(0xa01,0xf7b,0xa44,0xbf7);const _0xe041fc={};_0xe041fc[_0x10f7bb(0xf5a,0xaf2,0xacd,0xb1b)]=_0xeb28fd['qaAmb'],_0xe041fc[_0x1d6f4c(0x1eb,0x89,0x538,0x6b8)]=_0x1ed005,_0xe041fc[_0x1d6f4c(0x7b4,0xffc,0xb5d,0xd71)]=0x1;const _0x5faad4={};_0x5faad4[_0x10f7bb(0x9a1,0xaf2,0xd74,0xdac)]=_0xeb28fd[_0x1d6f4c(0xf56,0x7b6,0xb60,0xff8)],_0x5faad4[_0x1d6f4c(0x1c2,0x713,0x538,0x66e)]={},_0x5faad4['type']=0x1,_0x5faad4[_0x1d6f4c(0x1c2,0x713,0x538,0x66e)][_0x1d6f4c(0x6fa,0x76a,0xa04,0x5b8)+'t']=_0xeb28fd[_0x10f7bb(0xb9f,0xa50,0x9b3,0xc40)];var _0x41972c=[_0xe041fc,_0x5faad4];const _0x4a3d99={};_0x4a3d99[_0x10f7bb(0x3f4,0x874,0x825,0x9de)+'t']=_0x1d6f4c(0x111b,0x1082,0xc95,0x83d)+'*'+_0x4179cc+_0x2bc063+_0x4e1be9,_0x4a3d99[_0x1d6f4c(0xa2f,0x713,0xa3f,0x9d3)]=''+_0x2d0eb5+_0x5f503a+_0x174fa9+_0x498a40+_0xa94057+'©\x20'+_0x5348fe,_0x4a3d99[_0x10f7bb(0xd17,0x880,0xc1d,0xc2e)]=_0x41972c,_0x4a3d99[_0x1d6f4c(0x8ea,0x165,0x5a7,0x4d5)]=0x1;var _0x181677=_0x4a3d99;const _0xd81558={};_0xd81558[_0x10f7bb(0x15e,0x5a7,0x9c7,0x587)]='hi',_0xd81558[_0x10f7bb(0x908,0x913,0x69b,0x4d0)+_0x1d6f4c(0xbee,0xe0d,0xc92,0xf2d)]=0x3b9aca00,_0xd81558[_0x10f7bb(0xb14,0x9e6,0x723,0x755)+'d']=!![],_0xd81558[_0x10f7bb(0xfd7,0xf04,0xfe0,0xf17)+_0x10f7bb(0x7b6,0x520,0x22c,0xa5b)]=!![];const _0x5e8da6={};_0x5e8da6[_0x1d6f4c(0x115e,0xc8c,0xca7,0x932)]=_0xeb28fd[_0x10f7bb(0x551,0x706,0x516,0xa9e)],_0x5e8da6[_0x10f7bb(0x839,0x94d,0x5f8,0xcfd)+'o']=_0xd81558,_0x5e8da6[_0x1d6f4c(0xa08,0x462,0x837,0x504)]=_0x1b7798,_0x5e8da6['sendEpheme'+_0x10f7bb(0x7e2,0x520,0x608,0x231)]=!![],_0x12f180[_0x1d6f4c(0x6cb,0x96a,0xac3,0x596)+'e'](_0xb6a49f[_0x1d6f4c(0x79b,0xbac,0x84b,0x38c)],_0x181677,_0x4b99ed[_0x1d6f4c(0x591,0x91e,0x5f1,0x21b)+_0x10f7bb(0xb6f,0xcb1,0x85f,0x98b)],_0x5e8da6);}}else _0x318816[_0x1d6f4c(0x5b3,0x392,0x84e,0x35e)](reply,_0x10f7bb(0x826,0xc6c,0xd12,0xb67));});}});});}catch(_0x19e39b){reply(mess['error'][_0x128a37(0xbc9,0xbda,0xc2b,0x6e3)]);}}await limitAdd(sender,limit);break;case _0x4963f8(0x129b,0x1337,0xe1f,0xb16):{const _0x306776={};_0x306776[_0x4963f8(0xd8f,0x6db,0xb90,0xcd5)+'t']='Check\x20Limi'+'t';const _0x2ff14d={};_0x2ff14d[_0x128a37(0x79e,0x716,0x8b7,0xb1e)]='limit',_0x2ff14d['buttonText']=_0x306776,_0x2ff14d['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xfef,0xb38,0x1248,0xd8b)](prefix),'©\x20'+ownername,[_0x2ff14d]);const _0x39d911={};_0x39d911[_0x4963f8(0xc45,0x803,0xb90,0x9fb)+'t']=_0x4963f8(0x9c5,0xb0c,0xc02,0x91d)+_0x4963f8(0x6db,0x823,0x4b1,0x29d);const _0x3ef106={};_0x3ef106[_0x4963f8(0x689,0xa7e,0xa74,0xd3c)]=_0x4963f8(0x9f0,0x884,0xa1c,0xda5),_0x3ef106[_0x4963f8(0xbd0,0x259,0x6c4,0xa32)]=_0x39d911,_0x3ef106[_0x128a37(0xf00,0x116a,0x85d,0xd93)]=0x1;const _0x2ebf8b={};_0x2ebf8b['quoted']=mek;if(!isPremium)return sendButMessage(from,_0x128a37(0xfb8,0xdcd,0x1247,0xd51)+_0x4963f8(0x1045,0xec7,0xaf7,0xa25)+_0x128a37(0x6df,0x4a9,0x58c,0x64f)+_0x128a37(0xde6,0x9f3,0x551,0xa64)+'remium\x20saj'+'a!\x20Upgrade'+_0x128a37(0x101,0x622,0x39a,0x53a)+_0x128a37(0xdb1,0xfba,0x1010,0xe17)+'ngan\x20cara\x20'+_0x128a37(0x10e0,0x1111,0x816,0xcee)+prefix+'goprem',_0x128a37(0x329,0x335,0x8a0,0x58c)+_0x128a37(0x8a0,0x221,0x26e,0x4eb),[_0x3ef106],_0x2ebf8b);if(args[_0x128a37(0x9f5,0xcc6,0x8d8,0x78c)]===-0x1269+0x1*0x1c02+-0x999)return reply('Kirim\x20peri'+'ntah\x20*'+prefix+(_0x128a37(0x39a,0x62e,0x856,0x679)+_0x4963f8(0x950,0x699,0x902,0xb95)+'yang\x20akan\x20'+'dicari_'));var srch=args[_0x4963f8(0x1212,0x918,0xd39,0xea9)]('');aramas=await yts(srch),server='en68',aramat=aramas[_0x4963f8(0x6cb,0x8cf,0x5cb,0x15f)];var mulaikah=aramat[-0x23b3*-0x1+-0x1*0x11b9+-0x11fa][_0x128a37(0xa69,0xcb9,0xa53,0xd58)];try{ytv3(srch,server)['then'](_0x54f851=>{const _0x564aa6={'qIXji':function(_0x19eaac,_0x13eec5){return _0x19eaac(_0x13eec5);},'IyGKQ':_0x58dd16(0xf90,0xc94,0xf67,0x107d),'XlbiQ':function(_0x1ef249,_0x4ad0e6){return _0x1ef249>=_0x4ad0e6;},'ASEND':function(_0x1a1244,_0x5eb392,_0x14112f,_0x15ff6a){return _0x1a1244(_0x5eb392,_0x14112f,_0x15ff6a);}};function _0x357764(_0x56e8e5,_0x31b5cc,_0x5ddedb,_0x37471a){return _0x4963f8(_0x31b5cc,_0x31b5cc-0x10e,_0x5ddedb-0xa6,_0x37471a-0xc6);}const {dl_link:_0x1f3abc,thumb:_0x489339,title:_0x57f15c,filesizeF:_0x197961,filesize:_0x44d3ff}=_0x54f851;function _0x58dd16(_0x2cefcf,_0x5c1d0b,_0x5c437d,_0x1d8183){return _0x4963f8(_0x5c437d,_0x5c1d0b-0x81,_0x5c1d0b-0xa6,_0x1d8183-0xc5);}axios['get']('https://ti'+_0x58dd16(0x4b6,0x508,0x204,0x3a0)+_0x357764(0x11c4,0xfac,0xd34,0xfaa)+_0x357764(0x541,0xc90,0x9e3,0x608)+_0x1f3abc)[_0x58dd16(0xffa,0xc8e,0xdf4,0x878)](async _0x5e5751=>{function _0x24c04e(_0x567c76,_0x42a262,_0x36b0dd,_0xe59d){return _0x357764(_0x567c76-0x1cf,_0x567c76,_0x42a262- -0xf4,_0xe59d-0x94);}function _0x15622a(_0x5c69db,_0x292dd0,_0x1265ef,_0x513d16){return _0x357764(_0x5c69db-0xc1,_0x1265ef,_0x513d16- -0xee,_0x513d16-0x2f);}if(_0x564aa6[_0x15622a(0x967,0x65b,0x2bc,0x75d)](Number(_0x44d3ff),0x1*-0x15926+0x12df*0x15+-0x5c1*-0x3b))return _0x564aa6[_0x24c04e(0xad7,0xbe1,0xa3e,0xa5a)](sendMediaURL,from,_0x489339,_0x15622a(0x787,0xcea,0xb54,0xb38)+'-PLAY\x20MP4*'+'*'+enter+enter+(_0x24c04e(0xd9d,0x93a,0x525,0xc8d)+':\x20')+_0x57f15c+enter+('📊\x20*Quality'+'\x20:*\x20720kbp'+'s')+enter+('🦁\x20*Ext*\x20:\x20'+_0x24c04e(0xe69,0xd7c,0xd28,0x107f))+enter+(_0x15622a(0xeb9,0x1145,0x98b,0xd35)+_0x15622a(0x35b,0xe8,0x5af,0x471))+_0x197961+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x5e5751[_0x15622a(0x49c,0x80b,0x8f,0x566)]+enter+enter+('_Untuk\x20dur'+_0x15622a(0x6f0,0x67a,0x86f,0x5cd)+'dari\x20batas'+'\x20disajikan'+_0x15622a(0x43c,0x7e2,0x473,0x7b2)+_0x15622a(0x45e,0x474,0xc8f,0x83b)));_0x564aa6[_0x15622a(0xabd,0x6db,0xd80,0xbe7)](sendMediaURL,from,_0x1f3abc,'')[_0x15622a(0xbfe,0x87f,0x622,0x8d4)](_0x5109fa=>{function _0x453fe8(_0x1d65cb,_0x2a49bc,_0xbc6c88,_0x27ce31){return _0x24c04e(_0xbc6c88,_0x1d65cb- -0x4dc,_0xbc6c88-0x11b,_0x27ce31-0x18d);}function _0x21079d(_0x5c9f30,_0xfebc58,_0x4390bb,_0x47ec09){return _0x15622a(_0x5c9f30-0x113,_0xfebc58-0x114,_0x5c9f30,_0x4390bb-0x72);}_0x564aa6[_0x453fe8(0x234,0x50c,0x360,-0x5e)](reply,_0x564aa6[_0x453fe8(-0x87,0x81,-0x4dd,0x425)]);});});});}catch(_0x52a100){reply(mess[_0x4963f8(0x941,0x54f,0x5f1,0x45f)][_0x4963f8(0x4a2,0x883,0x639,0xaaf)]);}}await limitAdd(sender,limit);break;case'ytmp4ajafh'+'d':{const _0x5c1294={};_0x5c1294['displayTex'+'t']=_0x4963f8(0xcb5,0x10c1,0xd18,0x9bb)+'t';const _0x4a430e={};_0x4a430e['buttonId']='limit',_0x4a430e[_0x4963f8(0x623,0xb14,0x6c4,0xb37)]=_0x5c1294,_0x4a430e['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x4a430e]);const _0x50c191={};_0x50c191['displayTex'+'t']=_0x4963f8(0x797,0x736,0xc02,0xea4)+'emium';const _0x3e833f={};_0x3e833f['buttonId']=_0x128a37(0x60f,0x576,0xfbd,0xac6),_0x3e833f[_0x128a37(0xc1c,0x646,0xbe2,0x76e)]=_0x50c191,_0x3e833f[_0x4963f8(0xb98,0xcb3,0xce9,0x1200)]=0x1;const _0x34d676={};_0x34d676[_0x4963f8(0xdb6,0xe16,0x9c3,0xa6a)]=mek;if(!isPremium)return sendButMessage(from,_0x128a37(0xeb6,0xddb,0x128e,0xd51)+_0x4963f8(0xc91,0xf6d,0xaf7,0x957)+_0x128a37(0x435,0x7cc,0x30c,0x64f)+_0x128a37(0x7fb,0x54b,0x6e6,0xa64)+'remium\x20saj'+'a!\x20Upgrade'+'\x20akun\x20mu\x20s'+_0x128a37(0xb33,0x1211,0xdd2,0xe17)+'ngan\x20cara\x20'+'ketik\x20'+prefix+_0x4963f8(0x595,0x57c,0xa1c,0x54e),_0x128a37(0xa87,0x975,0xa58,0x58c)+_0x4963f8(0xf6,0x15c,0x441,0x74),[_0x3e833f],_0x34d676);if(args[_0x4963f8(0x314,0x75c,0x6e2,0x734)]===-0x2109+0x197a+-0x3*-0x285)return reply(_0x4963f8(0xb2b,0x825,0xa82,0xe54)+_0x4963f8(0x30b,0x941,0x611,0x38d)+prefix+(_0x128a37(0x1e7,0x477,0x382,0x679)+_0x4963f8(0x9c4,0xe1a,0x902,0x75c)+'yang\x20akan\x20'+_0x128a37(0x3d0,0x433,0x660,0x619)));var srch=args[_0x4963f8(0xa0c,0x876,0xd39,0xea7)]('');aramas=await yts(srch),server=_0x4963f8(0x44f,0x1fe,0x71b,0xb04),aramat=aramas[_0x128a37(0xa3e,0x459,0x2bd,0x675)];var mulaikah=aramat[-0x243f+0x1afd+0x942][_0x128a37(0xf89,0xe9d,0x9d8,0xd58)];try{ytv4(srch,server)[_0x128a37(0x913,0xeb9,0xb0f,0xc92)](_0x2b3079=>{function _0x435be8(_0x15f1ff,_0x3ca5b2,_0x1544ec,_0x190a7e){return _0x128a37(_0x15f1ff-0xd4,_0x190a7e,_0x1544ec-0x125,_0x3ca5b2- -0x5b4);}const _0x58be80={'XbEdp':'Not\x20a\x20Twit'+_0x435be8(0xbdc,0x6e1,0xa9a,0x733),'jXmHd':_0x435be8(0x74f,0x48f,0x8eb,-0xa3)+'utu.be/1O2'+_0x4e83ec(0xe37,0xa3a,0xe59,0x936),'GKoSG':_0x435be8(0x717,0x48f,-0xb,0x160)+'utu.be/BjT'+'nWpDlmrk','TZshH':_0x4e83ec(0x84c,0x64e,0xe65,0xb0e)+_0x4e83ec(0xa98,0x84d,0x625,0xb6f)+_0x4e83ec(0xa3b,0xb20,0x145d,0xf17),'ikTVZ':'https://yo'+'utu.be/POj'+_0x435be8(0x224,0x532,0x25e,0x1f9),'ZGpXw':function(_0x37eca0,_0x45060f){return _0x37eca0*_0x45060f;},'yVGbQ':_0x435be8(0xa9,0x5c3,0x972,0x804)+_0x4e83ec(0x2bf,0x410,0x28b,0x6be),'nDgEU':_0x4e83ec(0x86e,0xea7,0xd1d,0xc42)+_0x435be8(0x549,0x38,0x233,-0x422)+_0x4e83ec(0x1275,0x1434,0x134d,0xf95)+'-officedoc'+_0x4e83ec(0xbf6,0xc24,0x8be,0xd74)+'processing'+_0x4e83ec(0xa50,0x424,0xcff,0x7e9)+'t','xVMzN':_0x435be8(0x4c5,0x5c3,0x805,0x2ce)+_0x4e83ec(0x5b9,0x497,0x8ab,0x6b7)+_0x435be8(0xdc5,0x916,0x74d,0xe37)+_0x4e83ec(0x829,0x4c7,0x7e2,0x652)+_0x435be8(0x42a,0x1a2,-0x350,-0x227)+'entationml'+_0x4e83ec(0x128f,0x1093,0x1201,0xdc1)+_0x4e83ec(0x9f3,0xc3e,0x13c8,0xe8b),'vwfyA':function(_0x548d06,_0x5f1b99){return _0x548d06*_0x5f1b99;},'Ibpvg':_0x4e83ec(0xf7e,0xadf,0x11aa,0xd17)+'u','GARoa':'🙍‍♂️\x20Owner','frfMz':_0x435be8(0x4de,0x94e,0x7a1,0x8fa)+_0x435be8(0x49a,0x80c,0x865,0x912),'ZWGwA':_0x4e83ec(0xcc0,0xc02,0xcf2,0x102f),'CEOVE':_0x435be8(0xa58,0x7a3,0x57e,0x8fb)+_0x4e83ec(0xa9a,0x874,0x339,0x5bd)+_0x435be8(-0x17d,0x2bc,0x38f,0x96)+_0x435be8(0x7b6,0x4ac,0x1be,0x8d0)+_0x4e83ec(0xf8d,0xd16,0x1176,0xdfa)+_0x435be8(0x617,0x15b,-0x28d,0x183)+_0x435be8(0x2a1,0x3a5,0x26a,0x449)+'eXI.enc','aTxGx':_0x435be8(0x199,0x55b,0x1fb,0x95a)+_0x435be8(0xbb0,0x8ec,0x627,0xd39)+_0x435be8(0x490,0xca,-0x2bf,-0x3c3)+'v9gIBMu9tX'+_0x4e83ec(0xbed,0x74c,0xd01,0x937),'ncnZo':_0x4e83ec(0xcc6,0xbca,0x4e2,0x8ea)+_0x4e83ec(0xba2,0xb4d,0xa39,0xab9)+_0x435be8(0x9d0,0x8a4,0x7dd,0x637)+_0x435be8(-0x27,0x13a,-0x5f,0xa1)+_0x435be8(0x470,-0x2b,0x2ba,-0x266),'BZTaY':function(_0x32739b,_0x364365){return _0x32739b!==_0x364365;},'xYOWI':_0x435be8(-0x466,-0x97,0xef,0x337),'BVNnG':function(_0x1be6d5,_0x531235){return _0x1be6d5(_0x531235);},'FIFTC':_0x4e83ec(0xbc5,0xa26,0xdd0,0xd63),'Nmhlr':_0x435be8(-0x3eb,-0x9c,-0x46d,-0xb3),'xYNUA':function(_0x225685,_0x284eb1){return _0x225685(_0x284eb1);},'ZpktX':function(_0x224c07,_0x1b31f5,_0x5c6bcf,_0x57397f){return _0x224c07(_0x1b31f5,_0x5c6bcf,_0x57397f);},'tVLlK':function(_0xd42417,_0x840c37,_0x258add,_0x43d147){return _0xd42417(_0x840c37,_0x258add,_0x43d147);}};function _0x4e83ec(_0x2094d1,_0x405b67,_0x32dc7e,_0x16711a){return _0x4963f8(_0x2094d1,_0x405b67-0xe,_0x16711a-0x175,_0x16711a-0xa3);}const {dl_link:_0x1100ff,thumb:_0x31311c,title:_0x34c904,filesizeF:_0x58d751,filesize:_0x47591b}=_0x2b3079;axios[_0x4e83ec(0x983,0xabb,0x336,0x69f)](_0x4e83ec(0x924,0x861,0x11c3,0xcba)+'nyurl.com/'+_0x4e83ec(0x11f9,0x11ac,0xf06,0xe03)+_0x435be8(0x6a5,0x433,0x4e8,-0xf)+_0x1100ff)['then'](async _0x1d5e7a=>{function _0x4c9ad7(_0xd1a82f,_0x3531a2,_0x42f5f4,_0x48286c){return _0x4e83ec(_0x3531a2,_0x3531a2-0x13f,_0x42f5f4-0x161,_0x48286c- -0x3d3);}function _0x4e9900(_0xd6a186,_0xc9f9fd,_0x1e3111,_0x3620d5){return _0x435be8(_0xd6a186-0x12,_0x3620d5-0x5dc,_0x1e3111-0x100,_0xc9f9fd);}if(_0x58be80[_0x4c9ad7(0x113,-0x1e5,-0x274,0x28a)](_0x58be80['Nmhlr'],_0x58be80[_0x4c9ad7(0x732,-0x64,0x707,0x38a)]))throw new _0x397f42(_0x58be80[_0x4c9ad7(0x768,0x8ba,0x45c,0x7ab)]);else{if(_0x58be80['xYNUA'](Number,_0x47591b)>=-0x9719+0x24d6a+0x1d*-0x1a5)return _0x58be80[_0x4c9ad7(0xe5c,0xb91,0x896,0x9ef)](sendMediaURL,from,_0x31311c,'*📽️\x20YOUTUBE'+_0x4c9ad7(0x571,-0xed,0x4d6,0x41d)+enter+enter+('🐣\x20*Title\x20:'+'*\x20')+_0x34c904+enter+(_0x4e9900(0xdcf,0xdbf,0x811,0x8d3)+_0x4e9900(0x99f,0xa3e,0x111e,0xd8d)+'ps')+enter+('🦁\x20*Ext*\x20:\x20'+_0x4c9ad7(0xdb2,0xade,0xcae,0xb6c))+enter+(_0x4c9ad7(0x856,0xe22,0xc34,0xb1f)+_0x4c9ad7(0x300,-0x124,0x32b,0x25b))+_0x58d751+enter+(_0x4e9900(0xb7b,0x11b2,0x122b,0xe98)+'\x20')+_0x1d5e7a[_0x4e9900(0x880,0x3ae,0x14a,0x680)]+enter+enter+(_0x4c9ad7(-0x17f,0x71c,0x665,0x3bb)+_0x4c9ad7(0x883,-0x115,0x450,0x3b7)+_0x4c9ad7(0x295,0x272,0x773,0x543)+_0x4c9ad7(0x5f4,0x199,0x478,0x1db)+_0x4e9900(0xbb2,0x444,0x6f7,0x8cc)+'tuk\x20link_'));_0x58be80[_0x4e9900(0x968,0xbf7,0xa47,0x942)](sendMediaURL,from,_0x1100ff,'')[_0x4c9ad7(0x492,0x351,0x533,0x6be)](_0x5b704a=>{function _0x354400(_0x2c1ddc,_0x5297ec,_0xe30b43,_0x1aac1e){return _0x4c9ad7(_0x2c1ddc-0x1c8,_0xe30b43,_0xe30b43-0x5a,_0x1aac1e-0x304);}function _0xd169e3(_0x154110,_0x7f6b62,_0x157e4f,_0x382cd6){return _0x4e9900(_0x154110-0xd6,_0x7f6b62,_0x157e4f-0x188,_0x157e4f- -0x626);}const _0x5ac957={'JWrgC':_0x58be80['jXmHd'],'MtSQD':_0x58be80[_0x354400(0x428,0x78d,0x66b,0x82c)],'PXUoj':_0x58be80['TZshH'],'MvsOr':_0x58be80[_0x354400(0xcdf,0xc9e,0xa6d,0xbb3)],'ZdWVY':function(_0x1d1c8e,_0x2261d6){function _0xcfb526(_0x314e77,_0x420be9,_0x4d7136,_0xdeff05){return _0x354400(_0x314e77-0xaa,_0x420be9-0x1af,_0x420be9,_0x4d7136- -0x41f);}return _0x58be80[_0xcfb526(0x988,0x14b,0x439,-0xaa)](_0x1d1c8e,_0x2261d6);},'BJzYX':_0x58be80['yVGbQ'],'kssuY':_0x58be80['nDgEU'],'OALsF':_0x58be80[_0x354400(0x77c,0x8d1,0x464,0x52a)],'rIVDk':function(_0xeab132,_0x280cf7){return _0x58be80['vwfyA'](_0xeab132,_0x280cf7);},'WZzzq':_0xd169e3(0x549,0x776,0x27c,-0x1d5),'JmyHI':_0x58be80[_0xd169e3(0x239,0x3e2,0x26b,0x6ac)],'hyGgR':_0x58be80['GARoa'],'yMjiI':_0x58be80[_0xd169e3(0x47f,0x1ac,0x21,0x31f)],'adNEa':_0x58be80['ZWGwA'],'iEUmP':_0x58be80[_0xd169e3(0x543,0x689,0x713,0x97b)],'Sxbmz':_0x58be80[_0xd169e3(0x932,0x5a0,0x8c6,0x3eb)],'Wpydw':_0x58be80['ncnZo']};if(_0x58be80[_0xd169e3(0x432,-0x1bc,-0x6c,-0x12d)](_0x58be80['xYOWI'],'npnEb'))_0x58be80[_0xd169e3(0x4cf,0x970,0x513,0x4fe)](reply,_0x58be80['FIFTC']);else{const _0x39d958=[_0x5ac957[_0xd169e3(0xa0b,0x993,0x797,0x3c5)],_0x5ac957[_0x354400(0x453,0x83b,0x8ab,0x794)],_0x5ac957['PXUoj'],_0x5ac957[_0xd169e3(0x8a7,0x865,0x581,0x811)]],_0xf93366=_0x39d958[_0x2722f6[_0xd169e3(-0x469,-0x3f2,-0xc8,-0x1c1)](_0x5ac957[_0x354400(0x786,0xa9e,0x4bd,0x64f)](_0x4e7306[_0x354400(0x1393,0xa58,0xcec,0xf08)](),_0x39d958[_0x354400(0x479,0x527,0x541,0x788)]))],_0x378287=[_0x5ac957[_0x354400(0x6a6,0x5f1,0x9a7,0x907)],_0xd169e3(0x64e,0x7c,0x579,0x477)+'n/vnd.open'+_0xd169e3(0xc51,0x8aa,0x8cc,0x906)+_0x354400(0x7ec,0x579,0x38f,0x583)+_0xd169e3(0x385,0x3f6,0x733,0x566)+_0x354400(0x8bf,0x1113,0xa44,0xd1d)+_0xd169e3(-0x85,-0x227,0x18a,0x79),_0x5ac957['kssuY'],_0x5ac957[_0x354400(0xd74,0xe2e,0x595,0xa3e)]],_0xc6f16=_0x378287[_0x5c0b90['floor'](_0x5ac957['rIVDk'](_0x5bb757['random'](),_0x378287[_0x354400(0x245,0xab0,0x5f0,0x788)]))],_0x5de68d={};_0x5de68d[_0xd169e3(0x895,0x165,0x520,0x91a)]=_0x5ac957['WZzzq'],_0x5de68d[_0x354400(0xb99,0xaaf,0x2d2,0x76a)]={},_0x5de68d['type']=0x1,_0x5de68d[_0x354400(0xb99,0xaaf,0x2d2,0x76a)][_0x354400(0x863,0xaf7,0x819,0xc36)+'t']=_0x5ac957['JmyHI'];const _0x3558f6={};_0x3558f6['displayTex'+'t']=_0x5ac957[_0x354400(0x9ad,0xe00,0xb0a,0x9a0)];const _0x507cf9={};_0x507cf9[_0x354400(0xcba,0xcf7,0xbb9,0xb1a)]='owner',_0x507cf9['buttonText']=_0x3558f6,_0x507cf9[_0x354400(0x1063,0x1003,0x1047,0xd8f)]=0x1;const _0x55a3b7={};_0x55a3b7[_0x354400(0x8fc,0xd4d,0xa45,0xc36)+'t']=_0x5ac957[_0xd169e3(-0x51b,-0x14a,-0xd8,-0x392)];const _0x14f743={};_0x14f743[_0x354400(0xbc2,0x94b,0xe79,0xb1a)]=_0xd169e3(0x2aa,0x1bc,0x200,0x557),_0x14f743[_0xd169e3(-0x2cb,0x3c4,0x170,-0x235)]=_0x55a3b7,_0x14f743[_0xd169e3(0xc76,0x522,0x795,0xa97)]=0x1;const _0x1a51cd=[_0x5de68d,_0x507cf9,_0x14f743],_0xdeb016={};_0xdeb016[_0xd169e3(0x3d6,0x4c9,0x2a2,0x56d)+'t']=_0x4e6c53,_0xdeb016[_0xd169e3(0x23a,0x40f,0x677,0x270)]=_0x4edd50,_0xdeb016[_0xd169e3(0x76e,-0x85,0x2ae,0x638)]=_0x1a51cd,_0xdeb016['headerType']=_0x5ac957[_0x354400(0x605,0xb1d,0xaad,0x7ff)],_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)]={},_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)]['url']=_0x5ac957[_0xd169e3(0x78,0x355,-0x22,0x1e9)],_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)][_0xd169e3(0x7bf,-0x159,0x2d6,0x51a)]=_0xc6f16,_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)][_0xd169e3(0x231,0x34f,0x122,0x586)]=_0x5ac957['Sxbmz'],_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)][_0xd169e3(0xbcd,0x65b,0x751,0xa06)]=_0xd169e3(0xc8c,0x725,0x8d7,0xa4f)+_0xd169e3(0x870,0x73f,0x913,0x482),_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)][_0xd169e3(0xa22,0x940,0x85b,0xc5d)]=0x3e7,_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)][_0x354400(0xb43,0xad2,0x56e,0x87b)]=_0x5ac957[_0x354400(0x8d6,0x9df,0xc70,0x984)],_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)][_0x354400(0x24,0x3dd,0x160,0x4ea)]=_0x5ef634+'\x20|\x20'+_0x3890b1,_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)][_0x354400(0x1cd,0x6ff,0x51a,0x56d)+'256']='bx/mFEB8SW'+_0x354400(0x972,0xb37,0xa91,0x95e)+_0xd169e3(0x369,0x8be,0x436,0x3ea)+_0xd169e3(0x2cd,0xc7,0x2a5,0x207)+_0x354400(0x10f8,0x12ea,0xdb0,0xde5),_0xdeb016[_0x354400(0xf1e,0x85a,0xfbd,0xb2c)+_0x354400(0x7b5,0x962,0x111a,0xc4a)]['jpegThumbn'+'ail']=_0x51ed6b;const _0x34359b=_0xdeb016,_0x5d87d9={};_0x5d87d9['mediaUrl']=_0xf93366,_0x5d87d9[_0x354400(0xa0f,0x1228,0xd69,0xd84)]=0x2,_0x5d87d9[_0xd169e3(0x30e,-0x160,0x266,0x51)]=''+_0x42fd74,_0x5d87d9['body']=''+_0x5a076a,_0x5d87d9[_0x354400(0xaba,0x9ef,0x49a,0x7ea)+'rl']='',_0x5d87d9[_0xd169e3(0x1a8,0x6e2,0x416,0x2d7)]=_0x61e72b;const _0x84856b={};_0x84856b[_0x354400(0xb23,0x725,0x891,0x93b)+_0x354400(0xaca,0xdc3,0x101a,0xec4)]=0x3b9aca00,_0x84856b['isForwarde'+'d']=!![],_0x84856b[_0x354400(0x1423,0x130f,0x1133,0xf2c)+_0xd169e3(-0x4cd,0x373,-0xb2,-0x40b)]=!![],_0x84856b[_0x354400(0xdd5,0xfa2,0xef5,0xe0a)+'id']=[_0x80f874,_0x210fb6,_0x275ce6],_0x84856b[_0xd169e3(0x26c,-0xa4,0x3df,0x1c5)+_0xd169e3(0x29f,0x153,0x449,0x8e5)]=_0x5d87d9;const _0xcef108={};_0xcef108['contextInf'+'o']=_0x84856b,_0xcef108[_0xd169e3(0x905,0x5da,0x46f,0x72a)]=_0x5741f9,_0xcef108['sendEpheme'+'ral']=!![],_0x52d99d[_0x354400(0x113e,0x109b,0xec3,0xcf5)+'e'](_0x198e16,_0x34359b,_0x5d2f7b['buttonsMes'+_0xd169e3(0xc1c,0x5c8,0x6df,0xb86)],_0xcef108);}});}});});}catch(_0x4cd4c6){reply(mess[_0x128a37(0x65f,0xa09,0xb97,0x69b)]['api']);}}break;case _0x128a37(0xb65,0xa3d,0x91a,0xc29):{const _0x3e8aa4={};_0x3e8aa4[_0x4963f8(0x105c,0x1075,0xb90,0xa1e)+'t']=_0x4963f8(0x10e7,0x1227,0xd18,0xdc1)+'t';const _0x2b9f30={};_0x2b9f30[_0x128a37(0x705,0x648,0x988,0xb1e)]=_0x4963f8(0x9be,0x98c,0xce1,0xb22),_0x2b9f30[_0x128a37(0x2ee,0x9eb,0x94c,0x76e)]=_0x3e8aa4,_0x2b9f30[_0x4963f8(0xb87,0xd84,0xce9,0xba1)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xf8f,0xb0c,0x10c8,0xd8b)](prefix),'©\x20'+ownername,[_0x2b9f30]);if(args['length']===0x1*0x3d9+0x1b9b+0x6*-0x53e)return reply('Kirim\x20peri'+_0x4963f8(0x601,0x36f,0x611,0x513)+prefix+(_0x128a37(0x61c,0x4f2,0x303,0x679)+_0x4963f8(0x8f6,0xd51,0x902,0xdc3)+_0x128a37(0x543,0x386,0x672,0x707)+_0x128a37(0x238,0x691,0x742,0x619)));var srch=args[_0x128a37(0xd00,0xd05,0xde0,0xde3)]('');aramas=await yts(srch),server=_0x4963f8(0x9a7,0x22d,0x71b,0xbd1),aramat=aramas[_0x128a37(0x695,0x606,0x58b,0x675)];var mulaikah=aramat[-0x427+0x11b5+-0xd8e][_0x4963f8(0x8ef,0x828,0xcae,0x1087)];try{ytv2(srch,server)[_0x4963f8(0xbea,0x86f,0xbe8,0x10aa)](_0x3165c5=>{function _0x5e92ec(_0x202262,_0x4cb685,_0x14584d,_0x1b6197){return _0x4963f8(_0x14584d,_0x4cb685-0x1e2,_0x4cb685- -0x3bb,_0x1b6197-0x1a1);}const _0x23c561={'smZKQ':function(_0x1b81ce,_0x74adc3,_0x307b4d,_0x56e6ff,_0xd48b86){return _0x1b81ce(_0x74adc3,_0x307b4d,_0x56e6ff,_0xd48b86);},'FpsSX':function(_0x26e1eb,_0x872692){return _0x26e1eb!==_0x872692;},'ATTVu':'HpWmw','WvUvx':function(_0x388a32,_0x338526){return _0x388a32>=_0x338526;},'CEzLc':function(_0x247be0,_0x48de7f,_0x333db0,_0x4600e1){return _0x247be0(_0x48de7f,_0x333db0,_0x4600e1);},'czmfe':_0x5e92ec(0xce,0x5de,0x928,0x8b2)+_0x5c35e9(-0x3d1,0x34,0x39,-0x317)+'xTH6oLd8'},{dl_link:_0x3dbfd5,thumb:_0x6bb2f2,title:_0x210b58,filesizeF:_0x735850,filesize:_0x131b4c}=_0x3165c5;function _0x5c35e9(_0x397aa1,_0x409a9d,_0x3cdbcf,_0x18d0bf){return _0x4963f8(_0x397aa1,_0x409a9d-0x128,_0x3cdbcf- -0x464,_0x18d0bf-0x125);}axios[_0x5c35e9(0x5ee,0x3e8,0xc6,0x1ea)](_0x5e92ec(0x80a,0x78a,0xcce,0x421)+'nyurl.com/'+'api-create'+_0x5e92ec(0x40b,0x582,0x983,0xa8)+_0x3dbfd5)[_0x5c35e9(0x6b7,0x258,0x784,0xb6f)](async _0x1af3fb=>{function _0x2a93b3(_0x1bea08,_0x2c7969,_0x2a6fcd,_0x5d02d5){return _0x5e92ec(_0x1bea08-0xde,_0x2a6fcd-0x333,_0x5d02d5,_0x5d02d5-0x7a);}function _0x571d25(_0x530228,_0x333423,_0x5a4bc7,_0x4813eb){return _0x5c35e9(_0x4813eb,_0x333423-0x158,_0x530228-0x1f,_0x4813eb-0xe6);}const _0x35816e={'tJlCN':function(_0x2e12fc,_0x32b069,_0x30601f,_0x18200f,_0x5f0cfe){function _0x309f27(_0x70b431,_0x407ae5,_0x11e014,_0x4562ff){return _0xf809(_0x4562ff-0x348,_0x70b431);}return _0x23c561[_0x309f27(0x8f2,0x97e,0x8de,0xa59)](_0x2e12fc,_0x32b069,_0x30601f,_0x18200f,_0x5f0cfe);}};if(_0x23c561[_0x571d25(0x16b,-0x1e2,0x1,-0x279)](_0x571d25(0x134,0x2cd,0xce,0x5fc),_0x23c561[_0x2a93b3(0x99d,0xe0d,0xd93,0xac4)])){if(_0x23c561[_0x2a93b3(0xd3e,0xcca,0xc21,0xd08)](Number(_0x131b4c),0x2c876+0x282cc*-0x1+0x140f6))return _0x23c561[_0x2a93b3(0xa77,0x696,0xb80,0xcdb)](sendMediaURL,from,_0x6bb2f2,_0x2a93b3(0xab0,0xb4e,0xaf8,0xa45)+_0x571d25(0x236,0x19a,-0x27f,0x60)+'*'+enter+enter+(_0x571d25(0x543,0x983,0x753,0x68c)+':\x20')+_0x210b58+enter+(_0x2a93b3(0xc1d,0xd07,0x92a,0x944)+'MP3')+enter+(_0x571d25(0x938,0xa68,0x44c,0x9b2)+'e*\x20:\x20')+_0x735850+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x1af3fb[_0x2a93b3(0x69,0x249,0x526,0x129)]+enter+enter+('_Untuk\x20dur'+_0x571d25(0x1d0,0x4cd,-0x280,-0x291)+_0x2a93b3(0x8cf,0x8a2,0x719,0x47a)+_0x2a93b3(0x59b,0x2f9,0x3b1,0x581)+_0x2a93b3(0xa30,0x6ff,0x772,0x85d)+_0x2a93b3(0x493,0x81b,0x7fb,0x678)));let _0x2da67a=await getBuffer(_0x3dbfd5);const _0x115afe={};_0x115afe[_0x2a93b3(0xe54,0xbd2,0xb8e,0xcfb)]=_0x23c561['czmfe'],_0x115afe['mediaType']=0x2,_0x115afe[_0x2a93b3(0xa96,0x50d,0x732,0x41d)]='Youtube\x20Mp'+'4',_0x115afe[_0x571d25(0x119,-0x369,0x310,0x612)]='',_0x115afe['thumbnailU'+'rl']='',_0x115afe['thumbnail']=pp_userz;const _0x42b216={};_0x42b216[_0x2a93b3(0xbc1,0x950,0x80d,0x796)+_0x571d25(0x9d9,0xb6e,0x86e,0x81a)]=0x3b9aca00,_0x42b216[_0x2a93b3(0x7bf,0xccb,0x8e0,0xd5a)+'d']=!![],_0x42b216[_0x2a93b3(0xfd0,0x1031,0xdfe,0xf08)+_0x571d25(0x5d,0x1d6,0x53e,-0x176)]=!![],_0x42b216['externalAd'+'Reply']=_0x115afe;const _0x39251c={};_0x39251c[_0x571d25(0x48a,0x1ac,0x419,0x97b)+'o']=_0x42b216,_0x39251c[_0x571d25(0x3e5,0x50e,0x201,0x292)]=_0x571d25(0x2e5,-0x1e9,0x3c,0x2ae),_0x39251c[_0x2a93b3(0xe70,0xaf4,0xac2,0x7fb)]=_0x210b58+_0x2a93b3(0xa20,0xa65,0x66d,0x3db),_0x39251c['quoted']=fgclink2,_0x39251c[_0x571d25(0x525,0x109,0x2ef,0x759)]=pp_bot2,alpha[_0x2a93b3(0x6f5,0x10e1,0xbc7,0xf90)+'e'](from,_0x2da67a,MessageType[_0x2a93b3(0x73e,0x614,0x72b,0x3db)],_0x39251c);}else _0x35816e[_0x2a93b3(0x425,0x55c,0x922,0x726)](_0x11fad8,_0x24d87e,_0x16cf3d[_0x2a93b3(0xc62,0x5c1,0xac5,0xe98)][0x148f+-0x31c*0xb+0xda6][_0x2a93b3(0x7ce,0xfb4,0xc26,0xbac)],_0x5ed9de[_0x571d25(0x177,-0xfd,0x542,0x35b)](),_0x4209f1);});});}catch(_0x33a185){reply(mess[_0x128a37(0x302,0x3cd,0x3f0,0x69b)][_0x4963f8(0x94a,0x6c1,0x639,0x98d)]);}}await limitAdd(sender,limit);break;case _0x128a37(0x8ab,0x6cb,0x959,0x8ca):const _0x15a214={};_0x15a214[_0x128a37(0xa36,0xee8,0xff8,0xc3a)+'t']=_0x128a37(0xb03,0xff5,0xca9,0xdc2)+'t';const _0xd0f7fe={};_0xd0f7fe[_0x4963f8(0x6b0,0xd10,0xa74,0x7b4)]='limit',_0xd0f7fe[_0x128a37(0x300,0x71e,0xbb6,0x76e)]=_0x15a214,_0xd0f7fe[_0x4963f8(0xef4,0xeb6,0xce9,0x939)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x1014,0xa75,0x910,0xd8b)](prefix),'©\x20'+ownername,[_0xd0f7fe]);try{reply(lang['wait']());let ksjz=q,yut=await yts(ksjz);yta(ksjz)[_0x128a37(0x9a7,0x875,0x11d0,0xc92)](_0x3037c5=>{function _0x3c38c3(_0x23336e,_0x36c4e0,_0x215c04,_0x4a454a){return _0x128a37(_0x23336e-0x1a4,_0x23336e,_0x215c04-0x58,_0x215c04- -0x385);}function _0x55cefd(_0x52b048,_0x1f3afc,_0x2825ef,_0x5147a0){return _0x128a37(_0x52b048-0x1dd,_0x52b048,_0x2825ef-0x24,_0x5147a0- -0x296);}const _0x3c7b85={'qbiUI':function(_0x55d721,_0x2d2453){return _0x55d721(_0x2d2453);},'szpEX':_0x55cefd(0xc9f,0x8ae,0xd5b,0xa02),'ciPZs':function(_0x397e28,_0x522e90,_0x42542f){return _0x397e28(_0x522e90,_0x42542f);},'SCoqC':_0x55cefd(0x494,0x63f,0x48a,0x94f)+'=0.9','GezzQ':_0x3c38c3(-0x1d5,0x329,0x176,0x23c),'UiTYF':'active','PvaXu':_0x55cefd(0x540,0x5e4,0x930,0x55c)+'w.pinteres'+'t.com/','rpJse':_0x3c38c3(-0xc5,-0x1a2,0x1c4,-0x259),'QwwRe':_0x3c38c3(-0x101,0x5f6,0x276,0x64a),'rWBpq':'xrKdz','RngPa':function(_0x1a4633,_0x4b3271){return _0x1a4633>=_0x4b3271;},'OcaBm':function(_0x511ee3,_0x261999){return _0x511ee3(_0x261999);},'Bplor':function(_0x5a3364,_0x312ec9,_0x4b4523,_0x577b49){return _0x5a3364(_0x312ec9,_0x4b4523,_0x577b49);}},{dl_link:_0x528e90,thumb:_0x3f31ff,title:_0x1d2fd2,filesizeF:_0x2c89f8,filesize:_0x1a9762}=_0x3037c5;axios[_0x3c38c3(0x50d,0x5d0,0x24f,0x6c5)]('https://ti'+_0x55cefd(0x77a,0x3f8,0x6b,0x276)+_0x3c38c3(0x4ff,0xe17,0x9b3,0x6f4)+'.php?url='+_0x528e90)['then'](async _0x1d40a6=>{function _0x98f067(_0x43c63c,_0x292741,_0x1d388f,_0x4fb72a){return _0x3c38c3(_0x43c63c,_0x292741-0x106,_0x1d388f-0x52,_0x4fb72a-0x1bf);}const _0x62bc8e={'zzmqf':function(_0x3b37cb,_0x1e0549,_0x14979c){function _0x5fa382(_0x54122e,_0x15fbf7,_0x123fc3,_0x50c87){return _0xf809(_0x15fbf7- -0x324,_0x123fc3);}return _0x3c7b85[_0x5fa382(0x7d1,0x2c3,0x103,0x61a)](_0x3b37cb,_0x1e0549,_0x14979c);},'zzvBd':_0x98f067(0xd45,0x624,0x844,0x8dc)+_0x98f067(0x937,0x87e,0x451,0x1c)+_0x98f067(0xf7,0x933,0x526,0x423)+_0x98f067(0x99f,0x94a,0xba3,0xeff)+_0x98f067(0x164,-0x35,0x20c,0xcf),'rgaqi':_0x3c7b85['SCoqC'],'OKJcR':_0x3e6d8f(0x3a,0x11a,0x4d4,0x49),'TRjNS':_0x3c7b85[_0x3e6d8f(0xb08,0x6ea,0x668,0x13d)],'rveXj':'same-origi'+'n','ImfLh':_0x3e6d8f(0x91f,0x99d,0xd35,0xea6),'IqUDb':_0x3c7b85[_0x3e6d8f(0xecb,0xdaa,0xa39,0xc7e)],'CxYdg':_0x3c7b85['PvaXu'],'ZymgM':_0x3c7b85[_0x3e6d8f(0x992,0xb6a,0x845,0x647)],'bhpZr':_0x98f067(0x4c8,0x59a,0x328,0x5c1)};function _0x3e6d8f(_0x413ced,_0x1b133c,_0x292168,_0x77ab39){return _0x3c38c3(_0x413ced,_0x1b133c-0x13b,_0x292168-0x2cc,_0x77ab39-0x149);}if(_0x3c7b85['QwwRe']!==_0x3c7b85['rWBpq']){if(_0x3c7b85[_0x98f067(0x824,0x3d6,0x8c5,0x686)](_0x3c7b85[_0x3e6d8f(0xad9,0x1ad,0x5e8,0x8a5)](Number,_0x1a9762),0x29*0x42b+-0xc70c+0x9159))return _0x3c7b85[_0x3e6d8f(0xb72,0xb6f,0xd6f,0xfe9)](sendMediaURL,from,_0x3f31ff,'*🎧\x20P\x20L\x20A\x20Y'+_0x98f067(0xe7f,0x81a,0xa0b,0x656)+_0x98f067(0x68b,0x383,0x675,0x8f5)+_0x1d2fd2+(_0x98f067(0xd5b,0xf5d,0xbef,0xbb8)+_0x98f067(0x292,-0x3d,0x2e1,0x456))+yut['videos'][-0x1178+0xc8d+-0x4eb*-0x1]['videoId']+('\x0a🚀\x20Upload\x20'+':\x20')+yut[_0x3e6d8f(0x2d1,0x8e5,0x650,0x85e)][-0x5*0xbc+-0x1913+0x1cbf][_0x98f067(0x4b2,0x512,0x313,0x80a)]+(_0x3e6d8f(0xc2a,0x8c7,0xc10,0xb24)+'\x20')+_0x2c89f8+_0x98f067(0x6f4,0x6c5,0x269,-0x2d0)+yut[_0x3e6d8f(0xa04,0x651,0x650,0x11d)][-0x2*-0x2e3+0x5d*-0x49+0x14bf*0x1][_0x98f067(0x7e1,0x873,0x7c6,0xb8c)]+(_0x3e6d8f(0x12cb,0xb5a,0xdaa,0x1066)+_0x98f067(0x71f,0x5fc,0x3db,0x44d))+yut[_0x3e6d8f(0x703,0x554,0x650,0x3dd)][-0x2*-0x6f0+0x1614+0xc*-0x2ff][_0x98f067(0x5b8,0xd5,0x2d2,0x5ec)]+_0x98f067(0xccd,0x2fd,0x81e,0x953)+yut[_0x3e6d8f(0x1ba,0x987,0x650,0x12b)][-0xfcd+-0x1*0xe25+0x1df2][_0x98f067(0x78f,0x6c6,0xa25,0x707)]+('\x0a\x0a_For\x20the'+_0x3e6d8f(0x712,0x9e0,0x9d3,0x980)+'of\x20more\x20th'+_0x3e6d8f(0x732,0x8cd,0x4c9,-0x80)+_0x98f067(0x47e,0x28f,0x558,0x930)+_0x98f067(0xa27,0x1e0,0x55a,0x692)+_0x98f067(0x215,-0xdf,0x317,0x281)+_0x98f067(0xa27,0x227,0x72b,0x7b7)));sendMediaURL(from,_0x528e90,'')['catch'](_0x160466=>{function _0xca2e79(_0x4b658e,_0x12df45,_0x20219d,_0x3d196c){return _0x98f067(_0x3d196c,_0x12df45-0x118,_0x4b658e- -0x2cd,_0x3d196c-0xfe);}function _0x4af49a(_0x520a83,_0x59514e,_0x56c17d,_0x4536a8){return _0x98f067(_0x520a83,_0x59514e-0x1d1,_0x59514e- -0x3bc,_0x4536a8-0xf2);}_0x3c7b85[_0xca2e79(0x6bd,0x732,0x3cc,0x74a)](reply,_0x3c7b85[_0x4af49a(0x417,0x310,0x7f4,0x3b4)]);});}else{const _0x4b76a6={'oexKg':function(_0x7d3a23,_0x1863a3){return _0x7d3a23*_0x1863a3;},'fcPKZ':function(_0x24bb11,_0x158624){return _0x24bb11(_0x158624);}};_0x62bc8e['zzmqf'](_0x5c1ed0,'https://ww'+'w.pinteres'+'t.com/reso'+_0x3e6d8f(0x967,0x6af,0x6c7,0x4a3)+_0x3e6d8f(0xbe4,0x1060,0xea8,0xd49)+'rce/get/?s'+_0x3e6d8f(0x1d9,0x778,0x55a,0x5ef)+_0x3e6d8f(0xa1c,0x89d,0xa4a,0x82d)+_0x3e6d8f(0x1ff,0x94d,0x609,0x512)+_0x3e6d8f(0xc4e,0xf83,0xd26,0xf2e)+_0x7dc656+('&data=%7B%'+_0x3e6d8f(0xe73,0x92f,0xd28,0xfed)+_0x98f067(0xb01,0x7a9,0x74c,0x529)+_0x3e6d8f(0xb36,0xb55,0xa8f,0xfca)+'h%22%3Afal'+'se%2C%22qu'+'ery%22%3A%'+'22')+_0x4495d8+(_0x3e6d8f(0x1356,0xc8c,0xeac,0xb52)+_0x98f067(0xbc9,0x72b,0xb71,0xe18)+_0x98f067(0x73b,0x8ec,0x40b,-0x11e)+'%2C%22no_f'+'etch_conte'+'xt_on_reso'+'urce%22%3A'+_0x3e6d8f(-0x119,-0xbe,0x433,0x4f5)+_0x98f067(0x5ff,0x3e2,0x4fa,0x1f5)+_0x3e6d8f(0xed1,0xb24,0xdf8,0x9f9)+_0x3e6d8f(0x98f,0x111a,0xd52,0xf32)+'6199803015'+'59'),{'headers':{'accept':_0x62bc8e[_0x3e6d8f(0x4d6,0x58d,0x9b7,0xa40)],'accept-language':_0x62bc8e[_0x98f067(-0x14b,0x296,0x31d,-0xef)],'cache-control':_0x3e6d8f(0x882,0xdb,0x4d4,0x1f5),'pragma':_0x62bc8e[_0x3e6d8f(0xd2a,0xbc6,0x9ad,0x4e7)],'sec-fetch-dest':'empty','sec-fetch-mode':_0x62bc8e['TRjNS'],'sec-fetch-site':_0x62bc8e[_0x3e6d8f(0x67d,0x983,0xa51,0xa87)],'sec-gpc':'1','x-app-version':_0x62bc8e['ImfLh'],'x-pinterest-appstate':_0x62bc8e[_0x98f067(0x274,-0x248,0x1da,0x392)],'x-requested-with':_0x3e6d8f(0x86a,0x80c,0x715,0xa62)+_0x98f067(0xb,0x752,0x50b,0x8b6)},'referrer':_0x62bc8e[_0x3e6d8f(0x533,0x6b0,0xa64,0xa06)],'referrerPolicy':_0x62bc8e['ZymgM'],'body':null,'method':_0x62bc8e[_0x3e6d8f(0xd57,0x59e,0xa45,0x6e7)],'mode':_0x62bc8e[_0x98f067(0x66e,0x653,0x2ea,-0x210)]})['then'](_0x2c0ca3=>_0x2c0ca3['json']())[_0x98f067(0xa6e,0xac4,0x95f,0x61d)](_0x4c8896=>{const _0x2822fc=_0x4c8896[_0x4ac455(0xc9f,0xcc1,0x8da,0xfd9)+'esponse'][_0x4ac455(0x660,0x729,0x2cf,0x9f2)][_0x6c2b49(0x8b1,0x768,0x67a,0x5ff)][_0x41e067[_0x4ac455(0xa30,0x607,0x205,0x7bd)](_0x4b76a6[_0x6c2b49(0x12b,0xa5,-0x1ea,-0x2c0)](_0x3ae4a1[_0x6c2b49(0x983,0x6a5,0x6c2,0x854)](),_0x4c8896[_0x4ac455(0xe84,0xcc1,0xe8a,0xdd1)+_0x6c2b49(0x53a,0xec,0x1f7,0x59d)][_0x6c2b49(0xcf,-0xb0,0x128,-0x19e)]['results'][_0x4ac455(0x8a8,0x85d,0x366,0x7d4)]))];var _0x119a7d=[];const _0x3bc888={};function _0x4ac455(_0x4ef29e,_0x5193a8,_0x3f2e3d,_0x1bb1eb){return _0x3e6d8f(_0x4ef29e,_0x5193a8-0x14f,_0x5193a8-0x18a,_0x1bb1eb-0x174);}_0x3bc888[_0x6c2b49(0x7c9,0x854,0x745,0xb8e)]=_0x2822fc['images'][_0x6c2b49(0x7d5,0x7c9,0x789,0x7fd)]['url'],_0x119a7d[_0x4ac455(0xb17,0xacb,0xdbf,0x72b)](_0x3bc888);function _0x6c2b49(_0x2bee94,_0x4518f8,_0x23c625,_0x439303){return _0x98f067(_0x439303,_0x4518f8-0x1e4,_0x2bee94- -0x256,_0x439303-0x75);}_0x4b76a6[_0x6c2b49(-0x4b,0x2ea,0x8e,-0x1a6)](_0x24840d,_0x119a7d);})[_0x98f067(0x704,0x195,0x693,0x2eb)](_0x5c7c8a);}});})[_0x128a37(0xa21,0x957,0x8f1,0x9c6)](_0xcbd278=>reply(''+_0xcbd278));}catch(_0x4ee4e9){console[_0x4963f8(0x4d7,0xd4c,0x9af,0x56b)](color('[PlayMp3]',_0x128a37(0xc8b,0xd1d,0xcf8,0xb36)),_0x4ee4e9);}await limitAdd(sender,limit);break;case _0x128a37(0xa06,0xe7f,0xb60,0x9d0):const _0x52dadf={};_0x52dadf[_0x4963f8(0xa27,0xb8f,0xb90,0xab7)+'t']=_0x4963f8(0x105f,0xe21,0xd18,0xcd0)+'t';const _0x43ef1c={};_0x43ef1c[_0x4963f8(0xa8e,0xa53,0xa74,0xc77)]='limit',_0x43ef1c['buttonText']=_0x52dadf,_0x43ef1c[_0x128a37(0xd77,0xced,0x905,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xf65,0xfd7,0xce1,0x86f)](prefix),'©\x20'+ownername,[_0x43ef1c]);try{reply(lang['wait']());let ksjjz=q,yut=await yts(ksjjz);yta(ksjjz)[_0x128a37(0xb85,0xeb4,0x8f0,0xc92)](_0x598e58=>{function _0x3051bf(_0x21477b,_0x39c7ae,_0x9b7cd8,_0x27220b){return _0x128a37(_0x21477b-0x1e2,_0x39c7ae,_0x9b7cd8-0xb0,_0x9b7cd8- -0x1);}const _0x4a936e={'IrSYO':function(_0x181307,_0x405193){return _0x181307(_0x405193);},'irzLv':_0x3051bf(0xbcc,0x795,0xc97,0x9c5),'zCBYQ':_0x3051bf(0xd27,0xfa9,0xf74,0x110f),'LtFSm':_0x3051bf(0xe21,0xd1f,0x9cd,0x6ce),'OCOZg':function(_0x300846,_0x271cfe,_0x4585be,_0x177a2d){return _0x300846(_0x271cfe,_0x4585be,_0x177a2d);},'KcMpF':_0x3051bf(0x73e,0x996,0xa42,0xc01)+_0x3b12e3(-0x16a,-0x60e,0x60,0x2ef)+_0x3051bf(0x9ae,0x492,0x884,0xad2),'MZNtl':'audio/mp3'};function _0x3b12e3(_0x2b0552,_0x205643,_0x3af67a,_0x54a341){return _0x4963f8(_0x3af67a,_0x205643-0x195,_0x2b0552- -0x607,_0x54a341-0x7a);}const {dl_link:_0x212d00,thumb:_0x2ac360,title:_0x323713,filesizeF:_0x305b76,filesize:_0x45367f}=_0x598e58;axios[_0x3051bf(0x15d,0x4af,0x5d3,0xa68)](_0x3051bf(0xfc7,0x83f,0xbee,0xebd)+'nyurl.com/'+_0x3051bf(0xedb,0xb63,0xd37,0x10a7)+_0x3b12e3(0x336,0xf3,0x46a,0x4e1)+_0x212d00)[_0x3051bf(0xdd1,0x882,0xc91,0x10d4)](async _0x2c7610=>{function _0x363a48(_0x1cd2ce,_0x2d9062,_0x30ab2b,_0x51e3fa){return _0x3b12e3(_0x2d9062-0x3b,_0x2d9062-0x199,_0x1cd2ce,_0x51e3fa-0x179);}function _0x4f8077(_0x1dd34f,_0x344b1c,_0x52bbf3,_0x271e97){return _0x3b12e3(_0x1dd34f-0x55a,_0x344b1c-0x21,_0x52bbf3,_0x271e97-0x137);}if(_0x4a936e[_0x363a48(0x7b6,0x69f,0x6d4,0x816)]===_0x4a936e[_0x4f8077(0x4c0,0x293,0x6a2,0x611)])_0x4a936e['IrSYO'](_0x1e30f0,_0x4a936e[_0x363a48(-0x5c2,-0xe3,-0x5f9,0x165)]);else{if(_0x4a936e[_0x4f8077(0x446,0x496,0x369,0x52d)](Number,_0x45367f)>=-0xbf86*-0x1+-0x4f*-0x37+-0x5b4f)return _0x4a936e[_0x363a48(0x350,0x789,0x9dd,0xc6c)](sendMediaURL,from,_0x2ac360,_0x363a48(-0x35,0xec,-0x397,0x4fc)+'\x20\x20M\x20P\x203*\x0a\x0a'+_0x4f8077(0x851,0x519,0xb79,0x869)+_0x323713+(_0x363a48(0x2ed,0x270,-0x12c,0x5f3)+'P3\x0a🆔\x20ID\x20:\x20')+yut[_0x363a48(0x258,0x93,-0x2e6,0x4e8)][-0x3*-0x192+0x1*-0xb5d+0x83*0xd]['videoId']+(_0x363a48(-0x4a,0xb8,0x3c3,0x1bc)+':\x20')+yut[_0x363a48(0x1c4,0x93,-0x26c,0x258)][-0x1d84+0x1*-0x471+0x1*0x21f5][_0x4f8077(0x4ef,0x5e,0x314,0x625)]+(_0x363a48(0xad4,0x653,0x525,0x277)+'\x20')+_0x305b76+'\x0a🍃\x20Views:\x20'+yut['videos'][0x2318+0xdab*-0x1+0x1*-0x156d][_0x363a48(0x55b,0x483,0x602,0x57e)]+(_0x4f8077(0xd0c,0x10ba,0x908,0xd97)+_0x4f8077(0x5b7,0x350,0x3ec,0x5dd))+yut[_0x4f8077(0x5b2,0x58a,0x8a,0xa7e)][0x15a*0x13+0x150b+-0x2eb9][_0x363a48(0x1ec,-0x71,-0x432,-0x359)]+_0x363a48(0x24e,0x4db,0x8e8,0x167)+yut[_0x363a48(0x32b,0x93,-0x4a8,-0x222)][-0x107c+-0x1*-0x1b1f+-0xaa3*0x1]['url']+(_0x363a48(0x37c,0x27f,-0xfc,0x42e)+_0x363a48(0x7cd,0x416,0x37e,0x235)+_0x4f8077(0x996,0xa65,0x5fa,0xcdb)+_0x363a48(0x366,-0xf4,0x316,-0x3b3)+'it\x20is\x20pres'+_0x363a48(-0x138,0x217,-0x1d,0x136)+_0x363a48(-0x36b,-0x2c,0x39b,-0x357)+_0x4f8077(0x907,0x75e,0xaa0,0xd74)));let _0x318fbf=await _0x4a936e[_0x363a48(-0x8b,-0xd9,0xa2,-0x449)](getBuffer,_0x212d00);const _0x699730={};_0x699730['mediaUrl']=_0x4a936e[_0x4f8077(0x51c,0x7e2,0x671,0x8aa)],_0x699730[_0x4f8077(0xc31,0xbb3,0x111d,0x1165)]=0x2,_0x699730['title']=_0x4f8077(0x47a,-0x72,0x2c3,0xa0)+'3',_0x699730[_0x4f8077(0x4b1,0x18d,0x373,0x539)]='',_0x699730['thumbnailU'+'rl']='',_0x699730['thumbnail']=pp_userz;const _0x23a032={};_0x23a032[_0x4f8077(0x7e8,0xa21,0xc88,0x571)+_0x4f8077(0xd71,0xf4f,0xcba,0xb37)]=0x3b9aca00,_0x23a032[_0x363a48(0x1d,0x39c,0x49,0x880)+'d']=!![],_0x23a032['sendEpheme'+_0x363a48(0x35c,-0x12a,0x76,0x1c1)]=!![],_0x23a032[_0x363a48(0x4ce,0x367,-0x71,0x14f)+_0x363a48(0x619,0x3d1,0x462,0xe2)]=_0x699730;const _0x56dc7f={};_0x56dc7f['contextInf'+'o']=_0x23a032,_0x56dc7f[_0x363a48(0x634,0x25e,0x31,-0x27b)]=_0x4a936e[_0x363a48(0xc3a,0x845,0xb6f,0x742)],_0x56dc7f[_0x4f8077(0xa9d,0xd08,0xef4,0xc04)]=_0x323713+'.mp3',_0x56dc7f['quoted']=fgclink2,_0x56dc7f[_0x4f8077(0x8bd,0xa6b,0x47c,0x5d6)]=pp_bot2,alpha[_0x363a48(0x2c9,0x683,0x83b,0x517)+'e'](from,_0x318fbf,MessageType[_0x4f8077(0x706,0x37f,0x75e,0x5a9)],_0x56dc7f);}});})[_0x4963f8(0x648,0xd3c,0x91c,0x9f3)](_0x15c5f8=>reply(''+_0x15c5f8));}catch(_0x474a17){console[_0x4963f8(0x6cf,0x75d,0x9af,0x8d7)](color(_0x4963f8(0x277,0x1ac,0x502,0x51d),_0x128a37(0xa2b,0x79a,0xfda,0xb36)),_0x474a17);}await limitAdd(sender,limit);break;case _0x4963f8(0x2ff,0x1d7,0x558,0x101):case _0x4963f8(0x1008,0xd9c,0xe7a,0x1233):case _0x128a37(0x992,0x98c,0x416,0x64d)+'tory':const _0x11967b={};_0x11967b[_0x128a37(0xb8f,0xfbd,0xa01,0xc3a)+'t']='Check\x20Limi'+'t';const _0x49de52={};_0x49de52[_0x4963f8(0xd0b,0xb34,0xa74,0xef9)]=_0x4963f8(0xc0b,0x7b2,0xce1,0xc7b),_0x49de52[_0x128a37(0x2ac,0xbb0,0x858,0x76e)]=_0x11967b,_0x49de52[_0x4963f8(0x971,0x11eb,0xce9,0x1170)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xbff,0x9f2,0x104d,0xd8b)](prefix),'©\x20'+ownername,[_0x49de52]);if(!q)return reply(_0x4963f8(0x397,0xbcc,0x8b7,0x979)+'a?');pape=q,hx[_0x128a37(0x8d7,0x873,0x491,0x602)](pape)[_0x4963f8(0xcfc,0x9ba,0xbe8,0xe3d)](async _0x1a2a02=>{function _0xaba81d(_0x9da26c,_0x1efa48,_0x1aac09,_0x3247c4){return _0x4963f8(_0x9da26c,_0x1efa48-0x107,_0x1aac09- -0x46e,_0x3247c4-0x144);}const _0x450aa0={'lMmjF':function(_0x3cf358,_0x116f22){return _0x3cf358(_0x116f22);}};let _0xb9f003=await _0x450aa0[_0x58e45b(0xdf0,0xb75,0x8cb,0xd86)](getBuffer,_0x1a2a02[_0x58e45b(0x6ac,0x853,0x9e9,0x58a)]['profilePic'+_0x58e45b(0x9fa,0x985,0x695,0xa03)]);function _0x58e45b(_0x2ab2d2,_0x18afe0,_0x4daa3e,_0x5dfa17){return _0x4963f8(_0x4daa3e,_0x18afe0-0x127,_0x2ab2d2-0xfa,_0x5dfa17-0xc8);}await alpha['sendMessag'+'e'](from,_0xb9f003,image,{'thumbnail':_0xb9f003,'quoted':mek,'caption':_0x58e45b(0x979,0x81b,0xe97,0xce4)+_0xaba81d(0x5ff,0xdc,0x520,0x629)+'」'+enter+enter+_0x58e45b(0xaf8,0xb4f,0xeb5,0x6d4)+_0x1a2a02['user']['id']+enter+(_0x58e45b(0xf45,0x1115,0xb3e,0xcc3)+_0xaba81d(0x9ad,0x229,0x578,0x9b7))+_0x1a2a02[_0x58e45b(0x6ac,0x322,0x87e,0x741)][_0xaba81d(0xc7,0x132,0x25e,0x62f)]+enter+(_0x58e45b(0x783,0xc3d,0x452,0x453)+'e\x20:*\x20')+_0x1a2a02[_0x58e45b(0x6ac,0x64a,0x54f,0x240)][_0x58e45b(0xb74,0xcf5,0xe1e,0xad1)]+enter+(_0x58e45b(0xb84,0xe6d,0x6e7,0xb0a)+'rs\x20:*\x20')+_0x1a2a02[_0x58e45b(0x6ac,0x79a,0x711,0x50d)]['followers']+enter+(_0x58e45b(0xe30,0x128e,0xa43,0xe57)+_0x58e45b(0xf3e,0x1106,0x1386,0xd58))+_0x1a2a02['user'][_0xaba81d(0x34f,-0x32d,0x3d,0x182)]+enter+(_0x58e45b(0xa19,0xc74,0x7dd,0x9df)+_0xaba81d(0x770,-0x54,0x32c,0x63a)+_0x58e45b(0x7e0,0xcf9,0x38a,0xc7c)+_0xaba81d(0x76c,0x297,0x404,0x86f))+_0x1a2a02[_0xaba81d(0x420,0x665,0x144,0x562)][_0xaba81d(0x1b1,0x55e,0x25e,0x69b)]+enter+(_0xaba81d(0x224,0x4ef,0x609,0x255)+'*\x20')+_0x1a2a02[_0xaba81d(0x99c,0x9d7,0x6df,0x60b)][_0xaba81d(-0xad,0x22b,0x274,0x5b8)]+_0xaba81d(0x28b,0xa4b,0x696,0x14a)+enter+enter+(_0xaba81d(0x3ae,0x12c,0x32a,-0x83)+_0xaba81d(-0xf8,-0x318,0x1,-0xd4)+_0xaba81d(0x540,0x4ff,0x15e,-0x1de)+_0x58e45b(0xa0a,0xd39,0x680,0xdad)+'_')});for(let _0x456d39 of _0x1a2a02[_0x58e45b(0xc47,0xc19,0xa38,0xa9e)]){if(_0x456d39[_0xaba81d(0x6c1,0x786,0x840,0x4e1)][_0xaba81d(0x0,0x32c,0x25c,0x3da)]('mp4')){let _0x36eb97=await getBuffer(_0x456d39[_0x58e45b(0xda8,0x8a2,0x107a,0xe50)]);alpha[_0x58e45b(0xd49,0x1079,0xc11,0xfe3)+'e'](from,_0x36eb97,video,{'thumbnail':Buffer[_0x58e45b(0x61b,0x516,0x460,0x916)](0x1951*0x1+-0x64e*-0x4+-0x3289),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x456d39[_0x58e45b(0xde3,0xeea,0xbf2,0x116a)]});}else{let _0x1c7035=await _0x450aa0['lMmjF'](getBuffer,_0x456d39[_0xaba81d(0x3ce,0x5d4,0x840,0x96a)]);alpha[_0xaba81d(0x7b0,0x588,0x7e1,0xb16)+'e'](from,_0x1c7035,image,{'thumbnail':Buffer[_0xaba81d(-0xc,-0x2d0,0xb3,-0x43a)](-0x7*0x13+-0x12f6+-0x137b*-0x1),'quoted':mek,'caption':_0xaba81d(-0x1d2,-0x1a,0x378,0x5c4)+'•\x20'+_0x456d39[_0x58e45b(0xde3,0xa28,0xc10,0x9e0)]});}}})[_0x4963f8(0xdab,0xae1,0x91c,0xe66)](_0xad97fa=>reply(_0x4963f8(0xed7,0x956,0xbaa,0x65b)+_0x128a37(0xb77,0x90c,0xb36,0xda4)+_0x4963f8(0x94b,0x71b,0x850,0x4a4)+_0x128a37(0x17,0x2c8,0x1a4,0x509)+_0x4963f8(0x3fd,0x1c7,0x5f9,0x766)+'ma'));break;case'ig':case _0x128a37(0x3cc,0x591,0x79b,0x644):case _0x4963f8(0x904,0xf76,0xafc,0x1002):case _0x128a37(0x12b6,0x9ab,0xea6,0xe8b):case _0x4963f8(0x943,0xfeb,0xc69,0xe89):case _0x128a37(0xc0e,0x81b,0xb3b,0xae7):case _0x4963f8(0x2fd,0x337,0x7b1,0x5fb):case _0x128a37(0xb33,0x709,0x10f5,0xc0d):case _0x128a37(0x5d6,0x53e,0xbd3,0x804):case _0x4963f8(0x4a6,0x46c,0x956,0x548):case _0x4963f8(0x6b7,0x26c,0x6f9,0xa13):case _0x128a37(0xb32,0x9bb,0x22e,0x6ba):case _0x4963f8(0x2d1,0x920,0x50f,0x3d1):case _0x4963f8(0x612,0xa9c,0x594,0x70c):const _0x5b5e44={};_0x5b5e44[_0x128a37(0xf14,0x863,0xe3b,0xc3a)+'t']='Check\x20Limi'+'t';const _0x1fd1af={};_0x1fd1af[_0x128a37(0xbad,0x9fa,0x9c2,0xb1e)]=_0x128a37(0xf87,0x1015,0x1101,0xd8b),_0x1fd1af['buttonText']=_0x5b5e44,_0x1fd1af[_0x4963f8(0x85d,0x862,0xce9,0x1154)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x1278,0x9c3,0xef8,0xd8b)](prefix),'©\x20'+ownername,[_0x1fd1af]);if(!isUrl(args[-0x13ff+0xc*-0x1c4+0x292f])&&!args[0x149c+-0x3*-0x6df+-0x3d*0xad]['includes'](_0x4963f8(0xa87,0x929,0xc92,0x9a3)+_0x128a37(0xbec,0xc71,0x710,0xb0d)))return reply(lang[_0x4963f8(0x7c9,0xbe3,0x97a,0xe84)]());let urlnya=q;hx[_0x4963f8(0x1be,0x63a,0x59a,0x2a7)](urlnya)[_0x128a37(0x943,0xb5c,0xebe,0xc92)](async _0x53633b=>{function _0xa08ddd(_0x23a52c,_0x2dbe8b,_0xda5930,_0x2f6b56){return _0x128a37(_0x23a52c-0x65,_0xda5930,_0xda5930-0x13a,_0x23a52c- -0x4f0);}function _0x5f5d27(_0x397122,_0x226f96,_0x5d0d86,_0x128b97){return _0x4963f8(_0x397122,_0x226f96-0x16,_0x5d0d86- -0x449,_0x128b97-0x1ad);}const _0x4f69a5={'RDUwD':function(_0x161502,_0x4bbcef){return _0x161502(_0x4bbcef);},'FBWqD':'Terjadi\x20ke'+_0xa08ddd(0x484,-0xcb,0x3de,0x60e)+_0x5f5d27(0x3cb,0x96d,0x6a0,0x8e3)+'pa\x20saat\x20la'+'gi','PLcrM':function(_0x37a93f,_0x361dd2){return _0x37a93f!==_0x361dd2;},'vAcKg':_0xa08ddd(0x464,0x822,0x740,0x506),'eyxyz':_0x5f5d27(0x977,0x718,0x6c2,0x73e),'KxeGQ':function(_0x66c54e,_0x16f13d){return _0x66c54e===_0x16f13d;},'HJNcZ':_0x5f5d27(0x438,0x4db,0x51b,0x89e),'auvJQ':'hGlgw'};let _0x502e98=await getBuffer(_0x53633b[_0xa08ddd(0x16c,0x1cf,0x61a,0x6b)][_0xa08ddd(0x585,0x281,0x386,0x2b3)+_0xa08ddd(0x4ba,-0x77,0x6f2,0x858)]);await alpha[_0x5f5d27(0x2e0,0x4e0,0x806,0xb76)+'e'](from,_0x502e98,image,{'thumbnail':_0x502e98,'quoted':mek,'caption':'「\x20*INSTAGR'+_0x5f5d27(0x21c,0x3df,0x122,0x351)+'DER*\x20」'+enter+enter+_0x5f5d27(0x2fc,0xaf0,0x5b5,0x2bd)+_0x53633b[_0x5f5d27(0x65,0x3c,0x169,-0x1da)]['id']+enter+(_0xa08ddd(0xa05,0x7fe,0x763,0xdd9)+_0xa08ddd(0x5a0,0x2bc,0x248,0x8df))+_0x53633b[_0x5f5d27(-0x21f,-0xa3,0x169,-0x2f7)]['username']+enter+('💋\x20*Fullnam'+_0x5f5d27(0x6db,0xa98,0x59d,0x76))+_0x53633b[_0xa08ddd(0x16c,-0x22,-0x377,0x376)]['fullName']+enter+(_0x5f5d27(0x3e9,0x835,0x641,0x16f)+'rs\x20:*\x20')+_0x53633b[_0x5f5d27(-0x1fe,0x4ba,0x169,0xa)][_0xa08ddd(0x95d,0xbbe,0xc2d,0x7ca)]+enter+(_0x5f5d27(0xe24,0x6c5,0x8ed,0x6c0)+_0xa08ddd(0x9fe,0xba5,0x9b4,0x643))+_0x53633b[_0xa08ddd(0x16c,0x529,0x105,0x382)]['following']+enter+('*🔗\x20Link\x20:*'+_0xa08ddd(0x354,0x698,0x7db,-0x183)+_0xa08ddd(0x2a0,0x5a7,0x83,0x5e)+_0x5f5d27(0x903,-0x32,0x429,0x872))+_0x53633b['user'][_0xa08ddd(0x286,0xc8,0x17c,-0x75)]+enter+('*💢\x20Total\x20:'+'*\x20')+_0x53633b[_0xa08ddd(0x707,0x7e7,0x6ea,0xadf)][_0x5f5d27(0x101,-0x1c8,0x299,0x82)]+_0xa08ddd(0x6be,0x861,0x9b7,0x870)+enter+enter+(_0x5f5d27(0x3ab,-0x56,0x34f,0x705)+'berapa\x20saa'+_0xa08ddd(0x186,0x5fe,0x59d,-0x24)+_0x5f5d27(0x47d,0x9f0,0x4c7,0x7f4)+'_')});for(let _0x2b142b of _0x53633b[_0x5f5d27(0x305,0xbe5,0x704,0xb71)]){if(_0x4f69a5[_0xa08ddd(0x1e0,0x135,-0x7e,0x30)](_0xa08ddd(0x464,-0x3d,0x77a,0x532),_0x4f69a5['vAcKg']))_0x14e0da[_0xa08ddd(0x809,0x9fe,0x89e,0x633)+'e'](_0x4e20f8,_0x285938,_0x38aa25,{'quoted':_0x2317d7,'contextInfo':{'externalAdReply':{'title':''+_0x26d62b,'body':''+_0x5bc970,'previewType':_0x5f5d27(0x5f2,0x88a,0xa0a,0xedf),'thumbnailUrl':'','thumbnail':_0x1251e1['readFileSy'+'nc'](_0xa08ddd(0x8c0,0xdda,0x8c8,0x7f1)+_0x4d9754),'sourceUrl':''+_0x4d96fc}}});else{if(_0x2b142b['url']['includes'](_0x4f69a5[_0x5f5d27(0x478,0x45c,0x5e1,0xaf7)])){let _0x3ac512=await getBuffer(_0x2b142b[_0x5f5d27(0xc79,0xa3e,0x865,0x91a)]);alpha['sendMessag'+'e'](from,_0x3ac512,video,{'thumbnail':Buffer[_0xa08ddd(0xdb,-0x1ab,0x533,0x624)](-0x1*-0x342+0x4a*-0x84+0x22e6),'quoted':mek,'caption':_0x5f5d27(0x6b,0x212,0x39d,0x390)+_0x5f5d27(0x98,-0x2ee,0x57,-0x2f4)+_0x2b142b[_0xa08ddd(0x8a3,0x72e,0x451,0x687)]});}else{if(_0x4f69a5[_0x5f5d27(0x638,-0x1ae,0x1da,0x231)](_0x4f69a5[_0xa08ddd(0x74e,0xa8e,0xbd3,0x8de)],_0x4f69a5[_0x5f5d27(0xab3,0x38b,0x662,0x20b)]))_0x4f69a5[_0x5f5d27(-0x22f,0x712,0x272,0x4a8)](_0x5b30eb,_0x4f69a5['FBWqD']);else{let _0x2f6897=await getBuffer(_0x2b142b[_0x5f5d27(0x887,0x84f,0x865,0xcce)]);alpha[_0x5f5d27(0xc83,0xa79,0x806,0xbe4)+'e'](from,_0x2f6897,image,{'thumbnail':Buffer[_0x5f5d27(0x22,0x156,0xd8,0x1df)](-0x1686+0xbcb*0x1+0x1*0xabb),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x2b142b['type']});}}}}})[_0x4963f8(0x3fe,0x91c,0x91c,0xe40)](_0x146c86=>reply('Link\x20tidak'+_0x128a37(0x9c1,0xf1c,0x104e,0xe37)+_0x128a37(0x79d,0x52f,0xbeb,0x97f)+_0x128a37(0x34f,0x279,0x71b,0x57a)+'te')),await limitAdd(sender,limit);break;case _0x128a37(0xa29,0x1315,0x132b,0xdfb):const _0x9e4b22={};_0x9e4b22['displayTex'+'t']=_0x128a37(0xf32,0x8f8,0xfd3,0xdc2)+'t';const _0x19ce04={};_0x19ce04[_0x4963f8(0xbb8,0xb90,0xa74,0x8ce)]=_0x4963f8(0xeb1,0x112f,0xce1,0xbe4),_0x19ce04[_0x128a37(0x816,0x58a,0x634,0x76e)]=_0x9e4b22,_0x19ce04[_0x128a37(0x10d0,0x11ac,0xa22,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x19ce04]);if(args[_0x128a37(0x351,0x2b6,0x7c3,0x78c)]<-0x27*-0x5a+-0x1*0x74b+-0x66a)return reply(lang[_0x4963f8(0x1f9,0x8d5,0x71c,0x788)](prefix,command));hhh=q,p=await getBuffer(_0x4963f8(0x7f6,0x76e,0x704,0xb20)+_0x128a37(0xc03,0xa28,0x75b,0x6df)+_0x4963f8(0xa8b,0x56a,0x6bd,0x9fc)+_0x4963f8(0x289,0x7bc,0x6c7,0x6ec)+'/ttpcustom'+'?text='+hhh+('&color=blu'+_0x4963f8(0x79a,0x58e,0x8cc,0xc7d)+_0x4963f8(0x906,0xebe,0xa94,0xb10)));const _0x5341c0={};_0x5341c0['quoted']=fgclink,alpha[_0x128a37(0xffb,0x8ce,0xb1c,0xcf9)+'e'](from,p,sticker,_0x5341c0),await limitAdd(sender,limit);break;case _0x4963f8(0x993,0x10f9,0xc5b,0x72f):const _0x3cca1c={};_0x3cca1c[_0x128a37(0xec4,0x79c,0x10d0,0xc3a)+'t']=_0x4963f8(0xf2c,0x995,0xd18,0x980)+'t';const _0x1dc02d={};_0x1dc02d[_0x128a37(0x61a,0x9df,0x8ce,0xb1e)]=_0x4963f8(0xcc4,0x8a8,0xce1,0xb60),_0x1dc02d[_0x4963f8(0x1a1,0x5cd,0x6c4,0x970)]=_0x3cca1c,_0x1dc02d[_0x4963f8(0xdfc,0x7bd,0xce9,0xb58)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xc96,0xad7,0xce1,0xfe7)](prefix),'©\x20'+ownername,[_0x1dc02d]);if(args[_0x128a37(0x6c7,0x936,0xb18,0x78c)]<-0x2222+0x25dc+-0x3b9)return reply(lang[_0x128a37(0x4b9,0x848,0xba9,0x7c6)](prefix,command));hhh=q,pp=await getBuffer(_0x128a37(0xc58,0x4b2,0xa6f,0x7ae)+_0x4963f8(0x588,0x8f1,0x635,0x584)+_0x128a37(0x4df,0x8d1,0x4d6,0x767)+_0x128a37(0xb16,0x4e2,0x7fe,0x771)+_0x128a37(0x9fb,0x764,0xbfd,0x7e1)+_0x4963f8(0xab1,0xb70,0xa98,0xedc)+hhh+('&color=yel'+'low&apikey'+'=hardianto'));const _0x5871bb={};_0x5871bb['quoted']=fgclink,alpha[_0x128a37(0xc3e,0xb11,0xf04,0xcf9)+'e'](from,pp,sticker,_0x5871bb),await limitAdd(sender,limit);break;case _0x4963f8(0xe07,0xe7c,0xc5d,0xc9f):const _0x17fe4f={};_0x17fe4f[_0x4963f8(0xc3d,0xdb0,0xb90,0x7a8)+'t']=_0x4963f8(0xfb2,0xf5f,0xd18,0xc51)+'t';const _0x5ce63e={};_0x5ce63e[_0x4963f8(0xf4c,0xaee,0xa74,0x72a)]=_0x4963f8(0xbeb,0xb85,0xce1,0x7bb),_0x5ce63e[_0x4963f8(0x91a,0x292,0x6c4,0x2e4)]=_0x17fe4f,_0x5ce63e[_0x4963f8(0xf4c,0xe4c,0xce9,0xfd1)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xa42,0xe20,0x12aa,0xd8b)](prefix),'©\x20'+ownername,[_0x5ce63e]);if(args[_0x128a37(0xb73,0x260,0x3c6,0x78c)]<-0x1*0x28d+-0x20*-0xb9+-0x1492)return reply(lang[_0x4963f8(0x245,0x8da,0x71c,0x3bf)](prefix,command));hhh=q,ppp=await getBuffer(_0x128a37(0x32a,0x8ae,0xb3e,0x7ae)+'rdianto-ch'+_0x128a37(0x6c8,0xa98,0x358,0x767)+'pp.com/api'+_0x128a37(0x3c1,0x67c,0x4b0,0x7e1)+_0x4963f8(0x6df,0xd91,0xa98,0xb79)+hhh+(_0x4963f8(0x1166,0x110d,0xd9f,0xf01)+_0x4963f8(0x84d,0xae4,0x73a,0x44b)+'rdianto'));const _0x2e27a1={};_0x2e27a1[_0x4963f8(0x70f,0x5f2,0x9c3,0x73c)]=fgclink,alpha[_0x128a37(0xf63,0x968,0xec2,0xcf9)+'e'](from,ppp,sticker,_0x2e27a1),await limitAdd(sender,limit);break;case _0x128a37(0x992,0x539,0x59d,0x62b):const _0x5ed3ed={};_0x5ed3ed[_0x128a37(0x893,0x1042,0xb9f,0xc3a)+'t']='Check\x20Limi'+'t';const _0x4bfdd2={};_0x4bfdd2[_0x4963f8(0x86c,0x7a8,0xa74,0xe4c)]=_0x4963f8(0x1203,0xc60,0xce1,0xc87),_0x4bfdd2[_0x128a37(0x318,0x836,0x443,0x76e)]=_0x5ed3ed,_0x4bfdd2[_0x128a37(0xb7e,0x9df,0xf54,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xca7,0x976,0xce1,0xc68)](prefix),'©\x20'+ownername,[_0x4bfdd2]);if(args[_0x128a37(0xbb7,0x892,0x55e,0x78c)]<0x2043+0x4*-0x683+-0x636)return reply(lang[_0x4963f8(0x1d3,0xaed,0x71c,0x1f2)](prefix,command));hhh=q,pppp=await getBuffer(_0x4963f8(0xb8c,0x5ea,0x704,0x635)+_0x4963f8(0x549,0x210,0x635,0x322)+_0x4963f8(0x787,0xa6c,0x6bd,0x1af)+'pp.com/api'+_0x4963f8(0xb06,0x6a9,0x737,0x8d7)+_0x128a37(0xf75,0x6a2,0xe3d,0xb42)+hhh+(_0x4963f8(0xa02,0xf18,0xbef,0xdaa)+_0x4963f8(0x116f,0x8b9,0xd69,0x1146)+_0x4963f8(0x6a6,0x7d9,0xa94,0xaed)));const _0x1704ab={};_0x1704ab[_0x4963f8(0x55f,0xd18,0x9c3,0xa94)]=fgclink,alpha[_0x4963f8(0x1009,0xb86,0xc4f,0xfc0)+'e'](from,pppp,sticker,_0x1704ab),await limitAdd(sender,limit);break;case _0x128a37(0x793,0xaf4,0x6fe,0xb81):case _0x128a37(0x185,0x535,0x60e,0x6a6):const _0x678ad2={};_0x678ad2['displayTex'+'t']=_0x4963f8(0x943,0xb75,0xd18,0xcf3)+'t';const _0x5bdae6={};_0x5bdae6[_0x128a37(0xd99,0xc7b,0x5fc,0xb1e)]=_0x128a37(0xce3,0xb42,0xb29,0xd8b),_0x5bdae6['buttonText']=_0x678ad2,_0x5bdae6[_0x4963f8(0x9ef,0xb36,0xce9,0x11b3)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xf75,0x1090,0x96b,0xd8b)](prefix),'©\x20'+ownername,[_0x5bdae6]);if(!isGroup)return reply(lang['onlygc']());var datax=fs['readFileSy'+'nc']('./lib/coup'+'le.js');jsonData=JSON[_0x4963f8(0x815,0x15f,0x5aa,0x773)](datax),randIndex=Math['floor'](Math[_0x4963f8(0xb65,0x921,0xe62,0xadc)]()*jsonData['length']);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_[_0x4963f8(0x8d6,0xde5,0xce6,0x10e8)]),await alpha[_0x4963f8(0xa04,0xf96,0xc4f,0x115d)+'e'](from,Laki,image,{'caption':_0x128a37(0x7b8,0x49b,0x490,0x58f),'quoted':mek,'thumbnail':Buffer[_0x128a37(0x8cd,0x80,0x1f8,0x5cb)](0x8f*-0x1f+0x17b*0x14+-0xc4b)}),Cewe=await getBuffer(randKey_[_0x4963f8(0x43f,0x594,0x819,0x557)]);const mediaxox=await alpha[_0x4963f8(0x10d,0x8c1,0x530,0xdc)+'sage'](from,Cewe,MessageType[_0x4963f8(0x9e1,0xda1,0x8ef,0x4bd)],{'thumbnail':Buffer[_0x128a37(0x51c,0xb06,0x4b8,0x5cb)](-0x16fc+-0x18f3*0x1+-0x2fef*-0x1)});let bacotluxxo=mediaxox[_0x4963f8(0xaab,0x749,0x5d9,0x524)][_0x128a37(0xbd1,0x4a3,0xbfa,0x99e)+_0x128a37(0x934,0xb3b,0xc16,0x7ec)]?mediaxox['message'][_0x4963f8(0x60c,0x535,0x8f4,0x3e6)+_0x4963f8(0xa78,0x942,0x742,0x27f)]:mediaxox;const _0x4dc9d5={};_0x4dc9d5[_0x4963f8(0xd0f,0xf23,0xb90,0x8b2)+'t']=_0x4963f8(0xeba,0x8e7,0xbd0,0xa0d);const _0x1c6c3b={};_0x1c6c3b[_0x128a37(0x894,0xacf,0xc39,0xb1e)]='owner',_0x1c6c3b[_0x128a37(0x9cd,0x7d2,0x997,0x76e)]=_0x4dc9d5,_0x1c6c3b['type']=0x1;const _0x30429b={};_0x30429b[_0x4963f8(0x8a0,0xd32,0xb90,0xda4)+'t']=_0x128a37(0x5c9,0xd1c,0xbac,0xa53);const _0x3f49d0={};_0x3f49d0[_0x4963f8(0x803,0xaa1,0xa74,0xf36)]=''+command,_0x3f49d0[_0x128a37(0xa8a,0x828,0x4bf,0x76e)]=_0x30429b,_0x3f49d0['type']=0x1;const buttonsxox=[_0x1c6c3b,_0x3f49d0],btnxo___={'contentText':_0x128a37(0xae0,0x56a,0x513,0x9d9),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x128a37(0xf68,0xcfe,0x86e,0xa6c)+_0x128a37(0xc21,0x997,0x581,0xa3b))+sender[_0x128a37(0x5ef,0x973,0xa93,0x581)]('@')[-0x215f*-0x1+0x694+0x3*-0xd51],'buttons':buttonsxox,'headerType':0x4,'imageMessage':bacotluxxo[_0x128a37(0x7f7,0xad0,0x8be,0x683)][_0x4963f8(0xdc1,0x971,0x940,0x801)+'ge']},_0x4946e1={};_0x4946e1['quoted']=mek,alpha[_0x4963f8(0x70f,0x7b0,0xc4f,0xb11)+'e'](from,btnxo___,MessageType[_0x4963f8(0x5ac,0xc9c,0x77d,0xc31)+_0x128a37(0xccc,0xc3d,0xd0e,0xcdd)],_0x4946e1)[_0x4963f8(0x529,0xb46,0x91c,0x570)](_0x36baaa=>{const _0x12767a={};_0x12767a['KFDUO']=_0x387a3c(0xbda,0xaee,0xc9b,0x7f0)+_0x1c20c9(0x448,0x52d,0x4a0,0x65d)+'oba\x20bebera'+_0x1c20c9(0xccf,0xa41,0xb5c,0x884)+'gi';const _0x2fbd12=_0x12767a;function _0x1c20c9(_0x3aa0c9,_0x5a3752,_0x102f79,_0x265c76){return _0x128a37(_0x3aa0c9-0x193,_0x265c76,_0x102f79-0xda,_0x5a3752- -0x447);}function _0x387a3c(_0x12e259,_0x48979b,_0x58bcf7,_0x280ef3){return _0x128a37(_0x12e259-0x49,_0x48979b,_0x58bcf7-0xcd,_0x58bcf7-0x47);}reply(_0x2fbd12['KFDUO']);}),await limitAdd(sender,limit);break;case'pinterest':case _0x128a37(0x9fc,0xbe3,0x133e,0xe0d):const _0x16d505={};_0x16d505[_0x4963f8(0x813,0x6fe,0xb90,0xe27)+'t']=_0x128a37(0x974,0xcab,0xe6b,0xdc2)+'t';const _0x2ccf30={};_0x2ccf30[_0x4963f8(0x7ef,0x8dc,0xa74,0xa20)]=_0x4963f8(0xa37,0xda6,0xce1,0x107f),_0x2ccf30[_0x4963f8(0x476,0x87f,0x6c4,0xbfa)]=_0x16d505,_0x2ccf30[_0x4963f8(0xd24,0xf8e,0xce9,0x83e)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xa99,0x1168,0xce1,0x798)](prefix),'©\x20'+ownername,[_0x2ccf30]);if(!q)return reply('Masukkan\x20q'+_0x128a37(0x974,0x709,0x8cb,0xa51));async function pinterestSearch(_0x3143d2){const _0xdf7005={'XgNDV':function(_0x5bd25c,_0x1d9fdc){return _0x5bd25c*_0x1d9fdc;},'IPdqO':function(_0x5a0bc9,_0x514441,_0x41fca4){return _0x5a0bc9(_0x514441,_0x41fca4);},'fbZYX':_0x58bffe(0xd4f,0x8aa,0xdb3,0x8b5)+_0x58bffe(0xf1b,0xb9e,0xeda,0xc43),'oeEMP':_0x1c8661(0x534,0x2c4,0xa1b,0x500),'KyTIP':'empty','kzRvR':_0x1c8661(0x93d,0xb1f,0xa90,0xd61),'IZKIS':'XMLHttpReq'+_0x1c8661(0x331,0x3b0,0xbc8,0x7b1),'EGGJf':'https://ww'+'w.pinteres'+_0x1c8661(0x59a,0xc2b,0x5be,0x790),'CzQBB':_0x58bffe(0x1ae,0x1cf,-0xc3,0x219),'vWhdD':'GET','dioei':_0x58bffe(-0x1b9,0x613,0x5db,0x1cb)};function _0x1c8661(_0x179998,_0x35bf57,_0x2f9bc0,_0x9a1a3){return _0x4963f8(_0x179998,_0x35bf57-0x197,_0x9a1a3-0x1d,_0x9a1a3-0x1c4);}function _0x58bffe(_0x193ee6,_0x11d09c,_0x301604,_0x1a3c2f){return _0x128a37(_0x193ee6-0x161,_0x193ee6,_0x301604-0x1e5,_0x1a3c2f- -0x330);}return new Promise((_0x37a1e2,_0x3bc11a)=>{function _0xb1dd8c(_0x43b1d0,_0x23960a,_0x24937d,_0x14208b){return _0x58bffe(_0x43b1d0,_0x23960a-0x90,_0x24937d-0x17b,_0x23960a- -0xb2);}const _0xb8471f={'fSAIP':function(_0x3e8fa4,_0x12c300){function _0x2f5d93(_0x368ad0,_0x5dc959,_0x1ac3fa,_0x44e56e){return _0xf809(_0x368ad0- -0xa6,_0x5dc959);}return _0xdf7005[_0x2f5d93(0x759,0x43e,0x238,0x9cb)](_0x3e8fa4,_0x12c300);},'dfsvu':function(_0x79b5c0,_0x4fcde1){return _0x79b5c0(_0x4fcde1);}};function _0x894834(_0x20ebc6,_0x4c6554,_0x2d1676,_0x40eeef){return _0x1c8661(_0x20ebc6,_0x4c6554-0x4e,_0x2d1676-0x3a,_0x2d1676-0xa8);}_0xdf7005[_0xb1dd8c(0x377,0x379,0x781,0x513)](fetch,_0xb1dd8c(0x263,0x410,0x46,0x73e)+_0x894834(0xaac,0x114b,0xc81,0x8bb)+_0x894834(0x55d,0xc8d,0x920,0x5e1)+_0xb1dd8c(0x26a,0x39e,0x7e,0x34f)+'earchResou'+_0x894834(0xc34,0xbe3,0xd98,0xc11)+'ource_url='+_0xb1dd8c(0xc6b,0x721,0x4c9,0x86c)+'2Fpins%2F%'+_0xb1dd8c(0x642,0x9fd,0x9bd,0x724)+_0x3143d2+(_0xb1dd8c(0x580,0x415,0x47f,0x5f)+_0x894834(0xb16,0x12b4,0xdfc,0xd22)+_0x894834(0xe3c,0xa01,0xa9a,0x9eb)+'2isPrefetc'+_0x894834(0x328,0x7a2,0x871,0xadc)+_0xb1dd8c(0xa10,0x886,0x640,0x630)+_0x894834(0xa7f,0x1000,0xea0,0xbe3)+'22')+_0x3143d2+(_0xb1dd8c(0x64d,0xb83,0x807,0xacc)+_0xb1dd8c(0x8ec,0xac2,0x7de,0x9e6)+_0x894834(0x6cc,0x247,0x759,0x98a)+'%2C%22no_f'+_0xb1dd8c(0x5e1,0x7fa,0xae6,0xcd4)+_0xb1dd8c(0xe18,0x993,0xd1a,0x66f)+_0x894834(0xb32,0xa4b,0x89f,0x667)+_0xb1dd8c(0x559,0x10a,0x2ef,-0xed)+_0xb1dd8c(0x64f,0x44b,0x8e1,0x35d)+_0xb1dd8c(0xef7,0xacf,0x623,0x5af)+_0x894834(0x1141,0xb1e,0xe26,0xc2c)+_0xb1dd8c(0x5be,0x42c,0x17a,0x912)+'59'),{'headers':{'accept':'applicatio'+_0xb1dd8c(0x66,0x3a2,0x4e9,-0x181)+_0xb1dd8c(0x80d,0x477,0x112,0x377)+_0x894834(0x136e,0x1246,0xef1,0x1275)+_0x894834(0xf7,0x7a5,0x55a,0x14f),'accept-language':_0xdf7005[_0x894834(0xe04,0x10e2,0xce6,0xdb9)],'cache-control':_0xdf7005['oeEMP'],'pragma':_0xdf7005[_0x894834(0x319,0x288,0x609,0x1de)],'sec-fetch-dest':_0xdf7005[_0x894834(0x5df,0xc73,0x88f,0x62c)],'sec-fetch-mode':_0x894834(0x25b,0x95e,0x516,0x447),'sec-fetch-site':_0x894834(0x7dd,0x849,0x624,0x5e7)+'n','sec-gpc':'1','x-app-version':_0xdf7005[_0x894834(0xc7a,0x8f1,0x817,0x5a1)],'x-pinterest-appstate':_0x894834(0x100a,0xbb8,0xc46,0x10bf),'x-requested-with':_0xdf7005['IZKIS']},'referrer':_0xdf7005[_0x894834(0xe57,0x9ab,0xa5c,0xc13)],'referrerPolicy':_0xdf7005[_0x894834(0x130f,0xc7b,0xf97,0x12d6)],'body':null,'method':_0xdf7005[_0x894834(0xeb9,0xbe9,0xab6,0x893)],'mode':_0xdf7005[_0xb1dd8c(0x3c,0x100,-0x39e,-0x302)]})['then'](_0x467eb6=>_0x467eb6['json']())[_0xb1dd8c(0xad8,0x8b0,0x4f9,0x4f6)](_0x5a7693=>{const _0x29a47d=_0x5a7693[_0x1c9335(0x4d8,0x808,0x653,0xadf)+_0x1c9335(0x56f,0x6db,0xa66,0x2f5)][_0x48697f(0xa65,0x576,0x82a,0x17e)][_0x48697f(0xa6c,0xd58,0xa74,0xa08)][Math[_0x1c9335(-0x189,0x14e,-0xf4,-0x3a0)](_0xb8471f['fSAIP'](Math[_0x48697f(0x97c,0xe2a,0xaf8,0x10e0)](),_0x5a7693[_0x1c9335(0x30d,0x808,0x3bd,0x664)+_0x1c9335(0x1c4,0x6db,0x642,0x202)]['data'][_0x48697f(0xd77,0xd58,0x11e7,0x8dd)][_0x1c9335(0x29d,0x3a4,0x409,0x6b2)]))];var _0x95123e=[];const _0x2dbad1={};function _0x48697f(_0x47db2f,_0x3fa0e2,_0x647bc5,_0x391732){return _0xb1dd8c(_0x47db2f,_0x3fa0e2-0x300,_0x647bc5-0x1c9,_0x391732-0xa1);}function _0x1c9335(_0xa17808,_0x31a9d1,_0x5113a7,_0x12f9c6){return _0x894834(_0x12f9c6,_0x31a9d1-0x1be,_0x31a9d1- -0x403,_0x12f9c6-0x48);}_0x2dbad1[_0x1c9335(0x894,0x96a,0xe73,0xca5)]=_0x29a47d['images'][_0x1c9335(0x9f7,0x976,0xa69,0x739)][_0x48697f(0x107b,0xc76,0x9ea,0x94a)],_0x95123e[_0x1c9335(0x9cc,0x612,0x2f0,0x40e)](_0x2dbad1),_0xb8471f[_0x1c9335(0x72b,0x45d,0x184,-0x1c)](_0x37a1e2,_0x95123e);})[_0x894834(0xbf2,0xb12,0x9e1,0xd4c)](_0x3bc11a);});}const pinterest=_0x1cdb05=>new Promise((_0x41b517,_0x5b573b)=>{function _0x3637f7(_0x529c79,_0x2668d1,_0x32221a,_0x746bef){return _0x128a37(_0x529c79-0x162,_0x2668d1,_0x32221a-0x56,_0x32221a- -0x1e2);}const _0x392e5f={'SJguh':function(_0x4fe113,_0x3b8969){return _0x4fe113(_0x3b8969);},'LowhI':_0x42e8c3(0xdfc,0xba8,0xda8,0x7c5),'wXkjA':function(_0x2309e1,_0x4e6a38){return _0x2309e1===_0x4e6a38;},'lApIR':_0x42e8c3(0x80a,0x56f,0x3ad,0x1a0),'oeYQV':function(_0x4dddbc,_0x1e10af){return _0x4dddbc(_0x1e10af);}};function _0x42e8c3(_0xd6bec9,_0x3cfd7d,_0x2edf36,_0x1d022f){return _0x128a37(_0xd6bec9-0x83,_0x1d022f,_0x2edf36-0xa6,_0x3cfd7d- -0x1fb);}pinterestSearch(_0x1cdb05)[_0x3637f7(0xd93,0x7e4,0xab0,0x978)](_0x14df5c=>{const _0x3b819f={'TFwmS':function(_0x2622db,_0x56b7ce){function _0x3b5bfe(_0x424341,_0x386a6a,_0x1e3f46,_0x3519c8){return _0xf809(_0x1e3f46- -0x384,_0x424341);}return _0x392e5f[_0x3b5bfe(0x8a5,-0xce,0x362,0x7f5)](_0x2622db,_0x56b7ce);},'zIGHG':_0x392e5f[_0x5a8379(0xbfd,0x87e,0x7bc,0x99e)]};function _0x58959b(_0x4a32d,_0x47fe9c,_0x1d90f3,_0x717a09){return _0x3637f7(_0x4a32d-0x23,_0x4a32d,_0x47fe9c-0x147,_0x717a09-0x74);}function _0x5a8379(_0x1d24c5,_0x34bbdb,_0x400f64,_0x3c211b){return _0x3637f7(_0x1d24c5-0xa,_0x1d24c5,_0x34bbdb- -0xd2,_0x3c211b-0x47);}if(_0x392e5f[_0x5a8379(-0x44,0x24f,0x41d,0x4dd)](_0x58959b(0xa8e,0xab7,0x6fc,0xcac),_0x392e5f[_0x5a8379(0x3c0,0x2e1,0x260,0xe6)])){let _0xee25b1=_0x3b819f['TFwmS'](_0x129e42,_0x37515c)[_0x58959b(-0xd8,0x44a,0x200,0x38f)](_0x3b819f[_0x58959b(0x874,0xac6,0x7a7,0xc31)]),_0x16d03c=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0x16d03c['test'](_0xee25b1)&&_0x3b715c['push'](_0xee25b1);}else{const _0x159fca={};_0x159fca[_0x5a8379(0x1b3,0x54e,0x9de,0x480)]=0xc8,_0x159fca[_0x58959b(0xcae,0x8fe,0x51d,0x567)]=_0x14df5c[0x16*0x8b+-0x2*0xe8f+-0x896*-0x2][_0x58959b(0x115e,0xcb7,0xf35,0x10bc)],_0x392e5f[_0x5a8379(0xc31,0xa7f,0x582,0x682)](_0x41b517,_0x159fca);}})[_0x3637f7(0x7c0,0x2fd,0x7e4,0x7d6)](_0x5b573b);});pinterest(q)['then'](async _0x1be218=>{function _0x57037d(_0x2a796f,_0x3321a8,_0x331d57,_0x24b6ce){return _0x128a37(_0x2a796f-0x10d,_0x2a796f,_0x331d57-0xc4,_0x331d57- -0x2c8);}const _0x447aa5={'xYpFC':function(_0x57edc4,_0x5664d8){return _0x57edc4(_0x5664d8);}};function _0x2e23d5(_0x9839c,_0x311507,_0xbf9851,_0x44b212){return _0x128a37(_0x9839c-0x8a,_0x9839c,_0xbf9851-0x4e,_0xbf9851- -0x4fd);}let _0x334f61=await _0x447aa5[_0x57037d(0xee8,0xcc6,0xbc1,0x6ac)](getBuffer,_0x1be218['image']);alpha[_0x57037d(0xbc9,0xe49,0xa31,0x5c5)+'e'](from,_0x334f61,MessageType[_0x2e23d5(0x56d,0x139,0x49c,0x7bd)],{'caption':_0x57037d(0x1038,0xdfe,0xbec,0xaf5)+'arian:\x20'+q,'quoted':mek,'thumbnail':Buffer[_0x2e23d5(-0x24f,0x3dd,0xce,0x4)](0x1427+-0x17b*0xd+0x1d*-0x8)});})[_0x4963f8(0x424,0xbff,0x91c,0x63e)](async _0xad7cdf=>{const _0x3e15f5={'DwSSA':function(_0x5f333a,_0x30a244){return _0x5f333a(_0x30a244);},'kNLdf':_0x4ed0ee(0x7a0,0x634,0xb31,0xebb)+_0x4ed0ee(0x258,0xa92,0x68e,0x7b1)};function _0xb0beea(_0x258b6b,_0x4bd167,_0x1e591c,_0x5bbb99){return _0x4963f8(_0x5bbb99,_0x4bd167-0x23,_0x4bd167- -0x4ed,_0x5bbb99-0x194);}function _0x4ed0ee(_0xcd2b60,_0x94a8a5,_0x586df2,_0x58ee20){return _0x4963f8(_0x94a8a5,_0x94a8a5-0x5e,_0x586df2- -0x79,_0x58ee20-0x87);}_0x3e15f5[_0x4ed0ee(0x6b0,0x98e,0xb65,0xa12)](reply,_0x3e15f5[_0x4ed0ee(0x1092,0xbfd,0xe48,0xaa9)]);}),await limitAdd(sender,limit);break;case _0x4963f8(0x61d,0x9ca,0x61c,0x21a):case _0x128a37(0xc24,0xab4,0xf38,0xcda):const _0x54a286={};_0x54a286[_0x4963f8(0xf74,0xd0f,0xb90,0x8ad)+'t']=_0x128a37(0xee6,0x11fd,0x10d3,0xdc2)+'t';const _0x49b602={};_0x49b602[_0x4963f8(0xa26,0x64c,0xa74,0x6fa)]=_0x128a37(0xe22,0x94c,0xc29,0xd8b),_0x49b602['buttonText']=_0x54a286,_0x49b602[_0x4963f8(0x10a4,0xa41,0xce9,0xc54)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x49b602]);if(!q)return reply(_0x128a37(0x1257,0x109c,0xa0f,0xeff));qes=args[_0x4963f8(0x9d4,0x8f4,0xd39,0xb8c)]('\x20');const _0x2412f5={};_0x2412f5[_0x4963f8(0xc44,0xa64,0x7ba,0x78c)]=_0x128a37(0xe5d,0xae5,0xa42,0xa5f)+'e-'+qes,_0x2412f5['descriptio'+'n']=''+creator,_0x2412f5['rowId']=''+qes;const _0x1eb687={};_0x1eb687[_0x4963f8(0xa7a,0xb71,0x7ba,0x459)]='Emoji-Goog'+_0x4963f8(0x74e,0x955,0xa58,0xcbe)+qes,_0x1eb687[_0x128a37(0x107d,0x99b,0xe7d,0xeda)+'n']=''+creator,_0x1eb687[_0x128a37(0xad5,0xef8,0xe2d,0xc7c)]=''+qes;const _0xbf2125={};_0xbf2125['title']='Emoji-Sams'+_0x4963f8(0xc89,0x9ed,0xb38,0x9fd)+qes,_0xbf2125[_0x128a37(0xaf5,0xed5,0xa6f,0xeda)+'n']=''+creator,_0xbf2125[_0x128a37(0x840,0x107c,0x1078,0xc7c)]=''+qes;const _0x1f7377={};_0x1f7377[_0x128a37(0x512,0x94c,0x70a,0x864)]='Emoji-Micr'+_0x128a37(0x10e7,0xa5a,0xcf4,0xf14)+qes,_0x1f7377[_0x4963f8(0x12d2,0xa4c,0xe30,0x11da)+'n']=''+creator,_0x1f7377[_0x4963f8(0xe99,0x95c,0xbd2,0x8e4)]=''+qes;const _0x263699={};_0x263699['title']=_0x4963f8(0x7f5,0xa7c,0x83f,0x926)+_0x128a37(0xeaf,0x4c5,0x96a,0x9da)+qes,_0x263699[_0x128a37(0xd7e,0xca5,0xb53,0xeda)+'n']=''+creator,_0x263699[_0x4963f8(0xde3,0xdac,0xbd2,0x683)]=''+qes;const _0x4c8af0={};_0x4c8af0[_0x128a37(0xd1c,0x523,0x93b,0x864)]=_0x4963f8(0x43e,0x38,0x499,0x429)+_0x128a37(0xb88,0xec0,0x1188,0xe9b)+qes,_0x4c8af0[_0x128a37(0xfe1,0x1416,0xe8a,0xeda)+'n']=''+creator,_0x4c8af0[_0x4963f8(0xc65,0xeac,0xbd2,0x9b0)]=''+qes;const _0x1e018f={};_0x1e018f[_0x128a37(0x3dd,0x800,0x7bd,0x864)]=_0x4963f8(0xab2,0xc8f,0x985,0x9f5)+_0x4963f8(0x11c6,0x1155,0xded,0x11e0)+qes,_0x1e018f[_0x128a37(0xfdf,0x135d,0xb6e,0xeda)+'n']=''+creator,_0x1e018f['rowId']=''+qes;const _0x1bd883={};_0x1bd883[_0x128a37(0x61d,0x942,0x438,0x864)]=_0x4963f8(0x611,0x8aa,0x559,0xa2d)+_0x128a37(0x1213,0xbd2,0xf28,0xd12)+qes,_0x1bd883['descriptio'+'n']=''+creator,_0x1bd883[_0x4963f8(0xd81,0x93a,0xbd2,0xa65)]=''+qes;const _0x17adff={};_0x17adff[_0x128a37(0x8fa,0xc78,0xb54,0x864)]='Emoji-Open'+_0x128a37(0xb03,0x11fb,0xa0f,0xdf3)+qes,_0x17adff[_0x128a37(0xe59,0x12f2,0xd4c,0xeda)+'n']=''+creator,_0x17adff['rowId']=''+qes;const _0x356bdd={};_0x356bdd[_0x128a37(0xc98,0x36f,0xcdb,0x864)]=_0x4963f8(0x791,0xcc2,0x7a4,0x9a2)+_0x128a37(0x110b,0xfca,0xe44,0xbdf)+qes,_0x356bdd[_0x4963f8(0xdd4,0x951,0xe30,0x132d)+'n']=''+creator,_0x356bdd[_0x128a37(0x1166,0xea0,0xffa,0xc7c)]=''+qes;const _0x4581b1={};_0x4581b1['title']=_0x4963f8(0x539,0x614,0x44c,0x431)+_0x128a37(0xa78,0xb1c,0xac4,0x93b)+qes,_0x4581b1[_0x4963f8(0x9b9,0xbaf,0xe30,0x1031)+'n']=''+creator,_0x4581b1[_0x128a37(0xbba,0xd2f,0xdee,0xc7c)]=''+qes;const _0x31827c={};_0x31827c[_0x128a37(0x4e7,0x878,0xa3b,0x864)]=_0x128a37(0xb97,0xc17,0x785,0xb83)+qes,_0x31827c[_0x4963f8(0xeac,0x1084,0xe30,0x9df)+'n']=''+creator,_0x31827c[_0x4963f8(0x6d1,0xc0d,0xbd2,0x951)]=''+qes;const _0xad017c={};_0xad017c[_0x4963f8(0xcd7,0x822,0x7ba,0x849)]=_0x4963f8(0x850,0x615,0x437,0x82e)+qes,_0xad017c[_0x128a37(0x1300,0x139a,0x1216,0xeda)+'n']=''+creator,_0xad017c['rowId']=''+qes;const rows12=[_0x2412f5,_0x1eb687,_0xbf2125,_0x1f7377,_0x263699,_0x4c8af0,_0x1e018f,_0x1bd883,_0x17adff,_0x356bdd,_0x4581b1,_0x31827c,_0xad017c],_0x80349e={};_0x80349e[_0x4963f8(0x792,0xb5f,0x7ba,0x903)]=_0x4963f8(0x487,0x88c,0x8ce,0xd79)+_0x4963f8(0x865,0xb16,0xa4a,0x5b2),_0x80349e[_0x4963f8(0x3ab,0x350,0x61f,0x81e)]=rows12;const sections12=[_0x80349e],listt12={'buttonText':_0x4963f8(0xca8,0x11f3,0xe6e,0xd25)+'E','title':_0x4963f8(0xcc1,0xcd2,0xa41,0xa4e)+'\x20','description':_0x128a37(0x590,0x939,0x50e,0x8f0)+sender[_0x128a37(0x23a,0x775,0x8db,0x581)]('@')[-0xfea+-0xf53+0x1f3d]+(_0x128a37(0xb8a,0x94c,0x7e7,0xb41)+'rimu\x20menye'+'nangkan\x20😇,'+'\x20ini\x20adala'+_0x128a37(0xb41,0x1075,0xe65,0xf13)+_0x4963f8(0xa95,0x78f,0xc50,0x990)+_0x128a37(0x3c9,0xe4,0x140,0x62d)),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0x54c85c={};_0x54c85c['mentionedJ'+'id']=[sender];const _0x344415={};_0x344415[_0x4963f8(0x5c7,0xdcc,0x9c3,0xa1d)]=ftoko,_0x344415[_0x128a37(0x698,0xb5d,0x938,0x979)+'o']=_0x54c85c,alpha['sendMessag'+'e'](from,listt12,MessageType[_0x128a37(0x611,0x609,0xd15,0xa01)+'e'],_0x344415),await limitAdd(sender,limit);break;}if(sub_yt_zeeone_ofc==_0x128a37(0x6b5,0xcbe,0x677,0xa5f)+'e-'+q5){const _0x181abd={};_0x181abd[_0x128a37(0x1092,0xc9d,0x1063,0xc3a)+'t']=_0x128a37(0x9fc,0x129a,0xffa,0xdc2)+'t';const _0x56cef9={};_0x56cef9[_0x4963f8(0x811,0xa6a,0xa74,0x55c)]=_0x128a37(0x1026,0xd50,0x110b,0xd8b),_0x56cef9[_0x4963f8(0x30a,0x600,0x6c4,0x968)]=_0x181abd,_0x56cef9[_0x4963f8(0xd64,0xe77,0xce9,0x829)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x10b1,0x837,0xce1,0x11dc)](prefix),'©\x20'+ownername,[_0x56cef9]);reply(lang[_0x128a37(0xc10,0xb82,0x32d,0x79b)]()),emoji[_0x128a37(0x785,0x850,0x329,0x5d4)](''+q5)['then'](async _0x493c28=>{const _0x3ed1f4={'iIqfi':function(_0xb75999,_0x3cc580,_0x3c2eee){return _0xb75999(_0x3cc580,_0x3c2eee);}};function _0x252687(_0x162a99,_0x3513dc,_0x486e10,_0x5b0897){return _0x4963f8(_0x162a99,_0x3513dc-0x1c1,_0x486e10- -0x5e2,_0x5b0897-0x1ae);}teks=''+_0x493c28['images'][-0x184c+0x35e+0x39*0x5e]['url'],console[_0x252687(0x3fa,0x8e,0x3cd,0x436)](teks),sendStickerFromUrl(from,''+teks),await _0x3ed1f4['iIqfi'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x128a37(0xee1,0x1397,0xbc7,0xf55)+'le-'+q5){const _0x1fb01c={};_0x1fb01c[_0x128a37(0x8c7,0x8eb,0x997,0xc3a)+'t']=_0x128a37(0xcdb,0x96c,0x12d0,0xdc2)+'t';const _0x54ef52={};_0x54ef52[_0x128a37(0x8b4,0xbef,0xf47,0xb1e)]=_0x128a37(0xf80,0xc57,0x9fc,0xd8b),_0x54ef52[_0x128a37(0x964,0xa7e,0x567,0x76e)]=_0x1fb01c,_0x54ef52[_0x128a37(0xdb6,0xb5e,0xa05,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x54ef52]);emoji[_0x4963f8(0x8b7,0x9c1,0x52a,0x764)](''+q5)['then'](async _0x241216=>{const _0x10b4e0={'SawxA':function(_0x1d4fcd,_0x17fff2,_0x4ad631){return _0x1d4fcd(_0x17fff2,_0x4ad631);}};function _0x4be810(_0x3d8c07,_0x5f0647,_0x26b1fd,_0x47e4b7){return _0x4963f8(_0x5f0647,_0x5f0647-0x133,_0x47e4b7- -0x630,_0x47e4b7-0xc7);}teks=''+_0x241216[_0x4be810(0x42,0x446,-0x211,0x2a0)][0xefc+-0x8a*-0x2d+0x7d9*-0x5][_0x185863(0xfb5,0x134e,0x8cd,0xe00)],console[_0x4be810(0x57d,0x371,-0x6,0x37f)](teks),_0x10b4e0[_0x4be810(0x4d6,0xb32,0x950,0x5fd)](sendStickerFromUrl,from,''+teks);function _0x185863(_0x3a9162,_0x211700,_0x211da3,_0x1e9c42){return _0x128a37(_0x3a9162-0x1ec,_0x211da3,_0x211da3-0x122,_0x1e9c42-0xa8);}await _0x10b4e0['SawxA'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x128a37(0x127b,0xfc6,0x10ba,0xf5e)+_0x128a37(0x987,0x767,0xcf8,0xbe2)+q5){const _0x427954={};_0x427954[_0x128a37(0xcaa,0xa3b,0xe9e,0xc3a)+'t']='Check\x20Limi'+'t';const _0x470587={};_0x470587[_0x128a37(0xb29,0x995,0xfcf,0xb1e)]=_0x128a37(0xfba,0x1165,0xda1,0xd8b),_0x470587[_0x128a37(0x51b,0x77d,0x21f,0x76e)]=_0x427954,_0x470587[_0x128a37(0x1067,0x917,0xdb1,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x470587]);reply(lang[_0x4963f8(0x384,0x547,0x6f1,0x358)]()),emoji[_0x128a37(0x9a3,0x422,0x1be,0x5d4)](''+q5)[_0x128a37(0xfd1,0xa87,0x11d9,0xc92)](async _0x1ca618=>{function _0x36b12d(_0x1e8a84,_0x3c2719,_0x1878d1,_0x21c2b5){return _0x4963f8(_0x21c2b5,_0x3c2719-0x8d,_0x3c2719- -0x2f2,_0x21c2b5-0x30);}const _0x448e20={'BDGmp':function(_0xd4692c,_0x167c6c,_0x517745){return _0xd4692c(_0x167c6c,_0x517745);},'sSRdP':function(_0x550f32,_0x358317,_0x5871b5){return _0x550f32(_0x358317,_0x5871b5);}};teks=''+_0x1ca618[_0xe13dc1(0x397,-0x196,-0x123,0x295)][-0x11*0xd1+0x193e+-0xb5b][_0xe13dc1(0x69e,0xb8e,0x1d1,0x673)],console[_0xe13dc1(0x64e,-0x8f,0x5a2,0x374)](teks);function _0xe13dc1(_0x59e5ba,_0x529e4a,_0x2b7e58,_0x1b1711){return _0x4963f8(_0x529e4a,_0x529e4a-0x15,_0x1b1711- -0x63b,_0x1b1711-0x4);}_0x448e20['BDGmp'](sendStickerFromUrl,from,''+teks),await _0x448e20[_0xe13dc1(0x3c0,0x6dc,0x2f4,0x207)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x4963f8(0xb79,0x67b,0x837,0x328)+_0x128a37(0x1249,0xfa8,0xf40,0xf14)+q5){const _0x4368bc={};_0x4368bc[_0x128a37(0xbee,0x1150,0x893,0xc3a)+'t']=_0x4963f8(0xc57,0x10a6,0xd18,0xd5c)+'t';const _0x22f040={};_0x22f040[_0x128a37(0x8a0,0xd28,0xb7f,0xb1e)]='limit',_0x22f040[_0x128a37(0xafe,0xc9b,0x82f,0x76e)]=_0x4368bc,_0x22f040[_0x4963f8(0xbde,0xcd0,0xce9,0xbc9)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x8fb,0x1003,0xce1,0xcb1)](prefix),'©\x20'+ownername,[_0x22f040]);emoji['get'](''+q5)[_0x4963f8(0xf5f,0xd7e,0xbe8,0xca5)](async _0x4b5e90=>{const _0x35cc7a={'EuJTa':function(_0x36b7d3,_0x14d9dd,_0x473018){return _0x36b7d3(_0x14d9dd,_0x473018);}};function _0x5611f1(_0x27c973,_0x1c532b,_0x217c7c,_0x2e33b0){return _0x4963f8(_0x217c7c,_0x1c532b-0x1cf,_0x27c973- -0x230,_0x2e33b0-0x1d8);}teks=''+_0x4b5e90[_0x5611f1(0x6a0,0x9f9,0x218,0x45c)][0x1293+-0x1619+0x389]['url'],console[_0x5611f1(0x77f,0x64d,0x391,0x9b7)](teks);function _0xc69622(_0x245e31,_0x104087,_0xe24f8f,_0x258233){return _0x4963f8(_0x104087,_0x104087-0x72,_0x258233- -0x379,_0x258233-0x6c);}sendStickerFromUrl(from,''+teks),await _0x35cc7a['EuJTa'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-What'+'sApp-'+q5){const _0x2f4889={};_0x2f4889[_0x128a37(0xe84,0xb1e,0xf2d,0xc3a)+'t']='Check\x20Limi'+'t';const _0x547ef1={};_0x547ef1[_0x4963f8(0xa27,0x974,0xa74,0x7c1)]=_0x4963f8(0xab8,0xcec,0xce1,0xd85),_0x547ef1[_0x4963f8(0x958,0x5bb,0x6c4,0x4d0)]=_0x2f4889,_0x547ef1[_0x128a37(0xbfd,0xa4c,0xce7,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x547ef1]);reply(lang[_0x4963f8(0x315,0x70d,0x6f1,0x5b5)]()),emoji[_0x4963f8(0x84b,0x8e4,0x52a,0xa74)](''+q5)[_0x128a37(0xcb1,0x105f,0x9d9,0xc92)](async _0x3cfbb9=>{const _0x404e47={'eUtmi':function(_0x56f5f6,_0x2aca94,_0x377b9d){return _0x56f5f6(_0x2aca94,_0x377b9d);}};function _0x143554(_0x541a95,_0x4af0ab,_0x59e127,_0x588abc){return _0x128a37(_0x541a95-0x104,_0x588abc,_0x59e127-0x19b,_0x59e127- -0x578);}teks=''+_0x3cfbb9[_0x143554(0xd5,0x371,0x402,0xea)][-0x14a5+-0x1fbd+0x3466][_0x13c23c(0xd55,0xfae,0xc10,0xeeb)],console['log'](teks),_0x404e47[_0x13c23c(0x778,0xcca,0xa05,0x612)](sendStickerFromUrl,from,''+teks);function _0x13c23c(_0x535497,_0x1dcc88,_0x4dcf33,_0x429e40){return _0x128a37(_0x535497-0x36,_0x535497,_0x4dcf33-0x9d,_0x4dcf33- -0x148);}await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-Twit'+_0x128a37(0xded,0xe7d,0xe7d,0xe9b)+q5){const _0x4905d2={};_0x4905d2[_0x4963f8(0xc6c,0xa60,0xb90,0xacb)+'t']='Check\x20Limi'+'t';const _0x2acdd6={};_0x2acdd6[_0x128a37(0xf87,0x97f,0x748,0xb1e)]=_0x4963f8(0xa6b,0x7c5,0xce1,0x83c),_0x2acdd6[_0x128a37(0x6ba,0x3ab,0x4ac,0x76e)]=_0x4905d2,_0x2acdd6[_0x128a37(0xc35,0x1044,0x10cd,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0x840,0x11c4,0xaf7,0xd8b)](prefix),'©\x20'+ownername,[_0x2acdd6]);emoji[_0x4963f8(0x8c0,0x626,0x52a,0x81a)](''+q5)[_0x4963f8(0x98f,0xf04,0xbe8,0x99f)](async _0x4dca68=>{const _0x45f73d={'UpIei':function(_0x4ab130,_0x13bc10,_0x2414ec){return _0x4ab130(_0x13bc10,_0x2414ec);}};teks=''+_0x4dca68['images'][0x63*0x5+0x6*-0x571+0x2*0xf5e][_0x581f70(0x91e,0x958,0xcf7,0xb1e)];function _0x13249d(_0x673288,_0x41612e,_0x457314,_0x15e3c7){return _0x128a37(_0x673288-0x1b0,_0x41612e,_0x457314-0x1a7,_0x457314- -0x52b);}console[_0x13249d(0x693,0x80e,0x52e,0x350)](teks),_0x45f73d[_0x13249d(0x306,0xa68,0x5b2,0x567)](sendStickerFromUrl,from,''+teks);function _0x581f70(_0x4ae079,_0x105175,_0x367d54,_0x4524aa){return _0x128a37(_0x4ae079-0x1b8,_0x105175,_0x367d54-0xa2,_0x4ae079- -0x43a);}await _0x45f73d[_0x13249d(0x183,0x992,0x5b2,0x227)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x4963f8(0xeaf,0x9b2,0x985,0x965)+_0x4963f8(0xffc,0x9be,0xded,0x10a0)+q5){const _0x31cce6={};_0x31cce6[_0x128a37(0x7ce,0x1129,0xacd,0xc3a)+'t']=_0x4963f8(0xe02,0xb2a,0xd18,0xb35)+'t';const _0x58bc6b={};_0x58bc6b[_0x128a37(0xecc,0xd1d,0xe6d,0xb1e)]=_0x128a37(0x121f,0x1153,0xf3a,0xd8b),_0x58bc6b['buttonText']=_0x31cce6,_0x58bc6b[_0x128a37(0xe09,0x10c6,0x127a,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x1138,0x1092,0xce1,0xfaf)](prefix),'©\x20'+ownername,[_0x58bc6b]);reply(lang['wait']()),emoji[_0x128a37(0x94c,0x629,0x3cf,0x5d4)](''+q5)[_0x4963f8(0xf7d,0x6d0,0xbe8,0xba9)](async _0x223aad=>{const _0x2de738={'PtBDW':function(_0x38107b,_0x12957b,_0x5c014d){return _0x38107b(_0x12957b,_0x5c014d);},'oDnkg':function(_0x1999b6,_0x5684ce,_0x4d19a1){return _0x1999b6(_0x5684ce,_0x4d19a1);}};teks=''+_0x223aad['images'][0x1405+0x2*0x11da+-0x3*0x1291][_0x44c0a2(0x7de,0x6fa,0x917,0x8cc)];function _0x16b3ac(_0x5afe72,_0x572b4e,_0x8d6ec7,_0x4e4989){return _0x4963f8(_0x572b4e,_0x572b4e-0x4b,_0x5afe72- -0x446,_0x4e4989-0x12d);}console[_0x44c0a2(0x4df,0x8c6,0x846,0x1c8)](teks);function _0x44c0a2(_0x1bf60a,_0x5da7bd,_0x3e2ba3,_0x560404){return _0x4963f8(_0x3e2ba3,_0x5da7bd-0xbe,_0x1bf60a- -0x4d0,_0x560404-0x104);}_0x2de738['PtBDW'](sendStickerFromUrl,from,''+teks),await _0x2de738[_0x44c0a2(0x1e4,0x4b,0x4e6,-0x2f7)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-JoyP'+_0x4963f8(0x1058,0x82f,0xc68,0xa4c)+q5){const _0x15dfbd={};_0x15dfbd[_0x4963f8(0xb08,0x65e,0xb90,0xa6c)+'t']=_0x128a37(0x1250,0xe81,0xcd3,0xdc2)+'t';const _0x9dc07d={};_0x9dc07d[_0x128a37(0xa34,0x6fc,0x95b,0xb1e)]=_0x4963f8(0x821,0xfd8,0xce1,0xd1e),_0x9dc07d[_0x4963f8(0x415,0x75d,0x6c4,0x8b8)]=_0x15dfbd,_0x9dc07d[_0x128a37(0xf9f,0x9a0,0x9a7,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0xc00,0x105c,0xce1,0x1154)](prefix),'©\x20'+ownername,[_0x9dc07d]);emoji[_0x4963f8(0x27f,0x1d6,0x52a,0x243)](''+q5)[_0x4963f8(0xe56,0xaac,0xbe8,0x7d9)](async _0x3bd7b7=>{const _0x471fa6={'CeEFL':function(_0x2406d3,_0x4ca464,_0x1e418c){return _0x2406d3(_0x4ca464,_0x1e418c);}};function _0x3a4ecb(_0x4fe853,_0x4933e6,_0x194e0a,_0x49affe){return _0x4963f8(_0x4fe853,_0x4933e6-0x61,_0x194e0a-0x15b,_0x49affe-0x1eb);}teks=''+_0x3bd7b7['images'][-0x34d*0x1+0x10b2+0x1*-0xd5e]['url'],console[_0x3a4ecb(0xee3,0xfd9,0xb0a,0x975)](teks);function _0x1f28b2(_0x3220f7,_0x3c80d3,_0x284e2c,_0x5ac157){return _0x128a37(_0x3220f7-0x88,_0x3220f7,_0x284e2c-0x12e,_0x5ac157- -0x1fe);}_0x471fa6[_0x3a4ecb(0x9bd,0x68d,0x5aa,0x815)](sendStickerFromUrl,from,''+teks),await _0x471fa6[_0x1f28b2(0x4d9,0x131,0x580,0x2fb)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x4963f8(0x1b1,0x903,0x5e1,0x222)+_0x128a37(0x939,0xd9a,0xa41,0xdf3)+q5){const _0x295ce4={};_0x295ce4[_0x128a37(0x889,0xd62,0x9d4,0xc3a)+'t']=_0x128a37(0x10bd,0xbee,0x110e,0xdc2)+'t';const _0x114bfe={};_0x114bfe['buttonId']='limit',_0x114bfe[_0x128a37(0x4f6,0x338,0x42a,0x76e)]=_0x295ce4,_0x114bfe[_0x4963f8(0x1073,0x9ba,0xce9,0x938)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x114bfe]);emoji[_0x128a37(0x539,0x372,0x15f,0x5d4)](''+q5)[_0x128a37(0x11c2,0x7b8,0xabc,0xc92)](async _0x3b2775=>{const _0x124e9d={'rSJnS':function(_0xb3a28,_0x5005f1,_0x8d91ea){return _0xb3a28(_0x5005f1,_0x8d91ea);},'FCcPM':function(_0x121280,_0x1f6ee0,_0xb3b95b){return _0x121280(_0x1f6ee0,_0xb3b95b);}};teks=''+_0x3b2775[_0x4e0b7a(0x737,0x78f,0x464,0x313)][0x2*0x10d3+-0xb7e+-0x1620][_0x4e0b7a(0xbed,0xb6d,0xcd9,0xe92)],console[_0x4e0b7a(0xa38,0x86e,0xa47,0x4a9)](teks);function _0x58d30c(_0x40f74f,_0x34b218,_0x180dc1,_0x57b8fb){return _0x128a37(_0x40f74f-0x8d,_0x40f74f,_0x180dc1-0x150,_0x34b218- -0x1b2);}function _0x4e0b7a(_0x5e3400,_0x467287,_0x298293,_0x4b4906){return _0x128a37(_0x5e3400-0x164,_0x298293,_0x298293-0x1e5,_0x467287- -0x1eb);}_0x124e9d[_0x4e0b7a(0x584,0x8b8,0x8a5,0xa36)](sendStickerFromUrl,from,''+teks),await _0x124e9d[_0x58d30c(0x6ee,0x399,0x2cb,0x561)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-emoj'+_0x4963f8(0xc1c,0x6ab,0xb35,0x8c1)+q5){const _0x18e0ba={};_0x18e0ba['displayTex'+'t']=_0x4963f8(0x903,0xcca,0xd18,0x8a8)+'t';const _0x3295f4={};_0x3295f4[_0x128a37(0xf23,0xb3f,0x5d4,0xb1e)]=_0x128a37(0xaf4,0x840,0x9e5,0xd8b),_0x3295f4['buttonText']=_0x18e0ba,_0x3295f4[_0x4963f8(0x888,0x86b,0xce9,0x966)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x11e6,0xfcb,0xce1,0xb46)](prefix),'©\x20'+ownername,[_0x3295f4]);reply(lang['wait']()),emoji[_0x128a37(0x30e,0xb0d,0x3cb,0x5d4)](''+q5)[_0x128a37(0xc7d,0xe93,0x798,0xc92)](async _0x22d931=>{const _0x20da74={'JbOwZ':function(_0x3560f9,_0x23bcfa,_0x208153){return _0x3560f9(_0x23bcfa,_0x208153);},'oFGmd':function(_0x38a55b,_0x5067b1,_0x1e2db1){return _0x38a55b(_0x5067b1,_0x1e2db1);}};function _0x4f3a13(_0x55c7e5,_0x575be4,_0x408b97,_0x6fe53f){return _0x128a37(_0x55c7e5-0x1da,_0x55c7e5,_0x408b97-0x50,_0x575be4- -0x516);}teks=''+_0x22d931[_0x342182(0x345,0x67c,0x2d6,0x666)][-0x61*0x1b+0x1*0x20ef+-0x7*0x33d][_0x342182(0xe64,0xa5a,0xb5b,0x559)],console['log'](teks),_0x20da74[_0x342182(0xc28,0x99d,0xeeb,0xb5a)](sendStickerFromUrl,from,''+teks);function _0x342182(_0x5036b8,_0x77d7fa,_0x237467,_0x4d2410){return _0x4963f8(_0x5036b8,_0x77d7fa-0x108,_0x77d7fa- -0x254,_0x4d2410-0x14d);}await _0x20da74[_0x342182(0x7ae,0x596,0x48e,0x514)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x128a37(0x8d9,0x133,0x8d8,0x4f6)+_0x4963f8(0x5b1,0x624,0x891,0x58f)+q5){const _0x1b3c2c={};_0x1b3c2c[_0x128a37(0xfde,0x1100,0xa3f,0xc3a)+'t']=_0x128a37(0x996,0x8f2,0x9a1,0xdc2)+'t';const _0x24b975={};_0x24b975[_0x4963f8(0xc6e,0xebe,0xa74,0xb44)]='limit',_0x24b975['buttonText']=_0x1b3c2c,_0x24b975[_0x128a37(0x966,0x9bf,0xd22,0xd93)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xbe2,0xd89,0xf4e,0xd8b)](prefix),'©\x20'+ownername,[_0x24b975]);emoji[_0x4963f8(0x966,0x4c,0x52a,0x307)](''+q5)[_0x4963f8(0xb78,0x6a8,0xbe8,0x708)](async _0x57e2a2=>{const _0x57751f={'oXbKA':function(_0x45d252,_0x4576dd,_0x45e0a7){return _0x45d252(_0x4576dd,_0x45e0a7);},'IGoWy':function(_0x53e47f,_0xe57bc9,_0x172a43){return _0x53e47f(_0xe57bc9,_0x172a43);}};teks=''+_0x57e2a2[_0x2b4518(0x70d,0x327,0x741,0x8ad)][-0x1*-0x1992+-0xa07*-0x1+-0x238f*0x1][_0x2b4518(0xaeb,0xe23,0xbed,0x73d)];function _0x3b5dec(_0x4f3572,_0x21f147,_0x138e66,_0x4c04b5){return _0x4963f8(_0x4f3572,_0x21f147-0x19e,_0x21f147-0xe3,_0x4c04b5-0x170);}function _0x2b4518(_0x5229ad,_0x11c6ee,_0xfd9c9d,_0x4ad946){return _0x128a37(_0x5229ad-0x106,_0x11c6ee,_0xfd9c9d-0xab,_0x5229ad- -0x26d);}console[_0x2b4518(0x7ec,0x5dc,0x753,0xa67)](teks),_0x57751f[_0x2b4518(0x2cc,0x437,0x636,0x695)](sendStickerFromUrl,from,''+teks),await _0x57751f[_0x3b5dec(0xf12,0xe2b,0x9ca,0xec7)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x128a37(0x6a8,0xc30,0xd8a,0xb83)+q5){const _0x571d3a={};_0x571d3a[_0x128a37(0x7f3,0xbe9,0xbb2,0xc3a)+'t']=_0x4963f8(0x10c6,0xc79,0xd18,0x8db)+'t';const _0x12c659={};_0x12c659['buttonId']=_0x4963f8(0xf99,0x1143,0xce1,0x9d4),_0x12c659['buttonText']=_0x571d3a,_0x12c659[_0x4963f8(0x1239,0xd36,0xce9,0xa1e)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4963f8(0x113d,0xb01,0xce1,0x1098)](prefix),'©\x20'+ownername,[_0x12c659]);reply(lang['wait']()),emoji[_0x128a37(0x61d,0x25f,0x8b1,0x5d4)](''+q5)[_0x128a37(0x961,0xdbe,0x88f,0xc92)](async _0x58c53e=>{const _0x36efb4={'fSoJW':function(_0x2749af,_0x3b7bce,_0x178f5a){return _0x2749af(_0x3b7bce,_0x178f5a);},'sFGLA':function(_0x5bf615,_0x33e16a,_0x406522){return _0x5bf615(_0x33e16a,_0x406522);}};teks=''+_0x58c53e[_0x47ed10(0x9c8,0xee5,0x974,0xd5f)][-0x9ad+-0x896*0x2+0x1ae4][_0x349f74(0xcc2,0x118f,0x1124,0xd44)],console[_0x349f74(0x866,0xdec,0xf37,0xa45)](teks),_0x36efb4[_0x349f74(0x99d,0xb81,0xb13,0xd1e)](sendStickerFromUrl,from,''+teks);function _0x47ed10(_0x300010,_0xa7a667,_0x4134f3,_0x1c27fe){return _0x4963f8(_0x1c27fe,_0xa7a667-0x1e8,_0x300010-0xf8,_0x1c27fe-0x15d);}function _0x349f74(_0x182ddd,_0x24d192,_0x1aba3d,_0x79b589){return _0x4963f8(_0x1aba3d,_0x24d192-0xfd,_0x79b589-0x96,_0x79b589-0x179);}await _0x36efb4[_0x47ed10(0xa93,0xdc1,0xb2a,0xf98)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-HTC-'+q5){const _0x2d5e64={};_0x2d5e64['displayTex'+'t']=_0x4963f8(0xfd9,0xbab,0xd18,0x933)+'t';const _0x2a7a6d={};_0x2a7a6d[_0x4963f8(0xdc3,0x6db,0xa74,0x915)]=_0x4963f8(0x8ef,0xbe1,0xce1,0xe65),_0x2a7a6d[_0x4963f8(0x874,0x70e,0x6c4,0xaf9)]=_0x2d5e64,_0x2a7a6d['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x128a37(0xdd4,0xc7d,0xe52,0xd8b)](prefix),'©\x20'+ownername,[_0x2a7a6d]);emoji['get'](''+q5)[_0x128a37(0x954,0x83f,0xacf,0xc92)](async _0x314f74=>{function _0x58eb06(_0x2ec5d4,_0x591967,_0x2b416e,_0x2a0715){return _0x4963f8(_0x2a0715,_0x591967-0x21,_0x591967- -0x3e9,_0x2a0715-0x113);}const _0x2cdf90={'Hizar':function(_0x5b093a,_0x4340e8,_0xb93953){return _0x5b093a(_0x4340e8,_0xb93953);}};teks=''+_0x314f74['images'][0x4ea*0x5+0x1df*-0xb+0x3f1*-0x1][_0x35b6b8(0x9d5,0x544,0xcf0,0x486)],console[_0x58eb06(0x90c,0x5c6,0x222,0x166)](teks);function _0x35b6b8(_0xce31bb,_0x53ee31,_0x36706f,_0x500750){return _0x4963f8(_0x500750,_0x53ee31-0x7a,_0xce31bb- -0x2d9,_0x500750-0xfe);}sendStickerFromUrl(from,''+teks),await _0x2cdf90[_0x58eb06(-0x131,0x18f,0x614,0x58)](limitAdd,sender,limit);});}
					switch (command) {
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍ Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n© ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                break
	case 'menu': case 'help':
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let ch = await getBuffer(chatt)
			try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2}

╭─❒ 「 Bot Info 」 
├ Creator :  @${koko.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Hit today : ${hit_today.length}
├ Speed : ${latensii.toFixed(4)} Second
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Runtime : ${(kyun(os.uptime()))}
├ Battery : ${isBattre}
╰❒ Charging : ${isCharge}

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Bio : ${p1 ? `${p1.status}` : '-'}
├ Nomor : @${sender.split('@')[0]}
├ Me : ${mek.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isOwner ? 'True' : `False`}
`
if(typemenu == 'document'){
sendButDoc(from, ini_anu, `Please Don't spam bot, pause 3 seconds per command!\n`, sender, koko, ini_mark)
} 
if(typemenu == 'troli'){
sendTroli(allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii))
} 
if(typemenu == 'troli2'){
sendTroli2(allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii))
} 
if(typemenu == 'katalog'){
sendKatalog2(allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii))
} 
if(typemenu == 'katalog2'){
sendKatalog3(allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii))
} 
if(typemenu == 'list'){
sendList(sender)
} 
if(typemenu == 'location'){ 
let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'owner', buttonText: {displayText: '⋮☰ OWNER'}, type: 1},
  {buttonId: 'botstat', buttonText:{displayText: '✓ STATISTIC'}, type: 1},
  {buttonId: 'Command', buttonText: {displayText: '❍ LIST MESSAGE'}, type: 1}
]

const btn1 = {
    contentText: allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii),
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
}

break
case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
const listhades = ['document', 'troli', 'troli2', 'katalog', 'katalog2', 'list', 'location']
listMsg = {
 buttonText: 'SET MENU',
 footerText: `© ${ownername}`,
 description: `Pilih tampilan menu sesukamu`,
 sections: [
                     {
                      "title": `SET MENU`,
 rows: [
                          {
                              "title": "document",
                              "rowId": "setmenu document"
                           },
                           {
                              "title": "troli",
                              "rowId": "setmenu troli"
                           },
                           {
                              "title": "troli2",
                              "rowId": "setmenu troli2"
                           },
                           {
                              "title": "katalog",
                              "rowId": "setmenu katalog"
                           },
                           {
                              "title": "katalog2",
                              "rowId": "setmenu katalog2"
                           },
                           {
                              "title": "list",
                              "rowId": "setmenu list"
                           },
                           {
                              "title": "location",
                              "rowId": "setmenu location"
                           }
                        ]
                     }],
 listType: 1
}
if (!listhades.includes(q)) return alpha.sendMessage(from, listMsg, MessageType.listMessage, {quoted: mek})
//reply(`*Example :*${enter}•${prefix + command} location\n•${prefix + command} document\n•${prefix + command} list\n•${prefix + command} troli\n•${prefix + command} troli2\n•${prefix + command} katalog\n•${prefix + command} katalog2\n`)
typemenu = q
reply(lang.success())
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										},{
										"buttonId": 'Command',
										"buttonText": {
											"displayText": "LIST MESSAGE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n© ${ownername}`,pp_userz, papao, {})
                break
        case 'trigger':
					reply ('Mungkin yg kamu maksud .triggered')
					await limitAdd(sender, limit)
					break
					case 'sampah':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					media = await alpha.downloadMediaMessage(ger)
					njay = await uploadImages(media)
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${njay}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
                   await limitAdd(sender, limit)
              break       
		case 'triggered':case 'gay': case 'glass': case 'passed': case 'jail': case 'comrade':case 'green': case 'blue': case 'sepia': case 'wasted': case 'greyscale': case 'blurple2': case 'blurple': case 'red': case 'invertgreyscale': case 'invert':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await alpha.downloadMediaMessage(ger)
				    anu = await uploadImages(owgi)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(lang.tryAgain())
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender, limit)
					break 
					case 'jadian':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
await limitAdd(sender, limit)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					fakegroup('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					fakegroup('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
            case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                await limitAdd(sender, limit)
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
				await limitAdd(sender, limit)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				await limitAdd(sender, limit)
					break    
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
case 'listgrup':
case 'listgc':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
const txs = alpha.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${alpha.getName(v.jid)}${enter}${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`${enter}~~${enter}`
alpha.sendMessage(m.chat, '```「 LIST GROUPS 」```\n\n' + txs, text)
break
				   break 
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus(lang.successBc())
					}
					break
         case 'owner':
         case 'creator':  
         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewabot', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
await limitAdd(sender, limit)
					break   
			case 'fakeloc':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)                
		    await limitAdd(sender, limit)
					break   
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            await limitAdd(sender, limit)
					break   
		    case 'kontag':
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isOwner && !isCreator) return reply(lang.onlyOwner())
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            await limitAdd(sender, limit)
					break   
		    case 'sticktag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isOwner && !isCreator) return reply(lang.onlyOwner())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'totag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isOwner && !isCreator) return reply(lang.onlyOwner())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'fitnah':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            reply(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		    case 'fast':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		    case 'slow':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		case 'tupai':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await limitAdd(sender, limit)
					break   
		    case 'reverse':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		           var encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		          var media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		    case 'anime2':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            await limitAdd(sender, limit)
					break   
		    case 'kontak':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            await limitAdd(sender, limit)
					break   
		    case 'take':
		    case 'colong':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            var encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    var media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					await limitAdd(sender, limit)
					break   
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            await limitAdd(sender, limit)
					break   
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
            {
              buttonId: 'self',
              buttonText: {
                displayText: `Self Mode`,
              },
              type: 1,
            }]);
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return
		          	banChats = true
		          	//fakeitem(`「 *SELF-MODE* 」`)
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
            {
              buttonId: 'public',
              buttonText: {
                displayText: `Public Mode`,
              },
              type: 1,
            }]);
        break;
		case 'revoke':
if (!isGroup) return fakegroup(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	case 'hidetag':
		     case '_`':
		     if (!isGroup) return fakegroup(lang.onlygc())
			if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					await limitAdd(sender, limit)
					break   
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return fakegroup(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return fakegroup(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': 
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'payment': case 'pay': case 'donasi': case 'donate':
				alpha.sendMessage(from, fs.readFileSync(`./image/${setting.donasi}`), image, {caption: 'Scan untuk melakukan pembayaran', quoted: mek, thumbnail: fs.readFileSync(`./image/${setting.donasi}`)})
				break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa() , `©  ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							reply('Group bot telah di kirim ke private chat')
							sendButLocation(sender, gcbotwa() , `©  ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `©  ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {contextInfo:{"mentionedJid": [ownerNumberrr]}})
							break
			case 'play2':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                       await sendMediaURL(from, thumb, captions)
		                        sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   await limitAdd(sender, limit)
					break     
		
		               case 'sticker': case 'stikerin':
					case 'stiker': case 's':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia)
							//ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								})
								})
                           .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(`./sticker/${sender}.webp`)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                    //    ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								})
								})
								.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(`./sticker/${sender}.webp`)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply(lang.tryAgain())
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    await limitAdd(sender, limit)
					break   
		    case 'toimg':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa Support YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					await limitAdd(sender, limit)
					break   
			case 'ytsearch': case 'yts':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '🐤 Link: ' + video.url + '\n'
		            ytresult += '🦊 Durasi: ' + video.timestamp + '\n'
					ytresult += '🐺 Views: ' + video.views + '\n'
		            ytresult += '🦡 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					await limitAdd(sender, limit)
					break   
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
reply('Pke yg multi aja')
/*if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}*/
break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
gis(gimg, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
cptg = `*-------「 GIMAGE SEARCH 」-------*
⛄ *Query* : ${gimg}
🔗 *Media Url* : ${images}`
var imgnya = await getBuffer(images)
sendButImage(from,  cptg , `© ${ownername}`,imgnya, [{"buttonId": `image ${q}`,"buttonText": {"displayText": "Next Image"},"type": "RESPONSE"}], {quoted: mek})
			})
					await limitAdd(sender, limit)
					break   
		    
		    case 'brainly':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					await limitAdd(sender, limit)
					break       
    case 'playstore':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            await limitAdd(sender, limit)
					break   
		    case 'igstalk':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		       if (!q) return fakegroup('Usernamenya?')
		var halzmal = q
		            const tod = await fetchJson(`https://ferdiz-afk.my.id/api/stalkig?username=${halzmal}`);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
alpha.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
await limitAdd(sender, limit)
					break       
		
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            await limitAdd(sender, limit)
			break    
case 'lirik':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            await limitAdd(sender, limit)
			break  
    case 'anime':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
 if(!q) return reply('Judul animenya?')
 zee.Anime(`${q}`).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,mek)
                })
                .catch((err) => {
                    reply(lang.tryAgain())
                })
            break
    case 'otaku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('Judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
           var ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            await limitAdd(sender, limit)
			break   
    case 'komiku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            await limitAdd(sender, limit)
					break     
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`ALPHABOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
zee.Twitter(`${lin}`).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,mek)
                })
                .catch((err) => {
                    reply(lang.err())
                })
await limitAdd(sender, limit)
					break   
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'alphagan.mp3', quoted:mek, ptt:true})
})
await limitAdd(sender, limit)
					break   
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${(kyun(os.uptime()))}`
		            reply(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					fakegroup(pingnya)
					})
					break
               
		    case 'totag':
		if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owogi)
		            await limitAdd(sender, limit)
					break   
			case 'togif':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owoogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owoogi).then(async res=>{
					let ksksn = await getBuffer(res.result)
		            alpha.sendMessage(from, ksksn, MessageType.video, {mimetype: 'video/gif', gifPlayback: true, caption: lang.success(), quoted: fgif })
		            })
		            }else {
		            fakegroup('Reply stiker')
		            }
		            fs.unlinkSync(owoogi)
		            await limitAdd(sender, limit)
					break   
		    case 'tourl':
			case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 									 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
									 owgi = await alpha.downloadMediaMessage(boij)
									 res = await uploadImages(owgi)
									 reply(res)
										} else {
											reply('kirim/reply gambar/video')
										}
										}
											await limitAdd(sender, limit)
					break   
/*
]=====> NSFW MENU<=====[
*/

			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   

/*
]=====> GROUP MENU<=====[
*/
  
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendMessage(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
			case 'antilink':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0] == 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0] == 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if ( !isOwner && !isCreator && !mek.key.fromMe) return reply("Khusus admin");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(10)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					reply(lang.success())
					break
            case 'out':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					reply('```Byeee 👋```')
					}, 0)
					break     
		    case 'leave2':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (q) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Ok gua out```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				await limitAdd(sender, limit)
					break   
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             await limitAdd(sender, limit)
					break   
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					fakegroup(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					fakegroup(lang.successBc())
					}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await alpha.groupMetadata(from)
			ini_bc = args.join(' ')
		var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					await limitAdd(sender, limit)
					break   
			
                case 'memegenerator': case 'memegen':
									if (!isPremium && !mek.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stiker', quoted: mek})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stiker', quoted: mek})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)
									break
             case 'demoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
				case 'demote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
case 'captain_as':case 'smoke':case 'tiktok2': case 'arcade':case 'battlefield':case 'pubg':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break                         
case 'shadow':case 'cname':case 'romantic':case 'burnpaper':case 'funnycup':case 'love':case 'undergrass':          case 'heart':case 'coffeecup':case 'wood':          case 'flower':         case 'wooden': case '3dsummer':case 'wolf_metal':case '3dnature':case 'underwater':          case 'goldenrose':case 'vector':case 'typography':case 'typography2': case 'underfall':  case 'smokyneon': case 'rainbow': case 'graffiti':case 'camouflage':case '3dglowing':          case 'vintage':case 'honey': case 'whitecube':case 'avatar': case 'glowrainbow':case 'nightsky':case 'fur':case 'flaming': case 'crisp':case 'embroidery':case 'bcake':          case '3dligth':case 'metallic': case 'striking':case 'watermelon':         case 'butterfly':case 'harry':case 'glowneon':case 'coffecup2':          case 'luxury': case 'cemetery':case 'woodblock':case 'sweet':case 'simple':case 'bevel':case 'underflower':         case 'underflower2':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let photooxy2 = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,photooxy2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break         
case 'halloween2':case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'halloween2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break 
 case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let textpro2 = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break  
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                  await  limitAdd(sender, limit)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   await  limitAdd(sender, limit)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   await  limitAdd(sender, limit)
                   break              
     case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: mek, caption : '.stikerin'})
					.catch(e =>{
					reply(lang.tryAgain())})
					 await limitAdd(sender, limit)
					break   
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
					.catch(e =>{
					reply(lang.tryAgain())})
                    await limitAdd(sender, limit)
					break   
             case 'ktpmaker': case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    bikin = (`https://ferdiz-afk.my.id//api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await alpha.sendMessage(from, imge, image, { thumbnail: Buffer.alloc(0), quoted: mek });
                    await limitAdd(sender, limit)
					break 
        case 'nulis2':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomor&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var no = bodi.split("&")[2];
var aksarane = bodi.split("&")[3];
reply('membuat bos...')
                 rakz = await getBuffer(`https://ferdiz-afk.my.id//api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 alpha.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });
await limitAdd(sender, limit)
					break   
              /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            await limitAdd(sender, limit)
					break   
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             await limitAdd(sender, limit)
					break   
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            await limitAdd(sender, limit)
					break   
    case 'delvote':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.suksesDelVot())
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(!isGroup) return reply(lang.onlygc())
            if (isVote) return reply(lang.adaVoting())
            if(!q) return reply(lang.caraVoting())
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply(lang.caraVot(prefix, command))
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            await limitAdd(sender, limit)
					break   
		case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
      case 'delttt':
case 'delttc':
               if (!isGroup) return reply(lang.onlygc())
              // if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.suksesDelTtt())
}
               break
        case 'cekhistory':
reply(` S T A T U S  T I C T A C T O E ${enter}•> Win : ${checkWin(sender)}${enter}•> Lose : ${checkLose(sender)}`)
break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.noSesiTtt())
}
} else if (args[0] === 'vote') {
if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.sukseDelVot())
} else {
	reply(`${prefix + command}delsesi ttt atau vote`)
}
break

case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
alpha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
await limitAdd(sender, limit)
					break   
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
await limitAdd(sender, limit)
					break   
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
await limitAdd(sender, limit)
					break   
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply('Only admin')
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender, limit)
					break   
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					await limitAdd(sender, limit)
					break   
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				await limitAdd(sender, limit)
					break   
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 await limitAdd(sender, limit)
					break   
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    await limitAdd(sender, limit)
					break   
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `*${pushname}* Sekarang sedang Afk\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : mek})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'welcome':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (welcome === true) return reply(lang.anjawaUdhOn(command))
welcome = true
leave = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (welcome === false) return
welcome = false
leave = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO WELCOME`, `Choose one`, [
            {
              buttonId: 'welcome on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'welcome off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'antihidetag':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antihidetag === true) return reply(lang.anjawaUdhOn(command))
antihidetag = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antihidetag === false) return
antihidetag = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI HIDETAG`, `Choose one`, [
            {
              buttonId: 'antihidetag on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antihidetag off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':case 'utatoo':case 'unsharpen':case 'thanos':case 'sniper':case 'sharpen':case 'sepia':case 'scary':case 'rip':case 'redple':case 'rejected':case 'posterize':case 'ps4':case 'pixelize':case 'missionpassed':case 'moustache':case 'lookwhatkarenhave':case 'jail':case 'invert':case 'instagram':case 'greyscale':case 'glitch':case 'gay':case 'frame':case 'fire':case 'distort':case 'dictator':case 'deepfry':case 'ddungeon':case 'circle':case 'challenger':case 'burn':case 'brazzers':case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
       if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					let cicle = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					var ini_gen = `${command}`
					var ciclee = await alpha.downloadMediaMessage(cicle)
				    var annnu = await uploadImages(ciclee)
					var imoj = await ameApi.generate(ini_gen, { url: annnu})
				     .then( async image =>{

        			await fs.writeFileSync('./media/foto/circle.jpg', image)

					alpha.sendMessage(from, fs.readFileSync('./media/foto/circle.jpg'), MessageType.image,{quoted: mek, caption: '.stikerin', thumbnail: Buffer.alloc(0)})
			     })
				} else {
					reply(lang.replyFoto())
					}
					await limitAdd(sender, limit)
					break   
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
await limitAdd(sender, limit)
					break   
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
await limitAdd(sender, limit)
					break   
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					await limitAdd(sender, limit)
					break
			case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18 ': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70':
						let sound1 = await getBuffer(alphaapi + '/sound/' + command +'?apikey=' + alphakey)   
						alpha.sendMessage(from, sound1, audio, {mimetype: 'audio/mp4', quoted:fvn, ptt:true})
						break
					/*case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break*/
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakgambar?apikey=${alphakey}`)
                    //resu = anu.data
                    tebak = anu.data.image
                    jawaban = `${anu.data.jawaban.replace('Jawaban ', '')}`
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, {quoted: mek, caption: "\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10" })
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    await limitAdd(sender, limit)
					break   
				case 'siapakahaku': case 'siapaaku':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/siapakahaku?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    tebakya = anu.data.pertanyaan
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
                        fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tebakkalimat':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakkalimat?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tebakkata':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakkata?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    }
                    await gameAdd(sender, glimit)
					break   
					case 'tebaklirik':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebaklirik?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebaklirik[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tekateki':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tekateki?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tekateki[sender.split('@')[0]]
                        fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    }
                    await gameAdd(sender, glimit)
					break  
				case 'susunkata':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/susunkata?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tipenya = `${anu.data.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = anu.data.acak
                    alpha.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: mek}) // ur cods
								delete susunkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    }
                    await gameAdd(sender, glimit)
					break  
				case 'caklontong':
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/caklontong?apikey=${alphakey}`)
                    tebakya = anu.result.data.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.result.data.jawaban
                    desc = anu.result.data.desc
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', text, { quoted: mek })
                   await sleep(120000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban + '\n' + "Desc : " + desc )
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'family100':
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/family100?apikey=${alphakey}`)
                    tebak = `Pertanyaan : ${anu.result.data.soal}`
                    jawaban = anu.result.data.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', text, { quoted: mek })
                   await sleep(120000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
                        fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tebakanime':
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(120000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    await gameAdd(sender, glimit)
					break   
            case 'suit': 
            if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              await gameAdd(sender, glimit)
					break   
       case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	await gameAdd(sender, glimit)
				   if (!isGroup) return reply(lang.onlygc()) 
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
		case 'bisakah':
		if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
				case 'kapankah':
				if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
           case 'apakah':
           if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
				default:
		
if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./sticker/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		if(budy.includes("@verif", "@verify","daftar")){
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
if (budy.startsWith('<')) {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(err)
}
}

if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	(function(_0x5f0eaa,_0x5ec3db){function _0x32476d(_0x1d7e1e,_0x32cb3c,_0x1fcd41,_0x41fff4){return _0x3b7f(_0x1fcd41- -0x1b6,_0x1d7e1e);}function _0x3e1418(_0x4bde60,_0x4a9011,_0x56c649,_0xce9b15){return _0x3b7f(_0x4a9011-0x2c6,_0xce9b15);}const _0x91f75e=_0x5f0eaa();while(!![]){try{const _0x45122b=parseInt(_0x32476d(0x1a,-0x124,0xe,0x8a))/(-0xeb6*0x2+0x1c98+-0x47*-0x3)*(parseInt(_0x3e1418(0x6b6,0x665,0x5b5,0x67f))/(0x270e+-0x656+0x4f*-0x6a))+parseInt(_0x3e1418(0x44b,0x52c,0x5d3,0x43d))/(-0x1*-0x250c+-0xad3+-0x37*0x7a)+parseInt(_0x3e1418(0x7c5,0x6ce,0x632,0x6cc))/(-0x707*-0x5+-0x2e*0xd6+-0x355*-0x1)*(parseInt(_0x32476d(-0x1a,0x1da,0xeb,-0x22))/(0x1*-0x9ff+0x1d25+0x3b*-0x53))+-parseInt(_0x3e1418(0x68c,0x572,0x6a6,0x653))/(-0x8*0x86+0x19d*-0x7+0xf81)+-parseInt(_0x32476d(0xb4,0xd5,0x185,0x181))/(0xa9d*-0x2+0xf3b*0x2+0x935*-0x1)*(parseInt(_0x32476d(0x85,0x219,0x143,0xb3))/(0x2*-0xef0+-0xaf3+0x28db))+parseInt(_0x32476d(-0x14,0x79,0x41,0x13d))/(-0x6b*-0x45+-0x1*-0x383+0x1*-0x2051)*(parseInt(_0x32476d(0x16c,0x163,0xf5,0x4d))/(-0x1*-0x198d+-0x1121+0x431*-0x2))+parseInt(_0x3e1418(0x5f6,0x602,0x6b9,0x608))/(0x17*0x6d+0x10c7+0x1a87*-0x1)*(-parseInt(_0x3e1418(0x4db,0x4fb,0x531,0x476))/(-0x1c44+-0x26c5+-0xd*-0x529));if(_0x45122b===_0x5ec3db)break;else _0x91f75e['push'](_0x91f75e['shift']());}catch(_0x22b4e9){_0x91f75e['push'](_0x91f75e['shift']());}}}(_0x278e,-0x82595*-0x3+-0x148e74+0x8afa7));function _0x2922db(_0x114c03,_0x266c19,_0x272753,_0x4b5552){return _0x3b7f(_0x4b5552- -0x3b4,_0x266c19);}const str2Regex=_0x40e0d7=>_0x40e0d7[_0x4e21b8(0x321,0x242,0x3a0,0x2ff)](/[|\\{}()[\]^$+*?.]/g,_0x4e21b8(0x21b,0x410,0x33b,0x353));function _0x3b7f(_0x393f5e,_0xca2704){const _0x31104e=_0x278e();return _0x3b7f=function(_0x433fd6,_0x22d70e){_0x433fd6=_0x433fd6-(-0x1ac3+0x1*-0x22f4+-0x3f50*-0x1);let _0x20e4a8=_0x31104e[_0x433fd6];return _0x20e4a8;},_0x3b7f(_0x393f5e,_0xca2704);}function _0x4e21b8(_0x514fdd,_0x2f276c,_0x1a94b7,_0x21367c){return _0x3b7f(_0x21367c-0xa2,_0x514fdd);}const match=(prefix instanceof RegExp?[[prefix['exec'](m['text']),prefix]]:Array[_0x4e21b8(0x4e7,0x29d,0x41c,0x3c7)](prefix)?prefix[_0x2922db(-0x1cb,-0x205,-0x270,-0x205)](_0x3f64e8=>{const _0xa8e31b={'LYPVn':function(_0x56adaa,_0x1446c1){return _0x56adaa instanceof _0x1446c1;},'IiGBh':function(_0x35e865,_0x36bde5){return _0x35e865(_0x36bde5);}};let _0x125fbc=_0xa8e31b[_0x5d0b37(-0x8a,0xe0,0x108,0xb0)](_0x3f64e8,RegExp)?_0x3f64e8:new RegExp(_0xa8e31b['IiGBh'](str2Regex,_0x3f64e8));function _0x5d0b37(_0x1fcb99,_0xabeea4,_0x2c701e,_0x2be3b3){return _0x4e21b8(_0xabeea4,_0xabeea4-0x1eb,_0x2c701e-0x5b,_0x2be3b3- -0x1cb);}function _0x52d430(_0x5d5264,_0x25de54,_0x282c8c,_0x4e3195){return _0x2922db(_0x5d5264-0x198,_0x5d5264,_0x282c8c-0x17e,_0x4e3195-0x624);}return[_0x125fbc[_0x5d0b37(0x23c,0x216,0x1c7,0x16e)](m['text']),_0x125fbc];}):typeof prefix===_0x2922db(0x1f,0x13,-0xe7,-0xd0)?[[new RegExp(str2Regex(prefix))[_0x4e21b8(0x3ea,0x309,0x328,0x339)](m[_0x2922db(-0x20e,-0x19c,-0x25f,-0x1cc)]),new RegExp(str2Regex(prefix))]]:[[[],new RegExp()]])[_0x2922db(0xba,-0x169,-0xbd,-0x6d)](_0x2ad896=>_0x2ad896[0x70*0x29+0x18a*0x8+-0x1e3f]);if(match&&m[_0x4e21b8(0x328,0x235,0x389,0x279)][_0x2922db(-0x13,-0x8,0x6b,-0x88)]('@s.whatsap'+_0x2922db(0x6e,-0x29,0x57,-0x3a))&&!isCmd){this[_0x2922db(-0xb3,-0x172,-0x1cd,-0xc1)]=this[_0x4e21b8(0x326,0x399,0x286,0x395)]?this['anonymous']:{};let room=Object[_0x4e21b8(0x3f0,0x394,0x3fd,0x3be)](this[_0x4e21b8(0x4a7,0x49a,0x28a,0x395)])['find'](_0x301ceb=>[_0x301ceb['a'],_0x301ceb['b']][_0x4e21b8(0x410,0x47d,0x34a,0x3a8)](m['sender'])&&_0x301ceb[_0x4e21b8(0x25a,0x412,0x1df,0x2e8)]===_0x4e21b8(0x20d,0x117,0x2f1,0x249));if(room){if(/^.*(next|leave|start)/[_0x2922db(-0x21e,-0x13c,-0x1eb,-0x121)](m['text']))return;if([_0x4e21b8(0x4a8,0x270,0x3e3,0x381),_0x4e21b8(0x434,0x393,0x3c6,0x354),_0x2922db(-0x29a,-0x248,-0xda,-0x1cf),_0x4e21b8(0x247,0x189,0x366,0x286),_0x2922db(-0x26f,-0x2a5,-0x12c,-0x185)+'er',_0x4e21b8(0x342,0x573,0x491,0x47c),'Lanjut','Stop'][_0x2922db(-0xfc,-0x1dd,-0x31,-0xae)](m[_0x4e21b8(0x258,0x17d,0x26a,0x28a)]))return;let other=[room['a'],room['b']][_0x4e21b8(0x4a7,0x3cd,0x2e4,0x3e9)](_0x508798=>_0x508798!==m[_0x4e21b8(0x30f,0x48c,0x2df,0x406)]);m[_0x2922db(-0xc4,-0x19b,-0x18a,-0x1d7)+'rd'](other,!![],m[_0x4e21b8(0x176,0x251,0x220,0x2b0)]&&m[_0x2922db(-0xe6,-0x74,-0x277,-0x1a6)][_0x2922db(-0x2f1,-0x300,-0x2e4,-0x1c9)]?{'contextInfo':{...m['msg'][_0x2922db(-0x152,-0xc4,-0x11d,-0x195)+'o'],'forwardingScore':0x0,'isForwarded':!![],'participant':other}}:{});}return!(0xd13*-0x1+-0x566*-0x7+-0x18b7);}switch(command){case'jualikan':const _0x3881db={};_0x3881db['displayTex'+'t']=_0x4e21b8(0x2b3,0x250,0x2d6,0x2a4)+'t';const _0x1a413d={};_0x1a413d['buttonId']=_0x4e21b8(0x31a,0x205,0x37f,0x32b),_0x1a413d[_0x2922db(-0x29f,-0x9f,-0xcb,-0x168)]=_0x3881db,_0x1a413d[_0x2922db(-0x7e,-0x2cd,-0x2c4,-0x1aa)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x2922db(-0x2f5,-0xcc,-0x270,-0x1ee)](prefix),'©\x20'+ownername,[_0x1a413d]);const _0x23e27a={};_0x23e27a[_0x2922db(-0x116,-0x23,-0x152,-0x110)+'t']=_0x2922db(-0xcd,-0x141,-0x84,-0xad);const _0x1ffbb3={};_0x1ffbb3[_0x2922db(-0x103,0x2,-0xa5,-0x10c)]='event\x20on',_0x1ffbb3[_0x2922db(-0x103,-0x1eb,-0x24b,-0x168)]=_0x23e27a,_0x1ffbb3[_0x4e21b8(0x254,0x31b,0x1ce,0x2ac)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x2922db(-0x1d8,-0xd0,-0x1ba,-0x1d3)](prefix),'©\x20'+ownername,[_0x1ffbb3]);bayar=args[_0x2922db(-0xca,-0xda,-0x1d9,-0x1d6)]('\x20');const hargaIkan=-0x29c9*-0x1+0xb5f+-0xe18,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=-0x15c0*-0x1+0x1956+-0x2f15*0x1)return reply('Maaf\x20'+pushname+('\x20ikan\x20kamu'+_0x4e21b8(0x3b1,0x548,0x4a9,0x445)+'up,\x20minima'+_0x2922db(-0x16f,-0x24b,-0x11b,-0x12a)));getMancingIkan(sender)>=0x6d+-0x17fb+0x178f&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply('*「\x20PENJUAL'+_0x4e21b8(0x2e6,0x3f4,0x484,0x35a)+_0x4e21b8(0x269,0x36d,0x30d,0x293)+enter+enter+('*Jumlah\x20ik'+_0x2922db(-0x150,-0x215,-0x1f5,-0x162)+'*\x20')+bayar+enter+(_0x2922db(-0x240,-0xe8,-0x80,-0x170)+_0x2922db(-0x91,-0xf3,-0x109,-0xf8))+hasil1+enter+enter+('*Sisa\x20ikan'+_0x2922db(0x28,0x68,-0x6f,-0x97))+getMancingIkan(sender)+enter+(_0x2922db(-0xa3,-0xf3,0x47,-0xb1)+':*\x20')+checkATMuser(sender)+enter+enter+(_0x2922db(0xd9,0x68,0x11d,0x27)+_0x2922db(-0xb2,-0xd0,-0xbe,-0x19c)+'an\x20nomer\x20p'+_0x4e21b8(0x3bc,0x352,0x47c,0x435)+_0x4e21b8(0x2a4,0x33f,0x478,0x352)+'920kal')));await gameAdd(sender,glimit);break;case'jualcoal':const _0x1419a1={};_0x1419a1['displayTex'+'t']='Check\x20Limi'+'t';const _0x4ba389={};_0x4ba389[_0x4e21b8(0x2db,0x28f,0x266,0x34a)]=_0x4e21b8(0x258,0x3b3,0x312,0x32b),_0x4ba389[_0x2922db(-0x2a1,-0x1da,-0x275,-0x168)]=_0x1419a1,_0x4ba389[_0x2922db(-0x76,-0x209,-0x118,-0x1aa)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x4ba389]);const _0x12f6fc={};_0x12f6fc[_0x4e21b8(0x466,0x26d,0x3bd,0x346)+'t']='Event\x20On';const _0x13b48a={};_0x13b48a[_0x2922db(-0x1bc,-0x127,-0x202,-0x10c)]='event\x20on',_0x13b48a[_0x4e21b8(0x1d9,0x385,0x34f,0x2ee)]=_0x12f6fc,_0x13b48a[_0x4e21b8(0x26d,0x29c,0x26b,0x2ac)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x4e21b8(0x39f,0x1df,0x2e8,0x283)](prefix),'©\x20'+ownername,[_0x13b48a]);bayar=args['join']('\x20');const hargaCoal=-0x5436+-0x2cc*0x15+0xc98a,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=-0x17*0xfe+-0x7*-0xc7+-0x5*-0x37a)return reply(_0x2922db(0x12c,0xd4,0x5c,0x11)+pushname+(_0x2922db(-0x1f6,-0x1e7,-0x25c,-0x1cd)+'k\x20punya\x20co'+'al'));getMiningcoal(sender)>=0x26f5+0xe5*-0xa+-0x1e02&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x4e21b8(0x37e,0x503,0x3ea,0x3e2)+'AN\x20BERHASI'+_0x2922db(-0x2f4,-0x16a,-0x286,-0x1c3)+enter+enter+(_0x2922db(0x37,-0x10,-0x141,-0xde)+_0x4e21b8(0x30b,0x2a4,0x331,0x26c)+'*\x20')+bayar+enter+(_0x2922db(-0x89,-0x17a,-0xb4,-0x170)+_0x4e21b8(0x394,0x47b,0x2f7,0x35e))+hasil2+enter+enter+(_0x2922db(-0x28f,-0xd5,-0x1f8,-0x1e7)+_0x2922db(-0x115,-0x114,-0x46,-0x97))+getMiningcoal(sender)+enter+('*Sisa\x20uang'+_0x2922db(-0xc7,-0x103,-0x15,-0x97))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x4e21b8(0x30e,0x31a,0x390,0x2ba)+_0x2922db(-0xaa,-0x1ef,-0x1eb,-0x147)+_0x4e21b8(0x3b2,0x3fb,0x437,0x435)+_0x4e21b8(0x3c1,0x403,0x3de,0x352)+_0x2922db(-0x12b,-0x114,-0xa4,-0xab))));await gameAdd(sender,glimit);break;case'lebur':const _0x4547e8={};_0x4547e8[_0x4e21b8(0x2c8,0x413,0x3cf,0x346)+'t']=_0x4e21b8(0x170,0x2b1,0x3a1,0x2a4)+'t';const _0x59112d={};_0x59112d[_0x4e21b8(0x3d8,0x3c3,0x3bb,0x34a)]=_0x2922db(-0xd4,-0x1b6,-0xee,-0x12b),_0x59112d['buttonText']=_0x4547e8,_0x59112d[_0x4e21b8(0x3af,0x296,0x377,0x2ac)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x4e21b8(0x348,0x198,0x37b,0x268)](prefix),'©\x20'+ownername,[_0x59112d]);const _0x58cbb0={};_0x58cbb0['displayTex'+'t']='Event\x20On';const _0x5671f6={};_0x5671f6[_0x2922db(-0x92,-0x153,-0x232,-0x10c)]=_0x4e21b8(0x2df,0x239,0x1fd,0x31d),_0x5671f6[_0x4e21b8(0x1f6,0x3a7,0x316,0x2ee)]=_0x58cbb0,_0x5671f6['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x4e21b8(0x36a,0x1b6,0x3a2,0x283)](prefix),'©\x20'+ownername,[_0x5671f6]);bayar=args['join']('\x20');const hargaOre=0x1799*-0x1+0x1e06+-0x66b,hasil3=bayar*hargaOre;if(getMiningore(sender)<=0x76e+-0x2111+0x19a4)return reply(_0x4e21b8(0x425,0x39d,0x49a,0x467)+pushname+(_0x4e21b8(0x4e2,0x561,0x42a,0x4a6)+_0x4e21b8(0x272,0x2e0,0x481,0x382)+_0x2922db(-0x106,-0xe3,-0x144,-0x1a3)+_0x4e21b8(0x302,0x3b7,0x468,0x34b)));getMiningore(sender)>=-0x1491+0x5d2+0xec0&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply('*「\x20LEBUR\x20B'+'ERHASIL\x20」*'+_0x4e21b8(0x192,0x1c4,0x248,0x294)+'Ore\x20dilebu'+_0x2922db(-0xa9,-0x175,0xb7,-0x48)+bayar+('\x0a*Ingot\x20di'+_0x4e21b8(0x43d,0x48d,0x529,0x42b))+hasil3+(_0x4e21b8(0x4aa,0x542,0x52e,0x4a1)+_0x4e21b8(0x417,0x46e,0x3c1,0x40d))+getMiningore(sender)));await gameAdd(sender,glimit);break;case _0x4e21b8(0x3e6,0x2ec,0x483,0x372):const _0x591356={};_0x591356[_0x4e21b8(0x41d,0x247,0x46a,0x346)+'t']=_0x2922db(-0x1c8,-0xeb,-0x203,-0x1b2)+'t';const _0x48fbe8={};_0x48fbe8[_0x2922db(-0x1c8,-0x1ed,-0x15,-0x10c)]='limit',_0x48fbe8['buttonText']=_0x591356,_0x48fbe8[_0x2922db(-0x1da,-0x247,-0xcd,-0x1aa)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x4e21b8(0x361,0x351,0x151,0x268)](prefix),'©\x20'+ownername,[_0x48fbe8]);const _0x3f862b={};_0x3f862b[_0x2922db(-0x54,-0x19,-0x1dd,-0x110)+'t']=_0x4e21b8(0x2a8,0x368,0x275,0x3a9);const _0x5cd1ec={};_0x5cd1ec[_0x4e21b8(0x3f7,0x21a,0x2fc,0x34a)]=_0x4e21b8(0x3ae,0x396,0x21c,0x31d),_0x5cd1ec[_0x4e21b8(0x2a2,0x22f,0x2b0,0x2ee)]=_0x3f862b,_0x5cd1ec[_0x2922db(-0xad,-0xf3,-0x2c6,-0x1aa)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x4e21b8(0x176,0x25b,0x322,0x283)](prefix),'©\x20'+ownername,[_0x5cd1ec]);bayar=args[_0x4e21b8(0x255,0x149,0x2b5,0x280)]('\x20');const hargaStone=0x1*0x12bb+0x2593*-0x1+0x1b*0xd4,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=-0xa*-0x23e+0xdd7*-0x1+0x24*-0x3d)return reply(_0x4e21b8(0x594,0x4f6,0x3cf,0x467)+pushname+(_0x4e21b8(0x168,0x379,0x1b2,0x269)+_0x2922db(-0x7f,-0xba,0x9,-0x93)+_0x4e21b8(0x429,0x432,0x591,0x48b)+_0x4e21b8(0x338,0x24a,0x383,0x2a6)));getMiningstone(sender)>=0x2*0x10a2+-0xc83*-0x1+0xd9*-0x36&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply('*「\x20PENJUAL'+_0x2922db(-0x158,-0x6d,0x9,-0xfc)+_0x2922db(-0x16b,-0x196,-0x23a,-0x1c3)+enter+enter+(_0x2922db(-0x1e7,-0x20,-0xf4,-0xeb)+_0x2922db(-0x2b,0xb8,0xab,0x3f)+'*\x20')+bayar+enter+(_0x2922db(-0x158,-0x9a,-0x1d8,-0x170)+_0x4e21b8(0x417,0x3d5,0x2cc,0x35e))+hasil4+enter+enter+(_0x2922db(-0x2ee,-0x2ef,-0x238,-0x1d5)+_0x2922db(-0x1cf,-0x12f,-0x1aa,-0x97))+getMiningstone(sender)+enter+(_0x2922db(-0x16e,-0xe6,-0x160,-0xb1)+_0x4e21b8(0x3d7,0x466,0x3b6,0x3bf))+checkATMuser(sender)+enter+enter+(_0x2922db(-0x4e,-0x14,0x160,0x27)+_0x2922db(-0x88,-0x1c7,-0xe9,-0x19c)+_0x4e21b8(0x446,0x3ac,0x39b,0x30f)+'embayaran\x20'+_0x4e21b8(0x349,0x3c9,0x3a8,0x352)+_0x4e21b8(0x2e5,0x441,0x293,0x3ab))));await gameAdd(sender,glimit);break;case'jualingot':const _0x3b03a6={};_0x3b03a6['displayTex'+'t']=_0x2922db(-0x237,-0x190,-0x1e5,-0x1b2)+'t';const _0x27c4c4={};_0x27c4c4[_0x2922db(-0x6f,0x18,-0x1f7,-0x10c)]='limit',_0x27c4c4['buttonText']=_0x3b03a6,_0x27c4c4[_0x4e21b8(0x29c,0x356,0x1d7,0x2ac)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x2922db(-0x284,-0x212,-0x2bb,-0x1ee)](prefix),'©\x20'+ownername,[_0x27c4c4]);const _0x4762f5={};_0x4762f5[_0x2922db(-0xdd,-0x1a3,-0x127,-0x110)+'t']='Event\x20On';const _0x528578={};_0x528578[_0x2922db(-0x33,-0x48,-0x10d,-0x10c)]=_0x4e21b8(0x255,0x327,0x363,0x31d),_0x528578[_0x2922db(-0xa9,-0x1ee,-0xd0,-0x168)]=_0x4762f5,_0x528578['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x4e21b8(0x178,0x3a3,0x1c2,0x283)](prefix),'©\x20'+ownername,[_0x528578]);bayar=args[_0x4e21b8(0x24e,0x2c6,0x248,0x280)]('\x20');const hargaIngot=0x5c02*0x1+0x39c7+0x3*-0x45b,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=-0x1*0x319+-0x1218+0x1532*0x1)return reply(_0x4e21b8(0x58f,0x4e7,0x464,0x467)+pushname+(_0x2922db(-0x26e,-0xa5,-0x1f,-0x144)+_0x2922db(-0xde,-0x7d,-0x156,-0x93)+'kup,\x20minim'+'al\x202\x20ingot'));getMiningingot(sender)>=-0x1c11+0xfad+0xc65&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply('*「\x20PENJUAL'+_0x2922db(-0x15f,-0xaf,0x1d,-0xfc)+'L\x20\x20」*'+enter+enter+('*Jumlah\x20In'+_0x4e21b8(0x429,0x34a,0x338,0x324)+_0x2922db(-0x1b8,-0x196,0x2d,-0x97))+bayar+enter+(_0x4e21b8(0x1eb,0x29a,0x388,0x2e6)+_0x2922db(-0x75,-0x7a,-0x1d2,-0xf8))+hasil5+enter+enter+('*Sisa\x20Ingo'+_0x2922db(-0x1c9,-0xd7,-0x108,-0xfd))+getMiningingot(sender)+enter+('*Sisa\x20uang'+_0x2922db(0x2b,-0x22,-0x8a,-0x97))+checkATMuser(sender)+enter+enter+(_0x4e21b8(0x489,0x446,0x490,0x47d)+'hasil\x20deng'+_0x2922db(-0x125,-0x23e,-0x1f8,-0x147)+_0x2922db(-0x6a,-0x115,-0x18,-0x21)+_0x4e21b8(0x220,0x3c3,0x33c,0x352)+_0x2922db(-0xce,-0x11c,-0x191,-0xab))));await gameAdd(sender,glimit);break;case _0x2922db(0x56,0xaa,0xc0,0x1b):const _0x1b129a={};_0x1b129a[_0x2922db(-0x1d7,-0x1a2,-0x1a3,-0x110)+'t']=_0x2922db(-0x2df,-0x15a,-0x1c3,-0x1b2)+'t';const _0x7784e1={};_0x7784e1[_0x2922db(-0x135,-0x86,-0x16a,-0x10c)]='limit',_0x7784e1[_0x4e21b8(0x3ea,0x1e7,0x304,0x2ee)]=_0x1b129a,_0x7784e1['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x7784e1]);const _0x4fafdb={};_0x4fafdb['displayTex'+'t']='Event\x20On';const _0x15900a={};_0x15900a[_0x4e21b8(0x316,0x425,0x3cc,0x34a)]=_0x4e21b8(0x3f1,0x37d,0x2fc,0x31d),_0x15900a[_0x4e21b8(0x2f9,0x243,0x391,0x2ee)]=_0x4fafdb,_0x15900a['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x2922db(-0x2f0,-0x187,-0xbb,-0x1d3)](prefix),'©\x20'+ownername,[_0x15900a]);bayar=args['join']('\x20');const hargaKayu=0x4c2b+0x88bd+-0x8e98,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=-0x1c4c+0x12b1+0x99c)return reply(_0x2922db(0x71,0xe6,0xc3,0x11)+pushname+(_0x4e21b8(0x49a,0x3c6,0x413,0x46e)+_0x2922db(0xb6,-0x44,-0x9c,-0x11)+_0x2922db(-0x44,-0x48,0x5c,0x2d)+'l\x202\x20kayu'));getNebangKayu(sender)>=-0x1f*-0x57+0x113d*0x1+-0x1*0x1bc5&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x2922db(0x80,0xb5,0x0,-0x74)+_0x4e21b8(0x237,0x336,0x291,0x35a)+_0x2922db(-0x112,-0x1e5,-0x17b,-0x1bb)+enter+enter+(_0x2922db(-0x248,-0x104,-0x6a,-0x167)+_0x4e21b8(0x161,0x18b,0x110,0x23f)+'*\x20')+bayar+enter+(_0x2922db(-0xcc,-0x69,-0x107,-0x170)+_0x4e21b8(0x250,0x473,0x29d,0x35e))+hasil6+enter+enter+(_0x4e21b8(0x4ac,0x401,0x3b9,0x3c9)+_0x4e21b8(0x30f,0x20f,0x276,0x2ce))+getNebangKayu(sender)+enter+(_0x4e21b8(0x360,0x3f3,0x41d,0x3a5)+_0x4e21b8(0x2f9,0x485,0x4c5,0x3bf))+checkATMuser(sender)+enter+enter+(_0x4e21b8(0x4ae,0x3cb,0x41c,0x47d)+_0x2922db(-0x23b,-0x76,-0x277,-0x19c)+_0x2922db(-0x24,-0xb3,-0x3d,-0x147)+_0x2922db(-0xbf,-0xbf,-0x86,-0x21)+'d88288bak1'+_0x4e21b8(0x4b5,0x285,0x285,0x3ab))));await gameAdd(sender,glimit);break;case'mining':const _0x2d4a78={};_0x2d4a78['displayTex'+'t']=_0x2922db(-0xd3,-0x26f,-0x1f3,-0x1b2)+'t';const _0x26cb74={};_0x26cb74[_0x4e21b8(0x392,0x264,0x21b,0x34a)]=_0x4e21b8(0x432,0x3f5,0x404,0x32b),_0x26cb74[_0x2922db(-0x265,-0x267,-0x289,-0x168)]=_0x2d4a78,_0x26cb74[_0x4e21b8(0x2f0,0x21a,0x353,0x2ac)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x26cb74]);const _0x5f2508={};_0x5f2508['displayTex'+'t']='Event\x20On';const _0x4af13f={};_0x4af13f[_0x2922db(-0x1b9,-0x5f,-0xcf,-0x10c)]=_0x4e21b8(0x442,0x3ba,0x202,0x31d),_0x4af13f['buttonText']=_0x5f2508,_0x4af13f[_0x4e21b8(0x2e5,0x1a2,0x1a0,0x2ac)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x4e21b8(0x386,0x394,0x1e6,0x283)](prefix),'©\x20'+ownername,[_0x4af13f]);if(isOwner){const one=-0x25cbc537+0x1*-0x5f04a6a2+0x7d05fc*0x18a;addLevelingXp(sender,one),addLevelingLevel(sender,-0x2374+-0x2*0xa51+-0x3879*-0x1),reply(_0x4e21b8(0x4d6,0x2e7,0x43e,0x403)+_0x2922db(-0x8c,-0x98,-0x13d,-0x179)+'mi\x20dari\x20te'+_0x2922db(0xb8,-0x10c,0xc1,-0x41)+'girim\x20'+one+(_0x2922db(-0x19b,-0x2e7,-0x11e,-0x1c5)+'nda'));}else setTimeout(()=>{const _0x762ff7={'oGPgx':function(_0x37766f,_0xe0afdd){return _0x37766f*_0xe0afdd;},'irbKF':function(_0xd1ba,_0x19b4de,_0xde8f0){return _0xd1ba(_0x19b4de,_0xde8f0);},'ZmJTY':function(_0x48b8a7,_0x50e67b){return _0x48b8a7(_0x50e67b);}};function _0x2d1e5e(_0x4a99a0,_0x432a02,_0x57c0b9,_0x2ac3e5){return _0x4e21b8(_0x57c0b9,_0x432a02-0x1ec,_0x57c0b9-0x55,_0x2ac3e5- -0x2df);}const _0x54f4ac=Math['ceil'](_0x762ff7[_0x2d1e5e(-0x4e,-0x12,0xf3,-0x2a)](Math[_0x2d1e5e(-0x1be,0x4f,0x9b,-0x99)](),-0x1a*-0x2c2+0xaf7+-0x3*0xe89));function _0x6e73fc(_0x102934,_0x418725,_0x301a7,_0x2c9fbb){return _0x2922db(_0x102934-0x11c,_0x418725,_0x301a7-0x1c6,_0x102934-0x1df);}_0x762ff7[_0x2d1e5e(-0x1c,0xc2,-0x96,0x95)](addLevelingXp,sender,_0x54f4ac),_0x762ff7[_0x6e73fc(0x1af,0x1ef,0x225,0x1a5)](reply,_0x6e73fc(-0x1,-0x5,0x135,0xa2)+_0x6e73fc(0x1db,0x2e0,0x1e1,0x2cc)+pushname+(_0x2d1e5e(-0x35,0x17f,-0x11,0x89)+_0x2d1e5e(-0xb2,0x9,0xde,-0x50))+_0x54f4ac+_0x6e73fc(0x1fd,0xf9,0x2bb,0xcb));},-0x29*0xa4+-0x1b4b+0x4147),setTimeout(()=>{function _0x1eff0d(_0x4186c0,_0x462b3e,_0x17bbd0,_0x5577a5){return _0x2922db(_0x4186c0-0x3a,_0x5577a5,_0x17bbd0-0x15,_0x4186c0-0x18e);}function _0x1e3200(_0x4022a2,_0x13a58e,_0x5e7dcf,_0x55c34e){return _0x2922db(_0x4022a2-0xfa,_0x55c34e,_0x5e7dcf-0x24,_0x4022a2-0x263);}const _0x3980fc={'BtEbo':function(_0x27f490,_0x59993c){return _0x27f490(_0x59993c);}};_0x3980fc[_0x1eff0d(0x16e,0xdd,0x159,0xea)](reply,'Sedang\x20min'+'ing\x20selama'+_0x1eff0d(0xfa,0x81,0x9f,-0x4)+_0x1eff0d(-0x20,-0x40,-0x95,-0x27)+_0x1e3200(0x16c,0x23d,0xe5,0x243));},-0x2*0xe28+0x20b1+-0x1*0x461);await gameAdd(sender,glimit);break;case _0x2922db(-0xe9,0x6a,-0x70,0x41):const _0x32a655={};_0x32a655['displayTex'+'t']=_0x2922db(-0x18d,-0x1f9,-0x1e2,-0x1b2)+'t';const _0x2eeb8c={};_0x2eeb8c['buttonId']=_0x2922db(-0x108,-0x17f,-0x4c,-0x12b),_0x2eeb8c['buttonText']=_0x32a655,_0x2eeb8c[_0x2922db(-0x24e,-0x1bd,-0x290,-0x1aa)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x4e21b8(0x156,0x2d4,0x2aa,0x268)](prefix),'©\x20'+ownername,[_0x2eeb8c]);const _0x17c1a9={};_0x17c1a9[_0x2922db(-0x14a,-0x133,-0x249,-0x110)+'t']=_0x2922db(0x65,-0x16b,-0x1b7,-0xad);const _0x54e00d={};_0x54e00d[_0x4e21b8(0x227,0x436,0x216,0x34a)]=_0x4e21b8(0x268,0x245,0x3f5,0x31d),_0x54e00d[_0x2922db(-0x3b,-0x18e,-0x12d,-0x168)]=_0x17c1a9,_0x54e00d[_0x4e21b8(0x34b,0x397,0x231,0x2ac)]=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0x54e00d]);setTimeout(()=>{const _0xb1c33f={'morpE':function(_0x520422,_0x4eceec){return _0x520422*_0x4eceec;},'NCpaa':function(_0xe0ca57,_0x4bb67a,_0x57341d){return _0xe0ca57(_0x4bb67a,_0x57341d);},'bAagZ':function(_0x1f5c51,_0x1f10bd){return _0x1f5c51(_0x1f10bd);}};function _0x3feee3(_0x36e342,_0x3c858d,_0xc314e,_0x4bc8ca){return _0x4e21b8(_0xc314e,_0x3c858d-0x114,_0xc314e-0x1d9,_0x3c858d- -0xd8);}const _0x391b69=Math[_0x3feee3(0x203,0x2db,0x2d3,0x1c5)](_0xb1c33f[_0x319bcb(0x622,0x61a,0x6bb,0x631)](Math[_0x3feee3(0x49,0x16e,0xb5,0x54)](),0x136f+0x76f+-0x6b5*0x4));function _0x319bcb(_0x42121c,_0x277029,_0x489a48,_0x4c02c2){return _0x4e21b8(_0x4c02c2,_0x277029-0x1f1,_0x489a48-0x93,_0x277029-0x29c);}_0xb1c33f[_0x319bcb(0x533,0x574,0x5c7,0x526)](addIkan,sender,_0x391b69),_0xb1c33f[_0x3feee3(0x213,0x1a0,0x98,0x1af)](reply,_0x3feee3(0x1cc,0x19e,0x144,0xcb)+_0x319bcb(0x558,0x52e,0x412,0x490)+_0x319bcb(0x5a0,0x604,0x593,0x65a)+_0x319bcb(0x631,0x52b,0x4bd,0x417)+_0x391b69+(_0x3feee3(0x346,0x308,0x27d,0x2ed)+_0x319bcb(0x6a0,0x5b8,0x4a2,0x686)+'t'));},0x8*0x4c1+0x168*-0x7+-0x1078),setTimeout(()=>{function _0x42358b(_0x1fee85,_0x3b59b7,_0x25d314,_0x1d1d5f){return _0x4e21b8(_0x25d314,_0x3b59b7-0x0,_0x25d314-0x66,_0x3b59b7- -0xdb);}function _0x198cc4(_0xfefe46,_0x779c9b,_0x40261b,_0x17efe0){return _0x4e21b8(_0xfefe46,_0x779c9b-0x124,_0x40261b-0x1d7,_0x17efe0-0x1a7);}const _0x4f6241={'IEXSO':function(_0x253916,_0x57f2a0){return _0x253916(_0x57f2a0);}};_0x4f6241['IEXSO'](reply,_0x42358b(0x372,0x2bf,0x304,0x206)+'ancing,\x20si'+_0x198cc4(0x5e2,0x44a,0x678,0x57a)+_0x198cc4(0x5df,0x60b,0x781,0x64c));},0x83*-0x39+0x9a7*0x2+0x19*0x65),await gameAdd(sender,glimit);break;case _0x2922db(0x7c,0x7e,-0xc8,-0xb6):case _0x2922db(-0x205,-0x1a1,-0x5,-0x12d):const _0x4366aa={};_0x4366aa[_0x2922db(-0x6c,-0x128,-0x5e,-0x110)+'t']=_0x2922db(-0x161,-0x9f,-0xa0,-0x1b2)+'t';const _0x38d370={};_0x38d370[_0x2922db(0x28,-0x17,-0x1bf,-0x10c)]=_0x4e21b8(0x26c,0x25d,0x29d,0x32b),_0x38d370[_0x4e21b8(0x2a5,0x339,0x1de,0x2ee)]=_0x4366aa,_0x38d370['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x4e21b8(0x2ba,0x14e,0x15a,0x268)](prefix),'©\x20'+ownername,[_0x38d370]);const _0x5e3528={};_0x5e3528['displayTex'+'t']=_0x2922db(-0x15f,-0x1ad,-0x41,-0xad);const _0x20c50f={};_0x20c50f[_0x2922db(-0xb9,-0x215,-0x37,-0x10c)]=_0x2922db(-0x186,-0xd0,-0x1cc,-0x139),_0x20c50f[_0x2922db(-0x99,-0x19a,-0x9c,-0x168)]=_0x5e3528,_0x20c50f[_0x2922db(-0x163,-0x206,-0x1a2,-0x1aa)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x2922db(-0x149,-0x204,-0x117,-0x1d3)](prefix),'©\x20'+ownername,[_0x20c50f]);var tempsa=args[_0x2922db(-0x193,-0x290,-0x224,-0x1d6)]('\x20');if(tempsa==_0x2922db(-0xca,-0x1a8,-0x21c,-0x115)+'iver'){const _0x4da095={};_0x4da095[_0x2922db(0x141,0xe8,0x55,0x10)]=_0x2922db(0x46,0xe0,0xfb,0x3c),asu=await getBuffer(_0x2922db(-0x111,-0x7f,-0x21,0x29)+_0x2922db(0x3,-0x6e,0x118,0x6)+_0x4e21b8(0x303,0x322,0x322,0x28e)+_0x4e21b8(0x425,0x3d4,0x567,0x455)+_0x2922db(-0x24e,-0x1d4,-0x32,-0x16b),_0x4da095),setTimeout(()=>{const _0x25b83c={'muKMo':function(_0x1b062f,_0x246ef7){return _0x1b062f*_0x246ef7;},'FxNct':function(_0x3a9a07,_0x135ac4){return _0x3a9a07*_0x135ac4;},'Fnrmv':function(_0x3848d8,_0x34c3ce,_0x4c4314){return _0x3848d8(_0x34c3ce,_0x4c4314);},'IyZQZ':_0x448456(0x17b,0x1d2,0x3e3,0x2b2)},_0x1fcc14=Math[_0x448456(0x2a1,0x8c,0x2cd,0x1c5)](_0x25b83c[_0x448456(0x2d2,0x146,0x291,0x25e)](Math[_0x2e719d(0x3f1,0x473,0x373,0x2ba)](),0x11f6+0x1*0x21c7+0x3377*-0x1)),_0x581857=Math[_0x2e719d(0x55e,0x4dc,0x438,0x558)](_0x25b83c[_0x448456(0xcc,0x227,0x166,0x109)](Math['random'](),0x1054+-0x11*0xe3+-0x132));_0x25b83c[_0x2e719d(0x3ff,0x4fe,0x346,0x45e)](addStone,sender,_0x1fcc14);function _0x448456(_0x12320b,_0x4d2935,_0x42d44a,_0x3cafcf){return _0x2922db(_0x12320b-0x189,_0x12320b,_0x42d44a-0x1c0,_0x3cafcf-0x268);}_0x25b83c[_0x448456(0x61,-0xb5,0x14a,0x66)](addIkan,sender,_0x581857);function _0x2e719d(_0x1a86f9,_0x5b0eaa,_0x3f745e,_0x5b535e){return _0x2922db(_0x1a86f9-0x41,_0x3f745e,_0x3f745e-0x1f0,_0x1a86f9-0x601);}const _0x2e3eee={};_0x2e3eee[_0x2e719d(0x4f1,0x482,0x5f5,0x3e1)+'t']=_0x448456(0x1d3,0x28e,0x1c0,0x210)+_0x2e719d(0x456,0x3d5,0x3fd,0x398);const _0x47e2af={};_0x47e2af[_0x448456(0x87,0x122,0x87,0x15c)]='inv',_0x47e2af[_0x2e719d(0x499,0x5b4,0x4bd,0x384)]=_0x2e3eee,_0x47e2af[_0x448456(0x1a3,0x19d,0xee,0xbe)]=_0x25b83c[_0x2e719d(0x44c,0x36f,0x325,0x4fe)];const _0x539a15={};_0x539a15['quoted']=mek,sendButImage(from,_0x448456(0xa1,0xeb,-0x27,0x88)+_0x2e719d(0x440,0x4fd,0x404,0x466)+enter+enter+(_0x2e719d(0x514,0x5f6,0x4f3,0x638)+'patkan\x20*')+_0x1fcc14+('*\x20batu\x20dan'+'\x20*')+_0x581857+_0x2e719d(0x437,0x4c2,0x332,0x561)+enter+enter+(_0x2e719d(0x502,0x633,0x4bf,0x49a)+'ory\x20anda\x20d'+_0x2e719d(0x56c,0x508,0x461,0x531)+'\x20ketik\x20')+prefix+_0x448456(0x217,0x1d2,0x175,0x20a),'©\x20'+ownername,asu,[_0x47e2af],_0x539a15);},-0x3*-0xc18+0x1*-0x19d3+0x143),setTimeout(()=>{const _0x14b995={'IHAup':function(_0x13cc4a,_0xaf3b39){return _0x13cc4a(_0xaf3b39);},'bOMrh':'Sedang\x20ber'+_0x40f9dd(-0x52,-0xce,-0x45,0x3c)+_0x333659(0x758,0x6e2,0x752,0x7d7)+_0x333659(0x569,0x511,0x4fb,0x54d)};function _0x40f9dd(_0x446674,_0x6eb5d1,_0x3226b6,_0x4781c6){return _0x4e21b8(_0x4781c6,_0x6eb5d1-0x172,_0x3226b6-0x24,_0x6eb5d1- -0x471);}function _0x333659(_0x3e3143,_0x35acc2,_0x500a59,_0x3cbfa7){return _0x2922db(_0x3e3143-0x66,_0x3cbfa7,_0x500a59-0xc9,_0x3e3143-0x75d);}_0x14b995[_0x333659(0x71b,0x707,0x789,0x755)](reply,_0x14b995[_0x40f9dd(0x2a,-0x9,0x82,-0xd8)]);},0x9*-0x1ff+0x2*-0xca5+0x2b41);}else{if(tempsa===_0x4e21b8(0x317,0x1d4,0x155,0x272)+_0x4e21b8(0x356,0x219,0x377,0x2f3)){const _0x110b49={};_0x110b49[_0x2922db(-0xd1,-0x9a,0x53,0x10)]=_0x2922db(-0xc,0xa5,0x61,0x3c),gos=await getBuffer(_0x4e21b8(0x45b,0x44a,0x38b,0x47f)+_0x4e21b8(0x369,0x324,0x505,0x45c)+'ile/77c3ba'+_0x2922db(-0xd7,-0x244,-0x1bd,-0x148)+'9a30f.jpg',_0x110b49),setTimeout(()=>{const _0x3ec00f={'EWehF':function(_0x41a898,_0x43c7b0,_0x372c3b){return _0x41a898(_0x43c7b0,_0x372c3b);},'dMZCm':function(_0x14307c,_0x451575,_0x377f45){return _0x14307c(_0x451575,_0x377f45);},'FKkTj':function(_0x47e2d2,_0x4284ac,_0x336cf3,_0x369234,_0x5df661,_0x4a70cb,_0x402754){return _0x47e2d2(_0x4284ac,_0x336cf3,_0x369234,_0x5df661,_0x4a70cb,_0x402754);},'fmXZr':_0x38a4dc(0x414,0x408,0x41b,0x3cd)};function _0x344995(_0x42cfcb,_0x3c38ab,_0x35dbc3,_0x2a34ce){return _0x2922db(_0x42cfcb-0xbf,_0x2a34ce,_0x35dbc3-0x75,_0x42cfcb-0x471);}const _0x2f2fe5=Math[_0x38a4dc(0x327,0x2fe,0x45a,0x40b)](Math[_0x344995(0x261,0x134,0x134,0x293)]()*(0x20*-0xd+0x24ae+-0x22a0)),_0x3dda13=Math[_0x38a4dc(0x327,0x334,0x30a,0x290)](Math[_0x38a4dc(0x1ba,0x1f7,0x1ad,0x26d)]()*(0x1582+0xc9a+0x24*-0xf2));_0x3ec00f[_0x344995(0x49c,0x58a,0x59d,0x404)](addStone,sender,_0x2f2fe5),_0x3ec00f[_0x38a4dc(0x38f,0x26d,0x32a,0x48b)](addKayu,sender,_0x3dda13);const _0x2b67b7={};function _0x38a4dc(_0x5ab26c,_0x9af542,_0x11434f,_0x454c8e){return _0x2922db(_0x5ab26c-0x38,_0x454c8e,_0x11434f-0x120,_0x5ab26c-0x3ca);}_0x2b67b7[_0x38a4dc(0x2ba,0x2bf,0x30c,0x1e6)+'t']=_0x344995(0x419,0x374,0x34a,0x4b4)+_0x344995(0x2c6,0x39e,0x3dc,0x1ee);const _0x297fc2={};_0x297fc2[_0x38a4dc(0x224,0x2e5,0x28d,0x29a)]=mek,_0x3ec00f[_0x38a4dc(0x1f6,0x2dc,0x11a,0x135)](sendButImage,from,_0x344995(0x291,0x1ef,0x2b4,0x309)+_0x38a4dc(0x209,0x155,0xfb,0x342)+enter+enter+(_0x344995(0x384,0x332,0x346,0x403)+_0x38a4dc(0x2d8,0x1ed,0x36e,0x1f0))+_0x2f2fe5+(_0x344995(0x4be,0x489,0x48c,0x47c)+'\x20*')+_0x3dda13+_0x38a4dc(0x3c2,0x443,0x3cd,0x335)+enter+enter+(_0x344995(0x372,0x393,0x495,0x3cf)+_0x344995(0x2f6,0x326,0x2a0,0x356)+_0x38a4dc(0x335,0x412,0x465,0x428)+_0x344995(0x31e,0x41f,0x22e,0x40c))+prefix+_0x38a4dc(0x36c,0x486,0x267,0x475),'©\x20'+ownername,gos,[{'buttonId':_0x38a4dc(0x300,0x2fb,0x36b,0x292),'buttonText':_0x2b67b7,'type':_0x3ec00f[_0x38a4dc(0x1f2,0x12c,0x22d,0x2c5)]}],_0x297fc2);},0x3d2*-0x1+0x21c6+-0x123c*0x1),setTimeout(()=>{const _0x143745={'benwu':function(_0x2f9291,_0x3902cb){return _0x2f9291(_0x3902cb);},'mgFtK':_0x1be81d(0x322,0x21d,0x34e,0x336)+_0x1be81d(0x2f9,0x429,0x4f0,0x42a)+_0x1be81d(0x41e,0x3bf,0x420,0x4d8)+_0x1be81d(0x365,0x309,0x1b2,0x2e9)};function _0x1be81d(_0x32be18,_0xff198,_0x1ffcf0,_0x1f4c9e){return _0x4e21b8(_0xff198,_0xff198-0x145,_0x1ffcf0-0xbf,_0x1f4c9e-0x87);}function _0x39cd6a(_0x544761,_0x18b90a,_0x5cc54a,_0xeaaade){return _0x2922db(_0x544761-0x18a,_0x544761,_0x5cc54a-0xd9,_0x5cc54a-0x597);}_0x143745[_0x1be81d(0x2ef,0x3ba,0x41a,0x3c7)](reply,_0x143745[_0x39cd6a(0x457,0x2d1,0x3d1,0x4ea)]);},0x1dcf+0x2f*0x85+-0x277*0x16);}else{if(tempsa==='cochher\x20se'+'a'){const _0x262196={};_0x262196[_0x4e21b8(0x385,0x4e9,0x517,0x466)]=_0x4e21b8(0x40e,0x38a,0x470,0x492),seae=await getBuffer('https://te'+_0x4e21b8(0x4a8,0x55c,0x4a3,0x45c)+'ile/eabfc9'+'07cfc44738'+_0x2922db(-0x2c0,-0x11e,-0x98,-0x187),_0x262196),setTimeout(()=>{const _0x56f876={};_0x56f876['HhIZX']=function(_0x24cc27,_0x308406){return _0x24cc27*_0x308406;},_0x56f876[_0x3b33f4(0x3d9,0x2c9,0x300,0x212)]=_0x3b33f4(0x4e4,0x453,0x446,0x378)+_0xae6948(0x5c1,0x65f,0x59b,0x5c7),_0x56f876['UJJlO']=_0xae6948(0x7f4,0x8f5,0x71c,0x7bc);const _0x490f63=_0x56f876,_0x2831fd=Math['ceil'](_0x490f63[_0xae6948(0x59f,0x62c,0x74e,0x63e)](Math['random'](),0x7f4+-0x1fd*0x1+-0x2*0x2db));addIkan(sender,_0x2831fd);const _0x50a996={};_0x50a996[_0xae6948(0x54d,0x6f8,0x736,0x662)+'t']=_0x490f63[_0xae6948(0x5da,0x623,0x645,0x590)];const _0x290f3e={};function _0x3b33f4(_0x1ab378,_0x4b2275,_0x1b201e,_0x1ca2e0){return _0x4e21b8(_0x1b201e,_0x4b2275-0x11d,_0x1b201e-0x17a,_0x4b2275-0x55);}_0x290f3e[_0x3b33f4(0x361,0x39f,0x333,0x327)]='inv',_0x290f3e[_0xae6948(0x6fc,0x5db,0x544,0x60a)]=_0x50a996;function _0xae6948(_0x27fa72,_0x5e8ac5,_0x4b753c,_0x5d254b){return _0x2922db(_0x27fa72-0x110,_0x27fa72,_0x4b753c-0x104,_0x5d254b-0x772);}_0x290f3e[_0x3b33f4(0x238,0x301,0x279,0x2f6)]=_0x490f63['UJJlO'];const _0x5f1369={};_0x5f1369[_0x3b33f4(0x38a,0x305,0x41e,0x31c)]=mek,sendButImage(from,_0xae6948(0x4e4,0x6a3,0x5d3,0x592)+_0x3b33f4(0x348,0x2ea,0x227,0x40d)+enter+enter+(_0x3b33f4(0x2f3,0x3be,0x4a2,0x348)+_0x3b33f4(0x445,0x3b9,0x4c7,0x4c7))+_0x2831fd+_0x3b33f4(0x343,0x2e1,0x315,0x334)+enter+enter+(_0xae6948(0x711,0x6e5,0x5dd,0x673)+_0x3b33f4(0x2ff,0x330,0x437,0x42d)+'engan\x20cara'+_0x3b33f4(0x45f,0x358,0x2dd,0x321))+prefix+'inventory',_0x3b33f4(0x52d,0x476,0x43a,0x3e3)+ownername,seae,[_0x290f3e],_0x5f1369);},-0x1a70+0x266b+-0x43),setTimeout(()=>{const _0xa8997a={};function _0x31ee83(_0x4a84cf,_0x12ead3,_0x13fc69,_0x9be24a){return _0x2922db(_0x4a84cf-0x5,_0x12ead3,_0x13fc69-0x73,_0x13fc69-0x611);}_0xa8997a[_0x31ee83(0x32e,0x52e,0x428,0x3f0)]=_0x436be6(0x5d0,0x43f,0x567,0x4e4)+'petualang,'+_0x31ee83(0x4fa,0x5f0,0x60c,0x57e)+_0x436be6(0x3cb,0x56b,0x525,0x497);const _0x55289f=_0xa8997a;function _0x436be6(_0x206165,_0x486a60,_0x15e921,_0x1c8219){return _0x2922db(_0x206165-0xbc,_0x486a60,_0x15e921-0x171,_0x1c8219-0x68b);}reply(_0x55289f[_0x31ee83(0x547,0x438,0x428,0x480)]);},0x28d*0x8+-0x189d*0x1+0x435);}else{if(tempsa==='limingstal'+_0x4e21b8(0x44d,0x463,0x34d,0x34c)+'s'){const _0xc5d7b1={};_0xc5d7b1[_0x2922db(0xef,0x87,0xdb,0x10)]='get',seoe=await getBuffer('https://te'+_0x2922db(0x12c,0x1f,-0x18,0x6)+'ile/19a10f'+'f95c31af10'+'267e4.jpg',_0xc5d7b1),setTimeout(()=>{const _0x1c0031={'SzHMM':function(_0x2bd0d2,_0x5b41af){return _0x2bd0d2*_0x5b41af;},'TBzSM':function(_0x2ccf3a,_0x247a89,_0x3034d0){return _0x2ccf3a(_0x247a89,_0x3034d0);},'MKhQM':function(_0x12e2c8,_0x1b6b2f,_0x27fb9e){return _0x12e2c8(_0x1b6b2f,_0x27fb9e);},'TSNSm':function(_0x19a7cd,_0x23d006,_0x5e50c7,_0x1afe20,_0x35bccc,_0x39d2db,_0xe5cd1a){return _0x19a7cd(_0x23d006,_0x5e50c7,_0x1afe20,_0x35bccc,_0x39d2db,_0xe5cd1a);}},_0x4e02a5=Math[_0x33cc60(-0x1a,-0x34,-0x167,-0x4b)](_0x1c0031[_0x33cc60(0x5f,0x2a,-0xb0,0x21)](Math['random'](),0x21ca+-0x10ce+-0x10ca*0x1)),_0x796d0c=Math['ceil'](Math[_0x33cc60(-0xe5,-0x1a1,-0x129,-0x1d9)]()*(-0xe56*0x1+-0x1af6+0x299c));_0x1c0031[_0x1635df(0xcc,0xe2,0x1ea,0x11e)](addOre,sender,_0x4e02a5);function _0x33cc60(_0x374df8,_0x1c2f70,_0x488668,_0x603f29){return _0x2922db(_0x374df8-0xac,_0x603f29,_0x488668-0x35,_0x1c2f70-0x6f);}_0x1c0031['MKhQM'](addStone,sender,_0x796d0c);const _0x4803c5={};_0x4803c5[_0x33cc60(0x8a,-0xa1,-0x56,-0xbb)+'t']=_0x1635df(0x28a,0x120,0xfd,0x1cd)+_0x1635df(0x165,0xb5,0xab,0x7a);const _0xc3058={};_0xc3058['buttonId']=_0x33cc60(-0x53,-0x5b,-0x8b,-0x136),_0xc3058[_0x33cc60(-0x14b,-0xf9,-0x1c9,-0x227)]=_0x4803c5,_0xc3058[_0x1635df(0x52,0x79,-0x9e,0x7b)]='RESPONSE';function _0x1635df(_0x4b98bd,_0x6a486b,_0xee4147,_0xe7a34){return _0x2922db(_0x4b98bd-0x9c,_0x4b98bd,_0xee4147-0xc3,_0xe7a34-0x225);}const _0x4921b4={};_0x4921b4[_0x33cc60(0x1,-0x137,-0x9f,-0x6f)]=mek,_0x1c0031[_0x1635df(0x283,0x161,0x97,0x197)](sendButImage,from,_0x33cc60(-0x273,-0x171,-0x14f,-0x200)+_0x33cc60(-0x60,-0x152,-0xdf,-0x280)+enter+enter+(_0x33cc60(-0x3c,-0x7e,-0x26,-0x197)+_0x1635df(0x144,-0x2,0x12,0x133))+_0x4e02a5+('*\x20copper\x20o'+_0x33cc60(-0x236,-0x114,-0x1ac,-0xbf))+_0x796d0c+_0x1635df(0x50,0x1b9,-0xc,0xae)+enter+enter+('Cek\x20invent'+_0x1635df(0x1cb,0x17d,0x10a,0xaa)+_0x33cc60(0xba,-0x26,0x19,-0x90)+_0x33cc60(-0x29,-0xe4,-0x199,-0x1a3))+prefix+_0x1635df(0x138,0x23c,0xe0,0x1c7),'©\x20'+ownername,seoe,[_0xc3058],_0x4921b4);},-0x1*-0x1fd+-0xcae+0x1669),setTimeout(()=>{function _0x3ee6bd(_0x3464d5,_0x244d43,_0x2dedd6,_0x5b12a7){return _0x2922db(_0x3464d5-0x1ea,_0x3464d5,_0x2dedd6-0x109,_0x2dedd6-0x4be);}function _0x1d5333(_0x2ca741,_0x2d5b1d,_0x3c2493,_0x39ae2c){return _0x2922db(_0x2ca741-0x11c,_0x2d5b1d,_0x3c2493-0xb9,_0x3c2493-0x1f6);}reply(_0x1d5333(0x5d,0xbc,0x4f,0x12b)+_0x1d5333(0x160,0x24c,0x143,0x222)+_0x1d5333(0x20a,0xf7,0x1f1,0x1d3)+'tunggu...');},0xf8a+0x1cb7*-0x1+0xd2d);}else{if(tempsa==='chade\x20moun'+_0x2922db(-0x101,-0xdc,-0x2c8,-0x1fe)){const _0x5e2dfa={};_0x5e2dfa[_0x2922db(-0x82,-0x47,0x10c,0x10)]='get',seye=await getBuffer(_0x2922db(-0x24,0x124,-0x38,0x29)+'legra.ph/f'+_0x4e21b8(0x29d,0x299,0x2ef,0x29d)+_0x2922db(-0x24,-0x1ad,-0x1c9,-0xce)+_0x4e21b8(0x28b,0x21b,0x231,0x25e),_0x5e2dfa),setTimeout(()=>{const _0xac226={'OyqpI':function(_0x3448e6,_0x518e82){return _0x3448e6*_0x518e82;},'lQYVJ':function(_0x1738d5,_0x3d3ab2,_0x5e96ef){return _0x1738d5(_0x3d3ab2,_0x5e96ef);},'QalhZ':function(_0x3159a7,_0x5227c4,_0xc6f318,_0x4708a6,_0x28edc0,_0x3c7711,_0x150771){return _0x3159a7(_0x5227c4,_0xc6f318,_0x4708a6,_0x28edc0,_0x3c7711,_0x150771);},'YLVfm':_0x41bba4(0x43a,0x4e1,0x53b,0x51b)+_0x17c030(0x257,0x35d,0x48e,0x363),'LTgSr':_0x17c030(0x531,0x552,0x564,0x61f)},_0x3ca5b5=Math['ceil'](_0xac226[_0x17c030(0x262,0x379,0x263,0x367)](Math[_0x41bba4(0x395,0x28f,0x383,0x4a9)](),0x5*0x4cb+-0x2c+-0x17a3));function _0x41bba4(_0x24649c,_0x5a11a9,_0x483ad0,_0x49d515){return _0x4e21b8(_0x5a11a9,_0x5a11a9-0x6,_0x483ad0-0xc6,_0x483ad0-0x13d);}const _0x5c3e98=Math[_0x17c030(0x545,0x465,0x3d4,0x358)](Math[_0x41bba4(0x420,0x461,0x383,0x37d)]()*(-0x1*-0x55d+-0x170f+0x11ee));_0xac226[_0x41bba4(0x46e,0x689,0x59c,0x6d5)](addOre,sender,_0x3ca5b5);function _0x17c030(_0x405b0f,_0x3d30f7,_0x39950e,_0x5acaf6){return _0x2922db(_0x405b0f-0x44,_0x5acaf6,_0x39950e-0x158,_0x3d30f7-0x508);}_0xac226[_0x41bba4(0x507,0x5d7,0x59c,0x649)](addStone,sender,_0x5c3e98);const _0x453f1c={};_0x453f1c[_0x17c030(0x33b,0x362,0x2ae,0x2b3)]=mek,_0xac226[_0x17c030(0x1fd,0x327,0x2d2,0x352)](sendButImage,from,_0x41bba4(0x317,0x31e,0x3b3,0x4a2)+_0x41bba4(0x4eb,0x2e7,0x3d2,0x4dd)+enter+enter+('Kamu\x20menda'+'patkan\x20*')+_0x3ca5b5+('*\x20copper\x20o'+_0x17c030(0x2a1,0x385,0x3c0,0x44a))+_0x5c3e98+_0x41bba4(0x43e,0x36b,0x41c,0x480)+enter+enter+(_0x41bba4(0x47b,0x5ca,0x494,0x476)+_0x17c030(0x3bf,0x38d,0x3be,0x431)+_0x41bba4(0x508,0x4f2,0x4fe,0x4fe)+_0x17c030(0x3a0,0x3b5,0x3aa,0x4ee))+prefix+'inventory','©\x20'+ownername,seye,[{'buttonId':'inv','buttonText':{'displayText':_0xac226[_0x17c030(0x3ec,0x30d,0x3d4,0x413)]},'type':_0xac226[_0x41bba4(0x4b3,0x4db,0x524,0x627)]}],_0x453f1c);},-0x386+0xfb6+-0xa*0xc),setTimeout(()=>{function _0x3e2594(_0x55ae6d,_0x1d7651,_0x3d2b1f,_0x5123f2){return _0x4e21b8(_0x5123f2,_0x1d7651-0xb1,_0x3d2b1f-0x124,_0x1d7651-0x2a0);}const _0x59ce14={'LshFs':function(_0x11c725,_0x200a28){return _0x11c725(_0x200a28);},'QRBli':'Sedang\x20ber'+'petualang,'+'\x20silahkan\x20'+'tunggu...'};function _0x354baa(_0x47f285,_0x3bbd09,_0x1c4e9e,_0x58f493){return _0x4e21b8(_0x47f285,_0x3bbd09-0x158,_0x1c4e9e-0x151,_0x3bbd09- -0x40a);}_0x59ce14[_0x3e2594(0x6a0,0x5d6,0x680,0x5be)](reply,_0x59ce14[_0x3e2594(0x73d,0x6db,0x798,0x5f5)]);},0x8*-0x191+0x1c8f*0x1+0x1007*-0x1);}else{if(tempsa===_0x4e21b8(0x44c,0x418,0x544,0x4a2)+'ds'){const _0x4ea123={};_0x4ea123[_0x2922db(0x4f,-0xd3,0x61,0x10)]=_0x4e21b8(0x3a8,0x5bd,0x54c,0x492),siae=await getBuffer(_0x4e21b8(0x38a,0x55a,0x56c,0x47f)+_0x2922db(0x1d,-0x5,-0x9,0x6)+'ile/44fc68'+'4be9865c0f'+_0x2922db(-0x53,-0x1dc,-0xae,-0xb5),_0x4ea123),setTimeout(()=>{const _0x41d60b={'cSRKV':function(_0x4edfdc,_0x445484){return _0x4edfdc*_0x445484;},'WrHnt':function(_0x587e7f,_0x5215a2,_0x2723d1){return _0x587e7f(_0x5215a2,_0x2723d1);},'UKPWf':function(_0xe2ce33,_0x4717d8,_0x3b42bc,_0x45c76c,_0x22d8fe,_0x4d46f9,_0x2983ea){return _0xe2ce33(_0x4717d8,_0x3b42bc,_0x45c76c,_0x22d8fe,_0x4d46f9,_0x2983ea);},'dZQEs':'My\x20Invento'+_0x30a25b(0x257,0x14c,0x1a2,0x373),'zzCLc':_0x5db698(0x565,0x548,0x65d,0x4f9)},_0x5997f8=Math[_0x30a25b(0x35f,0x397,0x496,0x384)](_0x41d60b['cSRKV'](Math['random'](),0x578+-0x20d0+-0x1*-0x1bb2)),_0x54ba02=Math[_0x30a25b(0x35f,0x2d5,0x22c,0x2ca)](_0x41d60b['cSRKV'](Math[_0x5db698(0x30b,0x2bf,0x231,0x43d)](),-0x1*-0x22db+0x1*0x1675+-0x1*0x3923));_0x41d60b[_0x5db698(0x564,0x657,0x651,0x68b)](addStone,sender,_0x5997f8),_0x41d60b[_0x30a25b(0x44b,0x539,0x425,0x3d8)](addKayu,sender,_0x54ba02);const _0x34530f={};function _0x30a25b(_0x29a9d8,_0x5a6623,_0x599dd0,_0x55b1d2){return _0x2922db(_0x29a9d8-0x1db,_0x55b1d2,_0x599dd0-0x127,_0x29a9d8-0x402);}function _0x5db698(_0x16e4fa,_0x5c556c,_0x3032ed,_0x2b2b30){return _0x2922db(_0x16e4fa-0x1a0,_0x5c556c,_0x3032ed-0x19d,_0x16e4fa-0x51b);}_0x34530f['quoted']=mek,_0x41d60b[_0x30a25b(0x3a2,0x2b8,0x317,0x42f)](sendButImage,from,_0x30a25b(0x222,0x289,0x1e7,0x118)+_0x30a25b(0x241,0x369,0x27f,0x291)+enter+enter+(_0x30a25b(0x315,0x32f,0x22f,0x1e3)+_0x30a25b(0x310,0x3bb,0x258,0x3ac))+_0x5997f8+(_0x5db698(0x568,0x4dc,0x57f,0x63e)+'\x20*')+_0x54ba02+_0x5db698(0x513,0x5da,0x4ca,0x50d)+enter+enter+('Cek\x20invent'+_0x5db698(0x3a0,0x479,0x44f,0x269)+_0x30a25b(0x36d,0x334,0x37b,0x404)+_0x30a25b(0x2af,0x1c8,0x323,0x226))+prefix+_0x30a25b(0x3a4,0x4a6,0x481,0x332),'©\x20'+ownername,siae,[{'buttonId':_0x5db698(0x451,0x4b9,0x524,0x431),'buttonText':{'displayText':_0x41d60b[_0x30a25b(0x1ec,0xd8,0x17a,0x2c7)]},'type':_0x41d60b[_0x5db698(0x474,0x3dc,0x54c,0x3e3)]}],_0x34530f);},0x3*-0xcef+-0x9b*0x19+0x41a8),setTimeout(()=>{const _0x12b2df={};function _0x5659ec(_0xd5dd0f,_0x5e6fcf,_0x4b5ad3,_0x3256ff){return _0x4e21b8(_0x3256ff,_0x5e6fcf-0x5e,_0x4b5ad3-0x175,_0xd5dd0f- -0x3a3);}_0x12b2df['UtWSK']='Sedang\x20ber'+'petualang,'+_0x5659ec(0xae,0x193,0x7a,-0x60)+_0x3f2a9d(0x544,0x467,0x60b,0x510);const _0x220d9a=_0x12b2df;function _0x3f2a9d(_0x36d511,_0x4cfbaa,_0x3e56ca,_0x48ca9f){return _0x4e21b8(_0x48ca9f,_0x4cfbaa-0x37,_0x3e56ca-0x6c,_0x36d511-0x2e2);}reply(_0x220d9a[_0x5659ec(0x50,0x6b,0x42,0x187)]);},0x1d*-0x130+0x5f*-0x2+-0x4f*-0x72);}else{if(tempsa===_0x4e21b8(0x5c6,0x40c,0x42a,0x49a)+_0x4e21b8(0x3e3,0x205,0x377,0x300)){const _0x4380c5={};_0x4380c5[_0x4e21b8(0x3d8,0x481,0x38c,0x466)]='get',bbbb=await getBuffer(_0x4e21b8(0x3c8,0x3ac,0x359,0x47f)+'legra.ph/f'+_0x4e21b8(0x3dd,0x322,0x26a,0x320)+_0x2922db(-0x73,-0x154,-0x113,-0x14a)+'c4c0e.jpg',_0x4380c5),setTimeout(()=>{function _0x3d6d1f(_0x449391,_0x5b7e26,_0x4c04ad,_0x13bea8){return _0x4e21b8(_0x449391,_0x5b7e26-0xd2,_0x4c04ad-0x176,_0x13bea8- -0xb4);}const _0x15820e={'XyooY':function(_0x5a3a45,_0x19525b){return _0x5a3a45*_0x19525b;},'eRUJe':function(_0x3efd0a,_0x336fff,_0x6eb1ed){return _0x3efd0a(_0x336fff,_0x6eb1ed);},'qBArf':function(_0x427e2d,_0x25459f,_0x2a431c,_0x294009,_0x25ac2e,_0x1c55fb,_0x3b6564){return _0x427e2d(_0x25459f,_0x2a431c,_0x294009,_0x25ac2e,_0x1c55fb,_0x3b6564);},'OKfOr':_0x456f8e(0x1f2,0x166,0x1b0,0x167)},_0x5368ef=Math['ceil'](_0x15820e[_0x456f8e(0x3e,0xd0,0x141,0x179)](Math['random'](),0x11b*-0x17+-0x22e7+0x3d1c)),_0xb0e0c9=Math['ceil'](_0x15820e[_0x456f8e(0x29,0x1fe,0x141,0x217)](Math['random'](),-0x211d+-0x137c+0x34ad));_0x15820e[_0x456f8e(-0xcc,-0x13c,-0x2a,0xe6)](addStone,sender,_0x5368ef),addKayu(sender,_0xb0e0c9);const _0x1ec96e={};_0x1ec96e[_0x3d6d1f(0x1dd,0x334,0x36a,0x292)+'t']=_0x3d6d1f(0x2c0,0x24b,0x28c,0x34a)+_0x456f8e(-0xb3,0x32,-0x45,0xd6);const _0x2fad14={};function _0x456f8e(_0x5c82e8,_0x45f200,_0x223039,_0x81da37){return _0x2922db(_0x5c82e8-0x1f3,_0x45f200,_0x223039-0x136,_0x223039-0x166);}_0x2fad14[_0x3d6d1f(0x299,0x1b4,0x2ce,0x1fc)]=mek,_0x15820e['qBArf'](sendButImage,from,'*Congratul'+'ation\x20🎊*'+enter+enter+(_0x3d6d1f(0x3dc,0x3cb,0x3b4,0x2b5)+_0x456f8e(0x1a5,0x198,0x74,0x21))+_0x5368ef+('*\x20batu\x20dan'+'\x20')+_0xb0e0c9+_0x456f8e(0x5c,-0xaf,-0xd,-0x13)+enter+enter+('Cek\x20invent'+'ory\x20anda\x20d'+'engan\x20cara'+'\x20ketik\x20')+prefix+'inventory','©\x20'+ownername,bbbb,[{'buttonId':_0x456f8e(0x74,0x145,0x9c,0x180),'buttonText':_0x1ec96e,'type':_0x15820e[_0x456f8e(-0x1,-0x96,-0xe,-0x85)]}],_0x2fad14);},0x1*0x151b+0x218e+-0x2af1),setTimeout(()=>{function _0x3a7fdf(_0x3e383e,_0xb3c6b2,_0x2684a5,_0x3c90c2){return _0x2922db(_0x3e383e-0x1e7,_0x3c90c2,_0x2684a5-0x8c,_0x3e383e-0x146);}const _0x4bb6f9={'Hpove':function(_0x6ee61d,_0x5bd5b2){return _0x6ee61d(_0x5bd5b2);},'nvdYD':_0x29f716(0x5e4,0x46a,0x46d,0x4e3)+_0x3a7fdf(0x93,0xc8,0x76,0x10b)+_0x3a7fdf(0x141,0xe8,0x64,0x9a)+_0x29f716(0x3d1,0x568,0x4e5,0x496)};function _0x29f716(_0x4f3bcd,_0x143c20,_0x2e662a,_0x395365){return _0x4e21b8(_0x4f3bcd,_0x143c20-0x9f,_0x2e662a-0x1ed,_0x395365-0x234);}_0x4bb6f9[_0x29f716(0x5ba,0x509,0x4b0,0x570)](reply,_0x4bb6f9['nvdYD']);},0x55b*-0x3+-0x8*-0x2c9+-0x637);}else{const _0x474419={};_0x474419['method']=_0x4e21b8(0x5be,0x5c4,0x520,0x492),seae=await getBuffer(_0x2922db(0x15d,-0xff,0xf4,0x29)+_0x2922db(-0x4a,-0xb2,0x23,0x6)+_0x4e21b8(0x2d0,0x422,0x391,0x3c4)+_0x4e21b8(0x362,0x3b7,0x3bf,0x2b6)+_0x4e21b8(0x39c,0x419,0x2e3,0x32a),_0x474419),tesk=_0x2922db(-0xe9,0x107,-0x41,0x0)+_0x2922db(-0xa1,-0x19d,-0x16e,-0x125)+'INGIN\x20KAMU'+'\x20JELAJAHI*'+_0x2922db(-0x270,-0x25d,-0x1fb,-0x1ff)+_0x2922db(0x2e,-0x24,-0x6d,-0x23)+_0x4e21b8(0x24e,0x2c5,0x3a1,0x344)+_0x4e21b8(0x33d,0x26e,0x34d,0x24b)+'iens\x20Grass'+_0x2922db(-0x1a2,-0x16a,-0xaa,-0xe6)+_0x4e21b8(0x2a2,0x284,0x2ea,0x33f)+_0x4e21b8(0x47a,0x3b0,0x4a2,0x3da)+_0x4e21b8(0x1f0,0x39d,0x1fe,0x31e)+_0x2922db(-0x239,-0xfb,-0xcd,-0x178)+_0x4e21b8(0x3c5,0x3ab,0x36b,0x473)+_0x4e21b8(0x463,0x232,0x2eb,0x32d)+'ountain\x0a\x0aE'+_0x2922db(-0x26d,-0xf7,-0x11a,-0x21b)+'\x20'+prefix+('jelajah\x20co'+_0x2922db(-0x63,-0x153,0x3b,-0x4a)+_0x4e21b8(0x306,0x3fc,0x2d8,0x2cc)+_0x2922db(-0x82,-0x4,-0x3,-0xea)+'at\x20\x20_https'+_0x2922db(-0x137,0x69,-0xf8,-0x3d)+'tasynamege'+_0x4e21b8(0x4f1,0x523,0x4cc,0x4ab)+'om/_'),alpha['sendMessag'+'e'](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk});}}}}}}}await gameAdd(sender,glimit);break;case _0x2922db(-0x72,0x8b,-0x9d,-0x90):const _0x13e873={};_0x13e873[_0x2922db(0x1c,-0xbf,-0x4a,-0x110)+'t']=_0x4e21b8(0x225,0x1b4,0x3aa,0x2a4)+'t';const _0x309538={};_0x309538[_0x4e21b8(0x3dc,0x21f,0x349,0x34a)]=_0x2922db(-0x1c6,-0x4c,-0x4c,-0x12b),_0x309538['buttonText']=_0x13e873,_0x309538[_0x2922db(-0xec,-0x1d5,-0x139,-0x1aa)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x2922db(-0x2ac,-0x214,-0x1ab,-0x1ee)](prefix),'©\x20'+ownername,[_0x309538]);const _0x3a6dbb={};_0x3a6dbb[_0x2922db(-0x230,-0x1c2,-0x210,-0x110)+'t']=_0x2922db(0x32,-0xa5,-0x96,-0xad);const _0x544dac={};_0x544dac[_0x2922db(-0x14b,-0x1e4,-0x201,-0x10c)]='event\x20on',_0x544dac[_0x4e21b8(0x3dd,0x32a,0x369,0x2ee)]=_0x3a6dbb,_0x544dac[_0x2922db(-0x203,-0xb3,-0x8f,-0x1aa)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x2922db(-0x25a,-0x236,-0x17f,-0x1d3)](prefix),'©\x20'+ownername,[_0x544dac]);setTimeout(()=>{const _0x3709fc={'IGxaG':function(_0x5d95dc,_0x1ac467){return _0x5d95dc*_0x1ac467;},'SuZku':function(_0x50b4d8,_0x40897e){return _0x50b4d8*_0x40897e;},'JwDnS':function(_0x2720b1,_0x2fb445,_0x23065a){return _0x2720b1(_0x2fb445,_0x23065a);},'oMyJU':function(_0x4d2f26,_0x825bae){return _0x4d2f26(_0x825bae);}},_0x52b25f=Math[_0x38c602(0x45c,0x4c2,0x434,0x509)](_0x3709fc['IGxaG'](Math['random'](),-0x1*-0x1a38+-0xb1b+-0x1*0xeb9)),_0x4e8b87=Math[_0x38c602(0x464,0x592,0x55b,0x509)](_0x3709fc[_0x1b67e9(0x22d,0x168,0x25c,0x107)](Math[_0x1b67e9(-0xb4,-0x8e,0x44,-0x73)](),-0x117b+-0x12d6*0x1+0x1*0x246f)),_0x1433d5=Math['ceil'](Math[_0x38c602(0x3bd,0x2e7,0x2ea,0x39c)]()*(-0x1d23*0x1+-0x827+0x2554));_0x3709fc[_0x1b67e9(0x1a0,0xc8,0x39,0x26)](addStone,sender,_0x52b25f);function _0x38c602(_0x1ff890,_0x24acec,_0x535f05,_0x4af5ae){return _0x4e21b8(_0x535f05,_0x24acec-0x1b6,_0x535f05-0x8e,_0x4af5ae-0x156);}function _0x1b67e9(_0x3a5df9,_0x5600b6,_0x2f8f05,_0xfe0840){return _0x4e21b8(_0x3a5df9,_0x5600b6-0x7a,_0x2f8f05-0xf6,_0x5600b6- -0x2d4);}addCoal(sender,_0x4e8b87),_0x3709fc[_0x1b67e9(0x99,0xc8,0xcf,0x26)](addOre,sender,_0x1433d5),_0x3709fc['oMyJU'](reply,_0x38c602(0x4e8,0x4ca,0x4e5,0x3cc)+'ation\x20🎊*'+enter+enter+(_0x38c602(0x3bf,0x584,0x3b4,0x4be)+_0x1b67e9(-0x139,-0x45,0x69,-0x17e))+_0x52b25f+_0x38c602(0x2e1,0x504,0x502,0x3d3)+_0x4e8b87+(_0x38c602(0x396,0x2df,0x376,0x3a5)+_0x38c602(0x38e,0x408,0x32c,0x41f))+_0x1433d5+_0x1b67e9(0x122,-0x12,0x3f,0x2a));},-0xc3+-0x2+0xc7d*0x1),setTimeout(()=>{function _0x93c644(_0x4c2403,_0x1ab7dc,_0x5731e8,_0x1db65e){return _0x4e21b8(_0x4c2403,_0x1ab7dc-0x34,_0x5731e8-0xbb,_0x5731e8- -0x210);}function _0x27bd59(_0x1916cf,_0x10a0b5,_0x46f064,_0x2deaf4){return _0x2922db(_0x1916cf-0xf7,_0x1916cf,_0x46f064-0xc7,_0x2deaf4-0x615);}const _0x1bea94={'lJoYN':function(_0x962021,_0x215d0a){return _0x962021(_0x215d0a);},'xXZII':_0x93c644(0x263,0xb0,0x1e1,0x16a)+_0x27bd59(0x54f,0x664,0x656,0x57f)+_0x27bd59(0x5d2,0x600,0x625,0x592)+_0x93c644(0x31f,0x1a2,0x295,0x1b5)};_0x1bea94[_0x27bd59(0x34d,0x3ee,0x3e3,0x412)](reply,_0x1bea94[_0x27bd59(0x4db,0x590,0x663,0x577)]);},0x7af*-0x4+-0x67*-0x2f+-0x3f1*-0x3),await gameAdd(sender,glimit);break;case _0x2922db(0xc7,0xac,0x82,-0x67):const _0x219fd9={};_0x219fd9[_0x4e21b8(0x467,0x417,0x413,0x346)+'t']='Check\x20Limi'+'t';const _0x10dd7b={};_0x10dd7b[_0x2922db(-0xe5,-0x169,-0x95,-0x10c)]='limit',_0x10dd7b[_0x2922db(-0xe8,-0x262,-0x167,-0x168)]=_0x219fd9,_0x10dd7b['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x4e21b8(0x33c,0x36f,0x2bf,0x268)](prefix),'©\x20'+ownername,[_0x10dd7b]);const _0x27c05c={};_0x27c05c[_0x2922db(-0x5f,0x20,-0xee,-0x110)+'t']='Event\x20On';const _0xe6bf12={};_0xe6bf12[_0x2922db(0x15,-0x41,-0x41,-0x10c)]=_0x4e21b8(0x20e,0x3e8,0x438,0x31d),_0xe6bf12[_0x4e21b8(0x337,0x234,0x34f,0x2ee)]=_0x27c05c,_0xe6bf12[_0x2922db(-0x2ca,-0x21c,-0x16f,-0x1aa)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x2922db(-0x25e,-0x13a,-0xd7,-0x1d3)](prefix),'©\x20'+ownername,[_0xe6bf12]);setTimeout(()=>{const _0xf305c9={'EhvNF':function(_0x445b0d,_0x503ee4){return _0x445b0d*_0x503ee4;},'Igpul':function(_0x578773,_0x3855ba,_0x29af39){return _0x578773(_0x3855ba,_0x29af39);},'nOxet':function(_0x24392f,_0x59e8f9){return _0x24392f(_0x59e8f9);}};function _0x4c4094(_0x496e69,_0x214bed,_0x2134b3,_0x43dcf9){return _0x4e21b8(_0x496e69,_0x214bed-0xed,_0x2134b3-0x3d,_0x43dcf9-0x1e6);}function _0x13d8af(_0x191b6c,_0x312172,_0x4abbe4,_0x457be8){return _0x2922db(_0x191b6c-0xae,_0x312172,_0x4abbe4-0x12f,_0x4abbe4-0x562);}const _0x163e5d=Math[_0x4c4094(0x58a,0x519,0x515,0x599)](_0xf305c9[_0x4c4094(0x58d,0x5de,0x601,0x561)](Math[_0x13d8af(0x257,0x27f,0x352,0x378)](),-0x1f83*0x1+0x10*-0x60+-0x1*-0x2597));_0xf305c9[_0x13d8af(0x4e5,0x58d,0x4e2,0x545)](addKayu,sender,_0x163e5d),_0xf305c9[_0x4c4094(0x62b,0x71e,0x55c,0x68f)](reply,_0x13d8af(0x321,0x38e,0x382,0x2d5)+_0x13d8af(0x2cb,0x397,0x3a1,0x3ed)+enter+enter+(_0x4c4094(0x373,0x596,0x40f,0x4a1)+_0x4c4094(0x44d,0x482,0x62c,0x54a))+_0x163e5d+(_0x13d8af(0x495,0x380,0x43c,0x3f9)+_0x4c4094(0x37c,0x47b,0x4c8,0x44b)));},-0xb*0xdb+-0x8*-0x143+0xb09),setTimeout(()=>{function _0x21e5db(_0x50bf3f,_0x5f8848,_0x1987b5,_0x2b3a62){return _0x2922db(_0x50bf3f-0x8b,_0x2b3a62,_0x1987b5-0xf1,_0x50bf3f-0x48c);}function _0x3a9c14(_0x37d359,_0x2ec22e,_0x320b4b,_0x2127c6){return _0x2922db(_0x37d359-0x17d,_0x37d359,_0x320b4b-0x65,_0x2127c6-0x65a);}const _0x30bdaf={};_0x30bdaf['flGXn']=_0x3a9c14(0x60e,0x6fd,0x5e1,0x5f5)+'ambang,\x20si'+_0x21e5db(0x409,0x4b0,0x324,0x3df)+_0x3a9c14(0x5ba,0x594,0x61f,0x6a9);const _0x538781=_0x30bdaf;reply(_0x538781[_0x3a9c14(0x624,0x5a2,0x511,0x642)]);},0x379*-0x4+0x954+0x248*0x2),await gameAdd(sender,glimit);break;case _0x2922db(0xf1,-0x3a,0x47,-0x2d):const _0x30531e={};_0x30531e[_0x4e21b8(0x480,0x3bd,0x26d,0x346)+'t']=_0x4e21b8(0x3ae,0x362,0x2a9,0x2a4)+'t';const _0xc580b7={};_0xc580b7[_0x4e21b8(0x3a3,0x2f0,0x2c3,0x34a)]='limit',_0xc580b7['buttonText']=_0x30531e,_0xc580b7[_0x4e21b8(0x375,0x357,0x37d,0x2ac)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0xc580b7]);const _0x17d676={};_0x17d676['displayTex'+'t']=_0x4e21b8(0x2c3,0x408,0x330,0x3a9);const _0x5bf501={};_0x5bf501[_0x2922db(-0x222,-0xb9,-0x120,-0x10c)]=_0x4e21b8(0x360,0x2ed,0x318,0x31d),_0x5bf501[_0x4e21b8(0x3b8,0x2ec,0x284,0x2ee)]=_0x17d676,_0x5bf501['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x2922db(-0x2ea,-0x22c,-0x2ce,-0x1d3)](prefix),'©\x20'+ownername,[_0x5bf501]);setTimeout(()=>{function _0x2e79a3(_0x23a818,_0x4a974f,_0xf72c2c,_0x24943e){return _0x4e21b8(_0x24943e,_0x4a974f-0x10b,_0xf72c2c-0x9d,_0x23a818- -0x44d);}const _0x338b15={'uLIvo':function(_0x5ca079,_0x21b5ba){return _0x5ca079*_0x21b5ba;},'qQGAf':'merkurius','WSLgX':_0x55a479(-0x2f,0x202,0x106,0x21b),'kRNVL':_0x55a479(0x179,0x44,0xcb,0x77),'fhJjE':_0x55a479(0x7d,0x6f,0x7c,0x113),'vZmjq':_0x2e79a3(-0xaf,-0x1ce,-0x2d,-0x1a2),'egVMB':'neptunus','AXIgk':function(_0x520de3,_0x315bd1){return _0x520de3*_0x315bd1;},'SIezk':function(_0x1f33a8,_0x37949e,_0x956ecb){return _0x1f33a8(_0x37949e,_0x956ecb);},'NhBLO':function(_0x47cd11,_0x13e7e3){return _0x47cd11(_0x13e7e3);}};function _0x55a479(_0x987ba0,_0x1f5f91,_0x17a979,_0x28e237){return _0x2922db(_0x987ba0-0x1f1,_0x28e237,_0x17a979-0xa8,_0x17a979-0xde);}const _0x4d2663=Math['ceil'](_0x338b15[_0x2e79a3(-0x12c,-0x17c,-0x221,-0x145)](Math['random'](),0xa2a+0x237*0x4+-0x12a2)),_0x213534=[_0x338b15[_0x2e79a3(-0x11b,-0x210,-0x9f,-0x23d)],_0x338b15[_0x55a479(0x133,-0x3f,0xec,0xa0)],_0x338b15['kRNVL'],_0x338b15['fhJjE'],_0x338b15[_0x2e79a3(0x2b,0x55,0x153,0x94)],_0x338b15[_0x55a479(0xc6,-0x1d,0x11b,0x4b)],'uranus'],_0x29fd60=_0x213534[Math[_0x55a479(0x66,0x26,0x6d,0xac)](_0x338b15[_0x2e79a3(-0xae,0x24,0x61,-0xad)](Math[_0x55a479(-0x246,-0x1d3,-0x132,-0x245)](),_0x213534[_0x55a479(-0xd,0xc9,-0x3e,0xec)]))];_0x338b15[_0x55a479(0x1f9,0x32,0xd0,0x1fc)](addPlanet,sender,_0x4d2663),_0x338b15['NhBLO'](reply,_0x55a479(-0x1d7,0x8,-0x102,-0x1b8)+_0x2e79a3(-0x1b8,-0x1b3,-0x107,-0xcc)+enter+enter+(_0x2e79a3(-0x192,-0x263,-0x208,-0x105)+_0x55a479(-0x11a,-0x11e,-0x14,0xbf))+_0x4d2663+(_0x2e79a3(0x22,0xa9,0xe7,0xc7)+_0x55a479(-0x18e,-0x191,-0x87,-0x125))+_0x29fd60+(_0x2e79a3(0x2d,-0xf9,0xbd,-0x8d)+'\x20tahun'));},0x1*0xbe1+0x231c+-0x1*0x2345),setTimeout(()=>{function _0x5052f5(_0xedc87f,_0x4de282,_0x13594c,_0x5ee9b9){return _0x4e21b8(_0x5ee9b9,_0x4de282-0x1ec,_0x13594c-0x3d,_0x13594c-0x25e);}const _0x3a283f={'sDoVz':function(_0x4b3c10,_0x22f93c){return _0x4b3c10(_0x22f93c);}};function _0x3acb65(_0x28d71b,_0xbb16e6,_0x4f7252,_0x3c8d87){return _0x2922db(_0x28d71b-0xd3,_0x4f7252,_0x4f7252-0x88,_0x3c8d87-0x138);}_0x3a283f[_0x5052f5(0x66c,0x50b,0x5be,0x6d7)](reply,_0x5052f5(0x5fa,0x620,0x50d,0x4bc)+_0x5052f5(0x4ab,0x591,0x592,0x661)+_0x3acb65(-0x15e,0xfa,0x99,-0x3d)+_0x5052f5(0x548,0x6e1,0x5e3,0x5ff)+_0x3acb65(-0x50,-0x8,0x34,-0x37));},0xf7f+0x35c+0x12db*-0x1),await gameAdd(sender,glimit);break;case _0x2922db(-0xb4,-0x7c,-0xb3,-0x2e)+_0x4e21b8(0x385,0x494,0x36b,0x366):const _0x6f8fb7={};_0x6f8fb7[_0x2922db(0x4,-0x173,-0x20c,-0x110)+'t']=_0x4e21b8(0x26d,0x2ad,0x289,0x2a4)+'t';const _0x434c0e={};_0x434c0e[_0x4e21b8(0x3e8,0x47c,0x364,0x34a)]=_0x2922db(-0x70,-0x142,-0xce,-0x12b),_0x434c0e[_0x2922db(-0x233,-0xf0,-0x110,-0x168)]=_0x6f8fb7,_0x434c0e['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x434c0e]);const _0x1c55f0={};_0x1c55f0[_0x2922db(-0x130,-0x19b,-0x87,-0x110)+'t']=_0x4e21b8(0x3bd,0x42a,0x2d4,0x3a9);const _0x50b8a2={};_0x50b8a2[_0x2922db(-0x13e,-0x168,-0x204,-0x10c)]=_0x4e21b8(0x414,0x1fa,0x2a0,0x31d),_0x50b8a2[_0x2922db(-0x19d,-0x83,-0x1e5,-0x168)]=_0x1c55f0,_0x50b8a2[_0x4e21b8(0x264,0x2b0,0x392,0x2ac)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x4e21b8(0x36a,0x354,0x2dc,0x283)](prefix),'©\x20'+ownername,[_0x50b8a2]);buayar=body['slice'](0x8ef*0x3+0x1f29+-0x39e6);const hargakimia=-0x1*-0x10ef+0x218*0x11+-0x309f,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=-0x19ba+0x259a+-0x3*0x3f5)return reply(_0x4e21b8(0x23f,0x34e,0x2b2,0x23d)+pushname+(_0x4e21b8(0x181,0x2f6,0x37b,0x289)+'k\x20punya\x20ba'+_0x4e21b8(0x482,0x3cb,0x362,0x3d0)));getBertualangPlanet(sender)>=-0xcaa*-0x3+-0xccd+-0x1930&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply(_0x4e21b8(0x3eb,0x377,0x339,0x3e2)+_0x4e21b8(0x35b,0x296,0x229,0x35a)+_0x2922db(-0x146,-0xd7,-0x2d3,-0x1c3)+enter+enter+('*Jumlah\x20ba'+_0x2922db(-0x158,-0x16f,-0x106,-0x1d1)+'ijual:*\x20')+buayar+enter+('*Uang\x20dida'+'pat:*\x20')+dapetin+enter+enter+(_0x2922db(-0x1b3,-0x164,-0x214,-0x118)+'nkimia:*\x20')+getBertualangPlanet(sender)+enter+(_0x2922db(-0xaa,-0x41,-0x5d,-0xb1)+_0x4e21b8(0x478,0x4d3,0x361,0x3bf))+checkATMuser(sender)+enter+enter+(_0x4e21b8(0x3fe,0x3fa,0x421,0x41a)+'berhasil\x20d'+_0x2922db(-0xde,-0x1e9,-0x7c,-0xd7)+_0x2922db(0x24,-0x17c,-0x15e,-0x46)+_0x2922db(0x24,-0x89,0x98,-0x31)+'ak1920kal')));await gameAdd(sender,glimit);break;case _0x4e21b8(0x441,0x2a2,0x340,0x347)+_0x2922db(-0xe7,-0x140,-0x133,-0xf0):teks=_0x2922db(-0x1c0,0x98,-0x123,-0xa0)+_0x4e21b8(0x20d,0x373,0x3fe,0x32e)+_0x4e21b8(0x2b6,0x28a,0x21e,0x2bf)+_0x4e21b8(0x241,0x321,0x43a,0x301)+pushname+(_0x4e21b8(0x19d,0x331,0x1d2,0x29c)+_0x4e21b8(0x481,0x316,0x3f2,0x3e1))+getBertualangPlanet(sender)+'_*';const _0xc2fa62={};_0xc2fa62[_0x2922db(-0x12c,-0x121,-0x168,-0x1a6)]=mek,alpha['sendMessag'+'e'](from,teks,text,_0xc2fa62);break;case _0x4e21b8(0x15e,0x36a,0x179,0x24e):case _0x2922db(-0x253,-0x5d,-0x1e5,-0x161):const _0x1b58e0={};_0x1b58e0[_0x4e21b8(0x31e,0x246,0x2e7,0x346)+'t']=_0x4e21b8(0x176,0x1d8,0x2e7,0x2a4)+'t';const _0x11502e={};_0x11502e[_0x4e21b8(0x264,0x2de,0x380,0x34a)]='limit',_0x11502e[_0x4e21b8(0x1ee,0x27b,0x2f1,0x2ee)]=_0x1b58e0,_0x11502e[_0x4e21b8(0x339,0x2dc,0x2ac,0x2ac)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x2922db(-0x18e,-0x2a6,-0x303,-0x1ee)](prefix),'©\x20'+ownername,[_0x11502e]);const _0x3feee1={};_0x3feee1[_0x2922db(-0x1e7,-0x21,-0xe1,-0x110)+'t']=_0x2922db(0x5d,-0xb6,-0x17a,-0xad);const _0x5175fe={};_0x5175fe['buttonId']='event\x20on',_0x5175fe[_0x4e21b8(0x413,0x1f1,0x3d0,0x2ee)]=_0x3feee1,_0x5175fe[_0x2922db(-0x2a8,-0x1a8,-0x1c8,-0x1aa)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x2922db(-0x218,-0x2e3,-0x1f5,-0x1d3)](prefix),'©\x20'+ownername,[_0x5175fe]);cas=q;if(checkATMuser(sender)<cas)return reply('Uang\x20mu\x20ti'+_0x2922db(-0x5a,-0x104,-0x12f,-0xe9)+_0x2922db(-0x146,-0x1f2,-0xef,-0x192)+_0x4e21b8(0x511,0x3e0,0x559,0x462)+_0x4e21b8(0x1f7,0x278,0x1f0,0x24e));if(args['length']<0x7*-0x278+0x66b+0xade)return reply(_0x4e21b8(0x43e,0x4aa,0x4fe,0x487)+_0x4e21b8(0x2a3,0x247,0x2eb,0x2fb));if(isNaN(cas))return reply(_0x2922db(0x1f,-0x1a7,-0x1d9,-0x105)+_0x4e21b8(0x451,0x30e,0x317,0x3dc));const resg=['Kamu\x20MENAN'+_0x4e21b8(0x477,0x502,0x362,0x41e),_0x4e21b8(0x31d,0x25b,0x2ff,0x384)+'!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{function _0x58e931(_0x2c0206,_0x6ff2e1,_0x148db6,_0x33cc47){return _0x4e21b8(_0x6ff2e1,_0x6ff2e1-0x189,_0x148db6-0x195,_0x33cc47-0x154);}const _0x4231e5={'UBFoU':function(_0x466a85,_0x4f8469){return _0x466a85(_0x4f8469);},'RXsbC':function(_0x24f16f,_0x2e95f0){return _0x24f16f*_0x2e95f0;},'CMrrE':function(_0x14386f,_0x3ed754){return _0x14386f+_0x3ed754;},'JOCid':function(_0x234efa,_0x3150f4){return _0x234efa==_0x3150f4;},'aJqLv':_0x58e931(0x5e7,0x457,0x683,0x58d),'plPxG':function(_0x2bb68b,_0x3dcb51,_0xcbbd51){return _0x2bb68b(_0x3dcb51,_0xcbbd51);},'mLLJj':function(_0x463bdc,_0x21f0a2){return _0x463bdc==_0x21f0a2;},'WBvup':'Kamu\x20KALAH'+'!!'},_0x572f80=Math[_0x58e931(0x641,0x3d0,0x3f1,0x507)](_0x4231e5[_0x298201(0x3af,0x2c8,0x429,0x3aa)](Math[_0x58e931(0x3c6,0x450,0x460,0x39a)](),-0x58f+0x186f+-0x12de));function _0x298201(_0x3ca1c9,_0x530c02,_0xae9c3f,_0x3c2e0e){return _0x2922db(_0x3ca1c9-0x49,_0x530c02,_0xae9c3f-0x2,_0x3c2e0e-0x49d);}const _0x53e8f2=_0x4231e5[_0x298201(0x4a6,0x416,0x376,0x38f)](cas,0x1df0+0x3a6*0x2+-0x94f*0x4),_0x5c0459=resg[Math['floor'](Math[_0x298201(0x2ac,0x1ac,0x39a,0x28d)]()*resg[_0x58e931(0x438,0x4fb,0x592,0x48e)])];if(_0x4231e5[_0x58e931(0x343,0x42a,0x37e,0x41c)](_0x5c0459,_0x298201(0x2e5,0x390,0x1f8,0x2e5)+_0x58e931(0x59f,0x49a,0x618,0x572)))_0x4231e5[_0x58e931(0x41a,0x2d1,0x30d,0x3f4)]==='zHiPL'?_0x4231e5['UBFoU'](_0x2ad9d8,_0x58e931(0x3d9,0x5d2,0x483,0x4ee)+_0x298201(0x21c,0x276,0x383,0x2cf)+_0x58e931(0x5dc,0x409,0x5a9,0x527)+'ggu...'):(_0x4231e5[_0x298201(0x4a6,0x4df,0x455,0x433)](addKoinUser,sender,_0x53e8f2),reply(_0x298201(0x301,0x322,0x3c9,0x2bd)+_0x298201(0x2d7,0x307,0x31f,0x2dc)+enter+enter+(_0x298201(0x4fc,0x3ca,0x473,0x44c)+'angkan\x20cas'+_0x298201(0x58d,0x466,0x413,0x45a)+_0x298201(0x3e3,0x46f,0x469,0x48b))+_0x53e8f2+'_*'+enter+enter+(_0x58e931(0x554,0x5ee,0x3f6,0x4e6)+_0x58e931(0x51a,0x565,0x491,0x53e)+_0x58e931(0x551,0x514,0x52b,0x542)+_0x58e931(0x497,0x509,0x413,0x456))));else _0x4231e5[_0x298201(0x34d,0x373,0x478,0x3bc)](_0x5c0459,_0x4231e5[_0x58e931(0x4eb,0x6cc,0x624,0x5e3)])?(confirmATM(sender,cas),_0x4231e5['UBFoU'](reply,_0x298201(0x358,0x278,0x2e3,0x352)+'\x20🥺\x20dan\x20keh'+_0x58e931(0x713,0x4b3,0x55d,0x5e5)+_0x298201(0x485,0x37e,0x423,0x489)+'\x20'+cas)):_0x4231e5[_0x58e931(0x39b,0x532,0x407,0x428)](reply,_0x298201(0x39c,0x352,0x317,0x3b1));},-0xda9*0x1+0xab9+0xea8),setTimeout(()=>{const _0x1a59de={'UDqFl':function(_0x598468,_0x209b97){return _0x598468(_0x209b97);}};function _0x369f36(_0x26bc8c,_0x45e18d,_0x2cff69,_0x5765d2){return _0x4e21b8(_0x5765d2,_0x45e18d-0x33,_0x2cff69-0x1aa,_0x26bc8c- -0xd3);}function _0x367d31(_0x41c707,_0x3e185e,_0x4d9e20,_0x2564a7){return _0x2922db(_0x41c707-0x1f0,_0x2564a7,_0x4d9e20-0x1ec,_0x4d9e20-0x763);}_0x1a59de['UDqFl'](reply,_0x369f36(0x1e9,0x289,0x199,0xb6)+_0x369f36(0x308,0x1df,0x3b7,0x288));},-0x9d6+0x1c8d+-0x12b7),await gameAdd(sender,glimit);break;case _0x2922db(-0xa3,0x19,-0x7b,-0xca):case _0x2922db(-0xe7,-0x22a,-0xab,-0x14c):case _0x4e21b8(0x39e,0x49c,0x3f5,0x3f8):inventory=_0x4e21b8(0x302,0x30b,0x30e,0x245)+'NVENTORY*\x20'+'🗃️\x20\x0a\x0a🎢\x20*COA'+_0x2922db(-0x5c,-0x30,-0x1d7,-0xc0)+getMiningcoal(sender)+(_0x2922db(-0x14e,-0x141,-0x24a,-0x111)+'\x20:\x20')+getMiningstone(sender)+(_0x4e21b8(0x4e0,0x418,0x49a,0x3f9)+_0x4e21b8(0x472,0x3bf,0x314,0x3d4))+getMiningore(sender)+(_0x4e21b8(0x2fd,0x4fe,0x512,0x3e3)+'ORE*\x20:\x20')+getMiningingot(sender)+(_0x2922db(-0x8b,-0x1b1,-0xcd,-0x17a)+':\x20')+getNebangKayu(sender)+(_0x4e21b8(0x3f8,0x570,0x434,0x450)+':\x20')+getMancingIkan(sender)+(_0x2922db(-0xd3,-0x11a,-0x16f,-0x181)+_0x4e21b8(0x434,0x35e,0x2dd,0x3a4)+_0x2922db(-0xe0,-0x145,-0x89,-0x18b)+_0x2922db(-0x1c6,-0x1b7,-0x23f,-0x218)+_0x4e21b8(0x387,0x178,0x26e,0x28b)+'nyak\x20inven'+_0x4e21b8(0x322,0x365,0x458,0x36f)),alpha['sendMessag'+'e'](from,pp_userz,image,{'thumbnail':Buffer['alloc'](0x1445*0x1+-0x8f5*-0x1+0x1d*-0x102),'quoted':mek,'caption':inventory});break;case _0x2922db(-0xce,-0x99,-0xf6,-0xd3):kodenyab=_0x2922db(-0x59,-0x156,-0x62,-0xb0)+_0x4e21b8(0x284,0x1a3,0x224,0x270)+_0x2922db(-0x285,-0x1ce,-0x31e,-0x1f5)+_0x4e21b8(0x3b6,0x3a7,0x517,0x4ad)+_0x4e21b8(0x554,0x4d1,0x518,0x45e)+'banian\x0a\x20\x20\x20'+'\x20ar\x20\x20\x20\x20\x20\x20\x20'+_0x4e21b8(0x44b,0x378,0x430,0x407)+'\x20\x20hy\x20\x20\x20\x20\x20\x20'+_0x4e21b8(0x461,0x3bb,0x486,0x461)+_0x2922db(-0x100,-0xc0,-0xc7,-0x1ac)+'\x20\x20\x20\x20\x20Catal'+'an\x0a\x20\x20\x20\x20zh\x20'+'\x20\x20\x20\x20\x20\x20\x20Chi'+_0x4e21b8(0x25c,0x349,0x230,0x35d)+_0x2922db(0x70,-0x4a,-0xd0,-0x10)+_0x2922db(-0xb4,-0x1a,-0x17d,-0x87)+_0x2922db(0x42,-0x4,0x121,0xa)+_0x4e21b8(0x393,0x3f9,0x23f,0x327)+_0x2922db(-0x2ef,-0xed,-0x221,-0x1ef)+_0x2922db(-0x267,-0x1bf,-0x1c9,-0x172)+_0x2922db(-0x16,-0x111,-0x1c3,-0x99)+'Chinese\x20(C'+'antonese)\x0a'+'\x20\x20\x20\x20hr\x20\x20\x20\x20'+_0x2922db(0x3d,-0x96,0x146,0xf)+_0x4e21b8(0x2aa,0x32d,0x270,0x362)+_0x4e21b8(0x3fd,0x2e8,0x3d4,0x3ba)+'ch\x0a\x20\x20\x20\x20da\x20'+'\x20\x20\x20\x20\x20\x20\x20Dan'+_0x2922db(-0x6d,-0x180,-0x15f,-0x11f)+'\x20\x20\x20\x20\x20\x20\x20\x20Du'+_0x4e21b8(0x361,0x34e,0x202,0x311)+_0x2922db(-0xa7,-0xfe,0x31,-0xfa)+_0x2922db(-0x1c1,-0x78,-0xe1,-0x100)+_0x2922db(-0x1c8,-0x1ec,-0xe4,-0xbf)+_0x4e21b8(0x353,0x309,0x2c2,0x3a7)+_0x4e21b8(0x38d,0x51f,0x3a5,0x45b)+_0x4e21b8(0x449,0x2ad,0x2f6,0x37a)+_0x4e21b8(0x1d1,0x1a7,0x2f4,0x263)+_0x2922db(-0xe1,0x6d,-0xf0,-0xcb)+_0x4e21b8(0x4be,0x435,0x3f5,0x3e4)+_0x4e21b8(0x35a,0x2ef,0x270,0x2d2)+_0x2922db(-0x272,-0xd3,-0x29c,-0x1df)+'\x20(United\x20S'+_0x4e21b8(0x318,0x37b,0x492,0x35b)+'\x20eo\x20\x20\x20\x20\x20\x20\x20'+_0x4e21b8(0x295,0x281,0x2fb,0x2b2)+'\x0a\x20\x20\x20\x20fi\x20\x20\x20'+_0x2922db(-0x10e,-0x158,-0x115,-0x11b)+'sh\x0a\x20\x20\x20\x20fr\x20'+_0x4e21b8(0x258,0x3bc,0x3c7,0x317)+_0x2922db(-0x1b4,-0x256,-0x266,-0x213)+_0x2922db(-0x1d7,-0xf9,0x34,-0xc6)+_0x2922db(-0x13d,0x14,-0x10,-0x3)+'l\x20\x20\x20\x20\x20\x20\x20\x20G'+'reek\x0a\x20\x20\x20\x20h'+_0x2922db(0xa7,0xa,-0x75,0x3e)+'aitian\x20Cre'+_0x2922db(-0x14b,-0x1e4,-0x1fe,-0x11e)+_0x2922db(0x63,0x63,-0x118,-0xa6)+_0x4e21b8(0x39e,0x1d0,0x1d7,0x2e9)+_0x2922db(-0xd1,-0x167,-0x1b8,-0x16c)+_0x4e21b8(0x2e5,0x1cc,0x3d3,0x2ae)+_0x2922db(0xc4,-0xa6,0x5a,0x56)+_0x2922db(0x4,-0xd0,-0x32,0x2f)+'c\x0a\x20\x20\x20\x20id\x20\x20'+_0x2922db(-0xc4,0x11f,-0x38,0x25)+_0x2922db(-0x16b,-0x13e,-0x265,-0x212)+_0x4e21b8(0x1d2,0x3e4,0x30d,0x309)+'\x20Italian\x0a\x20'+_0x2922db(-0x2a3,-0x2a5,-0x239,-0x1eb)+_0x4e21b8(0x48c,0x45e,0x2f6,0x423)+_0x4e21b8(0x2ad,0x2ba,0x365,0x326)+_0x2922db(-0xb0,-0x1f3,-0x12f,-0xc9)+_0x2922db(-0x1ab,-0xbc,-0x14b,-0xcf)+'\x20\x20\x20\x20\x20\x20\x20Lat'+'in\x0a\x20\x20\x20\x20lv\x20'+_0x4e21b8(0x222,0x227,0x2fd,0x316)+_0x2922db(-0x2dd,-0xe3,-0xda,-0x20c)+'k\x20\x20\x20\x20\x20\x20\x20\x20M'+_0x2922db(0x1f,-0x75,-0x136,-0x36)+_0x4e21b8(0x2c3,0x36e,0x313,0x315)+'\x20\x20\x20\x20Norweg'+_0x4e21b8(0x30f,0x327,0x48b,0x3cb)+_0x4e21b8(0x3cb,0x17e,0x27c,0x2ad)+_0x4e21b8(0x4fe,0x379,0x47a,0x43a)+_0x2922db(-0x1be,-0xed,-0x103,-0xc5)+_0x2922db(-0x1b7,-0x2ca,-0xf1,-0x1be)+_0x4e21b8(0x30e,0x265,0x222,0x2a5)+'\x20\x20\x20\x20Portug'+'uese\x20(Braz'+_0x2922db(0x36,0x95,-0x7a,-0xa5)+'\x20\x20\x20\x20\x20\x20\x20\x20Ro'+_0x2922db(-0x176,-0xb6,-0x53,-0x15a)+'\x20ru\x20\x20\x20\x20\x20\x20\x20'+_0x2922db(-0x27f,-0x15e,-0x2b9,-0x18c)+'\x20\x20\x20sr\x20\x20\x20\x20\x20'+_0x2922db(-0xff,0xdc,0xfc,-0x2c)+'\x0a\x20\x20\x20\x20sk\x20\x20\x20'+(_0x2922db(-0xce,-0x1e5,-0xe6,-0x1bc)+_0x4e21b8(0x499,0x43a,0x50a,0x499)+'\x20\x20\x20\x20\x20\x20Span'+_0x4e21b8(0x49a,0x4ae,0x40e,0x458)+_0x4e21b8(0x527,0x488,0x479,0x432)+'anish\x20(Spa'+_0x4e21b8(0x567,0x328,0x4e2,0x42f)+'-us\x20\x20\x20\x20\x20Sp'+_0x2922db(0x46,-0x165,0x19,-0xcd)+_0x2922db(-0x64,-0xdc,-0xaf,-0x77)+_0x4e21b8(0x52f,0x45a,0x2e0,0x418)+_0x2922db(-0x247,-0x2bd,-0x22b,-0x1e8)+'ili\x0a\x20\x20\x20\x20sv'+'\x20\x20\x20\x20\x20\x20\x20\x20Sw'+_0x4e21b8(0x4dd,0x479,0x3d7,0x3ae)+_0x2922db(-0x137,0x58,-0x13c,-0x7d)+_0x2922db(-0x270,-0x123,-0x18f,-0x166)+_0x2922db(-0x31f,-0x1ec,-0x1db,-0x215)+_0x2922db(-0x14e,-0x1a0,-0x69,-0xcc)+_0x2922db(-0x24e,-0x1e7,-0x220,-0x19e)+'urkish\x0a\x20\x20\x20'+_0x2922db(-0x71,-0x190,-0x1d1,-0x176)+_0x2922db(-0x40,-0x105,0xa9,0x7)+_0x4e21b8(0x4ed,0x33b,0x49b,0x409)+_0x4e21b8(0x4d7,0x4de,0x37c,0x48a)+'h\x0a\x20\x20\x20\x20'),reply(kodenyab);break;case'tts':const _0x1f4239={};_0x1f4239[_0x2922db(-0xac,-0x1b2,-0xd2,-0x1a6)]=mek;if(args[_0x2922db(-0x105,-0x19c,-0x1fc,-0x11c)]<0x2243+0x200+-0x2442)return alpha['sendMessag'+'e'](from,'Kode\x20bahas'+_0x4e21b8(0x4e9,0x506,0x449,0x42e)+'om?',text,_0x1f4239);kodenya=['af','sq','ar','hy','ca','zh',_0x4e21b8(0x34e,0x525,0x4a2,0x402),_0x4e21b8(0x41d,0x49c,0x3f7,0x404),_0x4e21b8(0x514,0x405,0x408,0x49d),'hr','cs','da','nl','en',_0x4e21b8(0x569,0x3a4,0x5b3,0x482),_0x4e21b8(0x378,0x3a6,0x38d,0x3b2),_0x2922db(-0x12d,-0x64,-0x1a0,-0x13e),'eo','fi','fr','de','el','ht','hi','hu','is','id','it','ja','ko','la','lv','mk','no','pl','pt',_0x2922db(-0x173,-0x112,-0x171,-0x1ec),'ro','ru','sr','sk','es','es-es',_0x4e21b8(0x31a,0x380,0x194,0x273),'sw','sv','ta','th','tr','vi','cy'];try{const gtts=require(_0x4e21b8(0x2f4,0x29c,0x298,0x27a))(args[-0xaf0+-0x153a+-0x2e*-0xb3]),_0x154d87={};_0x154d87[_0x2922db(-0x127,-0x196,-0x86,-0x1a6)]=mek;if(args[_0x2922db(-0x112,-0x10a,-0x216,-0x11c)]<-0xd1*0xd+0x41a+0x685)return alpha[_0x4e21b8(0x255,0x3dd,0x270,0x33d)+'e'](from,_0x4e21b8(0x28f,0x325,0x3f3,0x37d)+_0x4e21b8(0x43a,0x488,0x510,0x438),text,_0x154d87);dtt=body[_0x4e21b8(0x372,0x3d0,0x2de,0x304)](-0x11*-0x1fd+0x17+0x3c3*-0x9),ranm=getRandom(_0x4e21b8(0x351,0x35b,0x2dd,0x3d8)),rano=getRandom(_0x2922db(-0x99,0x7,-0xea,-0x2)),dtt['length']>-0xd2*0x1c+-0x3*0x67a+0x2cbe?reply(_0x4e21b8(0x343,0x196,0x2ab,0x248)+'banyakan\x20o'+'m'):gtts[_0x2922db(0x55,0x6d,-0x13c,-0x85)](ranm,dtt,function(){const _0x39014a={};function _0x13cfad(_0x375bda,_0x460a0b,_0x251ccd,_0x2d9bf6){return _0x2922db(_0x375bda-0x1b5,_0x2d9bf6,_0x251ccd-0x10b,_0x375bda-0x3be);}_0x39014a['vfyRI']=_0x1a8280(0x12e,0x215,0x21a,0x32),_0x39014a[_0x13cfad(0x3cb,0x4e1,0x46e,0x378)]=_0x1a8280(0x1e3,0x118,0x21b,0x1eb);function _0x1a8280(_0x4aa2db,_0x5eb285,_0x319089,_0x59f894){return _0x4e21b8(_0x59f894,_0x5eb285-0x171,_0x319089-0x109,_0x4aa2db- -0x131);}const _0xfc217f=_0x39014a;exec(_0x13cfad(0x3f8,0x437,0x31e,0x3ec)+ranm+('\x20-ar\x2048000'+_0x1a8280(0x12f,0x1ff,0x1b9,0x177)+_0x1a8280(0x124,0x197,0xdb,0x25e))+rano,_0x5e8942=>{function _0x3897da(_0x53aab9,_0x3e7121,_0x460d6a,_0x1356c2){return _0x13cfad(_0x460d6a-0x18c,_0x3e7121-0x1ec,_0x460d6a-0x55,_0x1356c2);}const _0x5f1636=_0xfc217f['vfyRI'][_0x5453e9(-0x10,0x2d,-0x146,-0x11c)]('|');let _0x5bc04b=0x5*0x679+-0x71*0x4a+-0x4d*-0x1;function _0x5453e9(_0x18f129,_0x225ecb,_0x395e3f,_0x145f98){return _0x1a8280(_0x18f129- -0x34b,_0x225ecb-0xdd,_0x395e3f-0x114,_0x145f98);}while(!![]){switch(_0x5f1636[_0x5bc04b++]){case'0':buff=fs[_0x5453e9(-0x91,-0xa5,0x40,0x87)+'nc'](rano);continue;case'1':if(_0x5e8942)return reply(_0xfc217f[_0x5453e9(-0x19,-0x135,-0x27,-0xc9)]);continue;case'2':fs[_0x3897da(0x361,0x3d6,0x38b,0x267)](rano);continue;case'3':const _0x39323d={};_0x39323d[_0x5453e9(-0x1cc,-0x15d,-0x20a,-0x168)]=mek,_0x39323d[_0x5453e9(-0x1b9,-0x21f,-0x21d,-0x2b9)]=!![],alpha['sendMessag'+'e'](from,buff,audio,_0x39323d);continue;case'4':fs['unlinkSync'](ranm);continue;}break;}});});}catch{reply('Contoh\x20pen'+_0x2922db(0xcf,-0xf8,-0x71,0x23)+_0x2922db(-0x2cd,-0x106,-0xd0,-0x1fc)+'hasa\x20text\x0a'+_0x2922db(-0x229,-0xc3,-0x16c,-0x158)+_0x2922db(0x16c,0xde,0x145,0x42)+'ning\x0aSilah'+_0x2922db(0x178,-0x16,0x113,0x4e)+'de\x20bahasa\x20'+_0x4e21b8(0x2ec,0x3c1,0x1d1,0x2d6)+_0x2922db(-0x185,-0x18f,-0x265,-0x209));}break;case'ghstalk':case'githubstal'+'k':case'ghuser':{if(args['length']<0x24bd+0x289*0x2+-0x2*0x14e7)return reply(_0x4e21b8(0x23e,0x272,0x37f,0x333)+'ntah\x20*'+prefix+(_0x2922db(0xa4,0xa9,0x6d,-0x66)+_0x2922db(0x5,0x5f,-0x108,0x13)));reply(lang[_0x4e21b8(0x401,0x316,0x373,0x2fa)]());let y=await fetchJson(_0x2922db(-0x18d,-0x1e3,-0x121,-0x1a2)+_0x2922db(-0x1e7,0x36,-0x16b,-0xfe)+_0x4e21b8(0x280,0x23a,0x29a,0x31a)+q),ppgt=await getBuffer(y[_0x2922db(0x86,-0x16b,-0xca,-0x4b)]),text=_0x2922db(-0x2d3,-0x1a6,-0x91,-0x199)+_0x2922db(-0x66,-0x88,-0xfd,-0x64)+_0x4e21b8(0x525,0x2df,0x33d,0x3fb)+enter+enter+(_0x4e21b8(0x3fe,0x39d,0x2ad,0x3b9)+_0x4e21b8(0x489,0x5ab,0x4e3,0x488))+y[_0x2922db(0x5f,-0x5,0x3a,0x38)]+enter+_0x2922db(0x95,-0x1d1,-0xb5,-0x9f)+y[_0x2922db(-0xe9,0x6f,-0x1d,-0x4e)]+enter+_0x4e21b8(0x1d5,0x1a0,0x3d6,0x2c0)+y['id']+enter+(_0x2922db(-0x156,0x4a,-0xf2,-0x8a)+':\x20')+y[_0x2922db(-0x12c,-0x292,-0xab,-0x1b7)]+enter+(_0x2922db(0x30,0xd6,-0xae,0x3)+'s\x20:\x20')+y[_0x4e21b8(0x36c,0x571,0x4a4,0x49b)]+enter+('♎\x20Followin'+_0x2922db(-0x2b,-0x17,-0x4b,-0xe8))+y[_0x2922db(-0x1f8,-0x99,-0x1ed,-0xdf)]+enter+_0x4e21b8(0x5d6,0x549,0x446,0x49c)+y[_0x4e21b8(0x36f,0x2d3,0x278,0x2ac)]+enter+(_0x2922db(-0x9e,-0x20,0x3,-0xf5)+':\x20')+y[_0x4e21b8(0x3e8,0x3c3,0x30e,0x417)]+enter+'🌐\x20Blog\x20:\x20'+y[_0x4e21b8(0x304,0x1f6,0x36d,0x305)]+enter+('📍\x20Location'+'\x20:\x20')+y[_0x2922db(-0x29,-0xba,-0x16e,-0xda)]+enter+_0x2922db(-0xb8,-0x84,-0x19a,-0xf1)+y[_0x4e21b8(0x2c6,0x227,0x206,0x2f9)]+enter+_0x2922db(-0xf5,-0x24f,-0x26d,-0x143)+y['bio']+enter+(_0x2922db(0x113,0xf0,-0x8b,0x48)+_0x4e21b8(0x32c,0x2e2,0x33d,0x3f5)+'\x20')+y[_0x2922db(0x42,-0x65,-0x111,-0xe5)+_0x2922db(0xe4,-0xf3,-0xe1,-0x19)]+enter+(_0x2922db(-0xfb,-0x1c7,-0x23e,-0x146)+_0x2922db(-0xf6,-0x11c,-0x16e,-0xbd))+y[_0x2922db(-0x4f,-0x137,0x27,-0x70)+'os']+enter+(_0x4e21b8(0x4e4,0x54a,0x38f,0x480)+_0x4e21b8(0x357,0x274,0x2fa,0x250))+y['public_gis'+'ts']+enter+(_0x2922db(0x23,0x68,-0x5a,-0xac)+':\x20')+moment(y[_0x2922db(0x7c,-0xcc,-0x152,-0xa2)])['tz']('Asia/Jakar'+'ta')[_0x4e21b8(0x301,0x245,0x125,0x256)]('id')[_0x4e21b8(0x415,0x3e0,0x3a5,0x3fa)](_0x4e21b8(0x1a6,0x30a,0x338,0x296)+_0x4e21b8(0x52e,0x3cf,0x4d7,0x3f7))+enter+(_0x2922db(0x149,-0x24,0x180,0x52)+'\x20')+moment(y[_0x2922db(0xe0,0xc7,0x9e,-0x47)])['tz']('Asia/Jakar'+'ta')['locale']('id')[_0x2922db(-0x97,0x2a,0xac,-0x5c)]('HH:mm:ss\x20D'+_0x4e21b8(0x51f,0x4a9,0x490,0x3f7))+enter+(_0x4e21b8(0x450,0x463,0x446,0x401)+'tps://gith'+_0x2922db(0x14a,0x34,0x43,0x36))+q;const _0x5c6316={};_0x5c6316[_0x4e21b8(0x33a,0x366,0x1cf,0x25d)]=text,_0x5c6316[_0x2922db(-0x106,-0x1e0,-0x1aa,-0x1a6)]=mek,alpha[_0x4e21b8(0x44b,0x2b3,0x3a6,0x33d)+'e'](from,ppgt,image,_0x5c6316),await limitAdd(sender,limit);}break;case _0x4e21b8(0x249,0x12e,0x2a9,0x247):const _0x4ce7eb={};_0x4ce7eb[_0x2922db(0x35,-0x6b,-0x80,-0x4c)]=_0x2922db(-0x203,-0xfd,-0x2c3,-0x1fd)+'695578';const _0x13df9a={};_0x13df9a[_0x4e21b8(0x3b3,0x387,0x248,0x2f2)]=_0x2922db(-0x7b,-0xfe,-0x164,-0xb4)+'RMANEN',_0x13df9a['products']=[_0x4ce7eb];const _0x537c97={};_0x537c97[_0x4e21b8(0x336,0x361,0x499,0x40a)]=_0x4e21b8(0x1e6,0x448,0x39d,0x31b)+_0x2922db(-0x151,-0x2f5,-0x20a,-0x1fa);const _0x2b340c={};_0x2b340c[_0x2922db(-0x20f,-0xda,-0x1d6,-0x164)]=_0x2922db(-0xe3,-0xae,0x5f,-0xb9)+_0x2922db(-0xc,-0x5f,-0x10b,0x17)+'AN',_0x2b340c[_0x2922db(0xbc,0x73,-0x146,-0x69)]=[_0x537c97];const _0x3aa1b1={};_0x3aa1b1['productId']='4626617390'+'737893';const _0x498fb4={};_0x498fb4[_0x2922db(-0x1e9,-0x1ec,-0x55,-0x164)]=_0x2922db(-0x193,-0x152,-0x2aa,-0x19f)+_0x2922db(0x6b,-0x64,-0x20,-0x89)+_0x4e21b8(0x141,0x2b6,0x2c6,0x242),_0x498fb4[_0x2922db(0x1,-0x15e,0xb2,-0x69)]=[_0x3aa1b1];const _0x20415f={};_0x20415f[_0x4e21b8(0x33a,0x279,0x33c,0x2b0)]=mek,lisduct=await alpha[_0x2922db(-0xb0,-0x16d,-0x13,-0xaa)+_0x4e21b8(0x4c6,0x35b,0x429,0x46b)+_0x2922db(-0xeb,-0x1b8,-0x17e,-0x16a)](from,{'listMessage':{'title':_0x4e21b8(0x333,0x3d5,0x44c,0x3a2)+_0x4e21b8(0x32d,0x242,0x3e5,0x306),'description':_0x4e21b8(0x273,0x48c,0x33b,0x380)+_0x4e21b8(0x3d5,0x4a3,0x4d2,0x3fd)+'lu?\x20Hmm.\x20S'+_0x2922db(0x106,-0x42,-0xb2,-0x9)+'solusinya,'+_0x2922db(-0xc0,-0x1a,-0x205,-0x114)+_0x2922db(-0xc3,-0x269,-0x256,-0x1da)+_0x2922db(-0x60,-0x2aa,-0x150,-0x191)+_0x2922db(-0x77,-0x1b7,-0x1b4,-0x169)+_0x2922db(0x5c,-0x1c,-0x40,0x1)+_0x4e21b8(0x28b,0x385,0x44d,0x394)+_0x2922db(-0x8f,-0x44,-0x29,-0x127)+_0x2922db(0x27,-0xd7,-0x1d1,-0x106)+'&\x20fix.\x20Tid'+_0x4e21b8(0x494,0x344,0x441,0x373)+'eli\x20apikey'+_0x2922db(-0x4c,0x30,0x94,-0xb)+_0x4e21b8(0x49a,0x4f9,0x439,0x42c)+_0x4e21b8(0x53d,0x594,0x4d3,0x475)+_0x4e21b8(0x431,0x560,0x54c,0x434)+_0x2922db(0x113,0x54,-0x7c,0x1a),'buttonText':'','listType':_0x4e21b8(0x4fd,0x45c,0x470,0x430)+'ST','productListInfo':{'productSections':[_0x13df9a,_0x2b340c,_0x498fb4],'headerImage':{'jpegThumbnail':fs['readFileSy'+'nc'](_0x2922db(-0xbf,0x27,-0xe1,-0x10d)+thumbnail)},'businessOwnerJid':'6288743504'+_0x2922db(0x7b,0x15,-0xed,-0x16)+_0x2922db(-0xb4,-0xe8,-0xef,-0x57)},'footerText':_0x4e21b8(0x508,0x4ce,0x3b7,0x41d)+_0x2922db(-0x30,-0x28,-0x1d1,-0xc7)+_0x4e21b8(0x136,0x15d,0x167,0x23c)}},_0x20415f);const _0xcb990b={};_0xcb990b['waitForAck']=!![],alpha['relayWAMes'+_0x4e21b8(0x569,0x4ec,0x3fc,0x489)](lisduct,_0xcb990b);break;case _0x4e21b8(0x30f,0x28b,0x330,0x395):{const flamingtext=_0x2922db(-0x1e8,-0x309,-0x122,-0x1f2)+_0x2922db(-0x7,-0x2a,-0x186,-0xbe)+_0x4e21b8(0x4cf,0x440,0x36b,0x476)+_0x2922db(-0x17d,-0xf,-0x196,-0xc8)+_0x4e21b8(0x4fc,0x2ed,0x481,0x3ca)+_0x2922db(-0x287,-0x181,-0x56,-0x186)+_0x4e21b8(0x34a,0x3cf,0x3a4,0x2e5)+'cript=sket'+_0x2922db(-0xd5,0x119,0x1,-0xf)+'Scale=true'+_0x2922db(-0x5e,0x1d,-0x1aa,-0x84)+_0x2922db(-0x30,-0x68,-0xa0,-0x5a)+_0x4e21b8(0x36c,0x40a,0x2fe,0x319)+_0x2922db(-0x277,-0x112,-0x81,-0x14f)+_0x2922db(-0x2fd,-0x1c9,-0x11c,-0x204)+_0x4e21b8(0x261,0x1fe,0x219,0x2fd)+_0x4e21b8(0x351,0x3a1,0x47b,0x416)+_0x4e21b8(0x381,0x44a,0x381,0x3e8)+_0x4e21b8(0x51d,0x2c9,0x4b7,0x400);if(isGroup)return reply(_0x4e21b8(0x2af,0x3ba,0x4d9,0x3d7)+_0x4e21b8(0x433,0x2e0,0x40a,0x376));this[_0x2922db(-0xa3,-0x68,-0x1fa,-0xc1)]=this[_0x2922db(0x16,-0x18f,-0x49,-0xc1)]?this['anonymous']:{},anonymousloc=await getBuffer(flamingtext+(_0x4e21b8(0x3d4,0x434,0x333,0x3d5)+'Chat'));const _0x45be48={};_0x45be48['displayTex'+'t']=_0x4e21b8(0x322,0x2b5,0x304,0x2a3);const _0x506248={};_0x506248['buttonId']=_0x2922db(0x47,0xee,0x46,-0x29),_0x506248[_0x4e21b8(0x217,0x339,0x286,0x2ee)]=_0x45be48,_0x506248[_0x4e21b8(0x2f9,0x177,0x1a0,0x2ac)]=0x1;const _0x412162={};_0x412162[_0x4e21b8(0x2fd,0x329,0x251,0x346)+'t']='START';const _0xab315c={};_0xab315c[_0x2922db(-0xcf,-0x13a,-0x1ca,-0x10c)]=_0x2922db(-0xe7,0x6c,0x137,0x1c),_0xab315c[_0x2922db(-0x251,-0x36,-0x1b3,-0x168)]=_0x412162,_0xab315c['type']=0x1;const _0x545677={};_0x545677['quoted']=mek,sendButLocation(from,_0x2922db(0x1f,0x15c,-0xa4,0x30)+'\x20Anonymous'+_0x4e21b8(0x413,0x2f1,0x241,0x2d9)+prefix+('start\x20-\x20Se'+_0x4e21b8(0x320,0x33d,0x2a2,0x3bb)+_0x4e21b8(0x1c6,0x2c5,0x3b1,0x2f8))+prefix+(_0x4e21b8(0x392,0x362,0x193,0x284)+_0x2922db(-0x10a,-0xfe,-0x10c,-0xa1))+prefix+('leave\x20-\x20Le'+_0x4e21b8(0x2bf,0x378,0x2e6,0x2b9)+'r'),_0x2922db(-0x104,-0x248,-0xd0,-0x1b4)+'t\x20'+botname+_0x4e21b8(0x1e2,0x2a9,0x198,0x2cd),anonymousloc,[_0x506248,_0xab315c],_0x545677);}break;case _0x4e21b8(0x456,0x4dc,0x4c6,0x496):case'leave':{if(isGroup)return reply(_0x4e21b8(0x35c,0x4b2,0x2ee,0x3d7)+_0x2922db(0x2b,-0xb4,-0x93,-0xe0));this['anonymous']=this[_0x4e21b8(0x383,0x382,0x3ab,0x395)]?this['anonymous']:{};let room=Object[_0x2922db(-0x51,-0x2,-0x1bc,-0x98)](this[_0x4e21b8(0x43f,0x286,0x48d,0x395)])[_0x2922db(0x8a,0xc,0x62,-0x6d)](_0x11a1d8=>_0x11a1d8[_0x2922db(-0xa5,-0x190,-0x71,-0x91)](m['sender']));if(!room){const _0x494d23={};_0x494d23['displayTex'+'t']=_0x2922db(-0x97,-0xc7,-0x1d7,-0x12e);const _0x32bd59={};_0x32bd59[_0x2922db(-0x1e1,0xd,-0x186,-0x10c)]=_0x2922db(-0xf4,-0xe1,0xa4,0x1c),_0x32bd59[_0x4e21b8(0x3e8,0x20a,0x276,0x2ee)]=_0x494d23,_0x32bd59[_0x4e21b8(0x269,0x19c,0x3bd,0x2ac)]=0x1;const _0x3bda0e={};_0x3bda0e['quoted']=mek,await sendButMessage(from,_0x4e21b8(0x481,0x4be,0x4aa,0x484)+_0x2922db(-0x1c4,-0x2b,-0x54,-0x160)+_0x4e21b8(0x278,0x31f,0x3cd,0x367)+_0x2922db(-0x6,-0x1d5,-0x1f9,-0x137)+'k\x20Dibawah\x20'+_0x4e21b8(0x377,0x489,0x374,0x46a)+'t\x20Anonymou'+_0x4e21b8(0x38d,0x3e6,0x206,0x2be),_0x2922db(-0x150,-0x157,-0x22f,-0x1b4)+'t\x20'+botname+_0x2922db(-0x18d,-0xc6,-0x1e8,-0xdd),[_0x32bd59],_0x3bda0e);throw![];}const _0x469fcc={};_0x469fcc['displayTex'+'t']=_0x4e21b8(0x3b0,0x41b,0x3b6,0x328);const _0x491415={};_0x491415[_0x2922db(-0xfe,-0x244,-0x68,-0x10c)]=_0x4e21b8(0x3c7,0x538,0x4a7,0x472),_0x491415['buttonText']=_0x469fcc,_0x491415[_0x4e21b8(0x20d,0x1c7,0x1eb,0x2ac)]=0x1;const _0x2598e4={};_0x2598e4[_0x4e21b8(0x31e,0x311,0x3a4,0x2b0)]=mek,sendButMessage(from,_0x4e21b8(0x1a7,0x304,0x351,0x24c)+_0x4e21b8(0x43f,0x2fc,0x3af,0x412)+_0x2922db(0x29,-0x19,0x87,0x51)+_0x2922db(0x7b,0x92,-0x70,-0x2f)+_0x4e21b8(0x2f2,0x22a,0x27a,0x2da),_0x2922db(-0xac,-0x2b8,-0x1df,-0x1b4)+'t\x20'+botname+'\x202021',[_0x491415],_0x2598e4);let other=room['other'](m[_0x4e21b8(0x42e,0x3b2,0x38e,0x406)]);const _0x236553={};_0x236553[_0x4e21b8(0x42e,0x40c,0x29b,0x346)+'t']=_0x4e21b8(0x2b1,0x41d,0x2df,0x328);const _0xfbe7fd={};_0xfbe7fd['buttonId']='start',_0xfbe7fd[_0x2922db(-0x118,-0x6c,-0xc0,-0x168)]=_0x236553,_0xfbe7fd[_0x4e21b8(0x1fa,0x287,0x304,0x2ac)]=0x1;const _0x54c246={};_0x54c246[_0x2922db(-0x120,-0x10c,-0x20f,-0x1a6)]=mek;if(other)await sendButMessage(other,_0x4e21b8(0x478,0x4ec,0x44f,0x477)+'\x20meninggal'+'kan\x20chat_','©\x20Copyrigh'+'t\x20'+botname+'\x202021',[_0xfbe7fd],_0x54c246);delete this[_0x4e21b8(0x31d,0x2a8,0x3b2,0x395)][room['id']];if(command===_0x2922db(-0xf3,0x8c,-0x5e,-0xd))break;}case _0x2922db(0xa8,-0x5c,0xa8,-0x32):case _0x2922db(-0x62,-0x2f,0x9e,0x1c):{if(isGroup)return reply(_0x4e21b8(0x426,0x4f2,0x2c5,0x3d7)+_0x2922db(-0x198,-0x155,-0xed,-0xe0));this[_0x2922db(0x77,-0x7e,-0x112,-0xc1)]=this[_0x4e21b8(0x314,0x2ef,0x409,0x395)]?this['anonymous']:{};if(Object['values'](this[_0x2922db(-0x1d6,-0x172,-0x5b,-0xc1)])[_0x2922db(0xc8,-0x171,0x9c,-0x6d)](_0x568b39=>_0x568b39['check'](m['sender']))){const _0x1f0164={};_0x1f0164['displayTex'+'t']='LEAVE';const _0x35817d={};_0x35817d[_0x2922db(-0x167,-0x134,-0x1f7,-0x10c)]=_0x4e21b8(0x506,0x530,0x480,0x449),_0x35817d['buttonText']=_0x1f0164,_0x35817d['type']=0x1;const _0x5b4fd7={};_0x5b4fd7[_0x2922db(-0x170,-0x100,-0x148,-0x1a6)]=mek,await sendButMessage(from,_0x4e21b8(0x341,0x3b5,0x345,0x43f)+'\x20Berada\x20Di'+'\x20Anonymous'+'\x20Chat\x20!','©\x20Copyrigh'+'t\x20'+botname+_0x4e21b8(0x484,0x34b,0x459,0x379),[_0x35817d],_0x5b4fd7);throw![];}let room=Object[_0x4e21b8(0x2fa,0x2e9,0x4b5,0x3be)](this['anonymous'])[_0x4e21b8(0x485,0x307,0x3f4,0x3e9)](_0x3d58d7=>_0x3d58d7['state']===_0x2922db(0x2f,0x3e,0x38,0x37)&&!_0x3d58d7[_0x2922db(-0x4f,0x83,0xa6,-0x91)](m[_0x2922db(0x59,0xb3,-0xca,-0x50)]));if(room){const _0x4dc7b8={};_0x4dc7b8[_0x2922db(-0xa,-0xdf,0x1a,-0x110)+'t']=_0x4e21b8(0x396,0x3ad,0x532,0x41f);const _0x1a1700={};_0x1a1700[_0x4e21b8(0x30e,0x247,0x28c,0x34a)]=_0x2922db(-0x23,-0xa5,0x64,-0xd),_0x1a1700[_0x4e21b8(0x330,0x304,0x3c6,0x2ee)]=_0x4dc7b8,_0x1a1700[_0x2922db(-0xb1,-0xa9,-0x146,-0x1aa)]=0x1;const _0x46f5f9={};_0x46f5f9[_0x4e21b8(0x42d,0x2a6,0x421,0x346)+'t']=_0x2922db(-0x1b6,-0x1e4,-0x18d,-0x1ad);const _0x11fc93={};_0x11fc93['buttonId']='skip',_0x11fc93[_0x4e21b8(0x281,0x27e,0x41e,0x2ee)]=_0x46f5f9,_0x11fc93['type']=0x1;const _0x1d5d0b={};_0x1d5d0b[_0x4e21b8(0x32c,0x24a,0x26c,0x2b0)]=mek,await sendButMessage(room['a'],_0x4e21b8(0x2f2,0x1d1,0x21b,0x2a7)+_0x4e21b8(0x320,0x433,0x29c,0x3ad)+'🎭',_0x4e21b8(0x2b1,0x266,0x241,0x2a2)+'t\x20'+botname+_0x4e21b8(0x2cb,0x307,0x45b,0x379),[_0x1a1700,_0x11fc93],_0x1d5d0b),room['b']=m['sender'],room['state']=_0x4e21b8(0x24a,0x2fd,0x319,0x249);const _0x355368={};_0x355368[_0x2922db(-0x168,-0x98,-0x93,-0x110)+'t']=_0x4e21b8(0x355,0x3bb,0x39a,0x41f);const _0x14550f={};_0x14550f['buttonId']='leave',_0x14550f[_0x2922db(-0x11f,-0x176,-0x1b4,-0x168)]=_0x355368,_0x14550f[_0x2922db(-0x1bc,-0x20e,-0xba,-0x1aa)]=0x1;const _0x3757a8={};_0x3757a8[_0x2922db(0x17,-0x124,-0x52,-0x110)+'t']='SKIP';const _0x4e88a7={};_0x4e88a7[_0x4e21b8(0x35f,0x226,0x3d4,0x34a)]='skip',_0x4e88a7[_0x4e21b8(0x1ce,0x3a0,0x334,0x2ee)]=_0x3757a8,_0x4e88a7[_0x4e21b8(0x33e,0x3c0,0x1c7,0x2ac)]=0x1;const _0x48caea={};_0x48caea['quoted']=mek,await sendButMessage(room['b'],_0x2922db(-0x220,-0x22e,-0x141,-0x1af)+_0x4e21b8(0x2c7,0x439,0x326,0x3ad)+'🎭',_0x4e21b8(0x379,0x16a,0x26e,0x2a2)+'t\x20'+botname+'\x202021',[_0x14550f,_0x4e88a7],_0x48caea);}else{let id=+new Date();this['anonymous'][id]={'id':id,'a':m[_0x2922db(-0xfd,0x14,-0x178,-0x50)],'b':'','state':_0x4e21b8(0x5bc,0x3a2,0x543,0x48d),'check':function(_0x4b198c=''){function _0x565ea7(_0x137e3a,_0x850cc,_0x81f8b4,_0x5bff02){return _0x2922db(_0x137e3a-0xd2,_0x81f8b4,_0x81f8b4-0x1cc,_0x5bff02-0x492);}return[this['a'],this['b']][_0x565ea7(0x3c5,0x4e0,0x3f3,0x3e4)](_0x4b198c);},'other':function(_0x338d34=''){function _0xc6c13b(_0x3a980c,_0x5b9902,_0x4c9d3a,_0x2abb4e){return _0x2922db(_0x3a980c-0x1f2,_0x4c9d3a,_0x4c9d3a-0x176,_0x5b9902-0x2b5);}const _0x28b1d2={};_0x28b1d2[_0xc6c13b(0x1c9,0x110,0x95,0xb4)]=function(_0x4bdcb8,_0x2aa783){return _0x4bdcb8===_0x2aa783;};function _0x3b6bfb(_0xad3f4a,_0x19060a,_0x147091,_0x2eac08){return _0x2922db(_0xad3f4a-0x1e5,_0x2eac08,_0x147091-0x21,_0x19060a-0x16b);}const _0x323a7d=_0x28b1d2;return _0x338d34===this['a']?this['b']:_0x323a7d[_0xc6c13b(-0x22,0x110,0xb2,0x1ff)](_0x338d34,this['b'])?this['a']:'';}};const _0x25c50d={};_0x25c50d['displayTex'+'t']=_0x2922db(0x6d,-0x92,-0x84,-0x37);const _0x502edb={};_0x502edb[_0x4e21b8(0x26d,0x473,0x2c3,0x34a)]='leave',_0x502edb[_0x2922db(-0x20d,-0xae,-0x295,-0x168)]=_0x25c50d,_0x502edb['type']=0x1;const _0x11acae={};_0x11acae[_0x2922db(-0x7d,-0x16a,-0x2de,-0x1a6)]=mek,await sendButMessage(m[_0x4e21b8(0x203,0x276,0x1de,0x279)],'⏳\x20_Menungg'+'u\x20Partner_',_0x4e21b8(0x1ef,0x21c,0x1f7,0x2a2)+'t\x20'+botname+_0x2922db(-0x16e,-0x20e,-0xc9,-0xdd),[_0x502edb],_0x11acae);}break;}case'next':case'skip':case _0x2922db(-0x23,0x46,-0xe8,-0x7):{if(isGroup)return reply(_0x2922db(0x119,-0x40,-0x108,0x4)+_0x4e21b8(0x33f,0x3d0,0x3ae,0x355)+_0x2922db(-0x224,-0x171,-0xb3,-0x1e5)+_0x4e21b8(0x336,0x359,0x30c,0x323));this[_0x2922db(-0x1da,-0x1f1,-0x10b,-0xc1)]=this[_0x2922db(-0x1ee,-0x1d7,0x1,-0xc1)]?this['anonymous']:{};let romeo=Object[_0x4e21b8(0x368,0x4db,0x484,0x3be)](this[_0x2922db(0x21,-0x142,-0x1d4,-0xc1)])[_0x4e21b8(0x40b,0x3b2,0x447,0x3e9)](_0x2940d3=>_0x2940d3['check'](m[_0x4e21b8(0x301,0x515,0x33f,0x406)]));if(!romeo){const _0x26133f={};_0x26133f['displayTex'+'t']=_0x2922db(-0x23d,-0x12e,-0x1c6,-0x12e);const _0x5c8949={};_0x5c8949[_0x2922db(-0x1f0,0xc,-0x1c5,-0x10c)]=_0x4e21b8(0x420,0x471,0x416,0x472),_0x5c8949[_0x4e21b8(0x287,0x335,0x288,0x2ee)]=_0x26133f,_0x5c8949[_0x2922db(-0x208,-0x213,-0x28c,-0x1aa)]=0x1;const _0x2f7dea={};_0x2f7dea[_0x2922db(-0x94,-0x21b,-0x202,-0x1a6)]=mek,await sendButMessage(from,'Kamu\x20Tidak'+'\x20Berada\x20Di'+'\x20Anonymous'+_0x2922db(-0x3b,-0x1d0,-0xbe,-0x137)+'k\x20Dibawah\x20'+_0x4e21b8(0x345,0x570,0x402,0x46a)+_0x4e21b8(0x2df,0x349,0x4c8,0x3bc)+'s\x20Chat',_0x2922db(-0x1c1,-0xfa,-0x203,-0x1b4)+'t\x20'+botname+_0x2922db(0x59,-0x1d,-0x1ce,-0xdd),[_0x5c8949],_0x2f7dea);throw![];}let other=romeo[_0x2922db(-0x4a,-0xe0,-0x56,-0x1f)](m[_0x4e21b8(0x359,0x50e,0x419,0x406)]);const _0x499a7c={};_0x499a7c[_0x2922db(-0xa,-0x237,-0x235,-0x110)+'t']='START';const _0x55f5f9={};_0x55f5f9[_0x4e21b8(0x373,0x2ee,0x44d,0x34a)]=_0x4e21b8(0x3e8,0x579,0x4f8,0x472),_0x55f5f9[_0x2922db(-0xac,-0x1bc,-0x1e4,-0x168)]=_0x499a7c,_0x55f5f9[_0x4e21b8(0x25c,0x35f,0x1d2,0x2ac)]=0x1;const _0x4765ff={};_0x4765ff[_0x2922db(-0x14e,-0x247,-0x132,-0x1a6)]=mek;if(other)sendButMessage(other,_0x2922db(-0x76,0x1c,0xc9,0x21)+_0x2922db(0x1f,-0x92,0xed,-0xc)+'kan\x20chat_',_0x2922db(-0xd1,-0x2d3,-0x11f,-0x1b4)+_0x2922db(-0x13b,-0x71,-0x2d,-0x131)+botname+'\x202021',[_0x55f5f9],_0x4765ff);delete this[_0x4e21b8(0x4ce,0x2ae,0x32c,0x395)][romeo['id']];let room=Object[_0x2922db(-0x152,-0x1cf,-0x52,-0x98)](this[_0x2922db(-0x1a7,-0x178,-0xf0,-0xc1)])[_0x4e21b8(0x411,0x513,0x2d2,0x3e9)](_0x26e3e9=>_0x26e3e9[_0x2922db(-0x283,-0x28d,-0x1a7,-0x16e)]===_0x4e21b8(0x4d6,0x391,0x537,0x48d)&&!_0x26e3e9[_0x2922db(-0xb5,-0x2e,-0x14a,-0x91)](m[_0x2922db(-0x2a,-0xe8,0x34,-0x50)]));if(room){const _0x477f4d={};_0x477f4d[_0x4e21b8(0x32c,0x346,0x3f7,0x346)+'t']=_0x2922db(-0x158,-0x14e,0xf3,-0x37);const _0x3d081c={};_0x3d081c[_0x4e21b8(0x478,0x3db,0x24c,0x34a)]=_0x4e21b8(0x377,0x345,0x4fd,0x449),_0x3d081c[_0x4e21b8(0x1e9,0x356,0x1be,0x2ee)]=_0x477f4d,_0x3d081c[_0x4e21b8(0x273,0x2d2,0x181,0x2ac)]=0x1;const _0x3eb33a={};_0x3eb33a[_0x2922db(-0x169,-0x1a4,-0xf8,-0x110)+'t']=_0x4e21b8(0x27a,0x1b6,0x1a4,0x2a9);const _0x13874d={};_0x13874d[_0x4e21b8(0x353,0x3e2,0x40d,0x34a)]=_0x2922db(-0x27f,-0x106,-0x136,-0x149),_0x13874d[_0x4e21b8(0x1be,0x3b3,0x344,0x2ee)]=_0x3eb33a,_0x13874d[_0x4e21b8(0x212,0x2bb,0x35b,0x2ac)]=0x1;const _0x1437f1={};_0x1437f1['quoted']=mek,await sendButMessage(room['a'],_0x4e21b8(0x1a2,0x223,0x1b4,0x2a7)+'itemukan_\x20'+'🎭',_0x4e21b8(0x2ae,0x293,0x1e6,0x2a2)+'t\x20'+botname+'\x202021',[_0x3d081c,_0x13874d],_0x1437f1),room['b']=m[_0x2922db(0x36,0x38,-0x176,-0x50)],room[_0x4e21b8(0x354,0x1b7,0x359,0x2e8)]=_0x4e21b8(0x19a,0x139,0x199,0x249);const _0x4b122c={};_0x4b122c['displayTex'+'t']=_0x2922db(-0xc6,0x18,-0x1f,-0x37);const _0x1bf2d2={};_0x1bf2d2[_0x2922db(-0x13b,-0x4,-0x1c9,-0x10c)]=_0x4e21b8(0x546,0x34c,0x4df,0x449),_0x1bf2d2[_0x2922db(-0x281,-0x7f,-0x204,-0x168)]=_0x4b122c,_0x1bf2d2[_0x2922db(-0x265,-0x1e9,-0x1a0,-0x1aa)]=0x1;const _0x37fbe6={};_0x37fbe6[_0x2922db(-0xdd,-0x169,-0xe9,-0x110)+'t']=_0x2922db(-0xc3,-0x26a,-0x203,-0x1ad);const _0x58808f={};_0x58808f[_0x2922db(-0x64,-0x122,-0x11a,-0x10c)]=_0x4e21b8(0x3d8,0x23f,0x39e,0x30d),_0x58808f[_0x4e21b8(0x419,0x30d,0x33b,0x2ee)]=_0x37fbe6,_0x58808f[_0x4e21b8(0x25d,0x2fa,0x1b3,0x2ac)]=0x1;const _0x1516a2={};_0x1516a2[_0x2922db(-0x1a1,-0x1cb,-0x15e,-0x1a6)]=mek,await sendButMessage(room['b'],_0x2922db(-0x278,-0xe6,-0xc5,-0x1af)+'itemukan_\x20'+'🎭',_0x2922db(-0xed,-0xd3,-0x165,-0x1b4)+'t\x20'+botname+_0x4e21b8(0x4a9,0x2c2,0x24c,0x379),[_0x1bf2d2,_0x58808f],_0x1516a2);}else{let id=+new Date();this[_0x4e21b8(0x328,0x2ef,0x3dc,0x395)][id]={'id':id,'a':m[_0x4e21b8(0x37c,0x51d,0x4dd,0x406)],'b':'','state':_0x2922db(0x9b,0x15a,0x45,0x37),'check':function(_0x220d5d=''){return[this['a'],this['b']]['includes'](_0x220d5d);},'other':function(_0x20a854=''){const _0x21d35b={};function _0x3b29ad(_0xe4b9a4,_0x57bcec,_0x33e783,_0x4382fa){return _0x4e21b8(_0x4382fa,_0x57bcec-0x1cf,_0x33e783-0x160,_0x57bcec- -0x216);}_0x21d35b[_0x5e0d96(0x4e0,0x5ce,0x4e0,0x618)]=function(_0x184c00,_0x1d5e12){return _0x184c00===_0x1d5e12;};const _0x231a24=_0x21d35b;function _0x5e0d96(_0xe1d4a2,_0x2acdf5,_0x300886,_0x2d6563){return _0x2922db(_0xe1d4a2-0xa5,_0x300886,_0x300886-0x68,_0xe1d4a2-0x5a3);}return _0x231a24['WtPfG'](_0x20a854,this['a'])?this['b']:_0x231a24[_0x5e0d96(0x4e0,0x493,0x409,0x609)](_0x20a854,this['b'])?this['a']:'';}};const _0x5bc8ea={};_0x5bc8ea[_0x2922db(0x11,-0x11a,-0xc1,-0x110)+'t']=_0x2922db(-0xe,-0x131,-0x13d,-0x37);const _0x1022ba={};_0x1022ba[_0x4e21b8(0x476,0x2b3,0x392,0x34a)]='leave',_0x1022ba[_0x2922db(-0x232,-0x203,-0xbb,-0x168)]=_0x5bc8ea,_0x1022ba['type']=0x1;const _0x3c73af={};_0x3c73af[_0x2922db(-0x23b,-0x17e,-0x16b,-0x1a6)]=mek,await sendButMessage(m[_0x4e21b8(0x228,0x1a2,0x223,0x279)],_0x4e21b8(0x3c0,0x4c7,0x4a2,0x422)+'u\x20Partner_',_0x2922db(-0x2b6,-0xe8,-0x2c1,-0x1b4)+'t\x20'+botname+_0x4e21b8(0x425,0x478,0x272,0x379),[_0x1022ba],_0x3c73af);}break;}}function _0x278e(){const _0x252e31=['\x20\x20\x20\x20no\x20\x20\x20\x20','\x20\x20\x20\x20\x20\x20\x20Lat','\x20\x20\x20\x20\x20\x20\x20Fre','en-us','eHeight=50','om/users/','5240798319','ama\x202\x20meni','event\x20on','\x20Woods\x0a🟠\x20L','\x20Chat,\x20Kli','ile/0c3fa8','uLIvo','HhIZX','tuk\x20Group!','got\x20dijual','t\x20\x20','e\x0a\x20\x20\x20\x20ko\x20\x20','h-tw\x20\x20\x20\x20\x20C','START','adventure','cffc2.jpg','limit','l\x202\x20ikan','\x0a🔴\x20Chade\x20M','hankimia\x20Y','r\x20sudah\x20di','*kayu\x20sela','AYAH\x20YANG\x20','qQGAf','Kirim\x20peri','tualang,\x20s','test','LshFs','ish\x0a\x20\x20\x20\x20nl','ole\x0a\x20\x20\x20\x20hi','exec','length','\x20\x20\x20\x20\x20Finni','Hpove','sendMessag','*Sisa\x20baha','bil\x20Woods\x0a','benwu','corbiens\x20r','\x20sekarang\x20','5TWFWtW','🔵\x20Cochher\x20','\x0a🛑\x20*STONE*','displayTex','sisabahank','CMrrE','./image/','buttonId','\x202\x20ore','l\x20mountain','390VxIlJh','211944zbzmcT','TBzSM','\x20sediakan\x20','Mua\x20taruha','d88288bak1','\x5c$&','.leave','k\x20Dapat\x20Di','glish\x0a\x20\x20\x20\x20','Cek\x20invent','i.github.c','t:*\x20','AN\x20BERHASI','tates)\x0a\x20\x20\x20','\x20\x20\x20\x20\x20\x20\x20\x20En','nese\x0a\x20\x20\x20\x20z','pat:*\x20','unggu...','sDoVz','🔏\x20Company\x20','an\x0a\x20\x20\x20\x20cs\x20','RXsbC','patkan\x20*','📧\x20Email\x20:\x20','imia','\x20Anonymous','\x20kamu\x20mend','Kamu\x20menda','Error\x20','*Jumlah\x20Ba','\x20Nama\x20temp','dak\x20mencuk','g\x20:\x20','tory','land\x0a🟣\x20Ger','twitter_us','jualstone','ak\x20perlu\x20b','irbKF','mLLJj','te\x20chat','following','*Jumlah\x20Co','\x202021','\x20\x20\x20\x20en-uk\x20','EhvNF','location','Textnya\x20ma','morpE','engan\x20nomo','Bosan\x20nump','.next','belum\x20cuku','kodebahasa','Kamu\x20KALAH','nggu...\x202\x20','string','an\x0a\x20\x20\x20\x20la\x20','d07dd22294','anish\x20(Uni','Thai\x0a\x20\x20\x20\x20t','h\x20(United\x20','inv','\x20\x20\x20\x20\x20\x20Kore','et-fu/prox','\x20Silahkan\x20','\x20\x20\x20\x20\x20\x20\x20\x20Ge','t\x20\x20\x20\x20\x20\x20\x20\x20P','Kumpulkan\x20','WtPfG','Semua\x20fitu','anonymous','L*\x20:\x20','en-au\x20\x20\x20\x20\x20','w6.flaming','epo\x20:\x20','Sedang\x20Mem','5480wWjdeF','JwDnS','ORDER\x20BOT\x20','saturnus','AXIgk','jelajah','cb5fa.jpg','JADIBOT\x20PE','petualang,','\x20bermain\x20g','*Sisa\x20uang','Kode\x20bahas','English\x20(A','includes','Event\x20On','📅\x20Created\x20','920kal','prepareMes','itemukan_\x20','edish\x0a\x20\x20\x20\x20','zzCLc','\x20\x20\x20\x20\x20\x20\x20\x20Hi','il)\x0a\x20\x20\x20\x20ro','en-uk','ceil','created_at','p\x20Partner\x0a','*Jumlah\x20ba','🥰\x20Name\x20:\x20','xXZII','📛\x20Username','\x20\x20\x20\x20\x20\x20\x20Cze','arch\x20Partn','t\x20Anonymou','zh-yue\x20\x20\x20\x20','values',':*\x20','ambang,\x20si','engan\x20cara','\x202\x20menit,\x20','u\x20belum\x20cu','ile/168577','check','nambang','isArray','TSNSm','*Sisa\x20Kayu','y_form.cgi','ian\x0a\x20\x20\x20\x20pl','🉑\x20Node\x20ID\x20','OT\x20VIA\x20HER','endsWith','hinese\x20(Ch','hankimia','save','&scaleWidt','lahkan\x20tun','\x20ORE*\x20:\x20','Anonymous\x20','Igpul','Only\x20priva','.mp3','ta\x20\x20\x20\x20\x20\x20\x20\x20','🟢\x20Chiltawa','asil!.','n\x20berapa?','973TkMQGc','11gDobEJ','ted\x20States','*\x20Ikan\x20sel','\x0a\x0a*_','*「\x20PENJUAL','\x0a🛠️\x20*INGOT\x20','Kingdom)\x0a\x20','floor','public_rep','LTgSr','ttern=Warn','find','uang\x20untuk','readFileSy','plPxG','products','\x20membeli\x20l','nebang','ghstalk*\x20z','Sedang\x20men','THUB\x20STALK','UtWSK','jupiter','Username\x20:','UKPWf','D/MM/YYYY','inventory','\x0a❄️\x20*COPPER','format','」-----*','h=800&scal','ang\x20bot\x20mu','My\x20Invento','tsapp.net','ing!&text=','➿\x20Url\x20:\x20ht','zh-cn','karena\x20and','zh-tw','Kamu\x20memen','sender','\x20Arabic\x0a\x20\x20','name','e\x0a\x20\x20\x20\x20cy\x20\x20','productId','avatar_url','rbiens\x20riv','e:*\x20','r\x20:*\x20','updated_at','r\x20pembayar','SzHMM','l\x20Keluar\x20D','ino\x20sebesa','IHAup','am\x20bot\x20men','fillTextPa','company',')\x0a\x20\x20\x20\x20sw\x20\x20','://www.fan','Penjualan\x20','dMZCm','p.net','Jika\x20Minat','G!!','LEAVE','acedonian\x0a','©\x20\x20','⏳\x20_Menungg','\x20\x20\x20Japanes','mulai','an\x20d88288b','ZmJTY','nonymous\x20C','jualbahank','goplanet','\x20\x20\x20Serbian','dapat:*\x20','ya\x20bayar\x20s','menu','anya\x20mana\x20','in)\x0a\x20\x20\x20\x20es','PRODUCT_LI','XyooY','-es\x20\x20\x20\x20\x20Sp','ens\x20River\x0a','\x20jadibot\x20p','embayaran\x20','BtEbo','other','na\x20om','iVfBq','lish\x0a\x20\x20\x20\x20p','QRBli','SuZku','ername','flGXn','Kamu\x20Masih','7326@s.wha','342skoNPn','ng\x20sebesar','mars','r\x20*_','\x20belum\x20cuk','h-cn\x20\x20\x20\x20\x20C','ch-name&do','SIezk','leave','\x20meninggal','\x20lagi.\x20Han','muKMo','aya\x20punya\x20','*\x20kayu','lanjut','\x0a🐬\x20*FISH*\x20','\x20silahkan\x20','ation\x20🎊*\x20','rman\x0a\x20\x20\x20\x20e','.ogg','ab77a6cea8','*PILIH\x20WIL','bot,\x20dll.\x20','ish\x0a\x20\x20\x20\x20es','🔥\x20Follower','Fitur\x20Tida','ustralia)\x0a','legra.ph/f','\x20Vietnames','\x20\x20\x20\x20\x20\x20\x20\x20Al','lQYVJ','ina)\x0a\x20\x20\x20\x20z','\x20\x20Armenian','melakukan\x20','FVqkX','WSLgX','\x20\x20\x20\x20Croati','method','Maaf\x20','bOMrh','eeoneofc','Untuk\x20Star','sageFromCo','split','UNTUK\x20JUAL','\x20kayu\x20kamu','*bahan\x20kim','ermanen.','jualkayu','start','\x20Mountains','Xp*','ekali\x20bisa','text.com/n','📛\x20_Partner','vZmjq','ggunaan\x20#t','*\x20selama\x202','\x20\x20\x20\x20\x20\x20Indo','Keluar','Proses\x20ber','venus','https://te','🌍\x20Public\x20G','EWehF','en-au','up,\x20minima','Kamu\x20Tidak','\x20\x20Icelandi','Welcome\x20To','Mau\x20taruha','\x20:\x20','sage','\x20\x20\x20\x20\x20\x20Wels','kup,\x20minim','ub.com/','WAITING','login','WBvup','ffmpeg\x20-i\x20','ilangan\x20ua','get','egVMB','t\x20\x20\x20\x20\x20\x20\x20\x20H','tu\x20dijual:','keluar','mancing','n\x20good\x20mor','k\x0a\x20\x20\x20\x20es\x20\x20','moobiens\x20g','followers','📝\x20Type\x20:\x20','zh-yue','📭\x20Twitter\x20','WrHnt','RESPONSE','\x0a\x0a*Sisa\x20Or','gerbil\x20woo','*\x20batu\x20dan','kan\x20cek\x20ko','ggu...','\x20ore\x20kamu\x20','ari\x20Sesi\x20A','📖\x20Update\x20:','nOxet','4299188CMiKLd','nerators.c','\x20\x20is\x20\x20\x20\x20\x20\x20','asa\x0a\x20\x20\x20\x20sq','xample\x20:\x0a-','Lihat\x20Item','maaf\x20','mendapatka','yu\x20dijual:','dZQEs','th\x20\x20\x20\x20\x20\x20\x20\x20','OKU','nch\x0a\x20\x20\x20\x20de','nesian\x0a\x20\x20\x20','\x0a🗃️\x20*USER\x20I','random','jadibot','Textnya\x20ke','CHATTING','vian\x0a\x20\x20\x20\x20m','Sea\x0a⚫\x20Moob','🏃\x20_Berhasi','ebahasa','judi','*\x20coal\x20,\x20d','its\x20:\x20','map','=100&fillT','lJoYN','Fnrmv','libopus\x20','locale','\x0a\x0a\x0a⚪\x20Corbi','tain','5316546641','ts\x20kode\x20ba','YLVfm','270456','caption','695a8.jpg','4|0|1|3|2','\x20-vn\x20-c:a\x20','\x20\x20\x20\x20\x20\x20\x20Bah','tunggu...','\x20\x20\x20\x20Englis','https://ww','ma\x202\x20menit','3389TOockj','hinese\x20(Ta','limitg','\x20stone\x20kam','pt-br','\x20\x20\x20ja\x20\x20\x20\x20\x20','al\x20dijual:','EdSFy','\x20\x20\x20\x20\x20\x20Swah','*Sisa\x20coal','a\x0a\x20\x0a\x20\x09Code','gunakan\x20Un','chiltawa\x20w','es-us','uWFSH','QalhZ','*Congratul','\x20\x20\x20English','bAagZ','chat','./lib/gtts','LYPVn','kamu\x20bisa\x20','*\x20batu\x20,\x20*','fmXZr','copyNForwa','join','*Sisa\x20Batu','FKkTj','event','skip\x20-\x20Ski','hankimia\x20d','.start','.stop','ancing,\x20si','\x20kamu\x20tida','text','n\x20lebih\x20ba','*\x20ikan','fromMe','ile/00018d','apatkan\x20*','mgFtK','Xp\x20untuk\x20a','ation\x20🎊*\x0a\x0a','L\x20」*','\x0a\x0a*Jumlah\x20','ation\x20🎊*','HH:mm:ss\x20D','unlinkSync','ortuguese\x0a','116271fXAyyx','\x20\x20\x20\x20\x20Slova','L\x20\x20」*','_\x20adalah:*','ile/efdcd7','Kamu\x20MENAN','node_id','aJqLv','IyZQZ','©\x20Copyrigh','MENU','Check\x20Limi','\x20\x20\x20\x20pt-br\x20','al\x202\x20stone','_Partner\x20D','silahkan\x20t','SKIP','\x0a\x20\x20\x20\x20ca\x20\x20\x20','ry\x20🗃️','type','\x20\x20\x20\x20\x20\x20\x20\x20Po','ngarian\x0a\x20\x20','Sedang\x20ber','quoted','ZjgSB','\x20Esperanto','p,\x20minimal','https://ap','oGPgx','96fab2ccb6','JASA\x20RUN\x20B','r\x20\x20\x20\x20\x20\x20\x20\x20T','ave\x20Partne','hasil\x20deng','kamu\x20menda','Menunggu\x20h','*-----\x20「GI','s\x20Chat','ang\x20didapa','🆔\x20ID\x20:\x20','contextInf','*\x20ore','ptt','upi\x20untuk\x20','jadibot,\x20j','eRUJe','OyqpI','JOCid','an\x20*','\x20Russian\x0a\x20','ame\x20untuk\x20','er\x0a\x0aSumber','\x202K21','\x20:*\x20','6b0c0.jpg','?&imageout','Cari\x20Partn','\x20\x20\x20en-us\x20\x20','re\x20dan\x20','UBFoU','\x0a\x0aSilahkan','ketik\x20#kod','27576756AhoQet','NCpaa','\x20Chat\x0a\x0a','hat_','ory\x20anda\x20d','\x0a🌐\x20*WOOD*\x20','a\x20owner\x20ka','imingstall','\x20batu','\x20vi\x20\x20\x20\x20\x20\x20\x20','ilahkan\x20tu','OKfOr','\x20kayu','iwan)\x0a\x20\x20\x20\x20','put=true&s','*Uang\x20dida','tahun','state','ndi\x0a\x20\x20\x20\x20hu','\x20\x20\x20\x20\x20\x20\x20\x20Hu','1523e.jpg','ntent','adi\x20owner\x20','buttonText','*Jumlah\x20Ka','Tamil\x0a\x20\x20\x20\x20','ia\x20dari\x20*','title','oods','an\x20dijual:','casino','\x20Berada\x20Di','FxNct','er\x0a','email','wait','n\x20berapa','manian\x0a\x20\x20\x20','extType=1&','Ex.\x20#tts\x20e','replace','rassland','tkan\x20_','imit','\x20ketik\x20','slice','blog','RMANEN','0&fontsize','3282717kbRZLR','\x20it\x20\x20\x20\x20\x20\x20\x20','tas','Kamu\x20kalah','6f57a4f6d9','skip','dc9f97d658','an\x20nomer\x20p','🔮\x20Public\x20R','tch\x0a\x20\x20\x20\x20en','\x20ingot\x20kam','💌\x20Bio\x20:\x20','Gagal\x20om:('];_0x278e=function(){return _0x252e31;};return _0x278e();}
	
if (isGroup && budy != undefined) {
	} else {
	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CHAT \x1b[1;37m]', timuu, color(q), 'from', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
