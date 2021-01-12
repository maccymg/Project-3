import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  second_name: { type: String, required: true },
  web_name: { type: String, required: true },
  team: { type: Number, required: true },
  element_type: { type: Number, required: true },
  squad_number: { type: Number },
  photo: { type: String },
})

export default mongoose.model('Player', playerSchema)