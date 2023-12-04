import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostSectionComponent } from '../post-section/post-section.component'
import { Post } from '../../pages/post/post.component'
import { client } from '../../config/prismicConfig'
import { asHTML } from '@prismicio/client'

@Component({
  selector: 'app-posts-section',
  standalone: true,
  imports: [CommonModule, PostSectionComponent, PostSectionComponent],
  templateUrl: './posts-section.component.html',
  styleUrl: './posts-section.component.css',
})
export class PostsSectionComponent implements OnInit {
  posts: Post[] = []

  async ngOnInit(): Promise<void> {
    const postsOfApi = (await client.getAllByType('post')) as unknown[]

    const posts: Post[] = postsOfApi.map((post: any) => ({
      content: asHTML(post.data.content),
      preview: asHTML(post.data.preview),
      title: post.data.title[0].text,
      uid: post.uid,
    }))

    this.posts = posts
  }
}
