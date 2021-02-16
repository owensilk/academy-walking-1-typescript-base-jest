import { delimiter } from "path";
import { convertToObject } from "typescript";

export class Calculator {
    add(a: string) {
        if (!a) {
            return 0;
        }

        let delimeter = ',';
        let input = a;

        const delimeterRegex = new RegExp(`^\/\/(.+|\n+)\n`);
        const matches = a.match(delimeterRegex);
        if (matches) {
            delimeter = matches[1];
            input = a.substring(delimeter.length + 3);
            
            if (delimeter.length > 1) {
                delimeter = delimeter.substr(1, delimeter.length - 2);
            }
        }

        if (input.indexOf(`${delimeter}\n`) >= 0) {
            throw new TypeError("Invalid input")
        }

        const regex = new RegExp(`[${delimeter}|\n]`);
        let numbers = input
            .split(regex)
            .map(v => parseInt(v))

        this.checkNegatives(numbers)

        return this.sumBelow1000(numbers)
    }

    checkNegatives(numbers: number[]) {
        const negatives = numbers.filter(v => v < 0);
        if (negatives.length > 0) {
            throw new TypeError(`Negatives not allowed: ${negatives.join(', ')}`)
        }
    }

    sumBelow1000(numbers: number[]) {
        return numbers
            .reduce((prev, curr) => {
                if (curr < 1000) {
                    return prev + curr;
                }
                return prev
            });
    }
}
