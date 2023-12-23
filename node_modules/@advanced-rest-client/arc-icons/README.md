# arc-icons

[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-icons.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-icons)

[![Tests and publishing](https://github.com/advanced-rest-client/arc-icons/actions/workflows/deployment.yml/badge.svg)](https://github.com/advanced-rest-client/arc-icons/actions/workflows/deployment.yml)

A set of icons for Advanced REST Client.

## Usage

### Installation

```sh
npm install @advanced-rest-client/arc-icons --save
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/arc-icons/arc-icon.js';
    </script>
  </head>
  <body>
    <arc-icon icon="add"></arc-icon>
  </body>
</html>
```

### In a LitElement

```js
import { LitElement, html, svg } from 'lit-element';
import '@advanced-rest-client/arc-icons/arc-icon.js';
import * as Icons from '@advanced-rest-client/arc-icons';

class SampleElement extends LitElement {
  render() {
    return html`
    <!-- using an icon property -->
    <arc-icon icon="add"></arc-icon>
    <!-- passing an icon template as a child-->
    <arc-icon>${Icons.add}</arc-icon>
    <!-- using own container-->
    <span class="icon">${Icons.add}</span>
    <!-- using custom icon -->
    <arc-icon>${Icons.iconWrapper(svg`...`)}</arc-icon>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/arc-icons
cd arc-icons
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```
