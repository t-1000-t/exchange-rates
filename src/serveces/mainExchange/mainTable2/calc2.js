import getPrivListArr from "../../getPrivListArr/getPrivListArr";


export default function calc2() {
  const inputForm = document.getElementById('input-form')
  inputForm.addEventListener('input', calc2)
  getPrivListArr().then(data => {
    const Li21 = document.getElementById('21')
    const Li22 = document.getElementById('22')
    const Li23 = document.getElementById('23')
    const Li24 = document.getElementById('24')
    const Li25 = document.getElementById('25')
    const Li26 = document.getElementById('26')
    const Li27 = document.getElementById('27')
    const Li28 = document.getElementById('28')

    // Currency
    const currency = document.getElementById('currency-text')
    console.log(currency.value)
    switch (currency.value) {
      case "USD":
        let rateU = data.find(elem => elem.ccy === "USD")
        let totalU = Number(inputForm.value) * Number(rateU.sale)
        Li21.lastElementChild.textContent = totalU.toFixed(2) + ' грн.'
        Li22.lastElementChild.textContent = (totalU / 1.2).toFixed(2) + ' грн.'
        Li23.lastElementChild.textContent = ((totalU / 1.2) * 1.05).toFixed(2) + ' грн.'
        Li24.lastElementChild.textContent = ((totalU / 1.2) * 1.1).toFixed(2) + ' грн.'
        Li25.lastElementChild.textContent = ((totalU / 1.2) * 1.15).toFixed(2) + ' грн.'
        Li26.lastElementChild.textContent = ((totalU / 1.2)* 1.2).toFixed(2) + ' грн.'
        Li27.lastElementChild.textContent = ((totalU / 1.2) * 1.25).toFixed(2) + ' грн.'
        Li28.lastElementChild.textContent = ((totalU / 1.2) * 1.3).toFixed(2) + ' грн.'
        break
      case "EUR":
        let rateE = data.find(elem => elem.ccy === "EUR")
        let totalE = Number(inputForm.value) * Number(rateE.sale)
        Li21.lastElementChild.textContent = totalE.toFixed(2) + ' грн.'
        Li22.lastElementChild.textContent = (totalE / 1.2).toFixed(2) + ' грн.'
        Li23.lastElementChild.textContent = ((totalE / 1.2) * 1.05).toFixed(2) + ' грн.'
        Li24.lastElementChild.textContent = ((totalE / 1.2) * 1.1).toFixed(2) + ' грн.'
        Li25.lastElementChild.textContent = ((totalE / 1.2) * 1.15).toFixed(2) + ' грн.'
        Li26.lastElementChild.textContent = ((totalE / 1.2) * 1.2).toFixed(2) + ' грн.'
        Li27.lastElementChild.textContent = ((totalE / 1.2) * 1.25).toFixed(2) + ' грн.'
        Li28.lastElementChild.textContent = ((totalE / 1.2) * 1.3).toFixed(2) + ' грн.'
        break
      case "RUR":
        let rateR = data.find(elem => elem.ccy === "RUR")
        let totalR = Number(inputForm.value) * Number(rateR.sale)
        Li21.lastElementChild.textContent = totalR.toFixed(2) + ' грн.'
        Li22.lastElementChild.textContent = (totalR / 1.2).toFixed(2) + ' грн.'
        Li23.lastElementChild.textContent = ((totalR / 1.2) * 1.05).toFixed(2) + ' грн.'
        Li24.lastElementChild.textContent = ((totalR / 1.2) * 1.1).toFixed(2) + ' грн.'
        Li25.lastElementChild.textContent = ((totalR / 1.2) * 1.15).toFixed(2) + ' грн.'
        Li26.lastElementChild.textContent = ((totalR / 1.2) * 1.2).toFixed(2) + ' грн.'
        Li27.lastElementChild.textContent = ((totalR / 1.2) * 1.25).toFixed(2) + ' грн.'
        Li28.lastElementChild.textContent = ((totalR / 1.2) * 1.3).toFixed(2) + ' грн.'
        break
      case "BTC":
        let rateB = data.find(elem => elem.ccy === "BTC")
        let totalB = Number(inputForm.value) * Number(rateB.sale)
        Li21.lastElementChild.textContent = totalB.toFixed(2) + ' грн.'
        Li22.lastElementChild.textContent = (totalB / 1.2).toFixed(2) + ' грн.'
        Li23.lastElementChild.textContent = ((totalB / 1.2) * 1.05).toFixed(2) + ' грн.'
        Li24.lastElementChild.textContent = ((totalB / 1.2) * 1.1).toFixed(2) + ' грн.'
        Li25.lastElementChild.textContent = ((totalB / 1.2) * 1.15).toFixed(2) + ' грн.'
        Li26.lastElementChild.textContent = ((totalB / 1.2) * 1.2).toFixed(2) + ' грн.'
        Li27.lastElementChild.textContent = ((totalB / 1.2) * 1.25).toFixed(2) + ' грн.'
        Li28.lastElementChild.textContent = ((totalB / 1.2) * 1.3).toFixed(2) + ' грн.'
        break
      default:
        return
    }
  })
}
