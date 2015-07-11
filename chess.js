function chessGrid(width, height) {
var even = ' ', odd = '#', down = '\n';
  for (var h = 0; h <= height; h++) {
    // must be defined inside this loop
    var line = '';
    for (var w=0; w<=width; w++) {
      if (w % 2 === 0) {
        line +=even;
      } else {
        line +=odd;
      }
    }
    line +=down;
    console.log(line);
    if (even === '#') {
      var even = ' ', odd = '#';
    } else {
      var even = '#', odd = ' ';
    }
  }
}

//test
chessGrid(10,10);
