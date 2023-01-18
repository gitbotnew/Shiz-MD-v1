import fetch from 'node-fetch'
import fs, { promises } from 'fs'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = image4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'en'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `┏「 xIKRATOSx 」┓
┃➲ Shizu-Bot-MD
┃✯ OWNER:
┃❥  *wa.me/923470027813*
┃⍟ youtube.com/@xIKRATOSx
┗─━─━「 🌎 」━─━─┛\n\n`
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║    ◉— *xIKRATOSx* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *𝗛i, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Owner:* xIKRATOSx
║➤  wa.me/34623442554
║➤ *Uptime:* ${uptime}
╰══╡✯✯✯✯✯✯✯✯╞══╯
..................
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣💟 _${usedPrefix}infobot_
┣💟 _${usedPrefix}speedtest_
┣💟 _${usedPrefix}grouplist_
┣💟 _${usedPrefix}owner_
┣💟 _${usedPrefix}script_
┣💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
┣🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
┣🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
┣🎖️ _${usedPrefix}puto *<nombre / @tag>*_
┣🎖️ _${usedPrefix}puta *<nombre / @tag>*_
┣🎖️ _${usedPrefix}manco *<nombre / @tag>*_
┣🎖️ _${usedPrefix}manca *<nombre / @tag>*_
┣🎖️ _${usedPrefix}rata *<nombre / @tag>*_
┣🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
┣🎖️ _${usedPrefix}pregunta *<text>*_
┣🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣🎖️ _${usedPrefix}slot *<apuesta>*_
┣🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣🎖️ _${usedPrefix}delttt_
┣🎖️ _${usedPrefix}simi *<text>*_
┣🎖️ _${usedPrefix}top *<text>*_
┣🎖️ _${usedPrefix}topgays_
┣🎖️ _${usedPrefix}topotakus_
┣🎖️ _${usedPrefix}formarpareja_
┣🎖️ _${usedPrefix}verdad_
┣🎖️ _${usedPrefix}reto_
┣🎖️ _${usedPrefix}cancion_
┣🎖️ _${usedPrefix}pista_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣☑️ _${usedPrefix}enable/disable *welcome*_
┣☑️ _${usedPrefix}enable/disable *modohorny*_
┣☑️ _${usedPrefix}enable/disable *antilink*_
┣☑️ _${usedPrefix}enable/disable *antilink2*_
┣☑️ _${usedPrefix}enable/disable *detect*_
┣☑️ _${usedPrefix}enable/disable *audios*_
┣☑️ _${usedPrefix}enable/disable *autosticker*_
┣☑️ _${usedPrefix}enable/disable *antiviewonce*_
┣☑️ _${usedPrefix}enable/disable *antitoxic*_
┣☑️ _${usedPrefix}enable/disable *antitraba*_
┣☑️ _${usedPrefix}enable/disable *antiarabes*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🔰 _${usedPrefix}report *<text>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣📥 _${usedPrefix}instagram *<link>*_
┣📥 _${usedPrefix}mediafire *<link>*_
┣📥 _${usedPrefix}gitclone *<link>*_
┣📥 _${usedPrefix}gdrive *<link>*_
┣📥 _${usedPrefix}tiktok *<link>*_
┣📥 _${usedPrefix}twitter *<link>*_
┣📥 _${usedPrefix}fb/fb2/fb3/fb4/fb5 *<link>*_
┣📥 _${usedPrefix}ytmp3 *<link>*_
┣📥 _${usedPrefix}ytmp4 *<link>*_
┣📥 _${usedPrefix}ytmp3doc *<link>*_
┣📥 _${usedPrefix}ytmp4doc *<link>*_
┣📥 _${usedPrefix}stickerpack *<link>*_
┣📥 _${usedPrefix}play *<text>*_
┣📥 _${usedPrefix}play.1 *<text>*_
┣📥 _${usedPrefix}play.2 *<text>*_
┣📥 _${usedPrefix}playdoc *<text>*_
┣📥 _${usedPrefix}playlist *<text>*_
┣📥 _${usedPrefix}playlist2 *<text>*_
┣📥 _${usedPrefix}spotify *<text>*_
┣📥 _${usedPrefix}stickerly *<text>*_
┣📥 _${usedPrefix}ringtone *<text>*_
┣📥 _${usedPrefix}soundcloud *<text>*_
┣📥 _${usedPrefix}image *<text>*_
┣📥 _${usedPrefix}pinteret *<text>*_
┣📥 _${usedPrefix}wallpaper *<text>*_
┣📥 _${usedPrefix}wallpaper2 *<text>*_
┣📥 _${usedPrefix}pptiktok *<username>*_
┣📥 _${usedPrefix}igstalk *<username>*_
┣📥 _${usedPrefix}igstory *<username>*_
┣📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣💎 _${usedPrefix}add *<number>*_
┣💎 _${usedPrefix}kick *<@tag>*_
┣💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣💎 _${usedPrefix}grouptime *<option> <tiempo>*_
┣💎 _${usedPrefix}promote *<@tag>*_
┣💎 _${usedPrefix}demote *<@tag>*_
┣💎 _admins *<text>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣💎 _${usedPrefix}demote *<@tag>*_
┣💎 _${usedPrefix}infogroup_
┣💎 _${usedPrefix}resetlink_
┣💎 _${usedPrefix}link_
┣💎 _${usedPrefix}setname *<text>*_
┣💎 _${usedPrefix}setdesc *<text>*_
┣💎 _${usedPrefix}invocar *<text>*_
┣💎 _${usedPrefix}setwelcome *<text>*_
┣💎 _${usedPrefix}setbye *<text>*_
┣💎 _${usedPrefix}hidetag *<text>*_
┣💎 _${usedPrefix}warn *<@tag>*_
┣💎 _${usedPrefix}unwarn *<@tag>*_
┣💎 _${usedPrefix}listwarn_
┣💎 _${usedPrefix}fantasmas_
┣💎 _${usedPrefix}destraba_
┣💎 _${usedPrefix}setpp *<image>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🧧 _${usedPrefix}togifaud *<video>*_
┣🧧 _${usedPrefix}toimg *<sticker>*_
┣🧧 _${usedPrefix}tomp3 *<video>*_
┣🧧 _${usedPrefix}toptt *<video / audio>*_
┣🧧 _${usedPrefix}tovideo *<sticker>*_
┣🧧 _${usedPrefix}tourl *<video / image / audio>*_
┣🧧 _${usedPrefix}tts en *<text>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🖍️ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
┣🖍️ _${usedPrefix}phmaker *<option> <image>*_
┣🖍️ _${usedPrefix}logos *<efecto> <text>*_
┣🖍️ _${usedPrefix}logochristmas *<text>*_
┣🖍️ _${usedPrefix}logocorazon *<text>*_
┣🖍️ _${usedPrefix}ytcomment *<text>*_
┣🖍️ _${usedPrefix}hornycard *<@tag>*_
┣🖍️ _${usedPrefix}simpcard *<@tag>*_
┣🖍️ _${usedPrefix}lolice *<@tag>*_
┣🖍️ _${usedPrefix}itssostupid_
┣🖍️ _${usedPrefix}pixelar_
┣🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🥀 _${usedPrefix}piropo_
┣🥀 _${usedPrefix}consejo_
┣🥀 _${usedPrefix}fraseromantica_
┣🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣🎤 _${usedPrefix}bass_
┣🎤 _${usedPrefix}blown_
┣🎤 _${usedPrefix}deep_
┣🎤 _${usedPrefix}earrape_
┣🎤 _${usedPrefix}fast_
┣🎤 _${usedPrefix}fat_
┣🎤 _${usedPrefix}nightcore_
┣🎤 _${usedPrefix}reverse_
┣🎤 _${usedPrefix}robot_
┣🎤 _${usedPrefix}slow_
┣🎤 _${usedPrefix}smooth_
┣🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣📳 _${usedPrefix}start_
┣📳 _${usedPrefix}next_
┣📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🔍 _${usedPrefix}stickersearch *<text>*_
┣🔍 _${usedPrefix}stickersearch2 *<text>*_
┣🔍 _${usedPrefix}animeinfo *<text>*_
┣🔍 _${usedPrefix}google *<text>*_
┣🔍 _${usedPrefix}letra *<text>*_
┣🔍 _${usedPrefix}wikipedia *<text>*_
┣🔍 _${usedPrefix}ytsearch *<text>*_
┣🔍 _${usedPrefix}apkdone *<text>*_
┣🔍 _${usedPrefix}apkgoogle *<text>*_
┣🔍 _${usedPrefix}apkmody *<text>*_
┣🔍 _${usedPrefix}apkshub *<text>*_
┣🔍 _${usedPrefix}happymod *<text>*_
┣🔍 _${usedPrefix}hostapk *<text>*_
┣🔍 _${usedPrefix}revdl *<text>*_
┣🔍 _${usedPrefix}toraccino *<text>*_
┣🔍 _${usedPrefix}uapkpro *<text>*_
┣🔍 _${usedPrefix}playstore *<text>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
┃ _- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🔊 _Quien es tu sempai botsito 7w7_
┣🔊 _Te diagnostico con gay_
┣🔊 _A nadie le importa_
┣🔊 _Fiesta del admin_
┣🔊 _Fiesta del administrador_ 
┣🔊 _Vivan los novios_
┣🔊 _Feliz cumpleaños_
┣🔊 _Noche de paz_
┣🔊 _Buenos dias_
┣🔊 _Buenos tardes_
┣🔊 _Buenos noches_
┣🔊 _Audio hentai_
┣🔊 _Chica lgante_
┣🔊 _Feliz navidad_
┣🔊 _Vete a la vrg_
┣🔊 _Pasa pack Bot_
┣🔊 _Atencion grupo_
┣🔊 _Marica quien_
┣🔊 _Murio el grupo_
┣🔊 _Oh me vengo_
┣🔊 _tio que rico_
┣🔊 _Viernes_
┣🔊 _Baneado_
┣🔊 _Sexo_
┣🔊 _Hola_
┣🔊 _Un pato_
┣🔊 _Nyanpasu_
┣🔊 _Te amo_
┣🔊 _Yamete_
┣🔊 _Bañate_
┣🔊 _Es puto_
┣🔊 _La biblia_
┣🔊 _Onichan_
┣🔊 _Mierda de Bot_
┣🔊 _Siuuu_
┣🔊 _Epico_
┣🔊 _Shitpost_
┣🔊 _Rawr_
┣🔊 _UwU_
┣🔊 _:c_
┣🔊 _a_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🛠️ _${usedPrefix}spamwa *<number|text|cantidad>*_
┣🛠️ _${usedPrefix}tamaño *<cantidad> <image / video>*_
┣🛠️ _${usedPrefix}weather *<country> <city>*_
┣🛠️ _${usedPrefix}encuesta *<text1|text2...>*_
┣🛠️ _${usedPrefix}afk *<motivo>*_
┣🛠️ _${usedPrefix}ocr *<responde a image>*_
┣🛠️ _${usedPrefix}acortar *<link>*_
┣🛠️ _${usedPrefix}calc *<operacion math>*_
┣🛠️ _${usedPrefix}del *<mensaje>*_
┣🛠️ _${usedPrefix}whatmusic *<audio>*_
┣🛠️ _${usedPrefix}readqr *<image (QR)>*_
┣🛠️ _${usedPrefix}qrcode *<text>*_
┣🛠️ _${usedPrefix}readmore *<text1| text2>*_
┣🛠️ _${usedPrefix}styletext *<text>*_
┣🛠️ _${usedPrefix}traducir *<text>*_
┣🛠️ _${usedPrefix}zoom *<text>*_
┣🛠️ _${usedPrefix}nowa *<number>*_
┣🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣👽 _${usedPrefix}sticker *<responder a image o video>*_
┣👽 _${usedPrefix}sfull *<image o video>*_
┣👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣👽 _${usedPrefix}scircle *<image>*_
┣👽 _${usedPrefix}sremovebg *<image>*_
┣👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣👽 _${usedPrefix}attp *<text>*_
┣👽 _${usedPrefix}attp2 *<text>*_
┣👽 _${usedPrefix}attp3 *<text>*_
┣👽 _${usedPrefix}ttp *<text>*_
┣👽 _${usedPrefix}ttp2 *<text>*_
┣👽 _${usedPrefix}ttp3 *<text>*_
┣👽 _${usedPrefix}ttp4 *<text>*_
┣👽 _${usedPrefix}ttp5 *<text>*_
┣👽 _${usedPrefix}pat *<@tag>*_
┣👽 _${usedPrefix}slap *<@tag>*_
┣👽 _${usedPrefix}kiss *<@tag>*_
┣👽 _${usedPrefix}dado_
┣👽 _${usedPrefix}wm *<packname> <author>*_
┣👽 _${usedPrefix}stickermarker *<efecto> <image>*_
┣👽 _${usedPrefix}stickerfilter *<efecto> <image>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣👑 > *<funcion>*
┣👑 => *<funcion>*
┣👑 $ *<funcion>*
┣👑 _${usedPrefix}setprefix *<prefijo>*_
┣👑 _${usedPrefix}resetprefix_
┣👑 _${usedPrefix}autoadmin_
┣👑 _${usedPrefix}leavegc_
┣👑 _${usedPrefix}cajafuerte_
┣👑 _${usedPrefix}blocklist_
┣👑 _${usedPrefix}block *<@tag / number>*_
┣👑 _${usedPrefix}unblock *<@tag / number>*_
┣👑 _${usedPrefix}enable/disable *restrict*_
┣👑 _${usedPrefix}enable/disable *autoread*_
┣👑 _${usedPrefix}enable/disable *public*_
┣👑 _${usedPrefix}enable/disable *pconly*_
┣👑 _${usedPrefix}enable/disable *gconly*_
┣👑 _${usedPrefix}enable/disable *anticall*_
┣👑 _${usedPrefix}enable/disable *antiprivado*_
┣👑 _${usedPrefix}msg *<text>*_
┣👑 _${usedPrefix}banchat_
┣👑 _${usedPrefix}unbanchat_
┣👑 _${usedPrefix}banuser *<@tag>*_
┣👑 _${usedPrefix}unbanuser *<@tag>*_
┣👑 _${usedPrefix}dardiamantes *<@tag>*_
┣👑 _${usedPrefix}añadirxp *<@tag>*_
┣👑 _${usedPrefix}banuser *<@tag>*_
┣👑 _${usedPrefix}bc *<text>*_
┣👑 _${usedPrefix}bcchats *<text>*_
┣👑 _${usedPrefix}bcgc *<text>*_
┣👑 _${usedPrefix}bcbot *<text>*_
┣👑 _${usedPrefix}cleartpm_
┣👑 _${usedPrefix}restart_
┣👑 _${usedPrefix}update_
┣👑 _${usedPrefix}banlist_
┣👑 _${usedPrefix}addprem *<@tag>*_
┣👑 _${usedPrefix}delprem *<@tag>*_
┣👑 _${usedPrefix}listprem_
┣👑 _${usedPrefix}listcmd_
┣👑 _${usedPrefix}setppbot *<responder a image>*_
┣👑 _${usedPrefix}addcmd *<text> <responder a sticker/image>*_
┣👑 _${usedPrefix}delcmd *<responder a sticker/image con comando o text asignado>*_
┗━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: '#gruposofc', buttonText: { displayText: 'GROUP' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: image1,
caption: str.trim(),
mentions: [m.sender],
footer: `*${cotext}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'Ikratos-Shizu',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/LwPNmhUV8P76isIyFgEK8E`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*Sorry an ERROR Occured*', m)
}}
handler.command = /^(allmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
