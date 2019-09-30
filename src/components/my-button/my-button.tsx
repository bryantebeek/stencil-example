import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.css",
  shadow: true
})
export class MyButton {
  @Prop() name: string;
  @Prop() onClickHandler: Function = () => {};

  render() {
    return <button onClick={ev => this.onClickHandler(ev)}>{this.name}</button>;
  }
}
