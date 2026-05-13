function scrollToSection(){

  document
  .querySelector('#cars')
  .scrollIntoView({
    behavior:'smooth'
  })

}

let cart = 0

function addToCart(){

  cart++

  document
  .getElementById('cartCount')
  .innerText = cart

}

function createCard(product){

  return `

    <div class="card">

      <img src="${product.image}">

      <div class="cardContent">

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.price}
        </p>

        <button onclick="addToCart()">
          Adicionar ao Carrinho
        </button>

      </div>

    </div>

  `
}

const cars = [

{
  name:'Mercedes AMG GT',
  price:'220000€',
  image:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'BMW M4',
  price:'180000€',
  image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Audi R8',
  price:'270000€',
  image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Ferrari SF90',
  price:'780000€',
  image:'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Porsche 911',
  price:'310000€',
  image:'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1800&auto=format&fit=crop'
}

]

const homes = [

{
  name:'Villa Dubai',
  price:'12000000€',
  image:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Mansão Miami',
  price:'8500000€',
  image:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Casa Futurista',
  price:'6700000€',
  image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop'
}

]

const tech = [

{
  name:'iPhone 16 Pro Max',
  price:'1899€',
  image:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Galaxy S25 Ultra',
  price:'1699€',
  image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Xiaomi 15 Ultra',
  price:'1299€',
  image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1800&auto=format&fit=crop'
}

]

const fashion = [

{
  name:'Nike Air Max',
  price:'249€',
  image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800&auto=format&fit=crop'
},

{
  name:'Lacoste Premium',
  price:'189€',
  image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1800&auto=format&fit=crop'
}

]

function renderProducts(products,id){

  const container =
  document.getElementById(id)

  products.forEach(product=>{

    container.innerHTML +=
    createCard(product)

  })

}

renderProducts(cars,'carsProducts')

renderProducts(homes,'homesProducts')

renderProducts(tech,'techProducts')

renderProducts(fashion,'fashionProducts')
