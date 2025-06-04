
const form = document.getElementById('quizForm')
const result = document.getElementById('result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const q1 = document.querySelector('input[name="q1"]:checked')
    const q2 = document.querySelector('input[name="q2"]:checked')
    const q3 = document.querySelector('input[name="q3"]:checked')
    // console.log(q1.value);

    if(q1 == null || q2 == null || q3 == null){
        alert("Please select all answers")
    }

    const answers = {
        q1 : "b",
        q2 : "b",
        q3 : "a"
    }

    let count = 0;

    if(q1.value == answers.q1)
        count++ 
    if(q2.value == answers.q2)
        count ++
    if(q3.value == answers.q3)
        count ++
    

    result.textContent = `${count}/3`

})