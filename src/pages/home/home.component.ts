import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FallingLettersComponent } from '../../components/falling-letters/falling-letters.component'
import { HeaderComponent } from '../../components/header/header.component'
import { ProjectsComponent } from '../../components/projects/projects.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FallingLettersComponent,
    HeaderComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
