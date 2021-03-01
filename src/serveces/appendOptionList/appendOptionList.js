import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";
import getPrivatListCour from "./getPrivatListCour";

export default function appendOptionList(select) {
  getPrivatListCour().then(data => {
    data.map(el => {
      const option = createElem('option')
      option.textContent = el.ccy
      option.value = el.ccy
      appendElem(select, option)
    })
  })
}
