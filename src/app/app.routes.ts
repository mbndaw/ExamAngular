import { Routes } from '@angular/router';
import { AddLutteurComponent } from './add-lutteur/add-lutteur.component';
import { EditLutteurComponent } from './edit-lutteur/edit-lutteur.component';
import { ListLutteurComponent } from './list-lutteur/list-lutteur.component';

export const routes: Routes = [
    {path: 'lutteur/ajouter', component:AddLutteurComponent},
    {path: 'lutteur/modifier', component:EditLutteurComponent},
    {path: 'lutteur', component:ListLutteurComponent},
    {path: '',redirectTo:'lutteur',pathMatch: 'full'}
];
