import { Component, h, Host, Prop, State, Watch } from "@stencil/core";
import { Recipe } from "recipe-front-model";

@Component({
  tag: "recipe-detail",
  styleUrl: "recipe-detail.scss",
  shadow: false,
})
export class RecipeDetail {
  @Prop() recipe: string;
  @State() internalRecipe: Recipe;

  @Watch("recipe")
  parseRecipe() {
    if (this.recipe) {
      this.internalRecipe = JSON.parse(this.recipe);
    }
  }

  componentWillLoad() {
    this.parseRecipe();
  }

  render() {
    return (
      <Host>
        <section>
          <p>{this.internalRecipe.name}</p>
          <p>{this.internalRecipe.description}</p>
        </section>
      </Host>
    );
  }
}
