export default (function validator() {
  function validate(event) {
    console.log(event);
  }

  function validateAll() {
    console.log('validating all');
  }

  return { validate, validateAll };
})();
