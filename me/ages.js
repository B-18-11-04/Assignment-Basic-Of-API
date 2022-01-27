const { request, response } = require("express")
const express = require("express")

const app = express()
// set to read a request data from JSON format
app.use(express.json())

// JSON is STRING

// endpoint 1
app.post("/ages", (request, response) => {
    // store the request data
    let data = request.body.ages
    let jmlRemaja = 0, jmlTua = 0, jmlDewasa = 0

    for (let i = 0; i < data.length; i++) {
        if(data[i].umur >= 12 && data[i].umur <= 24){
            jmlRemaja+=1
        }

        if(data[i].umur >= 25 && data[i].umur <= 55){
            jmlDewasa+=1
        }

        if(data[i].umur >= 55){
            jmlTua+=1
        }
    }

    // give a response dat
    return response.json({
        "jumlah_remaja" : jmlRemaja,
        "jumlah_dewasa" : jmlDewasa,
        "jumlah_tua" : jmlTua
    })
})

// endpoint 2
app.use(express.json())
app.post("/shopping", (request, response) => {
    // store the request data
    let data = request.body.shopping
    let Total = 0

for (let i = 0; i < jumlah.length; i++) {
    Total += data[i].jumlah * data[i].harga
}
let PPN = Total * 10/100
Total += PPN


    // give a response dat
    return response.json({
        "total_harga" : Total
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})