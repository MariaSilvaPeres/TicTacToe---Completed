import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  // represents the nine movements on the board, it's an array of strings
  squares: any;
  // help us determined the current player
  xIsNext: boolean;

  // the winner, it will be X or O.
  winner: string;

  // O construtor corre imediatamente, assim que esta classe é criada. Não vamos fazer nada a não ser inject our dependencies
  constructor() {}

  ngOnInit(): void {
    //setup the initial values when the new game starts:
    this.newGame();
  }

  // quando o player carrega no square, estes valores são separados num X ou O
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  //When you work with data on a component, you may want to compute a property based on one of the main pieces that changes.
  //Aqui temos uma propriedade "get".
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // method that will serve as the event handler, when user click on the button to make a move

  makeMove(idx: number) {
    //when that click happens, we'll check the index, if that square already been clicked, it won't do anything

    if (!this.squares[idx]) {
      // if it's empty or null, we'll splice the index of the square that user clicked on, with the current player that we've computed in this component and then we'll also toggle the X's next boolean to it's oposite value

      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
