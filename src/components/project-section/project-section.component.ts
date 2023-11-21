import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Project } from '../projects/projects.component'

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css',
})
export class ProjectSectionComponent {
  @Input() project: Project | null = null
}
