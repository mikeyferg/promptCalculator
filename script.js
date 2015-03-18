window.onload = function() {

	var name = prompt("What is your name?");
	var baseCost = prompt(name + ", how much is your meal?");
	var taxRate = prompt("What is the tax rate?");
	var tipPercent = prompt("What percent would you like to tip?");

	var totalBill = +baseCost + (+baseCost* +taxRate) + (+baseCost * +tipPercent);
	alert("The total bill is $" + totalBill + ".  " + "The base cost is $" + +baseCost+ ".  " + "The tax is $" + (+baseCost* +taxRate)+ ".  " + "The tip amount is $" + (+baseCost * +tipPercent) +".");
	console.log(baseCost, taxRate, tipPercent, totalBill);

}