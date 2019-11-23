//* Exercise 10
//* Logic Challenge - Bandingkan Angka

function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2) {
        return true
    } else if (angka1 == angka2) {
        return '-1'
    } else {
        return false
    }
}
console.log(bandingkanAngka(13,13))