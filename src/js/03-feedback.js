import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit),
  refs.form.addEventListener('input', throttle(onTextareaInput, 500));

const STORAGE_KEY = 'feedback-form-state';

function onTextareaInput(e) {
  const formData = {
    email: refs.email.value,
    message: refs.message.value,
  };
  //formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (refs.email.value !== '' && refs.message.value !== '') {
    console.log({ email: refs.email.value, message: refs.message.value });
  }
   if (refs.email.value  === '' || refs.message.value  === '') {
   return alert('Please fill in all the fields!');
  } 

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const dataParse = load(STORAGE_KEY);

if (dataParse) {
  refs.email.value = dataParse.email;
  refs.message.value = dataParse.message;
}
