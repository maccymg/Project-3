import mongoose from 'mongoose'
// import Player from './player.js'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 80 },
  rating: { type: Number, required: true, unique: false, min: 1, max: 100 },
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

teamSchema.virtual('avgRating').get(function () {
  if (!this.comments.length) return 'Not Rated Yet'

  const avg = this.comments.reduce((sum, curr) => {
    return sum + curr.rating
  }, 0)
  return Math.round(avg / this.comments.length)
})

teamSchema.set('toJSON', { virtuals: true })

export default mongoose.model('Team', teamSchema)
