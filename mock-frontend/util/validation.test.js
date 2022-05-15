import { expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw error if a empty string id provided as a value", () => {
    const testInput = "";

    const validationFunction = () => validateNotEmpty(testInput);

    expect(validationFunction).toThrow();
});

it("should throw error if a empty string id provided as a value", () => {
    const testInput = "  ";

    const validationFunction = () => validateNotEmpty(testInput);

    expect(validationFunction).toThrow();
});

it("should throw error with a provided error message", () => {
    const testInput = "  ";
    const testErrorMessage = "testError";
    const validationFunction = () =>
        validateNotEmpty(testInput, testErrorMessage);

    expect(validationFunction).toThrow(testErrorMessage);
});
