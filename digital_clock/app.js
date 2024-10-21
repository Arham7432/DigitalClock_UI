// ao bachhon clock banaen ⏰.

setInterval(() => {
    var d = new Date()
    var hrs = d.getHours()
    var mints = d.getMinutes()
    var secs = d.getSeconds()
    var ampm;

    if (hrs >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }


    hrs = hrs % 12;

    if (hrs === 0) {
        hrs = 12;
    }



    if (mints < 10) {
        mints = "0" + mints
    }
    if (secs < 10) {
        secs = "0" + secs
    }
    if (hrs < 10) {
        hrs = "0" + hrs
    }

    // Pyara DOM 🍴.
    time.innerHTML = `${hrs}:${mints}:${secs} <span class="ampm">${ampm}</span>`
}, 1000)
