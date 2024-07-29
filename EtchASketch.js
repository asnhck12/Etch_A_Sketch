const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const div1 = document.querySelectorAll(".grid");
var size = 16;

makeGrid(size);

resetButton.addEventListener("click", () => {
    reset();
});

function makeGrid() {
    for (let rows = 0;rows < size*size; rows++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.width = (960/size + "px");
        div.style.height = (960/size + "px");
        container.append(div);
        
    };
    document.querySelectorAll(".grid").forEach((cell) => {
            cell.addEventListener("mouseover", () => {
                cell.classList.add("colouredGrid");
            });
        });
};

function reset() {
    div1.forEach((div1) => {
        div1.classList.remove("colouredGrid");
    });
    container.innerHTML = "";
    size = prompt("Grid Size:");
    if (size > 64) {size= 64};
    makeGrid();
};
