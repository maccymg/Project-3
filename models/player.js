import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  second_name: { type: String, required: true },
  web_name: { type: String, required: true },
  team: { type: String, required: true },
  position: { type: String, required: true },
  team_abv: { type: String },
  squad_number: { type: Number },
  image: { type: String },
})

export default mongoose.model('Player', playerSchema)