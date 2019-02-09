import { html, render } from 'lit-html';
import '@webcomponents/template/template.js';
import '@webcomponents/shadydom/src/shadydom.js';
import '@webcomponents/custom-elements/src/custom-elements.js';
import '@webcomponents/shadycss/entrypoints/scoping-shim.js';

import './hello-world.js';

render(html`<hello-world></hello-world>`, document.body);
