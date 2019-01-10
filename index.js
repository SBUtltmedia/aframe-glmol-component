
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
    width: {type: 'number', default: 20},
    height: {type: 'number', default: 20},
    depth: {type: 'number', default: 1},
    color: {type: 'color', default: '#AAA'},
    molId: {type: 'string', default: 'pdb:2POR'},
    hetatmMode: {type: 'string', default: ''}, //stick, ballAndStick, ballAndStick2, sphere, icosahedron, line
    mainchain: {type: 'string', default: 'ribbon'}, //thickRibbon, ribbon, strand, cylinderHelix, chain, tube, bonds
    doNotSmoothen: {type: 'boolean', default: false}, //checked, unchecked
    base: {type: 'string', default: 'nuclLine'}, //nuclStick, nuclLine, nuclPolygon
    line: {type: 'string', default: ''}, //checked, unchecked
    color: {type: 'string', default: ''}, //chainbow, chain, ss, b, polarity
    nb: {type: 'string', default: 'nb_sphere'}, //nb_sphere, nb_cross
    cell: {type: 'boolean', default: false}, //checked, unchecked
    biomt: {type: 'boolean', default: true}, //checked, unchecked
    packing: {type: 'boolean', default: true}, //checked, unchecked
    symopHetatms: {type: 'boolean', default: true} //checked, unchecked
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

    // Create geometry.

    var glmol= new GLmol(data);
    //glmol.drawHETATM(data.hetatm);
    // glmol.defineRepresentation()
    // Set mesh on entity.


    el.setObject3D('mesh',  glmol.returnModelGroup() );
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

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
