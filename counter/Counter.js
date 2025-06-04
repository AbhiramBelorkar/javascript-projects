const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const reset = document.getElementById('reset')
const counter = document.getElementById('counter')

console.log(increment);
console.log(decrement);
console.log(reset);

let count = 0;

increment.addEventListener('click', ()=>{
    console.log("increment");
    count++
    counter.textContent = count;
})

decrement.addEventListener('click', ()=>{
    if(count > 0){
        count--
    }  
    counter.textContent = count;
    
})

reset.addEventListener('click', ()=>{
    count = 0
    counter.textContent = count;
})