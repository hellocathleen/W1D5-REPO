
function luhnCheck(number) {
    //reverse the number
    var num = number;
    num = num.split("").reverse().join("");
    //store doubled numbers in an array
    //store other digits in an array
    var arrDbl = [];
    var arrSng = [];
    for (var i = 0; i < num.length; i++) {
        if (i % 2 === 1) {
            arrDbl.push(num[i] * 2);
        } else if (i === 0 || i % 2 === 0) {
            arrSng.push(Number(num[i]));
        }
    }
    //subtract 9 from doubled numbers if > 9
    for (var i = 0; i < arrDbl.length; i++) {
        if (arrDbl[i] > 9) {
            arrDbl[i] = arrDbl[i] - 9;
        }
    }
    //concatenate the two arrays
    var newNum = arrSng.concat(arrDbl);
    //get the sum of all the numbers
    var sum = 0;
    for (var i = 0; i < newNum.length; i++) {
        sum += newNum[i];
    }
    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    }
};
 


console.log(luhnCheck("79927398713"));
