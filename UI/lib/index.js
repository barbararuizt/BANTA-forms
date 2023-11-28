
const displayChange = (event) => {
  event.preventDefault()
  const input = document.getElementById("send").value;
  const tasa = { mxnUsdc: 2, mxnUsdt: 3 , usdcUsdt: 1, usdcMxn: 4, usdtMxn: 5, usdtUsdc: 8 };

  
  const output = document.getElementById("receive");
  output.innerHTML = input;

};


const container = document.getElementById("sendBox");
console.log(container)
container.addEventListener("keyup", displayChange);

