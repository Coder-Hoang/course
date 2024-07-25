
// one
const one_buttons = document.querySelectorAll('.one-answer-button');
const one_answerText = document.getElementById('one-answer-text');

function one_correct() {
  one_answerText.textContent = 'Correct!';
}

function one_wrong() {
  one_answerText.textContent = 'Wrong! The Correct Answer is C';
}

one_buttons.forEach(one_button => {
  one_button.addEventListener('click', function() {
    // Reset background color of all buttons (improved)
    for (const one_btn of one_buttons) {
      one_btn.style.backgroundColor = ''; // Set background color to empty string
    }

    if (one_button.value === 'one-C') {
      one_correct();
      one_button.style.backgroundColor = 'green'
    } if (one_button.value === 'one-A' || one_button.value === 'one-B' || one_button.value === 'one-D') {
      one_wrong();
      one_button.style.backgroundColor = 'red'
    }
  });
});

// two

const two_buttons = document.querySelectorAll('.two-answer-button');
const two_answerText = document.getElementById('two-answer-text');

function two_correct() {
  two_answerText.textContent = 'Correct!';
}

function two_wrong() {
  two_answerText.textContent = 'Wrong! The Correct Answer is A';
}

two_buttons.forEach(two_button => {
  two_button.addEventListener('click', function() {
    // Reset background color of all buttons (improved)
    for (const two_btn of two_buttons) {
      two_btn.style.backgroundColor = ''; // Set background color to empty string
    }

    if (two_button.value === 'two-A') {
      two_correct();
      two_button.style.backgroundColor = 'green'
    } if (two_button.value === 'two-C' || two_button.value === 'two-B' || two_button.value === 'two-D') {
      two_wrong();
      two_button.style.backgroundColor = 'red'
    }
  });
});

// three
const three_buttons = document.querySelectorAll('.three-answer-button');
const three_answerText = document.getElementById('three-answer-text');

function three_correct() {
  three_answerText.textContent = 'Correct!';
}

function three_wrong() {
  three_answerText.textContent = 'Wrong! The Correct Answer is False';
}

three_buttons.forEach(three_button => {
  three_button.addEventListener('click', function() {
    // Reset background color of all buttons (improved)
    for (const three_btn of three_buttons) {
      three_btn.style.backgroundColor = ''; // Set background color to empty string
    }

    if (three_button.value === 'three-B') {
      three_correct();
      three_button.style.backgroundColor = 'green'
    } if (three_button.value === 'three-A') {
      three_wrong();
      three_button.style.backgroundColor = 'red'
    }
  });
});