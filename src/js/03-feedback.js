import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  emailInput: document.querySelector('.feedback-form input[type="email"]')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
populateTextArea();

function onFormSubmit(event) {
  event.preventDefault();

  const email = refs.emailInput.value;
  const message = refs.textarea.value;

  event.target.reset();

  const formData = { email, message };
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
}

function onTextAreaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
   
    }
   
}