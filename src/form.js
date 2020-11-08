import element from './element';
import validator from './validator';

export default (function form() {
  // create a general form object
  function create(fields) {
    const parent = element.create({
      type: 'form',
      attributes: { class: 'general-form', novalidate: '' },
    });

    // create the form child elements
    fields.forEach((field) => parent.appendChild(element.create(field)));

    // gather all input fields
    const inputElements = Object.values(parent).reduce(
      (inputs, input) => ({ ...inputs, [input.id]: input }),
      {},
    );

    // listen for any updates to the form
    function listen(inputs) {
      // prevent default form action & validate all input
      parent.addEventListener('submit', (e) => {
        e.preventDefault();
        validator.validateAll();
      });

      inputs.forEach((input) => {
        // assuming all provided input ids match elements in the form
        const inputEl = inputElements[input.id];
        inputEl.addEventListener('blur', () => {
          validator.validate({ inputEl, validation: input.validation });
        });
      });
    }

    return { parent, listen };
  }

  return { create };
})();
