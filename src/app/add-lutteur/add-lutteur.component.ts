import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-lutteur',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './add-lutteur.component.html',
  styleUrl: './add-lutteur.component.css'
})
export class AddLutteurComponent {

  constructor(private http:HttpClient){
    
  }
  valider(){
    console.log('lutteur',this.lutteur)
    this.http.get("http://localhost/backend/add.php?titre="+this.lutteur.titre+" &contenu= "+this.lutteur.contenu+" &realise="+this.lutteur.realise)
    .subscribe((response:any)=>{
      console.log("reponse=",response)
    })
  }
  

lutteur: any = {
  nom: '',
  poids: '',
  taille: '',
  age: '',
  image: ''
  
};
}
