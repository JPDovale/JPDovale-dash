/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { client } from '../../config/prismicConfig'
import { asDate, asHTML } from '@prismicio/client'
import { ProjectSectionComponent } from '../project-section/project-section.component'
import { Project } from '../../store/projects/project.reducer'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectSectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []

  async ngOnInit(): Promise<void> {
    const projectsOfApi = (await client.getAllByType('project')) as unknown[]

    const projectsMapped: Project[] = projectsOfApi.map((project: any) => ({
      uid: project.uid,
      cover: {
        url: project.data.cover.url,
        alt: project.data.cover.alt,
      },
      createdAt: asDate(project.first_publication_date),
      description: asHTML(project.data.description),
      preview: asHTML(project.data.preview),
      githubUrl: project.data.github.url,
      name: project.data.name[0].text,
      techs: project.data.techs.map((tech: any) => ({
        name: tech.name,
        icon: {
          url: tech.icon.url,
          alt: tech.icon.alt,
        },
      })),
    }))

    this.projects = projectsMapped
  }
}
