// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi object baru dari express
let app = express()

//endpoint pertama
app.use(express.json())
app.post("/pertama",(request, response) => {
    let panjang= request.body.panjang
    let lebar= request.body.lebar
    let tinggi= request.body.tinggi

    let volume = panjang * lebar * tinggi
    let luas = 2 * ((panjang*lebar) + (panjang*tinggi) + (lebar*tinggi))

    let hasil_volume = null
    let hasil_luas = null
    return response.json({
        volume : volume,
        luas_permukaan : luas

    })
})

//endpoint kedua
app.use(express.json())
app.post("/kedua",(request, response) => {
    // tampung data sisi
    let sisi= request.body.sisi
    
    let volume = sisi * sisi * sisi
    let luas = 6 * sisi * sisi

    let hasil_volume = null
    let hasil_luas = null
    return response.json({
        volume : volume,
        luas_permukaan : luas

    })
})

//endpoint ketiga
app.use(express.json())
app.post("/ketiga",(request, response) => {
    
    let r = request.body.r
    let tinggi= request.body.tinggi
    
    let volume = Math.PI * r * r * tinggi
    let luas = 2 * Math.PI * r * (r + tinggi)

    let hasil_volume = null
    let hasil_luas = null
    return response.json({
        volume : volume,
        luas_permukaan : luas

    })
})

//endpoint keempat
app.use(express.json())
app.post("/keempat",(request, response) => {
    // tampung data
    
    let r = request.body.r
    
    let volume = 4/3 * Math.PI * r * r * r
    let luas = 4 * Math.PI * r * r

    let hasil_volume = null
    let hasil_luas = null
    return response.json({
        volume : volume,
        luas_permukaan : luas

    })
})

app.listen(7000, () => {
    console.log(`Server run on port 7000`);
})