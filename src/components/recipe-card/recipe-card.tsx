import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "recipe-card",
  styleUrl: "recipe-card2.scss",
  shadow: false,
})
export class RecipeCard {
  @Prop() targetUrl: string;
  @Prop() name: string;
  @Prop() imageSrc: string;

  render() {
    //const { targetUrl, name, imageSrc } = this;
    const { name, targetUrl, imageSrc } = this;
    document.documentElement.style.setProperty(
      "--custom-bg-image",
      "url(" + imageSrc + ")"
    );
    console.log();

    var style = document.createElement("style");
    var newClass = name.replace(/[^A-Z0-9]/gi, "");
    var classeNames = "bg_image " + newClass;
    style.innerHTML =
      "." + newClass + " {   background-image: url(" + imageSrc + ");}";
    document.getElementsByTagName("head")[0].appendChild(style);

    return (
      <Host>
        <a href={"recipe/" + targetUrl}>
          <section class={classeNames}>
            <p class="recipe-name">{name}</p>
          </section>
        </a>
      </Host>
    );
  }
}
