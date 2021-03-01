import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";
import appendListLi from "../appendListLi/appendListLi";
import appendOptionList from "../appendOptionList/appendOptionList";

const listElements = ['UAH', 'Б/Н', 'Б/Н +5%', 'Б/Н +10%', 'Б/Н +15', 'Б/Н +20%', 'Б/Н +25%', 'Б/Н +30%']

export default function mainExchange() {
  const mainRoot = document.getElementById('main-root')
  // div
  const divElem = createElem('div')
  // H4
  const h4Elem = createElem('h4')
  h4Elem.textContent = 'Банк Приват'
  appendElem(divElem, h4Elem)
  // Select
  const selectElem = createElem('select')
  // Option
  appendOptionList(selectElem)
  appendElem(divElem, selectElem)
  // Form
  const formElem = createElem('form')
  appendElem(divElem, formElem)
  //Input
  const inputElem = createElem('input')
  inputElem.type = 'text'
  inputElem.placeholder = 'введите сумму'
  appendElem(formElem, inputElem)
  // Button
  const buttonElem = createElem('button')
  buttonElem.textContent = 'Enter'
  appendElem(formElem, buttonElem)
  // Section
  const sectionElem = createElem('section')
  sectionElem.classList = 'card1'
  // ul
  const ulElem = createElem('ul')
  ulElem.classList = 'setUl'
  appendElem(sectionElem, ulElem)
  // li
  appendListLi(listElements, ulElem)


  appendElem(mainRoot, divElem)
  appendElem(mainRoot, sectionElem)

}
