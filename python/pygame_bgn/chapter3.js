
// one
const one_buttons = document.querySelectorAll('.one-answer-button');
const one_answerText = document.getElementById('one-answer-text');

function one_correct() {
  one_answerText.textContent = 'Correct!';
}

function one_wrong() {
  one_answerText.textContent = 'Wrong! The Correct Answer is D';
}

one_buttons.forEach(one_button => {
  one_button.addEventListener('click', function() {
    // Reset background color of all buttons (improved)
    for (const one_btn of one_buttons) {
      one_btn.style.backgroundColor = ''; // Set background color to empty string
    }

    if (one_button.value === 'one-D') {
      one_correct();
      one_button.style.backgroundColor = 'green'
    } if (one_button.value === 'one-A' || one_button.value === 'one-C' || one_button.value === 'one-B') {
      one_wrong();
      one_button.style.backgroundColor = 'red'
    }
  });
});

// two

const two_buttons = document.querySelectorAll('.two-answer-button');
const two_answerText = document.getElementById('two-answer-text');

function two_correct() {
  two_answerText.textContent = 'Correct, even though you can\'t draw anything in Pygame but you can always draw an image representing the thing you wanted';
}

function two_wrong() {
  two_answerText.textContent = 'Wrong, even though you can\'t draw anything in Pygame but you can always draw an image representing the thing you wanted';
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
    } if (two_button.value === 'two-B') {
      two_wrong();
      two_button.style.backgroundColor = 'red'
    }
  });
});