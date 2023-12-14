import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "ingredient-card",
  styleUrl: "ingredient-card2.scss",
  shadow: false,
})
export class IngredientCard {
  @Prop() targetUrl: string;
  @Prop() name: string;
  @Prop() imageSrc: string;

  render() {
    //const { targetUrl, name, imageSrc } = this;
    const { name, targetUrl } = this;
    document.documentElement.style.setProperty(
      "--custom-bg-image",
      "url(" + targetUrl + ")"
    );

    return (
      <Host>
        <section class="bg_image">
          <p>{name}</p>
        </section>
      </Host>
    );
  }
}
/*<img class="photo" src={imageSrc} alt={"picture of " + name}></img>
        <p class="name">{name}</p>*/
/* <a href={targetUrl} class="container">
          <p class="name">{name}</p>
        </a>*/
