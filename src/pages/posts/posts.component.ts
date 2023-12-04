import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FallingLettersComponent } from '../../components/falling-letters/falling-letters.component'
import { PostsSectionComponent } from '../../components/posts-section/posts-section.component'

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FallingLettersComponent, PostsSectionComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {}
