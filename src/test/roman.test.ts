import { Roman } from "../main/roman";
const each = require("jest-each").default;

describe('roman numeral converter', () => {
    each([
        ["", null],
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IIII", 4],
    ]).it("should give %j for %j number", (roman_numeral: string, number: number) => {
        let calculator: Roman = new Roman();
        expect(calculator.convert(number)).toBe(roman_numeral);
    });
})
