(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){"use strict";n.r(e);var l=function(t){return document.createElement(t)};var d=function(t,e){return t.appendChild(e)};async function i(){return await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then(t=>t.json()).then(t=>t).catch(t=>{console.log("Error: ",t)})}function o(t,e){t.map(t=>{const n=l("div");n.id=t.id,n.classList="table-header liC";let i=l("div");i.classList="divP",i.textContent=t.text,d(n,i);let o=l("span");o.textContent=0,o.classList="col elementP2",d(n,o),d(e,n)})}const s=[{text:"UAH : ",id:11},{text:"НДС : ",id:12},{text:"+5% : ",id:13},{text:"+10% : ",id:14},{text:"+15% : ",id:15},{text:"+20% : ",id:16},{text:"+25% : ",id:17},{text:"+30% : ",id:18}];const a=[{text:"UAH : ",id:21},{text:"Без НДС : ",id:22},{text:"+5% : ",id:23},{text:"+10% : ",id:24},{text:"+15% : ",id:25},{text:"+20% : ",id:26},{text:"+25% : ",id:27},{text:"+30% : ",id:28}];function x(){const t=document.getElementById("input-form");t.addEventListener("input",x),i().then(e=>{const n=document.getElementById("11"),l=document.getElementById("12"),d=document.getElementById("13"),i=document.getElementById("14"),o=document.getElementById("15"),s=document.getElementById("16"),a=document.getElementById("17"),x=document.getElementById("18"),m=document.getElementById("currency-text");switch(console.log(m.value),m.value){case"USD":let m=e.find(t=>"USD"===t.ccy),c=Number(t.value)*Number(m.sale);n.lastElementChild.textContent=c.toFixed(2)+" грн.",l.lastElementChild.textContent=c.toFixed(2)+" грн.",d.lastElementChild.textContent=(1.05*c).toFixed(2)+" грн.",i.lastElementChild.textContent=(1.1*c).toFixed(2)+" грн.",o.lastElementChild.textContent=(1.15*c).toFixed(2)+" грн.",s.lastElementChild.textContent=(1.2*c).toFixed(2)+" грн.",a.lastElementChild.textContent=(1.25*c).toFixed(2)+" грн.",x.lastElementChild.textContent=(1.3*c).toFixed(2)+" грн.";break;case"EUR":let C=e.find(t=>"EUR"===t.ccy),E=Number(t.value)*Number(C.sale);n.lastElementChild.textContent=E.toFixed(2)+" грн.",l.lastElementChild.textContent=(E/1.2).toFixed(2)+" грн.",d.lastElementChild.textContent=(1.05*E).toFixed(2)+" грн.",i.lastElementChild.textContent=(1.1*E).toFixed(2)+" грн.",o.lastElementChild.textContent=(1.15*E).toFixed(2)+" грн.",s.lastElementChild.textContent=(1.2*E).toFixed(2)+" грн.",a.lastElementChild.textContent=(1.25*E).toFixed(2)+" грн.",x.lastElementChild.textContent=(1.3*E).toFixed(2)+" грн.";break;case"RUR":let r=e.find(t=>"RUR"===t.ccy),u=Number(t.value)*Number(r.sale);n.lastElementChild.textContent=u.toFixed(2)+" грн.",l.lastElementChild.textContent=(u/1.2).toFixed(2)+" грн.",d.lastElementChild.textContent=(1.05*u).toFixed(2)+" грн.",i.lastElementChild.textContent=(1.1*u).toFixed(2)+" грн.",o.lastElementChild.textContent=(1.15*u).toFixed(2)+" грн.",s.lastElementChild.textContent=(1.2*u).toFixed(2)+" грн.",a.lastElementChild.textContent=(1.25*u).toFixed(2)+" грн.",x.lastElementChild.textContent=(1.3*u).toFixed(2)+" грн.";break;case"BTC":let h=e.find(t=>"BTC"===t.ccy),F=Number(t.value)*Number(h.sale);n.lastElementChild.textContent=F.toFixed(2)+" грн.",l.lastElementChild.textContent=(F/1.2).toFixed(2)+" грн.",d.lastElementChild.textContent=(1.05*F).toFixed(2)+" грн.",i.lastElementChild.textContent=(1.1*F).toFixed(2)+" грн.",o.lastElementChild.textContent=(1.15*F).toFixed(2)+" грн.",s.lastElementChild.textContent=(1.2*F).toFixed(2)+" грн.",a.lastElementChild.textContent=(1.25*F).toFixed(2)+" грн.",x.lastElementChild.textContent=(1.3*F).toFixed(2)+" грн.";break;default:return}})}function m(){const t=document.getElementById("input-form");t.addEventListener("input",m),i().then(e=>{const n=document.getElementById("21"),l=document.getElementById("22"),d=document.getElementById("23"),i=document.getElementById("24"),o=document.getElementById("25"),s=document.getElementById("26"),a=document.getElementById("27"),x=document.getElementById("28"),m=document.getElementById("currency-text");switch(console.log(m.value),m.value){case"USD":let m=e.find(t=>"USD"===t.ccy),c=Number(t.value)*Number(m.sale);n.lastElementChild.textContent=c.toFixed(2)+" грн.",l.lastElementChild.textContent=(c/1.2).toFixed(2)+" грн.",d.lastElementChild.textContent=(c/1.2*1.05).toFixed(2)+" грн.",i.lastElementChild.textContent=(c/1.2*1.1).toFixed(2)+" грн.",o.lastElementChild.textContent=(c/1.2*1.15).toFixed(2)+" грн.",s.lastElementChild.textContent=(c/1.2*1.2).toFixed(2)+" грн.",a.lastElementChild.textContent=(c/1.2*1.25).toFixed(2)+" грн.",x.lastElementChild.textContent=(c/1.2*1.3).toFixed(2)+" грн.";break;case"EUR":let C=e.find(t=>"EUR"===t.ccy),E=Number(t.value)*Number(C.sale);n.lastElementChild.textContent=E.toFixed(2)+" грн.",l.lastElementChild.textContent=(E/1.2).toFixed(2)+" грн.",d.lastElementChild.textContent=(E/1.2*1.05).toFixed(2)+" грн.",i.lastElementChild.textContent=(E/1.2*1.1).toFixed(2)+" грн.",o.lastElementChild.textContent=(E/1.2*1.15).toFixed(2)+" грн.",s.lastElementChild.textContent=(E/1.2*1.2).toFixed(2)+" грн.",a.lastElementChild.textContent=(E/1.2*1.25).toFixed(2)+" грн.",x.lastElementChild.textContent=(E/1.2*1.3).toFixed(2)+" грн.";break;case"RUR":let r=e.find(t=>"RUR"===t.ccy),u=Number(t.value)*Number(r.sale);n.lastElementChild.textContent=u.toFixed(2)+" грн.",l.lastElementChild.textContent=(u/1.2).toFixed(2)+" грн.",d.lastElementChild.textContent=(u/1.2*1.05).toFixed(2)+" грн.",i.lastElementChild.textContent=(u/1.2*1.1).toFixed(2)+" грн.",o.lastElementChild.textContent=(u/1.2*1.15).toFixed(2)+" грн.",s.lastElementChild.textContent=(u/1.2*1.2).toFixed(2)+" грн.",a.lastElementChild.textContent=(u/1.2*1.25).toFixed(2)+" грн.",x.lastElementChild.textContent=(u/1.2*1.3).toFixed(2)+" грн.";break;case"BTC":let h=e.find(t=>"BTC"===t.ccy),F=Number(t.value)*Number(h.sale);n.lastElementChild.textContent=F.toFixed(2)+" грн.",l.lastElementChild.textContent=(F/1.2).toFixed(2)+" грн.",d.lastElementChild.textContent=(F/1.2*1.05).toFixed(2)+" грн.",i.lastElementChild.textContent=(F/1.2*1.1).toFixed(2)+" грн.",o.lastElementChild.textContent=(F/1.2*1.15).toFixed(2)+" грн.",s.lastElementChild.textContent=(F/1.2*1.2).toFixed(2)+" грн.",a.lastElementChild.textContent=(F/1.2*1.25).toFixed(2)+" грн.",x.lastElementChild.textContent=(F/1.2*1.3).toFixed(2)+" грн.";break;default:return}})}!function(){const t=l("nav");t.classList="row justify-content-left";const e=l("div");e.classList="rates",d(t,e);const n=l("img");n.classList="img",d(e,n);const i=l("div");i.classList="col-2";const o=l("p");o.textContent="Калькулятор",o.classList="elementP",d(i,o),d(t,i),document.getElementById("header-root").append(t)}(),function(){const t=document.getElementById("main-root"),e=l("div");e.classList="divForm",e.id="div-form";const n=l("form");n.classList="inpFrom",d(e,n);const a=l("input");a.classList="form-control inpNum",a.type="text",a.placeholder="введите сумму",a.id="input-form",d(n,a);const x=l("select");var m;x.classList="form-select selCur",x.id="currency-text",m=x,i().then(t=>{t.map(t=>{const e=l("option");e.textContent=t.ccy,e.value=t.ccy,d(m,e)})}),d(n,x);const c=l("section");c.classList="card1 divForm",c.id="section-elem";const C=l("div");C.classList="divPrivat",C.textContent="Приват-Банк",C.id="div-privat-p",d(c,C);const E=l("div");E.classList="wrapperTables",E.id="wrapper-tables";const r=l("div");r.classList="responsive-table",r.id="resp-id";const u=l("span");u.textContent="НДС",u.classList="elemDNR",d(c,E),d(r,u),d(E,r),o(s,r),d(t,e),d(t,c)}(),x(),function(){const t=document.getElementById("wrapper-tables"),e=l("div");e.classList="responsive-table",e.id="resp-id2";const n=l("span");n.textContent="Без НДС",n.classList="elemDNR",d(e,n),d(t,e),o(a,e)}(),m();const c=document.getElementById("currency-text");c.addEventListener("change",x),c.addEventListener("change",m)}],[[0,1]]]);