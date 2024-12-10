const FetchBtn = document.getElementById("FetchBtn");

FetchBtn.addEventListener("click", () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

function displayData(data) {
    const container = document.getElementById("DisplayItems");

    for (let i = 0; i < data.length; i++) {
        const product = data[i];

        const productCard = document.createElement("div");
        productCard.innerHTML = `
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
        `;

        container.appendChild(productCard);
    }
}