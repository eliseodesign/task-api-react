const express = require('express')
// const { logger } = require('./src/middlewares/logger')
// const { noFount } = require('./src/middlewares/noFount')

const app = express()

app.use(express.json())
// app.use(logger)

const notesRouter = require('./routes/noteRouter')
app.use('/api/notes', notesRouter)

const home = require('./controllers/defaut')
app.get('/', home)

module.exports = app
