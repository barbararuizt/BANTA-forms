const displayChange = (event) => {
  event.preventDefault()
  const input = document.getElementById("send").value;
  const tasa = { mxnUsdc: 0.058, mxnUsdt: 0.058, usdcUsdt: 1, usdcMxn: 17.16, usdtMxn: 17.16, usdtUsdc: 1 };

  const sendCurrency = document.getElementById("send-currency").value.toString();
  const getCurrency = document.getElementById("receive-currency").value.toString();

  switch (sendCurrency) {
    case "MXN":
      if (getCurrency == "USDC") {
        result = (input * tasa.mxnUsdc).toFixed(2);
      } else if (getCurrency == "USDT") {
        result = (input * tasa.mxnUsdt).toFixed(2);
      } else {
        result = input;
      }
      break;
    case "USDC":
      if (getCurrency == "MXN") {
        result = (input * tasa.usdcMxn).toFixed(2);
      } else {
        result = input * 1;
      }
      break;
    case "USDT":
      if (getCurrency == "MXN") {
        result = (input * tasa.usdtMxn).toFixed(2);
      } else {
        result = input * 1;
      }
  }
  
  const output = document.getElementById("receive");
  output.value = result;
};


const container = document.getElementById("sendBox")
container.addEventListener("keyup", displayChange);

const bigContainer = document.getElementById("conversion")
bigContainer.addEventListener("click", displayChange);

const depositarBtn = document.getElementById("depositar");
