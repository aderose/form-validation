export default (function element() {
  // create a HTMLElement object of the provided type
  function create({ type, textContent, attributes, children }) {
    const el = document.createElement(type);
    if (textContent) el.textContent = textContent;
    if (attributes)
      Object.keys(attributes).forEach((key) =>
        el.setAttribute(key, attributes[key]),
      );
    if (children) children.forEach((child) => el.appendChild(create(child)));
    return el;
  }

  return { create };
})();
