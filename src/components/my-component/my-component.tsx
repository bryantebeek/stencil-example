import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css"
})
export class MyComponent {
  @Prop() text: string;

  componentWillLoad() {
    const isBlank = !this.text;

    if (isBlank) {
      throw new Error("text: required");
    }
  }

  render() {
    return <h1>{this.text}</h1>;
  }
}
