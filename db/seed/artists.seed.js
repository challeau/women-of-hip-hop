const ObjectID = require("mongodb").ObjectID;

const artists = [
  {
    name: "Nicki Minaj",
    picture:
      "https://hiphopcorner.fr/wp-content/uploads/2021/09/nicki-minaj-VMA.jpeg",
    miniBio:
      "Onika Tanya Maraj-Petty, known professionally as Nicki Minaj, is a Trinidadian-born rapper, singer, and songwriter. She is known for her musical versatility, sharp lyrics, animated flow in her rapping, and her alter egos and accents.",
    flagSong: "https://www.youtube.com/watch?v=4JipHEz53sU",
    creatorId: new ObjectID(0),
  },
  {
    name: "Megan Thee Stallion",
    picture:
      "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2020-09-02-at-9-12-48-am-1599063179.png?crop=0.957xw:0.629xh;0.00680xw,0.104xh&resize=640:*",
    miniBio:
      "Megan Jovon Ruth Pete, known professionally as Megan Thee Stallion, is an American rapper. Originally from Houston, Texas, she first garnered attention when videos of her freestyling became popular on social media platforms such as Instagram.",
    flagSong: "https://www.youtube.com/watch?v=lEIqjoO0-Bs",
    creatorId: new ObjectID(0),
  },
  {
    name: "Lauryn Hill",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lauryn_Hill_Kongsberg_Jazzfestival_2019_%28221758%29_%28cropped%29.jpg",
    miniBio:
      "Lauryn Noelle Hill is an American rapper, singer, songwriter, and actress. She is often regarded as one of the greatest rappers of all time, as well as being one of the most influential musicians of her generation.",
    flagSong: "https://www.youtube.com/watch?v=cE-bnWqLqxE",
    creatorId: new ObjectID(0),
  },
  {
    name: "Doja Cat",
    picture:
      "https://img.nrj.fr/JXExFV1E4DE6ekrk-vDMvCbZB5w=/medias/2020/10/doja-photo_5f92a2b857c27.jpg",
    miniBio:
      "Doja Cat is an American rapper, singer, songwriter, and record producer. Her career began almost accidentally with the release of “Mooo!” which became a viral meme song and launched her into popularity. Her career continued to grow, heavily aided by her active social media presence on apps like TikTok and Instagram. She is also known for her genre-bending and often out-of-the-box music style and artistic abilities.   ",
    flagSong:
      "https://www.youtube.com/watch?v=yxW5yuzVi8w&ab_channel=dojacatVEVO",
    creatorId: new ObjectID(0),
  },
  {
    name: "Cardi B",
    picture:
      "https://www.booska-p.com/wp-content/uploads/2022/07/Cardi-B-Volee-Visu-News.jpg",
    miniBio:
      "Cardi B is a Grammy Award-winning American rapper, social media personality and former reality star whose commercial debut single, 'Bodak Yellow', surged to the top of the music charts in 2017.",
    flagSong: "https://www.youtube.com/watch?v=xTlNMmZKwpA&ab_channel=CardiB",
    creatorId: new ObjectID(0),
  },
  {
    name: "Lil Kim'",
    picture:
      "https://lastfm.freetls.fastly.net/i/u/770x0/a688307c2ee13a81e6754f804d7cba18.jpg#a688307c2ee13a81e6754f804d7cba18",
    miniBio:
      "Lil' Kim found success as a female rapper starting in the mid '90s, with her explicit lyrics and sexy persona under the guidance of hip-hop icon Biggie Smalls.",
    flagSong:
      "https://www.youtube.com/watch?v=G6yC4KXGixE&ab_channel=UPROXXVideo",
    creatorId: new ObjectID(0),
  },
  {
    name: "Missy Elliott",
    picture:
      "https://media.gettyimages.com/photos/american-rapper-missy-elliott-in-december-2002-in-miami-florida-picture-id1367040393?s=612x612",
    miniBio:
      "Missy Elliott is a Grammy Award-winning singer, rapper, songwriter and producer who achieved great success with hits like 'Get Ur Freak On,'' 'Work It' and 'Loose Control.",
    flagSong:
      "https://www.youtube.com/watch?v=FPoKiGQzbSQ&ab_channel=MissyElliott",
    creatorId: new ObjectID(0),
  },
  {
    name: "Latto",
    picture:
      "https://static.wixstatic.com/media/2463b2_2fa9d071a80d41a585db2dbd924eb61b~mv2.jpg/v1/fill/w_1000,h_695,al_c,q_90,usm_0.66_1.00_0.01/2463b2_2fa9d071a80d41a585db2dbd924eb61b~mv2.jpg",
    miniBio:
      "Alyssa Michelle Stephens (born December 22, 1998), professionally known as Latto or Big Latto (formerly known as Mulatto), is an American rapper.",
    flagSong:
      "https://www.youtube.com/watch?v=T8GpG8C0YzA&ab_channel=LattoVEVO",
    creatorId: new ObjectID(0),
  },
  {
    name: "Rico Nasty",
    picture:
      "https://media.pitchfork.com/photos/5b27c372eded5567e42607da/1:1/w_600/100000x100000-999.jpg",
    miniBio:
      "Maria-Cecilia Rico Nasty is a professional name for Simone Kelly (born May 7, 1997), an American rapper and vocalist from Maryland.",
    flagSong:
      "https://www.youtube.com/watch?v=CLq1Tt93Rxw&ab_channel=RicoNasty",
    creatorId: new ObjectID(0),
  },
  {
    name: "Eve",
    picture:
      "https://www.interviewmagazine.com/wp-content/uploads/2020/11/sept_scan0003-scaled.jpg",
    miniBio:
      "Eve is a rapper and actress, best known for hits like 'What Ya Want,' 'Gangsta Lovin,' and her Grammy-winning 'Let Me Blow Ya Mind' collab with Gwen Stefani.",
    flagSong: "https://www.youtube.com/watch?v=Wt88GMJmVk0&ab_channel=EveVEVO",
    creatorId: new ObjectID(0),
  },
  {
    name: "Cupcakke",
    picture: "https://www.thefamouspeople.com/profiles/thumbs/cupcakke-2.jpg",
    miniBio:
      "Elizabeth Eden Harris, better known as “Cupcakke,” is an American rapper and singer from Chicago. She rose to fame through her music videos and vulgar lyrics.",
    flagSong:
      "https://www.youtube.com/watch?v=aRO4wQ4SVTk&ab_channel=HipHop%2FR%26BLyrics",
    creatorId: new ObjectID(0),
  },
  {
    name: "M.I.A",
    picture:
      "https://cdn.britannica.com/20/129220-050-8DA158E3/MIA-2009.jpg?w=400&h=300&c=crop",
    miniBio:
      "M.I.A., byname of Maya Arulpragasam, (born July 18, 1975, London, England), British-born Sri Lankan rapper who achieved global fame with politically charged dance music.",
    flagSong: "https://www.youtube.com/watch?v=ewRjZoRtu0Y&ab_channel=MIAVEVO",
    creatorId: new ObjectID(0),
  },
  {
    name: "Flo Milli",
    picture: "https://upload.wikimedia.org/wikipedia/commons/6/6e/FLO-MILLI_HIGH_DEF_CROP.jpg",
    miniBio:
      "Notable for her raw and honest vocals, she is a rap artist who returned to the limelight with the single 'Beef FloMix' in early 2019 after dropping the song 'Not Friendly' ten months prior.",
    flagSong:
      "https://www.youtube.com/watch?v=gBxUNRemnks&ab_channel=FloMilliVEVO",
    creatorId: new ObjectID(0),
  },
  {
    name: "Saweetie",
    picture: "https://www.famousbirthdays.com/faces/saweetie-image.jpg",
    miniBio:
      "Rapper, songwriter, actress and designer with a debut single titled 'Icy Grl'. ",
    flagSong:
      "https://www.youtube.com/watch?v=x5c2iRHlAHA&ab_channel=OfficialSaweetie",
    creatorId: new ObjectID(0),
  },
  {
    name: "Diam's",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Diam%27s_2009.jpg",
    miniBio:
      "Mélanie Georgiades, better known by her stage name Diam's, is a French rapper of Greek Cypriot origin.",
    flagSong: "https://www.youtube.com/watch?v=OC2R5fvJsxo",
    creatorId: new ObjectID(0),
  },
  {
    name: "Meryl",
    picture:
      "https://www.letelegramme.fr/images/2021/09/24/meryl-sera-a-l-affiche-de-cette-premiere-soiree-du-festival_5915319_676x529p.jpg?v=1",
    miniBio:
      "Meryl née Cindy Elismar le 24 septembre 1995 au Lamentin en Martinique et ayant grandi au Saint-Esprit, est une chanteuse, compositrice, rappeuse et toplineuse française.",
    flagSong: "https://www.youtube.com/watch?v=2Eehtz8NPQQ",
    creatorId: new ObjectID(0),
  },
  {
    name: "Lady Leshurr",
    picture:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/23AC/production/_123823190_gettyimages-538205300.jpg",
    miniBio:
      "Melesha Katrina O'Garro BEM, known profesionally as Lady Leshurr, is a British rapper, singer, songwriter and producer. She is known for her Queen's Speech series of freestyles, the fourth of which became popular in 2016.",
    flagSong: "https://www.youtube.com/watch?v=FyodeHtVvkA",
    creatorId: new ObjectID(0),
  },
  {
    name: "Ivorian Doll",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ivorian_Doll.jpg",
    miniBio:
      'Vanessa Mahi, known professionally as Ivorian Doll, is a British rapper and Internet personality of Ivorian descent. She made her debut in collaboration with Abigail Asante, releasing singles under the name Abigail x Ivorian Doll. She has since gone on to release several singles as a solo artist, such as "Rumours".',
    flagSong: "https://www.youtube.com/watch?v=fcxXIchi7XQ",
    creatorId: new ObjectID(0),
  },
  {
    name: "Shay",
    picture: "https://i.scdn.co/image/ab6761610000e5eb6ee2342ad78d050eaf9d930c",
    miniBio:
      'Vanessa Lesnicki, known by her stage name Shay, is a Belgian francophone rapper. After a collaboration with Booba in 2011, she has released many songs, notably a hit with "XCII" on the label 92i. Her debut album Jolie Garce was released on 2 December 2016 and was certified gold.',
    flagSong: "https://www.youtube.com/watch?v=phh1aZvUyN8",
    creatorId: new ObjectID(0),
  },
  {
    name: "Aya Nakamura",
    picture: "https://i.scdn.co/image/ab6761610000e5ebd097fdbe85a171a0483a2611",
    miniBio:
      'Aya Coco Danioko, known by her stage name Aya Nakamura, is a French-Malian pop singer. She is best known for her hit song "Djadja". She was born in Bamakom Mali and emigrated to France with her family, growing up in Aulnay-sous-Bois. Coming from a family of griots, she is the oldest of five siblings.',
    flagSong: "https://www.youtube.com/watch?v=iPGgnzc34tY",
    creatorId: new ObjectID(0),
  },
];

module.exports = artists;
