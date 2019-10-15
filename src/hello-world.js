import { LitElement, html, css } from 'lit-element';
import './juicy-ace-editor-npm.min.js';

customElements.define('hello-world', class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `
  }

  render() {
    return html`
      <juicy-ace-editor></juicy-ace-editor>
    `;
  }
});
