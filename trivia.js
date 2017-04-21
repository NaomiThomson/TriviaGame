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
    {"answers":[{"correct":false,"body":"Allison"},{"correct":true,"body":"Ariana"},{"correct":false,"body":"Davina"}],
    "question":"What is Dumbledore's sister's name?"}
  ],
  "count" : 0,
  "showCard" : "",
  "score" : 0
};


function nextCard() {

  if (trivia.count == trivia.cards.length) {
    showScore();
  };

  $("#trivia-question").html(trivia.cards[trivia.count].question);

  var answerDiv = $('<div>');
  var answers = trivia.cards[trivia.count].answers

  for (var i = 0; i < answers.length; i++) {
    var btn = $('<button type="button">');
    btn.addClass('answer-choice btn btn-default');
    btn.attr('data-correct', answers[i].correct);
    btn.text(answers[i].body);
    $(answerDiv).append(btn);
  };

  $('#trivia-answers').html(answerDiv);

  checkAnswer();

  trivia.count++

};

function checkAnswer() {
  $('.answer-choice').click(function() {
    console.log($(this).attr('data-correct'));
    if ($(this).attr('data-correct') == 'true') {
      trivia.score++
    };
  });
};


function startTrivia() {

  trivia.showCard = setInterval(nextCard, 5000);
};


function showScore() {

  clearInterval(trivia.showCard);
  $('#trivia-card').html('<h2>You got ' + trivia.score + ' out of 8 correct!</h2>');
  if (trivia.score > 4) {
    $('#trivia-card').append('<h2>You ARE a true Harry Potter fan!</h2>')} else {
      $('#trivia-card').append('<h2>Sorry, you are NOT a true Harry Potter fan.</h2>')
  }
}; 



startTrivia();
