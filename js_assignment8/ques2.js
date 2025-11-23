function Product(name, price) {
    this.name = name;
    this.price = price;
}


Product.prototype.applyDiscount = function(percent) {
    const discountAmount = (this.price * percent) / 100;
    const newPrice = this.price - discountAmount;
    return newPrice;
};


const p1 = new Product("Laptop", 60000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Keyboard", 1500);


console.log("Original Price (Laptop):", p1.price, "→ After 10% Discount:", p1.applyDiscount(10));
console.log("Original Price (Headphones):", p2.price, "→ After 25% Discount:", p2.applyDiscount(25));
console.log("Original Price (Keyboard):", p3.price, "→ After 50% Discount:", p3.applyDiscount(50));

