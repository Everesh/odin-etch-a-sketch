const canvas = document.querySelector("#canvas");
for (let x = 0; x < 50 * 50; x++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
        pixel.classList.add("colored");
    });
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach( function(pixel) {
        pixel.classList.remove("colored");
    });
});