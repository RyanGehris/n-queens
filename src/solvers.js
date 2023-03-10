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

//

window.findNRooksSolution = function(n) {
  //var solution = undefined; //fixme
  // var newBoard = new Board({'n': n});
  // // outer for loop to get rows
  // newBoard.rows().forEach(function(row, rowIndex, collection) {
  //   // inner for loop to get columns
  //   row.forEach(function(column, columnIndex, collection) {
  //     // if rook can be placed at rindex cindex
  //     if (!newBoard.hasColConflictAt(columnIndex) && !newBoard.hasRowConflictAt(rowIndex)) {
  //       // place rook at indices (toggle)
  //       newBoard.togglePiece(rowIndex, columnIndex);
  //     }
  //   });
  // });

  var checkBoard = new Board([[0, 1, 1, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]])

  console.log(checkBoard.hasRowConflictAt(0));
  console.log(newBoard);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return newBoard.attributes;
};

// var newBoard = new Board();
// this.attributes
// newBoard.findNRooksSolution(n)

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  // declare an inner function parameter board
    // board = board || new Board();
    // check if solution
      // if true, update solution


  // innerFunc();

  // find solution inner function
  // recursive that stores all solutions in an array

  // findNRooksSolution()

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
