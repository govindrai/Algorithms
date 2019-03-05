const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

function findDupesInFileSystem(root, seenFiles = {}) {
  const directoryFiles = fs.readdirSync(root, { withFileTypes: true });
  for (let i = 0; i < directoryFiles.length; i++) {
    const fileName = directoryFiles[i].name;
    const filePath = path.format({ dir: root, base: fileName });
    if (directoryFiles[i].isDirectory()) {
      findDupesInFileSystem(filePath, seenFiles);
    } else if (directoryFiles[i].isFile()) {
      const fileContents = fs.readFileSync(filePath);
      const hash = crypto
        .createHash('sha256')
        .update(fileContents)
        .digest('base64');
      if (seenFiles[hash]) {
        // TODO: first check file to see what is newer and store that as the dupe
        seenFiles[hash].push(filePath);
      } else {
        seenFiles[hash] = [filePath];
      }
    }
  }
  const dupes = [];

  for (const fileHash in seenFiles) {
    const files = seenFiles[fileHash];
    if (files.length > 1) {
      dupes.push(seenFiles[fileHash]);
    }
  }

  return dupes;
}

// console.log(findDupesInFileSystem('/Users/govindrai/Desktop'));

function findDupesInFileSystemIterative(startingDirectory) {
  const seenFiles = {};
  const stack = [startingDirectory];
  while (stack.length > 0) {
    const directory = stack.pop();
    const directoryFiles = fs.readdirSync(directory, { withFileTypes: true });
    for (let i = 0; i < directoryFiles.length; i++) {
      const fileName = directoryFiles[i].name;
      const filePath = path.format({ dir: directory, base: fileName });
      if (directoryFiles[i].isDirectory()) {
        stack.push(filePath);
      } else if (directoryFiles[i].isFile()) {
        const fileContents = fs.readFileSync(filePath);
        const hash = crypto
          .createHash('sha256')
          .update(fileContents)
          .digest('base64');
        if (seenFiles[hash]) {
          // TODO: first check file to see what is newer and store that as the dupe
          seenFiles[hash].push(filePath);
        } else {
          seenFiles[hash] = [filePath];
        }
      }
    }
  }

  const dupes = [];

  for (const fileHash in seenFiles) {
    const files = seenFiles[fileHash];
    if (files.length > 1) {
      dupes.push(seenFiles[fileHash]);
    }
  }

  return dupes;
}

// console.log(findDupesInFileSystemIterative('/Users/govindrai/Desktop'));

function readFileInChunks(filePath) {
  const fileDescriptor = fs.openSync(filePath, 'r');
  const fiftyBytesBuffer = Buffer.alloc(50);
  fs.readSync(fileDescriptor, fiftyBytesBuffer, 0, 50, 0);
  console.log(fiftyBytesBuffer.toString())
  console.log(fiftyBytesBuffer.toJSON())
  fs.readSync(fileDescriptor, fiftyBytesBuffer, 0, 50, 50);
  console.log(fiftyBytesBuffer.toString())
  fs.readSync(fileDescriptor, fiftyBytesBuffer, 0, 50, 150);
  console.log(fiftyBytesBuffer.toString())
  fs.readSync(fileDescriptor, fiftyBytesBuffer, 0, 50, 200);
  console.log(fiftyBytesBuffer.toString())
  fs.readSync(fileDescriptor, fiftyBytesBuffer, 0, 50, 250);
  console.log(fiftyBytesBuffer.toString())
  fs.closeSync(fileDescriptor)
}

readFileInChunks('/Users/govindrai/Desktop/stream/server.js')
2