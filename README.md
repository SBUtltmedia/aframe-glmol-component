## aframe-glmol-component

[![Version](http://img.shields.io/npm/v/aframe-glmol-component.svg?style=flat-square)](https://npmjs.org/package/aframe-glmol-component)
[![License](http://img.shields.io/npm/l/aframe-glmol-component.svg?style=flat-square)](https://npmjs.org/package/aframe-glmol-component)
![](Aframe-GlMol-Example.gif)



A port of GLMol based on https://github.com/biochem-fan/GLmol

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| ------------- | ---------------------------------------------------------------------------------------- | ----------- |
| width         | Width                                                                                    | 20          |
| height        | Weight                                                                                   | 20          |
| depth         | Depth                                                                                    | 1           |
| color         | Color                                                                                    | #AAA        |
| molId         | moleculeID from PDB or CID server                                                        | pdb:2POR    |
| color         | Color by: chainbow, chain, ss, b, polarity                                               | chainbow    |
| mainchain     | Main chain as: thickRibbon, ribbon, strand, cylinderHelix, chain, tube, bonds, none      | thickRibbon |
| base          | Nucleic acid bases as: nuclStick, nuclLine, nuclPolygon                                  | nuclLine    |
| line          | Side chains as lines                                                                     | false       |
| doNotSmoothen | Don't smooth beta-sheets in ribbons                                                      | true        |
| nb            | Non-bonded atoms as: nb_sphere, nb_cross, none                                           | none        |
| hetatmMode    | Small molecules as: stick, ballAndStick, ballAndStick2, sphere, icosahedron, line, none  | sphere      |
| cell          | Unit cell                                                                                | false       |
| biomt         | Biological assembly                                                                      | false       |
| packing       | Crystal packing                                                                          | false       |
| symopHetatms  | Show HETATMS in symmetry mates                                                           | false       |


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
    <a-entity glmol></a-entity>
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
