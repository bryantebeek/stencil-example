import { newE2EPage } from "@stencil/core/testing";

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}

it("should render a my-clearer", async () => {
  const page = await newE2EPage();
  await page.setContent(`<my-clearer></my-clearer>`);

  const el = await page.find("my-clearer >>> my-input");
  const input = await el.findAll("my-input >>> *");

  console.log(input);

  // const value = await input.getProperty("value");
  // expect(value).toBe("");

  // await input.type("foo");
  await delay(2000);

  // expect(await input.getProperty("value")).toBe("foo");

  // const button = await page.find("my-clearer >>> my-button");
  // await button.click();
});
