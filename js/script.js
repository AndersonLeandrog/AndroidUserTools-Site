
function load() {
    var arrow = document.querySelector(".arrow");
        arrow.addEventListener("click", expandirPagina);
        arrow.addEventListener("dblclick", recolherPagina);

    var btnMore = document.querySelectorAll("button");
        btnMore[3].setAttribute("style", "width: 50px; height: 50px; border-radius: 50%; color: white; background: crimson;");
}

function expandirPagina() {
    document.querySelector(".expand-Box").style.display="flex";
    document.querySelector(".arrow").style.animation="rotateSet 0.35s ease 1 both";
}

function recolherPagina() {
    document.querySelector(".expand-Box").style.display="none";
    document.querySelector(".arrow").style.animation="rotatenSet 0.35s ease 1 both";


}

window.addEventListener("load", load);