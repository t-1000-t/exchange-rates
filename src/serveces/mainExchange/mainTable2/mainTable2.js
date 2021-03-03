import createElem from "../../createElem/createElem";
import appendElem from "../../appendElem/appendElem";
import appendListLiP from "../../appendListLiP/appendListLiP";

const listElements = [{text: 'UAH : ', id: 21}, {
  text: 'Без НДС : ',
  id: 22
}, {text: '+5% : ', id: 23}, {text: '+10% : ', id: 24}, {
  text: '+15% : ',
  id: 25
}, {text: '+20% : ', id: 26}, {text: '+25% : ', id: 27}, {
  text: '+30% : ',
  id: 28
}]

export default function mainTable2() {

  const wrapTableDiv = document.getElementById('wrapper-tables')

  // list Resp table 2
  const ulElem2 = createElem('div')
  ulElem2.classList = 'responsive-table'
  ulElem2.id = 'resp-id2'
  // div Name resp
  const divNameResp = createElem('span')
  divNameResp.textContent = "Без НДС"
  divNameResp.classList = 'elemDNR'
  appendElem(ulElem2, divNameResp)

  appendElem(wrapTableDiv, ulElem2)
  // li 1
  appendListLiP(listElements, ulElem2)
}
