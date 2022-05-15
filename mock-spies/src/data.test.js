import { it, expect, vi, describe } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
    it("should execute logfn if provided", () => {
        const logger = vi.fn();
        generateReportData(logger);
        expect(logger).toBeCalled();
    });
});
