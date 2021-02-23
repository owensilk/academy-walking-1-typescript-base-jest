export class Roman {
    convert(n: any): String {
        let numerals = ["", "I", "II", "III"]
        if (n) {
            return numerals[n]
        }
        return ""
    }

}
