import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "my-clearer",
  styleUrl: "my-clearer.css",
  shadow: true
})
export class MyClearer {
  @Prop() value: string = "";

  handleClick() {
    alert(this.value);
    this.value = null;
  }

  handleChange(value: string) {
    this.value = value;
  }

  render() {
    return (
      <div>
        <my-input
          value={this.value}
          onChangeHandler={value => this.handleChange(value)}
        ></my-input>
        <my-button
          name="Search"
          onClickHandler={() => this.handleClick()}
        ></my-button>
      </div>
    );
  }
}
