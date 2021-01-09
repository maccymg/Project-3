import mongoose from 'mongoose'
// import Player from './player.js'

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  goalkeeper: { type: mongoose.Schema.ObjectId, ref: 'Player', required: true  },
  defenders: [{ type: mongoose.Schema.ObjectId, ref: 'Player', required: true  }],
  midfielders: [{ type: mongoose.Schema.ObjectId, ref: 'Player', required: true  }],
  attackers: [{ type: mongoose.Schema.ObjectId, ref: 'Player', required: true  }],
})

export default mongoose.model('Team', teamSchema)

// owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },