if(document,readystate == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    // 
}

function updatetotal(){
    var pictures = document.getElementsByClassName("pictures")[0];
    var gallery = pictures.getElementsByClassName("gellery");
    var total = 0;
    for (var i = 0; i < gallery.length; i++) {
        var gallery = gallery[i];
        var price = gallery.getElementsByClassName("cart-price")[0];
        var quantityElement = gallery.getElementsByClassName('cart-quantity')[0];
        var quantity = quantityElement.value
        total=total + price * quantity;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}