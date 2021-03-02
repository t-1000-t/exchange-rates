import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";

export default function appendListLi(arr, ul) {
  arr.map(el => {
    const li = createElem('li')
    li.textContent = el.text
    li.id = el.id
    appendElem(ul, li)
  })
}
