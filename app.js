

let prevBtn = document.querySelector("#prevBtn")
let nextBtn = document.querySelector("#nextBtn")
let currentPageDisplay = document.querySelector("#currentPageDisplay")
let searchInput = document.querySelector("#searchInput")
let productGrid = document.querySelector("#productGrid")
let currentPage = 1
let limit = 30



async function getData() {

    

    let skip = (currentPage - 1) * limit;

    try {

        let response = await fetch(`https://dummyjson.com/products?limit=30&skip=${skip} &select=title,price,images`);
        let data = await response.json();
        let products = data.products;
        console.log(products);
        // console.log(data)

        productGrid.innerHTML = "";

        for (let item of products) {

            let card = `
        <div class="product-card">
                    <div class="img-container">
                        <img src="${item.images[0]}" alt="${item.title}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${item.category}</div>
                        <h3 class="product-title">${item.title}</h3>
                        <div class="price-row">
                            <span class="price">$${item.price}</span>
                            <button class="add-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
        `
            productGrid.innerHTML += card;
        }
        upDate();

    } catch (err) {
        console.error("ERROR AAYA: ", err);
    }

    function upDate() {
        currentPageDisplay.innerText = currentPage;
        prevBtn.disabled = (currentPage === 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

};


nextBtn.addEventListener("click", () => {
    currentPage++
    getData()
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--
    }
});


getData()