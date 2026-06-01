import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('dom-element')
export class DomElement extends LitElement {
  static override styles = css`
    p {
      color: #94a3b8;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    a {
      color: #818cf8;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }
    a:hover {
      color: #a5b4fc;
      text-decoration: underline;
    }
  `;

  override render() {
    return html`
      <p>I'm a DOM element. This is my shadow DOM!</p>
      <a href="https://lit.dev" target="_blank" rel="noopener">Learn Lit Element &rarr;</a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dom-element': DomElement;
  }
}
