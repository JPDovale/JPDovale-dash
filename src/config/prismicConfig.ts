import * as Prismic from '@prismicio/client'
import { environment } from '../environments/environment.prod'

const repoName = environment.repoName
const accessToken = environment.accessToken

const routes = [
  {
    type: 'project',
    path: '/',
  },
]

export const client = Prismic.createClient(repoName, {
  accessToken,
  routes,
  fetchOptions: {
    cache: 'force-cache',
  },
})
