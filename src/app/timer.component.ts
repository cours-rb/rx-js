import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subscription, timer} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'rx-timer',
  template: `
    <button (click)="toggleTimer()">
      {{ isRunning ? 'Stop': 'Start' }}
    </button>
    <p>
      {{ counter }} ms
    </p>
  `,
  styles: [
  ]
})
export class TimerComponent implements OnInit {
  counter: number = 0;
  isRunning = false;

  private timer$: Observable<number>;
  private sub?: Subscription;

  constructor() {
    this.timer$ = interval(100)
        .pipe(map(x => x * 100));
  }

  ngOnInit(): void {
  }

  toggleTimer() {
    if (!this.isRunning) {
      this.sub = this.timer$.subscribe(x => this.counter = x)
    } else {
      this.sub?.unsubscribe()
    }

    this.isRunning = !this.isRunning;
  }
}
