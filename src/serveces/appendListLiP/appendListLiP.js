import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";

export default function appendListLiP(arr, ul) {
  arr.map(el => {
    const li = createElem('div')
    li.textContent = el.text
    li.id = el.id
    li.classList = 'table-header liC'
    let p = createElem('span')
    p.textContent = 0
    p.classList = 'col elementP2'
    appendElem(li, p)
    appendElem(ul, li)
  })
}
