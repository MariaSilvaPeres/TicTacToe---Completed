import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: [],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';

  constructor() {}

  ngOnInit(): void {}
}
