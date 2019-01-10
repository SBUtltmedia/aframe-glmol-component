var path = require('path');
module.exports = {
  resolve: {
    alias: {
      Lib: path.resolve(__dirname, 'src/js/')
    }
  }
};
