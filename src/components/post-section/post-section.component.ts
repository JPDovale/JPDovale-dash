import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Post } from '../../pages/post/post.component'
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-post-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-section.component.html',
  styleUrl: './post-section.component.css',
})
export class PostSectionComponent {
  @Input() post: Post | null = null

  constructor(private router: Router) {}

  loadPostPage() {
    this.router.navigate(['/posts', this.post?.uid])
  }
}
