
export default function nameExchange() {

  const element = document.createElement('h1');
  element.innerHTML = 'Обменый '+'калькулятор'


  const result = document.getElementById('header-root').append(element)

  return result;
}
