import { newSpecPage } from "@stencil/core/testing";
import { MyInput } from "./my-input";

it("should render my input", async () => {
  const page = await newSpecPage({
    components: [MyInput],
    html: `<my-input text="Foo"></my-input>`
  });
  expect(page.root).toEqualHtml(`
    <my-input text="Foo">
      <h1>Foo</h1>
    </my-input>
  `);
});

it("should throw an error if no text is provided", async () => {
  try {
    await newSpecPage({
      components: [MyInput],
      html: `<my-input></my-input>`
    });

    fail("text: required");
  } catch (e) {
    expect(e).toEqual(new Error("text: required"));
  }
});
