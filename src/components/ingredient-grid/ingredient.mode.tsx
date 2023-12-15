import { Component, h, Host, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "model-ingredient",
})
export class Ingredient {
  id: string;
  name: string;
  image: string;
}
