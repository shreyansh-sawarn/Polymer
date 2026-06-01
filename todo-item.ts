import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('todo-item')
export class TodoItem extends LitElement {
  @property({ type: String, reflect: true })
  value = '';

  @property({ type: Number, reflect: true })
  uid!: number;

  @property({ type: Boolean, reflect: true })
  checked = false;

  static override styles = css`
    :host {
      display: block;
    }
    .todo-item {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      transition: all 0.2s ease;
    }
    .todo-item:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.1);
      transform: translateX(4px);
    }

    /* Custom Checkbox */
    .checkbox-container {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      user-select: none;
      margin-right: 0.75rem;
    }
    .checkbox-container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    .checkmark {
      height: 1.25rem;
      width: 1.25rem;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkbox-container:hover input ~ .checkmark {
      border-color: #818cf8;
      background-color: rgba(99, 102, 241, 0.1);
    }
    .checkbox-container input:checked ~ .checkmark {
      background-color: #6366f1;
      border-color: #6366f1;
    }
    .checkmark:after {
      content: '';
      display: none;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      margin-bottom: 2px;
    }
    .checkbox-container input:checked ~ .checkmark:after {
      display: block;
    }

    .text {
      font-size: 1rem;
      color: #f8fafc;
      transition: all 0.2s ease;
      flex-grow: 1;
    }

    .todo-item.completed .text {
      text-decoration: line-through;
      color: #64748b;
    }

    /* Delete Button */
    .delete-btn {
      background: none;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .delete-btn:hover {
      background: rgba(239, 68, 68, 0.1);
      color: #f87171;
    }
    svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
  `;

  override render() {
    return html`
      <div class="todo-item ${this.checked ? 'completed' : ''}">
        <label class="checkbox-container">
          <input type="checkbox" .checked="${this.checked}" @change="${this.toggleHandler}" />
          <span class="checkmark"></span>
        </label>
        <span class="text">${this.value}</span>
        <button class="delete-btn" @click="${this.deleteHandler}" aria-label="Delete todo">
          <svg viewBox="0 0 24 24">
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </button>
      </div>
    `;
  }

  toggleHandler(e: Event) {
    this.checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(
      new CustomEvent('checked-changed', {
        detail: { value: this.checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  deleteHandler() {
    this.dispatchEvent(
      new CustomEvent('delete-todo', {
        detail: {
          type: 'delete',
          uid: this.uid,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-item': TodoItem;
  }
}
