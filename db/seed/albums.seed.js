const ObjectID = require('mongodb').ObjectID;

const albums = [
  {
    name: "Pink Friday",
    picture:
      "https://urbanislandz.com/wp-content/uploads/2010/10/Nicki-Minaj-Pink-Friday-Album-Cover1.jpg",
    songs: [
      "I'm The Best",
      "Roman's Revenge (featuring Eminem)",
      "Did It On 'Em",
      "Right Thru Me",
      "Fly (featuring Rihanna)",
      "Save Me",
      "Moment 4 Life (featuring Drake)",
      "Check It Out (featuring will.i.am)",
      "Blazin (featuring Kanye West)",
      "Here I Am",
      "Dear Old Nicki",
      "Your Love",
      "Last Chance (featuring Natasha Bedingfield)",
      "Super Bass",
      " Blow Ya Mind",
      "Muny",
      "Girls Fall Like Dominoes [Bonus Track]",
    ],
    features: [
      "Eminem",
      "Rihanna",
      "Drake",
      "will.i.am",
      "Kanye West",
      "Natasha Bedingfield",
    ],
    creatorId: new ObjectID("0")
  },
  {
    name: "Traumazine",
    picture:
      "https://cdn-www.konbini.com/files/2022/08/Megan-Thee-Stallion-Traumazine.jpg",
    songs: [
      "NDA",
      "Ungrateful feat. Key Glock",
      "Not Nice",
      "Budget feat. Latto",
      "Her",
      "Gift & Curse",
      "Ms. Nasty",
      "Who Me feat. Pooh Shiesty",
      "Red Wine",
      "Scary feat. Rico Nasty",
      "Anxiety",
      "Flip Flop",
      "Consistency feat. Jhené Aiko",
      "Star feat. Lucky Daye",
      "Pressurelicious feat. Future",
      "Plan B",
      "Southside Royalty Freestyle feat. Sauce Walka, Big Pokey, and Lil Keke",
      "Sweetest Pie feat. Dua Lipa",
    ],
    features: [
      "Key Glock",
      "Latto",
      "Pooh Shiesty",
      "Rico Nasty",
      "Jhené Aiko",
      "Lucky Daye",
      "Future",
      "Sauce Walka",
      "Big Pokey",
      "Lil Keke",
      "Dua Lipa",
    ],
    creatorId: new ObjectID("0")    
  },
];

module.exports = albums;
