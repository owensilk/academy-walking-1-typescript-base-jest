import { Roman } from "../main/roman";
const each = require("jest-each").default;

describe('ones are repeated up to 3 times', () => {
    each([
        ["", null],
        ["I", 1],
        ["II", 2],
        ["III", 3],
    ]).it("should give %j for %j number", (roman_numeral: string, number: number) => {
        let calculator: Roman = new Roman();
        expect(calculator.convert(number)).toBe(roman_numeral);
    });
})

describe('multiples of 5 have their own symbols', () => {
    each([
        ["", null],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100]
    ]).it("should give %j for %j number", (roman_numeral: string, number: number) => {
        let calculator: Roman = new Roman();
        expect(calculator.convert(number)).toBe(roman_numeral);
    });
})

describe('one less than a multiple of 5 prepend a I', () => {
    each([
        ["", null],
        ["IV", 4],
        ["IX", 9],
    ]).it("should give %j for %j number", (roman_numeral: string, number: number) => {
        let calculator: Roman = new Roman();
        expect(calculator.convert(number)).toBe(roman_numeral);
    });
})
