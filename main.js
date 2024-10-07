function contaCifre(numero) {
    if (numero > 0 && numero < 10000) {
        return numero.toString().length;

    } else {
        return "Numero troppo grande";
    }
}

console.log(contaCifre(9));
console.log(contaCifre(999));
console.log(contaCifre(9999));
console.log(contaCifre(99999));