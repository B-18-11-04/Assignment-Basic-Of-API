let data = [
    { nama: "Dhea",BB: 60, TB: 1.5 },
    { nama: "Essa",BB: 55, TB: 1.8 },
    { nama: "Fazila",BB: 90, TB: 1.6 },
    { nama: "Debbi",BB: 40, TB: 1.6 },
    { nama: "Faiza",BB: 30, TB: 1.4 }
]

let kurangGizi = [], normal = []
let obesitas = [], beratLebih = []

for (let i = 0; i < data.length; i++) {
    let bmi = data[i].BB / ( data[i].TB* data[i].TB)
    if (bmi < 18.5){
        kurangGizi.push(data[i].nama)
    }
    if (bmi >= 18.5 && bmi < 24.9){
        normal.push(data[i].nama)
    }
    if (bmi >= 25 && bmi <= 29.9){
        beratLebih.push(data[i].nama)
    }
    if (bmi >= 30){
        obesitas.push(data[i].nama)
    }
}
console.log(`Data kurang gizi : ${kurangGizi}`);
console.log(`Data normal : ${normal}`);
console.log(`Data berat lebih : ${beratLebih}`);
console.log(`Data obesitas : ${obesitas}`);