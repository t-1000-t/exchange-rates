import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";

export default function headerExchange() {
  const wrapperElem = createElem("nav")
  wrapperElem.classList = 'wrapperNav'
  //
  const divElem = createElem('div')
  divElem.classList = 'rates'
  appendElem(wrapperElem, divElem)
  //
  const imgLogo = createElem('img')
  imgLogo.classList = 'img'
  appendElem(divElem, imgLogo)
  //
  const element = createElem('h1');
  element.textContent = 'Калькулятор'
  appendElem(wrapperElem, element)




  document.getElementById('header-root').append(wrapperElem)

}
