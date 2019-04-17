const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
    if (window.scrollY < 100) {
        audrey.style.height = 100
        audrey.style.width = 100
    } else {
        if (window.scrollY >= 100) {
            audrey.style.width = (window.scrollY) / 3 + "px"
            audrey.style.height = (window.scrollY) / 4 + "px"
        }
        console.log(event)
    }
})