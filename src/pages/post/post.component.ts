
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FallingLettersComponent } from '../../components/falling-letters/falling-letters.component'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { client } from '../../config/prismicConfig'
import { asHTML } from '@prismicio/client'

export type Post = {
  uid: string
  title: string
  content: string | null
  preview: string | null
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FallingLettersComponent, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  postId: string | null = null
  post: Post | null = null

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {

    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('uid')
    })

    const postReceived = (await client.getByUID(
      'post',
      this.postId ?? '',
    )) as any

    this.post = {
      uid: postReceived.uid,
      title: postReceived.data.title[0].text,
      preview: asHTML(postReceived.data.preview),
      content:
        asHTML(postReceived.data.content) ?? '',
    }
  }
}
