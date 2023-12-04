import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FallingLettersComponent } from '../../components/falling-letters/falling-letters.component'
import { HeaderComponent } from '../../components/header/header.component'
import { ProjectsComponent as ProjectsSectionComponent } from '../../components/projects/projects.component'

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    CommonModule,
    FallingLettersComponent,
    HeaderComponent,
    ProjectsSectionComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
