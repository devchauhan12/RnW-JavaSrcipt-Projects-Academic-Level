const html = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="product.html">Products</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>
    <a class="card-button me-4 position-relative d-block text-dark" href="cart.html">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="count">
               
            </span>
        <i class="las la-shopping-cart"></i>
    </a>
  </div>
</div>
</nav>`

document.getElementById('header').innerHTML = html
count()

ToCart = document.querySelectorAll("#ToCart")
for (let i = 0; i < ToCart.length; i++) {
  ToCart[i].addEventListener("click", function (e) {
    e.preventDefault()
    count()
  })
}
function count() {
  let InCart = JSON.parse(localStorage.getItem("InCart"))
  if (InCart) {
    document.getElementById('count').innerHTML = InCart.length
  } else {
    document.getElementById('count').innerHTML = 0
  }
}