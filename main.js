

const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

refreshBtn.addEventListener("click", generatePalette);
        
        // the container
        const color = document.createElement("li");
        
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
      
      const generatePalette = () => {
    container.innerHTML = ""; //  the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
      
      
        // hex code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
      
        //copy color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}




generatePalette();

const copyColor = (elem, hexVal) =>


setTimeout(() => colorElement.innerText = hexVal, 1000);
    });




 




    














