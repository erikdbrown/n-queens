/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var solution = new Board({n: n});

  for(var i = 0; i < n; i++){
    solution.togglePiece(i,i);
  }

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // create a new Board(n)
  var solutionBoard = new Board({n: n});
  var solutionCount = 0;

  var findSolution = function(potentialSolution, row) {
    row = row || 0;
    // toggle at the given position
    for (var column = 0; column < n; column++) { // loop through from 0 to n - 1
      potentialSolution.togglePiece(row, column); // toggle the position
      if (!potentialSolution.hasAnyRooksConflicts()) { // if there there are no conflicts
        if (row === n - 1) { // if this is the last row
          solutionCount++; // increase the count
          if (column < n - 1) { // if is this is the last row, but not the last column
            potentialSolution.togglePiece(row, column); // toggle back so that it can continue to the next column
          }
        } else { // this is not the last row
          row++; // increase row
          findSolution(potentialSolution, row); // run findSolution
        }
      } else { // if there are conflicts
        potentialSolution.togglePiece(row, column); // toggle back, continue to next column
      }
    }
  };

  findSolution(solutionBoard)

  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
