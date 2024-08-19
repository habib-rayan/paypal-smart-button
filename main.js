

$(document).ready(function(){
    $('.pay_amount').on('keyup',function(){
        var amount = $(this).val();
        $('.amount').val(amount);
    })
})

function paypButton() {
    var amt = document.getElementById("amount").value;
    paypal.Buttons({
        createOrder: function(data, actions) {
        var amt = document.getElementById("amount").value;
        // Set up the transaction
        return actions.order.create({
            purchase_units: [{
                amount: {
                value: amt
                }
            }]
        });
        }
    }).render('#paypal-button-container')
}

paypButton()
   
  



