const amountInput = document.querySelector('.input-container input');
const tipAmount = document.querySelector('.tip-container');
const customTip = document.querySelector('.tip-btn');
const totalPeople = document.querySelector('.people-btn');
const generateBtn = document.querySelector('.bill-btn');
const generatedTip = document.querySelector('.tip-div span');
const generatedTotal = document.querySelector('.total-div span');
const generatedBill = document.querySelector('.person-bill-div span');
const reset = document.querySelector('.sub-container-2 button');


amountInput.addEventListener('input', ()=>{
    if(!amountInput.value){
        [...tipAmount.children].forEach((btn)=>{
            btn.disabled = true
            btn.classList.remove('outline');
        })
        customTip.disabled = true
        totalPeople.disabled = true
        generateBtn.disabled = true
    }else{
        [...tipAmount.children].forEach((btn)=>{
            btn.disabled = false
        })
        customTip.disabled = false
        totalPeople.disabled = false
        generateBtn.disabled = false
    }
})

generateBtn.addEventListener('click', ()=>{
        const billAmount = parseInt(amountInput.value);
    const noOfPeople = parseInt(totalPeople.value);
    const tippedAmount = billAmount*customTip.value/100;
    generatedTip.innerText = `₹${parseInt(tippedAmount)}`
    const totalWithTip = parseInt(tippedAmount+billAmount);
    generatedTotal.innerText = `₹${totalWithTip}`;
    generatedBill.innerText = `₹${totalWithTip/noOfPeople}`;
    [...tipAmount.children].forEach((btn)=>{
        btn.disabled = true
        btn.classList.remove('outline')
    })
    customTip.disabled = true
    totalPeople.disabled = true
    generateBtn.disabled = true
    generateBtn.disabled = true
    reset.disabled = false
    amountInput.disabled = true
    amountInput.value = null
})

tipAmount.addEventListener('click', (e)=>{
    [...tipAmount.children].forEach((span)=>{
        span.classList.remove('outline')
    })
    const targetedSpan = e.target
    targetedSpan.classList.add('outline')
    customTip.value = parseInt(targetedSpan.innerText)  
})
customTip.addEventListener('input', ()=>{
    [...tipAmount.children].forEach((span)=>{
        span.classList.remove('outline')
    })
})  

reset.addEventListener('click', ()=>{
    [...tipAmount.children].forEach((btn)=>{
        btn.disabled = false
    })
    customTip.value= null
    customTip.disabled = false
    totalPeople.disabled = false
    generateBtn.disabled = false
    generateBtn.disabled = false
    reset.disabled = true
    amountInput.disabled = false
    generatedTip.innerText = '--'
    generatedTotal.innerText = '--'
    generatedBill.innerText = '--'
})