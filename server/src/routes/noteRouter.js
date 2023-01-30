const express = require('express')
const router = express.Router()

const {
  deleteNote,
  getOneNote,
  getNotes,
  sendNote
} = require('../controllers/notesController')

router.get('/', getNotes)
router.get('/:id', getOneNote)
router.delete('/:id', deleteNote)
router.post('/', sendNote)

module.exports = router
