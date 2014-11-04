var numerals  = {
    getRomanVal: function (digit) {
        var n = parseInt(digit);
        var v = "";
        var i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        var x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        var c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        var m = ["", "M", "MM", "MMM", "MMMM"];
        if (n >= 1 && n <= 4999) {
            v += m[Math.floor(n / 1000)];
            n %= 1000;
            v += c[Math.floor(n / 100)];
            n %= 100;
            v += x[Math.floor(n / 10)];
            n %= 10;
            v+= i[n];
        }
        return v;
    }
}