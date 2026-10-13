import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-counter', standalone: true,
  template: `
    <p>Compteur : {{ count() }}</p>
    <button (click)="increment()">+1</button>
    <button (click)="reset()">Remise à zéro</button>
  `
})
export class Counter {
  readonly count = signal(0);
  increment() {
    this.count.update(n => n + 1);
  }
  reset() { this.count.set(0); }
}