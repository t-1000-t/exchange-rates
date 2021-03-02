import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";

export default function headerExchange() {
  // Nav
  const wrapperElem = createElem("nav")
  wrapperElem.classList = 'row justify-content-left'
  // Div
  const divElem = createElem('div')
  divElem.classList = 'rates'
  appendElem(wrapperElem, divElem)
  // Img
  const imgLogo = createElem('img')
  imgLogo.classList = 'img'
  appendElem(divElem, imgLogo)
  // Div2
  const divElem2 = createElem('div')
  divElem2.classList = 'col-2'
  // P
  const elementP = createElem('p');
  elementP.textContent = 'Калькулятор'
  elementP.classList = "elementP"
  appendElem(divElem2, elementP)
  appendElem(wrapperElem, divElem2)




  document.getElementById('header-root').append(wrapperElem)

}
