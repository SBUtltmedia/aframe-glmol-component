
import { GLmol } from 'Lib/GLmol';

/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * GLMol  component for A-Frame.
 */
AFRAME.registerComponent('glmol', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
    color: {type: 'color', default: '#AAA'},
    molId: {type: 'string', default: 'pdb:2POR'},
    color: {type: 'string', default: 'chainbow'}, //Color by: chainbow, chain, ss, b, polarity
    mainchain: {type: 'string', default: 'thickRibbon'}, //Main chain as: thickRibbon, ribbon, strand, cylinderHelix, chain, tube, bonds, none
    base: {type: 'string', default: 'nuclLine'}, //Nucleic acid bases as: nuclStick, nuclLine, nuclPolygon
    line: {type: 'boolean', default: false}, //Side chains as lines: true, false
    doNotSmoothen: {type: 'boolean', default: true}, //Don't smooth beta-sheets in ribbons: true, false
    nb: {type: 'string', default: 'none'}, //Non-bonded atoms as: nb_sphere, nb_cross, none
    hetatmMode: {type: 'string', default: 'sphere'}, //Small molecules (HETATMS) as: stick, ballAndStick, ballAndStick2, sphere, icosahedron, line, none
    cell: {type: 'boolean', default: false}, //Unit cell: true, false
    biomt: {type: 'boolean', default: false}, //Biological assembly: true, false
    packing: {type: 'boolean', default: false}, //Crystal packing: true, false
    symopHetatms: {type: 'boolean', default: false} //Show HETATMS in symmetry mates: true, false
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: true,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var data = this.data;
    var el = this.el;
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    this.glmol= new GLmol(this.data);
    // Set mesh on entity.

  this.glmol.returnModelGroup().then(
  (modelGroup)=>{
    this.el.setObject3D('mesh', modelGroup);

this.el.setAttribute('scale', `${1/this.glmol.largestSideLength} ${1/this.glmol.largestSideLength} ${1/this.glmol.largestSideLength}`);

  })
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});
