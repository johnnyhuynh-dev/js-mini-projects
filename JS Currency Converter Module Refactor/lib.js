const endpoint = `https://api.exchangeratesapi.io/latest`;
const ratesByBase = {};

export async function fetchRates(base = "USD") {
    const response = await fetch(`${endpoint}?base=${base}`);
    const rates = await response.json();
    return rates;
  }
  
 export async function convert(amount, from, to) {
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
