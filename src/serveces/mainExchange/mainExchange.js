import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";
import appendOptionList from "../appendOptionList/appendOptionList";
import appendListLiP from "../appendListLiP/appendListLiP";

const listElements = [{text: 'UAH : ', id: 11}, {
  text: 'Б/НДС : ',
  id: 12
}, {text: 'Б/НДС +5% : ', id: 13}, {text: 'Б/НДС +10% : ', id: 14}, {
  text: 'Б/НДС +15 : ',
  id: 15
}, {text: 'Б/НДС +20% : ', id: 16}, {text: 'Б/НДС +25% : ', id: 17}, {
  text: 'Б/НДС +30% : ',
  id: 18
}]

export default function mainExchange() {
  const mainRoot = document.getElementById('main-root')

  // div
  const divElem = createElem('div')
  divElem.classList = 'divForm'
  // Form
  const formElem = createElem('form')
  formElem.classList = "inpFrom"
  appendElem(divElem, formElem)
  //Input
  const inputElem = createElem('input')
  inputElem.classList = "form-control inpNum"
  inputElem.type = 'text'
  inputElem.placeholder = 'введите сумму'
  inputElem.id = 'input-form'
  appendElem(formElem, inputElem)
  // Select
  const selectElem = createElem('select')
  selectElem.classList = 'form-select selCur'
  selectElem.id = 'currency-text'
  // Option
  appendOptionList(selectElem)
  appendElem(formElem, selectElem)
  // Section
  const sectionElem = createElem('section')
  sectionElem.classList = 'card1 divForm'
  // div Privat
  const divElemP = createElem('div')
  divElemP.classList = 'divPrivat'
  divElemP.textContent = 'Приват-Банк'
  appendElem(sectionElem, divElemP)
  // ul
  const ulElem = createElem('div')
  ulElem.classList = 'responsive-table'

  appendElem(sectionElem, ulElem)
  // li
  appendListLiP(listElements, ulElem)


  appendElem(mainRoot, divElem)
  appendElem(mainRoot, sectionElem)
}
