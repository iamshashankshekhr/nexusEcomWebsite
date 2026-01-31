


let searchInput = document.querySelector("#searchInput")
let productGrid = document.querySelector("#productGrid")

async function getData(){



    try{

        let response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,images')
    let data = await response.json()
    let products = data.products
    console.log(products)
    // console.log(data)
    

    for (let item of products){

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
        productGrid.innerHTML += card
    }

    }catch(err){
        console.error("ERROR AAYA: ",err)
    }
}
getData()