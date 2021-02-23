export class RomanDigit {
    symbol: String;
    value: number
    constructor(value: number, symbol: String) {
        this.value = value;
        this.symbol = symbol;
    } 

    isDivisible(number: number) {
        return number % this.value < this.value
    }
}

export class Roman {
    getLargestRomanSymbol(n: number ): String {
        return "I"; 
    }

    // convert(n: number): string {
    //     const hierarchy = [{value: 5, symbol :"V"}, 
    //                         {value: 1, symbol :"I"}]

    //     const onesDictionary: Map<number, string> = new Map<number, string>([
    //         [0, ""],
    //         [1, "I"],
    //         [2, "II"],
    //         [3, "III"]
    //     ])

    //     const fivesDictionary: Map<number, string> = new Map<number, string>([
    //         [0, ""],
    //         [5, "V"],
    //         [10, "X"],
    //         [50, "L"],
    //         [100, "C"]
    //     ])

    //     // receive 3
    //     // find the biggest roman symbol. = I
    //     // get representation of 3 = III

    //     biggestSymbol = hierarchy.find( romansymbol => n % romansymbol.value <= romansymbol.value)


    //     // receive 28 (XVIII)
    //     // find biggest roman symbol = X
    //     // get representation = XX
    //     // append roman numerals for leftovers = 3
    //     // find biggest roman symbol = V
    //     // get representation = V
    //     // append roman numerals for leftovers = 2
    //     // receive 3
    //     // find the biggest roman symbol. = I
    //     // get representation of 3 = III


    //     let response = ""
    //     let mod_five_remainder = n % 5

        
    //     response = fivesDictionary.get(n - mod_five_remainder)!
        

    //     if (mod_five_remainder % 3 <= 3) {
    //         response += onesDictionary.get(mod_five_remainder)!
    //     }

    //     return response
    // }

}
