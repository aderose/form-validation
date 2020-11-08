import form from './form';

const signUpForm = form.create([
  {
    type: 'label',
    textContent: 'Email',
    attributes: { for: 'email' },
    children: [
      { type: 'span', textContent: '*', attributes: { class: 'required' } },
    ],
  },
  {
    type: 'input',
    attributes: { type: 'email', name: 'email', id: 'email', required: '' },
  },
  {
    type: 'label',
    textContent: 'Country',
    attributes: { for: 'country' },
    children: [
      { type: 'span', textContent: '*', attributes: { class: 'required' } },
    ],
  },
  {
    type: 'input',
    attributes: { type: 'text', name: 'country', id: 'country', required: '' },
  },
  {
    type: 'label',
    textContent: 'Zip Code',
    attributes: { for: 'zipcode' },
    children: [
      { type: 'span', textContent: '*', attributes: { class: 'required' } },
    ],
  },
  {
    type: 'input',
    attributes: { type: 'text', name: 'zipcode', id: 'zipcode', required: '' },
  },
  {
    type: 'label',
    textContent: 'Password',
    attributes: { for: 'password' },
    children: [
      { type: 'span', textContent: '*', attributes: { class: 'required' } },
    ],
  },
  {
    type: 'input',
    attributes: {
      type: 'password',
      name: 'password',
      id: 'password',
      required: '',
    },
  },
  {
    type: 'label',
    textContent: 'Confirm Password',
    attributes: { for: 'confirmpw' },
    children: [
      { type: 'span', textContent: '*', attributes: { class: 'required' } },
    ],
  },
  {
    type: 'input',
    attributes: {
      type: 'password',
      name: 'confirmpw',
      id: 'confirmpw',
      required: '',
    },
  },
  {
    type: 'div',
    textContent: '* This field is required.',
    attributes: { class: 'required' },
  },
  {
    type: 'div',
    attributes: { class: 'confirmation' },
    children: [
      {
        type: 'input',
        attributes: { type: 'submit', value: 'Confirm', class: 'confirm' },
      },
      {
        type: 'input',
        attributes: { type: 'submit', value: 'Cancel', class: 'cancel' },
      },
    ],
  },
]);

document.querySelector('.content').appendChild(signUpForm);
