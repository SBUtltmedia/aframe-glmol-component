## aframe-glmol-component

[![Version](http://img.shields.io/npm/v/aframe-glmol-component.svg?style=flat-square)](https://npmjs.org/package/aframe-glmol-component)
[![License](http://img.shields.io/npm/l/aframe-glmol-component.svg?style=flat-square)](https://npmjs.org/package/aframe-glmol-component)

A port of GLMol based on https://github.com/alexmasselot/GLmol

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-glmol-component/dist/aframe-glmol-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity glmol="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-glmol-component
```

Then require and use.

```js
require('aframe');
require('aframe-glmol-component');
```
