console.log('1. Melakukan Looping Menggunakan While')

console.log('LOOPING PERTAMA')
var flag = 2;
while (flag < 21) { 
  console.log(flag + ' - I love coding'); 
  flag +=2; 
}
console.log('LOOPING KEDUA')
flag-=2
while (flag > 0) { 
  console.log(flag + ' - I will become fullstack developer'); 
  flag -= 2; 
}

console.log('2. Melakukan Looping Menggunakan For')

console.log('LOOPING PERTAMA')
for (var angka = 1; angka < 21; angka++) {
  console.log(angka + ' - I love coding')
}

console.log('LOOPING KEDUA')
for (var angka = 20; angka > 0; angka--) {
  console.log(angka + ' - I will become fullstack developer')
}


console.log('3. Angka Ganjil dan Genap ')

for (var angka = 1; angka <= 100; angka++) {
  if (angka % 2 === 0) {
    console.log(" GENAP");
  } else {
    console.log(" GANJIL")
  }
}

for (var angka2 = 1; angka2 <= 100; angka2 += 2) {
  if ((angka2 % 3) === 0) {
    console.log(angka2 + ' KELIPATAN 3');
  } else {
    console.log(' ');
  }
}


for (var angka5 = 1; angka5 <= 100; angka5 += 5) {
  if ((angka5 % 6) === 0) {
    console.log(angka5 + ' KELIPATAN 6');
  } else {
    console.log(' ');
  }
}


for (var angka9 = 1; angka9 <= 100; angka9 += 9) {
  if ((angka9 % 10) === 0) {
    console.log(angka9 + ' KELIPATAN 10');
  } else {
    console.log(' ');
  }
}