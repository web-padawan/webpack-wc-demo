import { LitElement, html, css } from 'lit-element';

customElements.define('hello-world', class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;

        --slightly-grey: #e2e2e2;
      }

      div {
        padding: 20px;
        background: var(--slightly-grey);
      }
    `
  }

  render() {
    return html`
      <div>Hello world!</div>
    `;
  }
});
