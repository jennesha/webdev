
function convert(){
    var from = document.getElementById('unitFrom').value;
    var amount = document.getElementById('amount').value;
    var to = document.getElementById('unitTo').value;
    var unitTo = document.getElementById('unitTo');
    var unitTo_text = unitTo.options[unitTo.selectedIndex].text;
    
    // validate input
    if (amount === "" || from == 0 || to == 0) {
        alert("Please enter values");
        return;
    }

    // Calculate result
    var result = amount * from * to ;


    //Display result
    document.getElementById("result").style.display = "block";
    document.getElementById("amountDisp").innerHTML = result.toFixed(2);
    document.getElementById("unitDisp").innerHTML = unitTo_text; 
}

document.getElementById("result").style.display = "none";


