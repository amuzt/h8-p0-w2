

var nama = 'Lala';
var peran = 'Penyihir';

if (nama == '') {
	console.log('Nama harus diisi!');
}
else if (peran == '' && nama!=''){
    console.log(`Halo ${nama} , Pilih peranmu untuk memulai game!`);
}
else if (peran == 'Ksatria' && nama!=''){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\n
    Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`);
}
else if (peran == 'Tabib' && nama!=''){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\n
    Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`);
}
else if (peran == 'Penyihir' && nama!=''){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\n
    Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
   	

