import { Routes } from '@angular/router'
import { HomeComponent } from '../pages/home/home.component'
import { ProjectComponent } from '../pages/project/project.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:name', component: ProjectComponent },
]
