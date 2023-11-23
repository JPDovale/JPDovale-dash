import { createReducer, on } from '@ngrx/store'
import { setProjectAction } from './project.actions'

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

export type ProjectInitialState = Project | null

export const initialState: ProjectInitialState = null

export const projectReducer = createReducer(
  initialState as ProjectInitialState,
  on(setProjectAction, (state, { project }) => {
    state = project
    return state
  }),
)
