export class Roman {
    convert(n: any): String {
        if (n === 1) {
            return "I"
        } else if (n === 2) {
            return "II"
        }
        return ""
    }

}
