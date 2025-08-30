//Seleção de elementos

const homePageButton = document.getElementById("home-icon"); 
const homePage = document.querySelector(".sobre-mim"); 

const projectsButton = document.getElementById("projects-icon"); 
const projectsPage = document.querySelector(".projetos"); 

const contactButton = document.getElementById("contact-icon"); 
const contactPage = document.querySelector(".contact"); 

////////////////////////////

projectsButton.addEventListener("click", function(){
    homePage.classList.add("none");
    contactPage.classList.add("none");
    projectsPage.classList.remove("none");
});

homePageButton.addEventListener("click", function(){
    projectsPage.classList.add("none");
    contactPage.classList.add("none");
    homePage.classList.remove("none");
});

contactButton.addEventListener("click", function(){
    homePage.classList.add("none");
    projectsPage.classList.add("none");
    contactPage.classList.remove("none");
});
