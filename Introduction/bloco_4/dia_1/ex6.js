let chess;

chess.toLowerCase();

switch (chess) {
  case pawn:
    console.log('Any direction, one square, even diagonals');
    break;
  case rook:
    console.log('Any direction, but straight and only forward');
    break;
  case bishop:
    console.log('Any direction, but diagonal and only forward');
    break;
  case knight:
    console.log('An L shape, in a 3x2 grid, any orientation');
    break;
  case queen:
    console.log('Any direction, diagonally and straight, but only forward');
    break;
  case king:
    console.log('Any direction, one square, but can do a check and checkmate and end the game');
    break;
  default:
    console.log('ERROR');
}


