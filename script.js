// Where all the border styles for the flashing div are.
const borders = ["solid", "dashed", "groove", "ridge", "dotted", "double", "inset", "outset"];

// Variable to keep track of index in border array.
let borderIndex = 0;


function flashBorders () {
    document.getElementById("flashingBorderDiv").style.borderStyle = borders[borderIndex];

    borderIndex < borders.length ? borderIndex++ : borderIndex = 0;
}


// Launch border flasher
setInterval(flashBorders, 1000);
