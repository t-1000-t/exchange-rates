(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){"use strict";n.r(e);var i=function(t){return document.createElement(t)};var o=function(t,e){return t.appendChild(e)};async function l(){return await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then(t=>t.json()).then(t=>t).catch(t=>{console.log("Error: ",t)})}const d=[{text:"UAH : ",id:11},{text:"Б/НДС : ",id:12},{text:"Б/НДС +5% : ",id:13},{text:"Б/НДС +10% : ",id:14},{text:"Б/НДС +15 : ",id:15},{text:"Б/НДС +20% : ",id:16},{text:"Б/НДС +25% : ",id:17},{text:"Б/НДС +30% : ",id:18}];!function(){const t=i("nav");t.classList="row justify-content-left";const e=i("div");e.classList="rates",o(t,e);const n=i("img");n.classList="img",o(e,n);const l=i("div");l.classList="col-2";const d=i("p");d.textContent="Калькулятор",d.classList="elementP",o(l,d),o(t,l),document.getElementById("header-root").append(t)}(),function(){const t=document.getElementById("main-root"),e=i("div");e.classList="divForm";const n=i("form");n.classList="inpFrom",o(e,n);const s=i("input");s.classList="form-control inpNum",s.type="text",s.placeholder="введите сумму",s.id="input-form",o(n,s);const c=i("select");var m;c.classList="form-select selCur",c.id="currency-text",m=c,l().then(t=>{t.map(t=>{const e=i("option");e.textContent=t.ccy,e.value=t.ccy,o(m,e)})}),o(n,c);const r=i("section");r.classList="card1 divForm";const x=i("div");x.classList="divPrivat",x.textContent="Приват-Банк",o(r,x);const a=i("div");var C;a.classList="responsive-table",o(r,a),C=a,d.map(t=>{const e=i("div");e.id=t.id,e.classList="table-header liC";let n=i("div");n.classList="divP",n.textContent=t.text,o(e,n);let l=i("span");l.textContent=0,l.classList="col elementP2",o(e,l),o(C,e)}),o(t,e),o(t,r)}();const s=document.getElementById("input-form");s.addEventListener("input",c);function c(){l().then(t=>{const e=document.getElementById("11"),n=document.getElementById("12"),i=document.getElementById("13"),o=document.getElementById("14"),l=document.getElementById("15"),d=document.getElementById("16"),c=document.getElementById("17"),m=document.getElementById("18"),r=document.getElementById("currency-text");switch(console.log(r.value),r.value){case"USD":let r=t.find(t=>"USD"===t.ccy),x=Number(s.value)*Number(r.sale);e.lastElementChild.textContent=x.toFixed(2)+" грн.",n.lastElementChild.textContent=(x/1.2).toFixed(2)+" грн.",i.lastElementChild.textContent=(x/1.2*1.05).toFixed(2)+" грн.",o.lastElementChild.textContent=(x/1.2*1.1).toFixed(2)+" грн.",l.lastElementChild.textContent=(x/1.2*1.15).toFixed(2)+" грн.",d.lastElementChild.textContent=(x/1.2*1.2).toFixed(2)+" грн.",c.lastElementChild.textContent=(x/1.2*1.25).toFixed(2)+" грн.",m.lastElementChild.textContent=(x/1.2*1.3).toFixed(2)+" грн.";break;case"EUR":let a=t.find(t=>"EUR"===t.ccy),C=Number(s.value)*Number(a.sale);e.firstElementChild.textContent=C.toFixed(2)+" грн.",n.firstElementChild.textContent=(C/1.2).toFixed(2)+" грн.",i.firstElementChild.textContent=(C/1.2*1.05).toFixed(2)+" грн.",o.firstElementChild.textContent=(C/1.2*1.1).toFixed(2)+" грн.",l.firstElementChild.textContent=(C/1.2*1.15).toFixed(2)+" грн.",d.firstElementChild.textContent=(C/1.2*1.2).toFixed(2)+" грн.",c.firstElementChild.textContent=(C/1.2*1.25).toFixed(2)+" грн.",m.firstElementChild.textContent=(C/1.2*1.3).toFixed(2)+" грн.";break;case"RUR":let u=t.find(t=>"RUR"===t.ccy),E=Number(s.value)*Number(u.sale);e.firstElementChild.textContent=E.toFixed(2)+" грн.",n.firstElementChild.textContent=(E/1.2).toFixed(2)+" грн.",i.firstElementChild.textContent=(E/1.2*1.05).toFixed(2)+" грн.",o.firstElementChild.textContent=(E/1.2*1.1).toFixed(2)+" грн.",l.firstElementChild.textContent=(E/1.2*1.15).toFixed(2)+" грн.",d.firstElementChild.textContent=(E/1.2*1.2).toFixed(2)+" грн.",c.firstElementChild.textContent=(E/1.2*1.25).toFixed(2)+" грн.",m.firstElementChild.textContent=(E/1.2*1.3).toFixed(2)+" грн.";break;case"BTC":let h=t.find(t=>"BTC"===t.ccy),f=Number(s.value)*Number(h.sale);e.firstElementChild.textContent=f.toFixed(2)+" грн.",n.firstElementChild.textContent=(f/1.2).toFixed(2)+" грн.",i.firstElementChild.textContent=(f/1.2*1.05).toFixed(2)+" грн.",o.firstElementChild.textContent=(f/1.2*1.1).toFixed(2)+" грн.",l.firstElementChild.textContent=(f/1.2*1.15).toFixed(2)+" грн.",d.firstElementChild.textContent=(f/1.2*1.2).toFixed(2)+" грн.",c.firstElementChild.textContent=(f/1.2*1.25).toFixed(2)+" грн.",m.firstElementChild.textContent=(f/1.2*1.3).toFixed(2)+" грн.";break;default:return}})}document.getElementById("currency-text").addEventListener("change",c)}],[[0,1]]]);