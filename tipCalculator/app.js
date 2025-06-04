const tipAmount = document.getElementById('tipAmount')
const totalAmount = document.getElementById('totalAmount')

const billAmount = document.getElementById('billAmount')
const tipPercentage = document.getElementById('tipPercentage')

const form1 = document.getElementById('tipForm')

form1.addEventListener('submit', function(e) {
    console.log(e);

    e.preventDefault()

    const bill= parseFloat(billAmount.value)
    const tip = parseFloat(tipPercentage.value)

    if(!isNaN(bill) && !isNaN(tip)){
        const tipAm = bill * (tip/100)
        const total = bill + tipAm

        tipAmount.textContent = tipAm
        totalAmount.textContent = total
    }  else {
        alert('Please enter valid numbers');
    }



})