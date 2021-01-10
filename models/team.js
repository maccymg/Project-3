import mongoose from 'mongoose'
// import Player from './player.js'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 100 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
}, {
  timestamps: true,
})

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  goalkeeper: { type: mongoose.Schema.ObjectId, ref: 'Player', required: true  },
  defenders: [{ type: mongoose.Schema.ObjectId, ref: 'Player', required: true  }],
  midfielders: [{ type: mongoose.Schema.ObjectId, ref: 'Player', required: true  }],
  attackers: [{ type: mongoose.Schema.ObjectId, ref: 'Player', required: true  }],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
  comments: [commentSchema],
})

export default mongoose.model('Team', teamSchema)
