const fs = require('fs');

module.exports = {
  encodeBinaryImage(path) {
    const base64 = fs.readFileSync(path, 'base64');
    return Buffer.from(base64, 'base64');
  },
  decodeBinaryImage(name, buffer) {
    return fs.writeFileSync(name, buffer);
  },
};
