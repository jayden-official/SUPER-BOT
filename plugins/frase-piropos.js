/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async(m, { conn, text}) => {

m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.compliment)}" *\n*╚═══════════════════════════*`)
}
handler.tags = ['phrases']
handler.command = ['complimentary']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.compliro = ["I would like to be paper to be able to wrap that chocolate.", "You are like Wi-Fi without a password, everyone is looking for you", "Who was a bus to walk around the curves of your heart.", "I want to fly without wings and leave this universe, enter yours and love you in silence.", "I would like to be butter to melt in your arepa.", "If beauty were a sin, you would already be in hell.", "I would like to be A cat to spend 7 lives by your side.", "Stealing is wrong but a kiss from your mouth would steal it from me.", "How beautiful the sky is when it's clear, but love is more beautiful when I have you by my side .", "Pretty, Walk In The Shade, The Sun Melts The Chocolates.", "If It Were An Email You Would Be My Password.", "I would like you to go to the mountains to give you a machete", "I lost my phone number. Can you give me yours?", "What is your name to ask Santa Claus for a gift?", "There are many stars in the sky, but the brightest is on Earth and it's you.", "Did the sun just rise or Is it the smile that you give me today?", "It's not the rum or the beer, it's you who has gone to my head", "If we talk about mathematics you are the sum of all my desires.", "You look like Google because You have everything I'm looking for.", "My favorite coffee is the one with your eyes.", "I want to be photoshop to retouch your whole body.", "I wish you were cereal, to spoon you in the morning.", "Who were hungry, to give you three times a day."]
