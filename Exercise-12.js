//* Exercise 12
//* Logic Challenge - Konversi Menit

function konversiMenit(menit) {
    var jam = ''
    var menit1 = ''

    jam = (menit - (menit%60))/60
    menit1 = menit%60
    
    if (menit%60!==0 && (menit%60)<=10) {
        return jam + ':' + 0 + menit1
    } else if (menit%60!==0) {
        return jam + ':' + menit1
    }
    else {
        return 0 + ':' + menit
    }
}
console.log(konversiMenit(9))