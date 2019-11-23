// Exercise-3
// Menggunakan If Else

var nama = 'Ajeng'
var peran = 'Tabib'

if (nama == '' && peran == '') {
    console.log ('Nama harus diisi!')
} else if (nama !== '' && peran == 'Ksatria') {
    console.log (`Selamat datang di Dunia Proxytia, ${nama} 
Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (nama !== '' && peran == 'Tabib') {
    console.log (`Selamat datang di Dunia Proxytia, ${nama} 
Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
} else if (nama !== '' && peran == 'Penyihir') {
    console.log (`Selamat datang di Dunia Proxytia, ${nama} 
Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else if (nama == '' && peran !== '') {
    console.log (`Nama harus diisi!`)
} else {
    console.log (`Halo ${nama}, Pilih peranmu untuk memulai game!`)
}