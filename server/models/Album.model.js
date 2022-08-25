const { Schema, model } = require('mongoose');

const albumSchema = new Schema({
  'name': {
    type: String,
    required: [true, 'Please provide the album\'s name.']
  },
  'picture': {
    type: String,
    required: [true, 'Please provide a link to the album\'s picture.']
  },
  'songs': {
    type: [String],
    required: [true, 'Please provide the songs of the album.']
  }
});

const Album = model('Album', albumSchema);

module.exports = Album;
