import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterModule } from '@angular/router'
import { Project } from '../../pages/project/project.component'

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css',
})
export class ProjectSectionComponent {
  @Input() project: Project | null = null

  constructor(private router: Router) {}

  loadProjectPage() {
    this.router.navigate(['/projects', this.project?.uid])
  }
}
