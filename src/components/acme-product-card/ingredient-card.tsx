import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'ingredient-card',
  styleUrl: 'ingredient-card.scss',
  shadow: true,
})
export class AcmeProductCard {
  @Prop() targetUrl: string;
  @Prop() name: string;
  @Prop() imageSrc: string;

  render() {
    const {targetUrl, name, imageSrc} = this;
    return (
        <Host>
          <div class="card" >
            <a href={targetUrl} class="tumb">
              <img src={imageSrc} alt=""></img>
            </a>
            <div class="details">
              <h4>{name}</h4>
            </div>
          </div>
        </Host>
    );
  }

}
