//Global Varieables
var html = "";
let cart = [];
var element='';
sum=0;
//Product List Load

function load() {
  for (i = 0; i < product.length; i++) {
    html += `
    <div>
      <p  class="${product[i]["productcode"]}">  Product Code: </p>
      <p  id="code_${product[i]["productcode"]}" class="${product[i]["productcode"]}">${product[i]["productcode"]} </p> <br/>
    </div>
    <img src="${product[i]["image"]}" alt="product image"> <br/>
    <div>
      <p class="${product[i]["productcode"]}"> Product Name: </p>
      <p class="${product[i]["productcode"]}" id="name_${product[i]["productcode"]}"> ${product[i]["Name"]} </p><br/>
    </div>
    <div>
    <p class="${product[i]["productcode"]}"> Product Price: </p>
    <p class="${product[i]["productcode"]}" id="price_${product[i]["productcode"]}" data-num="${product[i]['price']}" > ${product[i]["price"]} </p><br/>
  </div>
  <input id="amount_${product[i]["productcode"]}" class="${product[i]["productcode"]}"  type="text" palceholder="0">
  <button class="btn-primary" onclick="append(document.getElementById('name_${product[i]["productcode"]}').innerHTML,document.getElementById('price_${product[i]["productcode"]}').innerHTML,document.getElementById('amount_${product[i]["productcode"]}').value)" id="${product[i]["productcode"]}">UPDATE</button>
</div>
<br/>
     `;
    console.log(html);
    document.getElementById("products").innerHTML = html;
  }
}
function append(Name,Price,Number) {
  var totalsum = 0;
  var a = 0;
  function Item(name, price, quantity) {
    console.log((this.name = name));
    console.log((this.price = price));
    console.log((this.quantity = quantity));
  }
  var name = Name
  var price = parseFloat(Price);
  var count = parseFloat(Number);
  console.log(name);
  console.log(price);
  console.log(count);
  console.log(typeof count);
  console.log(Item);
  for (var item in cart) {
    if (cart[item].name == name) {
      cart[item].quantity = count;
      console.log(cart);
      a++;
    }
  }
  if (a === 0) {
    var item = new Item(name, price, count);
    cart.push(item);
    console.log(cart);
    console.log(item);
    console.log(Item);
  }
  console.log(item);
  console.log(Item);
  // cart = JSON.stringify(cart);
  console.log(cart);
  console.log(cart.length);
  if(cart.length<2)
  {
    for (item in cart) {
      element = `
      <li class="cart-items">
      <div class="cart-item-dets">
       <p class="cart-item-code">Product Name: ${cart[item].name}</p> 
       <p class="g-price">Product Price:</p>
       <p class="g-price"  id="price_${cart[item].quantity}"> ${cart[item].price}</p>
       <p class="g-price" >Quantity:</p>
        <p class="g-price" id="amount_${cart[item].quantity}">${cart[item].quantity}</p>
        <button class="btn-danger"  onclick="remove(document.getElementById('price_${cart[item].quantity}').innerHTML,document.getElementById('amount_${cart[item].quantity}').innerHTML)" id="button-removes">Remove</button>
      </div>
    </li>
    <br/>
  `;
      $(".cart-item").append(element);
    } 
  }
  else
  {
    $(".cart-items").remove();
      for (item in cart) {
        element = `
        <li class="cart-items">
        <div class="cart-item-dets">
         <p class="cart-item-code">Product Name: ${cart[item].name}</p> 
         <p class="g-price">Product Price:</p>
         <p class="g-price"  id="price_${cart[item].quantity}"> ${cart[item].price}</p>
         <p class="g-price" >Quantity:</p>
          <p class="g-price" id="amount_${cart[item].quantity}">${cart[item].quantity}</p>
          <button class="btn-danger"  onclick="remove(document.getElementById('price_${cart[item].quantity}').innerHTML,document.getElementById('amount_${cart[item].quantity}').innerHTML)" id="button-removes">Remove</button>
        </div>
      </li>
      <br/>
    `;
        $(".cart-item").append(element);
      }
  }
  for (item in cart) {
    totalsum = totalsum + cart[item].price * cart[item].quantity;
    console.log(cart[item].price);
    console.log(cart[item].quantity);
  }
  document.getElementById("total").innerHTML = totalsum;

}
// Removing Items
function remove(Price,Amount) {
  $(".cart-item").on("click", "#button-removes", function (e) {
    if (confirm("Are you sure want to delete this record!")) {
      $(this).closest("li").remove();
      var sum = document.getElementById("total").innerHTML;
      console.log(sum);
      var amount = parseFloat(Amount) ;
      console.log(amount);
      var price = parseFloat(Price);
      console.log(price);
      sum = sum - (amount* price);
      console.log(sum);
    } else {
      e.preventDefault();
    }
  });
}

// Loading Products details after loading page
window.addEventListener("load", (event) => {
  load();
});
// JSON Product List
var product = [
  {
    productcode: "01",
    Name: "Mouse Pad",
    price: "2000 taka",
    image: "pad.jpg",
  },
  {
    productcode: "02",
    Name: "SSD Card",
    price: "3000 taka",
    image: "ssd.jpg",
  },
  {
    productcode: "03",
    Name: "Mouse",
    price: "1000 taka",
    image: "mouse.jpg",
  },
  {
    productcode: "04",
    Name: "RGB Mouse Pad",
    price: "3000 taka",
    image: "rgb.jpg",
  },
  {
    productcode: "05",
    Name: "Srip Light",
    price: "500 taka",
    image: "strip.jpg",
  },
  {
    productcode: "06",
    Name: "Sound Bar",
    price: "1000 taka",
    image: "sound.jpg",
  },
  {
    productcode: "07",
    Name: "Bag",
    price: "1000 taka",
    image: "Bag.png",
  },
];
