export let questions = [
  // Very Easy
  {
    id: 1,
    question: "What color are bananas when ripe?",
    options: ["Red", "Green", "Yellow", "Blue"],
    answer: "Yellow",
  },
  {
    id: 2,
    question: "Which animal says 'meow'?",
    options: ["Dog", "Cat", "Cow", "Duck"],
    answer: "Cat",
  },
  {
    id: 3,
    question: "What is 10 - 4?",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },
  {
    id: 4,
    question: "Which shape has 3 sides?",
    options: ["Square", "Triangle", "Circle", "Pentagon"],
    answer: "Triangle",
  },
  {
    id: 5,
    question: "How many wheels does a bicycle have?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },

  // Easy
  {
    id: 6,
    question: "Which month has 28 (or 29) days?",
    options: ["January", "February", "March", "All months"],
    answer: "February",
  },
  {
    id: 7,
    question: "Which animal is the 'King of the Jungle'?",
    options: ["Tiger", "Lion", "Elephant", "Bear"],
    answer: "Lion",
  },
  {
    id: 8,
    question: "What comes after Tuesday?",
    options: ["Monday", "Wednesday", "Thursday", "Sunday"],
    answer: "Wednesday",
  },
  {
    id: 9,
    question: "Which planet do humans live on?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    answer: "Earth",
  },
  {
    id: 10,
    question: "What is H2O commonly called?",
    options: ["Oxygen", "Hydrogen", "Water", "Salt"],
    answer: "Water",
  },

  // Medium
  {
    id: 11,
    question: "Which country invented pizza?",
    options: ["France", "Italy", "USA", "Mexico"],
    answer: "Italy",
  },
  {
    id: 12,
    question: "How many strings does a standard guitar have?",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },
  {
    id: 13,
    question: "What is the opposite of 'hot'?",
    options: ["Cold", "Warm", "Cool", "Freeze"],
    answer: "Cold",
  },
  {
    id: 14,
    question: "What is 25 ÷ 5?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    id: 15,
    question: "What does a thermometer measure?",
    options: ["Time", "Pressure", "Temperature", "Speed"],
    answer: "Temperature",
  },

  // Medium-Hard
  {
    id: 16,
    question: "Which animal is the largest land mammal?",
    options: ["Elephant", "Giraffe", "Whale", "Rhino"],
    answer: "Elephant",
  },
  {
    id: 17,
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Violin", "Piano", "Drums", "Flute"],
    answer: "Piano",
  },
  {
    id: 18,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 19,
    question: "What is the national sport of Japan?",
    options: ["Football", "Sumo Wrestling", "Karate", "Baseball"],
    answer: "Sumo Wrestling",
  },
  {
    id: 20,
    question: "What is 3 cubed (3³)?",
    options: ["6", "9", "27", "12"],
    answer: "27",
  },

  // Fun & Absurd
  {
    id: 21,
    question: "If cats ruled the world, what would humans be?",
    options: ["Kings", "Pets", "Drivers", "Fish"],
    answer: "Pets",
  },
  {
    id: 22,
    question: "Which fruit wears a crown?",
    options: ["Apple", "Pineapple", "Banana", "Kiwi"],
    answer: "Pineapple",
  },
  {
    id: 23,
    question: "How many seconds are in a minute?",
    options: ["60", "100", "30", "120"],
    answer: "60",
  },
  {
    id: 24,
    question: "Which came first: the chicken or the egg?",
    options: ["Chicken", "Egg", "Neither", "Both"],
    answer: "Egg",
  },
  {
    id: 25,
    question: "If you drop a sandwich, which side hits the ground?",
    options: ["Bread side", "Filling side", "Both", "Depends on luck"],
    answer: "Depends on luck",
  },

  // Hard
  {
    id: 26,
    question: "Which gas makes soda fizzy?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Carbon Dioxide",
  },
  {
    id: 27,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    id: 28,
    question: "Which language has the most native speakers?",
    options: ["English", "Mandarin", "Spanish", "Hindi"],
    answer: "Mandarin",
  },
  {
    id: 29,
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "60"],
    answer: "56",
  },
  {
    id: 30,
    question: "Who invented the light bulb?",
    options: ["Newton", "Edison", "Einstein", "Tesla"],
    answer: "Edison",
  },

  // Very Hard
  {
    id: 31,
    question: "What is the currency of Japan?",
    options: ["Dollar", "Yuan", "Yen", "Won"],
    answer: "Yen",
  },
  {
    id: 32,
    question: "What is the square root of 81?",
    options: ["8", "9", "10", "11"],
    answer: "9",
  },
  {
    id: 33,
    question: "Which animal can sleep standing up?",
    options: ["Cat", "Horse", "Snake", "Frog"],
    answer: "Horse",
  },
  {
    id: 34,
    question: "How many teeth does an adult human normally have?",
    options: ["28", "30", "32", "34"],
    answer: "32",
  },
  {
    id: 35,
    question: "What is 20% of 200?",
    options: ["20", "30", "40", "50"],
    answer: "40",
  },

  // Absurd & Funny
  {
    id: 36,
    question: "If you mix red and blue paint, what color do you get?",
    options: ["Green", "Purple", "Orange", "Yellow"],
    answer: "Purple",
  },
  {
    id: 37,
    question: "If you could only eat one food forever, which is safest?",
    options: ["Cake", "Ice Cream", "Rice", "Pickles"],
    answer: "Rice",
  },
  {
    id: 38,
    question: "Which animal is known for laughing?",
    options: ["Monkey", "Hyena", "Parrot", "Dolphin"],
    answer: "Hyena",
  },
  {
    id: 39,
    question: "Which planet has rings?",
    options: ["Earth", "Saturn", "Mars", "Venus"],
    answer: "Saturn",
  },
  {
    id: 40,
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Horse", "Leopard", "Tiger"],
    answer: "Cheetah",
  },

  // More Quirky
  {
    id: 41,
    question: "What do bees make?",
    options: ["Milk", "Honey", "Jam", "Syrup"],
    answer: "Honey",
  },
  {
    id: 42,
    question: "Which animal is famous for its black and white stripes?",
    options: ["Zebra", "Panda", "Skunk", "Tiger"],
    answer: "Zebra",
  },
  {
    id: 43,
    question: "What’s 100 divided by 10?",
    options: ["5", "10", "15", "20"],
    answer: "10",
  },
  {
    id: 44,
    question: "Which bird is often kept as a pet and can talk?",
    options: ["Sparrow", "Parrot", "Crow", "Pigeon"],
    answer: "Parrot",
  },
  {
    id: 45,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kilimanjaro", "Everest", "Alps"],
    answer: "Everest",
  },

  // Final 5 Wacky
  {
    id: 46,
    question: "If a dog wore pants, how would it wear them?",
    options: ["On two legs", "On four legs", "Like a cape", "None"],
    answer: "On two legs",
  },
  {
    id: 47,
    question: "What is heavier: 1kg of feathers or 1kg of steel?",
    options: ["Feathers", "Steel", "Both same", "Neither"],
    answer: "Both same",
  },
  {
    id: 48,
    question: "Which drink is known as 'the universal solvent'?",
    options: ["Juice", "Tea", "Water", "Milk"],
    answer: "Water",
  },
  {
    id: 49,
    question: "If you throw a red stone into the blue sea, what happens?",
    options: ["It floats", "It sinks", "It dissolves", "It turns purple"],
    answer: "It sinks",
  },
  {
    id: 50,
    question: "What is the speed of light?",
    options: ["300 km/s", "300,000 km/s", "3,000 km/s", "30,000 km/s"],
    answer: "300,000 km/s",
  },
];
