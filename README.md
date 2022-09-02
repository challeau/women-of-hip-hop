
# WOMEN-OF-HIP-HOP

> An Express app and MongoDB database of female rappers. Our goal is to help people discover loud artists and promote their relevance on the scene. For a mature audience :)
<br/>

## USER MODEL

### Fields:

- _id,
- username,
- password,

### Favorite list

Users can add/remove artists to/from their favorites.
<br/>

<br/>

## ARTIST MODEL

### Fields:

- _id
- name,
- picture,
- mini-bio (awards could be included here), 
- Flag song
- creatorId

### Data acquisition

Handmade seed of about 10-15 artists to start the project, if time allows we'll scrape more from Wikipedia.
<br/>
<br/>
### CRUD

**C** --> users can add new artists if they're not already present in the database<br/>
**R** --> users can request a list of all artist<br/>
**U** --> if the UserID matches the creatorId of an artist, they can update the artist document<br/>
**D** --> if the UserID matches the creatorId of an artist, they can delete the artist document<br/>
<br/>

### Shuffle feature

Users can read a random artist's document (with a populated album field) and a 30s snippet of their flag song. <br />
The song will be loaded thanks to a youtube iFrame or the Spotify API if time allows.
<br/>
<br/>

## ALBUM MODEL

### Fields:

- _id
- title,
- picture
- songs,
- artist
<br />

<br/>

## STEPS SEEDING
- seeding : 
``` bash
sudo service mongod start
node <seed.file>```


## BONUS

A cool frontend: black and gold, luxurious but minimalist.
