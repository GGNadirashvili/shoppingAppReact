const productsArray = [
  {
    id: "price_1MlEgvEaMxaybGyDrT4IfpRk",
    title: "coffe",
    price: 4.99,
  },
  {
    id: "price_1MlEi9EaMxaybGyDTL0oP4MG",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1MlEiYEaMxaybGyDgzwMYxuI",
    title: "Camera",
    price: 199.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData == undefined) {
    console.log("Product Data Does not exist for ID:" + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
