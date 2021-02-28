function component() {

  const element = document.createElement('p');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello '+'webpack!'
  return element;
}

document.body.appendChild(component());

