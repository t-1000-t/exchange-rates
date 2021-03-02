import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";
import getPrivListArr from "../getPrivListArr/getPrivListArr";

export default function appendOptionList(select) {
  getPrivListArr().then(data => {
    data.map(el => {
      const option = createElem('option')
      option.textContent = el.ccy
      option.value = el.ccy
      appendElem(select, option)
    })
  })
}
