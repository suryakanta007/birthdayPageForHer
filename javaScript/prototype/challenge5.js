// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.items = []
}
// Define addItem method on ShoppingCart's prototype


ShoppingCart.prototype.addItem = function(price){
    this.items.push(price)
}
// Define getTotalPrice method on ShoppingCart's prototype

ShoppingCart.prototype.getTotalPrice = function(){
  return this.items.reduce((acc,item)=>acc+item,0);
}

