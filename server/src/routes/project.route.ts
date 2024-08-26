import { addNewProject } from '@controllers/project.controller'
import { Router } from 'express'

const projectRouter = Router()

projectRouter.post('/new', addNewProject)

export default projectRouter
