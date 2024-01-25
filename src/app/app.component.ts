import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddLutteurComponent } from './add-lutteur/add-lutteur.component';
import { EditLutteurComponent } from './edit-lutteur/edit-lutteur.component';
import { ListLutteurComponent } from './list-lutteur/list-lutteur.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,AddLutteurComponent,EditLutteurComponent,ListLutteurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exam.angular';
}
