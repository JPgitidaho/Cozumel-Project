function convertCurrency() {
    var currency = document.getElementById("currency-selector").value;
    var currencySymbol = "";

    switch(currency) {
        case "eur":
            currencySymbol = "€";
            break;
        case "gbp":
            currencySymbol = "£";
            break;
        default:
            currencySymbol = "$"; 
    }

    var prices = document.querySelectorAll(".price");

    prices.forEach(function(price) {
        var usdValue = parseFloat(price.getAttribute("data-usd")); 
        var convertedValue;

        switch(currency) {
            case "eur":
                convertedValue = usdValue * 0.85;                 
                break;
            case "gbp":
                convertedValue = usdValue * 0.75; 
                break;
            case "usd":
                convertedValue = originalUSDValue;
                break;
            default:
                convertedValue = usdValue;
        }

        var convertedText = currencySymbol + convertedValue.toFixed(2); 
        price.textContent = convertedText;
    });
}




