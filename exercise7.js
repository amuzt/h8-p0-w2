console.log ('1.Menyusun Barisan Bintang')
var row1 = 5;
while (row1>=1){
  console.log('*'); 
row1-=1;
} 

console.log ('2. Menyusun Barisan Bintang Dengan Nested Looping')

var row2 = 5;
for (b = row2 ; b >0 ; b-=1){
  bintang = '';
  for (c = row2 ; c>0; c-=1) {
    bintang +=  '*'; 
  }
  console.log( bintang )
}

