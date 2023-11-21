/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { client } from '../../config/prismicConfig'
import { asDate, asHTML } from '@prismicio/client'
import { ProjectSectionComponent } from '../project-section/project-section.component'

export type Project = {
  uid: string
  name: string
  githubUrl: string
  createdAt: Date | null
  cover: {
    url: string
    alt?: string
  }
  description: string | null
  preview: string | null
  techs: {
    name: string
    icon: {
      url: string
      alt?: string
    }
  }[]
}

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
    const projects = (await client.getAllByType('project')) as unknown[]

    this.projects = projects.map((project: any) => ({
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
  }
}
