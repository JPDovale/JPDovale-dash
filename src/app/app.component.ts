import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { FallingLettersComponent } from '../components/falling-letters/falling-letters.component'
import { HeaderComponent } from '../components/header/header.component'
import { ProjectsComponent } from '../components/projects/projects.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FallingLettersComponent,
    HeaderComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JPDovale-dash'
}
