import { Roman, RomanDigit } from "../main/roman";
const each = require("jest-each").default;

describe('biggest symbol below 4 is I', () => {
    let calculator: Roman = new Roman();
    expect(calculator.getLargestRomanSymbol(1)).toBe("I");
    expect(calculator.getLargestRomanSymbol(2)).toBe("I");
    expect(calculator.getLargestRomanSymbol(3)).toBe("I"); 
});

describe('biggest symbol above 5 is V', () => {
    let calculator: Roman = new Roman();
    expect(calculator.getLargestRomanSymbol(5)).toBe("V");
    expect(calculator.getLargestRomanSymbol(6)).toBe("V");
});

// describe('ones are repeated up to 3 times', () => {
//     each([
//         ["", 0],
//         ["I", 1],
//         ["II", 2],
//         ["III", 3],
//     ]).it("should give %j for %j number", (roman_numeral: string, number: number) => {
//         let calculator: Roman = new Roman();
//         expect(calculator.convert(number)).toBe(roman_numeral);
//     });
// })

// describe('multiples of 5 have their own symbols', () => {
//     each([
//         ["V", 5],
//         ["X", 10],
//         ["L", 50],
//         ["C", 100]
//     ]).it("should give %j for %j number", (roman_numeral: string, number: number) => {
//         let calculator: Roman = new Roman();
//         expect(calculator.convert(number)).toBe(roman_numeral);
//     });
// })

// describe('multiples of 5 + 3 have fives symbol and ones', () => {
//     each([
//         ["VI", 6],
//         ["VII", 7],
//         ["VIII", 8],
//         ["XI", 11],
//         ["XII", 12],
//         ["XIII", 13],
//         ["LI", 51],
//         ["LII", 52],
//         ["LIII", 53],
//         ["CI", 101],
//         ["CII", 102],
//         ["CIII", 103]
//     ]).it("should give %j for %j number", (roman_numeral: string, number: number) => {
//         let calculator: Roman = new Roman();
//         expect(calculator.convert(number)).toBe(roman_numeral);
//     });
// })
