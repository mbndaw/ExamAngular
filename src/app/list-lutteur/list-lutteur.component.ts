import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-lutteur',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule,FormsModule],
  templateUrl: './list-lutteur.component.html',
  styleUrl: './list-lutteur.component.css'
})
export class ListLutteurComponent {

  lutteur: any[] = [];

  constructor(private http: HttpClient) {
    this.get_lutteurs();
  }

  get_lutteurs() {
    this.http.get<any[]>("http://localhost/backend/get.php")
      .subscribe((reponse: any[]) => {
        console.log("Liste des lutteurs", reponse);
        this.lutteur = reponse; // Assigne la réponse à this.lutteurs pour afficher dans le DOM
      });
  }

  supprimerlutteur(lutteur: any) {
    const index = this.lutteur.indexOf(lutteur);
    if (index !== -1) {
      this.lutteur.splice(index, 1);
    }
  }

  modifierlutteur(lutteur: any) {
    lutteur.nom = 'Nouveau nom'; // Remplacer 'Nouveau titre' par le nouveau titre de la lutteur
    lutteur.age = 'Nouvelle age'; // Remplacer 'Nouveau contenu' par le nouveau contenu de la tâche
    lutteur.poids = 'Nouveau poids'; // Remplacer 'Nouveau contenu' par le nouveau contenu de la tâche
    lutteur.taille = 'Nouvelle taille'; // Remplacer 'Nouveau contenu' par le nouveau contenu de la tâche
    lutteur.image = 'Nouvelle i'; // Remplacer 'Nouveau contenu' par le nouveau contenu de la tâche

    console.log('lutteur modifié :', lutteur);
  }
}
