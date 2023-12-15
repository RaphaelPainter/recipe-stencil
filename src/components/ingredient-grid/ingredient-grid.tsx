import { Component, h, Host, Prop, State, Watch } from "@stencil/core";
import { Ingredient } from "recipe-front-model";

@Component({
  tag: "ingredient-grid",
  styleUrl: "ingredient-grid.scss",
  shadow: false,
})
export class IngredientGrid {
  @Prop() ingredients: string;
  @State() internalIngredients: Ingredient[];

  @Watch("ingredients")
  parseIngredients() {
    if (this.ingredients) {
      this.internalIngredients = JSON.parse(this.ingredients);
    }
  }

  componentWillLoad() {
    this.parseIngredients();
  }

  render() {
    const { internalIngredients } = this;
    return (
      <Host>
        {internalIngredients.map((ingredient) => {
          return (
            <ingredient-card
              target-url={ingredient.id}
              name={ingredient.name}
              image-src={ingredient.image}
            ></ingredient-card>
          );
        })}
      </Host>
    );
  }
}
