import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer.component';
import { CounterComponent } from './counter.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CounterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
