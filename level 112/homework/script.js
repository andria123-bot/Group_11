const fetchCryptoData = async (crypto) => {
  try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
      const data = await response.json();
      renderCryptoData(data);
  } catch (error) {
      console.error("Error fetching crypto data:", error);
      document.getElementById("cryptoData").innerHTML = "<p>Error fetching data. Please try again.</p>";
  }
};

const renderCryptoData = (data) => {
  const cryptoDataDiv = document.getElementById("cryptoData");
  cryptoDataDiv.innerHTML = "";
  if (data.length === 0) {
      cryptoDataDiv.innerHTML = "<p>No data found. Please check the cryptocurrency name.</p>";
      return;
  }

  data.forEach(crypto => {
      const cryptoInfo = document.createElement("div");
      cryptoInfo.innerHTML = `
          <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
          <p>Price: $${crypto.current_price}</p>
          <p>Market Cap: $${crypto.market_cap}</p>
          <p>24h Change: ${crypto.price_change_percentage_24h}%</p>
      `;
      cryptoDataDiv.appendChild(cryptoInfo);
  });
};

document.getElementById("searchButton").addEventListener("click", () => {
  const cryptoInput = document.getElementById("cryptoInput").value;
  fetchCryptoData(cryptoInput.toLowerCase());
});
