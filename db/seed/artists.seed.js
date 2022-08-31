const User = require("../../server/models/User.model.js");

async function getCreatorId() {
  await const user = User.findOne();
  return (user.id);
}

const artists = [
  {
    name: "Nicki Minaj",
    picture:
      "https://hiphopcorner.fr/wp-content/uploads/2021/09/nicki-minaj-VMA.jpeg",
    miniBio:
      "Onika Tanya Maraj-Petty, known professionally as Nicki Minaj, is a Trinidadian-born rapper, singer, and songwriter. She is known for her musical versatility, sharp lyrics, animated flow in her rapping, and her alter egos and accents.",
    albums: [],
    flagSong: "https://www.youtube.com/watch?v=4JipHEz53sU",
    creatorId: getCreatorId()
  },
  {
    name: "Megan Thee Stallion",
    picture:
      "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2020-09-02-at-9-12-48-am-1599063179.png?crop=0.957xw:0.629xh;0.00680xw,0.104xh&resize=640:*",
    miniBio:
      "Megan Jovon Ruth Pete, known professionally as Megan Thee Stallion, is an American rapper. Originally from Houston, Texas, she first garnered attention when videos of her freestyling became popular on social media platforms such as Instagram.",
    albums: [],
    flagSong: "https://www.youtube.com/watch?v=lEIqjoO0-Bs",
    creatorId: getCreatorId()
  },
  {
    name: "Lauryn Hill",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lauryn_Hill_Kongsberg_Jazzfestival_2019_%28221758%29_%28cropped%29.jpg",
    miniBio:
      "Lauryn Noelle Hill is an American rapper, singer, songwriter, and actress. She is often regarded as one of the greatest rappers of all time, as well as being one of the most influential musicians of her generation.",
    albums: [],
    flagSong: "https://www.youtube.com/watch?v=cE-bnWqLqxE",
    creatorId: getCreatorId()
  },
];

module.exports = artists;
