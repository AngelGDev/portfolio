document.querySelector('.fa-bars').addEventListener('click', openSideBar)
document.querySelector('.closebtn').addEventListener('click', closeSideBar)
function openSideBar(){
    document.getElementById("sidebar").style.width = "250px"
}

function closeSideBar(){
    document.getElementById("sidebar").style.width = "0"
}

// reference notes will add scott alan project, email form