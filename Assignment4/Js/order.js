function setWarning(text) {
    var alertWarningHTML = "";
    alertWarningHTML += '<div class="alert alert-dismissible alert-danger">';
    alertWarningHTML +=
        '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    alertWarningHTML += '<h4 class="alert-heading">Warning!</h4>';
    alertWarningHTML += '<p class="mb-0">' + text + "</p>";
    alertWarningHTML += "</div>";

    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = alertWarningHTML;
}

function validate() {
    if (
        isNaN(document.orderForm.itemQty.value) ||
        document.orderForm.itemQty.value == "" ||
        document.orderForm.itemQty.value <= 0
    ) {
        setWarning(
            "Quantity has to be a positive number and cannot be empty either."
        );
        return true;
    } else if (parseInt(document.orderForm.itemQty.value) < 0) {
        setWarning("Quantity has to be a positive number.");
        return true;
    } else if (
        isNaN(document.orderForm.itemPrice.value) ||
        document.orderForm.itemPrice.value == "" ||
        document.orderForm.itemPrice.value <= 0
    ) {
        setWarning(
            "Price has to be a positive number and cannot be empty either."
        );
        return true;
    } else if (parseInt(document.orderForm.itemPrice.value) < 0) {
        setWarning("Price has to be a positive number.");
        return true;
    }
    return false;
}
