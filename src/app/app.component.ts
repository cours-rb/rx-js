import { Component } from '@angular/core';

@Component({
  selector: 'rx-root',
  template: `
<h1>
  Welcome to {{title}}!
</h1>
<rx-timer></rx-timer>
`,
  styles: []
})
export class AppComponent {
  title = 'rx-js';
}
