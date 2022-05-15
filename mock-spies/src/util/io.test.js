import { expect, it, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");
vi.mock("path", () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            },
        },
    };
});

it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFileName = "test.txt";

    writeData(testData, testFileName);

    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFileName, testData);
    // return expect(
    //     fs.writeFile(testData, testFileName)
    // ).resolves.toBeUndefined();
});

it("should return a promise that resolves to no value if called currectly", () => {
    const testData = "Test";
    const testFileName = "test.txt";

    writeData(testData, testFileName);

    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFileName, testData);
    return expect(
        fs.writeFile(testData, testFileName)
    ).resolves.toBeUndefined();
});
