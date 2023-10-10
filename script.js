function clearAll() {
    const memeContainer = document.querySelector(".meme-content");

    const jokeContainer = document.querySelector(".jokes-content");

    const quoteContainer = document.querySelector(".quote-content");

    const riddleContainer = document.querySelector(".riddle-content");

    memeContainer.innerHTML = "";
    jokeContainer.innerHTML = "";
    quoteContainer.innerHTML = "";
    riddleContainer.innerHTML = "";
}
function remove(){
    clearAll();
}

/**
* TODO: 
* - Show a random Meme in the correct location
* - Never show more than 1 meme at a time
*/
function showMeme() {
  // Value is a string representing image URL
  const randomMemeUrl = getRandomData('memes');
  const container = document.querySelector('.meme-content');
  const newImg = document.createElement('img');
  newImg.setAttribute('src',randomMemeUrl);
  clearAll();

  container.appendChild(newImg);
  
}

/**
* TODO: 
* - Show a random joke in the correct location
* - Never show more than 1 joke at a time
*/
function showJoke() {
  // Value is a string representing the joke
  const randomJokeText = getRandomData('jokes');
  
  const container = document.querySelector('.jokes-content');
  const text = document.createElement('p');
  text.textContent = randomJokeText;
  clearAll();

  container.appendChild(text);
  
}

/**
* TODO: 
* - Show a random quote in the correct location
* - Never show more than 1 quote at a time
*/
function showQuote() {
  // Value should be in format: { quote: '', author: '' }
  const randomQuote = getRandomData('quotes');

  const container = document.querySelector('.quote-content');
  const text = document.createElement('p');
  text.textContent = `${randomQuote.quote}  =>  Author : ${randomQuote.author}` ;
  clearAll();
  container.appendChild(text);
}

/**
* TODO: 
* - Show a random riddle in the correct location
* - Never show more than 1 riddle at a time
* - Always hide the riddle's answer initially
*/
function showRiddle() {
  // Value should be in format: { question: '', answer: '' }
  const randomRiddle = getRandomData('riddles');

    //   const question = randomRiddle.question;
    //   const answer = randomRiddle.answer;

    // same as this below

    const {question,answer} = randomRiddle;



  const container = document.querySelector('.riddle-content');

    const questionElem = document.createElement('p');
    questionElem.textContent=question;

    const AnsElem = document.createElement('p');
    AnsElem.textContent="The answer is :  "+answer;
    AnsElem.setAttribute("id","riddle-answer")
    AnsElem.hidden=true;

  clearAll();
  container.appendChild(questionElem);
  container.appendChild(AnsElem);

}

/**
* TODO: Unhide the riddle's answer
* - If there is no riddle shown, alert the user that there is no riddle
* - If there is a riddle shown and an answer shown, alert the user
*   that the answer is already revealed
* - If there is a riddle shown but no answer, unhide the answer!
*/
function revealAnswers() {
    const riddleContainer = document.querySelector('.riddle-content');
    const riddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer')

    if(riddle && answer.hidden){
        answer.hidden = false;
    }else if(riddle){
        alert('the answer is already revealed!')
    }else{
        alert('there is no riddle to reveal the answers')
    }
}

/**
* This function is used to get random data. 
* 
* Valid arguments:
*
* 'memes', 'jokes', 'quotes', 'riddles'
*
* Return values:
* 
* For meme data: 
* A string representing an image url
* 
* For joke data: 
* A string representing the joke
* 
* For quote data:
* An object - { quote: '', author: '' }
* 
* For riddle data:
* An object - { question: '', answer: '' }
*
* Example usage: getRandomData('quotes');
*/
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

// ----------------------------------------------------
// NO NEED TO CHANGE ANYTHING BELOW but...
// feel free to add/remove items from these lists to customize
// your results
// ----------------------------------------------------

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];

// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  { quote: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥ --> कर्म पर ही तुम्हारा अधिकार है, लेकिन कर्म के फलों में कभी नहीं… इसलिए कर्म को फल के लिए मत करो और न ही काम करने में तुम्हारी आसक्ति हो।', author: 'श्री कृष्ण'},

  { quote: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्संजायते कामः कामात्क्रोधोऽभिजायते॥ --> विषयों वस्तुओं के बारे में सोचते रहने से मनुष्य को उनसे आसक्ति हो जाती है। इससे उनमें कामना यानी इच्छा पैदा होती है और कामनाओं में विघ्न आने से क्रोध की उत्पत्ति होती है।', author: 'श्री कृष्ण' },

  { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },

  { quote: 'क्रोधाद्भवति संमोह: संमोहात्स्मृतिविभ्रम:। स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥ --> क्रोध से मनुष्य की मति मारी जाती है यानी मूढ़ हो जाती है जिससे स्मृति भ्रमित हो जाती है। स्मृति-भ्रम हो जाने से मनुष्य की बुद्धि नष्ट हो जाती है और बुद्धि का नाश हो जाने पर मनुष्य खुद का अपना ही नाश कर बैठता है।', author: 'श्री कृष्ण' },

  { quote: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥ --> हे भारत, जब-जब धर्म का लोप होता है और अधर्म में वृद्धि होती है, तब-तब मैं धर्म के अभ्युत्थान के लिए स्वयम् की रचना करता हूं अर्थात अवतार लेता हूं। ', author: 'श्री कृष्ण' },

  { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },

  { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },

  { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },

  { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },

  { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },

  { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },

  { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
];

// Source: https://www.rd.com/list/challenging-riddles/
const riddles = [
  { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
  { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
  { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
  { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
  { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
  { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' }
];

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles
};