const body = document.body;
const mainBtn = document.getElementsByTagName("button")[0];
const pageTitle = document.querySelector("#page-title");
const footer = document.getElementsByTagName("footer")[0];
const darkMode = "dark-mode"


function changeColors() {
    body.classList.toggle(darkMode);
    pageTitle.classList.toggle(darkMode);  
    mainBtn.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
}

function changeText() {
    if(body.classList.contains(darkMode)) {
        pageTitle.innerHTML= "Dark Mode";
        mainBtn.innerHTML= "Set Light Mode";
        return;
    }
    //return to light mode if clicked again
    
    pageTitle.innerHTML= "Light Mode";
    mainBtn.innerHTML= "Set Dark Mode";
}
mainBtn.addEventListener("click", ()=> {
    changeColors();
    changeText();
})