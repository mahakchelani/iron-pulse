// ================= BMI CALCULATOR =================

function calculateBMI() {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter height and weight");
        return;
    }

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(1);

    document.getElementById("bmi-value").innerText = bmi;

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    }
    else if (bmi < 25) {
        status = "Normal Weight";
    }
    else if (bmi < 30) {
        status = "Overweight";
    }
    else {
        status = "Obese";
    }

    document.getElementById("bmi-status").innerText = status;
}


// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
