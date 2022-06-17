const d = new Date();
document.getElementById("today").innerHTML = d.toDateString();

function addItem(){    
    $(".item").each(function(){
        if ($("#input option:selected").val()==$(this).val()){
            $(this).parent().show();
        }
    })
}

function removeItem(){
    var itemList = "";
    $(".item:checked").each(function(){
        itemList += $(this).val() + ', ';
    });
    itemList = itemList.substring(0,itemList.length-1);
    $("#completed").val(itemList);
    $(this).parent().hide();
}

$(function(){
    $("#add").on('click', addItem);
    $(".item").on('click', removeItem);

    $("")
});