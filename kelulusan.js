const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/kelulusan", (request, response) => {
    // store the request data
    let data = request.body.orang

    // membuat variabel untuk menampung jumlah orang sesuai status usianya
    let lulus = [], tidak_lulus = []
    let nilai_math = 0, nilai_bing = 0 

})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})