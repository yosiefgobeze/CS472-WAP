/**
 * bank.js
 * @author Yosief Brhane Gobeze
 */

 "use strict";

$(document).ready(function(){
    $("#bankApp").submit(
    function(event){
    event.preventDefault();
    const accountNumber =$("#accountNo").val();
    const customerName = $("#customerName").val();
    const accountType= $("#accountType").val();

    const resultDiv = $("#divResult");
    $("#result").append(`<li class="list-group-item">   ${accountNumber}  |  ${customerName}  |  ${accountType}</li>`);
    resultDiv.css("display","block");
    }
    );
    $("#accountNo").keyup(function(e){
        var res = $("#accountNo").val();
        if (e.key.match(/[0-9]/) === null) {
            res = res.replace(e.key, "");
            $("#accountNo").val(res);
            return;
        }
        if (res.length == 2) {
            $("#accountNo").val(res + "-")
        }

        if (res.length == 6) {
            $("#accountNo").val(res + "-")
        }
    });
});