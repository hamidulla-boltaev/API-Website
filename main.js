const currencies_one = document.getElementById("currency-one");
const amounts_one = document.getElementById("amount-one");
const currencies_two = document.getElementById("currency-two");
const amounts_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const button = document.getElementById("button");

function calculate() {
  const KEY_API = "3440990f97e6a51ec8bbcb28";
  const currencyOne = currencies_one.value;
  const currencyTwo = currencies_two.value;
  const amountOne = amounts_one.value;

  fetch(`https://v6.exchangerate-api.com/v6/${KEY_API}/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo];
      rateEl.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amounts_two.value = (amounts_one.value * rate).toFixed(2);
      console.log(rate);
    });
}

currencies_one.addEventListener("change", calculate);
amounts_one.addEventListener("input", calculate);
currencies_two.addEventListener("change", calculate);
amounts_two.addEventListener("input", calculate);

button.addEventListener("click", () => {
  const temp = currencies_one.value;
  currencies_one.value = currencies_two;
  currencies_two.value = temp;
  calculate();
});

calculate();