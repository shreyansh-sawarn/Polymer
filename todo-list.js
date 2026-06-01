import { LitElement, html, css } from 'lit';
import './todo-item.js';

let UID = 3;

class TodoList extends LitElement {
  static get properties() {
    return {
      items: { type: Array }
    };
  }

  constructor() {
    super();
    this.items = [
      { value: "Bananas", uid: 1, checked: false },
      { value: "Milk", uid: 2, checked: false }
    ];
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        background: rgba(30, 41, 59, 0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
      .header {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, #a5b4fc, #818cf8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .items-container {
        margin-bottom: 1.5rem;
        max-height: 300px;
        overflow-y: auto;
        padding-right: 4px;
      }
      /* Custom Scrollbar */
      .items-container::-webkit-scrollbar {
        width: 6px;
      }
      .items-container::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.02);
        border-radius: 9999px;
      }
      .items-container::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 9999px;
      }
      
      .input-group {
        display: flex;
        gap: 0.5rem;
      }
      input {
        flex-grow: 1;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        color: #fff;
        font-family: inherit;
        font-size: 1rem;
        outline: none;
        transition: all 0.2s ease;
      }
      input:focus {
        border-color: #6366f1;
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
      }
      input::placeholder {
        color: #64748b;
      }
      
      button {
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-family: inherit;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
      }
      button:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4);
        filter: brightness(1.1);
      }
      button:active {
        transform: translateY(1px);
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="header">Todo List</div>
        <div class="items-container">
          ${this.items.map(item => html`
            <todo-item 
              .value="${item.value}" 
              .uid="${item.uid}" 
              .checked="${item.checked}"
              @checked-changed="${(e) => this.itemCheckedChanged(item.uid, e.detail.value)}"
              @delete-todo="${this.deleteTodoHandler}"
            ></todo-item>
          `)}
        </div>
        <div class="input-group">
          <input 
            type="text" 
            id="item-input" 
            placeholder="Add a new task..." 
            @keypress="${this.inputKeyPress}"
          >
          <button @click="${this.addItem}">Add</button>
        </div>
      </div>
    `;
  }

  addItem() {
    const input = this.shadowRoot.getElementById('item-input');
    const value = input.value.trim();
    if (value) {
      UID += 1;
      this.items = [...this.items, { value, uid: UID, checked: false }];
      input.value = '';
    }
  }

  itemCheckedChanged(uid, checked) {
    this.items = this.items.map(item => 
      item.uid === uid ? { ...item, checked } : item
    );
  }

  deleteTodoHandler(e) {
    const uid = e.detail.uid;
    this.items = this.items.filter(item => item.uid !== uid);
  }

  inputKeyPress(e) {
    if (e.key === 'Enter') {
      this.addItem();
    }
  }
}

customElements.define('todo-list', TodoList);
