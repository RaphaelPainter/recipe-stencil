import { Component, h, Host, Prop, State, Watch } from "@stencil/core";
import { Recipe } from "recipe-front-model";

@Component({
  tag: "recipe-grid",
  styleUrl: "recipe-grid.scss",
  shadow: false,
})
export class RecipeGrid {
  @Prop() recipes: string;
  @State() internalRecipes: Recipe[];

  @Watch("recipes")
  parseIngredients() {
    if (this.recipes) {
      this.internalRecipes = JSON.parse(this.recipes);
    }
  }

  componentWillLoad() {
    this.parseIngredients();
  }

  render() {
    const { internalRecipes } = this;
    return (
      <Host>
        {internalRecipes.map((recipe) => {
          return (
            <recipe-card
              target-url={recipe.id}
              name={recipe.name}
              image-src={recipe.image}
            ></recipe-card>
          );
        })}
      </Host>
    );
  }
}
