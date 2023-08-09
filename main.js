




 container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
refreshBtn.addEventListener("click", generatePalette);

const maxPaletteBoxes = 32;


const generatePalette = () => {
    container.innerHTML = ""; 
    
    // clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++)
    {
        
    
    const color = document.createElement("li");
    
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}">

    </div> <span class="hex-value">${randomHex}</span>`;



    }
}
   
color.addEventListener("click", () => copyColor(color, randomHex));

container.appendChild(color); 
} }

generatePalette();





