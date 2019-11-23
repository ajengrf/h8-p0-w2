//* Exercise 11
//* Logic Challenge - Balik Kata

function balikKata(kata) {
    var kata1 = ""
    for (i = kata.length-1; i>=0; i--) {
        kata1 += kata[i]
    }
return kata1
} 

console.log(balikKata('ajengyaaa'))
