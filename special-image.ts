import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('special-image')
export class SpecialImage extends LitElement {
  @property({ type: Boolean, reflect: true })
  pressed = false;

  static override styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
    }
    img {
      width: 100%;
      max-width: 320px;
      border-radius: 12px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      display: block;
      margin: 0 auto;
    }
    img:hover {
      transform: scale(1.04);
      box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);
    }
    :host([pressed]) img {
      opacity: 0.45;
      filter: saturate(0.2) contrast(1.2);
      transform: scale(0.96);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `;

  override render() {
    return html`
      <img
        src="https://cdn.pixabay.com/photo/2017/11/06/20/09/abstract-2924732_960_720.jpg"
        @click="${this.imageClickHandler}"
        alt="Interactive artwork"
      />
    `;
  }

  imageClickHandler() {
    this.pressed = !this.pressed;
    this.dispatchEvent(
      new CustomEvent('pressed-changed', {
        detail: { value: this.pressed },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'special-image': SpecialImage;
  }
}
