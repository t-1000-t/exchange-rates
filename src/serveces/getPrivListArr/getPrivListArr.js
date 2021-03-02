export default async function getPrivListArr() {
  return await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then(res => res.json())
    .then(data => data)
    .catch(err => {console.log("Error: ", err)})
}
