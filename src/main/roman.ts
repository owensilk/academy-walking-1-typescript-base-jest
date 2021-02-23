export class Roman {
    convert(n: any): String {
        let numerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
        if (n) {
            return numerals[n]
        }
        return ""
    }

}
