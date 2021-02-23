export class Roman {
    convert(n: number): string {
        const romanDictionary: Map<number, string> = new Map<number, string>([
            [0, ""],
            [1, "I"],
            [2, "II"],
            [3, "III"]
        ])

        const fivesDictionary: Map<number, string> = new Map<number, string>([
            [0, ""],
            [5, "V"],
            [10, "X"],
            [50, "L"],
            [100, "C"]
        ])

        let response = ""
        let mod_five = n % 5

        if (mod_five == 0) {
            response = fivesDictionary.get(n)!
        }

        if (mod_five % 3 <= 3) {
            response += romanDictionary.get(mod_five)!
        }

        return response
    }

}
