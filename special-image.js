import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class SpecialImage extends PolymerElement {

  static get properties() {
    return {
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    }
  }

  static get template() {
    return html`
    <style>
      :host img {
        opacity: 1;
      }
      :host([pressed]) img {
        opacity: 0.5;
      }
      img {
        width: 80%;
      }
    </style>
    <img src="https://cdn.pixabay.com/photo/2017/11/06/20/09/abstract-2924732_960_720.jpg">
    `;
  }
   ready() {
    super.ready();
    this.shadowRoot.querySelector('img').addEventListener('click', this.imageClickHandler.bind(this));
  }
  imageClickHandler() {
    this.pressed = !this.pressed;
  }
}

customElements.define('special-image', SpecialImage);