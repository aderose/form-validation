import form from './form';

const fields = [
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
      {
        type: 'span',
        textContent: '*',
        attributes: { class: 'required' },
      },
    ],
  },
  {
    type: 'input',
    attributes: {
      type: 'text',
      name: 'country',
      id: 'country',
      required: '',
      pattern: "[A-Za-z ']+",
    },
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
    attributes: {
      type: 'text',
      name: 'zipcode',
      id: 'zipcode',
      required: '',
      pattern: '[A-Za-z0-9 ]+',
    },
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
      pattern: '[A-Za-z0-9 ]+',
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
      pattern: '[A-Za-z0-9 ]+',
    },
  },
  {
    type: 'div',
    textContent: '* This field is required.',
    attributes: { class: 'required', id: 'error' },
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
        attributes: { type: 'reset', value: 'Cancel', class: 'cancel' },
      },
    ],
  },
];

const signUpForm = form.create(fields);

// listen for changes on the sign-up form
signUpForm.listen({
  errorFieldId: 'error',
  inputs: [
    { id: 'email', name: 'Email' },
    { id: 'country', name: 'Country' },
    { id: 'zipcode', name: 'Zip code' },
    { id: 'password', name: 'Password', equalToId: 'confirmpw' },
    {
      id: 'confirmpw',
      name: 'Password confirmation',
      equalToId: 'password',
    },
  ],
});

// add form to the document content
document.querySelector('.content').appendChild(signUpForm.parent);
