(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,n,e){"use strict";e.r(n);var o=function(t){return document.createElement(t)};var c=function(t,n){return t.appendChild(n)};function s(t){(async function(){return await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then(t=>t.json()).then(t=>t).catch(t=>{console.log("Error: ",t)})})().then(n=>{n.map(n=>{const e=o("option");e.textContent=n.ccy,e.value=n.ccy,c(t,e)})})}const a=["UAH","Б/Н","Б/Н +5%","Б/Н +10%","Б/Н +15","Б/Н +20%","Б/Н +25%","Б/Н +30%"];!function(){const t=o("nav");t.classList="wrapperNav";const n=o("div");n.classList="rates",c(t,n);const e=o("img");e.classList="img",c(n,e);const s=o("h1");s.textContent="Калькулятор",c(t,s),document.getElementById("header-root").append(t)}(),function(){const t=document.getElementById("main-root"),n=o("div"),e=o("h4");e.textContent="Банк Приват",c(n,e);const i=o("select");s(i),c(n,i);const p=o("form");c(n,p);const r=o("input");r.type="text",r.placeholder="введите сумму",c(p,r);const u=o("button");u.textContent="Enter",c(p,u);const l=o("section");l.classList="card1";const d=o("ul");var h;d.classList="setUl",c(l,d),h=d,a.map(t=>{const n=o("li");n.textContent=t,c(h,n)}),c(t,n),c(t,l)}(),async function(){let t=o("ul"),n=document.getElementById("main-root");c(n,t),await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then(t=>t.json()).then(n=>n.map(n=>{let e=o("li");e.textContent=""+n.ccy,c(t,e)}))}()}],[[0,1]]]);