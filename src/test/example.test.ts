import { Calculator } from "../main/calculator";
const each = require("jest-each").default;

describe('Calculator test', () => {
    each([
        [0, ""],
        [1, "1"],
        [2, "2"],
        [3, "3"],
        [2, "1,1"],
        [3, "1,2"],
        [6, "1,2,3"],
        [10, "1,2,3,4"],
        [6, "1\n2,3"],
        [6, "1,2\n3"],
        [10, "1,2\n3\n4"],
        [3, "//;\n1;2"],
        [3, "//,\n1,2"],
        [3, "//\n\n1\n2"],
        [2, "2,1001"],
        [1, "//;\n1;1001"],
        [6, "//[***]\n1***2***3"],
    ]).it("should give %j for %j string", (expected: number, text: string) => {
        let example: Calculator = new Calculator();
        expect(example.add(text)).toBe(expected);
    });

    each([
        ["Invalid input", "1,\n"],
        ["Invalid input", "1,\n2"],
        ["Invalid input", "//;\n1;\n2"],
        ["Negatives not allowed: -1", "-1"],
        ["Negatives not allowed: -1", "1,-1"],
        ["Negatives not allowed: -1, -2", "-1, -2"],
        ["Negatives not allowed: -2, -4", "1,-2,3,-4"],
        ["Negatives not allowed: -2, -4", "//;\n1;-2;3\n-4"],
    ]).it("should throw '%s' and execption for %j", (error: string, text: string) => {
        let example: Calculator = new Calculator();
        expect(() => example.add(text)).toThrow(error);
    });
})
