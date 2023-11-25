import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FallingLettersComponent } from '../../components/falling-letters/falling-letters.component'
import { ActivatedRoute } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { client } from '../../config/prismicConfig'
import { asDate, asHTML } from '@prismicio/client'

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
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FallingLettersComponent, StoreModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectId: string | null = null
  project: Project | null = null

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('uid')
    })

    const projectReceived = (await client.getByUID(
      'project',
      this.projectId ?? '',
    )) as any

    this.project = {
      uid: projectReceived.uid,
      cover: {
        url: projectReceived.data.cover.url,
        alt: projectReceived.data.cover.alt,
      },
      createdAt: asDate(projectReceived.first_publication_date),
      description: asHTML(projectReceived.data.description),
      preview: asHTML(projectReceived.data.preview),
      githubUrl: projectReceived.data.github.url,
      name: projectReceived.data.name[0].text,
      techs: projectReceived.data.techs.map((tech: any) => ({
        name: tech.name,
        icon: {
          url: tech.icon.url,
          alt: tech.icon.alt,
        },
      })),
    }
  }
}
