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

    // get an element from the form given its ID
    function getElementById(id) {
      return Array.from(parent.childNodes).find((child) => child.id === id);
    }

    // listen for any updates to the form
    function listen({ errorFieldId, inputs }) {
      // gather the container error element with the provided ID
      const errorEl = getElementById(errorFieldId);

      // prevent default form action & validate all input from bottom to top
      parent.addEventListener('submit', (e) => {
        e.preventDefault();
        // iterate through all input elements and validate input
        let counter = 0;
        for (const { id, name, equalToId } of inputs) {
          const inputEl = inputElements[id];
          const options = { inputEl, inputName: name, errorEl };
          if (equalToId) options.equalTo = getElementById(equalToId);

          if (!validator.validate(options)) break;
          counter += 1;
        }
        if (counter === inputs.length) console.log('Success!');
      });

      inputs.forEach((input) => {
        // assuming all provided input ids match elements in the form
        const inputEl = inputElements[input.id];
        inputEl.addEventListener('blur', () => {
          const options = { inputEl, inputName: input.name, errorEl };
          if (input.equalToId)
            options.equalTo = getElementById(input.equalToId);

          validator.validate(options);
        });
      });
    }

    return { parent, listen };
  }

  return { create };
})();
