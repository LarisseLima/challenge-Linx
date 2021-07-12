// Função de Get de acesso a API
function userGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

// função que cria os elementos HTML com os dados retornados pela API
function newline(product) {
  console.log(product);
  line = document.createElement("td");
  Name = document.createElement("h5");
  IImage = document.createElement("img");
  btn = document.createElement("button");
  Description = document.createElement("p");
  OldPrice = document.createElement("h6");
  Price = document.createElement("h4");
  share = document.createElement("h6");

  Name.innerHTML = product.name;
  IImage.setAttribute("src", "http:" + product.image);
  Description.innerHTML = product.description;
  OldPrice.innerHTML = "De: R$ " + product.oldPrice;
  Price.innerHTML = "Por: R$ " + product.price;
  btn.innerHTML = "Comprar";
  share.innerHTML = "ou 2x de R$ " + product.price / 2;

  line.appendChild(IImage);
  line.appendChild(Name);
  line.appendChild(Description);
  line.appendChild(OldPrice);
  line.appendChild(Price);
  line.appendChild(share);
  line.appendChild(btn);

  return line;
}

function main() {
  let data = userGet(
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products"
  );
  let content = JSON.parse(data);
  let products = content["products"];
  let section = document.getElementById("products");
  products.forEach((element) => {
    let line = newline(element);
    section.appendChild(line);
  });
}

main();
