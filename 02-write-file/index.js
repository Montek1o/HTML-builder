const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const output = fs.createWriteStream(path.resolve('02-write-file', 'text.txt'));

stdout.write('Hello! Write your text:\n');

stdin.on('data', data => {
  if (data.toString().trim() != 'exit') {
    output.write(data);
  } else {
    stdout.write('Goodbye!');
    process.exit();
  }
});

process.on('SIGINT', () => {
  stdout.write('Goodbye!');
  process.exit();
});
