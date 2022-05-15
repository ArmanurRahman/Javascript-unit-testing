import path from "path";
import fs from "fs";
import { Window } from "happy-dom";
import { beforeEach, expect, it, vi } from "vitest";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal("document", document);

beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDocumentContent);
});

it("should add an error paragraph to be id='errors' element", () => {
    showError("test");

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
});

it("should not add an error paragraph initially", () => {
    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
});

it("should output the provided error message in the error paragraph", () => {
    const errorMessage = "test";
    showError(errorMessage);
    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(errorMessage);
});
