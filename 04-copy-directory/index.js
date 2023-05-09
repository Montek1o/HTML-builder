const fs = require('fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, 'files');
const copyFolderPath = path.join(__dirname, 'files-copy');

async function copyDir() {
  await fs.rm(copyFolderPath, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(copyFolderPath);

  const files = await fs.readdir(folderPath, { withFileTypes: true });

  for (const file of files) {
    if (file.isFile()) {
      const originalFilePath = path.join(folderPath, file.name);
      const copyFilePath = path.join(copyFolderPath, file.name);
      await fs.copyFile(originalFilePath, copyFilePath);
    }
  }
}

copyDir();