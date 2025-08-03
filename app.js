
$(document).ready(function () {
    // switchcheck
    if (localStorage.them == 'dark') {
        $('#SwitchCheck').attr('checked')
        $('html').addClass('dark')

    } else {
        $('html').removeClass('dark')
        $('#SwitchCheck').removeAttr('checked')
    }

    $('#SwitchCheck').on('click', function () {

        if (localStorage.them == 'light') {
            $('html').addClass('dark')
            localStorage.setItem('them', 'dark')
        } else {
            $('html').removeClass('dark')
            localStorage.setItem('them', 'light')
        }
    })

    // ityped
    const textElement = document.querySelector('#text')

    ityped.init(textElement, { strings: [' متن ساختگی با تولید', 'متن ساختگی ...', '  متن ساختگی با تولید سادگی'] });


    // counter
    function settime(){
    const nowTime = new Date().getTime()
    const endTime = new Date(2025, 12, 15).getTime()
    let time = endTime - nowTime

    if (time >= 0) {

        days = Math.floor(time / (24 * 60 * 60 * 1000))
        hours = (Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))) <10  ? "0" + Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)):Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        minutes = (Math.floor((time % (60 * 60 * 1000)) / (1000 * 60))) <10 ? "0" + Math.floor((time % (60 * 60 * 1000)) / (1000 * 60)) : Math.floor((time % (60 * 60 * 1000)) / (1000 * 60))
        seconds = (Math.floor((time % (1000 * 60)) / 1000)) < 10 ? "0" + Math.floor((time % (1000 * 60)) / 1000) : Math.floor((time % (1000 * 60)) / 1000)
}
    $("h5.days").text(days)
    $("h5.hours").html(hours)
    $("h5.minutes").html(minutes)
    $("h5.seconds").html(seconds)
    }
    window.setInterval(settime,1000)
})

