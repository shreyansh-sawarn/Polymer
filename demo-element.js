import { LitElement, html, css } from 'lit';

class DomElement extends LitElement {
  static get styles() {
    return css`
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
  }

  render() {
    return html`
      <p>I'm a DOM element. This is my shadow DOM!</p>
      <a href="https://lit.dev" target="_blank" rel="noopener">Learn Lit Element &rarr;</a>
    `;
  }
}

customElements.define('dom-element', DomElement);
