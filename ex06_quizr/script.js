const questions = [{
  question: 'Linus Torvalds created Linux and Git.',
  correctAnswer: 'True',
}, {
  question: 'The programming language "Python" is based off a modified version of "JavaScript".',
  correctAnswer: 'False',
}, {
  question: 'The logo for Snapchat is a Bell.',
  correctAnswer: 'False',
}, {
  question: 'RAM stands for Random Access Memory.',
  correctAnswer: 'True',
}, {
  question: '"HTML" stands for Hypertext Markup Language.',
  correctAnswer: 'True',
}, {
  question: 'In most programming languages, the operator ++ is equivalent to the statement "+= 1".',
  correctAnswer: 'True',
}, {
  question: 'The Windows 7 operating system has six main editions.',
  correctAnswer: 'True',
}, {
  question: 'The Windows ME operating system was released in the year 2000.',
  correctAnswer: 'True',
}, {
  question: 'The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.',
  correctAnswer: 'False',
}, {
  question: 'Linux was first created as an alternative to Windows XP.',
  correctAnswer: 'False',
}];
// #answer-container
const htmlAnswerContainer = document.querySelector('#answer-container');
// #question
const htmlQuestion = document.querySelector('#question');
// #total-correct
const htmlTotal = document.querySelector('#total-correct');
// save scrambled array here
let scrambledQuestions;

/**
 * @returns {[]} copy of questions with items in random order
 */
function scrambleQuestions() {
  // return a copy of questions with the items in a random order
  return questions.sort(function(){
    return Math.random()-0.5;
  });
}

function initResults() {
  // select all elements with class .result
  // remove classes is-success and is-danger
  // add class is-dark
  document.querySelectorAll('.result').forEach(function(result){
    result.classList.remove('is-succes','is-large');
    result.classList.add('is-dark');
  })
}

function changeTotal(total) {
  // change htmlTotal
  htmlTotal.textContent = total;
}

function changeQuestionIndex(questionIndex) {
  // change data-index in htmlQuestion
  htmlQuestion.dataset.index = questionIndex;
}

function changeQuestion(questionIndex) {
  // change textContent of htmlQuestion to the correct question (with questionIndex)
  // if no question is available (if all questions are answered) use following
  // 'Your score is 6. Wanna try again?'
  // of course 6 should be replaced by the correct number
  if(questionIndex >= scrambledQuestions.length){
    htmlQuestion.textContent = 'Your score is'+ htmltotal.textContent +'.Wanna try again?';
  }
  else {
    htmlQuestion.textContent = scrambleQuestions[questionIndex].question;
  }
}

function init() {
  // this function initializes the quiz
  // no need to edit this function
  scrambledQuestions = scrambleQuestions();
  initResults();
  changeTotal(0);
  changeQuestionIndex(0);
  changeQuestion(0);
}

function answeredCorrectly(questionIndex) {
  // update the correct .result element use questionIndex
  // remove class is-dark
  // add class is-success
  // change total
  const currentResultElement = document.querySelector('.result:nthChild(' + (questionIndex+1) +')');
  currentResultElement.classList.remove ('is-dark');
  currentResultElement.classList.add ('is-success');
  changeTotal(parseInt(htmlTotal.textContent)+1);
}

function answeredIncorrectly(questionIndex) {
  // update the correct .result element use questionIndex
  // remove class is-dark
  // add class is-danger
  const currentResultElement = document.querySelector('.result:nthChild('+ (questionIndex + 1)+')');
  currentResultElement.classList.remove('is-dark');
  currentResultElement.classList.remove('is-danger');
}

function answered(event) {
  // play the solution and make it work!!!
  if (event.target.matches('.answer')){
    const questionIndex = parseInt(htmlQuestion.dataset.index);
    const givenAnswer = event.target.textContent;
    if(questionIndex >=scrambledQuestions.lenght){
      if (givenAnswer === 'True'){
        init();
      }
    } else {
      const {correctAnswer} = scrambledQuestions[questionIndex];
      if (givenAnswer === correctAnswer){
        answeredCorrectly(questionIndex);
      }
      else {
        answeredIncorrectly(questionIndex);
      }
      changeQuestionIndex(questionIndex +1);``
      changeQuestion(questionIndex + 1);
    }
  }
}

htmlAnswerContainer.addEventListener('click', answered);
init();
