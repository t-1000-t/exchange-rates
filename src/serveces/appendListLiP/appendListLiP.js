import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";


// push arr in ul
export default function appendListLiP(arr, ul) {
  arr.map(el => {
    const li = createElem('div')
    li.id = el.id
    li.classList = 'table-header liC'
    let divP = createElem('div')
    divP.classList = 'divP'
    divP.textContent = el.text
    appendElem(li, divP)
    let span = createElem('span')
    span.textContent = 0
    span.classList = 'col elementP2'
    appendElem(li, span)
    appendElem(ul, li)
  })
}
