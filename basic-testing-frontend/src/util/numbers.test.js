import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
    it("should return Number if number inside string is given", () => {
        const input = "1";

        const result = transformToNumber(input);

        expect(result).toBeTypeOf("number");
    });

    it("should return NaN for non-transferable value", () => {
        const input = "name";

        const result = transformToNumber(input);

        expect(result).toBeNaN();
    });

    it("should return same Number if number is given", () => {
        const input = 1;

        const result = transformToNumber(input);

        expect(result).toBe(1);
    });
});
