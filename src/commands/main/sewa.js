export default {
    name: "sewa",
    type: 'main',
    desc: "list harga sewa :D",
    aliases: ["buypremium", "donasi", "buyvip", "sewa", "sewabot","rent"],
    execute: async ({ hisoka, m, command }) => {
        let text = `
${!/donate|donasi/i.test(command) ? `⭔ *Harga Premium :*

- Rp. 20.000 / $ 1,40 (30 day) 
- Rp. 35.000 / $ 2,40 (50 day)
- Rp. 55.000 / $ 3,70 (70 day)
- Rp. 85.000 / $ 5,30 (100 day)

⭔ *Harga Sewa :*

- Rp. 30k / $ 2 (30 day)
- Rp. 45k / $ 3 (50 day)
- Rp. 65k / $ 4,30 (70 day)
- Rp. 95k / $ 6,30 (100 day)

Jika kamu menyewa bot maka kamu akan mendapatkan akses premium selama masa penyewaan :p

Untuk detail chat owner https://wa.me/6281320843460` : `Kalo mau Donasi kirim lewat sini aja :) :

- Dana : 081320843460
- Ovo : 081320843460
- Gopay : 081320843460
- Shopeepay : 081320843460
- Pulsa : 0895326898598

atau scan barcode diatas :D

Minat Premium? https://wa.me/6281320843460?text=Ingfokan%20premium%20mint`}
        `
        hisoka.sendMessage(m.from, "./temp/qris-hisoka.jpeg", { quoted: m, caption: text })
    }
}