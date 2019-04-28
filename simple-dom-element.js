import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class SimpleDomElement extends PolymerElement {

  // A getter which is called to render the template
  static get template() {
    // return a HTML template literal.
    return html`
      <style>
        * {
          font-family: 'Open Sans';
        }
        h2 {
          color: #1976d2;
          margin: 30px;
          font-size: 60px;
        }
        div {
          margin: 30px;
          font-size: 20px;
        }
      </style>
      <h2>Cliché, Hello World!</h2>
      <div>I'm a simple DOM element</div>
    `;
  }
}

customElements.define('simple-dom-element', SimpleDomElement);