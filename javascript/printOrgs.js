// The organizational structure of a company is provided as a tree. The tree is structured as an object keyed by employee name. The value for a given key is a list of names of people who report to that employee. The list of reports may be empty.

// Example input:
const tree = {
  'Jane Mayer': ['Bob Richards', 'Sarah Lee', 'David Heinsburg'],
  'Bob Richards': ['Mary Ann Crouch'],
  'Sarah Lee': ['David Gibbly', 'Kelsey Hamming'],
  'David Heinsburg': [],
  'Mary Ann Crouch': ['Dave Bunt', 'James Ray'],
  'David Gibbly': [],
  'Kelsey Hamming': [],
  'Dave Bunt': [],
  'James Ray': [],
};

// Given the name of an employee, print all of the names in the part of the organization they lead.

// Examples:

// Input: "Jane Mayer"
// Output (in any order):
//  Jane Mayer
//  Bob Richards
//  Sarah Lee
//  David Heinsburg
//  Mary Ann Crouch
//  David Gibbly
//  Kelsey Hamming
//  Dave Bunt
//  James Ray

// Input: "Mary Ann Crouch"
// Output (in any order):
//  Mary Ann Crouch
//  Dave Bunt
//  James Ray

// Input: "James Ray"
// Output (in any order):
//  James Ray

function printSuborg(leader) {
  const queue = [tree[leader]];
  let positionInQueue = 0;

  console.log(leader);

  while (positionInQueue !== queue.length) {
    const subordinates = queue[positionInQueue];
    subordinates.forEach(subordinate => {
      console.log(subordinate);
      if (tree[subordinate]) {
        queue.push(tree[subordinate]);
      }
    });
    positionInQueue++;
  }
}

// printSuborg('Jane Mayer')
// printSuborg('Mary Ann Crouch')
// console.log()

// This needs to be queried frequently (say 120 times a second) for rendering.
// How would you improve it?

const cache = {};

function cachedPrintSuborg(leader) {
  // if the leader has already been calculated just fetch it from the cache
  if (cache[leader]) {
    console.log('HITTING CACHE');
    return console.log(cache[leader]);
  }

  const output = [];
  const queue = [tree[leader]];
  let positionInQueue = 0;

  output.push(leader);

  while (positionInQueue !== queue.length) {
    const subordinates = queue[positionInQueue];
    subordinates.forEach(subordinate => {
      output.push(subordinate);
      if (tree[subordinate]) {
        queue.push(tree[subordinate]);
      }
    });
    positionInQueue++;
  }
  cache[leader] = output.join('\n');
  console.log(cache[leader]);
}

// cachedPrintSuborg('Jane Mayer')
// console.log();

// cachedPrintSuborg('Mary Ann Crouch')
// console.log();

// cachedPrintSuborg('Jane Mayer')
// console.log();

// cachedPrintSuborg('Mary Ann Crouch')

// "Mary Ann Crouch": ["Dave Bunt", "James Ray"],
function cachedPrintSuborg2(leader) {
  // if the leader has already been calculated just fetch it from the cache
  if (cache[leader]) {
    console.log('HITTING CACHE');
    return console.log(cache[leader]);
  }

  // const output = [];
  const caches = {};
  const queue = [tree[leader]];
  let positionInQueue = 0;

  caches[leader] = [];
  // output.push(leader);

  while (positionInQueue !== queue.length) {
    const subordinates = queue[positionInQueue];
    // for each subordinate add them to all of existing keys
    subordinates.forEach(subordinate => {
      Object.keys(caches).forEach(key => {
        caches[key].push(subordinate);
      });
      // output.push(subordinate);
      if (tree[subordinate]) {
        queue.push(tree[subordinate]);
      }
    });

    subordinates.forEach(subordinate => {
      caches[subordinate] = [];
    });
    positionInQueue++;
  }

  // cache[leader] = output.join("\n")
  // console.log(cache[leader]);
  console.log(JSON.stringify(caches));
}
