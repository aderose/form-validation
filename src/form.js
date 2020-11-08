import element from './element';

export default (function form() {
  // create a general form object
  function create(fields) {
    const generalForm = element.create({
      type: 'form',
      attributes: { class: 'general-form' },
    });

    fields.forEach((field) => generalForm.appendChild(element.create(field)));

    return generalForm;
  }

  return { create };
})();
