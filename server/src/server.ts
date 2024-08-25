import express from 'express'

import authRouter from '@routes/auth.route'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)

app.get('/health', (req, res) => {
  res.status(200).send('server is running')
})

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
  console.log(`server is listing on port ${PORT}`)
})
