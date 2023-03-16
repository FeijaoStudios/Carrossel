const carouselButtons = document.querySelectorAll(".button");
const carouselImages = document.querySelectorAll(".image");

carouselButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const buttonSelected = document.querySelector(".select");
        buttonSelected.classList.remove("select");
        button.classList.add("select");

        const imageActive = document.querySelector(".active");
        imageActive.classList.remove("active");
        carouselImages[index].classList.add("active");
    });
});
