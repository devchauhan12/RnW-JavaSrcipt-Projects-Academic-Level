const Products = [
    { name: "LG", dsc: "very good", price: 100, img: "LG.jpg" },
    { name: "Sony", dsc: "very good", price: 200, img: "sony.webp" },
    { name: "Asus", dsc: "very good", price: 500, img: "asus.webp" },
]

stProduct()
function stProduct() {
    let html = ''
    for (var i = 0; i < Products.length; i++) {
        html += `  <div class="p-3 col-4"> 
                        <div class="card">
                            <div class="card-img position-relative">
                                <img src="assets/images/${Products[i].img}" width="100%" height="100%" id="pro-img">
                            </div>
                            <div class="card-info">
                                <p class="product-title">${Products[i].name}</p>
                                <p class="text-dsc">${Products[i].dsc}</p>
                            </div>
                            <div class="card-footer">
                                <span class="text-title">${Products[i].price}</span>
                                <div class="card-button" id="ToCart">
                                    <i class="las la-shopping-cart"></i>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    document.getElementById('Products').innerHTML = html
}

let ToCart = document.querySelectorAll("#ToCart")
for (let i = 0; i < ToCart.length; i++) {
    ToCart[i].addEventListener("click", function (e) {
        e.preventDefault()
        const InCart = JSON.parse(localStorage.getItem('InCart'))
        const parent = this.parentElement.parentElement
        const img = parent.querySelector('#pro-img').src

        const AddCartData = {
            img: img,
            name: Products[i].name,
            price: Products[i].price,
            qty: 1
        }

        if (InCart) {
            const checkcart = InCart.some((e) => {
                if (e.name == AddCartData.name) {
                    e.qty++
                    return true
                }
            })
            if (!checkcart) {
                InCart.push(AddCartData)
            }
            localStorage.setItem('InCart', JSON.stringify(InCart))
        } else {
            localStorage.setItem('InCart', JSON.stringify([AddCartData]))
        }
        count()
    })
}