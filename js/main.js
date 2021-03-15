document.querySelector('.fa-bars').addEventListener('click', openSideBar)
document.querySelector('.closebtn').addEventListener('click', closeSideBar)
function openSideBar(){
    document.getElementById("sidebar").style.width = "320px"
}

function closeSideBar(){
    document.getElementById("sidebar").style.width = "0"
}