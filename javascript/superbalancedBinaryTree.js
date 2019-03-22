class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(treeRoot) {
  const stack = [[treeRoot, 0]];
  let maxHeight = null;
  while (stack.length) {
    const el = stack.pop();
    const node = el[0];
    const height = el[1];

    if (node.right) {
      stack.push([node.right, height + 1])
    }

    if (node.left) {
      stack.push([node.left, height + 1])
    }

    if (node.left === null && node.right === null) {
      if (maxHeight === null) {
        maxHeight = height;
      } else {
        if (Math.abs(maxHeight - height) > 1) {
          return false
        }
        if (height > maxHeight) {
          maxHeight = height;
        }
      }
    }
  }
  return true
}


// function isBalanced(treeRoot) {
//   let minHeight;
//   let maxHeight;
//   const stack = [[treeRoot, 1]];
//   while (stack.length > 0) {
//     const [currentNode, currentHeight] = stack.pop();
//     if (currentHeight > maxHeight + 1 || currentHeight < minHeight - 1) {
//       return false;
//     }

//     if (currentNode.right !== null) {
//       stack.push([currentNode.right, currentHeight + 1]);
//     }
//      if (currentNode.left !== null) {
//       stack.push([currentNode.left, currentHeight + 1]);
//     } 
//     if (currentNode.left === null && currentNode.right === null) {
//       if (!maxHeight) {
//         minHeight = currentHeight;
//         maxHeight = currentHeight;
//       } else {
//         if (currentHeight > maxHeight + 1 || currentHeight < minHeight - 1) {
//           return false;
//         }
//         if (currentHeight < minHeight) {
//           minHeight = currentHeight;
//         }
//         if (currentHeight > maxHeight) {
//           maxHeight = maxHeight;
//         }
//       }
//     }
//   }

//   return true;
// }

// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both leaves at the same depth';
treeRoot = new BinaryTreeNode(3);
leftNode = treeRoot.insertLeft(4);
leftNode.insertLeft(1);
rightNode = treeRoot.insertRight(6);
rightNode.insertRight(9);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by one';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by two';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'three leaves total';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both subtrees superbalanced';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8).insertLeft(7);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'only one node';
treeRoot = new BinaryTreeNode(1);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'linked list tree';
treeRoot = new BinaryTreeNode(1);
treeRoot
  .insertRight(2)
  .insertRight(3)
  .insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
