import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
}
refs.form.addEventListener('submit', onFormSubmit),
refs.form.addEventListener('input', throttle( onTextareaInput, 500))

const formData = {};
  
function onTextareaInput(e) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData)) ;

formData[e.target.name] = e.target.value;  
      console.log(formData);
}

function onFormSubmit(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

   
}
function dataForm() {
    const dataParse = JSON.parse(localStorage.getItem('feedback-form-state'));
    
    if (dataParse) {
               refs.email.value = dataParse.email;
            refs.message.value = dataParse.message;
    }

}
dataForm();



