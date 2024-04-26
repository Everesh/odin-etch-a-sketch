const canvas = document.querySelector("#canvas");

function generateCanvas (num) {
    canvas.textContent = "";
    for (let x = 0; x < num * num; x++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        canvas.appendChild(pixel);
        pixel.addEventListener("mouseover", () => {
            pixel.classList.add("colored");
        });
    };
    document.documentElement.style.setProperty("--pixel-size", `${64/num}em`);
};

generateCanvas(64);

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach( function(pixel) {
        pixel.classList.remove("colored");
    });
});

const invert = document.querySelector(".invert");
invert.addEventListener("click", () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach( function(pixel) {
        if (pixel.classList.contains("colored")) {
            pixel.classList.remove("colored");
        }
        else {
            pixel.classList.add("colored");
        }
    });
});