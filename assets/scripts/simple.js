var headerBlue = false
function changeHeader() {
    headerBlue = !headerBlue
    var x = document.getElementById("h2");
    if (headerBlue) {
        x.style.color = "#0074d9";
        x.innerHTML = "Surprise! I Changed the Header";
    } else {
        x.style.color = "black";
        x.innerHTML = "Surprise! I Changed back the Header";
    }
}
