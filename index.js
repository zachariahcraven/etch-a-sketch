
const containor = document.querySelector("main");
const grid = document.createElement("grid");

let arr = new Array(256);
for (let i = 0; i < arr.length; i++) {
    arr[i] = document.createElement("div");
    arr[i].addEventListener("mouseover", () => {
        arr[i].style.background = "blue";
    })
}

//append nodes ------------------------------
for (let i = 0; i < arr.length; i++) {
    grid.appendChild(arr[i]);
}
containor.appendChild(grid);


