const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS','DFW','DEN','LAX','SAN']
  },
  arrival: Date
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American','Southwest','United'],
  },
  airport: {
    type: String,
    enum: ['AUS','DFW','DEN','LAX','SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Number,
    default: function() {
      return new Date().getFullYear() + 1;
    }
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});



module.exports = mongoose.model('Flight', flightSchema);