
const displayChange = (event) => {
  event.preventDefault()
  const input = document.getElementById("send").value;
  const tasa = { mxnUsdc: 0.058, mxnUsdt: 0.058, usdcUsdt: 1, usdcMxn: 17.16, usdtMxn: 17.16, usdtUsdc: 1 };

  const sendCurrency = document.getElementById("send-currency").value.toString();
  const getCurrency = document.getElementById("receive-currency").value.toString();

  switch (sendCurrency) {
    case "MXN":
      if (getCurrency == "USDC") {
        result = input * tasa.mxnUsdc;
      } else {
        result = input * tasa.mxnUsdt;
      }
      break;
    case "USDC":
      if (getCurrency == "MXN") {
        result = input * tasa.usdcMxn;
      } else {
        result = input;
      }
      break;
    case "USDT":
      if (getCurrency == "MXN") {
        result = input * tasa.usdtMxn;
      } else {
        result = input;
      }
  }
  
  const output = document.getElementById("receive");
  output.value = result.toFixed(2);

};


const container = document.getElementById("sendBox")
container.addEventListener("keyup", displayChange);

const bigContainer = document.getElementById("conversion")
bigContainer.addEventListener("change", displayChange);

