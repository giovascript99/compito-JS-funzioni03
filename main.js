function contaCifre(num){
    if (num < 10){
        return `1 cifra`
    }else if (num < 100){
        return `2 cifre`
    }else if (num < 1000){
        return `3 cifre`
    }else if (num < 10000){
        return `4 cifre`
    }else{
        return `numero troppo grande`
    }
}

console.log(contaCifre(9));
console.log(contaCifre(99));
console.log(contaCifre(999));
console.log(contaCifre(9999));
console.log(contaCifre(99999));

