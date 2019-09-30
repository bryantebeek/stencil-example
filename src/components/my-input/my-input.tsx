import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-input",
  styleUrl: "my-input.css",
  shadow: true
})
export class MyInput {
  @Prop() value: string;
  @Prop() onChangeHandler: (value: string) => void;

  onChange(ev) {
    this.value = ev.target.value;
    this.onChangeHandler(this.value);
  }

  render() {
    return (
      <input type="text" value={this.value} onKeyUp={ev => this.onChange(ev)} />
    );
  }
}
