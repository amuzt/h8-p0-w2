function xo(str) {
    length = str.length;

    var x = 0;
    var o = 0;

    for (i = 0; i <= length; i++) {
        if (str.charAt(i) == 'x') {
            x++;
        } else if (str.charAt(i) == 'o') {
            o++;
        }
    }

    if (x == o) {
        return true;
    } else {
        return false;
    }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true