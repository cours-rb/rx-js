import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'rx-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <p>
      {{ counter$ | async }}
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    const counter = this.counter$.getValue();
    this.counter$.next(counter + 1);
  }
}
