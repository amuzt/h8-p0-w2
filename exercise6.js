//1

console.log('LOOPING PERTAMA')
var flag = 2;
while(flag < 21) { // Loop akan terus berjalan selama nilai flag masih dibawah 20
  console.log(flag + ' - I love coding'); // Menampilkan nilai flag pada iterasi tertentu
  flag=flag+2; // Mengubah nilai flag dengan menambahkan 1 
}


console.log('LOOPING KEDUA')
var flag = 20;
while(flag > 0) { // Loop akan terus berjalan selama nilai flag masih dibawah 20
  console.log(flag + ' - I will become fullstack developer'); // Menampilkan nilai flag pada iterasi tertentu
  flag-=2; // Mengubah nilai flag dengan menambahkan 1 
}
// 2
console.log('LOOPING PERTAMA')
for(var angka = 1; angka < 21; angka++) {
  console.log(angka + ' - I love coding')
}

console.log('LOOPING KEDUA')
for(var angka = 20; angka > 0; angka--) {
  console.log(angka + ' - I will become fullstack developer')
}

// 3

var flag = 1;
while(flag < 100) { 
  console.log('GANJIL'); 
  flag=flag+1; 
}

var flag = 2;
while(flag < 100) { 
console.log('GENAP'); 
flag=flag+1; 
}



