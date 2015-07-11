// My solution for chess-board
function chessGrid(width, height) {
  var even = ' ', odd = '#', down = '\n';
  for (var h = 0; h <= height; h++) {
    // 'line' must be defined inside this loop to initiate
    var row = '';
    for (var w=0; w<=width; w++) {
      if (w % 2 === 0) {
        row +=even;
      } else {
        row +=odd;
      }
    }
    row +=down;
    console.log(row);
    if (even === '#') {
      var even = ' ', odd = '#';
    } else {
      var even = '#', odd = ' ';
    }
  }
}

//test
chessGrid(10,10);
