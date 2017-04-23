// create object that contains all trivia "cards" - including question, answers, true/false for each answer
// initialize count, score, showCard interval function
var trivia = {
  "cards":
  [
    {"answers":[{"correct":true,"body":"Diary, Ring, Locket, Cup, Diadem, Harry, Nagini "},{"correct":false,"body":"Diary, Locket, Ring, Cup, Diadem, Nagini, Harry"},{"correct":false,"body":"Harry, Diary, Locket, Diadem, Ring, Cup, Nagini"}],
    "question":"In what order were the horcruxes destroyed?"},
    {"answers":[{"correct":false,"body":"Percy"},{"correct":true,"body":"Bill"},{"correct":false,"body":"Charlie"}],
    "question":"Which Weasley sibling is the oldest?"},
    {"answers":[{"correct":true,"body":"Gilderoy Lockhart"},{"correct":false,"body":"Quirinus Quirrell"},{"correct":false,"body":"Mad-Eye Moody"}],
    "question":"Who taught Defense Against the Dark Arts in Harry's second year?"},
    {"answers":[{"correct":false,"body":"New parchment"},{"correct":false,"body":"Fresh cut grass"},{"correct":true,"body":"Old books"}],
    "question":"Which of these did Hermione not smell in the Amortentia potion?"},
    {"answers":[{"correct":false,"body":"Rowena Ravenclaw's Diadem"},{"correct":true,"body":"The Sorcerer's Stone"},{"correct":false,"body":"Tom Riddle's Diary"}],
    "question":"Which of these is not a horcrux?"},
    {"answers":[{"correct":false,"body":"Otter"},{"correct":false,"body":"Golden Retriever"},{"correct":true,"body":"Hare"}],
    "question":"What is Luna's Patronus?"},
    {"answers":[{"correct":false,"body":"Owls, cats, dogs"},{"correct":false,"body":"Owls, cats, small dragons "},{"correct":true,"body":"Owls, toads, cats"}],
    "question":"Which 3 pets are allowed at Hogwarts?"},
    {"answers":[{"correct":false,"body":"Allison"},{"correct":true,"body":"Ariana"},{"correct":false,"body":"Davina"}],"question":"What is Dumbledore's sister's name?"}
  ],
  "count" : 0,
  "score" : 0,
  "showCard" : ""
};

// after user clicks "play" button, immediately show the 1st card
// also start the trivia function, which will be called upon in 5 seconds
$('.glyphicon-play-circle').click(function() {
  showCard();
  startTrivia();
});

// show next trivia card every 5 seconds
function startTrivia() {

  trivia.showCard = setInterval(nextCard, 5000);

};


function showCard() {

  // delete the "play" button
  $('.button, .play').remove();

  // display question
  $("#trivia-question").html(trivia.cards[trivia.count].question);

  var answerDiv = $('<div>');
  var answers = trivia.cards[trivia.count].answers

  // for all cards, add button class to each answer and append to the answer div
  // buttons include text of answer and data attribute "true/false" of answer
  for (var i = 0; i < answers.length; i++) {
    var btn = $('<button type="button">');
    btn.addClass('answer-choice btn btn-default');
    btn.attr('data-correct', answers[i].correct);
    btn.text(answers[i].body);
    $(answerDiv).append(btn);
  };

  // update html with answer buttons
  $('#trivia-answers').html(answerDiv);
};

function nextCard() {

  trivia.count++

  if (trivia.count == trivia.cards.length) {
    showScore();
  };

  showCard();
  checkAnswer();

};

function checkAnswer() {
  // when user clicks on their answer choice, gather "true/false" attribute
  // if true, increase user's score by 1
  $('.answer-choice').click(function() {
    if ($(this).attr('data-correct') == 'true') {
      trivia.score++
    };
  });
};

function showScore() {

  //when game is over, clear interval and question/answer sections
  clearInterval(nextCard);
  $('#trivia-question').empty();
  $('#trivia-answers').empty();

  // display score
  // if user gets more than half of all questions correct, they are "true harry potter fans"
  $('#end-game').html('<h2>You got ' + trivia.score + ' out of ' + trivia.cards.length + ' correct!</h2>');
  if (trivia.score > ((trivia.cards.length)/2)) {
    $('#end-game').append('<h2>You ARE a true Harry Potter fan!</h2>')} else {
      $('#end-game').append('<h2>Sorry, but you are a wanna-be Harry Potter fan.</h2>')
  };

  // create button to reset game
  var btn = $('<button>');
  btn.addClass('start-over btn btn-default');
  btn.text('Try again?');
  $('#end-game').append(btn);

  // reset variables and restart game
  $('.start-over').click(function() {
    console.log('btn works');
    trivia.count = 0;
    trivia.showCard = "";
    trivia.score = 0;

    $('#end-game').empty();
    showCard();
    startTrivia();
  });

};
