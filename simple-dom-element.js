import { LitElement, html, css } from 'lit';

class SimpleDomElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      h2 {
        color: #818cf8;
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      div {
        color: #94a3b8;
        font-size: 1.1rem;
      }
    `;
  }

  render() {
    return html`
      <h2>Cliché, Hello World!</h2>
      <div>I'm a simple DOM element</div>
    `;
  }
}

customElements.define('simple-dom-element', SimpleDomElement);