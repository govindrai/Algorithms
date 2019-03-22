Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.


Q: Please find an optimal solution given a scrambled 15-puzzle.

A 15 puzzle is a 4 by 4 grid with 15 blocks. There will be one block which is empty. A valid move consists of moving one of the adjacent blocks into the empty space. The goal is to get the puzzle to the solved state.

Solved state (with the empty space represented with an "XX"):

+--+--+--+--+
| 1| 2| 3| 4|
+--+--+--+--+
| 5| 6| 7| 8|
+--+--+--+--+
| 9|10|11|12|
+--+--+--+--+
|13|14|15|XX|
+--+--+--+--+


From this example state of the puzzle, there are 4 possible next moves:

Initial


Move Down
Move Up
Move Right
Move Left
+--+--+--+--+
| 7|10|14| 3|
+--+--+--+--+
| 6| 9|11| 4|
+--+--+--+--+
| 8| 2|XX|13|
+--+--+--+--+
| 5| 1|12|15|
+--+--+--+--+




=>
 +--+--+--+--+
 | 7|10|14| 3|
 +--+--+--+--+
 | 6| 9|XX| 4|
 +--+--+--+--+
 | 8| 2|11|13|
 +--+--+--+--+
 | 5| 1|12|15|
 +--+--+--+--+
+--+--+--+--+
| 7|10|14| 3|
+--+--+--+--+
| 6| 9|11| 4|
+--+--+--+--+
| 8| 2|12|13|
+--+--+--+--+
| 5| 1|XX|15|
+--+--+--+--+
+--+--+--+--+
| 7|10|14| 3|
+--+--+--+--+
| 6| 9|11| 4|
+--+--+--+--+
| 8|XX| 2|13|
+--+--+--+--+
| 5| 1|12|15|
+--+--+--+--+
+--+--+--+--+
| 7|10|14| 3|
+--+--+--+--+
| 6| 9|11| 4|
+--+--+--+--+
| 8| 2|13|XX|
+--+--+--+--+
| 5| 1|12|15|
+--+--+--+--+


You will be given a 4 by 4 array of arrays and will return the state of the puzzle at each move from the given input to the solved state. You can assume that the puzzle given will be solvable.

Example input:
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, -1, 14, 15]]

Example output:
[
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, -1, 14, 15]], // input
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, -1, 15]], // intermediate
  // more intermediates...
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, -1]]  // solved
]

// Looking for the least amount of moves
// empty state === -1


// at any stage of the puzzle we can move up/down/left/right, we will try all the moves
// after every move, check the state of the puzzle, if it is correct, return that puzzle


function isGameSolved(game) {
	const solvedState = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, -1]];
	// code to go here that returns equality
	
}

function copyGame(game) {
	// returns a copy of the game
}

function getSwapLocation(emptyLocation, direction) {
	// return swap location
	const directions = {
	up: [-1, 0],
	down: [1, 0],
	right: [0, 1],
	left: [0, -1]
}
}

                                    // array of two coordinates
function unscramble(game, emptyLocation) {
	
// first check if puzzle is already solved;
if (isGameSolved(game)) {
	return game;
}

// TODO: check for edges


const directions = [‘up’, ‘down’, ‘right’,’left’];
for (let i =0; i < 4; i++) {
	const gameCopy = copyGame(game);
//let’s move up
// coordinates of where we want to swap with
const locationToSwap = getSwapLocation(emptyLocation, directions[i]
// this is what we want to swap into the empty state
const elementToSwap = gameCopy[locationToSwap[0]][locationToSwap[1];
// swap element
gameCopy[emptyLocation[0]][emptyLocation[1]] = elementToSwap;
gameCopy[locationToSwap[0]][locationToSwap[1]] = -1
unscramble(gameCopy, locationToSwap)
}
}
