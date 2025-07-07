
import React from 'react';
import { Subject, Quiz } from './types';
import { BookOpenIcon, BeakerIcon, GlobeAltIcon, CalculatorIcon } from './components/Icons';

export const GRADES: Subject[] = [
  // Kindergarten (NEW CONTENT)
  {
    id: 'grade-k',
    name: 'Kindergarten',
    icon: (props) => React.createElement(BookOpenIcon, props),
    color: 'teal',
    units: [
      {
        id: 'gk-eng', name: 'Language Arts',
        modules: [{
            id: 'gk-eng-m1', name: 'Letter Recognition',
            lessons: [
              { id: 'gk-eng-l1', title: 'My Name Letters', content: "Learn to identify and write the special letters that make up your very own name. We'll explore capital and lowercase letters and practice writing.", interactiveElement: { type: 'simulation', description: 'Practice tracing and writing the letters of your name on a digital card.' }, quizId: 'gk-eng-q1' },
            ],
        }],
      },
      {
        id: 'gk-math', name: 'Mathematics',
        modules: [{
            id: 'gk-math-m1', name: 'Numbers and Counting',
            lessons: [
              { id: 'gk-math-l1', title: 'Counting Our Class - Numbers 1-10', content: "Learn to count objects from 1 to 10 and recognize the numerals that represent them. We'll practice one-to-one correspondence to count accurately.", interactiveElement: { type: 'hotspot', description: 'Tap on groups of fun objects to count them and hear the number name.' }, quizId: 'gk-math-q1' },
            ],
        }],
      },
      {
        id: 'gk-sci', name: 'Natural Sciences',
        modules: [{
          id: 'gk-sci-m1', name: 'The World Around Us',
          lessons: [
            { id: 'gk-sci-l1', title: 'Living vs. Non-Living', content: 'Explore the world around you and learn to tell the difference between living things, like plants and animals, and non-living things, like rocks and toys.', interactiveElement: { type: 'drag-drop', description: 'Sort pictures of different items into "Living" and "Non-Living" boxes.' }, quizId: 'gk-sci-q1' },
          ]
        }]
      },
      {
        id: 'gk-social', name: 'Social Studies',
        modules: [{
          id: 'gk-social-m1', name: 'Me and My World',
          lessons: [
            { id: 'gk-social-l1', title: 'I Am Special', content: 'Discover all the wonderful things that make you unique and special, from your physical features to your favorite things and family.', interactiveElement: { type: 'simulation', description: 'Create your own "All About Me" poster by choosing your hair, eyes, and favorite things.' }, quizId: 'gk-social-q1' },
          ]
        }]
      }
    ],
  },
  // Grade 1 (NEW CONTENT)
  {
    id: 'grade-1',
    name: 'Grade 1',
    icon: (props) => React.createElement(CalculatorIcon, { ...props, strokeWidth: "1.5" }),
    color: 'indigo',
    units: [
      {
        id: 'g1-eng', name: 'Language Arts',
        modules: [{
            id: 'g1-eng-m1', name: 'Phonics',
            lessons: [
              { id: 'g1-eng-l1', title: 'Beginning Sounds - Initial Consonants', content: 'Learn to identify the first sound in words by looking at pictures and practicing with common words. This is the first step to becoming a great reader!', interactiveElement: { type: 'drag-drop', description: 'Drag the picture to the letter that it starts with.' }, quizId: 'g1-eng-q1' },
            ],
        }],
      },
      {
        id: 'g1-math', name: 'Mathematics',
        modules: [{
            id: 'g1-math-m1', name: 'Number Sense',
            lessons: [
              { id: 'g1-math-l1', title: 'Counting to 20', content: 'Practice counting forward and backward all the way to 20! We will use a number line and count objects to master the number sequence.', interactiveElement: { type: 'simulation', description: 'Arrange number cards in the correct sequence from 1 to 20.' }, quizId: 'g1-math-q1' },
            ],
        }],
      },
      {
        id: 'g1-sci', name: 'Natural Sciences',
        modules: [{
            id: 'g1-sci-m1', name: 'Human Body',
            lessons: [
              { id: 'g1-sci-l1', title: 'Five Senses', content: 'Explore the amazing world around you by learning about and using your five senses: sight, sound, smell, taste, and touch.', interactiveElement: { type: 'hotspot', description: 'Click on different objects in a scene to find out what you can learn about them with each of the five senses.' }, quizId: 'g1-sci-q1' },
            ],
        }],
      }
    ],
  },
    // Grade 2 (Original Content)
  {
    id: 'grade-2',
    name: 'Grade 2',
    icon: (props) => React.createElement(GlobeAltIcon, props),
    color: 'orange',
    units: [
      {
        id: 'g2-math', name: 'Mathematics',
        modules: [{
            id: 'g2-math-m1', name: 'Numbers and Operations',
            lessons: [
              { id: 'g2-math-l1', title: 'Place Value: Tens and Hundreds', content: 'Understand how numbers are built. How many tens and ones are in the number 42? Let\'s find out!', interactiveElement: { type: 'simulation', description: 'Use digital blocks to build numbers and understand place value.' }, quizId: 'g2-math-q1' },
              { id: 'g2-math-l2', title: 'Measuring Length', content: 'How long is a cricket bat? Let\'s learn about measuring things in centimeters.', interactiveElement: { type: 'hotspot', description: 'Use a virtual ruler to measure different objects.' }, quizId: 'g2-math-q2' },
            ],
        }],
      },
      {
        id: 'g2-eng', name: 'English',
        modules: [{
            id: 'g2-eng-m1', name: 'Grammar and Writing',
            lessons: [
              { id: 'g2-eng-l1', title: 'Nouns: People, Places, Things', content: 'A noun is a naming word. Learn to identify nouns like "boy", "Trinidad", and "coconut".', interactiveElement: { type: 'drag-drop', description: 'Sort words into categories: Person, Place, or Thing.' }, quizId: 'g2-eng-q1' },
              { id: 'g2-eng-l2', title: 'Verbs: Action Words', content: 'A verb is a doing word! Let\'s find the action words in sentences about playing cricket and swimming in the sea.', interactiveElement: { type: 'hotspot', description: 'Click on the verb in each sentence.' }, quizId: 'g2-eng-q2' },
            ],
        }],
      },
      {
        id: 'g2-sci', name: 'Science',
        modules: [{
            id: 'g2-sci-m1', name: 'Our Environment',
            lessons: [
              { id: 'g2-sci-l1', title: 'States of Matter', content: 'Everything around us is a solid, a liquid, or a gas. Learn the difference with examples like ice, water, and steam.', interactiveElement: { type: 'simulation', description: 'Change the temperature of water to see it turn into ice or steam.' }, quizId: 'g2-sci-q1' },
              { id: 'g2-sci-l2', title: 'Food Groups', content: 'Eating healthy is important! Learn about the different food groups using foods found in the Caribbean, like ground provisions, fruits, and fish.', interactiveElement: { type: 'drag-drop', description: 'Drag different foods onto the correct part of a healthy-eating plate.' }, quizId: 'g2-sci-q2' },
            ],
        }],
      },
      {
        id: 'g2-social', name: 'Social Studies',
        modules: [{
            id: 'g2-social-m1', name: 'Our Community',
            lessons: [
              { id: 'g2-social-l1', title: 'Community Helpers', content: 'Learn about important people in our Caribbean communities, like police officers in Bridgetown, farmers in rural Jamaica, and nurses everywhere.', interactiveElement: { type: 'hotspot', description: 'Click on different community helpers on a map of a Caribbean town to learn what they do.' }, quizId: 'g2-social-q1' },
              { id: 'g2-social-l2', title: 'Reading Maps', content: 'Maps help us find our way. Let\'s learn to read a simple map of a community, finding the school, the market, and the beach.', interactiveElement: { type: 'simulation', description: 'Follow directions on a map to get from the school to the park.' }, quizId: 'g2-social-q2' },
            ],
        }],
      }
    ],
  },
    // Grade 3 (Original Content)
  {
    id: 'grade-3',
    name: 'Grade 3',
    icon: (props) => React.createElement(BeakerIcon, props),
    color: 'rose',
    units: [
      {
        id: 'g3-math', name: 'Mathematics',
        modules: [{
            id: 'g3-math-m1', name: 'Multiplication and Division',
            lessons: [
              { id: 'g3-math-l1', title: 'Intro to Multiplication', content: 'Understand multiplication as repeated addition. We will learn the 2, 3, 5, and 10 times tables.', interactiveElement: { type: 'simulation', description: 'Arrange groups of shells on a beach to see how 3 groups of 4 is the same as 3 x 4.' }, quizId: 'g3-math-q1' },
              { id: 'g3-math-l2', title: 'Intro to Division', content: 'Division is sharing equally. If we share 12 sugar cakes among 3 friends, how many does each one get?', interactiveElement: { type: 'simulation', description: 'Share items equally between characters in a game.' }, quizId: 'g3-math-q2' },
            ],
        }],
      },
       {
        id: 'g3-eng', name: 'English',
        modules: [{
            id: 'g3-eng-m1', name: 'Writing and Comprehension',
            lessons: [
              { id: 'g3-eng-l1', title: 'Adjectives: Describing Words', content: 'Adjectives make our writing more exciting! Learn to use words to describe the "bright" sun and the "tasty" mango.', interactiveElement: { type: 'drag-drop', description: 'Drag the best adjective to complete the sentence.' }, quizId: 'g3-eng-q1' },
              { id: 'g3-eng-l2', title: 'Writing a Paragraph', content: 'A paragraph is a group of sentences about one main idea. Let\'s learn how to write a short paragraph about our favorite Caribbean food.', interactiveElement: { type: 'hotspot', description: 'Organize scrambled sentences into a proper paragraph.' }, quizId: 'g3-eng-q2' },
            ],
        }],
      },
       {
        id: 'g3-sci', name: 'Science',
        modules: [{
            id: 'g3-sci-m1', name: 'Earth and Space',
            lessons: [
              { id: 'g3-sci-l1', title: 'The Solar System', content: 'Let\'s take a trip into space! Learn about the Sun, the Earth, the Moon, and other planets in our solar system.', interactiveElement: { type: 'simulation', description: 'Fly a spaceship to different planets to learn a fun fact about each one.' }, quizId: 'g3-sci-q1' },
              { id: 'g3-sci-l2', title: 'Healthy Habits', content: 'Learn how eating right, exercising, and getting enough sleep keeps our bodies strong and healthy.', interactiveElement: { type: 'drag-drop', description: 'Sort activities into "Healthy Habits" and "Unhealthy Habits".' }, quizId: 'g3-sci-q2' },
            ],
        }],
      },
      {
        id: 'g3-social', name: 'Social Studies',
        modules: [{
          id: 'g3-social-m1', name: 'Our Nation',
          lessons: [
            { id: 'g3-social-l1', title: 'National Heroes', content: 'Every nation has heroes who have done great things. Let\'s learn about some of the National Heroes of the Caribbean.', interactiveElement: { type: 'hotspot', description: 'Click on portraits of National Heroes to read a short biography.' }, quizId: 'g3-social-q1' },
          ]
        }]
      }
    ],
  },
  // Grade 4 (Original Content)
  {
    id: 'grade-4',
    name: 'Grade 4',
    icon: (props) => React.createElement(BookOpenIcon, props),
    color: 'teal',
    units: [
      {
        id: 'g4-math', name: 'Mathematics',
        modules: [{
            id: 'g4-math-m1', name: 'Fractions and Geometry',
            lessons: [
              { id: 'g4-math-l1', title: 'Understanding Fractions', content: 'Learn what fractions are and how they show parts of a whole, like sharing a roti or a patty.', interactiveElement: { type: 'drag-drop', description: 'Match fraction pictures to the correct fraction number.' }, quizId: 'g4-math-q1' },
              { id: 'g4-math-l2', title: 'Exploring Angles', content: 'What is an angle? Learn to identify right angles, acute angles, and obtuse angles in shapes and objects around you.', interactiveElement: { type: 'hotspot', description: 'Click on corners of shapes to identify the type of angle.' }, quizId: 'g4-math-q2' },
            ],
        }],
      },
      {
        id: 'g4-eng', name: 'English',
        modules: [{
            id: 'g4-eng-m1', name: 'Advanced Grammar',
            lessons: [
              { id: 'g4-eng-l1', title: 'Pronouns and Adverbs', content: 'Learn how pronouns (like he, she, they) replace nouns, and how adverbs (like quickly, slowly) describe verbs.', interactiveElement: { type: 'drag-drop', description: 'Complete sentences by choosing the correct pronoun or adverb.' }, quizId: 'g4-eng-q1' },
            ],
        }],
      },
      {
        id: 'g4-sci', name: 'Science',
        modules: [{
            id: 'g4-sci-m1', name: 'Ecosystems',
            lessons: [
              { id: 'g4-sci-l1', title: 'The Coral Reef', content: 'Discover the coral reef, a vital Caribbean ecosystem. Learn about the fish, coral, and other animals that live there and why it\'s important to protect them.', interactiveElement: { type: 'hotspot', description: 'Explore a diagram of a coral reef. Click on different creatures to learn facts about them.' }, quizId: 'g4-sci-q1' },
              { id: 'g4-sci-l2', title: 'The Human Body Systems', content: 'Our bodies are amazing! Get a simple introduction to the skeletal system (our bones) and the digestive system (how we get energy from food).', interactiveElement: { type: 'simulation', description: 'Assemble a simple virtual skeleton and trace the path of food through the digestive system.' }, quizId: 'g4-sci-q2' },
            ],
        }],
      },
      {
        id: 'g4-social', name: 'Social Studies',
        modules: [{
          id: 'g4-social-m1', name: 'Caribbean History & Geography',
          lessons: [
            { id: 'g4-social-l1', title: 'Our First Peoples', content: 'Learn about the Tainos and Kalinagos, the indigenous peoples of the Caribbean, their way of life, and their legacy.', interactiveElement: { type: 'hotspot', description: 'Explore an interactive map showing the settlement patterns of Indigenous peoples.' }, quizId: 'g4-social-q1' },
            { id: 'g4-social-l2', title: 'Caribbean Geography', content: 'Explore the map of the Caribbean. Learn to identify different islands and the Caribbean Sea that connects us all.', interactiveElement: { type: 'drag-drop', description: 'Drag the names of the islands to their correct location on a map.' }, quizId: 'g4-social-q2' },
          ]
        }]
      }
    ],
  },
   // Grade 5 (Original Content)
  {
    id: 'grade-5',
    name: 'Grade 5',
    icon: (props) => React.createElement(CalculatorIcon, { ...props, strokeWidth: "1.5" }),
    color: 'indigo',
    units: [
      {
        id: 'g5-math', name: 'Mathematics',
        modules: [{
            id: 'g5-math-m1', name: 'Decimals and Measurement',
            lessons: [
              { id: 'g5-math-l1', title: 'Introduction to Decimals', content: 'Learn how decimals relate to fractions and money. How do you write 50 cents as a decimal?', interactiveElement: { type: 'simulation', description: 'Use virtual money to practice adding and subtracting amounts with decimals.' }, quizId: 'g5-math-q1' },
              { id: 'g5-math-l2', title: 'Area and Perimeter', content: 'Learn how to calculate the perimeter (distance around) and area (space inside) of rectangles and squares.', interactiveElement: { type: 'simulation', description: 'Calculate the area and perimeter of different virtual garden plots.' }, quizId: 'g5-math-q2' },
            ],
        }],
      },
       {
        id: 'g5-eng', name: 'English',
        modules: [{
            id: 'g5-eng-m1', name: 'Creative Writing',
            lessons: [
              { id: 'g5-eng-l1', title: 'Writing a Short Story', content: 'Every story needs a beginning, a middle, and an end. Let\'s learn how to plan and write our own story, maybe about Anansi the spider!', interactiveElement: { type: 'drag-drop', description: 'Organize story elements (character, setting, plot) into a story plan.' }, quizId: 'g5-eng-q1' },
            ],
        }],
      },
      {
        id: 'g5-sci', name: 'Science',
        modules: [{
            id: 'g5-sci-m1', name: 'Our World',
            lessons: [
              { id: 'g5-sci-l1', title: 'Weather vs. Climate', content: 'What\'s the difference between weather (today\'s forecast) and climate (the usual weather in a place like the Caribbean)?', interactiveElement: { type: 'drag-drop', description: 'Sort statements into "Weather" or "Climate" categories.' }, quizId: 'g5-sci-q1' },
              { id: 'g5-sci-l2', title: 'Simple Circuits', content: 'How does a flashlight work? Learn the basics of electricity by building a simple circuit with a battery, wires, and a bulb.', interactiveElement: { type: 'simulation', description: 'Build a virtual circuit and see if you can make the light bulb turn on.' }, quizId: 'g5-sci-q2' },
            ],
        }],
      },
       {
        id: 'g5-social', name: 'Social Studies',
        modules: [{
            id: 'g5-social-m1', name: 'The Journey to Today',
            lessons: [
              { id: 'g5-social-l1', title: 'Slavery and Emancipation', content: 'Learn about the difficult history of the transatlantic slave trade and the fight for freedom and Emancipation in the Caribbean.', interactiveElement: { type: 'hotspot', description: 'Explore a timeline of key events leading to Emancipation.' }, quizId: 'g5-social-q1' },
              { id: 'g5-social-l2', title: 'Our Caribbean Culture', content: 'Explore the vibrant music of the Caribbean, like reggae, calypso, and soca, and how it tells our story.', interactiveElement: { type: 'hotspot', description: 'Click on different musical instruments to hear their sound and learn their origin.' }, quizId: 'g5-social-q2' },
            ],
        }],
      }
    ],
  },
   // Grade 6 (Original Content)
  {
    id: 'grade-6',
    name: 'Grade 6',
    icon: (props) => React.createElement(GlobeAltIcon, props),
    color: 'orange',
    units: [
      {
        id: 'g6-math', name: 'Mathematics',
        modules: [{
            id: 'g6-math-m1', name: 'Ratios, Percentages & Data',
            lessons: [
              { id: 'g6-math-l1', title: 'What are Percentages?', content: 'Understand that percentages are fractions out of 100. Learn to calculate discounts on items in a store, a common use in everyday life.', interactiveElement: { type: 'simulation', description: 'A shopping game where you calculate the final price after a percentage discount at a virtual Caribbean market.' }, quizId: 'g6-math-q1' },
              { id: 'g6-math-l2', title: 'Introduction to Ratios', content: 'Ratios compare two quantities. Learn to write ratios, for example, the ratio of boys to girls in your class.', interactiveElement: { type: 'simulation', description: 'Create fruit punch by mixing juices according to a given ratio.' }, quizId: 'g6-math-q2' },
              { id: 'g6-math-l3', title: 'Handling Data', content: 'Learn how to read and create simple bar graphs to show information, like the favorite fruits of your classmates.', interactiveElement: { type: 'simulation', description: 'Create a bar graph based on survey data provided.' }, quizId: 'g6-math-q3' },
            ],
        }],
      },
       {
        id: 'g6-eng', name: 'English',
        modules: [{
            id: 'g6-eng-m1', name: 'Language and Literature',
            lessons: [
              { id: 'g6-eng-l1', title: 'Similes and Metaphors', content: 'Learn to identify and use similes (using "like" or "as") and metaphors to make your writing more descriptive and vivid, drawing on Caribbean imagery.', interactiveElement: { type: 'drag-drop', description: 'Complete sentences by dragging the correct figure of speech. "The sea was as calm as a ___."' }, quizId: 'g6-eng-q1' },
              { id: 'g6-eng-l2', title: 'Persuasive Writing', content: 'Learn how to write to convince someone of your point of view. Let\'s write a paragraph on why we should protect our coral reefs.', interactiveElement: { type: 'hotspot', description: 'Identify the key persuasive elements in a sample text.' }, quizId: 'g6-eng-q2' },
            ],
        }],
      },
       {
        id: 'g6-sci', name: 'Science',
        modules: [{
            id: 'g6-sci-m1', name: 'Life and Physical Science',
            lessons: [
              { id: 'g6-sci-l1', title: 'Photosynthesis', content: 'How do plants make their own food? Discover the magic of photosynthesis using sunlight, water, and air.', interactiveElement: { type: 'simulation', description: 'An interactive diagram showing how a plant uses sunlight, water, and CO2 to create food and oxygen.' }, quizId: 'g6-sci-q1' },
              { id: 'g6-sci-l2', title: 'Natural Disasters', content: 'The Caribbean faces natural events like hurricanes and earthquakes. Learn what they are and the importance of being prepared.', interactiveElement: { type: 'hotspot', description: 'Click on parts of a hurricane diagram to learn about the eye, eye wall, and rain bands.' }, quizId: 'g6-sci-q2' },
            ],
        }],
      },
      {
        id: 'g6-social', name: 'Social Studies',
        modules: [{
          id: 'g6-social-m1', name: 'Civics and Environment',
          lessons: [
            { id: 'g6-social-l1', title: 'CARICOM', content: 'Learn about the Caribbean Community (CARICOM) and how our countries work together.', interactiveElement: { type: 'hotspot', description: 'Click on a map of CARICOM countries to see their flags and capitals.' }, quizId: 'g6-social-q1' },
            { id: 'g6-social-l2', title: 'Rights and Responsibilities', content: 'As citizens, we have rights (like the right to education) and responsibilities (like keeping our country clean). Let\'s learn about them.', interactiveElement: { type: 'drag-drop', description: 'Sort statements into "Rights" and "Responsibilities".' }, quizId: 'g6-social-q2' },
          ]
        }]
      }
    ],
  }
];

export const QUIZZES: Record<string, Quiz> = {
  // Kindergarten (NEW QUIZZES)
  'gk-eng-q1': {
    id: 'gk-eng-q1',
    questions: [
      { id: 'q1', question: 'What is the first letter of your name called?', options: ['Small letter', 'Capital letter', 'Number', 'Symbol'], correctAnswerIndex: 1, explanation: "The first letter of a proper noun, like a name, is always a capital letter." },
      { id: 'q2', question: 'How many letters are in the name "ANNA"?', options: ['3', '4', '5', '6'], correctAnswerIndex: 1, explanation: 'The name "ANNA" has four letters: A, N, N, A.' },
      { id: 'q3', question: 'Which letter comes first in the alphabet?', options: ['B', 'C', 'A', 'D'], correctAnswerIndex: 2, explanation: 'The alphabet begins with the letter A.' },
      { id: 'q4', question: 'What do we call the small letters?', options: ['Capital letters', 'Big letters', 'Lowercase letters', 'Number letters'], correctAnswerIndex: 2, explanation: 'Small letters are also called lowercase letters.' },
      { id: 'q5', question: 'In the name "JOSE", which letter comes last?', options: ['J', 'O', 'S', 'E'], correctAnswerIndex: 3, explanation: 'The last letter in the name "JOSE" is E.' },
      { id: 'q6', question: 'What tool do we use to write?', options: ['Spoon', 'Pencil', 'Fork', 'Shoe'], correctAnswerIndex: 1, explanation: 'A pencil is a common tool used for writing.' },
      { id: 'q7', question: 'Letters put together make:', options: ['Numbers', 'Words', 'Colors', 'Shapes'], correctAnswerIndex: 1, explanation: 'When we combine letters, they form words.' },
      { id: 'q8', question: 'The first letter of your name is always:', options: ['Small', 'Capital', 'Red', 'Round'], correctAnswerIndex: 1, explanation: 'The first letter of a name is always a capital letter.' },
      { id: 'q9', question: 'How do you hold a pencil?', options: ['With your foot', 'With your mouth', 'With your fingers', 'With your elbow'], correctAnswerIndex: 2, explanation: 'We hold a pencil with our fingers to have proper control.' },
      { id: 'q10', question: 'What comes after the letter A?', options: ['C', 'B', 'D', 'E'], correctAnswerIndex: 1, explanation: 'In the alphabet, the letter B comes after A.' },
      { id: 'q11', question: 'In the name "MARIA", how many letters are there?', options: ['4', '5', '6', '3'], correctAnswerIndex: 1, explanation: 'The name "MARIA" is made up of 5 letters.' },
      { id: 'q12', question: 'Which is a vowel?', options: ['B', 'C', 'A', 'D'], correctAnswerIndex: 2, explanation: 'The vowels are A, E, I, O, U. So, A is a vowel.' },
      { id: 'q13', question: 'What do we call the marks we make to write?', options: ['Pictures', 'Letters', 'Numbers', 'Colors'], correctAnswerIndex: 1, explanation: 'The marks that form words are called letters.' },
      { id: 'q14', question: 'The name "BOB" has how many of the same letters?', options: ['1', '2', '3', '0'], correctAnswerIndex: 1, explanation: 'The name "BOB" has two "B"s.' },
      { id: 'q15', question: 'Which direction do we write in English?', options: ['Up to down', 'Right to left', 'Left to right', 'In circles'], correctAnswerIndex: 2, explanation: 'We read and write in English from the left side of the page to the right.' },
      { id: 'q16', question: 'What comes before the letter C?', options: ['A', 'B', 'D', 'E'], correctAnswerIndex: 1, explanation: 'In the alphabet, the letter B comes before C.' },
      { id: 'q17', question: 'How many vowels are there in the English alphabet?', options: ['3', '4', '5', '6'], correctAnswerIndex: 2, explanation: 'There are 5 vowels: A, E, I, O, and U.' },
      { id: 'q18', question: 'In the name "LILY", which letter appears twice?', options: ['L', 'I', 'Y', 'None'], correctAnswerIndex: 0, explanation: 'The letter L appears at the beginning and in the middle of "LILY".' },
      { id: 'q19', question: 'What do we call all the letters together?', options: ['Numbers', 'Alphabet', 'Colors', 'Shapes'], correctAnswerIndex: 1, explanation: 'The collection of all letters is called the alphabet.' },
      { id: 'q20', question: 'The letter that comes after M is:', options: ['L', 'N', 'O', 'P'], correctAnswerIndex: 1, explanation: 'N is the letter that follows M in the alphabet.' },
      { id: 'q21', question: 'In your name, the capital letter goes:', options: ['At the end', 'In the middle', 'At the beginning', 'Anywhere'], correctAnswerIndex: 2, explanation: 'The capital letter is always used for the first letter of a name.' },
      { id: 'q22', question: 'What sound does the letter "B" make?', options: ['"ah"', '"buh"', '"cuh"', '"duh"'], correctAnswerIndex: 1, explanation: 'The letter "B" makes the "buh" sound, as in "ball".' },
      { id: 'q23', question: 'How many letters are in the English alphabet?', options: ['24', '25', '26', '27'], correctAnswerIndex: 2, explanation: 'There are 26 letters in the English alphabet.' },
      { id: 'q24', question: 'Which is NOT a letter?', options: ['A', '7', 'B', 'C'], correctAnswerIndex: 1, explanation: 'The symbol "7" is a number, not a letter.' },
      { id: 'q25', question: 'Names are:', options: ['Numbers', 'Special words', 'Colors', 'Shapes'], correctAnswerIndex: 1, explanation: 'Names are special words we use to identify people, places, and things.' }
    ]
  },
  'gk-math-q1': {
    id: 'gk-math-q1',
    questions: [
      { id: 'q1', question: 'What number comes after 3?', options: ['2', '4', '5', '1'], correctAnswerIndex: 1, explanation: 'When counting up, the number 4 comes immediately after 3.' },
      { id: 'q2', question: 'How many fingers are on one hand?', options: ['4', '5', '6', '3'], correctAnswerIndex: 1, explanation: 'Most people have five fingers on one hand.' },
      { id: 'q3', question: 'What number comes before 7?', options: ['8', '5', '6', '9'], correctAnswerIndex: 2, explanation: 'When counting down, the number 6 comes just before 7.' },
      { id: 'q4', question: 'If you have 2 apples and get 1 more, how many do you have?', options: ['1', '2', '3', '4'], correctAnswerIndex: 2, explanation: '2 plus 1 equals 3. You would have 3 apples.' },
      { id: 'q5', question: 'What is the smallest counting number shown here?', options: ['0', '1', '2', '3'], correctAnswerIndex: 1, explanation: '1 is the first and smallest counting number.' },
      { id: 'q6', question: 'How many eyes do you have?', options: ['1', '2', '3', '4'], correctAnswerIndex: 1, explanation: 'Most people have two eyes.' },
      { id: 'q7', question: 'What number looks like a circle?', options: ['1', '8', '0', '7'], correctAnswerIndex: 2, explanation: 'The numeral 0 is shaped like a circle or an oval.' },
      { id: 'q8', question: 'Count: 🐻🐻🐻 How many bears?', options: ['2', '3', '4', '1'], correctAnswerIndex: 1, explanation: 'There are three bears shown in the picture.' },
      { id: 'q9', question: 'What number comes after 9?', options: ['8', '10', '11', '7'], correctAnswerIndex: 1, explanation: 'The number 10 comes right after 9.' },
      { id: 'q10', question: 'How many wheels does a bicycle have?', options: ['1', '2', '3', '4'], correctAnswerIndex: 1, explanation: 'A bicycle has two wheels.' },
      { id: 'q11', question: 'What number comes between 4 and 6?', options: ['3', '5', '7', '8'], correctAnswerIndex: 1, explanation: 'The number 5 is between 4 and 6.' },
      { id: 'q12', question: 'If you count 1, 2, 3, what comes next?', options: ['2', '4', '5', '1'], correctAnswerIndex: 1, explanation: 'The number 4 comes next when counting up from 3.' },
      { id: 'q13', question: 'How many legs does a dog have?', options: ['2', '3', '4', '5'], correctAnswerIndex: 2, explanation: 'A dog has four legs.' },
      { id: 'q14', question: 'What is the biggest number in this list: 9, 10, 8, 7?', options: ['9', '10', '8', '7'], correctAnswerIndex: 1, explanation: '10 is the largest value among the given numbers.' },
      { id: 'q15', question: 'Count: ⭐⭐⭐⭐⭐ How many stars?', options: ['4', '5', '6', '3'], correctAnswerIndex: 1, explanation: 'There are five stars shown in the picture.' },
      { id: 'q16', question: 'What number comes before 2?', options: ['3', '0', '1', '4'], correctAnswerIndex: 2, explanation: 'The number 1 comes just before 2.' },
      { id: 'q17', question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], correctAnswerIndex: 1, explanation: 'A triangle is a shape with three sides.' },
      { id: 'q18', question: 'Count: 🍎🍎 How many apples?', options: ['1', '2', '3', '4'], correctAnswerIndex: 1, explanation: 'There are two apples shown.' },
      { id: 'q19', question: 'Which number looks like an S?', options: ['1', '2', '3', '5'], correctAnswerIndex: 3, explanation: 'The numeral 5 is often written with curves like the letter S.' },
      { id: 'q20', question: 'If you have 5 toys and give away 2, how many are left?', options: ['2', '3', '4', '5'], correctAnswerIndex: 1, explanation: '5 minus 2 is 3. You would have 3 toys left.' },
      { id: 'q21', question: 'What number comes after 6?', options: ['5', '7', '8', '9'], correctAnswerIndex: 1, explanation: 'The number 7 comes after 6.' },
      { id: 'q22', question: 'How many days are in a week?', options: ['5', '6', '7', '8'], correctAnswerIndex: 2, explanation: 'There are 7 days in a week.' },
      { id: 'q23', question: 'Count: 🚗🚗🚗🚗 How many cars?', options: ['3', '4', '5', '2'], correctAnswerIndex: 1, explanation: 'There are four cars shown.' },
      { id: 'q24', question: 'What number comes before 10?', options: ['8', '9', '11', '7'], correctAnswerIndex: 1, explanation: 'The number 9 comes right before 10.' },
      { id: 'q25', question: 'How many thumbs do you have?', options: ['1', '2', '3', '4'], correctAnswerIndex: 1, explanation: 'People have two thumbs, one on each hand.' }
    ]
  },
  'gk-sci-q1': {
    id: 'gk-sci-q1',
    questions: [
        { id: 'q1', question: 'Which one is living?', options: ['Rock', 'Tree', 'Car', 'Book'], correctAnswerIndex: 1, explanation: 'A tree is a living thing because it grows, needs water, and breathes.' },
        { id: 'q2', question: 'Living things need:', options: ['Toys', 'Food', 'Books', 'Cars'], correctAnswerIndex: 1, explanation: 'All living things need food to get energy and stay alive.' },
        { id: 'q3', question: 'Which one is NOT living?', options: ['Dog', 'Cat', 'Chair', 'Fish'], correctAnswerIndex: 2, explanation: 'A chair is a non-living object; it does not grow or need food.' },
        { id: 'q4', question: 'What do plants need to grow?', options: ['Toys', 'Water', 'Books', 'Clothes'], correctAnswerIndex: 1, explanation: 'Plants are living things that need water, air, and sunlight to grow.' },
        { id: 'q5', question: 'Which one can move by itself?', options: ['Table', 'Bird', 'Rock', 'Cup'], correctAnswerIndex: 1, explanation: 'A bird is a living animal that can fly and move on its own.' },
        { id: 'q6', question: 'Living things can:', options: ['Fly planes', 'Grow', 'Drive cars', 'Read books'], correctAnswerIndex: 1, explanation: 'A key characteristic of all living things is that they grow and change.' },
        { id: 'q7', question: 'Which one is non-living?', options: ['Flower', 'Butterfly', 'Pencil', 'Grass'], correctAnswerIndex: 2, explanation: 'A pencil is a non-living object made from wood and graphite.' },
        { id: 'q8', question: 'What do all living things do?', options: ['Read', 'Breathe', 'Drive', 'Paint'], correctAnswerIndex: 1, explanation: 'All living things, including plants and animals, breathe or respire in some way.' },
        { id: 'q9', question: 'Which one is living?', options: ['Doll', 'Rabbit', 'Toy car', 'Ball'], correctAnswerIndex: 1, explanation: 'A rabbit is a living animal that eats, breathes, and grows.' },
        { id: 'q10', question: 'Non-living things:', options: ['Eat food', 'Don\'t grow', 'Breathe air', 'Have babies'], correctAnswerIndex: 1, explanation: 'Non-living things do not grow, breathe, or reproduce.' },
        { id: 'q11', question: 'Which one needs water?', options: ['Book', 'Plant', 'Rock', 'Toy'], correctAnswerIndex: 1, explanation: 'A plant is a living thing and needs water to survive.' },
        { id: 'q12', question: 'What makes something living?', options: ['It\'s big', 'It\'s pretty', 'It grows', 'It\'s colorful'], correctAnswerIndex: 2, explanation: 'The ability to grow is a fundamental characteristic of living things.' },
        { id: 'q13', question: 'Which one is non-living?', options: ['Horse', 'Snake', 'Bicycle', 'Mouse'], correctAnswerIndex: 2, explanation: 'A bicycle is a machine and a non-living object.' },
        { id: 'q14', question: 'Living things can have:', options: ['Wheels', 'Babies', 'Buttons', 'Handles'], correctAnswerIndex: 1, explanation: 'Living things can reproduce, which means they can have babies or offspring.' },
        { id: 'q15', question: 'Which one breathes?', options: ['Clock', 'Elephant', 'Spoon', 'Shoe'], correctAnswerIndex: 1, explanation: 'An elephant is a living animal and needs to breathe air.' },
        { id: 'q16', question: 'What do living things do that non-living things don\'t?', options: ['Have colors', 'Make sounds', 'Respond to their environment', 'Have shapes'], correctAnswerIndex: 2, explanation: 'Living things can react and respond to changes around them, like a plant growing towards sunlight.' },
        { id: 'q17', question: 'Which one is living?', options: ['Computer', 'Frog', 'Backpack', 'Crayon'], correctAnswerIndex: 1, explanation: 'A frog is a living amphibian.' },
        { id: 'q18', question: 'All living things need:', options: ['Clothes', 'Air', 'Toys', 'Money'], correctAnswerIndex: 1, explanation: 'Air is essential for the survival of almost all living things.' },
        { id: 'q19', question: 'Which one is non-living?', options: ['Bee', 'Ant', 'Lamp', 'Worm'], correctAnswerIndex: 2, explanation: 'A lamp is a non-living object that provides light.' },
        { id: 'q20', question: 'Which one is a characteristic of living things?', options: ['They can melt', 'They can rust', 'They need energy', 'They have batteries'], correctAnswerIndex: 2, explanation: 'Living things need energy, which they get from food, to live and grow.' },
        { id: 'q21', question: 'Which one grows?', options: ['Kitten', 'Desk', 'Phone', 'Plate'], correctAnswerIndex: 0, explanation: 'A kitten is a young cat, and it will grow into an adult cat.' },
        { id: 'q22', question: 'What happens to living things over time?', options: ['They rust', 'They age', 'They break', 'They melt'], correctAnswerIndex: 1, explanation: 'All living things go through a life cycle, which includes aging.' },
        { id: 'q23', question: 'Which one is non-living?', options: ['Spider', 'Lizard', 'Hammer', 'Turtle'], correctAnswerIndex: 2, explanation: 'A hammer is a tool and a non-living object.' },
        { id: 'q24', question: 'Living things need food for:', options: ['Looking pretty', 'Energy', 'Being heavy', 'Making noise'], correctAnswerIndex: 1, explanation: 'Food provides the energy that living things need to live and grow.' },
        { id: 'q25', question: 'Which one can make more of itself?', options: ['Car', 'Dog', 'Book', 'Toy'], correctAnswerIndex: 1, explanation: 'A dog, like all living things, can reproduce.' }
    ]
  },
  'gk-social-q1': {
    id: 'gk-social-q1',
    questions: [
        { id: 'q1', question: 'What color are your eyes?', options: ['The same as everyone', 'My own special color', 'Always blue', 'Always brown'], correctAnswerIndex: 1, explanation: 'Everyone has a unique eye color that is special to them.' },
        { id: 'q2', question: 'How many people in the world are exactly like you?', options: ['Many', 'A few', 'None', 'Everyone'], correctAnswerIndex: 2, explanation: 'You are unique! There is nobody else in the world who is exactly like you.' },
        { id: 'q3', question: 'What makes you special?', options: ['Nothing', 'Everything about me', 'Only my clothes', 'Only my toys'], correctAnswerIndex: 1, explanation: 'Your thoughts, feelings, looks, and everything about you make you a special person.' },
        { id: 'q4', question: 'Your family is:', options: ['The same as everyone\'s', 'Special to you', 'Not important', 'Too big'], correctAnswerIndex: 1, explanation: 'Every family is different and special to the people in it.' },
        { id: 'q5', question: 'What should you do when someone is different from you?', options: ['Laugh at them', 'Ignore them', 'Be kind', 'Run away'], correctAnswerIndex: 2, explanation: 'It is important to be kind and respect the differences in others.' },
        { id: 'q6', question: 'Your favorite color is:', options: ['Wrong', 'The same as everyone\'s', 'Special to you', 'Not important'], correctAnswerIndex: 2, explanation: 'Your preferences, like your favorite color, are a special part of who you are.' },
        { id: 'q7', question: 'How should you feel about yourself?', options: ['Sad', 'Proud', 'Angry', 'Worried'], correctAnswerIndex: 1, explanation: 'You should be proud of who you are, because you are special and valuable.' },
        { id: 'q8', question: 'Your name is:', options: ['The same as everyone\'s', 'A special word for you', 'Not important', 'Too long'], correctAnswerIndex: 1, explanation: 'Your name was chosen for you and is a special word that belongs to you.' },
        { id: 'q9', question: 'Your friends should:', options: ['Be mean to you', 'Be exactly like you', 'Care about you', 'Ignore you'], correctAnswerIndex: 2, explanation: 'Good friends care about you and like you for who you are.' },
        { id: 'q10', question: 'What makes families special?', options: ['They\'re all the same', 'They love each other', 'They\'re perfect', 'They\'re big'], correctAnswerIndex: 1, explanation: 'The love and care family members share makes each family special.' },
        { id: 'q11', question: 'How should you treat your classmates?', options: ['Ignore them', 'Be mean', 'Be kind', 'Avoid them'], correctAnswerIndex: 2, explanation: 'Treating everyone with kindness makes school a happy place for all.' },
        { id: 'q12', question: 'What should you do if you\'re good at something?', options: ['Hide it', 'Be proud', 'Feel bad', 'Stop doing it'], correctAnswerIndex: 1, explanation: 'It\'s wonderful to be proud of your talents and skills.' },
        { id: 'q13', question: 'Your birthday is:', options: ['The same as everyone\'s', 'A special day for you', 'Not important', 'Too much fun'], correctAnswerIndex: 1, explanation: 'Your birthday is a special day to celebrate you being born.' },
        { id: 'q14', question: 'What should you do when you make a mistake?', options: ['Give up', 'Try again', 'Cry', 'Be angry'], correctAnswerIndex: 1, explanation: 'Everyone makes mistakes. It\'s an opportunity to learn and try again.' },
        { id: 'q15', question: 'How are you different from your friends?', options: ['You\'re not different', 'In many ways', 'Only in bad ways', 'Not at all'], correctAnswerIndex: 1, explanation: 'Friends can have different appearances, like different things, and that makes friendship interesting.' },
        { id: 'q16', question: 'What should you do if someone is sad?', options: ['Laugh', 'Help them', 'Ignore them', 'Be mean'], correctAnswerIndex: 1, explanation: 'Showing kindness and offering to help can make a sad person feel better.' },
        { id: 'q17', question: 'Your feelings are:', options: ['Wrong', 'Important', 'Bad', 'Silly'], correctAnswerIndex: 1, explanation: 'All of your feelings are valid and important.' },
        { id: 'q18', question: 'What makes you happy?', options: ['Nothing', 'Different things for everyone', 'Only toys', 'Only food'], correctAnswerIndex: 1, explanation: 'Different people find joy in different things, and that\'s perfectly okay.' },
        { id: 'q19', question: 'How should you talk about yourself?', options: ['Say mean things', 'Say nothing', 'Say kind things', 'Only complain'], correctAnswerIndex: 2, explanation: 'It is important to be kind to yourself, just as you are to others.' },
        { id: 'q20', question: 'What should you do when you\'re proud of yourself?', options: ['Hide it', 'Share your happiness', 'Feel bad', 'Stop trying'], correctAnswerIndex: 1, explanation: 'It\'s great to feel proud of your accomplishments and share that joy.' },
        { id: 'q21', question: 'Your dreams are:', options: ['Silly', 'Important', 'Impossible', 'Bad'], correctAnswerIndex: 1, explanation: 'Your dreams for the future are important and part of what makes you special.' },
        { id: 'q22', question: 'What should you do if you need help?', options: ['Give up', 'Ask for help', 'Cry', 'Be angry'], correctAnswerIndex: 1, explanation: 'Asking for help is a brave and smart thing to do.' },
        { id: 'q23', question: 'How should you treat yourself?', options: ['Be mean', 'Be kind', 'Ignore yourself', 'Be angry'], correctAnswerIndex: 1, explanation: 'Self-kindness is just as important as being kind to others.' },
        { id: 'q24', question: 'What makes you laugh?', options: ['Nothing', 'Different things for everyone', 'Only cartoons', 'Only jokes'], correctAnswerIndex: 1, explanation: 'Everyone has a unique sense of humor, and many different things can be funny.' },
        { id: 'q25', question: 'You are:', options: ['Not important', 'Special and important', 'The same as everyone', 'Not good enough'], correctAnswerIndex: 1, explanation: 'Always remember that you are a special and important person.' }
    ]
  },
  
  // Grade 1 (NEW QUIZZES)
  'g1-eng-q1': {
    id: 'g1-eng-q1',
    questions: [
        { id: 'q1', question: 'The word "cat" begins with the sound of which letter?', options: ['B', 'C', 'D', 'F'], correctAnswerIndex: 1, explanation: '"Cat" starts with the /k/ sound, which is made by the letter C.' },
        { id: 'q2', question: 'The word "dog" begins with the sound of which letter?', options: ['C', 'D', 'F', 'G'], correctAnswerIndex: 1, explanation: '"Dog" starts with the /d/ sound, made by the letter D.' },
        { id: 'q3', question: 'The word "fish" begins with the sound of which letter?', options: ['D', 'F', 'G', 'H'], correctAnswerIndex: 1, explanation: '"Fish" starts with the /f/ sound, made by the letter F.' },
        { id: 'q4', question: 'The word "house" begins with the sound of which letter?', options: ['G', 'H', 'J', 'K'], correctAnswerIndex: 1, explanation: '"House" starts with the /h/ sound, made by the letter H.' },
        { id: 'q5', question: 'The word "sun" begins with the sound of which letter?', options: ['R', 'S', 'T', 'V'], correctAnswerIndex: 1, explanation: '"Sun" starts with the /s/ sound, made by the letter S.' },
        { id: 'q6', question: 'The word "car" begins with the sound of which letter?', options: ['B', 'C', 'D', 'F'], correctAnswerIndex: 1, explanation: '"Car" starts with the /k/ sound, made by the letter C.' },
        { id: 'q7', question: 'The word "apple" begins with the sound of which letter?', options: ['A', 'B', 'C', 'D'], correctAnswerIndex: 0, explanation: '"Apple" starts with the short /a/ vowel sound, made by the letter A.' },
        { id: 'q8', question: 'The word "bear" begins with the sound of which letter?', options: ['A', 'B', 'C', 'D'], correctAnswerIndex: 1, explanation: '"Bear" starts with the /b/ sound, made by the letter B.' },
        { id: 'q9', question: 'The word "balloon" begins with the sound of which letter?', options: ['A', 'B', 'C', 'D'], correctAnswerIndex: 1, explanation: '"Balloon" starts with the /b/ sound, made by the letter B.' },
        { id: 'q10', question: 'The word "flower" begins with the sound of which letter?', options: ['D', 'F', 'G', 'H'], correctAnswerIndex: 1, explanation: '"Flower" starts with the /f/ sound, made by the letter F.' },
        { id: 'q11', question: 'The word "milk" begins with the sound of which letter?', options: ['L', 'M', 'N', 'P'], correctAnswerIndex: 1, explanation: '"Milk" starts with the /m/ sound, made by the letter M.' },
        { id: 'q12', question: 'The word "music" begins with the sound of which letter?', options: ['L', 'M', 'N', 'P'], correctAnswerIndex: 1, explanation: '"Music" starts with the /m/ sound, made by the letter M.' },
        { id: 'q13', question: 'The word "moon" begins with the sound of which letter?', options: ['L', 'M', 'N', 'P'], correctAnswerIndex: 1, explanation: '"Moon" starts with the /m/ sound, made by the letter M.' },
        { id: 'q14', question: 'The word "penguin" begins with the sound of which letter?', options: ['M', 'N', 'P', 'Q'], correctAnswerIndex: 2, explanation: '"Penguin" starts with the /p/ sound, made by the letter P.' },
        { id: 'q15', question: 'The word "queen" begins with the sound of which letter?', options: ['P', 'Q', 'R', 'S'], correctAnswerIndex: 1, explanation: '"Queen" starts with the /kw/ sound, made by the letter Q.' },
        { id: 'q16', question: 'The word "rainbow" begins with the sound of which letter?', options: ['P', 'Q', 'R', 'S'], correctAnswerIndex: 2, explanation: '"Rainbow" starts with the /r/ sound, made by the letter R.' },
        { id: 'q17', question: 'The word "rocket" begins with the sound of which letter?', options: ['P', 'Q', 'R', 'S'], correctAnswerIndex: 2, explanation: '"Rocket" starts with the /r/ sound, made by the letter R.' },
        { id: 'q18', question: 'The word "star" begins with the sound of which letter?', options: ['Q', 'R', 'S', 'T'], correctAnswerIndex: 2, explanation: '"Star" starts with the /s/ sound, made by the letter S.' },
        { id: 'q19', question: 'The word "turtle" begins with the sound of which letter?', options: ['R', 'S', 'T', 'V'], correctAnswerIndex: 2, explanation: '"Turtle" starts with the /t/ sound, made by the letter T.' },
        { id: 'q20', question: 'The word "volleyball" begins with the sound of which letter?', options: ['S', 'T', 'V', 'W'], correctAnswerIndex: 2, explanation: '"Volleyball" starts with the /v/ sound, made by the letter V.' },
        { id: 'q21', question: 'The word "window" begins with the sound of which letter?', options: ['T', 'V', 'W', 'X'], correctAnswerIndex: 2, explanation: '"Window" starts with the /w/ sound, made by the letter W.' },
        { id: 'q22', question: 'The word "zebra" begins with the sound of which letter?', options: ['W', 'X', 'Y', 'Z'], correctAnswerIndex: 3, explanation: '"Zebra" starts with the /z/ sound, made by the letter Z.' },
        { id: 'q23', question: 'The word "yarn" begins with the sound of which letter?', options: ['W', 'X', 'Y', 'Z'], correctAnswerIndex: 2, explanation: '"Yarn" starts with the /y/ sound, made by the letter Y.' },
        { id: 'q24', question: 'The word "fireworks" begins with the sound of which letter?', options: ['D', 'F', 'G', 'H'], correctAnswerIndex: 1, explanation: '"Fireworks" starts with the /f/ sound, made by the letter F.' },
        { id: 'q25', question: 'The word "egg" begins with the sound of which letter?', options: ['D', 'E', 'F', 'G'], correctAnswerIndex: 1, explanation: '"Egg" starts with the short /e/ vowel sound, made by the letter E.' }
    ]
  },
  'g1-math-q1': {
    id: 'g1-math-q1',
    questions: [
        { id: 'q1', question: 'What number comes after 12?', options: ['11', '13', '14', '10'], correctAnswerIndex: 1, explanation: 'When counting up, 13 is the number that follows 12.' },
        { id: 'q2', question: 'What number comes before 18?', options: ['17', '19', '16', '20'], correctAnswerIndex: 0, explanation: 'The number 17 comes just before 18.' },
        { id: 'q3', question: 'How many apples are in a group of 15?', options: ['14', '15', '16', '17'], correctAnswerIndex: 1, explanation: 'The word "fifteen" represents the quantity 15.' },
        { id: 'q4', question: 'What number comes after 19?', options: ['18', '20', '21', '17'], correctAnswerIndex: 1, explanation: 'The number 20 comes directly after 19.' },
        { id: 'q5', question: 'What number comes between 14 and 16?', options: ['13', '15', '17', '14'], correctAnswerIndex: 1, explanation: '15 is the number that is in between 14 and 16.' },
        { id: 'q6', question: 'Count backward: 20, 19, 18, ___', options: ['19', '17', '16', '15'], correctAnswerIndex: 1, explanation: 'When counting down from 18, the next number is 17.' },
        { id: 'q7', question: 'What is the smallest number in this list: 5, 1, 9, 3?', options: ['5', '1', '9', '3'], correctAnswerIndex: 1, explanation: '1 is the smallest value among the given options.' },
        { id: 'q8', question: 'What is the largest number in this list: 19, 20, 11, 18?', options: ['19', '20', '11', '18'], correctAnswerIndex: 1, explanation: '20 is the largest value among the given options.' },
        { id: 'q9', question: 'How many stars are in a group of 18?', options: ['17', '18', '19', '20'], correctAnswerIndex: 1, explanation: 'The word "eighteen" represents the quantity 18.' },
        { id: 'q10', question: 'What number comes before 11?', options: ['10', '12', '9', '13'], correctAnswerIndex: 0, explanation: 'The number 10 comes right before 11.' },
        { id: 'q11', question: 'How many cars are in a group of 13?', options: ['12', '13', '14', '15'], correctAnswerIndex: 1, explanation: 'The word "thirteen" represents the quantity 13.' },
        { id: 'q12', question: 'What number comes after 16?', options: ['15', '17', '18', '14'], correctAnswerIndex: 1, explanation: 'The number 17 follows 16.' },
        { id: 'q13', question: 'Count backward: 15, 14, 13, ___', options: ['14', '12', '11', '10'], correctAnswerIndex: 1, explanation: 'When counting down from 13, the next number is 12.' },
        { id: 'q14', question: 'What number comes between 17 and 19?', options: ['16', '18', '20', '17'], correctAnswerIndex: 1, explanation: 'The number 18 is between 17 and 19.' },
        { id: 'q15', question: 'How many balloons are in a group of 16?', options: ['15', '16', '17', '18'], correctAnswerIndex: 1, explanation: 'The word "sixteen" represents the quantity 16.' },
        { id: 'q16', question: 'What number comes before 20?', options: ['18', '19', '21', '17'], correctAnswerIndex: 1, explanation: 'The number 19 comes right before 20.' },
        { id: 'q17', question: 'How many flowers are in a group of 12?', options: ['11', '12', '13', '14'], correctAnswerIndex: 1, explanation: 'The word "twelve" represents the quantity 12.' },
        { id: 'q18', question: 'What number comes after 13?', options: ['12', '14', '15', '11'], correctAnswerIndex: 1, explanation: 'The number 14 comes after 13.' },
        { id: 'q19', question: 'Count backward: 10, 9, 8, ___', options: ['9', '7', '6', '5'], correctAnswerIndex: 1, explanation: 'When counting down from 8, the next number is 7.' },
        { id: 'q20', question: 'What number comes between 11 and 13?', options: ['10', '12', '14', '11'], correctAnswerIndex: 1, explanation: 'The number 12 is between 11 and 13.' },
        { id: 'q21', question: 'How many bears are in a group of 19?', options: ['18', '19', '20', '17'], correctAnswerIndex: 1, explanation: 'The word "nineteen" represents the quantity 19.' },
        { id: 'q22', question: 'What number comes before 15?', options: ['13', '14', '16', '12'], correctAnswerIndex: 1, explanation: 'The number 14 comes before 15.' },
        { id: 'q23', question: 'How many houses are in a group of 17?', options: ['16', '17', '18', '19'], correctAnswerIndex: 1, explanation: 'The word "seventeen" represents the quantity 17.' },
        { id: 'q24', question: 'What number comes after 18?', options: ['17', '19', '20', '16'], correctAnswerIndex: 1, explanation: 'The number 19 comes after 18.' },
        { id: 'q25', question: 'Count backward: 20, 19, 18, 17, ___', options: ['18', '16', '15', '14'], correctAnswerIndex: 1, explanation: 'When counting down from 17, the next number is 16.' }
    ]
  },
  'g1-sci-q1': {
    id: 'g1-sci-q1',
    questions: [
        { id: 'q1', question: 'Which sense do you use to see the color of a flower?', options: ['Hearing', 'Sight', 'Smell', 'Touch'], correctAnswerIndex: 1, explanation: 'Your sense of sight, using your eyes, allows you to see colors.' },
        { id: 'q2', question: 'Which body part do you use for hearing a song?', options: ['Eyes', 'Nose', 'Ears', 'Hands'], correctAnswerIndex: 2, explanation: 'Your ears are the body parts responsible for your sense of hearing.' },
        { id: 'q3', question: 'What sense helps you enjoy the smell of fresh cookies?', options: ['Taste', 'Touch', 'Smell', 'Sight'], correctAnswerIndex: 2, explanation: 'Your sense of smell, using your nose, lets you detect odors.' },
        { id: 'q4', question: 'Which sense do you use to feel if a kitten is soft?', options: ['Touch', 'Sight', 'Hearing', 'Taste'], correctAnswerIndex: 0, explanation: 'Your sense of touch, using your skin, lets you feel textures like softness.' },
        { id: 'q5', question: 'What sense do you use to know if a lemon is sour?', options: ['Smell', 'Hearing', 'Sight', 'Taste'], correctAnswerIndex: 3, explanation: 'Your sense of taste, using your tongue, helps you identify flavors like sour.' },
        { id: 'q6', question: 'Your eyes are for...', options: ['Tasting', 'Hearing', 'Seeing', 'Smelling'], correctAnswerIndex: 2, explanation: 'The primary function of your eyes is for the sense of sight.' },
        { id: 'q7', question: 'Your nose is for...', options: ['Seeing', 'Smelling', 'Tasting', 'Touching'], correctAnswerIndex: 1, explanation: 'The primary function of your nose is for the sense of smell.' },
        { id: 'q8', question: 'Your tongue is for...', options: ['Hearing', 'Seeing', 'Touching', 'Tasting'], correctAnswerIndex: 3, explanation: 'The primary function of your tongue is for the sense of taste.' },
        { id: 'q9', question: 'Your ears are for...', options: ['Hearing', 'Smelling', 'Tasting', 'Seeing'], correctAnswerIndex: 0, explanation: 'The primary function of your ears is for the sense of hearing.' },
        { id: 'q10', question: 'Your skin is for...', options: ['Tasting', 'Hearing', 'Touching', 'Seeing'], correctAnswerIndex: 2, explanation: 'The primary function of your skin is for the sense of touch.' },
        { id: 'q11', question: 'Which sense tells you if music is loud or soft?', options: ['Sight', 'Hearing', 'Taste', 'Smell'], correctAnswerIndex: 1, explanation: 'Our sense of hearing helps us determine the volume of sounds.' },
        { id: 'q12', question: 'If you touch a hot stove, which sense warns you of danger?', options: ['Smell', 'Sight', 'Touch', 'Hearing'], correctAnswerIndex: 2, explanation: 'The sense of touch warns us about temperature and pain to keep us safe.' },
        { id: 'q13', question: 'Which sense do you use to watch a cartoon?', options: ['Hearing', 'Sight', 'Smell', 'Taste'], correctAnswerIndex: 1, explanation: 'You use your sense of sight to watch things, like a cartoon on a screen.' },
        { id: 'q14', question: 'You smell smoke from a fire. Which sense is alerting you?', options: ['Taste', 'Smell', 'Touch', 'Sight'], correctAnswerIndex: 1, explanation: 'Your sense of smell is very important for detecting dangers like smoke.' },
        { id: 'q15', question: 'How many senses have you learned about?', options: ['Three', 'Four', 'Five', 'Six'], correctAnswerIndex: 2, explanation: 'We have been learning about the five main senses: sight, hearing, smell, taste, and touch.' },
        { id: 'q16', question: 'Which sense do you use to know if a blanket is rough or smooth?', options: ['Touch', 'Sight', 'Taste', 'Smell'], correctAnswerIndex: 0, explanation: 'The sense of touch helps us feel different textures.' },
        { id: 'q17', question: 'You see a beautiful rainbow after it rains. Which sense are you using?', options: ['Hearing', 'Sight', 'Smell', 'Touch'], correctAnswerIndex: 1, explanation: 'You use your sense of sight to see the beautiful colors of a rainbow.' },
        { id: 'q18', question: 'Which sense lets you taste the sweetness of a juicy mango?', options: ['Smell', 'Touch', 'Taste', 'Hearing'], correctAnswerIndex: 2, explanation: 'The sense of taste lets us enjoy different flavors like sweet, sour, salty, and bitter.' },
        { id: 'q19', question: 'Which sense helps you hear a dog barking outside?', options: ['Hearing', 'Sight', 'Smell', 'Taste'], correctAnswerIndex: 0, explanation: 'Your sense of hearing allows you to hear sounds near and far, like a dog barking.' },
        { id: 'q20', question: 'Can you taste pizza with your nose?', options: ['Yes', 'No'], correctAnswerIndex: 1, explanation: 'You can smell pizza with your nose, but you need your tongue and sense of taste to know its flavor.' },
        { id: 'q21', question: 'Which sense would you use to tell if ice cream is cold?', options: ['Sight', 'Touch', 'Smell', 'Hearing'], correctAnswerIndex: 1, explanation: 'Your sense of touch can feel temperature, so you would know the ice cream is cold.' },
        { id: 'q22', question: 'Which body part is most important for smelling flowers?', options: ['Eyes', 'Ears', 'Nose', 'Mouth'], correctAnswerIndex: 2, explanation: 'The nose is the main organ we use for our sense of smell.' },
        { id: 'q23', question: 'When a parent reads you a bedtime story, which sense are you using to listen?', options: ['Hearing', 'Taste', 'Smell', 'Touch'], correctAnswerIndex: 0, explanation: 'You use your sense of hearing to listen to the words of the story.' },
        { id: 'q24', question: 'To know the flavor of a juice, you must use your sense of...', options: ['Sight', 'Taste', 'Touch', 'Smell'], correctAnswerIndex: 1, explanation: 'Only your sense of taste can tell you the true flavor of the juice.' },
        { id: 'q25', question: 'Closing your eyes stops you from using which sense?', options: ['Hearing', 'Smell', 'Sight', 'Taste'], correctAnswerIndex: 2, explanation: 'Your eyes are for seeing, so closing them means you cannot use your sense of sight.' }
    ]
  },

  // Grade 2 (Original Quizzes)
  'g2-math-q1': { id: 'g2-math-q1', questions: [{ id: 'q1', question: 'In the number 57, what does the 5 stand for?', options: ['5 ones', '5 tens', '5 hundreds'], correctAnswerIndex: 1, explanation: 'In 57, the 5 is in the tens place, so it stands for 50.' }] },
  'g2-math-q2': { id: 'g2-math-q2', questions: [{ id: 'q1', question: 'What unit would you use to measure the length of your pencil?', options: ['Kilograms', 'Centimeters', 'Liters'], correctAnswerIndex: 1, explanation: 'Centimeters are small units of length, perfect for measuring something like a pencil.' }] },
  'g2-eng-q1': { id: 'g2-eng-q1', questions: [{ id: 'q1', question: 'Which of the following is a noun?', options: ['run', 'happy', 'beach'], correctAnswerIndex: 2, explanation: 'A noun is a person, place, or thing. "Beach" is a place.' }] },
  'g2-eng-q2': { id: 'g2-eng-q2', questions: [{ id: 'q1', question: 'What is the verb in the sentence "The bird sings"?', options: ['The', 'bird', 'sings'], correctAnswerIndex: 2, explanation: 'The verb is the action word. "sings" is what the bird is doing.' }] },
  'g2-sci-q1': { id: 'g2-sci-q1', questions: [{ id: 'q1', question: 'What state of matter is the juice in your cup?', options: ['Solid', 'Liquid', 'Gas'], correctAnswerIndex: 1, explanation: 'Juice is a liquid because it can be poured and takes the shape of its container.' }] },
  'g2-sci-q2': { id: 'g2-sci-q2', questions: [{ id: 'q1', question: 'Bread, yams, and rice belong to which food group?', options: ['Fruits', 'Vegetables', 'Staples/Grains'], correctAnswerIndex: 2, explanation: 'These are staple foods that give us energy.' }] },
  'g2-social-q1': { id: 'g2-social-q1', questions: [{ id: 'q1', question: 'Who helps you when you are sick?', options: ['A farmer', 'A police officer', 'A nurse'], correctAnswerIndex: 2, explanation: 'A nurse is a community helper who takes care of people when they are sick.' }] },
  'g2-social-q2': { id: 'g2-social-q2', questions: [{ id: 'q1', question: 'What does a compass rose on a map show?', options: ['How far places are', 'Directions (North, South, East, West)', 'What the weather is'], correctAnswerIndex: 1, explanation: 'A compass rose shows the main directions to help you read a map.' }] },
  
  // Grade 3 (Original Quizzes)
  'g3-math-q1': { id: 'g3-math-q1', questions: [{ id: 'q1', question: 'What is 3 x 5?', options: ['8', '15', '2'], correctAnswerIndex: 1, explanation: '3 x 5 is the same as 5+5+5, which equals 15.' }] },
  'g3-math-q2': { id: 'g3-math-q2', questions: [{ id: 'q1', question: 'If you share 12 candies among 4 friends, how many does each get?', options: ['3', '4', '6'], correctAnswerIndex: 0, explanation: '12 divided by 4 is 3. Each friend gets 3 candies.' }] },
  'g3-eng-q1': { id: 'g3-eng-q1', questions: [{ id: 'q1', question: 'Which word is an adjective in "a beautiful, red hibiscus"?', options: ['hibiscus', 'a', 'beautiful'], correctAnswerIndex: 2, explanation: 'An adjective is a describing word. "Beautiful" describes the hibiscus.' }] },
  'g3-eng-q2': { id: 'g3-eng-q2', questions: [{ id: 'q1', question: 'What is a paragraph?', options: ['One long sentence', 'A group of sentences about one idea', 'A list of words'], correctAnswerIndex: 1, explanation: 'A paragraph groups sentences together to talk about a single topic.' }] },
  'g3-sci-q1': { id: 'g3-sci-q1', questions: [{ id: 'q1', question: 'Which of these is the center of our solar system?', options: ['The Moon', 'The Earth', 'The Sun'], correctAnswerIndex: 2, explanation: 'The Earth and all other planets revolve around the Sun.' }] },
  'g3-sci-q2': { id: 'g3-sci-q2', questions: [{ id: 'q1', question: 'Which of these is a healthy habit?', options: ['Watching TV all day', 'Eating fruits and vegetables', 'Never brushing your teeth'], correctAnswerIndex: 1, explanation: 'Eating nutritious food like fruits and vegetables is a very important healthy habit.' }] },
  'g3-social-q1': { id: 'g3-social-q1', questions: [{ id: 'q1', question: 'A National Hero is someone who...', options: ['is a famous singer.', 'has done great things for their country.', 'lives in the capital city.'], correctAnswerIndex: 1, explanation: 'National Heroes are honored because they made important contributions to their country\'s history and development.' }] },

  // Grade 4 (Original Quizzes)
  'g4-math-q1': { id: 'g4-math-q1', questions: [{ id: 'q1', question: 'What fraction of a pizza is one slice if it\'s cut into 4 equal slices?', options: ['1/2', '1/4', '4/1'], correctAnswerIndex: 1, explanation: 'If the whole is divided into 4 equal parts, one part is one-fourth, or 1/4.' }] },
  'g4-math-q2': { id: 'g4-math-q2', questions: [{ id: 'q1', question: 'What type of angle is the corner of a square?', options: ['Acute angle', 'Obtuse angle', 'Right angle'], correctAnswerIndex: 2, explanation: 'A right angle is exactly 90 degrees, like the corners of a square or a book.' }] },
  'g4-eng-q1': { id: 'g4-eng-q1', questions: [{ id: 'q1', question: 'Which pronoun can replace "My mother"?', options: ['He', 'She', 'It'], correctAnswerIndex: 1, explanation: '"She" is the pronoun used to refer to a female person.' }] },
  'g4-sci-q1': { id: 'g4-sci-q1', questions: [{ id: 'q1', question: 'What is the home of many colorful fish in the Caribbean Sea?', options: ['A forest', 'A desert', 'A coral reef'], correctAnswerIndex: 2, explanation: 'Coral reefs are vibrant underwater ecosystems that provide a home for countless marine animals.' }] },
  'g4-sci-q2': { id: 'g4-sci-q2', questions: [{ id: 'q1', question: 'Which system gives our body its shape and support?', options: ['Digestive system', 'Skeletal system', 'Nervous system'], correctAnswerIndex: 1, explanation: 'The skeletal system is made of all our bones, which form our body\'s framework.' }] },
  'g4-social-q1': { id: 'g4-social-q1', questions: [{ id: 'q1', question: 'Who were the first people known to live in the Caribbean?', options: ['The English', 'The Tainos and Kalinagos', 'The Spanish'], correctAnswerIndex: 1, explanation: 'The Tainos and Kalinagos were the indigenous (first) peoples of the Caribbean islands before the arrival of Europeans.' }] },
  'g4-social-q2': { id: 'g4-social-q2', questions: [{ id: 'q1', question: 'Which of these is NOT a Caribbean island?', options: ['Jamaica', 'Hawaii', 'Barbados'], correctAnswerIndex: 1, explanation: 'Hawaii is an island in the Pacific Ocean, not the Caribbean Sea.' }] },
  
  // Grade 5 (Original Quizzes)
  'g5-math-q1': { id: 'g5-math-q1', questions: [{ id: 'q1', question: 'How is the fraction 1/2 written as a decimal?', options: ['0.25', '0.5', '1.2'], correctAnswerIndex: 1, explanation: '1/2 is one half, and the decimal 0.5 also means one half.' }] },
  'g5-math-q2': { id: 'g5-math-q2', questions: [{ id: 'q1', question: 'A rectangle is 5cm long and 2cm wide. What is its area?', options: ['14 cm', '7 sq cm', '10 sq cm'], correctAnswerIndex: 2, explanation: 'The area of a rectangle is length times width. 5 cm * 2 cm = 10 square cm.' }] },
  'g5-eng-q1': { id: 'g5-eng-q1', questions: [{ id: 'q1', question: 'What is the setting of a story?', options: ['Who is in the story', 'The problem in the story', 'Where and when the story happens'], correctAnswerIndex: 2, explanation: 'The setting tells the reader the time and place of the story.' }] },
  'g5-sci-q1': { id: 'g5-sci-q1', questions: [{ id: 'q1', question: '"It will be sunny and hot tomorrow" is a description of...', options: ['Climate', 'Weather', 'Season'], correctAnswerIndex: 1, explanation: 'Weather describes the condition of the atmosphere at a specific, short period of time.' }] },
  'g5-sci-q2': { id: 'g5-sci-q2', questions: [{ id: 'q1', question: 'What do you need to make a simple circuit light a bulb?', options: ['A battery, wires, and a bulb', 'A battery and a bulb', 'Just wires and a bulb'], correctAnswerIndex: 0, explanation: 'You need a power source (battery), a path (wires), and a load (bulb) to make a complete circuit.' }] },
  'g5-social-q1': { id: 'g5-social-q1', questions: [{ id: 'q1', question: 'What was Emancipation in the Caribbean?', options: ['The arrival of Columbus', 'The end of slavery', 'The start of the sugar industry'], correctAnswerIndex: 1, explanation: 'Emancipation was the declaration of freedom for enslaved people in the British Caribbean in the 1830s.' }] },
  'g5-social-q2': { id: 'g5-social-q2', questions: [{ id: 'q1', question: 'Which style of music originated in Jamaica?', options: ['Calypso', 'Soca', 'Reggae'], correctAnswerIndex: 2, explanation: 'Reggae is a world-famous music genre that started in Jamaica in the 1960s.' }] },
  
  // Grade 6 (Original Quizzes)
  'g6-math-q1': { id: 'g6-math-q1', questions: [{ id: 'q1', question: 'What is 50% of 20?', options: ['5', '10', '15'], correctAnswerIndex: 1, explanation: '50% means half. Half of 20 is 10.' }] },
  'g6-math-q2': { id: 'g6-math-q2', questions: [{ id: 'q1', question: 'If a recipe needs 2 cups of sugar for every 3 cups of flour, what is the ratio of sugar to flour?', options: ['3:2', '2:3', '2:5'], correctAnswerIndex: 1, explanation: 'A ratio compares quantities in a specific order. The ratio of sugar to flour is 2 to 3, or 2:3.' }] },
  'g6-math-q3': { id: 'g6-math-q3', questions: [{ id: 'q1', question: 'What is a bar graph used for?', options: ['To tell a story', 'To compare amounts of different things', 'To show the parts of a whole'], correctAnswerIndex: 1, explanation: 'Bar graphs are great for visually comparing data, like the number of students who prefer different sports.' }] },
  'g6-eng-q1': { id: 'g6-eng-q1', questions: [{ id: 'q1', question: 'Which is an example of a simile?', options: ['He is a lion.', 'He is brave like a lion.', 'He roared.'], correctAnswerIndex: 1, explanation: 'A simile compares two things using the words "like" or "as".' }] },
  'g6-eng-q2': { id: 'g6-eng-q2', questions: [{ id: 'q1', question: 'What is the main purpose of persuasive writing?', options: ['To tell a story', 'To give facts', 'To convince the reader of an opinion'], correctAnswerIndex: 2, explanation: 'Persuasive writing aims to make the reader agree with the writer\'s point of view.' }] },
  'g6-sci-q1': { id: 'g6-sci-q1', questions: [{ id: 'q1', question: 'What gas do plants release during photosynthesis that humans need to breathe?', options: ['Carbon Dioxide', 'Nitrogen', 'Oxygen'], correctAnswerIndex: 2, explanation: 'Plants take in Carbon Dioxide and release Oxygen, which is essential for us to live.' }] },
  'g6-sci-q2': { id: 'g6-sci-q2', questions: [{ id: 'q1', question: 'Which natural event is a major threat in the Caribbean during the months of June to November?', options: ['Tornados', 'Blizzards', 'Hurricanes'], correctAnswerIndex: 2, explanation: 'The Atlantic Hurricane Season officially runs from June to November, posing a significant threat to the region.' }] },
  'g6-social-q1': { id: 'g6-social-q1', questions: [{ id: 'q1', question: 'What is the main purpose of CARICOM?', options: ['To be a single large country', 'For Caribbean countries to cooperate and work together', 'To manage all the region\'s airports'], correctAnswerIndex: 1, explanation: 'CARICOM (Caribbean Community) promotes economic integration and cooperation among its member countries.' }] },
  'g6-social-q2': { id: 'g6-social-q2', questions: [{ id: 'q1', question: 'Which of the following is a responsibility of a citizen?', options: ['The right to vote', 'The right to free speech', 'Keeping your community clean'], correctAnswerIndex: 2, explanation: 'While voting and free speech are rights, actively helping to keep your community clean is a responsibility.' }] },
};