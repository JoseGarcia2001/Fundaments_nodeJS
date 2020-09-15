const sharp = require('sharp');

sharp('./icon.png')
  .resize(100)
  .grayscale()
  .toFile('resized.png')