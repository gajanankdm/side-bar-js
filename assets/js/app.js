const cl = console.log;
const sideBarToggle = document.getElementById("sideBarToggle");
const sidebar = document.getElementById("sidebar");
const sideBarHide = document.querySelector("#sideBarHide i");



const showSideBar = () =>{
    sidebar.classList.add('active')
}
const hideSideBar = () => {
    sidebar.classList.remove('active')
}

sideBarToggle.addEventListener('click',showSideBar)
sideBarHide.addEventListener("click",hideSideBar)
