const clock = document.getElementById('clock')
const amPm =  document.getElementById('amPm')

setInterval(updateClock, 1000)

function updateClock() {
    const now = new Date()
    console.log(now);

    const hours = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    // console.log(hours + " " + min + " " + sec)
    
    let displayHrs = hours
    let period = 'AM'
    if(hours >= 12){
        period = 'PM'
        if(hours > 12){
             displayHrs = hours - 12
        }
    }

    const hrsStr = String(displayHrs).padStart(2,'0')
    const minStr = String(min).padStart(2,'0')
    const secStr = String(sec).padStart(2,'0')

    const time = `${hrsStr}: ${minStr} : ${secStr}`

    clock.innerHTML = time
}
