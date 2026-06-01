import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('simple-dom-element')
export class SimpleDomElement extends LitElement {
  static override styles = css`
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

  override render() {
    return html`
      <h2>Cliché, Hello World!</h2>
      <div>I'm a simple DOM element</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-dom-element': SimpleDomElement;
  }
}
