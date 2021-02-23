export class Roman {
    getLargestRomanSymbol(n: number ) {
        if (n % 5 < 5 ) {
            return {symbol: "V", value: 5};
        }
        return {symbol: "I", value: 1}; 
    }
}
