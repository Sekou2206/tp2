import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  taches: any[] = [];

  constructor() {
    if (typeof localStorage !== 'undefined') {
      let texte = localStorage.getItem('taches');
      if (texte) {
        this.taches = JSON.parse(texte);
      }
    }
  }

  faites() {
    let total = 0;
    for (let t of this.taches) {
      if (t.faite) {
        total = total + 1;
      }
    }
    return total;
  }

  pourcentage() {
    if (this.taches.length == 0) {
      return 0;
    }
    return Math.round((this.faites() * 100) / this.taches.length);
  }
}