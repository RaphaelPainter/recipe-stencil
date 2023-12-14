import { Component, h, Host, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "ingredient-grid",
  styleUrl: "ingredient-grid.scss",
  shadow: false,
})
export class IngredientGrid {
  @Prop() ingredients: string;
  @State() internalIngredients: string[];

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
              target-url="https://i.notretemps.com/1400x787/smart/2015/10/05/poisson-thon.jpg"
              name={ingredient}
              image-src="https://www.willemsefrance.fr/cdn/shop/products/HOR_276_1.jpg?v=1682493560"
            ></ingredient-card>
          );
        })}
      </Host>
    );
  }
}
