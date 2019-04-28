/*
 * Directions: This is only for your reference please follow the exercises.
 * 
 **/

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'

// Define the class for a new element called DomElement
class DomElement extends PolymerElement {

  // every class must have template function which will get rendered.
  static get template () {
    return html`
      <p>I'm a DOM element. This is my shadow DOM!</p>

      <!-- TODO: Try adding some other html elements inside the
           template. For example, add <h1>A heading!</h1> or
           <a href="stuff.html">A link!</a>
      -->
    `;
  }
}

// Register the new element with the browser, otherwise it won't show.
customElements.define('dom-element', DomElement);
