import { createAction, props } from '@ngrx/store'
import { Project } from './project.reducer'

export const setProjectAction = createAction(
  'setProjectAction',
  props<{ project: Project }>(),
)
