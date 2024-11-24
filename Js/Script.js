// typing
var typed = new Typed(".typing", {
    strings: ["Front-End Developer !", "Back-End Developer !", "Full-Stack Developer !", "Freelancer !"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
// aside
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavlist = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavlist; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-action");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection(){
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

// contact
function updateNav(element) {
    for (let i = 0; i < totalNavlist; i++) {
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navlist[i].querySelector("a").classList.add("active");

        }
    }
}

const contactmove = document.querySelector("#hire-me");
contactmove.addEventListener("click", () => {
    const sectionIndex = contactmove.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(contactmove);
    updateNav(contactmove);
    removeBackSection();
    addBackSection(sectionIndex);
})

// nav
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
// protfolio filtration
const filtrButtons = document.querySelectorAll(".portfolio_heading button");
const filterimg = document.querySelectorAll(".card .portfolio_item");
const cards=e=>{
    document.querySelector("button.active").classList.remove("active");
    e.target.classList.add("active");
    filterimg.forEach(card=>{
card.classList.add("hided");
if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="all"){
    card.classList.remove("hided");
}
    });
};




filtrButtons.forEach(button=> button.addEventListener("click",cards));