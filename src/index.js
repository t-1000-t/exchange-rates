import './styles/style.css';
import './styles/style.scss';
import './styles/style.sass';

import headerExchange from "./serveces/headerExchange/headerExchange"
import mainTable1 from "./serveces/mainExchange/mainTable1/mainTable1";
import mainTable2 from "./serveces/mainExchange/mainTable2/mainTable2";
import calc1 from "./serveces/mainExchange/mainTable1/calc1";
import calc2 from "./serveces/mainExchange/mainTable2/calc2";


headerExchange()
mainTable1()
calc1()
mainTable2()
calc2()

const selectCurrency = document.getElementById('currency-text')
selectCurrency.addEventListener('change', calc1)






//
// inputForm.removeEventListener('input', calculate)
// selectCurrency.removeEventListener("change", calculate)

console.log(1)
