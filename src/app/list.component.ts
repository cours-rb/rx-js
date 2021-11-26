import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'rx-list',
  template: `
    <button (click)="addValue()">Add Value</button>
    <ul>
      <li *ngFor="let item of list$ | async">{{ item }}</li>
    </ul>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {
  list$: BehaviorSubject<Array<string>>
      = new BehaviorSubject<Array<string>>([]);

  constructor() { }

  ngOnInit(): void {
  }

  addValue() {
    const list = this.list$.getValue();
    list.push('Value');

    this.list$.next(list);
  }
}
