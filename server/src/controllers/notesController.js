let notes = require('../notes')

exports.getNotes = (req, res) => {
  res.json(notes)
}

exports.getOneNote = (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find((note) => note.id === id)
  if (note) res.send(note)
  else res.status(404).end()
}

exports.deleteNote = (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter((note) => note.id !== id)
  console.log(notes)
  res.status(204).end()
}

exports.sendNote = (req, res) => {
  const note = req.body

  if (!note || !note.title) {
    return res.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notes.map((note) => note.id)
  const idMax = Math.max(...ids)
  console.log(typeof note.important)
  const newNote = {
    id: idMax + 1,
    title: note.title,
    content: note.content || '',
    // important: typeof note.important === undefined ? note.important : false,
    important: note.important || false,
    date: new Date().toISOString()
  }

  notes = [...notes, newNote]
  res.status(201).end()
}
