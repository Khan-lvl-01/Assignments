function orderSandwich(items: string[]): void {
    console.log("Sandwich Order:");
    console.log("Bread: " + items[0]);
  
    if (items.length > 1) {
      console.log("Ingredients: " + items.slice(1).join(", "));
    } else {
      console.log("No additional ingredients.");
    }
  
    console.log("Enjoy your sandwich!");
    console.log("----------------------");
  }
  
  // Calling the orderSandwich() function with different number of arguments
  orderSandwich(["White Bread", "Turkey", "Lettuce", "Tomato"]);
  orderSandwich(["Whole Wheat Bread", "Fried Chicken", "Cheese"]);
  orderSandwich(["Butter Bread"]);