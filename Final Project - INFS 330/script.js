var $tblrows = $("#table tr:gt(0)");
$tblrows.each(function () {
    var $tblrow = $(this);
    $tblrow.find('.qty').on('change', function () {
 
        var qty = $tblrow.find("[name=qty]").val();
        var unitPrice = $tblrow.find("[name=price]").val();
        var subTotal = parseInt(qty,10) * parseFloat(unitPrice);

        if (!isNaN(subTotal)) {
 
            $tblrow.find('.subtot').val(subTotal.toFixed(2));
            var Total = 0;
         
            $(".subtot").each(function () {
                var stval = parseFloat($(this).val());
                Total += isNaN(stval) ? 0 : stval;
            });
         
            $('.tot').val(Total.toFixed(2));
        }
    });

});


$("#shippingMthd").on('change',function(){
    var shipPrice = $("#shippingMthd option:selected").val();
    $("#shipping").val(shipPrice);
    var date = new Date();
    if (shipPrice>10){
        date.setDate(date.getDate() + 1);
        document.getElementById("OrderInfo").innerHTML = "Your order will arrive tomorrow, " + date.toDateString()
    }
    else if(shipPrice==7.95)
    {
        var btwn3 = new Date();
        var btwn4 = new Date()
        btwn3.setDate(btwn3.getDate() + 2);
        btwn4.setDate(btwn4.getDate() + 5);
        document.getElementById("OrderInfo").innerHTML = ("Your order will arrive between " + btwn3.toDateString() + " and " + btwn4.toDateString())
    }
    else if(shipPrice==3.95){
        var btwn1 = new Date();
        var btwn2 = new Date()
        btwn1.setDate(btwn1.getDate() + 7);
        btwn2.setDate(btwn2.getDate() + 9);
        document.getElementById("OrderInfo").innerHTML = ("Your order will arrive between " + btwn1.toDateString() + " and " + btwn2.toDateString())

    }
    
});

$("#totalOrder").on('click', function(){
    var shipPrice = parseFloat($("#shipping").val());
    var total = parseFloat($('.tot').val());
    var grandTotal =  shipPrice + total;
    
    $("#grandTotal").val(grandTotal);
});

$(":radio[name='billAddr']").change(function() {
    var sameAddr = $(":radio[name='billAddr']:checked").val();
    var sName = $('#sName').val();
    var sAddr1 = $('#sAddr1').val();
    var sAddr2 = $('#sAddr2').val();
    var sCity = $('#sCity').val();
    var sState = $('#sState').val();
    var sZip = $('#sZip').val();
    var sState = $('#sState').val();
    var sZip = $('#sZip').val();
    if(sameAddr == "Y"){
        $(".billInfo").attr('disabled', false);
        $(".billInfo").attr('readonly', true);
        $('#bName').val(sName);
        $('#bAddr1').val(sAddr1);
        $('#bAddr1').val(sAddr1);
        $('#bAddr2').val(sAddr2);
        $('#bCity').val(sCity);
        $('#bState').val(sState);
        $('#bZip').val(sZip);

    }
    else {
        $(".billInfo").attr('disabled', false);
        $('#bName').val("");
        $('#bAddr1').val("");
        $('#bAddr1').val("");
        $('#bAddr2').val("");
        $('#bCity').val("");
        $('#bState').val("");
        $('#bZip').val("");

    }


});


