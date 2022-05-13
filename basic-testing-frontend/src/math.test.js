import { it, expect } from "vitest";
import { add } from "./math";

it("should summurize all integers", () => {
    //Arrange
    const numbers = [1, 2];

    //Act
    const result = add(numbers);

    //Assert
    const expectedResult = numbers.reduce((prevVal, curVal) => {
        return prevVal + curVal;
    }, 0);
    expect(result).toBe(expectedResult);
});

it("should yield NaN if atleast one invalid number is provided", () => {
    const input = ["Name", 1];

    const result = add(input);

    expect(result).toBeNaN();
});

it("should summurize if number is given as string", () => {
    const input = ["1", "2"];

    const result = add(input);

    const expectedResult = input.reduce((prevNumber, curNumber) => {
        return +prevNumber + +curNumber;
    }, 0);

    expect(result).toBe(expectedResult);
});

it("should be 0 if empty array is provided", () => {
    const input = [];

    const result = add(input);

    expect(result).toBe(0);
});

it("should throw an error if no value passed into function", () => {
    const inputFn = () => {
        add();
    };
    expect(inputFn).toThrow();
});
