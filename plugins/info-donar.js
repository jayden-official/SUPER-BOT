
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
❤ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM💚`
let img = 'https://th.bing.com/th/id/R.89236b8511fed37b9cd4aa6aa30f985b?rik=4gGrAbnB3sq9sQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f8%2f9%2f732947-bumblebee-wallpaper-1080x1920-for-iphone.jpg&ehk=lpDrE4eAb3%2bUBI0X1sqqDMhHanQtVevHR6v%2bfWHs2Ug%3d&risl=&pid=ImgRaw&r=0'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler