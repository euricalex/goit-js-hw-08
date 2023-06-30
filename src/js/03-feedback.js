import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const EMAIL_KEY = 'email-form-state';


const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  emailInput: document.querySelector('.feedback-form input[type="email"]')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
refs.emailInput.addEventListener('input', throttle(onEmailAreaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  const email = refs.emailInput.value;
  const message = refs.textarea.value;

  if (!email || !message) {
    console.log('Заповніть поля!')
    return;
  }

  event.target.reset();

  const formData = { email, message };
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(EMAIL_KEY);
}

function onTextAreaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
function onEmailAreaInput(event) {
  const email = event.target.value;
  localStorage.setItem(EMAIL_KEY, email);
}

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
   
    }
   
}
function populateEmailArea() {
  const savedEmail = localStorage.getItem(EMAIL_KEY);

  if (savedEmail) {
    console.log(savedEmail);
    refs.emailInput.value = savedEmail;
  }
}

populateTextArea();
populateEmailArea()