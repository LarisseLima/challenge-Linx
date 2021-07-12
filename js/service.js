const doGet = (url) => {
  const promiseCallback = (resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "Erro ao executar requisição, status " + response.status
          );
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  };
  return new Promise(promiseCallback);
};

doGet("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products")
  .then(console.log)
  .catch(console.error);

function newline(product) {
  console.log(product);
  line = document.createElement("tr");
  tdName = document.createElement("h5");
  tdImage = document.createElement("img");
  tdDescription = document.createElement("p");
  tdOldPrice = document.createElement("h5");
  tdPrice = document.createElement("h4");

  tdName.innerHTML = product.name;
  tdImage.innerHTML = product.image;
  tdDescription.innerHTML = product.description;
  tdOldPrice.innerHTML = product.oldPrice;
  tdPrice.innerHTML = product.price;

  line.appendChild(tdImage);
  line.appendChild(tdName);
  line.appendChild(tdDescription);
  line.appendChild(tdOldPrice);
  line.appendChild(tdPrice);

  return line;
}

function main() {
  let data = doGet();
  let content = JSON.parse(data);
  let products = content["products"];
  let div = document.getElementById("prod");
  products.forEach((element) => {
    let line = newline(element);
    div.appendChild(line);
  });
  // para cada produto
  // criar uma linha e adicionar na tabela
}
