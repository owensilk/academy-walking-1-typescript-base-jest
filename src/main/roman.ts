export class Roman {
    convert(n: any): String {
        let numerals = ["", "I", "II", "III", "IV"]
        if (n) {
            return numerals[n]
        }
        return ""
    }

}
