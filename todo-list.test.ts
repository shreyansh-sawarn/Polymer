import { describe, it, expect, beforeEach } from 'vitest';
import './todo-list.js';
import { TodoList } from './todo-list.js';

describe('TodoList Element', () => {
  let element: TodoList;

  beforeEach(async () => {
    element = document.createElement('todo-list') as TodoList;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('initializes with default todo items', () => {
    expect(element.items).toHaveLength(2);
    expect(element.items[0].value).toBe('Bananas');
    expect(element.items[1].value).toBe('Milk');
  });

  it('can add a new todo item', async () => {
    const input = element.shadowRoot?.getElementById('item-input') as HTMLInputElement;
    const button = element.shadowRoot?.querySelector('button');

    expect(input).not.toBeNull();
    expect(button).not.toBeNull();

    input.value = 'Buy Apples';
    button?.click();

    await element.updateComplete;

    expect(element.items).toHaveLength(3);
    expect(element.items[2].value).toBe('Buy Apples');
    expect(element.items[2].checked).toBe(false);
  });

  it('can delete a todo item', async () => {
    const todoItem = element.shadowRoot?.querySelector('todo-item');
    expect(todoItem).not.toBeNull();

    // Trigger delete-todo event on the todo-list
    todoItem?.dispatchEvent(
      new CustomEvent('delete-todo', {
        detail: { uid: 1 },
        bubbles: true,
        composed: true,
      })
    );

    await element.updateComplete;

    expect(element.items).toHaveLength(1);
    expect(element.items[0].uid).toBe(2); // Only 'Milk' should remain
  });
});
