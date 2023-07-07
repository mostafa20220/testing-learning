const { generateText, checkAndGenerate } = require("./util");
const puppeteer = require("puppeteer");

// unit tests for generateText function

test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
  const text2 = generateText("Anna", 28);
  expect(text2).toBe("Anna (28 years old)");
});

test("should output data-less text", () => {
  const text = generateText();
  expect(text).toBe("undefined (undefined years old)");
  const text2 = generateText("", null);
  expect(text2).toBe(" (null years old)");
});

// integration tests for checkAndGenerate function

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
  const emptyText = checkAndGenerate("", 29);
  expect(emptyText).toBe(false);
});

// end-to-end tests

test("should click around", async () => {
  const browser = await puppeteer.launch({
    // headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:5500");
  await page.type("input#name", "Anna");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  const result = await page.$eval(
    ".user-item",
    (el) => el.textContent === "Anna (28 years old)"
  );
  expect(result).toBe(true);
}, 10000);
