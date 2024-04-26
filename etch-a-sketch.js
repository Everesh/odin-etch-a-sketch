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

const newSize = document.querySelector("#newSize");
const resize = document.querySelector(".resize");
resize.addEventListener("click", () => {
    let input = parseInt(newSize.value.trim());
    if (typeof(input) != "number" || isNaN(input)) {
        alert("Invalid input!");
    }
    else if (input > 100 || input < 1) {
        alert("Whoa there buddy. Keep it 0-100!")
    }
    else {
        generateCanvas(input);
    }
});