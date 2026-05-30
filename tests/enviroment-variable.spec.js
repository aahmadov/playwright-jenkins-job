import { test } from "@playwright/test";

test("@env-test", async ({ page }) => {
  // console.log(process.env.PRACTICE_USERNAME);
  // console.log(process.env.PRACTICE_PASSWORD);

  console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);
});
test("Bypass our authentication by encoding the credentials base64 format", async ({
  page,
}) => {
  let encodedCredentials = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`,
  ).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });
  page.goto("https://the-internet-5chk.onrender.com/");

  await page.waitForTimeout(3000);
});
