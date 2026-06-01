import { LitElement, html, css } from 'lit';
import './special-image.js';

class ContainerElement extends LitElement {
  static get properties() {
    return {
      isPressed: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.isPressed = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        text-align: center;
      }
      .title {
        font-size: 1.5rem;
        font-weight: 600;
        background: linear-gradient(135deg, #a5b4fc, #818cf8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .status-text {
        font-size: 1.1rem;
        font-weight: 500;
        color: #e2e8f0;
        background: rgba(255, 255, 255, 0.05);
        padding: 0.5rem 1.25rem;
        border-radius: 9999px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        min-width: 140px;
        transition: all 0.3s ease;
      }
      .status-text.pressed {
        background: rgba(99, 102, 241, 0.2);
        border-color: rgba(99, 102, 241, 0.4);
        box-shadow: 0 0 12px rgba(99, 102, 241, 0.2);
        color: #a5b4fc;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="title">Interactive Image</div>
        <special-image 
          .pressed="${this.isPressed}" 
          @pressed-changed="${(e) => this.isPressed = e.detail.value}"
        ></special-image>
        <div class="status-text ${this.isPressed ? 'pressed' : ''}">
          ${this._handleNewText(this.isPressed)}
        </div>
      </div>
    `;
  }

  _handleNewText(pressed) {
    return pressed ? 'You pressed' : 'Not pressed';
  }
}

customElements.define('container-element', ContainerElement);