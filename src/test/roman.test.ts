import { Roman } from "../main/roman";

describe('roman numeral converter', () => {
    it("should return '' for null", () => {
        let calculator: Roman = new Roman();
        expect(calculator.covert(null)).toBe("");
    })
})
