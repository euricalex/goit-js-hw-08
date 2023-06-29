import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-from-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input',throttle( onTextAreaInput, 500));
populateTextArea();

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);

};

function onTextAreaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};
function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        console.log(savedMessage);
    }
    refs.textarea.value = savedMessage;
    
}