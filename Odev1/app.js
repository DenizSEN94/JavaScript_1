const myName = document.querySelector("#myName");
const getDate = document.querySelector("#myClock");
myName.textContent = prompt("Lütfen Adınızı Giriniz");

const day = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function show() {
  const newDate = new Date();
  const gun = day[newDate.getDay()];
  const zaman = newDate.toLocaleTimeString();
  getDate.textContent = zaman + " " + gun;
}

setInterval(show, 1000);
