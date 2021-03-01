import createElem from "../createElem/createElem";
import appendElem from "../appendElem/appendElem";

export default async function getPrivatCour() {
  let ul = createElem('ul')
  let main = document.getElementById('main-root')
  appendElem(main, ul)
  await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then(res => res.json())
    .then(data => {
      return data.map(el => {
        let li = createElem('li')
        li.textContent = `${el.ccy}`
        appendElem(ul, li)
      })
    })
}



