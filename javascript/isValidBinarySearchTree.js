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

// function isBinarySearchTree(headNode) {
//   const stack = [[headNode, null]];
//   while (stack.length > 0) {
//     const el = stack.pop();
//     const currNode = el[0];
//     const treeSide = el[1];
//     const currValue = currNode.value;
//     const headValue = headNode.value;

//     if (currNode.left !== null) {
//       if (treeSide !== null) {
//         if (treeSide === 'left') {
//           if (currValue > headValue) {
//             return false;
//           } else if (currValue <= headValue) {
//             return false;
//           }
//         }
//       }
//       stack.push([currNode.left, treeSide || 'left']);
//     }

//     if (currNode.right !== null) {
//       if (treeSide !== null) {
//         if (treeSide === 'left') {
//           if (currValue > headValue) {
//             return false;
//           } else if (currValue <= headValue) {
//             return false;
//           }
//         }
//       }
//       stack.push([currNode.right, treeSide || 'right']);
//     }
//   }
//   return true;
// }


function isBinarySearchTree(treeRoot) {

  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {

      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {

      // This node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  // If none of the nodes were invalid, return true
  // (At this point we have checked all nodes)
  return true;
}
// function isBinarySearchTree(headNode) {
//   const stack = [[headNode, null]];
//   const headNodeValue = headNode.value;

//   while (stack.length > 0) {
//     const el = stack.pop();
//     const node = el[0];
//     let side = el[1];

//     // check if the left and right are lesser than the current node.
//     if (node.left !== null) {
//       if (node.left.value >= node.value) {
//         return false;
//       }
//       if (side === 'left') {
//         if (node.left.value >= headNodeValue) {
//           return false
//         }
//       }
//       if (side === 'right') {
//         if (node.left.value < headNodeValue) {
//           return false
//         }
//       }
//       stack.push([node.left, side || "left"])
//     }

//     if (node.right !== null) {
//       if (node.right.value < node.value) {
//         return false;
//       }
//       if (side === 'left') {
//         if (node.right.value >= headNodeValue) {
//           return false
//         }
//       }
//       if (side === 'right') {
//         if (node.right.value < headNodeValue) {
//           return false
//         }
//       }
//       stack.push([node.right, side || 'right']);
//     }
//   }
//   return true
// }


// Tests

// let desc = 'valid full tree';
// let treeRoot = new BinaryTreeNode(50);
// let leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(10);
// leftNode.insertRight(40);
// let rightNode = treeRoot.insertRight(70);
// rightNode.insertLeft(60);
// rightNode.insertRight(80);
// assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
