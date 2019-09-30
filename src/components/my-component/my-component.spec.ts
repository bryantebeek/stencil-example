import { newSpecPage } from "@stencil/core/testing";
import { MyComponent } from "./my-component";

it("should render my component", async () => {
  const page = await newSpecPage({
    components: [MyComponent],
    html: `<my-component text="Foo"></my-component>`
  });
  expect(page.root).toEqualHtml(`
    <my-component text="Foo">
      <h1>Foo</h1>
    </my-component>
  `);
});

it("should throw an error if no text is provided", async () => {
  try {
    await newSpecPage({
      components: [MyComponent],
      html: `<my-component></my-component>`
    });

    fail("text: required");
  } catch (e) {
    expect(e).toEqual(new Error("text: required"));
  }
});
