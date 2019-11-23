//* Exercise 7
//* Looping

// 1. Menyusun Barisan Bintang
for (var i=0; i<5; i++) {
    console.log ('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
for (var i = 0; i < 5; i++) {
    var bintang2 = ''
    for (var j = 0; j < 5; j++) {
        bintang2 += '*'
    }
    console.log (bintang2)
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var bintang3 = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 1; j++) {
        bintang3 += '*'
    }
    console.log (bintang3)
}

// var bintang3 = ''
// for (var i = 0; i < 5; i++) {
//     bintang3 += '*'
//     console.log(bintang3)
// }