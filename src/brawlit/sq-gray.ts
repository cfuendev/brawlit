import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
// https://fonts.google.com/specimen/Lilita+One
// https://interfaceingame.com/screenshots/brawl-stars-main-menu/

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('brawlit-sq-gray')
export class BrawLitSqGray extends LitElement {

  @property({type: String})
  imgsrc: String = "https://raw.githubusercontent.com/overwolfmobile/brawl-stars-assets/master/assets/game-modes/event_mode_raid%403x.png";

  @property({type: Number})
  fontsize: number = 20;

  @property({type: Number})
  bordersize: number = this.fontsize/10;

  render() {
    return html`
      <div class="brawl-btn-cont" style="
        max-width: ${this.fontsize*5}px;
        max-height: ${this.fontsize*2.6}px;
      ">
      <img src="${this.imgsrc}" style="
            position: absolute;
            z-index: 1;
            top: -17px;
            left: 25px;
            width: ${this.fontsize*2.5}px;
            ">
        <div class="brawl-text" style="
          font-size: ${this.fontsize}px;
          filter: drop-shadow( 0 ${this.fontsize/13}px 0 black );
          letter-spacing: -0.6px;
          -webkit-text-stroke-width: ${this.fontsize/25}px;
        ">
          <span>
            <slot/>
          <span>
        </div>
        <div class="brawl-btn" style="
          width: ${this.fontsize*5}px;
          height: ${this.fontsize*2.6}px;
          border: ${this.bordersize}px solid;
        ">
          <div style="
            background-color: #52516e;
            border-radius: 4px 4px 0 0;
            filter: drop-shadow( 0 -1.5px 0 black );
            height: ${this.fontsize/9}px;"></div>
          <div style="
            background-color: #252d3f;
            border-radius: 0px 0px 4px 4px;
            filter: drop-shadow( 0 1.5px 0 black );
            height: ${this.fontsize/7.5}px;"></div>
        </div>
      </div>
    `
  }

  static styles = css`
    .brawl-btn-cont {
      position: relative;
      cursor: pointer;
    }
    .brawl-btn {
      background-color: #333c50;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 6px;
      transform: skewX(-4deg);
      filter: drop-shadow( 0 5px 0 rgb(0,0,0,0.4) );
    }
    .brawl-btn div{
      width: 100%;
      z-index: 1;
    }
    .brawl-text {
      font-family: 'Lilita One', cursive;
      -webkit-text-stroke-color: black;
      color: white;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: end;
      justify-content: center;
    }
  `
  constructor(){
    super()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'brawlit-sq-gray': BrawLi
  }
}
