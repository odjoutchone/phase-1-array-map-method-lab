const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased() {
    const tutorials = [
      "what does the this keyword mean?",
      "What Is The Constructor OO Pattern?",
      "Implementing Blockchain Web API",
      "the test driven development workflow",
      "what is NaN and how can we check for it",
      "what is the difference between stopPropagation and preventDefault?",
      "immutable state and pure functions",
      "what is the difference between == and ===?",
      "what is the difference between event capturing and bubbling?",
      "what is JSONP?"
    ];
    return tutorials.map(function(tutorial) {
      return tutorial.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    })
  }