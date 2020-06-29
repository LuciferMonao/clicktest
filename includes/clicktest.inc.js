var click = document.getElementById("click")
var average = document.getElementById("average")
var display = document.getElementById("display")
var record_el = document.getElementById("record")
var clicks = 0
var record = record_el.innerHTML
var list_his = []

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function update () {
    display.innerHTML = clicks
    if (clicks > record) {
        record = clicks
        record_el.innerHTML = record
        document.cookie = record
        console.log(document.cookie)
        setCookie("record", record, 3000)
    }
    if (clicks > 0) {
        list_his.push(clicks)

        let list_m = []
        list_his.forEach(function (element, index) {
            list_m.push(element)
        })
        average.innerHTML = Math.round(list_m.reduce((pv, cv) => pv + cv, 0) / list_his.length)
    }
}

setInterval(function () {
    update()
}, 100)





click.addEventListener("click", function (e) {
    e.preventDefault()
    clicks += 1
    setTimeout(function () {
        clicks -= 1
    }, 1000)
})