



 const container = document.querySelector(".container");
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

// click event 

color.addEventListener("click", () => copyColor(color, randomHex));


container.appendChild(color); 
} }

let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    



color.addEventListener("click", () => copyColor(color, randomHex));















    















