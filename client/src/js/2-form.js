import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createFeedback } from '../api/feedbackApi.js';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

form.email.value = formData.email || '';
form.message.value = formData.message || '';

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    iziToast.warning({
      title: 'Warning',
      message: 'Fill please all fields',
      position: 'topRight',
    });
    return;
  }

  try {
    const savedFeedback = await createFeedback(formData);

    console.log('Saved feedback:', savedFeedback);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };

    iziToast.success({
      title: 'Success',
      message: 'Feedback sent successfully!',
      position: 'topRight',
    });
  } catch (error) {
    console.error(error);

    iziToast.error({
      title: 'Backend offline',
      message:
        'Live demo shows the frontend only. Run the backend locally to send feedback.',
      position: 'topRight',
    });
  }
});
