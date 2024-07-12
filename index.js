let userGridSize = 2;
let divs = new Array(userGridSize*userGridSize); //array of divs to add to grid

const containor = document.querySelector("main");
const grid = document.createElement("grid");

const newGridSize = document.createElement("button");
newGridSize.textContent = "New Grid Size";
newGridSize.addEventListener("mousedown", () => {
    userGridSize = prompt("Enter a number for the size of the grid.");
    //remove old grid
    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
    newGridSize.remove();
    //create new divs
    divs = new Array(userGridSize*userGridSize);
    for (let i = 0; i < divs.length; i++) {
        divs[i] = document.createElement("div");
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.background = "blue";
        })
        divs[i].style.flex = (" 1 1 " + ((1/userGridSize)*100)) + "%";
    }
    //append new nodes
    for (let i = 0; i < divs.length; i++) {
        grid.appendChild(divs[i]);
    }
    containor.appendChild(grid);
    containor.appendChild(newGridSize);
});


for (let i = 0; i < divs.length; i++) {
    divs[i] = document.createElement("div");
    divs[i].addEventListener("mouseover", () => {
        divs[i].style.background = "blue";
    })
    divs[i].style.flex = (" 1 1 " + ((1/userGridSize)*100)) + "%";
}
//append nodes ------------------------------
for (let i = 0; i < divs.length; i++) {
    grid.appendChild(divs[i]);
}
containor.appendChild(grid);
containor.appendChild(newGridSize);