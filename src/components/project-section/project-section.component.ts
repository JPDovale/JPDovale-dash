import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterModule } from '@angular/router'
import {
  Project,
  ProjectInitialState,
} from '../../store/projects/project.reducer'
import { Store } from '@ngrx/store'
import { setProjectAction } from '../../store/projects/project.actions'

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css',
})
export class ProjectSectionComponent {
  @Input() project: Project | null = null

  constructor(
    private store: Store<{ project: ProjectInitialState }>,
    private router: Router,
  ) {}

  loadProjectPage() {
    this.store.dispatch(setProjectAction({ project: this.project! }))
    this.router.navigate(['/projects', this.project?.name])
  }
}
