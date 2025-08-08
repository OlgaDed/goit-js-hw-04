function isEnoughCapacity(products, containerSize) {
  const totalQuantity = Object.values(products).reduce(
    (sum, amount) => sum + amount,
    0
  );
  return totalQuantity <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // повертає true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // повертає false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // повертає true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // повертає false
