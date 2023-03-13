const productsArray = [
  {
    id: "1",
    title: "coffe",
    price: 4.99,
  },
  {
    id: "2",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "3",
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
