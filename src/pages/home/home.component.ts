import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FallingLettersComponent } from '../../components/falling-letters/falling-letters.component'
import { HeaderComponent } from '../../components/header/header.component'
import { ProjectsComponent } from '../../components/projects/projects.component'
import { client } from '../../config/prismicConfig'
import { asHTML } from '@prismicio/client'

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
export class HomeComponent implements OnInit {
  aboutMe = ''
  open = false

  async ngOnInit(): Promise<void> {
    const { results } = await client.getByType('about_me')
    const { content } = results[0]?.data

    this.aboutMe = asHTML(content) ?? ''
  }
}
