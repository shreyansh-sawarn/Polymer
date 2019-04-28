
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './special-image.js'

class ContainerElement extends PolymerElement {
  
    static get properties() {
      return {
        isPressed: {
          type: Boolean
        }
      }
    }
  static get template() {

    return html`
      <style> 
        * {
          font-family: 'Open Sans';
          text-align: center;
        }
        span#text {
          display: block;
          font-size: 20px;
        }
        span {
          display: block;
          font-size: 30px;
          color: #1976d2;
          margin: 30px;
        }

      </style>
      <div>
        <span>Click Image</span>
        <special-image pressed="{{isPressed}}"></special-image>
        <span id="text">[[_handleNewText(isPressed)]]</span>
      </div>
      <hr>
    `;
  }
  _handleNewText(pressed) {
    return pressed ? 'you pressed': 'not pressed';
  }
}

customElements.define('container-element', ContainerElement);

        