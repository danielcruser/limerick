const userData = [
  {email: 'Anon@email.com', password: '123'},
  {email: 'Arthur Buller@email.com', password: '123'},
  {email: 'Dixon Merrit@email.com', password: '123'},
  {email: 'Ogden Nash@email.com', password: '123'}
]
const poemData = [
  {title: 'Old Man'},
  {title: 'Young Lady'},
  {title: 'Bright'},
  {title: 'Pelican'},
  {title: 'Bugs'},
  {title: 'Young Person'},
  {title: 'Dover'},
  {title: 'Selina'},
  {title: 'Old Man'},
]

const lineData = [
  {
    text: 'There was an Old Man with a beard',
    spot: 0,
    poemId: 1,
    userId: 1
  },
  {
    text: "Who said, 'It is just as I feared!",
    spot: 1,
    poemId: 1,
    userId: 1
  },
  {
    text: 'Two Owls and a Hen',
    spot: 2,
    poemId: 1,
    userId: 1
  },
  {
    text: 'Four Larks and a Wren',
    spot: 3,
    poemId: 1,
    userId: 1
  },
  {
    text: 'Have all built their nests in my beard!',
    spot: 4,
    poemId: 1,
    userId: 1
  },
  {
    text: 'There was a Young Lady of Dorking,',
    spot: 0,
    poemId: 2,
    userId: 1
  },
  {
    text: 'Who bought a large bonnet for walking',
    spot: 1,
    poemId: 2,
    userId: 1
  },
  {
    text: 'But its colour and size',
    spot: 2,
    poemId: 2,
    userId: 1
  },
  {
    text: 'So bedazzled her eyes',
    spot: 3,
    poemId: 2,
    userId: 1
  },
  {
    text: 'That she very soon went back to Dorking.',
    spot: 4,
    poemId: 2,
    userId: 1
  },
  {
    text: 'There was a Young Person of Dorking,',
    spot: 0,
    poemId: 3,
    userId: 1
  },
  {
    text: 'Who bought a large stick for walking',
    spot: 1,
    poemId: 3,
    userId: 1
  },
  {
    text: 'There was a young lady named Bright,',
    spot: 0,
    poemId: 3,
    userId: 2
  },
  {
    text: 'Whose speed was far faster than light;',
    spot: 1,
    poemId: 3,
    userId: 2
  },
  {
    text: 'She started one day',
    spot: 2,
    poemId: 3,
    userId: 2
  },
  {
    text: 'In a relative way,',
    spot: 3,
    poemId: 3,
    userId: 2
  },
  {
    text: 'And returned on the previous night.',
    spot: 4,
    poemId: 3,
    userId: 2
  },
  {
    text: 'A wonderful bird is the pelican;',
    spot: 0,
    poemId: 4,
    userId: 3
  },
  {
    text: 'His beak can hold more than his belican.',
    spot: 1,
    poemId: 4,
    userId: 3
  },
  {
    text: 'He can hold in his beak',
    spot: 2,
    poemId: 4,
    userId: 3
  },
  {
    text: 'Enough food for a week,',
    spot: 3,
    poemId: 4,
    userId: 3
  },
  {
    text: 'Though I’m damned if I know how the helican!',
    spot: 4,
    poemId: 4,
    userId: 3
  },
  {
    text: 'A flea and a fly in a flue',
    spot: 0,
    poemId: 5,
    userId: 4
  },
  {
    text: 'Were imprisoned, so what could they do?',
    spot: 1,
    poemId: 5,
    userId: 4
  },
  {
    text: 'Said the fly, "let us flee!"',
    spot: 2,
    poemId: 5,
    userId: 4
  },
  {
    text: '"Let us fly!" said the flea.',
    spot: 3,
    poemId: 5,
    userId: 4
  },
  {
    text: 'So they flew through a flaw in the flue.',
    spot: 4,
    poemId: 5,
    userId: 4
  }

]

const favoriteData = [
  {
    favorited: true,
    userId: 1,
    poemId: 2
  },
  {
    favorited: true,
    userId: 1,
    poemId: 3
  },
  {
    favorited: true,
    userId: 1,
    poemId: 4
  },
  {
    favorited: true,
    userId: 2,
    poemId: 2
  },
]



module.exports = {
  userData,
  poemData,
  lineData,
  favoriteData
}
