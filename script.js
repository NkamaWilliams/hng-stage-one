const time = document.getElementById("utc-time");
const today = document.getElementById("day-of-week");
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function updateDateTime(){
    const now = new Date()

    time.innerHTML = now.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    today.innerHTML = days[now.getDay()];
}

updateDateTime();
setInterval(updateDateTime, 1000);