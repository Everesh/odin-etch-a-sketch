const canvas = document.querySelector("#canvas");
for (let x = 0; x < 50 * 50; x++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
        pixel.classList.add("colored");
    });
}