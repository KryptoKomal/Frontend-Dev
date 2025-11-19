function calculateEstimate() {
  let orderAmount = Number(document.getElementById("orderAmount").value);
  let isPremium = document.getElementById("isPremium").checked;
  let isRemote = document.getElementById("isRemote").checked;

  if (isNaN(orderAmount) || orderAmount <= 0) {
    document.getElementById("result").innerHTML = "Please enter a valid order amount.";
    return;
  }

  let deliveryFee = 0;
  let deliveryDays = 3;

 
  if (orderAmount < 500 && !isPremium) {
    deliveryFee = 50;
  }

 
  if (isPremium) {
    deliveryFee = 0;
  }


  if (isRemote) {
    deliveryDays += 2;
  }

  let totalCost = orderAmount + deliveryFee;

  document.getElementById("result").innerHTML =
    "Total Cost: ₹" + totalCost + "<br>Estimated Delivery Time: " + deliveryDays + " days";
}
