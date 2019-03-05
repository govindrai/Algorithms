function productOfOtherNumbers(arr) {
  const products = [1];
  let productSoFar = 1;
  for (let i = 1; i < arr.length; i++) {
    // get the products of everything to the left
    productSoFar *= arr[i-1]
    products.push(productSoFar);
  }
  console.log("products1", products)
  productSoFar = 1
  for (let i = arr.length - 2; i > -1; i--) {
    // get the products of everything to the right
    productSoFar *= arr[i+1]
    products[i] *= productSoFar;
  }
  console.log(products);
  return products;
}

productOfOtherNumbers([3, 1, 2, 5, 6, 4]);