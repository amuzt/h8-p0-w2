var row2 = 5;
for (b = row2 ; b>0 ; b-=1){
  bintang = '';
  for (c = row2-b ; c>=0; c-=1) {
    bintang +=  '*'; 
  }
  console.log(  bintang )
}