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









const cursor = document.querySelector(".circle");
let timeout;

// Show cursor and track mouse movement
document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  // Position and display cursor
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
  cursor.style.display = "block";

  // Reset timeout to hide cursor if movement stops
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cursor.style.display = "none";
  }, 1000);
});

// Hide cursor when the mouse leaves the window
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});




function Contact(){
let name= document.getElementById("Contact-name").value;
let email= document.getElementById("Email-addess").value;
let number=document.getElementById("Phone-number").value;
let subject=document.getElementById("Subject-information").value;
let message=document.getElementById("Message-write").value;
console.log("Name: "+ name +"\nEmail: "+email+" \nNumber: "+number+"\nSubject: "+subject+"\nMessage: "+message);
let send=(" Name: "+ name +"\n Email: "+email+" \n Number: "+number+"\n Subject: "+subject+"\n Message: "+message);

// window.open(`https://wa.me/7238899614?text= \*\" CONTACT INFORMATION \"\* %0D%0A %0D%0A \*Name:\*  `+name+`%0D%0A \*Email:\* `+email+`%0D%0A \*Number:\* `+number+`%0D%0A \*Subject:\* `+subject+`%0D%0A \*Message:\* `+message, );
window.open("mailto:maimunnisha.ait@gmail.com"+  "&subject=" + encodeURIComponent(subject)+ "&body=" + encodeURIComponent(send));


}