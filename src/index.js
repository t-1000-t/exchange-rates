import './styles/style.css';
import './styles/style.scss';
import './styles/style.sass';

import headerExchange from "./serveces/headerExchange/headerExchange"
import mainExchange from "./serveces/mainExchange/mainExchange";
import getPrivListArr from "./serveces/getPrivListArr/getPrivListArr";


headerExchange()
mainExchange()


const inputForm = document.getElementById('input-form')
inputForm.addEventListener('input', calculate)
const selectCurrency = document.getElementById('currency-text')
selectCurrency.addEventListener('change', calculate)

function calculate() {
  let num = inputForm.value
  getPrivListArr().then(data => {
    const Li11 = document.getElementById('11')
    const Li12 = document.getElementById('12')
    const Li13 = document.getElementById('13')
    const Li14 = document.getElementById('14')
    const Li15 = document.getElementById('15')
    const Li16 = document.getElementById('16')
    const Li17 = document.getElementById('17')
    const Li18 = document.getElementById('18')

    // Currency
    const currency = document.getElementById('currency-text')
  console.log(currency.value)
    switch (currency.value) {
      case "USD":
        let rateU = data.find(elem => elem.ccy === "USD")
        let totalU = Number(inputForm.value) * Number(rateU.sale)
        Li11.firstElementChild.textContent = totalU.toFixed(2)
        Li12.firstElementChild.textContent = (totalU / 1.2).toFixed(2)
        Li13.firstElementChild.textContent = ((totalU / 1.2) * 1.05).toFixed(2)
        Li14.firstElementChild.textContent = ((totalU / 1.2) * 1.1).toFixed(2)
        Li15.firstElementChild.textContent = ((totalU / 1.2) * 1.15).toFixed(2)
        Li16.firstElementChild.textContent = ((totalU / 1.2) * 1.2).toFixed(2)
        Li17.firstElementChild.textContent = ((totalU / 1.2) * 1.25).toFixed(2)
        Li18.firstElementChild.textContent = ((totalU / 1.2) * 1.3).toFixed(2)
        break
      case "EUR":
        let rateE = data.find(elem => elem.ccy === "EUR")
        let totalE = Number(inputForm.value) * Number(rateE.sale)
        Li11.firstElementChild.textContent = totalE.toFixed(2)
        Li12.firstElementChild.textContent = (totalE / 1.2).toFixed(2)
        Li13.firstElementChild.textContent = ((totalE / 1.2) * 1.05).toFixed(2)
        Li14.firstElementChild.textContent = ((totalE / 1.2) * 1.1).toFixed(2)
        Li15.firstElementChild.textContent = ((totalE / 1.2) * 1.15).toFixed(2)
        Li16.firstElementChild.textContent = ((totalE / 1.2) * 1.2).toFixed(2)
        Li17.firstElementChild.textContent = ((totalE / 1.2) * 1.25).toFixed(2)
        Li18.firstElementChild.textContent = ((totalE / 1.2) * 1.3).toFixed(2)
        break
      case "RUR":
        let rateR = data.find(elem => elem.ccy === "RUR")
        let totalR = Number(inputForm.value) * Number(rateR.sale)
        Li11.firstElementChild.textContent = totalR.toFixed(2)
        Li12.firstElementChild.textContent = (totalR / 1.2).toFixed(2)
        Li13.firstElementChild.textContent = ((totalR / 1.2) * 1.05).toFixed(2)
        Li14.firstElementChild.textContent = ((totalR / 1.2) * 1.1).toFixed(2)
        Li15.firstElementChild.textContent = ((totalR / 1.2) * 1.15).toFixed(2)
        Li16.firstElementChild.textContent = ((totalR / 1.2) * 1.2).toFixed(2)
        Li17.firstElementChild.textContent = ((totalR / 1.2) * 1.25).toFixed(2)
        Li18.firstElementChild.textContent = ((totalR / 1.2) * 1.3).toFixed(2)
        break
      case "BTC":
        let rateB = data.find(elem => elem.ccy === "BTC")
        let totalB = Number(inputForm.value) * Number(rateB.sale)
        Li11.firstElementChild.textContent = totalB.toFixed(2)
        Li12.firstElementChild.textContent = (totalB / 1.2).toFixed(2)
        Li13.firstElementChild.textContent = ((totalB / 1.2) * 1.05).toFixed(2)
        Li14.firstElementChild.textContent = ((totalB / 1.2) * 1.1).toFixed(2)
        Li15.firstElementChild.textContent = ((totalB / 1.2) * 1.15).toFixed(2)
        Li16.firstElementChild.textContent = ((totalB / 1.2) * 1.2).toFixed(2)
        Li17.firstElementChild.textContent = ((totalB / 1.2) * 1.25).toFixed(2)
        Li18.firstElementChild.textContent = ((totalB / 1.2) * 1.3).toFixed(2)
        break
      default:
        return
    }

  })
  console.log(num)
}
