/*eslint-disable*/
const form = document.querySelector('.app form');
const formInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector(`[name="from_currency"]`);
const toSelect = document.querySelector(`[name="to_currency"]`);
const toEl = document.querySelector(`.to_amount`);
const endpoint = `https://api.exchangeratesapi.io/latest`;
const ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};


function generateOptions(options) {
  return Object.entries(options).map(([currencyCode, currencyName]) => { 
    return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`}).join(""); 
}


async function fetchRates(base = "USD") {
  const response = await fetch(`${endpoint}?base=${base}`);
  const rates = await response.json();
  return rates;
}

async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  // if not, we fetch it and store it in our ratesByBase object
  if (!ratesByBase[from]) {
    const rates = await fetchRates(from);
    //store them for next time
    ratesByBase[from] = rates;
  }

  //convert that amount that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}


function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

async function handleInput(e) {
  const rawAmount = await convert(formInput.value, fromSelect.value, toSelect.value);  
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);
// populate the form select and to select with the listed currencies
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;





form.addEventListener('input', handleInput)


// add this line to make a new commit of this branch


