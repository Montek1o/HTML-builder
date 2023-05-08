const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
        if (err) {
          console.log(err);
        }
        if (stats.isFile()) {
          let name = path.parse(file.name).name;
          let type = path.parse(file.name).ext.slice(1);
          let size = (stats.size / 1024).toFixed(3);
          console.log(`${name} - ${type} - ${size}kb`);
        }
      })
    })
  }
})