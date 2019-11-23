//* Exercise 13
//* Logic Challenge - X dan O

var penampungx = 0
var penampungo = 0

function xo(str) {
    for (var i=0; i<str.length; i++) {
        if (str[i]=='x') {
            penampungx += 1
        } else {
            penampungo += 1
        } 
    }
return penampungx == penampungo
}
console.log(xo('xxoo'))
