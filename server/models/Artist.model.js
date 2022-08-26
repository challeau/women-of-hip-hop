const { Schema, model } = require('mongoose');

const artistSchema = new Schema({
  'name': {
    type: String,
    unique: true,
    required: [true, 'Please provide the artist\'s name.']
  },
  'picture': {
    type: String,
    required: [true, 'Please provide a link to the artist\'s picture.']
  },
  'miniBio': {
    type: String,
    required: [true, 'Please provide a bio of the artist.']
  },
  'albums': {
    type: [Schema.Types.ObjectId],
    ref: 'Album',
    required: [true, 'Please provide a list of albums.']
  },
  'FlagSong': {
    type: String,
    required: [true, 'Please provide a link to one of the artist\'s songs.']
  },
  'creatorId': {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Artist = model('Artist', artistSchema);

module.exports = Artist;
