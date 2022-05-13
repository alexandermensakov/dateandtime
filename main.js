
let PageClock_Date = document.getElementById("PageClock_Date")
let PageClock_Time = document.getElementById("PageClock_Time")

PageClock_Date.innerText = moment(new Date()).format("dddd D MMMM YYYY")
PageClock_Time.innerText = moment(new Date()).format("LTS")
setInterval(
    function () {
        PageClock_Date.innerText = moment(new Date()).format("dddd D MMMM YYYY")
        PageClock_Time.innerText = moment(new Date()).format("LTS")
    },
    1000
);
