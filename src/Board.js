// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex) {
      // declare a variable and assign to the row
      var thisRow = this.get(rowIndex);
      // declare another variable and set equal to result of reduce row
      var sum = thisRow.reduce(function(accumulator, space) {
        return accumulator + space;
      }, 0);
      // if sum is greater than 1
      if (sum >= 1) {
        // return true
        return true;
      }
      // return false
      return false;
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      // DIDN'T GET IT TO WORK

      // decalare a variable set equal to false
      var rowConflict = false;
      // for loop to access each row
      for (var i = 0; i < this.rows(length) - 1; i++) {
        // update variable to hasRowConflictAt, pass in row value
        console.log('Row Conflict: ', hasRowConflictAt(i))
        rowConflict = hasRowConflictAt(i);
        // if variable is true
        if (rowConflict === true) {
          return rowConflict;
        }
      }
      // return variable
      return rowConflict; // fixme
    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      var sum = 0;
      this.rows().forEach(function(indRow) {
        sum += indRow[colIndex];
      })
      return sum > 1 ? true : false;
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      // decalare a variable set equal to false
      // for loop to access each row
        // update variable to hasRowConflictAt, pass in row value
        // if variable is true
          // break from for loop
      // return variable
      return false; // fixme
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict

    // add to row, add to column
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      // declare variable columnIndex equals parameter
      var columnIndex = majorDiagonalColumnIndexAtFirstRow;
      // sum variable equal to 0
      var sum = 0;
      var matrix = this.rows();
      // iterate through array of arrays
      // this.rows().forEach(function(row) {
      for (var index = 0; index < matrix.length; index++) {
        var row = matrix[index];
        // check if column index is negative
        if (columnIndex < 0) {
          // continue
          continue;
        } else {
          // add thisrow[columnIndex] to sum
          sum += row[columnIndex];
          // increment columnIndex
          columnIndex++;
        }
      }

      return sum > 1 ? true : false;

      // USE FOR REFACTORING
      // if variable is negative
        // row[absolute value of variable][0]
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      // get length of size
      // var size = this.rows.length;
      // for (var index = size + 1; index  < Math.abs(size) - 1; index++) {
      //   console.log(index);
      // }
      return false;
    },

    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict

    // start from max, subtract row, subtract column
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      // declare variable columnIndex equals parameter
      // var columnIndex = minorDiagonalColumnIndexAtFirstRow;
      // // sum variable equal to 0
      // var sum = 0;
      // var matrix = this.rows();
      // // iterate through array of arrays
      // //this.rows().forEach(function(row) {
      // for (var index = 0; index < matrix.length; index++) {
      //   var row = matrix[index];
      //   // check if column index is negative
      //   if (columnIndex > n - 1) {
      //     // continue
      //     continue;
      //   } else {
      //     // add thisrow[columnIndex] to sum
      //     sum += row[columnIndex];
      //     // increment columnIndex
      //     columnIndex--;
      //   }
      // };
      // return sum > 1 ? true : false;

      return false; // fixme
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {

      return false; // fixme
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
