export default (function validator() {
  function showError({ inputEl, inputName, errorEl, type }) {
    if (inputEl.validity.valueMissing) {
      errorEl.textContent = `${inputName} is missing a value.`;
    } else if (inputEl.validity.typeMismatch) {
      errorEl.textContent = 'Your email is invalid!';
    } else if (inputEl.validity.patternMismatch) {
      errorEl.textContent = `${inputName} contains invalid characters.`;
    }
    if (type !== '') errorEl.textContent = `${inputName} does not match.`;
    inputEl.setAttribute('class', 'warning');
  }

  function validate({ inputEl, inputName, errorEl, equalTo }) {
    // if equalTo exists, check if the input is equal to that value
    const equal = equalTo ? checkValueEqual({ inputEl, equalTo }) : true;
    if (inputEl.validity.valid && equal) {
      errorEl.innerHTML = '* This field is required.';
      inputEl.removeAttribute('class');
      if (equalTo) equalTo.removeAttribute('class');
      return true;
    } else {
      showError({
        inputEl,
        inputName,
        errorEl,
        type: equal ? '' : 'pwmismatch',
      });
      return false;
    }
  }

  // check if the value of each element is equal
  function checkValueEqual({ inputEl, equalTo }) {
    return inputEl.value === equalTo.value;
  }

  return { validate };
})();
