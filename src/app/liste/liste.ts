import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste',
  imports: [FormsModule],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  titre = '';
  description = '';
  date = '';
  erreur = '';
  taches: any[] = [];
  tacheEnCours: any = null;
  aujourdhui = new Date().toLocaleDateString('fr-CA');

  constructor() {
    if (typeof localStorage !== 'undefined') {
      let texte = localStorage.getItem('taches');
      if (texte) {
        this.taches = JSON.parse(texte);
      }
    }
  }

  sauvegarder() {
    localStorage.setItem('taches', JSON.stringify(this.taches));
  }

  titreValide() {
    return this.titre.replaceAll(' ', '').length >= 3;
  }

  dateValide() {
    if (this.date != '' && this.date < this.aujourdhui) {
      this.erreur = 'La date ne peut pas être dans le passé';
      return false;
    }
    return true;
  }

  vider() {
    this.titre = '';
    this.description = '';
    this.date = '';
    this.erreur = '';
    this.tacheEnCours = null;
  }

  ajouter() {
    if (!this.dateValide()) {
      return;
    }
    this.taches.push({ titre: this.titre, description: this.description, date: this.date, faite: false });
    this.sauvegarder();
    this.vider();
  }

  modifier(t: any) {
    this.tacheEnCours = t;
    this.titre = t.titre;
    this.description = t.description;
    this.date = t.date;
    this.erreur = '';
  }

  enregistrer() {
    if (!this.titreValide()) {
      this.erreur = 'Le titre doit avoir au moins 3 caractères';
      return;
    }
    if (!this.dateValide()) {
      return;
    }
    this.tacheEnCours.titre = this.titre;
    this.tacheEnCours.description = this.description;
    this.tacheEnCours.date = this.date;
    this.sauvegarder();
    this.vider();
  }

  cocher(t: any) {
    t.faite = !t.faite;
    this.sauvegarder();
  }

  supprimer(t: any) {
    if (t == this.tacheEnCours) {
      this.vider();
    }
    this.taches.splice(this.taches.indexOf(t), 1);
    this.sauvegarder();
  }

  nbFaites() {
    let total = 0;
    for (let t of this.taches) {
      if (t.faite) {
        total = total + 1;
      }
    }
    return total;
  }
}