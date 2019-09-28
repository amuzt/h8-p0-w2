// Tugas 1
function shoutOut() {
    console.log('Halo Function!');
}
shoutOut();


// Tugas 2
function calculateMultiply(angka1, angka2) {
    return angka1 * angka2;

}
var angka1 = 5;
var angka2 = 6;

var hasilPerkalian = calculateMultiply(angka1, angka2);
console.log(hasilPerkalian);

// Tugas 3
function processSentence(name, age, address, hobby) {
    return 'nama saya ' + name + ' umur saya ' + age + ' alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);