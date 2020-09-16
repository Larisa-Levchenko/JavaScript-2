"use strict";

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const USD1 = document.getElementById("USD-1");
const USD2 = document.getElementById("USD-2");
const RUB1 = document.getElementById("RUB-1");
const RUB2 = document.getElementById("RUB-2");

USD1.addEventListener("input", () => {
  USD1.value = USD1.value.replace(/\D/g, "");
});
RUB2.addEventListener("input", () => {
  RUB2.value = RUB2.value.replace(/\D/g, "");
});

RUB1.disabled = true;
USD2.disabled = true;

const getDate = () => {
  return fetch("https://api.exchangeratesapi.io/latest?base=USD", {
    mode: "cors",
  });
};

const calc = (date) => {
  btn1.addEventListener("click", () => {
    if (USD1.value !== "") {
      RUB1.value = (USD1.value * date).toFixed(2);
    }
  });
  btn2.addEventListener("click", () => {
    if (RUB2.value !== "") {
      USD2.value = (RUB2.value / date).toFixed(2);
    }
  });
};

getDate()
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("Сервер не доступен...");
    }
    return response.json();
  })
  .then((dat) => calc(dat.rates.RUB))
  .catch((error) => console.log(error));
