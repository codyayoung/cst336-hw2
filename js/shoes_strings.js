// Variables
var prices = {'jordanPrice': '169.99', 'boostPrice': '199.99'}
var tax = 0.0875;
var taxAmount = 0.00;
var subtotal = 0.00;
var finalCost = 0.00;

//Functions
// Calculates the cost of each pair of Jordan 1s
function calcJordan(numJ) {
    var jCost;
    jCost = numJ * prices.jordanPrice;
    totalJordanCost = jCost.toFixed(2);
    
    return totalJordanCost;
}

// Calculates the cost of each pair of Ultraboosts
function calcBoost(numUB) {
    var ubCost;
    ubCost = numUB * prices.boostPrice;
    totalUBCost = ubCost.toFixed(2);

    return totalUBCost;
}

// Calculates subtotal based on quantities
function calcSubTotal(jAmount, ubAmount) {
    //Total cost of Jordan 1s and Ultraboosts 
    subtotal = parseFloat(calcJordan(jAmount)) + parseFloat(calcBoost(ubAmount));

    document.getElementById("subtotal").innerHTML = "subtotal: $" + subtotal;
}

// Calculates tax
function calcTax () {
    taxAmount = tax * subtotal;
    taxAmount = parseFloat(taxAmount);
    taxAmount = taxAmount.toFixed(2);

    document.getElementById("tax").innerHTML = "tax (CA): $" + taxAmount;
}

// Returns final total - subtotal + tax 
function calcFinal(subCost) {
    finalCost = parseInt(finalCost);
    finalCost = parseFloat( (tax * subCost) + subCost);
    finalCost = finalCost.toFixed(2);
    document.getElementById("total").innerHTML = "total: $" + finalCost;
}

// Updates subtotal, taxes, and final total values
function updateCartValues() {
     // Get user input values from text fields
     var jQty = document.getElementById("jordanNum").value;
     var ubQty = document.getElementById("boostNum").value;
 
     calcSubTotal(jQty, ubQty);
     calcTax(taxAmount);
     calcFinal(subtotal);
     console.log("Update cart command received.");
}

// jQuery Handlers
// Shows checkout confirmation message
// Updates all values on button press
$(".updateCart").on("click", function(){
    updateCartValues();
});

// Remove buttons behavior - resets quantity to 0, updates cart on button press
$(".removeJordan").on("click", function(){
});

$(".removeBoost").on("click", function(){
});
