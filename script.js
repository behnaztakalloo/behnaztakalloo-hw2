// TODO(you): Write the JavaScript necessary to complete the homework.
const choices = document.querySelectorAll('.choice-grid div');
const answers = {};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const qid = choice.dataset.questionId;
    const cid = choice.dataset.choiceId;

    const sameQuestion = document.querySelectorAll([data-question-id="${qid}"]);
    sameQuestion.forEach(c => {
      c.style.opacity = '1';
      c.style.backgroundColor = '#f4f4f4';
      c.querySelector('.checkbox').src = 'images/unchecked.png';
    });

    choice.style.opacity = '1';
    choice.style.backgroundColor = '#cfe3ff';
    choice.querySelector('.checkbox').src = 'images/checked.png';

    answers[qid] = cid;

    if (Object.keys(answers).length === 3) {
      showResult();
    }
  });
});

function showResult() {
  choices.forEach(c => c.style.pointerEvents = 'none');

  const resultId = answers.one === answers.two || answers.one === answers.three
    ? answers.one
    : answers.two === answers.three
      ? answers.two
      : answers.one;

  const result = RESULTS_MAP[resultId];
  const resultBox = document.getElementById('result');
  resultBox.querySelector('h1').textContent = result.title;
  resultBox.querySelector('p').textContent = result.contents;
  resultBox.style.display = 'block';
}