
const containor = document.querySelector("main");
const grid = document.createElement("div");
grid.style.backgroundColor = "aqua";
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.aspectRatio = "1 / 1";

const div1 = document.createElement("div");
div1.style.flex = "1 1 50%";

const div2 = document.createElement("div");
div2.style.margin = 20;
div2.style.flex = "1 1 50%";

const div3 = document.createElement("div");
div3.style.margin = 20;
div3.style.flex = "1 1 50%";

const div4 = document.createElement("div");
div4.style.margin = 20;
div4.style.flex = "1 1 50%";

//append nodes ------------------------------
grid.appendChild(div1);
grid.appendChild(div2);
grid.appendChild(div3);
grid.appendChild(div4);
containor.appendChild(grid);


