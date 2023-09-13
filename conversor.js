//dec2 // Conversor de Bases

const dec2 = (n, m) => {
    const DigitosHex = "0123456789ABCDEF"

    const converter = (numero) => {
        if(numero < m){
            return DigitosHex[numero];
        }else{
            const resto = numero % m;
            const quoci = Math.floor(numero / m);
            return converter(quoci) +DigitosHex[resto]
        }
    }
    if(n < 0 || m < 2 || m > 16){
        return "Invalido"

    } if( n=== 0){
        return "0"
    }
    
    return converter(n)
}

console.log(dec2(20, 10))