const amount = document.getElementById("amount");
const amount2 = document.getElementById("amount2");
const bonus = document.getElementById("bonus");
const address = document.getElementById("address");
const generate = document.getElementById("generate");
const paymentDiv = document.getElementById("paymentDiv");
const roll = document.getElementById("roll");


amount.addEventListener("input", evt => {
    bonus.value = evt.target.value * 2;
    amount2.value = evt.target.value;
    paymentDiv.style.display = "none";
    generate.style.display = "block";

});

bonus.addEventListener("input", evt => {
    amount.value = evt.target.value / 2;
    amount2.value = evt.target.value / 2;
    paymentDiv.style.display = "none";
    generate.style.display = "block";
});

generate.addEventListener("click", evt => {
    amount.style.border = "none";
    address.style.border = "none";
    if(!amount.value || !bonus.value){
        alert("Please enter amount!");
        amount.style.border = "1px solid red";
        return false;
    }
    if(amount.value < 1200){
        alert("Deposit a minimum of 1,200 waves");
        amount.style.border = "1px solid red";
        return false;
    }
    if(!address.value || address.value.length < 35){
        alert("Please enter a valid waves address!");
        address.style.border = "1px solid red";
        return false;
    }
    roll.style.display = "inline-block"
    setTimeout(()=> {
        paymentDiv.style.display = "block";
        generate.style.display = "none";
        roll.style.display = "none";
    },1000);
});

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " ;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
