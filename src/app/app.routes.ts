import { Routes } from '@angular/router'
import { HomeComponent } from '../pages/home/home.component'
import { ProjectComponent } from '../pages/project/project.component'
import { ProjectsComponent } from '../pages/projects/projects.component'
import { PostsComponent } from '../pages/posts/posts.component'
import { PostComponent } from '../pages/post/post.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:uid', component: PostComponent },
  { path: 'projects/:uid', component: ProjectComponent },
]
