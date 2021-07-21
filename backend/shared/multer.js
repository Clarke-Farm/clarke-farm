const multer = require('multer');

const path = require('path');

module.exports = function processImage() {
  const storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './uploads');
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  return multer({ storage });
};
