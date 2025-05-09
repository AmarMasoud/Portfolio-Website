// Value
let maxImageDiv = document.querySelector(".max-image-div");
const maxImage = document.querySelector(".max-image");
const miniImage = document.querySelector(".mini-image");
const icon = document.querySelector(".icon");

let cvLinks = document.querySelectorAll(".cv-link");

const downloadBtn = document.getElementById("download");
const hireBtn = document.getElementById("hire");

const servicesDiv = document.querySelectorAll("#services-div");

const formation = document.querySelector("form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const projectLink = document.getElementById("project-link");
const message = document.getElementById("message");

//Mini Image Clicked Actions \\
let miniImageClickedNums = 0;
miniImage.addEventListener('click', () => {
    miniImageClickedNums++;
    if (miniImageClickedNums % 2 !== 0) {
        maxImageDiv.style.display = "flex";
    }
    else {
        maxImageDiv.style.display = "none";
    }
    maxImage.classList.toggle("active");
});
// Icon Clicked Actions \\
let iconClickedNums = 0;
icon.addEventListener('click', () => {
    document.querySelector(".menu-div").classList.toggle("show-menu");
    iconClickedNums++;
    if (iconClickedNums % 2 !== 0) {
        icon.src = "Assets/Icons/close-icon.png";
    }
    else {
        icon.src = "Assets/Icons/Google Menu.png";
    }
});
// Links Clicked Actions \\
for (let i = 0; i < cvLinks.length; i++) {
    cvLinks[i].addEventListener('click', (event) => {
        event.preventDefault();
    });
}

// CV Buttons Actions \\
hireBtn.addEventListener('click', () => {
    alert("The Message Got Sent To Amar Masoud!");
});

// Services Icons Clicked Action \\
for (let i = 0; i < servicesDiv.length; i++) {
    servicesDiv[i].addEventListener('click', () => {
        document.querySelector("#services > .services").classList.add("active");
        servicesDiv[i].classList.toggle("show");

        if (
            document.querySelectorAll("#services > .services > div")[0].getAttribute("class").split(" ")[1] !== "show" &&
            document.querySelectorAll("#services > .services > div")[1].getAttribute("class").split(" ")[1] !== "show" &&
            document.querySelectorAll("#services > .services > div")[2].getAttribute("class").split(" ")[1] !== "show"
        ) {
            document.querySelector("#services > .services").classList.remove("active")
        }
    });
}

// Form Send Button Action \\
formation.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(`We Got You ${nameInput.value}, And We'll Message You On ${emailInput.value}`);
    nameInput.value = '';
    emailInput.value = '';
    projectLink.value = '';
    message.value = '';
});