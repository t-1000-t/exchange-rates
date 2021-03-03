import createElem from "../../createElem/createElem";
import appendElem from "../../appendElem/appendElem";
import appendOptionList from "../../appendOptionList/appendOptionList";
import appendListLiP from "../../appendListLiP/appendListLiP";

const listElements = [{text: 'UAH : ', id: 11}, {
  text: 'НДС : ',
  id: 12
}, {text: '+5% : ', id: 13}, {text: '+10% : ', id: 14}, {
  text: '+15% : ',
  id: 15
}, {text: '+20% : ', id: 16}, {text: '+25% : ', id: 17}, {
  text: '+30% : ',
  id: 18
}]

export default function mainTable1() {
  const mainRoot = document.getElementById('main-root')

  // div
  const divElem = createElem('div')
  divElem.classList = 'divForm'
  divElem.id = 'div-form'
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
  sectionElem.id = 'section-elem'
  // div Privat
  const divElemP = createElem('div')
  divElemP.classList = 'divPrivat'
  divElemP.textContent = 'Приват-Банк'
  divElemP.id = 'div-privat-p'
  appendElem(sectionElem, divElemP)

  // wrapTableDiv
  const wrapTableDiv = createElem('div')
  wrapTableDiv.classList = 'wrapperTables'
  wrapTableDiv.id = 'wrapper-tables'

  // div resp-id
  const ulElem = createElem('div')
  ulElem.classList = 'responsive-table'
  ulElem.id = 'resp-id'

  // div Name resp
  const divNameResp = createElem('span')
  divNameResp.textContent = "НДС"
  divNameResp.classList = 'elemDNR'

  appendElem(sectionElem, wrapTableDiv)
  appendElem(ulElem, divNameResp)
  appendElem(wrapTableDiv, ulElem)

  // li 1
  appendListLiP(listElements, ulElem)



  appendElem(mainRoot, divElem)
  appendElem(mainRoot, sectionElem)
}
