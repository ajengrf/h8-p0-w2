//* Exercise 6
//* Looping

// 1. Melakukan Looping Menggunakan While
var judul1 = 'LOOPING PERTAMA'
var judul2 = 'LOOPING KEDUA'

console.log (judul1)
var i = 2
while (i<20) {
    console.log(i, '- I love coding')
    i+=2
}

console.log (judul2)
var j = 20
while (j>0) {
    console.log(j, '- I will become fullstack developer')
    j-=2
}

// 2. Melakukan Looping Menggunakan For
console.log(judul1)
for (var k=1; k<=20; k++) {
    console.log (k, '- I love coding')
}

console.log(judul2)
for (var l=20; l>0; l--) {
    console.log (l, '- I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap
for (var m=1; m<=100; m++) {
    if (m%2 == 0) {
        console.log (m, 'GENAP')
    } else {
        console.log (m, 'GANJIL')
    }
}

for (var m=1; m<=100; m+=2) {
    if (m%3 == 0) {
        console.log (m, 'Kelipatan 3')
    } else {
        console.log (m, '')
    }
}

for (var m=1; m<=100; m+=5) {
    if (m%6 == 0) {
        console.log (m, 'Kelipatan 6')
    } else {
        console.log (m, '')
    }
}

for (var m=1; m<=100; m+=9) {
    if (m%10 == 0) {
        console.log (m, 'Kelipatan 10')
    } else {
        console.log (m, '')
    }
}