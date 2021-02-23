import { Roman } from "../main/roman";

describe('roman numeral converter', () => {
    it("should return '' for null", () => {
        let calculator: Roman = new Roman();
        expect(calculator.convert(null)).toBe("");
    })

    it("should return 'I' for 1", () => {
        let calculator: Roman = new Roman();
        expect(calculator.convert(1)).toBe("I");
    })
})
