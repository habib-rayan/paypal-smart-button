

$(document).ready(function(){
    $('.pay_amount').on('keyup',function(){
        var amount = $(this).val();
        $('.amount').val(amount);
        $('.payable_amount').text(amount);
    })

    $('.default-amount').on('click',function(){
        var amount = $(this).data('amount');
        $(this).addClass('active').siblings().removeClass('active');
        $('.amount').val(amount);
        $('.payable_amount').text(amount);
    })
})

function paypButton() {
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
   
  



