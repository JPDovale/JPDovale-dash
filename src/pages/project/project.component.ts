import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FallingLettersComponent } from '../../components/falling-letters/falling-letters.component'
import { ActivatedRoute } from '@angular/router'
import { Store, StoreModule } from '@ngrx/store'

import {
  Project,
  ProjectInitialState,
} from '../../store/projects/project.reducer'

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FallingLettersComponent, StoreModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectName: string | null = null

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ project: ProjectInitialState }>,
  ) {}

  project: Project | null = null

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get('name')
    })

    this.store
      .select('project')
      .subscribe((project) => (this.project = project))
  }
}
