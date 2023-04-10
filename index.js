let acc_balance = document.getElementById('acc-balance');
let input = document.getElementById('input-box');
let prevBalance =0;

document
    .getElementsByClassName("Withdrawl-btn")
    .addEventListener('click', handleWithdrawalTransactions);

function setInitialBalance(){
    let url = "http://localhost:3000/transaction-history";
    fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((data) =>{
        acc_balance.innerText = `Balance: ${data.amount} Sh`;
        prevBalance = data.amount;
    });
}





























body: data,
headers: {
    "content-Type" : "application/json",
},
})
    .then((response)=>response.json())
    .then((data)=> {
        console.log(data);
        input.value = "";
        updateBalance(parseInt(prevBalance)+parseInt(amount));
        alert(`Amount Deposited`);
    });
}

function handleWithdrawalTransactions(){
    let amount = input.value;
    let d = new Date(Date.now());
}
























































data = JSON.stringify(data);

let url = "http://localhost:3000/transaction-history";
fetch(url, {
    method: "PUT",
    body: data,
    header:{
        "content-Type": "applicatioj/json",
    },
})
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
        setInitialBalance();
    })





