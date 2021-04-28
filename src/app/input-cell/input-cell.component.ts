import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-cell',
  templateUrl: './input-cell.component.html',
  styleUrls: ['./input-cell.component.css'],
})
export class InputCellComponent implements OnInit {
  constructor() {}

  /*   @HostBinding("@state")
  state: "opened" | "closed" = "closed"; */

  @Input()
  get message(): string {
    return this._message;
  }
  set message(message: string) {
    this._message = message;
    //  this.state = "opened";
  }
  private _message: string;

  /*   @Output()
  closed = new EventEmitter(); */

  ngOnInit(): void {}
}
