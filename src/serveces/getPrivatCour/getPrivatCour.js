export default async function getPrivatCour() {

  const result = await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then(res => res.json())
    .then(data => {
        return data.map(el => {
        const div = document.createElement('div')
        const p = document.createElement('p')
        const elem = p.appendChild(document.createTextNode(el.ccy))
        return div.appendChild(elem)
      })
    })

  console.log("res", result)

  document.getElementById('main-root').append(result)

}




