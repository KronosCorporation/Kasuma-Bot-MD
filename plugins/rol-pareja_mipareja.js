let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return await conn.reply(m.chat, `*${usuario}* No Tienes Pareja\n\n*_Si quiere tener una pareja use el comando ${usedPrefix}pareja etiquetando a alguien._*\n\n${wm}`, m,  m)

  
if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.reply(m.chat, `*${usuario}* Estas En Una Relación Con *${await conn.getName(persona)}*`, m, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})

await conn.reply(m.chat, `Parece Que*${await conn.getName(persona)}* No a aceptado ni rechazado tu propuesta de estas ambos en una relación\n\n*_Vista la situación se anulará este pendiente_*\n\n${wm}`, m, m, {contextInfo: { mentionedJid: [ persona, m.sender ] }})

global.db.data.users[m.sender].pasangan = ""
}

handler.help = ['mipareja'];
handler.tags = ['rol'];
handler.command = /^(sinceridad|mipareja|miamor|minovio|minovia|mylove)$/i
handler.group = true
export default handler
