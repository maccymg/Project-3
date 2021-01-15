import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  webName: { type: String, required: true },
  team: { type: String, required: true },
  position: { type: String, required: true },
  teamAbv: { type: String },
  squadNumber: { type: Number },
  image: { type: String },
})

export default mongoose.model('Player', playerSchema)